"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const hooks_1 = require("@midwayjs/hooks");
function useFaaSContext() {
    return hooks_1.useContext();
}
exports.default = async () => {
    const ctx = useFaaSContext();
    return {
        message: 'Hello World',
        method: ctx.method,
    };
};
const post = async (message) => {
    const ctx = useFaaSContext();
    return {
        message: 'Your message: ' + message,
        method: ctx.method,
    };
};
exports.post = post;
//# sourceMappingURL=index.js.map