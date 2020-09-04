import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  margin: auto;
  padding: 60px 0;
`;

export const Title = styled.h1`
  color: #fafdfe;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 30px;
  width: 640px;
  max-width: 800px;

  input {
    flex: 1;
    height: 50px;
    border: 0;
    padding: 0 25px;
    border-radius: 4px;

    &::placeholder {
      color: #a8b8d3;
    }
  }

  button {
    width: 100px;
    height: 50px;
    border: 0;
    border-radius: 4px;
    background-color: #f95a59;
    margin-left: 5px;
    color: #fafdfe;
    transition: background-color 0.2s;
    font-weight: bold;

    &:hover {
      background: ${shade(0.1, "#f95a59")};
    }
  }
`;

export const UserInfo = styled.div`
  margin-top: 60px;
  width: 90%;
  max-width: 640px;

  a {
    display: flex;
    align-items: center;

    background: #fafdfe;
    border-radius: 4px;
    width: 100%;
    padding: 20px;
    text-decoration: none;

    &:hover {
      box-shadow: 0 8px 8px 0 #0000, 0 8px 8px 0 grey;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }

    > div {
      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;

      strong {
        text-decoration: none;
        color: #232249;
      }
    }
  }
`;
