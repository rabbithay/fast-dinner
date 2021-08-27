import React, { useState } from 'react';
import styled from 'styled-components';

export default function BottomBar() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Background>
      <ConfirmOrder enabled={enabled} onClick={() => setEnabled(enabled)}>
        <OrderStatus>
          {(enabled) ? 'Fechar pedido' : (
            <>
              Selecione itens das 3 categorias
              {' '}
              <br />
              {' '}
              para fechar o pedido
            </>
          )}
        </OrderStatus>
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
    z-index: 3;
`;
const ConfirmOrder = styled.button`
    width: calc(100% - 50px);
    height: 61px;
    background-color: ${(props) => (props.enabled ? '#f676b5' : '#bbbbcd')} ;
    border-radius: 50px;
`;
const OrderStatus = styled.p`
    color: #fff;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 500;
`;
