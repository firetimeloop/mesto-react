import logo from '../logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: {},
    };
  }

  handleEditAvatarClick = () => {
    this.setState({
      isEditAvatarPopupOpen: true,
    });
  };
  handleEditProfileClick = () => {
    this.setState({
      isEditProfilePopupOpen: true,
    });
  };
  handleAddPlaceClick = () => {
    this.setState({
      isAddPlacePopupOpen: true,
    });
  };
  handleCardClick = (card) => {
    this.setState({
      isImagePopupOpen: true,
      selectedCard: card,
    });
  };
  closeAllPopups = () => {
    this.setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      isImagePopupOpen: false,
      selectedCard: {},
    });
  };

  render() {
    return (
      <>
        <div className="page">
          <Header />
          <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick} onCardClick={this.handleCardClick} />
          <Footer />


        </div>

        {this.state.isEditProfilePopupOpen && <PopupWithForm name="changing-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups}>
          <input id="name-input" name="edit-name" type="text" className="popup__input-text-box popup__input-text-box_type_name" minLength="2" maxLength="40" required />
          <span className="name-input-error popup__error"></span>
          <input id="bio-input" name="edit-bio" type="text" className="popup__input-text-box popup__input-text-box_type_bio" minLength="2" maxLength="200" required />
          <span className="bio-input-error popup__error"></span>
        </PopupWithForm>}

        {this.state.isAddPlacePopupOpen && <PopupWithForm name="adding-card" title="Новое место" buttonText="Сохранить" isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups}>
          <input id="place-name-input" name="edit-name" type="text" placeholder="Название" className="popup__input-text-box popup__input-text-box_type_card-name" minLength="2" maxLength="30" required />
          <span className="place-name-input-error popup__error"></span>
          <input id="url-input" name="edit-bio" placeholder="Ссылка на картинку" className="popup__input-text-box popup__input-text-box_type_src" type="url" required />
          <span className="url-input-error popup__error"></span>
        </PopupWithForm>}

        {this.state.isEditAvatarPopupOpen && <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups}>
          <input id="url2-input" name="edit-bio" placeholder="Ссылка на картинку" className="popup__input-text-box popup__input-text-box_type_src" type="url" required />
          <span className="url2-input-error popup__error"></span>
        </PopupWithForm>}

        {this.state.isImagePopupOpen && <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups} isOpen={this.state.isImagePopupOpen}/>}
      </>
    );
  }
}
export default App;
