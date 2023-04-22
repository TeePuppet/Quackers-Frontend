<script lang="ts">
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
    import Tabs from "$lib/components/Tabs.svelte";
	import TabContent from "$lib/components/TabContent.svelte";
	import Row from "$lib/components/Row.svelte";

    // Tabs
    let tabs = ["Site'uri"]
    let activeTab:string = "Site'uri"

</script>

<PageLayout contentClass="px-4 py-4">
    <!-- <Tabs {tabs} bind:activeTab={activeTab}/> -->
    <Row url="settings/siteuri">
        Site'uri
    </Row>
    <Row>
        Tricouri
    </Row>
    <Row>
        Utilizatori
    </Row>


</PageLayout>