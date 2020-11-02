<template>
	<section id="partners" class="contact-section container d-flex justify-content-center flex-column mt-100">
		<h2 class="page-title mb-50 text-center">
			<span class="highlight1 white-text">Associazioni interessate</span>
		</h2>
		<b-card-group columns>
			<div v-for="assoc in list" class="card">
				<b-img
					v-if="assoc.hasOwnProperty('media') && Object.values(assoc.media).length > 0"
					class="img-fluid card-img-top"
					:src="Object.values(assoc.media)[0].MediaChunk.thumb800"
					:alt="Object.values(assoc.media)[0].alt"
					:title="Object.values(assoc.media)[0].title"
				/>
				<div class="card-body">
					<h5 class="card-title">{{ assoc.name }}</h5>
					<b-button v-if="assoc.website" :href="assoc.website" class="card-link">Website</b-button>
				</div>
			</div>
		</b-card-group>

	</section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

const Component = Vue.extend({
	name: 'associations-list',
	props: {
		list: {
			type: Array,
			default: () => {
				return [];
			}
		} as PropOptions<any[]>,
	},
});

export default Component;
</script>
