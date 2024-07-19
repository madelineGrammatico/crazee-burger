import styled from "styled-components"
// import { theme } from "../../../../theme";

type ProduitType = {
    imageSource: string,
    title: string,
    price: number
}
export default function Product({imageSource, title, price}: ProduitType) {
  return (
    <ProductStyled>
        <div className="image">
            <img src={imageSource} alt={title}/>
        </div>
        <div className="infoText">
            <p className="title">{title}</p>
            <div className="description">
                <p className="price">{price}</p>
                <button>Ajouter</button>
            </div>
        </div>
    </ProductStyled>
  )
}

const ProductStyled = styled.div`
  background-color:red;
    width: 240px;
    height: 330px;

    .image{
        width: 100px;
        height: auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
`;