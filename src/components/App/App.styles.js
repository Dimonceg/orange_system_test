import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100%;
  color: black;
`;

export const Header = styled.header`
  padding: 20px;
  background-color: #09f;
  text-align: right;
`;

export const HeaderButton = styled(Link)`
  color: black;
  text-decoration: none;
  margin-left: 20px;
`;

export const SearcBar = styled.div`
  text-align: center;
  padding: 20px;
  background: #3cf;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  border-radius: 4px;
  padding: 10px;
`;