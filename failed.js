// Программист 3: функция поиска должников
function filterFailed(data, passScore) {
  let failedStudents = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].score < passScore) {
      failedStudents.push(data[i].name);
    }
  }
  return failedStudents;
}
module.exports = filterFailed;
