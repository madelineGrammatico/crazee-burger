import styled, { css, RuleSet } from 'styled-components'
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
const getExtraPrimary = () => css`
 
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
const getExtraSuccess  = () => css`
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
const ExtraSizeLarge  = () =>  css`
  height: 53px;
  padding:  0 26px;
  font-size: ${ theme.fonts.size.SM};
`

const ExtraSizeRegular  = () =>  css`
  height: 34px;
  padding: 0 26px;
  font-size: ${ theme.fonts.size.XS};
`

const ExtraSizeSlim  = () => css`
  height: 34px;
  padding:  0 29px;
  font-size: ${ theme.fonts.size.XS};
`

const EXTRA_STYLE = {
  primary: getExtraPrimary,
  success: getExtraSuccess,
}
const SIZESOPTIONS = {
  large: ExtraSizeLarge,
  regular: ExtraSizeRegular,
  slim: ExtraSizeSlim
}

const getButtonStyle: (version: "primary" | "success", size: "large" | "regular" | "slim") => (() => RuleSet<object>) | (() => RuleSet<object>) | (() => RuleSet<object>) = (version, size) => {
  return EXTRA_STYLE[version] && SIZESOPTIONS[size]
}



const getBaseStyle =() => css`
  
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
const ButtonStyled = styled.button<ButtonStyledType>`
 ${({version, size}) => getButtonStyle(version, size)};
 ${ getBaseStyle()};
`