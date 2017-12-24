import React, { Component } from 'react';
import styled from 'styled-components';

// Assets
import Wallpaper from '../assets/wallpaper.jpg';
import LionLogo from '../assets/lion_sm.png';

const Page = styled.div`
    background: url(${ Wallpaper }) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:100%;
    width:100%;
    position:fixed;
`;

const LoginForm = styled.div`
    color: white;
    width: 600px;
    height: 400px;
    background-color: #33373C;
    top: 50%;
    left: 50%;
    margin-left: -300px;
    margin-top: -200px;
    position:relative;
    border-radius: 5px;

    @media(max-width: 500px) {
        max-width: 100%;
        max-height: 100%;
        top:0;
        left:0;
        margin:0;
        top: 50px;
    }
`;

const LogoArea = styled.div`
    position:absolute;
    right:0;
    width: 35%;
    height:100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color:white;
    text-align:center;

    @media(max-width: 500px) {
        display:none;
    }
`;

const Logo = styled.img`
    width:80%;
    margin-top: 25%;
    margin-bottom: 0;
`;

const Title = styled.h2`
    color: #33373C;
    font-family: 'Julius Sans One', cursive;
`;

const InputArea = styled.div`
    padding: 1em;
    color: #efefef;

    @media(max-width: 500px) {
        width:100%;
    }
`;

const LoginGreeting = styled.h2`
    font-family: 'Poiret One', sans-serif;
    margin-bottom: 0.5em;
    text-align:center;
    width: 65%;

    @media(max-width: 500px) {
        width: 100%;
    }
`;

const UserInput = styled.input`
    width: calc(65% - 1em);
    padding: 10px;
    background-color: rgba(0,0,0,0);
    border: none;
    outline: 0px;
    color: #efefef;
    border-bottom: 1px solid rgba(255,255,255,0.25);
    float:left;
    margin-bottom: 1em;

    &:focus {
        border-bottom: 1px solid white;
    }

    @media(max-width: 500px) {
        width: 100%;
    }
`;

const UserInputLabel = styled.span`
    font-family: 'Julius Sans One', sans-serif;
    font-weight: bold;
    font-size: 10pt;
    color: rgba(255,255,255,0.5);
`;

const SubmitButton = styled.button`
    width: calc(65% - 0.75em);
    margin-top: 0.5em;
    cursor: pointer;

    @media(max-width: 500px) {
        width: 100%;
    }
`;

const HintLink = styled.a`
    font-family: 'Julius Sans One', sans-serif;
    font-weight: bold;
    font-size: 11pt;
    color: rgba(255,255,255,0.5);

    &:hover {
        color: rgba(255,255,255,0.6) !important;
        cursor: pointer;
        text-decoration: none;
    }
`;

const RegisterInfo = styled.div`
    text-align:right;
    width: calc(65% - 1em);
    font-family: 'Roboto', cursive;
    color: rgba(255,255,255,0.5);
    margin-top: 8px;

    @media(max-width: 500px) {
        width: 100%;
    }
`;

class Login extends Component {
    render() {
        return(
            <Page class="container">
                <LoginForm>
                    <LogoArea>
                        <Logo src={ LionLogo } />
                        <hr/>
                        <Title>Prawr</Title>
                    </LogoArea>
                    <InputArea>
                        <LoginGreeting className="text-info">Login</LoginGreeting>

                        <UserInputLabel>Username</UserInputLabel>
                        <div class="input-group">
                            <br/>
                            <UserInput type="text" />
                        </div>

                        <UserInputLabel>Password</UserInputLabel>
                        <div class="input-group">
                            <br/>
                            <UserInput type="password" />
                        </div>
                        <HintLink href="" className="text-muted">
                            Forgot password?
                        </HintLink>
                        
                        <br/>

                        <SubmitButton type="button" className="btn btn-lg btn-info">Login</SubmitButton>

                        <br/>

                        <RegisterInfo>
                            ...or <a href="" className="text-info">create</a> an account
                        </RegisterInfo>
                    </InputArea>
                </LoginForm>
            </Page>
        );
    }
}

export default Login;