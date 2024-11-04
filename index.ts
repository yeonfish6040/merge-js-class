/**
 * @Method: Return merged object
 * @param { any } to - target object
 * @param { any } from - source object
 * @param { boolean } override - will override target object? default is true
 * @Return { string } - merged object
 */
export function merge(to: any, from: any, override: boolean = true) {
    to = to || {};
    for (var p in from) {
        if (to.hasOwnProperty(p) && !override) continue;
        to[p] = from[p];
    }
    return to;
}

export default merge;