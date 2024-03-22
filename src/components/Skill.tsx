import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function Skill({
	skill,
	label,
	big = false,
	hasDark = false,
}: {
	skill: string;
	label: string;
	big?: boolean;
	hasDark?: boolean;
}) {
	return (
		<div
			className={`px-4 md:px-8 font-semibold flex items-center gap-4 border rounded-lg select-none hover:bg-content transition-colors duration-300 ${
				big
					? 'text-2xl md:text-4xl w-full py-6'
					: 'text-lg md:text-2xl w-max py-3 md:py-4'
			}`}
		>
			<Image
				src={`/skills/${skill}.svg`}
				alt={label}
				width={big ? 72 : 48}
				height={big ? 72 : 48}
				className={twMerge(
					'fill-foreground object-contain',
					big ? 'h-12 md:h-[72px]' : 'h-8 md:h-12',
					hasDark ? 'dark:hidden block' : ''
				)}
			/>
			{hasDark && (
				<Image
					src={`/skills/${skill}_dark.svg`}
					alt={label}
					width={big ? 72 : 48}
					height={big ? 72 : 48}
					className={twMerge(
						'dark:block hidden fill-foreground object-contain',
						big ? 'h-12 md:h-[72px]' : 'h-8 md:h-12'
					)}
				/>
			)}
			<p>{label}</p>
		</div>
	);
}
