import { CS50, CodeChef1, CodeChef2, CodeChef3, Google_1, Google_2, Google_3, Google_4, Google_5, Google_6, Google_7, Google_8, JavaGeekster, gl_1, gl_2, gl_3, gl_4, googlecybersecurity, ibm_1, ibm_2, ibm_3, ibm_4, microsoft, postman, sl_1, sl_2, st_1, st_2 } from "../../assets";

// certificateData.ts
interface Certificate {
	title: string;
	imageUrl: string;
}

interface Organization {
	name: string;
	certificates: Certificate[];
}

const certificateData: Organization[] = [
	{
		name: 'Google',
		certificates: [

			{ title: 'Google Cybersecurity', imageUrl: googlecybersecurity },

			{ title: 'Google - Play It Safe', imageUrl: Google_1 },
			{ title: 'Google - Foundation of Cybersecurity', imageUrl: Google_2 },
			{ title: 'Google - Connect & Protect', imageUrl: Google_3 },
			{ title: 'Google - Linux & SQL', imageUrl: Google_4 },
			{ title: 'Google - Assets,Threats& Vulnerabilities', imageUrl: Google_5 },
			{ title: 'Google - Detection & Response', imageUrl: Google_6 },
			{ title: 'Google - Cybersecurity with Python', imageUrl: Google_7 },
			{ title: 'Google - Put It work', imageUrl: Google_8 },

		],
	},

	{
		name: 'Microsoft',
		certificates: [
			{ title: 'Microsoft azure Fundamental', imageUrl: microsoft },
		],
	},

	{
		name: 'CodeChef',
		certificates: [
			{ title: 'Learn SQl', imageUrl: CodeChef1 },
			{ title: 'C from problem solving', imageUrl: CodeChef2 },
			{ title: 'Learn C', imageUrl: CodeChef3 },
		],
	},

	{
		name: 'CS50',
		certificates: [
			{ title: 'CS50x - Harvard University', imageUrl: CS50 },
		],
	},

	{
		name: 'Geekster',
		certificates: [
			{ title: 'Java Fundamentals', imageUrl: JavaGeekster },
		],
	},

	{
		name: 'Great Learning',
		certificates: [
			{ title: 'My SQl Basic', imageUrl: gl_1 },
			{ title: 'Css tutorial', imageUrl: gl_2 },
			{ title: 'Front-End Development', imageUrl: gl_3 },
			{ title: 'Linux Tutorial', imageUrl: gl_4 },
		],
	},

	{
		name: 'IBM',
		certificates: [
			{ title: 'Data analysis with python', imageUrl: ibm_1 },
			{ title: 'spark fundamentals', imageUrl: ibm_2 },
			{ title: 'Data visualizationwith with python', imageUrl: ibm_3 },
			{ title: 'hadoop 101', imageUrl: ibm_4 },
		],
	},

	{
		name: 'Postman',
		certificates: [
			{ title: 'Postman API Fundamental Student Expert ', imageUrl: postman },
		],
	},

	{
		name: 'Simpli Learn',
		certificates: [
			{ title: 'introduction to SQL', imageUrl: sl_1 },
			{ title: 'basic linux introduction course', imageUrl: sl_2},
		],
	},

	{
		name: 'Scaler Topics',
		certificates: [
			{ title: 'Data Science Course ', imageUrl: st_1 },
			{ title: 'Data Structures in C++', imageUrl: st_2},
		],
	},
];

export default certificateData;
