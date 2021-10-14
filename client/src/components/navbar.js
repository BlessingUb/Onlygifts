import { Badge, Logo } from "@material-ui/core";
import { Search, MailOutline, Link } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

// const Logo = styled.div`
//   font-weight: bold;
//   font-size: 40px;
// `;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>onlyGifts</Left>
        <Center>
          <MenuItem>Register</MenuItem>
          <MenuItem>SIGN IN</MenuItem>

          {/* <Language>EN</Language> */}
        </Center>
        <Right>
          <SearchContainer>
            <Input></Input>
            <Search style={{ color: "gray", fontSize: 16 }}></Search>
          </SearchContainer>
          <Badge badgeContent={4} color="primary">
            <MailOutline />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
