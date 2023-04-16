import styled from 'styled-components';
import Order from './order/Order';

export default function Dashboard() {
  const orders = [
    {
      id: 1,
      tableId: 1,
      totalValue: 320,
      createdAt: '30/03/2023',
      status: 'PENDING',
      itens: [{ name: 'Coxinha de Frango' }],
    },
    {
      id: 2,
      tableId: 2,
      totalValue: 320,
      createdAt: '30/03/2023',
      status: 'PENDING',
      itens: [
        {
          name: 'Coxinha de Frango',
        },
        {
          name: 'Mini',
        },
        { name: 'Caipirinha Brasileira' },
        {
          name: 'Coxinha de Frango',
        },
        {
          name: 'Mini',
        },
        { name: 'Caipirinha Brasileira' },
      ],
    },

    {
      id: 3,
      tableId: 3,
      totalValue: 320,
      createdAt: '30/03/2023',
      itens: [{ name: 'Coxinha de Frango' }],
      status: 'PENDING',
    },
    {
      id: 4,
      tableId: 4,
      totalValue: 320,
      createdAt: '30/03/2023',
      itens: [{ name: 'Coxinha de Frango' }],
      status: 'PENDING',
    },
    {
      id: 5,
      tableId: 5,
      totalValue: 320,
      createdAt: '30/03/2023',
      itens: [{ name: 'Coxinha de Frango' }],
      status: 'PENDING',
    },
    {
      id: 6,
      tableId: 6,
      totalValue: 320,
      createdAt: '30/03/2023',
      itens: [{ name: 'Coxinha de Frango' }],
      status: 'PENDING',
    },
  ];
  return (
    <AreaContainer>
      <DashboardContainer>
        <OrderContainer>
          {orders.map((o) => {
            return <Order id={o.id} totalValue={o.totalValue} key={o.id} status={o.status} itens={o.itens} />;
          })}
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
