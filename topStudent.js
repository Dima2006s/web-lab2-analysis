// Программист 2: функция поиска лучшего студента
function findTopStudent(data) {
  if (data.length === 0) return null;
  let topStudent = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].score > topStudent.score) {
      topStudent = data[i];
    }
  }
  return topStudent.name;
}
module.exports = findTopStudent;
