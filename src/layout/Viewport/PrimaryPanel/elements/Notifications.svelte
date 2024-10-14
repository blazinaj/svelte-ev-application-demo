<!-- Notifications component -->

<script>
	import Icon from "@iconify/svelte";
</script>

<div class="notifications">
	<h3>
		<Icon icon="nimbus:lightbulb" />
		&nbsp; NOTIFICATIONS
	</h3>
	<hr />
	<p>4 VEHICLES ARE MORE THAN 5 MINUTES BEHIND THE SCHEDULE</p>
	<div style="text-align: center;">
		<Icon icon="mdi:dots-horizontal" height="32px" />
	</div>
</div>

<style>
	h3 {
		color: green;
	}

	p {
		font-weight: bold;
		text-align: center;
	}
</style>
