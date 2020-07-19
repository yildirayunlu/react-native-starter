import React from 'react';
import { View, Image } from 'react-native';

import { Text } from '@components';

import { Post } from '@interfaces';
import styles from './styles';

type Props = Post.PostItem & {};

export const PostCard: React.FC<Props> = ({ id, title, content, image }) => {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.image} source={{ uri: image }} />}
      <Text style={styles.title}>{`#${id} ${title}`}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};
