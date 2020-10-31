import axios, { AxiosResponse } from 'axios';
import { subscriptionsMap } from '@/interfaces';

//TODO guebbit
const toFormData = (obj :any, form :FormData | null = null, namespace :string | null = null) => {
	var fd = form || new FormData(),
		formKey:string;
	for(var property in obj) {
		if(obj.hasOwnProperty(property)) {
			if(namespace)
				formKey = namespace + '[' + property + ']';
			else
				formKey = property;
			// if the property is an object, but not a File,
			// use recursivity.
			if(typeof obj[property] === 'object' && !(obj[property] instanceof File))
				toFormData(obj[property], fd, property);
			else
				// if it's a string or a File object
				fd.append(formKey, obj[property]);
		}
	}
	return fd;
}


export default{
	//TODO mettere motivazione loading, getAwait default: global, se no "specifico"
	setAwait: ({ commit } :any, [ wait, name ] :[ boolean, string ]) :void => {
		commit("setAwait", [ wait, name ]);
	},

	addSubscription: async ({} :any,  subscriptionData: subscriptionsMap ) :Promise<any> => {
		return axios.post(process.env.apiUrl+'api/associations', toFormData(subscriptionData))
			.then(({ data, status } :AxiosResponse) => {
				console.log("setSubscription OK", data);
				return {
					status,
					data,
				};
			})
			.catch(({ response }) => {
				if(!response)
					return;
				console.log("setSubscription ERROR", response);
				return {
					status: response.status,
					data: Object.values(response.data.errors),
				};
			})
	},
};
