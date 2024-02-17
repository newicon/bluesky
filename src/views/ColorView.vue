<template>
	
	<div class="bg-gray-200 p-5 m-5 rounded-md">
		<h1 class="text-4xl font-semibold">Colors</h1>
	</div>

	<div class="p-10">
		<h2 class="font-semibold text-lg">Primary Colors</h2>
		<p class="text-gray-600">These are the main neutral, brand and semantic colors that make up the majority of the colors used in the design system and components.</p>
	</div>

	<div class=" flex gap-8">
		<div class="p-10 w-[480px]">
			<h2 class="font-semibold text-lg">Base</h2>
			<p class="text-gray-600 text-base">These are base black and white color styles to quickly swap out if you need to.</p>
		</div>
		<!-- <ColorSwatch bg="ffffff"></ColorSwatch>
		<ColorSwatch bg="bg-black"></ColorSwatch> -->
	</div>

	<div class=" flex gap-8">
		<div class="p-10 w-[480px]">
			<h2 class="font-semibold text-lg">Brand</h2>
			<p class="text-gray-600 text-base">These are base black and white color styles to quickly swap out if you need to.</p>
		</div>
		<ColorSwatch color="brand-100" text="brand-700"></ColorSwatch>
		<ColorSwatch color="brand-500" text="white"></ColorSwatch>
	</div>

</template>

<script setup lang="ts">
	import ColorSwatch from './ColorSwatch.vue'

</script>