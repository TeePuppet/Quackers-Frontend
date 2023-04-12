<script lang="ts">
    export let action = "Open Modal";
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
    <div class="modal">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="backdrop" on:click={closeModal} />
  
      <div class="content-wrapper">
        <div class="header">
            <slot name="header">
            <!-- fallback -->
                <h1>Your Modal Heading Goes Here...</h1>
            </slot>
            <button class="small" on:click={closeModal}>Inchide</button>
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
      @apply w-full h-full absolute bg-black bg-opacity-60;
    }
  
    div.content-wrapper {
      @apply fixed mt-14 top-0 left-0 bottom-0 overflow-auto w-full bg-zinc-900 z-10 rounded-t-lg border-t border-zinc-700;
    }
    div.content {
      @apply  overflow-y-scroll px-6 pt-4 ;
    }
  
    div.header {
      @apply bg-zinc-900 border-b border-b-zinc-800 px-6 pt-3 pb-3 flex justify-between items-center;
    }
  </style>