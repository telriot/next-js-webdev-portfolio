import React from "react";
import styled from "styled-components";
import Social from "@components/shared/Social";
import Copyright from "@components/shared/Copyright";
import TextLink from "@components/shared/TextLink";
import { useRouter } from "next/router";
import { footerLinks } from "@public/config";
const Wrapper = styled.div`
	background: ${({ theme }) => theme.palette.primary};
	height: max-content;
	padding: 0.5em 3vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1000;

	${({ theme }) => theme.breakpoints.up("md")} {
		display: none;
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		flex-direction: column-reverse;
		align-items: flex-start;
	}
`;
function Footer() {
	const { route } = useRouter();
	const linkFromRouter =
		route === "/tech"
			? "tech"
			: route === "/projects"
			? "projects"
			: route === "/notes"
			? "notes"
			: "index";
	return (
		<Wrapper>
			<div>
				<Social />
				<Copyright />
			</div>
			<TextLink
				to={`/${footerLinks[linkFromRouter].href}`}
				text={footerLinks[linkFromRouter].text}
			/>
		</Wrapper>
	);
}

export default Footer;
