import { FC, MutableRefObject, PropsWithChildren } from 'react';
import { ResetPasswordVerifyOtpResponse } from '../../apis/user';
import { IErrorInfo } from '../../interfaces/errorInfo';
import IRequestHeaders from '../../interfaces/requestHeaders';
import { IAuthStateContext, ILoginForm } from './contexts';
export interface IAuthProviderRefProps {
    anyOfPermissionsGranted?: (permissions: string[]) => boolean;
    headers?: any;
    getIsLoggedIn: () => boolean;
}
interface IAuthProviderProps {
    /**
     * What the token name should be
     *
     * TODO: The whole authorization and storing of token needs to be reviewed
     */
    tokenName: string;
    /**
     * A callback for when the request headers are changed
     */
    onSetRequestHeaders?: (headers: IRequestHeaders) => void;
    /**
     * URL that that the user should be redirected to if they're not authorized. Default is /login
     */
    unauthorizedRedirectUrl?: string;
    /**
     * URL that that the user should be redirected to change the password. Default is /account/change-password
     */
    changePasswordUrl?: string;
    /**
     * Home page url. Default is `/`
     */
    homePageUrl?: string;
    authRef?: MutableRefObject<IAuthProviderRefProps>;
}
declare const AuthProvider: FC<PropsWithChildren<IAuthProviderProps>>;
declare function useAuthState(require?: boolean): IAuthStateContext;
declare function useAuthActions(require?: boolean): import("./contexts").IAuthActionsContext;
declare function useAuth(require?: boolean): {
    isCheckingAuth?: boolean;
    isFetchingUserInfo?: boolean;
    hasFetchedUserInfoAsync?: boolean;
    loginInfo?: import("../../apis/session").UserLoginInfoDto;
    requireChangePassword?: boolean;
    isLoggedIn: boolean;
    token?: string;
    headers?: IRequestHeaders;
    errorInfo?: IErrorInfo;
    mobileNo?: string;
    selectedMobileNumber?: string;
    verifyOtpReqPayload?: import("../../apis/user").ResetPasswordVerifyOtpInput;
    verifyOtpResPayload?: ResetPasswordVerifyOtpResponse;
    isResettingPasswordUsingToken?: boolean;
    isResetPasswordUsingTokenSuccessful?: boolean;
    resetPasswordUsingTokenError?: string;
    resetPasswordUsingTokenReqPayload?: import("../../apis/user").ResetPasswordUsingTokenInput;
    resetPasswordUsingTokenResPayload?: import("../../interfaces").IAjaxResponseBase;
    resetPasswordVerifyOtpPayload?: import("../../apis/user").UserResetPasswordSendOtpQueryParams;
    isInProgress?: {
        isIdle?: boolean;
        isVerifyOtpModalVisible?: boolean;
        loginUser?: boolean;
        fetchUserData?: boolean;
        verifyOtp?: boolean;
        resetPassword?: boolean;
        sendOtp?: boolean;
    };
    succeeded?: {
        isVerifyOtpModalVisible?: boolean;
        loginUser?: boolean;
        fetchUserData?: boolean;
        verifyOtp?: boolean;
        resetPassword?: boolean;
        sendOtp?: boolean;
    };
    error?: {
        isVerifyOtpModalVisible?: string | boolean | IErrorInfo;
        loginUser?: string | boolean | IErrorInfo;
        fetchUserData?: string | boolean | IErrorInfo;
        verifyOtp?: string | boolean | IErrorInfo;
        resetPassword?: string | boolean | IErrorInfo;
        sendOtp?: string | boolean | IErrorInfo;
    };
    actioned?: {
        hasCheckedAuth?: boolean;
    };
    loginUser?: (loginFormData: ILoginForm) => void;
    loginUserAsync?: (loginFormData: ILoginForm) => Promise<unknown>;
    logoutUser?: () => Promise<unknown>;
    clearUserSession?: () => Promise<unknown>;
    anyOfPermissionsGranted: (permissions: string[]) => boolean;
    verifyOtpSuccess: (verifyOtpResPayload: ResetPasswordVerifyOtpResponse) => void;
    resetPasswordSuccess?: () => void;
    getAccessToken: () => string;
    checkAuth?: () => void;
    fireHttpHeadersChanged?: (state?: IAuthStateContext) => void;
    setIsInProgressFlag: (key: {
        isIdle?: boolean;
        isVerifyOtpModalVisible?: boolean;
        loginUser?: boolean;
        fetchUserData?: boolean;
        verifyOtp?: boolean;
        resetPassword?: boolean;
        sendOtp?: boolean;
    }) => void;
    setSucceededFlag: (key: {
        isVerifyOtpModalVisible?: boolean;
        loginUser?: boolean;
        fetchUserData?: boolean;
        verifyOtp?: boolean;
        resetPassword?: boolean;
        sendOtp?: boolean;
    }) => void;
    setFailedFlag: (key: {
        isVerifyOtpModalVisible?: boolean;
        loginUser?: boolean;
        fetchUserData?: boolean;
        verifyOtp?: boolean;
        resetPassword?: boolean;
        sendOtp?: boolean;
    }) => void;
    setActionedFlag: (key: {
        hasCheckedAuth?: boolean;
    }) => void;
    resetIsInProgressFlag: () => void;
    resetSucceededFlag: () => void;
    resetFailedFlag: () => void;
    resetActionedFlag: () => void;
    resetAllFlag: () => void;
};
export default AuthProvider;
export { AuthProvider, useAuth, useAuthActions, useAuthState };
