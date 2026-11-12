import assert from 'node:assert/strict';
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
const types={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.wasm':'application/wasm'};
const server=createServer(async(req,res)=>{try{let pathname=new URL(req.url,'http://x').pathname;if(pathname==='/')pathname='/index.html';const target=path.resolve(root,'.'+pathname);assert.ok(target.startsWith(root+path.sep));const data=await readFile(target);res.writeHead(200,{'content-type':types[path.extname(target)]||'application/octet-stream'}).end(data)}catch{res.writeHead(404).end()}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch({executablePath:'/snap/bin/chromium',headless:true,args:['--no-sandbox']});
try{const page=await browser.newPage({viewport:{width:1280,height:900}});const errors=[];page.on('pageerror',e=>errors.push(String(e)));await page.goto(`http://127.0.0.1:${server.address().port}/`,{waitUntil:'networkidle'});const state=await page.evaluate(()=>({title:document.title,gpu:document.querySelector('#gpu-status').textContent,loadDisabled:document.querySelector('#load').disabled,runDisabled:document.querySelector('#run').disabled,overflow:document.documentElement.scrollWidth>innerWidth}));assert.match(state.title,/i41/);assert.equal(state.loadDisabled,false);assert.equal(state.runDisabled,true);assert.equal(state.overflow,false);assert.deepEqual(errors,[]);console.log(JSON.stringify(state));}finally{await browser.close();await new Promise(r=>server.close(r))}
