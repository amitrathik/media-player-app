import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDUCmh10vv0-uihtrWwq_OsbqKkcq9sU-w';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo:null
    };

    YTSearch({key : API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos})
    })
  }

  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));