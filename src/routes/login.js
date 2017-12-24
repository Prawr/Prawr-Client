import React, { Component } from 'react';
import styled from 'styled-components';

import Config from '../config';
import ApiRoute from '../helpers/ApiRoute';
import SessionHelper from '../helpers/SessionHelper';

// Assets
import Wallpaper from '../assets/wallpaper.jpg';
import LionLogo from '../assets/lion_sm.png';

// Rest Client
import unirest from 'unirest';

// Styles
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
    height: 460px;
    background-color: #33373C;
    top: 50%;
    left: 50%;
    margin-left: -300px;
    margin-top: -230px;
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
    margin-top: 30%;
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
    font-family: 'Roboto', sans-serif;
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
    border-bottom: 2px solid rgba(255,255,255,0.25);
    float:left;
    margin-bottom: 1em;
    padding-left:0;
    padding-right:0;
    padding-bottom: 3px;

    &:focus {
        border-bottom: 2px solid white;
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

const ErrorText = styled.div`
    color: red;
    opacity: 0.9;
    font-size: 13pt;
    width: 65%;
    border-radius: 4px;
    margin-bottom: 0px;
    text-align: left;
`;


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '', // current input value
            password: '', // current input value
            loginText: 'Login', // current button text
            usernameStyle: {}, // textbox style
            passwordStyle: {}, // textbox style
            infoText: '' // infobox (set to '' to hide)
        };
    }

    /**
     * Called when logging in
     */
    onSubmit() {
        this.setState({
            loginText: 'Logging in...',
            usernameStyle: {},
            passwordStyle: {}
        });
        let errorStyle = {
            borderBottom: '2px solid red'
        };

        const url = ApiRoute('/authenticate');

        const username = this.state.username;
        const password = this.state.password;
        let success = false;

        unirest
            .post(url)
            .headers( {'Content-Type': 'application/json'} )
            .send( JSON.stringify({ username,password }) )
            .end( (response) => {
                
                if(response.body.type === 'USERNAME_INVALID') {
                    
                    this.setState({
                        usernameStyle: errorStyle,
                        infoText: 'We couldn\'t find a user with that name'
                    });

                } else if(response.body.type === 'PASSWORD_INVALID') {

                    this.setState({
                        passwordStyle: errorStyle,
                        infoText: 'The entered password doesn\'t match.'
                    });

                } else if(response.body.type === 'TOKEN_GRANT') {

                    SessionHelper.saveCookie('token', response.body.token, 14);
                    // user is now logged in1
                    success = true;
                }
            });

        // to reset form
        if(!success) {
            this.setState({
                loginText: 'Login'
            });
        }
    }

    keyDown(key) {
        if(key.keyCode === 13) {
            this.onSubmit();
        }  
    }

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
                        <LoginGreeting className="text-info">LOGIN</LoginGreeting>

                        {
                            (this.state.infoText.length>1) ? <ErrorText>{ this.state.infoText }</ErrorText> : ''
                        }
                        <br/>
                        <UserInputLabel>Username</UserInputLabel>
                        <div class="input-group">
                            <br/>
                            <UserInput 
                                type="text"
                                onKeyDown={ (e) => this.keyDown(e) }
                                style={ this.state.usernameStyle }
                                onChange={ (input) => { this.setState({username:input.target.value}) }}/>
                        </div>

                        <UserInputLabel>Password</UserInputLabel>
                        <div class="input-group">
                            <br/>
                            <UserInput 
                                type="password"
                                onKeyDown={ (e) => this.keyDown(e) }
                                style={ this.state.passwordStyle }
                                onChange={ (input) => { this.setState({password:input.target.value}) }}/>
                        </div>
                        <HintLink href="" className="text-muted" id="username" >
                            Forgot password?
                        </HintLink>
                        
                        <br/>

                        <SubmitButton 
                            type="button" 
                            className="btn btn-lg btn-info"
                            onClick={ () => this.onSubmit() }>{ this.state.loginText }</SubmitButton>

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