"use strict";
// 即時関数
import {test1} from './test1.js';
import {test1C} from './test1.js';
const CountClass=new test1C();
(function(){
    console.log("OK");
    document.querySelector("#test").addEventListener("click",function(){CountClass.count(this);})
}())