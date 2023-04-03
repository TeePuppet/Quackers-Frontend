<script lang="ts">
	import { page } from "$app/stores";
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import { deleteUser } from "$lib/stores/users";

    export let data
    let canDelete:boolean
    
    $: user = data.userData
    $: email = user?.email
    $: role = user?.role
    $: id = user?.id
    $: verified = user?.verified

    if($page.data.user.uid === id) canDelete = false

</script>

<PageLayout pageTitle="{data.user?.email}">
    
    <span class="spanRow">User ID: {id}</span>
    <input placeholder="Email" bind:value={email}/>
    <select bind:value={verified}>
        <option value={true}>True</option>
        <option value={false}>False</option>
    </select>
    <select bind:value={role}>
        <option value="moderator">Moderator</option>
        <option value="duke_of_quack">Admin</option>
    </select>
    {#if canDelete}
        <button on:click={()=> deleteUser(id)}>Sterge Utilizator</button>
    {/if}
    
</PageLayout>


<style lang="postcss">
    input {
        @apply block w-full
    }

    select {
        @apply block w-full
    }

    .spanRow {
        @apply block px-4 py-3 rounded-md bg-zinc-900 mb-3
    }
</style>