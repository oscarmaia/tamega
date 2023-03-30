import styled from "styled-components";
import Button from "@mui/material/Button";
import Order from "./order/Order";

export default function Dashboard() {
  return (
    <AreaContainer>
      <DashboardContainer>
        <OrderContainer>
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </OrderContainer>
      </DashboardContainer>
    </AreaContainer>
  );
}

const OrderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
const AreaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DashboardContainer = styled.div`
  position: relative;
  min-height: 95%;
  width: 95%;
  border-radius: 0.5rem;
  background-color: grey;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
`;
