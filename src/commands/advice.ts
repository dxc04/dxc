import {Command, flags} from '@oclif/command'
import {AdviceSlip, AdviceService} from '../lib/advice.ts'
import {hostname} from 'os'
import * as chalk from 'chalk'

export default class Advice extends Command {
  static description = 'Shares an advice for you.'

  async run() {
    const name = hostname()
    this.log(`Hello ${name}, here's an advice I can give you.\n`)
    const a: AdviceSlip  = await AdviceService.getAdvice()
    this.log('   '  + chalk.green.italic(`${a.advice} \n`))
  }
}

