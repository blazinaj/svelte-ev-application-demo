<!-- PrimaryPanel component -->

<script>
	import GridOverview from "src/layout/Viewport/PrimaryPanel/elements/GridOverview.svelte";
	import Vehicles from "src/layout/Viewport/PrimaryPanel/elements/Vehicles.svelte";
	import Notifications from "src/layout/Viewport/PrimaryPanel/elements/Notifications.svelte";
</script>

<div class="primary-panel">
	<GridOverview />
	<Vehicles />
	<Notifications />
</div>

<style>
	.primary-panel {
		padding: 20px;
		margin: 0;
		border: none;
		background-color: #ffffff;
		box-shadow: 10px 0 10px -5px rgba(0, 0, 0, 0.5);
		z-index: 2;
	}
</style>
