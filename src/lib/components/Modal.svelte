<script lang="ts">
    export let action = "Open Modal";
    let isOpen = false
    function open() {
      isOpen = true
    }
    function close() {
      isOpen = false
    }
  </script>

<style>
  div.modal {
    @apply z-10 fixed top-0 left-0 w-full h-screen flex justify-center items-center;
  }
  div.backdrop {
    @apply w-full h-full absolute bg-black bg-opacity-60;
  }

  div.content-wrapper {
    @apply fixed mt-20 top-0 left-0 bottom-0 overflow-auto w-full bg-zinc-900 z-10 rounded-t-lg border-t border-zinc-700;
  }
  div.content {
    @apply  overflow-y-scroll px-6 pt-6 ;
  }

  div.header {
    @apply bg-zinc-900 border-b border-b-zinc-800 px-6 pt-6 pb-4 flex justify-between items-center;
  }
</style>

<slot name="trigger" {open}>
    <!-- fallback trigger to open the modal -->
    <button on:click={open}>{action}</button>
  </slot>
  
  {#if isOpen}
    <div class="modal">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="backdrop" on:click={close} />
  
      <div class="content-wrapper">
        <div class="header">
            <slot name="header">
            <!-- fallback -->
                <h1>Your Modal Heading Goes Here...</h1>
            </slot>
            <button on:click={close}>Inchide</button>
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