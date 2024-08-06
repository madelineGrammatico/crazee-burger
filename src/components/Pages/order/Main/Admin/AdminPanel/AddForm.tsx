// import styled from "styled-components"
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_PRODUCT_DATA } from "../../../../../../lib/constants";
// import ImagePreview from "./ImagePreview";

// import Button from "../../../../../reusables-ui/Button";
import ProductForm from "./ProductForm";
import SubmitButton from "./SubmitButton";


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
    setNewProduct(EMPTY_PRODUCT_DATA)
    displaySuccesMessage()
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = e.target
    name === "price" ? parseFloat(value) : value 
    setNewProduct({...newProduct, [name]: value})
  }

  return (
    <ProductForm
      onSubmit={handleSubmit} 
      onChange={handleChange} 
      product={newProduct}
      isSubmited={isSubmited}
    >
      <SubmitButton isSubmited={isSubmited}/>
    </ProductForm>
  )
}
// const AddFormStyled = styled.form`
//   width: 880px;
//   display: grid;
//   grid-template-columns: 215px 1fr;
//   align-items: start;
//   gap: 8px 20px;
  
//   .input-fields {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     gap: 8px;
//     grid-area: 1/ 2 / 1 / 3;
//   }

//   .submit{
  // grid-area: 2 / 2 / 3 / 3;
  // display: flex;
  // flex-flow: nowrap;
  // align-items: center;
  // gap: 15px;
//     }
// `;
