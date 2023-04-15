import styled from 'styled-components';
import { ReactComponent as FavIcon } from '../../assets/svg/favorite.svg';

export const Wrapper = styled.article`
  padding: 0 20px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Subtitle = styled.h5`
  font-size: 12px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  margin-bottom: 20px;
`;

export const Info = styled.p`
  margin: 0;
  max-width: 50%;
`;

export const FavoriteIcon = styled(FavIcon)`
  width: 25px;
  height: 25px;
`;

export const Favorite = styled.div`
  margin-left: 20px;
  cursor: pointer;
  ${FavoriteIcon} {
    color: ${props => props.isAdded ? '#fda322' : "gray"}
  }
`;

