import { IAnnotation } from './model';
declare function canSubmit(data: IAnnotation[], minPoints: number): boolean;
declare function parseIntOrDefault(input: any, defaultValue?: number): number;
declare function getImageBits(imageUrl: string): Promise<unknown>;
declare function sortAnnotationData(data: IAnnotation[]): {
    comment: string;
    id: string;
    mark: {
        type: "RECT";
        x: number;
        y: number;
        width: number;
        height: number;
    };
}[];
declare function getViewData(data: IAnnotation[], allowAddingNotes?: boolean): {
    comment: string;
    id: string;
    mark: {
        type: "RECT";
        x: number;
        y: number;
        width: number;
        height: number;
    };
}[];
declare function getCustomEnabled(customVisibility: string, name: string, data: {}, globalState: {}, formMode: any): any;
export { parseIntOrDefault, sortAnnotationData, getViewData, canSubmit, getCustomEnabled, getImageBits };
