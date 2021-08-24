import React from 'react';
import styled from 'styled-components';
import ProductBox from './ProductBox';

export default function Menu() {
  return (
    <Background>
      <CategoryDescription>
        Primeiro, seu prato
      </CategoryDescription>
      <CategoryList>
        <ProductBox />
      </CategoryList>
    </Background>
  );
}

const Background = styled.div`
    width: 100%;
    height: auto ;
    background-color: #E5E5E5;
    display: flex;
    align-items: left;
    flex-direction: column;
    padding: 92px 0px 107px 21px;
`;

const CategoryList = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    overflow-x: scroll;
`;

const CategoryDescription = styled.h2`
    margin-top: 30px;
    color: #333;
    font-size: 26px;
    font-family: "Righteous";
    font-weight: 500;
`;
