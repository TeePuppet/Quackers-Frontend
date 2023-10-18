<script lang="ts">
    export let highlight = true;

    let whiteBg = "bg-white/10";

    if (!highlight) {
        whiteBg = "";
    }
</script>

<div class=" {whiteBg} rounded-md px-4 py-4">
    <slot></slot>
</div>