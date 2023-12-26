import React, { Component } from 'react';

import axios from 'axios';
import styles from './AssetSearch.module.css'



class AssetSearch extends Component {

  constructor() {
    super();
    this.state = {
      req: {
        "pageNumber": 1,
        "searchCondition": null,
        "pageSize": 10,
        "searchType": "web"
      },
      searchResult: null, // 存储搜索结果的JSON
    };
  }


  handleInputChange = (event) => {
    this.setState({
      req: {
        "pageNumber": 1,
        "searchCondition": event.target.value,
        "pageSize": 10,
        "searchType": "web"
      }
    });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleSearch = async () => {
    const { req } = this.state;

    const config = {
      headers: {
        'userId': '141',
        'tenantId': 'd0a048448701531083fb3be35beed5cd',
      }
    };
    try {
      // 发送POST请求
      const response = await axios.post('/exposed/search', req, config);
      this.setState({ searchResult: response.data });
    } catch (error) {
      console.error('Error:', error);
    }
  };



  render() {
    const { searchTerm, searchResult } = this.state;

    return (
      <div>
        <div >
          <input
            type="text"
            placeholder="Enter search term"
            value={searchTerm}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            className={styles.searchBox}
          />
          <button className={styles.searchButton} onClick={this.handleSearch}>Search</button>
        </div>

        {searchResult && (
            <div>
              <h2>Search Result:</h2>
              <pre>{JSON.stringify(searchResult, null, 2)}</pre>
            </div>
          )}
      </div>

    );
  }
}

export default AssetSearch;