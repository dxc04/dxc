import fetch from 'node-fetch'

export class Quote {
    content: string;
    author: string;

}
export class QuoteService {
  static getQuote(): Quote {

    return fetch('http://api.quotable.io/random')
    .then(res => res.json())
  }
}
