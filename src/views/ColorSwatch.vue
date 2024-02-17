<template>
	<div class="w-[160px] flex flex-col shadow-lg rounded-lg overflow-hidden border border-black/10">
		<div :style="bgStyle" class="h-[80px] flex items-center justify-center">
			<span>{{accessibilityScore}} {{contrast}}</span>
		</div>
		<div class="h-[100px] bg-white p-3">
			<div class="text-black">{{color}}</div>
			<div class="text-gray-600">rgb({{colorRgb}})</div>
			<div class="text-gray-600">{{colorHex}}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		/**
		 * The name of the color - for e.g blue or brand
		 * the css variable expected will be --color-blue-*
		 */
		//color: {type: String},

		/**
		 * The css variable defining this color
		 */
		// cssVar: {
		// 	type:String, required:true
		// },

		color: { type: String },


		text: { type: String },
	},

	computed: {
		bgStyle() {
			return {
				background: `rgb(var(${this.cssColorVar}))`,
				color: `rgb(var(${this.cssTextVar}))`,
			}
		},
		cssColorVar() {
			return '--color-' + this.color //+ (this.number ? '-' + this.number : '')
		},
		cssTextVar() {
			return '--color-' + this.text
		},
		colorRgb() {
			const root = document.documentElement;
			// Get computed styles for the root
			const styles = getComputedStyle(root);
			// Get the value of the --color-blue-500 variable
			const color = styles.getPropertyValue(this.cssColorVar).trim();
			return color
		},
		colorHex() {
			return this.rgbToHex(this.colorRgb).toUpperCase()
		},
		textRgb() {
			const root = document.documentElement;
			// Get computed styles for the root
			const styles = getComputedStyle(root);
			// Get the value of the --color-blue-500 variable
			const color = styles.getPropertyValue(this.cssTextVar).trim();
			return color
		},
		contrast() {
			console.log(this.colorRgb, this.textRgb)
			return this.calcContrast(this.colorRgb, this.textRgb)
		},
		accessibilityScore() {
			return this.calcAccessibilityScore(this.contrast)
		}
	},
	methods: {
		calcAccessibilityScore(contrastRatio, isLargeText = false) {
			if (isLargeText) {
				if (contrastRatio >= 4.5) return 'AAA';
				if (contrastRatio >= 3) return 'AA';
			} else {
				if (contrastRatio >= 7) return 'AAA';
				if (contrastRatio >= 4.5) return 'AA';
			}
			return '';
		},
		luminance(r, g, b) {
			let a = [r, g, b].map(function (v) {
				v /= 255;
				return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
			});
			return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
		},
		parseRgbString(rgbString:string) {
			// Split the string by comma or space, then convert each part to a number
			const parts = rgbString.split(/,|\s+/).filter(Boolean).map(Number);
			return { r: parts[0], g: parts[1], b: parts[2] };
		},
		calcContrast(rgbString1:string, rgbString2:string) {
			const rgb1 = this.parseRgbString(rgbString1);
			const rgb2 = this.parseRgbString(rgbString2);
			console.log(rgbString1, rgbString2)
			let lum1 = this.luminance(rgb1.r, rgb1.g, rgb1.b);
			let lum2 = this.luminance(rgb2.r, rgb2.g, rgb2.b);
			let brightest = Math.max(lum1, lum2);
			let darkest = Math.min(lum1, lum2);
			return ((brightest + 0.05) / (darkest + 0.05)).toFixed(2);
		},
		rgbToHex(rgbString) {
			// Split the string into RGB components
			const rgb = this.parseRgbString(rgbString);

			// Convert each component to hexadecimal and concatenate them
			return '#' + rgb.r.toString(16).padStart(2, '0') +
				rgb.g.toString(16).padStart(2, '0') +
				rgb.b.toString(16).padStart(2, '0');
		}

	}
})
</script>