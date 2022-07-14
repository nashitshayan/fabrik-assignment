import React, { useEffect } from 'react';
import ModelViewer from './Models/ModelViewer';
import models from './Models/importModels';
import { AiFillCloseCircle } from 'react-icons/ai';
function Card({ model, id, isClickHandler }) {
	const openModel = () => {
		isClickHandler(id);
	};
	return (
		<>
			<div className='card' onClick={openModel}>
				{model.name}
			</div>

			{model.isOpen && (
				<div className='model'>
					<AiFillCloseCircle className='close-model-icon' onClick={openModel} />

					<ModelViewer scale='50' modelPath={models[`${model.name}.glb`]} />
				</div>
			)}
		</>
	);
}

export default Card;
//<ModelViewer scale='50' modelPath={models[`${modelName}.glb`]} />
