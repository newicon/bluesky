<template>
	<main class="h-[400px]">
		<div class="p-5">
			<H1 class="text-4xl font-semibold">Newicon's Library Blue Sky</H1>
			<p>Our list of awesome components</p>
			<div class="uppercase">Elements</div>
		</div>
		<div class="flex gap-5 pb-5 px-5 overflow-x-auto flex-nowrap">
			<div class="bg-gray-200 p-10 w-[200px] rounded-xl ">
				Button
			</div>
			<div class="bg-gray-200 p-10 w-[200px] rounded-xl ">
				Button
			</div>
			<div class="bg-gray-200 p-10 w-[200px] rounded-xl ">
				Button
			</div>
			<a href="/component" class="bg-gray-200 p-10 w-[200px] rounded-xl">
				Component page
			</a>
		</div>
		
	</main>
</template>

<script setup lang="ts">

import type { PluginListenerHandle } from '@capacitor/core';

import { Share } from '@capacitor/share';

import { Motion } from '@capacitor/motion';

let accelHandler: PluginListenerHandle;

const onMotionClick = async () => {
	try {
		await (DeviceMotionEvent as any).requestPermission();
	} catch (e) {
		// Handle error
		return;
	}
	
	// Once the user approves, can start listening:
	accelHandler = await Motion.addListener('accel', event => {
		console.log('Device motion event:', event);
	});
};

// Stop the acceleration listener
const stopAcceleration = () => {
	if (accelHandler) {
		accelHandler.remove();
	}
};

const onShareClick = async () => {
	await Share.share({
		title: 'See cool stuff',
		text: 'Really awesome thing you need to see right meow',
		url: 'newicon.net',
		dialogTitle: 'Share with buddies',
	});
}
</script>