// ============================================================
// Тема 5. Практична. Варіант 2: Класний журнал
// Код запускається в консолі браузера (DevTools -> Console)
// або в StackBlitz. Перевірка через console.log.
// ============================================================

// Константи (оцінки за 100-бальною шкалою)
const PASS_SCORE = 60; // мінімальний середній бал, щоб скласти предмет
const EXCELLENT_SCORE = 90; // середній бал відмінника

// ------------------------------------------------------------
// 1. Створити масив студентів, кожен із щонайменше 5 оцінками
// ------------------------------------------------------------
const students = [
  { name: 'Олена Коваль', grades: [95, 90, 100, 92, 98] },
  { name: 'Іван Петренко', grades: [70, 65, 80, 75, 60] },
  { name: 'Марія Шевченко', grades: [50, 45, 60, 55, 40] },
  { name: 'Андрій Мельник', grades: [88, 92, 85, 90, 94] },
  { name: 'Софія Бондар', grades: [60, 62, 58, 65, 61] },
  { name: 'Дмитро Ткачук', grades: [100, 98, 97, 99, 96] },
];

console.log('===== 1. Журнал студентів =====');
for (let i = 0; i < students.length; i++) {
  console.log(
    i +
      1 +
      '. ' +
      students[i].name +
      ' — оцінки: ' +
      students[i].grades.join(', ')
  );
}

// ------------------------------------------------------------
// 2. Функція: приймає масив оцінок і повертає середній бал
// ------------------------------------------------------------
function getAverage(grades) {
  if (grades.length === 0) {
    return 0; // захист від ділення на нуль
  }
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// ------------------------------------------------------------
// 3. Середній бал кожного студента
// ------------------------------------------------------------
console.log('\n===== 2. Середній бал кожного студента =====');
for (let i = 0; i < students.length; i++) {
  const avg = getAverage(students[i].grades);
  students[i].average = avg; // зберігаємо середній бал в об'єкті
  console.log(students[i].name + ': ' + avg.toFixed(1));
}

// ------------------------------------------------------------
// 4. Чи склав студент предмет (умова if / else)
// ------------------------------------------------------------
console.log('\n===== 3. Чи склав студент предмет =====');
for (let i = 0; i < students.length; i++) {
  const s = students[i];
  if (s.average >= PASS_SCORE) {
    console.log(
      s.name + ' — склав(ла) предмет ✅ (' + s.average.toFixed(1) + ')'
    );
  } else {
    console.log(
      s.name + ' — не склав(ла) предмет ❌ (' + s.average.toFixed(1) + ')'
    );
  }
}

// ------------------------------------------------------------
// 5. Студент з найвищим середнім балом
// ------------------------------------------------------------
console.log('\n===== 4. Студент з найвищим середнім балом =====');
let best = students[0];
for (let i = 1; i < students.length; i++) {
  if (students[i].average > best.average) {
    best = students[i];
  }
}
console.log(
  'Найкращий: ' + best.name + ', середній бал ' + best.average.toFixed(1)
);

// ------------------------------------------------------------
// 6. Список відмінників (середній бал >= 90)
// ------------------------------------------------------------
console.log(
  '\n===== 5. Відмінники (середній бал від ' + EXCELLENT_SCORE + ') ====='
);
let excellentCount = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].average >= EXCELLENT_SCORE) {
    console.log(
      '⭐ ' + students[i].name + ' — ' + students[i].average.toFixed(1)
    );
    excellentCount++;
  }
}
if (excellentCount === 0) {
  console.log('Відмінників немає');
}

// ------------------------------------------------------------
// 7. Загальна кількість оцінок, виставлених усім студентам разом
// ------------------------------------------------------------
console.log('\n===== 6. Загальна кількість оцінок =====');
let totalGrades = 0;
for (let i = 0; i < students.length; i++) {
  totalGrades += students[i].grades.length;
}
console.log('Усього оцінок виставлено: ' + totalGrades);

// ------------------------------------------------------------
// 8. Додати нового студента та нову оцінку вже наявному
// ------------------------------------------------------------
console.log('\n===== 7. Додавання студента та оцінки =====');

// 8.1 Новий студент
students.push({
  name: 'Богдан Лисенко',
  grades: [75, 80, 85, 70, 90],
});
// рахуємо йому середній бал так само, як іншим
students[students.length - 1].average = getAverage(
  students[students.length - 1].grades
);
console.log('Додано студента: ' + students[students.length - 1].name);

// 8.2 Нова оцінка наявному студенту (Івану Петренку)
students[1].grades.push(95);
students[1].average = getAverage(students[1].grades); // перераховуємо середній бал
console.log(
  'Іван Петренко отримав нову оцінку 95. Оцінки: ' +
    students[1].grades.join(', ') +
    '. Новий середній бал: ' +
    students[1].average.toFixed(1)
);

// ------------------------------------------------------------
// 9. Підсумок: оновлений журнал
// ------------------------------------------------------------
console.log('\n===== Оновлений журнал =====');
for (let i = 0; i < students.length; i++) {
  console.log(
    students[i].name +
      ' | оцінок: ' +
      students[i].grades.length +
      ' | середній бал: ' +
      students[i].average.toFixed(1)
  );
}

let newTotal = 0;
for (let i = 0; i < students.length; i++) {
  newTotal += students[i].grades.length;
}
console.log('Тепер усього оцінок: ' + newTotal);
