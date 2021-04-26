import React, { SyntheticEvent, Fragment } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import {
    Player, BigPlayButton, ControlBar, CurrentTimeDisplay,
    TimeDivider, PlaybackRateMenuButton, VolumeMenuButton,
} from "video-react";
import { IAssetProps } from "./assetPreview";
import { IAsset, AssetType, AssetState } from "../../../../models/applicationState";
import { AssetService } from "../../../../services/assetService";
import { CustomVideoPlayerButton } from "../../common/videoPlayer/customVideoPlayerButton";
import { CustomVideoPlayerKeyBinding } from "../../common/videoPlayer/customVideoPlayerButton";
import { strings } from "../../../../common/strings";

/**
 * VideoAsset component properties
 */
export interface IVideoAssetProps extends IAssetProps, React.Props<VideoAsset> {
    /** Whether or not the video asset should start playing automatically */
    autoPlay?: boolean;
    /** The timestamp that the video should seek to upon loading */
    timestamp?: number;
    /** The event handler that is fired when a child video frame is selected (ex. paused, seeked) */
    onChildAssetSelected?: (asset: IAsset) => void;
}

/** VideoAsset internal component state */
export interface IVideoAssetState {
    loaded: boolean;
}

/**
 * VideoPlayer internal video state
 */
export interface IVideoPlayerState {
    readyState: number;
    paused: boolean;
    seeking: boolean;
    currentTime: number;
    duration: number;
}

/**
 * VideoAsset component used to display video based assets
 */
export class VideoAsset extends React.Component<IVideoAssetProps> {
    /** Default properties for the VideoAsset if not defined */
    public static defaultProps: IVideoAssetProps = {
        autoPlay: true,
        controlsEnabled: true,
        timestamp: null,
        asset: null,
        childAssets: [],
    };

    public state: IVideoAssetState = {
        loaded: false,
    };

    private videoPlayer: React.RefObject<Player> = React.createRef<Player>();
    private timelineElement: Element = null;

