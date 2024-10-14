<script>
	import Icon from "@iconify/svelte";
	import imgSrc from "../static/rythmos_logo.png";
</script>

<div class="left-group">
	<Icon icon="material-symbols:list" height="32px" color="green" />
	<img src={imgSrc} alt="Logo" class="logo" />
</div>

<style>
	.left-group {
		display: flex;
		align-items: center;
	}
</style>
