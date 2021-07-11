import styled from "styled-components";
import Link from "next/link";
import { HTMLAttributes } from "react";
interface INavbar {
	color?: "primary" | "secondary" | undefined;
	mobile?: boolean;
	handleClose?: () => void;
}
interface INavItem extends HTMLAttributes<HTMLDivElement> {
	color?: "primary" | "secondary" | undefined;
}
const Container = styled.nav`
	display: flex;
	flex-direction: column;
`;

const NavItem = styled.a<INavItem>`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d6};
	line-height: ${({ theme }) => theme.lineHeight.d6};
	color: ${({ theme, color }) =>
		color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	font-weight: 700;
	transition: color 0.3s;
	outline: none;
	cursor: pointer;
	&:hover,
	&:focus {
		color: ${({ theme }) => theme.palette.secondary};
	}
	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.d6M};
		line-height: ${({ theme }) => theme.lineHeight.d6M};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		font-size: ${({ theme }) => theme.typography.d6S};
		line-height: ${({ theme }) => theme.lineHeight.d6S};
	}
`;
const NavItemLg = styled(NavItem)`
	font-size: ${({ theme }) => theme.typography.d3};
	line-height: ${({ theme }) => theme.lineHeight.d3};
	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.d3M};
		line-height: ${({ theme }) => theme.lineHeight.d3M};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		font-size: ${({ theme }) => theme.typography.d3S};
		line-height: ${({ theme }) => theme.lineHeight.d3S};
	}
`;
const links = [
	{ link: "/", name: "home" },
	{ link: "/projects", name: "projects" },
	{ link: "/tech", name: "tech stack" },
	{ link: "/notes", name: "notes" },
];

function Navbar({ color = "primary", mobile = false, handleClose }: INavbar) {
	return (
		<Container>
			{links.map(({ link, name }) => (
				<Link key={`nav-${name}`} href={link} passHref>
					{mobile ? (
						<NavItemLg tabIndex={0} onClick={handleClose} color={color}>
							{name}
						</NavItemLg>
					) : (
						<NavItem tabIndex={0} color={color}>
							{name}
						</NavItem>
					)}
				</Link>
			))}
		</Container>
	);
}

export default Navbar;
