import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {ButtonSearch, Container, TextInput} from './styles';

export function SearchInput() {
  return (
    <Container>
      <Icon name="search" color="#9b99aa" size={24} />
      <TextInput
        placeholder="Pesquise por características, sexo..."
        placeholderTextColor="#9b99aa"
      />
      <ButtonSearch>
        <FontAwesome name="sliders" color="#FFF" size={24} />
      </ButtonSearch>
    </Container>
  );
}
