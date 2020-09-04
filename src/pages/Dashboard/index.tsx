import React from "react";
import { FiInfo } from "react-icons/fi";
import { Container, Title, Form, UserList } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Github Users</Title>
      <Form>
        <input placeholder="User name" />
        <button>Search</button>
      </Form>

      <UserList>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4"
            alt="me"
          />

          <div>
            <strong>Me myself Irene</strong>
            <FiInfo size={20} />
          </div>
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4"
            alt="me"
          />

          <div>
            <strong>Me myself Irene</strong>
            <FiInfo size={20} />
          </div>
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4"
            alt="me"
          />

          <div>
            <strong>Me myself Irene</strong>
            <FiInfo size={20} />
          </div>
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4"
            alt="me"
          />

          <div>
            <strong>Me myself Irene</strong>
            <FiInfo size={20} />
          </div>
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4"
            alt="me"
          />

          <div>
            <strong>Me myself Irene</strong>
            <FiInfo size={20} />
          </div>
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4"
            alt="me"
          />

          <div>
            <strong>Me myself Irene</strong>
            <FiInfo size={20} />
          </div>
        </a>
      </UserList>
    </Container>
  );
};

export default Dashboard;
