// Тимлид (Макар): архитектура приложения
const calculateAverage = require('./average');
const findTopStudent = require('./topStudent');
const filterFailed = require('./failed');
const addLetterGrade = require('./letterGrade');

const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 }
];

module.exports = { grades, calculateAverage, findTopStudent, filterFailed, addLetterGrade };
