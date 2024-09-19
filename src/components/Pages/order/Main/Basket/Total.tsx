import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusables-ui/Header";
import { useContext } from "react";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import { calculateTotal } from "./helper";

export default function Total() {
  const { basket, menu, isLoading} = useContext(OrderContext)
  const amondToPaid: number = calculateTotal(basket, menu)

  return (
    <Header>
      <TotalStyled>
          <span className="total">Total</span>
          <span className="amount">
            {isLoading ? "" : formatPrice(amondToPaid)}
          </span>
      </TotalStyled>
    </Header>
  )
}
const TotalStyled = styled.div`
  height: 100%;
  display:flex;
  justify-content: space-between;
  align-items : center;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
  position: sticky;
  top: 0;
`;