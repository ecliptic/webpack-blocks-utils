// @flow
import {copy, copyPattern, copyOptions} from '../copy'

describe('copy', () => {
  describe('copy()', () => {
    test('from only', () => {
      const block = copy('assets/robots.txt')
      const context = {}
      const helpers = {
        merge: configSnippet => {
          expect(configSnippet.plugins[0]).toHaveProperty('apply')
          return prevConfig => configSnippet
        },
      }

      const intermediateConfig = block(context, helpers)({})
      if (block.post) block.post(context, helpers)(intermediateConfig)

      expect(context).toMatchSnapshot()
    })

    test('from and to', () => {
      const block = copy('assets/robots.txt', 'public/assets/robots.txt')
      const context = {}
      const helpers = {
        merge: configSnippet => {
          expect(configSnippet.plugins[0]).toHaveProperty('apply')
          return prevConfig => configSnippet
        },
      }

      const intermediateConfig = block(context, helpers)({})
      if (block.post) block.post(context, helpers)(intermediateConfig)

      expect(context).toMatchSnapshot()
    })

    test('multiple definitions', () => {
      const context = {}
      const helpers = {
        merge: configSnippet => {
          expect(configSnippet.plugins[0]).toHaveProperty('apply')
          return prevConfig => configSnippet
        },
      }

      // The first definition
      copy('assets/not-robots.txt')(context, helpers)({})

      // The second
      const block = copy('assets/robots.txt', 'public/assets/robots.txt')
      const intermediateConfig = block(context, helpers)({})

      if (block.post) block.post(context, helpers)(intermediateConfig)

      expect(context).toMatchSnapshot()
    })
  })

  describe('copyPattern()', () => {
    test('one pattern', () => {
      const block = copyPattern({from: 'test', to: 'target'})
      const context = {}
      const helpers = {
        merge: configSnippet => {
          expect(configSnippet.plugins[0]).toHaveProperty('apply')
          return prevConfig => configSnippet
        },
      }

      const intermediateConfig = block(context, helpers)({})
      if (block.post) block.post(context, helpers)(intermediateConfig)

      expect(context).toMatchSnapshot()
    })

    test('multiple patterns', () => {
      const context = {}
      const helpers = {
        merge: configSnippet => {
          expect(configSnippet.plugins[0]).toHaveProperty('apply')
          return prevConfig => configSnippet
        },
      }

      copyPattern({from: 'first', to: 'row'})(context, helpers)({})

      const block = copyPattern({from: 'second', to: 'row'})
      const intermediateConfig = block(context, helpers)({})
      if (block.post) block.post(context, helpers)(intermediateConfig)

      expect(context).toMatchSnapshot()
    })
  })

  test('copyOptions()', () => {
    const block = copyOptions({debug: 'warning'})
    const context = {}
    const helpers = {
      merge: configSnippet => {
        expect(configSnippet.plugins[0]).toHaveProperty('apply')
        return prevConfig => configSnippet
      },
    }

    const intermediateConfig = block(context, helpers)({})
    if (block.post) block.post(context, helpers)(intermediateConfig)

    expect(context).toMatchSnapshot()
  })
})
