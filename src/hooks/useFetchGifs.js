import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (collection) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(collection).then(gifs => {

            setTimeout(() => {
                
                setState({
                    data: gifs,
                    loading: false
                })
            }, 300);
        });
    }, [collection]);

    return state; // {data: [], loading: true};
}
