import React from 'react';
import styled from 'styled-components';

export default function Counter({
  setIsSelected, value, setValue, setHideCounter, hideCounter,
}) {
  if (value === 0) {
    setIsSelected(false);
    setHideCounter(true);
  }
  if (value > 0) {
    setIsSelected(true);
    setHideCounter(false);
  }

  return (
    <Buttons hideCounter={hideCounter}>
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
    display: ${(props) => ((props.hideCounter) ? 'none' : 'flex')};
    justify-content: space-between;
    align-items: center;
    position: absolute;
    p {
      font-family: 'Roboto';
      font-size: 15px;
      font-weight: 500;
      line-height: 19px;
    }    
`;

const Minus = styled.p`
    color: #cf2828;
`;

const Plus = styled.p`
    color: #32B72F;
`;

const Value = styled.p`
    color: #000;
`;
