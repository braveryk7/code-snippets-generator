import { useEffect, useState } from '@wordpress/element';

export const ShowPHPCode = ( props: { affiliateCode: string } ) => {
	const [ PHPCode, setPHPCode ] = useState( '' );
	const [ currentNowDate, setCurrentNowData ] = useState( '' );
	const { affiliateCode } = props;

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

			const characterString = () => {
				if ( isAnchor ) {
					return isAnchor[ 1 ] || `affiliate_link_${ currentNowDate }`;
				}
				return `link_${ currentNowDate }`;
			};

			const defaultCode =
				`function ${ functionName }() {` + '\n' +
				`	return '${ value }';` + '\n' +
				'}' + '\n' +
				`add_shortcode('${ characterString() }', '${ functionName }');`;
			setPHPCode( defaultCode );
		};

		createPHPCode( affiliateCode );
	}, [ affiliateCode, currentNowDate ] );

	const copyToClipboard = ( e: React.MouseEvent<HTMLTextAreaElement, MouseEvent> ) => {
		const target = e.target as HTMLTextAreaElement;
		target.select();
		document.execCommand( 'copy' );
	};

	return (
		<>
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
