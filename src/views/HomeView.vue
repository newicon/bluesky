<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'

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

<template>
	<main class="h-[400px]">
		<HelloWorld msg="Hello There Chuck" />
		<button @click="onShareClick" class="text-lg rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">SHARE</button>
		HELLO?
		<button @click="onMotionClick" class="text-lg rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Motion</button>
	</main>
</template>