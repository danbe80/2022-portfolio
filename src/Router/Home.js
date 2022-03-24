import { motion } from "framer-motion";
import React, { useState } from "react";
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
const MyName = styled(motion.span)`
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
const Overlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
const IntroWrap = styled(motion.div)`
  width: 500px;
  height: 500px;
  background-color: white;
  margin: auto;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  border-radius: 10px;
  z-index: 2;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;
const ModalName = styled.div`
  font-size: 35px;
  text-align: center;
  padding: 15px 0;
`;
const ModalCertification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  line-height: 1.2;
`;
const ModalPhoto = styled.div`
  width: 350px;
  height: 400px;
  position: absolute;
  background-image: url("/img/Home.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  opacity: 0.3;
  top: -30px;
  right: -50px;
  z-index: -1;
`;
const Skills = styled.div`
  padding: 20px;
  width: 200px;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
const Html = styled.div`
  background-image: url("/img/skills/html5.png");
`;
const Css = styled.div`
  background-image: url("/img/skills/css3.png");
`;
const JavaScript = styled.div`
  background-image: url("/img/skills/javascript.png");
`;
const TypeScript = styled.div`
  background-image: url("/img/skills/typescript.png");
`;
const ReactJs = styled.div`
  background-image: url("/img/skills/react.png");
`;
const Firebase = styled.div`
  background-image: url("/img/skills/firebase.png");
`;
const EducationWrap = styled.div``;
const Education = styled.div`
  background-color: #f1f1f1;
  border-radius: 15px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 0 0 20px 2px #95afc0;
  margin: 10px 0;
`;
const Lang = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  span {
    background-color: #f1f1f1;
    box-shadow: 0 0 15px 2px #95afc0;
    border-radius: 15px;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    margin: 15px;
  }
`;
const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onModal = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <Wrapper>
      <MainWrap>
        <SelfText>
          <Self>
            FrontEnd Developer
            <MyName layoutId="modal" onClick={onModal}>
              LEEHYERIN
            </MyName>
          </Self>
          <Text>
            <Name>이혜린(LeeHyeRin) </Name>
            <Age>1997. 03. 16 (만 25세)</Age>
            <School>한신대학교 정보통신학부 2021.02 졸업</School>
            <Hobby>취미: 노래, 게임, 영화, 보드</Hobby>
          </Text>
        </SelfText>
        <ImgWrap>
          <Wave />
          <Wave />
          <Wave />
          <Img></Img>
        </ImgWrap>
      </MainWrap>
      {isClicked ? (
        <>
          <Overlay onClick={onModal}></Overlay>
          <IntroWrap layoutId="modal">
            <ModalPhoto />
            <ModalName>LEEHYERIN</ModalName>
            <ModalCertification>
              <Skills>
                <Html />
                <Css />
                <JavaScript />
                <TypeScript />
                <ReactJs />
                <Firebase />
              </Skills>
              <EducationWrap>
                <Education>
                  하이미디어아카데미
                  <br /> UI/UX 웹디자인&웹퍼블리셔 과정 수료
                </Education>
                <Education>GTQ 1급 취득</Education>
                <Education>웹디자인 기능사 취득</Education>
                <Education>정보처리기사 필기 합격</Education>
              </EducationWrap>
            </ModalCertification>
            <Lang>
              <span>일본어</span>
              <span>영어</span>
            </Lang>
          </IntroWrap>
        </>
      ) : null}
    </Wrapper>
  );
};

export default Home;
