<template>
	<div class="h-full bg-[#1D1D1D] flex gap-10 items-center justify-center bg-page p-20">

		<div ref="card" class="bg-gradient-dark rounded-lg w-[300px] p-20 shadow-2xl shadow-black-xl"
		style="--light-x: 0; --light-y: 0;">
			<div class="text-white">Card</div>
		</div>

		<div ref="card2" style="--x: 347.5px; --y: 134.75px; --54fc9276: rgb(var(--color-primary-DEFAULT)); --2c046616: rgb(var(--color-primary-DEFAULT));" class="relative shadow-black-xl group isolate rounded-xl background-gradient ring-1 ring-gray-800
		before:hidden 
		before:lg:block 
		before:absolute 
		before:-inset-[2px] 
		before:h-[calc(100%+4px)] 
		before:w-[calc(100%+4px)] 
		before:z-[-1] 
		before:rounded-[13px] 
		flex-1 flex flex-col shadow col-span-8 @container">
			<div class="text-white p-20 overflow-hidden flex-1 flex flex-col pt-6 rounded-xl bg-gray-900 bg-opacity-90 hover:bg-opacity-80 duration-1000 transition-all transition-[background-opacity]">
				<p>This Example creates a radial background with updating X and Y on a psuedo before element placed in the background - then changes the card background color to introduce transparency on hover - showing the radial glow and creating a nice border highlight. </p>
				<p>HELLO</p>
				<p>HELLO</p>
				<p>HELLO</p>
			</div>
		</div>

		<div ref="card3" style="--x: 347.5px; --y: 134.75px; --54fc9276: rgb(var(--color-primary-DEFAULT)); --2c046616: rgb(var(--color-primary-DEFAULT));" class="relative shadow-black-xl group isolate rounded-xl background-gradient ring-1 ring-gray-800
		before:hidden 
		before:lg:block 
		before:absolute 
		before:-inset-[2px] 
		before:h-[calc(100%+4px)] 
		before:w-[calc(100%+4px)] 
		before:z-[-1] 
		before:rounded-[13px] 
		flex-1 flex flex-col shadow col-span-8 @container">
			<div class="text-white p-20 overflow-hidden flex-1 flex flex-col pt-6 rounded-xl bg-gray-900 bg-opacity-90 hover:bg-opacity-80 duration-400 transition-all transition-[background-opacity]">
				<p>This Example creates a radial background with updating X and Y on a psuedo before element placed in the background - then changes the card background color to introduce transparency on hover - showing the radial glow and creating a nice border highlight. </p>
				<p>HELLO</p>
				<p>HELLO</p>
				<p>HELLO</p>
			</div>
		</div>

	</div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const card = ref(null);

const handleMouseMoveBody = (event) => {
	// Get the bounding rectangle of the target element
	const rect = card.value.getBoundingClientRect();

	// Calculate mouse position relative to the element
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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

onMounted(() => {
	document.body.addEventListener('mousemove', handleMouseMoveBody)

	// Assuming 'element' is the target element
	// const element = card2.value

	const elements = [card2.value, card3.value]

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
	--color-primary-DEFAULT: 255 255 255;
}

.background-gradient:before {
	background: radial-gradient(250px circle at var(--x) var(--y), var(--2c046616) 0, transparent 100%);
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