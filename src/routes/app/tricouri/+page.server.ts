import * as cheerio from "cheerio";


/** @type {import('./$types').PageLoad} */
export async function load() {
    const tags = await getPopularTags()
    // console.log(tags)
    // const finalTags = await getCompetition(tags);
    return {
        data:tags
    }
}


const getPopularTags = async () => {
  console.log('get tags')
    const trending = await fetch("https://www.teepublic.com/", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "cache-control": "max-age=0",
        "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "sec-gpc": "1",
        "upgrade-insecure-requests": "1",
        "cookie": "_session_id=1f94de6253c3818e7d93acc656675bdb; rs_anonymous_id=IlwiMjBjNzI0NzQtNmU5OS00NzM0LTg3OGItZmE2MWVhY2RlZWE4XCIi--0dc3bfdc1c07de861f4e78108540e0c38c1baa75; rl_user_id=RudderEncrypt%3AU2FsdGVkX19BLPM%2F%2BmUGOp4zFTEp%2FY6kBxndfOSzBr4%3D; rl_trait=RudderEncrypt%3AU2FsdGVkX19ieAU0p%2Bm6e%2BqPJCOHQ93NSpSMANyg6So%3D; rl_group_id=RudderEncrypt%3AU2FsdGVkX1%2BhgKBZvFuxQssMSo6aWoEPrbJhn85hedI%3D; rl_group_trait=RudderEncrypt%3AU2FsdGVkX19Sw%2F0n9AlxBSH1Y2sfIp74VE9cp5W1FHU%3D; rl_page_init_referrer=RudderEncrypt%3AU2FsdGVkX19YPLzrcWOYK9hF7wFOP5fcUh4vBOEbqsI%3D; rl_page_init_referring_domain=RudderEncrypt%3AU2FsdGVkX19y1%2BAWn%2BUIhemURXSr8HeW1El4A9jIy8U%3D; _ga=GA1.2.1729630229.1701098656; _gid=GA1.2.316382980.1701098656; rl_anonymous_id=RudderEncrypt%3AU2FsdGVkX1%2BRsjKonsfBYxUUgEv4RdQ%2FQaTN%2BXnK93OZp7PEbzbcfpj9Yrxmv8yglmCUd5u86BsTFci4vMuMzw%3D%3D; rl_session=RudderEncrypt%3AU2FsdGVkX1%2FDtoxPZH8JPgep%2BYGUSYQarnfN7EUbGpwMuM1GXm8xXAUq3Jx6kb5tY6q4c0KTzkFo0bljAr3kGN6X2W32ZZuJu2bCleVKyaSWPm2VK5WnSby5y8RlfEK8IH6cLPnbl6gOCjcsDT1ADg%3D%3D; _gcl_au=1.1.1916293609.1701098656; gclid=undefined; csrf_token=H9eM2Nn5lxcSoKE%2B1Hb4UMx3z%2Bx8nctGw9w5UewJxbH8MBKcheAwEPV3GG3704RAfQMMJcbwdpUzYiE7QUsELg%3D%3D"
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET"
    });
    const $ = cheerio.load(await trending.text())
    const tagList = $('#jsAutoCompleteHeader').attr('data-trendingsearchresults') as string
    const tags = JSON.parse(tagList)
    return tags;

}
