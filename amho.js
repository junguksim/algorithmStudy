let data = ['   + -- + - + -   ',
'   + --- + - +   ',
'   + -- + - + -   ',
'   + - + - + - +   '
]
let s = '';
for(var i of data) {
    s += String.fromCharCode(parseInt(i.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2));
}
console.log(s);