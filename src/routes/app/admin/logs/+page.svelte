<script>
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
import { logs } from "$lib/stores/logs"

</script>
<PageLayout pageTitle="Logs">

    <table class="table-fixed">
        <thead>
          <tr>
            <th>Time</th>
            <th>Type</th>
            <th>Function</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
            {#each $logs as log}
          <tr>
            <td>{log.time.toDate().toString()}</td>
            <td class={log.type}>{log.type}</td>
            <td>{log.function} ()</td>
            <td>{log.message}</td>
          </tr>
          {/each}
        </tbody>
      </table>

</PageLayout>

<style lang="postcss">
    .success {
        @apply text-green-600;
    };

    .error {
        @apply text-red-600;
    };
</style>
