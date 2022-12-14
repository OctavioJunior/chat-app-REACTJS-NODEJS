import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-image: linear-gradient(15deg, #6700ff, #780df4, #982dd5, #a73acb);
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5.5rem;
    }
    h1 {
      color: #7dcddf;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #210338;
    border-radius: 2rem;
    padding: 3rem 5rem;
    min-width: 25vw;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: #7dcddf;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 2rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #340eff;
    }
  }
  span {
    display: flex;
    color: #fff;
    text-transform: uppercase;
    justify-content: space-between;
    a {
      color: #7dcddf;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
