import styled, { css, RuleSet } from 'styled-components'
import { theme } from '../../theme'
import { ButtonType } from '../../lib/types'
import { ButtonStyledType } from '../../lib/interfaces'

export default function Button({ label, Icon, version="primary", size="regular", ...restProps} : ButtonType ) {
  return (
    <ButtonStyled version={version} size={size} {...restProps}>
      {label && <span>{label }</span>}
      {Icon &&  <div className="icon"><Icon /></div>}
    </ButtonStyled>
  )
}
const getExtraPrimary = () => css`
 
  background-color: ${ theme.colors.primary };
  border: 1px solid ${ theme.colors.primary };
  font-size: ${ theme.fonts.size.SM};

  &:hover:not(:disabled) {
    color: ${ theme.colors.primary};
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
const getExtraWarning  = () => css`
  background-color: ${ theme.colors.red };
  border: 1px solid ${ theme.colors.red };
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 57px;
  border-radius: inherit;
  
  &:hover:not(:disabled) {
    color: ${ theme.colors.white };
    background-color: ${ theme.colors.red };
    border: 1px solid ${ theme.colors.red };
  }
  &:active{
    background-color: ${ theme.colors.red };
    border: 1px solid ${ theme.colors.red };
  }

`
// const ExtraSizeLarge  = () =>  css`
//   height: 53px;
//   padding:  0 26px;
//   font-size: ${ theme.fonts.size.SM};
// `

// const ExtraSizeRegular  = () =>  css`
//   height: 34px;
//   padding: 0 26px;
//   font-size: ${ theme.fonts.size.XS};
// `

// const ExtraSizeSlim  = () => css`
 
// `
const HEIGHT = {
  large:"53px",
  regular:"34px",
  slim:"34px",
  full: "100%",
}

const PADDING = {
  large:"0 26px",
  regular:"0 26px",
  slim:"0 29px",
  full: "0"
}
const FONT_SIZE = {
  large: theme.fonts.size.SM,
  regular: theme.fonts.size.XS,
  slim: theme.fonts.size.XS,
  full: theme.fonts.size.SM,
}
const EXTRA_STYLE = {
  primary: getExtraPrimary,
  success: getExtraSuccess,
  warning: getExtraWarning
}
/* const SIZESOPTIONS = {
  large: ExtraSizeLarge,
  regular: ExtraSizeRegular,
  slim: ExtraSizeSlim
} */

const getEtraButtonStyle: (version: "primary" | "success" | "warning") => () => RuleSet<object> = (version) => {
  return EXTRA_STYLE[version]
}

const getBaseStyle =(size: "large" | "regular" | "slim" | "full") => css`
   height: ${HEIGHT[size]};
  padding: ${PADDING[size]};
  font-size: ${FONT_SIZE[size]};
  width: "fit-content";
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
${({size}) => getBaseStyle(size)};
 ${({version}) => getEtraButtonStyle(version)};
 
`