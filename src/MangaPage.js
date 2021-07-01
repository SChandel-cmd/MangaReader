import React, { useState, useEffect } from 'react';
import MangaDetails from './MangaDetails';
const axios = require('axios')


const MangaPage=({match:{params:{id,cover}}})=>
{
    const [state, setState] = useState({});
    useEffect(async()=>
        {
            let request = { id: id }
            const coverurl="https://uploads.mangadex.org/covers/"+id+"/"+ cover;
            const mangadetails = await axios.post('http://localhost:3000/getmangadetails',request);
            const chapterdetails = await axios.post('http://localhost:3000/getchapterdetails',request);

            console.log(1);
            console.log(mangadetails);
           
            console.log("not null");
            setState({manga: mangadetails.data, coversrc:coverurl, chapters: chapterdetails.data});
            
            


            // if(state.manga.result=="error")
            // {
            //     setState({found:false})
            // }



            console.log(1213,state.manga);
            console.log(2213213,state.chapters);
            
            
        }, []);
    
   
    
    function load()
    {
    let request = { id: id }
    // const mangadetails = await axios.post('http://localhost:3000/getmangadetails',request);
    const coverurl="https://uploads.mangadex.org/covers/"+id+"/"+ cover;
    // console.log(mangadetails.data);
    return <img src={coverurl}></img>
    }


            return (
                <div>
                    {load()}
                    <h1>
                        <MangaDetails manga={state.manga} found={state.found} ></MangaDetails>
                    </h1> 
                </div>);
    
}

export default MangaPage;