import styled from 'styled-components/native';
import {ChipSelect} from '../../../components/ChipSelect';

export const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: #fcfbfc;
`;

export const Header = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  width: 290px;
  font-size: 34px;
  font-family: 'Lato-Bold';
  line-height: 36px;
  margin-bottom: 24px;
  margin-top: 64px;
  color: #34323e;
`;

export const SubTitle = styled.Text`
  width: 310px;
  font-size: 18px;
  font-family: 'Lato-Bold';
  color: #34323e;
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const ListItem = styled(ChipSelect)`
  margin-right: 16px;
`;
