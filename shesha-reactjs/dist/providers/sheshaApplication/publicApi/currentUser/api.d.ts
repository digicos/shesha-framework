import { HttpClientApi } from "../http/api";
import { IEntityReferenceDto } from "../../../../interfaces";
export interface IUserProfileInfo {
    readonly id: string;
    readonly userName: string;
    readonly firstName: string;
    readonly lastName: string;
}
export interface ICurrentUserApi {
    readonly isLoggedIn: boolean;
    readonly id: string;
    readonly userName: string;
    readonly firstName: string;
    readonly lastName: string;
    hasPermissionAsync(mpermissionName: string, permissionedEntityId?: IEntityReferenceDto): Promise<boolean>;
    hasRoleAsync(roleName: string): Promise<boolean>;
    getUserSettingValueAsync(name: string, module: string, defaultValue?: any, dataType?: string): Promise<any>;
    updateUserSettingValueAsync(name: string, module: string, value: any, dataType?: string): Promise<void>;
}
export interface IInternalCurrentUserApi extends ICurrentUserApi {
    setProfileInfo(profileInfo: IUserProfileInfo): void;
}
export declare class CurrentUserApi implements IInternalCurrentUserApi {
    #private;
    get isLoggedIn(): boolean;
    get id(): string;
    get userName(): string;
    get firstName(): string;
    get lastName(): string;
    constructor(httpClient: HttpClientApi);
    setProfileInfo(profileInfo: IUserProfileInfo): void;
    hasPermissionAsync(permissionName: string, permissionedEntity?: IEntityReferenceDto): Promise<boolean>;
    hasRoleAsync(roleName: string): Promise<boolean>;
    getUserSettingValueAsync(name: string, module: string, defaultValue?: any, dataType?: string): Promise<any>;
    updateUserSettingValueAsync(name: string, module: string, value: any, dataType?: string): Promise<void>;
}
