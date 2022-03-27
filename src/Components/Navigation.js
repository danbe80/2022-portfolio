import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Header = styled.header`
  width: 100%;
  padding-top: 25px;
  position: relative;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Navi = styled.nav`
  color: black;
`;
const Items = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const RNaviIcon = styled.div`
  display: none;
  position: relative;
  @media (max-width: 768px) {
    display: inline;
  }
  svg {
    padding: 10px;
    &:hover {
      background-color: rgba(108, 92, 231, 0.5);
      color: #f1f1f1;
    }
  }
`;
const RNavi = styled.ul`
  display: none;
  width: 100%;
  position: absolute;
  top: 0;
  margin-top: 36px;
  z-index: 2;
  text-align: center;
  line-height: 2;
  background-color: rgba(255, 255, 255, 0.9);
  @media (max-width: 768px) {
    display: block;
  }
`;
const RItem = styled.li`
  a {
    display: block;
    color: #111;
    text-decoration: none;
    padding: 5px 0;
    &:hover {
      background-color: rgba(108, 92, 231, 0.5);
      color: #f1f1f1;
      font-weight: bold;
    }
  }
`;
const Item = styled(motion.li)`
  width: 23%;
  cursor: pointer;
  a {
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    padding: 15px 0;
    text-decoration: none;
    color: #111111;
    &.active {
      border-bottom: 1px solid rgba(108, 92, 231, 0.5);
      border-top: 1px solid rgba(108, 92, 231, 0.5);
      background-color: rgba(108, 92, 231, 0.5);
      color: white;
      font-weight: bold;
    }
    &:hover {
      border-bottom: 1px solid rgba(108, 92, 231, 0.5);
      border-top: 1px solid rgba(108, 92, 231, 0.5);
      background-color: rgba(108, 92, 231, 0.5);
      color: white;
      font-weight: bold;
      transition: all 0.5s;
    }
  }
`;

const Navigation = () => {
  const [response, setResponse] = useState(false);
  const onClick = () => {
    setResponse((prev) => !prev);
  };
  return (
    <Header>
      <Navi>
        <Items>
          <Item>
            <NavLink to="/">HYERIN</NavLink>
          </Item>
          <Item>
            <NavLink to="/project">PROJECT</NavLink>
          </Item>
          <Item>
            <NavLink to="/interview">INTERVIEW</NavLink>
          </Item>
          <Item>
            <NavLink to="/contact">CONTACT</NavLink>
          </Item>
        </Items>
        <RNaviIcon onClick={onClick}>
          <FaBars />
        </RNaviIcon>
        {response ? (
          <RNavi>
            <RItem onClick={onClick}>
              <NavLink to="/">HYERIN</NavLink>
            </RItem>
            <RItem onClick={onClick}>
              <NavLink to="/project">PROJECT</NavLink>
            </RItem>
            <RItem onClick={onClick}>
              <NavLink to="/interview">INTERVIEW</NavLink>
            </RItem>
            <RItem onClick={onClick}>
              <NavLink to="/contact">CONTACT</NavLink>
            </RItem>
          </RNavi>
        ) : null}
      </Navi>
    </Header>
  );
};

export default Navigation;
