import { IconType } from 'react-icons';
import { ComponentPropsWithoutRef, } from "react";

//produit
export type ProductType = {
    id: string,
    imageSource: string,
    title: string,
    price: number,
    quantity: number,
    isAvailable: boolean,
    isAdvertised: boolean,
}
export type ProductsType = ProductType[]
  export type ProductSelectedType = {
    title:string,
    imageSource:string,
    price: number
  }

//tab
export type tabSelectedType = "add" | "edit"

export type indexTabsConfig = "add" | "edit" | "chevron"

export type tabConfigType = {
  index: indexTabsConfig,
  onClick?: void,
  label: string,
  Icon: IconType,
  className?: string,
  Content?: React.ComponentType
}
export type getTabsType = tabConfigType []

export type getTabsConfigType = 
  (isCollapsed: boolean, hasClickedProduct?: boolean) => getTabsType

export type TabType = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void, 
    label?: string, 
    value?: string,
    Icon?: IconType
} & ComponentPropsWithoutRef<"button">

export type ProductBasketType = {
  id: string;
  quantity: number
}

export type BasketType = ProductBasketType[]

// reusable-ui
export type ButtonType = {
    label?: string,
    Icon?: IconType,
    version?: "primary" | "success" | "warning",
    size?: "large" | "regular" | "slim" | "full"
    // Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  } & ComponentPropsWithoutRef<"button">
  
  export type CardType = {
    imageSource: string,
    title: string,
    leftDescription: number | string,
    isButtonDelete: boolean,
    onDelete: (e: React.MouseEvent<Element>) => void,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
    isHoverAble: boolean,
    isSelected: boolean,
    onAdd: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type PropsTextInput = {
    value?: string | number,
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
    Icon?: IconType | React.ComponentType<React.SVGProps<SVGSVGElement>>, 
    className?: string,
    version?: "normal" | "slim",
  } & ComponentPropsWithoutRef<"input">

export type PropsProductForm = {
  onSubmit?:(e: React.FormEvent<HTMLFormElement>)=> void, 
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
  product: ProductType | ProductSelectedType,
  children: JSX.Element
}
// NavBar
export type ToggleButtonType = {
    isChecked: boolean,
    onToggle: ()=> void,
    labelIfChecked: string |"Fermer",
    labelIfUnchecked: string | "Ouvrir",
  }


export type PropsImagePreviewType= {
    title: string, imageSource: string
}

 
 //context
  
  export type OrderContextType = {
      isAdmin: boolean;
      setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
      isCollapsed: boolean;
      setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
      tabSelected: tabSelectedType;
      setTabSelected: React.Dispatch<React.SetStateAction<tabSelectedType>>
      menu: ProductsType,
      newProduct: ProductSelectedType , 
      setNewProduct: React.Dispatch<React.SetStateAction<ProductSelectedType >>
      resetMenu: () => void
      handleAdd: (newProduct: ProductType) => void,
      handleDelete: (productId: string) => void,
      productSelected: ProductType , 
      setProductSelected:React.Dispatch<React.SetStateAction<ProductType >>,
      handleProductSelected: (idCardClicked: string) => void,
      handleEdit: (productBeingUdated: ProductType ) => void,
      titleEditRef: React.RefObject<HTMLInputElement>,
      basket: BasketType, 
      handleAddTobasket:(idCardClicked: string) => void, 
      handleDeleteInBasket: (productId: string) => void,
    }