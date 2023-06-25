export interface IssuerType {
	image: string;
	name: string;
}

export interface CertificateType {
	href: string;
	image: string;
	name: string;
}

export interface CertificationType extends IssuerType {
	certificates: CertificateType[];
}

export type CertificationsType = {
	[key: string]: {
		image: string;
		certificates: CertificateType[];
	};
};
