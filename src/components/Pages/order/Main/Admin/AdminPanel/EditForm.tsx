import { useContext }from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import ProductForm from "./ProductForm";

export default function EditForm() {
 
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
    setProductSelected(produitBeingUdpdated)
    handleEdit(produitBeingUdpdated)
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