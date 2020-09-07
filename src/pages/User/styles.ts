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

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
  }

  h3 {
    margin-top: 15px;
  }

  .follower-list {
    display: flex;
    flex-direction: column;

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
`;
