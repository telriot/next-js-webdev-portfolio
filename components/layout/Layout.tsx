import styled from "styled-components";
import Sidebar from "@components/layout/Sidebar";
import Footer from "@components/layout/Footer";
import { HTMLAttributes } from "react";

interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {}
const Grid = styled.div`
	margin: 0 auto;
	padding: ${({ theme }) => theme.container.padding};
	display: grid;
	min-height: 100vh;
	grid-template-columns: [sidebar-start].25fr[sidebard-end main-start].6fr[main-end right-gutter-end].15fr[right-gutter-end];
`;
function Layout({ children }: ILayoutProps) {
	return (
		<Grid>
			<Sidebar />
			{children}
			<Footer />
		</Grid>
	);
}

export default Layout;
