// @flow
import {html} from '../html'

describe('html()', () => {
  test('single definition', () => {
    const block = html({template: 'assets/index.html'})
    const context = {}
    const helpers = {
      merge: configSnippet => prevConfig => configSnippet,
    }

    const intermediateConfig = block(context, helpers)({})
    if (block.post) block.post(context, helpers)(intermediateConfig)

    expect(context).toMatchSnapshot()
  })

  test('multiple definitions', () => {
    const context = {}
    const helpers = {
      merge: configSnippet => prevConfig => configSnippet,
    }

    html({showErrors: true})(context, helpers)({})

    // This should be overridden by the below definition
    html({template: 'assets/home.html'})(context, helpers)({})

    const block = html({template: 'templates/index.html'})
    const intermediateConfig = block(context, helpers)({})
    if (block.post) block.post(context, helpers)(intermediateConfig)

    expect(context).toMatchSnapshot()
  })
})
