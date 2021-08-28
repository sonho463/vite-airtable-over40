import React from 'react';
import styled from 'styled-components';

const StyledMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 10px;
  text-align: center;
  width: 200px;
  height: 300px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  width: 180px;
`;

const StyledName = styled.a`
  color: #000;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const ImageContainer = styled.img`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

const StyledTitle = styled.p`
  font-size: 1rem;
  margin-top: 0.2em;
  margin-bottom: 0.1em;
`;

const StyledBio = styled.div`
  flex-grow: 1;
  margin: 0px;
  overflow: auto;
  color: #333;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.8em;
  text-align: left;
  padding: 10px;
  height: 50px;
  width: 100%;
`;

const StyledButton = styled.button`
  display: block;
  position: relative;
  height: 2em;
  line-height: 2em;
  font-size: 1em;
  border-radius: 5px;
  width: 5em;
  text-align: center;
  text-decoration: none;
  color: #1b1b1b;
  background: #fff;
  border: 1px solid #1b1b1b;
  &:hover {
    background: #1b1b1b;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
`;

const Member = ({ record }) => {
  return (
    <StyledMember>
      <ImageContainer
        src={record?.Photo && record.Photo[0].url}
      ></ImageContainer>
      <StyledInfo>
        <StyledName
          href={record?.['Homepage URL']}
          target='_blank'
          rel='noopener noreferrer'
        >
          {record.Name}
        </StyledName>
        <StyledTitle>{record.Title}</StyledTitle>
        <StyledBio>{record.Bio}</StyledBio>
      </StyledInfo>
      <StyledButton>編集</StyledButton>
    </StyledMember>
  );
};

export default Member;