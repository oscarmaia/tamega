import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SignIn() {
  const navigate = useNavigate();
  const [disableButton, setDisableButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function register(e) {
    e.preventDefault();
    setDisableButton(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth`, form, {})
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      })
      .catch((err) => {
        setDisableButton(false);
        setErrorMessage(err.response.data.message);
      });
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    setDisableButton(false);
  }, []);

  return (
    <AreaContainer>
      <h1>LOGIN</h1>
      <Form onSubmit={register}>
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
        <span style={{ color: 'red' }}>{errorMessage ? errorMessage : ''}</span>
        <Button disabled={disableButton ? true : false} type="submit">
          FAZER LOGIN
        </Button>
        <Link to={'/sign-up'}>Ir para página de cadastro</Link>
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
  a {
    margin: 0.2rem;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }
  a:visited {
    color: inherit;
  }
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
