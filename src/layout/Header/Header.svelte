<!-- Application Header -->

<script>
	import HeaderTitle from "src/layout/Header/elements/HeaderTitle.svelte";
	import HeaderLogo from "src/layout/Header/elements/HeaderLogo.svelte";
	import HeaderMenuButton from "src/layout/Header/elements/HeaderMenuButton.svelte";
</script>

<header class="header">
	<HeaderLogo />
	<HeaderTitle />
	<HeaderMenuButton />
</header>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		background-color: #ffffff;
		color: #000000;
		border-bottom: 1px solid #e0e0e0;
	}
</style>
