import styled from "styled-components";
import Sidebar from "@components/layout/Sidebar";
import Footer from "@components/layout/Footer";
import NavTop from "@components/layout/NavTop";
import MobileMenu from "@components/layout/MobileMenu";
import { useLayoutState } from "contexts/LayoutContext";
import { HTMLAttributes } from "react";
import Head from 'next/head'
interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {}

const Grid = styled.div`
	margin: 0 auto;
	padding: ${({ theme }) => theme.container.padding};
	display: grid;
	min-height: 100vh;
	grid-template-columns: [sidebar-start].25fr[sidebard-end main-start].6fr[main-end right-gutter-end].15fr[right-gutter-end];
	${({ theme }) => theme.breakpoints.down("md")} {
		grid-template-columns: [main-start]1fr[main-end];
	}
`;
function Layout({ children }: ILayoutProps) {
	const { isMenuVisible } = useLayoutState();
	const { isMenuRendered } = useLayoutState();

	return (
		<>
			<Head>
				<title>Beniamino Tartarini</title>
			</Head>			<Grid>
				<NavTop />
				<Sidebar />
				{children}
				<Footer />
			</Grid>
			<MobileMenu isVisible={isMenuVisible} isRendered={isMenuRendered} />
		</>
	);
}

export default Layout;
