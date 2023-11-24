<script lang="ts">
    import { onMount } from 'svelte';
    import Quill from 'quill';
    import 'quill/dist/quill.snow.css';
  
    let quillElement: HTMLDivElement;
    let quill: any; // Directly use 'Quill' as the type
  
    onMount(() => {
      quill = new Quill(quillElement, {
        theme: 'snow',
        // Additional configurations
      });
    });
  </script>
  
  <div bind:this={quillElement}></div>
  