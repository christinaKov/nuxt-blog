<template>
	<v-app>
		<v-container>
			<h2>{{ currentPost.title }}</h2>
			<a :href="currentPost.image" target="_blank">Open the photo</a>
			<p>{{ currentPost.description }}</p>
		</v-container>
	</v-app>
</template>
<script setup>
const { id } = useRoute().params;
definePageMeta({
	layout: "menu",
});
// Get APIs
const runtimeConfigs = useRuntimeConfig();
const { data: currentPost, pending } = await useFetch(
	`${runtimeConfigs.public.API_URL}/${id}`,
	{ key: id }
);
</script>

<style scoped></style>
