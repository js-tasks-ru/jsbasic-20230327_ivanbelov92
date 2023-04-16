/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (!name) {
    return false;
  }

  // Проверяем, есть ли в имени пробелы
  if (name.indexOf(" ") !== -1) {
    return false;
  }

  // Проверяем, имеет ли имя длину меньше 4 символов
  if (name.length < 4) {
    return false;
  }

  return true;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
