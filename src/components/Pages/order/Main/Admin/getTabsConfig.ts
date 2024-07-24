import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { IconType } from 'react-icons';

export type tabSelectedType = "add" | "edit"
export type indexTabsConfig = "add" | "edit" | "chevron"

export type tabType = {
  index: indexTabsConfig,
  onClick?: void,
  label: string,
  Icon: IconType,
  className: string
}
type getTabsType = tabType []

type getTabsConfigType = (
  isCollapsed: boolean, 
  tabSelected: tabSelectedType
) => getTabsType

export const getTabsConfig : getTabsConfigType = (isCollapsed, tabSelected) => [
    {
      index: "chevron",
      label: "",
      Icon: !isCollapsed ? FiChevronDown : FiChevronUp,
      className: isCollapsed ? "active" : ""
    },
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: AiOutlinePlus,
      className: tabSelected === "add" ? "active": ""
    },
    {
      index: "edit",
      label: "Modifier un produit",
      Icon: MdModeEditOutline,
      className: tabSelected === "edit"? "active" : ""
    },
  ]
  
  export const getTabSelected : (tabs: getTabsType, tabSelected: tabSelectedType ) => tabType | undefined
    = (tabs, tabSelected) => tabs.find((tab)=> tab.index ===tabSelected)
