import React from 'react';
import Card from './Card';
import Api from '../utils/Api';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: [],
    };
  }

  componentDidMount() {
    Api.getUserInfo()
    .then(userInfo => this.setState({userName: userInfo.name, userDescription: userInfo.about, userAvatar: userInfo.avatar}))
    .catch((err) => {
      console.log(err);
    });
    Api.getInitialCards()
    .then(cardsInfo => this.setState({cards: cardsInfo}))
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
        <main className="main-content">
          <section className="profile">
            <div className="profile__info">
              <button className="profile__edit-avatar" onClick={this.props.onEditAvatar}>
                <img className="profile__avatar" alt="Аватарка" src={this.state.userAvatar} />
              </button>
              <div className="profile__description">
                <div className="profile__edit-block">
                  <h1 className="profile__name">{this.state.userName}</h1>
                  <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={this.props.onEditProfile}></button>
                </div>
                <p className="profile__bio">{this.state.userDescription}</p>
              </div>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить" onClick={this.props.onAddPlace}></button>
          </section>
          <section>
            <ul className="elements">
              {this.state.cards.map((card, i) => (
                <Card idCard={i} card={card} key={i} onCardClick={this.props.onCardClick}/>
              ))}
            </ul>
          </section>
        </main>
    );
  };
}

export default Main;