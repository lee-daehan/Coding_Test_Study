/*
    n을 10으로 나눈 나머지 값이 가장 낮은 자리수의 수가 된다.
    따라서 n을 10으로 나눈 나머지 값을 answer에 더하면 되는데,
    처음 n을 10으로 나눠주고 n값을 그대로 두면 자릿수가 바뀌지 않으므로 n%10을 하고난 후 n/10을 해줘야 한다.
    n/10을 계속하다보면 n이 0보다 낮아지는 순간이 있는데 그때, 모든 자리수의 합을 한 상태이기 때문에 반복문을 끝내면 된다.

    *처음 paresInt를 하지않고 실행했을때는 소수점이 나와서 기댓값보다 1정도 높은 결과가 나왔었음.
    JavsScript의 자료형은 정수형 실수형이 아니라 var,let, .. 으로 되어있어서 이런 오류가 생기는거같음
*/ 
function digitsum(n) {
    var answer = 0;
    while(n>0) {
        answer += parseInt(n % 10);
        n = parseInt(n / 10);
    }
    return answer;
}

// console.log(digitsum(123));
// console.log(digitsum(98729));
// console.log(digitsum(21390));