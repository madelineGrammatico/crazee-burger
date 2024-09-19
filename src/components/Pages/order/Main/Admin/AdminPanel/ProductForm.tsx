import styled from "styled-components"
import TextInput from '../../../../../reusables-ui/TextInput';
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";
import React from "react";
import { PropsProductForm } from "../../../../../../lib/types";



const ProductForm = React.forwardRef<HTMLInputElement, PropsProductForm>(
  ({
      onSubmit, 
      onChange,
      onFocus,
      onBlur,
      product,
      children }: PropsProductForm,
    ref
  ) => {

  const inputTexts = getInputTextsConfig(product)
  return (
    <AdminFormStyled onSubmit={onSubmit? onSubmit: (e)=> e.preventDefault()}>
      <ImagePreview 
        imageSource={product.imageSource} 
        title={product.title}/>
      <div className="input-fields">
        {inputTexts.map((input) => 
          <TextInput
            {...input}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            version="slim"
            ref={ref && input.name ==="title" ? ref : undefined}
          />
        )}
        </div>
      <div className="footer">
          {children}
      </div>
    </AdminFormStyled>
  )
})
export default ProductForm

const AdminFormStyled = styled.form`
  width: 880px;
  display: grid;
  grid-template-columns: 215px 1fr;
  align-items: start;
  gap: 8px 20px;
  
  .input-fields {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    grid-area: 1/ 2 / 1 / 3;
  }

  .footer{
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    flex-flow: nowrap;
    align-items: center;
    gap: 15px;
    }
`;
