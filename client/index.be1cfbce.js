/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */
function e(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}var r=function(r,t){var o,n,i=0,u=0,d=r.length-1;for((t=t||{}).wordsPerMinute=t.wordsPerMinute||200,o=t.wordBound||e;o(r[u]);)u++;for(;o(r[d]);)d--;for(n=u;n<=d;){for(;n<=d&&!o(r[n]);n++);for(i++;n<=d&&o(r[n]);n++);}var a=i/t.wordsPerMinute,f=60*a*1e3;return{text:Math.ceil(a.toFixed(2))+" min read",minutes:a,time:f,words:i}},t=Object.freeze(Object.assign(Object.create(null),r,{default:r,__moduleExports:r}));export{t as i};
