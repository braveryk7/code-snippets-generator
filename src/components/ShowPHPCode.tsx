import { Dispatch, SetStateAction } from 'react';

import { Button } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

import { copyToClipboard } from 'src/utils/copyToClipboard';

export const ShowPHPCode = ( props:
	{
		affiliateCode: string,
		advancedShortcode: string,
		advancedFunctionName: string
		PHPCode: string,
		setPHPCode: Dispatch< SetStateAction< string > >
		characterString: string,
		setCharacterString: Dispatch< SetStateAction< string > >
	} ) => {
	const [ currentNowDate, setCurrentNowData ] = useState( '' );
	const {
		affiliateCode,
		advancedShortcode,
		advancedFunctionName,
		PHPCode,
		setPHPCode,
		characterString,
		setCharacterString,
	} = props;

	const formId = 'cxn-show-php';
	const buttonId = 'cxn-copy-php-button';

	const getNowDate = () => {
		const now = new Date();
		const year = now.getFullYear();
		const month = now.getMonth() + 1;
		const day = now.getDate();
		const hour = now.getHours();
		const minute = now.getMinutes();
		const second = now.getSeconds();
		setCurrentNowData( `${ year }${ month }${ day }_${ hour }${ minute }${ second }` );
	};

	useEffect( () => {
		getNowDate();
	}, [] );

	useEffect( () => {
		const createPHPCode = ( value: string ) => {
			const functionName = advancedFunctionName || `my_affiliate_link_${ currentNowDate }`;

			const isAnchor = affiliateCode.match( /<a.*>(.*)<\/a>/ );

			const getCharacterString = () => {
				if ( advancedShortcode ) {
					setCharacterString( advancedShortcode );
				} else if ( isAnchor ) {
					setCharacterString( isAnchor[ 1 ] || `affiliate_link_${ currentNowDate }` );
				} else {
					setCharacterString( `link_${ currentNowDate }` );
				}
			};

			getCharacterString();

			const defaultCode =
				`function ${ functionName }() {` + '\n' +
				`	return '${ value }';` + '\n' +
				'}' + '\n' +
				`add_shortcode('${ characterString }', '${ functionName }');`;
			setPHPCode( defaultCode );
		};

		createPHPCode( affiliateCode );
	}, [ affiliateCode,
		advancedShortcode,
		advancedFunctionName,
		setPHPCode, currentNowDate,
		characterString,
		setCharacterString,
	] );

	return (
		<>
			<div className="cxn-form-header-wrapper">
				<label
					className="cxn-label"
					htmlFor={ formId }
				>
					PHPコード
				</label>
				<Button
					id="cxn-copy-php-button"
					className="cxn-copy"
					variant="secondary"
					onClick={
						( ) => copyToClipboard(
							'.cxn-show-php' as keyof HTMLElementTagNameMap,
							buttonId
						)
					}
				>
					コピーする
				</Button>
			</div>
			<textarea
				id={ formId }
				className="cxn-show-php"
				rows={ 7 }
				value={ PHPCode }
				readOnly
				onClick={
					( e ) => copyToClipboard( '' as keyof HTMLElementTagNameMap, buttonId, e )
				}
			/>
		</>
	);
};
