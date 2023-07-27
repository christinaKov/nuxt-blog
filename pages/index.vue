<template>
	<v-app>
		<v-container>
			<h1 class="text-center">My blog posts</h1>

			<!-- Post cards -->
			<v-row v-if="posts" class="pa-4">
				<v-col v-for="post in currentPosts" :key="post.id" cols="12">
					<PostCard :post="post"></PostCard>
				</v-col>
			</v-row>

			<!-- Pagination -->
			<Pagination
				:totalPages="totalPages"
				:currentPage="currentPage"
				@update:modelValue="handlePage"
			></Pagination>
		</v-container>
	</v-app>
</template>

<script setup>
// Handle pagination
const postsPerPage = 10;
const currentPage = ref(1);
const handlePage = (newPage) => {
	currentPage.value = newPage;
};

// Get APIs
const runtimeConfigs = useRuntimeConfig();
const { data: posts, pending } = await useFetch(runtimeConfigs.public.API_URL, {
	key: currentPage.toString(),
	refreshOnUpdated: true,
});

// Count pages needed
const startIndex = computed(() => (currentPage.value - 1) * postsPerPage);
const endIndex = computed(() => currentPage.value * postsPerPage);

const totalPages = computed(() =>
	Math.ceil(posts._rawValue.length / postsPerPage)
);

const currentPosts = computed(() =>
	posts._rawValue.length > 0
		? posts._rawValue.slice(startIndex.value, endIndex.value)
		: []
);
</script>
