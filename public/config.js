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

export const projects = [
	{
		name: "Serena Altavilla",
		description: [
			"A presentational webpage for Serena Altavilla, Italian singer and songwriter",
			"An essential, super-responsive layout to showcase Serena's work"
		],
		tools: "Typescript, NEXT.js, Styled Components",
		web: "https://www.serena-altavilla.com/",
		git: "",
		webp: "/assets/projects/serena-altavilla.webp",
		jpg: "/assets/projects/serena-altavilla.jpg",
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
	},
	// {
	// 	name: "RRT Event Board",
	// 	description: [
	// 		"A CRUD Event Board built with React/Redux-Toolkit on Node JS and prototyped with Material UI. It features mail notifications via Snapgrid and a simple session based authentication.",
	// 	],
	// 	tools:
	// 		"Typescript, Javascript, React, Redux-Toolkit, Material-UI NodeJS, Express, Snapgrid API",
	// 	web: "https://investocracy.herokuapp.com/",
	// 	git: "https://github.com/telriot/investocracy",
	// 	webp: "/assets/projects/EventBoard-md.webp",
	// 	jpg: "/assets/projects/EventBoard-md.jpg",
	// },
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
	},
	{
		name: "Crypto Wall",
		description: [
			"A cryptocurrency visualization tool based on the CoinGecko API. Users can share data sets in real-time via Web Sockets.",
		],
		tools: "React, NodeJs, MaterialUI, JavaScript, MongoDB, Socket.IO, RTL",
		web: "https://cryptowall.herokuapp.com/",
		git: "https://github.com/telriot/chat-app",
		webp: "/assets/projects/cryptowall-md.webp",
		jpg: "/assets/projects/cryptowall-md.jpg",
	},
	{
		name: "Book Club",
		description: [
			"A book trading platform for avid readers based on the Google Books API, styled with Sass Modules.",
		],
		tools: "React, NodeJs. MongoDB, JavaScript, Sass, HTML",
		web: "https://bookclubfcc.herokuapp.com/",
		git: "https://github.com/telriot/book-club",
		webp: "/assets/projects/book-club-md.webp",
		jpg: "/assets/projects/book-club-md.jpg",
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
	},
];
export const fadeDuration = 400;
