import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import IconWrapper from "@components/shared/IconWrapper";
import IconButton from "@components/shared/IconButton";
import { contactData } from "@public/config";
import { Github, Codewars, Gmail } from "@styled-icons/simple-icons";
import { StyledIconBase } from "@styled-icons/styled-icon";
interface IIconStyleWrapper extends HTMLAttributes<HTMLDivElement> {
	invert?: boolean;
}

export const IconStyleWrapper = styled.div<IIconStyleWrapper>`
	${StyledIconBase} {
		height: 2.75em;
		width: 2.75em;
		transition: color 0.3s;
		cursor: pointer;
		color: ${({ invert, theme }) =>
			invert ? theme.palette.text.secondary : theme.palette.text.primary};
		&:hover {
			color: ${({ invert, theme }) =>
				invert ? theme.palette.secondary : "#111"};
		}
		${({ theme }) => theme.breakpoints.down("md")} {
			height: 2.5em;
			width: 2.5em;
		}
	}
`;
const Container = styled.div`
	max-width: 12em;
	${({ theme }) => theme.breakpoints.down("md")} {
		max-width: 10em;
	}
`;
const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	padding: 0.375rem 0;
`;

const links = [
	{
		icon: <Github />,
		label: "Github",
		href: "https://www.facebook.com/serenaalessandraaltavilla/",
	},

	{
		icon: <Codewars />,
		label: "Codewars",
		href: "https://www.linkedin.com",
	},

	{
		icon: <Gmail />,
		label: "Gmail",
		href: `mailto ${contactData.email}`,
	},
];

function SocialNav({ invert }: { invert?: boolean }) {
	return (
		<IconWrapper invert={invert}>
			<Container>
				<StyledNav>
					{links.map(({ href, label, icon }) => (
						<IconButton href={href} label={label} icon={icon} />
					))}
				</StyledNav>
			</Container>
		</IconWrapper>
	);
}

export default SocialNav;
