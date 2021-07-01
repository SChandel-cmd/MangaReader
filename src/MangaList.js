import React, { useLayoutEffect } from 'react';
import MangaCard from './MangaCard';

class MangaList extends React.Component
{
    state={page:1}
    pagechange(e, pageno) {
        e.preventDefault()
        this.setState({ page: pageno });
      }

    render()
    {
  
        console.log("rendering starts");
        const L = (this.state.page - 1) * 10;
        const U = this.state.page * 10;


        const pagemanga = this.props.mangas.slice(L, U);
        var covers = this.props.covers;

        const getcovers = (id) => {
            var k;
            covers.results.map((cover) => {
                if (cover.relationships[0].id == id) 
                {
                    k= String(cover.data.attributes.fileName);
                }
            })
            return k;

        }

        const mangas = (pagemanga).map((manga) => {
            var coverfile=getcovers(manga.data.id);
            var coversrc="url('https://uploads.mangadex.org/covers/"+manga.data.id+"/"+coverfile+"')";
            return (
                <MangaCard id={manga.data} coverurl={coversrc} title={manga.data.attributes.title.en} status={manga.data.attributes.status} description={String(manga.data.attributes.description.en).substring(0, 200).concat("...")}/>
            )
            
        })
        var totalpages=[];
        for(var i=1;i<=Math.ceil(this.props.mangas.length/10);i++)
        {
            totalpages.push(i);
        }

        var counter=1;
        const buttons = (totalpages).map((cpage) => {
            if(this.state.page==counter){
                counter++;
                return <div className="inline px-5"><button className="text-yellow" onClick={(e) => this.pagechange(e, cpage)}>{cpage}</button></div>;
            }
            counter++;
            return <div className="inline px-5"><button className="text-white transition duration-500 ease-in-out transform hover:scale-110" onClick={(e) => this.pagechange(e, cpage)}>{cpage}</button></div>;    
        })
       
        return <div> <div className="flex justify-center">{buttons}</div><div>{mangas}</div><div className="flex justify-center">{buttons}</div></div>;
    

}

};

export default MangaList;