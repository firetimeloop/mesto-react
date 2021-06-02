import React from 'react';
import PopupWithForm from './PopupWithForm';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup(props){
    const nameRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onAddPlace({
          name: nameRef.current.value,
          link: linkRef.current.value,
        });
    } 

    return (
        <PopupWithForm name="adding-card" title="Новое место" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
          <input ref={nameRef} id="place-name-input" name="edit-name" type="text" placeholder="Название" className="popup__input-text-box popup__input-text-box_type_card-name" minLength="2" maxLength="30" required />
          <span className="place-name-input-error popup__error"></span>
          <input ref={linkRef} id="url-input" name="edit-bio" placeholder="Ссылка на картинку" className="popup__input-text-box popup__input-text-box_type_src" type="url" required />
          <span className="url-input-error popup__error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;