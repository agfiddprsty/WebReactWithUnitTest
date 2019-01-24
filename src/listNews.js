import React from 'react';
import './App.css'

class Login extends React.Component {
	constructor(){
	  super();
	  this.state = {
		email: '',
		password: '',
		news: []
	  }
	}

componentDidMount(){
	this.props.fetchNews();
}
render() {

	if(this.props.data.fetching){
		return(
		<p>Loading...</p>
		)
	}
	
	return (
		<div>
			<li>{console.log(this.state.email)}
			{this.props.data.news && this.props.data.news.map((news, key) => 
			<div className="row" key={key}>
				<div className="col s6">
				<div className="row card" id="news-card">
				<div className="col-sm-9 card-content">
					<div className="flex-column">
					<p><a className="title" href={news.url}><strong>{news.title}</strong></a></p>
					<br/>
					<p className="desc">{news.description}</p>
					</div>
					<p id="publication-paragraph">Published on {formatDate(news.publishedAt)} by {news.author}</p>	
				</div>
				<div className="col-sm-3 card-image">
					<img className="article-img" src={news.urlToImage} id="article-img" alt="img"/>
				</div>
				</div>
			</div>
			</div>	)}
			</li>
		</div>
	)
	function formatDate(date) {

		const monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		]
		const d = new Date(date)

		const year 		= d.getFullYear()
		const monthName = monthNames[d.getMonth()]	
		const day  		= d.getDate()

		return monthName + " " + day + ", " + year
		}
  	}
}

export default Login
