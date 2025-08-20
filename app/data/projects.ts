// slug: A unique, URL-friendly identifier for the project.
// group: Can be 'Freelance' or 'Academic' (for now)
// title: The project's title.
// category: The context of the project.
// date: The timeline of the project.
// link: A live URL for the project if available
// description_points: An array of key achievements.
// tags: Keywords for technologies and concepts used.

export type Project = {
	slug: string
	group: 'Freelance' | 'Academic'
	title: string
	category: string
	date: string
	link: string | null
	description_points: string[]
	tags: string[]
	files?: Array<{
		name: string
		filename: string
		type: string
		description: string
	}>
}

export const projects: Project[] = [
	{
		slug: 'playlix-website',
		group: 'Freelance',
		title: 'Playlix Website',
		category: 'Freelance Project',
		date: 'May 2025 – Jun 2025',
		link: 'https://playlix.pt/',
		description_points: [
			'Designed and developed the official Playlix website using Vue.js, delivering a responsive and fast-loading interface.',
			'Worked directly with the founding team to shape the initial web presence and branding.'
		],
		tags: ['Vue.js', 'Web Development', 'UI/UX Design', 'Branding', 'Freelance']
	},
	{
		slug: 'diet-platform-pro',
		group: 'Academic',
		title: 'Diet Platform Pro',
		category: ' Web Programming',
		date: '2024 – 2025',
		link: null,
		description_points: [
			'Developed a full-stack web platform to connect nutritionists and patients.',
			'Built a RESTful API using Node.js/Express.js and a Single Page Application (SPA) with Angular.',
			'Implemented role-based authentication with JSON Web Tokens (JWT) for Admin, Nutritionist, and Patient roles.',
			'Integrated real-time chat and notifications using Socket.IO.',
			'Utilized MongoDB with Mongoose for robust data storage and modeling.'
		],
		tags: [
			'Angular',
			'Node.js',
			'Express.js',
			'MongoDB',
			'Socket.IO',
			'JWT',
			'REST API',
			'Full-Stack'
		]
	},
	{
		slug: 'penetration-testing-exploitation',
		group: 'Academic',
		title: 'Penetration Testing & Vulnerability Exploitation',
		category: 'Penetration Testing and Ethical Hacking',
		date: '2024 – 2025',
		link: null,
		description_points: [
			'Conducted network reconnaissance and service enumeration using Nmap in a virtualized lab environment.',
			'Exploited common vulnerabilities like Log4j and EternalBlue using the Metasploit Framework.',
			'Implemented data exfiltration techniques via DNS, ICMP, and HTTP tunneling to bypass network security controls.',
			'Deployed a pfSense firewall and Suricata Intrusion Prevention System (IPS) to contain and detect the simulated attacks.'
		],
		tags: [
			'Metasploit',
			'Nmap',
			'Suricata',
			'pfSense',
			'Penetration Testing',
			'Vulnerability Exploitation',
			'Red Teaming'
		],
		files: [
			{
				name: 'TPHE Report I',
				filename: 'TPHE_Relatorio_I.pdf',
				type: 'pdf',
				description:
					'First evaluation report demonstrating penetration testing methodologies and findings'
			},
			{
				name: 'TPHE Report II',
				filename: 'TPHE_Relatorio_II.pdf',
				type: 'pdf',
				description:
					'Second evaluation report covering advanced exploitation techniques and security assessments'
			}
		]
	},
	{
		slug: 'high-availability-web-cluster',
		group: 'Academic',
		title: 'High-Availability Web Cluster',
		category: 'Critical Systems',
		date: '2024 – 2025',
		link: 'https://github.com/0x1eo/HAWC',
		description_points: [
			'Built a fault-tolerant e-commerce web cluster utilizing NGINX for load balancing, MariaDB Cluster for database replication, and GlusterFS for distributed file storage.',
			'Deployed the entire infrastructure on Debian Virtual Machines with full service redundancy and automated failover.'
		],
		tags: [
			'NGINX',
			'MariaDB Cluster',
			'GlusterFS',
			'Debian',
			'High Availability',
			'Load Balancing',
			'Systems Engineering'
		],
		files: [
			{
				name: 'SC Report',
				filename: 'SC_Relatorio.pdf',
				type: 'pdf',
				description:
					'Critical Systems project report detailing the high-availability web cluster implementation'
			}
		]
	},
	{
		slug: 'football-simulator',
		group: 'Academic',
		title: 'Football Simulator',
		category: 'Programming Paradigms',
		date: '2024 – 2025',
		link: 'https://github.com/0x1eo/FootballSim',
		description_points: [
			'Developed a comprehensive football league management and simulation system using Java and Maven.',
			'Implemented object-oriented design patterns including Strategy, Factory, Observer, and MVC for modular architecture.',
			'Built a complete match simulation engine with realistic events, player statistics, and season management.',
			'Created dynamic squad management with multiple tactical formations (4-4-2, 4-3-3, 5-3-2, 3-5-2).',
			'Implemented data persistence through JSON import/export and automated HTML report generation.',
			'Designed a console-based user interface for interactive game management and real-time match simulation.'
		],
		tags: [
			'Java',
			'Maven',
			'OOP',
			'Design Patterns',
			'JSON',
			'HTML Generation',
			'Game Simulation',
			'Console UI'
		]
	},
	{
		slug: 'order-management-system-c',
		group: 'Academic',
		title: 'Order Management System in C',
		category: 'Programming Laboratory',
		date: '2022 – 2023',
		link: 'https://github.com/0x1eo/LP',
		description_points: [
			'Developed a command-line (CLI) CRUD application in C for managing customer orders and client data.',
			'Managed application state using dynamic memory allocation and complex data structures (structs).',
			'Implemented file I/O operations for data persistence, allowing the application to save and load state between sessions.'
		],
		tags: ['C', 'CLI', 'Data Structures', 'Dynamic Memory', 'File I/O']
	}
]
