import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../const';

export const Book = styled.li`
  background: #dedede;
  margin-left: 20px;
  margin-bottom: 20px;
  transition: opacity 1s;
  @media ${device.sm} { 
    width: 100%;
  }
  @media ${device.md} { 
    width: calc(50% - 20px);
  }
  @media ${device.lg} { 
    width: calc(25% - 20px);
  }
`;
  
export const BookContent = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  padding: 20px;
  
`;

export const Title = styled.h5`
  display: block;
  text-align: center;
  margin: 0 0 10px;
  font-size: 16px;
`;

export const Image = styled.img`
  display: block;
  margin: auto;
  margin-bottom: 10px;
`;

export const NoImage = styled.div`
  height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.article`
  line-height: 1.5;
  max-height: 200px;
  overflow: hidden;
`;

export const Subtitle = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
  text-align: center;
`;