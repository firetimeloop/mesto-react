import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';



function Main(props) {
  const userInfoContext = React.useContext(CurrentUserContext);

  return (
      <main className="main-content">
        <section className="profile">
          <div className="profile__info">
            <button className="profile__edit-avatar" onClick={props.onEditAvatar}>
              <img className="profile__avatar" alt="Аватарка" src={userInfoContext.avatar} />
            </button>
            <div className="profile__description">
              <div className="profile__edit-block">
                <h1 className="profile__name">{userInfoContext.name}</h1>
                <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
              </div>
              <p className="profile__bio">{userInfoContext.about}</p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </section>
        <section>
          <ul className="elements">
            {props.cards.map((card, i) => (
              <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
            ))}
          </ul>
        </section>
      </main>
  );
}

export default Main;