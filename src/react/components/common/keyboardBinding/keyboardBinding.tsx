import { KeyboardContext, IKeyboardContext } from "../keyboardManager/keyboardManager";
import React from "react";

export interface IKeyboardBindingProps {
    accelerator: string;
    onKeyDown: (evt?: KeyboardEvent) => void;
}

export class KeyboardBinding extends React.Component<IKeyboardBindingProps> {
    public static contextType = KeyboardContext;
    public context!: IKeyboardContext;
    private deregisterBinding: () => void;

    public componentDidMount() {
        if (this.context && this.context.keyboard) {
            this.deregisterBinding = this.context.keyboard.addHandler(this.props.accelerator, this.props.onKeyDown);
        } else {
            console.warn("Keyboard Mananger context cannot be found - Keyboard binding has NOT been set.");
        }
    }

    public componentWillUnmount() {
        if (this.deregisterBinding) {
            this.deregisterBinding();
        }
    }

    public render() {
        return null;
    }
}
