export default store;
declare const store: Store;
declare class Store {
    constructor(reducer: any);
    reducer: any;
    state: any;
    dispatch(action: any): Promise<void>;
    getState(): any;
}
