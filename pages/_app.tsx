import React from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import fontTheme from '@styles/font';
import theme from '@styles/theme';
import 'sal.js/dist/sal.css';
import sal from 'sal.js';
import { LayoutProvider } from 'contexts/LayoutContext';

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;

}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-size: 16px;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color:#fff; 
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
	React.useEffect(() => {
		sal(), [];
	});
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<style jsx global>
				{fontTheme}
			</style>
			<GlobalStyle />
			<LayoutProvider>
				<ThemeProvider theme={theme}>
					{' '}
					<Component {...pageProps} />{' '}
				</ThemeProvider>
			</LayoutProvider>
		</>
	);
}

export default MyApp;
