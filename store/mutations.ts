import Vue from 'vue';
import { stateMap, associationMap } from '@/interfaces';

export default {
	setAwait: (state :stateMap, [ wait, name ] :[ boolean, string ]) :void => {
		state.await[name] = wait;
	},
	setAssociation: (state :stateMap, associationData :associationMap) :void => {
		Vue.set(
			state.associations,
			associationData.id,
			associationData
		);
	},
};
