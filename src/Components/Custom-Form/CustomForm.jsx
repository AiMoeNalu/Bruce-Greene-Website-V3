import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './CustomForm.scss';

class CustomForm extends Component {
    constructor({children, type, title, className, ...otherProps}){
        super();
        this.state = {
            inputs:[
                children.filter( obj => obj.props.className.includes("custom-input"))
                .map( obj => obj )
            ],
            button:[
                children
                .filter( obj => obj.props.className.includes('custom-button'))
                .map( obj => obj )
            ]
        }
    }

    static defaultProps = {
        type: 'custom',
        title: 'Custom Form',
        className: ''
    }
    
    handleChange = (e) => {
        
    }

    render(){
        const { inputs, button } = this.state;
        const { type, title, className, ...otherProps } = this.props;
        return(
            <form className={`${type}-form ${className}`} {...otherProps}>
                <h2>{title}</h2>
                {
                    inputs.map(
                        input => input
                    )
                }
                {button}
            </form>
        );
    }
}

CustomForm.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string

}

export default CustomForm;