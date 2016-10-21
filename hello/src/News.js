import React from 'react';

export default class News extends React.Component{
	constructor(props){
		super(props);
		this.onStar = this.onStar.bind(this);
		this.removeStar = this.removeStar.bind(this);
		this.upVote = this.upVote.bind(this);
	}

	onStar(){
		this.props.onStar(this.props.id);
	}
	removeStar(){
		this.props.removeStar(this.props.id);
	}

	chk()
	{
		//this.props.chk(this.props.id);
	}
	upVote()
	{
		this.props.upVote(this.props.id);
	}

	render(){
		return( 
			   <tr>
			   <td className="upvote">
               <i className="upvote" onClick={this.upvoted?this.chk:this.upVote}></i>
               <p>{this.props.data}</p>
               </td>
               <td className="news">{this.props.name}</td>
               <td className="star">
               <i className={this.isStarred ?"star starred":"star"} 
                  onClick={this.isStarred ? this.removeStar: this.onStar}></i>
               </td>
               </tr>)
	}
}