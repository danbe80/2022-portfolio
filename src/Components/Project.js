import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProjectBox from "./ProjectBox";
import doit from "../assets/img/doit.gif";
import yell from "../assets/img/yell.gif";
import danflix from "../assets/img/danflix-logo.png";

const Wrapper = styled.div``;
const ProjectWrap = styled.div`
  width: 100%;
`;
const ProjectList = styled.ul`
  width: 800px;
  height: 60px;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  text-align: center;
  color: #666;
  @media (max-width: 769px) {
    width: 500px;
    font-size: 20px;
  }
  @media (max-width: 426px) {
    width: 300px;
    font-size: 16px;
  }
`;
const Item = styled.li`
  width: 33.3333%;
  padding: 10px;
  border-bottom: 1px solid rgba(108, 92, 231, 0);
  position: relative;
`;
const Line = styled(motion.div)`
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: rgba(108, 92, 231, 0.5);
  position: absolute;
`;
const Project = () => {
  const [seletedProject, setSeletedProject] = useState("DOIT");
  const onClick = (data) => {
    const name = data.target.innerText;
    setSeletedProject(name);
  };
  return (
    <Wrapper>
      <ProjectWrap>
        <ProjectList>
          <Item onClick={onClick}>
            DOIT{seletedProject === "DOIT" && <Line layoutId="line" />}
          </Item>
          <Item onClick={onClick}>
            YELL{seletedProject === "YELL" && <Line layoutId="line" />}
          </Item>
          <Item onClick={onClick}>
            DANFLIX
            {seletedProject === "DANFLIX" && <Line layoutId="line" />}
          </Item>
        </ProjectList>
        {seletedProject === "DOIT" && (
          <ProjectBox
            photo={doit}
            explain="이 프로젝트는 순수 자바스크립트로 제작되었습니다. 
            CANVAS API와 Weather API를 사용하여 그림판과 날씨 기능을 구현하였습니다. "
            skills={["HTML", "CSS", "JavaScript"]}
            git="https://github.com/danbe80/doit.github.io"
            demo="https://danbe80.github.io/doit.github.io/"
          />
        )}
        {seletedProject === "YELL" && (
          <ProjectBox
            photo={yell}
            explain="이 프로젝트는 React로 제작되었습니다.
          react-beautiful-dnd 라이브러리를 이용해 Trello 클론 코딩한 Kanvan App입니다."
            skills={["React", "TypeScript"]}
            git="https://github.com/danbe80/yell-app"
            demo="https://danbe80.github.io/yell-app/"
          />
        )}

        {seletedProject === "DANFLIX" && (
          <ProjectBox
            photo={danflix}
            explain="이 프로젝트는 React로 제작되었습니다.
            Firebase Auth로 이용해 간단한 회원가입을 구현하였습니다."
            skills={["React", "TypeScript", "Firebase"]}
            git="https://github.com/danbe80/re-danflix"
            demo="https://danflix-aed3e.web.app/"
          />
        )}
      </ProjectWrap>
    </Wrapper>
  );
};
export default Project;
