/**
 * Standard Authorization header name
 */
export declare const AUTHORIZATION_HEADER_NAME = "Authorization";
interface IAccessToken {
    accessToken?: string | null;
    expireInSeconds?: number;
    expireOn?: string;
}
export declare const saveUserToken: ({ accessToken, expireInSeconds, expireOn }: IAccessToken, tokenName?: string) => {
    accessToken: string;
    expireInSeconds: number;
    expireOn: string;
};
export declare const hasTokenExpired: (date: string) => boolean;
export declare const removeAccessToken: (tokenName: string) => boolean;
export declare const getAccessToken: (tokenName: string) => IAccessToken | null;
export declare const getHttpHeaders: (token: string | null) => {};
export {};
