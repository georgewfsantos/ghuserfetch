import React, { useCallback, useState, FormEvent } from "react";
import { FiInfo, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container, Title, Form, UserInfo } from "./styles";

interface User {
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | undefined>();
  const [userName, setUserName] = useState("");

  const fetchUserInfo = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      try {
        const response = await api.get(`/${userName}`);

        console.log(response.data);

        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    [userName]
  );
  return (
    <Container>
      <Title>Github Users</Title>
      <Form onSubmit={fetchUserInfo}>
        <input
          placeholder="User name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button>
          <FiSearch size={20} />
        </button>
      </Form>

      <UserInfo>
        {user && (
          <Link to="/user">
            <img src={user?.avatar_url} alt={user?.avatar_url} />

            <div>
              <strong>{user?.name}</strong>
              <FiInfo size={20} />
            </div>
          </Link>
        )}
      </UserInfo>
    </Container>
  );
};

export default Dashboard;
