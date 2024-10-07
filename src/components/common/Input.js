// ======= Library =======

import styled from 'styled-components';

// ======= Module =======

import CommonStyle from "components/style"

// ======= Style =======

const Input = styled.input`

    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    
    height: ${props => {
        return props.height ? props.height : "fit-content"
    }};
    color: ${props => {
        return props.color ? CommonStyle.setColor(props.color) : "black"
    }};
    font-family: ${props => {
        return props.family ? props.family : "regular"
    }};
    font-size: ${props => {
        return CommonStyle.setFontSize(props.size)
    }};
    font-weight: ${ ({ weight }) => {
        return weight ? weight : "400"
    }};

    background-color: ${props => {
        return props.backgroundColor ? CommonStyle.setColor(props.backgroundColor) : CommonStyle.setColor("none")
    }};
    border: ${props => {
        return props.borderColor ? `1px solid ${CommonStyle.setColor(props.borderColor)}` : null
    }};
    border-radius: ${props => {
        return props.radius ? props.radius : null 
    }};
    letter-spacing: ${({ letterSpacing }) => {
        return letterSpacing ? letterSpacing : null
    }};

    &::placeholder{
        color: ${props => {
            return props.placeholderColor ? props.placeholderColor : null
        }};    
    }
`

export default Input