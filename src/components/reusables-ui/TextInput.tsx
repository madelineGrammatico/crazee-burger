import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { PropsTextInput } from "../../lib/types";
import { TextInputStyledProps } from "../../lib/interfaces";



export default function TextInput({value, onChange, Icon, className, version="normal", ...restProps}: PropsTextInput) {
  return (
    <TextInputStyled version={version}>
      {Icon && <div className="icon"><Icon /></div>}
      <input  
        value= { value } 
        onChange= { onChange }
        className={className}
        type= "text"
        {...restProps}
      />
    </TextInputStyled>
  )

}

const extraNormalWhiteStyle = css`
  margin: 18px 0;
  padding: 18px 24px;
  background-color: ${ theme.colors.white };

  input{
    background-color: ${theme.colors.white};
    
    &::placeholder{
      background-color: ${theme.colors.white};
    }
  }
`

const extraSlimGreyStyle= css`
  height: 35px;
  padding: 0 16px 0 24px;
  margin:0;
  background-color: ${theme.colors.background_white};

  input{
    background-color: ${theme.colors.background_white};

    &::placeholder{
      background-color: ${theme.colors.background_white};
    }
  }
  
`
const extraStyle = {
  normal: extraNormalWhiteStyle,
  slim: extraSlimGreyStyle,
}

const TextInputStyled  = styled.div<TextInputStyledProps>` 
  ${({version}) => extraStyle[version]};

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;

  border-radius: ${ theme.borderRadius.round };
  
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    
    color: ${theme.colors.greyBlue};
  }

  input {
    width: 100%;
    border: none;

    font-size: ${ theme.fonts.size.SM};
    color: ${ theme.colors.dark };

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
  
`
