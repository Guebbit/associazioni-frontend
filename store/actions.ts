import axios from 'axios';

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

	addSubscription: async ({ commit } :any,  subscriptionData: any ) :Promise<any> => {
		return axios.post(process.env.apiUrl+'subscriptions', toFormData(subscriptionData))
			.then(data => {
				console.log("setSubscription OK", data.data);
				commit("setSubscription", data.data);
				return data;
			})
			.catch(error => {
				if(!error)
					return;
				console.log("setSubscription ERROR", error.response.data.messages);
				return error.response.data.messages;
			})
	},
};
