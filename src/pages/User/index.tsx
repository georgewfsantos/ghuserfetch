import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Repository, Organization } from "../Dashboard/index";
import { Container, UserInfoContainer } from "./styles";
import { FiGithub, FiUsers, FiArrowLeftCircle } from "react-icons/fi";

interface UserFollower {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  email: string;
}

interface LocationState {
  user: {
    name: string;
    login: string;
    avatar_url: string;
    following: number;
    gists_url: string;
    organizations_url: string;
    repos_url: string;
  };

  followers: UserFollower[];
  gists: number;
  orgs: Array<Organization>;
  repos: Array<Repository>;
}

const User: React.FC = () => {
  const location = useLocation();

  const state = location.state as LocationState;

  const followers = state.followers;

  return (
    <Container>
      <UserInfoContainer>
        <img src={state.user.avatar_url} alt={state.user.name} />

        <Link to="/">
          <FiArrowLeftCircle size={18} color="#232249" />
        </Link>

        <div user-info>
          <strong>{state.user.name}</strong>
          <span>({state.user.login})</span>
          <strong>
            Following: <span className="following">{state.user.following}</span>
          </strong>
          <strong>
            {" "}
            Gists: <span className="gists">{state.gists}</span>
          </strong>
        </div>

        <h4>Followers:</h4>
        <div className="follower-list">
          {followers.map((follower) => (
            <div className="follower-item" key={follower.id}>
              <img src={follower.avatar_url} alt={follower.name} />

              <div className="follower-info">
                <strong>
                  {follower.name !== null ? follower.name : follower.login}
                </strong>
                <p>
                  email:{" "}
                  <span>
                    {follower.email !== null ? follower.login : "not shared"}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <h4>Repos:</h4>

        {state.repos.length > 0 ? (
          <div className="repo-list">
            {state.repos.map((repo) => (
              <div className="repo-item" key={repo.id}>
                <strong>{repo.full_name}</strong>
                <FiGithub size={18} color="#232249" />
              </div>
            ))}
          </div>
        ) : (
          <span className="no-elements">0</span>
        )}

        <h4>Organizations:</h4>

        {state.orgs.length > 0 ? (
          <div className="org-list">
            {state.orgs.map((org) => (
              <div className="org-item" key={org.id}>
                <strong>{org.login}</strong>
                <FiUsers size={18} color="#232249" />
              </div>
            ))}
          </div>
        ) : (
          <span className="no-elements">0</span>
        )}
      </UserInfoContainer>
    </Container>
  );
};

export default User;
