"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
/**
 * @Method: Return merged object
 * @param { any } to - target object
 * @param { any } from - source object
 * @param { boolean } override - will override target object? default is true
 * @Return { any } - merged object
 */
function merge(to, from, override = true) {
    to = to || {};
    for (var p in from) {
        if (to.hasOwnProperty(p) && !override && !(p === "__proto__" || p === "prototype"))
            continue;
        to[p] = from[p];
    }
    return to;
}
exports.default = merge;
