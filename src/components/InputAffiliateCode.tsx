import { chevronDown } from '@wordpress/icons';
import { Dispatch, SetStateAction, useEffect } from 'react';

import { Icon, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export const InputAffiliateCode = (
	props: {
		setAffiliateCode: Dispatch< SetStateAction< string > >
		setAdvancedShortcode: Dispatch< SetStateAction< string > >
		setAdvancedFunctionName: Dispatch< SetStateAction< string > >
	}
) => {
	const [ formValue, setFormValue ] = useState( '' );
	const [ shortcode, setShortcode ] = useState( '' );
	const [ functionName, setFunctionName ] = useState( '' );
	const { setAffiliateCode, setAdvancedShortcode, setAdvancedFunctionName } = props;

	useEffect( () => {
		setAffiliateCode( formValue );
	}, [ formValue, setAffiliateCode ] );

	useEffect( () => {
		setAdvancedShortcode( shortcode );
	}, [ shortcode, setAdvancedShortcode ] );

	useEffect( () => {
		setAdvancedFunctionName( functionName );
	}, [ functionName, setAdvancedFunctionName ] );

	return (
		<>
			<TextControl
				label="アフィリエイトコード"
				placeholder='例: <a href="https://example.com">example</a>'
				value={ formValue }
				onChange={ ( value ) => setFormValue( value ) }
			/>
			<details className="cxn-advanced-settings" open>
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
					<div className="cxn-advanced-settings-item-container">
						<TextControl
							className="cxn-advanced-settings-item-function-name-form"
							label="関数名を任意の文字列に変更する"
							placeholder="例: my_affiliate_link_1"
							help="関数名を変更したい場合入力してください。よくわからない場合は空欄のままにしておいてください。"
							value={ functionName }
							onChange={ ( value ) => setFunctionName( value ) }
						/>
						<div className="cxn-advanced-settings-item-function-name-point">
							<ul>
								<li>1文字目はアルファベット[A-Z][a-z]、アンダーバー[_]のみ使用可能</li>
								<li>2文字目以降は1文字目+数字[0-9]を使用可能</li>
								<li>数字始まりやアンダーバー以外の記号はNG</li>
								<li>日本語も使用できるが、基本的に使用しない方が良い</li>
							</ul>
						</div>
					</div>
				</div>
			</details>
		</>
	);
};
