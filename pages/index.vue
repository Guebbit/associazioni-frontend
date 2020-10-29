<template>
	<div id="landing-page">


		<div class="heroPanel2 full-height centered">
			<img class="background" src="https://placehold.it/1920x1080" alt="">
		    <div class="panel-content">
		        <div>
		            <assoc-form/>
		        </div>
		    </div>
		</div>



		<section-contacts />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import sectionContacts from '@/components/Contatti.vue';
import assocForm from '@/components/Form.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCalendar);

const Component = Vue.extend({
	name: 'Landing-page',
	components: {
		assocForm,
		sectionContacts,
		FontAwesomeIcon,
	},
	computed: {
		...mapGetters({
			loading: 'getAwait',
		}),
	},
	methods: {
		...mapActions({
			setLoading: 'setAwait',
		}),
	},
});

export default Component;
</script>

<style lang="scss">
@import '@/assets/scss/core';
@import '@/assets/scss/components/socialbutton1';

#landing-page{
	margin-bottom: 50px;
}
</style>
