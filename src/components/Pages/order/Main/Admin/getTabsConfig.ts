import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';

import AddForm  from './AdminPanel/AddForm.tsx'
import EditForm from './AdminPanel/EditForm.tsx';
import { getTabsConfigType, getTabsType, tabSelectedType, tabConfigType } from '../../../../../lib/types.ts';
import HintMessage from './AdminPanel/HintMessage.tsx';


export const getTabsConfig : getTabsConfigType = (isCollapsed, hasClickedProduct) => [
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
      Content: hasClickedProduct ? EditForm : HintMessage
    },
  ]
  
  export const getTabSelected : (tabs: getTabsType, tabSelected: tabSelectedType ) => tabConfigType | undefined
    = (tabs, tabSelected) => tabs.find((tab)=> tab.index ===tabSelected)

  export const getClassName : (tab: tabConfigType, tabSelected: tabSelectedType)=> string 
    = (tab, tabSelected) => tab.className ? 
        tab.className 
      : 
        tabSelected === tab.index ? "active" : ""
