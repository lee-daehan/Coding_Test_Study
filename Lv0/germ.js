/*
    Q.어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
    처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

    1시간 n*2 , 2시간 n*2*2, 3시간 n*2*2*2,... , t시간 n*2^t
    시간 t에 따라서 n*2의t제곱 만큼 세균이 증식한다.
    따라서 반복문으로 1부터 t시간만큼 1씩 증가하면서 2를 곱해주면 된다.
*/
function germ(n, t) {
    var answer = 0;
    for(var i=1; i<=t; i++) {
        n = n*2;
    }
    answer = n;
    return answer;
}

// console.log(germ(2,2));