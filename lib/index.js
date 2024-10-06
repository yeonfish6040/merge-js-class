"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
/**
 * @Method: Return merged object
 * @param { any } to - target object
 * @param { any } from - source object
 * @param { boolean } override - will override target object? default is true
 * @Return { string } - merged object
 */
function merge(to_1, from_1) {
    return __awaiter(this, arguments, void 0, function* (to, from, override = true) {
        const keys = Object.keys(to);
        keys.forEach((key) => {
            if (!from[key])
                return;
            if (to[key] && !override)
                return;
            return to[key] = from[key];
        });
        return to;
    });
}
exports.default = merge;
