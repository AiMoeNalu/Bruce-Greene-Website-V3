import React, {Component, Fragment} from 'react';
import './Homepage.scss';

import TwitchEmbed from '../../Components/Twitch-Embed/TwitchEmbed';
import CustomForm from '../../Components/Custom-Form/CustomForm';
import CustomButton from '../../Components/Custom-Button/CustomButton';
import CustomInput from '../../Components/Custom-Input/CustomInput';
export default class Homepage extends Component {

    handleChange = (e) => {
        console.log(e);
        e.preventDefault();
    }

    render(){
        return(
        <Fragment>
            <div id='homepage'>
                <div className='row1'>
                    <TwitchEmbed id='twitch-embed'/>
                    <div id='donate-form'>
                        <CustomForm type='donate' title='Donate'>
                            <CustomInput className='custom-input'/>
                            <CustomButton 
                                className='custom-button'
                                onClick={ this.handleChange }
                            >
                                Testing
                            </CustomButton>
                        </CustomForm>
                    </div>
                </div>
                <div className='row2'>
                    Row 2
                </div>
                <div className='row3'>
                    Row 3
                </div>
            </div>
        </Fragment>
        )}
}