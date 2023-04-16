export const copyToClipboard = (
	selector: keyof HTMLElementTagNameMap,
	copyFormButtonName: 'cxn-copy-php-button' | 'cxn-copy-shortcode-button',
	e?: React.MouseEvent<HTMLElement, MouseEvent>,
) => {
	const target = e
		? e.target as HTMLTextAreaElement
		: document.querySelector( selector ) as HTMLTextAreaElement;
	navigator.clipboard.writeText( target.value );

	if ( copyFormButtonName ) {
		const formId = document.getElementById( copyFormButtonName );
		if ( formId ) {
			formId.classList.add( 'cxn-copied' );
			formId.textContent = 'コピーしました';
		}
	}

	const removeCxnCopiedClass = (): void => {
		const elements = document.querySelectorAll<HTMLElement>( '.cxn-copied' );

		if ( elements.length > 0 ) {
			elements.forEach( ( element: HTMLElement & { timeout?: number } ) => {
				if ( element.timeout ) {
					clearTimeout( element.timeout );
				}
				window.setTimeout( () => {
					element.textContent = 'コピーする';
					element.classList.remove( 'cxn-copied' );
				}, 2000 );
			} );
		}
	};

	removeCxnCopiedClass();
};
