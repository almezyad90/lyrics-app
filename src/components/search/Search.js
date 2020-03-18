import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../contaxt/Contaxt';

class Search extends Component {
  state = {
    trackTitle: ''
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        // You had a typo here ${this.state.trackTitel}
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=30&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )

      .then(res => {
        console.log('Search data are back', res.data.message.body.track_list);
        dispatch({
          // Here you called it search-tracks but your reducer looks for search_tracks
          type: 'SEARCH_TRACKS',
          payload: res.data.message.body.track_list
        });

        this.setState({ trackTitel: '' });

        /* console.log(res.data); */
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i> Search For A Song
              </h1>
              <p className="lead text-center">Get The Lyrics</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song Title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  ></input>
                </div>
                <button className="btn btn-info  btn-block " type="submit">
                  Search
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
