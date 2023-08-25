/**
 * Initialises the render loop.
 */
export function draw(): Promise<number>;
export namespace draw {
    let _runOnlyOnce: boolean;
}
