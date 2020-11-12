import Layout from "@components/layout/Layout";
import MainContainer from "@components/layout/MainContainer";
import Heading from "@components/shared/Heading";
import Paragraph from "@components/shared/Paragraph";
import { SubWithMargin } from "@components/shared/Subheading";
import TextLink, { LinkContainer } from "@components/shared/TextLink";
import { footerLinks } from "@public/config";
import { GetStaticProps } from "next";
import axios from "axios";

export const getStaticProps: GetStaticProps = async () => {
	const d = await new Date();
	var priorDate = await new Date(
		new Date().setDate(d.getDate() - 30)
	).toISOString();
	const githubURL = "https://api.github.com/graphql";
	const codewarsURL = "https://www.codewars.com/api/v1/users/telriot";

	const query = `query {
        viewer {
          contributionsCollection(from:"${priorDate}"){
            contributionCalendar{
              totalContributions
            }
          } 
        }
	  }`;

	const githubData = await axios.post(
		githubURL,
		{
			query,
		},
		{
			headers: {
				Authorization: `bearer ${process.env.GITHUB_KEY}`,
			},
		}
	);
	const codewarsData = await axios.get(codewarsURL, {
		headers: { Authorization: `${process.env.CODEWARS_KEY}` },
	});
	return {
		props: {
			codewarsRank: codewarsData.data.ranks.overall.name,
			contributions:
				githubData.data.data.viewer.contributionsCollection.contributionCalendar
					.totalContributions,
		},
		revalidate: 7200,
	};
};
function Index({
	contributions,
	codewarsRank,
}: {
	contributions: number;
	codewarsRank: string;
}) {
	return (
		<Layout>
			<MainContainer>
				<Heading variant={1} noMargin>
					Hi, I&rsquo;m Ben
				</Heading>
				<SubWithMargin role="doc-subtitle">
					A freelance developer based in Miyazaki,&nbsp;Japan
				</SubWithMargin>
				<Paragraph large noMargin>
					I have started working in web development after a career in teaching
					and professional training all around the world, and for the first time
					in my life I do not just enjoy what I am doing, but I feel like this
					is what I was actually supposed to do. I really love the balance
					between craft, creativity and plain old critical thinking that coding
					requires, as it sums up the best aspects of my passions in one
					endless, rapidly changing&nbsp;discipline.
				</Paragraph>
				<Paragraph large noMargin>
					In the last 30 days I have pushed {contributions} commits to my Github
					repositories, and I am currently ranked at {codewarsRank}{" "}
					on&nbsp;Codewars.
				</Paragraph>
				<Paragraph large>
					Please take a look around, and feel free to send me a message if you
					want to get in touch for work, ideas, or anything code&nbsp;related.
				</Paragraph>
				<LinkContainer>
					<TextLink
						text={footerLinks.index.text}
						href={footerLinks.index.href}
					/>
				</LinkContainer>
			</MainContainer>
		</Layout>
	);
}

export default Index;
