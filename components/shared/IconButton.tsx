import React from "react";
import styled from "styled-components";
import Link from "next/link";

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

function SocialNav({ href, icon, label }: IIconButton) {
	return (
		<>
			<Link href={href} key={href}>
				<a target="_blank" rel="noreferrer">
					{icon}
					<HiddenSpan>{label}</HiddenSpan>
				</a>
			</Link>
		</>
	);
}

export default SocialNav;
