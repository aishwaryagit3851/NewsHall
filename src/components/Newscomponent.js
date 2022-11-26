
import React, { Component } from 'react'
import Loading from './Loading';
import Newsitem from './Newsitem'


export class Newscomponent extends Component {
    constructor() {
        super();

        this.state = {

            articles: [],
            loading: false,
            page: 1

        }

    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a6c492dad1334013943d9e006e3f6fec&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        let page = parsedData.page;
        this.setState({
            articles: parsedData.articles, totalArticles: parsedData.totalResults
        })
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a6c492dad1334013943d9e006e3f6fec&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })


    }
    handleNextClick = async () => {

        if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize))) {

            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a6c492dad1334013943d9e006e3f6fec&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
            this.setState({ loading: true });

            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }


    }

    render() {
        return (
            <div className='container mb-4'>
                <h2 className='my-3 text-center'>News Hall - Top Headlines</h2>
                {this.state.loading && <Loading />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://livenews.foxnews.com/images/2022/09/6d49e6cb063b68e912f1af950d9c8552.jpg"} url={element.url} />
                        </div>
                    })}

                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className='btn btn-dark my-3' onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className='btn btn-dark my-3' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default Newscomponent