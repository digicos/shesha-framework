import { IAjaxResponse } from "../interfaces";
import { IUseMutateResponseFixedEndpoint } from "../hooks";
export interface ResetPasswordVerifyOtpInput {
    /**
     * Unique runtime identifier of the operation. Is used for resending
     */
    operationId?: string;
    /**
     * Value of the One Time Pin
     */
    pin?: string | null;
    mobileNo: string;
}
export interface ResetPasswordVerifyOtpResponse {
    /**
     * Indicates that the OTP matches to the sent one
     */
    isSuccess?: boolean;
    /**
     * Error message
     */
    errorMessage?: string | null;
    token?: string | null;
    username?: string | null;
}
export interface ResetPasswordUsingTokenInput {
    username: string;
    token: string;
    newPassword: string;
}
export interface UserResetPasswordSendOtpQueryParams {
    /**
     * mobile number of the user
     */
    mobileNo?: string | null;
}
export interface ResetPasswordSendOtpResponse {
    operationId?: string;
}
export type ResetPasswordSendOtpResponseAjaxResponse = IAjaxResponse<ResetPasswordSendOtpResponse>;
export interface ResetPasswordVerifyOtpInput {
    operationId?: string;
    pin?: string | null;
    mobileNo: string;
}
export interface UserResetPasswordSendOtpQueryParams {
    mobileNo?: string | null;
    /**
     * The requested API version
     */
    'api-version'?: string;
}
export interface ResetPasswordVerifyOtpResponse {
    isSuccess?: boolean;
    errorMessage?: string | null;
    token?: string | null;
    username?: string | null;
}
export type ResetPasswordVerifyOtpResponseAjaxResponse = IAjaxResponse<ResetPasswordVerifyOtpResponse>;
export declare const useResetPasswordSendOtp: () => IUseMutateResponseFixedEndpoint<UserResetPasswordSendOtpQueryParams, ResetPasswordSendOtpResponseAjaxResponse>;
export declare const useResetPasswordVerifyOtp: () => IUseMutateResponseFixedEndpoint<ResetPasswordVerifyOtpInput, ResetPasswordVerifyOtpResponseAjaxResponse>;
export interface ResetPasswordUsingTokenInput {
    username: string;
    token: string;
    newPassword: string;
}
export type BooleanAjaxResponse = IAjaxResponse<boolean>;
export declare const useUserResetPasswordUsingToken: () => IUseMutateResponseFixedEndpoint<ResetPasswordUsingTokenInput, BooleanAjaxResponse>;
