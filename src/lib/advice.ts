import fetch from 'node-fetch'

export interface AdviceSlip {
    id: number;
    advice: string;
}
export class AdviceService {
  static getAdvice(): AdviceSlip {
    return fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(res => res.slip)
  }
}

