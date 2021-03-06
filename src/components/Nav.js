import { useRef } from 'react';
import logo from '../images/fabrik_full_logo.png';
import ProgressBar from './ProgressBar';
function Nav({ uploadFileHandler, uploadProgress }) {
	const hiddenFileInput = useRef(null);
	const handleClick = (e) => {
		hiddenFileInput.current.click();
	};
	const handleChange = (e) => {
		const fileUploaded = e.target.files[0];
		uploadFileHandler(fileUploaded);
	};

	return (
		<nav>
			<div>
				<img src={logo} alt='logo' className='logo' />
			</div>
			<div style={{ position: 'relative' }}>
				<button className='btn-upload-model' onClick={handleClick}>
					Upload 3D Model
				</button>
				{uploadProgress > 0 && <ProgressBar progress={uploadProgress} />}
				<input
					type='file'
					ref={hiddenFileInput}
					onChange={handleChange}
					style={{ display: 'none' }}
				/>
			</div>
		</nav>
	);
}

export default Nav;
