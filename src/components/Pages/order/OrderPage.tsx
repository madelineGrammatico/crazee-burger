import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./NavBar/NavBar"
import Main from "./Main/Main"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { useNavigate } from "react-router-dom";

type ProductType = {
  id: number,
  imageSource: string,
  title: string,
  price: number,
  quantity: number,
  isAvailable: boolean,
  isAdvertised: boolean,
}

export default function OrderPage() {
  const menuSelected = fakeMenu.LARGE
  const navigate = useNavigate()

  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [tabSelected, setTabSelected] = useState<"add" | "edit">("add")
  const [menu, setMenu] = useState( menuSelected)
    
  const resetMenu = () => {
    setMenu(menuSelected)
  }
  const handleAdd = (newProduct: ProductType) => {
    const menuUpdated = [ newProduct,...menu, ]
    setMenu(menuUpdated)
  }

  const handleDelete =(productId: number) => {
    !isAdmin ? navigate("/*") : null
    const menuCopy = [...menu]
    setMenu(menuCopy.filter((product) => product.id !== productId))
  }

  const orderContextValue = {
    isAdmin, setIsAdmin,
    isCollapsed, setIsCollapsed,
    tabSelected, setTabSelected,
    menu,
    resetMenu,
    handleAdd,
    handleDelete
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
      <div className="container">
        <NavBar/>
        <Main/>
      </div>
      
      </OrderPageStyled> 
    </OrderContext.Provider>
     
  )
}
const OrderPageStyled = styled.div`
  height:100vh;

  background-color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  .container{
    width: 1400px;
    height: 95vh;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
`;