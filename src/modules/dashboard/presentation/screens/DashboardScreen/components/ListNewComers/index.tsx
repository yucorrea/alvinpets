import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {CardPet} from '~/modules/dashboard/components/CardPet';
import {petsSelector} from '~/modules/dashboard/presentation/selectors/pets.selector';

import {Container, SubTitle} from './styles';

export function ListNewComers() {
  const pets = useSelector(petsSelector);

  const renderCardItem = ({item}: any) => {
    return (
      <CardPet
        photo={item.photo}
        title={item.name}
        lifeTime={`${item.life_time_in_months} meses`}
        castrated={item.castrated}
        gender={item.gender}
        fullScreen={true}
      />
    );
  };

  return (
    <Container>
      <SubTitle>Amiguinhos recém chegados</SubTitle>
      <FlatList
        data={pets?.new_comers}
        keyExtractor={({id}) => id?.toString()}
        renderItem={renderCardItem}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
