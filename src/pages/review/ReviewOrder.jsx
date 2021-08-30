import React from 'react';
import styled from 'styled-components';

export default function ReviewOder({ selectedItems }) {
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
  function sendToWhats() {
    const total = calculateTotal();
    const message = detailOrder(total);
    const urlmensagem = encodeURIComponent(message);
    const linkwhatsapp = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${urlmensagem}`;
    window.open(linkwhatsapp);
  }
  return (
    <Background>
      <Title>
        Revise seu pedido
      </Title>
      <DetailedOrder>
        {selectedItems.map((item) => (
          <Line>
            <p>
              {item.name}
              {(item.quantity > 1) ? ` (${item.quantity}x)` : ''}
            </p>
            <p>
              R$
              {' '}
              {(parseFloat((item.price).replace(',', '.')) * item.quantity).toFixed(2)}
            </p>
          </Line>
        ))}
        <Total>
          <Line>
            <p>
              Total:
            </p>
            <p>
              R$
              {' '}
              {calculateTotal()}
              {' '}
            </p>
          </Line>
        </Total>
      </DetailedOrder>
      <Confirm onClick={() => sendToWhats()}>
        Tudo certo, pode pedir!
      </Confirm>
    </Background>
  );
}
const Background = styled.div`
    width: 100%;
    height: 100vh ;
    background-color: #edeef4;
    display: flex;
    align-items: left;
    flex-direction: column;
    padding: 92px 4px 40px 4px;
      align-items: center;
`;
const Title = styled.h2`
 margin-top: 30px;
    color: #0e0e13;
    font-size: 26px;
    font-family: "Righteous";
    font-weight: 500;
`;
const DetailedOrder = styled.div`
  margin-top: 33px;
  width: calc(100% - 37px);
  height: auto;
  background-color: #fff;
  padding: 17px 25px 24px 26px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
`;

const Confirm = styled.button`
    margin-top: 33px;
    width: calc(100% - 50px);
    height: 61px;
    background-color: #f676b5 ;
    border-radius: 50px;
    @media (min-width: 600px){
      width: 550px;
    }
    color: #fff;
    font-size: 22px;
    font-family: "Roboto";
    font-weight: 700;
    font-family: Roboto;

`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  p{
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-top: 13px;
  }
`;
const Total = styled.div`
p{
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
}

`;
