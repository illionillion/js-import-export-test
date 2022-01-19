"use strict";
export const test1=(ele)=>{
    alert(ele.dataset.val);
    // return;
};

export class test1C{
  constructor(num){
    this.num=0;
  }
  count(ele){
    alert(ele.dataset.val);
    this.num++;
    console.log(this.num);
    document.querySelector("#txt").value=this.num;
    // return;
  }
}

// export test1;