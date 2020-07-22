import React from 'react';
import { View, Image, ViewProps } from 'react-native';

import { Text } from '@components';

import { Post } from '@interfaces';
import styles from './styles';

type Props = Post.PostItem & ViewProps & {};

export const PostCard: React.FC<Props> = ({ id, title, content, image }) => {
  return (
    <View style={styles.container} testID="post-card">
      {image && (
        <Image
          testID="post-card-image"
          style={styles.image}
          source={{ uri: image }}
        />
      )}
      <Text style={styles.title}>{`#${id} ${title}`}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};
