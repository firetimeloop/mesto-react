function ImagePopup(props){
    const classNameActive = `popup popup_type_image ${props.isOpen ? 'popup_opened' : ''}`;

    return (
        <div className={classNameActive}>
            <div className="popup__container popup__container_type_image">
                <img className="popup__image" src={props.card.link} alt={props.card.name} />
                <h2 className="popup__image-description">{props.card.name}</h2>
                <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
            </div>
        </div>
    );
}

export default ImagePopup;