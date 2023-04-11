import { useState, createRoot } from '@wordpress/element';

import { InputAffiliateCode } from 'src/components/InputAffiliateCode';
import { ShowPHPCode } from 'src/components/ShowPHPCode';

import './scss/index.scss';

const CodeSnippetsGenerator = () => {
	const [ affiliateCode, setAffiliateCode ] = useState( '' );
	return (
		<div>
			<h2>Code Snippetsリンク生成ツール</h2>
			<p>WordPressプラグインのCode Snippetsを使って主にアフィリエイトコード等のリンクを生成するツールです。</p>
			<p>以下の入力フォームにアフィリエイトコードをコピー&ペーストすると<code>function</code>から始まるPHPコードが出力されます。</p>
			<p>Code Snippetsに出力されたコードをペーストし保存するとWordPressで使用できるショートコードが使えるようになります。</p>
			<InputAffiliateCode
				setAffiliateCode={ setAffiliateCode }
			/>
			<ShowPHPCode affiliateCode={ affiliateCode } />
		</div>
	);
};

const container = document.getElementById( 'code-snippets-generator' );
if ( container ) {
	const root = createRoot( container );
	root.render( <CodeSnippetsGenerator /> );
}
