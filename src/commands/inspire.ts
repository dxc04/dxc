import {Command} from '@oclif/command'
import {Quote, QuoteService} from '../lib/quote'
import {hostname} from 'os'
import * as chalk from 'chalk'

export default class Inspire extends Command {
  static description = 'Shares a quote for you.'

  async run() {
    this.log(`Hello ${hostname()}, here's your dose of quote to inspire you.\n`)
    const q: Quote = await QuoteService.getQuote()
    this.log('   '  + chalk.yellow.italic(`"${q.content}" - ${q.author} \n`))
  }
}

