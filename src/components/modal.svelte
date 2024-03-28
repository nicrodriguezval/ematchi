<div class="modal-background">
	<div class="modal">
		<slot />
	</div>
</div>

<style>
	.modal-background {
		position: fixed;
		inset: 0;
		backdrop-filter: blur(10px);
		display: grid;
		place-items: center;
		z-index: 999;
	}
</style>