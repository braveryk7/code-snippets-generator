export const ShowUsage = ( props: { characterString: string} ) => {
	const { characterString } = props;

	return (
		<>
			<h3>使用イメージ</h3>
			<p>現在[{ characterString }]は期間限定で30％オフです！</p>
		</>
	);
};
