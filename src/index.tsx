import { render } from '@wordpress/element';

const CodeSnippetsGenerator = () => {
	return (
		<div>
			<h2>Code Snippetsリンク生成ツール</h2>
			<p>WordPressプラグインのCode Snippetsを使って主にアフィリエイトコード等のリンクを生成するツールです。</p>
			<p>以下の入力フォームにアフィリエイトコードをコピー&ペーストすると<code>function</code>から始まるPHPコードが出力されます。</p>
			<p>Code Snippetsに出力されたコードをペーストし保存するとWordPressで使用できるショートコードが使えるようになります。</p>
		</div>
	);
};

render( <CodeSnippetsGenerator />, document.getElementById( 'code-snippets-generator' ) );
