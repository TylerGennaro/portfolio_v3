'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			variant='icon'
			onClick={() => {
				console.log(theme);
				setTheme(theme === 'light' ? 'dark' : 'light');
			}}
			title='Change theme'
		>
			<Sun className='transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
