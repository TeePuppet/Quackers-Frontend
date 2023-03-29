<script lang="ts">
	import type { User } from "$lib/types/user";
	import UserItem from "./UserItem.svelte";
    export let userData:any

</script>

{#each userData as user}
    <UserItem email={user.email} uid={user.id} verified={user.verified} role={user.role}/>
{/each}