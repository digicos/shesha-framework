type OnMeasurementLog = (measure: PerformanceMeasure) => void;
interface UseRenderTimeArgs {
    onLog: OnMeasurementLog;
}
export declare const useRenderTime: ({ onLog }: UseRenderTimeArgs) => void;
export {};
