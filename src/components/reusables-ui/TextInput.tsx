import styled from "styled-components";
import { theme } from "../../theme";
import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";

type PropsTextInput = {
  value: string,
  onChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
  Icon?: IconType
  // Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
} & ComponentPropsWithoutRef<"input">

export default function TextInput({value, onChange, Icon, ...restProps}: PropsTextInput) {
  return (
    <InputContainer>
      {Icon && <Icon />}
      <input 
        value= { value } 
        onChange= { onChange }
        type= "text"
        {...restProps}
      />
    </InputContainer>
  )

}

const InputContainer  = styled.div` 
  background-color: ${ theme.colors.white };
  border-radius: ${ theme.borderRadius.round };
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  svg {
    font-size: ${theme.fonts.size.SM};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
    min-width: 1rem;
  }

  input {
    border: none;
    font-size: ${ theme.fonts.size.SM};
    color: ${ theme.colors.dark };
    width: 100%;

    &::placeholder {
      background: ${ theme.colors.white };
      color: ${theme.colors.greyMedium};
      border: none;
    }
  }
`