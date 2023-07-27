<template>
	<v-pagination
		:value="currentPage"
		@update:modelValue="$emit('change', $event)"
		:length="totalPages"
	></v-pagination>
</template>

<script setup>
defineProps({
	totalPages: Number,
	currentPage: Number,
});

defineEmits(["change"]);
</script>

<style scoped></style>
