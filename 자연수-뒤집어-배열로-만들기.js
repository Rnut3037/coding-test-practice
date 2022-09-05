function solution(n) {
    let a = String(n).split('').reverse();
    let answer = [];
    for (let i of a ) answer.push(Number(i)); 
    
    return answer;
}
