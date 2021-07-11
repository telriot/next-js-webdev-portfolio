import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) =>
						sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta
						name='description'
						content='Beniamino Tartarini, freelance web developer from Italy working on Typescript and the MERN stack. '
					/>
					<link href='/fonts/styles.css' rel='stylesheet' />
				</Head>{' '}
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
