<template>
	<PageLayout>
			
		<template #header>
			<header>
				<div>
					<nav>
						<RouterLink to="/">Home</RouterLink>
						<RouterLink to="/about">About</RouterLink>
					</nav>
				</div>
			</header>
		</template>

		<RouterView />

		<template #footer>
			<div>
				FOOTER NAV
			</div>
		</template>

	</PageLayout>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PageLayout from './components/PageLayout.vue'

export default {
	components: { PageLayout, RouterLink, RouterView },
	mounted() {
		window.app = this
	}
}
</script>