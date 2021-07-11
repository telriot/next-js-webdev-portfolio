import { TProject } from "types";
export const siteInfo = {
	name: "beniamino-tartarini.com",
};

export const contactData = {
	email: "beniamino.tartarini@gmail.com",
	phone: "+8108054683078",
	addressLine1: "〒 880-0824,",
	addressLine2: "Oshimacho Tateno 1469-2",
	addressLine2JP: "大島著立野 1469-2",
	addressLine3: "Miyazaki, Japan",
	addressLine3JP: "宮崎市",
};
export const footerLinks = {
	index: { text: "to my projects", href: "projects" },
	projects: { text: "to my tech stack", href: "tech" },
	notes: { text: "back home", href: "" },
	tech: { text: "browse my notes", href: "notes" },
};

export const projects : TProject[] = [
	{
		name: "Serena Altavilla",
		description: [
			"A presentational webpage for Serena Altavilla, Italian singer and songwriter.",
			"An essential, super-responsive layout to showcase Serena's work."
		],
		tools: "Typescript, NEXT.js, Styled Components",
		web: "https://www.serena-altavilla.com/",
		git: "",
		webp: "/assets/projects/serena-altavilla.webp",
		jpg: "/assets/projects/serena-altavilla.jpg",
		coldStart: false
	},
	{
		name: "The Bubbling Pot",
		description: [
			"An RSS feed aggregator for lovers of international cuisine with a clear responsive layout built with TailwindCSS.",
		],
		tools: "Typescript, NEXT.js, Tailwind",
		web: "https://the-boiling-pot-beniaminotartarini.vercel.app/",
		git: "https://github.com/telriot/rss-aggregator",
		webp: "/assets/projects/bubblingpot.webp",
		jpg: "/assets/projects/bubblingpot.jpg",
		coldStart: false
	},
	{
		name: "BTWeb",
		description: [
			"A statically served localized landing page for an international development agency in Japan.",
		],
		tools: "Typescript, NEXT.js, Styled Components",
		web: "https://btweb.vercel.app/",
		git: "https://github.com/telriot/btweb",
		webp: "/assets/projects/btweb.webp",
		jpg: "/assets/projects/btweb.jpg",
		coldStart: false
	},
	{
		name: "Girolamo La Sfrocchia",
		description: [
			"A portfolio for the Italian comedy author Girolamo La Sfrocchia.",
			"Built on Next.Js, trying to work on an absolutely bare-bone plain-text layout to let the readers focus on the (sometimes not so immediate!) contents of his prose.",
		],
		tools: "Typescript, NEXT.js, Material-UI",
		web: "https://www.lasfrocchia.com/",
		git: "",
		webp: "/assets/projects/LaSfrocchia-md.webp",
		jpg: "/assets/projects/LaSfrocchia-md.jpg",
		coldStart: false
	},
	{
		name: "MTG EDH Life Counter",
		description: [
			"A life counter app for Magic: The Gathering players trying to beat the pandemic. Built on Typescript leveraging Socket.IO for real-time data refreshing.",
		],
		tools:
			"Typescript, React, Context API, Styled Components, NodeJS, Socket.IO",
		web: "https://counterino.herokuapp.com/",
		git: "https://github.com/telriot/mtg-life-counter",
		webp: "/assets/projects/LifeCounter-md.webp",
		jpg: "/assets/projects/LifeCounter-md.jpg",
		coldStart: true
	},
	{
		name: "Kogetaro",
		description: [
			"A nostalgic, random generated, dungeon-crawler game rendered via React and managed through the Context API. Find and defeat the king of cats!",
		],
		tools: "React, JavaScript, Sass, HTML",
		web: "https://obscure-falls-32133.herokuapp.com/",
		git: "https://github.com/telriot/dungeon-crawler",
		webp: "/assets/projects/mines-of-kogetaro-md.webp",
		jpg: "/assets/projects/mines-of-kogetaro-md.jpg",
		coldStart: true
	},
];
export const fadeDuration = 400;
