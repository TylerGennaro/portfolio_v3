import Image from 'next/image';

export default function Skill({
	skill,
	label,
	big = false,
}: {
	skill: string;
	label: string;
	big?: boolean;
}) {
	return (
		<div
			className={`px-8 py-4 font-semibold flex items-center gap-4 border rounded-lg ${
				big ? 'text-4xl w-full' : 'text-2xl w-max'
			}`}
		>
			<Image
				src={`/skills/${skill}.svg`}
				alt={label}
				width={big ? 72 : 48}
				height={big ? 72 : 48}
			/>
			<p>{label}</p>
		</div>
	);
}
