<template>
	<section id="contacts" class="contact-section container d-flex justify-content-center flex-column mt-100 mb-50">
		<h2 class="page-title mb-30 text-center">
			<span class="highlight1 white-text">Contatti</span>
		</h2>

		<div class="d-flex justify-content-center flex-wrap">

			<a v-for="member in members" class="teamCard1" href="#">
				<div class="card-image">
					<span><img :src="member.avatar" alt=""></span>
				</div>
				<div class="card-body">
					<h3 class="card-title">
						{{ member.name }}
						<span>{{ member.role }}</span>
					</h3>
				</div>
				<div class="card-action">
					<b-button
						class="justify-content-center align-items-between m-1"
						:href="'mailto:'+member.email" target="_blank"
					>
						<font-awesome-icon class="mr-2" :icon="['fas', 'envelope']" />
						{{ member.email }}
					</b-button>
					<b-button
						class="justify-content-center align-items-between m-1"
						:href="'tel:'+member.tel" target="_blank"
					>
						<font-awesome-icon class="mr-2" :icon="['fab', 'whatsapp']" />
						{{ member.tel }}
					</b-button>
				</div>
			</a>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEnvelope, faPhone, faFacebook, faInstagram, faWhatsapp);

const Component = Vue.extend({
	name: 'contacts',
	components: {
		FontAwesomeIcon,
	},
	data() {
		return {
			members: [
				{
					name: 'Dhansaw Vittorio Rambaran',
					role: 'Founder',
					avatar: 'https://assets.guebbit.com/associazioni/images/team-vitto-1.jpg',
					tel: '320 345 5747',
					email: 'vittorio.r@mangabeats.it',
				},
				{
					name: 'Andrea Guerzoni',
					role: 'Web Developer',
					avatar: 'https://assets.guebbit.com/associazioni/images/team-guerzo-1.jpg',
					tel: '331 439 2121',
					email: 'guerzoni.andrea91@gmail.com',
				},
			]
		}
	},
});

export default Component;
</script>
