<template>
	<section id="partners" class="partner-section container d-flex justify-content-center flex-column mt-100">
		<h2 class="page-title mb-50 text-center">
			<span class="highlight1 white-text">Associazioni interessate</span>
		</h2>
		<div class="assoc-masonry">
			<div v-for="assoc in list" class="card text-center">
				<b-img
					v-if="assoc.hasOwnProperty('media') && Object.values(assoc.media).length > 0"
					class="img-fluid card-img-top"
					:src="Object.values(assoc.media)[0].MediaChunk.thumb800"
					:alt="Object.values(assoc.media)[0].alt"
					:title="Object.values(assoc.media)[0].title"
				/>
				<div class="card-body">
					<h5 class="card-title">{{ assoc.name }}</h5>
					<b-button v-if="assoc.website" :href="assoc.website" target="_blank" class="card-link m-3">Website</b-button>
				</div>
			</div>
		</div>

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
