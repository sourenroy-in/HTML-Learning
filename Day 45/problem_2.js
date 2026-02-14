let str = "abcdabccccccdefgggh";


function Unique(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        let curentChar = str[i];
        if (ans.indexOf(curentChar) == -1) {
            ans += curentChar;
        }
    }
    return ans;
}