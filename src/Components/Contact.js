import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import profile from "../assets/img/contactphoto.jpg";

const Wrapper = styled.div``;
const Self = styled.span``;
const ContactWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
  font-weight: bold;
`;
const Photo = styled.li`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 3px solid rgb(108, 92, 231);
  margin: 15px 0;
  background: url(${profile});
  background-repeat: no-repeat;
  background-size: 110%;
  background-position: center;
`;
const PhoneNum = styled.li`
  margin: 5px 0;
`;
const Email = styled.li`
  margin: 5px 0;
`;

const Contact = () => {
  return (
    <Wrapper>
      <ContactWrap>
        <Self>저에게 관심이 있으시다면 아래 연락처로 연락주세요!</Self>
        <Photo />
        <PhoneNum>010-4478-1603</PhoneNum>
        <Email>danbe8080@gmail.com</Email>
      </ContactWrap>
    </Wrapper>
  );
};
export default Contact;
