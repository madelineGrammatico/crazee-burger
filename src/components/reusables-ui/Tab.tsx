// import React from 'react'
import styled from "styled-components"
import { theme } from "../../theme";
import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";

type TabType = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void, 
    label?: string, 
    value?: string,
    Icon?: IconType
} & ComponentPropsWithoutRef<"button">

export default function Tab({onClick, label, value, Icon, ...extraProps}: TabType) {
  return (
    <Tabstyled {...extraProps}
          onClick={onClick} 
          value={value}
        >
            {Icon && <div className="icon"><Icon/></div>} 
            {label && <p>{label}</p>}
    </Tabstyled>
  )
}
const Tabstyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 22px; 
    gap: 13px;
    cursor: pointer;

    position: relative;
    /* top:1px; */
    left: 52px;

    font-size: ${theme.fonts.size.P0};
    color: ${ theme.colors.greySemiDark};
    white-space: nowrap;
    text-decoration: none;

    background-color: ${ theme.colors.white };
    border: 1px solid ${ theme.colors.white };
    
    
    border-radius: 
        ${theme.borderRadius.round}
        ${theme.borderRadius.round} 
        0px 0px;
    border-width: 1px 1px 2px 1px;
    border-style: solid ;
    border-color: ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};

    .icon {
        display: flex;
        justify-content:center;
        align-items: center;
    }
    
    p { 
        display: flex;
        justify-content:center;
        align-items: center;

        padding: 5px 0;
        border-bottom: 2px solid transparent;
        border-top: 2px solid transparent;
    }

    &:hover{
        border-color: ${theme.colors.white};
    }
    &:hover p {
        border-bottom: 2px solid ${theme.colors.greySemiDark};
    }
`;