import { UserLoginInfoDto } from '../../apis/session';
import { ResetPasswordUsingTokenInput, ResetPasswordVerifyOtpInput, ResetPasswordVerifyOtpResponse, UserResetPasswordSendOtpQueryParams } from '../../apis/user';
import { IFlagsSetters, IFlagsState } from '../../interfaces';
import { IAjaxResponseBase } from '../../interfaces/ajaxResponse';
import { IErrorInfo } from '../../interfaces/errorInfo';
import IRequestHeaders from '../../interfaces/requestHeaders';
export type IFlagProgressFlags = 'isIdle' | 'isVerifyOtpModalVisible' | 'loginUser' | 'fetchUserData' | 'verifyOtp' | 'resetPassword' | 'sendOtp';
export type IFlagSucceededFlags = 'isVerifyOtpModalVisible' | 'loginUser' | 'fetchUserData' | 'verifyOtp' | 'resetPassword' | 'sendOtp';
export type IFlagErrorFlags = 'isVerifyOtpModalVisible' | 'loginUser' | 'fetchUserData' | 'verifyOtp' | 'resetPassword' | 'sendOtp';
export type IFlagActionedFlags = 'hasCheckedAuth';
export interface ILoginForm {
    userNameOrEmailAddress: string;
    password: string;
    /**
     * Optional IMEI number. Is used for mobile applications
     */
    imei?: string | null;
    rememberMe?: boolean;
}
export interface IAuthStateContext extends IFlagsState<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    isCheckingAuth?: boolean;
    isFetchingUserInfo?: boolean;
    hasFetchedUserInfoAsync?: boolean;
    loginInfo?: UserLoginInfoDto;
    requireChangePassword?: boolean;
    isLoggedIn: boolean;
    token?: string;
    headers?: IRequestHeaders;
    errorInfo?: IErrorInfo;
    mobileNo?: string;
    selectedMobileNumber?: string;
    verifyOtpReqPayload?: ResetPasswordVerifyOtpInput;
    verifyOtpResPayload?: ResetPasswordVerifyOtpResponse;
    isResettingPasswordUsingToken?: boolean;
    isResetPasswordUsingTokenSuccessful?: boolean;
    resetPasswordUsingTokenError?: string;
    resetPasswordUsingTokenReqPayload?: ResetPasswordUsingTokenInput;
    resetPasswordUsingTokenResPayload?: IAjaxResponseBase;
    resetPasswordVerifyOtpPayload?: UserResetPasswordSendOtpQueryParams;
}
export interface IAuthActionsContext extends IFlagsSetters<IFlagProgressFlags, IFlagSucceededFlags, IFlagErrorFlags, IFlagActionedFlags> {
    /**
     * @deprecated - Use loginUserAsync instead.
     */
    loginUser?: (loginFormData: ILoginForm) => void;
    loginUserAsync?: (loginFormData: ILoginForm) => Promise<unknown>;
    logoutUser?: () => Promise<unknown>;
    clearUserSession?: () => Promise<unknown>;
    /** Returns true if any of specified permissions granted to the current user */
    anyOfPermissionsGranted: (permissions: string[]) => boolean;
    verifyOtpSuccess: (verifyOtpResPayload: ResetPasswordVerifyOtpResponse) => void;
    resetPasswordSuccess?: () => void;
    getAccessToken: () => string;
    checkAuth?: () => void;
    fireHttpHeadersChanged?: (state?: IAuthStateContext) => void;
}
export declare const AUTH_CONTEXT_INITIAL_STATE: IAuthStateContext;
export declare const AuthStateContext: import("react").Context<IAuthStateContext>;
export declare const AuthActionsContext: import("react").Context<IAuthActionsContext>;
