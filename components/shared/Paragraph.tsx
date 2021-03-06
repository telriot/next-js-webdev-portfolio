import { HTMLAttributes } from "react";
import styled from "styled-components";
interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
	color?: string;
	noMargin?: boolean;
	small?: boolean;
	light?: boolean;
	large?: boolean;
}

const StyledParagraph = styled.p<IParagraph>`
	font-family: ${({ theme }) => theme.fontFamily.body};
	max-width: ${({ theme }) => theme.paragraphMaxWidth};
	color: ${({ theme, color }) =>
		color === "primary"
			? theme.palette.text.primary
			: color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	font-size: ${({ theme, small, large }) =>
		small
			? theme.typography.m
			: large
			? theme.typography.l
			: theme.typography.base};
	line-height: ${({ theme, small, large }) =>
		small
			? theme.lineHeight.m
			: large
			? theme.lineHeight.l
			: theme.lineHeight.base};
	font-weight: ${({ light }) => (light ? 300 : 400)};
	margin-bottom: ${({ theme, noMargin, small, large }) =>
		noMargin
			? 0
			: small
			? theme.margin("m").bottom
			: large
			? theme.margin("l").bottom
			: theme.margin("base").bottom};

	& + & {
		text-indent: 1em;
	}

	${({ theme }) => theme.breakpoints.down("sm")} {
		font-size: ${({ theme, small, large }) =>
			small ? theme.typography.s : theme.typography.base};
		line-height: ${({ theme, small, large }) =>
			small ? theme.lineHeight.s : theme.lineHeight.base};
		margin-bottom: ${({ theme, noMargin, small, large }) =>
			noMargin
				? 0
				: small
				? theme.margin("s").bottom
				: theme.margin("base").bottom};
	}
`;

export default StyledParagraph;
