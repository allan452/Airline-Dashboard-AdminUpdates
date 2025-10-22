import React, {useState, useEffect} from 'react';
import ep from "../utils/apiConfig.json"

let apiURL: string | any = ''

switch(window.location.hostname) {
  case 'dev.britanniaaeye.com': apiURL = ''; break;
  case 'britanniaaeye.com': apiURL = ''; break;
  default: apiURL = ep.Product_List_Api_Endppint;
}

function useFetch<T>(url:string, methodName: string, payLoad?: Object) {

    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);

    const endPoint = `${apiURL}${url}`

    useEffect(() => {
        const fetchData = async () => {
            
            setLoading(true);

            try {
                const response = methodName === 'get' ? await getCall() : await postCall();
                if(!response.ok) {
                    throw new Error(`error $(response.status)`)
                }
                const result = await response.json();
                console.log(result)
                setData(result.products);

            } catch(err) {
                console.log(`Product list failed ${err}`);

            } finally {
                setLoading(false)
            }

        }
        fetchData();

        async function getCall() {
            let response = await fetch(endPoint)
            return  await response;
        }
        async function postCall() {
           let response = await fetch(endPoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payLoad),
            })
            return await response;
        }
        
    }, [url])

return {data, loading}


}


export default useFetch