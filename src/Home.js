import './App.css';
import React from 'react';
class Home extends React.Component {
    render() 
    {

        return (
            <div className="bg-anime bg-cover bg-center overflow-x-hidden">
                <div className="flex justify-center bg-yellow bg-opacity-50 w-screen">
                    <div className="bg-black bg-opacity-90 px-50 py-50 w-2/3">
                        <header className="shadow">
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                <h1 className="text-3xl font-bold text-yellow-light">Manga pasand hai mujhe</h1>
                                <button> Press me pls</button>
                            </div>
                        </header>
                        <main>
                            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                <p>a<br />ba<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br /></p>
                                <div className="px-4 py-6 sm:px-0">
                                    <div className="bg-gray-dark border-4 border-dashed border-gray-200 rounded-lg h-96 w-10"></div>
                                </div>
                                {/* <!-- /End replace --> */}
                            </div>
                        </main>
                    </div>
                </div>
                {/* <div className="h-screen bg-gray-dark"></div> */}
            </div>
        );
    }
}



export default Home;