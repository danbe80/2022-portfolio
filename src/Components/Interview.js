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
            <span>π κΈ°μμμ Interviewνλ μ»¨μμΌλ‘ μ‘μμ΅λλ€.</span>
          </Notice>
        ) : null}
        <QWrap
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Q>1. κ°λ°μκ° λκΈ°λ‘ ν κ³κΈ°κ°?</Q>
          <Anwser>
            'λλ κ°λ°μκ° λκ² λ€!'λΌλ λ§μμ λ¨Ήμ κ²μ μ½ 1λ μ λ λ°μ λμ§
            μμμ΄μ. λν νκ³Όλ₯Ό IT μ κ³΅ κ΄λ ¨ νκ³Όμμ§λ§ κΏμ κ°λ°μ νΉμ IT
            κ΄λ ¨ μ§μμ μκ°νκ³  μμ§ μμκ±°λ μ. κ·Όλ° 4νλ μ‘Έμ λΌλ¬Έμ
            μμνλ©΄μ ν νλ‘μ νΈλ₯Ό μ°Έμ¬νκ² λμλλ°, κ·Έ νλ‘μ νΈμμ μ±
            νλ‘ νΈμλ κ°λ° μμ­μ λ§‘κ² λμμ΄μ. νλ‘μ νΈλ₯Ό μ§ννλ©΄μ μλ¬λ₯Ό
            μμ νκ³  κ΅¬κΈλ§μ ν΄κ°λ©° ν΄κ²°λ°©μμ μ°Ύκ³  μ΄λ€ νμμ UI/UXκ° μ’μμ§
            μ¬μ©μ μμ₯μμ μκ°νλ©΄μ κ°λ°μ μ§ννμ΄μ. μ λ λͺ¨λ₯΄κ² λ§μλλ€.
            κ·Έλ° μ μ λͺ¨μ΅μ λ³Έ νμλΆμ΄ κ°λ°μλ₯Ό ν΄λ³΄μ§ μκ² λλ μ μμ νκ²
            λμκ³ , μ‘Έμ λΌλ¬Έμ΄ λλ λ€ μ  μ·¨λ―Έμ μ°κ΄λ μΉ νλ‘ νΈμλ κ°λ°μλ₯Ό
            μ§μνκ² λμμ΅λλ€.
          </Anwser>
        </QWrap>
        <QWrap
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
          <Q>2. μ΄λ€ μ·¨λ―Έλ₯Ό κ°μ§κ±°μ£ ?</Q>
          <Anwser>
            μ κ° μ’ νΉμ΄ν μ·¨λ―Έλ₯Ό κ°μ‘λλ° μ λ κ²μμ μ λ§ μ’μνλ μ μ μλλ€.
            λ¬Όλ‘  λͺ¨λ°μΌκ²μ, μΉκ²μ, μ€νκ²μ λ±λ± μ₯λ₯΄ μκ°λ¦¬κ³  μ’μνλ
            νΈμλλ€. μ΅κ·Ό λͺ λκ°μ μ λ§ μ λͺνμ§ μμ κ²μλ€μ΄λ μΆμνμ§ μΌλ§
            λμ§ μμ κ²μλ€μ λ€μ΄ λ°μ ν΄λ³΄λ κ²μ΄ μ·¨λ―Έμλλ°μ. νμ§λ§
            κ²μμ΄λΌκ³  ν΄μ λͺ¨λ  κ²μμ λ€μ΄ λ°μμ ν΄λ³Έ κ²μ΄ μλλΌ μ λ§μ
            κΈ°μ€μ΄ μμ΅λλ€. κ·Έ κ²μμ ννμ΄μ§λ₯Ό λ€μ΄κ°λ³΄κ³  λ€μ΄μ κ²°μ νμ£ . κ·Έ
            κ²μμ ννμ΄μ§λ₯Ό λ€μ΄κ°λ©΄μ νμ΄μ§λ₯Ό λλ¬λ³΄κ³  μ΄λ²€νΈλ λ±λ± μ¬λ¬
            μ€ν λ¦¬, κ²μ μΊλ¦­ν° λ±μ λ³΄λ μ·¨λ―Έκ° μμμ΅λλ€. κ·Έ μ·¨λ―Έ λλΆμ
            μΉμ΄λΌλ λΆμΌμ λ°μ λ€μ΄κ² λκ²μλλ€.
          </Anwser>
        </QWrap>
        <QWrap
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 6 }}
        >
          <Q>3. κ·Έλ λ€λ©΄ μΉ κ°λ°μκ° λκΈ° μν΄ λΈλ ₯ν μ μ?</Q>
          <Anwser>
            μ λ μ‘Έμμ νμλ§μ μΉ κ°λ°μκ° λκ² λ€λΌλ κ²°μ¬ κ°μ§κ³  νμ λ±λ‘μ
            νμ΅λλ€. μ²μ μ ν΄λ³΄λ λΆμΌμκ³ , νκ΅μμ λ°°μ΄ κ²λ³΄λ€ λμ± μ€λ¬΄μ μΈ
            λΆλΆμ λ°°μ°κ³  μΆμμ΅λλ€. κ·Έλ¦¬κ³  νλ‘ νΈμλ κ°λ°μκ° λ³΄μ¬μ§λ λΆλΆμ
            κ°λ°νλ κ²μ΄κΈ° λλ¬Έμ λμμΈμ μΈ κ°κ°λ ν€μ°κ³ μ μΌλ¨ μ²« νμμ
            μΉνΌλΈλ¦¬μ κ³Όμ μ λ€μμ΅λλ€. κΈ°λ³Έμ μΈ GTQ μ¬μ©λ²κ³Ό
            HTML,CSS,JavaScript,JQuery λ±μ λ°°μ κ³  μΆκ°μ μΌλ‘ vue.jsμ
            React.jsλ₯Ό μκ² λ°°μ μ΅λλ€. μ½ 6κ°μ κ³Όμ μ λ€μΌλ©΄μ GTQ 1κΈκ³Ό
            μΉλμμΈ κΈ°λ₯μ¬ μκ²©μ¦μ μ·¨λνμκ³ , νμ μ‘Έμ ν νλ‘ νΈμλ
            κ°λ°μλ‘μ¨ λ μμμΌ νλ νλ μμν¬λ APIλ±μ μ¬μ©ν΄ νλ‘μ νΈλ₯Ό
            μ μλ ν΄λ³΄μμ΅λλ€. κ·Έλ¦¬κ³  νλ‘μ νΈλ₯Ό νλ©΄μ μ μ²κΈ° μ€λΉλ₯Ό ν΄μ
            νμ¬ μ λ³΄μ²λ¦¬κΈ°μ¬ νκΈ° μνκΉμ§ ν©κ²©νμ΅λλ€.
          </Anwser>
        </QWrap>
        <QWrap
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 8 }}
        >
          <Q>4. μμΌλ‘μ κ³νμ?</Q>
          <Anwser>
            μμΌλ‘ μ μ κ³νμ μΌλ¨ μ μΌ λ¨Όμ  μ΄λ£° μ²«λ²μ§Έ λͺ©νλ κΈ°λ³ΈκΈ°κ° ννν
            μλμ΄ κ°λ°μκ° λλ κ²μ΄κ³ , κ·Έ ν ννμ μ΄λλ νν¬ λ¦¬λκ° λλ
            κ²μλλ€. κ·Έλ¦¬κ³  λ¨Ό λ―Έλμλ λμμΈλΆν° μλ²κΉμ§ μ λΆ λ€λ£° μ μλ
            μΉ νμ€ν κ°λ°μκ° λλ κ²μ΄κ³ , μΉμ κΈ°λ°μΌλ‘ ν κ²μλ κ°λ°νκ³  κ·Έ
            κ²μμ νμ΄μ§κΉμ§ μ μνλ κ²μ λͺ©νλ‘ μΌμμ΅λλ€.
          </Anwser>
        </QWrap>
      </InterViewWrap>
    </Wrapper>
  );
};
export default Interview;
