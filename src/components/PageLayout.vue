<template>
	<!-- 
	| The inner app div screen 
	| this stays fixed to the window and should always expand to fill the screen
	| this prevents bounding apps - and pinch zoom events (touch-action:neon)
	`-->
	<div class=" flex flex-col h-full absolute inset-0">
		<!-- (flex child) header-->
		<div>
			<slot name="header"/>
		</div>
		
		<!-- (flex child) will grow to fill space -->
		<div class="relative grow">
			<slot />
		</div>

		<!-- (flex child) nav will be pushed to the bottom -->
		<div class="z-50">
			<slot name="footer" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute();

const transitionName = computed(() => {
	return route.meta.transition
});

</script>

<style>
.slide-leave-active,
.slide-enter-active {transition: .5s cubic-bezier(0.1, 0.7, 0.1, 1);position:absolute;top:0;left:0;right:0;bottom:0;}
.slide-leave-from { transform: translateX(0) }
.slide-leave-to { transform: translateX(-100%) }
.slide-enter-from { transform: translateX(100%) }
.slide-enter-to { transform: translateX(0) }


.slideback-leave-active,
.slideback-enter-active {transition: .5s cubic-bezier(0.1, 0.7, 0.1, 1);position:absolute;top:0;left:0;right:0;bottom:0;}
.slideback-enter-from { transform: translateX(-100%) }
.slideback-enter-to { transform: translateX(0) }
.slideback-leave-from { transform: translateX(0) }
.slideback-leave-to { transform: translateX(100%) }
</style>