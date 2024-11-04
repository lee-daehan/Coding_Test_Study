/*
    Q.정수 배열 numbers가 매개변수로 주어집니다.
    numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

    Sol.매개변수로 주어진 numbers의 각 원소를 두배씩해서 새로운 배열을  return해야한다.
    for문을 사용해서 기존 numbers의 첫번째 인덱스부터 순회하면서 2를 곱해준 값을 각각 새로운 배열의 인덱스에 삽입해준다.
*/

function multipleArr(numbers) {
    var answer = [];
    for(var i=0; i < numbers.length; i++) {
        answer[i] = numbers[i] * 2;
    }
    return answer;
}