
<script lang="ts">
	import Modal from "$lib/components/Modal.svelte";
import PostListItem from "./components/PostListItem.svelte";
    export let data

</script>

<div class="flex justify-between items-center mb-4">
<h1>{data.siteName}</h1>
<Modal/>
</div>

<div class="posts">
    <ul>
        <li><PostListItem postTitle="Top 7 Cele mai bune frigidere - 2023"/></li>
        <li><PostListItem postTitle="Top 5 Cele mai bune Televizoare smart de 140cm - 2023"/></li>
        <li><PostListItem postTitle="Top 12 Cele mai bune cupotoare cu microunde - 2023"/></li>
        <li><PostListItem postTitle="Top 3 Cele mai bune plite pe gaz - 2023"/></li>
        <li><PostListItem postTitle="Top 6 Cele mai bune plite electrice - 2023"/></li>
        <li><PostListItem postTitle="Top 8 Cele mai bune rulete de 5M, 2023"/></li>
        <li><PostListItem postTitle="Top 9 Cele mai bune ciocane rotopercutoare, 2023"/></li>
        <li><PostListItem postTitle="Top 10 Cele mai bune becuri LED, 2023"/></li>
        <li><PostListItem postTitle="Top 7 Cele mai bune prize smart, 2023"/></li>
        <li><PostListItem postTitle="Top 6 Cele mai bune frigidere incorporabile, 2023"/></li>
        <li><PostListItem postTitle="Top 5 Cele mai bune probiotice, 2023"/></li>

    </ul>
</div>