# Nest.js Sample

## Description

`nestjs` を使用したサーバサイドのサンプル

## Installation

```bash
$ yarn install
```

## Development

GraphQLの定義ファイル生成は下記コマンドにて  
※`.graphql`ファイルを編集したら実行

```bash
# one time
$ ts-node src/generate-typings.ts

# watch
$ ts-node src/generate-typings.ts --watch
```


## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
