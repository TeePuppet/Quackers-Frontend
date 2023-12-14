<script lang="ts">
	import Modal from "$lib/components/Modal.svelte";
    import Button from "$lib/components/elements/button/Button.svelte";
	import Input from "$lib/components/elements/inputs/Input.svelte";
	import { addAccount } from "$lib/utils/tricouri";

    let accoutCookie:string = ""

</script>

<div class="mt-6 flex justify-between items-center mb-2">
    <h2>Accounts</h2>
    <div class="flex gap-2">
        <Modal action="Add account">
            <div slot="content">
                <Input label="Name" placeholder="Set a name for your account" bind:value={accoutCookie}/>
                <Input label="Platform" placeholder="Set a name for your account" bind:value={accoutCookie}/>
                <Input label="Account cookie" placeholder="Add cookie here" bind:value={accoutCookie}/>
                <Button style="primary" customClass="w-full" on:click={() => addAccount("Test")}>Adauga</Button>
            </div>
        </Modal>
    </div>
</div>

<div class="flex gap-2 overflow-x-scroll">
    <a href="/app/tricouri/accounts/silviu" class="accountCard">
        <div class="accountDetails">
            <h2>Made by Serif</h2>
            <p class="text-sm">Designs: 123</p>
        </div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="accountAvatar"
        src="https://res.cloudinary.com/teepublic/image/private/s--v_LbJ0gy--/ar_1:1,c_fill,h_324,w_324/d_misc:avatars:f_5.png,f_auto,q_auto:low/v1665233375/production/stores/258815/avatar.jpg"
        />
        <!-- svelte-ignore a11y-missing-attribute -->
        <img 
        class="accountCover" 
        src="https://res.cloudinary.com/teepublic/image/private/s--n-wfRr4h--/ar_10:3,c_fill,h_300,w_1000/d_misc:cover-photo.jpg,f_avif,q_auto:good/v1665233387/production/stores/258815/banner.jpg"
        />
    </a>

    <a href="/app/tricouri/accounts/silviu" class="accountCard">
        <div class="accountDetails">
            <h2>Made by Serif</h2>
            <p class="text-sm">Designs: 123</p>
        </div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="accountAvatar"
        src="https://res.cloudinary.com/teepublic/image/private/s--v_LbJ0gy--/ar_1:1,c_fill,h_324,w_324/d_misc:avatars:f_5.png,f_auto,q_auto:low/v1665233375/production/stores/258815/avatar.jpg"
        />
        <!-- svelte-ignore a11y-missing-attribute -->
        <img 
        class="accountCover" 
        src="https://res.cloudinary.com/teepublic/image/private/s--n-wfRr4h--/ar_10:3,c_fill,h_300,w_1000/d_misc:cover-photo.jpg,f_avif,q_auto:good/v1665233387/production/stores/258815/banner.jpg"
        />
    </a>

    <a href="/app/tricouri/accounts/silviu" class="accountCard">
        <div class="accountDetails">
            <h2>Made by Serif</h2>
            <p class="text-sm">Designs: 123</p>
        </div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="accountAvatar"
        src="https://res.cloudinary.com/teepublic/image/private/s--v_LbJ0gy--/ar_1:1,c_fill,h_324,w_324/d_misc:avatars:f_5.png,f_auto,q_auto:low/v1665233375/production/stores/258815/avatar.jpg"
        />
        <!-- svelte-ignore a11y-missing-attribute -->
        <img 
        class="accountCover" 
        src="https://res.cloudinary.com/teepublic/image/private/s--n-wfRr4h--/ar_10:3,c_fill,h_300,w_1000/d_misc:cover-photo.jpg,f_avif,q_auto:good/v1665233387/production/stores/258815/banner.jpg"
        />
    </a>

    <a href="/app/tricouri/accounts/silviu" class="accountCard">
        <div class="accountDetails">
            <h2>Made by Serif</h2>
            <p class="text-sm">Designs: 123</p>
        </div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="accountAvatar"
        src="https://res.cloudinary.com/teepublic/image/private/s--v_LbJ0gy--/ar_1:1,c_fill,h_324,w_324/d_misc:avatars:f_5.png,f_auto,q_auto:low/v1665233375/production/stores/258815/avatar.jpg"
        />
        <!-- svelte-ignore a11y-missing-attribute -->
        <img 
        class="accountCover" 
        src="https://res.cloudinary.com/teepublic/image/private/s--n-wfRr4h--/ar_10:3,c_fill,h_300,w_1000/d_misc:cover-photo.jpg,f_avif,q_auto:good/v1665233387/production/stores/258815/banner.jpg"
        />
    </a>
</div>


<style lang="postcss">
    .accountCard {
        @apply block flex-none h-40 w-72 relative border border-white/10 rounded-lg overflow-hidden;
    }

    .accountCover {
        @apply object-cover h-full;
    }

    .accountAvatar {
        @apply absolute w-20 h-20 rounded-full;
    }

    .accountDetails {
        @apply absolute leading-tight bottom-0 left-0 px-4 py-3 w-full bg-gradient-to-t from-black;
    }
</style>