"use strict";
// 1768. Merge Strings Alternately
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pro1768 = void 0;
class Pro1768 {
    mergeAlternately(word1, word2) {
        let res = "";
        for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
            if (i < word1.length)
                res += word1[i];
            if (i < word2.length)
                res += word2[i];
        }
        return res;
    }
    ;
}
exports.Pro1768 = Pro1768;
//# sourceMappingURL=1768.js.map