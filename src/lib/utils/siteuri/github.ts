import { PUBLIC_GIT_KEY } from "$env/static/public";

export const createSiteFromTemplate = async (template:string, siteName:string) => {
    try{
        const url = `https://api.github.com/repos/TeePuppet/${template}/generate`;
        const headers = {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${PUBLIC_GIT_KEY}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
        const body = {
            owner: 'TeePuppet',
            name: siteName,
            description: `Repo for ${siteName} from ${template} template`,
            include_all_branches: false,
            private: true
        };
        const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
        });
        
        
        return await response.json()
    } catch (err) {
        console.error(err)
    }

}

export const deleteRepo = async (repo:string) => {
    try{
        const headers = {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${PUBLIC_GIT_KEY}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
        const response = await fetch(repo, {
        method: 'DELETE',
        headers: headers,
        });
        
        return response
    } catch (err) {
        console.error(err)
    }
}