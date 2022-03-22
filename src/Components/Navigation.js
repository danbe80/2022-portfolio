import React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
  padding-top: 25px;
`;
const Navi = styled.nav`
  color: black;
`;
const Items = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Item = styled.li`
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
      </Navi>
    </Header>
  );
};

export default Navigation;
