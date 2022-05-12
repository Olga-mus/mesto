export default class UserInfo {

  constructor({
    userName,
    userAbout,
    userAvatar
  }) {
    this._userName = document.querySelector(userName);
    this._userAbout = document.querySelector(userAbout);
    this._userAvatar = document.querySelector(userAvatar);
  }

//возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
  getUserInfo() {
    return {
      firstname: this._userName.textContent,
      proffesion: this._userAbout.textContent
    }
  }

  //принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(name, about, avatar) {
    if(name !== null) {
      this._userName.textContent = name;
    }
    if(about !== null) {
      this._userAbout.textContent = about;
    }
    if(avatar !== null) {
      this._userAvatar.src = avatar;
    }
  }
}
