export interface subscriptionsMap {
	assoc_name :string,
	assoc_website :string,
	assoc_keywords :string,
	assoc_logo? :FileList,
	assoc_cv? :FileList,
	ref_name :string,
	ref_email :string,
	ref_tel :string,
}


// store
export interface stateMap {
	//se il server sta svolgendo qualche tipo di operazione su cui è meglio non accavallarne altre finché non ha finito
	await: {
		[name :string] :boolean
	},
}
