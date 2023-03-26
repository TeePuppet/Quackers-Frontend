<script lang="ts">

    export let blogTitle:string;
    export let url:string;
</script>

<div class="flex justify-between border border-zinc-800 rounded px-4 py-4">
    <h2>{blogTitle}</h2>
    <a href={url}>{url}</a>
</div>