import styled from "styled-components";

export default function SignUp() {
  return (
    <AreaContainer>
      <h1>CADASTRE-SE</h1>
      <Form onSubmit={() => console.log("clicked")}>
        <Input placeholder="name"></Input>
        <Input placeholder="username"></Input>
        <Input placeholder="password"></Input>
        <Input placeholder="confirm password"></Input>
        <Button>FAZER CADASTRO</Button>
      </Form>
    </AreaContainer>
  );
}

const AreaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-bottom: 2rem;
    font-weight: 700;
  }
`;

const Form = styled.form`
  width: 70%;
  padding: 0.5rem 2rem 0.5rem 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
`;

const Input = styled.input`
  margin: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  height: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
`;

const Button = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background-color: lightblue;
  min-width: 13rem;
  box-sizing: border-box;
  height: 2rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  :hover {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;
