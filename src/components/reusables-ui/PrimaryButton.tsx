import styled from 'styled-components'
import { theme } from '../../theme'

export default function PrimaryButton({ label, Icon } : { label: string, Icon: any }) {
  return (
    <PrimaryButtonStyled>
        <span>{label }</span>
        { Icon && Icon }
    </PrimaryButtonStyled>
  )
}
const PrimaryButtonStyled = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    width: 100%;

    padding: 18px 24px;
    border-radius: ${ theme.borderRadius.round };
    font-size: ${ theme.fonts.size.P0};
    font-weight: ${ theme.fonts.weights.bold };
    background-color: ${ theme.colors.primary };
    border: 1px solid ${ theme.colors.primary };
    color: ${ theme.colors.white };

    &:hover:not(:disabled) {
      background-color: ${ theme.colors.white };
      color: ${ theme.colors.primary };
      border: 1px solid ${ theme.colors.primary };
      transition: all 200ms ease-out;
    }
    &:active{
      color: ${ theme.colors.white };
      background-color: ${ theme.colors.primary };
      border: 1px solid ${ theme.colors.primary };
    }
    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }

`