const project = require('./main');

console.log("--- АНАЛИЗ УСПЕВАЕМОСТИ ---");
console.log("1. Средний балл группы:", project.calculateAverage(project.grades).toFixed(2));
console.log("2. Лучший студент:", project.findTopStudent(project.grades));
console.log("3. Список должников:", project.filterFailed(project.grades, 60));
console.log("4. Студенты с буквенными оценками:");
console.log(project.addLetterGrade(project.grades));
