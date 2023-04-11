import { Dispatch, SetStateAction, useEffect } from 'react';

import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export const InputAffiliateCode = (
	props: { setAffiliateCode: Dispatch< SetStateAction< string > > }
) => {
	const [ formValue, setFormValue ] = useState( '' );
	const { setAffiliateCode } = props;

	useEffect( () => {
		setAffiliateCode( formValue );
	}, [ formValue, setAffiliateCode ] );
	return (
		<>
			<TextControl
				label="アフィリエイトコード"
				placeholder='例: <a href="https://example.com">example</a>'
				value={ formValue }
				onChange={ ( value ) => setFormValue( value ) }
			/>
		</>
	);
};
