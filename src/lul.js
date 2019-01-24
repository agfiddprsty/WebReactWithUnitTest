import React from 'react'

const lul = (props) => {

	const {article} = props
	
	return (
		<div className="col s6">
			<div className="row card" id="news-card">
				<div className="col s8 card-content">
					<div className="flex-column">
						<p><a href={article.url}><strong>{article.title}</strong></a></p>
						<br/>
						<p>{article.description}</p>
					</div>
					<p id="publication-paragraph">Published on {formatDate(article.publishedAt)} by {article.author}</p>	
				</div>
				<div className="col s4 card-image">
					<img className="article-img" src={article.urlToImage} id="article-img"/>
				</div>
			</div>
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

export default lul