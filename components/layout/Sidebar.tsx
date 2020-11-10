import React from "react";
import styled from "styled-components";
import Avatar from "@components/shared/Avatar";
import Navbar from "@components/shared/Navbar";
import Social from "@components/shared/Social";
import Copyright from "@components/shared/Copyright";

const Wrapper = styled.div`
	position: fixed;
	width: ${({ theme }) =>
		"calc((100vw - " + theme.container.padding + "*2)/4)"};
	height: ${({ theme }) => "calc(100vh - " + theme.container.padding + "*2)"};
	top: ${({ theme }) => theme.container.padding};
	bottom: ${({ theme }) => theme.container.padding};
	left: ${({ theme }) => theme.container.padding};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
function Sidebar() {
	return (
		<Wrapper>
			<div>
				<Avatar />
				<Navbar />
			</div>

			<div>
				<Social />
				<Copyright />
			</div>
		</Wrapper>
	);
}

export default Sidebar;
