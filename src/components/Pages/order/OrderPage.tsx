import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./NavBar/NavBar"
import Main from "./Main/Main"
import { useEffect, useRef, useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT, EMPTY_PRODUCT_DATA } from "../../../lib/constants"
import { tabSelectedType } from "../../../lib/types"
import { useMenu } from "../../../hooks/useMenu"
import { useBasket } from "../../../hooks/useBasket"
import { findProductById } from "../../../utils/array"
import { getUser } from "../../../api/user"
import { useNavigate, useParams } from "react-router-dom"
import { initialiseUserSession } from "./helpers/initialiseUserSession"

export default function OrderPage() {
  const menuSelected = fakeMenu.LARGE
  
  const titleEditRef = useRef<HTMLInputElement>(null)
  const [isModeAdmin, setisModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [tabSelected, setTabSelected] = useState<tabSelectedType>("add")
  const [newProduct , setNewProduct] = useState(EMPTY_PRODUCT_DATA)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const {menu, setMenu, resetMenu, handleAdd, handleDelete, handleEdit} =  useMenu(menuSelected )
  const { basket, setBasket, handleAddTobasket, handleDeleteInBasket } = useBasket()
  const {username} = useParams()
  const navigate = useNavigate()

  const handleProductSelected = async(idCardClicked:  string) => {
    const productClicked = await findProductById(menu, idCardClicked)
    productClicked && await setProductSelected(productClicked)
    await setIsCollapsed(false)
    await setTabSelected("edit")
    titleEditRef.current && titleEditRef.current.focus()
  }

  useEffect(() => {
    if (!username) { return navigate("/*")}
    initialiseUserSession(username, setMenu, setBasket, setIsLoading)
  }, [])
  
  const orderContextValue = {
    username,
    isModeAdmin, setisModeAdmin,
    isCollapsed, setIsCollapsed,
    isLoading,
    tabSelected, setTabSelected,
    newProduct , setNewProduct,
    productSelected, setProductSelected,
    handleProductSelected,
    menu,
    resetMenu,
    handleAdd,
    handleEdit,
    handleDelete,
    titleEditRef,
    basket, 
    handleAddTobasket, 
    handleDeleteInBasket
  }

  getUser("BFcusnqGV2IK2kDcqlky")

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