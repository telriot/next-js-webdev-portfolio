import styled from "styled-components";
import { siteInfo } from "@public/config";
import { HTMLAttributes } from "react";
interface ICopyright {
	color?: "primary" | "secondary" | undefined;
}
interface IStyledDiv extends HTMLAttributes<HTMLDivElement> {
	color?: "primary" | "secondary" | undefined;
}
const StyledDiv = styled.div<IStyledDiv>`
	font-family: ${({ theme }) => theme.fontFamily.body};
	font-size: ${({ theme }) => theme.typography.m};
	color: ${({ theme, color }) =>
		color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	cursor: default;
	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.s};
	}
`;

export default function Copyright({ color = "primary" }: ICopyright) {
	const date = new Date();
	return (
		<StyledDiv color={color}>
			&copy; {date.getFullYear()} - {siteInfo.name}
		</StyledDiv>
	);
}
