import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  CardContainer,
  ImageContainer,
  TitleContainer,
  Title,
  InformationContainer,
  Information,
  InfoTitle,
  Image,
  LikedContainer,
} from './styles';

interface CardPetProps extends TouchableOpacityProps {
  photo: string;
  title: string;
  gender: 'male' | 'female';
  lifeTime: string;
  liked?: boolean;
  castrated: boolean;
  fullScreen: boolean;
}

export function CardPet({
  photo,
  title,
  gender,
  liked = false,
  lifeTime,
  castrated,
  fullScreen = false,
  ...rest
}: CardPetProps) {
  return (
    <CardContainer {...rest} fullScreen={fullScreen}>
      <ImageContainer>
        <Image source={{uri: photo}} />

        <LikedContainer>
          <Icon name="heart" size={24} color="#fff" />
        </LikedContainer>
      </ImageContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <FontAwesome
          name={gender === 'male' ? 'mars' : 'venus'}
          color={gender === 'male' ? '#0086FF' : '#CF259F'}
          size={24}
        />
      </TitleContainer>

      <InformationContainer>
        <Information color="rgba(207,37,159,.20)">
          <Icon name="scissors" color="#6D697C" size={24} />
          <InfoTitle>
            {castrated
              ? `${gender === 'male' ? 'Castrado' : 'Castrada'}`
              : `${gender === 'male' ? 'Não castrado' : 'Não castrada'}`}
          </InfoTitle>
        </Information>

        <Information color="rgba(249,113,37,.40)">
          <Icon name="clock" color="#6D697C" size={24} />
          <InfoTitle>{lifeTime}</InfoTitle>
        </Information>
      </InformationContainer>
    </CardContainer>
  );
}
