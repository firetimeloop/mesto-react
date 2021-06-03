import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props){
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateUser({
          name: name,
          about: description,
        });
    } 

    return (
        <PopupWithForm name="changing-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input value={name || ""} onChange={handleNameChange} id="name-input" name="edit-name" type="text" className="popup__input-text-box popup__input-text-box_type_name" minLength="2" maxLength="40" required />
            <span className="name-input-error popup__error"></span>
            <input value={description || ""} onChange={handleDescriptionChange} id="bio-input" name="edit-bio" type="text" className="popup__input-text-box popup__input-text-box_type_bio" minLength="2" maxLength="200" required />
            <span className="bio-input-error popup__error"></span>
        </PopupWithForm>
    );
  }
  
  export default EditProfilePopup;