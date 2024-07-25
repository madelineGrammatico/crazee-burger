import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { IconType } from 'react-icons';
import AddForm  from './panels/AddForm.tsx'
import EditPanel from './panels/EditPanel.tsx';

export type tabSelectedType = "add" | "edit"
export type indexTabsConfig = "add" | "edit" | "chevron"

export type tabType = {
  index: indexTabsConfig,
  onClick?: void,
  label: string,
  Icon: IconType,
  className?: string,
  Content?: React.ComponentType
}
type getTabsType = tabType []

type getTabsConfigType = (isCollapsed: boolean) => getTabsType

export const getTabsConfig : getTabsConfigType = (isCollapsed) => [
    {
      index: "chevron",
      label: "",
      Icon: !isCollapsed ? FiChevronDown : FiChevronUp,
      className: isCollapsed ? "active" : "",
     
    },
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: AiOutlinePlus,
      Content: AddForm
    },
    {
      index: "edit",
      label: "Modifier un produit",
      Icon: MdModeEditOutline,
      Content: EditPanel
    },
  ]
  
  export const getTabSelected : (tabs: getTabsType, tabSelected: tabSelectedType ) => tabType | undefined
    = (tabs, tabSelected) => tabs.find((tab)=> tab.index ===tabSelected)

  export const getClassName : (tab: tabType, tabSelected: tabSelectedType)=> string 
    = (tab, tabSelected) => tab.className ? 
        tab.className 
      : 
        tabSelected === tab.index ? "active" : ""
