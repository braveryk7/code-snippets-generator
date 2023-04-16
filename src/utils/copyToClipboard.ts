export const copyToClipboard = (
	selector: keyof HTMLElementTagNameMap,
	copyFormName: 'cxn-show-php' | 'cxn-show-shortcode',
	e?: React.MouseEvent<HTMLElement, MouseEvent>,
) => {
	const target = e
		? e.target as HTMLTextAreaElement
		: document.querySelector( selector ) as HTMLTextAreaElement;
	navigator.clipboard.writeText( target.value );

	if ( copyFormName ) {
		const formId = document.getElementById( copyFormName );
		if ( formId ) {
			formId.classList.add( 'cxn-copied' );
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
					element.classList.remove( 'cxn-copied' );
				}, 2000 );
			} );
		}
	};

	removeCxnCopiedClass();
};
