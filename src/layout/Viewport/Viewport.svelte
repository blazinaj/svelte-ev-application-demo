<!-- Main viewport component with panels and map -->

<script>
	import SecondaryPanel from "src/layout/Viewport/SecondaryPanel/SecondaryPanel.svelte";
	import PrimaryPanel from "src/layout/Viewport/PrimaryPanel/PrimaryPanel.svelte";
	import AssetMap from "src/layout/Viewport/AssetMap/AssetMap.svelte";
</script>

<div class="viewport">
	<PrimaryPanel />
	<SecondaryPanel />
	<AssetMap />
</div>

<style>
	.viewport {
		display: flex;
		flex-direction: row;
	}
</style>
