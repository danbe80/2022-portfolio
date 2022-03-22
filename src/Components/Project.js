import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 2000px;
  margin: auto;
`;
const ProjectWrap = styled.div`
  width: 100%;
`;
const ProjectList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = styled.li`
  margin-top: 80px;
`;
const Logo = styled.div`
  width: 400px;
  height: 400px;
  background: url("img/danflix-logo.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-color: black;
  border-radius: 15px;
`;
const ButWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  button {
    width: 25%;
    font-size: 18px;
    background-color: transparent;
    border: 1px solid #6c5ce7;
    padding: 5px 15px;
    border-radius: 3px;
    &:hover {
      background-color: #6c5ce7;
      color: #f1f1f1;
      transition: all ease-in-out 0.3s;
    }
  }
`;
const ProjectMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailBox = styled.div``;
const Explain = styled.p``;
const Skils = styled.ul``;

const GithubBtn = styled.button``;
const DemoBtn = styled.button``;
const Project = () => {
  return (
    <Wrapper>
      <ProjectWrap>
        <ProjectList>
          <Item>
            <ProjectMain>
              <Logo />
              <DetailBox>
                <Explain>
                  이 프로젝트는 NETFLIX를 Clone Coding한 사이트입니다.
                </Explain>
                <Skils></Skils>
              </DetailBox>
            </ProjectMain>

            <ButWrap>
              <GithubBtn>GITHUB</GithubBtn>
              <DemoBtn>DEMO</DemoBtn>
            </ButWrap>
          </Item>
        </ProjectList>
      </ProjectWrap>
    </Wrapper>
  );
};
export default Project;
