const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
const apiKEY = '6fff77f1ff594bad8332a571f9a8964d'

newsRouter.get('/', async(req, res) => {
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&sortBy=popularity&apiKey=${apiKEY}`)
        // console.log(newsAPI.data.articles.slice(0, 6))
        res.render('home', {articles: newsAPI.data.articles.slice(0, 6)})
    }catch(err) {
        if(err.response) {
            res.render('home', {articles: null})
        }
        console.log('ERROR!', err)}
})

newsRouter.get('/business', async(req, res) => {
    try {
        const businessAPI = await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=business&language=en&sortBy=popularity&apiKey=${apiKEY}`)
        // console.log(businessAPI.data.sources.slice(0, 6))
        res.render('business', {articles: businessAPI.data.sources.slice(0, 12)})
    }catch(err) {
        if(err.response) {
            res.render('business', {articles: null})
        }
        console.log('ERROR!', err)}
})

newsRouter.get('/entertainment', async(req, res) => {
    try {
        const entertainmentAPI = await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=entertainment&language=en&sortBy=popularity&apiKey=${apiKEY}`)
        // console.log(entertainmentAPI.data.sources.slice(0, 12))
        res.render('entertainment', {articles: entertainmentAPI.data.sources.slice(0, 12)})
    } catch(err) {
        if(err.response) {
            res.render('entertainment', {articles: null})
        }
        console.log('ERROR!', err)}
})

newsRouter.get('/health', async(req, res) => {
    try {
        const healthAPI = await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=entertainment&language=en&apiKey=${apiKEY}`)
        // console.log(healthAPI.data.sources.slice(0, 12))
        res.render('health', {articles: healthAPI.data.sources.slice(0, 12)})
    } catch(err) {
        if(err.response) {
            res.render('health', {articles: null})
        }
        console.log('ERROR!', err)}
})

newsRouter.get('/science', async(req, res) => {
    try {
        const scienceAPI = await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=science&category=technology&language=en&apiKey=${apiKEY}`)
        // console.log(scienceAPI.data.sources.slice(0, 4))
        res.render('science', {articles: scienceAPI.data.sources})
    } catch(err) {
        if(err.response) {
            res.render('science', {articles: null})
        }
        console.log('ERROR!', err)}
})

newsRouter.get('/sports', async(req, res) => {
    try {
        const sportsAPI = await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=sports&language=en&apiKey=${apiKEY}`)
        // console.log(scienceAPI.data.sources.slice(0, 4))
        res.render('sports', {articles: sportsAPI.data.sources})
    } catch(err) {
        if(err.response) {
            res.render('sports', {articles: null})
        }
        console.log('ERROR!', err)}
})

newsRouter.get('/search', async(req, res) => {
    try {
        res.render('search')
    } catch(err) {
        if(err.response) {
            res.render('search', {articles: null})
        }
        console.log('ERROR!', err)}
})

newsRouter.post('', async(req, res) => {
    let query = req.body.search

    try {
        const searchAPI = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKEY}`)
        console.log(searchAPI.data.articles.slice(0, 4))
        res.render('searchResults', {articles: searchAPI.data.articles.slice(0, 12)})
    } catch(err) {
        if(err.response) {
            res.render('searchResults')
        }
        console.log('ERROR!', err)}
})

module.exports = newsRouter