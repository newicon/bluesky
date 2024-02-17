<template>
	<div class="h-full bg-[#1D1D1D] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center bg-page p-5 lg:p-20">

		<input type="color" v-model="color" /> {{color}}

		<div ref="card" class="bg-gradient-dark border border-white/20 rounded-lg w-[300px] p-20 shadow-2xl shadow-black-xl"
		style="--light-x: 0; --light-y: 0;">
			<div class="text-white">Card</div>
		</div>

		<div class="shadow-black-xl rounded-[13px] ">
			<div ref="card2" style="--x: 347.5px; --y: 134.75px;--shine: rgb(var(--color-primary-DEFAULT));" class="
			relative group isolate rounded-xl background-gradient
			ring-1
			ring-gray-800
			before:block 
			before:absolute 
			before:-inset-[1px]
			before:h-[calc(100%+2px)] 
			before:w-[calc(100%+2px)] 
			before:z-[-1] 
			before:rounded-[13px] 
			flex-1 flex flex-col col-span-8 @container ">
				<div class="text-white p-20 overflow-hidden flex-1 flex flex-col pt-6 rounded-xl bg-gray-900 bg-opacity-90 hover:bg-opacity-80 duration-1000 transition-all transition-[background-opacity]">
					<p>This Example creates a radial background with updating X and Y on a psuedo before element placed in the background - then changes the card background color to introduce transparency on hover - showing the radial glow and creating a nice border highlight. </p>
					<p>HELLO</p>
					<p>HELLO</p>
					<p>HELLO</p>
				</div>
			</div>
		</div>

		<div class="shadow-black-xl rounded-xl">
			<div ref="card3" style="--x: 347.5px; --y: 134.75px; --shine: rgb(var(--color-primary-DEFAULT));" class="
			relative  group isolate rounded-xl background-gradient  ring-gray-800
			before:block 
			before:absolute 
			before:-inset-[2px] 
			before:h-[calc(100%+4px)] 
			before:w-[calc(100%+4px)] 
			before:z-[-1] 
			before:rounded-[13px] 
			flex-1 flex flex-col ring-1 col-span-8 @container">
				<div class="text-white p-20 overflow-hidden flex-1 flex flex-col pt-6 rounded-xl bg-gray-900 bg-opacity-90 hover:bg-opacity-80 duration-400 transition-all transition-[background-opacity]">
					<p>This Example creates a radial background with updating X and Y on a psuedo before element placed in the background - then changes the card background color to introduce transparency on hover - showing the radial glow and creating a nice border highlight. </p>
					<p>HELLO</p>
					<p>HELLO</p>
					<p>HELLO</p>
				</div>
			</div>

		</div>

		<div ref="card4"
			class="block background-gradient-new p-[2px] rounded-[13px] shadow-black-xl" 
			style="--x: 347.5px; --y: 134.75px; --shine: rgb(var(--color-primary-DEFAULT));">
			<div class="relative  group isolate rounded-xl ring-gray-800 bg-gray-900 bg-opacity-90
			flex-1 flex flex-col col-span-8 @container">
				<div class="text-white p-20 overflow-hidden flex-1 flex flex-col pt-6 rounded-xl">
					<p>This Example creates a radial background with updating X and Y on a psuedo before element placed in the background - then changes the card background color to introduce transparency on hover - showing the radial glow and creating a nice border highlight. </p>
					<p>HELLO</p>
					<p>HELLO</p>
					<p>HELLO</p>
				</div>
			</div>
			
		</div>

		<div data-shine ref="card5"
			class="block background-gradient-new p-[2px] rounded-[13px] shadow-black-xl" 
			style="--x: 347.5px; --y: 134.75px; --shine: rgb(var(--color-primary-DEFAULT));">
			<div class="relative  group isolate rounded-xl ring-gray-800 bg-gray-900 bg-opacity-90
			flex-1 flex flex-col col-span-8 @container">
				<div class="text-white p-20 overflow-hidden flex-1 flex flex-col pt-6 rounded-xl">
					<p>This Example creates a radial background with updating X and Y on a psuedo before element placed in the background - then changes the card background color to introduce transparency on hover - showing the radial glow and creating a nice border highlight. </p>
					<p>HELLO</p>
					<p>HELLO</p>
					<p>HELLO</p>
				</div>
			</div>
			
		</div>

		<ShinyCard></ShinyCard>
		
	</div>
</template>
<script setup lang="ts">
import ShinyCard from '@/components/ShinyCard.vue';
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
const card = ref(null);
const color = ref('64 124 255')

watch(color, () => {
	const rgb = hexToRGB(color.value);
	card2.value.style.setProperty('--color-primary-DEFAULT', rgb);
})
function hexToRGB(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r} ${g} ${b}`;
}


const handleMouseMoveBody = (event) => {
	// Get the bounding rectangle of the target element
	const rect = card.value.getBoundingClientRect();

	// Calculate mouse position relative to the element
	const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
	const scrollTop = window.scrollY || document.documentElement.scrollTop;

	const x = event.pageX - (rect.left + scrollLeft);
	const y = event.pageY - (rect.top + scrollTop);

	// Now, x and y are the coordinates relative to the child element
	// You can set them as properties, emit them, or whatever you'd like
	// console.log(`Relative mouse position: x=${x}, y=${y}`);
	card.value.style.setProperty('--light-x', `${x}px`);
	card.value.style.setProperty('--light-y', `${y}px`);
}

const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);
const card5 = ref(null);

onMounted(() => {
	document.body.addEventListener('mousemove', handleMouseMoveBody)

	// Assuming 'element' is the target element
	// const element = card2.value



	const elements = [card2.value, card3.value, card4.value, card5.value]

	document.body.addEventListener('mousemove', function (event) {

		elements.forEach((element) => {
			const rect = element.getBoundingClientRect();
			const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			const x = event.pageX - (rect.left + scrollLeft);
			const y = event.pageY - (rect.top + scrollTop);

			element.style.setProperty('--x', `${x}px`);
			element.style.setProperty('--y', `${y}px`);

		})
	});
})

onUnmounted(() => {
	document.body.removeEventListener('mousemove', handleMouseMoveBody)
})




</script>
<style>
:root {
	/* --color-primary-DEFAULT: 64 124 255; */
	--color-primary-DEFAULT: 64 124 255;
}

.background-gradient:before {
	background: radial-gradient(250px circle at var(--x) var(--y), var(--shine) 0, transparent 100%);
	will-change: background;
}

.background-gradient-new {
	background: radial-gradient(250px circle at var(--x) var(--y), var(--shine) 0, #1C1C1C 100%);
	will-change: background;
}

.bg-gradient-dark {
	background-image: radial-gradient(65.41% 134.07% at var(--light-x) var(--light-y), #333335 0%, #1C1C1C 67.31%);
}

.bg-page {
	background-image: radial-gradient(116.83% 238.53% at -29.87% -144%, #9aa2b1 0, #1c1c1c 97.31%)
}



.shadow-black-xl {
	/*          X    Y    blur  spread */
	box-shadow: 10px 10px 37px -5px rgba(0, 0, 0, 1);
}


/**
*/
</style>