function solution(n) {
    let arr = n.toString(3).split('').reverse();
    let answer = '';
    
    for (let i of arr) answer += i;   
    
    answer = parseInt(answer, 3)
    
    return answer;
}