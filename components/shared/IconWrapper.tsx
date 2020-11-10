import { HTMLAttributes } from "react";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
interface IIconWrapper extends HTMLAttributes<HTMLDivElement> {
	invert?: boolean;
	size?: string;
}

const IconWrapper = styled.div<IIconWrapper>`
	${StyledIconBase} {
		height: ${({ size }) => (size ? size : "2.75em")};
		width: ${({ size }) => (size ? size : "2.75em")};
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

export default IconWrapper;
