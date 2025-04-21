import { Project, Company, Education, Skill } from './structs'

// ILS-S start Apr 2024
// Add Bruno to dev tools
const ManTechProjects: Project[] = [
	{
		id: 'dl-a4-d1sco',
		name: 'DoD/Air Force Contract',
		startDate: 'Feb 2021',
		endDate: 'Dec 2024',
		details: [
			'Developed and maintained multiple high visibility, mission-critical logistics applications simultaneously',
			'Designed new workflows from the ground up to assist the customer in managing and tracking their assets more efficiently',
			'Improved legacy applications by eliminating technical debt and locking down the service endpoints using role and user based rules',
			'Worked directly with the customer to showcase new features and determine the root cause of some difficult to reproduce bugs',
			'Wrote in depth test cases for both the internal Definitive Logic testers and the customer',
			'Assisted developers new to the project with onboarding, including setting up their applications and explaining the ecosystem'
		],
		skills: ['js', 'ts', 'java', 'sql', 'scss', 'css', 'html', 'react', 'angular', 'angularjs', 'git', 'vscode', 'gitlab', 'jenkins', 'sonar', 'jira', 'bitbucket', 'sourcetree', 'mvn', 'tomcat', 'eclipse', 'windont'],
	}, {
		id: 'dl-army-hrc',
		name: 'HRC Army Contract',
		startDate: 'Jul 2023',
		endDate: 'Oct 2023',
		details: [
			'Developed a custom CKEditor5 plugin for inserting specific icons into user generated documents',
			'Fixed off the shelf CKEditor5 plugins to work in a Drupal environment',
			'Created scripts to assist in the early stages of data migration',
			'Wrote initial framework for an internal reverse proxy for secure data transfer between Drupal and the presentation layer',
			'Created initial prototype for the presentation layer\' saml login process'
		],
		skills: ['node', 'js', 'angular', 'html', 'scss', 'css', 'ts', 'git', 'vscode', 'sonar', 'windont']
	}, {
		id: 'dl-dos-os',
		name: 'OneStream Consultant',
		startDate: 'Aug 2022',
		endDate: '',
		details: [
			'Developed internal tools to assist in loading bulk data into OneStream'
		],
		skills: ['node', 'js', 'gitlab', 'css', 'react', 'vscode', 'windont']
	}, {
		id: 'dl-migration',
		name: 'Atlassian to GitLab Migration Team',
		startDate: 'Apr 2022',
		endDate: 'May 2022',
		details: [
			'Worked with the migration team to execute the final migration from the old Jira, Confluence, and Bitbucket environments into the new GitLab environment',
			'Wrote multiple bespoke scripts to convert the Jira and Confluence data into usable data that could be imported into GitLab',
			'Executed the full migration over the weekend to give the development teams minimal downtime, allowing them to start in GitLab Monday morning without any major issues',
			'Worked with the development teams to assist in setting developers up in the new environment'
		],
		skills: ['node', 'js', 'postman', 'gitlab', 'jira', 'bitbucket', 'windont', 'jenkins', 'sonar', 'vscode'],
	},
]

const LeidosProjects: Project[] = [
	{
		id: 'leidos-a4',
		name: 'DoD/Air Force Contract',
		startDate: 'May 2018',
		endDate: 'Aug 2019',
		details: [
			'Over two summers, assisted development on multiple React and Angular based web applications',
			'Created new remote log file viewer to assist development',
			'Upgraded administrative tool with new UI and cleaner front end code',
		],
		skills: ['ts', 'js', 'react', 'angular', 'css', 'html', 'git', 'vscode', 'tomcat', 'windont'],
	},
]

