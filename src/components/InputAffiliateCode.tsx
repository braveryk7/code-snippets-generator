import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export const InputAffiliateCode = () => {
	const [ affiliateCode, setAffiliateCode ] = useState( '' );
	return (
		<>
			<TextControl
				label="アフィリエイトコード"
				value={ affiliateCode }
				onChange={ ( value ) => setAffiliateCode( value ) }
			/>
		</>
	);
};
