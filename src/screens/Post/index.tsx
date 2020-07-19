import * as React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { PostActions } from '@actions';
import { Text, PostCard } from '@components';
import { isLoading } from '@utilities/apiState';
import { IStore } from '@interfaces';

export const Post: React.FC = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state: IStore) => state.post.list);

  React.useEffect(() => {
    (async () => {
      dispatch(await PostActions.List());
    })();
  }, [dispatch]);

  if (isLoading(postList.status)) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={postList.data}
      renderItem={({ item }) => (
        <PostCard
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          image={item.image}
        />
      )}
    />
  );
};
