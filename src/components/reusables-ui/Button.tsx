import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { IconType } from 'react-icons'
import { ComponentPropsWithoutRef } from "react";

type ButtonType = {
  label: string,
  Icon?: IconType,
  version?: "primary" | "success",
  size?: "big" | "normal" | "slim"
  // Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
} & ComponentPropsWithoutRef<"button">

interface ButtonStyledType {
  version: "primary" | "success",
  size: "big" | "normal" | "slim"
}
export default function Button({ label, Icon,version="primary", size="normal", ...restProps} : ButtonType ) {
  return (
    <ButtonStyled version={version} size={size} {...restProps}>
      <span>{label }</span>
      {Icon &&  <div className="icon"><Icon /></div>}
      
    </ButtonStyled>
  )
}
const extraPrimaryStyle = css`
 
  background-color: ${ theme.colors.primary };
  border: 1px solid ${ theme.colors.primary };
  font-size: ${ theme.fonts.size.SM};

  &:hover:not(:disabled) {
    color: ${ theme.colors.primary };
    border: 1px solid ${ theme.colors.primary };
  }
  &:active{
    background-color: ${ theme.colors.primary };
    border: 1px solid ${ theme.colors.primary };
  }

`
const extraSuccessStyle = css`
  background-color: ${ theme.colors.success };
  border: 1px solid ${ theme.colors.success };

  &:hover:not(:disabled) {
    color: ${ theme.colors.success };
    border: 1px solid ${ theme.colors.success };
  }
  &:active{
    background-color: ${ theme.colors.success };
    border: 1px solid ${ theme.colors.success };
  }

`
const extraBigStyle = css`
  height: 53px;
  padding:  0 26px;
  font-size: ${ theme.fonts.size.SM};
`

const extrAmormalStyle = css`
  height: 34px;
  padding: 0 26px;
  font-size: ${ theme.fonts.size.XS};
`

const extraSlimlStyle = css`
  height: 34px;
  padding:  0 29px;
  font-size: ${ theme.fonts.size.XS};
`

const extraStyle = {
  primary: extraPrimaryStyle,
  success: extraSuccessStyle,
  big: extraBigStyle,
  normal: extrAmormalStyle,
  slim: extraSlimlStyle
}

const ButtonStyled = styled.button<ButtonStyledType>`
  ${({version}) => extraStyle[version]}
  ${({size}) => extraStyle[size]}

  width: fit-content;
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  border-radius: ${ theme.borderRadius.round };
  cursor: pointer;
  
  font-weight: ${ theme.fonts.weights.bold };
  color: ${ theme.colors.white };
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  
  &:hover:not(:disabled) {
    background-color: ${ theme.colors.white };
    transition: all 200ms ease-out;
  }
  &:active{
    color: ${ theme.colors.white };
  }
  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`