import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props){
  const userInfoContext = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === userInfoContext._id;
  const isLiked = props.card.likes.some(i => i._id === userInfoContext._id);

  const cardDeleteButtonClassName = (
    `element__trash-icon ${isOwn ? '' : 'element__trash-icon_disabled'}`
  ); 
  const cardLikeButtonClassName = (
    `element__like-icon ${isLiked ? 'element__like-icon_pushed' : ''}`
  ); 

  return (
    <li className="element">
    <img className="element__image" src={props.card.link} alt={props.card.name} onClick={() => {props.onCardClick(props.card)}} />
    <div className="element__description-block">
      <h3 className="element__name">{props.card.name}</h3>
      <div className="element__like-block">
        <button className={cardLikeButtonClassName} type="button" aria-label="Лайкнуть" onClick={() => {props.onCardLike(props.card)}} ></button>
        <p className="element__like-number">{props.card.likes.length}</p>
      </div>
    </div>
    <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" onClick={() => {props.onCardDelete(props.card)}}></button>
  </li>
  );    
}

export default Card;