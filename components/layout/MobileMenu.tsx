import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { useLayoutDispatch } from "contexts/LayoutContext";
import { Toggl } from "@styled-icons/simple-icons/Toggl";
import Copyright from "@components/shared/Copyright";
import Navbar from "@components/shared/Navbar";
import IconWrapper from "@components/shared/IconWrapper";

interface IMobileMenuProps {
	isVisible: boolean;
	isRendered: boolean;
}
interface IMenuProps extends HTMLAttributes<HTMLDivElement> {
	isVisible: boolean;
	isRendered: boolean;
}

const Overlay = styled.div<IMenuProps>`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.8);
	opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
	transform: ${({ isVisible }) =>
		isVisible ? "translateX(0px)" : "translateX(-1800em)"};
	transition: ${({ isVisible }) =>
		isVisible
			? "opacity 0.5s, transform 0s 0s"
			: "opacity 0.5s, transform 0s 0.5s"};
	z-index: 100000;
`;
const Menu = styled.div<IMenuProps>`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 90vw;
	background-color: ${({ theme }) => theme.palette.tertiary};
	padding: 3vw;
	transform: ${({ isVisible }) =>
		isVisible ? "translateX(0px)" : "translateX(-90vw)"};
	transition: transform 0.5s ease-in;
	z-index: 100001;
	display: flex;
	flex-direction: column;
	visibility: ${({ isRendered }) => (isRendered ? "visible" : "hidden")};
	${({ theme }) => theme.breakpoints.down("sm")} {
		padding: 1em 1.5em;
	}
`;
const BrandContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Nav = styled.ul`
	padding: 2em 0;
	flex: 1;
	margin-bottom: auto;
`;

function MobileMenu({ isVisible, isRendered }: IMobileMenuProps) {
	const dispatch = useLayoutDispatch();
	const handleClose = () => {
		dispatch({ type: "closeMenu" });
		setTimeout(() => dispatch({ type: "disableMenu" }), 500);
	};

	return (
		<>
			<Overlay
				isVisible={isVisible}
				isRendered={isRendered}
				onClick={handleClose}
			/>
			<Menu isVisible={isVisible} isRendered={isRendered}>
				<BrandContainer>
					<IconWrapper invert size={"3em"}>
						<Toggl onClick={handleClose} />
					</IconWrapper>
				</BrandContainer>

				<Nav>
					<Navbar color="secondary" mobile handleClose={handleClose} />
				</Nav>
				<Copyright color="secondary" />
			</Menu>
		</>
	);
}

export default MobileMenu;
