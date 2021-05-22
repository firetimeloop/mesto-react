import React from 'react';

class ImagePopup extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isOpen: props.isOpen,
      };
    }
    render() {
        const classNameActive = `popup popup_type_image ${this.state.isOpen ? 'popup_opened' : ''}`;
        console.log(classNameActive);

        return (
            <div className={classNameActive}>
                <div className="popup__container popup__container_type_image">
                    <img className="popup__image" src={this.props.card.link} />
                    <h2 className="popup__image-description">{this.props.card.name}</h2>
                    <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={this.props.onClose}></button>
                </div>
            </div>
        );
    }
}

export default ImagePopup;