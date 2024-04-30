// import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import './tech.css'
import { config } from "../../constants/config";




const Tech = () => {
	return (
		<>

			<div className="title">
				{config.sections.skillset.p}

			</div>

			<div className="flex flex-col skill">
				{config.sections.skillset.h2}
			</div>

			{/* <div className="flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((technology) => (
					<div className="h-28 w-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div> */}




			<div className="tech-container">
				<div className="tech-row">
					{
						technologies.map((technology, index) => (

							<div className="tech-item" key={index}>
								<img src={technology.icon} alt="Skill" />
								<div className="tech-title">{technology.name}</div>
							</div>
						))
					}
					{/* Add more tech items as needed */}
				</div>
				{/* Add more tech rows as needed */}
			</div>



		</>
	);
};



export default SectionWrapper(Tech, "tech");
