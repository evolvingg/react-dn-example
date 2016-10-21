import React from 'react';
import News from './News';

export default class NewsList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
    var products = this.props.newsList.map(news => {
      return (      
        <News 
        key={news.id}
        onStar={this.props.onStar}
        removeStar={this.props.removeStar}
        upVote={this.props.upVote}
        {...news}/>
          );
        });

	return (
        <div className="news-list">
            <table>
                <tbody>                           
                 {products}
                </tbody>
            </table>
        </div>
        );
	}
}