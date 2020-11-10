import { HTMLAttributes } from "react";
import styled from "styled-components";

interface ISubheading extends HTMLAttributes<HTMLSpanElement> {
	color?: string;
	noMargins?: boolean;
}

const Subheading = styled.h6<ISubheading>`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.xl};
	line-height: ${({ theme }) => theme.lineHeight.xl};
	color: ${({ theme, color }) =>
		color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	text-align: left;
	font-weight: 400;
	margin-bottom: ${({ theme, noMargins }) =>
		noMargins ? 0 : theme.margin("xl").bottom};
	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.l};
		line-height: ${({ theme }) => theme.lineHeight.l};
		margin-bottom: ${({ theme, noMargins }) =>
			noMargins ? 0 : theme.margin("l").bottom};
	}
`;
export const SubWithMargin = styled(Subheading)`
	margin-bottom: ${({ theme }) => "calc(" + theme.margin("xl").bottom + "*2)"};
	${({ theme }) => theme.breakpoints.down("md")} {
		margin-bottom: ${({ theme }) => "calc(" + theme.margin("l").bottom + "*2)"};
	}
`;
export default Subheading;
