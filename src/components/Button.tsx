import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
	base: 'py-2 px-8 rounded-lg shadow-md text-foreground',
	variants: {
		variant: {
			primary:
				'bg-primary text-white hover:brightness-125 transition duration-300',
			outline: 'bg-transparent border hover:bg-content transition duration-300',
			light:
				'bg-transparent border border-white text-white hover:bg-white hover:text-primary transition duration-300',
			icon: 'bg-transparent border hover:bg-content transition duration-300 p-2 shadow-none',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		ButtonVariants {
	children: React.ReactNode;
	className?: string;
	icon?: LucideIcon;
}

export const Button = ({
	variant,
	className,
	icon: Icon,
	...props
}: ButtonProps) => {
	return (
		<button
			className={twMerge(
				button({ variant }),
				'inline-flex items-center',
				className
			)}
			{...props}
		>
			{Icon && <Icon className='mr-2' size={18} />}
			{props.children}
		</button>
	);
};
