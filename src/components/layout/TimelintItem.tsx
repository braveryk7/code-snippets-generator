import { ReactNode } from 'react';

export const TimelineItem = (
	props: {
		itemNumber: number,
		itemHeading: string
	},
	children: ReactNode
) => {
	const { itemNumber, itemHeading } = props;
	return (
		<div className="timeline-item">
			<span className="timeline-item-number">{ itemNumber }</span>
			<h4 className="timeline-item-heading">{ itemHeading }</h4>
			<div className="itemContent">
				{ children };
			</div>
		</div>
	);
};
