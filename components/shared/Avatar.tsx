import Image from "@components/shared/Image";
import styled from "styled-components";

const Container = styled.div`
	border: none;
	border-radius: 10em;
	height: 4.5em;
	width: 4.5em;
	overflow: hidden;
	margin: 1.75em 0 1.75em;
`;
function Avatar() {
	return (
		<Container>
			<Image
				alt="My portrait"
				src="/assets/beniamino150w.jpg"
				webp="/assets/beniamino150w.webp"
				objectFit="cover"
			/>
		</Container>
	);
}

export default Avatar;
