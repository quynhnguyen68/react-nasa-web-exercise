import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popup, Button, TextInput, TextArea } from '../components';
import '../theme/Styles.scss';
import './styles.scss';
import theme from '../theme';
import store from '../store';
import { editItem } from '../actions';

class FormPopup extends Component {
    static propTypes = {
        onYesPress: PropTypes.func,
    }

    static defaultTypes = {
        onYesPress: () => {},
    }
    
    constructor(props){
      super(props);
      this.state = {
        isVisible: false,
        selectedData: null,
        image: '',
        title: '',
        center: '',
        description: '',
      };
      this._selectedData = null;
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this._onTextChange = this._onTextChange.bind(this);
      this._onSavePress = this._onSavePress.bind(this);
    }

    open(info) {
        this._selectedData = info;
        const detail = info && info.data && info.data[0];
        this.setState({
            isVisible: true,
            image: info && info.links && info.links[0].href,
            title: detail && detail.title,
            center: detail && detail.center,
            description: detail && detail.description,
        });
    }

    close() {
        this._selectedData = null;
        this.setState({
            isVisible: false,
            image: '',
            title: '',
            center: '',
            description: '',
        });
    }

    _onTextChange(event) {
        const { state } = this;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    _onSavePress() {
        const { image, title, center, description } = this.state;
        if (this._selectedData){
            const newData = {
                ...this._selectedData,
                data: [
                    {
                        ...this._selectedData.data[0],
                        title,
                        center,
                        description,
                    }
                ],
                links: [
                    {
                        ...this._selectedData.links[0],
                        href: image,
                    }
                ]
            };

            Object.assign(this._selectedData, newData);
            store.dispatch(editItem());
            this.props.onYesPress();
            this.close();
        }
    }

    render(){
        const { isVisible, image, title, center, description, error } = this.state;
        return (
            <Popup
                popupClassName="form-popup"
                isVisible={isVisible}
            >
                <h2>Edit item</h2>
                {error && <p>Please fill all fields</p>}
                <div className="input-container">
                    <p>Title</p>
                    <TextInput 
                        name="title"
                        inputClassName="input-form"
                        value={title}
                        onChange={this._onTextChange}
                        placeholder="Enter title" 
                    />
                </div>

                <div className="input-container">
                    <p>Thumbnail image</p>
                    <TextInput 
                        name="image"
                        inputClassName="input-form"
                        value={image} 
                        onChange={this._onTextChange}
                        placeholder="Enter image url"
                    />
                </div>

                <div className="input-container">
                    <p>Center name</p>
                    <TextInput 
                        type="text"
                        name="center"
                        inputClassName="input-form"
                        value={center} 
                        onChange={this._onTextChange}
                        placeholder="Enter center name"
                    />
                </div>

                <div className="input-container">
                    <p>Description</p>
                    <TextArea 
                        name="description"
                        inputClassName="input-form textarea-form"
                        value={description}
                        onChange={this._onTextChange}
                        placeholder="Enter description"  
                    />
                </div>
    
                <div className="button-container">
                    <Button
                        imageUrl={theme.Image.Save}
                        btnClassName="button-save"
                        onClick={this._onSavePress} 
                    >
                        <p>Save</p>
                    </Button>
                    <Button
                        btnClassName="button-close"
                        imageUrl={theme.Image.Close}
                        onClick={this.close} 
                    />
                </div>
            </Popup>
        );
    }
}

export default FormPopup;
