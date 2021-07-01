import React from 'react';

class MangaDetails extends React.Component{


render(){
    // if(this.props.manga.result=="error"){
    //     return <div>oops something went wrong</div>
    // }
    
    if(this.props.manga!=null)
    {
        if(this.props.manga.name=="Error"){
            return (<div>oops something went wrong</div>)
        }
        return (<div>12{this.props.manga.data.type}</div>)
    }
    else
    {
        if(this.props.found==false)
        {
            return <div>oh no</div>
        }
        return <div>123</div>

    }



}

}



export default MangaDetails;