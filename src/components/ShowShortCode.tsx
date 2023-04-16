import { Button } from '@wordpress/components';

import { copyToClipboard } from 'src/utils/copyToClipboard';

export const ShowShortCode = ( props: { characterString: string} ) => {
	const { characterString } = props;
	const formId = 'cxn-show-shortcode';

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
					id="cxn-copy-shortcode-button"
					className="cxn-copy"
					variant="secondary"
					onClick={
						( ) => copyToClipboard(
							'.cxn-show-shortcode' as keyof HTMLElementTagNameMap,
							formId
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
				onClick={ ( e ) => copyToClipboard( '' as keyof HTMLElementTagNameMap, formId, e ) }
			/>
		</>
	);
};
