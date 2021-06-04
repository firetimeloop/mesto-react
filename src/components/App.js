import logo from '../logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import {api, Api} from '../utils/api';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App(props){

  const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(),api.getInitialCards()])
      .then(([userInfo, cardsInfo,]) => {
        setCurrentUser(userInfo);
        setCards([...cardsInfo]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopup(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopup(true);
  }
  function handleCardClick(card){
    setImagePopupOpen(true);
    setSelectedCard(card);
  }
  function closeAllPopups(){
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }
  function handleUpdateUser(name, about){
    api.editUserInfo(name, about)
    .then(userInfo => {
      setCurrentUser(userInfo);
      closeAllPopups();
  })
    .catch((err) => {
      console.log(err);
    });
  }
  function handleUpdateAvatar(avatar) {
    api.editAvatar(avatar)
    .then(userInfo => {
      setCurrentUser(userInfo);
      closeAllPopups();
  })
    .catch((err) => {
      console.log(err);
    });
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id).then((deletedCard) => {
      setCards(cards => cards.filter((state) => state._id !== card._id));
    })
    .catch((err) => {
      console.log(err);
    });
  } 
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch((err) => {
        console.log(err);
      });
  } 
  function handleAddPlaceSubmit(data) {
    api.postCard(data.name, data.link)
    .then(newCard => {
      setCards(cards => ([newCard, ...cards]));
      closeAllPopups();
  })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <div className="page">
          <Header />
          <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />


        </div>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen}/>

      </>
    </CurrentUserContext.Provider>
  );

}
export default App;
