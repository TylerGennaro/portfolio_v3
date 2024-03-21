import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export function Project({ children }: { children: ReactNode }) {
	return (
		<div className='w-full p-4 border rounded-lg shadow-md hover:bg-background-light [&:hover>img]:scale-[1.01] transition duration-300 cursor-pointer'>
			{children}
		</div>
	);
}

export function ProjectImage({
	src,
	alt,
}: {
	src: string | StaticImageData;
	alt: string;
}) {
	return (
		<Image
			src={src}
			alt={alt}
			className='w-full border rounded-lg transition duration-300 h-72 object-cover'
		/>
	);
}

export function ProjectTitle({ children }: { children: ReactNode }) {
	return (
		<h3 className='text-foreground font-bold text-2xl mt-4'>{children}</h3>
	);
}

export function ProjectDescription({ children }: { children: ReactNode }) {
	return <p className='text-lg mt-2 text-foreground-muted'>{children}</p>;
}

export function ProjectTools({ children }: { children: ReactNode }) {
	return <ul className='flex flex-wrap gap-2 mt-8'>{children}</ul>;
}

export function ProjectTool({ children }: { children: ReactNode }) {
	return (
		<li className='text-sm text-foreground-muted bg-content border w-fit px-6 py-1 rounded-full inline'>
			{children}
		</li>
	);
}
