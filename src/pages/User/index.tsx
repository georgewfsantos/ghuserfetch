import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

import api from "../../services/api";

import { Container, UserInfoContainer } from "./styles";

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
}

const User: React.FC = () => {
  const location = useLocation();

  const state = location.state as LocationState;

  const followers = state.followers;

  console.log(state);
  console.log(followers);

  // console.log(userFollowers);

  return (
    <Container>
      <UserInfoContainer>
        <img src={state.user.avatar_url} alt={state.user.name} />

        <div>
          <strong>{state.user.name}</strong>
          <span>({state.user.login})</span>
        </div>

        <h3>Followers</h3>
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
      </UserInfoContainer>
    </Container>
  );
};

export default User;
