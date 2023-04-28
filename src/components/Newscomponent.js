
import React, { Component } from 'react'
import Loading from './Loading';
import Newsitem from './Newsitem';
import { FaSearch } from 'react-icons/fa';



export class Newscomponent extends Component {

    constructor() {
        super();

        this.state = {

            articles: [],
            character: '',
            loading: true,
            page: 1
         
        }
       
    }

  

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=59f265c7d5594270b06c4d4528335470&page=1&pagesize=6&category=${this.props.category}&q=${this.state.character}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        let page = parsedData.page;
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
           
            loading: false
        })

    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=59f265c7d5594270b06c4d4528335470&page=${this.state.page - 1}&pageSize=6&category=${this.props.category}&q=${this.state.character}`;
        

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

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=59f265c7d5594270b06c4d4528335470&page=${this.state.page + 1}&pageSize=6&category=${this.props.category}&q=${this.state.character}`;
          

            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
               
             
                loading: false
            })
        }


    }


    handleSubmit = (e) => e.preventDefault()
    handleSearch = async (e) => {
        this.setState({
            character: e.target.value
        })
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=59f265c7d5594270b06c4d4528335470&page=1&pagesize=6&category=${this.props.category}&q=${this.state.character}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
           loading: false
        })

    }
    
   
   
 
   
  



    render() {
       
        return (
            <div className='container mt-4'>
                <h2 className='text-center' style={{marginTop:'90px'}}>NewsCrowd - Top Headlines on {this.props.category}</h2>
                {this.state.loading && <Loading />}
                <div> <form className="d-flex my-2" role="search" onSubmit={this.handleSubmit} style={{maxWidth:'content',justifyContent:'right'}}>
                    <div><input className="form-control me-2" type="search" onChange={this.handleSearch} placeholder="Search" id="search" aria-label="Search"/></div>
                    <div style={{paddingLeft:'1%'}}><FaSearch/></div>
                </form></div>
              
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 50)+"...." : ""+"..."} description={element.description ? element.description.slice(0, 80)+"...." : ""+"...."} imageUrl={element.urlToImage ? element.urlToImage : "https://livenews.foxnews.com/images/2022/09/6d49e6cb063b68e912f1af950d9c8552.jpg"} url={element.url} date={element.publishedAt} />
                        </div>
                    })}

                </div>

                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className='btn btn-dark my-3' onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled ={this.state.page + 1 > Math.ceil(this.state.totalArticles / 6)} type="button" className='btn btn-dark my-3' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default Newscomponent