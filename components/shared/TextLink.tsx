import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
interface ILinkContainer {
	maxWidth?: string;
}
const StyledLink = styled.span`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.xl};
	color: ${({ theme }) => theme.palette.text.primary};

	line-height: ${({ theme }) => theme.lineHeight.xl};
	font-weight: 500;
	transition: color 0.3s;
	cursor: pointer;

	&:hover,
	&:focus {
		outline: none;
		color: ${({ theme }) => theme.palette.secondary};
	}
`;
export const LinkContainer = styled.div<ILinkContainer>`
	flex: 1;
	max-width: ${({ maxWidth, theme }) =>
		maxWidth ? maxWidth : theme.paragraphMaxWidth};
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	transition: color 0.3s;

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.palette.secondary};
	}
	${({ theme }) => theme.breakpoints.down("md")} {
		display: none;
	}
`;

function TextLink({ to, text }: { to: string; text: string }) {
	const router = useRouter();
	const handleClick = () => router.push(to);
	return (
		<StyledLink onClick={handleClick} tabIndex={0}>
			{text}
		</StyledLink>
	);
}

export default TextLink;
