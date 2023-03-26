<script lang="ts">
export let urlPath = "/app";
export let title = "Card Title";
export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi sit.";
</script>

<a class="block border border-zinc-800 rounded px-6 py-6 hover:border-zinc-700 bg-black hover:bg-zinc-900" href={urlPath}>
    <h2 class="text-2xl font-bold mb-3">{title}</h2>
    <p>{description}</p>
</a>




