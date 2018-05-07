/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

const Koa = require('koa');
const static = require('koa-static');

const {htmlModulesMiddleware} =
    require('../../lib/html-module-transform/koa-middleware.js');

const root = './src';
const app = new Koa();

app.use(htmlModulesMiddleware(root, filePath => {
  return /\.html$/.test(filePath) && !/(index|about)\.html$/.test(filePath);
}));
app.use(static(root));

app.listen(3000);
console.log('Listening on port 3000...');
