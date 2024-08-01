import styled from "styled-components"
import TextInput from '../../../../../reusables-ui/TextInput';

import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Button from "../../../../../reusables-ui/Button";
import { EMPTY_PRODUCT } from "../../../../../../lib/constants";
import ImagePreview from "./ImagePreview";
import SuccessMessage from "./SuccessMessage";
import { getInputTextsConfig } from "./inputTextConfig";


export default function AddForm() {
  const { handleAdd, newProduct , setNewProduct } = useContext(OrderContext)
  const [isSubmited, setIsSubmited] = useState(false)

  const displaySuccesMessage = () => {
    setIsSubmited(true)
    setTimeout(()=>{
      setIsSubmited(false)
    }, 2000)
  }
  const buildProduct = () => {
    return {
      id: crypto.randomUUID(),
      ...newProduct,
      price: newProduct.price ? newProduct.price : 0,
      quantity: 1,
      isAvailable: true,
      isAdvertised: true,
    }
  }
  const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newProductToAdd = buildProduct()
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
    displaySuccesMessage()
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = e.target
    name === "price" ? parseFloat(value) : value 
    setNewProduct({...newProduct, [name]: value})
  }

  const inputTexts = getInputTextsConfig(newProduct)

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview 
        imageSource={newProduct.imageSource} 
        title={newProduct.title}/>
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
          label="Ajouter un nouveau produit au menu"
          version="success"
          size="slim"
          />
          { isSubmited && <SuccessMessage/> }
      </div>
    </AddFormStyled>
  )
}
const AddFormStyled = styled.form`
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

  .submitButton{
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    flex-flow: nowrap;
    align-items: center;
    gap: 15px;
    }
`;
