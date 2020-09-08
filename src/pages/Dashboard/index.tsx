import React, { useCallback, useState, FormEvent } from "react";
import { FiInfo, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container, Title, Form, UserInfo } from "./styles";
import { toast } from "react-toastify";

interface User {
  name: string;
  avatar_url: string;
}

export interface Organization {
  id: number;
  login: string;
  description: string;
}

export interface Repository {
  id: number;
  full_name: string;
}

interface Gist {
  id: number;
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
  const [gists, setGists] = useState<Gist[]>([]);
  const [orgs, setOrgs] = useState<Organization[]>([]);
  const [repos, setRepos] = useState<Repository[]>([]);

  const [loading, setLoading] = useState(false);

  const fetchUserInfo = useCallback(
    async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      try {
        const response = await api.get(`/${userName}`);
        const gistsResponse = await api.get(`${userName}/gists`);
        const orgsResponse = await api.get(`${userName}/orgs`);
        const reposResponse = await api.get(`${userName}/repos`);

        const followersResponse = await api.get(`${userName}/followers`);

        const firstFiveFollowers = followersResponse.data.slice(0, 5);

        for (let follower of firstFiveFollowers) {
          const followerResponse = await api.get(`/${follower.login}`);

          follower.name = followerResponse.data.name;
          follower.email = followerResponse.data.email;
          follower.gists = gistsResponse.data;
          follower.orgs = orgsResponse.data;
          follower.repos = reposResponse.data;

          setFollowers(firstFiveFollowers);
        }

        setUser(response.data);
        setGists(gistsResponse.data);
        setOrgs(orgsResponse.data);
        setRepos(reposResponse.data);

        setLoading(false);
      } catch (error) {
        toast.error(
          "User could not be found. Please check the user name and try again."
        );
        setLoading(false);
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
        <button onClick={() => setLoading(true)}>
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
                gists: gists.length,
                orgs,
                repos,
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

        {loading && (
          <div className="loading">Searching user information...</div>
        )}
      </UserInfo>
    </Container>
  );
};

export default Dashboard;
