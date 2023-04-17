import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterContent>
          <FooterLinkContainer>
            <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
            <FooterLinkContent>
              <FooterLink href="https://help.netflix.com/ko/node/412">
                넷플릭스 소개
              </FooterLink>
              <FooterLink>고객 센터</FooterLink>
              <FooterLink>미디어 센터</FooterLink>
              <FooterLink>이용 약관</FooterLink>
            </FooterLinkContent>
          </FooterLinkContainer>
          <FooterDescContainer>
            <FooterDescRights>NetFlix</FooterDescRights>
          </FooterDescContainer>
        </FooterContent>
      </FooterContainer>
    </div>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 100px;
  margin-bottom: 21px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.div`
  color: #fff;
  font-size: 14px;
`;

export default Footer;
