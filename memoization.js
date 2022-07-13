 
function add(a,b){
    return a+b
   }
 
   const memoizeAdd = memoize(add);

   memoizeAdd(100,100); 
   memoizeAdd(100); 
   memoizeAdd(100,200) 
   memoizeAdd(100,100)