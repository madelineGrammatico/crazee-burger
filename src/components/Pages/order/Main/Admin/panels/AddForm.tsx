import styled from "styled-components"
import TextInput from '../../../../../reusables-ui/TextInput';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Button from "../../../../../reusables-ui/Button";
import { EMPTY_PRODUCT } from "../../../../../../lib/constants";
import ImagePreview from "./ImagePreview";
import SuccessMessage from "./SuccessMessage";


export default function AddForm() {
  const { menu, handleAdd, newProduct , setNewProduct } = useContext(OrderContext)
  
  const [isSubmited, setIsSubmited] = useState(false)

  const buildId = () => {
   return menu.map((produit) => produit.id)
    .reduce((acc, cur)=> cur > acc ? cur : acc) +1
  }

  const displaySuccesMessage = () => {
    setIsSubmited(true)
    setTimeout(()=>{
      setIsSubmited(false)
    }, 2000)
  }
  const buildProduct = () => {
    return {
      id: buildId(),
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
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview 
        imageSource={newProduct.imageSource} 
        title={newProduct.title}/>
      <div className="input-fields">
        <TextInput
          name="title"
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.title}
          onChange={handleChange}
          Icon={FaHamburger}
          version="slim"
        /> 
        <TextInput
          name="imageSource"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
          Icon={BsFillCameraFill}
          version="slim"
        /> 
        <TextInput
          name="price"
          placeholder="Prix"
          value={newProduct.price ? newProduct.price.toString() : ""}
          onChange={handleChange}
          Icon={MdOutlineEuro}
          version="slim"
        /> 
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
