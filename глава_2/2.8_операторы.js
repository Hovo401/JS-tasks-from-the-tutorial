// 1
let a = 1, b = 1;

let c = ++a; // c=2
let d = b++; // d=1

//c=2, d=2

// ===

// 2
let a_ = 2;

let x = 1 + (a_ *= 2);

// a_ = 4, x = 5


// ===

// 4

"" + 1 + 0      // '10'
"" - 1 + 0      // -1        
true + false    // 1            
6 / "3"         // 2    
"2" * "3"       // 6       
4 + 5 + "px"    // '9px'            
"$" + 4 + 5     // '$45'        
"4" - 2         // 2    
"4px" - 2       // NaN        
"  -9  " + 5    // '  -9  5'            
"  -9  " - 5    //  -14           
null + 1        //  1       
undefined + 1   // NaN            
" \t \n" - 2    // -2            

// ===