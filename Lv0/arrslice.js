/*
    Q.정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
    numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

    *slice(startIndex, endIndex) : 배열의 startIndex 부터 endIndex(endIndex 불포함)까지에 대한 새로운 배열 객체로 반환한다.

    num1, 부터 num2 까지 자른 정수배열을 return 해야하므로 endIndex는 num2+1이 되야한다.
*/
function arrslice(numbers, num1, num2) {
    var newArr = numbers.slice(num1,num2+1);
    return newArr;
}