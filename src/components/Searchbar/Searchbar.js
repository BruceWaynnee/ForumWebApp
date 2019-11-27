import React from 'react';
class Searchbar extends React.Component{
    render(){
        return(
            <div className="ml-auto col-5">
                <form className="form-inline my-2 my-lg-0 ">
                    <input className="form-control mr-sm-2 rounded-pill col-7" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-dark my-2 my-sm-0 rounded-pill col-2" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        );
    }
}
export default Searchbar;