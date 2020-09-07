import React, { useCallback, useState, FormEvent } from "react";
import { FiInfo, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container, Title, Form, UserInfo } from "./styles";

interface User {
  name: string;
  avatar_url: string;
}

interface UserFollower {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | undefined>();
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState<UserFollower[]>([]);

  const fetchUserInfo = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      try {
        const response = await api.get(`/${userName}`);

        const followersResponse = await api.get(`${userName}/followers`);

        const firstFiveFollowers = followersResponse.data.slice(0, 5);

        for (let follower of firstFiveFollowers) {
          const followerResponse = await api.get(`/${follower.login}`);

          follower.name = followerResponse.data.name;
          follower.email = followerResponse.data.email;

          console.log(follower);
          console.log(firstFiveFollowers);
          setFollowers(firstFiveFollowers);
        }

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
          <Link
            to={{
              pathname: "/user",
              state: {
                user,
                followers,
              },
            }}
          >
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
