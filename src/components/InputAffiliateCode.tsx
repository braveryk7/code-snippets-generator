import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export const InputAffiliateCode = ( props: any ) => {
	const [ formValue, setFormValue ] = useState( '' );
	const { setAffiliateCode } = props;

	setAffiliateCode( formValue );
	return (
		<>
			<TextControl
				label="アフィリエイトコード"
				value={ formValue }
				onChange={ ( value ) => setFormValue( value ) }
			/>
		</>
	);
};
