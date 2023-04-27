<script lang="ts">
    export let action = "Open Modal";
    import { fly } from 'svelte/transition';
	  import Button from './elements/button/Button.svelte';
    export let isOpen = false
    export let actionIcon = ""
    function openModal() {
      isOpen = true
    }
    export const closeModal = () => {
      isOpen = false
    }    
  


</script>


<slot name="trigger" {open}>
    <!-- fallback trigger to open the modal -->
    {#if actionIcon !== ""}
      <Button size="icon" style="primary" on:click={openModal}>
        <i class="{actionIcon}"></i>
      </Button>
    {:else}
      <Button size="lg" on:click={openModal}>
        {action}
      </Button>
    {/if}
  </slot>
  
  {#if isOpen}
    <div class="modal" out:fly={{ y: 100, duration: 100 }}>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="backdrop" on:click={closeModal} />
  
      <div class="content-wrapper" in:fly={{ y: 100, duration: 300 }}>
        <div class="absolute top-4 right-4">
        <Button size="icon-sm" on:click={closeModal}><i class="fa-solid fa-xmark"></i></Button>
      </div>
        <div class="content mt-12">
          <slot name="content" />
        </div>
  

      </div>

    </div>
  {/if}


  <style>
    div.modal {
      @apply z-50 fixed top-0 left-0 w-full h-screen flex justify-center items-center;
    }
    div.backdrop {
      @apply w-full z-30 h-full absolute bg-black bg-opacity-30 backdrop-blur-[2px];
    }
  
    div.content-wrapper {
      @apply fixed mt-20 z-40 h-auto max-h-[90%] bottom-0 overflow-auto w-full bg-zinc-900 rounded-t-lg;
    }
    div.content {
      @apply overflow-y-scroll px-6 pt-4 pb-12 ;
    }
  

  </style>