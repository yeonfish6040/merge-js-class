/**
 * @Method: Return merged object
 * @param { any } to - target object
 * @param { any } from - source object
 * @param { boolean } override - will override target object? default is true
 * @Return { string } - merged object
 */
export async function merge(to: any, from: any, override: boolean = true) {
    return new Promise((resolve, reject) => {
        const keys = Object.getOwnPropertyNames(from);
        keys.forEach((key, i) => {
            if (to.hasOwnProperty(key) && !override)
                return;
            to[key] = from[key];
            if (i-1 === keys.length) resolve(to);
        });
    })
}

export default merge;