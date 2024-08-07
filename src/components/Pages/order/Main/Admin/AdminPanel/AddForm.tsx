import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_PRODUCT_DATA } from "../../../../../../lib/constants";
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
    >
      <SubmitButton isSubmited={isSubmited}/>
    </ProductForm>
  )
}