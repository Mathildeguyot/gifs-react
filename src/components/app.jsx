import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "zac5EvG19YCVa"
    };

    this.search("delphine");
  }

  search = (query) => {
    giphy('jLsUhXU1jVb4vLXsTnFyj86Zl0ixnHaz').search({
      q: query,
      rating: 'g',
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render () {

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gif={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
