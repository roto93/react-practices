import React from 'react'
import styled from 'styled-components'

const Modal = ({ isOpen, children, msg, setIsOpen, isWarning }) => {
    if (!isOpen) return null
    const modal_style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const box = {
        width: '350px',
        height: '150px',
        borderRadius: '15px',
        backgroundColor: isWarning ? '#ffadad' : '#d8e2dc',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 2,
    }
    return (
        <div style={modal_style}>
            <DropDown onClick={() => { setIsOpen(false) }}></DropDown>
            <div style={box}>
                <P primary={isWarning}>{msg}</P>
                <Button onClick={() => { setIsOpen(false) }}>close</Button>
                {children}
            </div>
        </div>
    )
}

export default Modal



const P = styled.p`
user-select: none;
font-size:30px;
color:${props => props.primary ? 'red' : 'green'} ;
font-family:Arial, Helvetica, sans-serif;

`

const Button = styled.button`
    width:50px;
    height:30px;
:hover{
    box-shadow:1px 1px 2px darkgray
}
`
const DropDown = styled.div`
    width:100%;
    height:100%;
    display:fixed;
    position:absolute;

`