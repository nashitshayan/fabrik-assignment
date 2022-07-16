const ProgressBar = ({ progress }) => {
	const Parentdiv = {
		height: '10px',
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		marginTop: '1em',
		position: 'absolute',
	};

	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: '#6c757d',
		borderRadius: 40,
		textAlign: 'right',
	};

	return (
		<div style={Parentdiv}>
			<div style={Childdiv}></div>
		</div>
	);
};

export default ProgressBar;
