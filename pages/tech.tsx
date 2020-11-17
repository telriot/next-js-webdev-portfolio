import Layout from "@components/layout/Layout";
import MainContainer from "@components/layout/MainContainer";
import Heading from "@components/shared/Heading";
import Paragraph from "@components/shared/Paragraph";
import { SubWithMargin } from "@components/shared/Subheading";
import TextLink, { LinkContainer } from "@components/shared/TextLink";
import styled from "styled-components";
import { footerLinks } from "@public/config";

const TechList = styled.ul`
	margin-bottom: ${({ theme }) => "calc(" + theme.margin("d6").top + "*.25)"};
	list-style-type: disc;
	${({ theme }) => theme.breakpoints.down("xs")} {
		padding: 0 1em;
	}
`;
const TechItem = styled.li`
	font-family: ${({ theme }) => theme.fontFamily.body};
	max-width: ${({ theme }) => theme.paragraphMaxWidth};
	color: ${({ theme, color }) =>
		color === "primary"
			? theme.palette.text.primary
			: color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	font-size: ${({ theme }) => theme.typography.base};
	line-height: ${({ theme }) => theme.lineHeight.base};
	font-weight: 400;
`;
const allRounders = {
	title: "All-rounders",
	stack: ["Typescript", "Javascript", "Jest", "Git"],
};
const frontEnd = {
	title: "Front End",
	stack: [
		"React.Js",
		"Next.Js",
		"Redux Toolkit",
		"React Testing Library",
		"Styled Components",
		"Material UI",
		"Sass",
	],
};
const backEnd = {
	title: "Back End",
	stack: ["Node.Js", "Express", "Mongo DB", "Sanity", "Snipcart"],
};
const stack = [allRounders, frontEnd, backEnd];

function tech() {
	return (
		<Layout>
			<MainContainer>
				<Heading noMargin variant={1}>
					Tech Stack
				</Heading>
				<SubWithMargin role="doc-subtitle">
					The technology I usually work&nbsp;on
				</SubWithMargin>
				{stack.map((el) => (
					<div key={el.title}>
						<Heading variant={6}>{el.title}</Heading>
						<TechList>
							{el.stack.map((item) => (
								<TechItem key={item}>{item}</TechItem>
							))}
						</TechList>
					</div>
				))}

				<LinkContainer>
					<TextLink text={footerLinks.tech.text} to={footerLinks.tech.href} />
				</LinkContainer>
			</MainContainer>
		</Layout>
	);
}

export default tech;
