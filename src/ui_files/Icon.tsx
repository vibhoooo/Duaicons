import React, { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
	icon: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ icon, ...props }) => (
	<svg {...props}>
		{icon}
	</svg>
);

export default Icon;
