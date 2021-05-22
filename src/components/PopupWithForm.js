import React from 'react';

class PopupWithForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isOpen: this.props.isOpen,
      };
    }
    render() {
        const classNameActive = `popup popup_type_${this.props.name} ${this.state.isOpen ? 'popup_opened' : ''}`;

        return (
          <div className={classNameActive}>
            <div className="popup__container popup__container_type_form">
              <h2 className="popup__header">{this.props.title}</h2>
              <form name="edit-profile-form" className="popup__form popup__form_type_edit" noValidate>
                {this.props.children}
                <button className="popup__submit-button" type="submit" aria-label="Отправить">{this.props.buttonText}</button>
              </form>
              <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={this.props.onClose}></button>
            </div>
          </div>
        );
    }
}

export default PopupWithForm;