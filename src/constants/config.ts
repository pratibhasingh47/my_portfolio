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
			content: `Hi Everyone, I’m Pratibha Singh from Udaipur, India, currently pursuing my B.Tech in Computer Science & Engineering at Techno India NJR. I’m passionate about software development, DevOps, cloud technologies, and cybersecurity, and have been actively involved in building projects and solutions across these areas. As a constant learner, I enjoy exploring modern tools and frameworks while developing efficient, scalable, and user-friendly applications.`,
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
