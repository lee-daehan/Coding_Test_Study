function evensum(n) {
    var answer = 0;

    for(var i=1; i<=n; i++)
        if(i%2 == 0) {
            answer += i;
        }
    return answer;
}

// console.log(evensum(3));
// console.log(evensum(10));
// console.log(evensum(15));
