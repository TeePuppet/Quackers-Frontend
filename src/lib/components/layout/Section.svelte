<script lang="ts">
    export let highlight = true;
    export let css = ""
    let whiteBg:string = ""

    if (highlight) {
        whiteBg = "bg-white/5";
    }
</script>

<div class="{whiteBg} {css} rounded-md px-4 py-4">
    <slot></slot>
</div>