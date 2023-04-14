import { chevronDown } from '@wordpress/icons';
import { Dispatch, SetStateAction, useEffect } from 'react';

import { Icon, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export const InputAffiliateCode = (
	props: { setAffiliateCode: Dispatch< SetStateAction< string > > }
) => {
	const [ formValue, setFormValue ] = useState( '' );
	const [ shortcode, setShortcode ] = useState( '' );
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
			<details className="cxn-advanced-settings">
				<summary className="cxn-advanced-settings-switch">
					高度な設定
					<Icon
						icon={ chevronDown }
						className="cxn-advanced-settings-icon"
						size={ 24 }
					/>
				</summary>
				<div className="cxn-advanced-settings-item">
					<TextControl
						className="cxn-advanced-settings-item-shortcode"
						label="ショートコードを任意の文字列に変更する"
						placeholder="例: アフィリエイトリンク1"
						help="分かりやすい値を設定しておくと便利です。日本語、数字、アルファベット、記号全て使用可能です。"
						value={ shortcode }
						onChange={ ( value ) => setShortcode( value ) }
					/>
				</div>
			</details>
		</>
	);
};
