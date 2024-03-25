'use client';

import { Children, ReactNode, useState } from 'react';
import { Button } from './Button';
import { Plus } from 'lucide-react';

export default function ProjectTools({ children }: { children: ReactNode }) {
	const [showAll, setShowAll] = useState(false);
	const childrenArr = Children.toArray(children);
	return (
		<ul className='flex flex-wrap gap-2 mt-8'>
			{showAll ? (
				children
			) : (
				<>
					{childrenArr.slice(0, 3)}
					<Button
						className='text-sm px-6 py-1'
						icon={Plus}
						onClick={() => setShowAll(true)}
						variant='muted'
					>
						See {childrenArr.length - 3} more
					</Button>
				</>
			)}
		</ul>
	);
}
