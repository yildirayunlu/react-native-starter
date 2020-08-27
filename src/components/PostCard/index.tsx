import React from 'react';
import { Image } from 'react-native';

import { Text, Box } from '@components';
import { Post } from '@interfaces';

import styles from './styles';

type Props = Post.PostItem & {};

export const PostCard: React.FC<Props> = ({ id, title, content, image }) => {
  return (
    <Box style={styles.container}>
      {image && <Image style={styles.image} source={{ uri: image }} />}
      <Text style={styles.title}>{`#${id} ${title}`}</Text>
      <Text>{content}</Text>
    </Box>
  );
};
