import React, { Component } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortUrl: ""
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const url = this.refs.url.value;
    if (!url) return;

    const res = await axios.post("/api/item", {
      originalUrl: url,
      shortBaseUrl: "http://localhost"
    });

    const { shortUrl } = res.data;
    this.setState({ shortUrl });
  }

  render() {
    const { shortUrl } = this.state;
    return (
      <div className="container">
        <h1 className="text-primary align-center mt-3">URL Shortener</h1>
        <form className="my-5" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row no-gutters align-items-center">
            <div className="col">
              <input
                className="form-control form-control-lg form-control-borderless"
                type="search"
                placeholder="Enter your URL..."
                ref="url"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            {/*end of col*/}
            <div className="col-auto">
              <button className="btn btn-lg btn-success" type="submit">
                Shorten
              </button>
            </div>
            {/*end of col*/}
          </div>
        </form>
        {shortUrl && (
          <div className="alert alert-warning" role="alert">
            <a
              href={shortUrl}
              className="alert-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default App;
