(function(){"use strict";var t={1671:function(t,n,e){var r=e(9242),i=e(3396);const l=(0,i._)("br",null,null,-1),u=(0,i._)("hr",null,null,-1);function s(t,n,e,r,s,a){const o=(0,i.up)("GuessNumber"),h=(0,i.up)("TakeQRcode");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o),l,u,(0,i.Wm)(h)],64)}var a=e(7139);const o=t=>((0,i.dD)("data-v-0fd49402"),t=t(),(0,i.Cn)(),t),h={class:"GuessNumber"},c=o((()=>(0,i._)("h1",null,"猜數字",-1))),f=o((()=>(0,i._)("br",null,null,-1))),p=o((()=>(0,i._)("br",null,null,-1))),_=o((()=>(0,i._)("br",null,null,-1))),d=o((()=>(0,i._)("br",null,null,-1))),b=o((()=>(0,i._)("br",null,null,-1))),v=o((()=>(0,i._)("br",null,null,-1))),m=o((()=>(0,i._)("br",null,null,-1))),w=o((()=>(0,i._)("br",null,null,-1))),g=o((()=>(0,i._)("br",null,null,-1))),B=o((()=>(0,i._)("br",null,null,-1))),x=o((()=>(0,i._)("br",null,null,-1))),k=o((()=>(0,i._)("br",null,null,-1))),y=o((()=>(0,i._)("br",null,null,-1))),O=o((()=>(0,i._)("br",null,null,-1))),T=o((()=>(0,i._)("br",null,null,-1)));function V(t,n,e,l,u,s){return(0,i.wg)(),(0,i.iD)("div",h,[c,f,p,(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":n[0]||(n[0]=t=>u.inputA=t)},null,512),[[r.nr,u.inputA]]),(0,i.Uk)(" A "),_,d,(0,i.wy)((0,i._)("input",{type:"number","onUpdate:modelValue":n[1]||(n[1]=t=>u.inputB=t)},null,512),[[r.nr,u.inputB]]),(0,i.Uk)(" B "),b,v,m,w,(0,i._)("button",{onClick:n[2]||(n[2]=(...t)=>s.prepare&&s.prepare(...t))}," 開始遊戲 "),g,B,(0,i._)("button",{onClick:n[3]||(n[3]=(...t)=>s.answer&&s.answer(...t))}," 回 答 "),x,k,(0,i._)("div",null,[(0,i._)("span",null,(0,a.zw)(u.refer),1)]),y,O,(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.history,(t=>((0,i.wg)(),(0,i.iD)("span",{key:t.id},[(0,i.Uk)((0,a.zw)(t),1),T])))),128))])])}e(560);var P={name:"GuessNumber",props:{msg:String},data(){return{inputA:0,inputB:0,isOver:!1,remain:5040,tmp:0,forI:void 0,unit_1:void 0,unit_10:void 0,unit_100:void 0,unit_1000:void 0,answerBase:void 0,refer:void 0,history:[]}},methods:{start(){},prepare(){let t=new Array(this.remain);for(let n=0;n<1e4;n++)this.unit_1=n%10,this.unit_10=Math.floor(n/10)%10,this.unit_100=Math.floor(n/100)%10,this.unit_1000=Math.floor(n/1e3)%10,this.unit_1!==this.unit_10&&this.unit_1!==this.unit_100&&this.unit_1!==this.unit_1000&&this.unit_10!==this.unit_100&&this.unit_10!==this.unit_1000&&this.unit_100!==this.unit_1000&&(t[this.tmp]=[this.unit_1000,this.unit_100,this.unit_10,this.unit_1],this.tmp++);this.remain=this.tmp,this.answerBase=t,this.isOver=!1,this.answer()},answer(){let t=this.inputA,n=this.inputB;if(void 0!=this.refer){if(this.history.push(`${this.refer.join("")} ${t}A ${n}B`),t+n===0)for(let t=0;t<4;t++)this.answerBase=this.answerBase.filter((n=>!n.includes(this.refer[t])));else this.answerBase=this.answerBase.filter((e=>{let r=0;for(let t=0;t<4;t++)e.includes(this.refer[t])&&r++;return r===t+n}));if(0==t&&0!=n)for(let t=0;t<4;t++)this.answerBase=this.answerBase.filter((n=>n[t]!=this.refer[t]));else if(0!=t&&0==n)for(let t=0;t<4;t++)this.answerBase=this.answerBase.filter((t=>t.some(((t,n)=>t===this.refer[n]))));let e=[];for(let r=0;r<this.answerBase.length;r++){let i=this.answerBase[r],l=0,u=0;for(let t=0;t<4;t++)if(i[t]==this.refer[t])l++;else for(let n=0;n<4;n++)i[t]==this.refer[n]&&u++;l===t&&u===n&&e.push(i)}e=[...new Set(e)],this.answerBase=e}let e=Math.floor(Math.random()*this.answerBase.length);this.refer=this.answerBase[e],console.log(this.refer)}}},C=e(89);const F=(0,C.Z)(P,[["render",V],["__scopeId","data-v-0fd49402"]]);var A=F;const D=t=>((0,i.dD)("data-v-843abb08"),t=t(),(0,i.Cn)(),t),j={class:"TakeQRcode"},M=D((()=>(0,i._)("h1",null,"掃QR CODE",-1))),U=D((()=>(0,i._)("br",null,null,-1))),I=D((()=>(0,i._)("br",null,null,-1))),Q=D((()=>(0,i._)("br",null,null,-1))),R=D((()=>(0,i._)("br",null,null,-1))),G=D((()=>(0,i._)("br",null,null,-1))),N=D((()=>(0,i._)("br",null,null,-1))),z=["capture","accept"],S={for:"scanningInput",class:"button-primary"},Z=D((()=>(0,i._)("br",null,null,-1))),$=D((()=>(0,i._)("br",null,null,-1))),q=D((()=>(0,i._)("br",null,null,-1)));function E(t,n,e,l,u,s){return(0,i.wg)(),(0,i.iD)("div",j,[M,U,I,(0,i._)("button",{onClick:n[0]||(n[0]=(...t)=>s.changeFrontBack&&s.changeFrontBack(...t))},"鏡頭調換"),Q,R,(0,i._)("button",{onClick:n[1]||(n[1]=(...t)=>s.changePhotoVideo&&s.changePhotoVideo(...t))},"模式調換"),G,N,(0,i._)("input",{id:"scanningInput",class:"hidden",type:"file",capture:u.capture,accept:u.accept},null,8,z),(0,i._)("label",S,(0,a.zw)(u.labelText),1),Z,$,q,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=t=>u.inputText=t)},null,512),[[r.nr,u.inputText]])])}var H={name:"TakeQRcode",props:{msg:String},data(){return{inputText:void 0,textFB:"後鏡頭",textPV:"拍照",labelText:"後鏡頭拍照",capture:"image/*",accept:"environment"}},methods:{changeFrontBack(){this.capture="image/*"==this.capture?"video/*":"image/*",this.textFB="後鏡頭"==this.textFB?"前鏡頭":"後鏡頭",this.labelText=this.textFB+this.textPV},changePhotoVideo(){this.accept="environment"==this.accept?"user":"environment",this.textPV="拍照"==this.textPV?"錄影":"拍照",this.labelText=this.textFB+this.textPV}}};const W=(0,C.Z)(H,[["render",E],["__scopeId","data-v-843abb08"]]);var Y=W,K={name:"App",components:{GuessNumber:A,TakeQRcode:Y}};const J=(0,C.Z)(K,[["render",s]]);var L=J;(0,r.ri)(L).mount("#app")}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var l=n[r]={exports:{}};return t[r].call(l.exports,l,l.exports,e),l.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,l){if(!r){var u=1/0;for(h=0;h<t.length;h++){r=t[h][0],i=t[h][1],l=t[h][2];for(var s=!0,a=0;a<r.length;a++)(!1&l||u>=l)&&Object.keys(e.O).every((function(t){return e.O[t](r[a])}))?r.splice(a--,1):(s=!1,l<u&&(u=l));if(s){t.splice(h--,1);var o=i();void 0!==o&&(n=o)}}return n}l=l||0;for(var h=t.length;h>0&&t[h-1][2]>l;h--)t[h]=t[h-1];t[h]=[r,i,l]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,l,u=r[0],s=r[1],a=r[2],o=0;if(u.some((function(n){return 0!==t[n]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(a)var h=a(e)}for(n&&n(r);o<u.length;o++)l=u[o],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(h)},r=self["webpackChunkhtml_take_qrcode"]=self["webpackChunkhtml_take_qrcode"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(1671)}));r=e.O(r)})();
//# sourceMappingURL=app.a98b5669.js.map