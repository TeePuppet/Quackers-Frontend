<script lang="ts">
	import Row from "$lib/components/Row.svelte";
	import Button from "$lib/components/elements/button/Button.svelte";
	import Input from "$lib/components/elements/inputs/Input.svelte";
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import Section from "$lib/components/layout/Section.svelte";

    let keyword:string
    $: console.log(keyword)
</script>

<PageLayout topBar={false}>
    <div class="flex gap-2 items-center justify-between responsive-p-x responsive-p-y" >
        <h2>Merch</h2>
        <div class="flex items-center gap-2">

    </div>
    </div>

    <div class="flex gap-4">
        <Section css="flex items-center gap-2">
            <Input placeholder="Analyze keyword competition" bind:value={keyword}/>
            <Button customClass="mb-2">Cauta</Button>
        </Section>

    </div>

</PageLayout>