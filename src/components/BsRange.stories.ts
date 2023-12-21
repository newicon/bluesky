// BsRange.stories.ts

import type { Meta } from '@storybook/vue3';

import BsRange from './BsRange.vue';

const meta: Meta<typeof BsRange> = {
	tags: ['autodocs'],
	component: BsRange,
	argTypes: {
		modelValue: {
			control: false
		},
		step: {
			control: { type: 'number' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof BsRange>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
	render: (args) => ({
		components: { BsRange },
		setup() {
			return { args };
		},
		template: `
			<!-- component goes here -->
			<BsRange v-bind="args" /> 
			{{value}}
		`,
	}),
};

export const Other: Story = {
	render: (args) => ({
		components: { BsRange },
		data() { return {value:1} },
		setup() {
			return { args };
		},
		template: '<BsRange v-bind="args" v-model="value" /> {{value}} {{args}}',
	}),
};