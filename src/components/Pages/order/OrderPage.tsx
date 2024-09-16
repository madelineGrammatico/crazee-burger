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
import { getMenu } from "../../../api/products"
import { getLocalStorage } from "../../../utils/windows"

export default function OrderPage() {
  const menuSelected = fakeMenu.LARGE
  
  const titleEditRef = useRef<HTMLInputElement>(null)
  const [isModeAdmin, setisModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [tabSelected, setTabSelected] = useState<tabSelectedType>("add")
  const [newProduct , setNewProduct] = useState(EMPTY_PRODUCT_DATA)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const {menu, setMenu, resetMenu, handleAdd, handleDelete, handleEdit} =  useMenu(menuSelected )
  const { basket, setBasket, handleAddTobasket, handleDeleteInBasket } = useBasket()
  const {username} = useParams()
  const navigate = useNavigate()

  const handleProductSelected = async(idCardClicked:  string) => {
    console.log('handleProductSelected')
    const productClicked = await findProductById(menu, idCardClicked)
    console.log("productClicked : ", productClicked)
    productClicked && await setProductSelected(productClicked)
    console.log("productSelected : " , productSelected)
    await setIsCollapsed(false)
    await setTabSelected("edit")
    titleEditRef.current && titleEditRef.current.focus()
  }
  const initialiseMenu = async () => {
    if (!username) { return navigate("/*")}
    const menuReceived = await getMenu(username)
    console.log("menuReceived : ", menuReceived)
    if (menuReceived) setMenu(menuReceived)
  }
  useEffect(() => {
    initialiseMenu()
  }, [])

  const initialiseBasket = () => {
    if (!username) { return navigate("/*")}
    const BasketReceived = getLocalStorage(username)
    console.log("BasketReceived : ", BasketReceived)
    if (BasketReceived) setBasket(BasketReceived)
  }
  useEffect(() => {
    initialiseBasket()
  }, [])
  const orderContextValue = {
    username,
    isModeAdmin, setisModeAdmin,
    isCollapsed, setIsCollapsed,
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