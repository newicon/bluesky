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
		<router-view v-slot="{ Component }" :name="transitionName" appear>
			<transition>
				<div class="relative grow">
					<component :is="Component" />
					{{ route }}
				</div>
			</transition>
		</router-view>

		<!-- (flex child) nav will be pushed to the bottom -->
		<div class="z-50">
			<slot name="footer" />
		</div>
	</div>
</template>
<script lang="ts">
import { useRoute } from 'vue-router'
import { on } from 'vue'
export default {
	setup() {
		const route = useRoute();
		return {
			route
		}
	},
}
</script>

