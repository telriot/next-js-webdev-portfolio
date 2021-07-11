import React from 'react';
import styled from 'styled-components';
import Heading from '@components/shared/Heading';
import Paragraph from '@components/shared/Paragraph';
import { TProject } from '@declarations/index';
import Image from '@components/shared/Image';
import { Github } from '@styled-icons/simple-icons';
import IconWrapper from '@components/shared/IconWrapper';
import IconButton from '@components/shared/IconButton';
import ReactTooltip from 'react-tooltip';

const Container = styled.div`
	max-width: ${({ theme }) => theme.projectCardMaxWidth};
	margin-bottom: ${({ theme }) => theme.margin('d6').top};
`;
const HeadingDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;
const TechSpan = styled.p`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.m};
	line-height: ${({ theme }) => theme.lineHeight.m};
	color: ${({ theme }) => theme.palette.text.tertiary};
	text-align: left;
	font-weight: 400;
	margin-bottom: ${({ theme }) => 'calc(' + theme.margin('m').bottom + '*4)'};
	/* ${({ theme }) => theme.breakpoints.down('md')} {
		font-size: ${({ theme }) => theme.typography.l};
		line-height: ${({ theme }) => theme.lineHeight.l};
		margin-bottom: ${({ theme }) => theme.margin('l').bottom};
	} */
`;
const ImageWrapper = styled.div`
	position: relative;
	width: 30%;
	min-width: 30%;
	margin: 0 2em 0 0;
	border: ${({ theme }) => '1px solid ' + theme.palette.formGreyLight};
	z-index: 1;
	cursor: pointer;
	&:before {
		content: 'To the website';
		font-family: ${({ theme }) => theme.fontFamily.display};
		font-size: ${({ theme }) => theme.typography.base};
		line-height: ${({ theme }) => theme.lineHeight.base};
		color: ${({ theme }) => theme.palette.text.secondary};
		text-align: center;
		font-weight: 400;
		position: absolute;
		top: 0;
		left: 0;
		display: grid;
		place-items: center;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.85);
		z-index: 10;
		opacity: 0;
		transition: opacity 0.4s;
	}
	&:hover {
		&:before {
			opacity: 1;
		}
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		width: 100%;
		min-width: 100%;
		margin-bottom: ${({ theme }) => theme.margin('base').top};
	}
`;
const MainDiv = styled.div`
	display: flex;
	${({ theme }) => theme.breakpoints.down('sm')} {
		flex-direction: column;
	}
`;
const FlexDiv = styled.div`
	display: flex;
`;
const StyledIconWrapper = styled(IconWrapper)`
	margin: 0.25em;
`;
const AlertSpan = styled.span`
	color: ${({ theme }) => theme.palette.danger};
	margin-left: 0.25em;
	font-size: 2em;
	cursor: default;
`;
function ProjectCard({ project }: { project: TProject }) {
	const handleRedirect = () => window.open(project.web, '_blank', 'noopener');

	return (
		<Container>
			<HeadingDiv>
				<div>
					<FlexDiv>
						<Heading noMargin variant={6}>
							{project.name}
						</Heading>
						{project.coldStart && (
							<>
								<AlertSpan data-tip={`Takes ~15s. to load from cold starts!`}>
									*
								</AlertSpan>
								<ReactTooltip backgroundColor='#333' />
							</>
						)}
					</FlexDiv>
					<TechSpan>{project.tools}</TechSpan>
				</div>
				{project.git && (
					<StyledIconWrapper size='2em'>
						<IconButton
							href={project.git || ''}
							label={project.name}
							icon={<Github />}
						/>
					</StyledIconWrapper>
				)}
			</HeadingDiv>

			<MainDiv>
				<ImageWrapper onClick={handleRedirect}>
					<Image
						alt={project.name}
						src={project.jpg}
						webp={project.webp}
						objectFit='cover'
					/>
				</ImageWrapper>
				<div>
					{project.description.map((par, i) => (
						<Paragraph noMargin key={`${project.name}-par-${i}`}>
							{par}
						</Paragraph>
					))}
				</div>
			</MainDiv>
		</Container>
	);
}

export default ProjectCard;
