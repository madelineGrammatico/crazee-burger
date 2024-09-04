import { useContext }from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";

export default function EditForm() {
  const {username} = useContext(OrderContext)
  const navigate = useNavigate()

  const { 
    productSelected,
    setProductSelected, 
    handleEdit, 
    titleEditRef,
  } = useContext(OrderContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { name, value} = event.target
    const produitBeingUdpdated = {
      ...productSelected,
      [name]: value,
    }
    try {
      if(!username) throw("any username for user")
      setProductSelected(produitBeingUdpdated)
      handleEdit(produitBeingUdpdated, username)
    } catch(error) {
      navigate("/*")
      console.error(error)
    }
  }

  return (
    <ProductForm
      onChange={handleChange} 
      product={productSelected}
      ref={titleEditRef}
    >
      <EditInfoMessage/>
    </ProductForm>
  )
}