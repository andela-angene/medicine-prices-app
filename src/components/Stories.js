import React, { Component } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

/*
* Stories component
*/
export default class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    var _this = this;
    const REACT_APP_LATEST_STORIES_ENDPOINT = 'https://spreadsheets.google.com/feeds/list/1QlIqnMCprzz7w4Z3EEmXrWURmK72O1_-MRlBDpAaDzU/od6/public/values?alt=json-in-script&callback=x';
    this.serverRequest =
      axios
        .get(REACT_APP_LATEST_STORIES_ENDPOINT)
        .then(function (response) {
          var results = Papa.parse(response.data);
          results.data.shift();
          const dataArray = []
          results.data.forEach((element) => {
            const dataObj = {
              "Title": element[0],
              "Description": element[1],
              "PublishDate": element[2],
              "AuthorsName": element[3],
              "ImageUrl": element[4],
              "StoryUrl": element[5]
            };
            dataArray.push(dataObj);
          });
          _this.setState({ data: dataArray });
        })
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        <div className="stories" style={{ "maxWidth": "800px", "margin": "0 auto 30px" }}>
          <h3>Latest headlines:</h3><br />
          <div className="row">
            <div className="col-sm-8">
              {data.map((tile, index) => (
                <div key={index} className="media">
                  <div className="media-left">
                    <a href={tile.StoryUrl}>
                      <img className="media-object" src={tile.ImageUrl} alt="..." style={{ "maxWidth": "150px" }} />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{tile.Title}</h4>
                    <p>{tile.Description}</p>
                    <p>
                      <a href={tile.StoryUrl}>Read more...</a>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="visible-xs" style={{ "height": "50px" }}></div>
            <div className="col-sm-4">
              <a className="twitter-timeline" href="https://twitter.com/search?q=%F0%9F%87%B3%F0%9F%87%AC" data-widget-id="869091075746607104">Tweets about <span aria-label="nigerian-flag" role="img">🇳🇬</span></a>
              <script>{!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + "://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs); } }(document, "script", "twitter-wjs")}</script>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

