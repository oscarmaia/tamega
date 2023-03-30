import styled from "@emotion/styled";

export default function Order() {
  return <OrderContainer>pedido</OrderContainer>;
}

const OrderContainer = styled.div`
  width: 10rem;
  height: 13rem;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
