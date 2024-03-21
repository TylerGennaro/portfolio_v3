'use client';

import { useEffect, useRef, useState } from 'react';

const entries = [
	'Web Developer',
	'Student',
	'Soccer Player',
	'Puppy Lover',
	'Digital Sorcerer',
];

export default function SlotText() {
	const [index, setIndex] = useState(1);
	const spinnerRef = useRef<HTMLDivElement>(null);

	const setSpinnerTransition = (value: string) => {
		if (spinnerRef.current) {
			spinnerRef.current.style.transition = value;
		}
	};
	const setSpinnerTransform = (value: number) => {
		if (spinnerRef.current) {
			spinnerRef.current.style.transform = `translateY(${value}%)`;
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (spinnerRef.current) {
				setSpinnerTransform(index * -103);
				setIndex((prev) => (prev + 1) % (entries.length + 1));
				if (index === entries.length) {
					setIndex(1);
					setTimeout(() => {
						if (spinnerRef.current) {
							const transition = spinnerRef.current.style.transition;
							setSpinnerTransition('none');
							setSpinnerTransform(0);
							setTimeout(() => {
								if (spinnerRef.current) {
									setSpinnerTransition(transition);
								}
							}, 100);
						}
					}, 500);
				}
			}
		}, 4000);
		return () => clearInterval(interval);
	}, [index]);
	return (
		<div className='inline-flex h-24 overflow-hidden'>
			<div
				className='inline-flex flex-col transition duration-500'
				ref={spinnerRef}
			>
				{entries.map((entry, i) => (
					<span
						className='bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent'
						key={i}
					>
						{entry}
					</span>
				))}
				<span className='bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent'>
					{entries[0]}
				</span>
			</div>
		</div>
	);
}
