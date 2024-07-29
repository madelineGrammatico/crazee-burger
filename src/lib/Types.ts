import { IconType } from 'react-icons';
import { ComponentPropsWithoutRef } from "react";

//produit
export type ProductType = {
    id: number,
    imageSource: string,
    title: string,
    price: number,
    quantity: number,
    isAvailable: boolean,
    isAdvertised: boolean,
}
export type ProductsType = {
    id: number,
    imageSource: string,
    title: string,
    price: number,
    quantity: number,
    isAvailable: boolean,
    isAdvertised: boolean,
  }[]
  export type NewProductType = {
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

export type getTabsConfigType = (isCollapsed: boolean) => getTabsType

export type TabType = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void, 
    label?: string, 
    value?: string,
    Icon?: IconType
} & ComponentPropsWithoutRef<"button">



// reusable-ui
export type ButtonType = {
    label: string,
    Icon?: IconType,
    version?: "primary" | "success",
    size?: "big" | "normal" | "slim"
    // Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  } & ComponentPropsWithoutRef<"button">
  
  export type CardType = {
    imageSource: string,
    title: string,
    leftDescription: number | string,
    isButtonDelete: boolean,
    onDelete: () => void
}

export type PropsTextInput = {
    value?: string,
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
    Icon?: IconType | React.ComponentType<React.SVGProps<SVGSVGElement>>, 
    className?: string,
    version?: "normal" | "slim",
  } & ComponentPropsWithoutRef<"input">


// NavBar
export type ToggleButtonType = {
    isChecked: boolean,
    onToggle: ()=> void,
    labelIfChecked: string |"Fermer",
    labelIfUnchecked: string | "Ouvrir",
  }


 

 
 //context
  
  export type OrderContextType = {
      isAdmin: boolean;
      setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
      isCollapsed: boolean;
      setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
      tabSelected: "add" | "edit";
      setTabSelected: React.Dispatch<React.SetStateAction<"add" | "edit">>
      menu: ProductsType | [],
      newProduct: NewProductType, 
      setNewProduct: React.Dispatch<React.SetStateAction<NewProductType>>
      resetMenu: () => void
      handleAdd: (newProduct: ProductType) => void,
      handleDelete: (productId: number) => void,
      
    }