<template>
	<div id="landing-page">

		<div class="heroPanel2 centered with-shadow customBorders1">
			<img class="background" src="http://assets.guebbit.com/associazioni/images/wallpaper.jpg" alt="">
		    <div class="panel-content">
		        <div>
		            <assoc-form/>
		        </div>
		    </div>
			<div class="borderBottom">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2284.311 108.75" xml:space="preserve">
					<polyline points="2284.311,108.75 1142.156,0 0,108.75 "/>
				</svg>
			</div>
		</div>

		<section-info />

		<section-contacts />

	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import sectionContacts from '@/components/Contatti.vue';
import sectionInfo from '@/components/Info.vue';
import assocForm from '@/components/Form.vue';

const Component = Vue.extend({
	name: 'Landing-page',
	components: {
		assocForm,
		sectionContacts,
		sectionInfo,
	},
});

export default Component;
</script>

<style lang="scss">
@import '@/assets/scss/core';
@import '@/assets/scss/components/socialbutton1';
@import '@/assets/scss/components/blogpage2';
@import '@/assets/scss/components/customborders1';

#landing-page{
	margin-bottom: 50px;
	.heroPanel2{
		color: #fff;
		min-height: 100vh;
		svg{
			fill: #fff;
		}
		&.with-shadow:after{
			background: rgba(#000, 0.8);
		}
	}
}

.page-description{
	font-size: 1.2em;
}

</style>
