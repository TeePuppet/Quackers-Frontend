<script>
	import Row from "$lib/components/Row.svelte";
    import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import Section from "$lib/components/layout/Section.svelte";

    let keywords = [
        {
            keyword: "Christmas",
            result: 23.2,
            competition: 1500
        },
        {
            keyword: "Bluey",
            result: 23.2,
            competition: 560
        },
        {
            keyword: "Halloween",
            result: 23.2,
            competition: 560
        },
        {
            keyword: "Bluey",
            result: 23.2,
            competition: 560
        },
        {
            keyword: "John Wick",
            result: 23.2,
            competition: 560
        },
        {
            keyword: "Horror",
            result: 23.2,
            competition: 560
        },
        {
            keyword: "Hip Hop",
            result: 23.2,
            competition: 560
        },
        {
            keyword: "Righteous Gemstones",
            result: 23.2,
            competition: 560
        }

    ]

    /**
	 * @type {{ keyword: any; result?: number; competition?: number; }}
	 */
    let selectedKeyword

    $: console.log(selectedKeyword)

    let testClick = () => {
        console.log('Click')
    }
</script>

<PageLayout topBar={false}>
    <div class="flex gap-2 items-center justify-between responsive-p-x responsive-p-y" >
        <h2>Merch</h2>
        <div class="flex items-center gap-2">

    </div>
    </div>

    <div class="flex gap-4">
        <Section css="w-1/2">
            <div class="">
                {#each keywords as key }
                <Row>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => selectedKeyword = key}>
                        {key.keyword}
                        {key.result}
                    </div>



                </Row>
    
                {/each}
        </div>
        </Section>
        {#if selectedKeyword}
        <Section css="w-1/2">
                <div class="flex gap-3">
                    <h2>{selectedKeyword.keyword}</h2> 
                    <p>{selectedKeyword.competition}</p>
                    <p>{selectedKeyword.result}</p>
                </div>

                <div class="flex gap-3">
                    <img src="https://res.cloudinary.com/teepublic/image/private/s--t47hO_5n--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829022:production:blanks:beqtwr2j6utublaobvi0,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1677095718/production/designs/39894825_0"/>
                    <img src="https://res.cloudinary.com/teepublic/image/private/s--VhfmmaB_--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829019:production:blanks:ipv78ghaupktk9ogkdxg,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1667970675/production/designs/36371517_0"/>
                    <img src="https://res.cloudinary.com/teepublic/image/private/s--SUUb5-yG--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829021:production:blanks:ypmyd1fntg5klzifbc7n,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1573436556/production/designs/6674466_0"/>
                    <img src="https://res.cloudinary.com/teepublic/image/private/s--7fO7M5tj--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829019:production:blanks:ipv78ghaupktk9ogkdxg,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1446239945/production/designs/278310_2"/>
                    <img src=""/>

                </div>

                <div>
                    <h2>Recomended Tags:   Copy Tags</h2>
                    <ul class="flex gap-2">
                        <li class="bg-white/5 rounded px-2 py-1">christmas</li>
                        <li class="bg-white/5 rounded px-2 py-1">snow</li>
                        <li class="bg-white/5 rounded px-2 py-1">rudolf</li>
                        <li class="bg-white/5 rounded px-2 py-1">snow</li>
                        <li class="bg-white/5 rounded px-2 py-1">rudolf</li>
                        <li class="bg-white/5 rounded px-2 py-1">snow</li>
                        <li class="bg-white/5 rounded px-2 py-1">rudolf</li>
                        <li class="bg-white/5 rounded px-2 py-1">snow</li>
                        <li class="bg-white/5 rounded px-2 py-1">rudolf</li>
                        <li class="bg-white/5 rounded px-2 py-1">snow</li>
                        <li class="bg-white/5 rounded px-2 py-1">rudolf</li>
                        <li class="bg-white/5 rounded px-2 py-1">snow</li>
                        <li class="bg-white/5 rounded px-2 py-1">rudolf</li>
                        <li class="bg-white/5 rounded px-2 py-1">snow</li>
                        <li class="bg-white/5 rounded px-2 py-1">rudolf</li>
                    </ul>

                </div>
                <div>
                    <h2>People also search for</h2>
                </div>

                 {selectedKeyword.keyword}
                 test
            

            <h4>People also search for:</h4>
        </Section>
        {/if}
    </div>

</PageLayout>