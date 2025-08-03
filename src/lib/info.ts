import {
	Newspaper,
	UsersRound,
	PlusCircle,
	HousePlug,
	Smile,
	Sword,
	ShieldCheck,
	Bean,
	GraduationCap,
	Archive,
	Database,
	Network,
	FolderGit2,
	BetweenHorizontalEnd,
	SquareTerminal,
	Cpu,
	Blocks
} from 'lucide-svelte';
import { YoutubeBrands } from 'svelte-awesome-icons';

export const userInfo = {
	name: 'Vrishank Viswanath',
	email: 'vrishank@utexas.edu',
	github: 'https://github.com/knahsirV',
	linkedin: 'http://www.linkedin.com/in/vrishank-v',
	resume:
		'https://docs.google.com/document/d/1YfUxro-xYViLZKnkdRNI3wH28u6jbkA4FBssYvDHDUo/edit?usp=sharing'
};

export const projects = [
	{
		featured: true,
		name: 'Raindrop',
		description:
			'Platform for students to track internship cycle, view performance insights, and find exclusive opportunities',
		tech: ['Next.js', 'Firebase', 'NLP', 'OpenAI API', 'Tailwindcss'],
		date: 'Jan 2024 - Present',
		link: 'https://raindropjobs.com/',
		image: { src: '/raindrop_logo_mono.png', alt: 'Raindrop jobs logo' },
		year: '2024'
	},
	{
		featured: true,
		name: 'Comment Sense',
		description: 'Sentiment analysis tool and dashboard for YouTube video comment sections',
		tech: ['Next.js', 'Huggingface', 'Flask', 'Pandas', 'Amazon EBS', 'Tailwindcss'],
		date: 'Jun 2023',
		code: 'https://github.com/knahsirV/CommentSense',
		link: 'comment-sense-frontend.vercel.app',
		icon: YoutubeBrands,
		year: '2023'
	},
	{
		featured: true,
		name: 'News Archiver',
		description:
			'Application that allows users to view and visit the headlines of both CNN and Fox news for any given date',
		tech: ['React', 'Express JS', 'Firebase', 'Puppeteer', 'Tailwindcss'],
		code: 'https://github.com/knahsirV/NewsArchiver',
		link: 'news-archiver-d0853.web.app/',
		date: 'Jun 2022',
		icon: Newspaper,
		year: '2022'
	},
	{
		name: 'Familead',
		description:
			'An app designed to provide a streamlined communication platform for families and stay connected with a task scheduler, chat service, calendar, maps, and location tracking.',
		tech: ['React', 'Firebase', 'Google Calendar API', 'Twilio', 'Tailwindcss'],
		code: 'https://github.com/Rohit-Anantha/FamiLead',
		date: 'Oct 2021',
		icon: UsersRound,
		year: '2021'
	},
	{
		name: 'Prescribemate',
		description:
			"At PrescribeMate, we understand that it's hard to keep up with the copious amounts of medication given you by doctors. We want to make it easier know what you're taking and when to take it.",
		tech: ['Angular', 'Firebase', 'Bootstrap', 'OpenFDA API'],
		code: 'https://github.com/knahsirV/prescribemate',
		date: 'Sep 2020',
		icon: PlusCircle,
		year: '2020'
	},
	{
		name: 'Ecohome',
		description:
			'A simple solution to make your home more environmentally and economically friendly.',
		tech: ['Angular', 'Firebase', 'Google Maps API', 'Tailwindcss'],
		code: 'https://github.com/knahsirV/EcoHome',
		link: 'http://ecohome-7e34c.firebaseapp.com/',
		date: 'Aug 2020',
		icon: HousePlug,
		year: '2020'
	},
	{
		name: 'PrankAid',
		description:
			"Every once in a while, it's important to just joke around. But we understand that not all of us can easily think of a prank on their own. PrankAid is here to solve that.",
		tech: ['Angular', 'Firebase', 'Google Maps API', 'Tailwindcss'],
		code: 'https://github.com/knahsirV/PrankAid',
		link: 'https://prankaid.firebaseapp.com/',
		date: 'Aug 2020',
		icon: Smile,
		year: '2020'
	},
	{
		name: 'Sepio',
		description:
			'This concept is based on the idea of warning Roman troops about arriving invaders and aiding them in battle through the use of an updating inventory of weapons and GPS navigation.',
		tech: ['Angular', 'Firebase', 'Google Maps API, Bootstrap', 'Tensorflow'],
		code: 'https://github.com/knahsirV/Sepio',
		link: 'http://sepio-kavz.web.app/',
		date: 'Jul 2020',
		icon: Sword,
		year: '2020'
	},
	{
		name: 'EduSafe',
		description:
			'Webapp that allows students and teachers to master school safety concepts in a smooth and efficient manner',
		tech: ['Angular', 'Github Pages', 'Bootstrap'],
		code: 'https://github.com/knahsirV/EduSafe',
		link: 'https://knahsirv.github.io/EduSafe/',
		date: 'Jul 2020',
		icon: ShieldCheck,
		year: '2020'
	},
	{
		name: 'PintOS',
		description:
			'Operating system project that involves implementing a basic operating system in C',
		tech: ['C'],
		code: 'https://github.com/knahsirV/PintOS',
		date: 'Sep 2022 - Dec 2022',
		icon: Bean,
		year: '2022',
		schoolProject: true
	},
	{
		name: 'UT Machine Learning',
		description:
			'Compilation of work done in my intro to machine learning class, including implementations of linear regression, logistic regression, neural networks, clustering, and association analysis in Python',
		tech: ['Java'],
		code: 'https://github.com/knahsirV/ut-machine-learning',
		date: 'June 2023',
		icon: Blocks,
		year: '2023',
		schoolProject: true
	},
	{
		name: 'Campus Eats and Treats',
		description: 'Find colleges, restaurants, and events, all within a comfortable distance away.',
		tech: ['React', 'Firebase', 'Flask', 'Python', 'MySQL'],
		code: 'https://gitlab.com/srenjith/cs373-idb-09',
		date: 'Feb 2023 - May 2023',
		icon: GraduationCap,
		year: '2023',
		schoolProject: true
	},
	{
		name: 'CI/CD Pipeline',
		description:
			'CI/CD environment using Jenkins and Bitbucket for a WordPress Helm chart. Deployment to a GKE cluster',
		tech: ['helm', 'Docker', 'GKE', 'Jenkins', 'Bitbucket', 'Kubernetes', 'miniKube', 'kubectl'],
		code: 'https://bitbucket.org/cs-378-cloud-comp/assignment4/src/master/',
		date: 'April 2023',
		icon: FolderGit2,
		year: '2023',
		schoolProject: true
	},
	{
		name: 'Wordpress Helm Chart',
		description:
			'WordPress Helm chart that allows for deployment of multiple WordPress stacks using that chart on a Kubernetes cluster',
		tech: ['helm', 'Docker', 'Kubernetes', 'miniKube', 'kubectl'],
		code: 'https://bitbucket.org/cs-378-cloud-comp/assignment3/src/master/',
		date: 'March 2023',
		icon: Network,
		year: '2023',
		schoolProject: true
	},
	{
		name: 'DynamoDB Handler',
		description: 'Non-relational database manager with CRUD operations using AWS DynamoDB',
		tech: ['Python', 'AWS DynamoDB'],
		code: 'https://bitbucket.org/cs-378-cloud-comp/assignment2/src/master/',
		date: 'Feb 2023',
		icon: Database,
		year: '2023',
		schoolProject: true
	},
	{
		name: 'S3 Handler',
		description: 'Personal file storage system with CRUD operations using AWS S3',
		tech: ['Python', 'AWS S3'],
		code: 'https://bitbucket.org/cs-378-cloud-comp/assignment1/src/master/',
		date: 'Jan 2023',
		icon: Archive,
		year: '2023',
		schoolProject: true
	},
	{
		name: 'Y86-64 System Emulator',
		description:
			'Emulator for the Y86-64 architecture, simulating the PIPE implementation of the Y86-64 ISA with memory caching',
		tech: ['C'],
		code: 'https://github.com/knahsirV/y86-emulator',
		date: 'April 2022',
		icon: Cpu,
		year: '2022',
		schoolProject: true
	},
	{
		name: 'Memory Manager',
		description:
			'Memory manager in C that simulates the behavior of a memory allocator, (malloc, free, realloc)',
		tech: ['C'],
		code: 'https://github.com/knahsirV/memory-manager',
		date: 'March 2022',
		icon: BetweenHorizontalEnd,
		year: '2022',
		schoolProject: true
	},
	{
		name: 'Command Interpreter',
		description: 'Expression evaluator and command interpreter in C',
		tech: ['C'],
		code: 'https://github.com/knahsirV/command-interpreter',
		date: 'Feb 2022',
		icon: SquareTerminal,
		year: '2022',
		schoolProject: true
	},
	{
		name: 'Data Structures',
		description:
			'Compilation of work done in my data structures class, including implementations of linked lists, stacks, queues, trees, and graphs in Java, and Huffman encoding',
		tech: ['Java'],
		code: 'https://github.com/knahsirV/data-structures',
		date: 'Sep 2021 - Dec 2021',
		icon: Blocks,
		year: '2021',
		schoolProject: true
	}
];
