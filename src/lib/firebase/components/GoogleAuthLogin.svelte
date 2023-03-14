<script lang="ts">
    import { googleSignIn } from "$lib/firebase/client";
</script>

<button type="button" on:click={googleSignIn} aria-label="google authentication sign-in">
    Sign-in with Google
</button>
