function solution(phone_number) {    
    let arr = phone_number.split('');
    let answer = '';

    for (let i = 0 ; i <= phone_number.length ; i++) {
        if (i <= phone_number.length - 5) arr[i] = '*' ;
    }

    for (let l of arr) {
        answer += l;
    }

    return answer; 
}