<!-- Reusable Data Table Component -->
<script lang="ts">
  export let data: Array<{ label: string; value: string | number }>;
</script>

<table>
  {#each data as row}
    <tr>
      <td class="title">{row.label}:</td>
      <td class="content">{row.value}</td>
    </tr>
  {/each}
</table>

<style lang="scss">
  @import 'src/styles/variables.scss';

  table {
    border-collapse: collapse;
    width: 100%;
  }

  td.title {
    color: $secondary-color;
    font-weight: bold;
    padding: $spacing-sm;
  }

  td.content {
    color: $text-color;
    padding: $spacing-sm;
  }

  tr {
    border-bottom: 1px solid $border-color;

    &:last-child {
      border-bottom: none;
    }
  }
</style>