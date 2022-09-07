function solution(n) {
    let firstnum = String(n).split('')
    let arr = firstnum.sort().reverse();
    let answer = '';
    for (let a of arr) answer += a;
    
    return Number(answer);
    
}