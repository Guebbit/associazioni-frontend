import { stateMap } from '@/interfaces';

export default {
	debug: (state: stateMap) => {
		return state;
	},
	// LOADINGS
	getAwait: (state: stateMap) :boolean => {
		//TODO cerco se tra tutti gli ID c'è qualcosa di "true"
		return false;
	},
};
