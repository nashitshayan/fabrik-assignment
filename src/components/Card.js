import React from 'react';
import ModelViewer from './Models/ModelViewer';
import models from './Models/importModels';
import { BiRightArrow, BiDownArrow } from 'react-icons/bi';
function Card({ model, id, isClickHandler }) {
	const openModel = () => {
		isClickHandler(id);
	};
	return (
		<>
			<div className='card' onClick={openModel}>
				{model.name}
				{model.isOpen ? (
					<BiDownArrow className='arrow-icon' />
				) : (
					<BiRightArrow className='arrow-icon' />
				)}
			</div>

			{model.isOpen && (
				<div className='model'>
					<ModelViewer scale='50' modelPath={models[`${model.name}.glb`]} />
				</div>
			)}
		</>
	);
}

export default Card;
//<ModelViewer scale='50' modelPath={models[`${modelName}.glb`]} />
