<!-- GridOverview component -->

<script>
	let ridesToday = 135;
	let electricVehicles = 25;
	let totalVehicles = 28;
	let totalCostSavings = "42,671";
</script>

<div class="grid-overview">
	<h3>GRID OVERVIEW</h3>
	<div class="grid-container">
		<div class="grid-item">
			<div class="grid-item-value">
				{ridesToday}
			</div>
			<div class="grid-item-label">RIDES TODAY</div>
		</div>
		<div class="grid-item">
			<div class="grid-item-value">
				{electricVehicles}/{totalVehicles}
			</div>
			<div class="grid-item-label">ELECTRIC VEHICLES</div>
		</div>
		<div class="grid-item">
			<div class="grid-item-value">
				${totalCostSavings} /yr
			</div>
			<div class="grid-item-label">TOTAL COST SAVINGS</div>
		</div>
	</div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 20px;
	}

	.grid-item {
		margin-bottom: 15px;
		font-size: 1.2rem;
		font-weight: bold;
	}

	.grid-item-label {
		font-size: 1rem;
		font-weight: bold;
		color: darkorange;
	}

	.grid-item-value {
		font-size: 1.5rem;
		font-weight: bolder;
	}

	h3 {
		color: green;
	}
</style>