const InnovatorsProjects: Project[] = [
	{
		id: 'ir-fires',
		url: 'https://innovators3138.org/fires/',
		name: 'FIRES Development Team',
		startDate: 'Aug 2015',
		endDate: 'Jun 2018',
		details: [
			'Developing the GUI for the team\'s scouting software (FIRES) in 2015, 2016, 2017, and 2018',
			'Developed many unique charts and heatmaps for each new FRC game',
			'Designed an intuitive UI so that scouters could enter match data in real time',
			'Software directly used by over 60 unique FIRST teams and hundreds of students and mentors in multiple countries',
		],
		skills: ['js', 'css', 'html', 'angularjs', 'git', 'vsonline', 'bitbucket', 'sourcetree', 'postman', 'vscode', 'windont', 'linux'],
	}, {
		id: 'ir-student',
		name: 'Student Team Member',
		startDate: 'Aug 2012',
		endDate: 'Jun 2016',
		details: [
			'Vice President of FIRST Robotics Competition team 3138 for 2016 season',
			'Designed and installed pneumatic and electrical systems for 2014 robot',
			'Assisted with building the kicker assembly for 2014 robot and Frisbee shooter for 2013 robot',
			'Aided programming team in designing and writing the robot code and the team\'s website',
			'Volunteered at many community outreach events to build interest in STEM fields',
		],
		skills: ['solidworks', 'windont'],
	},
]

const DRSSProjects: Project[] = [
	{
		id: 'drss-it',
		name: 'Responsibilities',
		startDate: '',
		endDate: '',
		details: [
			'Managed 300+ individual computers using Avast for Business',
			'Supervised and resolved support tickets from 600+ students and staff',
			'Repaired, updated, and upgraded computers and laptops',
			'Reconfigured and set up over 600 computers each summer to prepare for the upcoming school year',
		],
		skills: ['windont', 'macos'],
	},
]

const NGProjects: Project[] = [
	{
		id: 'ng-rpi',
		name: 'Raspberry Pi Programming',
		startDate: '',
		endDate: '',
		details: [
			'Programmed Raspberry Pi to interface with an existing control system',
			'Worked with team to determine feasibility of future integration of Raspberry Pi into current system',
		],
		skills: ['py', 'linux'],
	},
]

export const EDUCATION: Education[] = [
	{
		id: 'wsu',
		url: 'https://www.wright.edu/',
		name: 'Wright State University',
		major: 'Computer Engineering',
		minor: 'Very Large Scale Integration (VLSI)',
		startDate: 'Aug 2016',
		endDate: 'Dec 2020',
	},
]

export const COMPANIES: Company[] = [
	{
		id: 'mantech',
		url: 'https://www.mantech.com/digital-transformation-consulting/',
		name: 'ManTech - Digital Practice (Formerly Definitive Logic)',
		title: 'Software Engineer',
		startDate: 'Feb 2021',
		endDate: 'Current',
		projects: ManTechProjects,
	}, {
		id: 'leidos',
		url: 'https://www.leidos.com/',
		name: 'Leidos',
		title: 'Software Engineering Intern',
		startDate: 'May 2018',
		endDate: 'Aug 2019',
		projects: LeidosProjects,
	}, {
		id: 'ir3138',
		url: 'https://innovators3138.org/',
		name: 'Innovators Robotics Inc.',
		title: 'Front End Developer',
		startDate: 'Aug 2012',
		endDate: 'Jun 2018',
		projects: InnovatorsProjects,
	}, {
		id: 'drss',
		url: 'https://www.daytonstemschool.org/',
		name: 'Dayton Regional STEM School',
		title: 'IT Support Technician',
		startDate: 'May 2013',
		endDate: 'Nov 2017',
		projects: DRSSProjects,
	}, {
		id: 'ng',
		url: 'https://www.northropgrumman.com/',
		name: 'Northrop Grumman',
		title: 'Python Programming Intern',
		startDate: 'Jun 2015',
		endDate: 'Aug 2015',
		projects: NGProjects,
	},
]

