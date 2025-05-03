export interface UseLoginUrlArgs {
    homePageUrl: string;
    unauthorizedRedirectUrl: string;
}
export declare const useLoginUrl: ({ homePageUrl, unauthorizedRedirectUrl }: UseLoginUrlArgs) => string;
