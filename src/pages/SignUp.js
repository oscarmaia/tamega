import { useState } from "react";
import styled from "styled-components";

export default function SignUp() {
  const [disableButton, setDisableButton] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    _password: "",
  });

  function register(e) {
    e.preventDefault();
    setDisableButton(true);
    if (form.password !== form._password) {
      alert("password must be the same");
      setDisableButton(false);
      return;
    }
    console.log(form);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  return (
    <AreaContainer>
      <h1>CADASTRE-SE</h1>
      <Form onSubmit={register}>
        <Input
          name="name"
          value={form.name}
          required
          type="text"
          placeholder="name"
          onChange={handleChange}
        ></Input>
        <Input
          value={form.email}
          name="email"
          type="email"
          required
          placeholder="email"
          onChange={handleChange}
        ></Input>
        <Input
          value={form.password}
          onChange={handleChange}
          name="password"
          type="password"
          required
          placeholder="password"
        ></Input>
        <Input
          value={form._password}
          onChange={handleChange}
          name="_password"
          type="password"
          required
          placeholder="confirm password"
        ></Input>
        <Button disabled={disableButton ? true : false} type="submit">
          FAZER CADASTRO
        </Button>
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
