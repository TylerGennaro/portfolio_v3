import { ReactNode } from 'react';
import { ShadowHeading } from './ShadowHeading';
import { Text } from './Text';

export default function SectionHeading({
	header,
	children,
}: {
	header: string;
	children?: ReactNode;
}) {
	return (
		<div className='mb-16'>
			<ShadowHeading>{header}</ShadowHeading>
			{children && (
				<Text className='max-w-screen-sm mt-6' color='muted'>
					{children}
				</Text>
			)}
		</div>
	);
}