export const OSPROJECTS: Project[] = [
	{
		id: 'os-artificer',
		url: 'https://discord.burne99.com/TheArtificer/',
		name: 'The Artificer - Discord Bot',
		startDate: 'Dec 2020',
		endDate: 'Current',
		details: [
			'The Artificer is a powerful dice rolling Discord bot',
			'Supports 34 unique options that can be mixed together, allowing an infinite number of combinations',
			'Has been added to over 480 guilds with approximately 5,000 members',
			'Over 78,000 dice commands parsed by The Artificer',
		],
		skills: ['ts', 'deno', 'sql', 'git', 'sonar', 'vscode', 'linux', 'mysql', 'postman'],
	}, {
		id: 'os-groupup',
		url: 'https://github.com/Burn-E99/GroupUp/',
		name: 'Group Up - Discord Bot',
		startDate: 'May 2021',
		endDate: 'Current',
		details: [
			'Group Up is a highly customizable event scheduling Discord bot, allowing users to RSVP to events and receive reminder notifications',
			'Allows an unlimited number of events to be scheduled at once',
			'Used by over 300 members, with over 1,000 events created'
		],
		skills: ['ts', 'deno', 'sql', 'git', 'sonar', 'vscode', 'linux', 'mysql'],
	}, {
		id: 'os-mybatis',
		url: 'https://marketplace.visualstudio.com/items?itemName=ean-milligan.mybatis-lang-support',
		name: 'mybatis-lang-support - Visual Studio Code Extension',
		startDate: 'Dec 2021',
		endDate: 'Current',
		details: [
			'Adds useful error checking to Mybatis mapper XML files',
			'Checks for most common syntax issues and shows errors/warnings to the user',
			'Installed over 800 times on the Visual Studio Code Extension Marketplace',
		],
		skills: ['ts', 'git', 'vscode'],
	}, {
		id: 'os-d2zh',
		url: 'https://d2.eanm.dev/zerohour/',
		name: 'Destiny 2 Zero Hour Solver',
		startDate: 'May 2019',
		endDate: 'Dec 2020',
		details: [
			'Companion website to a difficult puzzle in the game Destiny 2',
			'Utilized by over 3,300 users',
		],
		skills: ['js', 'html', 'css', 'git', 'vscode'],
	},
]

