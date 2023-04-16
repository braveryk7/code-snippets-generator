import { Button } from '@wordpress/components';

import { copyToClipboard } from 'src/utils/copyToClipboard';

export const ShowShortCode = ( props: { characterString: string} ) => {
	const { characterString } = props;

	const formId = 'cxn-show-shortcode';
	const buttonId = 'cxn-copy-shortcode-button';

	return (
		<>
			<div className="cxn-form-header-wrapper">
				<label
					className="cxn-label"
					htmlFor="show-shortcode"
				>
					ショートコード
				</label>
				<Button
					id={ buttonId }
					className="cxn-copy"
					variant="secondary"
					onClick={
						( ) => copyToClipboard(
							'.cxn-show-shortcode' as keyof HTMLElementTagNameMap,
							buttonId
						)
					}
				>
					コピーする
				</Button>
			</div>
			<input
				type="text"
				className="cxn-show-shortcode"
				id={ formId }
				value={ `[${ characterString }]` }
				readOnly
				onClick={
					( e ) => copyToClipboard( '' as keyof HTMLElementTagNameMap, buttonId, e )
				}
			/>
		</>
	);
};
