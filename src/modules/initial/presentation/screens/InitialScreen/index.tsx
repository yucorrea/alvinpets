import {useNavigation} from '@react-navigation/native';
import React from 'react';

import initialBG from '~/assets/images/initial-bg.png';
import splash from '~/assets/images/splash.png';
import logo from '~/assets/images/logo.png';

import {
  Button,
  ButtonText,
  Background,
  Screen,
  Section,
  Logo,
  SubTitle,
  Title,
} from './styles';

export function InitialScreen() {
  const navigator = useNavigation();
  const renderContent = () => {
    return <Background source={splash} resizeMode="cover" />;
  };

  const handleNavigateToDashboard = () => {
    navigator.navigate('Dashboard');
  };

  const renderFooter = () => {
    return (
      <>
        <Logo source={logo} />
        <Section source={initialBG}>
          <Title>Conheça o seu novo melhor amigo</Title>
          <SubTitle>
            Escolha o seu companheiro, adote-o e ganhe muito amor e lambidas
          </SubTitle>

          <Button onPress={handleNavigateToDashboard}>
            <ButtonText>Vamos lá!</ButtonText>
          </Button>
        </Section>
      </>
    );
  };

  return (
    <Screen>
      {renderContent()}
      {renderFooter()}
    </Screen>
  );
}
