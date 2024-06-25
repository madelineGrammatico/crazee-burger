import styled from "styled-components";
import { theme } from "../../theme";
export default function TextInput({value, onChange, Icon, ...restProps}) {
  return (
    <InputContainer>
      {Icon && Icon}
      <input value= { value } onChange= { onChange }
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

  input {
    border: none;
    font-size: ${ theme.fonts.size.P0};
    color: ${ theme.colors.dark };
    width: 100%;

    &::placeholder {
      background: ${ theme.colors.white };
      color: ${ theme.colors.greyLight };
      border: none;
    }
  }
`