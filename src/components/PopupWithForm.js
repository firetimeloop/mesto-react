function PopupWithForm(props){
  const classNameActive = `popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={classNameActive}>
      <div className="popup__container popup__container_type_form">
        <h2 className="popup__header">{props.title}</h2>
        <form name="edit-profile-form" className="popup__form popup__form_type_edit" onSubmit={props.onSubmit} noValidate>
          {props.children}
          <button className="popup__submit-button" type="submit" aria-label="Отправить">{props.buttonText}</button>
        </form>
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;