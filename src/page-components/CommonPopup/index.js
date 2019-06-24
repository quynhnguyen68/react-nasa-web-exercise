import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup, Button } from '../../components';
import '../../theme/Styles.scss';
import './styles.scss';

class CommonPopup extends Component {
    static propTypes = {
      content: PropTypes.string,
      showButton: PropTypes.bool,
    }

    static defaultTypes = {
      content:"",
      showButton: false,
    }
    
    constructor(props){
      super(props);
      this.state = {
        isVisible: false,
      };

      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
    }

    open(){
        this.setState({
            isVisible: true,
        });
    }

    close(){
        this.setState({
            isVisible: false,
        });
    }

    render(){
        const { content, icon, onYesPress, showButton } = this.props;
        const { isVisible } = this.state;
        return (
            <Popup
                popupClassName="common-popup"
                isVisible={isVisible}
            >
                {icon && <Icon 
                    src={icon} 
                    imgClassName="icon"
                />}
                <div className="text-content">
                  {content}
                </ div>
                {showButton && <div className="button-container btn-container">
                    <Button
                       btnClassName="button-popup button-yes"
                       onClick={onYesPress} 
                    >
                        <p>Confirm</p>
                    </Button>
                    <Button
                       btnClassName="button-popup button-no"
                       onClick={this.close} 
                    >
                        <p>Cancel</p>
                    </Button>
                </div>}
            </Popup>
        );
    }
}

export default CommonPopup;
