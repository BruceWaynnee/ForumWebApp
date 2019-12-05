import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreatePost extends React.Component {
    render() {
        return (
            <div>
                <Navbar option={3} />
                <form className='mx-auto col-9 mt-5 border p-4'>
                    <h4>Create Post</h4><hr />
                    <div className="form-group row d-flex justify-content-center">
                        <label className="col-sm-2 col-form-label">Title:</label>
                        <div className="col-8 pr-0">
                            <input type="text" className="form-control" id="staticEmail" />
                        </div>
                        <textarea className="form-control col-10 mt-3" placeholder="Description..." rows="7" />
                    </div>
                    <div className="form-group row justify-content-end mr-5 pr-3">
                        <button type="submit" className="btn btn-primary float-left">Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreatePost;