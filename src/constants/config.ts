type TSection = {
	p: string;
	h2: string;
	content?: string;
};

type TConfig = {
	html: {
		title: string;
		fullName: string;
		email: string;
	};
	hero: {
		name: string;
		p: string[];
	};
	contact: {
		form: {
			name: {
				span: string;
				placeholder: string;
			};
			email: {
				span: string;
				placeholder: string;
			};
			message: {
				span: string;
				placeholder: string;
			};
		};
	} & TSection;
	sections: {
		about: Required<TSection>;
		experience: TSection;
		skillset: TSection;
		certificate: TSection;
		feedbacks: TSection;
		works: Required<TSection>;
	};
};

export const config: TConfig = {
	html: {
		title: "My Portfolio",
		fullName: "Pratibha Singh",
		email: "pratibhasingh1624@gmail.com",
	},
	hero: {
		name: "Pratibha Singh",
		p: ["I am a Constant Learner", "and Growing Developer"],
	},
	contact: {
		p: "Get in touch",
		h2: "Contact.",
		form: {
			name: {
				span: "Your Name",
				placeholder: "What's your name?",
			},
			email: { span: "Your Email", placeholder: "What's your email?" },
			message: {
				span: "Your Message",
				placeholder: "What do you want to say?",
			},
		},
	},
	sections: {
		about: {
			p: "Introduction",
			h2: "Overview.",
			content: `Hi Everyone, I am Pratibha Singh from Udaipur, India.
                I am currently pursuing Computer Science and Engineering at Techno India NJR
                I'm a Full Stack developer with experience in JavaScript and
                C++, and expertise in frameworks like React, Node.js, and
                next.js. I'm a constant learner and always focus on developing new skills.
                Also I am open to work as I am having skills like problem solving ,developing modern UI/UX
                designs and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!`,
		},
		experience: {
			p: "What I have done so far",
			h2: "Work Experience.",
		},
		skillset: {
			p: "Skills I have Gained",
			h2: "Professional Skill-Set",
		},
		certificate: {
			p: "Here are my certificates",
			h2: "My Certificates",
		},
		feedbacks: {
			p: "What others say",
			h2: "Testimonials.",
		},
		works: {
			p: "My work",
			h2: "Projects.",
			content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
		},
	},
};
