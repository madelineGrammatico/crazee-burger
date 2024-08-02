// import React from 'react'
// import { theme } from "../../../../../theme";
// import { FaHamburger } from 'react-icons/fa';
import styled from "styled-components"
// import TextInput from '../../../../../reusables-ui/TextInput';
// import HintMessage from './HintMessage';
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../lib/constants";
import Button from "../../../../../reusables-ui/Button";
// import SuccessMessage from "./SuccessMessage";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusables-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";

export default function EditPanel() {
  const { productSelected} = useContext(OrderContext)
  const [productBeingEdited, setproductBeingEdited] = useState(EMPTY_PRODUCT)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target
    setproductBeingEdited({
      ...productBeingEdited,
      [name]: value,
    })
  }
  // (productBeingEdited === EMPTY_PRODUCT) && <HintMessage/>

  const inputTexts = getInputTextsConfig(productSelected)
  return (
    <EditPanelStyled>
       <ImagePreview
        imageSource={productSelected.imageSource} 
        title={productSelected.title}/>
      <div className="input-fields">
        {inputTexts.map((input) => 
          <TextInput
            {...input}
            onChange={handleChange}
            version="slim"
          />
        )}
        </div>
      <div className="submitButton">
          <Button 
          label="Editer un produit du menu"
          version="success"
          size="slim"
          />
          {/* { isSubmited && <SuccessMessage/> } */}
      </div>
    </EditPanelStyled>
  )
}
const EditPanelStyled = styled.form`
    height:100%;
    width:100%;
`;
