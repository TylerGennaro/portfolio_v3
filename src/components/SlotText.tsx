'use client';

import { useEffect, useRef, useState } from 'react';

const entries = [
	'Web Developer',
	'UI/UX Designer',
	'Programmer',
	'Student',
	'Soccer Player',
	'Puppy Lover',
	'Digital Sorcerer',
];

export default function SlotText() {
	const [index, setIndex] = useState(1);
	const spinnerRef = useRef<HTMLDivElement>(null);
	const entryRef = useRef<HTMLSpanElement>(null);

	const MARGIN_BOTTOM = 16;

	const setSpinnerTransition = (value: string) => {
		if (spinnerRef.current) {
			spinnerRef.current.style.transition = value;
		}
	};
	const setSpinnerTransform = (value: number) => {
		if (spinnerRef.current) {
			if (value !== 0) {
				spinnerRef.current.style.transform = `translateY(${
					value - index * MARGIN_BOTTOM
				}px`;
			} else {
				spinnerRef.current.style.transform = 'translateY(0)';
			}
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (spinnerRef.current) {
				setSpinnerTransform(index * -entryRef.current!.clientHeight);
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
		<div className='inline-flex h-28 overflow-hidden'>
			<div
				className='inline-flex flex-col transition duration-500 [&>span]:mb-4'
				ref={spinnerRef}
			>
				{entries.map((entry, i) => (
					<span
						className='bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent drop-shadow-md'
						key={i}
					>
						{entry}
					</span>
				))}
				<span
					className='bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent drop-shadow-md'
					ref={entryRef}
				>
					{entries[0]}
				</span>
			</div>
		</div>
	);
}
