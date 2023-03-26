<script lang="ts">
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
    @apply fixed top-0 left-0 w-full h-screen flex justify-center items-center;
  }
  div.backdrop {
    @apply w-full h-full absolute bg-black bg-opacity-40;
  }

  div.content-wrapper {
    @apply fixed top-20 left-0 right-0 w-full bottom-0 overflow-y-scroll bg-white z-10 px-6 pt-6;
  }
  div.content {
    @apply overflow-auto;
  }
</style>

<slot name="trigger" {open}>
    <!-- fallback trigger to open the modal -->
    <button on:click={open}>Open</button>
  </slot>
  
  {#if isOpen}
    <div class="modal">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="backdrop" on:click={close} />
  
      <div class="content-wrapper">
        <slot name="header">
          <!-- fallback -->
          <div>
            <h1>Your Modal Heading Goes Here...</h1>
          </div>
        </slot>
  
        <div class="content">
          <slot name="content" />
        </div>
  
        <slot name="footer" {close}>
          <!-- fallback -->
          <div>
            <h1>Your Modal Footer Goes Here...</h1>
            <button on:click={close}>close</button>
          </div>
        </slot>
      </div>
    </div>
  {/if}