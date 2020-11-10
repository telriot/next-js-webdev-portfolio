import React from "react";
import styled from "styled-components";
import Link from "next/link";
interface ILinkContainer {
	maxWidth?: string;
}
const StyledLink = styled.span`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.xl};
	line-height: ${({ theme }) => theme.lineHeight.xl};
	font-weight: 500;
	cursor: pointer;
`;
export const LinkContainer = styled.div<ILinkContainer>`
	flex: 1;
	max-width: ${({ maxWidth, theme }) =>
		maxWidth ? maxWidth : theme.paragraphMaxWidth};
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;

function TextLink({ href, text }: { href: string; text: string }) {
	return (
		<Link href={href}>
			<StyledLink>{text}</StyledLink>
		</Link>
	);
}

export default TextLink;
