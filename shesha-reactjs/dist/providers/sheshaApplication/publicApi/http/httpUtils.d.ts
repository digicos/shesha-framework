import { HttpResponse } from "./api";
export declare const unwrapAxiosError: (error: any) => never;
export declare const unwrapAxiosCall: <Response = any>(promise: Promise<HttpResponse<Response>>) => Promise<Response>;
