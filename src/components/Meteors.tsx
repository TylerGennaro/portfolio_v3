import { CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

function random(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Meteors({ number }: { number?: number }) {
	const meteors = Array.from({ length: number ?? 20 }).fill(true);

	return (
		<div className='absolute inset-0 overflow-hidden pointer-events-none'>
			{meteors.map((_, i) => (
				<span
					key={'meteor' + i}
					className={twMerge(
						'opacity-0 animate-meteor-effect absolute top-1/2 left-1/2 h-[1px] bg-slate-600/10 shadow-[0_0_0_1px_#00000010] dark:shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] -z-[1] rounded-full'
					)}
					style={
						{
							width: random(10, 100) + 'px',
							top: random(0, 100) + '%',
							left: random(0, 100) + '%',
							animationDelay: random(0.2, 0.6) + 's',
							animationDuration: random(2, 8) + 's',
							'--rotation': '215deg',
						} as CSSProperties
					}
				/>
				// <span
				// 	key={'meteor' + i}
				// 	className={twMerge(
				// 		'animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] -z-[1]',
				// 		'before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-slate-500 before:to-transparent'
				// 	)}
				// 	style={
				// 		{
				// 			top: Math.floor(Math.random() * 100) + '%',
				// 			left: Math.floor(Math.random() * 100) + '%',
				// 			animationDelay: Math.random() * 0.6 + 0.2 + 's',
				// 			animationDuration: Math.floor(Math.random() * 8 + 2) + 's',
				// 			'--rotation':
				// 				Math.floor(Math.random() * (220 - 210 + 1)) + 210 + 'deg',
				// 		} as CSSProperties
				// 	}
				// />
			))}
		</div>
	);
}
