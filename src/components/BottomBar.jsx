import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import env from 'react-dotenv';

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
    return (totalValue.toFixed(2));
  }
  function detailOrder(total) {
    let message = 'Olá, gostaria de fazer o pedido:\n';
    message += '- Pratos: \n';
    selectedItems.forEach((item) => {
      if (item.categoryId === 1) {
        message += `${item.name} ${(item.quantity > 1) ? `(${item.quantity}x)` : ''}\n`;
      }
    });
    message += '- Bebidas: \n';
    selectedItems.forEach((item) => {
      if (item.categoryId === 2) {
        message += `${item.name} ${(item.quantity > 1) ? `(${item.quantity}x)` : ''}\n`;
      }
    });
    message += '- Sobremesas: \n';
    selectedItems.forEach((item) => {
      if (item.categoryId === 3) {
        message += `${item.name} ${(item.quantity > 1) ? `(${item.quantity}x)` : ''}\n`;
      }
    });
    message += `Total: R$ ${total}`;
    return message;
  }
  function closeOrder() {
    if (!enabled) {
      return;
    }
    const total = calculateTotal();
    const message = detailOrder(total);
    const urlmensagem = encodeURIComponent(message);
    const linkwhatsapp = `https://wa.me/${env.WHATSAPP_NUMBER}?text=${urlmensagem}`;
    window.open(linkwhatsapp);
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
