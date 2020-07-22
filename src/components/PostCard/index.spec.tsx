import React from 'react';
import { render } from '@testing-library/react-native';

import { PostCard } from './index';

describe('Components', () => {
  describe('PostCard', () => {
    const mockProps = {
      id: 1,
      title: 'Test',
      content: 'Test Content',
    };

    describe('render without image', () => {
      const { getByText, queryByTestId } = render(<PostCard {...mockProps} />);

      it('render correctly', async () => {
        getByText('#1 Test');
        getByText('Test Content');

        expect(queryByTestId('post-card-image')).toBeNull();
      });
    });
  });
});
