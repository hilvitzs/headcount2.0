import React, { Component } from 'react';
import DistrictRepository from './helper';
import { Cards } from './Cards';
import { Comparison } from './Comparison';
import kinderData from '../data/kindergartners_in_full_day_program';
import { Search } from './Search';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.schools = new DistrictRepository(kinderData);
    let schoolData = this.schools.data;
    this.state = {
      data: schoolData,
      selectedCards: []
    }
  }

  handleSelect(string) {
    let object = this.schools.findByName(string);
    var tempArray = this.state.selectedCards.slice()
    if (this.state.selectedCards.length < 2) {
      if (!this.state.selectedCards.includes(object)) {
        tempArray.push(object)
        this.setState({ selectedCards: tempArray })
      } else {
        let newArray = tempArray.filter((obj) => {
          return obj !== object
        })
        this.setState({ selectedCards: newArray })
      }
    } else if (this.state.selectedCards.length === 2) {
        if (!this.state.selectedCards.includes(object)) {
          tempArray.shift();
          tempArray.push(object);
          this.setState({ selectedCards: tempArray })
        } else {
          let newArray = tempArray.filter((obj) => {
            return obj !== object
          })
          this.setState({ selectedCards: newArray })
        }
    }
  }

  handleSearch(input) {
    let sortedData = this.schools.findAllMatches(input);
    this.setState({data: sortedData})
 }

  findSchoolAverage(name) {
    return this.schools.findAverage(name);
  }

  compareSchools(name1, name2) {
    return this.schools.compareDistrictAverages(name1, name2);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <Search handleSearch={this.handleSearch.bind(this)} />
          <div className='key'>
            <h3>Key</h3>
            <p className='under'>Average is under 0.5</p>
            <p className='over'>Average is 0.5+</p>
            <p className='key-data'>&larr; First school average &#47; Second school average &rarr;</p>
          </div>
        </header>
        <Comparison selectedCards={this.state.selectedCards}
                    compareSchools={this.compareSchools.bind(this)}
                    findSchoolAverage={this.findSchoolAverage.bind(this)}/>
        <Cards data={ this.state.data }
               selectedCards={ this.state.selectedCards }
               onClick={ this.handleSelect.bind(this) } />
      </div>
    );
  }
}
