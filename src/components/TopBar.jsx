import React from 'react';
import styled from 'styled-components';

export default function TopBar() {
  return (
    <Content>
      <Title>
        FoodCamp
      </Title>
      <SubTitle>
        Sua comida em 6 minutos
      </SubTitle>
    </Content>
  );
}

const Content = styled.div`
    width: 100%;
    height: 92px;
    background-color: #CF2B2B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    padding-left: 21px;
    position: fixed;
    top: 0px;
`;
const Title = styled.h1`
    color: #fff;
    font-size: 44px;
    font-family: "Righteous";
    font-weight: 500;
`;

const SubTitle = styled.h3`
    color: #fff;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 500;
`;
