function average_Scores(...scores) {
    let average_Numbers = scores.reduce((sum, score) => sum + score, 0);
    return average_Numbers / scores.length;
}
console.log(average_Scores(88, 73, 95, 70));
export {};
