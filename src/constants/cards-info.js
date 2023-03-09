import { v4 } from 'uuid';

const cardsInfo = [
	{
		id: v4(),
		backgroundImage: 'url(/public/bg-pattern-quotation.svg)',
		backgroundColor: '#733FC8',
		positionColumn: '1/3',
		positionRow: '1/2',
		textColor: 'white',
		smallTextColor: '#B99FE4',
		iconImage: '/image-daniel.jpg',
		userName: 'Daniel Clifford',
		marginBottomQuote: '40px',
		quoteText:
			'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
		text: '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”'
	},
	{
		id: v4(),
		backgroundImage: 'none',
		backgroundColor: '#48556A',
		positionColumn: '3/4',
		positionRow: '1/2',
		textColor: 'white',
		smallTextColor: '#A3AAB4',
		iconImage: '/image-jonathan.jpg',
		userName: 'Jonathan Walters',
		marginBottomQuote: '16px',
		quoteText: 'The team was very supportive and kept me motivated',
		text: '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “'
	},
	{
		id: v4(),
		backgroundImage: 'none',
		backgroundColor: '#FFFFFF',
		positionColumn: '1/2',
		positionRow: '2/3',
		textColor: '#48556A',
		smallTextColor: '#A3AAB4',
		iconImage: '/image-jeanette.jpg',
		userName: 'Jeanette Harmon',
		marginBottomQuote: '16px',
		quoteText: 'An overall wonderful and rewarding experience',
		text: '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”'
	},
	{
		id: v4(),
		backgroundImage: 'none',
		backgroundColor: '#19202D',
		positionColumn: '2/4',
		positionRow: '2/3',
		textColor: 'white',
		smallTextColor: '#8C8F96',
		iconImage: '/image-patrick.jpg',
		userName: 'Patrick Abrams',
		marginBottomQuote: '16px',
		quoteText:
			'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
		text: '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”'
	},
	{
		id: v4(),
		backgroundImage: 'none',
		backgroundColor: 'white',
		positionColumn: '4/5',
		positionRow: '1/3',
		textColor: '#48556A',
		smallTextColor: '#A3AAB4',
		iconImage: '/image-kira.jpg',
		userName: 'Kira Whittle',
		marginBottomQuote: '16px',
		quoteText: 'Such a life-changing experience. Highly recommended!',
		text: '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”'
	}
];

export { cardsInfo };
