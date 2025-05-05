<!-- Reusable Panel Component -->
<script lang="ts">
  export let title: string = '';
  export let showShadow: boolean = true;
</script>

<div class="panel" class:with-shadow={showShadow}>
  {#if title}
    <h3>{title}</h3>
  {/if}
  <slot />
</div>

<style lang="scss">
  @import 'src/styles/variables.scss';

  .panel {
    padding: $spacing-lg;
    margin: 0;
    border: none;
    background-color: $background-color;

    &.with-shadow {
      box-shadow: $box-shadow;
    }

    h3 {
      color: $primary-color;
      margin-bottom: $spacing-md;
    }
  }
</style>