import { useContext, useState }from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import SavingMessage from "./SavingMessage";
import { useSuccesMessage } from "../../../../../../hooks/useSuccessMessage";

export default function EditForm() {
  const {username} = useContext(OrderContext)
  const navigate = useNavigate()
  const {isSubmited : isSaved,  displaySuccesMessage} = useSuccesMessage()

  const [valueOnFocus, setValueOnFocus] = useState("")
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

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputValueOnFocus = event.target.value
    setValueOnFocus(inputValueOnFocus)
  }
  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const valueOnBlur = event.target.value
    if(valueOnFocus !== valueOnBlur) {
      displaySuccesMessage()
    }
  }

  return (
    <ProductForm
      onChange={handleChange} 
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      product={productSelected}
      ref={titleEditRef}
    >
      { isSaved ? <SavingMessage/> : <EditInfoMessage/> }
    </ProductForm>
  )
}