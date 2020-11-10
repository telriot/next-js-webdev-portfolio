import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const NavItem = styled.span`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d6};
	line-height: ${({ theme }) => theme.lineHeight.d6};
	color: ${({ theme }) => theme.palette.text.primary};
	font-weight: 700;
	transition: color 0.3s;
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
const links = [
	{ link: "/", name: "home" },
	{ link: "/projects", name: "projects" },
	{ link: "/tech", name: "tech stack" },
	{ link: "/notes", name: "notes" },
];

function Navbar() {
	return (
		<Container>
			{links.map(({ link, name }) => (
				<Link key={`nav-${name}`} href={link}>
					<NavItem>{name}</NavItem>
				</Link>
			))}
		</Container>
	);
}

export default Navbar;
