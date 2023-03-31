import styled from "@emotion/styled";

export default function Order({ id, totalValue, status, itens }) {
  console.log(itens);
  return (
    <OrderContainer>
      <TotalArea>
        <h1>Pedido: {id}</h1>
        <h1>
          Itens:{" "}
          <br></br>
          {itens.map((i) => {
            return <span>{i.name}<br></br></span>;
          })}
        </h1>
        <h2>Valor total: {totalValue}</h2>
        <h2>Status: {status}</h2>
      </TotalArea>
    </OrderContainer>
  );
}

const OrderContainer = styled.div`
  width: 10rem;
  min-height: 13rem;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const TotalArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;
