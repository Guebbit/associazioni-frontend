<template>
	<div class="text-center">Forbidden</div>
</template>

<script lang="ts">
import Vue from 'vue'

const Component = Vue.extend({
	name: 'landing-page',
	beforeRouteEnter (to, from, next) {
		next("/signup");
	},
});

export default Component;
</script>
