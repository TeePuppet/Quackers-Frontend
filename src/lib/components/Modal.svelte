<script lang="ts">
    export let action = "Open Modal";
    import { fly } from 'svelte/transition';
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
    <button class="small" on:click={openModal}>{#if actionIcon !== ""}
      <i class={actionIcon}></i>
    {/if}{action}</button>
  </slot>
  
  {#if isOpen}
    <div class="modal" out:fly={{ y: 100, duration: 100 }}>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="backdrop" on:click={closeModal} />
  
      <div class="content-wrapper" in:fly={{ y: 100, duration: 300 }}>
        <div class="header">
            <slot name="header">
            <!-- fallback -->
                <h1>Your Modal Heading Goes Here...</h1>
            </slot>
            
            <button class="small border-opacity-20" on:click={closeModal}><i class="fa-solid fa-xmark"></i></button>
        </div>
  
        <div class="content">
          <slot name="content" />
          <slot name="footer">
            <!-- fallback -->
            <div>
              <h1>Your Modal Footer Goes Here...</h1>
            </div>
          </slot>
        </div>
  

      </div>

    </div>
  {/if}


  <style>
    div.modal {
      @apply z-20 fixed top-0 left-0 w-full h-screen flex justify-center items-center;
    }
    div.backdrop {
      @apply w-full h-full absolute bg-black bg-opacity-30 backdrop-blur-[2px];
    }
  
    div.content-wrapper {
      @apply fixed mt-12 top-0 left-0 bottom-0 overflow-auto w-full bg-zinc-900 z-10 rounded-t-lg;
    }
    div.content {
      @apply  overflow-y-scroll px-6 pt-4 ;
    }
  
    div.header {
      @apply sticky top-0 z-10 bg-zinc-900 border-b border-b-zinc-800 px-6 pt-3 pb-3 flex justify-between items-center;
    }
  </style>