<script lang="ts">
	import CardButton from "./components/CardButton.svelte";
    let time = new Date();
    let hours = time.getHours();
    let greeting = "Tet";
    if(hours > 1) greeting = "Buna dimi ☕☀️"
    if(hours > 11) greeting = "Buna ziua ☀️😊"
    if(hours > 19) greeting = "Buna seara 🌙"
</script>


<h1 class="text-3xl mb-6">{greeting}</h1>
<div class="grid md:grid-cols-2 gap-6 grid-cols-1">
    <CardButton title="Site'uri" description="Creeaza site'uri si adauga postari" urlPath="/app/blogs"/>
    <CardButton title="Tricouri" description="Uploadeaza design'uri si adauga-le pe TeePublic" urlPath="/app/shirts"/>
</div>

