import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { BsX } from "react-icons/bs";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
const Notice = styled.div`
  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  box-shadow: 0 0 10px 1px #95afc0;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  color: #c0392b;
  display: flex;
  align-items: center;
  svg {
    color: #111;
    margin-right: 10px;
    padding: 5px;
    cursor: pointer;
  }
  @media (max-width: 769px) {
    svg {
      margin-right: 0;
    }
    @media (max-width: 426px) {
      width: 80%;
      margin: auto;
    }
  }
`;
const InterViewWrap = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 769px) {
    width: 100%;
  }
`;
const QWrap = styled(motion.div)`
  padding: 40px;
  line-height: 1.5;
`;
const Q = styled.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 2;
`;
const Anwser = styled.p``;

const Interview = () => {
  const [cancel, setCancel] = useState(true);
  const onCancel = () => {
    setCancel(false);
  };
  return (
    <Wrapper>
      <InterViewWrap>
        {cancel ? (
          <Notice>
            <BsX onClick={onCancel} />
            <span>🔔 기자와의 Interview하는 컨셉으로 잡았습니다.</span>
          </Notice>
        ) : null}
        <QWrap
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Q>1. 개발자가 되기로 한 계기가?</Q>
          <Anwser>
            '나는 개발자가 되겠다!'라는 마음을 먹은 것은 약 1년 정도 밖에 되지
            않았어요. 대학 학과를 IT 전공 관련 학과였지만 꿈을 개발자 혹은 IT
            관련 직업을 생각하고 있진 않았거든요. 근데 4학년 졸업 논문을
            시작하면서 팀 프로젝트를 참여하게 되었는데, 그 프로젝트에서 앱
            프론트엔드 개발 영역을 맡게 되었어요. 프로젝트를 진행하면서 에러를
            수정하고 구글링을 해가며 해결방안을 찾고 어떤 형식의 UI/UX가 좋은지
            사용자 입장에서 생각하면서 개발을 진행했어요. 저도 모르게 말입니다.
            그런 저의 모습을 본 팀원분이 개발자를 해보지 않겠냐는 제안을 하게
            되었고, 졸업 논문이 끝난 뒤 제 취미와 연관된 웹 프론트엔드 개발자를
            지원하게 되었습니다.
          </Anwser>
        </QWrap>
        <QWrap
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
          <Q>2. 어떤 취미를 가진거죠?</Q>
          <Anwser>
            제가 좀 특이한 취미를 가졌는데 저는 게임을 정말 좋아하는 유저입니다.
            물론 모바일게임, 웹게임, 스팀게임 등등 장르 안가리고 좋아하는
            편입니다. 최근 몇 년간은 정말 유명하지 않은 게임들이나 출시하지 얼마
            되지 않은 게임들을 다운 받아 해보는 것이 취미였는데요. 하지만
            게임이라고 해서 모든 게임을 다운 받아서 해본 것이 아니라 저만의
            기준이 있습니다. 그 게임의 홈페이지를 들어가보고 다운을 결정하죠. 그
            게임의 홈페이지를 들어가면서 페이지를 둘러보고 이벤트나 등등 여러
            스토리, 게임 캐릭터 등을 보는 취미가 있었습니다. 그 취미 덕분에
            웹이라는 분야에 발을 들이게 된것입니다.
          </Anwser>
        </QWrap>
        <QWrap
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 6 }}
        >
          <Q>3. 그렇다면 웹 개발자가 되기 위해 노력한 점은?</Q>
          <Anwser>
            저는 졸업을 하자마자 웹 개발자가 되겠다라는 결심 가지고 학원 등록을
            했습니다. 처음 접해보는 분야였고, 학교에서 배운 것보다 더욱 실무적인
            부분을 배우고 싶었습니다. 그리고 프론트엔드 개발자가 보여지는 부분을
            개발하는 것이기 때문에 디자인적인 감각도 키우고자 일단 첫 학원은
            웹퍼블리셔 과정을 들었습니다. 기본적인 GTQ 사용법과
            HTML,CSS,JavaScript,JQuery 등을 배웠고 추가적으로 vue.js와
            React.js를 얕게 배웠습니다. 약 6개월 과정을 들으면서 GTQ 1급과
            웹디자인 기능사 자격증을 취득하였고, 학원 졸업 후 프론트엔드
            개발자로써 더 알아야 하는 프레임워크나 API등을 사용해 프로젝트를
            제작도 해보았습니다. 그리고 프로젝트를 하면서 정처기 준비를 해서
            현재 정보처리기사 필기 시험까지 합격했습니다.
          </Anwser>
        </QWrap>
        <QWrap
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 8 }}
        >
          <Q>4. 앞으로의 계획은?</Q>
          <Anwser>
            앞으로 저의 계획은 일단 제일 먼저 이룰 첫번째 목표는 기본기가 탄탄한
            시니어 개발자가 되는 것이고, 그 후 한팀을 이끄는 테크 리더가 되는
            것입니다. 그리고 먼 미래에는 디자인부터 서버까지 전부 다룰 수 있는
            웹 풀스택 개발자가 되는 것이고, 웹을 기반으로 한 게임도 개발하고 그
            게임의 페이지까지 제작하는 것을 목표로 삼았습니다.
          </Anwser>
        </QWrap>
      </InterViewWrap>
    </Wrapper>
  );
};
export default Interview;
