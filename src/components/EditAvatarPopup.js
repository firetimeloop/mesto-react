import React from 'react';
import PopupWithForm from './PopupWithForm';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props){
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
    } 

    return (
        <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input ref={avatarRef} id="url2-input" name="edit-bio" placeholder="Ссылка на картинку" className="popup__input-text-box popup__input-text-box_type_src" type="url" required />
            <span className="url2-input-error popup__error"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;