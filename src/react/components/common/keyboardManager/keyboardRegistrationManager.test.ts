import { KeyboardRegistrationManager } from "./keyboardRegistrationManager";
import { KeyEventType } from "./keyboardManager";

describe("Keyboard Registration Manager", () => {
    let keyboardManager: KeyboardRegistrationManager = null;

    beforeEach(() => {
        keyboardManager = new KeyboardRegistrationManager();
    });

    it("is defined", () => {
        expect(KeyboardRegistrationManager).toBeDefined();
        expect(keyboardManager).not.toBeNull();
    });

    it("can add keybard event handlers", () => {
        const keyCode1 = "Ctrl+1";
        const handler1 = (evt: KeyboardEvent) => null;
        const keyCode2 = "Ctrl+S";
        const handler2 = (evt: KeyboardEvent) => null;

        keyboardManager.addHandler(KeyEventType.KeyDown, [keyCode1], handler1);
        keyboardManager.addHandler(KeyEventType.KeyDown, [keyCode2], handler2);

        const handlers1 = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCode1);
        const handlers2 = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCode2);

        expect(handlers1.length).toEqual(1);
        expect(handlers2.length).toEqual(1);

        expect(handlers1[0]).toBe(handler1);
        expect(handlers2[0]).toBe(handler2);
    });

    it("can register handlers for same key code and different key event types", () => {
        const keyCodeString = "Ctrl+H";
        const keyCodes = [keyCodeString];
        const handler1 = (evt: KeyboardEvent) => null;
        const handler2 = (evt: KeyboardEvent) => null;
        const handler3 = (evt: KeyboardEvent) => null;

        keyboardManager.addHandler(KeyEventType.KeyDown, keyCodes, handler1);

        keyboardManager.addHandler(KeyEventType.KeyUp, keyCodes, handler1);
        keyboardManager.addHandler(KeyEventType.KeyUp, keyCodes, handler2);

        keyboardManager.addHandler(KeyEventType.KeyPress, keyCodes, handler1);
        keyboardManager.addHandler(KeyEventType.KeyPress, keyCodes, handler2);
        keyboardManager.addHandler(KeyEventType.KeyPress, keyCodes, handler3);

        const keyDownHandlers = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCodeString);
        expect(keyDownHandlers.length).toEqual(1);

        const keyUpHandlers = keyboardManager.getHandlers(KeyEventType.KeyUp, keyCodeString);
        expect(keyUpHandlers.length).toEqual(2);

        const keyPressHandlers = keyboardManager.getHandlers(KeyEventType.KeyPress, keyCodeString);
        expect(keyPressHandlers.length).toEqual(3);
    });

    it("can register multiple handlers for same key code", () => {
        const keyCodeString = "Ctrl+H";
        const keyCodes = [keyCodeString];
        const handler1 = (evt: KeyboardEvent) => null;
        const handler2 = (evt: KeyboardEvent) => null;

        keyboardManager.addHandler(KeyEventType.KeyDown, keyCodes, handler1);
        keyboardManager.addHandler(KeyEventType.KeyDown, keyCodes, handler2);

        const handlers = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCodeString);
        expect(handlers.length).toEqual(2);
    });

    it("list of handlers cannot be mutated outside of API", () => {
        const keyCodeString = "Ctrl+K";
        const keyCodes = [keyCodeString];
        const handler1 = (evt: KeyboardEvent) => null;

        keyboardManager.addHandler(KeyEventType.KeyDown, keyCodes, handler1);
        const handlers = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCodeString);
        const handlerCount = handlers.length;

        // Attempt to add more handlers
        handlers.push(handler1, handler1, handler1);

        const newHandlers = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCodeString);
        expect(newHandlers.length).toEqual(handlerCount);
    });

    it("can remove keyboard event handlers", () => {
        const keyCode1 = "Ctrl+1";
        const keyCode2 = "Ctrl+S";
        const keyCodes = [keyCode1, keyCode2];
        const handler = (evt: KeyboardEvent) => null;

        // Register keyboard handler
        const deregister = keyboardManager.addHandler(KeyEventType.KeyDown, keyCodes, handler);

        // Get registered handlers
        let handlers1 = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCode1);
        expect(handlers1.length).toEqual(1);

        let handlers2 = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCode2);
        expect(handlers2.length).toEqual(1);

        // Invode deregister functions
        deregister();

        // Get registered handlers after deregistered
        handlers1 = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCode1);
        expect(handlers1.length).toEqual(0);

        handlers2 = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCode2);
        expect(handlers1.length).toEqual(0);
    });

    it("get handlers for unregistered key code returns emtpy array", () => {
        const handlers = keyboardManager.getHandlers(KeyEventType.KeyDown, "Alt+1");
        expect(handlers.length).toEqual(0);
    });

    it("invokes registered keyboard handlers", () => {
        const keyCodeString = "Ctrl+1";
        const keyCodes = [keyCodeString];
        const handler1 = jest.fn();
        const handler2 = jest.fn();

        keyboardManager.addHandler(KeyEventType.KeyDown, keyCodes, handler1);
        keyboardManager.addHandler(KeyEventType.KeyDown, keyCodes, handler2);

        const keyboardEvent = new KeyboardEvent("keydown", {
            ctrlKey: true,
            code: "1",
        });

        keyboardManager.invokeHandlers(KeyEventType.KeyDown, keyCodeString, keyboardEvent);

        expect(handler1).toBeCalledWith(keyboardEvent);
        expect(handler2).toBeCalledWith(keyboardEvent);
    });

    it("can register handler for multiple keyCode of the same eventType", () => {
        const keyCode1 = "Ctrl+1";
        const keyCode2 = "Ctrl+S";
        const keyCodes = [keyCode1, keyCode2];
        const handler = (evt: KeyboardEvent) => null;

        keyboardManager.addHandler(KeyEventType.KeyDown, keyCodes, handler);

        const handlers1 = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCode1);
        const handlers2 = keyboardManager.getHandlers(KeyEventType.KeyDown, keyCode2);

        expect(handlers1.length).toEqual(1);
        expect(handlers2.length).toEqual(1);

        expect(handlers1[0]).toBe(handler);
        expect(handlers2[0]).toBe(handler);
    });
});
