export interface ICoords {
    lat?: number;
    lng?: number;
}
export interface IGoogleMapsLatLng {
    lat: () => number;
    lng: () => number;
}
export type LatLngPolygon = Array<{
    lng: number;
    lat: number;
}>;
export type PointPolygon = number[][];
type SimplePointsArray = [number, number];
interface IFuncPointsArray {
    lat: () => number;
    lng: () => number;
}
export declare const convertLatLngPolygonToPointsPolygon: (polygon: LatLngPolygon) => number[][];
export declare const convertFuncPointsArrayToSimplePointsArray: ({ lat, lng }: IFuncPointsArray) => SimplePointsArray;
export declare const pointsInPolygon: (points: SimplePointsArray | IFuncPointsArray, polygon: LatLngPolygon | PointPolygon) => boolean;
export {};
