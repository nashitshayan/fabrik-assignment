/**
 *
 *  Taken from here : https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
 */

function importAll(r) {
	let mdls = {};
	r.keys().map((item) => (mdls[item.replace('./', '')] = r(item)));
	return mdls;
}
const models = importAll(require.context('../../3d-models', false, /\.(glb)$/));
export default models;
