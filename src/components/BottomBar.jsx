import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function BottomBar({ selectedItems }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (selectedItems.some((i) => i.categoryId === 1)
    && selectedItems.some((i) => i.categoryId === 2)
    && selectedItems.some((i) => i.categoryId === 3)) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [selectedItems]);
  function calculateTotal() {
    let totalValue = 0;
    selectedItems.forEach((i) => {
      totalValue += parseFloat((i.price).replace(',', '.')) * i.quantity;
    });
    console.log(totalValue.toFixed(2));
  }
  function detailOrder() {
    const message = 'Olá, gostaria de fazer o pedido:';
    return message;
  }
  function closeOrder() {
    if (!enabled) {
      return;
    }
    calculateTotal();
    detailOrder();
    alert('seu pedido já está sendo preparado! :D');
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
`;
const OrderStatus = styled.p`
    color: #fff;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 500;
`;
