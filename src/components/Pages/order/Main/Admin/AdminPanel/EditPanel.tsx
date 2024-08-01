// import React from 'react'
// import { theme } from "../../../../../theme";
// import { FaHamburger } from 'react-icons/fa';
import styled from "styled-components"
// import TextInput from '../../../../../reusables-ui/TextInput';
import HintMessage from './HintMessage';


export default function EditPanel() {
  return (
    <EditPanelStyled>
       <HintMessage/>
    </EditPanelStyled>
  )
}
const EditPanelStyled = styled.form`
    height:100%;
    width:100%;
`;
