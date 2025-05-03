export interface IFormPlugin<TSettings = any> {
    name: string;
    settings: TSettings;
}
export interface IHasPlugins {
    plugins: IFormPlugin[];
}
