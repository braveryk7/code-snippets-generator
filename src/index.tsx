import './scss/index.scss';

import { useState, createRoot } from '@wordpress/element';

import { InputAffiliateCode } from 'src/components/InputAffiliateCode';
import { ShowPHPCode } from 'src/components/ShowPHPCode';
import { ShowShortCode } from 'src/components/ShowShortCode';
import { ShowUsage } from 'src/components/ShowUsage';
import { TimelineItem } from 'src/components/layout/TimelintItem';

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
			<div className="cxn-timeline">
				<TimelineItem itemNumber={ 1 } itemHeading="アフィリエイトコードを入力">
					<InputAffiliateCode
						setAffiliateCode={ setAffiliateCode }
					/>
				</TimelineItem>
				<TimelineItem itemNumber={ 2 } itemHeading="PHPコード">
					<ShowPHPCode
						affiliateCode={ affiliateCode }
						PHPCode={ PHPCode }
						setPHPCode={ setPHPCode }
						characterString={ characterString }
						setCharacterString={ setCharacterString }
					/>
				</TimelineItem>
				<TimelineItem itemNumber={ 3 } itemHeading="ショートコード">
					<ShowShortCode characterString={ characterString } />
				</TimelineItem>
			</div>
			<ShowUsage characterString={ characterString } />
		</div>
	);
};

const container = document.getElementById( 'code-snippets-generator' );
if ( container ) {
	const root = createRoot( container );
	root.render( <CodeSnippetsGenerator /> );
}