export const SKILLS: Skill[] = [
	{
		id: 'ts',
		type: 'lang',
		name: 'TypeScript',
		expLevel: 5,
		yearsExp: 6,
		projects: [],
	}, {
		id: 'js',
		type: 'lang',
		name: 'JavaScript',
		expLevel: 5,
		yearsExp: 6,
		projects: [],
	}, {
		id: 'java',
		type: 'lang',
		name: 'Java',
		expLevel: 4,
		yearsExp: 6,
		projects: [],
	}, {
		id: 'sql',
		type: 'lang',
		name: 'SQL',
		expLevel: 4,
		yearsExp: 6,
		projects: [],
	}, {
		id: 'css',
		type: 'lang',
		name: 'CSS',
		expLevel: 3,
		yearsExp: 8,
		projects: [],
	}, {
		id: 'scss',
		type: 'lang',
		name: 'SCSS',
		expLevel: 3,
		yearsExp: 3,
		projects: [],
	}, {
		id: 'html',
		type: 'lang',
		name: 'HTML',
		expLevel: 4,
		yearsExp: 8,
		projects: [],
	}, {
		id: 'php',
		type: 'lang',
		name: 'PHP',
		expLevel: 2,
		yearsExp: 1,
		projects: [],
	}, {
		id: 'py',
		type: 'lang',
		name: 'Python',
		expLevel: 2,
		yearsExp: 4,
		projects: [],
	}, {
		id: 'c',
		type: 'lang',
		name: 'C/C++',
		expLevel: 2,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'matlab',
		type: 'lang',
		name: 'MATLAB',
		expLevel: 2,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'node',
		type: 'lib',
		name: 'Node.js',
		expLevel: 4,
		yearsExp: 4,
		projects: [],
	}, {
		id: 'deno',
		type: 'lib',
		name: 'Deno',
		expLevel: 4,
		yearsExp: 1,
		projects: [],
	}, {
		id: 'react',
		type: 'lib',
		name: 'React',
		expLevel: 3,
		yearsExp: 4,
		projects: [],
	}, {
		id: 'angular',
		type: 'lib',
		name: 'Angular 5+',
		expLevel: 3,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'angularjs',
		type: 'lib',
		name: 'AngularJS',
		expLevel: 3,
		yearsExp: 8,
		projects: [],
	}, {
		id: 'linux',
		type: 'os',
		name: 'Linux',
		expLevel: 4,
		yearsExp: 8,
		projects: [],
	}, {
		id: 'windont',
		type: 'os',
		name: 'Windows',
		expLevel: 4,
		yearsExp: 8,
		projects: [],
	}, {
		id: 'macos',
		type: 'os',
		name: 'MacOS/OSX',
		expLevel: 2,
		yearsExp: 4,
		projects: [],
	}, {
		id: 'inventor',
		type: 'other',
		name: 'Autodesk Inventor',
		expLevel: 4,
		yearsExp: 8,
		projects: [],
	}, {
		id: 'solidedge',
		type: 'other',
		name: 'Solid Edge',
		expLevel: 2,
		yearsExp: 1,
		projects: [],
	}, {
		id: 'solidworks',
		type: 'other',
		name: 'SOLIDWORKS',
		expLevel: 3,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'git',
		type: 'tool',
		name: 'Git',
		expLevel: 4,
		yearsExp: 8,
		projects: [],
	}, {
		id: 'vscode',
		type: 'tool',
		name: 'Visual Studio Code',
		expLevel: 4,
		yearsExp: 6,
		projects: [],
	}, {
		id: 'gitlab',
		type: 'tool',
		name: 'GitLab',
		expLevel: 3,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'jenkins',
		type: 'tool',
		name: 'Jenkins',
		expLevel: 3,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'sonar',
		type: 'tool',
		name: 'SonarQube/SonarCloud',
		expLevel: 3,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'jira',
		type: 'tool',
		name: 'Atlassian JIRA',
		expLevel: 3,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'bitbucket',
		type: 'tool',
		name: 'Atlassian Bitbucket',
		expLevel: 3,
		yearsExp: 8,
		projects: [],
	}, {
		id: 'sourcetree',
		type: 'tool',
		name: 'SourceTree',
		expLevel: 4,
		yearsExp: 8,
		projects: [],
	}, {
		id: 'mvn',
		type: 'tool',
		name: 'Maven',
		expLevel: 3,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'tomcat',
		type: 'tool',
		name: 'Apache Tomcat',
		expLevel: 3,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'postman',
		type: 'tool',
		name: 'Postman',
		expLevel: 3,
		yearsExp: 6,
		projects: [],
	}, {
		id: 'eclipse',
		type: 'tool',
		name: 'Eclipse',
		expLevel: 2,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'vsonline',
		type: 'tool',
		name: 'Visual Studio Online',
		expLevel: 2,
		yearsExp: 4,
		projects: [],
	}, {
		id: 'vscommunity',
		type: 'tool',
		name: 'Visual Studio Community Edition',
		expLevel: 2,
		yearsExp: 2,
		projects: [],
	}, {
		id: 'mysql',
		type: 'tool',
		name: 'MySQL Database',
		expLevel: 4,
		yearsExp: 2,
		projects: [],
	},
]

// Utility functions
// Adds link for skills to know what projects they are on
const addProjectToSkill = (project: Project): void => {
	for (const skillId of project.skills) {
		const skillIdx = SKILLS.findIndex(skill => skill.id === skillId)
		if (skillIdx >= 0) {
			SKILLS[skillIdx].projects.push(project.id)
		} else {
			alert(`Missing skillId: ${skillId} when looking at projectId: ${project.id}`)
		}
	}
}

// Call addProjectToSkill for all work projects
for (const company of COMPANIES) {
	for (const project of company.projects) {
		addProjectToSkill(project)
	}
}

// Call addProjectToSkill for all OS projects
for (const project of OSPROJECTS) {
	addProjectToSkill(project)
}
