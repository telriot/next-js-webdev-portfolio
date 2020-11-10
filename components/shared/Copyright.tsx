import styled from "styled-components";
import { siteInfo } from "@public/config";
const StyledSpan = styled.span`
	font-family: ${({ theme }) => theme.fontFamily.body};
	font-size: ${({ theme }) => theme.typography.m};
	color: ${({ theme }) => theme.palette.text.primary};
	cursor: default;
	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.s};
	}
`;

export default function Copyright() {
	const date = new Date();
	return (
		<StyledSpan>
			&copy; {date.getFullYear()} - {siteInfo.name}
		</StyledSpan>
	);
}
