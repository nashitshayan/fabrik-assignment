import '../styles/App.css';
import Nav from './Nav';
import Main from './Main';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import models from './Models/importModels';
const modelList = [
	{ name: 'P1', isOpen: false, url: models[`P1.glb`] },
	{ name: 'P2', isOpen: false, url: models[`P2.glb`] },
	{ name: 'P3', isOpen: false, url: models[`P3.glb`] },
	{ name: 'P4', isOpen: false, url: models[`P4.glb`] },
	{ name: 'P6', isOpen: false, url: models[`P6.glb`] },
	{ name: 'P7', isOpen: false, url: models[`P7.glb`] },
	{ name: 'P8', isOpen: false, url: models[`P8.glb`] },
	{ name: 'P9', isOpen: false, url: models[`P9.glb`] },
	{ name: 'P12', isOpen: false, url: models[`P12.glb`] },
	{ name: 'P13', isOpen: false, url: models[`P13.glb`] },
	{ name: 'P17', isOpen: false, url: models[`P17.glb`] },
	{ name: 'P18', isOpen: false, url: models[`P18.glb`] },
];
function App() {
	const [progess, setProgess] = useState(0);
	const [models, setModels] = useState(modelList);

	useEffect(() => {
		if (progess === 100) setProgess(0);
	}, [progess]);

	//get realtime model list from firestore
	useEffect(() => {
		onSnapshot(doc(db, 'files', '3d-models'), (doc) => {
			const data = doc.data();
			if (data) setModels(data.modelList);
		});
	}, []);

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
					const updatedModels = [
						{
							name: file.name,
							url: url,
							isOpen: false,
						},
						...models,
					];
					setToDB(updatedModels);
				});
			},
		);
	};
	const setToDB = async (data) => {
		//since data is an array and firestore expects an object
		data = { modelList: data };
		try {
			await setDoc(doc(db, 'files', '3d-models'), data, { merge: true });
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className='App'>
			<Nav uploadProgress={progess} uploadFileHandler={uploadFileHandler} />
			<Main models={models} isClickHandler={isClickHandler} />
		</div>
	);
}

export default App;
