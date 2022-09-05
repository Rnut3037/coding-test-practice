function solution(x) {
    let ha = String(x).split('');
    let sum = 0;

    for (let i of ha) sum += Number(i);

    if (x % sum == 0) return true;
    else return false;
}