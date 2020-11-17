import Layout from "@components/layout/Layout";
import MainContainer from "@components/layout/MainContainer";
import Heading from "@components/shared/Heading";
import ProjectCard from "@components/shared/ProjectCard";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { SubWithMargin } from "@components/shared/Subheading";
import TextLink, { LinkContainer } from "@components/shared/TextLink";
import { projects, footerLinks } from "@public/config";
function Projects() {
	const theme = useContext(ThemeContext);
	return (
		<Layout>
			<MainContainer>
				<Heading variant={1} noMargin>
					Projects
				</Heading>
				<SubWithMargin role="doc-subtitle">
					Some of my recent personal projects (more on&nbsp;Github!)
				</SubWithMargin>
				{projects.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
				<LinkContainer maxWidth={theme.projectCardMaxWidth}>
					<TextLink
						text={footerLinks.projects.text}
						to={footerLinks.projects.href}
					/>
				</LinkContainer>
			</MainContainer>
		</Layout>
	);
}

export default Projects;
