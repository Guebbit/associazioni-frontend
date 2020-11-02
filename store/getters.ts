import { stateMap, associationMap } from '@/interfaces';

export default {
	debug: (state: stateMap) => {
		return state;
	},
	// LOADINGS
	getAwait: (state: stateMap) :boolean => {
		//TODO cerco se tra tutti gli ID c'è qualcosa di "true"
		return false;
	},
	getAssociation: (state: stateMap) => (assoc_id: string) :associationMap | boolean => {
		if(!state.associations.hasOwnProperty(assoc_id))
			return false;
		return state.associations[assoc_id];
	},
	//in ordine dal più nuovo
	getAssociations: (state: stateMap) :associationMap[] => {
		return Object.values(state.associations);
		/*
		return Object.values(state.associations).sort(({ data_start: a } :associationMap, { data_start: b } :associationMap) => {
			return new Date(b).getTime() - new Date(a).getTime();
		});
		*/
	},
};
