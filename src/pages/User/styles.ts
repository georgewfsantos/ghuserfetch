import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px;
`;

export const UserInfoContainer = styled.div`
  width: 640px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  background-color: #fff;
  border-radius: 4px;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }

  a::hover {
    color: #f95a59;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;

    .following,
    .gists {
      color: #f95a59;
      display: inline-block;
    }

    .gists {
      margin-bottom: 5px;
    }
  }

  h4 {
    margin-top: 15px;
  }

  .follower-list {
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    width: 100%;

    .follower-item {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 8px;
      background: #fff;
      margin-bottom: 5px;
      background: #f95a59;
      border-radius: 4px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
      }

      strong {
        color: #232249;
      }

      .follower-info {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 8px;
        padding-right: 8px;

        p {
          color: #232249;

          span {
            color: #fff;
          }
        }
      }
    }
  }

  .repo-list {
    display: flex;
    flex-direction: column;
    height: 200px;

    width: 100%;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .repo-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 8px;
      background: #fff;
      margin-bottom: 5px;
      background: #f95a59;
      border-radius: 4px;

      &:first-of-type {
        margin-top: 10px;
      }

      &:last-of-type {
        margin-bottom: 10px;
      }

      strong {
        color: #232249;
      }
    }
  }

  .org-list {
    display: flex;
    flex-direction: column;
    max-height: 200px;
    width: 100%;

    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .org-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 8px;
      background: #fff;
      margin-bottom: 5px;
      background: #f95a59;
      border-radius: 4px;

      &:first-of-type {
        margin-top: 10px;
      }

      &:last-of-type {
        margin-bottom: 10px;
      }

      strong {
        color: #232249;
      }
    }
  }

  .no-elements {
    color: #f95a59;
  }
`;
