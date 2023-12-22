<template>
	<PageLayout>
			
		<template #header>
			<header>
				<div>
					HEADER
				</div>
			</header>
		</template>

		<RouterView />

		<template #footer>
			<BuiNavBar></BuiNavBar>
		</template>

	</PageLayout>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageLayout from './components/PageLayout.vue'
import BuiNavBar from './components/BuiNavBar.vue'

export default {
	components: { PageLayout, RouterLink, RouterView, BuiNavBar },
	mounted() {
		(window as any).app = this
	}
}
</script>