export namespace initialState {
    let activeScene: string;
    namespace scenes {
        let id: string;
        let predictableActionArguments: boolean;
        let preserveActionOrder: boolean;
        let initial: string;
        namespace states {
            namespace Title {
                let component: string;
                let name: string;
                namespace on {
                    namespace navigateToNewGame {
                        let target: string;
                    }
                    namespace navigateToSettings {
                        let target_1: string;
                        export { target_1 as target };
                    }
                    namespace navigateToAbout {
                        let target_2: string;
                        export { target_2 as target };
                    }
                }
            }
            namespace Settings {
                let component_1: string;
                export { component_1 as component };
                let name_1: string;
                export { name_1 as name };
                export namespace on_1 {
                    namespace navigateToTitle {
                        let target_3: string;
                        export { target_3 as target };
                    }
                }
                export { on_1 as on };
            }
            namespace About {
                let component_2: string;
                export { component_2 as component };
                let name_2: string;
                export { name_2 as name };
                export namespace on_2 {
                    export namespace navigateToTitle_1 {
                        let target_4: string;
                        export { target_4 as target };
                    }
                    export { navigateToTitle_1 as navigateToTitle };
                }
                export { on_2 as on };
            }
            namespace NewGame {
                let component_3: string;
                export { component_3 as component };
                let name_3: string;
                export { name_3 as name };
                export namespace on_3 {
                    export namespace navigateToTitle_2 {
                        let target_5: string;
                        export { target_5 as target };
                    }
                    export { navigateToTitle_2 as navigateToTitle };
                    export namespace navigateToWorld {
                        let target_6: string;
                        export { target_6 as target };
                    }
                }
                export { on_3 as on };
            }
            namespace Level {
                let component_4: string;
                export { component_4 as component };
                let name_4: string;
                export { name_4 as name };
                export namespace on_4 {
                    namespace navigateToWin {
                        let target_7: string;
                        export { target_7 as target };
                    }
                    namespace navigateToGameOver {
                        let target_8: string;
                        export { target_8 as target };
                    }
                }
                export { on_4 as on };
            }
            namespace World {
                let component_5: string;
                export { component_5 as component };
                let name_5: string;
                export { name_5 as name };
                export namespace on_5 {
                    namespace navigateToLevel {
                        let target_9: string;
                        export { target_9 as target };
                    }
                }
                export { on_5 as on };
            }
            namespace Win {
                let component_6: string;
                export { component_6 as component };
                let name_6: string;
                export { name_6 as name };
                export namespace on_6 {
                    export namespace navigateToTitle_3 {
                        let target_10: string;
                        export { target_10 as target };
                    }
                    export { navigateToTitle_3 as navigateToTitle };
                }
                export { on_6 as on };
            }
            namespace GameOver {
                let component_7: string;
                export { component_7 as component };
                let name_7: string;
                export { name_7 as name };
                export namespace on_7 {
                    export namespace navigateToTitle_4 {
                        let target_11: string;
                        export { target_11 as target };
                    }
                    export { navigateToTitle_4 as navigateToTitle };
                }
                export { on_7 as on };
            }
        }
    }
    let title: string;
    let volume: number;
}
