declare const messageTypes: readonly ["info", "success", "error", "warning", "loading"];
type MessageType = typeof messageTypes[number];
export interface IShowMessageArguments {
    message: string;
    type: MessageType;
}
export declare const showMessageArgumentsForm: import("../..").IConfigurableFormComponent[];
export declare const useShowMessageAction: () => void;
export {};
