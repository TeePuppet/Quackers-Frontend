<script lang="ts">

    export let position:number
    export let title:string
    export let images:string[]
    export let description: string
    export let pros: [string]
    export let cons: [string]

    let collapsed = true

    const toggle = () => {
        let button = collapsed
        if(button) collapsed = false
        if(!button) collapsed = true
    }
</script>
<div class="productCard">


    <div class="flex justify-between items-center"> 
        <h3 class="font-semibold focus:outline-none" contenteditable>{position}. {title}</h3>
        <button on:click={toggle}>{#if collapsed} Show {:else} Hide {/if} </button>
    </div>
    

    <div class:hidden={collapsed}>
    <div class="hScrollCards no-scrollbar">
        {#each images as image }
            <img class="imgCard" src={image}/>
        {/each}
    </div>

        <p class="text-sm focus:outline-none" contenteditable>
            {description}   
        </p>

        <div class="hScrollCards no-scrollbar">
            <div class="textCard">
                <h3 class="font-semibold">Pro</h3>
                <ul class="text-sm" contenteditable>
                    {#each pros as pro}
                        <li>{pro}</li>
                    {/each}
                </ul>
            </div>

            <div class="textCard">
                <h3>Contra</h3>
                <ul class="text-sm" contenteditable>
                    {#each cons as con}
                    <li>{con}</li>
                    {/each}
                </ul>
            </div>

        </div>

    </div>

</div>

<style>
    .price {
        @apply w-full border rounded-md text-center py-3; 
    }
    .textCard {
        @apply flex-none overflow-hidden rounded-md snap-always snap-center w-5/6 border px-4 py-4 text-sm border-zinc-700;
    }
    .hScrollCards {
        @apply flex flex-nowrap gap-2 overflow-x-auto snap-x snap-mandatory py-2;
    }

    .imgCard {
        @apply flex-none overflow-hidden h-36 object-cover aspect-square rounded-md snap-always snap-center;
    }

    .productCard {
        @apply border rounded border-dashed border-zinc-700 px-3 py-3;
    }
</style>