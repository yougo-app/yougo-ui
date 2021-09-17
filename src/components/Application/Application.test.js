import {render} from '@testing-library/react';

import Application from './Application';

test('renders without crashing', () => {
	render(<Application />);
});
