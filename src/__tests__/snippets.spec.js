// @flow
import {
  setTarget,
  setNode,
  setExternals,
  // envVar,
  noParse,
  resolveModules,
} from '../snippets'

describe('snippets', () => {
  test('setTarget()', () => {
    const block = setTarget('electron-renderer')
    const context = {}
    const helpers = {
      merge: configSnippet => prevConfig => configSnippet,
    }

    const result = block(context, helpers)({})
    expect(result).toMatchSnapshot()
  })

  test('setNode()', () => {
    const block = setNode({console: false})
    const context = {}
    const helpers = {
      merge: configSnippet => prevConfig => configSnippet,
    }

    const result = block(context, helpers)({})
    expect(result).toMatchSnapshot()
  })

  test('setExternals()', () => {
    const block = setExternals(['debug'])
    const context = {}
    const helpers = {
      merge: configSnippet => prevConfig => configSnippet,
    }

    const result = block(context, helpers)({})
    expect(result).toMatchSnapshot()
  })

  test('envVar()') // TODO

  test('noParse()', () => {
    const block = noParse(/node_modules/)
    const context = {}
    const helpers = {
      merge: configSnippet => prevConfig => configSnippet,
    }

    const result = block(context, helpers)({})
    expect(result).toMatchSnapshot()
  })

  test('resolveModules()', () => {
    const block = resolveModules(['node_modules', 'src'])
    const context = {}
    const helpers = {
      merge: configSnippet => prevConfig => configSnippet,
    }

    const result = block(context, helpers)({})
    expect(result).toMatchSnapshot()
  })
})
