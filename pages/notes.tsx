import React from "react";
import Layout from "@components/layout/Layout";
import MainContainer from "@components/layout/MainContainer";
import Heading from "@components/shared/Heading";
import Paragraph from "@components/shared/Paragraph";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { SubWithMargin } from "@components/shared/Subheading";
import TextLink, { LinkContainer } from "@components/shared/TextLink";
import { footerLinks } from "@public/config";
const EmptyEntries = () => {
	return (
		<>
			<Heading variant={6}>Nothing here yet</Heading>
			<Paragraph>But I promise there will be something soon!</Paragraph>
		</>
	);
};
function Notes() {
	const theme = useContext(ThemeContext);
	const entries: any = [];
	return (
		<Layout>
			<MainContainer>
				<Heading variant={1} noMargin>
					Notes
				</Heading>
				<SubWithMargin role="doc-subtitle">
					Things I&rsquo;ve read, thought or&nbsp;seen recently
				</SubWithMargin>
				{entries.length ? (
					entries.map((entry: any) => <div>Some entry</div>)
				) : (
					<EmptyEntries />
				)}
				<LinkContainer maxWidth={theme.projectCardMaxWidth}>
					<TextLink
						text={footerLinks.notes.text}
						href={footerLinks.notes.href}
					/>
				</LinkContainer>
			</MainContainer>
		</Layout>
	);
}

export default Notes;
