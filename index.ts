/**
 * @Method: Return merged object
 * @param { any } to - target object
 * @param { any } from - source object
 * @param { boolean } override - will override target object? default is true
 * @Return { string } - merged object
 */
export async function merge(to: any, from: any, override: boolean = true) {
    const keys = Object.getOwnPropertyNames(to);
    keys.forEach((key) => {
        if (!from[key])
            return;
        if (to[key] && !override)
            return;
        return to[key] = from[key];
    });

    return to;
}

export default merge;