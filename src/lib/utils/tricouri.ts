

export const addAccount = async (data:string) => {
    console.log("Account Added - ", data)
}

export const getTeePublicTag = async (tag:string) => {
    let tagReq = await fetch(`https://getteepublictag-okywtmisca-lz.a.run.app/?tag=${tag}`);
    return {
            searchTag: tag,
            searchScore: 0,
            data: await tagReq.json()
    }
}