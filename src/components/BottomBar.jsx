import React, { useState } from 'react';
import styled from 'styled-components';

export default function BottomBar() {
  const [clicked, setClicked] = useState(false);
  return (
    <Background>
      <ConfirmOrder clicked={clicked} onClick={() => setClicked(!clicked)}>
        {
        clicked
          ? (
            <OrderStatus>
              Fechar pedido
            </OrderStatus>

          )
          : (
            <OrderStatus>
              Selecione os 3 itens
              {' '}
              <br />
              {' '}
              para fechar o pedido
            </OrderStatus>
          )
      }
      </ConfirmOrder>
    </Background>
  );
}

const Background = styled.div`
    width: 100%;
    height: 92px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0px;
`;
const ConfirmOrder = styled.button`
    width: calc(100% - 50px);
    height: 61px;
    background-color: ${(props) => (props.clicked ? '#32B72F' : '#CBCBCB')} ;
    border-radius: 50px;
/* 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 
    inset ${(props) => (props.clicked ? '0px 0px 0px 5px #32B72F' : '')};   */

`;

const OrderStatus = styled.p`
    color: #fff;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 500;
`;
