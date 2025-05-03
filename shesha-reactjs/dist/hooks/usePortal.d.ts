type PortalRender = (props: {
    children: React.ReactNode;
}) => React.ReactPortal;
export declare const usePortal: (el: any) => PortalRender;
export {};
