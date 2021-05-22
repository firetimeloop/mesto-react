class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _genericMethod(urlSuffix, method, body=null){
    return fetch(`${this.baseUrl}/${urlSuffix}`, {
      method: method,
      headers: this.headers,
      body: body
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        return res;
      });
  }

  async getUserInfo() {
    return this._genericMethod('users/me', 'GET');
  }

  getInitialCards() {
    return this._genericMethod('cards', 'GET');
  }

  editUserInfo(name, about){
    const body = JSON.stringify({
      name: name,
      about: about
    });
    return this._genericMethod('users/me', 'PATCH', body);
  }

  postCard(name, link){
    const body = JSON.stringify({
      name: name,
      link: link
    });
    return this._genericMethod('cards', 'POST', body);
  }

  deleteCard(idCard){
    return this._genericMethod(`cards/${idCard}`, 'DELETE');
  }

  unlikeCard(idCard){
    return this._genericMethod(`cards/likes/${idCard}`, 'DELETE');
  }

  likeCard(idCard){
    return this._genericMethod(`cards/likes/${idCard}`, 'PUT');
  }

  editAvatar(avatar){
    const body = JSON.stringify({
      avatar: avatar
    });
    return this._genericMethod('users/me/avatar', 'PATCH', body);
  }
}

export default new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    authorization: 'ec5ef281-6ed1-433e-a11b-958cd40a7731',
    'Content-Type': 'application/json'
  }
});

