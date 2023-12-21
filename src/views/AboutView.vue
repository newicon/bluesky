<template>
	<div>
		HELLO
		<!-- <pre>{{ componentProps }}</pre> -->
		<form @submit.prevent="updateProps">
			<div v-for="(prop, key) in componentProps" :key="key" class="grid grid-cols-2 w-[500px]">
				<label class="block text-sm font-medium leading-6 text-gray-900" :for="key">{{ key }} - {{prop.type}}:</label>
				<input class="bui-input"  v-if="prop.type === 'String'" :id="key" v-model="propValues[key]" type="text" />
				<input class="bui-input"  v-else-if="prop.type === 'Number'" :id="key" v-model.number="propValues[key]" type="number" />
				<input class="bui-input" v-else-if="prop.type === 'Boolean'" :id="key" v-model="propValues[key]" type="checkbox" />
				<input class="bui-input" v-else :id="key" v-model="propValues[key]" type="text" />
			</div>
			<button type="submit">Update Props</button>
		</form>
		<component :is="targetComponent" v-model="propValues['modelValue']" v-bind="propValues" />
	</div>

	<pre>{{componentProps}}</pre>
</template>

<script>
import { markRaw } from 'vue';
import BsRange from '@/components/BsRange.vue'

export default {
	data() {
		return {
			targetComponent: markRaw(BsRange),
			propValues: {},
		}
	},
	computed: {
		componentProps() {
			const propsOptions = this.targetComponent.props || {};
			const props = {};
			console.log(propsOptions, 'propsOptions')

			Object.keys(propsOptions).forEach(key => {
				const prop = propsOptions[key];
				const type = prop.type || prop;
				const defaultValue = prop.default;

				props[key] = Object.assign({}, prop, {
					type: Array.isArray(type) ? type.map(t => t.name).join('|') : type.name,
					default: typeof defaultValue === 'function' ? defaultValue() : defaultValue,
				})

				this.propValues[key] = props[key].default

			});
			return props;
		}
	},
	methods: {
		updateProps() {
			// This function can be used to handle any additional logic when props are updated
			console.log('Props updated:', this.propValues);
			// Since propValues is already bound to your inputs, they automatically update the component
		}
	}
};
</script>

<style>

.bui-input { @apply block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 }
</style>