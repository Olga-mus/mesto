export default class UserInfo {

  constructor({
    userName,
    userAbout
  }) {
    this._userName = document.querySelector(userName);
    this._userAbout = document.querySelector(userAbout);
  }

//возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
  getUserInfo() {
    return {
      firstname: this._userName.textContent,
      proffesion: this._userAbout.textContent
    }
  }

  //принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(name, about) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
  }

}
