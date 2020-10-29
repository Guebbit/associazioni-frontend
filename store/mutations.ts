import { stateMap } from '@/interfaces';

export default {
	setAwait: (state :stateMap, [ wait, name ] :[ boolean, string ]) :void => {
		state.await[name] = wait;
	},
};
