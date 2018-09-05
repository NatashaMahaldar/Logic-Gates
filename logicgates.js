const and = (a, b) =>{
     return a*b;
}
const not=(a)=>{
     return 1-a;
 }

const or = (a,b)=>{
   return a||b;
}
const nand = (a,b)=>{
    const g = and(a,b);
    const h = not(g);
    return h;
    
}
const nor = (a,b)=>{
     const i = or(a,b);
     const j = not(i);
     return j;
}
const xor = (a,b)=>{
    const x = nand(a,b);
    const y = or(a,b);
    const z = and(x,y);
    return z;
}
const xnor = (a,b)=>{
    const p = nand(a,b);
    const q = or(a,b);
    const r = and(p,q);
    const s = not(r);
    return s;
}
const alpha =(a,b)=>{
    const n = xor (not(a),b);
    const m = and(n,b);
    return m;
    
}
const bravo =(a,b)=>{
    const c = xnor(a,b);
    const d = or(c,b);
    const e = nand(a,d);
    return e;
}
const charlie =(a,b)=>{
    v = not(a);
    w = xor(v,b);
    u = not(w);
    return u;
}
const delta = (a,b)=>{
    return or(and(not(a),b),not(b));
}
function main(){
    const a = 0;
    const b = 1;

    console.log("AND resultant is ",and(a,b));
    console.log("OR resultant is ",or(a,b));
    console.log("NOT resultant is ",not(a));
    console.log("NOR resultant is ",nor(a,b));
    console.log("NAND resultant is ",nand(a,b));
    console.log("XOR resultant is ",xor(a,b));
    console.log("XNOR resultant is ",xnor(a,b));
    console.log("alpha resultant is ",alpha(a,b));
    console.log("bravo resultant is ",bravo(a,b));
    console.log("charlie resultant is ",charlie(a,b));
    console.log("delta resultant is ",delta(a,b));
} 
main();