<template>
	<div class="relative flex center">
		<input
		:style="'--slider-thumb-height:' + heightThumb + 'px'"
		:value="modelValue"
		type="range"
		class="relative slider z-30 w-full appearance-none bg-transparent rounded-full"
		@input="updateValue"
		@change="changeValue"
		:min="min"
		:max="max"
		:step="step"
		:disabled="disabled">
		<div class=" absolute z-10 w-full bg-primary bg-black progress-bar rounded-full overflow-hidden" :style="progressBarWrapper ">
			<div class="absolute top-0 z-20 w-full bg-blue-500 progress-bar" :style=" progressBar " />
		</div>
	</div>
</template>

<script lang="ts">
import { Haptics, ImpactStyle } from '@capacitor/haptics'
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		modelValue: { type: Number, required: true, default: 0 },
		disabled: { type: Boolean, default: false },
		readOnly: { type: Boolean, default: false, inspector: { input: 'bs-switch', otherStuff: 'jere' } },
		height: { type: Number, default: 6 },
		heightThumb: { type: Number, default: 30 },
		haptics: { type: Boolean, default: true },
		max: { type: [Number, String], default: 100 },
		min: { type: [Number, String], default: 0 },
		step: { type: [Number, String], default: 1 },
	},
	emits: ['update:modelValue', 'change', 'input'],
	computed: {
		val: {
			get() {
				return this.modelValue
			},
			set(value: number) {
				if (this.haptics)
					Haptics.impact({ style: ImpactStyle.Light })
				this.$emit('update:modelValue', value)
			}
		},
		progressBarWrapper() {
			return {
				height: `${this.height}px`,
				top: `calc(50% - (${this.height}px / 2))`
			}
		},
		progressBar() {
			const width = (Number(this.val) - Number(this.min)) / (Number(this.max) - Number(this.min))
			return {
				transform: `scaleX(${width})`,
				height: `${this.height}px`
			}
		},
	},
	methods: {
		changeValue(event) {
			// Emit 'update:modelValue' for v-model compatibility
			this.val = +event.target.value;
			// Emit 'change' event for :value and @input binding
			this.$emit('change', Number(event.target.value));
		},
		updateValue(event) {
			// Emit 'update:modelValue' for v-model compatibility
			this.val = +event.target.value;
			// Emit 'input' event for :value and @input binding
			this.$emit('input', +event.target.value);
		}
	}
})
</script>

<style>
.slider::-webkit-slider-thumb {
	@apply shadow-md;
	-webkit-appearance: none;
	appearance: none;
	opacity: 1;
	width: var(--slider-thumb-height);
	height: var(--slider-thumb-height);
	background: theme(colors.white);
	border:1px solid #000;
	cursor: pointer;
	border-radius: 100px;
	z-index: 40;
}

.slider[disabled] {
	opacity:0
}

.progress-bar {
	transform-origin: left center;
}
</style>



