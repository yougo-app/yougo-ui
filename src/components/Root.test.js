import {render} from '@testing-library/react';
import React from 'react';

import Root from './Root';

test('renders without crashing', () => {
	render(<Root />);
});
