import { IRoute } from '../../interfaces';
export declare enum RouteActionEnums {
    GoingToRoute = "GOING_TO_ROUTE"
}
export declare const goingToRouteAction: import("redux-actions").ActionFunction1<string, import("redux-actions").Action<IRoute>>;
