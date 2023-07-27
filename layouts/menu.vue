<template>
	<v-app>
		<!-- Верхняя часть макета с навигацией -->
		<v-container>
			<v-row>
				<v-col>
					<nuxt-link to="/">Return to main</nuxt-link>
				</v-col>
			</v-row>
		</v-container>
		<v-main>
			<v-container>
				<slot />
			</v-container>
		</v-main>
	</v-app>
</template>

<script setup></script>

<style scoped></style>
