import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { ButtonType } from '../../lib/Types'
import { ButtonStyledType } from '../../lib/interfaces'

export default function Button({ label, Icon, version="primary", size="regular", ...restProps} : ButtonType ) {
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
const sizeLarge = css`
  height: 53px;
  padding:  0 26px;
  font-size: ${ theme.fonts.size.SM};
`

const sizeRegular = css`
  height: 34px;
  padding: 0 26px;
  font-size: ${ theme.fonts.size.XS};
`

const sizeSlim = css`
  height: 34px;
  padding:  0 29px;
  font-size: ${ theme.fonts.size.XS};
`

const extraStyle = {
  primary: extraPrimaryStyle,
  success: extraSuccessStyle,
}
const sizes = {
  large: sizeLarge,
  regular: sizeRegular,
  slim: sizeSlim
}
const ButtonStyled = styled.button<ButtonStyledType>`
  ${({version}) => extraStyle[version]}
  ${({size}) => sizes[size]}

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