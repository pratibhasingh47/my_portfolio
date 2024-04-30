// Certificate.tsx
'use client'
import React, { useState } from 'react';
import certificateData from './certificateData.ts';
import CertificateCard from './CertificateCard.tsx';
import './certificate.css';
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";

const Certificate: React.FC = () => {
	const [selectedOrg, setSelectedOrg] = useState<string | null>(null);

	const handleOrgClick = (org: string) => {
		setSelectedOrg(selectedOrg === org ? null : org);
	};

	return (
		<div className='container'>
			<h2 className="flex flex-col title">{config.sections.certificate.p}</h2>
			<h2 className="flex flex-col certificate">{config.sections.certificate.h2}</h2>

			<div className="accordion">

				{certificateData.map(org => (
					<div key={org.name} className="accordion-item">
						<button onClick={() => handleOrgClick(org.name)}>{org.name}</button>
						{selectedOrg === org.name && (
							<div className="accordion-content">
								{org.certificates.map((certificate, i) => (
									<CertificateCard key={i}
										title={certificate.title}
										imageUrl={certificate.imageUrl}

									/>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Certificate, 'CERTIFICATE');
