import { theme } from "../../../../../../theme";
import styled from "styled-components"
import TextInput from '../../../../../reusables-ui/TextInput';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { FiCheckCircle } from "react-icons/fi";


const EMPTY_PRODUCT= {
  title:"",
  imageSource:"",
  price: 0
}

export default function AddForm() {
  const { menu, handleAdd } = useContext(OrderContext)
  const [newProduct , setNewProduct] = useState(EMPTY_PRODUCT)
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
      <div className="imagePreview">
      { newProduct.imageSource ? 
        <img src={newProduct.imageSource} 
          alt={newProduct.title ? newProduct.title : newProduct.imageSource}/> 
      : 
        <div className="imagePreview-fail">
            <span>aucune image</span>
          </div>
      }
     </div>
      <div className="input-fields">
        <TextInput
          name="title"
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.title}
          onChange={handleChange}
          Icon={FaHamburger}
          version="extraSlimGreyStyle"
        /> 
        <TextInput
          name="imageSource"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
          Icon={BsFillCameraFill}
          version="extraSlimGreyStyle"
        /> 
        <TextInput
          name="price"
          placeholder="Prix"
          value={newProduct.price ? newProduct.price.toString() : ""}
          onChange={handleChange}
          Icon={MdOutlineEuro}
          version="extraSlimGreyStyle"
        /> 
      </div>
      <div className="submitButton">
          <button>Ajouter un nouveau produit au menu</button>
          {isSubmited && <span className="succes-message"><FiCheckCircle/>Ajouté avec succès !</span>}
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
  }

  .submitButton{
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    flex-flow: nowrap;
    align-items: center;
    gap: 15px;

      button {
        color: ${theme.colors.white};
        background-color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
        border-radius: ${theme.borderRadius.round};
        width: fit-content;
        padding:  10px 29px;
      &:hover {
        color: ${theme.colors.success};
        background-color: ${theme.colors.white};
      }
    }
    .succes-message {
      color: ${theme.colors.success};
      display: flex;
      flex-flow: nowrap;
      justify-content:center;
      align-items: center;
      gap: 4px;
    }
    }
`;
