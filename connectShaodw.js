let graph = {100: new Set([67, 66]),
         67: new Set([100, 82, 63]),
         66: new Set([100, 73, 69]),
         82: new Set([67, 61, 79]),
         63: new Set([67]),
         73: new Set([66]),
         69: new Set([66, 65, 81]),
         61: new Set([82]),
         79: new Set([82, 87, 77]),
         65: new Set([69, 84, 99]),
         81: new Set([69]),
         87: new Set([79, 31, 78]),
         77: new Set([79]),
         84: new Set([65]),
         99: new Set([65]),
         31: new Set([87]),
         78: new Set([87])};


function connectShadowMax(graph, start) {
    let visited = [];
    let stack = [start];

    while(stack) {
        let next = 0;
        next = stack.pop();
        if(!visited.includes(next)) {
            visited.push(next);
            let exceptParent = new Set([...graph[next]].filter(x=>!(new Set(visited).has(x))));
            if([...exceptParent].length === 0) {
                break;
            }
            stack.push(Math.max(...exceptParent));
            // for(var v of exceptParent) {
            //     stack.push(v);
            // }
        }
        if(stack.length == 0) break;
    }

    return visited;
}
function connectShadowMin(graph, start) {
    let visited = [];
    let stack = [start];

    while(stack) {
        let next = 0;
        next = stack.pop();
        if(!visited.includes(next)) {
            visited.push(next);
            let exceptParent = new Set([...graph[next]].filter(x=>!(new Set(visited).has(x))));
            if([...exceptParent].length === 0) {
                break;
            }
            stack.push(Math.min(...exceptParent));
            // for(var v of exceptParent) {
            //     stack.push(v);
            // }
        }
        if(stack.length == 0) break;
    }

    return visited;
}
console.log((connectShadowMax(graph, 100).map((curr)=>{return String.fromCharCode(curr)})).join(''));
console.log((connectShadowMin(graph, 100).map((curr)=>{return String.fromCharCode(curr)})).join(''));