    public render() {
        const { autoPlay, asset } = this.props;
        let videoPath = asset.path;
        if (!autoPlay) {
            videoPath = `${asset.path}#t=5.0`;
        }

        return (
            <Player ref={this.videoPlayer}
                fluid={false}
                width="100%"
                height="100%"
                autoPlay={autoPlay}
                src={videoPath}
                onError={this.props.onError}
                crossOrigin="anonymous">
                <BigPlayButton position="center" />
                {autoPlay &&
                    <ControlBar autoHide={false}>
                        {!this.props.controlsEnabled &&
                            <Fragment>
                                <div className="video-react-control-bar-disabled"></div>
                            </Fragment>
                        }
                        <CustomVideoPlayerButton order={1.1}
                            accelerators={["ArrowLeft", "A", "a"]}
                            tooltip={strings.editorPage.videoPlayer.previousExpectedFrame.tooltip}
                            onClick={this.movePreviousExpectedFrame}
                            icon={"fa-caret-left fa-lg"}
                        >
                            <i className="fas fa-caret-left fa-lg" />
                        </CustomVideoPlayerButton>
                        <CustomVideoPlayerButton order={1.2}
                            accelerators={["ArrowRight", "D", "d"]}
                            tooltip={strings.editorPage.videoPlayer.nextExpectedFrame.tooltip}
                            onClick={this.moveNextExpectedFrame}
                            icon={"fa-caret-right fa-lg"}
                        >
                            <i className="fas fa-caret-right fa-lg" />
                        </CustomVideoPlayerButton>
                        <CurrentTimeDisplay order={1.3} />
                        <TimeDivider order={1.4} />
                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.25]} order={7.1} />
                        <VolumeMenuButton enabled order={7.2} />
                        <CustomVideoPlayerButton order={8.1}
                            accelerators={["Q", "q"]}
                            tooltip={strings.editorPage.videoPlayer.previousTaggedFrame.tooltip}
                            onClick={this.movePreviousTaggedFrame}
                            icon={"fas fa-step-backward"}
                        >
                            <i className="fas fa-step-backward"></i>
                        </CustomVideoPlayerButton>
                        <CustomVideoPlayerButton order={8.2}
                            accelerators={["E", "e"]}
                            tooltip={strings.editorPage.videoPlayer.nextTaggedFrame.tooltip}
                            onClick={this.moveNextTaggedFrame}
                            icon={"fa-step-forward"}
                        >
                            <i className="fas fa-step-forward"></i>
                        </CustomVideoPlayerButton>
                        <CustomVideoPlayerKeyBinding order={8.3}
                            accelerators={["H", "h"]}
                            tooltip={strings.editorPage.videoPlayer.previousVisitedFrame.tooltip}
                            onClick={this.movePreviousVisitedFrame}
                            icon={"fas fa-step-backward"}
                        >
                        </CustomVideoPlayerKeyBinding>
                        <CustomVideoPlayerKeyBinding order={8.4}
                            accelerators={["L", "l"]}
                            tooltip={strings.editorPage.videoPlayer.nextVisitedFrame.tooltip}
                            onClick={this.moveNextVisitedFrame}
                            icon={"fas fa-step-forward"}
                        >
                        </CustomVideoPlayerKeyBinding>
                    </ControlBar>
                }
            </Player >
        );
    }

    public componentDidMount() {
        if (this.props.autoPlay) {
            // We only need to subscribe to state change notificeations if autoPlay
            // is true, otherwise the video is simply a preview on the side bar that
            // doesn't change
            this.videoPlayer.current.subscribeToStateChange(this.onVideoStateChange);
        }
    }

    public componentDidUpdate(prevProps: Readonly<IVideoAssetProps>) {
        if (this.props.asset.id !== prevProps.asset.id) {
            this.setState({ loaded: false });
        }

        if (this.props.childAssets !== prevProps.childAssets) {
            this.addAssetTimelineTags(this.props.childAssets, this.getVideoPlayerState().duration);
        }

        if (this.props.timestamp !== prevProps.timestamp) {
            this.seekToTime(this.props.timestamp);
        }
    }

    /**
     * Bound to the "Previous Tagged Frame" button
     * Seeks the user to the previous tagged video frame
     */
    private movePreviousTaggedFrame = () => {
        const currentTime = this.getVideoPlayerState().currentTime;
        const previousFrame = _
            .reverse(this.props.childAssets)
            .find((asset) => asset.state === AssetState.Tagged && asset.timestamp < currentTime);

        if (previousFrame) {
            this.seekToTime(previousFrame.timestamp);
        }
    }

    /**
     * Bound to the "Next Tagged Frame" button
     * Seeks the user to the next tagged video frame
     */
    private moveNextTaggedFrame = () => {
        const currentTime = this.getVideoPlayerState().currentTime;
        const nextFrame = this.props.childAssets
            .find((asset) => asset.state === AssetState.Tagged && asset.timestamp > currentTime);

        if (nextFrame) {
            this.seekToTime(nextFrame.timestamp);
        }
    }

    /**
     * Bound to the "Previous Visited Frame" button
     * Seeks the user to the previous visited video frame
     */
    private movePreviousVisitedFrame = () => {
        const currentTime = this.getVideoPlayerState().currentTime;
        const previousFrame = _
            .reverse(this.props.childAssets)
            .find((asset) => asset.state === AssetState.Visited && asset.timestamp < currentTime);

        if (previousFrame) {
            this.seekToTime(previousFrame.timestamp);
        }
    }

    /**
     * Bound to the "Next Visited Frame" button
     * Seeks the user to the next visited video frame
     */
    private moveNextVisitedFrame = () => {
        const currentTime = this.getVideoPlayerState().currentTime;
        const nextFrame = this.props.childAssets
            .find((asset) => asset.state === AssetState.Visited && asset.timestamp > currentTime);

        if (nextFrame) {
            this.seekToTime(nextFrame.timestamp);
        }
    }

    /**
     * Moves the videos current position forward one frame based on the current
     * project settings for frame rate extraction
     */
    private moveNextExpectedFrame = () => {
        const currentTime = this.getVideoPlayerState().currentTime;
        // Seek forward from the current time to the next logical frame based on project settings
        const frameSkipTime: number = (1 / this.props.additionalSettings.videoSettings.frameExtractionRate);
        const seekTime: number = (currentTime + frameSkipTime);
        this.seekToTime(seekTime);
    }

    /**
     * Moves the videos current position backward one frame based on the current
     * project settings for frame rate extraction
     */
    private movePreviousExpectedFrame = () => {
        const currentTime = this.getVideoPlayerState().currentTime;
        // Seek backwards from the current time to the next logical frame based on project settings
        const frameSkipTime: number = (1 / this.props.additionalSettings.videoSettings.frameExtractionRate);
        const seekTime: number = (currentTime - frameSkipTime);
        this.seekToTime(seekTime);
    }

    /**
     * Seeks the current video to the passed in time stamp, pausing the video before hand
     * @param seekTime - Time (in seconds) in the video to seek to
     */
    private seekToTime = (seekTime: number) => {
        const playerState = this.getVideoPlayerState();

        if (seekTime >= 0 && playerState.currentTime !== seekTime) {
            // Verifies if the seek operation should continue
            if (this.props.onBeforeAssetChanged) {
                if (!this.props.onBeforeAssetChanged()) {
                    return;
                }
            }

            // Before seeking, pause the video
            if (!playerState.paused) {
                this.videoPlayer.current.pause();
            }
            this.videoPlayer.current.seek(seekTime);
        }
    }

    private onVideoStateChange = (state: Readonly<IVideoPlayerState>, prev: Readonly<IVideoPlayerState>) => {
        if (!this.state.loaded && state.readyState === 4 && state.readyState !== prev.readyState) {
            // Video initial load complete
            this.raiseLoaded();
            this.raiseActivated();

            if (this.props.autoPlay) {
                this.videoPlayer.current.play();
            }
        } else if (state.paused && (state.currentTime !== prev.currentTime || state.seeking !== prev.seeking)) {
            // Video is paused, make sure we are on a key frame, and if we are not, seek to that
            // before raising the child selected event
            if (this.isValidKeyFrame()) {
                this.raiseChildAssetSelected(state);
                this.raiseDeactivated();
            }
        } else if (!state.paused && state.paused !== prev.paused) {
            // Video has resumed playing
            this.raiseActivated();
        }
    }

    /**
     * Raises the "loaded" event if available
     */
    private raiseLoaded = () => {
        this.setState({
            loaded: true,
        }, () => {
            if (this.props.onLoaded) {
                this.props.onLoaded(this.videoPlayer.current.video.video);
            }

            // Once the video is loaded, add any asset timeline tags
            this.addAssetTimelineTags(this.props.childAssets, this.getVideoPlayerState().duration);
        });
    }

    /**
     * Raises the "childAssetSelected" event if available
     */
    private raiseChildAssetSelected = (state: Readonly<IVideoPlayerState>) => {
        if (this.props.onChildAssetSelected) {
            const rootAsset = this.props.asset.parent || this.props.asset;
            const childPath = `${rootAsset.path}#t=${state.currentTime}`;
            const childAsset = AssetService.createAssetFromFilePath(childPath);
            childAsset.state = AssetState.NotVisited;
            childAsset.type = AssetType.VideoFrame;
            childAsset.parent = rootAsset;
            childAsset.timestamp = state.currentTime;
            childAsset.size = { ...this.props.asset.size };

            this.props.onChildAssetSelected(childAsset);
        }
    }

    /**
     * Raises the "activated" event if available
     */
    private raiseActivated = () => {
        if (this.props.onActivated) {
            this.props.onActivated(this.videoPlayer.current.video.video);
        }
    }

    /**
     * Raises the "deactivated event if available"
     */
    private raiseDeactivated = () => {
        if (this.props.onDeactivated) {
            this.props.onDeactivated(this.videoPlayer.current.video.video);
        }
    }

    /**
     * Move to the nearest key frame from where the video's current
     * position is
     * @returns true if moved to a new position; false otherwise
     */
    private isValidKeyFrame = (): boolean => {
        if (!this.props.additionalSettings) {
            return false;
        }

        const keyFrameTime = (1 / this.props.additionalSettings.videoSettings.frameExtractionRate);
        const timestamp = this.getVideoPlayerState().currentTime;

        // Calculate the nearest key frame
        const numberKeyFrames = Math.round(timestamp / keyFrameTime);
        const seekTime = +(numberKeyFrames * keyFrameTime).toFixed(6);

        if (seekTime !== timestamp) {
            this.seekToTime(seekTime);
        }

        return seekTime === timestamp;
    }

    /**
     * Draws small lines to show where visited and tagged frames are on
     * the video line
     * @param childAssets - Array of child assets in the video
     * @param videoDuration - Length (in seconds) of the video
     */
    private addAssetTimelineTags = (childAssets: any[], videoDuration: number) => {
        if (!this.props.autoPlay) {
            return;
        }

        const assetTimelineTagLines = this.renderTimeline(childAssets, videoDuration);
        const timelineSelector = ".editor-page-content-main-body .video-react-progress-control .video-timeline-root";
        this.timelineElement = document.querySelector(timelineSelector);

        if (!this.timelineElement) {
            const progressControlSelector = ".editor-page-content-main-body .video-react-progress-control";
            const progressHolderElement = document.querySelector(progressControlSelector);

            // If we found an element to hold the tags, add them to it
            if (progressHolderElement) {
                this.timelineElement = document.createElement("div");
                this.timelineElement.className = "video-timeline-root";
                progressHolderElement.appendChild(this.timelineElement);
            }
        }

        if (this.timelineElement) {
            // Render the child asset elements to the dom
            ReactDOM.render(assetTimelineTagLines, this.timelineElement);
        }
    }

    /**
     * Renders the timeline markers for the specified child assets
     * @param childAssets - Array of child assets in the video
     * @param videoDuration - Length (in seconds) of the video
     */
    private renderTimeline = (childAssets: IAsset[], videoDuration: number) => {
        return (
            <div className={"video-timeline-container"}>
                {childAssets.map((childAsset) => this.renderChildAssetMarker(childAsset, videoDuration))}
            </div>
        );
    }

    /**
     * Renders a timeline marker for the specified child asset
     * @param childAsset The child asset to render
     * @param videoDuration The total video duration
     */
    private renderChildAssetMarker = (childAsset: IAsset, videoDuration: number) => {
        const className = childAsset.state === AssetState.Tagged ? "video-timeline-tagged" : "video-timeline-visited";
        const childPosition: number = (childAsset.timestamp / videoDuration);
        const style = { left: `${childPosition * 100}%` };

        return (
            <div key={childAsset.timestamp}
                onClick={() => this.seekToTime(childAsset.timestamp)}
                className={className}
                style={style} />
        );
    }

    /**
     * Gets the current video player state
     */
    private getVideoPlayerState = (): Readonly<IVideoPlayerState> => {
        return this.videoPlayer.current.getState().player;
    }
}
