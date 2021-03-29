// const reversString = require('./string-reverse');
import {reversString} from './string-reverse.js'
describe("test fucntion reversestring", ()=>
{
    it("reverse string 1234567890 to 0987654321", () => {
        const resStr = reversString('1234567890')
        expect(resStr).toBe('0987654321')
    });
    it("reverse string I'm OKAY to YAKO m'I", () => {
        const resStr = reversString("I'm OKAY")
        expect(resStr).toBe("YAKO m'I")
    });
    it("reverse string NaN to NaN", () => {
        const resStr = reversString("")
        expect(resStr).toBe("")
    });
    it("reverse string -_-_-ok to ko-_-_-", () => {
        const resStr = reversString("")
        expect(resStr).toBe("")
    });
})