<script lang="ts">
	import Input from "$lib/components/Input.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import Row from "$lib/components/Row.svelte";
	import PageLayout from "$lib/components/layout/PageLayout.svelte";

    let numeTemplate:string
    let githubURL:string
    let setariTeamplate:string[] = []

    let components = [
        {
            component: Row
        },
        {
            component: Row
        }
    ]

</script>

<PageLayout>
    <div class="responsive-p-x responsive-p-y flex justify-between items-center"> 
        <h2>Template'uri</h2>
        <Modal action="Adauga un Template">
            <div slot="header">
                <h2>Adauga un template nou</h2>
            </div>
            <div slot="content">
                <Input extraClass="w-full" placeholder="Nume template" bind:value={numeTemplate}/>
                <Input extraClass="w-full" placeholder="Github URL" bind:value={githubURL}/>
                
                <h2>Configurare</h2>
                {#each components as component}
                    <svelte:component this={component.component}/>
                {/each}
            </div>
            <div slot="footer">
                    
            </div>
        </Modal>
    </div>
    <div class="border border-white border-opacity-20 px-4 py-4 rounded flex justify-between items-center hover:cursor-pointer hover:border-opacity-70">
        <div>
            <div>Recenzii</div>
            <div class="text-xs opacity-50">https://github.com/TeePuppet/Recenzii</div>
        </div>
        <div>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>


</PageLayout>