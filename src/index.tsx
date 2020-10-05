import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Navigator } from '@navigator/Navigator';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { getStore } from './store';
import { newTheme } from './themes/breakpoints';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={getStore()}>
			<ThemeProvider theme={newTheme}>
				<CSSReset />
				<Navigator />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
