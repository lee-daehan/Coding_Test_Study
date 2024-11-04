/*
    Q.정수 num1과 num2가 매개변수로 주어질 때,
    num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

    num1을 num2로 나눈 값은 num1/num2 이고 1000을 곱하면 (num1 / num2) * 1000이다.
    정수 부분을 return 해야 하므로 parseInt를 사용해서 정수로 바꾸어준다.
*/
function division(num1, num2) {
    var answer = 0;
    answer = parseInt((num1 / num2) * 1000);
    return answer;
}

// console.log(division(3,2));
// console.log(division(7,3));
// console.log(division(1,16));