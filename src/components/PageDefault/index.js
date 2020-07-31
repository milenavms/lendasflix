import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--greyDark);
    color: var(--white);
    padding-left: 5%;
    padding-top: 94px;
    padding-right: 5%;
    flex: 1;
`;

export default function PageDefault({ children }) {
    return (
        <>
            <Menu />
            <Main>
                {children}
            </Main>            
            <Footer />
        </>
    )
}