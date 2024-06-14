import styled from "styled-components";
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
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  input {
    border: none;
    font-size: 15px;
    color: #17161a;
    width: 100%;
  }

  &::placeholder {
    background: white;
    color: lightgrey;
    border: none;
  }
`
     