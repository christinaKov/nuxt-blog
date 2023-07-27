<template>
	<v-card class="pa-4">
		<h3>{{ post.title }}</h3>
		<p>{{ post.preview }}</p>
		<NuxtLink :to="`/posts/${post.id}`">Read More</NuxtLink>
	</v-card>
</template>

<script setup>
const { post } = defineProps(["post"]);
</script>

<style scoped></style>
