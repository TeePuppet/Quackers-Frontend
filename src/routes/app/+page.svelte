<script lang="ts">
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import Card from "$lib/components/Card.svelte";
    let isAdmin = false
</script>


<PageLayout topBar={false}>
    <div class="grid md:grid-cols-2 gap-6 grid-cols-1">
        <Card title="Site'uri" description="Creeaza site'uri si adauga postari" urlPath="/app/siteuri"/>

        {#if isAdmin}
            <Card title="Admin" description="Sectiune de admin" urlPath="/app/admin"/>
        {/if}
    </div>
</PageLayout>

