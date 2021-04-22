"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const hooks_testing_library_1 = require("@midwayjs/hooks-testing-library");
const _1 = __importStar(require("."));
describe('test new features', () => {
    let app;
    beforeAll(async () => {
        app = await hooks_testing_library_1.createFunctionApp();
    });
    afterAll(async () => {
        await app.close();
    });
    it('runFunction', async () => {
        expect(await app.runFunction(_1.default)).toMatchInlineSnapshot(`
      Object {
        "message": "Hello World",
        "method": "GET",
      }
    `);
        expect(await app.runFunction(_1.post, 'Jake')).toMatchInlineSnapshot(`
      Object {
        "message": "Your message: Jake",
        "method": "POST",
      }
    `);
    });
    it('request', async () => {
        const response = await app.request(_1.post, 'Jake').expect(200);
        expect(response.body).toMatchInlineSnapshot(`
      Object {
        "message": "Your message: Jake",
        "method": "POST",
      }
    `);
    });
});
//# sourceMappingURL=index.test.js.map