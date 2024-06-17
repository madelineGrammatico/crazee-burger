import styled from 'styled-components'

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
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    background-color: #f56a2c;
    border: 1px solid #f56a2c;
    color: white;

    &:hover:not(:disabled) {
      background-color: white;
      color: #f56a2c;
      border: 1px solid #f56a2c;
      transition: all 200ms ease-out;
    }
    &:active{
      color: white;
      background-color: #f56a2c;
      border: 1px solid #f56a2c;
    }
    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }

`