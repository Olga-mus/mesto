export default class UserInfo {
  constructor({ nameElementSelector, aboutElementSelector }){
    this._nameElement = document.querySelector(nameElementSelector);
    this._aboutElement = document.querySelector(aboutElementSelector);
  }


//возвращает объект с данными пользователя
  getUserInfo() {
    const data = {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
  }
  return data
  }

  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
  }
}
