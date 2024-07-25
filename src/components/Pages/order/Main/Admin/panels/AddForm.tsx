// import React from 'react'
import { theme } from "../../../../../../theme";
import styled from "styled-components"
import TextInput from '../../../../../reusables-ui/TextInput';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import comingSoon from "../../../../../../../public/images/coming-soon.png"
// import { formatPrice } from "../../../../../../utils/maths";

type ProductType = {
  id: number,
  imageSource: string,
  title: string,
  price: number,
  quantity: number,
  isAvailable: boolean,
  isAdvertised: boolean,
}

export default function AddForm() {
  const { menu, setMenu } = useContext(OrderContext)

  const [productName, setproductName] = useState("")
  const [productImg, setProductImg] = useState("")
  const [productPrice, setProductPrice] = useState("")

  const handleChangeName =(e: React.ChangeEvent<HTMLInputElement>) => {
    setproductName(e.target.value)
  }
  const handleChangeImg =(e: React.ChangeEvent<HTMLInputElement>) => {
    setProductImg(e.target.value)
  }
  const handleChangePrice =(e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value)
  }
  const buildId = () => {
   return menu.map((produit) => produit.id)
    .reduce((acc, cur)=> cur > acc ? cur : acc) +1
   
  }
  const buildNewProduct =() => {
    return {
      id: buildId(),
      imageSource: productImg ? productImg : comingSoon ,
      title: productName,
      price: parseInt(productPrice),
      quantity: 1,
      isAvailable: true,
      isAdvertised: true,
    }
  }

  const handleAddProduct = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newProduct: ProductType = buildNewProduct()
    
    const menuCopy = [... menu]
    const menuUpdate = [ ...menuCopy, newProduct]
    console.log(menuUpdate)
    setMenu(menuUpdate)
  }
  return (
    <AddFormStyled onSubmit={handleAddProduct}>
      <div className="imagePreview">
      { productImg ? 
        <img src={productImg} alt={productName ? productName : productImg}/> 
      : 
        <div className="imagePreview-fail">
            <span>aucune image</span>
          </div>
      }
     </div>
      <div className="input-fields">
        <TextInput
            placeholder="Nom du produit (ex: Super Burger)"
            value={productName}
            onChange={handleChangeName}
            Icon={FaHamburger}
        /> 
        <TextInput
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            value={productImg}
            onChange={handleChangeImg}
            Icon={BsFillCameraFill}
        /> 
        <TextInput
            placeholder="Prix"
            value={productPrice}
            onChange={handleChangePrice}
            Icon={MdOutlineEuro}
        /> 
      </div>
      <div className="submitButton">
          <button>Ajouter un nouveau produit au menu</button>
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
  
  .imagePreview{
    width: 215px;
    height: 120px;
    display: flex;
    justify-content: end;
    align-items: center;
    grid-area: 1 / 1 / 1 / 2;
    
    img{
      display: flex;
      justify-content: end;
      align-items: center;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .imagePreview-fail{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.greyLight};
      border: 1px solid ${theme.colors.greyLight};
  }
  }
  
  .input-fields {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    grid-area: 1/ 2 / 1 / 3;

    div {
      background-color: ${theme.colors.background_white};
      height:35px;
      padding: 0 16px 0 24px;
      margin:0;
      
      input{
        background-color: ${theme.colors.background_white};
        color:  ${theme.colors.greyMedium};

        &::placeholder {
          background:${theme.colors.background_white};
        }
      }
    }
  }
  .submitButton{
    grid-area: 2/ 2 / 3 / 3;
      button {
        color: ${theme.colors.white};
        background-color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
        border-radius: ${theme.borderRadius.round};
        width: fit-content;
        padding:  10px 29px;
    }
    }
`;
