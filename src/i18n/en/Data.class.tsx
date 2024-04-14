import { Resume } from "../../interfaces/Resume.interface";
import { Link } from "../../interfaces/Link.interface";
import { Hobby } from "../../interfaces/Hobby.interface";
import { Education } from "../../interfaces/Education.interface";
import { Role } from "../../interfaces/Role.interface";
import { Identity } from "../../interfaces/Identity.interface";
import { Skill } from "../../interfaces/Skill.interface";
import picture from "../../assets/pictures/beardglasses.jpg";

export class Data implements Resume {

	skills: Array<Skill> = [
		{
			name: "Programming",
			comment: "",
			keywords: [
				{ name: "React" },
				{ name: "VueJS" },
				{ name: "Golang" },
				{ name: "Javascript" },
				{ name: "Typescript" },
				{ name: "Flutter/Dart" },
			],
		},
		{
			name: "Web development",
			comment: "",
			keywords: [{ name: "HTML5" }, { name: "CSS3" }],
		},
		{
			name: "Database",
			comment: "",
			keywords: [{ name: "MySQL" }, { name: "MongoDB" }, { name: "Firebase" }],
		},
		{
			name: "Versioning",
			comment: "",
			keywords: [{ name: "GIT" }],
		},
		{
			name: "IDE",
			comment: "",
			keywords: [{ name: "VSCode" }, { name: "DBeaver" }, { name: "IntelliJ IDEA" }, { name: "Android Studio" }],
		},
		{
			name: "Language",
			comment: "",
			keywords: [{ name: "English, professional competence" }, { name: "Hindi, Native speaker" }],
		},
	];
	educations: Array<Education> = [
		{
			diploma: "B.Tech Computer Science & Engineering",
			school: "Sikkim Manipal Institute of Technology",
			city: "Sikkim, India",
			startDate: new Date("2018"),
			endDate: new Date("2022"),
			current: false,
			courses: [
				{ name: "Earned B.Tech degree in Computer Science & Engineering with a 9.3 CGPA, building a strong foundation in algorithms, programming languages, and database management systems." },
				{ name: "Enhanced skills and understanding of real-world applications through practical experiences in projects, internships, and research." },
				{ name: "Demonstrated a commitment to continuous learning and innovation through active involvement in coding competitions." },
			],
			keywords: [
				{ name: "Data Structures" },
				{ name: "Algorithms" },
				{ name: "CN" },
				{ name: "Web Development" },
				{ name: "Flutter" },
				{ name: "Nodejs" },
				{ name: "DBMS" },
				{ name: "Javascript" },
			],
		},
		{
			diploma: "CBSE 12th",
			school: "Royal Gondwana Public School",
			city: "Nagpur, India",
			startDate: new Date("2016"),
			endDate: new Date("2018"),
			current: false,
			courses: [
				{
					name:
						"Physics, Chemistry, Mathematics, English",
				},
				
			],
			keywords: [
			],
		},
	];
	jobs: Array<Role> = [
		{
			title: "Software Engineer 2",
			company: "Providence India",
			city: "Hyderabad, India",
			startDate: new Date("2024-03"),
			endDate: new Date(),
			current: true,
			missions: [],
			keywords: [
				{ name: "Javascript" },
				{ name: "React" },
				{ name: "VueJS" },
				{ name: "Golang" },
				{ name: "Azure" },
				{ name: "GitHub" },
			],
		},
		{
			title: "Software Engineer 1",
			company: "Providence India",
			city: "Hyderabad, India",
			startDate: new Date("2022-07"),
			endDate: new Date("2024-03"),
			current: false,
			missions: [

				{
					"name": "Led the development of front-end projects using Vue.js and React, focusing on improving user interfaces to boost engagement. Devised creative solutions to enhance user experience seamlessly."
				},
				{
					"name": "Took charge of back-end projects using Go, developing microservices to build a more robust server-side architecture."
				},
				{
					"name": "Played a key role in designing a modular and scalable micro frontend architecture. Involvement in integrating Azure technologies was crucial in advancing our tech stack to support better scalability. As a committed Full Stack Developer, focused on crafting solutions that prioritized the needs of users, successfully reaching important project milestones."
				}

			],
			keywords: [
				{ name: "Javascript" },
				{ name: "React" },
				{ name: "VueJS" },
				{ name: "Golang" },
				{ name: "Azure" },
				{ name: "GitHub" },
			],
		},
		{
			title: "Service Engineer(Internship)",
			company: "Providence India",
			city: "Hyderabad, India",
			startDate: new Date("2022-01"),
			endDate: new Date("2022-07"),
			current: false,
			missions: [
				//convert this to missions's object and split it into multiple objects Interned as a Front-End Developer, specializing in Vue.js, contributing significantly to the development of a tool intricately linked to Azure services. Played a key role in enhancing the user interface, bringing innovation to the forefront. This experience honed my skills in crafting seamless front-end solutions and integrating with Azure technologies.
				{
					"name": "Interned as a Front-End Developer, specializing in Vue.js, contributing significantly to the development of a tool intricately linked to Azure services. Played a key role in enhancing the user interface, bringing innovation to the forefront. This experience honed my skills in crafting seamless front-end solutions and integrating with Azure technologies."
				},
			],
			keywords: [
				{ name: "VueJS" },
				{ name: "GIT" },
				{ name: "Azure" },
				{ name: "Agile" },
			],
		},
		{
			title: "Mobile Application Developer (Internship)",
			company: "Ketto India",
			city: "Mumbai, India",
			startDate: new Date("2021-04"),
			endDate: new Date("2022-01"),
			current: false,
			missions: [
				{
					"name": "Developed multiple Flutter applications, showcased versatility across Android and iOS platforms while focusing on user-centric designs that significantly increased user engagement."
				},
				{
					"name": "Managed enhancements in app functionality by adeptly handling notifications, local storage, and databases for both Android and iOS. Also implemented diverse features such as file handling and customized boot logos to elevate user experiences."
				},
				{
					"name": "Expanded technical capabilities in mobile app development, focused on optimizations that enhanced app performance, reduced loading times, and added cross-platform functionality."
				},


			],
			keywords: [
				{ name: "Flutter" },
				{ name: "Dart" },
				{ name: "Javascript" },
				{ name: "GIT" },
				{ name: "Firebase" },
				{ name: "Android Studio" },
			],
		},

	];
	hobbies: Array<Hobby> = [
		{
			name: "Development",
			comment:
				"Technology watch: React, Flutter, VueJS, Golang, NodeJS",
			icon: { class: "fas", name: "code" },
		},
		{
			name: "Sport",
			comment: "Table Tennis, Hockey, Cricket",
			icon: { class: "fas", name: "running" },
		},
		{
			name: "Cinephile & Series addict",
			comment: "Love watching a good sci-fi movie or series",
			icon: { class: "fas", name: "film" },
		},
		{
			name: "Video games",
			comment: "Gamer in my spare time",
			icon: { class: "fas", name: "gamepad" },
		},
	];
	links: Array<Link> = [
		{
			name: "GitHub",
			pseudo: "Seemant",
			url: "https://github.com/sinhaseemant",
			icon: { class: "fab", name: "github" },
		},
	];
	contact: Link = {
		name: "Linkedin",
		url: "https://www.linkedin.com/in/seemant-sinha/",
		icon: { class: "fab", name: "linkedin" },
	};

	identity: Identity = {
		firstname: "Seemant",
		lastname: "Sinha",
		birthdate: new Date("2000-05-15"),
		address: {
			number: "",
			street: "",
			city: "Hyderabad",
			zip: "",
			country: "India",
			state: "Telangana",
			zone: "In HITEC City area",
		},
		phoneNumber: "",
		email: "",
		extras: [{ name: "Passionate Gamer, I Play games in my free time" }],
		softskills: [
			{ name: "Curious" },
			{ name: "Rigorous" },
			{ name: "Teamwork" },
		],
		bio:
			"I'm a dedicated full-stack developer who thrives on structure, attention to detail, and delivering top-notch work. I enjoy diving into the nitty-gritty to optimize web applications and make them shine. Plus, I love being part of a team where I can grow and learn alongside others",
		picture: { url: picture },
		role: this.jobs[0].title,
	};
}
