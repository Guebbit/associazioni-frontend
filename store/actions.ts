import axios, { AxiosResponse } from 'axios';
import { subscriptionMap } from '@/interfaces';

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

	addAssociation: async ({} :any,  subscriptionData: subscriptionMap ) :Promise<any> => {
		return axios.post(process.env.apiUrl+'api/associations', toFormData(subscriptionData))
			.then(({ data, status } :AxiosResponse) :any => {
				console.log("setSubscription OK", data);
				return {
					status,
					data,
				};
			})
			.catch(({ response, request }) :any => {
				//console.log("setSubscription ERROR", response, request);
				if(response)
					return {
						status: response.status,
						data: Object.values(response.data.errors),
					};
				// client never received a response, or request never left
				if(request)
					return {
						status: 500,
						data: ['unknown'],
					};
				// anything else
				return {
					status: 500,
					data: ['unknown'],
				};
			})
	},

	getAssociations: async ({ commit } :any ) :Promise<any> => {
		return axios.get(process.env.apiUrl+'api/associations').then(({ data } :AxiosResponse ) => {
			for(let i :number = data.length; i--; )
				commit("setAssociation", data[i]);
			return data;
		})
	},
};
