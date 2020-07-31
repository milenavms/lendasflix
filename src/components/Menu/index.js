import React from 'react'
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'

import {LogoImag, MenuWrapper } from './style.js';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <>
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImag src={Logo} alt="Logo CatFlix"></LogoImag>
            </Link>
            <Button as={Link}  to="/cadastro/video"> Novo Vídeo</Button>
        </MenuWrapper>
        </>
    )
}