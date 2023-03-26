<script lang="ts">

    export let blogTitle:string;
    export let url:string;
</script>

<div>
    <h2>{blogTitle}</h2>
    <a href={url}>{url}</a>
</div>