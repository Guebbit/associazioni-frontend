<template>
	<section class="subscription-section container d-flex justify-content-center flex-column mb-50 mt-50">
		<h3 class="page-subtitle text-primary text-center">Associazioni di Carpi</h3>
		<p class="page-description text-center mb-50">Iscrivi la tua associazione. Affrontiamo un nuovo mondo con nuovi mezzi</p>
		<b-form
			v-if="!form_success && showForm"
			@submit.prevent="onFormSubmit"
			@reset.prevent="onFormReset"
		>
			<div class="row">
				<div class="col-12 col-md-6">
					<b-form-group
						label="Nome associazione"
						label-for="form-input-assocname"
						description="Nome completo ufficiale dell'associazione"
					>
						<b-form-input
							id="form-input-assocname"
							v-model="form.assoc_name"
							required
						/>
					</b-form-group>
				</div>
				<div class="col-12 col-md-6">
					<b-form-group
						label="URL sito web"
						label-for="form-input-assocwebsite"
						description="Avete un sito web? (facoltativo)"
					>
						<b-form-input
							id="form-input-assocwebsite"
							v-model="form.assoc_website"
						/>
					</b-form-group>
				</div>

				<div class="col-12 col-md-6">
					<b-form-group
						label="Parole chiave"
						label-for="form-input-assockeywords"
						description="Qualche parola chiave che identificano l'associazione o i suoi obbiettivi (facoltativo)"
					>
						<b-form-input
							id="form-input-assockeywords"
							v-model="form.assoc_keywords"
						/>
					</b-form-group>
				</div>
				<div class="col-6 col-md-3">
					<b-form-group
						label="Logo associazione"
						label-for="form-input-assoclogo"
						description="Mandami il logo. Preferibilmente in vettoriale"
					>
						<b-form-file
							id="form-input-assoclogo"
							v-model="form.assoc_logo"
							:state="Boolean(form.assoc_logo)"
							placeholder="..."
							drop-placeholder="Lancia qui il logo!"
						/>
					</b-form-group>
				</div>
				<div class="col-6 col-md-3">
					<b-form-group
						label="CV associazione"
						label-for="form-input-assoccv"
						description="Datemi qualche dettaglio di voi (facoltativo)"
					>
						<b-form-file
							id="form-input-assoccv"
							v-model="form.assoc_cv"
							:state="Boolean(form.assoc_cv)"
							placeholder="..."
							drop-placeholder="Lancia qui il documento!"
						/>
					</b-form-group>
				</div>
			</div>
			<hr />
			<div class="row">
				<div class="col-12 col-md-6 col-lg-4">
					<b-form-group
						label="Nome referente"
						label-for="form-input-refname"
						description="Un portavoce dell'associazione"
					>
						<b-form-input
							id="form-input-refname"
							v-model="form.ref_name"
						/>
					</b-form-group>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<b-form-group
						label="Mail del referente"
						label-for="form-input-refemail"
						description="Un portavoce dell'associazione"
					>
						<b-form-input
							id="form-input-refemail"
							v-model="form.ref_email"
							type="email"
							required
						/>
					</b-form-group>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<b-form-group
						label="Telefono del referente"
						label-for="form-input-assoctel"
						description="Contatto telefonico (facoltativo)"
					>
						<b-form-input
							id="form-input-assoctel"
							v-model="form.ref_tel"
							type="tel"
						/>
					</b-form-group>
				</div>
			</div>
			<hr />
			<div class="d-flex justify-content-center">
				<b-form-group style="max-width: 600px;">
					<b-form-checkbox-group v-model="form.checked" required>
						<!-- TODO $t -->
						<b-form-checkbox value="privacy">
							Preso atto dell'informativa <a target='_blank' href='https://www.garanteprivacy.it/documents/10160/0/Regolamento+UE+2016+679.+Arricchito+con+riferimenti+ai+Considerando+Aggiornato+alle+rettifiche+pubblicate+sulla+Gazzetta+Ufficiale++dell%27Unione+europea+127+del+23+maggio+2018'>Privacy art. 13 Reg. UE 679/2016</a> autorizzo il trattamento dei dati di cui al presente modulo di contatto per i fini e le modalità indicate nell'informativa
						</b-form-checkbox>
					</b-form-checkbox-group>
				</b-form-group>
			</div>
			<div class="text-center mt-5">
				<b-button type="submit" variant="primary" size="lg">Sì, voglio partecipare!</b-button>
			</div>
		</b-form>

		<template v-if="form_success">
			<b-card
				class="mt-5 mb-5"
				border-variant="secondary"
		        header-bg-variant="secondary"
		        header-text-variant="white"
		        align="center"
				:header="'Iscrizione terminata con successo!'"
			>
				<b-card-text class="text-dark">
					Vi ringraziamo <b>{{ form.assoc_name ? form.assoc_name : this.storagedAssocname }}</b> per l'iscrizione, verrete tenuti aggiornati sull'andamento del progetto!
				</b-card-text>
				<b-button @click="storageReset">
					Iscrivi un'altra associazione
				</b-button>
			</b-card>
		</template>

	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faVideo);

