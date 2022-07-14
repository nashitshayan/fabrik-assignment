import logo from '../images/fabrik_full_logo.png';
function Nav() {
	return (
		<nav>
			<div>
				<img src={logo} alt='logo' className='logo' />
			</div>
			<div>
				<button className='btn-upload-model'>Upload 3D Model</button>
			</div>
		</nav>
	);
}

export default Nav;
