import React, { useState } from 'react';
import styled from 'styled-components';
import images from '../utils/images.jpg';

function ProductBox({ info }) {
  const [clicked, setClicked] = useState(false);
  const {
    name, description, price,
  } = info;
  return (
    <Box clicked={clicked} onClick={() => { setClicked(!clicked); }}>
      <ProductImage src={images} />
      <ProductName>
        {name}
      </ProductName>
      <ProductDescription>
        {description}
      </ProductDescription>
      <ProductValue>
        {price}
      </ProductValue>
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
    inset ${(props) => (props.clicked ? '0px 0px 0px 5px #32B72F' : '')};    
    border-radius: 9px;
    p {
        line-height: 19px;
        font-family: "Roboto";
    }
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
