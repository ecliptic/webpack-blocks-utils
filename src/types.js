// @flow
export type Config = Object

export type Helpers = {merge: Config => Config}

export type Block = {
  (context: Object, helpers: Helpers): Config => Config,
  post: (context: Object, helpers: Helpers) => Config => Config
}
