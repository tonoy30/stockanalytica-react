import { ColorModeProvider, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import { Navigator } from './navigator/Navigator';
import { getStore } from './store';
import { newTheme } from './themes/breakpoints';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={getStore()}>
			<ThemeProvider theme={newTheme}>
				<ColorModeProvider>
					<Navigator />
				</ColorModeProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
