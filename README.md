started with
[rollup-starter-project](https://github.com/rollup/rollup-starter-project)

## install

`npm install -S jhelper`

### API

#### promisify

Wrap node.js style callback API with function, which return promise

```js
const j = require('jhelper')
const fs = require('fs')
const mkdir = j(fs,'mkdir')

mkdir('test')
	.then(()=>console.log('test is created'))
	.catch(()=>console.log('failed to create test'))

```
