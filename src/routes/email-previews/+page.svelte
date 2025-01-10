<script lang="ts">
	// @ts-ignore
	import Preview from 'svelte-email-tailwind/preview/preview.svelte';
	let { data } = $props();
</script>

<Preview {data} email="name@example.com" />
