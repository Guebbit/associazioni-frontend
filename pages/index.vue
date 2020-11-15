<template>
	<div id="landing-page">

		<div class="heroPanel2 centered with-shadow customBorders1 pb-50">
			<img id="castle-image" class="background" src="https://assets.guebbit.com/associazioni/images/castello-1.jpg" alt="">
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

		<section-contacts />

		<div class="heroPanel2 centered with-shadow customBorders1">
			<div class="borderTop inverted">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2284.311 108.75" xml:space="preserve">
					<polyline points="2284.311,108.75 1142.156,0 0,108.75 "/>
				</svg>
			</div>
			<img class="background" src="https://assets.guebbit.com/associazioni/images/portico-1.jpg" alt="">
		    <div class="panel-content">
		        <section-info class="mt-100 mb-100" />
		    </div>
			<div class="borderBottom">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2284.311 108.75" xml:space="preserve">
					<polyline points="2284.311,108.75 1142.156,0 0,108.75 "/>
				</svg>
			</div>
		</div>

		<section-assoc-list
			v-if="associations.length > 0"
			:list="associations"
			class="mb-50"
		/>




	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import sectionContacts from '@/components/Contatti.vue';
import sectionInfo from '@/components/Info.vue';
import assocForm from '@/components/Form.vue';
import sectionAssocList from '@/components/AssocList.vue';

import { associationMap } from '@/interfaces';

const Component = Vue.extend({
	name: 'Landing-page',
	async asyncData ({ params, error, payload, store }) {
		if(payload)
			return {
				associations: payload,
			};
		return store.dispatch("getAssociations").then(() => {
			return {
				associations: store.getters["getAssociations"] as associationMap[]
			};
		});
	},
	components: {
		assocForm,
		sectionContacts,
		sectionInfo,
		sectionAssocList,
	},
});

export default Component;
</script>

<style lang="scss">
@import '@/assets/scss/core';
@import '@/assets/scss/components/socialbutton1';
@import '@/assets/scss/components/blogpage2';
@import '@/assets/scss/components/customborders1';
@import '@/assets/scss/components/cssarrow1';

#landing-page{
	.heroPanel2{
		color: #fff;
		min-height: 100vh;
		svg{
			fill: #fff;
		}
		.v-stepper{
			background: transparent !important;
			box-shadow: none;
		}
		&.with-shadow:after{
			background: rgba(#000, 0.8);
		}
	}
	.page-title{
		@include media-breakpoint-down(sm) {
			font-size: 1.5rem;
		}
	}

	.subscription-section{
		@include media-breakpoint-down(md) {
			.form-group{
				margin-bottom: 0;
			}
		}
		@include media-breakpoint-down(sm) {
			.page-title{
				font-size: 2rem;
			}
		}
	}
	.blog-section{
		background-color: rgba(#fff, 0.8);
	}

	.partner-section{
		.card-columns{
			@include media-breakpoint-down(sm) {
				-moz-column-count: 2;
				column-count: 2;
				-webkit-column-gap: 1.25rem;
				-moz-column-gap: 1.25rem;
				grid-column-gap: 1.25rem;
				column-gap: 1.25rem;
				orphans: 1;
				widows: 1;
			}
		}
	}
}
/*
#castle-image{
	filter: blur(5px);
	-webkit-filter: blur(5px);
}
*/


.page-description{
	font-size: 1.2em;
}

</style>
