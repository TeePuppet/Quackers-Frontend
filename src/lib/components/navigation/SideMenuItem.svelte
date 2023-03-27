<script lang="ts">
    export let path:string
    export let faIcon:string
    export let label:string
</script>
<div>
    <a href="{path}">
        <i class="{faIcon}"></i>
        <div class="label">{label}</div>
    </a>

</div>

<style lang="postcss">
    a {
		@apply flex flex-col sm:flex-row items-center text-center w-full px-3 py-2 rounded;
		@apply hover:bg-zinc-800 hover:cursor-pointer;
	}

    .label {
        @apply sm:text-base sm:ml-2 text-xs sm:mt-0 mt-1 font-semibold
    }
</style>