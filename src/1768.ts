// 1768. Merge Strings Alternately

export class Pro1768 {    
    mergeAlternately(word1: string, word2: string): string {
        let res = "";
        for (let i = 0; i < Math.max(word1.length, word2.length); i++){
            if (i < word1.length) res += word1[i];
            if (i < word2.length) res += word2[i];
        }
        return res;
    };
}