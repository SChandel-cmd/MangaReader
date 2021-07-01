import React, { useLayoutEffect } from 'react';

class MangaCard extends React.Component
{
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    render()
    {
        return(
            <div className="p-10" key={this.props.id}>
                    <div className="transition duration-500 ease-in-out transform hover:scale-110 border-2 rounded hover:border-yellow lg:flex" key={this.props.id}>
                        <div className="h-48 lg:h-35 lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" key={this.props.id} style={{ "backgroundImage": this.props.coverurl }}>
                        </div>
                        <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4" key={this.props.id}>
                            <div className="" key={this.props.id}>
                                <p className="text-lg text-white flex items-center" key={this.props.id} dangerouslySetInnerHTML={{ __html: this.props.title }} />
                                <div className="text-white font-bold text-sm" key={this.props.id} dangerouslySetInnerHTML={{ __html: this.capitalizeFirstLetter(this.props.status) }}></div>
                                <p className="text-white text-sm lg:w-50" key={this.props.id} dangerouslySetInnerHTML={{ __html: this.props.description }} />

                            </div>
                        </div>
                    </div>

                </div>


        );

        

    }
}

export default MangaCard;