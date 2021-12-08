import { Component } from "react";
import "./Youtube.css";
import axios from "axios"
import React from 'react'


class Youtube extends Component {

    constructor() {
        super();
        this.state = { videos: [] }


        this.handleSearch = this.handleSearch.bind(this);
    }


    async componentDidMount() {

    }


    async handleSearch() {
        try {

            const search_value = document.getElementById("search").value;
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search_value}&maxResults=10&key=AIzaSyDXBdZIh86WBgwJLKsBPMi8RiyRYRJRzXE`);
            console.log(response)
            this.setState({ videos: response.data.items });
        }
        catch (err) {
            alert("Error");
            console.log(err);
        }
    }



    render() {


        return (
            <div className="Youtube">

                <h3> Videos</h3>
                <input type="text" id="search" />
                <button onClick={this.handleSearch} >Serach</button>
                <table border="1px">
                    {this.state.videos.map(video =>

                        <tr>

                            <td> <h2>{video.snippet.title}</h2>  <br />
                                <h5>{video.snippet.description}</h5> <br />
                                <iframe width="600" height="250" src={"https://www.youtube.com/embed/" + video.id.videoId} ></iframe>
                            </td>

                        </tr>
                    )}


                </table>
            </div>
        );
    }
}

export default Youtube;
