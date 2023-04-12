export const copyToClipboard = (
	selector: keyof HTMLElementTagNameMap,
	e?: React.MouseEvent<HTMLElement, MouseEvent>,
) => {
	const target = e
		? e.target as HTMLTextAreaElement
		: document.querySelector( selector ) as HTMLTextAreaElement;
	navigator.clipboard.writeText( target.value );
};
