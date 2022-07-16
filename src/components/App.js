import '../styles/App.css';
import Nav from './Nav';
import Main from './Main';
import { storage } from '../firebase';
import {
	ref,
	uploadBytesResumable,
	getDownloadURL,
	getBytes,
} from '@firebase/storage';
import { useEffect, useState } from 'react';
const modelList = [
	{ name: 'P1', isOpen: false },
	{ name: 'P2', isOpen: false },
	{ name: 'P3', isOpen: false },
	{ name: 'P4', isOpen: false },
	{ name: 'P6', isOpen: false },
	{ name: 'P7', isOpen: false },
	{ name: 'P8', isOpen: false },
	{ name: 'P9', isOpen: false },
	{ name: 'P12', isOpen: false },
	{ name: 'P13', isOpen: false },
	{ name: 'P17', isOpen: false },
	{ name: 'P18', isOpen: false },
];
function App() {
	const [progess, setProgess] = useState(0);
	const [models, setModels] = useState(modelList);
	//const [modelList, setModelList]= useState(modelList)
	const isClickHandler = (id) => {
		setModels((oldModels) =>
			oldModels.map((model, index) => {
				if (id === index) return { ...model, isOpen: !model.isOpen };
				return model;
			}),
		);
	};
	const uploadFileHandler = (file) => {
		console.log('file', file);
		if (!file) return;
		const storageRef = ref(storage, `/files/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgess(progess);
			},
			(err) => {
				alert(err);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					setModels((oldModels) => [
						...oldModels,
						{
							name: file.name,
							url: url,
							isOpen: false,
						},
					]);
				});
			},
		);
	};

	// useEffect(() => {
	// 	const listRef = ref(storage, '/files/P6.glb');
	// 	getBytes(listRef).then((res) => console.log(res));
	// }, []);
	//uploadFileHandler={uploadFileHandler}
	return (
		<div className='App'>
			<Nav uploadProgress={progess} uploadFileHandler={uploadFileHandler} />
			<Main models={models} isClickHandler={isClickHandler} />
		</div>
	);
}

export default App;
