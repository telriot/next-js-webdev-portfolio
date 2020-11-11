import React from "react";
import styled from "styled-components";
import Link from "next/link";
import theme from "@styles/theme";

interface IIconButton {
	href: string;
	icon: React.ReactFragment;
	label: string;
}
const HiddenSpan = styled.span`
	clip: rect(1px, 1px, 1px, 1px);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;
const StyledA = styled.a`
	&:focus {
		outline: none;
		& > * {
			color: ${({ theme }) => theme.palette.secondary};
		}
	}
`;

function SocialNav({ href, icon, label }: IIconButton) {
	return (
		<>
			<Link href={href} key={href} passHref>
				<StyledA tabIndex={0} target="_blank" rel="noreferrer">
					{icon}
					<HiddenSpan>{label}</HiddenSpan>
				</StyledA>
			</Link>
		</>
	);
}

export default SocialNav;
