import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import NewsItem from './newsItem';
import styled from 'styled-components';
import Categories from './categories';
import usePromise from './lib/usePromise';

const News = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsApi = () => {
    
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);
    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);

    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7642a715980a43a0a002214ae2dcb5ff`);
    }, [category]);

    // useEffect(() => {
    //     const fetchData = async() => {
    //         setLoading(true);
    //         try{
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             const res = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7642a715980a43a0a002214ae2dcb5ff`);
    //             setArticles(res.data.articles);
    //         }
    //         catch(err) {
    //             console.log(err);
    //         }
    //         setLoading(false);
    //     };
    //     fetchData();
    // },[category]);

    if (loading) return <News>loading...</News>;
    if (error) return <News>Error</News>;
    if (!response) return null;
    
    const { articles } = response.data;

    return(
        <>
        <Categories category={category} onSelect={onSelect}/>
        <News>
            {articles && articles.map(article => <NewsItem key={article.url} article={article} />)}
        </News>
        </>
    );
}

export default NewsApi;