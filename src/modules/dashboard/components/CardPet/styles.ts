import styled, {css} from 'styled-components/native';

interface CardContainerProps {
  fullScreen: boolean;
}

interface InformationProps {
  color: string;
}

export const CardContainer = styled.TouchableOpacity<CardContainerProps>`
  ${({fullscreen}) =>
    fullscreen &&
    css`
      width: 100%;
    `};
  height: 248px;
  background-color: #fff;
  border-radius: 24px;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 16px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 132px;
  background-color: #c4c4c4;
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: 'Lato-Bold';
  color: #34323e;
  margin-right: 8px;
`;

export const InformationContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 16px 0px;
`;

export const Information = styled.View<InformationProps>`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  padding: 8px;
  border-radius: 16px;
  background-color: ${({color}) => (color ? color : '#eee')};
`;

export const InfoTitle = styled.Text`
  margin-left: 8px;
  color: #6d697c;
  font-size: 16px;
  font-family: 'Lato-Bold';
`;

export const LikedContainer = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;
