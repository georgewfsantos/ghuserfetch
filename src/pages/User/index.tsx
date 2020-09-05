import React from "react";
import { useLocation } from "react-router-dom";

import { Container } from "./styles";

interface LocationState {
  name: string;
  login: string;
  avatar_url: string;
  followers_url: string;
  following: number;
  gists_url: string;
  organizations_url: string;
  repos_url: string;
}

const User: React.FC = () => {
  const location = useLocation();

  const state = location.state as LocationState;

  return (
    <Container>
      <img src={state.avatar_url} alt="test" />
    </Container>
  );
};

export default User;
