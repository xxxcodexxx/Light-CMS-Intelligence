const express = require('express');
const axios = require('axios');

const router = express.Router();
const variable = require('../config.js');

const domain = variable.token;
function getAllArticle(req, res) {
  const url = `${domain}/api/hotArticles`;
  axios.get(url).then((response) => {
    const dataArticle = response.data;
    for (let i = 0; i < dataArticle.length; i++) {
      let arr = [];
      arr = dataArticle[i].images.split(',');
      dataArticle[i].images = arr[0];
    }
    axios.get(`${domain}/api/lastArticles`).then((responseLast) => {
      const lastArticles = responseLast.data;
      let arrLastArticle = [];
      arrLastArticle = lastArticles.images.split(',');
      axios.get(`${domain}/api/Article/Technology`).then((responseTech) => {
        const technologyArticle = responseTech.data;
        for (let i = 0; i < technologyArticle.length; i++) {
          let arr = [];
          arr = technologyArticle[i].images.split(',');
          technologyArticle[i].images = arr[0];
        }
        axios.get(`${domain}/api/Article/Education`).then((responseEdu) => {
          const educationArticle = responseEdu.data;
          axios.get(`${domain}/api/Article/Family`).then((responseFa) => {
            const faArticle = responseFa.data;
            axios.get(`${domain}/api/Article/World`).then((responseWo) => {
              const worldArticle = responseWo.data;
              axios.get(`${domain}/api/Article/Sports`).then((responseSp) => {
                let arr = [];
                const sportArticle = responseSp.data;
                for (let i = 0; i < sportArticle.length; i++) {
                  arr = sportArticle[i].images.split(',');
                  sportArticle[i].images = arr[0];
                }
                res.render('allArticle',
                  { Article: dataArticle, arr, lastArticlesdata: lastArticles, arrLastArticle, tech: technologyArticle, edu: educationArticle, fa: faArticle, world: worldArticle, sport: sportArticle });
              });
            });
          });
        });
      });
    });
  });
}

router.get('/', getAllArticle);
function getTechArticle(req, res) {
  axios.get(`${domain}/api/allArticle/Technology`).then((response) => {
    const techArticles = response.data;
    for (let i = 0; i < techArticles.length; i++) {
      let arr = [];
      arr = techArticles[i].images.split(',');
      techArticles[i].images = arr[0];
    }
    axios.get(`${domain}/api/hotArticle/Technology`).then((responseHotTech) => {
      const hotTechArticle = responseHotTech.data;
      let arrHotArticle = [];
      arrHotArticle = hotTechArticle.images.split(',');
      res.render('technologyArticle', { tech: techArticles, hot: hotTechArticle, arrHotArticle });
    });
  });
}
router.get('/technology', getTechArticle);
function getEduArticle(req, res) {
  axios.get(`${domain}/api/allArticle/Education`).then((response) => {
    const eduArticles = response.data;
    for (let i = 0; i < eduArticles.length; i++) {
      let arr = [];
      arr = eduArticles[i].images.split(',');
      eduArticles[i].images = arr[0];
    }
    axios.get(`${domain}/api/hotArticle/Education`).then((responseHotEdu) => {
      const hotEduArticle = responseHotEdu.data;
      let arrHotArticle = [];
      arrHotArticle = hotEduArticle.images.split(',');
      res.render('educationArticle', { edu: eduArticles, hot: hotEduArticle, arrHotArticle });
    });
  });
}
router.get('/education', getEduArticle);
function getSpArticle(req, res) {
  axios.get(`${domain}/api/allArticle/Sports`).then((response) => {
    const spArticles = response.data;
    for (let i = 0; i < spArticles.length; i++) {
      let arr = [];
      arr = spArticles[i].images.split(',');
      spArticles[i].images = arr[0];
    }
    axios.get(`${domain}/api/hotArticle/Sports`).then((responseHotSp) => {
      const hotSpArticle = responseHotSp.data;
      let arrHotArticle = [];
      arrHotArticle = hotSpArticle.images.split(',');
      res.render('sportArticles', { sp: spArticles, hot: hotSpArticle, arrHotArticle });
    });
  });
}
router.get('/sport', getSpArticle);
function getWoArticle(req, res) {
  axios.get(`${domain}/api/allArticle/World`).then((response) => {
    const woArticles = response.data;
    for (let i = 0; i < woArticles.length; i++) {
      let arr = [];
      arr = woArticles[i].images.split(',');
      woArticles[i].images = arr[0];
    }
    axios.get(`${domain}/api/hotArticle/World`).then((responseHotWo) => {
      const hotWoArticle = responseHotWo.data;
      let arrHotArticle = [];
      arrHotArticle = hotWoArticle.images.split(',');
      res.render('worldArticle', { wo: woArticles, hot: hotWoArticle, arrHotArticle });
    });
  });
}
router.get('/world', getWoArticle);
function getFaArticle(req, res) {
  axios.get(`${domain}/api/allArticle/Family`).then((response) => {
    const faArticles = response.data;
    for (let i = 0; i < faArticles.length; i++) {
      let arr = [];
      arr = faArticles[i].images.split(',');
      faArticles[i].images = arr[0];
    }
    axios.get(`${domain}/api/hotArticle/Family`).then((responseHotFa) => {
      const hotFaArticle = responseHotFa.data;
      let arrHotArticle = [];
      arrHotArticle = hotFaArticle.images.split(',');
      res.render('familyArticle', { fa: faArticles, hot: hotFaArticle, arrHotArticle });
    });
  });
}
router.get('/family', getFaArticle);
module.exports = router;