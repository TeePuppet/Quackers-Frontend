<script lang="ts">
    export let title = "Titlu Pagina"

</script>

<div class="flex justify-between items-center mb-4">
    <div class="flex items-center">
        <h1>{title}</h1>
    </div>
    <div>
        <slot/>
    </div>
</div>