import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import dadosIniciais from '../../data/dados_iniciais.json'
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: var(--greyDark);
  padding-top: 94px;

  @media (max-width: 800px){
    padding-top: 40px;
  }
`


function Home() {
  return (
    <AppWrapper>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Conheça mais sobre as lendas do folclore brsileiro"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[6]}
      />
    


      <Footer />

    </AppWrapper>
  );
}

export default Home;
