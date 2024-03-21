import { CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';
import Skill from './Skill';

export default function Banner({
	items,
	speed,
	direction = 'right',
	className,
}: {
	items: { label: string; skill: string }[];
	speed: number;
	direction?: 'right' | 'left';
	className?: string;
}) {
	const animation =
		direction === 'right'
			? 'animate-[swipeRight_var(--speed)_linear_infinite_backwards]'
			: 'animate-[swipeLeft_var(--speed)_linear_infinite]';
	return (
		<div className={twMerge('relative w-full overflow-hidden', className)}>
			<div className='flex'>
				{Array.from({ length: 2 }).map((_, i) => (
					<section
						className={twMerge('flex', animation)}
						style={{ '--speed': `${speed}s` } as CSSProperties}
						key={i}
					>
						{items.map((item, index) => (
							<div className='px-2' key={index}>
								<Skill skill={item.skill} label={item.label} />
							</div>
						))}
					</section>
				))}
			</div>
		</div>
	);
}
