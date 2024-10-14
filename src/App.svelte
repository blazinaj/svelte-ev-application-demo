<script>
	import Navbar from "src/layout/Navbar/Navbar.svelte";
	import Header from "src/layout/Header/Header.svelte";
	import Viewport from "src/layout/Viewport/Viewport.svelte";
</script>

<div class="app">
	<Header />
	<Navbar />
	<Viewport />
</div>

<style>
	.app {
		height: 100vh;
		width: 100vw;
	}
</style>
