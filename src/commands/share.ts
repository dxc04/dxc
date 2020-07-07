import {Command, flags} from '@oclif/command'
import Advice from './advice'
import Inspire from './inspire'

const SHARE_OPTIONS = ['advice', 'inspire']

export default class Share extends Command {
  static description = 'Shares an advice or inspires you with a quote.'

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: flags.string({
      char: 'n',
      description: 'What to share',
      options: SHARE_OPTIONS,
    }),
  }

  async run() {
    const {flags} = this.parse(Share)

    const name = flags.name ?? SHARE_OPTIONS[Math.floor(Math.random() * SHARE_OPTIONS.length)]
    switch (name) {
    case 'advice':
      await Advice.run()
      break
    case 'inspire':
      await Inspire.run()
      break
    }
  }
}

