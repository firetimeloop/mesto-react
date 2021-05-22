import React from 'react';

class Card extends React.Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.onCardClick(this.props.card);
  }  

  render(){
    return (
      <li className="element">
      <img className="element__image" src={this.props.card.link} alt={this.props.card.name} onClick={this.handleClick} />
      <div className="element__description-block">
        <h3 className="element__name">{this.props.card.name}</h3>
        <div className="element__like-block">
          <button className="element__like-icon" type="button" aria-label="Лайкнуть"></button>
          <p className="element__like-number">{this.props.card.likes.length}</p>
        </div>
      </div>
      <button className="element__trash-icon" type="button" aria-label="Удалить"></button>
    </li>
    );    
  }
}

export default Card;