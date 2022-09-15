let isAppOn = true

let userType = "";

let admin = {
  login: "",
  password: "",
  isCreated: false,
  isAuthorized: false,
};

let client = {
  login: "",
  password: "",
  isCreated: false,
  isAuthorized: false,
};

const phones = ['Samsung', 'Iphone']
const sells = {}

const login = (userType) => {
  const login = prompt(`Введите логин (${userType}).`);
  const password = prompt(`Введите пароль (${userType}).`);
  return { login, password };
};

const authorization = (userType, object) => {
  console.log(object);
  if (!object.isCreated) {
    alert("Создайте аккаунт.");
    object = { ...login(userType), isCreated: true };
    if (userType === 'admin') admin = object
    else client = object
    alert("Аккаунт создан.");
  } else {
    alert("Войдите в аккаунт.");
    const loginAttempt = login(userType);
    if (
      loginAttempt.login === object.login &&
      loginAttempt.password === object.password
    ) {
      object.isAuthorized = true
      if (userType === 'admin') {
        client.isAuthorized = false
        admin.isAuthorized = true
      } else {
        client.isAuthorized = true
        admin.isAuthorized = false
      }
      alert("Вы успешно вошли.");
    } else {
      alert("Неправильные данные.");
    }
  }
};

while (isAppOn) {
  const action = prompt(`
  Выберите действие из списка (введите цифру):
  1. Авторизация.
  2. Покупка.
  3. Проверка оборота.
  4. Выйти из аккаунта.
  5. Закрыть приложение.
  `);
  console.log(action == 2, action)
  if (action === '1') {
    userType = prompt('Вы клиент или админ? Ответьте "admin" или "client"');
    if (userType === "admin") {
      authorization(userType, admin);
    } else {
      authorization(userType, client);
    }
  } else if (action === '4') {
    admin.isAuthorized = false
    client.isAuthorized = false
  } else if (action === '5') {
    isAppOn = false
  } else if (action === '2') {
    if (!client.isAuthorized) {
      alert("Сначала авторизуйтесь.");
    } else {
      let phonesList = ''
      phones.forEach((item, ind) => phonesList += `${ind + 1}. ${item}\n`)
      console.log(phonesList)
      const choice = prompt(`
      Выберите телефон из списка. 
      ${phonesList}
      `)
      if (sells.hasOwnProperty(phones[choice - 1])) sells[phones[choice - 1]]++
      else sells[phones[choice - 1]] = 1
      console.log(sells)
    }
  } else {
    if (!admin.isAuthorized) {
      alert("Сначала авторизуйтесь.");
    } else {
      alert(JSON.stringify(sells))
    }
  }
}
