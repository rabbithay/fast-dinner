import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import images from '../utils/images.jpg';
import Counter from './Counter';

function ProductBox({ info, listOfItems, setListOfItems }) {
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState(0);
  const [hideCounter, setHideCounter] = useState(true);

  const {
    name, description, price, itemId,
  } = info;

  useEffect(() => {
    const updatedListOfItems = listOfItems.map((item) => {
      if (item.itemId === itemId) {
        // eslint-disable-next-line no-param-reassign
        item.quantity = value;
      }
      return item;
    });
    setListOfItems(updatedListOfItems);
  }, [value]);
  function selectItemBox() {
    if (!isSelected) {
      setIsSelected(true);
      setValue(value + 1);
    }
  }

  return (
    <Box
      isSelected={isSelected}
      onClick={() => {
        selectItemBox();
      }}
    >
      <ProductImage src={images} />
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <ProductValue>
        {' '}
        R$
        {' '}
        {price}
      </ProductValue>
      <Counter
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        value={value}
        setValue={setValue}
        hideCounter={hideCounter}
        setHideCounter={setHideCounter}
        setListOfItems={setListOfItems}
        listOfItems={listOfItems}
        itemId={itemId}
      />
    </Box>
  );
}

const Box = styled.div`
  width: 172px;
  height: 215px;
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 14px;
  background-color: #fff;
  margin: 17px 17px 0px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset ${(props) => (props.isSelected ? '0px 0px 0px 5px #fb76b5' : '')};
  border-radius: 9px;
  p {
    line-height: 19px;
    font-family: "Roboto";
  }
  position: relative;
`;

const ProductImage = styled.img`
  width: 144px;
  height: 87px;
  border-radius: 4px;
`;

const ProductName = styled.p`
  margin-top: 8px;
  color: #333;
  font-size: 16px;
  font-weight: 500;
`;

const ProductDescription = styled.p`
  margin-top: 4px;
  color: #a6a6a6;
  font-size: 15px;
  font-weight: 300;
`;

const ProductValue = styled.p`
  margin-top: 5px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export default ProductBox;
