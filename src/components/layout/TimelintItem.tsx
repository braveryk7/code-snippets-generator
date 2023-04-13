import { ReactNode } from 'react';

export const TimelineItem = (
	props: {
		itemNumber: number,
		itemHeading: string
		children: ReactNode
	},
) => {
	const { itemNumber, itemHeading, children } = props;
	return (
		<div className="cxn-timeline-item">
			<span className="cxn-timeline-item-number">{ itemNumber }</span>
			<h4 className="cxn-timeline-item-heading">{ itemHeading }</h4>
			<div className="cxn-itemContent">
				{ children }
			</div>
		</div>
	);
};
