import styled from "styled-components"
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import OrderContext from "../../context/OrderContext";

type ProduitType = {
    imageSource: string,
    title: string,
    leftDescription: number | string,
    id: number,
}
export default function Card({ title, imageSource, leftDescription, id}: ProduitType) {
  const {menu, setMenu} = useContext(OrderContext)

  const handleDelete =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setMenu(menu.filter((product) => product.id !== id))
  }
  
    return (
      <CardStyled className="produit">
        <button className="close" onClick={handleDelete}><TiDelete/></button>
        <div className="image">
          <img src={imageSource} alt={title} />
        </div>
        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
            <div className="right-description">
              <PrimaryButton className="primary-button" label={"Ajouter"} />
            </div>
          </div>
        </div>
      </CardStyled>
    )
  }

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 30px 50% 1fr;
  padding: 15px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

   .close {
      justify-self: end;
      padding: 0;
      background-color: transparent;
      border: none;

      svg {
      width: 30px;
      height:30px;
      color: ${theme.colors.primary};
   }
   :hover{
      color: ${theme.colors.red};
    }
  }
  .image {
    width: 100%;
    height: auto;
    margin-top: 5px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;

    .title {
      margin: auto 5px;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 10px;
      
      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`