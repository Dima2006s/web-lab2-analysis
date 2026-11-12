// Программист 4: функция добавления буквенных оценок
function addLetterGrade(data) {
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    let student = { ...data[i] };
    if (student.score >= 90) student.letter = "A";
    else if (student.score >= 75) student.letter = "B";
    else student.letter = "C";
    newData.push(student);
  }
  return newData;
}
module.exports = addLetterGrade;
