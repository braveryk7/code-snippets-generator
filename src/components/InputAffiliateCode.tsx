import { chevronDown } from '@wordpress/icons';
import { Dispatch, SetStateAction, useEffect } from 'react';

import { Icon, TextControl } from '@wordpress/components';
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
			<div className="cxn-advanced-settings">
				<span className="cxn-advanced-settings-switch">
					高度な設定
					<Icon icon={ chevronDown } className="cxn-advanced-settings-icon" size={ 24 } />
				</span>
				<div className="cxn-advanced-settings-item"></div>
			</div>
		</>
	);
};
