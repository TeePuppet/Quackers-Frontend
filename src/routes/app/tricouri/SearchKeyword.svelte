<script lang="ts">
	import { goto } from '$app/navigation';
    import Button from '$lib/components/elements/button/Button.svelte';
	import Input from '$lib/components/elements/inputs/Input.svelte';
    import Section from '$lib/components/layout/Section.svelte';

    let searchKeyword:string

    function selectTag(tag: any): void {
        goto(`/app/tricouri/keywords/${tag}`);
    }

</script>


<Section css="mb-2">
    <div class="">
        <h2 class="mb-2">Research keyword</h2>
        <Input placeholder="Search by keyword" bind:value="{searchKeyword}" />
        <Button style="primary" customClass="w-full" on:click={()=> selectTag(searchKeyword)}>Search</Button>
    </div>
</Section>