

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

export const  getMultipleRandom = (arr:string[], num:number) => {
    console.log(arr)
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
}