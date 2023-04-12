import { Dispatch, SetStateAction } from 'react';

import { useEffect, useState } from '@wordpress/element';

export const ShowPHPCode = ( props:
	{
		affiliateCode: string,
		PHPCode: string,
		setPHPCode: Dispatch< SetStateAction< string > >
		characterString: string,
		setCharacterString: Dispatch< SetStateAction< string > >
	} ) => {
	const [ currentNowDate, setCurrentNowData ] = useState( '' );
	const { affiliateCode, PHPCode, setPHPCode, characterString, setCharacterString } = props;

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
			const functionName = 'my_affiliate_link_' + currentNowDate;

			const isAnchor = affiliateCode.match( /<a.*>(.*)<\/a>/ );

			const getCharacterString = () => {
				if ( isAnchor ) {
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
	}, [ affiliateCode, setPHPCode, currentNowDate, characterString, setCharacterString ] );

	const copyToClipboard = ( e: React.MouseEvent<HTMLTextAreaElement, MouseEvent> ) => {
		const target = e.target as HTMLTextAreaElement;
		target.select();
		document.execCommand( 'copy' );
	};

	return (
		<>
			<label
				className="cxn-label"
				htmlFor="show-shortcode"
			>
				PHPコード
			</label>
			<textarea
				className="cxn-show-php"
				rows={ 7 }
				value={ PHPCode }
				readOnly
				onClick={ ( e ) => copyToClipboard( e ) }
			/>
		</>
	);
};
