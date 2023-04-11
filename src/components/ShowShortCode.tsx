export const ShowShortCode = ( props: { characterString: string} ) => {
	const { characterString } = props;

	return (
		<>
			<label
				className="cxn-label"
				htmlFor="show-shortcode"
			>
				ショートコード
			</label>
			<input
				type="text"
				className="cxn-show-shortcode"
				id="show-shortcode"
				value={ `[${ characterString }]` }
				readOnly
			/>
		</>
	);
};
