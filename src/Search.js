// import logo from './logo.svg';
import './App.css';
import MangaList from './MangaList';
import React from 'react';
import Loader from './loader';
const axios = require('axios')

class Search extends React.Component {
  state = { mangas: {}, covers: "", loading: 0 };

  search = async (e) => {
    e.preventDefault()
    

    let request = { name: document.getElementById('searchbar').value }
    this.setState({ loading: 1 });
    const resp = await axios.post('http://localhost:3000/searchformanga', request);
    var searchres = resp.data;
    this.setState({ mangas: searchres });
    var coverids = "";
    console.log("request for manga");

    searchres.results.map((manga) => {
      manga.relationships.map((relation) => {
        if (relation.type == "cover_art") {
          coverids = coverids + "&ids[]=" + relation.id;
        }
      })
    })

    let request2 = { query: coverids }
    const coverdetails = await axios.post('http://localhost:3000/getcovers', request2);
    console.log("request for cover");
    this.setState({ covers: coverdetails.data, loading: 0 });

  }
  componentDidMount(){
    var input = document.getElementById("searchbar");
    input.addEventListener("keyup", function (event) {

      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchbutton").click();
      }
    });

  }
  getmanga() {

    const button = document.getElementById('searchbutton');
    const input = document.getElementById('searchbar');
    if (this.state.loading == 0 && this.state.mangas.results == null) {
      return <div></div>
    }
    //this.state.loading==0 && this.state.mangas.results == null
    else if (this.state.loading == 0 && this.state.mangas.results != null && this.state.covers != null) {
      button.disabled = false;
      input.disabled = false;
      return <MangaList mangas={this.state.mangas.results} covers={this.state.covers} />

    }
    else {
      button.disabled = true;
      input.disabled = true;
      return (<div><Loader></Loader><br /><div className="text-yellow"> This can take a few seconds</div></div>

      )
    }

  }






  render() {

    return (
      <div className=" bg-anime bg-cover bg-center overflow-x-hidden">
        <div className="flex justify-center bg-yellow bg-opacity-50 w-screen">
          <div className="flex bg-black bg-opacity-90 w-2/3">

            <div className="container flex flex-col items-center pt-10 px-4 sm:px-6 lg:px-8">
              <div className="flex inline-flex justify-center">
                <input type="text" id="searchbar" className="h-14 w-96 inline justify-self-center rounded z-0 border-none focus:outline-none focus:ring-1 focus:ring-yellow bg-gray text-yellow placeholder-yellow-lighter" autoComplete="off" placeholder="Enter Manga Title" />

                <button id="searchbutton" className="bg-none ml-3 inline text-yellow rounded justify-self-center " onClick={(e) => this.search(e)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out h-6 w-6 text-white hover:text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>

                </button>
                <br></br>
                <br></br>
              </div>

              <br></br>
              {this.getmanga()}

            </div>

            <div className="h-screen"></div>

          </div>
        </div>

      </div >


    );
  }
}



// function search(e) {
//   e.preventDefault()
//   var name = document.getElementById('mangaInput1').value;
//   axios.get('https://api.mangadex.org/manga?title=' + name)
//     .then(resp => {

//       for (var i = 0; i < 10; i++) {
//         console.log(resp.data.results[i].data.attributes);
//       }
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }
export default Search;
