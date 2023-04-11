import './scss/index.scss';

import { useState, createRoot } from '@wordpress/element';

import { InputAffiliateCode } from 'src/components/InputAffiliateCode';
import { ShowPHPCode } from 'src/components/ShowPHPCode';
import { ShowShortCode } from 'src/components/ShowShortCode';
import { ShowUsage } from 'src/components/ShowUsage';

const CodeSnippetsGenerator = () => {
	const [ affiliateCode, setAffiliateCode ] = useState( '' );
	const [ PHPCode, setPHPCode ] = useState( '' );
	const [ characterString, setCharacterString ] = useState( '' );
	return (
		<div>
			<h2>Code Snippetsリンク生成ツール</h2>
			<p>WordPressプラグインのCode Snippetsを使って主にアフィリエイトコード等のリンクを生成するツールです。</p>
			<p>以下の入力フォームにアフィリエイトコードをコピー&ペーストすると<code>function</code>から始まるPHPコードが出力されます。</p>
			<p>Code Snippetsに出力されたコードをペーストし保存するとWordPressで使用できるショートコードが使えるようになります。</p>
			<InputAffiliateCode
				setAffiliateCode={ setAffiliateCode }
			/>
			<ShowPHPCode
				affiliateCode={ affiliateCode }
				PHPCode={ PHPCode }
				setPHPCode={ setPHPCode }
				characterString={ characterString }
				setCharacterString={ setCharacterString }
			/>
			<ShowShortCode />
			<ShowUsage characterString={ characterString } />
		</div>
	);
};

const container = document.getElementById( 'code-snippets-generator' );
if ( container ) {
	const root = createRoot( container );
	root.render( <CodeSnippetsGenerator /> );
}
