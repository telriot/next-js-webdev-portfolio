import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface IHamburgerProps {
	onClick: () => any;
	isVisible: boolean;
}
interface IOverlayProps extends HTMLAttributes<HTMLDivElement> {
	isVisible: boolean;
}

const Overlay = styled.div<IOverlayProps>`
	position: fixed;
	display: grid;
	place-items: center;
	background: ${({ theme }) => theme.palette.hover};
	top: calc(3vw + 6px);
	right: calc(3vw + 8px);
	height: 36px;
	width: 38px;
	border-radius: 4px;
	z-index: 2000;
	transition: opacity 0.5s;
	opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
	${(props) => props.theme.breakpoints.up("md")} {
		display: none;
	}
	${(props) => props.theme.breakpoints.down("xs")} {
		top: calc(3vw + 4px);
		height: 32px;
		width: 34px;
	}
`;
const HamburgerButton = styled.div`
	display: grid;
	place-items: center;
	height: 27px;
	width: 25px;
	cursor: pointer;

	& > span {
		width: 25px;
		height: 3px;
		background: ${({ theme }) => theme.palette.text.primary};
		display: block;
	}
	${(props) => props.theme.breakpoints.down("xs")} {
		height: 24px;
	}
`;

const Line = styled.span`
	width: 21px;
	border-radius: 4px;
`;

function Hamburger({ onClick, isVisible = true }: IHamburgerProps) {
	return (
		<Overlay isVisible={isVisible}>
			<HamburgerButton onClick={onClick}>
				<Line />
				<Line />
				<Line />
			</HamburgerButton>
		</Overlay>
	);
}

export default Hamburger;
