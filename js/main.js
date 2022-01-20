"use strict";
import {test1} from './test1.js';
import {test1C} from './test1.js';
import {test} from './test1.js';
import {getEleId} from './test1.js';
// const CountClass=new test1C();
// 即時関数
(function(){
// window.onload=function(){
    // console.log("OK");
    // console.log=function(){return;}
    // alert=function(){return;}
    // document.getElementById=function(){return;}
    // document.querySelector("#test").addEventListener("click",function(){CountClass.count(this);})  
    // test();
    // document.querySelector("#runbtn").addEventListener("click",function(){
    getEleId("runbtn").addEventListener("click",function(){
    // document.getElementById("runbtn").addEventListener("click",function(){
        eval(document.querySelector("#txt").value);
        // let run=new Function(document.querySelector("#txt").value);
        // run();
    })
// }
}())