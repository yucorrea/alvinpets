import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Screen = styled.SafeAreaView`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 600px;

  position: relative;
  top: ${Platform.OS === 'ios' ? -90 : -240}px;
  left: 0;
  right: 0;
`;

export const Section = styled.ImageBackground`
  align-items: center;

  position: absolute;
  width: 100%;
  bottom: 0;
  height: 370px;
  padding: 0px 40px;
`;

export const Logo = styled.Image`
  position: absolute;
  top: 64px;
  right: 40px;
`;

export const Title = styled.Text`
  width: 290px;
  font-size: 34px;
  font-family: 'Lato-Bold';
  line-height: 36px;
  margin-bottom: 24px;
  margin-top: 72px;
  color: #fff;
  text-align: center;
`;

export const SubTitle = styled.Text`
  width: 310px;
  font-size: 16px;
  font-family: 'Lato-Regular';
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 32px;
  background-color: #f97125;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-family: 'Lato-Bold';
  color: #fff;
`;
