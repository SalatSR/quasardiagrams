/** Массив данных для построения диаграммы
 * добавьте или удалите дополнительные объекты
 * с 3мя обязательными параметрами:
 * name, count и color
 */
export let initialData = [
  {
    'name': 'риски',
    'count': 1301,
    'color': '#FBDE37',
  },
  {
    'name': 'опасность',
    'count': 226,
    'color': '#E25E65',
  },
  {
    'name': 'в норме',
    'count': 815,
    'color': '#31B07E',
  },
  {
    'name': 'в норме',
    'count': 815,
    'color': '#447788',
  },
  {
    'name': 'в норме',
    'count': 815,
    'color': '#780',
  },
  {
    'name': 'в норме',
    'count': 815,
    'color': '#741',
  },
];

// Не понятно что означают цифры 0, 1, 2.
// Лучше использовать именованные константы:
// https://refactoring.guru/ru/replace-magic-number-with-symbolic-constant
/** Число задаёт состояние диаграммы, значения 0, 1, 2 */
export let sectionState = 0;
