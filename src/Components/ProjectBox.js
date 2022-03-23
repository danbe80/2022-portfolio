import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiFirebase } from "react-icons/si";

const Wrapper = styled.div`
  width: 100%;
`;
const TopWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoWrap = styled.div`
  width: 400px;
  height: 350px;
  margin-right: 20px;
  background-color: #111;
  border-radius: 15px;
`;
const Logo = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.LogoImg});
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 15px;
`;
const ExplainBox = styled.div`
  text-align: center;
`;
const Explain = styled.p`
  width: 450px;
  font-size: 18px;
  line-height: 1.5;
  word-wrap: break-word;
`;
const Skills = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Skill = styled.li`
  font-size: 35px;
  margin: 0 20px;
`;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  button {
    width: 150px;
    margin: 0 40px;
    background-color: transparent;
    border: 2px solid rgba(108, 92, 231, 0.5);
    color: rgba(108, 92, 231, 0.5);
    padding: 5px;
    font-size: 20px;
    border-radius: 5px;
    &:hover {
      background-color: rgba(108, 92, 231, 0.5);
      color: #f1f1f1;
      transition: all 0.3s;
    }
  }
`;
const Git = styled.button``;
const Demo = styled.button``;

const ProjectBox = ({ photo, explain, skills, git, demo }) => {
  return (
    <Wrapper>
      <TopWrap>
        <LogoWrap>
          <Logo LogoImg={photo} />
        </LogoWrap>
        <ExplainBox>
          <Explain>{explain}</Explain>
          <Skills>
            {skills.map((item) => (
              <Skill key={item}>
                {item === "HTML" && <FaHtml5 />}
                {item === "CSS" && <FaCss3Alt />}
                {item === "JavaScript" && <SiJavascript />}
                {item === "React" && <FaReact />}
                {item === "TypeScript" && <SiTypescript />}
                {item === "Firebase" && <SiFirebase />}
              </Skill>
            ))}
          </Skills>
        </ExplainBox>
      </TopWrap>

      <BtnWrap>
        <Git onClick={() => window.open(git)}>GITHUB</Git>
        <Demo onClick={() => window.open(demo)}>DEMO</Demo>
      </BtnWrap>
    </Wrapper>
  );
};

export default ProjectBox;