const Component = Vue.extend({
	name: 'assoc-subscription',
	components: {
		FontAwesomeIcon
	},
	data() {
		return {
			form_success: false as boolean,
			form: {
				assoc_name: '' as string,
				assoc_website: '' as string,
				assoc_keywords: '' as string,
				assoc_logo: null as FileList | null,
				assoc_cv: null as FileList | null,
				ref_name: '' as string,
				ref_email: '' as string,
				ref_tel: '' as string,
				checked: [] as boolean[],
			},
			showForm: true as boolean
		}
	},
	computed: {
		...mapGetters({
			loading: 'getAwait',
		}),
		storagedAssocname() :string | null {
			if(typeof window === 'undefined')
				return null;
			return localStorage.getItem('subscription-assocname');
		},
	},
	methods: {
		...mapActions({
			setLoading: 'setAwait',
			subscribe: 'addSubscription',
		}),
		onFormSubmit() :void {
			this.setLoading([true, 'subscription']);
			this.subscribe({
				assoc_name: this.form.assoc_name,
				assoc_website: this.form.assoc_website,
				assoc_keywords: this.form.assoc_keywords,
				assoc_logo: this.form.assoc_logo,
				assoc_cv: this.form.assoc_cv,
				ref_name: this.form.ref_name,
				ref_email: this.form.ref_email,
				ref_tel: this.form.ref_tel,
			}).then(({ status, data }) => {
				this.setLoading([false, 'subscription']);
				if(status === 200){
					this.form_success=true;
					localStorage.setItem('subscription-assocname', this.form.assoc_name);
				}else{
					for(let i :number = data.length; i--; )
						//@ts-ignore
						this.$bvToast.toast(data[i], {
							title: 'Errore',
							autoHideDelay: 5000,
							variant: 'danger'
				        })
				}

			});
		},
		onFormReset() :void {
			// Reset our form values
			this.form.assoc_name = '';
			this.form.assoc_website = '';
			this.form.assoc_keywords = '';
			this.form.assoc_logo = null;
			this.form.assoc_cv = null;
			this.form.ref_name = '';
			this.form.ref_email = '';
			this.form.ref_tel = '';
			this.form.checked = [];
			// Trick to reset/clear native browser form validation state
			this.showForm = false;
			this.$nextTick(() => {
				this.showForm = true;
			})
		},
		storageReset() :void {
			localStorage.removeItem('subscription-assocname');
			this.onFormReset();
			this.form_success = false;
		},
	},
	mounted(){
		// l'utente ha già pagato in una sessione precedente
		if(this.storagedAssocname)
			this.form_success = true;
	},
});


export default Component;
</script>
