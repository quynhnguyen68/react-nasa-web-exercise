import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Icon, Popup, Button } from '../components';
import { ImageUtil } from '../utils';
import '../theme/Styles.scss';
import './styles.scss';


class CommonPopup extends Component {
    static propTypes = {
      content: PropTypes.string,
    }

    static defaultTypes = {
      content:"",
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
        const { content, icon, onYesPress} = this.props;
        const { isVisible } = this.state;
        return (
            <Popup
                popupClassMame=""
                isVisible={isVisible}
            >
                {icon && <Icon 
                    src={ImageUtil.isAvailableUrl(data && data.links && data.links[0].href)} 
                    imgClassName="shadow-item img-container"
                />}
                <div className="multiline-text">
                  {content}
                </ div>
                <div className="button-container">
                    <Button
                       btnClassName="button-popup button-yes"
                       onClick={onYesPress} 
                    >
                        <p>Confirm</p>
                    </Button>
                    <Button
                       btnClassName="button-popup"
                       onClick={this.close} 
                    >
                        <p>Cancel</p>
                    </Button>
                </div>
            </Popup>
        );
    }
}

export default CommonPopup;
