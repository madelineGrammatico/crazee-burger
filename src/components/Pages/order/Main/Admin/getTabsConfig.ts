import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';

import AddForm  from './AdminPanel/AddForm.tsx'
import EditPanel from './AdminPanel/EditPanel.tsx';
import { getTabsConfigType, getTabsType, tabSelectedType, tabConfigType } from '../../../../../lib/types.ts';


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
  
  export const getTabSelected : (tabs: getTabsType, tabSelected: tabSelectedType ) => tabConfigType | undefined
    = (tabs, tabSelected) => tabs.find((tab)=> tab.index ===tabSelected)

  export const getClassName : (tab: tabConfigType, tabSelected: tabSelectedType)=> string 
    = (tab, tabSelected) => tab.className ? 
        tab.className 
      : 
        tabSelected === tab.index ? "active" : ""
