import styled from "styled-components"
import { useContext }from "react";
import OrderContext from "../../../../../../context/OrderContext";
// import Button from "../../../../../reusables-ui/Button";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusables-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import { theme } from "../../../../../../theme";

export default function EditForm() {
 
  const { 
    productSelected,
    setProductSelected, 
    handleEdit, 
    titleEditRef
  } = useContext(OrderContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { name, value} = event.target
    const produitBeingUdpdated = {
      ...productSelected,
      [name]: value,
    }
    setProductSelected(produitBeingUdpdated)
    handleEdit(produitBeingUdpdated)
  }

  const inputTexts = getInputTextsConfig(productSelected)
  return (
    <EditFormStyled onSubmit={(e)=> e.preventDefault()}>
       <ImagePreview
        imageSource={productSelected.imageSource} 
        title={productSelected.title}/>
      <div className="input-fields">
        {inputTexts.map((input) => 
          <TextInput
            {...input}
            onChange={handleChange}
            version="slim"
            ref={input.name==="title" ? titleEditRef : null}
          />
        )}
        </div>
      <span className="submit">
         <span className="sentence">Cliquer sur un produit du menu pour le modifier <span className="life-update">en temps réel</span>
         </span>
      </span>
    </EditFormStyled>
  )
}
const EditFormStyled = styled.form`
    width: 880px;
  display: grid;
  grid-template-columns: 215px 1fr;
  align-items: start;
  gap: 8px 20px;
  
  .input-fields {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    grid-area: 1/ 2 / 1 / 3;
  }

  .submit{
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    flex-flow: nowrap;
    align-items: center;
    /* gap: 15px; */
      .sentence{
        margin-top: 15px;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.SM};
        .life-update{
          text-decoration: underline;
        }
      }
    }
`;
