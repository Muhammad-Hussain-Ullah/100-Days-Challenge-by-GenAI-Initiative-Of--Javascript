let grades = [88, 94, 72, 99, 53, 77];
let average_grades = grades.reduce((total, grades) => total + grades, 0) / grades.length;
console.log(average_grades);
export {};
