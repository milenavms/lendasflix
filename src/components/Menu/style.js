import styled from 'styled-components'


export const LogoImag = styled.img`
    max-width: 168px;

    @media (max-width: 800px){
        max-width: 105px;
     
    }
`

export const MenuWrapper = styled.nav`
    background-color: var(--black);
    width: 100%;
    height: 94px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--primary);
    position: fixed;
    top: 0;
    left: 0%;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5px;
    z-index: 1;

    @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
    }

`

