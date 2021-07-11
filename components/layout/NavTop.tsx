import styled from "styled-components";
import Hamburger from "@components/shared/Hamburger";
import { useLayoutDispatch, useLayoutState } from "contexts/LayoutContext";
import Link from "next/link";

const Container = styled.header`
	padding: 0 3vw;
	${({ theme }) => theme.breakpoints.up("md")} {
		display: none;
	}
`;
const Brand = styled.div`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.xl};
	line-height: ${({ theme }) => theme.lineHeight.xl};
	color: ${({ theme, color }) =>
		color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	text-align: left;
	font-weight: 700;
	cursor: pointer;
	${({ theme }) => theme.breakpoints.down("xs")} {
		font-size: ${({ theme }) => theme.typography.l};
		line-height: ${({ theme }) => theme.lineHeight.l};
	}
`;
function NavTop() {
	const dispatch = useLayoutDispatch();
	const { isMenuVisible } = useLayoutState();
	const handleClick = () => {
		dispatch({ type: "toggleMenu" });
	};
	return (
		<>
			<Container>
				<Link href="/">
					<Brand>beniamino-tartarini.com</Brand>
				</Link>
			</Container>
			<Hamburger isVisible={!isMenuVisible} onClick={handleClick} />
		</>
	);
}

export default NavTop;
