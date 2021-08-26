import React from 'react';
import styled from 'styled-components';
import ProductBox from './ProductBox';

export default function ListOfItems({ items }) {
  return (
    <CategoryList>
      {items.map((item) => (
        <ProductBox info={item} />
      ))}
    </CategoryList>
  );
}

const CategoryList = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    overflow-x: scroll;
`;
