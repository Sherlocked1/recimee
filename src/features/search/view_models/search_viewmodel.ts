import {SEARCH_RECIPE} from '../../core/API/api';

const useSearchViewModel = () => {

    const callAPI = async (query:string) => {
        const url = `${SEARCH_RECIPE}&&query=${query}`
        console.log('url',url);
        const data = await fetch(url).then(res=>res.json()).catch(err=>console.log(err));
        console.log(data);
    }

    return {
        callAPI
    }
}

export default useSearchViewModel;