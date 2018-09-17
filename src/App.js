import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts"

const data = [
      {name: '1992', mixed: 0, female: 0, male: 17},
      {name: '1993', mixed: 0, female: 5, male: 25},
      {name: '1994', mixed: 12, female: 0, male: 27},
      {name: '1995', mixed: 27, female: 5, male: 68},
      {name: '1996', mixed: 14, female: 10, male: 129},
      {name: '1997', mixed: 23, female: 16, male: 67},
      {name: '1998', mixed: 8, female: 25, male: 125},
      {name: '1999', mixed: 21, female: 98, male: 172},
      {name: '2000', mixed: 22, female: 112, male: 140},
      {name: '2001', mixed: 34, female: 145, male: 290},
      {name: '2002', mixed: 32, female: 143, male: 207},
      {name: '2003', mixed: 33, female: 78, male: 176},
      {name: '2004', mixed: 45, female: 35, male: 165},
      {name: '2005', mixed: 18, female: 40, male: 144},
      {name: '2006', mixed: 13, female: 40, male: 186},
      {name: '2007', mixed: 9, female: 79, male: 132},
      {name: '2008', mixed: 7, female: 67, male: 204},
      {name: '2009', mixed: 23, female: 84, male: 207},
      {name: '2010', mixed: 5, female: 150, male: 177},
      {name: '2011', mixed: 4, female: 215, male: 242},
      {name: '2012', mixed: 0, female: 262, male: 334},
      {name: '2013', mixed: 4, female: 323, male: 391},
      {name: '2014', mixed: 3, female: 280, male: 485},
      {name: '2015', mixed: 2, female: 311, male: 499},
      {name: '2016', mixed: 2, female: 323, male: 474},
      {name: '2017', mixed: 13, female: 372, male: 481},
      {name: '2018', mixed: 4, female: 217, male: 474},
];

const getPercent = (value, total) => {
	const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
	return `${(decimal * 100).toFixed(fixed)}%`;
};
const renderTooltipContent = (o) => {
	const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);

  return (
  	<div className="customized-tooltip-content">
    	<p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
      	{
        	payload.map((entry, index) => (
          	<li key={`item-${index}`} style={{color: entry.color}}>
            	{`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <AreaChart width={600} height={400} data={data} stackOffset="expand"
            margin={{top: 10, right: 30, left: 0, bottom: 0}} >
          <XAxis dataKey="name"/>
          <YAxis tickFormatter={toPercent}/>
          <Tooltip content={renderTooltipContent}/>
          <Area type='monotone' dataKey='mixed' stackId="1" stroke='#ffc658' fill='#ffc658' />
          <Area type='monotone' dataKey='female' stackId="1" stroke='#8884d8' fill='#8884d8' />
          <Area type='monotone' dataKey='male' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
        </AreaChart>

        <AreaChart width={600} height={400} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='mixed' stackId="1" stroke='#ffc658' fill='#ffc658' />
          <Area type='monotone' dataKey='female' stackId="1" stroke='#8884d8' fill='#8884d8' />
          <Area type='monotone' dataKey='male' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
        </AreaChart>
      </div>
    );
  }
}

export default App;
