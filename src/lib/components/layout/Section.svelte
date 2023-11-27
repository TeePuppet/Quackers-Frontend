<script lang="ts">
    export let highlight = true;
    export let css = ""
    let whiteBg:string = ""

    if (highlight) {
        whiteBg = "bg-white/5";
    }
</script>

<div class="{whiteBg} {css} border border-white/5 rounded-md px-4 py-4 w-full">
    <slot></slot>
</div>