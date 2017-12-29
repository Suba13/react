import React from 'react';
import './home.css';

export const Print= (a) =>{
    return(
        <div>
    <h1 class="pro">{a.name} {a.age}</h1>
    </div>
);
};

export default () =>{
    return(<h2>hii everyone</h2>);
};

 const Add= () =>{
    return(<h1>add function 2+3=5</h1>);
};
export {Add};

export const Result=(a)=>{
return(
    <div>
<p onClick={a.clickdel}>{a.name} {a.age}</p>
<input type="text" onChange={a.click}/> 
</div>
);
};

export const Value=[{
    name:"suba",
    age:20
},
{name:"raj",
age:19}];

