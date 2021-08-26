import React, { useState } from 'react';
import styled from 'styled-components';

export default function Counter() {
  const [value, setValue] = useState(1);

  //   if (value === 0) {
  //     setIsSelected(!isSelected);
  //   }

  return (
    <Buttons>
      <Minus onClick={(e) => { setValue(value - 1); e.stopPropagation(); }}>-</Minus>
      <Value className="value">{value}</Value>
      <Plus onClick={(e) => { setValue(value + 1); e.stopPropagation(); }}>+</Plus>
    </Buttons>
  );
}

const Buttons = styled.div`
    width: 49px;
    height: 19px;
    right: 11px;
    bottom: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
`;

const Minus = styled.p`
    color: #cf2828;
`;

const Plus = styled.p`
    color: #32B72F;
`;

const Value = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    margin-top: 5px;
    line-height: 19px;
    color: #000;
    margin-bottom: 13px;
`;
