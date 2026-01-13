export type Project = {
	slug: string
	group: 'Freelance' | 'Academic' | 'Personal'
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
		date: 'May 2025 - Jun 2025',
		link: 'https://playlix.pt/',
		description_points: [
			'Designed and developed the official Playlix website using Vue.js, delivering a responsive and fast-loading interface.',
			'Worked directly with the founding team to shape the initial web presence and branding.'
		],
		tags: ['Vue.js', 'Web Development', 'UI/UX Design', 'Branding', 'Freelance']
	},
	{
		slug: 'clotho',
		group: 'Personal',
		title: 'Clotho',
		category: 'The Moirai System',
		date: 'Jan 2026',
		link: 'https://github.com/0x1eo/clotho',
		description_points: [
			'Built an Evidence-as-Code compliance auditing tool that SSH into servers to verify configuration baselines.',
			'Implements automated drift detection with ISO 27002:2022 control mapping for security compliance.',
			'Features pluggable collectors for ports, users, files, and processes with customizable YAML baselines.',
			'Generates LaTeX/PDF reports and machine-readable JSON output for integration with monitoring systems.'
		],
		tags: ['Python', 'SSH', 'Compliance', 'ISO 27002', 'Security Auditing', 'LaTeX', 'YAML']
	},
	{
		slug: 'lachesis',
		group: 'Personal',
		title: 'Lachesis',
		category: 'The Moirai System',
		date: 'Jan 2026',
		link: 'https://github.com/0x1eo/lachesis',
		description_points: [
			'Developed a compliance monitoring dashboard that ingests Clotho audit reports and tracks drift over time.',
			'Built a Node.js/Express API with MariaDB backend to store and analyze compliance data.',
			'Created an Angular dashboard displaying entropy scores, stability metrics, and MTBF calculations.',
			'Implements webhook-based alerts to trigger Atropos remediation when entropy thresholds are exceeded.'
		],
		tags: ['Node.js', 'Express.js', 'Angular', 'MariaDB', 'Dashboard', 'Monitoring', 'REST API']
	},
	{
		slug: 'atropos',
		group: 'Personal',
		title: 'Atropos',
		category: 'The Moirai System',
		date: 'Jan 2026',
		link: 'https://github.com/0x1eo/atropos',
		description_points: [
			'Engineered a Go-based automated remediation service that "cuts" (isolates/resets) compromised nodes.',
			'Implements a modular Cutter interface with strategies for Docker, SSH, and VirtualBox operations.',
			'Features secure HMAC-verified webhooks to receive entropy alerts from Lachesis.',
			'Supports policy-driven responses with configurable entropy thresholds for graduated remediation actions.'
		],
		tags: ['Go', 'Webhooks', 'HMAC', 'Docker', 'VirtualBox', 'SSH', 'Automated Remediation']
	},
	{
		slug: 'diet-platform-pro',
		group: 'Academic',
		title: 'Diet Platform Pro',
		category: ' Web Programming',
		date: '2024 - 2025',
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
		date: '2024 - 2025',
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
		date: '2024 - 2025',
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
		date: '2024 - 2025',
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
		date: '2022 - 2023',
		link: 'https://github.com/0x1eo/LP',
		description_points: [
			'Developed a command-line (CLI) CRUD application in C for managing customer orders and client data.',
			'Managed application state using dynamic memory allocation and complex data structures (structs).',
			'Implemented file I/O operations for data persistence, allowing the application to save and load state between sessions.'
		],
		tags: ['C', 'CLI', 'Data Structures', 'Dynamic Memory', 'File I/O']
	}
]
