import React, { Component } from 'react';
import styled from 'styled-components';

import closeButton from '../assets/close.svg';

const QuitButton = styled.img`
    width: 30px;
    height: 30px;
    position: fixed;
    right: 1em;
    top: 1em;
    background-color: white;
    padding: 5px;
    cursor: pointer;
`;

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalDisplay: (props.autoShow || true) ? { display: 'block' } : { display: 'none' }
        };

    }

    /**
     * Shows the modal
     */
    show() {
        this.setState({
            modalDisplay: { display: 'block' }
        });
    }

    /**
     * Hides the modal
     */
    hide() {
        this.setState({
            modalDisplay: { display: 'none' }
        });
    }

    render() {
        const ModalBackground = styled.div`
            position: fixed;
            background-color: rgba(0,0,0,0.7);
            width: 100%;
            height: 100%;
            z-index: 2;
        `;

        return(
            <ModalBackground style={ this.state.modalDisplay }>
                <QuitButton onClick={ ()=>{ this.hide(); } } src={ closeButton }/>
                { this.props.children }
            </ModalBackground>
        );
    }
}

export default Modal;