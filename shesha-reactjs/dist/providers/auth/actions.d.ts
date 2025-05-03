import { UserLoginInfoDto } from '../../apis/session';
import { ResetPasswordVerifyOtpResponse } from '../../apis/user';
import { IErrorInfo, IHasErrorInfo } from '../../interfaces/errorInfo';
export declare enum AuthActionEnums {
    CheckAuthAction = "CHECK_AUTH_ACTION",
    SetToken = "SET_TOKEN",
    LoginUserRequest = "LOGIN_USER_REQUEST",
    LoginUserSuccess = "LOGIN_USER_SUCCESS",
    LoginUserError = "LOGIN_USER_ERROR",
    LogoutUser = "LOGOUT_USER",
    FetchedUserDataAsyncRequest = "FETCHED_USER_DATA_ASYNC_REQUEST",
    FetchUserDataRequest = "FETCH_USER_DATA_REQUEST",
    FetchUserDataSuccess = "FETCH_USER_DATA_SUCCESS",
    FetchUserDataError = "FETCH_USER_DATA_ERROR",
    SetIsLoggedIn = "SET_IS_LOGGED_IN",
    VerifyOtpSuccess = "VERIFY_OTP_SUCCESS",
    ResetPasswordSuccess = "RESET_PASSWORD_SUCCESS"
}
export declare const checkAuthAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const loginUserAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const loginUserSuccessAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const loginUserErrorAction: import("redux-actions").ActionFunction1<IErrorInfo, import("redux-actions").Action<IHasErrorInfo>>;
export declare const fetchUserDataAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const fetchedUserDataAsyncAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const fetchUserDataActionSuccessAction: import("redux-actions").ActionFunction1<UserLoginInfoDto, import("redux-actions").Action<UserLoginInfoDto>>;
export declare const setIsLoggedInAction: import("redux-actions").ActionFunction1<boolean, import("redux-actions").Action<boolean>>;
export declare const fetchUserDataActionErrorAction: import("redux-actions").ActionFunction1<IErrorInfo, import("redux-actions").Action<IHasErrorInfo>>;
export declare const logoutUserAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const verifyOtpSuccessAction: import("redux-actions").ActionFunction1<ResetPasswordVerifyOtpResponse, import("redux-actions").Action<ResetPasswordVerifyOtpResponse>>;
export declare const resetPasswordSuccessAction: import("redux-actions").ActionFunctionAny<import("redux-actions").Action<any>>;
export declare const setAccessTokenAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<string>>;
