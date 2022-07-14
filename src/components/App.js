import '../styles/App.css';
import ModelViewer from './Models/ModelViewer';
import models from './Models/importModels';
import Nav from './Nav';
import Main from './Main';
function App() {
	return (
		<div className='App'>
			<Nav />
			<Main />
		</div>
	);
}

export default App;

//<ModelViewer scale='50' modelPath={models['P3.glb']} />
