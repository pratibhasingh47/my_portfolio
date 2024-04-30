// CertificateCard.tsx
import React from 'react';
import './certificate.css';


interface CertificateCardProps {
	title: string;
	imageUrl: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, imageUrl }) => {
	return (
		<div className="certificate-card">
			<img className='image' src={imageUrl} alt={title} />
			<div className="certificate-title">{title}</div>
			
		</div>
	);
};

export default CertificateCard;
