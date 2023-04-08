<div class=" py-3">
     <h3 class=" font-semibold focus:outline-none" contenteditable>1. Titlu</h3>

    <div class="hScrollCards no-scrollbar">
        <img class="imgCard" src="https://placehold.co/600x400"/>
        <img class="imgCard" src="https://placehold.co/600x400"/>
        <img class="imgCard" src="https://placehold.co/600x400"/>
        <img class="imgCard" src="https://placehold.co/600x400"/>
    </div>
    

    <div>
        <p class="text-sm focus:outline-none" contenteditable>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu. A scelerisque purus semper eget duis at tellus at urna. Accumsan sit amet nulla facilisi morbi tempus iaculis urna
        </p>

        <div class="hScrollCards no-scrollbar">
            <div class="textCard">
                <h3 class="font-semibold">Pro</h3>
                <ul class="text-sm" contenteditable>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet ipsum dolor sit ame</li>
                </ul>
            </div>

            <div class="textCard">
                <h3>Contra</h3>
                <ul class="text-sm" contenteditable>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet ipsum dolor sit ame</li>
                </ul>
            </div>

        </div>
        <div class="price">
            234.99 <span>LEI</span>
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
        @apply flex-none overflow-hidden h-36 object-cover aspect-[7/8] rounded-md snap-always snap-center;
    }
</style>