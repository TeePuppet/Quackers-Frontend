<script lang="ts">
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import Card from "$lib/components/Card.svelte";
	import Button from "$lib/components/elements/button/Button.svelte";
</script>


<PageLayout contentClass="responsive-p-x responsive-p-y" topBar={false}>
    <div class="grid md:grid-cols-2 gap-6 grid-cols-1">
        <Card title="Site'uri" description="Creeaza site'uri si adauga postari" urlPath="/app/siteuri"/>
    </div>
</PageLayout>

