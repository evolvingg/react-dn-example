import React from 'react';
import news from './data/news';
import NewsList from './NewsList';

export default class DesignerNews extends React.Component{
	constructor(props) {
    super(props);
    this.onStar = this.onStar.bind(this);
    this.removeStar=this.removeStar.bind(this);
    this.state = {
      newsList: news,
      starred:[],
      data:news.data
    }
  }

  onStar(id)
  {
    console.log("starred");
    var newsList = this.state.newsList.slice(0).map(news => Object.assign({}, news));
    var selectedNews = newsList.find(selectedNews => selectedNews.id === id);
    var starred=this.state.starred.slice(0).map(item => Object.assign({}, item));
    selectedNews.isStarred=true;
    starred.push(selectedNews);
    console.log(starred);
    this.setState({
      newsList,
      starred
    });
  }
  
  upVote(id){
    var newsList = this.state.newsList.slice(0).map(news => Object.assign({}, news));
    var selectedNews = newsList.find(selectedNews => selectedNews.id === id);
    selectedNews.data++;
    selectedNews.upvoted=true;
    this.setState({
    	data:selectedNews.data
    })
  }

  removeStar(id)
  {
  	console.log("removing");
  	var newsList = this.state.newsList.slice(0).map(news => Object.assign({}, news));
    var selectedNews = newsList.find(selectedNews => selectedNews.id === id);
    var starred=this.state.starred.slice(0).map(item => Object.assign({}, item));
    var index;
    var starredItemRemove = starred.find(starredItemRemove => starredItemRemove.id === id);
    index=starred.indexOf(starredItemRemove);
    if(index>-1)
    {
      starred.splice(index, 1);
      selectedNews.isStarred=false;
    }
    this.setState({
      newsList,
      starred
    });
  }

	render()
	{
	return(
		    <div className="container">
		       <h1>{this.props.headerText}</h1>
		       <ul>
		       <li>Top</li>
		       <li>starred</li>
		       </ul>
		       <NewsList 
		       newsList={this.state.newsList}
		       onStar={this.onStar}
		       removeStar={this.removeStar}
		       upVote={this.upVote}
		       />
		    </div>
	    );
	}
}