import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
    //   const result = await $fetch('https://jsonplaceholder.typicode.com/users')
        let option={
            method:"POST",
            headers:{
                "Authorization": 'Bearer ' +"secret_T7wfS6SFsdyGnMBEPeDH19XEywx6UKrrrTf6f8VPx4n" ,
                'Notion-Version': '2021-08-16',
            }
        }
      const result =await $fetch('https://api.notion.com/v1/databases/ad023003677c4d29bd8c75872c154b68/query',option);
    
      return result
    }
    