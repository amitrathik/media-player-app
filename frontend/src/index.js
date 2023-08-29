import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import { loadVideos } from './lib/videosService';
import test from './data/test.mov';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo:null
    };
  }

  componentDidMount(){
    // loadVideos()
    //   .then(videos => {
    //     console.log(videos);
    //     this.setState({videos})
    //   })
  }

  render(){
    return(
      <div>
        <video controls>
          <source src={test} type="video/mp4"/>
        </video>
        {/* <SearchBar onSearchTermChange={term=> this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
