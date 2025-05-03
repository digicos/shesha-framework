export declare const SELECT_WIDTH_OFFSET_RIGHT = 48;
export declare const BUILT_IN_PLACEMENTS: {
    bottomLeft: {
        points: string[];
        offset: number[];
        overflow: {
            adjustX: number;
            adjustY: number;
        };
    };
    bottomRight: {
        points: string[];
        offset: number[];
        overflow: {
            adjustX: number;
            adjustY: number;
        };
    };
    topLeft: {
        points: string[];
        offset: number[];
        overflow: {
            adjustX: number;
            adjustY: number;
        };
    };
    topRight: {
        points: string[];
        offset: number[];
        overflow: {
            adjustX: number;
            adjustY: number;
        };
    };
};
export declare const calcTextWidth: (str: any, fontFamily?: string, fontSize?: string) => number;
