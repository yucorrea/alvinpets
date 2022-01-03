import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {CardPet} from '~/modules/dashboard/components/CardPet';
import {petsSelector} from '~/modules/dashboard/presentation/selectors/pets.selector';

import {Container, SubTitle} from './styles';

export function ListRecommends() {
  const pets = useSelector(petsSelector);

  const renderCardItem = ({item}: any) => {
    return (
      <CardPet
        photo={item.photo}
        title={item.name}
        lifeTime={`${item.life_time_in_months} meses`}
        castrated={item.castrated}
        gender={item.gender}
        fullScreen={false}
      />
    );
  };

  return (
    <Container>
      <SubTitle>Recomendados</SubTitle>
      <FlatList
        data={pets?.recommends}
        horizontal
        keyExtractor={({id}) => id?.toString()}
        renderItem={renderCardItem}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
