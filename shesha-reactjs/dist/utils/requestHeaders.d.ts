interface IOptions {
    addCustomHeaders?: boolean;
}
/**
 * Retrieves the request headers for the application
 */
export declare const requestHeaders: (tokenName?: string, options?: IOptions) => {
    [key: string]: string;
};
export {};
