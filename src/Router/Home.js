import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 2000px;
  margin: auto;
`;
const MainWrap = styled.main`
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 0 100px 0;
  position: relative;
`;
const SelfText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Self = styled.h2`
  margin: 10px 0 25px 0;
  font-size: 35px;
`;
const MyName = styled.span`
  display: block;
  font-weight: bold;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    color: #a29bfe;
    transition: all 0.5s;
  }
`;
const Text = styled.div`
  line-height: 1.5;
  span {
    display: block;
    margin: 6px 0;
  }
`;
const Name = styled.span``;
const Age = styled.span``;
const School = styled.span``;
const Hobby = styled.span``;

const ImgWrap = styled.div`
  width: 450px;
  height: 450px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Wave = styled.div`
  z-index: -3;
  opacity: 0.3;
  position: absolute;
  background-color: #6c5ce7;
  width: 500px;
  height: 500px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 3000ms infinite linear;
  &:nth-child(2) {
    z-index: -2;
    animation: drift 7000ms infinite linear;
    opacity: 0.2;
    background-color: #a29bfe;
  }
  &:last-child {
    z-index: -1;
    animation: drift 5000ms infinite linear;
    background-color: #f6e58d;
  }
  @keyframes drift {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;
const Img = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  width: 400px;
  height: 400px;
  border-radius: 50% 65% 50% 43%;
  background-color: transparent;
  background-image: url("img/leehyerin.jpg");
  background-size: cover;
`;

const Home = () => {
  return (
    <Wrapper>
      <MainWrap>
        <SelfText>
          <Self>
            FrontEnd Developer <MyName>LEEHYERIN</MyName>
          </Self>
          <Text>
            <Name>이혜린(LeeHyeRin) </Name>
            <Age>1997. 03. 16 (만 25세)</Age>
            <School>한신대학교 정보통신학부 2021.02 졸업</School>
            <Hobby>취미: 노래 듣기, 게임, 영화, 애니, 보드</Hobby>
          </Text>
        </SelfText>
        <ImgWrap>
          <Wave />
          <Wave />
          <Wave />
          <Img></Img>
        </ImgWrap>
      </MainWrap>
    </Wrapper>
  );
};

export default Home;
