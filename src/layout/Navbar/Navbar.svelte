<!-- Application Navbar -->

<script>
	import Icon from "@iconify/svelte";
</script>

<nav class="navbar">
	<button>
		<Icon icon="bi:boxes" />
		&nbsp; Module Directory
	</button>
	<button class="active">
		<Icon icon="mynaui:box" />
		&nbsp; Overview
	</button>
	<button>
		<Icon icon="mdi:car-multiple" />
		&nbsp; Vehicles
	</button>
	<button>
		<Icon icon="icon-park-outline:battery-charge" />
		&nbsp; Chargers
	</button>
	<button>
		<Icon icon="solar:watch-square-minimalistic-charge-linear" />
		&nbsp; Storage
	</button>
	<button>
		<Icon icon="fa6-solid:route" />
		&nbsp; Routes
	</button>
	<button>
		<Icon icon="line-md:document-report" />
		&nbsp; Reports
	</button>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: left;
		padding: 10px;
		background-color: #ffffff;
		border-bottom: 1px solid #e0e0e0;
	}

	.navbar button {
		background-color: white;
		color: #28a745;
		border: none;
		padding: 10px 20px;
		border-radius: 6px;
		display: flex;
		align-items: center;
		cursor: pointer;
		transition:
			background-color 0.3s,
			color 0.3s;
		margin: 0 5px;
	}

	.navbar button:hover {
		background-color: #28a745;
		color: white;
	}

	.navbar button.active {
		background-color: #28a745;
		color: white;
	}
</style>
