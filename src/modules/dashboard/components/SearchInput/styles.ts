import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #f6f6f6;
  padding: 14px 8px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 0px 8px;
  color: #9b99aa;
  font-size: 14px;
  font-family: 'Roboto';
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: 38px;
  height: 40px;
  border-radius: 8px;
  background-color: #cf259f;
  justify-content: center;
  align-items: center;
`;
