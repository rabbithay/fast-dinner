import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function BottomBar({ selectedItems }) {
  const [enabled, setEnabled] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (selectedItems.some((i) => i.categoryId === 1)
    && selectedItems.some((i) => i.categoryId === 2)
    && selectedItems.some((i) => i.categoryId === 3)) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [selectedItems]);

  function closeOrder() {
    if (!enabled) {
      return;
    }
    history.push('/revisar');
  }

  return (
    <Background>

      <ConfirmOrder enabled={enabled} onClick={closeOrder}>
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
    @media (min-width: 600px){
      width: 550px;
    }
`;

const OrderStatus = styled.p`
    color: #fff;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 500;
`;
