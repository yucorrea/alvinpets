import React, {useMemo, useEffect} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import petsSlice from '~/modules/dashboard/presentation/reducers/pets.reducer';
import {petsLoadingSelector} from '~/modules/dashboard/presentation/selectors/pets.selector';

import {pets as filtersPets} from '~/modules/dashboard/presentation/mock/pets';

import {SearchInput} from '~/modules/dashboard/components/SearchInput';
import {ListNewComers} from './components/ListNewComers';
import {ListRecommends} from './components/ListRecommends';

import {Screen, Header, Title, ListItem} from './styles';

export interface Item {
  key: string;
  // eslint-disable-next-line no-undef
  render: () => JSX.Element;
}

export function DashboardScreen() {
  const dispatch = useDispatch();

  const loading = useSelector(petsLoadingSelector);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    dispatch(petsSlice.actions.getPetsRequest());
  }

  const {data} = useMemo(() => {
    const items: Item[] = [
      {
        key: 'RECOMMENDS',
        render: () => <ListRecommends />,
      },
      {
        key: 'NEW_COMERS',
        render: () => <ListNewComers />,
      },
    ];

    return {data: items};
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator style={{flex: 1}} color={'#cf259f'} size="large" />
      );
    }

    return (
      <FlatList
        style={{paddingHorizontal: 20}}
        data={data}
        keyExtractor={({key}) => key}
        renderItem={({item}) => item.render()}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  const renderItem = ({item}: any) => {
    return <ListItem title={item.title} onPress={() => {}} />;
  };

  const renderPets = () => {
    return (
      <FlatList
        style={{marginTop: 27}}
        data={filtersPets}
        keyExtractor={({id}) => id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  const renderHeader = () => {
    return (
      <Header>
        <Title>Conheça o seu novo melhor amigo</Title>
        <SearchInput />
        {renderPets()}
      </Header>
    );
  };

  return (
    <Screen>
      {renderHeader()}
      {renderContent()}
    </Screen>
  );
}
