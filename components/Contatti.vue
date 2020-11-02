<template>
	<section id="contacts" class="contact-section container d-flex justify-content-center flex-column mt-100 mb-50">
		<div class="contact-info text-center">
			<h2 class="page-title mb-30">
				<span class="highlight1 white-text">Contatti</span>
			</h2>
			<p class="page-description mb-3">Per dubbi o domande, contattami!</p>
			<div class="d-flex justify-content-center align-items-center">
				<a :href="'mailto:'+$t('info.email')" target="_blank" class="socialButton1 observer-activate-once">
					<font-awesome-icon :icon="['fas', 'envelope']" />
				</a>
				<a :href="'tel:'+$t('info.tel').replace(' ', '')" target="_blank" class="socialButton1 whatsapp observer-activate-once">
					<font-awesome-icon :icon="['fab', 'whatsapp']" />
				</a>
			</div>
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
	}
});

export default Component;
</script>
