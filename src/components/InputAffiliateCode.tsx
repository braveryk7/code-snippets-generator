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
	const [ validationMessage, setValidationMessage ] = useState( '' );
	const { setAffiliateCode, setAdvancedShortcode, setAdvancedFunctionName } = props;

	useEffect( () => {
		setAffiliateCode( formValue );
	}, [ formValue, setAffiliateCode ] );

	useEffect( () => {
		setAdvancedShortcode( shortcode );
	}, [ shortcode, setAdvancedShortcode ] );

	useEffect( () => {
		if ( functionName ) {
			setValidationMessage( '' );

			switch ( true ) {
				case ! functionName.match( /^[a-zA-Z_]/ ):
					setValidationMessage( '関数名はアルファベット、もしくはアンダーバーで始めてください。' );
					break;
				case ! functionName.match( /^[a-zA-Z0-9_]+$/ ):
					setValidationMessage( '関数名はアルファベット、数字、アンダーバーで構成してください。' );
					break;
				default:
					setValidationMessage( '' );
			}
		} else {
			setValidationMessage( '' );
		}

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
					<div className="cxn-advanced-settings-item-container">
						<TextControl
							className="cxn-advanced-settings-item-shortcode"
							label="ショートコードを任意の文字列に変更する"
							placeholder="例: アフィリエイトリンク1"
							help="分かりやすい値を設定しておくと便利です。空欄の場合、自動生成されます。"
							value={ shortcode }
							onChange={ ( value ) => setShortcode( value ) }
						/>
						<div className="cxn-advanced-settings-item-shortcode-point">
							<ul>
								<li>日本語（ひらがな・カタカナ・漢字）、英数字、記号全て使用可能</li>
							</ul>
						</div>
					</div>
					<div className="cxn-advanced-settings-item-container">
						<div className="cxn-advanced-settings-item-function-name-container">
							<TextControl
								className="cxn-advanced-settings-item-function-name-form"
								label="関数名を任意の文字列に変更する"
								placeholder="例: my_affiliate_link_1"
								help="関数名を変更したい場合入力してください。よくわからない場合は空欄のままにしておいてください。"
								value={ functionName }
								onChange={ ( value ) => setFunctionName( value ) }
							/>
							<span className="cxn-advanced-settings-item-function-name-validation">
								{ validationMessage }
							</span>
						</div>
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
