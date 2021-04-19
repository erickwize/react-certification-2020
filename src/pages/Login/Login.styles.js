import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    place-items: center;

    @media(max-width:320px){
        margin-left: 5%;
        width: 90%;
    }
`;

export const LoginCard = styled.div`
    background-color: ${props => props.theme.login.backgroundColor};
    border-radius: 10px;
    box-shadow: ${props => props.theme.login.boxShadow};
    color: ${props => props.theme.login.color};
    display: grid;
    padding: 2rem;
    place-items: center;
`;

export const Form = styled.form`
    display: grid;
    place-items: center;
    width: 100%;
`;

export const Label = styled.label`
    width: 100%;
    svg{
        position: absolute;
        margin: 4px 0 0 5px;
        fill: ${props => props.theme.login.svgColor};
    }
`;

export const FormInput = styled.input`
    background-color: ${props =>  props.theme.login.inputBackgroundColor};
    border: none;
    color: ${props =>  props.theme.login.color};
    border-radius: 20px;
    height: 40px;
    margin: 0 0 30px 0;
    outline: none;
    padding: 20px;
    padding-left: 45px;
    width: 100%;
`;

export const InfoContainer = styled.div`
    p{    
        background-color: #f8d7da;
        border-radius:5px;
        color: #721c24;
        font-size: 14px;
        margin-top: -10px;
        padding: 10px;
    }
`;

export const Button = styled(motion.button)`
    background-color: #cd76dc;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 17px;
    outline none;
    height: 2.5rem;
    width: 35%;
`;
