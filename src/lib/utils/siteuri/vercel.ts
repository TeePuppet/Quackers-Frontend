import { PUBLIC_VERCEL_KEY } from "$env/static/public";

export const deployWebsite = async (projectName:string, githubRepo:string, githubRepoID:string) => {
    try{
        const vercelName = projectName.replace(/\W+/g, "").toLowerCase()
        const url = `https://api.vercel.com/v9/projects`;
        const headers = {
            "Authorization": `Bearer ${PUBLIC_VERCEL_KEY}`
        }
        const body = {
            "name": vercelName, 
            // buildCommand: "SOME_STRING_VALUE",
            // commandForIgnoringBuildStep: "SOME_STRING_VALUE",
            // devCommand: "SOME_STRING_VALUE",
            // environmentVariables: [
            //   {
            //     key: "SOME_STRING_VALUE",
            //     target: "mport(/vercel/path0/utils/env-variable-util/types).EnvTarget.Productio",
            //     gitBranch: "feature-1",
            //     type: "system",
            //     value: "SOME_STRING_VALUE"
            //   }
            // ],
            "framework": "astro",
            "gitRepository": {
                "repo": githubRepo,
                "type": "github"
            },
            // installCommand: "SOME_STRING_VALUE",
            // outputDirectory: "SOME_STRING_VALUE",
            // publicSource: false,
            // rootDirectory: "SOME_STRING_VALUE",
            // serverlessFunctionRegion: "SOME_STRING_VALUE",
            // skipGitConnectDuringLink: true
        }
        const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
        });

        const projectData = await response.json()
        console.log(projectData)
        const deployRes = await deployToVercel(vercelName, githubRepoID)
        console.log(deployRes)
        return deployRes
    } catch (err) {
        console.error(err)
    }
}


export const setVercelDomain = async (domainName:string, projectID:string) => {
    try {
        const url = `https://api.vercel.com/v10/projects/${projectID}/domains`;
        const headers = {
            "Authorization": `Bearer ${PUBLIC_VERCEL_KEY}`
        }
        const body = {
            name: domainName,
            // gitBranch: "SOME_STRING_VALUE",
            // redirect: "foobar.com",
            // redirectStatusCode: 307
        }
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


const deployToVercel = async (projectName:string, githubRepoID:string) => {
    try {
        const deployRes = await fetch ("https://api.vercel.com/v13/deployments", {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${PUBLIC_VERCEL_KEY}`
            },
            body: JSON.stringify({
                name: projectName, 
                gitSource: {
                    "ref": "main",
                    "repoId": githubRepoID,
                    "type": "github"
                }
            })
        })

        return await deployRes.json()
    } catch (err) {
        console.error(err)
    }
}

export const deleteVercelProject =async (vercelProjectId:string) => {
    try {
        console.log('Delete Vercel', vercelProjectId)
        const deleteProject = await fetch (`https://api.vercel.com/v9/projects/${vercelProjectId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${PUBLIC_VERCEL_KEY}`
            }
        })

        return true
    } catch (err) {
        return false
    }
}