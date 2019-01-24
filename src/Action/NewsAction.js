import axios from 'axios';

export function fetchNews(){
  return {
    type: 'FETCH_NEWS',
    payload: axios.get('https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=40ffbc8acaf748698a35698d49a7b0cd')
  };
}
