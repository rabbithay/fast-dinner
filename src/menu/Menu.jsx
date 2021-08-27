import React from 'react';
import styled from 'styled-components';
import menu from '../data/menu';
import CategoryItemsList from './CategoryItemsList';

function Menu({ listOfItems, setListOfItems }) {
  return (
    <Background>
      {menu.map((category) => (
        <>
          <CategoryDescription>
            {category.categoryTitle}
          </CategoryDescription>
          <CategoryItemsList
            setListOfItems={setListOfItems}
            listOfItems={listOfItems}
            items={category.items}
          />
        </>
      ))}
    </Background>

  );
}
export default Menu;

const Background = styled.div`
    width: 100%;
    height: auto ;
    background-color: #edeef4;
    display: flex;
    align-items: left;
    flex-direction: column;
    padding: 92px 0px 107px 21px;
`;

const CategoryDescription = styled.h2`
    margin-top: 30px;
    color: #0e0e13;
    font-size: 26px;
    font-family: "Righteous";
    font-weight: 500;
`;
