<script lang="ts">
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import Card from "$lib/components/Card.svelte";
    let time = new Date();
    let hours = time.getHours();
    let greeting = "";
    if(hours > 1) greeting = "Buna dimi ☕☀️"
    if(hours > 11) greeting = "Buna ziua ☀️😊"
    if(hours > 19) greeting = "Buna seara 🌙"
</script>


<PageLayout topBar={false}>
    {greeting}

    <div class="grid md:grid-cols-2 gap-6 grid-cols-1">
        <Card title="Site'uri" description="Creeaza site'uri si adauga postari" urlPath="/app/siteuri"/>
    </div>
</PageLayout>

