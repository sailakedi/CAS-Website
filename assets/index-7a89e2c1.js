var lp=Object.defineProperty;var cp=(r,e,t)=>e in r?lp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var me=(r,e,t)=>(cp(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zl="158",os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hp=0,Nc=1,up=2,rd=1,ad=2,Zi=3,sn=0,$t=1,Di=2,bn=0,Ps=1,Oc=2,Uc=3,Fc=4,dp=5,Gn=100,fp=101,pp=102,kc=103,Bc=104,mp=200,gp=201,_p=202,yp=203,al=204,ol=205,vp=206,xp=207,bp=208,Sp=209,Mp=210,Tp=211,Ep=212,wp=213,Ap=214,Rp=0,Cp=1,Lp=2,Ia=3,Pp=4,Dp=5,Ip=6,Np=7,od=0,Op=1,Up=2,Sn=0,Fp=1,kp=2,ld=3,Bp=4,zp=5,zc="attached",Hp="detached",cd=300,Fs=301,ks=302,ll=303,cl=304,$a=306,Bs=1e3,Yt=1001,Na=1002,Ct=1003,hl=1004,Ra=1005,Mt=1006,hd=1007,wn=1008,Mn=1009,Vp=1010,Gp=1011,Hl=1012,ud=1013,_n=1014,_i=1015,tn=1016,dd=1017,fd=1018,$n=1020,Wp=1021,mi=1023,Xp=1024,qp=1025,jn=1026,zs=1027,Yp=1028,pd=1029,$p=1030,md=1031,gd=1033,oo=33776,lo=33777,co=33778,ho=33779,Hc=35840,Vc=35841,Gc=35842,Wc=35843,jp=36196,Xc=37492,qc=37496,Yc=37808,$c=37809,jc=37810,Kc=37811,Zc=37812,Jc=37813,Qc=37814,eh=37815,th=37816,ih=37817,nh=37818,sh=37819,rh=37820,ah=37821,uo=36492,oh=36494,lh=36495,Kp=36283,ch=36284,hh=36285,uh=36286,Er=2300,Hs=2301,fo=2302,dh=2400,fh=2401,ph=2402,Zp=2500,Jp=0,_d=1,ul=2,yd=3e3,Kn=3001,Qp=3200,em=3201,vd=0,tm=1,gi="",at="srgb",Lt="srgb-linear",Vl="display-p3",ja="display-p3-linear",Oa="linear",it="srgb",Ua="rec709",Fa="p3",cs=7680,mh=519,im=512,nm=513,sm=514,rm=515,am=516,om=517,lm=518,cm=519,dl=35044,gh="300 es",fl=1035,nn=2e3,ka=2001;class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _h=1234567;const gr=Math.PI/180,Vs=180/Math.PI;function bi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function Gl(r,e){return(r%e+e)%e}function hm(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function um(r,e,t){return r!==e?(t-r)/(e-r):0}function _r(r,e,t){return(1-t)*r+t*e}function dm(r,e,t,i){return _r(r,e,1-Math.exp(-t*i))}function fm(r,e=1){return e-Math.abs(Gl(r,e*2)-e)}function pm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _m(r,e){return r+Math.random()*(e-r)}function ym(r){return r*(.5-Math.random())}function vm(r){r!==void 0&&(_h=r);let e=_h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xm(r){return r*gr}function bm(r){return r*Vs}function pl(r){return(r&r-1)===0&&r!==0}function xd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ba(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Sm(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),_=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*_,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*_,o*c);break;case"ZYZ":r.set(l*_,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ii(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Wn={DEG2RAD:gr,RAD2DEG:Vs,generateUUID:bi,clamp:St,euclideanModulo:Gl,mapLinear:hm,inverseLerp:um,lerp:_r,damp:dm,pingpong:fm,smoothstep:pm,smootherstep:mm,randInt:gm,randFloat:_m,randFloatSpread:ym,seededRandom:vm,degToRad:xm,radToDeg:bm,isPowerOfTwo:pl,ceilPowerOfTwo:xd,floorPowerOfTwo:Ba,setQuaternionFromProperEuler:Sm,normalize:Ke,denormalize:Ii};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,n,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],g=n[0],m=n[3],p=n[6],v=n[1],y=n[4],x=n[7],S=n[2],w=n[5],M=n[8];return s[0]=a*g+o*v+l*S,s[3]=a*m+o*y+l*w,s[6]=a*p+o*x+l*M,s[1]=c*g+h*v+u*S,s[4]=c*m+h*y+u*w,s[7]=c*p+h*x+u*M,s[2]=d*g+f*v+_*S,s[5]=d*m+f*y+_*w,s[8]=d*p+f*x+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,_=t*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(o*i-n*a)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*s-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new ze;function bd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function wr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mm(){const r=wr("canvas");return r.style.display="block",r}const yh={};function yr(r){r in yh||(yh[r]=!0,console.warn(r))}const vh=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xh=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[Lt]:{transfer:Oa,primaries:Ua,toReference:r=>r,fromReference:r=>r},[at]:{transfer:it,primaries:Ua,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ja]:{transfer:Oa,primaries:Fa,toReference:r=>r.applyMatrix3(xh),fromReference:r=>r.applyMatrix3(vh)},[Vl]:{transfer:it,primaries:Fa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(xh),fromReference:r=>r.applyMatrix3(vh).convertLinearToSRGB()}},Tm=new Set([Lt,ja]),$e={enabled:!0,_workingColorSpace:Lt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Tm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Yr[e].toReference,n=Yr[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Yr[r].primaries},getTransfer:function(r){return r===gi?Oa:Yr[r].transfer}};function Ds(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function mo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hs;class Sd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=wr("canvas")),hs.width=e.width,hs.height=e.height;const i=hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Ds(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ds(t[i]/255)*255):t[i]=Ds(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Em=0;class Md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(go(n[a].image)):s.push(go(n[a]))}else s=go(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function go(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wm=0;class Dt extends rs{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=Yt,n=Yt,s=Mt,a=wn,o=mi,l=Mn,c=Dt.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=bi(),this.name="",this.source=new Md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Kn?at:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?Kn:yd}set encoding(e){yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kn?at:gi}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=cd;Dt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,i=0,n=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,S=(p+1)/2,w=(h+d)/4,M=(u+g)/4,R=(_+m)/4;return y>x&&y>S?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=w/i,s=M/i):x>S?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=w/n,s=R/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=M/s,n=R/s),this.set(i,n,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Am extends rs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Kn?at:gi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Dt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Md(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends Am{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Td extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rm extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-o;const p=l*d+c*f+h*_+u*g,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),w=Math.atan2(S,p*v);m=Math.sin(m*w)/S,o=Math.sin(o*w)/S}const x=o*v;if(l=l*m+d*x,c=c*m+f*x,h=h*m+_*x,u=u*m+g*x,m===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-o*f,e[t+2]=c*_+h*f+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new P,bh=new ki;class on{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mi):Mi.fromBufferAttribute(s,a),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),jr.subVectors(this.max,sr),us.subVectors(e.a,sr),ds.subVectors(e.b,sr),fs.subVectors(e.c,sr),ln.subVectors(ds,us),cn.subVectors(fs,ds),Nn.subVectors(us,fs);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-Nn.z,Nn.y,ln.z,0,-ln.x,cn.z,0,-cn.x,Nn.z,0,-Nn.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-Nn.y,Nn.x,0];return!yo(t,us,ds,fs,jr)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,us,ds,fs,jr))?!1:(Kr.crossVectors(ln,cn),t=[Kr.x,Kr.y,Kr.z],yo(t,us,ds,fs,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new P,new P,new P,new P,new P,new P,new P,new P],Mi=new P,$r=new on,us=new P,ds=new P,fs=new P,ln=new P,cn=new P,Nn=new P,sr=new P,jr=new P,Kr=new P,On=new P;function yo(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){On.fromArray(r,s);const o=n.x*Math.abs(On.x)+n.y*Math.abs(On.y)+n.z*Math.abs(On.z),l=e.dot(On),c=t.dot(On),h=i.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Cm=new on,rr=new P,vo=new P;class zi{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cm.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(rr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(vo)),this.expandByPoint(rr.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new P,xo=new P,Zr=new P,hn=new P,bo=new P,Jr=new P,So=new P;class kr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){xo.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(xo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=hn.dot(this.direction),l=-hn.dot(Zr),c=hn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(xo).addScaledVector(Zr,d),f}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const i=qi.dot(this.direction),n=qi.dot(qi)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,n,s){bo.subVectors(t,e),Jr.subVectors(i,e),So.crossVectors(bo,Jr);let a=this.direction.dot(So),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,e);const l=o*this.direction.dot(Jr.crossVectors(hn,Jr));if(l<0)return null;const c=o*this.direction.dot(bo.cross(hn));if(c<0||l+c>a)return null;const h=-o*hn.dot(So);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,i,n,s,a,o,l,c,h,u,d,f,_,g,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,f,_,g,m)}set(e,t,i,n,s,a,o,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lm,e,Pm)}lookAt(e,t,i){const n=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),un.crossVectors(i,ii),un.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),un.crossVectors(i,ii)),un.normalize(),Qr.crossVectors(ii,un),n[0]=un.x,n[4]=Qr.x,n[8]=ii.x,n[1]=un.y,n[5]=Qr.y,n[9]=ii.y,n[2]=un.z,n[6]=Qr.z,n[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],v=i[3],y=i[7],x=i[11],S=i[15],w=n[0],M=n[4],R=n[8],b=n[12],E=n[1],O=n[5],k=n[9],X=n[13],L=n[2],U=n[6],B=n[10],G=n[14],J=n[3],K=n[7],j=n[11],N=n[15];return s[0]=a*w+o*E+l*L+c*J,s[4]=a*M+o*O+l*U+c*K,s[8]=a*R+o*k+l*B+c*j,s[12]=a*b+o*X+l*G+c*N,s[1]=h*w+u*E+d*L+f*J,s[5]=h*M+u*O+d*U+f*K,s[9]=h*R+u*k+d*B+f*j,s[13]=h*b+u*X+d*G+f*N,s[2]=_*w+g*E+m*L+p*J,s[6]=_*M+g*O+m*U+p*K,s[10]=_*R+g*k+m*B+p*j,s[14]=_*b+g*X+m*G+p*N,s[3]=v*w+y*E+x*L+S*J,s[7]=v*M+y*O+x*U+S*K,s[11]=v*R+y*k+x*B+S*j,s[15]=v*b+y*X+x*G+S*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+g*(+t*l*f-t*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+m*(+t*c*u-t*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,y=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,x=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,S=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,w=t*v+i*y+n*x+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(g*d*s-u*m*s-g*n*f+i*m*f+u*n*p-i*d*p)*M,e[2]=(o*m*s-g*l*s+g*n*c-i*m*c-o*n*p+i*l*p)*M,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*M,e[4]=y*M,e[5]=(h*m*s-_*d*s+_*n*f-t*m*f-h*n*p+t*d*p)*M,e[6]=(_*l*s-a*m*s-_*n*c+t*m*c+a*n*p-t*l*p)*M,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*f+t*l*f)*M,e[8]=x*M,e[9]=(_*u*s-h*g*s-_*i*f+t*g*f+h*i*p-t*u*p)*M,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*p+t*o*p)*M,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*f-t*o*f)*M,e[12]=S*M,e[13]=(h*g*n-_*u*n+_*i*d-t*g*d-h*i*m+t*u*m)*M,e[14]=(_*o*n-a*g*n-_*i*l+t*g*l+a*i*m-t*o*m)*M,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*M,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,_=s*u,g=a*h,m=a*u,p=o*u,v=l*c,y=l*h,x=l*u,S=i.x,w=i.y,M=i.z;return n[0]=(1-(g+p))*S,n[1]=(f+x)*S,n[2]=(_-y)*S,n[3]=0,n[4]=(f-x)*w,n[5]=(1-(d+p))*w,n[6]=(m+v)*w,n[7]=0,n[8]=(_+y)*M,n[9]=(m-v)*M,n[10]=(1-(d+g))*M,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=ps.set(n[0],n[1],n[2]).length();const a=ps.set(n[4],n[5],n[6]).length(),o=ps.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Ti.copy(this);const c=1/s,h=1/a,u=1/o;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=u,Ti.elements[9]*=u,Ti.elements[10]*=u,t.setFromRotationMatrix(Ti),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=nn){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let f,_;if(o===nn)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ka)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=nn){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-s),d=(t+e)*c,f=(i+n)*h;let _,g;if(o===nn)_=(a+s)*u,g=-2*u;else if(o===ka)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ps=new P,Ti=new Be,Lm=new P(0,0,0),Pm=new P(1,1,1),un=new P,Qr=new P,ii=new P,Sh=new Be,Mh=new ki;class Ka{constructor(e=0,t=0,i=0,n=Ka.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ka.DEFAULT_ORDER="XYZ";class Ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dm=0;const Th=new P,ms=new ki,Yi=new Be,ea=new P,ar=new P,Im=new P,Nm=new ki,Eh=new P(1,0,0),wh=new P(0,1,0),Ah=new P(0,0,1),Om={type:"added"},Um={type:"removed"};class ht extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new P,t=new Ka,i=new ki,n=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Be},normalMatrix:{value:new ze}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(wh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(wh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ea.copy(e):ea.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(ar,ea,this.up):Yi.lookAt(ea,ar,this.up),this.quaternion.setFromRotationMatrix(Yi),n&&(Yi.extractRotation(n.matrixWorld),ms.setFromRotationMatrix(Yi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Om)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Um)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ht.DEFAULT_UP=new P(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new P,$i=new P,Mo=new P,ji=new P,gs=new P,_s=new P,Rh=new P,To=new P,Eo=new P,wo=new P;let ta=!1;class wi{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ei.subVectors(e,t),n.cross(Ei);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ei.subVectors(n,t),$i.subVectors(i,t),Mo.subVectors(e,t);const a=Ei.dot(Ei),o=Ei.dot($i),l=Ei.dot(Mo),c=$i.dot($i),h=$i.dot(Mo),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ji),ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getUV(e,t,i,n,s,a,o,l){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),this.getInterpolation(e,t,i,n,s,a,o,l)}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,ji),l.setScalar(0),l.addScaledVector(s,ji.x),l.addScaledVector(a,ji.y),l.addScaledVector(o,ji.z),l}static isFrontFacing(e,t,i,n){return Ei.subVectors(i,t),$i.subVectors(e,t),Ei.cross($i).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Ei.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),wi.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;gs.subVectors(n,i),_s.subVectors(s,i),To.subVectors(e,i);const l=gs.dot(To),c=_s.dot(To);if(l<=0&&c<=0)return t.copy(i);Eo.subVectors(e,n);const h=gs.dot(Eo),u=_s.dot(Eo);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(gs,a);wo.subVectors(e,s);const f=gs.dot(wo),_=_s.dot(wo);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(_s,o);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Rh.subVectors(s,n),o=(u-h)/(u-h+(f-_)),t.copy(n).addScaledVector(Rh,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(gs,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Ao(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=$e.workingColorSpace){if(e=Gl(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ao(a,s,e+1/3),this.g=Ao(a,s,e),this.b=Ao(a,s,e-1/3)}return $e.toWorkingColorSpace(this,n),this}setStyle(e,t=at){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return $e.fromWorkingColorSpace(Ut.copy(this),e),Math.round(St(Ut.r*255,0,255))*65536+Math.round(St(Ut.g*255,0,255))*256+Math.round(St(Ut.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,n=Ut.g,s=Ut.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=at){$e.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,n=Ut.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(ia);const i=_r(dn.h,ia.h,t),n=_r(dn.s,ia.s,t),s=_r(dn.l,ia.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Le;Le.NAMES=wd;let Fm=0;class Ui extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Ps,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==Gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qn extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=km();function km(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function Bm(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=St(r,-65504,65504),en.floatView[0]=r;const e=en.uint32View[0],t=e>>23&511;return en.baseTable[t]+((e&8388607)>>en.shiftTable[t])}function zm(r){const e=r>>10;return en.uint32View[0]=en.mantissaTable[en.offsetTable[e]+(r&1023)]+en.exponentTable[e],en.floatView[0]}const na={toHalfFloat:Bm,fromHalfFloat:zm},vt=new P,sa=new he;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dl,this.updateRange={offset:0,count:-1},this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ke(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ad extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rd extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Si extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hm=0;const di=new Be,Ro=new ht,ys=new P,ni=new on,or=new on,Rt=new P;class Ri extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?Rd:Ad)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,i){return di.makeTranslation(e,t,i),this.applyMatrix4(di),this}scale(e,t,i){return di.makeScale(e,t,i),this.applyMatrix4(di),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(ni.min,or.min),ni.expandByPoint(Rt),Rt.addVectors(ni.max,or.max),ni.expandByPoint(Rt)):(ni.expandByPoint(or.min),ni.expandByPoint(or.max))}ni.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),Rt.add(ys)),n=Math.max(n,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new P,h[E]=new P;const u=new P,d=new P,f=new P,_=new he,g=new he,m=new he,p=new P,v=new P;function y(E,O,k){u.fromArray(n,E*3),d.fromArray(n,O*3),f.fromArray(n,k*3),_.fromArray(a,E*2),g.fromArray(a,O*2),m.fromArray(a,k*2),d.sub(u),f.sub(u),g.sub(_),m.sub(_);const X=1/(g.x*m.y-m.x*g.y);isFinite(X)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(X),v.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(X),c[E].add(p),c[O].add(p),c[k].add(p),h[E].add(v),h[O].add(v),h[k].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let E=0,O=x.length;E<O;++E){const k=x[E],X=k.start,L=k.count;for(let U=X,B=X+L;U<B;U+=3)y(i[U+0],i[U+1],i[U+2])}const S=new P,w=new P,M=new P,R=new P;function b(E){M.fromArray(s,E*3),R.copy(M);const O=c[E];S.copy(O),S.sub(M.multiplyScalar(M.dot(O))).normalize(),w.crossVectors(R,O);const X=w.dot(h[E])<0?-1:1;l[E*4]=S.x,l[E*4+1]=S.y,l[E*4+2]=S.z,l[E*4+3]=X}for(let E=0,O=x.length;E<O;++E){const k=x[E],X=k.start,L=k.count;for(let U=X,B=X+L;U<B;U+=3)b(i[U+0]),b(i[U+1]),b(i[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new qt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ri,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ch=new Be,Un=new kr,ra=new zi,Lh=new P,vs=new P,xs=new P,bs=new P,Co=new P,aa=new P,oa=new he,la=new he,ca=new he,Ph=new P,Dh=new P,Ih=new P,ha=new P,ua=new P;class Xt extends ht{constructor(e=new Ri,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Co.fromBufferAttribute(u,e),a?aa.addScaledVector(Co,h):aa.addScaledVector(Co.sub(t),h))}t.add(aa)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(ra.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ra,Lh)===null||Un.origin.distanceToSquared(Lh)>(e.far-e.near)**2))&&(Ch.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Ch),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,S=y;x<S;x+=3){const w=o.getX(x),M=o.getX(x+1),R=o.getX(x+2);n=da(this,p,e,i,c,h,u,w,M,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);n=da(this,a,e,i,c,h,u,v,y,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,S=y;x<S;x+=3){const w=x,M=x+1,R=x+2;n=da(this,p,e,i,c,h,u,w,M,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,y=m+1,x=m+2;n=da(this,a,e,i,c,h,u,v,y,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Vm(r,e,t,i,n,s,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===sn,o),l===null)return null;ua.copy(o),ua.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ua);return c<t.near||c>t.far?null:{distance:c,point:ua.clone(),object:r}}function da(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,vs),r.getVertexPosition(l,xs),r.getVertexPosition(c,bs);const h=Vm(r,e,t,i,vs,xs,bs,ha);if(h){n&&(oa.fromBufferAttribute(n,o),la.fromBufferAttribute(n,l),ca.fromBufferAttribute(n,c),h.uv=wi.getInterpolation(ha,vs,xs,bs,oa,la,ca,new he)),s&&(oa.fromBufferAttribute(s,o),la.fromBufferAttribute(s,l),ca.fromBufferAttribute(s,c),h.uv1=wi.getInterpolation(ha,vs,xs,bs,oa,la,ca,new he),h.uv2=h.uv1),a&&(Ph.fromBufferAttribute(a,o),Dh.fromBufferAttribute(a,l),Ih.fromBufferAttribute(a,c),h.normal=wi.getInterpolation(ha,vs,xs,bs,Ph,Dh,Ih,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};wi.getNormal(vs,xs,bs,u.normal),h.face=u}return h}class Qs extends Ri{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,s,4),_("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Si(c,3)),this.setAttribute("normal",new Si(h,3)),this.setAttribute("uv",new Si(u,2));function _(g,m,p,v,y,x,S,w,M,R,b){const E=x/M,O=S/R,k=x/2,X=S/2,L=w/2,U=M+1,B=R+1;let G=0,J=0;const K=new P;for(let j=0;j<B;j++){const N=j*O-X;for(let z=0;z<U;z++){const re=z*E-k;K[g]=re*v,K[m]=N*y,K[p]=L,c.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[p]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(z/M),u.push(1-j/R),G+=1}}for(let j=0;j<R;j++)for(let N=0;N<M;N++){const z=d+N+U*j,re=d+N+U*(j+1),oe=d+(N+1)+U*(j+1),ue=d+(N+1)+U*j;l.push(z,re,ue),l.push(re,oe,ue),J+=6}o.addGroup(f,J,b),f+=J,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Vt(r){const e={};for(let t=0;t<r.length;t++){const i=Gs(r[t]);for(const n in i)e[n]=i[n]}return e}function Gm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Cd(r){return r.getRenderTarget()===null?r.outputColorSpace:$e.workingColorSpace}const Wm={clone:Gs,merge:Vt};var Xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xm,this.fragmentShader=qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let Ld=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Gt extends Ld{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,Ms=1;class Ym extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Gt(Ss,Ms,e,t);n.layers=this.layers,this.add(n);const s=new Gt(Ss,Ms,e,t);s.layers=this.layers,this.add(s);const a=new Gt(Ss,Ms,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Ss,Ms,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Ss,Ms,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Ss,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===nn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wl extends Dt{constructor(e,t,i,n,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $m extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kn?at:gi),this.texture=new Wl(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Qs(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:bn});s.uniforms.tEquirect.value=t;const a=new Xt(n,s),o=t.minFilter;return t.minFilter===wn&&(t.minFilter=Mt),new Ym(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}const Lo=new P,jm=new P,Km=new ze;class mn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Lo.subVectors(i,t).cross(jm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Km.getNormalMatrix(e),n=this.coplanarPoint(Lo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new zi,fa=new P;class Xl{constructor(e=new mn,t=new mn,i=new mn,n=new mn,s=new mn,a=new mn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nn){const i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],_=n[9],g=n[10],m=n[11],p=n[12],v=n[13],y=n[14],x=n[15];if(i[0].setComponents(l-s,d-c,m-f,x-p).normalize(),i[1].setComponents(l+s,d+c,m+f,x+p).normalize(),i[2].setComponents(l+a,d+h,m+_,x+v).normalize(),i[3].setComponents(l-a,d-h,m-_,x-v).normalize(),i[4].setComponents(l-o,d-u,m-g,x-y).normalize(),t===nn)i[5].setComponents(l+o,d+u,m+g,x+y).normalize();else if(t===ka)i[5].setComponents(o,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(fa.x=n.normal.x>0?e.max.x:e.min.x,fa.y=n.normal.y>0?e.max.y:e.min.y,fa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pd(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zm(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class ql extends Ri{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const v=p*d-a;for(let y=0;y<c;y++){const x=y*u-s;_.push(x,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const y=v+c*p,x=v+c*(p+1),S=v+1+c*(p+1),w=v+1+c*p;f.push(y,x,w),f.push(x,S,w)}this.setIndex(f),this.setAttribute("position",new Si(_,3)),this.setAttribute("normal",new Si(g,3)),this.setAttribute("uv",new Si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ig=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$g=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,jg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,i_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,n_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,u_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,d_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,f_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,n0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,A0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Jm,alphahash_pars_fragment:Qm,alphamap_fragment:eg,alphamap_pars_fragment:tg,alphatest_fragment:ig,alphatest_pars_fragment:ng,aomap_fragment:sg,aomap_pars_fragment:rg,begin_vertex:ag,beginnormal_vertex:og,bsdfs:lg,iridescence_fragment:cg,bumpmap_pars_fragment:hg,clipping_planes_fragment:ug,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:_g,color_vertex:yg,common:vg,cube_uv_reflection_fragment:xg,defaultnormal_vertex:bg,displacementmap_pars_vertex:Sg,displacementmap_vertex:Mg,emissivemap_fragment:Tg,emissivemap_pars_fragment:Eg,colorspace_fragment:wg,colorspace_pars_fragment:Ag,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Lg,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Gg,envmap_vertex:Dg,fog_vertex:Ig,fog_pars_vertex:Ng,fog_fragment:Og,fog_pars_fragment:Ug,gradientmap_pars_fragment:Fg,lightmap_fragment:kg,lightmap_pars_fragment:Bg,lights_lambert_fragment:zg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Vg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:Yg,lights_physical_fragment:$g,lights_physical_pars_fragment:jg,lights_fragment_begin:Kg,lights_fragment_maps:Zg,lights_fragment_end:Jg,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:i_,map_fragment:n_,map_pars_fragment:s_,map_particle_fragment:r_,map_particle_pars_fragment:a_,metalnessmap_fragment:o_,metalnessmap_pars_fragment:l_,morphcolor_vertex:c_,morphnormal_vertex:h_,morphtarget_pars_vertex:u_,morphtarget_vertex:d_,normal_fragment_begin:f_,normal_fragment_maps:p_,normal_pars_fragment:m_,normal_pars_vertex:g_,normal_vertex:__,normalmap_pars_fragment:y_,clearcoat_normal_fragment_begin:v_,clearcoat_normal_fragment_maps:x_,clearcoat_pars_fragment:b_,iridescence_pars_fragment:S_,opaque_fragment:M_,packing:T_,premultiplied_alpha_fragment:E_,project_vertex:w_,dithering_fragment:A_,dithering_pars_fragment:R_,roughnessmap_fragment:C_,roughnessmap_pars_fragment:L_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:D_,shadowmap_vertex:I_,shadowmask_pars_fragment:N_,skinbase_vertex:O_,skinning_pars_vertex:U_,skinning_vertex:F_,skinnormal_vertex:k_,specularmap_fragment:B_,specularmap_pars_fragment:z_,tonemapping_fragment:H_,tonemapping_pars_fragment:V_,transmission_fragment:G_,transmission_pars_fragment:W_,uv_pars_fragment:X_,uv_pars_vertex:q_,uv_vertex:Y_,worldpos_vertex:$_,background_vert:j_,background_frag:K_,backgroundCube_vert:Z_,backgroundCube_frag:J_,cube_vert:Q_,cube_frag:e0,depth_vert:t0,depth_frag:i0,distanceRGBA_vert:n0,distanceRGBA_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:d0,meshmatcap_vert:f0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:y0,meshphysical_vert:v0,meshphysical_frag:x0,meshtoon_vert:b0,meshtoon_frag:S0,points_vert:M0,points_frag:T0,shadow_vert:E0,shadow_frag:w0,sprite_vert:A0,sprite_frag:R0},ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Pi={basic:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Vt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Vt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Vt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Vt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Vt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Vt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Vt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Vt([ce.lights,ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Pi.physical={uniforms:Vt([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const pa={r:0,b:0,g:0};function C0(r,e,t,i,n,s,a){const o=new Le(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(m,p){let v=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),v=!0);const x=r.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===$a)?(h===void 0&&(h=new Xt(new Qs(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Gs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=$e.getTransfer(y.colorSpace)!==it,(u!==y||d!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Xt(new ql(2,2),new An({name:"BackgroundMaterial",uniforms:Gs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=$e.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(pa,Cd(r)),i.buffers.color.setClear(pa.r,pa.g,pa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function L0(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function u(L,U,B,G,J){let K=!1;if(a){const j=g(G,B,U);c!==j&&(c=j,f(c.object)),K=p(L,G,B,J),K&&v(L,G,B,J)}else{const j=U.wireframe===!0;(c.geometry!==G.id||c.program!==B.id||c.wireframe!==j)&&(c.geometry=G.id,c.program=B.id,c.wireframe=j,K=!0)}J!==null&&t.update(J,r.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,R(L,U,B,G),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(L){return i.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,U,B){const G=B.wireframe===!0;let J=o[L.id];J===void 0&&(J={},o[L.id]=J);let K=J[U.id];K===void 0&&(K={},J[U.id]=K);let j=K[G];return j===void 0&&(j=m(d()),K[G]=j),j}function m(L){const U=[],B=[],G=[];for(let J=0;J<n;J++)U[J]=0,B[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:G,object:L,attributes:{},index:null}}function p(L,U,B,G){const J=c.attributes,K=U.attributes;let j=0;const N=B.getAttributes();for(const z in N)if(N[z].location>=0){const oe=J[z];let ue=K[z];if(ue===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),oe===void 0||oe.attribute!==ue||ue&&oe.data!==ue.data)return!0;j++}return c.attributesNum!==j||c.index!==G}function v(L,U,B,G){const J={},K=U.attributes;let j=0;const N=B.getAttributes();for(const z in N)if(N[z].location>=0){let oe=K[z];oe===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor));const ue={};ue.attribute=oe,oe&&oe.data&&(ue.data=oe.data),J[z]=ue,j++}c.attributes=J,c.attributesNum=j,c.index=G}function y(){const L=c.newAttributes;for(let U=0,B=L.length;U<B;U++)L[U]=0}function x(L){S(L,0)}function S(L,U){const B=c.newAttributes,G=c.enabledAttributes,J=c.attributeDivisors;B[L]=1,G[L]===0&&(r.enableVertexAttribArray(L),G[L]=1),J[L]!==U&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),J[L]=U)}function w(){const L=c.newAttributes,U=c.enabledAttributes;for(let B=0,G=U.length;B<G;B++)U[B]!==L[B]&&(r.disableVertexAttribArray(B),U[B]=0)}function M(L,U,B,G,J,K,j){j===!0?r.vertexAttribIPointer(L,U,B,J,K):r.vertexAttribPointer(L,U,B,G,J,K)}function R(L,U,B,G){if(i.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const J=G.attributes,K=B.getAttributes(),j=U.defaultAttributeValues;for(const N in K){const z=K[N];if(z.location>=0){let re=J[N];if(re===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),re!==void 0){const oe=re.normalized,ue=re.itemSize,Ee=t.get(re);if(Ee===void 0)continue;const He=Ee.buffer,we=Ee.type,Pe=Ee.bytesPerElement,tt=i.isWebGL2===!0&&(we===r.INT||we===r.UNSIGNED_INT||re.gpuType===ud);if(re.isInterleavedBufferAttribute){const Ue=re.data,H=Ue.stride,Nt=re.offset;if(Ue.isInstancedInterleavedBuffer){for(let be=0;be<z.locationSize;be++)S(z.location+be,Ue.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let be=0;be<z.locationSize;be++)x(z.location+be);r.bindBuffer(r.ARRAY_BUFFER,He);for(let be=0;be<z.locationSize;be++)M(z.location+be,ue/z.locationSize,we,oe,H*Pe,(Nt+ue/z.locationSize*be)*Pe,tt)}else{if(re.isInstancedBufferAttribute){for(let Ue=0;Ue<z.locationSize;Ue++)S(z.location+Ue,re.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<z.locationSize;Ue++)x(z.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,He);for(let Ue=0;Ue<z.locationSize;Ue++)M(z.location+Ue,ue/z.locationSize,we,oe,ue*Pe,ue/z.locationSize*Ue*Pe,tt)}}else if(j!==void 0){const oe=j[N];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(z.location,oe);break;case 3:r.vertexAttrib3fv(z.location,oe);break;case 4:r.vertexAttrib4fv(z.location,oe);break;default:r.vertexAttrib1fv(z.location,oe)}}}}w()}function b(){k();for(const L in o){const U=o[L];for(const B in U){const G=U[B];for(const J in G)_(G[J].object),delete G[J];delete U[B]}delete o[L]}}function E(L){if(o[L.id]===void 0)return;const U=o[L.id];for(const B in U){const G=U[B];for(const J in G)_(G[J].object),delete G[J];delete U[B]}delete o[L.id]}function O(L){for(const U in o){const B=o[U];if(B[L.id]===void 0)continue;const G=B[L.id];for(const J in G)_(G[J].object),delete G[J];delete B[L.id]}}function k(){X(),h=!0,c!==l&&(c=l,f(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:X,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:x,disableUnusedAttributes:w}}function P0(r,e,t,i){const n=i.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(n)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function D0(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,x=a||e.has("OES_texture_float"),S=y&&x,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:w}}function I0(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new mn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||_===null||_.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,y=v*4;let x=p.clippingState||null;l.value=x,x=h(_,d,y,f);for(let S=0;S!==y;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==g;++y,x+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function N0(r){let e=new WeakMap;function t(a,o){return o===ll?a.mapping=Fs:o===cl&&(a.mapping=ks),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ll||o===cl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $m(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yl extends Ld{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,Nh=[.125,.215,.35,.446,.526,.582],Xn=20,Po=new Yl,Oh=new Le;let Do=null,Io=0,No=0;const Hn=(1+Math.sqrt(5))/2,Ts=1/Hn,Uh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Hn,Ts),new P(0,Hn,-Ts),new P(Ts,0,Hn),new P(-Ts,0,Hn),new P(Hn,Ts,0),new P(-Hn,Ts,0)];class Fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Io,No),e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:tn,format:mi,colorSpace:Lt,depthBuffer:!1},n=kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O0(s)),this._blurMaterial=U0(s,e,t)}return n}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,i,n){const o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Oh),h.toneMapping=Sn,h.autoClear=!1;const f=new qn({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new Xt(new Qs,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Oh),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;ma(n,v*y,p>2?y:0,y,y),h.setRenderTarget(n),g&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Fs||e.mapping===ks;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ma(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Po)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Uh[(n-1)%Uh.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xn-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Xn;m>Xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const p=[];let v=0;for(let M=0;M<Xn;++M){const R=M/g,b=Math.exp(-R*R/2);p.push(b),M===0?v+=b:M<m&&(v+=2*b)}for(let M=0;M<p.length;M++)p[M]=p[M]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const x=this._sizeLods[n],S=3*x*(n>y-As?n-y+As:0),w=4*(this._cubeSize-x);ma(t,S,w,3*x,2*x),l.setRenderTarget(t),l.render(u,Po)}}function O0(r){const e=[],t=[],i=[];let n=r;const s=r-As+1+Nh.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>r-As?l=Nh[a-r+As-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),y=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let w=0;w<f;w++){const M=w%3*2/3-1,R=w>2?0:-1,b=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(b,g*_*w),y.set(d,m*_*w);const E=[w,w,w,w,w,w];x.set(E,p*_*w)}const S=new Ri;S.setAttribute("position",new qt(v,g)),S.setAttribute("uv",new qt(y,m)),S.setAttribute("faceIndex",new qt(x,p)),e.push(S),n>As&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kh(r,e,t){const i=new ts(r,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ma(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function U0(r,e,t){const i=new Float32Array(Xn),n=new P(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Bh(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function zh(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function $l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function F0(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ll||l===cl,h=l===Fs||l===ks;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Fh(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new Fh(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function k0(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function B0(r,e,t,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let y=0,x=v.length;y<x;y+=3){const S=v[y+0],w=v[y+1],M=v[y+2];d.push(S,w,w,M,M,S)}}else if(_!==void 0){const v=_.array;g=_.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const S=y+0,w=y+1,M=y+2;d.push(S,w,w,M,M,S)}}else return;const m=new(bd(d)?Rd:Ad)(d,1);m.version=g;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function z0(r,e,t,i){const n=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,o,d*l),t.update(f,s,1)}function u(d,f,_){if(_===0)return;let g,m;if(n)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,f,o,d*l,_),t.update(f,s,_)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function H0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function V0(r,e){return r[0]-e[0]}function G0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function W0(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,a=new Qe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(h);if(m===void 0||m.count!==g){let U=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",U)};var f=U;m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let b=0;y===!0&&(b=1),x===!0&&(b=2),S===!0&&(b=3);let E=h.attributes.position.count*b,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const k=new Float32Array(E*O*4*g),X=new Td(k,E,O,g);X.type=_i,X.needsUpdate=!0;const L=b*4;for(let B=0;B<g;B++){const G=w[B],J=M[B],K=R[B],j=E*O*4*B;for(let N=0;N<G.count;N++){const z=N*L;y===!0&&(a.fromBufferAttribute(G,N),k[j+z+0]=a.x,k[j+z+1]=a.y,k[j+z+2]=a.z,k[j+z+3]=0),x===!0&&(a.fromBufferAttribute(J,N),k[j+z+4]=a.x,k[j+z+5]=a.y,k[j+z+6]=a.z,k[j+z+7]=0),S===!0&&(a.fromBufferAttribute(K,N),k[j+z+8]=a.x,k[j+z+9]=a.y,k[j+z+10]=a.z,k[j+z+11]=K.itemSize===4?a.w:1)}}m={count:g,texture:X,size:new he(E,O)},s.set(h,m),h.addEventListener("dispose",U)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=i[h.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<_;x++){const S=g[x];S[0]=x,S[1]=d[x]}g.sort(G0);for(let x=0;x<8;x++)x<_&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(V0);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const S=o[x],w=S[0],M=S[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&h.getAttribute("morphTarget"+x)!==m[w]&&h.setAttribute("morphTarget"+x,m[w]),p&&h.getAttribute("morphNormal"+x)!==p[w]&&h.setAttribute("morphNormal"+x,p[w]),n[x]=M,v+=M):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),n[x]=0)}const y=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function X0(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Dd=new Dt,Id=new Td,Nd=new Rm,Od=new Wl,Hh=[],Vh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function er(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Hh[n];if(s===void 0&&(s=new Float32Array(n),Hh[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Za(r,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function q0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function $0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function j0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function K0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Xh.set(i),r.uniformMatrix2fv(this.addr,!1,Xh),Et(t,i)}}function Z0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Wh.set(i),r.uniformMatrix3fv(this.addr,!1,Wh),Et(t,i)}}function J0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Gh.set(i),r.uniformMatrix4fv(this.addr,!1,Gh),Et(t,i)}}function Q0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ey(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function ty(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function iy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function ny(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function ay(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function oy(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Dd,n)}function ly(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Nd,n)}function cy(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Od,n)}function hy(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Id,n)}function uy(r){switch(r){case 5126:return q0;case 35664:return Y0;case 35665:return $0;case 35666:return j0;case 35674:return K0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return iy;case 5125:return ny;case 36294:return sy;case 36295:return ry;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return hy}}function dy(r,e){r.uniform1fv(this.addr,e)}function fy(r,e){const t=er(e,this.size,2);r.uniform2fv(this.addr,t)}function py(r,e){const t=er(e,this.size,3);r.uniform3fv(this.addr,t)}function my(r,e){const t=er(e,this.size,4);r.uniform4fv(this.addr,t)}function gy(r,e){const t=er(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _y(r,e){const t=er(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yy(r,e){const t=er(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vy(r,e){r.uniform1iv(this.addr,e)}function xy(r,e){r.uniform2iv(this.addr,e)}function by(r,e){r.uniform3iv(this.addr,e)}function Sy(r,e){r.uniform4iv(this.addr,e)}function My(r,e){r.uniform1uiv(this.addr,e)}function Ty(r,e){r.uniform2uiv(this.addr,e)}function Ey(r,e){r.uniform3uiv(this.addr,e)}function wy(r,e){r.uniform4uiv(this.addr,e)}function Ay(r,e,t){const i=this.cache,n=e.length,s=Za(t,n);Tt(i,s)||(r.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Dd,s[a])}function Ry(r,e,t){const i=this.cache,n=e.length,s=Za(t,n);Tt(i,s)||(r.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Nd,s[a])}function Cy(r,e,t){const i=this.cache,n=e.length,s=Za(t,n);Tt(i,s)||(r.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Od,s[a])}function Ly(r,e,t){const i=this.cache,n=e.length,s=Za(t,n);Tt(i,s)||(r.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Id,s[a])}function Py(r){switch(r){case 5126:return dy;case 35664:return fy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return yy;case 5124:case 35670:return vy;case 35667:case 35671:return xy;case 35668:case 35672:return by;case 35669:case 35673:return Sy;case 5125:return My;case 36294:return Ty;case 36295:return Ey;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Ly}}class Dy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=uy(t.type)}}class Iy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Py(t.type)}}class Ny{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function qh(r,e){r.seq.push(e),r.map[e.id]=e}function Oy(r,e,t){const i=r.name,n=i.length;for(Oo.lastIndex=0;;){const s=Oo.exec(i),a=Oo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){qh(t,c===void 0?new Dy(o,r,e):new Iy(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Ny(o),qh(t,u)),t=u}}}class Ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);Oy(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Yh(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Uy=37297;let Fy=0;function ky(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function By(r){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(r);let i;switch(e===t?i="":e===Fa&&t===Ua?i="LinearDisplayP3ToLinearSRGB":e===Ua&&t===Fa&&(i="LinearSRGBToLinearDisplayP3"),r){case Lt:case ja:return[i,"LinearTransferOETF"];case at:case Vl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function $h(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+ky(r.getShaderSource(e),a)}else return n}function zy(r,e){const t=By(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hy(r,e){let t;switch(e){case Fp:t="Linear";break;case kp:t="Reinhard";break;case ld:t="OptimizedCineon";break;case Bp:t="ACESFilmic";break;case zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vy(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function Gy(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wy(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function fr(r){return r!==""}function jh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(r){return r.replace(Xy,Yy)}const qy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yy(r,e){let t=Fe[e];if(t===void 0){const i=qy.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ml(t)}const $y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(r){return r.replace($y,jy)}function jy(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Jh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ky(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function Zy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fs:case ks:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function Qy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case od:e="ENVMAP_BLENDING_MULTIPLY";break;case Op:e="ENVMAP_BLENDING_MIX";break;case Up:e="ENVMAP_BLENDING_ADD";break}return e}function ev(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tv(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ky(t),c=Zy(t),h=Jy(t),u=Qy(t),d=ev(t),f=t.isWebGL2?"":Vy(t),_=Gy(s),g=n.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[f,Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Sn?Hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,zy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=ml(a),a=jh(a,t),a=Kh(a,t),o=ml(o),o=jh(o,t),o=Kh(o,t),a=Zh(a),o=Zh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+a,x=v+p+o,S=Yh(n,n.VERTEX_SHADER,y),w=Yh(n,n.FRAGMENT_SHADER,x);n.attachShader(g,S),n.attachShader(g,w),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function M(O){if(r.debug.checkShaderErrors){const k=n.getProgramInfoLog(g).trim(),X=n.getShaderInfoLog(S).trim(),L=n.getShaderInfoLog(w).trim();let U=!0,B=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,S,w);else{const G=$h(n,S,"vertex"),J=$h(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+G+`
`+J)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(X===""||L==="")&&(B=!1);B&&(O.diagnostics={runnable:U,programLog:k,vertexShader:{log:X,prefix:m},fragmentShader:{log:L,prefix:p}})}n.deleteShader(S),n.deleteShader(w),R=new Ca(n,g),b=Wy(n,g)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=n.getProgramParameter(g,Uy)),E},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}let iv=0;class nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sv(e),t.set(e,i)),i}}class sv{constructor(e){this.id=iv++,this.code=e,this.usedTimes=0}}function rv(r,e,t,i,n,s,a){const o=new Ed,l=new nv,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function m(b,E,O,k,X){const L=k.fog,U=X.geometry,B=b.isMeshStandardMaterial?k.environment:null,G=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),J=G&&G.mapping===$a?G.image.height:null,K=_[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,N=j!==void 0?j.length:0;let z=0;U.morphAttributes.position!==void 0&&(z=1),U.morphAttributes.normal!==void 0&&(z=2),U.morphAttributes.color!==void 0&&(z=3);let re,oe,ue,Ee;if(K){const _t=Pi[K];re=_t.vertexShader,oe=_t.fragmentShader}else re=b.vertexShader,oe=b.fragmentShader,l.update(b),ue=l.getVertexShaderID(b),Ee=l.getFragmentShaderID(b);const He=r.getRenderTarget(),we=X.isInstancedMesh===!0,Pe=!!b.map,tt=!!b.matcap,Ue=!!G,H=!!b.aoMap,Nt=!!b.lightMap,be=!!b.bumpMap,Ae=!!b.normalMap,Re=!!b.displacementMap,nt=!!b.emissiveMap,Ne=!!b.metalnessMap,De=!!b.roughnessMap,Ye=b.anisotropy>0,gt=b.clearcoat>0,wt=b.iridescence>0,C=b.sheen>0,T=b.transmission>0,V=Ye&&!!b.anisotropyMap,te=gt&&!!b.clearcoatMap,Q=gt&&!!b.clearcoatNormalMap,ie=gt&&!!b.clearcoatRoughnessMap,_e=wt&&!!b.iridescenceMap,ae=wt&&!!b.iridescenceThicknessMap,de=C&&!!b.sheenColorMap,D=C&&!!b.sheenRoughnessMap,se=!!b.specularMap,Z=!!b.specularColorMap,Me=!!b.specularIntensityMap,ye=T&&!!b.transmissionMap,Se=T&&!!b.thicknessMap,ge=!!b.gradientMap,pe=!!b.alphaMap,Ve=b.alphaTest>0,I=!!b.alphaHash,le=!!b.extensions,ee=!!U.attributes.uv1,$=!!U.attributes.uv2,ne=!!U.attributes.uv3;let xe=Sn;return b.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(xe=r.toneMapping),{isWebGL2:h,shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:re,fragmentShader:oe,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:we,instancingColor:we&&X.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:He===null?r.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Lt,map:Pe,matcap:tt,envMap:Ue,envMapMode:Ue&&G.mapping,envMapCubeUVHeight:J,aoMap:H,lightMap:Nt,bumpMap:be,normalMap:Ae,displacementMap:d&&Re,emissiveMap:nt,normalMapObjectSpace:Ae&&b.normalMapType===tm,normalMapTangentSpace:Ae&&b.normalMapType===vd,metalnessMap:Ne,roughnessMap:De,anisotropy:Ye,anisotropyMap:V,clearcoat:gt,clearcoatMap:te,clearcoatNormalMap:Q,clearcoatRoughnessMap:ie,iridescence:wt,iridescenceMap:_e,iridescenceThicknessMap:ae,sheen:C,sheenColorMap:de,sheenRoughnessMap:D,specularMap:se,specularColorMap:Z,specularIntensityMap:Me,transmission:T,transmissionMap:ye,thicknessMap:Se,gradientMap:ge,opaque:b.transparent===!1&&b.blending===Ps,alphaMap:pe,alphaTest:Ve,alphaHash:I,combine:b.combine,mapUv:Pe&&g(b.map.channel),aoMapUv:H&&g(b.aoMap.channel),lightMapUv:Nt&&g(b.lightMap.channel),bumpMapUv:be&&g(b.bumpMap.channel),normalMapUv:Ae&&g(b.normalMap.channel),displacementMapUv:Re&&g(b.displacementMap.channel),emissiveMapUv:nt&&g(b.emissiveMap.channel),metalnessMapUv:Ne&&g(b.metalnessMap.channel),roughnessMapUv:De&&g(b.roughnessMap.channel),anisotropyMapUv:V&&g(b.anisotropyMap.channel),clearcoatMapUv:te&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Q&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:D&&g(b.sheenRoughnessMap.channel),specularMapUv:se&&g(b.specularMap.channel),specularColorMapUv:Z&&g(b.specularColorMap.channel),specularIntensityMapUv:Me&&g(b.specularIntensityMap.channel),transmissionMapUv:ye&&g(b.transmissionMap.channel),thicknessMapUv:Se&&g(b.thicknessMap.channel),alphaMapUv:pe&&g(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ae||Ye),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:$,vertexUv3s:ne,pointsUvs:X.isPoints===!0&&!!U.attributes.uv&&(Pe||pe),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&$e.getTransfer(b.map.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Di,flipSided:b.side===$t,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:le&&b.extensions.derivatives===!0,extensionFragDepth:le&&b.extensions.fragDepth===!0,extensionDrawBuffers:le&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)E.push(O),E.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(v(E,b),y(E,b),E.push(r.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function v(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function y(b,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function x(b){const E=_[b.type];let O;if(E){const k=Pi[E];O=Wm.clone(k.uniforms)}else O=b.uniforms;return O}function S(b,E){let O;for(let k=0,X=c.length;k<X;k++){const L=c[k];if(L.cacheKey===E){O=L,++O.usedTimes;break}}return O===void 0&&(O=new tv(r,E,b,s),c.push(O)),O}function w(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function M(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:R}}function av(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function ov(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function eu(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||ov),i.length>1&&i.sort(d||Qh),n.length>1&&n.sort(d||Qh)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function lv(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new eu,r.set(i,[a])):n>=s.length?(a=new eu,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function cv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function hv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let uv=0;function dv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fv(r,e){const t=new cv,i=hv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new P);const s=new P,a=new Be,o=new Be;function l(h,u){let d=0,f=0,_=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let g=0,m=0,p=0,v=0,y=0,x=0,S=0,w=0,M=0,R=0,b=0;h.sort(dv);const E=u===!0?Math.PI:1;for(let k=0,X=h.length;k<X;k++){const L=h[k],U=L.color,B=L.intensity,G=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*B*E,f+=U.g*B*E,_+=U.b*B*E;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],B);b++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const j=L.shadow,N=i.get(L);N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,n.directionalShadow[g]=N,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=L.shadow.matrix,x++}n.directional[g]=K,g++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(U).multiplyScalar(B*E),K.distance=G,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[p]=K;const j=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,j.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[p]=j.matrix,L.castShadow){const N=i.get(L);N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,n.spotShadow[p]=N,n.spotShadowMap[p]=J,w++}p++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(U).multiplyScalar(B),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[v]=K,v++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*E),K.distance=L.distance,K.decay=L.decay,L.castShadow){const j=L.shadow,N=i.get(L);N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,N.shadowCameraNear=j.camera.near,N.shadowCameraFar=j.camera.far,n.pointShadow[m]=N,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=K,m++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(B*E),K.groundColor.copy(L.groundColor).multiplyScalar(B*E),n.hemi[y]=K,y++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=_;const O=n.hash;(O.directionalLength!==g||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==v||O.hemiLength!==y||O.numDirectionalShadows!==x||O.numPointShadows!==S||O.numSpotShadows!==w||O.numSpotMaps!==M||O.numLightProbes!==b)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=v,n.point.length=m,n.hemi.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+M-R,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,O.directionalLength=g,O.pointLength=m,O.spotLength=p,O.rectAreaLength=v,O.hemiLength=y,O.numDirectionalShadows=x,O.numPointShadows=S,O.numSpotShadows=w,O.numSpotMaps=M,O.numLightProbes=b,n.version=uv++)}function c(h,u){let d=0,f=0,_=0,g=0,m=0;const p=u.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){const x=h[v];if(x.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(x.isSpotLight){const S=n.spot[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),a.copy(x.matrixWorld),a.premultiply(p),o.extractRotation(a),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:n}}function tu(r,e){const t=new fv(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function pv(r,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new tu(r,e),t.set(s,[l])):a>=o.length?(l=new tu(r,e),o.push(l)):l=o[a],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class mv extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gv extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vv(r,e,t){let i=new Xl;const n=new he,s=new he,a=new Qe,o=new mv({depthPacking:em}),l=new gv,c={},h=t.maxTextureSize,u={[sn]:$t,[$t]:sn,[Di]:Di},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:_v,fragmentShader:yv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ri;_.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Xt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd;let p=this.type;this.render=function(S,w,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const R=r.getRenderTarget(),b=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),O=r.state;O.setBlending(bn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==Zi&&this.type===Zi,X=p===Zi&&this.type!==Zi;for(let L=0,U=S.length;L<U;L++){const B=S[L],G=B.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const J=G.getFrameExtents();if(n.multiply(J),s.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/J.x),n.x=s.x*J.x,G.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/J.y),n.y=s.y*J.y,G.mapSize.y=s.y)),G.map===null||k===!0||X===!0){const j=this.type!==Zi?{minFilter:Ct,magFilter:Ct}:{};G.map!==null&&G.map.dispose(),G.map=new ts(n.x,n.y,j),G.map.texture.name=B.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const K=G.getViewportCount();for(let j=0;j<K;j++){const N=G.getViewport(j);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),O.viewport(a),G.updateMatrices(B,j),i=G.getFrustum(),x(w,M,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Zi&&v(G,M),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(R,b,E)};function v(S,w){const M=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ts(n.x,n.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(w,null,M,d,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(w,null,M,f,g,null)}function y(S,w,M,R){let b=null;const E=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)b=E;else if(b=M.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=b.uuid,k=w.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let L=X[k];L===void 0&&(L=b.clone(),X[k]=L),b=L}if(b.visible=w.visible,b.wireframe=w.wireframe,R===Zi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:u[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,M.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=r.properties.get(b);O.light=M}return b}function x(S,w,M,R,b){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===Zi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);const k=e.update(S),X=S.material;if(Array.isArray(X)){const L=k.groups;for(let U=0,B=L.length;U<B;U++){const G=L[U],J=X[G.materialIndex];if(J&&J.visible){const K=y(S,J,R,b);r.renderBufferDirect(M,null,k,K,S,G)}}}else if(X.visible){const L=y(S,X,R,b);r.renderBufferDirect(M,null,k,L,S,null)}}const O=S.children;for(let k=0,X=O.length;k<X;k++)x(O[k],w,M,R,b)}}function xv(r,e,t){const i=t.isWebGL2;function n(){let I=!1;const le=new Qe;let ee=null;const $=new Qe(0,0,0,0);return{setMask:function(ne){ee!==ne&&!I&&(r.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){I=ne},setClear:function(ne,xe,Ge,_t,ui){ui===!0&&(ne*=_t,xe*=_t,Ge*=_t),le.set(ne,xe,Ge,_t),$.equals(le)===!1&&(r.clearColor(ne,xe,Ge,_t),$.copy(le))},reset:function(){I=!1,ee=null,$.set(-1,0,0,0)}}}function s(){let I=!1,le=null,ee=null,$=null;return{setTest:function(ne){ne?Pe(r.DEPTH_TEST):tt(r.DEPTH_TEST)},setMask:function(ne){le!==ne&&!I&&(r.depthMask(ne),le=ne)},setFunc:function(ne){if(ee!==ne){switch(ne){case Rp:r.depthFunc(r.NEVER);break;case Cp:r.depthFunc(r.ALWAYS);break;case Lp:r.depthFunc(r.LESS);break;case Ia:r.depthFunc(r.LEQUAL);break;case Pp:r.depthFunc(r.EQUAL);break;case Dp:r.depthFunc(r.GEQUAL);break;case Ip:r.depthFunc(r.GREATER);break;case Np:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=ne}},setLocked:function(ne){I=ne},setClear:function(ne){$!==ne&&(r.clearDepth(ne),$=ne)},reset:function(){I=!1,le=null,ee=null,$=null}}}function a(){let I=!1,le=null,ee=null,$=null,ne=null,xe=null,Ge=null,_t=null,ui=null;return{setTest:function(et){I||(et?Pe(r.STENCIL_TEST):tt(r.STENCIL_TEST))},setMask:function(et){le!==et&&!I&&(r.stencilMask(et),le=et)},setFunc:function(et,Bt,Ci){(ee!==et||$!==Bt||ne!==Ci)&&(r.stencilFunc(et,Bt,Ci),ee=et,$=Bt,ne=Ci)},setOp:function(et,Bt,Ci){(xe!==et||Ge!==Bt||_t!==Ci)&&(r.stencilOp(et,Bt,Ci),xe=et,Ge=Bt,_t=Ci)},setLocked:function(et){I=et},setClear:function(et){ui!==et&&(r.clearStencil(et),ui=et)},reset:function(){I=!1,le=null,ee=null,$=null,ne=null,xe=null,Ge=null,_t=null,ui=null}}}const o=new n,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,y=null,x=null,S=null,w=null,M=null,R=null,b=new Le(0,0,0),E=0,O=!1,k=null,X=null,L=null,U=null,B=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=K>=2);let N=null,z={};const re=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),ue=new Qe().fromArray(re),Ee=new Qe().fromArray(oe);function He(I,le,ee,$){const ne=new Uint8Array(4),xe=r.createTexture();r.bindTexture(I,xe),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<ee;Ge++)i&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(le,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(le+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return xe}const we={};we[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),we[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),we[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(r.DEPTH_TEST),l.setFunc(Ia),Ne(!1),De(Nc),Pe(r.CULL_FACE),Re(bn);function Pe(I){d[I]!==!0&&(r.enable(I),d[I]=!0)}function tt(I){d[I]!==!1&&(r.disable(I),d[I]=!1)}function Ue(I,le){return f[I]!==le?(r.bindFramebuffer(I,le),f[I]=le,i&&(I===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=le),I===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=le)),!0):!1}function H(I,le){let ee=g,$=!1;if(I)if(ee=_.get(le),ee===void 0&&(ee=[],_.set(le,ee)),I.isWebGLMultipleRenderTargets){const ne=I.texture;if(ee.length!==ne.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,Ge=ne.length;xe<Ge;xe++)ee[xe]=r.COLOR_ATTACHMENT0+xe;ee.length=ne.length,$=!0}}else ee[0]!==r.COLOR_ATTACHMENT0&&(ee[0]=r.COLOR_ATTACHMENT0,$=!0);else ee[0]!==r.BACK&&(ee[0]=r.BACK,$=!0);$&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Nt(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const be={[Gn]:r.FUNC_ADD,[fp]:r.FUNC_SUBTRACT,[pp]:r.FUNC_REVERSE_SUBTRACT};if(i)be[kc]=r.MIN,be[Bc]=r.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(be[kc]=I.MIN_EXT,be[Bc]=I.MAX_EXT)}const Ae={[mp]:r.ZERO,[gp]:r.ONE,[_p]:r.SRC_COLOR,[al]:r.SRC_ALPHA,[Mp]:r.SRC_ALPHA_SATURATE,[bp]:r.DST_COLOR,[vp]:r.DST_ALPHA,[yp]:r.ONE_MINUS_SRC_COLOR,[ol]:r.ONE_MINUS_SRC_ALPHA,[Sp]:r.ONE_MINUS_DST_COLOR,[xp]:r.ONE_MINUS_DST_ALPHA,[Tp]:r.CONSTANT_COLOR,[Ep]:r.ONE_MINUS_CONSTANT_COLOR,[wp]:r.CONSTANT_ALPHA,[Ap]:r.ONE_MINUS_CONSTANT_ALPHA};function Re(I,le,ee,$,ne,xe,Ge,_t,ui,et){if(I===bn){p===!0&&(tt(r.BLEND),p=!1);return}if(p===!1&&(Pe(r.BLEND),p=!0),I!==dp){if(I!==v||et!==O){if((y!==Gn||w!==Gn)&&(r.blendEquation(r.FUNC_ADD),y=Gn,w=Gn),et)switch(I){case Ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oc:r.blendFunc(r.ONE,r.ONE);break;case Uc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Uc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,S=null,M=null,R=null,b.set(0,0,0),E=0,v=I,O=et}return}ne=ne||le,xe=xe||ee,Ge=Ge||$,(le!==y||ne!==w)&&(r.blendEquationSeparate(be[le],be[ne]),y=le,w=ne),(ee!==x||$!==S||xe!==M||Ge!==R)&&(r.blendFuncSeparate(Ae[ee],Ae[$],Ae[xe],Ae[Ge]),x=ee,S=$,M=xe,R=Ge),(_t.equals(b)===!1||ui!==E)&&(r.blendColor(_t.r,_t.g,_t.b,ui),b.copy(_t),E=ui),v=I,O=!1}function nt(I,le){I.side===Di?tt(r.CULL_FACE):Pe(r.CULL_FACE);let ee=I.side===$t;le&&(ee=!ee),Ne(ee),I.blending===Ps&&I.transparent===!1?Re(bn):Re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const $=I.stencilWrite;c.setTest($),$&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),gt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(I){k!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),k=I)}function De(I){I!==hp?(Pe(r.CULL_FACE),I!==X&&(I===Nc?r.cullFace(r.BACK):I===up?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):tt(r.CULL_FACE),X=I}function Ye(I){I!==L&&(J&&r.lineWidth(I),L=I)}function gt(I,le,ee){I?(Pe(r.POLYGON_OFFSET_FILL),(U!==le||B!==ee)&&(r.polygonOffset(le,ee),U=le,B=ee)):tt(r.POLYGON_OFFSET_FILL)}function wt(I){I?Pe(r.SCISSOR_TEST):tt(r.SCISSOR_TEST)}function C(I){I===void 0&&(I=r.TEXTURE0+G-1),N!==I&&(r.activeTexture(I),N=I)}function T(I,le,ee){ee===void 0&&(N===null?ee=r.TEXTURE0+G-1:ee=N);let $=z[ee];$===void 0&&($={type:void 0,texture:void 0},z[ee]=$),($.type!==I||$.texture!==le)&&(N!==ee&&(r.activeTexture(ee),N=ee),r.bindTexture(I,le||we[I]),$.type=I,$.texture=le)}function V(){const I=z[N];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function te(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(I){ue.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ue.copy(I))}function Se(I){Ee.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Ee.copy(I))}function ge(I,le){let ee=u.get(le);ee===void 0&&(ee=new WeakMap,u.set(le,ee));let $=ee.get(I);$===void 0&&($=r.getUniformBlockIndex(le,I.name),ee.set(I,$))}function pe(I,le){const $=u.get(le).get(I);h.get(le)!==$&&(r.uniformBlockBinding(le,$,I.__bindingPointIndex),h.set(le,$))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},N=null,z={},f={},_=new WeakMap,g=[],m=null,p=!1,v=null,y=null,x=null,S=null,w=null,M=null,R=null,b=new Le(0,0,0),E=0,O=!1,k=null,X=null,L=null,U=null,B=null,ue.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:tt,bindFramebuffer:Ue,drawBuffers:H,useProgram:Nt,setBlending:Re,setMaterial:nt,setFlipSided:Ne,setCullFace:De,setLineWidth:Ye,setPolygonOffset:gt,setScissorTest:wt,activeTexture:C,bindTexture:T,unbindTexture:V,compressedTexImage2D:te,compressedTexImage3D:Q,texImage2D:Z,texImage3D:Me,updateUBOMapping:ge,uniformBlockBinding:pe,texStorage2D:D,texStorage3D:se,texSubImage2D:ie,texSubImage3D:_e,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:ye,viewport:Se,reset:Ve}}function bv(r,e,t,i,n,s,a){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,T){return p?new OffscreenCanvas(C,T):wr("canvas")}function y(C,T,V,te){let Q=1;if((C.width>te||C.height>te)&&(Q=te/Math.max(C.width,C.height)),Q<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=T?Ba:Math.floor,_e=ie(Q*C.width),ae=ie(Q*C.height);g===void 0&&(g=v(_e,ae));const de=V?v(_e,ae):g;return de.width=_e,de.height=ae,de.getContext("2d").drawImage(C,0,0,_e,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+ae+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return pl(C.width)&&pl(C.height)}function S(C){return o?!1:C.wrapS!==Yt||C.wrapT!==Yt||C.minFilter!==Ct&&C.minFilter!==Mt}function w(C,T){return C.generateMipmaps&&T&&C.minFilter!==Ct&&C.minFilter!==Mt}function M(C){r.generateMipmap(C)}function R(C,T,V,te,Q=!1){if(o===!1)return T;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=T;if(T===r.RED&&(V===r.FLOAT&&(ie=r.R32F),V===r.HALF_FLOAT&&(ie=r.R16F),V===r.UNSIGNED_BYTE&&(ie=r.R8)),T===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ie=r.R8UI),V===r.UNSIGNED_SHORT&&(ie=r.R16UI),V===r.UNSIGNED_INT&&(ie=r.R32UI),V===r.BYTE&&(ie=r.R8I),V===r.SHORT&&(ie=r.R16I),V===r.INT&&(ie=r.R32I)),T===r.RG&&(V===r.FLOAT&&(ie=r.RG32F),V===r.HALF_FLOAT&&(ie=r.RG16F),V===r.UNSIGNED_BYTE&&(ie=r.RG8)),T===r.RGBA){const _e=Q?Oa:$e.getTransfer(te);V===r.FLOAT&&(ie=r.RGBA32F),V===r.HALF_FLOAT&&(ie=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ie=_e===it?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(C,T,V){return w(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Ct&&C.minFilter!==Mt?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function E(C){return C===Ct||C===hl||C===Ra?r.NEAREST:r.LINEAR}function O(C){const T=C.target;T.removeEventListener("dispose",O),X(T),T.isVideoTexture&&_.delete(T)}function k(C){const T=C.target;T.removeEventListener("dispose",k),U(T)}function X(C){const T=i.get(C);if(T.__webglInit===void 0)return;const V=C.source,te=m.get(V);if(te){const Q=te[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(C),Object.keys(te).length===0&&m.delete(V)}i.remove(C)}function L(C){const T=i.get(C);r.deleteTexture(T.__webglTexture);const V=C.source,te=m.get(V);delete te[T.__cacheKey],a.memory.textures--}function U(C){const T=C.texture,V=i.get(C),te=i.get(T);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(V.__webglFramebuffer[Q]))for(let ie=0;ie<V.__webglFramebuffer[Q].length;ie++)r.deleteFramebuffer(V.__webglFramebuffer[Q][ie]);else r.deleteFramebuffer(V.__webglFramebuffer[Q]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[Q])}else{if(Array.isArray(V.__webglFramebuffer))for(let Q=0;Q<V.__webglFramebuffer.length;Q++)r.deleteFramebuffer(V.__webglFramebuffer[Q]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let Q=0;Q<V.__webglColorRenderbuffer.length;Q++)V.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[Q]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,ie=T.length;Q<ie;Q++){const _e=i.get(T[Q]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(T[Q])}i.remove(T),i.remove(C)}let B=0;function G(){B=0}function J(){const C=B;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),B+=1,C}function K(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function j(C,T){const V=i.get(C);if(C.isVideoTexture&&gt(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(V,C,T);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+T)}function N(C,T){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Pe(V,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+T)}function z(C,T){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Pe(V,C,T);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+T)}function re(C,T){const V=i.get(C);if(C.version>0&&V.__version!==C.version){tt(V,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+T)}const oe={[Bs]:r.REPEAT,[Yt]:r.CLAMP_TO_EDGE,[Na]:r.MIRRORED_REPEAT},ue={[Ct]:r.NEAREST,[hl]:r.NEAREST_MIPMAP_NEAREST,[Ra]:r.NEAREST_MIPMAP_LINEAR,[Mt]:r.LINEAR,[hd]:r.LINEAR_MIPMAP_NEAREST,[wn]:r.LINEAR_MIPMAP_LINEAR},Ee={[im]:r.NEVER,[cm]:r.ALWAYS,[nm]:r.LESS,[rm]:r.LEQUAL,[sm]:r.EQUAL,[lm]:r.GEQUAL,[am]:r.GREATER,[om]:r.NOTEQUAL};function He(C,T,V){if(V?(r.texParameteri(C,r.TEXTURE_WRAP_S,oe[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,oe[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,oe[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ue[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ue[T.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==Yt||T.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,E(T.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==Ct&&T.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ct||T.minFilter!==Ra&&T.minFilter!==wn||T.type===_i&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===tn&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(r.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function we(C,T){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",O));const te=T.source;let Q=m.get(te);Q===void 0&&(Q={},m.set(te,Q));const ie=K(T);if(ie!==C.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[ie].usedTimes++;const _e=Q[C.__cacheKey];_e!==void 0&&(Q[C.__cacheKey].usedTimes--,_e.usedTimes===0&&L(T)),C.__cacheKey=ie,C.__webglTexture=Q[ie].texture}return V}function Pe(C,T,V){let te=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=r.TEXTURE_3D);const Q=we(C,T),ie=T.source;t.bindTexture(te,C.__webglTexture,r.TEXTURE0+V);const _e=i.get(ie);if(ie.version!==_e.__version||Q===!0){t.activeTexture(r.TEXTURE0+V);const ae=$e.getPrimaries($e.workingColorSpace),de=T.colorSpace===gi?null:$e.getPrimaries(T.colorSpace),D=T.colorSpace===gi||ae===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const se=S(T)&&x(T.image)===!1;let Z=y(T.image,se,!1,h);Z=wt(T,Z);const Me=x(Z)||o,ye=s.convert(T.format,T.colorSpace);let Se=s.convert(T.type),ge=R(T.internalFormat,ye,Se,T.colorSpace,T.isVideoTexture);He(te,T,Me);let pe;const Ve=T.mipmaps,I=o&&T.isVideoTexture!==!0,le=_e.__version===void 0||Q===!0,ee=b(T,Z,Me);if(T.isDepthTexture)ge=r.DEPTH_COMPONENT,o?T.type===_i?ge=r.DEPTH_COMPONENT32F:T.type===_n?ge=r.DEPTH_COMPONENT24:T.type===$n?ge=r.DEPTH24_STENCIL8:ge=r.DEPTH_COMPONENT16:T.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===jn&&ge===r.DEPTH_COMPONENT&&T.type!==Hl&&T.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=_n,Se=s.convert(T.type)),T.format===zs&&ge===r.DEPTH_COMPONENT&&(ge=r.DEPTH_STENCIL,T.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=$n,Se=s.convert(T.type))),le&&(I?t.texStorage2D(r.TEXTURE_2D,1,ge,Z.width,Z.height):t.texImage2D(r.TEXTURE_2D,0,ge,Z.width,Z.height,0,ye,Se,null));else if(T.isDataTexture)if(Ve.length>0&&Me){I&&le&&t.texStorage2D(r.TEXTURE_2D,ee,ge,Ve[0].width,Ve[0].height);for(let $=0,ne=Ve.length;$<ne;$++)pe=Ve[$],I?t.texSubImage2D(r.TEXTURE_2D,$,0,0,pe.width,pe.height,ye,Se,pe.data):t.texImage2D(r.TEXTURE_2D,$,ge,pe.width,pe.height,0,ye,Se,pe.data);T.generateMipmaps=!1}else I?(le&&t.texStorage2D(r.TEXTURE_2D,ee,ge,Z.width,Z.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Z.width,Z.height,ye,Se,Z.data)):t.texImage2D(r.TEXTURE_2D,0,ge,Z.width,Z.height,0,ye,Se,Z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){I&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,ge,Ve[0].width,Ve[0].height,Z.depth);for(let $=0,ne=Ve.length;$<ne;$++)pe=Ve[$],T.format!==mi?ye!==null?I?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,Z.depth,ye,pe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,ge,pe.width,pe.height,Z.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,Z.depth,ye,Se,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,ge,pe.width,pe.height,Z.depth,0,ye,Se,pe.data)}else{I&&le&&t.texStorage2D(r.TEXTURE_2D,ee,ge,Ve[0].width,Ve[0].height);for(let $=0,ne=Ve.length;$<ne;$++)pe=Ve[$],T.format!==mi?ye!==null?I?t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,pe.width,pe.height,ye,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,$,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(r.TEXTURE_2D,$,0,0,pe.width,pe.height,ye,Se,pe.data):t.texImage2D(r.TEXTURE_2D,$,ge,pe.width,pe.height,0,ye,Se,pe.data)}else if(T.isDataArrayTexture)I?(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,ge,Z.width,Z.height,Z.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ye,Se,Z.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,Z.width,Z.height,Z.depth,0,ye,Se,Z.data);else if(T.isData3DTexture)I?(le&&t.texStorage3D(r.TEXTURE_3D,ee,ge,Z.width,Z.height,Z.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ye,Se,Z.data)):t.texImage3D(r.TEXTURE_3D,0,ge,Z.width,Z.height,Z.depth,0,ye,Se,Z.data);else if(T.isFramebufferTexture){if(le)if(I)t.texStorage2D(r.TEXTURE_2D,ee,ge,Z.width,Z.height);else{let $=Z.width,ne=Z.height;for(let xe=0;xe<ee;xe++)t.texImage2D(r.TEXTURE_2D,xe,ge,$,ne,0,ye,Se,null),$>>=1,ne>>=1}}else if(Ve.length>0&&Me){I&&le&&t.texStorage2D(r.TEXTURE_2D,ee,ge,Ve[0].width,Ve[0].height);for(let $=0,ne=Ve.length;$<ne;$++)pe=Ve[$],I?t.texSubImage2D(r.TEXTURE_2D,$,0,0,ye,Se,pe):t.texImage2D(r.TEXTURE_2D,$,ge,ye,Se,pe);T.generateMipmaps=!1}else I?(le&&t.texStorage2D(r.TEXTURE_2D,ee,ge,Z.width,Z.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Se,Z)):t.texImage2D(r.TEXTURE_2D,0,ge,ye,Se,Z);w(T,Me)&&M(te),_e.__version=ie.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function tt(C,T,V){if(T.image.length!==6)return;const te=we(C,T),Q=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const ie=i.get(Q);if(Q.version!==ie.__version||te===!0){t.activeTexture(r.TEXTURE0+V);const _e=$e.getPrimaries($e.workingColorSpace),ae=T.colorSpace===gi?null:$e.getPrimaries(T.colorSpace),de=T.colorSpace===gi||_e===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const D=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,Z=[];for(let $=0;$<6;$++)!D&&!se?Z[$]=y(T.image[$],!1,!0,c):Z[$]=se?T.image[$].image:T.image[$],Z[$]=wt(T,Z[$]);const Me=Z[0],ye=x(Me)||o,Se=s.convert(T.format,T.colorSpace),ge=s.convert(T.type),pe=R(T.internalFormat,Se,ge,T.colorSpace),Ve=o&&T.isVideoTexture!==!0,I=ie.__version===void 0||te===!0;let le=b(T,Me,ye);He(r.TEXTURE_CUBE_MAP,T,ye);let ee;if(D){Ve&&I&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,pe,Me.width,Me.height);for(let $=0;$<6;$++){ee=Z[$].mipmaps;for(let ne=0;ne<ee.length;ne++){const xe=ee[ne];T.format!==mi?Se!==null?Ve?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,0,0,xe.width,xe.height,Se,xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,pe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,0,0,xe.width,xe.height,Se,ge,xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,pe,xe.width,xe.height,0,Se,ge,xe.data)}}}else{ee=T.mipmaps,Ve&&I&&(ee.length>0&&le++,t.texStorage2D(r.TEXTURE_CUBE_MAP,le,pe,Z[0].width,Z[0].height));for(let $=0;$<6;$++)if(se){Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Z[$].width,Z[$].height,Se,ge,Z[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pe,Z[$].width,Z[$].height,0,Se,ge,Z[$].data);for(let ne=0;ne<ee.length;ne++){const Ge=ee[ne].image[$].image;Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,0,0,Ge.width,Ge.height,Se,ge,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,pe,Ge.width,Ge.height,0,Se,ge,Ge.data)}}else{Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Se,ge,Z[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pe,Se,ge,Z[$]);for(let ne=0;ne<ee.length;ne++){const xe=ee[ne];Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,0,0,Se,ge,xe.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,pe,Se,ge,xe.image[$])}}}w(T,ye)&&M(r.TEXTURE_CUBE_MAP),ie.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ue(C,T,V,te,Q,ie){const _e=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),de=R(V.internalFormat,_e,ae,V.colorSpace);if(!i.get(T).__hasExternalTextures){const se=Math.max(1,T.width>>ie),Z=Math.max(1,T.height>>ie);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,ie,de,se,Z,T.depth,0,_e,ae,null):t.texImage2D(Q,ie,de,se,Z,0,_e,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ye(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Q,i.get(V).__webglTexture,0,De(T)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,Q,i.get(V).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function H(C,T,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let te=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||Ye(T)){const Q=T.depthTexture;Q&&Q.isDepthTexture&&(Q.type===_i?te=r.DEPTH_COMPONENT32F:Q.type===_n&&(te=r.DEPTH_COMPONENT24));const ie=De(T);Ye(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,te,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,te,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const te=De(T);V&&Ye(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,T.width,T.height):Ye(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0;Q<te.length;Q++){const ie=te[Q],_e=s.convert(ie.format,ie.colorSpace),ae=s.convert(ie.type),de=R(ie.internalFormat,_e,ae,ie.colorSpace),D=De(T);V&&Ye(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,de,T.width,T.height):Ye(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,de,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,de,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Nt(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const te=i.get(T.depthTexture).__webglTexture,Q=De(T);if(T.depthTexture.format===jn)Ye(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(T.depthTexture.format===zs)Ye(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function be(C){const T=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Nt(T.__webglFramebuffer,C)}else if(V){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=r.createRenderbuffer(),H(T.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),H(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(C,T,V){const te=i.get(C);T!==void 0&&Ue(te.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&be(C)}function Re(C){const T=C.texture,V=i.get(C),te=i.get(T);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=T.version,a.memory.textures++);const Q=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,_e=x(C)||o;if(Q){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let de=0;de<T.mipmaps.length;de++)V.__webglFramebuffer[ae][de]=r.createFramebuffer()}else V.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<T.mipmaps.length;ae++)V.__webglFramebuffer[ae]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ie)if(n.drawBuffers){const ae=C.texture;for(let de=0,D=ae.length;de<D;de++){const se=i.get(ae[de]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ye(C)===!1){const ae=ie?T:[T];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const D=ae[de];V.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const se=s.convert(D.format,D.colorSpace),Z=s.convert(D.type),Me=R(D.internalFormat,se,Z,D.colorSpace,C.isXRRenderTarget===!0),ye=De(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,Me,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,V.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),H(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),He(r.TEXTURE_CUBE_MAP,T,_e);for(let ae=0;ae<6;ae++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Ue(V.__webglFramebuffer[ae][de],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else Ue(V.__webglFramebuffer[ae],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);w(T,_e)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ae=C.texture;for(let de=0,D=ae.length;de<D;de++){const se=ae[de],Z=i.get(se);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture),He(r.TEXTURE_2D,se,_e),Ue(V.__webglFramebuffer,C,se,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),w(se,_e)&&M(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,te.__webglTexture),He(ae,T,_e),o&&T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)Ue(V.__webglFramebuffer[de],C,T,r.COLOR_ATTACHMENT0,ae,de);else Ue(V.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,ae,0);w(T,_e)&&M(ae),t.unbindTexture()}C.depthBuffer&&be(C)}function nt(C){const T=x(C)||o,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,Q=V.length;te<Q;te++){const ie=V[te];if(w(ie,T)){const _e=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ae=i.get(ie).__webglTexture;t.bindTexture(_e,ae),M(_e),t.unbindTexture()}}}function Ne(C){if(o&&C.samples>0&&Ye(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,te=C.height;let Q=r.COLOR_BUFFER_BIT;const ie=[],_e=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=i.get(C),de=C.isWebGLMultipleRenderTargets===!0;if(de)for(let D=0;D<T.length;D++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let D=0;D<T.length;D++){ie.push(r.COLOR_ATTACHMENT0+D),C.depthBuffer&&ie.push(_e);const se=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(se===!1&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),de&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[D]),se===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[_e]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_e])),de){const Z=i.get(T[D]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Z,0)}r.blitFramebuffer(0,0,V,te,0,0,V,te,Q,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let D=0;D<T.length;D++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,ae.__webglColorRenderbuffer[D]);const se=i.get(T[D]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function De(C){return Math.min(u,C.samples)}function Ye(C){const T=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function gt(C){const T=a.render.frame;_.get(C)!==T&&(_.set(C,T),C.update())}function wt(C,T){const V=C.colorSpace,te=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===fl||V!==Lt&&V!==gi&&($e.getTransfer(V)===it?o===!1?e.has("EXT_sRGB")===!0&&te===mi?(C.format=fl,C.minFilter=Mt,C.generateMipmaps=!1):T=Sd.sRGBToLinear(T):(te!==mi||Q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}this.allocateTextureUnit=J,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=re,this.rebindTextures=Ae,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ye}function Sv(r,e,t){const i=t.isWebGL2;function n(s,a=gi){let o;const l=$e.getTransfer(a);if(s===Mn)return r.UNSIGNED_BYTE;if(s===dd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===fd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Vp)return r.BYTE;if(s===Gp)return r.SHORT;if(s===Hl)return r.UNSIGNED_SHORT;if(s===ud)return r.INT;if(s===_n)return r.UNSIGNED_INT;if(s===_i)return r.FLOAT;if(s===tn)return i?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Wp)return r.ALPHA;if(s===mi)return r.RGBA;if(s===Xp)return r.LUMINANCE;if(s===qp)return r.LUMINANCE_ALPHA;if(s===jn)return r.DEPTH_COMPONENT;if(s===zs)return r.DEPTH_STENCIL;if(s===fl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Yp)return r.RED;if(s===pd)return r.RED_INTEGER;if(s===$p)return r.RG;if(s===md)return r.RG_INTEGER;if(s===gd)return r.RGBA_INTEGER;if(s===oo||s===lo||s===co||s===ho)if(l===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===oo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===oo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===co)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hc||s===Vc||s===Gc||s===Wc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Hc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xc||s===qc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Xc)return l===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===qc)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yc||s===$c||s===jc||s===Kc||s===Zc||s===Jc||s===Qc||s===eh||s===th||s===ih||s===nh||s===sh||s===rh||s===ah)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Yc)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$c)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jc)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kc)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zc)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jc)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qc)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===eh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===th)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ih)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rh)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ah)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uo||s===oh||s===lh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===uo)return l===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===oh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kp||s===ch||s===hh||s===uh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===uo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ch)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$n?i?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class Mv extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tv={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ri;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ev extends Dt{constructor(e,t,i,n,s,a,o,l,c,h){if(h=h!==void 0?h:jn,h!==jn&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===jn&&(i=_n),i===void 0&&h===zs&&(i=$n),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wv extends rs{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],y=[],x=new Gt;x.layers.enable(1),x.viewport=new Qe;const S=new Gt;S.layers.enable(2),S.viewport=new Qe;const w=[x,S],M=new Mv;M.layers.enable(1),M.layers.enable(2);let R=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=v[N];return z===void 0&&(z=new Uo,v[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=v[N];return z===void 0&&(z=new Uo,v[N]=z),z.getGripSpace()},this.getHand=function(N){let z=v[N];return z===void 0&&(z=new Uo,v[N]=z),z.getHandSpace()};function E(N){const z=y.indexOf(N.inputSource);if(z===-1)return;const re=v[z];re!==void 0&&(re.update(N.inputSource,N.frame,c||a),re.dispatchEvent({type:N.type,data:N.inputSource}))}function O(){n.removeEventListener("select",E),n.removeEventListener("selectstart",E),n.removeEventListener("selectend",E),n.removeEventListener("squeeze",E),n.removeEventListener("squeezestart",E),n.removeEventListener("squeezeend",E),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",k);for(let N=0;N<v.length;N++){const z=y[N];z!==null&&(y[N]=null,v[N].disconnect(z))}R=null,b=null,e.setRenderTarget(m),f=null,d=null,u=null,n=null,p=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(N){if(n=N,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",E),n.addEventListener("selectstart",E),n.addEventListener("selectend",E),n.addEventListener("squeeze",E),n.addEventListener("squeezestart",E),n.addEventListener("squeezeend",E),n.addEventListener("end",O),n.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,z),n.updateRenderState({baseLayer:f}),p=new ts(f.framebufferWidth,f.framebufferHeight,{format:mi,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let z=null,re=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=g.stencil?zs:jn,re=g.stencil?$n:_n);const ue={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(ue),n.updateRenderState({layers:[d]}),p=new ts(d.textureWidth,d.textureHeight,{format:mi,type:Mn,depthTexture:new Ev(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ee=e.properties.get(p);Ee.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),j.setContext(n),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function k(N){for(let z=0;z<N.removed.length;z++){const re=N.removed[z],oe=y.indexOf(re);oe>=0&&(y[oe]=null,v[oe].disconnect(re))}for(let z=0;z<N.added.length;z++){const re=N.added[z];let oe=y.indexOf(re);if(oe===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=y.length){y.push(re),oe=Ee;break}else if(y[Ee]===null){y[Ee]=re,oe=Ee;break}if(oe===-1)break}const ue=v[oe];ue&&ue.connect(re)}}const X=new P,L=new P;function U(N,z,re){X.setFromMatrixPosition(z.matrixWorld),L.setFromMatrixPosition(re.matrixWorld);const oe=X.distanceTo(L),ue=z.projectionMatrix.elements,Ee=re.projectionMatrix.elements,He=ue[14]/(ue[10]-1),we=ue[14]/(ue[10]+1),Pe=(ue[9]+1)/ue[5],tt=(ue[9]-1)/ue[5],Ue=(ue[8]-1)/ue[0],H=(Ee[8]+1)/Ee[0],Nt=He*Ue,be=He*H,Ae=oe/(-Ue+H),Re=Ae*-Ue;z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Re),N.translateZ(Ae),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const nt=He+Ae,Ne=we+Ae,De=Nt-Re,Ye=be+(oe-Re),gt=Pe*we/Ne*nt,wt=tt*we/Ne*nt;N.projectionMatrix.makePerspective(De,Ye,gt,wt,nt,Ne),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function B(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(n===null)return;M.near=S.near=x.near=N.near,M.far=S.far=x.far=N.far,(R!==M.near||b!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,b=M.far);const z=N.parent,re=M.cameras;B(M,z);for(let oe=0;oe<re.length;oe++)B(re[oe],z);re.length===2?U(M,x,S):M.projectionMatrix.copy(x.projectionMatrix),G(N,M,z)};function G(N,z,re){re===null?N.matrix.copy(z.matrixWorld):(N.matrix.copy(re.matrixWorld),N.matrix.invert(),N.matrix.multiply(z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Vs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let J=null;function K(N,z){if(h=z.getViewerPose(c||a),_=z,h!==null){const re=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let oe=!1;re.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let ue=0;ue<re.length;ue++){const Ee=re[ue];let He=null;if(f!==null)He=f.getViewport(Ee);else{const Pe=u.getViewSubImage(d,Ee);He=Pe.viewport,ue===0&&(e.setRenderTargetTextures(p,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(p))}let we=w[ue];we===void 0&&(we=new Gt,we.layers.enable(ue),we.viewport=new Qe,w[ue]=we),we.matrix.fromArray(Ee.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ee.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(He.x,He.y,He.width,He.height),ue===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(we)}}for(let re=0;re<v.length;re++){const oe=y[re],ue=v[re];oe!==null&&ue!==void 0&&ue.update(oe,z,c||a)}J&&J(N,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),_=null}const j=new Pd;j.setAnimationLoop(K),this.setAnimationLoop=function(N){J=N},this.dispose=function(){}}}function Av(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Cd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Rv(r,e,t,i){let n={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=n[v.id];x===void 0&&(_(v),x=h(v),n[v.id]=x,v.addEventListener("dispose",m));const S=y.program;i.updateUBOMapping(v,S);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function h(v){const y=u();v.__bindingPointIndex=y;const x=r.createBuffer(),S=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,S,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=n[v.id],x=v.uniforms,S=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,M=x.length;w<M;w++){const R=x[w];if(f(R,w,S)===!0){const b=R.__offset,E=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let k=0;k<E.length;k++){const X=E[k],L=g(X);typeof X=="number"?(R.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,b+O,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=X.elements[0],R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=X.elements[0],R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=X.elements[0]):(X.toArray(R.__data,O),O+=L.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,b,R.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,x){const S=v.value;if(x[y]===void 0){if(typeof S=="number")x[y]=S;else{const w=Array.isArray(S)?S:[S],M=[];for(let R=0;R<w.length;R++)M.push(w[R].clone());x[y]=M}return!0}else if(typeof S=="number"){if(x[y]!==S)return x[y]=S,!0}else{const w=Array.isArray(x[y])?x[y]:[x[y]],M=Array.isArray(S)?S:[S];for(let R=0;R<w.length;R++){const b=w[R];if(b.equals(M[R])===!1)return b.copy(M[R]),!0}}return!1}function _(v){const y=v.uniforms;let x=0;const S=16;let w=0;for(let M=0,R=y.length;M<R;M++){const b=y[M],E={boundary:0,storage:0},O=Array.isArray(b.value)?b.value:[b.value];for(let k=0,X=O.length;k<X;k++){const L=O[k],U=g(L);E.boundary+=U.boundary,E.storage+=U.storage}if(b.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=x,M>0){w=x%S;const k=S-w;w!==0&&k-E.boundary<0&&(x+=S-w,b.__offset=x)}x+=E.storage}return w=x%S,w>0&&(x+=S-w),v.__size=x,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function p(){for(const v in n)r.deleteBuffer(n[v]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}class Ud{constructor(e={}){const{canvas:t=Mm(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const y=this;let x=!1,S=0,w=0,M=null,R=-1,b=null;const E=new Qe,O=new Qe;let k=null;const X=new Le(0);let L=0,U=t.width,B=t.height,G=1,J=null,K=null;const j=new Qe(0,0,U,B),N=new Qe(0,0,U,B);let z=!1;const re=new Xl;let oe=!1,ue=!1,Ee=null;const He=new Be,we=new he,Pe=new P,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return M===null?G:1}let H=i;function Nt(A,F){for(let W=0;W<A.length;W++){const q=A[W],Y=t.getContext(q,F);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zl}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",le,!1),H===null){const F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),H=Nt(F,A),H===null)throw Nt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let be,Ae,Re,nt,Ne,De,Ye,gt,wt,C,T,V,te,Q,ie,_e,ae,de,D,se,Z,Me,ye,Se;function ge(){be=new k0(H),Ae=new D0(H,be,e),be.init(Ae),Me=new Sv(H,be,Ae),Re=new xv(H,be,Ae),nt=new H0(H),Ne=new av,De=new bv(H,be,Re,Ne,Ae,Me,nt),Ye=new N0(y),gt=new F0(y),wt=new Zm(H,Ae),ye=new L0(H,be,wt,Ae),C=new B0(H,wt,nt,ye),T=new X0(H,C,wt,nt),D=new W0(H,Ae,De),_e=new I0(Ne),V=new rv(y,Ye,gt,be,Ae,ye,_e),te=new Av(y,Ne),Q=new lv,ie=new pv(be,Ae),de=new C0(y,Ye,gt,Re,T,d,l),ae=new vv(y,T,Ae),Se=new Rv(H,nt,Ae,Re),se=new P0(H,be,nt,Ae),Z=new z0(H,be,nt,Ae),nt.programs=V.programs,y.capabilities=Ae,y.extensions=be,y.properties=Ne,y.renderLists=Q,y.shadowMap=ae,y.state=Re,y.info=nt}ge();const pe=new wv(y,H);this.xr=pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(U,B,!1))},this.getSize=function(A){return A.set(U,B)},this.setSize=function(A,F,W=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,B=F,t.width=Math.floor(A*G),t.height=Math.floor(F*G),W===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(U*G,B*G).floor()},this.setDrawingBufferSize=function(A,F,W){U=A,B=F,G=W,t.width=Math.floor(A*W),t.height=Math.floor(F*W),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,F,W,q){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,F,W,q),Re.viewport(E.copy(j).multiplyScalar(G).floor())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,F,W,q){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,F,W,q),Re.scissor(O.copy(N).multiplyScalar(G).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(A){Re.setScissorTest(z=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(A=!0,F=!0,W=!0){let q=0;if(A){let Y=!1;if(M!==null){const fe=M.texture.format;Y=fe===gd||fe===md||fe===pd}if(Y){const fe=M.texture.type,ve=fe===Mn||fe===_n||fe===Hl||fe===$n||fe===dd||fe===fd,Te=de.getClearColor(),Ce=de.getClearAlpha(),ke=Te.r,Ie=Te.g,Oe=Te.b;ve?(f[0]=ke,f[1]=Ie,f[2]=Oe,f[3]=Ce,H.clearBufferuiv(H.COLOR,0,f)):(_[0]=ke,_[1]=Ie,_[2]=Oe,_[3]=Ce,H.clearBufferiv(H.COLOR,0,_))}else q|=H.COLOR_BUFFER_BIT}F&&(q|=H.DEPTH_BUFFER_BIT),W&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Q.dispose(),ie.dispose(),Ne.dispose(),Ye.dispose(),gt.dispose(),T.dispose(),ye.dispose(),Se.dispose(),V.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ui),pe.removeEventListener("sessionend",et),Ee&&(Ee.dispose(),Ee=null),Bt.stop()};function Ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=nt.autoReset,F=ae.enabled,W=ae.autoUpdate,q=ae.needsUpdate,Y=ae.type;ge(),nt.autoReset=A,ae.enabled=F,ae.autoUpdate=W,ae.needsUpdate=q,ae.type=Y}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ee(A){const F=A.target;F.removeEventListener("dispose",ee),$(F)}function $(A){ne(A),Ne.remove(A)}function ne(A){const F=Ne.get(A).programs;F!==void 0&&(F.forEach(function(W){V.releaseProgram(W)}),A.isShaderMaterial&&V.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,W,q,Y,fe){F===null&&(F=tt);const ve=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=sp(A,F,W,q,Y);Re.setMaterial(q,ve);let Ce=W.index,ke=1;if(q.wireframe===!0){if(Ce=C.getWireframeAttribute(W),Ce===void 0)return;ke=2}const Ie=W.drawRange,Oe=W.attributes.position;let pt=Ie.start*ke,ei=(Ie.start+Ie.count)*ke;fe!==null&&(pt=Math.max(pt,fe.start*ke),ei=Math.min(ei,(fe.start+fe.count)*ke)),Ce!==null?(pt=Math.max(pt,0),ei=Math.min(ei,Ce.count)):Oe!=null&&(pt=Math.max(pt,0),ei=Math.min(ei,Oe.count));const At=ei-pt;if(At<0||At===1/0)return;ye.setup(Y,q,Te,W,Ce);let Wi,dt=se;if(Ce!==null&&(Wi=wt.get(Ce),dt=Z,dt.setIndex(Wi)),Y.isMesh)q.wireframe===!0?(Re.setLineWidth(q.wireframeLinewidth*Ue()),dt.setMode(H.LINES)):dt.setMode(H.TRIANGLES);else if(Y.isLine){let We=q.linewidth;We===void 0&&(We=1),Re.setLineWidth(We*Ue()),Y.isLineSegments?dt.setMode(H.LINES):Y.isLineLoop?dt.setMode(H.LINE_LOOP):dt.setMode(H.LINE_STRIP)}else Y.isPoints?dt.setMode(H.POINTS):Y.isSprite&&dt.setMode(H.TRIANGLES);if(Y.isInstancedMesh)dt.renderInstances(pt,At,Y.count);else if(W.isInstancedBufferGeometry){const We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,no=Math.min(W.instanceCount,We);dt.renderInstances(pt,At,no)}else dt.render(pt,At)};function xe(A,F,W){A.transparent===!0&&A.side===Di&&A.forceSinglePass===!1?(A.side=$t,A.needsUpdate=!0,qr(A,F,W),A.side=sn,A.needsUpdate=!0,qr(A,F,W),A.side=Di):qr(A,F,W)}this.compile=function(A,F,W=null){W===null&&(W=A),m=ie.get(W),m.init(),v.push(m),W.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),A!==W&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(y._useLegacyLights);const q=new Set;return A.traverse(function(Y){const fe=Y.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const Te=fe[ve];xe(Te,W,Y),q.add(Te)}else xe(fe,W,Y),q.add(fe)}),v.pop(),m=null,q},this.compileAsync=function(A,F,W=null){const q=this.compile(A,F,W);return new Promise(Y=>{function fe(){if(q.forEach(function(ve){Ne.get(ve).currentProgram.isReady()&&q.delete(ve)}),q.size===0){Y(A);return}setTimeout(fe,10)}be.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ge=null;function _t(A){Ge&&Ge(A)}function ui(){Bt.stop()}function et(){Bt.start()}const Bt=new Pd;Bt.setAnimationLoop(_t),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(A){Ge=A,pe.setAnimationLoop(A),A===null?Bt.stop():Bt.start()},pe.addEventListener("sessionstart",ui),pe.addEventListener("sessionend",et),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(F),F=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,F,M),m=ie.get(A,v.length),m.init(),v.push(m),He.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),re.setFromProjectionMatrix(He),ue=this.localClippingEnabled,oe=_e.init(this.clippingPlanes,ue),g=Q.get(A,p.length),g.init(),p.push(g),Ci(A,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(J,K),this.info.render.frame++,oe===!0&&_e.beginShadows();const W=m.state.shadowsArray;if(ae.render(W,A,F),oe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(g,A),m.setupLights(y._useLegacyLights),F.isArrayCamera){const q=F.cameras;for(let Y=0,fe=q.length;Y<fe;Y++){const ve=q[Y];Rc(g,A,ve,ve.viewport)}}else Rc(g,A,F);M!==null&&(De.updateMultisampleRenderTarget(M),De.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(y,A,F),ye.resetDefaultState(),R=-1,b=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Ci(A,F,W,q){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){q&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(He);const ve=T.update(A),Te=A.material;Te.visible&&g.push(A,ve,Te,W,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const ve=T.update(A),Te=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Pe.copy(ve.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(He)),Array.isArray(Te)){const Ce=ve.groups;for(let ke=0,Ie=Ce.length;ke<Ie;ke++){const Oe=Ce[ke],pt=Te[Oe.materialIndex];pt&&pt.visible&&g.push(A,ve,pt,W,Pe.z,Oe)}}else Te.visible&&g.push(A,ve,Te,W,Pe.z,null)}}const fe=A.children;for(let ve=0,Te=fe.length;ve<Te;ve++)Ci(fe[ve],F,W,q)}function Rc(A,F,W,q){const Y=A.opaque,fe=A.transmissive,ve=A.transparent;m.setupLightsView(W),oe===!0&&_e.setGlobalState(y.clippingPlanes,W),fe.length>0&&np(Y,fe,F,W),q&&Re.viewport(E.copy(q)),Y.length>0&&Xr(Y,F,W),fe.length>0&&Xr(fe,F,W),ve.length>0&&Xr(ve,F,W),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function np(A,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const fe=Ae.isWebGL2;Ee===null&&(Ee=new ts(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?tn:Mn,minFilter:wn,samples:fe?4:0})),y.getDrawingBufferSize(we),fe?Ee.setSize(we.x,we.y):Ee.setSize(Ba(we.x),Ba(we.y));const ve=y.getRenderTarget();y.setRenderTarget(Ee),y.getClearColor(X),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();const Te=y.toneMapping;y.toneMapping=Sn,Xr(A,W,q),De.updateMultisampleRenderTarget(Ee),De.updateRenderTargetMipmap(Ee);let Ce=!1;for(let ke=0,Ie=F.length;ke<Ie;ke++){const Oe=F[ke],pt=Oe.object,ei=Oe.geometry,At=Oe.material,Wi=Oe.group;if(At.side===Di&&pt.layers.test(q.layers)){const dt=At.side;At.side=$t,At.needsUpdate=!0,Cc(pt,W,q,ei,At,Wi),At.side=dt,At.needsUpdate=!0,Ce=!0}}Ce===!0&&(De.updateMultisampleRenderTarget(Ee),De.updateRenderTargetMipmap(Ee)),y.setRenderTarget(ve),y.setClearColor(X,L),y.toneMapping=Te}function Xr(A,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,fe=A.length;Y<fe;Y++){const ve=A[Y],Te=ve.object,Ce=ve.geometry,ke=q===null?ve.material:q,Ie=ve.group;Te.layers.test(W.layers)&&Cc(Te,F,W,Ce,ke,Ie)}}function Cc(A,F,W,q,Y,fe){A.onBeforeRender(y,F,W,q,Y,fe),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(y,F,W,q,A,fe),Y.transparent===!0&&Y.side===Di&&Y.forceSinglePass===!1?(Y.side=$t,Y.needsUpdate=!0,y.renderBufferDirect(W,F,q,Y,A,fe),Y.side=sn,Y.needsUpdate=!0,y.renderBufferDirect(W,F,q,Y,A,fe),Y.side=Di):y.renderBufferDirect(W,F,q,Y,A,fe),A.onAfterRender(y,F,W,q,Y,fe)}function qr(A,F,W){F.isScene!==!0&&(F=tt);const q=Ne.get(A),Y=m.state.lights,fe=m.state.shadowsArray,ve=Y.state.version,Te=V.getParameters(A,Y.state,fe,F,W),Ce=V.getProgramCacheKey(Te);let ke=q.programs;q.environment=A.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(A.isMeshStandardMaterial?gt:Ye).get(A.envMap||q.environment),ke===void 0&&(A.addEventListener("dispose",ee),ke=new Map,q.programs=ke);let Ie=ke.get(Ce);if(Ie!==void 0){if(q.currentProgram===Ie&&q.lightsStateVersion===ve)return Pc(A,Te),Ie}else Te.uniforms=V.getUniforms(A),A.onBuild(W,Te,y),A.onBeforeCompile(Te,y),Ie=V.acquireProgram(Te,Ce),ke.set(Ce,Ie),q.uniforms=Te.uniforms;const Oe=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=_e.uniform),Pc(A,Te),q.needsLights=ap(A),q.lightsStateVersion=ve,q.needsLights&&(Oe.ambientLightColor.value=Y.state.ambient,Oe.lightProbe.value=Y.state.probe,Oe.directionalLights.value=Y.state.directional,Oe.directionalLightShadows.value=Y.state.directionalShadow,Oe.spotLights.value=Y.state.spot,Oe.spotLightShadows.value=Y.state.spotShadow,Oe.rectAreaLights.value=Y.state.rectArea,Oe.ltc_1.value=Y.state.rectAreaLTC1,Oe.ltc_2.value=Y.state.rectAreaLTC2,Oe.pointLights.value=Y.state.point,Oe.pointLightShadows.value=Y.state.pointShadow,Oe.hemisphereLights.value=Y.state.hemi,Oe.directionalShadowMap.value=Y.state.directionalShadowMap,Oe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Oe.spotShadowMap.value=Y.state.spotShadowMap,Oe.spotLightMatrix.value=Y.state.spotLightMatrix,Oe.spotLightMap.value=Y.state.spotLightMap,Oe.pointShadowMap.value=Y.state.pointShadowMap,Oe.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.currentProgram=Ie,q.uniformsList=null,Ie}function Lc(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Ca.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Pc(A,F){const W=Ne.get(A);W.outputColorSpace=F.outputColorSpace,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function sp(A,F,W,q,Y){F.isScene!==!0&&(F=tt),De.resetTextureUnits();const fe=F.fog,ve=q.isMeshStandardMaterial?F.environment:null,Te=M===null?y.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Lt,Ce=(q.isMeshStandardMaterial?gt:Ye).get(q.envMap||ve),ke=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Oe=!!W.morphAttributes.position,pt=!!W.morphAttributes.normal,ei=!!W.morphAttributes.color;let At=Sn;q.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(At=y.toneMapping);const Wi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dt=Wi!==void 0?Wi.length:0,We=Ne.get(q),no=m.state.lights;if(oe===!0&&(ue===!0||A!==b)){const ti=A===b&&q.id===R;_e.setState(q,A,ti)}let yt=!1;q.version===We.__version?(We.needsLights&&We.lightsStateVersion!==no.state.version||We.outputColorSpace!==Te||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||We.envMap!==Ce||q.fog===!0&&We.fog!==fe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==_e.numPlanes||We.numIntersection!==_e.numIntersection)||We.vertexAlphas!==ke||We.vertexTangents!==Ie||We.morphTargets!==Oe||We.morphNormals!==pt||We.morphColors!==ei||We.toneMapping!==At||Ae.isWebGL2===!0&&We.morphTargetsCount!==dt)&&(yt=!0):(yt=!0,We.__version=q.version);let Dn=We.currentProgram;yt===!0&&(Dn=qr(q,F,Y));let Dc=!1,nr=!1,so=!1;const zt=Dn.getUniforms(),In=We.uniforms;if(Re.useProgram(Dn.program)&&(Dc=!0,nr=!0,so=!0),q.id!==R&&(R=q.id,nr=!0),Dc||b!==A){zt.setValue(H,"projectionMatrix",A.projectionMatrix),zt.setValue(H,"viewMatrix",A.matrixWorldInverse);const ti=zt.map.cameraPosition;ti!==void 0&&ti.setValue(H,Pe.setFromMatrixPosition(A.matrixWorld)),Ae.logarithmicDepthBuffer&&zt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&zt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,nr=!0,so=!0)}if(Y.isSkinnedMesh){zt.setOptional(H,Y,"bindMatrix"),zt.setOptional(H,Y,"bindMatrixInverse");const ti=Y.skeleton;ti&&(Ae.floatVertexTextures?(ti.boneTexture===null&&ti.computeBoneTexture(),zt.setValue(H,"boneTexture",ti.boneTexture,De),zt.setValue(H,"boneTextureSize",ti.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ro=W.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0&&Ae.isWebGL2===!0)&&D.update(Y,W,Dn),(nr||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,zt.setValue(H,"receiveShadow",Y.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(In.envMap.value=Ce,In.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),nr&&(zt.setValue(H,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&rp(In,so),fe&&q.fog===!0&&te.refreshFogUniforms(In,fe),te.refreshMaterialUniforms(In,q,G,B,Ee),Ca.upload(H,Lc(We),In,De)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ca.upload(H,Lc(We),In,De),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&zt.setValue(H,"center",Y.center),zt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),zt.setValue(H,"normalMatrix",Y.normalMatrix),zt.setValue(H,"modelMatrix",Y.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ti=q.uniformsGroups;for(let ao=0,op=ti.length;ao<op;ao++)if(Ae.isWebGL2){const Ic=ti[ao];Se.update(Ic,Dn),Se.bind(Ic,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function rp(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function ap(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,F,W){Ne.get(A.texture).__webglTexture=F,Ne.get(A.depthTexture).__webglTexture=W;const q=Ne.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){const W=Ne.get(A);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,W=0){M=A,S=F,w=W;let q=!0,Y=null,fe=!1,ve=!1;if(A){const Ce=Ne.get(A);Ce.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(H.FRAMEBUFFER,null),q=!1):Ce.__webglFramebuffer===void 0?De.setupRenderTarget(A):Ce.__hasExternalTextures&&De.rebindTextures(A,Ne.get(A.texture).__webglTexture,Ne.get(A.depthTexture).__webglTexture);const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const Ie=Ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[F])?Y=Ie[F][W]:Y=Ie[F],fe=!0):Ae.isWebGL2&&A.samples>0&&De.useMultisampledRTT(A)===!1?Y=Ne.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?Y=Ie[W]:Y=Ie,E.copy(A.viewport),O.copy(A.scissor),k=A.scissorTest}else E.copy(j).multiplyScalar(G).floor(),O.copy(N).multiplyScalar(G).floor(),k=z;if(Re.bindFramebuffer(H.FRAMEBUFFER,Y)&&Ae.drawBuffers&&q&&Re.drawBuffers(A,Y),Re.viewport(E),Re.scissor(O),Re.setScissorTest(k),fe){const Ce=Ne.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,W)}else if(ve){const Ce=Ne.get(A.texture),ke=F||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ce.__webglTexture,W||0,ke)}R=-1},this.readRenderTargetPixels=function(A,F,W,q,Y,fe,ve){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){Re.bindFramebuffer(H.FRAMEBUFFER,Te);try{const Ce=A.texture,ke=Ce.format,Ie=Ce.type;if(ke!==mi&&Me.convert(ke)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ie===tn&&(be.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ie!==Mn&&Me.convert(Ie)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===_i&&(Ae.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-q&&W>=0&&W<=A.height-Y&&H.readPixels(F,W,q,Y,Me.convert(ke),Me.convert(Ie),fe)}finally{const Ce=M!==null?Ne.get(M).__webglFramebuffer:null;Re.bindFramebuffer(H.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,F,W=0){const q=Math.pow(2,-W),Y=Math.floor(F.image.width*q),fe=Math.floor(F.image.height*q);De.setTexture2D(F,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,A.x,A.y,Y,fe),Re.unbindTexture()},this.copyTextureToTexture=function(A,F,W,q=0){const Y=F.image.width,fe=F.image.height,ve=Me.convert(W.format),Te=Me.convert(W.type);De.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,A.x,A.y,Y,fe,ve,Te,F.image.data):F.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,ve,F.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,q,A.x,A.y,ve,Te,F.image),q===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(A,F,W,q,Y=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=A.max.x-A.min.x+1,ve=A.max.y-A.min.y+1,Te=A.max.z-A.min.z+1,Ce=Me.convert(q.format),ke=Me.convert(q.type);let Ie;if(q.isData3DTexture)De.setTexture3D(q,0),Ie=H.TEXTURE_3D;else if(q.isDataArrayTexture)De.setTexture2DArray(q,0),Ie=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Oe=H.getParameter(H.UNPACK_ROW_LENGTH),pt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ei=H.getParameter(H.UNPACK_SKIP_PIXELS),At=H.getParameter(H.UNPACK_SKIP_ROWS),Wi=H.getParameter(H.UNPACK_SKIP_IMAGES),dt=W.isCompressedTexture?W.mipmaps[0]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,dt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,dt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Ie,Y,F.x,F.y,F.z,fe,ve,Te,Ce,ke,dt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ie,Y,F.x,F.y,F.z,fe,ve,Te,Ce,dt.data)):H.texSubImage3D(Ie,Y,F.x,F.y,F.z,fe,ve,Te,Ce,ke,dt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Oe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ei),H.pixelStorei(H.UNPACK_SKIP_ROWS,At),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Wi),Y===0&&q.generateMipmaps&&H.generateMipmap(Ie),Re.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?De.setTextureCube(A,0):A.isData3DTexture?De.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?De.setTexture2DArray(A,0):De.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){S=0,w=0,M=null,Re.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vl?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===ja?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?Kn:yd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kn?at:Lt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cv extends Ud{}Cv.prototype.isWebGL1Renderer=!0;class Lv extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Pv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new P;class jl{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const iu=new P,nu=new Qe,su=new Qe,Dv=new P,ru=new Be,ga=new P,Fo=new zi,au=new Be,ko=new kr;class Iv extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zc,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ga),this.boundingBox.expandByPoint(ga)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ga),this.boundingSphere.expandByPoint(ga)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(n),e.ray.intersectsSphere(Fo)!==!1&&(au.copy(n).invert(),ko.copy(e.ray).applyMatrix4(au),!(this.boundingBox!==null&&ko.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;nu.fromBufferAttribute(n.attributes.skinIndex,e),su.fromBufferAttribute(n.attributes.skinWeight,e),iu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=su.getComponent(s);if(a!==0){const o=nu.getComponent(s);ru.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Dv.copy(iu).applyMatrix4(ru),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Fd extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kd extends Dt{constructor(e=null,t=1,i=1,n,s,a,o,l,c=Ct,h=Ct,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ou=new Be,Nv=new Be;class Kl{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Nv;ou.multiplyMatrices(o,t[s]),ou.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Kl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=xd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new kd(t,e,e,mi,_i);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Fd),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class gl extends qt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new Be,lu=new Be,_a=[],cu=new on,Ov=new Be,lr=new Xt,cr=new zi;class Uv extends Xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gl(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ov)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),cu.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(cu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),cr.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(i),e.ray.intersectsSphere(cr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Es),lu.multiplyMatrices(i,Es),lr.matrixWorld=lu,lr.raycast(e,_a);for(let a=0,o=_a.length;a<o;a++){const l=_a[a];l.instanceId=s,l.object=this,t.push(l)}_a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Bd extends Ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hu=new P,uu=new P,du=new Be,Bo=new kr,ya=new zi;class Zl extends ht{constructor(e=new Ri,t=new Bd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)hu.fromBufferAttribute(t,n-1),uu.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=hu.distanceTo(uu);e.setAttribute("lineDistance",new Si(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(n),ya.radius+=s,e.ray.intersectsSphere(ya)===!1)return;du.copy(n).invert(),Bo.copy(e.ray).applyMatrix4(du);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const p=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let y=p,x=v-1;y<x;y+=f){const S=_.getX(y),w=_.getX(y+1);if(c.fromBufferAttribute(m,S),h.fromBufferAttribute(m,w),Bo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let y=p,x=v-1;y<x;y+=f){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Bo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const fu=new P,pu=new P;class Fv extends Zl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)fu.fromBufferAttribute(t,n),pu.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+fu.distanceTo(pu);e.setAttribute("lineDistance",new Si(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kv extends Zl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zd extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mu=new Be,_l=new kr,va=new zi,xa=new P;class Bv extends ht{constructor(e=new Ri,t=new zd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(n),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;mu.copy(n).invert(),_l.copy(e.ray).applyMatrix4(mu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);xa.fromBufferAttribute(u,m),gu(xa,m,l,n,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)xa.fromBufferAttribute(u,_),gu(xa,_,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function gu(r,e,t,i,n,s,a){const o=_l.distanceSqToPoint(r);if(o<t){const l=new P;_l.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new he:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,n=[],s=[],a=[],o=new P,l=new Be;for(let f=0;f<=e;f++){const _=f/e;n[f]=this.getTangentAt(_,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(St(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(St(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(n[_],f*_)),a[_].crossVectors(n[_],s[_])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jl extends Hi{constructor(e=0,t=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new he,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zv extends Jl{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ql(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+i*o}}}const ba=new P,zo=new Ql,Ho=new Ql,Vo=new Ql;class Hv extends Hi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new P){const i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(ba.subVectors(n[0],n[1]).add(n[0]),c=ba);const u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(ba.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=ba),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),zo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),Ho.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),Vo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ho.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(zo.calc(l),Ho.calc(l),Vo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _u(r,e,t,i,n){const s=(i-e)*.5,a=(n-t)*.5,o=r*r,l=r*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*r+t}function Vv(r,e){const t=1-r;return t*t*e}function Gv(r,e){return 2*(1-r)*r*e}function Wv(r,e){return r*r*e}function vr(r,e,t,i){return Vv(r,e)+Gv(r,t)+Wv(r,i)}function Xv(r,e){const t=1-r;return t*t*t*e}function qv(r,e){const t=1-r;return 3*t*t*r*e}function Yv(r,e){return 3*(1-r)*r*r*e}function $v(r,e){return r*r*r*e}function xr(r,e,t,i,n){return Xv(r,e)+qv(r,t)+Yv(r,i)+$v(r,n)}class Hd extends Hi{constructor(e=new he,t=new he,i=new he,n=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new he){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(xr(e,n.x,s.x,a.x,o.x),xr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jv extends Hi{constructor(e=new P,t=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new P){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(xr(e,n.x,s.x,a.x,o.x),xr(e,n.y,s.y,a.y,o.y),xr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vd extends Hi{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kv extends Hi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gd extends Hi{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(vr(e,n.x,s.x,a.x),vr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zv extends Hi{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(vr(e,n.x,s.x,a.x),vr(e,n.y,s.y,a.y),vr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wd extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(_u(o,l.x,c.x,h.x,u.x),_u(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new he().fromArray(n))}return this}}var yu=Object.freeze({__proto__:null,ArcCurve:zv,CatmullRomCurve3:Hv,CubicBezierCurve:Hd,CubicBezierCurve3:jv,EllipseCurve:Jl,LineCurve:Vd,LineCurve3:Kv,QuadraticBezierCurve:Gd,QuadraticBezierCurve3:Zv,SplineCurve:Wd});class Jv extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new yu[n.type]().fromJSON(n))}return this}}class yl extends Jv{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Vd(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const s=new Gd(this.currentPoint.clone(),new he(e,t),new he(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){const o=new Hd(this.currentPoint.clone(),new he(e,t),new he(i,n),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Wd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){const c=new Jl(e,t,i,n,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Br extends Ri{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Si(s,3)),this.setAttribute("normal",new Si(s.slice(),3)),this.setAttribute("uv",new Si(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new P,x=new P,S=new P;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],x),f(t[w+2],S),l(y,x,S,v)}function l(v,y,x,S){const w=S+1,M=[];for(let R=0;R<=w;R++){M[R]=[];const b=v.clone().lerp(x,R/w),E=y.clone().lerp(x,R/w),O=w-R;for(let k=0;k<=O;k++)k===0&&R===w?M[R][k]=b:M[R][k]=b.clone().lerp(E,k/O)}for(let R=0;R<w;R++)for(let b=0;b<2*(w-R)-1;b++){const E=Math.floor(b/2);b%2===0?(d(M[R][E+1]),d(M[R+1][E]),d(M[R][E])):(d(M[R][E+1]),d(M[R+1][E+1]),d(M[R+1][E]))}}function c(v){const y=new P;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(v),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function h(){const v=new P;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const x=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;a.push(x,1-S)}_(),u()}function u(){for(let v=0;v<a.length;v+=6){const y=a[v+0],x=a[v+2],S=a[v+4],w=Math.max(y,x,S),M=Math.min(y,x,S);w>.9&&M<.1&&(y<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function _(){const v=new P,y=new P,x=new P,S=new P,w=new he,M=new he,R=new he;for(let b=0,E=0;b<s.length;b+=9,E+=6){v.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),w.set(a[E+0],a[E+1]),M.set(a[E+2],a[E+3]),R.set(a[E+4],a[E+5]),S.copy(v).add(y).add(x).divideScalar(3);const O=m(S);g(w,E+0,v,O),g(M,E+2,y,O),g(R,E+4,x,O)}}function g(v,y,x,S){S<0&&v.x===1&&(a[y]=v.x-1),x.x===0&&x.z===0&&(a[y]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.vertices,e.indices,e.radius,e.details)}}class Go extends yl{constructor(e){super(e),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new yl().fromJSON(n))}return this}}const Qv={triangulate:function(r,e,t=2){const i=e&&e.length,n=i?e[0]*t:r.length;let s=Xd(r,0,n,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(i&&(s=sx(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let _=t;_<n;_+=t)u=r[_],d=r[_+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Ar(s,a,t,o,l,f,0),a}};function Xd(r,e,t,i,n){let s,a;if(n===mx(r,e,t,i)>0)for(s=e;s<t;s+=i)a=vu(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=vu(s,r[s],r[s+1],a);return a&&Ja(a,a.next)&&(Cr(a),a=a.next),a}function is(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(Ja(t,t.next)||lt(t.prev,t,t.next)===0)){if(Cr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ar(r,e,t,i,n,s,a){if(!r)return;!a&&s&&cx(r,i,n,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?tx(r,i,n,s):ex(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Cr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=ix(is(r),e,t),Ar(r,e,t,i,n,s,2)):a===2&&nx(r,e,t,i,n,s):Ar(is(r),e,t,i,n,s,1);break}}}function ex(r){const e=r.prev,t=r,i=r.next;if(lt(e,t,i)>=0)return!1;const n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&Rs(n,o,s,l,a,c,_.x,_.y)&&lt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function tx(r,e,t,i){const n=r.prev,s=r,a=r.next;if(lt(n,s,a)>=0)return!1;const o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=vl(f,_,e,t,i),v=vl(g,m,e,t,i);let y=r.prevZ,x=r.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=f&&y.x<=g&&y.y>=_&&y.y<=m&&y!==n&&y!==a&&Rs(o,h,l,u,c,d,y.x,y.y)&&lt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=g&&x.y>=_&&x.y<=m&&x!==n&&x!==a&&Rs(o,h,l,u,c,d,x.x,x.y)&&lt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=g&&y.y>=_&&y.y<=m&&y!==n&&y!==a&&Rs(o,h,l,u,c,d,y.x,y.y)&&lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=m&&x!==n&&x!==a&&Rs(o,h,l,u,c,d,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ix(r,e,t){let i=r;do{const n=i.prev,s=i.next.next;!Ja(n,s)&&qd(n,i,i.next,s)&&Rr(n,s)&&Rr(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Cr(i),Cr(i.next),i=r=s),i=i.next}while(i!==r);return is(i)}function nx(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dx(a,o)){let l=Yd(a,o);a=is(a,a.next),l=is(l,l.next),Ar(a,e,t,i,n,s,0),Ar(l,e,t,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function sx(r,e,t,i){const n=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:r.length,c=Xd(r,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(ux(c));for(n.sort(rx),s=0;s<n.length;s++)t=ax(n[s],t);return t}function rx(r,e){return r.x-e.x}function ax(r,e){const t=ox(r,e);if(!t)return e;const i=Yd(t,r);return is(i,i.next),is(t,t.next)}function ox(r,e){let t=e,i=-1/0,n;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,n=t.x<t.next.x?t:t.next,d===s))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let h=1/0,u;t=n;do s>=t.x&&t.x>=l&&s!==t.x&&Rs(a<c?s:i,a,l,c,a<c?i:s,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(s-t.x),Rr(t,r)&&(u<h||u===h&&(t.x>n.x||t.x===n.x&&lx(n,t)))&&(n=t,h=u)),t=t.next;while(t!==o);return n}function lx(r,e){return lt(r.prev,r,e.prev)<0&&lt(e.next,r,r.next)<0}function cx(r,e,t,i){let n=r;do n.z===0&&(n.z=vl(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,hx(n)}function hx(r){let e,t,i,n,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;t=i}s.nextZ=null,c*=2}while(a>1);return r}function vl(r,e,t,i,n){return r=(r-t)*n|0,e=(e-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function ux(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Rs(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function dx(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!fx(r,e)&&(Rr(r,e)&&Rr(e,r)&&px(r,e)&&(lt(r.prev,r,e.prev)||lt(r,e.prev,e))||Ja(r,e)&&lt(r.prev,r,r.next)>0&&lt(e.prev,e,e.next)>0)}function lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ja(r,e){return r.x===e.x&&r.y===e.y}function qd(r,e,t,i){const n=Ma(lt(r,e,t)),s=Ma(lt(r,e,i)),a=Ma(lt(t,i,r)),o=Ma(lt(t,i,e));return!!(n!==s&&a!==o||n===0&&Sa(r,t,e)||s===0&&Sa(r,i,e)||a===0&&Sa(t,r,i)||o===0&&Sa(t,e,i))}function Sa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ma(r){return r>0?1:r<0?-1:0}function fx(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&qd(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Rr(r,e){return lt(r.prev,r,r.next)<0?lt(r,e,r.next)>=0&&lt(r,r.prev,e)>=0:lt(r,e,r.prev)<0||lt(r,r.next,e)<0}function px(r,e){let t=r,i=!1;const n=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&n<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function Yd(r,e){const t=new xl(r.i,r.x,r.y),i=new xl(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function vu(r,e,t,i){const n=new xl(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Cr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function xl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mx(r,e,t,i){let n=0;for(let s=e,a=t-i;s<t;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}class ec{static area(e){const t=e.length;let i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return i*.5}static isClockWise(e){return ec.area(e)<0}static triangulateShape(e,t){const i=[],n=[],s=[];xu(e),bu(i,e);let a=e.length;t.forEach(xu);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,bu(i,t[l]);const o=Qv.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function xu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function bu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class za extends Br{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new za(e.radius,e.detail)}}class tc extends Br{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tc(e.radius,e.detail)}}class ic extends Br{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ic(e.radius,e.detail)}}class nc extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends nc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ta(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function gx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function _x(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Su(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function $d(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}class zr{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yx extends zr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case fh:s=e,o=2*t-i;break;case ph:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:a=e,l=2*i-t;break;case ph:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-t)/(n-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,y=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let S=0;S!==o;++S)s[S]=p*a[h+S]+v*a[c+S]+y*a[l+S]+x*a[u+S];return s}}class vx extends zr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class xx extends zr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&gx(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===fo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){const g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=Hs;class tr extends Vi{}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Er;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class jd extends Vi{}jd.prototype.ValueTypeName="color";class Ws extends Vi{}Ws.prototype.ValueTypeName="number";class bx extends zr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)ki.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ns extends Vi{InterpolantFactoryMethodLinear(e){return new bx(this.times,this.values,this.getValueSize(),e)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.DefaultInterpolation=Hs;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends Vi{}ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Er;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends Vi{}Xs.prototype.ValueTypeName="vector";class Sx{constructor(e,t=-1,i,n=Zp){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=bi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Tx(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(Vi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=_x(l);l=Su(l,1,h),c=Su(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ws(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,_,g){if(f.length!==0){const m=[],p=[];$d(f,m,p,_),m.length!==0&&g.push(new u(d,m,p))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let v=0;v!==d[_].morphTargets.length;++v){const y=d[_];m.push(y.time),p.push(y.morphTarget===g?1:0)}n.push(new Ws(".morphTargetInfluence["+g+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";i(Xs,f+".position",d,"pos",n),i(ns,f+".quaternion",d,"rot",n),i(Xs,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Mx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ws;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return jd;case"quaternion":return ns;case"bool":case"boolean":return tr;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Tx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Mx(r.type);if(r.times===void 0){const t=[],i=[];$d(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const qs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Kd{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const Ex=new Kd;let Gi=class{constructor(e){this.manager=e!==void 0?e:Ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class wx extends Error{constructor(e,t){super(e),this.response=t}}class Hr extends Gi{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:i,onError:n});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ki[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let w=0,M=h.length;w<M;w++){const R=h[w];R.onProgress&&R.onProgress(S)}p.enqueue(x),v()}})}}});return new Response(m)}else throw new wx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{qs.add(e,c);const h=Ki[e];delete Ki[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ki[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Zd extends Gi{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=qs.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=wr("img");function l(){h(),qs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Ax extends Gi{constructor(e){super(e)}load(e,t,i,n){const s=new Wl;s.colorSpace=at;const a=new Zd(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return s}}class Rx extends Gi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new kd,o=new Hr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(n!==void 0)n(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Yt,a.wrapT=c.wrapT!==void 0?c.wrapT:Yt,a.magFilter=c.magFilter!==void 0?c.magFilter:Mt,a.minFilter=c.minFilter!==void 0?c.minFilter:Mt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=wn),c.mipmapCount===1&&(a.minFilter=Mt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,n),a}}class Jd extends Gi{constructor(e){super(e)}load(e,t,i,n){const s=new Dt,a=new Zd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class sc extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wo=new Be,Mu=new P,Tu=new P;class rc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mu),Tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tu),t.updateMatrixWorld(),Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cx extends rc{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Vs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lx extends sc{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Cx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Eu=new Be,hr=new P,Xo=new P;class Px extends rc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),i.position.copy(hr),Xo.copy(i.position),Xo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xo),i.updateMatrixWorld(),n.makeTranslation(-hr.x,-hr.y,-hr.z),Eu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu)}}class Dx extends sc{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Px}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ix extends rc{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nx extends sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Ix}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bl{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ox extends Gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=qs.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){qs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let Ea;class Ux{static getContext(){return Ea===void 0&&(Ea=new(window.AudioContext||window.webkitAudioContext)),Ea}static setContext(e){Ea=e}}class Fx extends Gi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new Hr(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Ux.getContext().decodeAudioData(c,function(u){t(u)},o)}catch(c){o(c)}},i,n);function o(l){n?n(l):console.error(l),s.manager.itemError(e)}}}const ac="\\[\\]\\.:\\/",kx=new RegExp("["+ac+"]","g"),oc="[^"+ac+"]",Bx="[^"+ac.replace("\\.","")+"]",zx=/((?:WC+[\/:])*)/.source.replace("WC",oc),Hx=/(WCOD+)?/.source.replace("WCOD",Bx),Vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),Gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),Wx=new RegExp("^"+zx+Hx+Vx+Gx+"$"),Xx=["material","materials","bones","map"];class qx{constructor(e,t,i){const n=i||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class je{constructor(e,t,i){this.path=t,this.parsedPath=i||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,i):new je(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){const t=Wx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Xx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=qx;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class br{constructor(e){this.value=e}clone(){return new br(this.value.clone===void 0?this.value:this.value.clone())}}class wu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yx{constructor(){this.type="ShapePath",this.color=new Le,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new yl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,s,a){return this.currentPath.bezierCurveTo(e,t,i,n,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const v=[];for(let y=0,x=p.length;y<x;y++){const S=p[y],w=new Go;w.curves=S.curves,v.push(w)}return v}function i(p,v){const y=v.length;let x=!1;for(let S=y-1,w=0;w<y;S=w++){let M=v[S],R=v[w],b=R.x-M.x,E=R.y-M.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(M=v[w],b=-b,R=v[S],E=-E),p.y<M.y||p.y>R.y)continue;if(p.y===M.y){if(p.x===M.x)return!0}else{const O=E*(p.x-M.x)-b*(p.y-M.y);if(O===0)return!0;if(O<0)continue;x=!x}}else{if(p.y!==M.y)continue;if(R.x<=p.x&&p.x<=M.x||M.x<=p.x&&p.x<=R.x)return!0}}return x}const n=ec.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new Go,l.curves=o.curves,c.push(l),c;let h=!n(s[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],_=0,g;d[_]=void 0,f[_]=[];for(let p=0,v=s.length;p<v;p++)o=s[p],g=o.getPoints(),a=n(g),a=e?!a:a,a?(!h&&d[_]&&_++,d[_]={s:new Go,p:g},d[_].s.curves=o.curves,h&&_++,f[_]=[]):f[_].push({h:o,p:g[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,v=0;for(let y=0,x=d.length;y<x;y++)u[y]=[];for(let y=0,x=d.length;y<x;y++){const S=f[y];for(let w=0;w<S.length;w++){const M=S[w];let R=!0;for(let b=0;b<d.length;b++)i(M.p,d[b].p)&&(y!==b&&v++,R?(R=!1,u[b].push(M)):p=!0);R&&u[y].push(M)}}v>0&&p===!1&&(f=u)}let m;for(let p=0,v=d.length;p<v;p++){l=d[p].s,c.push(l),m=f[p];for(let y=0,x=m.length;y<x;y++)l.holes.push(m[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);class Vr{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(n=>{const s=this.resolveName(n);this.callbacks[s.namespace]instanceof Object||(this.callbacks[s.namespace]={}),this.callbacks[s.namespace][s.value]instanceof Array||(this.callbacks[s.namespace][s.value]=[]),this.callbacks[s.namespace][s.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(i=>{const n=this.resolveName(i);if(n.namespace!=="base"&&n.value==="")delete this.callbacks[n.namespace];else if(n.namespace==="base")for(const s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][n.value]instanceof Array&&(delete this.callbacks[s][n.value],Object.keys(this.callbacks[s]).length===0&&delete this.callbacks[s]);else this.callbacks[n.namespace]instanceof Object&&this.callbacks[n.namespace][n.value]instanceof Array&&(delete this.callbacks[n.namespace][n.value],Object.keys(this.callbacks[n.namespace]).length===0&&delete this.callbacks[n.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let i=null;const n=t instanceof Array?t:[];let s=this.resolveNames(e);if(s=this.resolveName(s[0]),s.namespace==="base")for(const a in this.callbacks)this.callbacks[a]instanceof Object&&this.callbacks[a][s.value]instanceof Array&&this.callbacks[a][s.value].forEach(function(o){o.apply(this,n)});else if(this.callbacks[s.namespace]instanceof Object){if(s.value==="")return console.warn("wrong name"),this;this.callbacks[s.namespace][s.value].forEach(function(a){a.apply(this,n)})}return i}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},i=e.split(".");return t.original=e,t.value=i[0],t.namespace="base",i.length>1&&i[1]!==""&&(t.namespace=i[1]),t}}class $x extends Vr{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class jx extends Vr{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=(e-this.current)*.001,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),requestAnimationFrame(()=>{this.tick()})}}const Au={type:"change"},qo={type:"start"},Ru={type:"end"},wa=new kr,Cu=new mn,Kx=Math.cos(70*Wn.DEG2RAD);class Zx extends rs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",T),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Au),i.update(),s=n.NONE},this.update=function(){const D=new P,se=new ki().setFromUnitVectors(e.up,new P(0,1,0)),Z=se.clone().invert(),Me=new P,ye=new ki,Se=new P,ge=2*Math.PI;return function(Ve=null){const I=i.object.position;D.copy(I).sub(i.target),D.applyQuaternion(se),o.setFromVector3(D),i.autoRotate&&s===n.NONE&&O(b(Ve)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let le=i.minAzimuthAngle,ee=i.maxAzimuthAngle;isFinite(le)&&isFinite(ee)&&(le<-Math.PI?le+=ge:le>Math.PI&&(le-=ge),ee<-Math.PI?ee+=ge:ee>Math.PI&&(ee-=ge),le<=ee?o.theta=Math.max(le,Math.min(ee,o.theta)):o.theta=o.theta>(le+ee)/2?Math.max(le,o.theta):Math.min(ee,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&w||i.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*c),D.setFromSpherical(o),D.applyQuaternion(Z),I.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let $=!1;if(i.zoomToCursor&&w){let ne=null;if(i.object.isPerspectiveCamera){const xe=D.length();ne=K(xe*c);const Ge=xe-ne;i.object.position.addScaledVector(x,Ge),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const xe=new P(S.x,S.y,0);xe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),$=!0;const Ge=new P(S.x,S.y,0);Ge.unproject(i.object),i.object.position.sub(Ge).add(xe),i.object.updateMatrixWorld(),ne=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ne!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ne).add(i.object.position):(wa.origin.copy(i.object.position),wa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(wa.direction))<Kx?e.lookAt(i.target):(Cu.setFromNormalAndCoplanarPoint(i.object.up,i.target),wa.intersectPlane(Cu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),$=!0);return c=1,w=!1,$||Me.distanceToSquared(i.object.position)>a||8*(1-ye.dot(i.object.quaternion))>a||Se.distanceToSquared(i.target)>0?(i.dispatchEvent(Au),Me.copy(i.object.position),ye.copy(i.object.quaternion),Se.copy(i.target),$=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",Ne),i.domElement.removeEventListener("pointercancel",Ye),i.domElement.removeEventListener("wheel",C),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",Ye),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",T),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=n.NONE;const a=1e-6,o=new wu,l=new wu;let c=1;const h=new P,u=new he,d=new he,f=new he,_=new he,g=new he,m=new he,p=new he,v=new he,y=new he,x=new P,S=new he;let w=!1;const M=[],R={};function b(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function E(){return Math.pow(.95,i.zoomSpeed)}function O(D){l.theta-=D}function k(D){l.phi-=D}const X=function(){const D=new P;return function(Z,Me){D.setFromMatrixColumn(Me,0),D.multiplyScalar(-Z),h.add(D)}}(),L=function(){const D=new P;return function(Z,Me){i.screenSpacePanning===!0?D.setFromMatrixColumn(Me,1):(D.setFromMatrixColumn(Me,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(Z),h.add(D)}}(),U=function(){const D=new P;return function(Z,Me){const ye=i.domElement;if(i.object.isPerspectiveCamera){const Se=i.object.position;D.copy(Se).sub(i.target);let ge=D.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),X(2*Z*ge/ye.clientHeight,i.object.matrix),L(2*Me*ge/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(Z*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),L(Me*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(D){if(!i.zoomToCursor)return;w=!0;const se=i.domElement.getBoundingClientRect(),Z=D.clientX-se.left,Me=D.clientY-se.top,ye=se.width,Se=se.height;S.x=Z/ye*2-1,S.y=-(Me/Se)*2+1,x.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function j(D){u.set(D.clientX,D.clientY)}function N(D){J(D),p.set(D.clientX,D.clientY)}function z(D){_.set(D.clientX,D.clientY)}function re(D){d.set(D.clientX,D.clientY),f.subVectors(d,u).multiplyScalar(i.rotateSpeed);const se=i.domElement;O(2*Math.PI*f.x/se.clientHeight),k(2*Math.PI*f.y/se.clientHeight),u.copy(d),i.update()}function oe(D){v.set(D.clientX,D.clientY),y.subVectors(v,p),y.y>0?B(E()):y.y<0&&G(E()),p.copy(v),i.update()}function ue(D){g.set(D.clientX,D.clientY),m.subVectors(g,_).multiplyScalar(i.panSpeed),U(m.x,m.y),_.copy(g),i.update()}function Ee(D){J(D),D.deltaY<0?G(E()):D.deltaY>0&&B(E()),i.update()}function He(D){let se=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),se=!0;break}se&&(D.preventDefault(),i.update())}function we(){if(M.length===1)u.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),se=.5*(M[0].pageY+M[1].pageY);u.set(D,se)}}function Pe(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),se=.5*(M[0].pageY+M[1].pageY);_.set(D,se)}}function tt(){const D=M[0].pageX-M[1].pageX,se=M[0].pageY-M[1].pageY,Z=Math.sqrt(D*D+se*se);p.set(0,Z)}function Ue(){i.enableZoom&&tt(),i.enablePan&&Pe()}function H(){i.enableZoom&&tt(),i.enableRotate&&we()}function Nt(D){if(M.length==1)d.set(D.pageX,D.pageY);else{const Z=de(D),Me=.5*(D.pageX+Z.x),ye=.5*(D.pageY+Z.y);d.set(Me,ye)}f.subVectors(d,u).multiplyScalar(i.rotateSpeed);const se=i.domElement;O(2*Math.PI*f.x/se.clientHeight),k(2*Math.PI*f.y/se.clientHeight),u.copy(d)}function be(D){if(M.length===1)g.set(D.pageX,D.pageY);else{const se=de(D),Z=.5*(D.pageX+se.x),Me=.5*(D.pageY+se.y);g.set(Z,Me)}m.subVectors(g,_).multiplyScalar(i.panSpeed),U(m.x,m.y),_.copy(g)}function Ae(D){const se=de(D),Z=D.pageX-se.x,Me=D.pageY-se.y,ye=Math.sqrt(Z*Z+Me*Me);v.set(0,ye),y.set(0,Math.pow(v.y/p.y,i.zoomSpeed)),B(y.y),p.copy(v)}function Re(D){i.enableZoom&&Ae(D),i.enablePan&&be(D)}function nt(D){i.enableZoom&&Ae(D),i.enableRotate&&Nt(D)}function Ne(D){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",De),i.domElement.addEventListener("pointerup",Ye)),ie(D),D.pointerType==="touch"?V(D):gt(D))}function De(D){i.enabled!==!1&&(D.pointerType==="touch"?te(D):wt(D))}function Ye(D){_e(D),M.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",Ye)),i.dispatchEvent(Ru),s=n.NONE}function gt(D){let se;switch(D.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case os.DOLLY:if(i.enableZoom===!1)return;N(D),s=n.DOLLY;break;case os.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;z(D),s=n.PAN}else{if(i.enableRotate===!1)return;j(D),s=n.ROTATE}break;case os.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;j(D),s=n.ROTATE}else{if(i.enablePan===!1)return;z(D),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(qo)}function wt(D){switch(s){case n.ROTATE:if(i.enableRotate===!1)return;re(D);break;case n.DOLLY:if(i.enableZoom===!1)return;oe(D);break;case n.PAN:if(i.enablePan===!1)return;ue(D);break}}function C(D){i.enabled===!1||i.enableZoom===!1||s!==n.NONE||(D.preventDefault(),i.dispatchEvent(qo),Ee(D),i.dispatchEvent(Ru))}function T(D){i.enabled===!1||i.enablePan===!1||He(D)}function V(D){switch(ae(D),M.length){case 1:switch(i.touches.ONE){case ls.ROTATE:if(i.enableRotate===!1)return;we(),s=n.TOUCH_ROTATE;break;case ls.PAN:if(i.enablePan===!1)return;Pe(),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(i.touches.TWO){case ls.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(),s=n.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;H(),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(qo)}function te(D){switch(ae(D),s){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;Nt(D),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;be(D),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Re(D),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;nt(D),i.update();break;default:s=n.NONE}}function Q(D){i.enabled!==!1&&D.preventDefault()}function ie(D){M.push(D)}function _e(D){delete R[D.pointerId];for(let se=0;se<M.length;se++)if(M[se].pointerId==D.pointerId){M.splice(se,1);return}}function ae(D){let se=R[D.pointerId];se===void 0&&(se=new he,R[D.pointerId]=se),se.set(D.pageX,D.pageY)}function de(D){const se=D.pointerId===M[0].pointerId?M[1]:M[0];return R[se.pointerId]}i.domElement.addEventListener("contextmenu",Q),i.domElement.addEventListener("pointerdown",Ne),i.domElement.addEventListener("pointercancel",Ye),i.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}class Jx{constructor(){this.experience=new ut,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.animationDuration=1e3,this.setInstance()}setInstance(){const e=this.sizes.width/this.sizes.height,i=2*Math.atan(Math.tan(35*Math.PI/180/2)/e)*180/Math.PI;this.instance=new Gt(i,this.sizes.width/this.sizes.height,.1,100),this.instance.position.set(0,0,3),this.scene.add(this.instance)}setOrbitControls(){this.controls=new Zx(this.instance,this.canvas),this.controls.enableDamping=!0}resize(){const e=this.sizes.width/this.sizes.height,i=2*Math.atan(Math.tan(35*Math.PI/180/2)/e)*180/Math.PI;this.instance.fov=i,this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){}}class Qx{constructor(){this.experience=new ut,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.setInstance(),this.resize()}setInstance(){this.instance=new Ud({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.instance.toneMapping=ld,this.instance.toneMappingExposure=1.75,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=ad,this.instance.setClearColor("#41431B"),this.instance.setClearAlpha(0),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(window.devicePixelRatio,2))}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(window.devicePixelRatio,2))}update(){this.instance.render(this.scene,this.camera.instance)}}const ot={};ot.spanify=function(r){if(!r)return;const t=r.textContent.split("").map(i=>i===" "?'<span class="heroTitle-wrapper space"><span>&nbsp;</span></span>':`<span class="heroTitle-wrapper"><span>${i}</span></span>`).join("");r.innerHTML=t};ot.remToPx=function(r){return r*parseFloat(getComputedStyle(document.documentElement).fontSize)};ot.pxToRem=function(r){const e=window.innerWidth*.052083333333333336/100;return r/e};ot.getWorldPositionFromElement=function(r,e,t=3){const i=r.getBoundingClientRect(),n=(i.left+i.width/2)/window.innerWidth*2-1,s=-((i.top+i.height/2)/window.innerHeight)*2+1,a=new P(n,s,.5);a.unproject(e);const o=a.sub(e.position).normalize();return e.position.clone().add(o.multiplyScalar(t))};ot.pixelsToWorldOffset=function(r,e,t,i=3){const n=r/window.innerWidth*2,s=-(e/window.innerHeight)*2,a=new P(n,s,.5);return a.unproject(t),a.sub(t.position).normalize().multiplyScalar(i)};ot.remToWorldOffset=function(r,e,t,i=3){const n=parseFloat(getComputedStyle(document.documentElement).fontSize),s=r*n,a=e*n,o=s/window.innerWidth*2,l=-(a/window.innerHeight)*2,c=new P(o,l,.5);return c.unproject(t),c.sub(t.position).normalize().multiplyScalar(i)};class eb{constructor(){this.experience=new ut,this.results=[{top:"le",bottom:"arn"},{top:"stu",bottom:"dy"},{top:"prac",bottom:"tice"}],this.count=0,this.setHtml(),this.start()}start(){this.appear(this.count),setInterval(()=>{this.disappear(this.count),this.count=(this.count+1)%this.results.length,this.appear(this.count)},3e3)}setHtml(){this.titleContainer=document.querySelector(".heroTitleContainer"),this.results.forEach((e,t)=>{this.titleContainer.innerHTML+=`
                <div class="heroStrokedTitle stroked-title-${t}">
                    <h1 class="heroTitle">${e.top}</h1>
                    <h1 class="heroTitle">${e.bottom}</h1>
                </div>
                <div class="heroPlainTitle plain-title-${t}">
                    <h1 class="heroTitle">${e.top}</h1>
                    <h1 class="heroTitle">${e.bottom}</h1>
                </div>
            `}),this.titles=Array.from(this.titleContainer.querySelectorAll("div h1")),this.titles.forEach(e=>{ot.spanify(e)})}appear(e){Array.from(this.titleContainer.querySelectorAll("div")).filter(i=>i.classList.contains(`stroked-title-${e}`)||i.classList.contains(`plain-title-${e}`)).forEach(i=>{const n=i.querySelectorAll("span span");i.querySelectorAll("span").forEach(a=>{setTimeout(()=>{a.style.zIndex="1"},1e3)}),n.forEach(a=>{a.style.transition="",a.style.transform="translate(-100%, 0)",a.offsetWidth,a.style.transition="transform 1s var(--ease) 0.6s",a.style.transform="translate(0, 0)",a.style.zIndex="1"})})}disappear(e){Array.from(this.titleContainer.querySelectorAll("div")).filter(i=>i.classList.contains(`stroked-title-${e}`)||i.classList.contains(`plain-title-${e}`)).forEach(i=>{const n=i.querySelectorAll("span span");i.querySelectorAll("span").forEach(a=>{setTimeout(()=>{a.style.zIndex="0"},1e3)}),n.forEach(a=>{a.style.transition="",a.style.transform="translate(0, 0)",a.offsetWidth,a.style.transition="transform 1s var(--ease) 0.5s",a.style.transform="translate(100%, 0)",setTimeout(()=>{a.style.zIndex="0"},1e3)})})}update(){}}class Gr{constructor(){this.experience=new ut,this.instances=document.querySelectorAll(".cta"),this.listeners=[],this.build()}build(){this.instances.forEach(e=>{if(e._ctaListeners){const{mouseOverHandler:s,mouseOutHandler:a,clickHandler:o}=e._ctaListeners;e.removeEventListener("mouseenter",s),e.removeEventListener("mouseleave",a),e.removeEventListener("click",o)}if(!e.classList.contains("cta-built")){const s=e.innerHTML;e.innerHTML=`
                <div class="button-textContainer">
                    <div class="main">${s}</div>
                    <div class="secondary">
                        <span><span><p>${s}</p></span></span>
                        <span><span><p>${s}</p></span></span>
                        <span><span><p>${s}</p></span></span>
                        <span><span><p>${s}</p></span></span>
                    </div>
                </div>
            `,e.classList.add("cta-built")}const t=s=>this.handleMouseOver(s),i=s=>this.handleMouseOut(s),n=s=>{s.currentTarget.querySelectorAll(".secondary span span").forEach(l=>l.style.transform="translate(0, 100%)");const o=s.currentTarget.querySelector(".main").textContent.trim().toLowerCase();if(o.includes("instagram")){window.open("https://www.instagram.com/britcansat101/","_blank");return}else if(o.includes("contact")){window.open("mailto:sailakedi444@gmail.com","_blank");return}s.preventDefault(),this.experience.router.route(s)};e.addEventListener("mouseenter",t),e.addEventListener("mouseleave",i),e.addEventListener("click",n),e._ctaListeners={mouseOverHandler:t,mouseOutHandler:i,clickHandler:n}})}removeListeners(){this.listeners.forEach(({instance:e,mouseOverHandler:t,mouseOutHandler:i,clickHandler:n})=>{e.removeEventListener("mouseover",t),e.removeEventListener("mouseout",i),e.removeEventListener("click",n)}),this.listeners=[]}handleMouseOver(e){e.currentTarget.querySelectorAll(".secondary span span").forEach((i,n)=>{i.style.transform="translate(0, 0)",i.style.transitionDelay=`${n*.05}s`})}handleMouseOut(e){const t=e.currentTarget.querySelectorAll(".secondary span span"),i=t.length;t.forEach((n,s)=>{n.style.transitionDelay=`${(i-1-s)*.05}s`,n.style.transform="translate(0, -100%)"})}}me(Gr,"experience",null);class Qa{constructor(){this.experience=new ut,this.instances=document.querySelectorAll(".title"),this.build()}build(){const e=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(this.animate(i.target),e.unobserve(i.target))})},{threshold:.8});this.instances.forEach(t=>{ot.spanify(t),e.observe(t)})}animate(e){e.querySelectorAll(".heroTitle-wrapper span").forEach((i,n)=>{i.style.transition="none",i.style.transform="translateX(-100%)",i.offsetWidth,i.style.transition="transform 1s var(--ease)",i.style.transform="translateX(0)"})}}class lc{constructor(){this.experience=new ut,this.instances=document.querySelectorAll(".text"),this.build()}build(){const e=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(this.animate(i.target),e.unobserve(i.target))})},{threshold:this.experience.isPhone?.2:.8});this.instances.forEach(t=>{e.observe(t)})}animate(e){e.style.transition="none",e.style.top="50rem",e.style.opacity="0",e.offsetWidth,e.style.transition=" 1s ease-in-out",e.style.top="0",e.style.opacity="1"}}class tb{constructor(e){this.experience=new ut,this.container=document.querySelector(".horizontalScroll"),this.target=this.container.querySelector(".homeCards-container"),this.target.style.top=`${window.innerHeight*.5-this.target.querySelector(".card").getBoundingClientRect().height*.4}px`,this.target.style.left=`${window.innerWidth*.5-this.target.querySelector(".card").getBoundingClientRect().width*.5}px`,this.page=e,this.experience.lenis.on("scroll",t=>{})}onScroll(e){const t=e.animatedScroll;this.sectionStart=this.container.getBoundingClientRect().top+t,this.sectionEnd=this.sectionStart+this.container.getBoundingClientRect().height-window.innerHeight,this.hasStarted=t>this.sectionStart,this.hasEnded=t>this.sectionEnd;const i=this.container.getBoundingClientRect().top,n=this.container.getBoundingClientRect().height-window.innerHeight+this.target.querySelector(".card").getBoundingClientRect().width,s=this.target.querySelector(".card").getBoundingClientRect().width,a=this.target.offsetWidth-s,l=i*100/n/100*this.target.getBoundingClientRect().width;if(!this.hasStarted)this.target.style.transform="translateY(0px) translateX(0%)",this.page.tubeDisappear();else if(this.hasEnded)this.page.tubeDisappear(),this.target.style.transform=`translateY(${this.sectionEnd-this.sectionStart}px) translateX(${-a}px)`;else{this.page.tubeAppear();const c=t-this.sectionStart;this.target.style.transform=`translateY(${c}px) translateX(${Math.max(-a,l)}px)`}}resize(){const e=this.experience.lenis.animatedScroll,t=this.target.querySelector(".card").getBoundingClientRect();this.target.style.top=`${window.innerHeight*.5-t.height*.4}px`,this.target.style.left=`${window.innerWidth*.5-t.width*.5}px`,this.sectionStart=this.container.getBoundingClientRect().top+e,this.sectionEnd=this.sectionStart+this.container.getBoundingClientRect().height-window.innerHeight,this.hasStarted=e>this.sectionStart,this.hasEnded=e>this.sectionEnd;const i=this.container.getBoundingClientRect().top,n=this.container.getBoundingClientRect().height-window.innerHeight+this.target.querySelector(".card").getBoundingClientRect().width,s=this.target.querySelector(".card").getBoundingClientRect().width,a=this.target.offsetWidth-s,l=i*100/n/100*this.target.getBoundingClientRect().width;if(!this.hasStarted)this.target.style.transform="translateY(0px) translateX(0%)";else if(this.hasEnded)this.target.style.transform=`translateY(${this.sectionEnd-this.sectionStart}px) translateX(${-a}px)`;else{const c=e-this.sectionStart;this.target.style.transform=`translateY(${c}px) translateX(${Math.max(-a,l)}px)`}}}class ib{constructor(){this.experience=new ut,this.container=document.querySelector(".homeCards-container"),this.experience.router.main_data.data.cards.forEach((e,t)=>{const i=e.card_button||"TBD",n=`
                        <div class="card isRed">
                            <img src="${e.card_image.url}" class="" />
                            <div class="card-content">
                            <div class="tl-cross"></div>
                            <div class="tr-cross"></div>
                            <div class="bl-cross"></div>
                            <h1 class="card-title">${e.card_title[0].text}</h1>
                            <a href="projects/${e.card_article_link.uid}" class="cta card-button">${i}</a>
                            <div class="card-data">
                                <p>${e.card_infos[0].text}</p>
                                <div class="line"></div>
                            </div>
                            </div>
                        </div>
             `;this.container.insertAdjacentHTML("beforeend",n)})}}class nb{constructor(){this.experience=new ut,this.data=[this.experience.router.main_data.data.main_partner_logo1,this.experience.router.main_data.data.main_partner_logo2,this.experience.router.main_data.data.main_partner_logo3,this.experience.router.main_data.data.main_partner_logo4,this.experience.router.main_data.data.main_partner_logo5,this.experience.router.main_data.data.main_partner_logo6,this.experience.router.main_data.data.main_partner_logo7,this.experience.router.main_data.data.main_partner_logo8,this.experience.router.main_data.data.main_partner_logo9].filter(Boolean),this.container=document.querySelector(".home-banner-container"),this.cards=[],this.speed=.18,this.lastTime=null,this._bound_tick=this._tick.bind(this),this.offset=0,this.data.forEach(e=>{const t=document.createElement("div");t.className="partnerCard",t.style.cssText=`
                position: absolute;
                top: 0; left: 0;
                animation: none;
                display: flex;
                justify-content: center;
                align-items: center;
            `;const i=document.createElement("img");i.src=e.url,i.alt="",t.appendChild(i),this.container.appendChild(t),this.cards.push(t)}),this._visibilityHandler=()=>{document.visibilityState==="visible"&&(this.lastTime=null)},document.addEventListener("visibilitychange",this._visibilityHandler),requestAnimationFrame(()=>this._init())}_init(){if(!this.cards.length)return;const e=this.cards[0].offsetWidth,t=80;this.slot=e+t,this.cardW=e,this.totalStrip=this.slot*this.cards.length,this.offset=0,this._applyPositions(),requestAnimationFrame(this._bound_tick)}_applyPositions(){this.cards.forEach((e,t)=>{let i=t*this.slot-this.offset;i=(i%this.totalStrip+this.totalStrip)%this.totalStrip,e.style.transform=`translateX(${i}px)`})}_tick(e){if(this.lastTime===null){this.lastTime=e,requestAnimationFrame(this._bound_tick);return}const t=Math.min(e-this.lastTime,100);this.lastTime=e,this.offset+=this.speed*t,this.offset=this.offset%this.totalStrip,this._applyPositions(),requestAnimationFrame(this._bound_tick)}}function Ji(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Qd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ys={duration:.5,overwrite:!1,delay:0},cc,It,st,yi=1e8,Je=1/yi,Sl=Math.PI*2,sb=Sl/4,rb=0,ef=Math.sqrt,ab=Math.cos,ob=Math.sin,Pt=function(e){return typeof e=="string"},ft=function(e){return typeof e=="function"},rn=function(e){return typeof e=="number"},hc=function(e){return typeof e>"u"},Bi=function(e){return typeof e=="object"},jt=function(e){return e!==!1},uc=function(){return typeof window<"u"},Aa=function(e){return ft(e)||Pt(e)},tf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,Ml=/(?:-?\.?\d|\.)+/gi,nf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sf=/[+-]=-?[.\d]+/,rf=/[^,'"\[\]\s]+/gi,lb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,rt,Li,Tl,dc,ci={},Ha={},af,of=function(e){return(Ha=$s(e,ci))&&Qt},fc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Lr=function(e,t){return!t&&console.warn(e)},lf=function(e,t){return e&&(ci[e]=t)&&Ha&&(Ha[e]=t)||ci},Pr=function(){return 0},cb={suppressEvents:!0,isStart:!0,kill:!1},La={suppressEvents:!0,kill:!1},hb={suppressEvents:!0},pc={},Tn=[],El={},cf,si={},$o={},Lu=30,Pa=[],mc="",gc=function(e){var t=e[0],i,n;if(Bi(t)||ft(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Pa.length;n--&&!Pa[n].targetTest(t););i=Pa[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new If(e[n],i)))||e.splice(n,1);return e},Zn=function(e){return e._gsap||gc(vi(e))[0]._gsap},hf=function(e,t,i){return(i=e[t])&&ft(i)?e[t]():hc(i)&&e.getAttribute&&e.getAttribute(t)||i},Kt=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},Is=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},ub=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Va=function(){var e=Tn.length,t=Tn.slice(0),i,n;for(El={},Tn.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},_c=function(e){return!!(e._initted||e._startAt||e.add)},uf=function(e,t,i,n){Tn.length&&!It&&Va(),e.render(t,i,n||!!(It&&t<0&&_c(e))),Tn.length&&!It&&Va()},df=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(rf).length<2?t:Pt(e)?e.trim():e},ff=function(e){return e},hi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},db=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},$s=function(e,t){for(var i in t)e[i]=t[i];return e},Pu=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Bi(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Ga=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Sr=function(e){var t=e.parent||rt,i=e.keyframes?db(kt(e.keyframes)):hi;if(jt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},fb=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},pf=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},eo=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},Rn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Jn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},pb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},wl=function(e,t,i,n){return e._startAt&&(It?e._startAt.revert(La):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},mb=function r(e){return!e||e._ts&&r(e.parent)},Du=function(e){return e._repeat?js(e._tTime,e=e.duration()+e._rDelay)*e:0},js=function(e,t){var i=Math.floor(e=bt(e/t));return e&&i===e?i-1:i},Wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},to=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Je)||0))},io=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=bt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),to(e),i._dirty||Jn(i,e)),e},mf=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Wa(e.rawTime(),t),(!t._dur||Wr(0,t.totalDuration(),i)-t._tTime>Je)&&t.render(i,!0)),Jn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Je}},Ni=function(e,t,i,n){return t.parent&&Rn(t),t._start=bt((rn(i)?i:i||e!==rt?fi(e,i,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pf(e,t,"_first","_last",e._sort?"_start":0),Al(t)||(e._recent=t),n||mf(e,t),e._ts<0&&io(e,e._tTime),e},gf=function(e,t){return(ci.ScrollTrigger||fc("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},_f=function(e,t,i,n,s){if(vc(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!It&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cf!==ai.frame)return Tn.push(e),e._lazy=[s,n],1},gb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Al=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_b=function(e,t,i,n){var s=e.ratio,a=t<0||!t&&(!e._start&&gb(e)&&!(!e._initted&&Al(e))||(e._ts<0||e._dp._ts<0)&&!Al(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Wr(0,e._tDur,t),h=js(l,o),e._yoyo&&h&1&&(a=1-a),h!==js(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||It||n||e._zTime===Je||!t&&e._zTime){if(!e._initted&&_f(e,t,n,i,l))return;for(u=e._zTime,e._zTime=t||(i?Je:0),i||(i=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&wl(e,t,i,!0),e._onUpdate&&!i&&oi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&oi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Rn(e,1),!i&&!It&&(oi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yb=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Ks=function(e,t,i,n){var s=e._repeat,a=bt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:bt(a*(s+1)+e._rDelay*s):a,o>0&&!n&&io(e,e._tTime=e._tDur*o),e.parent&&to(e),i||Jn(e.parent,e),e},Iu=function(e){return e instanceof Wt?Jn(e):Ks(e,e._dur)},vb={_start:0,endTime:Pr,totalDuration:Pr},fi=function r(e,t,i){var n=e.labels,s=e._recent||vb,a=e.duration()>=yi?s.endTime(!1):e._dur,o,l,c;return Pt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(kt(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Mr=function(e,t,i){var n=rn(t[1]),s=(n?2:1)+(e<2?0:1),a=t[s],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=jt(l.vars.inherit)&&l.parent;a.immediateRender=jt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new xt(t[0],a,t[s+1])},Pn=function(e,t){return e||e===0?t(e):t},Wr=function(e,t,i){return i<e?e:i>t?t:i},Ft=function(e,t){return!Pt(e)||!(t=lb.exec(e))?"":t[1]},xb=function(e,t,i){return Pn(i,function(n){return Wr(e,t,n)})},Rl=[].slice,yf=function(e,t){return e&&Bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Bi(e[0]))&&!e.nodeType&&e!==Li},bb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return Pt(n)&&!t||yf(n,1)?(s=i).push.apply(s,vi(n)):i.push(n)})||i},vi=function(e,t,i){return st&&!t&&st.selector?st.selector(e):Pt(e)&&!i&&(Tl||!Zs())?Rl.call((t||dc).querySelectorAll(e),0):kt(e)?bb(e,i):yf(e)?Rl.call(e,0):e?[e]:[]},Cl=function(e){return e=vi(e)[0]||Lr("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return vi(t,i.querySelectorAll?i:i===e?Lr("Invalid scope")||dc.createElement("div"):e)}},vf=function(e){return e.sort(function(){return .5-Math.random()})},xf=function(e){if(ft(e))return e;var t=Bi(e)?e:{each:e},i=Qn(t.ease),n=t.from||0,s=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,h=n,u=n;return Pt(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(h=n[0],u=n[1]),function(d,f,_){var g=(_||t).length,m=a[g],p,v,y,x,S,w,M,R,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,yi])[1],!b){for(M=-yi;M<(M=_[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(m=a[g]=[],p=l?Math.min(b,g)*h-.5:n%b,v=b===yi?0:l?g*u/b-.5:n/b|0,M=0,R=yi,w=0;w<g;w++)y=w%b-p,x=v-(w/b|0),m[w]=S=c?Math.abs(c==="y"?x:y):ef(y*y+x*x),S>M&&(M=S),S<R&&(R=S);n==="random"&&vf(m),m.max=M-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(n==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ft(t.amount||t.each)||0,i=i&&g<0?Lf(i):i}return g=(m[d]-m.min)/m.max||0,bt(m.b+(i?i(g):g)*m.v)+m.u}},Ll=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=bt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(rn(i)?0:Ft(i))}},bf=function(e,t){var i=kt(e),n,s;return!i&&Bi(e)&&(n=i=e.radius||yi,e.values?(e=vi(e.values),(s=!rn(e[0]))&&(n*=n)):e=Ll(e.increment)),Pn(t,i?ft(e)?function(a){return s=e(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=yi,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-o,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!n||c<=n?e[h]:a,s||h===a||rn(a)?h:h+Ft(a)}:Ll(e))},Sf=function(e,t,i,n){return Pn(kt(e)?!t:i===!0?!!(i=0):!n,function(){return kt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Sb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,a){return a(s)},n)}},Mb=function(e,t){return function(i){return e(parseFloat(i))+(t||Ft(i))}},Tb=function(e,t,i){return Tf(e,t,0,1,i)},Mf=function(e,t,i){return Pn(i,function(n){return e[~~t(n)]})},Eb=function r(e,t,i){var n=t-e;return kt(e)?Mf(e,r(0,e.length),t):Pn(i,function(s){return(n+(s-e)%n)%n+e})},wb=function r(e,t,i){var n=t-e,s=n*2;return kt(e)?Mf(e,r(0,e.length-1),t):Pn(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>n?s-a:a)})},Dr=function(e){for(var t=0,i="",n,s,a,o;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),o=e.charAt(n+7)==="[",s=e.substr(n+7,a-n-7).match(o?rf:Ml),i+=e.substr(t,n-t)+Sf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},Tf=function(e,t,i,n,s){var a=t-e,o=n-i;return Pn(s,function(l){return i+((l-e)/a*o||0)})},Ab=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Pt(e),o={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},i=t}else n||(e=$s(kt(e)?[]:{},e));if(!h){for(l in t)yc.call(o,e,l,"get",t[l]);s=function(_){return Sc(_,o)||(a?e.p:e)}}}return Pn(i,s)},Nu=function(e,t,i){var n=e.labels,s=yi,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},oi=function(e,t,i){var n=e.vars,s=n[t],a=st,o=e._ctx,l,c,h;if(s)return l=n[t+"Params"],c=n.callbackScope||e,i&&Tn.length&&Va(),o&&(st=o),h=l?s.apply(c,l):s.call(c),st=a,h},pr=function(e){return Rn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!It),e.progress()<1&&oi(e,"onInterrupt"),e},Ls,Ef=[],wf=function(e){if(e)if(e=!e.name&&e.default||e,uc()||e.headless){var t=e.name,i=ft(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Pr,render:Sc,add:yc,kill:Gb,modifier:Vb,rawVars:0},a={targetTest:0,get:0,getSetter:bc,aliases:{},register:0};if(Zs(),e!==n){if(si[t])return;hi(n,hi(Ga(e,s),a)),$s(n.prototype,$s(s,Ga(e,a))),si[n.prop=t]=n,e.targetTest&&(Pa.push(n),pc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lf(t,n),e.register&&e.register(Qt,n,Zt)}else Ef.push(e)},Ze=255,mr={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},jo=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ze+.5|0},Af=function(e,t,i){var n=e?rn(e)?[e>>16,e>>8&Ze,e&Ze]:0:mr.black,s,a,o,l,c,h,u,d,f,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),mr[e])n=mr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&Ze,n&Ze,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&Ze,e&Ze]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(Ml),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=jo(l+1/3,s,a),n[1]=jo(l,s,a),n[2]=jo(l-1/3,s,a);else if(~e.indexOf("="))return n=e.match(nf),i&&n.length<4&&(n[3]=1),n}else n=e.match(Ml)||mr.transparent;n=n.map(Number)}return t&&!_&&(s=n[0]/Ze,a=n[1]/Ze,o=n[2]/Ze,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Rf=function(e){var t=[],i=[],n=-1;return e.split(En).forEach(function(s){var a=s.match(Cs)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},Ou=function(e,t,i){var n="",s=(e+n).match(En),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Af(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=Rf(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(En,"1").split(Cs),u=c.length-1;o<u;o++)n+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=e.split(En),u=c.length-1;o<u;o++)n+=c[o]+s[o];return n+c[u]},En=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in mr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Rb=/hsl[a]?\(/,Cf=function(e){var t=e.join(" "),i;if(En.lastIndex=0,En.test(t))return i=Rb.test(t),e[1]=Ou(e[1],i),e[0]=Ou(e[0],i,Rf(e[1])),!0},Ir,ai=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,a=s,o=[],l,c,h,u,d,f,_=function g(m){var p=r()-n,v=m===!0,y,x,S,w;if((p>e||p<0)&&(i+=p-t),n+=p,S=n-i,y=S-a,(y>0||v)&&(w=++u.frame,d=S-u.time*1e3,u.time=S=S/1e3,a+=y+(y>=s?4:s-y),x=1),v||(l=c(g)),x)for(f=0;f<o.length;f++)o[f](S,d,w,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){af&&(!Tl&&uc()&&(Li=Tl=window,dc=Li.document||{},ci.gsap=Qt,(Li.gsapVersions||(Li.gsapVersions=[])).push(Qt.version),of(Ha||Li.GreenSockGlobals||!Li.gsap&&Li||{}),Ef.forEach(wf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Ir=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ir=0,c=Pr},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,v){var y=p?function(x,S,w,M){m(x,S,w,M),u.remove(y)}:m;return u.remove(m),o[v?"unshift":"push"](y),Zs(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),Zs=function(){return!Ir&&ai.wake()},qe={},Cb=/^[\d.\-M][\d.\-,\s]/,Lb=/["']/g,Pb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(Lb,"").trim():+c,n=l.substr(o+1).trim();return t},Db=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Ib=function(e){var t=(e+"").split("("),i=qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Pb(t[1])]:Db(e).split(",").map(df)):qe._CE&&Cb.test(e)?qe._CE("",e):i},Lf=function(e){return function(t){return 1-e(1-t)}},Pf=function r(e,t){for(var i=e._first,n;i;)i instanceof Wt?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Qn=function(e,t){return e&&(ft(e)?e:qe[e]||Ib(e))||t},as=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},a;return Kt(e,function(o){qe[o]=ci[o]=s,qe[a=o.toLowerCase()]=i;for(var l in s)qe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[o+"."+l]=s[l]}),s},Df=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ko=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Sl*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*ob((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Df(o);return s=Sl/s,l.config=function(c,h){return r(e,c,h)},l},Zo=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Df(i);return n.config=function(s){return r(e,s)},n};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;as(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;as("Elastic",Ko("in"),Ko("out"),Ko());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(o){return o<t?r*o*o:o<i?r*Math.pow(o-1.5/e,2)+.75:o<n?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};as("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);as("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});as("Circ",function(r){return-(ef(1-r*r)-1)});as("Sine",function(r){return r===1?1:-ab(r*sb)+1});as("Back",Zo("in"),Zo("out"),Zo());qe.SteppedEase=qe.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,a=1-Je;return function(o){return((n*Wr(0,a,o)|0)+s)*i}}};Ys.ease=qe["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return mc+=r+","+r+"Params,"});var If=function(e,t){this.id=rb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hf,this.set=t?t.getSetter:bc},Nr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ks(this,+t.duration,1,1),this.data=t.data,st&&(this._ctx=st,st.data.push(this)),Ir||ai.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ks(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(io(this,i),!s._dp||s.parent||mf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ni(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Je||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),uf(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Du(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Du(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?js(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-Je?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Je?0:this._rts,this.totalTime(Wr(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),to(this),pb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Je&&(this._tTime-=Je)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Ni(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(jt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=hb);var n=It;return It=i,_c(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),It=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Iu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Iu(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(fi(this,i),jt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,jt(n)),this._dur||(this._zTime=-Je),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Je:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Je,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Je)},e.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(s){var a=ft(i)?i:ff,o=function(){var c=n.then;n.then=null,ft(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=c),s(a),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){pr(this)},r}();hi(Nr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Je,_prom:0,_ps:!1,_rts:1});var Wt=function(r){Qd(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=jt(i.sortChildren),rt&&Ni(i.parent||rt,Ji(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&gf(Ji(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,a){return Mr(0,arguments,this),this},t.from=function(n,s,a){return Mr(1,arguments,this),this},t.fromTo=function(n,s,a,o){return Mr(2,arguments,this),this},t.set=function(n,s,a){return s.duration=0,s.parent=this,Sr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xt(n,s,fi(this,a),1),this},t.call=function(n,s,a){return Ni(this,xt.delayedCall(0,n,s),a)},t.staggerTo=function(n,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new xt(n,a,fi(this,l)),this},t.staggerFrom=function(n,s,a,o,l,c,h){return a.runBackwards=1,Sr(a).immediateRender=jt(a.immediateRender),this.staggerTo(n,s,a,o,l,c,h)},t.staggerFromTo=function(n,s,a,o,l,c,h,u){return o.startAt=a,Sr(o).immediateRender=jt(o.immediateRender),this.staggerTo(n,s,o,l,c,h,u)},t.render=function(n,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:bt(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,_,g,m,p,v,y,x,S,w,M;if(this!==rt&&h>l&&n>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,n+=this._time-o),d=h,x=this._start,y=this._ts,p=!y,u&&(c||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,a);if(d=bt(h%m),h===l?(g=this._repeat,d=c):(S=bt(h/m),g=~~S,g&&g===S&&(d=c,g--),d>c&&(d=c)),S=js(this._tTime,m),!o&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),w&&g&1&&(d=c-d,M=1),g!==S&&!this._lock){var R=w&&S&1,b=R===(w&&g&1);if(g<S&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(M?0:bt(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Pf(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=yb(this,bt(o),bt(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&!s&&!S&&(oi(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-Je);break}}f=_}else{f=this._last;for(var E=n<0?n:d;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,s,a||It&&_c(f)),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=E?-Je:Je);break}}f=_}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-Je)._zTime=d>=o?1:-1,this._ts))return this._start=x,to(this),this.render(n,s,a);this._onUpdate&&!s&&oi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Rn(this,1),!s&&!(n<0&&!o)&&(h||o||!l)&&(oi(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var a=this;if(rn(s)||(s=fi(this,s,n)),!(n instanceof Nr)){if(kt(n))return n.forEach(function(o){return a.add(o,s)}),this;if(Pt(n))return this.addLabel(n,s);if(ft(n))n=xt.delayedCall(0,n);else return this}return this!==n?Ni(this,n,s):this},t.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-yi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof xt?s&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},t.remove=function(n){return Pt(n)?this.removeLabel(n):ft(n)?this.killTweensOf(n):(n.parent===this&&eo(this,n),n===this._recent&&(this._recent=this._last),Jn(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(ai.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=fi(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,a){var o=xt.delayedCall(0,s||Pr,a);return o.data="isPause",this._hasPause=1,Ni(this,o,fi(this,n))},t.removePause=function(n){var s=this._first;for(n=fi(this,n);s;)s._start===n&&s.data==="isPause"&&Rn(s),s=s._next},t.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)yn!==o[l]&&o[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var a=[],o=vi(n),l=this._first,c=rn(s),h;l;)l instanceof xt?ub(l._targets,o)&&(c?(!yn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(n,s){s=s||{};var a=this,o=fi(a,n),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=xt.to(a,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Je,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Ks(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(n,s,a){return this.tweenTo(s,hi({startAt:{time:fi(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Nu(this,fi(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Nu(this,fi(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Je)},t.shiftChildren=function(n,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=n);return Jn(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Jn(this)},t.totalDuration=function(n){var s=0,a=this,o=a._last,l=yi,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ni(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ks(a,a===rt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(rt._ts&&(uf(rt,Wa(n,rt)),cf=ai.frame),ai.frame>=Lu){Lu+=li.autoSleep||120;var s=rt._first;if((!s||!s._ts)&&li.autoSleep&&ai._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ai.sleep()}}},e}(Nr);hi(Wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Nb=function(e,t,i,n,s,a,o){var l=new Zt(this._pt,e,t,0,1,Bf,null,s),c=0,h=0,u,d,f,_,g,m,p,v;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=Dr(n)),a&&(v=[i,n],a(v,e,t),i=v[0],n=v[1]),d=i.match(Yo)||[];u=Yo.exec(n);)_=u[0],g=n.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Is(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Yo.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(sf.test(n)||p)&&(l.e=0),this._pt=l,l},yc=function(e,t,i,n,s,a,o,l,c,h){ft(n)&&(n=n(s||0,e,a));var u=e[t],d=i!=="get"?i:ft(u)?c?e[t.indexOf("set")||!ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=ft(u)?c?Bb:Ff:xc,_;if(Pt(n)&&(~n.indexOf("random(")&&(n=Dr(n)),n.charAt(1)==="="&&(_=Is(d,n)+(Ft(d)||0),(_||_===0)&&(n=_))),!h||d!==n||Pl)return!isNaN(d*n)&&n!==""?(_=new Zt(this._pt,e,t,+d||0,n-(d||0),typeof u=="boolean"?Hb:kf,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!u&&!(t in e)&&fc(t,n),Nb.call(this,e,t,d,n,f,l||li.stringFilter,c))},Ob=function(e,t,i,n,s){if(ft(e)&&(e=Tr(e,s,t,i,n)),!Bi(e)||e.style&&e.nodeType||kt(e)||tf(e))return Pt(e)?Tr(e,s,t,i,n):e;var a={},o;for(o in e)a[o]=Tr(e[o],s,t,i,n);return a},Nf=function(e,t,i,n,s,a){var o,l,c,h;if(si[e]&&(o=new si[e]).init(s,o.rawVars?t[e]:Ob(t[e],n,s,a,i),i,n,a)!==!1&&(i._pt=l=new Zt(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ls))for(c=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},yn,Pl,vc=function r(e,t,i){var n=e.vars,s=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!cc,x=e.timeline,S,w,M,R,b,E,O,k,X,L,U,B,G;if(x&&(!d||!s)&&(s="none"),e._ease=Qn(s,Ys.ease),e._yEase=u?Lf(Qn(u===!0?s:u,Ys.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!x&&!!n.runBackwards,!x||d&&!n.stagger){if(k=m[0]?Zn(m[0]).harness:0,B=k&&n[k.prop],S=Ga(n,pc),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?La:cb),g._lazy=0),a){if(Rn(e._startAt=xt.set(m,hi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&jt(l),startAt:null,delay:0,onUpdate:c&&function(){return oi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It||!o&&!f)&&e._startAt.revert(La),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),M=hi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&jt(l),immediateRender:o,stagger:0,parent:p},S),B&&(M[k.prop]=B),Rn(e._startAt=xt.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It?e._startAt.revert(La):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Je,Je);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&jt(l)||l&&!_,w=0;w<m.length;w++){if(b=m[w],O=b._gsap||gc(m)[w]._gsap,e._ptLookup[w]=L={},El[O.id]&&Tn.length&&Va(),U=v===m?w:v.indexOf(b),k&&(X=new k).init(b,B||S,e,U,v)!==!1&&(e._pt=R=new Zt(e._pt,b,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(J){L[J]=R}),X.priority&&(E=1)),!k||B)for(M in S)si[M]&&(X=Nf(M,S,e,U,b,v))?X.priority&&(E=1):L[M]=R=yc.call(e,b,M,"get",S[M],U,v,0,n.stringFilter);e._op&&e._op[w]&&e.kill(b,e._op[w]),y&&e._pt&&(yn=e,rt.killTweensOf(b,L,e.globalTime(t)),G=!e.parent,yn=0),e._pt&&l&&(El[O.id]=1)}E&&zf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&x.render(yi,!0,!0)},Ub=function(e,t,i,n,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Pl=1,e.vars[t]="+=0",vc(e,o),Pl=0,l?Lr(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(n||n===0)&&!s?n:h.s+(n||0)+a*h.c,h.c=i-h.s,u.e&&(u.e=mt(i)+Ft(u.e)),u.b&&(u.b=h.s+Ft(u.b))},Fb=function(e,t){var i=e[0]?Zn(e[0]).harness:0,n=i&&i.aliases,s,a,o,l;if(!n)return t;s=$s({},t);for(a in n)if(a in s)for(l=n[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},kb=function(e,t,i,n){var s=t.ease||n||"power1.inOut",a,o;if(kt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Tr=function(e,t,i,n,s){return ft(e)?e.call(t,i,n,s):Pt(e)&&~e.indexOf("random(")?Dr(e):e},Of=mc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Uf={};Kt(Of+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Uf[r]=1});var xt=function(r){Qd(e,r);function e(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:Sr(n))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=n.parent||rt,y=(kt(i)||tf(i)?rn(i[0]):"length"in n)?[i]:vi(i),x,S,w,M,R,b,E,O;if(o._targets=y.length?gc(y):Lr("GSAP target "+i+" not found. https://gsap.com",!li.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||Aa(c)||Aa(h)){if(n=o.vars,x=o.timeline=new Wt({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:y}),x.kill(),x.parent=x._dp=Ji(o),x._start=0,d||Aa(c)||Aa(h)){if(M=y.length,E=d&&xf(d),Bi(d))for(R in d)~Of.indexOf(R)&&(O||(O={}),O[R]=d[R]);for(S=0;S<M;S++)w=Ga(n,Uf),w.stagger=0,p&&(w.yoyoEase=p),O&&$s(w,O),b=y[S],w.duration=+Tr(c,Ji(o),S,b,y),w.delay=(+Tr(h,Ji(o),S,b,y)||0)-o._delay,!d&&M===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),x.to(b,w,E?E(S,b,y):0),x._ease=qe.none;x.duration()?c=h=0:o.timeline=0}else if(_){Sr(hi(x.vars.defaults,{ease:"none"})),x._ease=Qn(_.ease||n.ease||"none");var k=0,X,L,U;if(kt(_))_.forEach(function(B){return x.to(y,B,">")}),x.duration();else{w={};for(R in _)R==="ease"||R==="easeEach"||kb(R,_[R],w,_.easeEach);for(R in w)for(X=w[R].sort(function(B,G){return B.t-G.t}),k=0,S=0;S<X.length;S++)L=X[S],U={ease:L.e,duration:(L.t-(S?X[S-1].t:0))/100*c},U[R]=L.v,x.to(y,U,k),k+=U.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!cc&&(yn=Ji(o),rt.killTweensOf(y),yn=0),Ni(v,Ji(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!c&&!_&&o._start===bt(v._time)&&jt(u)&&mb(Ji(o))&&v.data!=="nested")&&(o._tTime=-Je,o.render(Math.max(0,-h)||0)),m&&gf(Ji(o),m),o}var t=e.prototype;return t.render=function(n,s,a){var o=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-Je&&!h?l:n<Je?0:n,d,f,_,g,m,p,v,y,x;if(!c)_b(this,n,s,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,s,a);if(d=bt(u%g),u===l?(_=this._repeat,d=c):(m=bt(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,d=c-d),m=js(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(y&&this._yEase&&Pf(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(bt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(_f(this,h?n:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(n,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/c),this._from&&(this.ratio=v=1-v),!o&&u&&!s&&!m&&(oi(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;y&&y.render(n<0?n:y._dur*y._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&wl(this,n,s,a),oi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&oi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&wl(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Rn(this,1),!s&&!(h&&!o)&&(u||o||p)&&(oi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,a,o,l){Ir||ai.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||vc(this,c),h=this._ease(c/this._dur),Ub(this,n,s,a,o,h,c,l)?this.resetTo(n,s,a,o,1):(io(this,0),this.parent||pf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!It),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,yn&&yn.vars.overwrite!==!0)._first||pr(this),this.parent&&a!==this.timeline.totalDuration()&&Ks(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?vi(n):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&fb(o,l))return s==="all"&&(this._pt=0),pr(this);for(u=this._op=this._op||[],s!=="all"&&(Pt(s)&&(g={},Kt(s,function(v){return g[v]=1}),s=g),s=Fb(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&eo(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&pr(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return Mr(1,arguments)},e.delayedCall=function(n,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,s,a){return Mr(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,a){return rt.killTweensOf(n,s,a)},e}(Nr);hi(xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(r){xt[r]=function(){var e=new Wt,t=Rl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var xc=function(e,t,i){return e[t]=i},Ff=function(e,t,i){return e[t](i)},Bb=function(e,t,i,n){return e[t](n.fp,i)},zb=function(e,t,i){return e.setAttribute(t,i)},bc=function(e,t){return ft(e[t])?Ff:hc(e[t])&&e.setAttribute?zb:xc},kf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Hb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bf=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Sc=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Vb=function(e,t,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(e,t,i),s=a},Gb=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?eo(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Wb=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},zf=function(e){for(var t=e._pt,i,n,s,a;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=s},Zt=function(){function r(t,i,n,s,a,o,l,c,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||kf,this.d=l||this,this.set=c||xc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=Wb,this.m=i,this.mt=s,this.tween=n},r}();Kt(mc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return pc[r]=1});ci.TweenMax=ci.TweenLite=xt;ci.TimelineLite=ci.TimelineMax=Wt;rt=new Wt({sortChildren:!1,defaults:Ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});li.stringFilter=Cf;var es=[],Da={},Xb=[],Uu=0,qb=0,Jo=function(e){return(Da[e]||Xb).map(function(t){return t()})},Dl=function(){var e=Date.now(),t=[];e-Uu>2&&(Jo("matchMediaInit"),es.forEach(function(i){var n=i.queries,s=i.conditions,a,o,l,c;for(o in n)a=Li.matchMedia(n[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Jo("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Uu=e,Jo("matchMedia"))},Hf=function(){function r(t,i){this.selector=i&&Cl(i),this.data=[],this._r=[],this.isReverted=!1,this.id=qb++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){ft(i)&&(s=n,n=i,i=ft);var a=this,o=function(){var c=st,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Cl(s)),st=a,u=n.apply(a,arguments),ft(u)&&a._r.push(u),st=c,a.selector=h,a.isReverted=!1,u};return a.last=o,i===ft?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=st;st=null,i(this),st=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof xt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Wt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof xt)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=es.length;a--;)es[a].id===this.id&&es.splice(a,1)},e.revert=function(i){this.kill(i||{})},r}(),Yb=function(){function r(t){this.contexts=[],this.scope=t,st&&st.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){Bi(i)||(i={matches:i});var a=new Hf(0,s||this.scope),o=a.conditions={},l,c,h;st&&!a.selector&&(a.selector=st.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?h=1:(l=Li.matchMedia(i[c]),l&&(es.indexOf(a)<0&&es.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Dl):l.addEventListener("change",Dl)));return h&&n(a,function(u){return a.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),Xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return wf(n)})},timeline:function(e){return new Wt(e)},getTweensOf:function(e,t){return rt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Pt(e)&&(e=vi(e)[0]);var s=Zn(e||{}).get,a=i?ff:df;return i==="native"&&(i=""),e&&(t?a((si[t]&&si[t].get||s)(e,t,i,n)):function(o,l,c){return a((si[o]&&si[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=vi(e),e.length>1){var n=e.map(function(h){return Qt.quickSetter(h,t,i)}),s=n.length;return function(h){for(var u=s;u--;)n[u](h)}}e=e[0]||{};var a=si[t],o=Zn(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;Ls._pt=0,u.init(e,i?h+i:h,Ls,0,[e]),u.render(1,u),Ls._pt&&Sc(1,Ls)}:o.set(e,l);return a?c:function(h){return c(e,l,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,s=Qt.to(e,hi((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qn(e.ease,Ys.ease)),Pu(Ys,e||{})},config:function(e){return Pu(li,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!si[o]&&!ci[o]&&Lr(t+" effect requires "+o+" plugin.")}),$o[t]=function(o,l,c){return i(vi(o),hi(l||{},s),c)},a&&(Wt.prototype[t]=function(o,l,c){return this.add($o[t](o,Bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=Qn(t)},parseEase:function(e,t){return arguments.length?Qn(e,t):qe},getById:function(e){return rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Wt(e),n,s;for(i.smoothChildTiming=jt(e.smoothChildTiming),rt.remove(i),i._dp=0,i._time=i._tTime=rt._time,n=rt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof xt&&n.vars.onComplete===n._targets[0]))&&Ni(i,n,n._start-n._delay),n=s;return Ni(rt,i,0),i},context:function(e,t){return e?new Hf(e,t):st},matchMedia:function(e){return new Yb(e)},matchMediaRefresh:function(){return es.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Dl()},addEventListener:function(e,t){var i=Da[e]||(Da[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Da[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Eb,wrapYoyo:wb,distribute:xf,random:Sf,snap:bf,normalize:Tb,getUnit:Ft,clamp:xb,splitColor:Af,toArray:vi,selector:Cl,mapRange:Tf,pipe:Sb,unitize:Mb,interpolate:Ab,shuffle:vf},install:of,effects:$o,ticker:ai,updateRoot:Wt.updateRoot,plugins:si,globalTimeline:rt,core:{PropTween:Zt,globals:lf,Tween:xt,Timeline:Wt,Animation:Nr,getCache:Zn,_removeLinkedListItem:eo,reverting:function(){return It},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return cc=e}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xa[r]=xt[r]});ai.add(Wt.updateRoot);Ls=Xa.to({},{duration:0});var $b=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},jb=function(e,t){var i=e._targets,n,s,a;for(n in t)for(s=i.length;s--;)a=e._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=$b(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[s],n))},Qo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,s,a){a._onInit=function(o){var l,c;if(Pt(s)&&(l={},Kt(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}jb(o,s)}}}},Qt=Xa.registerPlugin({name:"attr",init:function(e,t,i,n,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)It?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Qo("roundProps",Ll),Qo("modifiers"),Qo("snap",bf))||Xa;xt.version=Wt.version=Qt.version="3.13.0";af=1;uc()&&Zs();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fu,vn,Ns,Mc,Yn,ku,Tc,Kb=function(){return typeof window<"u"},an={},Vn=180/Math.PI,Os=Math.PI/180,ws=Math.atan2,Bu=1e8,Ec=/([A-Z])/g,Zb=/(left|right|width|margin|padding|x)/i,Jb=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Il=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Qb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},tS=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Vf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},iS=function(e,t,i){return e.style[t]=i},nS=function(e,t,i){return e.style.setProperty(t,i)},sS=function(e,t,i){return e._gsap[t]=i},rS=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},aS=function(e,t,i,n,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},oS=function(e,t,i,n,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},ct="transform",Jt=ct+"Origin",lS=function r(e,t){var i=this,n=this.target,s=n.style,a=n._gsap;if(e in an&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Qi(n,o)}):this.tfm[e]=a.x?a[e]:Qi(n,e),e===Jt&&(this.tfm.zOrigin=a.zOrigin);else return Oi.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(ct)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Jt,t,"")),e=ct}(s||t)&&this.props.push(e,t,s[e])},Wf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},cS=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ec,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Tc(),(!s||!s.isStart)&&!i[ct]&&(Wf(i),n.zOrigin&&i[Jt]&&(i[Jt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Xf=function(e,t){var i={target:e,props:[],revert:cS,save:lS};return e._gsap||Qt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},qf,Nl=function(e,t){var i=vn.createElementNS?vn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vn.createElement(e);return i&&i.style?i:vn.createElement(e)},xi=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Ec,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,Js(t)||t,1)||""},zu="O,Moz,ms,Ms,Webkit".split(","),Js=function(e,t,i){var n=t||Yn,s=n.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(zu[a]+e in s););return a<0?null:(a===3?"ms":a>=0?zu[a]:"")+e},Ol=function(){Kb()&&window.document&&(Fu=window,vn=Fu.document,Ns=vn.documentElement,Yn=Nl("div")||{style:{}},Nl("div"),ct=Js(ct),Jt=ct+"Origin",Yn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qf=!!Js("perspective"),Tc=Qt.core.reverting,Mc=1)},Hu=function(e){var t=e.ownerSVGElement,i=Nl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),s;n.style.display="block",i.appendChild(n),Ns.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),Ns.removeChild(i),s},Vu=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Yf=function(e){var t,i;try{t=e.getBBox()}catch{t=Hu(e),i=1}return t&&(t.width||t.height)||i||(t=Hu(e)),t&&!t.width&&!t.x&&!t.y?{x:+Vu(e,["x","cx","x1"])||0,y:+Vu(e,["y","cy","y1"])||0,width:0,height:0}:t},$f=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Yf(e))},ss=function(e,t){if(t){var i=e.style,n;t in an&&t!==Jt&&(t=ct),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Ec,"-$1").toLowerCase())):i.removeAttribute(t)}},xn=function(e,t,i,n,s,a){var o=new Zt(e._pt,t,i,0,1,a?Gf:Vf);return e._pt=o,o.b=n,o.e=s,e._props.push(i),o},Gu={deg:1,rad:1,turn:1},hS={grid:1,flex:1},Cn=function r(e,t,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Yn.style,l=Zb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",_,g,m,p;if(n===a||!s||Gu[n]||Gu[a])return s;if(a!=="px"&&!d&&(s=r(e,t,i,"px")),p=e.getCTM&&$f(e),(f||a==="%")&&(an[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],mt(f?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(d?a:n),g=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===vn||!g.appendChild)&&(g=vn.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ai.time&&!m.uncache)return mt(s/m.width*u);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+n,_=e[h],v?e.style[t]=v:ss(e,t)}else(f||a==="%")&&!hS[xi(g,"display")]&&(o.position=xi(e,"position")),g===e&&(o.position="static"),g.appendChild(Yn),_=Yn[h],g.removeChild(Yn),o.position="absolute";return l&&f&&(m=Zn(g),m.time=ai.time,m.width=g[h]),mt(d?_*s/u:_&&s?u/_*s:0)},Qi=function(e,t,i,n){var s;return Mc||Ol(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),an[t]&&t!=="transform"?(s=Ur(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ya(xi(e,Jt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=qa[t]&&qa[t](e,t,i)||xi(e,t)||hf(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Cn(e,t,s,i)+i:s},uS=function(e,t,i,n){if(!i||i==="none"){var s=Js(t,e,1),a=s&&xi(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=xi(e,"borderTopColor"))}var o=new Zt(this._pt,e.style,t,0,1,Bf),l=0,c=0,h,u,d,f,_,g,m,p,v,y,x,S;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=xi(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=e.style[t],e.style[t]=n,n=xi(e,t)||n,g?e.style[t]=g:ss(e,t)),h=[i,n],Cf(h),i=h[0],n=h[1],d=i.match(Cs)||[],S=n.match(Cs)||[],S.length){for(;u=Cs.exec(n);)m=u[0],v=n.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=Is(f,m)+x),p=parseFloat(m),y=m.substr((p+"").length),l=Cs.lastIndex-y.length,y||(y=y||li.units[t]||x,l===n.length&&(n+=y,o.e+=y)),x!==y&&(f=Cn(e,t,g,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Gf:Vf;return sf.test(n)&&(o.e=0),this._pt=o,o},Wu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dS=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Wu[i]||i,t[1]=Wu[n]||n,t.join(" ")},fS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],an[o]&&(l=1,o=o==="transformOrigin"?Jt:ct),ss(i,o);l&&(ss(i,ct),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ur(i,1),a.uncache=1,Wf(n)))}},qa={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var a=e._pt=new Zt(e._pt,t,i,0,0,fS);return a.u=n,a.pr=-10,a.tween=s,e._props.push(i),1}}},Or=[1,0,0,1,0,0],jf={},Kf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xu=function(e){var t=xi(e,ct);return Kf(t)?Or:t.substr(7).match(nf).map(mt)},wc=function(e,t){var i=e._gsap||Zn(e),n=e.style,s=Xu(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Or:s):(s===Or&&!e.offsetParent&&e!==Ns&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ns.appendChild(e)),s=Xu(e),l?n.display=l:ss(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ns.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ul=function(e,t,i,n,s,a){var o=e._gsap,l=s||wc(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],y=t.split(" "),x=parseFloat(y[0])||0,S=parseFloat(y[1])||0,w,M,R,b;i?l!==Or&&(M=f*m-_*g)&&(R=x*(m/M)+S*(-g/M)+(g*v-m*p)/M,b=x*(-_/M)+S*(f/M)-(f*v-_*p)/M,x=R,S=b):(w=Yf(e),x=w.x+(~y[0].indexOf("%")?x/100*w.width:x),S=w.y+(~(y[1]||y[0]).indexOf("%")?S/100*w.height:S)),n||n!==!1&&o.smooth?(p=x-c,v=S-h,o.xOffset=u+(p*f+v*g)-p,o.yOffset=d+(p*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=S,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[Jt]="0px 0px",a&&(xn(a,o,"xOrigin",c,x),xn(a,o,"yOrigin",h,S),xn(a,o,"xOffset",u,o.xOffset),xn(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},Ur=function(e,t){var i=e._gsap||new If(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=xi(e,Jt)||"0",h,u,d,f,_,g,m,p,v,y,x,S,w,M,R,b,E,O,k,X,L,U,B,G,J,K,j,N,z,re,oe,ue;return h=u=d=g=m=p=v=y=x=0,f=_=1,i.svg=!!(e.getCTM&&$f(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ct]!=="none"?l[ct]:"")),n.scale=n.rotate=n.translate="none"),M=wc(e,i.svg),i.svg&&(i.uncache?(J=e.getBBox(),c=i.xOrigin-J.x+"px "+(i.yOrigin-J.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Ul(e,G||c,!!G||i.originIsAbsolute,i.smooth!==!1,M)),S=i.xOrigin||0,w=i.yOrigin||0,M!==Or&&(O=M[0],k=M[1],X=M[2],L=M[3],h=U=M[4],u=B=M[5],M.length===6?(f=Math.sqrt(O*O+k*k),_=Math.sqrt(L*L+X*X),g=O||k?ws(k,O)*Vn:0,v=X||L?ws(X,L)*Vn+g:0,v&&(_*=Math.abs(Math.cos(v*Os))),i.svg&&(h-=S-(S*O+w*X),u-=w-(S*k+w*L))):(ue=M[6],re=M[7],j=M[8],N=M[9],z=M[10],oe=M[11],h=M[12],u=M[13],d=M[14],R=ws(ue,z),m=R*Vn,R&&(b=Math.cos(-R),E=Math.sin(-R),G=U*b+j*E,J=B*b+N*E,K=ue*b+z*E,j=U*-E+j*b,N=B*-E+N*b,z=ue*-E+z*b,oe=re*-E+oe*b,U=G,B=J,ue=K),R=ws(-X,z),p=R*Vn,R&&(b=Math.cos(-R),E=Math.sin(-R),G=O*b-j*E,J=k*b-N*E,K=X*b-z*E,oe=L*E+oe*b,O=G,k=J,X=K),R=ws(k,O),g=R*Vn,R&&(b=Math.cos(R),E=Math.sin(R),G=O*b+k*E,J=U*b+B*E,k=k*b-O*E,B=B*b-U*E,O=G,U=J),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=mt(Math.sqrt(O*O+k*k+X*X)),_=mt(Math.sqrt(B*B+ue*ue)),R=ws(U,B),v=Math.abs(R)>2e-4?R*Vn:0,x=oe?1/(oe<0?-oe:oe):0),i.svg&&(G=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Kf(xi(e,ct)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=mt(f),i.scaleY=mt(_),i.rotation=mt(g)+o,i.rotationX=mt(m)+o,i.rotationY=mt(p)+o,i.skewX=v+o,i.skewY=y+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Jt]=Ya(c)),i.xOffset=i.yOffset=0,i.force3D=li.force3D,i.renderTransform=i.svg?mS:qf?Zf:pS,i.uncache=0,i},Ya=function(e){return(e=e.split(" "))[0]+" "+e[1]},el=function(e,t,i){var n=Ft(t);return mt(parseFloat(t)+parseFloat(Cn(e,"x",i+"px",n)))+n},pS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Zf(e,t)},kn="0deg",ur="0px",Bn=") ",Zf=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,v=i.target,y=i.zOrigin,x="",S=p==="auto"&&e&&e!==1||p===!0;if(y&&(u!==kn||h!==kn)){var w=parseFloat(h)*Os,M=Math.sin(w),R=Math.cos(w),b;w=parseFloat(u)*Os,b=Math.cos(w),a=el(v,a,M*b*-y),o=el(v,o,-Math.sin(w)*-y),l=el(v,l,R*b*-y+y)}m!==ur&&(x+="perspective("+m+Bn),(n||s)&&(x+="translate("+n+"%, "+s+"%) "),(S||a!==ur||o!==ur||l!==ur)&&(x+=l!==ur||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Bn),c!==kn&&(x+="rotate("+c+Bn),h!==kn&&(x+="rotateY("+h+Bn),u!==kn&&(x+="rotateX("+u+Bn),(d!==kn||f!==kn)&&(x+="skew("+d+", "+f+Bn),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Bn),v.style[ct]=x||"translate(0, 0)"},mS=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,v=i.forceCSS,y=parseFloat(a),x=parseFloat(o),S,w,M,R,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Os,c*=Os,S=Math.cos(l)*u,w=Math.sin(l)*u,M=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=Os,b=Math.tan(c-h),b=Math.sqrt(1+b*b),M*=b,R*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),S*=b,w*=b)),S=mt(S),w=mt(w),M=mt(M),R=mt(R)):(S=u,R=d,w=M=0),(y&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=Cn(f,"x",a,"px"),x=Cn(f,"y",o,"px")),(_||g||m||p)&&(y=mt(y+_-(_*S+g*M)+m),x=mt(x+g-(_*w+g*R)+p)),(n||s)&&(b=f.getBBox(),y=mt(y+n/100*b.width),x=mt(x+s/100*b.height)),b="matrix("+S+","+w+","+M+","+R+","+y+","+x+")",f.setAttribute("transform",b),v&&(f.style[ct]=b)},gS=function(e,t,i,n,s){var a=360,o=Pt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Vn:1),c=l-n,h=n+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Bu)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Bu)%a-~~(c/a)*a)),e._pt=d=new Zt(e._pt,t,i,n,c,Qb),d.e=h,d.u="deg",e._props.push(i),d},qu=function(e,t){for(var i in t)e[i]=t[i];return e},_S=function(e,t,i){var n=qu({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,h,u,d,f,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[ct]=t,o=Ur(i,1),ss(i,ct),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ct],a[ct]=t,o=Ur(i,1),a[ct]=c);for(l in an)c=n[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Ft(c),_=Ft(h),u=f!==_?Cn(i,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new Zt(e._pt,o,l,u,d-u,Il),e._pt.u=_||0,e._props.push(l));qu(o,n)};Kt("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",a=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(o){return e<2?r+o:"border"+o+r});qa[e>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return Qi(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var Jf={name:"css",register:Ol,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var a=this._props,o=e.style,l=i.vars.startAt,c,h,u,d,f,_,g,m,p,v,y,x,S,w,M,R;Mc||Ol(),this.styles=this.styles||Xf(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(h=t[g],!(si[g]&&Nf(g,t,i,n,e,s)))){if(f=typeof h,_=qa[g],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Dr(h)),_)_(this,e,g,h,i)&&(M=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",En.lastIndex=0,En.test(c)||(m=Ft(c),p=Ft(h)),p?m!==p&&(c=Cn(e,g,c,p)+p):m&&(h+=m),this.add(o,"setProperty",c,h,n,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,s):l[g],Pt(c)&&~c.indexOf("random(")&&(c=Dr(c)),Ft(c+"")||c==="auto"||(c+=li.units[g]||Ft(Qi(e,g))||""),(c+"").charAt(1)==="="&&(c=Qi(e,g))):c=Qi(e,g),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in Oi&&(g==="autoAlpha"&&(d===1&&Qi(e,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),xn(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Oi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in an,y){if(this.styles.save(g),f==="string"&&h.substring(0,6)==="var(--"&&(h=xi(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(S=e._gsap,S.renderTransform&&!t.parseTransform||Ur(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new Zt(this._pt,o,ct,0,1,S.renderTransform,S,0,-1),x.dep=1),g==="scale")this._pt=new Zt(this._pt,S,"scaleY",S.scaleY,(v?Is(S.scaleY,v+u):u)-S.scaleY||0,Il),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Jt,0,o[Jt]),h=dS(h),S.svg?Ul(e,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==S.zOrigin&&xn(this,S,"zOrigin",S.zOrigin,p),xn(this,o,g,Ya(c),Ya(h)));continue}else if(g==="svgOrigin"){Ul(e,h,1,w,0,this);continue}else if(g in jf){gS(this,S,g,d,v?Is(d,v+h):h);continue}else if(g==="smoothOrigin"){xn(this,S,"smooth",S.smooth,h);continue}else if(g==="force3D"){S[g]=h;continue}else if(g==="transform"){_S(this,h,e);continue}}else g in o||(g=Js(g)||g);if(y||(u||u===0)&&(d||d===0)&&!Jb.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=Ft(h)||(g in li.units?li.units[g]:m),m!==p&&(d=Cn(e,g,c,p)),this._pt=new Zt(this._pt,y?S:o,g,d,(v?Is(d,v+u):u)-d,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?tS:Il),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=eS);else if(g in o)uS.call(this,e,g,c,v?v+h:h);else if(g in e)this.add(e,g,c||e[g],v?v+h:h,n,s);else if(g!=="parseTransform"){fc(g,h);continue}y||(g in o?R.push(g,0,o[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),a.push(g)}}M&&zf(this)},render:function(e,t){if(t.tween._time||!Tc())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Qi,aliases:Oi,getSetter:function(e,t,i){var n=Oi[t];return n&&n.indexOf(",")<0&&(t=n),t in an&&t!==Jt&&(e._gsap.x||Qi(e,"x"))?i&&ku===i?t==="scale"?rS:sS:(ku=i||{})&&(t==="scale"?aS:oS):e.style&&!hc(e.style[t])?iS:~t.indexOf("-")?nS:bc(e,t)},core:{_removeProperty:ss,_getMatrix:wc}};Qt.utils.checkPrefix=Js;Qt.core.getStyleSaver=Xf;(function(r,e,t,i){var n=Kt(r+","+e+","+t,function(s){an[s]=1});Kt(e,function(s){li.units[s]="deg",jf[s]=1}),Oi[n[13]]=r+","+e,Kt(i,function(s){var a=s.split(":");Oi[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){li.units[r]="px"});Qt.registerPlugin(Jf);var Ai=Qt.registerPlugin(Jf)||Qt;Ai.core.Tween;class Yu{constructor(){this.experience=new ut,this.scene=this.experience.scene,this.ressources=this.experience.ressources,this.time=this.experience.time,this.camera=this.experience.camera.instance,this.isPhone=this.experience.isPhone,document.querySelector(".hero .videoContainer video").setAttribute("src",this.experience.router.main_data.data.home_hero_video.url),this.experience.router.main_data.data.home_aboutsection_text.forEach(e=>{document.querySelector(".hero-about-text").innerHTML+=`<p>${e.text}</p>`}),this.cardsBuilder=new ib,this.scrollableSection=this.isPhone?null:new tb(this),this.partnersBannerBuilder=new nb,this.heroTitle=new eb,this.ctaBuilder=new Gr,this.titleBuilder=new Qa,this.textBuilder=new lc,this.scrollValue=0,this.scrollVelocity=0,this.tubeVisible=!1,this.video=document.querySelector(".hero .videoContainer video"),this.isDestroyed=!1,this.setThree(),this.isPhone&&this.tubeAppear()}destroy(){this.isDestroyed=!0,this.tube&&(this.tube.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))}),this.scene.remove(this.tube),this.tube=null,this.tubesArray=[]),this.bars&&(this.bars.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))}),this.scene.remove(this.bars),this.bars=null,this.barsArray=[]),this.scrollableSection&&this.scrollableSection.destroy&&(this.scrollableSection.destroy(),this.scrollableSection=null),this.heroTitle&&this.heroTitle.destroy&&(this.heroTitle.destroy(),this.heroTitle=null),this.ctaBuilder&&this.ctaBuilder.destroy&&(this.ctaBuilder.destroy(),this.ctaBuilder=null),this.titleBuilder&&this.titleBuilder.destroy&&(this.titleBuilder.destroy(),this.titleBuilder=null),this.textBuilder&&this.textBuilder.destroy&&(this.textBuilder.destroy(),this.textBuilder=null)}setThree(){this.bars=this.experience.ressources.items.bars.scene,this.barsHtmlTarget=this.isPhone?document.querySelector(".hero-about"):document.querySelector(".hero-about-titleContainer"),this.barsArray=[],this.bars.traverse(e=>{e.isMesh&&(e.material=this.experience.redMaterial.clone(),this.barsArray.push(e))}),this.barsScale=.25,this.bars.scale.set(this.barsScale,this.barsScale,this.barsScale),this.scene.add(this.bars),this.positionBars(),this.tube=this.experience.ressources.items.tube.scene,this.tubeHtmlTarget=this.isPhone?document.querySelector(".home-work"):document.querySelector(".homeCards-container"),this.tubesArray=[],this.tube.traverse(e=>{e.isMesh&&(e.material=this.experience.redMaterial.clone(),e.userData.initialPosition=e.position.clone(),e.userData.random=1+Math.random()*2,this.tubesArray.push(e))}),this.tubeScale=this.isPhone?.65:.3,this.tube.scale.set(this.tubeScale,this.tubeScale,this.isPhone?.1:this.tubeScale),this.scene.add(this.tube),this.tubesArray.forEach(e=>{e.material.uniforms.u_alpha.value=0,e.scale.y=0}),this.positionTube()}tubeAppear(){this.tubeVisible||(this.tubeVisible=!0,this.tubesArray.forEach((e,t)=>{Ai.to(e.material.uniforms.u_alpha,{value:1,duration:.5,ease:"power3.inOut",delay:t*.02}),Ai.to(e.scale,{y:.4,duration:.5,ease:"power3.inOut",delay:t*.02})}))}tubeDisappear(){this.tubeVisible&&(this.tubeVisible=!1,this.tubesArray.forEach((e,t)=>{Ai.to(e.material.uniforms.u_alpha,{value:0,duration:.5,ease:"power3.inOut",delay:t*.02}),Ai.to(e.scale,{y:0,duration:.5,ease:"power3.inOut",delay:t*.02})}))}positionBars(e=null){const t=ot.getWorldPositionFromElement(this.barsHtmlTarget,this.camera,3),i=ot.remToWorldOffset(this.isPhone?0:500,this.isPhone?200:-200,this.camera,3);if(this.bars.position.set(t.x-i.x,t.y-i.y,t.z),e){const n=ot.remToWorldOffset(window.innerHeight-e.animatedScroll,0,this.camera,3);this.bars.position.set(t.x-i.x-n.x*.1,t.y-i.y,t.z)}}positionTube(){const e=ot.getWorldPositionFromElement(this.tubeHtmlTarget,this.camera,3),t=ot.remToWorldOffset(0,this.isPhone?-200:20,this.camera,3);this.tube.position.set(0,e.y-t.y,e.z)}onScroll(e){this.isDestroyed||(this.scrollValue=e.animatedScroll*.001,this.scrollVelocity=e.velocity*.001,this.scrollableSection&&this.scrollableSection.onScroll(e),e.animatedScroll>window.innerHeight?this.video.style.zIndex="-1":this.video.style.zIndex="0",this.positionBars(e),this.positionTube())}update(){if(this.isDestroyed)return;this.heroTitle&&this.heroTitle.update(),this.barsArray.forEach((t,i)=>{t.rotation.z=this.experience.time.elapsed*1e-4+i*Math.PI*2/this.barsArray.length+this.scrollValue}),this.tube.rotation.z=this.experience.time.elapsed*1e-4+this.scrollValue;const e=6;this.tube.traverse(t=>{if(t.isMesh){const i=t.userData.initialPosition,n=Math.abs(this.scrollVelocity*e),s=i.clone().sub(this.tube.position).normalize().multiplyScalar(n),a=i.clone().add(s);t.position.lerp(a,.1)}})}resize(){this.isDestroyed||(this.scrollableSection&&this.scrollableSection.resize(),this.positionBars())}}class yS{constructor(e){this.experience=new ut,this.section=document.querySelector(".about-tools"),this.dots=Array.from(this.section.querySelectorAll(".sliderDots .dot")),this.prevBtn=this.section.querySelector(".tools-prev"),this.nextBtn=this.section.querySelector(".tools-next"),this.page=e,this.currentIndex=0,this.prevIndex=0,this.prevRotate=0,this.nextRotate=0,this.isPhone=this.experience.isPhone,this.setHtml(),this.init()}setHtml(){const e=document.querySelector(".tools-text");e.innerHTML=this.page.tools.map(t=>`<p>${t.text}</p>`).join(""),this.texts=Array.from(e.querySelectorAll("p"))}init(){this.updateDisplay(),this.page.showBalls(this.currentIndex),this.prevBtn.addEventListener("click",()=>this.prevSlide()),this.nextBtn.addEventListener("click",()=>this.nextSlide()),this.dots.forEach((e,t)=>{e.addEventListener("click",()=>{this.prevIndex=this.currentIndex,this.currentIndex=t,this.updateDisplay(),this.page.showBalls(this.currentIndex)})})}prevSlide(){this.prevIndex=this.currentIndex,this.currentIndex--,this.currentIndex<0&&(this.currentIndex=this.texts.length-1),this.prevRotate+=45,this.prevBtn.style.transform=this.isPhone?`translate(calc(-50% - 100rem), -50%) rotate(${-this.prevRotate}deg)`:`translate(calc(-50% - 400rem), -50%) rotate(${-this.prevRotate}deg)`,this.prevBtn.querySelector("div").style.transform=`rotate(${this.prevRotate}deg)`,this.updateDisplay(),this.page.showBalls(this.currentIndex)}nextSlide(){this.prevIndex=this.currentIndex,this.currentIndex++,this.currentIndex>=this.texts.length&&(this.currentIndex=0),this.nextRotate+=45,this.nextBtn.style.transform=this.isPhone?`translate(calc(50% + 100rem), -50%) rotate(${this.nextRotate}deg)`:`translate(calc(50% + 400rem), -50%) rotate(${this.nextRotate}deg)`,this.nextBtn.querySelector("div").style.transform=`rotate(${-this.nextRotate}deg)`,this.updateDisplay(),this.page.showBalls(this.currentIndex)}updateDisplay(){this.texts.forEach((e,t)=>{e.style.opacity=t===this.currentIndex?"1":"0",e.style.transition="opacity 0.5s ease"}),this.dots.forEach((e,t)=>{t===this.currentIndex?e.classList.add("active"):e.classList.remove("active")})}update(){}}class $u{constructor(){this.experience=new ut,this.scene=this.experience.scene,this.ressources=this.experience.ressources,this.time=this.experience.time,this.camera=this.experience.camera.instance,this.isPhone=this.experience.isPhone,this.ctaBuilder=new Gr,this.titleBuilder=new Qa,this.textBuilder=new lc,this.contentTools={text:this.experience.router.main_data.data.content_tools_text[0].text,images:this.experience.router.main_data.data.content_tools_images},this.liveTools={text:this.experience.router.main_data.data.live_tools_text[0].text,images:this.experience.router.main_data.data.live_tools},this.realTimeTools={text:this.experience.router.main_data.data.real_time_tools_text[0].text,images:this.experience.router.main_data.data.real_time_tools_images},this.stageTools={text:this.experience.router.main_data.data.stage_tools_text[0].text,images:this.experience.router.main_data.data.stage_tools_images},this.aiTools={text:this.experience.router.main_data.data.ai_tools_text[0].text,images:this.experience.router.main_data.data.ai_tools_images},this.tools=[this.liveTools,this.realTimeTools,this.stageTools,this.contentTools,this.aiTools],this.setBalls(),this.toolsSectionBuilder=new yS(this),this.firstSectionPourcentage=1,this.secondSectionPourcentage=0,this.logoVisible=!0,this.partnerContainer=document.querySelector(".about-partnersContainer"),document.querySelector(".about-text p").innerHTML=this.experience.router.main_data.data.about_text[0].text,this.isDestroyed=!1,this.setPartnerCards(),this.setLogo()}setLogo(){this.logo=this.experience.ressources.items.brit_logo.scene.clone(),this.logoHtmlTarget=document.querySelector(".about-top"),this.logoItems=[],this.logo.traverse(e=>{e.isMesh&&(e.material=this.experience.redMaterial.clone(),e.userData.random=Math.random(),this.logoItems.push(e))}),this.logoScale=.18,this.logo.scale.set(this.logoScale,this.logoScale,this.logoScale),this.logo.rotation.y=-.2+Math.PI,this.scene.add(this.logo),this.positionLogo()}logoAppear(){this.logoVisible||(this.logoVisible=!0,this.logo.visible=!0,this.logoItems.forEach(e=>{Ai.to(e.material.uniforms.u_alpha,{value:1,duration:1,ease:"power3.inOut"})}))}logoDisappear(){this.logoVisible&&(this.logoVisible=!1,Ai.to(this.logo.scale,{x:.5,y:.5,z:.5,duration:1,ease:"power3.inOut",onComplete:()=>{this.logo.visible=!1}}),this.logoItems.forEach(e=>{Ai.to(e.material.uniforms.u_alpha,{value:0,duration:1,ease:"power3.inOut"})}))}positionLogo(e=null){const t=ot.getWorldPositionFromElement(this.logoHtmlTarget,this.camera,3);let i=this.isPhone?ot.remToWorldOffset(0,-400,this.camera,3):ot.remToWorldOffset(-600,-100,this.camera,3);const n=ot.remToWorldOffset(-150,-600,this.camera,3),s=ot.pixelsToWorldOffset(window.scrollY,0,this.camera,3);if(this.logo.position.set(t.x-i.x*this.firstSectionPourcentage+n.x*this.secondSectionPourcentage,t.y-i.y*this.firstSectionPourcentage-s.x-n.y*this.secondSectionPourcentage,0),e){this.firstSectionPourcentage=Math.pow(Math.max(1-e.animatedScroll/window.innerHeight,0),3),this.secondSectionPourcentage=Math.max(Math.min((e.animatedScroll-window.innerHeight+50)/window.innerHeight,1),0);const a=ot.pixelsToWorldOffset(e.animatedScroll,0,this.camera,3);this.logo.position.set(t.x-i.x*this.firstSectionPourcentage+n.x*this.secondSectionPourcentage,t.y-i.y*this.firstSectionPourcentage-a.x-n.y*this.secondSectionPourcentage,0)}}setBalls(){this.ballsGroup=new ri,this.ballsLittleGroups=[];const e=()=>{const u=this.experience.redMaterial.clone();return u.uniforms.u_alpha.value=0,u},t=()=>this.experience.ressources.items.brit_logo.scene.clone(),i=()=>this.experience.ressources.items.bars.scene.clone(),n=(u,d,{basePosSpread:f=1,scaleRange:_=[.04,.09],spinRange:g=.018,count:m=null}={})=>{const p=[];u.traverse(y=>{y.isMesh&&p.push(y)});const v=m?p.slice(0,m):p;return v.forEach((y,x)=>{const S=new Xt(y.geometry,e()),w=_[0]+Math.random()*(_[1]-_[0]);S.scale.setScalar(w);const M=x/v.length*Math.PI*2+Math.random()*.8,R=.35+Math.random()*f;S.position.set(Math.cos(M)*R,Math.sin(M)*R,(Math.random()-.5)*.15),S.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),S.userData={spinX:(Math.random()-.5)*g,spinY:(Math.random()-.5)*g,spinZ:(Math.random()-.5)*g*.5,bobAmp:.003+Math.random()*.004,bobPhase:Math.random()*Math.PI*2,orbitAngle:M,orbitRadius:R,orbitSpeed:(.003+Math.random()*.004)*(Math.random()>.5?1:-1),random:Math.random()},d.add(S)}),v},s=(u,d,f,_=.02)=>{d.forEach(([g,m,p],v)=>{const y=new Xt(f(v),e());y.position.set(g,m,p),y.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,0),y.userData={spinX:(Math.random()-.5)*_,spinY:(Math.random()-.5)*_*1.5,spinZ:(Math.random()-.5)*_*.4,bobAmp:.003,bobPhase:Math.random()*Math.PI*2,orbitAngle:Math.atan2(m,g),orbitRadius:Math.sqrt(g*g+m*m),orbitSpeed:(.002+Math.random()*.003)*(v%2?1:-1),random:Math.random()},u.add(y)})},a=new ri;n(t(),a,{basePosSpread:.7,scaleRange:[.05,.11],spinRange:.022}),s(a,[[-.9,.55,0],[.85,.6,0],[.7,-.65,.1],[-.75,-.55,0],[.1,.95,0]],u=>new ic(.06+u%3*.02,0)),this.ballsLittleGroups.push(a),this.ballsGroup.add(a);const o=new ri;n(i(),o,{basePosSpread:.9,scaleRange:[.03,.07],spinRange:.016,count:12}),s(o,[[-.85,.45,.05],[.8,.5,0],[.9,-.4,0],[-.8,-.5,.05],[0,-.9,0],[-.4,.8,.1]],u=>new tc(.055+u%3*.02,0)),this.ballsLittleGroups.push(o),this.ballsGroup.add(o);const l=new ri;n(t(),l,{basePosSpread:.5,scaleRange:[.06,.1],spinRange:.02}),n(t(),l,{basePosSpread:.85,scaleRange:[.03,.06],spinRange:.015}),s(l,[[-.95,.2,0],[.95,.2,0],[.5,.85,0],[-.5,-.8,0]],u=>new za(.05+u%2*.025,0)),this.ballsLittleGroups.push(l),this.ballsGroup.add(l);const c=new ri;n(i(),c,{basePosSpread:.8,scaleRange:[.03,.08],spinRange:.018,count:10}),n(t(),c,{basePosSpread:.55,scaleRange:[.04,.08],spinRange:.022,count:6}),s(c,[[-.88,.55,0],[.88,.55,0],[.88,-.55,0],[-.88,-.55,0]],u=>{const d=.06+u%2*.03;return new Qs(d,d,d)}),this.ballsLittleGroups.push(c),this.ballsGroup.add(c);const h=new ri;n(t(),h,{basePosSpread:.75,scaleRange:[.05,.12],spinRange:.025});for(let u=0;u<8;u++){const d=u/8*Math.PI*2,f=.92,_=.055+u%3*.02,g=new Xt(new za(_,0),e());g.position.set(Math.cos(d)*f,Math.sin(d)*f,0),g.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),g.userData={spinX:.015,spinY:.02,spinZ:.008,bobAmp:.002,bobPhase:Math.random()*Math.PI*2,orbitAngle:d,orbitRadius:f,orbitSpeed:.005*(u%2?1:-1),random:Math.random()},h.add(g)}this.ballsLittleGroups.push(h),this.ballsGroup.add(h),this.scene.add(this.ballsGroup),this.positionBallsGroup()}showBalls(e){const t=this.toolsSectionBuilder&&this.toolsSectionBuilder.prevIndex<this.toolsSectionBuilder.currentIndex?1:-1;this.ballsLittleGroups.forEach((i,n)=>{Ai.to(i.rotation,{z:i.rotation.z+t*Math.PI*.3,duration:1.2,ease:"power3.inOut"}),i.traverse(s=>{s.isMesh&&s.material&&s.material.uniforms&&(n===e?(s.visible=!0,Ai.to(s.material.uniforms.u_alpha,{value:1,duration:.7,delay:.2,ease:"power2.out"})):Ai.to(s.material.uniforms.u_alpha,{value:0,duration:.35,ease:"power2.in",onComplete:()=>{s.visible=!1}}))})})}positionBallsGroup(e){this.ballsHtmlTarget=document.querySelector(".about-tools");const t=ot.getWorldPositionFromElement(this.ballsHtmlTarget,this.camera,3);this.ballsGroup.position.set(t.x,t.y,0),e&&this.ballsGroup.position.set(t.x,t.y,0)}onScroll(e){if(this.isDestroyed)return;this.positionLogo(e),this.positionBallsGroup(e);const t=this.partnerContainer.getBoundingClientRect(),i=t.top+(t.height-window.innerHeight*1.2)+e.animatedScroll;e.animatedScroll>i?this.logoDisappear():this.logoAppear()}resize(){this.isDestroyed||this.positionLogo()}setPartnerCards(){const e=document.querySelector(".about-partnersContainer");this.experience.router.main_data.data.about_partners.forEach(t=>{const i=`<div class="about-partnerCards"><img src=${t.partner_logo.url} alt="" /></div>`;e.insertAdjacentHTML("beforeend",i)})}update(){if(this.isDestroyed)return;const e=this.experience.time.elapsed*.001,t=this.experience.time.delta,i={x:0,y:this.isPhone?Math.PI:-.2+Math.PI,z:0},n={x:-(Math.PI*.2),y:Math.PI+.5+Math.PI,z:0},s={x:-n.x+.3,y:Math.PI+Math.PI*.75,z:0},a=n.x*(1-this.firstSectionPourcentage)+s.x*this.secondSectionPourcentage,o=i.y*this.firstSectionPourcentage+n.y*(1-this.firstSectionPourcentage)+s.y*this.secondSectionPourcentage,l=this.isPhone?.5+this.secondSectionPourcentage*.4:.18+this.secondSectionPourcentage*.4;this.logo.rotation.x=Wn.lerp(this.logo.rotation.x,a,.1),this.logo.rotation.y=Wn.lerp(this.logo.rotation.y,o,.1),this.logo.scale.x=Wn.lerp(this.logo.scale.x,l,.1),this.logo.scale.y=Wn.lerp(this.logo.scale.y,l,.1),this.logo.scale.z=Wn.lerp(this.logo.scale.z,l,.1),this.logoItems.forEach(c=>{const h=-Math.PI*.5,u=Math.cos(e+c.userData.random*10)*Math.PI*.05;c.rotation.z=h+u-h*(1-this.firstSectionPourcentage)}),this.ballsLittleGroups.forEach(c=>{c.rotation.z+=t*.12;const h=u=>{const d=u.userData;d&&d.spinY!==void 0&&(u.rotation.x+=d.spinX||0,u.rotation.y+=d.spinY||0,u.rotation.z+=d.spinZ||0,d.orbitAngle!==void 0&&(d.orbitAngle+=d.orbitSpeed||0,u.position.x=Math.cos(d.orbitAngle)*d.orbitRadius,u.position.y=Math.sin(d.orbitAngle)*d.orbitRadius),d.bobAmp&&(u.position.z=Math.sin(e*1.8+d.bobPhase)*d.bobAmp*8)),u.children&&u.children.forEach(h)};c.children.forEach(h)})}destroy(){var e,t,i,n;this.isDestroyed=!0,this.logo&&(this.logo.traverse(s=>{s.isMesh&&(s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(a=>a.dispose()):s.material.dispose()))}),this.scene.remove(this.logo),this.logo=null,this.logoItems=[]),this.ballsGroup&&(this.ballsGroup.traverse(s=>{s.isMesh&&(s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(a=>a.dispose()):s.material.dispose()))}),this.scene.remove(this.ballsGroup),this.ballsGroup=null,this.ballsLittleGroups=[]),(e=this.toolsSectionBuilder)!=null&&e.destroy&&(this.toolsSectionBuilder.destroy(),this.toolsSectionBuilder=null),(t=this.ctaBuilder)!=null&&t.destroy&&(this.ctaBuilder.destroy(),this.ctaBuilder=null),(i=this.titleBuilder)!=null&&i.destroy&&(this.titleBuilder.destroy(),this.titleBuilder=null),(n=this.textBuilder)!=null&&n.destroy&&(this.textBuilder.destroy(),this.textBuilder=null),this.partnerContainer&&(this.partnerContainer.innerHTML="",this.partnerContainer=null)}}class vS{constructor(e){this.experience=new ut,this.container=document.querySelector(".projects-container"),this.data=e;const t=["The IB curriculum is designed to develop internationally minded people who help to create a better and more peaceful world. With rigorous academic standards, it pushes students to think critically, engage with complex ideas, and connect knowledge across disciplines.","Studying for the IB can feel overwhelming, but the skills you build — analytical thinking, structured writing, time management — carry far beyond the exam hall. These resources are here to make that journey a little less brutal.","Theory of Knowledge asks you to question the very foundations of what you know. It's uncomfortable, occasionally infuriating, and probably the most genuinely useful thing the IB will teach you. Good luck.","The Extended Essay is 4,000 words of pain, but also an opportunity to go deep on something you actually care about. Pick your topic wisely. Start early. Cite everything.","Internal Assessments count for more than students think. They are your chance to demonstrate understanding in a format that isn't just a timed exam. Take them seriously.","The IB Learner Profile asks you to be a communicator, a thinker, a risk-taker, and about six other things simultaneously. You won't be all of them at once. That's fine. Pick two and work outward.","CAS — Creativity, Activity, Service — exists to remind you that education is bigger than exams. It's also a mandatory requirement. Both things can be true.","Predicted grades matter more than they should. Build a relationship with your teachers, show your thinking process, and don't disappear when things get hard."],i=this.data.uid.split("").reduce((a,o)=>a+o.charCodeAt(0),0),n=t[i%t.length];this.template=`
            <div class="projectRow hidden">
                <div class="project-top">
                    <div class="project-cross cross1"></div>
                    <div class="project-cross cross2"></div>
                    <div class="project-cross cross3"></div>
                    <div class="section">
                        <p class="project-infos">${this.data.data.article_title[0].text}</p>
                        <div class="project-line project-top-line"></div>
                    </div>
                    <div class="section">
                        <p class="project-infos">${this.data.data.article_label[0].text}</p>
                        <div class="project-line project-top-line"></div>
                    </div>
                    <div class="section"></div>
                </div>
                <div class="project-pic" style="height: auto; overflow: visible; padding: 30rem 60rem;">
                    <p style="font-family: var(--text); font-size: 22rem; line-height: 1.7; color: var(--white); opacity: 0.75; max-width: 900rem;">
                        ${n}
                    </p>
                </div>
                <div class="project-bottom">
                    <div class="project-cross cross4"></div>
                    <div class="section"></div>
                    <div class="section"></div>
                    <a href="projects/${this.data.uid}" class="section">
                        <div class="project-line project-bottom-line"></div>
                        <p class="project-infos">SEE DETAILS</p>
                    </a>
                </div>
            </div>
        `,this.container.insertAdjacentHTML("beforeend",this.template);const s=this.container.querySelector(".projectRow:last-child");this.observe(s)}observe(e){new IntersectionObserver((i,n)=>{i.forEach(s=>{s.isIntersecting&&(s.target.style.opacity=1,n.unobserve(s.target))})},{threshold:.2}).observe(e)}}class ju{constructor(){this.experience=new ut,this.ctaBuilder=new Gr,this.titleBuilder=new Qa,this.toggle=!1,this.isPhone=this.experience.isPhone,this.getProjects(),this.setToggle()}async getProjects(){this.client=this.experience.router.client,this.experience.router.data.results.filter(i=>i.type==="article").forEach(i=>{new vS(i)}),document.querySelectorAll(".project-bottom a").forEach(i=>{i.dataset.listener||(i.dataset.listener="true",i.addEventListener("click",n=>{n.preventDefault(),this.experience.router.route(n)}))}),this.isPhone&&document.querySelectorAll(".project-pic").forEach(i=>{i.querySelectorAll(".pic-section").forEach((n,s)=>{s!==0?n.style.display="none":n.style.display="block"})})}setToggle(){this.projectsToggle=document.querySelector(".projects-toggle"),this.projectsToggle.addEventListener("click",()=>{this.toggle=!this.toggle,this.toggle?(document.querySelectorAll(".project-bottom").forEach(e=>e.style.transform=this.isPhone?"translateY(-60rem)":"translateY(calc(-100% - 40rem))"),document.querySelectorAll(".project-pic").forEach(e=>{e.style.height="0",e.style.overflow="hidden",e.style.padding="0"}),document.querySelectorAll(".project-pic p").forEach(e=>{e.style.opacity="0",e.style.transition="opacity 0.3s ease"}),document.querySelector(".projects-container").style.rowGap=this.isPhone?"100rem":"0",this.projectsToggle.querySelectorAll(".dot").forEach(e=>e.classList.remove("active"))):(document.querySelectorAll(".project-bottom").forEach(e=>e.style.transform="translateY(0)"),document.querySelectorAll(".project-pic").forEach(e=>{e.style.height="auto",e.style.overflow="visible",e.style.padding="30rem 60rem"}),document.querySelectorAll(".project-pic p").forEach(e=>{e.style.opacity="0.75",e.style.transition="opacity 0.4s ease 0.2s"}),document.querySelector(".projects-container").style.rowGap="200rem",this.projectsToggle.querySelectorAll(".dot").forEach(e=>e.classList.add("active")))})}update(){}}class Ku{constructor(){if(this.experience=new ut,this.ctaBuilder=new Gr,this.titleBuilder=new Qa,this.textBuilder=new lc,this.data=this.experience.router.main_data,this.isPhone=this.experience.isPhone,this.data){document.querySelector(".article-title").innerHTML=`${this.data.data.article_title[0].text}`;const e=document.querySelector(".description");this.data.data.article_description.forEach(s=>{e.innerHTML+=`<p>${s.text}</p>`});const t=document.querySelector(".tableau");this.data.data.article_label_list.forEach(s=>{t.innerHTML+=`
                                                <div class="tableau-item">
                                                    <div class="article-cross"></div>
                                                    <dt>${s.label_item[0].text}</dt>
                                                    <div class="article-line"></div>
                                                    <dd>${s.label_value[0].text}</dd>
                                                    <div class="article-cross"></div>
                                                </div>
                                            `});const i=this.data.data.article_gallery,n=document.querySelector(".article-content");i.forEach(s=>{const a=s.link_to_media.kind,o=s.article_media_size;let l="full";o==="full"?l="full":o==="left"?l="verticalLeft":o==="right"?l="verticalRight":o==="center"&&(l="verticalCenter");const c=a==="file"?`
                <div class="${l}">
                    <video
                    src="${s.link_to_media.url}"
                    muted
                    autoplay
                    loop
                    ></video>
                </div>
                `:`
                    <div class="${l}">
                        <img src="${s.link_to_media.url}" alt="" />
                    </div>
                `;n.innerHTML+=c}),this.isPhone&&(console.log(document.querySelector(".article-data .description").getBoundingClientRect().height),document.querySelector(".article-top").style.height=`${window.innerHeight+document.querySelector(".article-data .description").getBoundingClientRect().height+20}px`)}}update(){}}class xS{constructor(e){this.experience=new ut,this.container=e,this.width=280,this.height=185*1.2125,this.container.style.cssText=`
            width: ${this.width}rem;
            height: ${this.height}rem;
            position: fixed;
            top: 50rem;
            left: 50rem;
            z-index: 800;
            overflow: visible;
            cursor: pointer;
        `,this.buildLogo(),this.buildOverlay(),this.setMouseEvents(),this.open()}buildLogo(){this.imgWrapper=document.createElement("div"),this.imgWrapper.style.cssText=`
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            overflow: hidden;
        `,this.img=document.createElement("img"),this.img.src="/images/brit_logo_white.png",this.img.style.cssText=`
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
            transition: transform 0.5s var(--ease);
            filter: sepia(1) hue-rotate(8deg) saturate(0.4) brightness(0.89);
        `,this.imgWrapper.appendChild(this.img),this.container.appendChild(this.imgWrapper)}buildOverlay(){const t=this.width+48,i=this.height+24*2,n=t/2,s=i/2,a=Math.min(t,i)/2-4,o=a-14,l=10,c=[0,45,90,135,180,225,270,315].map(m=>{const p=m*Math.PI/180,v=(n+(a-l)*Math.cos(p)).toFixed(1),y=(s+(a-l)*Math.sin(p)).toFixed(1),x=(n+(a+4)*Math.cos(p)).toFixed(1),S=(s+(a+4)*Math.sin(p)).toFixed(1);return`<line x1="${v}" y1="${y}" x2="${x}" y2="${S}" stroke="var(--white)" stroke-width="1.5"/>`}).join(""),h=a*.38,u=`
            <line x1="${(n-h).toFixed(1)}" y1="${s}" x2="${(n-o+6).toFixed(1)}" y2="${s}" stroke="var(--white)" stroke-width="1"/>
            <line x1="${(n+o-6).toFixed(1)}"  y1="${s}" x2="${(n+h).toFixed(1)}"  y2="${s}" stroke="var(--white)" stroke-width="1"/>
            <line x1="${n}" y1="${(s-h).toFixed(1)}" x2="${n}" y2="${(s-o+6).toFixed(1)}" stroke="var(--white)" stroke-width="1"/>
            <line x1="${n}" y1="${(s+o-6).toFixed(1)}"  x2="${n}" y2="${(s+h).toFixed(1)}"  stroke="var(--white)" stroke-width="1"/>
        `,d=(2*Math.PI*a).toFixed(1),f=(2*Math.PI*o).toFixed(1),_="http://www.w3.org/2000/svg",g=document.createElementNS(_,"svg");g.setAttribute("width",`${t}rem`),g.setAttribute("height",`${i}rem`),g.setAttribute("viewBox",`0 0 ${t} ${i}`),g.style.cssText=`
            position: absolute;
            top: -24rem; left: -24rem;
            pointer-events: none;
            overflow: visible;
        `,g.innerHTML=`
            <style>
                .logo-ring {
                    fill: none; stroke: var(--white); stroke-width: 1.2;
                    stroke-dasharray: ${d}; stroke-dashoffset: ${d};
                    transition: stroke-dashoffset 0.6s var(--ease);
                    transform-origin: ${n}px ${s}px; transform: rotate(-90deg);
                }
                .logo-ring-inner {
                    fill: none; stroke: var(--white); stroke-width: 0.8; opacity: 0.5;
                    stroke-dasharray: ${f}; stroke-dashoffset: ${f};
                    transition: stroke-dashoffset 0.5s var(--ease) 0.1s;
                    transform-origin: ${n}px ${s}px; transform: rotate(-90deg);
                }
                .logo-ticks { opacity: 0; transition: opacity 0.25s ease 0.55s; }
                .logo-cross { opacity: 0; transition: opacity 0.25s ease 0.45s; }
            </style>
            <circle class="logo-ring"       cx="${n}" cy="${s}" r="${a}"/>
            <circle class="logo-ring-inner" cx="${n}" cy="${s}" r="${o}"/>
            <g class="logo-ticks">${c}</g>
            <g class="logo-cross">${u}</g>
        `,this.svg=g,this.ring=g.querySelector(".logo-ring"),this.ringInner=g.querySelector(".logo-ring-inner"),this.ticksG=g.querySelector(".logo-ticks"),this.crossG=g.querySelector(".logo-cross"),this.circ1=parseFloat(d),this.circ2=parseFloat(f),this.container.appendChild(g)}_showOverlay(){this.ring.style.strokeDashoffset="0",this.ringInner.style.strokeDashoffset="0",this.ticksG.style.opacity="1",this.crossG.style.opacity="1",this.img.style.transform="scale(1.05)"}_hideOverlay(){this.ring.style.strokeDashoffset=`${this.circ1}`,this.ringInner.style.strokeDashoffset=`${this.circ2}`,this.ticksG.style.transition="opacity 0.12s ease 0s",this.crossG.style.transition="opacity 0.12s ease 0s",this.ticksG.style.opacity="0",this.crossG.style.opacity="0",setTimeout(()=>{this.ticksG.style.transition="opacity 0.25s ease 0.55s",this.crossG.style.transition="opacity 0.25s ease 0.45s"},150),this.img.style.transform="scale(1)"}setMouseEvents(){this.container.addEventListener("mouseenter",()=>this._showOverlay()),this.container.addEventListener("mouseleave",()=>this._hideOverlay()),this.container.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),this.experience.router.route(e)})}open(){this.container.style.pointerEvents="all",this.imgWrapper.style.transition="none",this.imgWrapper.style.clipPath="inset(50% 0 50% 0)",this.imgWrapper.offsetHeight,this.imgWrapper.style.transition="clip-path 1s var(--ease)",this.imgWrapper.style.clipPath="inset(0% 0 0% 0)"}close(){this._hideOverlay(),this.container.style.pointerEvents="none",this.imgWrapper.style.transition="none",this.imgWrapper.style.clipPath="inset(0% 0 0% 0)",this.imgWrapper.offsetHeight,this.imgWrapper.style.transition="clip-path 1s var(--ease)",this.imgWrapper.style.clipPath="inset(50% 0 50% 0)"}}class bS{constructor(e){this.experience=new ut,this.container=e,this.width=185,this.boundings=this.container.getBoundingClientRect(),this.container.style.width=`${this.width}rem`,this.container.style.height=`${this.width*1.2125}rem`,this.unit=this.width/9,this.top=document.createElement("div"),this.top.classList.add("burger-top-container"),this.container.appendChild(this.top),this.top.style.width="100%",this.top.style.height="100%",this.isClickable=!0,this.isAnimating=!1,this.isOpen=!1,this.setBars(),document.querySelectorAll(".burgerBar").forEach((t,i)=>{t.offsetWidth,t.style.transition="1s var(--ease)",t.style.height="100%"}),this.setMouseEvents()}setBars(){const e=document.createElement("div");e.style.width="100%",e.style.height="100%",e.classList.add("burger-bars-top-container"),this.top.innerHTML="",this.top.appendChild(e);for(let t=0;t<5;t++){const i=document.createElement("div");i.style.transition=`0.5s var(--ease) ${t*.05}s`,i.style.background="var(--white)",i.classList.add(`burger-t-b${t}`),i.classList.add("burgerBar"),e.appendChild(i)}this.tb0=document.querySelector(".burger-t-b0"),this.tb1=document.querySelector(".burger-t-b1"),this.tb2=document.querySelector(".burger-t-b2"),this.tb3=document.querySelector(".burger-t-b3"),this.tb4=document.querySelector(".burger-t-b4"),this.createTopbar(this.tb0,this.unit,0,0,0),this.createTopbar(this.tb1,this.unit,0,0,this.unit*2),this.createTopbar(this.tb2,this.unit,0,0,this.unit*4),this.createTopbar(this.tb3,this.unit,0,0,this.unit*6),this.createTopbar(this.tb4,this.unit,0,0,this.unit*8)}createTopbar(e,t,i,n,s){e.style.width=`${t}rem`,e.style.height="0%",e.style.bottom="50%",e.style.transform="translateY(50%)",e.style.left=`${s}rem`}open(){this.isOpen=!0,this.experience.world.logo.close(),this.container.style.transition="1s ease-in-out",this.container.style.transform="rotate(180deg)",document.querySelectorAll(".burgerBar").forEach((e,t)=>{e.style.left=`${this.unit*4}rem`,e.style.transition="0.5s var(--ease)",e.style.height="100%",e.style.transition=`0.5s var(--ease) ${t*.05}s`,e.style.transform=`translateY(50%) rotate(${360/5*t}deg)`}),this.experience.world.menu.open()}close(){this.isOpen=!1,this.experience.world.logo.open(),this.container.style.transition="",this.container.style.transform="rotate(0deg)",document.querySelectorAll(".burgerBar").forEach((e,t)=>{e.style.left=`${this.unit*t*2}rem`,e.style.transition=`0.5s var(--ease) ${t*.05}s`,e.style.transform="translateY(50%) rotate(0deg)"}),this.experience.world.menu.close()}handleMouseEnter(){this.container.style.cursor="pointer",this.isOpen&&!this.isAnimating?document.querySelectorAll(".burgerBar").forEach((e,t)=>{e.style.transition="0.5s var(--ease) ",e.style.transform="translateY(50%) rotate(90deg)"}):this.isAnimating||document.querySelectorAll(".burgerBar").forEach((e,t)=>{e.style.transition="0.5s var(--ease) ",e.style.left=`${this.unit*4}rem`})}handleMouseLeave(){this.container.style.cursor="default",this.isOpen?document.querySelectorAll(".burgerBar").forEach((e,t)=>{e.style.transform=`translateY(50%) rotate(${360/5*t}deg)`}):document.querySelectorAll(".burgerBar").forEach((e,t)=>{e.style.left=`${this.unit*t*2}rem`})}setMouseEvents(){this.handleMouseEnterBound=this.handleMouseEnter.bind(this),this.handleMouseLeaveBound=this.handleMouseLeave.bind(this),this.container.addEventListener("mouseenter",this.handleMouseEnterBound),this.container.addEventListener("mouseleave",this.handleMouseLeaveBound),this.container.addEventListener("mouseover",this.handleMouseEnterBound),this.container.addEventListener("mouseout",this.handleMouseLeaveBound),this.container.addEventListener("click",e=>{this.isAnimating||(this.isAnimating=!0,setTimeout(()=>{this.isAnimating=!1},500)),this.isClickable&&(this.isClickable=!1,this.isOpen?(this.experience.world.logo.open(),this.close(),this.isOpen=!1):(this.open(),this.isOpen=!0),setTimeout(()=>{this.isClickable=!0},1e3))})}}class SS{constructor(){this.experience=new ut,this.instance=document.querySelector(".menu"),this.top=this.instance.querySelector(".menu-top"),this.bottom=this.instance.querySelector(".menu-bottom"),this.content=this.instance.querySelector(".menu-content"),this.links=this.content.querySelectorAll(".menu-link-container a"),this.isHoverable=!1,this.isOpen=!1,this.createFragments(),this.links.forEach((e,t)=>{e.addEventListener("mouseenter",i=>this.handleMouseHover(i,t)),e.addEventListener("mouseleave",i=>this.handleMouseOut(i,t)),e.addEventListener("click",i=>this.handleClick(i))})}handleClick(e){e.preventDefault(),e.currentTarget.textContent==="contact"?window.location.href="mailto:youre-email@company.com":this.experience.router.route(e)}handleMouseHover(e,t){if(this.isHoverable){const i=this.links[t];Array.from(this.links).filter((s,a)=>a!==t).forEach(s=>{s.style.opacity="0.2"}),i.style.opacity="1",document.querySelectorAll(".menu-item-container")[t].querySelectorAll(".link-fragment div").forEach((s,a)=>{s.style.transition=`transform 0.3s var(--ease) ${a*.07}s`,s.style.transform="translateY(0%)"})}}handleMouseOut(e,t){this.links.forEach(i=>{i.style.opacity="1"}),document.querySelectorAll(".menu-item-container")[t].querySelectorAll(".link-fragment div").forEach((i,n)=>{const a=document.querySelectorAll(".menu-item-container")[t].querySelectorAll(".link-fragment div").length-n;i.style.transition=`transform 0.3s var(--ease) ${a*.07}s`,i.style.transform="translateY(100%)"})}createFragments(){this.itemContainer=document.querySelectorAll(".menu-item-container"),this.itemContainer.forEach((e,t)=>{e.querySelectorAll(".link-fragment").forEach((n,s)=>{t%2?(n.style.textAlign="right",n.style.right="-30rem"):(n.style.textAlign="left",n.style.left="-30rem");const a=[{top:-47,height:50,color:"rgba(174, 183, 132, 1)"},{top:-70,height:25,color:"rgba(174, 183, 132, 0.6)"},{top:-82,height:15,color:"rgba(174, 183, 132, 0.35)"}];a[s]&&(n.style.top=`${a[s].top}%`,n.style.height=`${a[s].height}%`,n.style.color=`${a[s].color}`)})})}open(){this.isOpen=!0,this.top.style.height="0%",this.bottom.style.height="0%",this.top.offsetWidth,this.top.style.transition="height 1s var(--ease)",this.bottom.style.transition="height 1s var(--ease)",this.top.style.transform="translateY(0%)",this.bottom.style.transform="translateY(0%)",this.top.style.height="50%",this.bottom.style.height="50%",this.instance.style.pointerEvents="all",this.instance.style.transition="none",this.instance.style.backdropFilter="brightness(1)",this.instance.offsetWidth,this.instance.style.transition="backdrop-filter 1s var(--ease)",this.instance.style.backdropFilter="brightness(0)",this.links.forEach((e,t)=>{e.style.transition="none",e.style.transform=t%2?"translateY(-100%)":"translateY(100%)",e.offsetWidth,e.style.transition="transform 1s var(--ease) 0.5s, opacity 0.2s ease-in-out",e.style.transform="translateY(0%)"}),this.isHoverable=!0,this.itemContainer.forEach(e=>{e.querySelectorAll(".link-fragment").forEach(i=>{i.style.opacity=1})}),this.experience.lenis.stop()}close(){this.isOpen=!1,this.top.style.transition="transform 1s var(--ease) 0.5s",this.top.style.transform="translateY(-100%)",this.bottom.style.transition="transform 1s var(--ease) 0.5s",this.bottom.style.transform="translateY(100%)",this.instance.style.pointerEvents="none",this.instance.style.transition="none",this.instance.style.backdropFilter="brightness(0)",this.instance.offsetWidth,this.instance.style.transition="backdrop-filter 1s var(--ease) 0.5s",this.instance.style.backdropFilter="brightness(1)",this.links.forEach((e,t)=>{e.style.transition="none",e.style.transform="translateY(0%)",e.offsetWidth,e.style.transition="transform 1s var(--ease)",e.style.transform=t%2?"translateY(100%)":"translateY(-100%)"}),this.isHoverable=!1,this.itemContainer.forEach(e=>{e.querySelectorAll(".link-fragment").forEach(i=>{i.style.opacity=0})}),this.experience.lenis.start()}}class MS{constructor(){this.experience=new ut,this.scene=this.experience.scene,this.ressources=this.experience.ressources,this.camera=this.experience.camera.instance,this.time=this.experience.time,this.isPhone=this.experience.isPhone,this.logo=new xS(document.querySelector(".logo")),this.burger=new bS(document.querySelector(".burger")),this.menu=new SS,this.page=null,document.querySelector(".main").innerHTML=this.experience.router.html,this.experience.router.path==="/"?this.page=new Yu:this.experience.router.path==="/about"?this.page=new $u:this.experience.router.path==="/projects"?this.page=new ju:this.experience.router.path.startsWith("/projects/")&&(this.page=new Ku),this.experience.router.on("routing",()=>{this.experience.loader.transition(),setTimeout(()=>{this.experience.world.menu.isOpen&&this.experience.world.burger.close(),this.page&&this.page.destroy&&this.page.destroy(),setTimeout(()=>{document.querySelector(".main").innerHTML=this.experience.router.html,this.experience.router.path==="/"?this.page=new Yu:this.experience.router.path==="/about"?this.page=new $u:this.experience.router.path==="/projects"?this.page=new ju:this.experience.router.path.startsWith("/projects/")&&(this.page=new Ku)},500)},1e3)}),this.setFooter(),document.addEventListener("visibilitychange",()=>{document.hidden?this.positionFooter():this.positionFooter()}),this.update()}setFooter(){this.footer=this.experience.ressources.items.footer.scene,this.footerHtmlTarget=document.querySelector(".footer"),this.footerScale=this.isPhone?.45:.25,this.footer.scale.set(this.footerScale,this.footerScale,this.footerScale),this.footer.traverse(e=>{e.isMesh&&(e.material=this.experience.redMaterial)}),this.footer.rotation.z=this.isPhone?Math.PI*.5:0,this.scene.add(this.footer),this.positionFooter()}positionFooter(){const e=ot.getWorldPositionFromElement(this.footerHtmlTarget,this.camera,3),t=ot.pixelsToWorldOffset(0,window.innerHeight*.5,this.camera,3);this.footer.position.set(e.x-t.x,e.y+t.y,e.z)}onScroll(e){this.page&&this.page.onScroll&&this.page.onScroll(e),this.positionFooter()}update(){this.page&&this.page.update(),this.footer.rotation.x=this.isPhone?-.1:-this.experience.time.elapsed*1e-4,this.isPhone&&(this.footer.rotation.y=-this.experience.time.elapsed*1e-4)}resize(){this.page.resize&&this.page.resize(),this.positionFooter()}}function Zu(r,e){if(e===Jp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ul||e===_d){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===ul)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class TS extends Gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new HS(t)})}load(e,t,i,n){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=bl.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Hr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qf){try{a[Xe.KHR_BINARY_GLTF]=new VS(e)}catch(u){n&&n(u);return}s=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new tM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:a[u]=new AS;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[u]=new GS(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[u]=new WS;break;case Xe.KHR_MESH_QUANTIZATION:a[u]=new XS;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function ES(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wS{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Lt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Nx(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Dx(h),c.distance=u;break;case"spot":c=new Lx(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,gn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class AS{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(e,t,i){const n=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Lt),e.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,at))}return Promise.all(n)}}class RS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class CS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(o,o)}return Promise.all(s)}}class LS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class PS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Lt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,at)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class DS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class IS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(o[0],o[1],o[2],Lt),Promise.all(s)}}class NS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class OS{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(o[0],o[1],o[2],Lt),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,at)),Promise.all(s)}}class US{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class FS{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class kS{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class BS{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zS{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class HS{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==pi.TRIANGLES&&c.mode!==pi.TRIANGLE_STRIP&&c.mode!==pi.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const _ of u){const g=new Be,m=new P,p=new ki,v=new P(1,1,1),y=new Uv(_.geometry,_.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,g.compose(m,p,v));for(const x in l)if(x==="_COLOR_0"){const S=l[x];y.instanceColor=new gl(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);ht.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Qf="glTF",dr=12,Ju={JSON:1313821514,BIN:5130562};class VS{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,dr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-dr,s=new DataView(e,dr);let a=0;for(;a<n;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Ju.JSON){const c=new Uint8Array(e,dr+a,o);this.content=i.decode(c)}else if(l===Ju.BIN){const c=dr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class GS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Fl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Fl[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[e.attributes[h]],f=Us[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){n.decodeDracoFile(h,function(d){for(const f in d.attributes){const _=d.attributes[f],g=l[f];g!==void 0&&(_.normalized=g)}u(d)},o,c)})})}}class WS{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class XS{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class ep extends zr{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,_=e*c,g=_-c,m=-2*f+3*d,p=f-d,v=1-m,y=p-d+u;for(let x=0;x!==o;x++){const S=a[g+x+o],w=a[g+x+l]*h,M=a[_+x+o],R=a[_+x]*h;s[x]=v*S+y*w+m*M+p*R}return s}}const qS=new ki;class YS extends ep{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return qS.fromArray(s).normalize().toArray(s),s}}const pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qu={9728:Ct,9729:Mt,9984:hl,9985:hd,9986:Ra,9987:wn},ed={33071:Yt,33648:Na,10497:Bs},tl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$S={CUBICSPLINE:void 0,LINEAR:Hs,STEP:Er},il={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new nc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),r.DefaultMaterial}function zn(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function gn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KS(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function ZS(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JS(r){let e;const t=r.extensions&&r.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nl(t.attributes):e=r.indices+":"+nl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+nl(r.targets[i]);return e}function nl(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function kl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const eM=new Be;class tM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ES,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new Jd(this.options.manager):this.textureLoader=new Ox(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return zn(s,o,n),gn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,a){i.load(bl.resolveURL(t.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=tl[n.type],o=Us[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new qt(c,a,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=tl[n.type],c=Us[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,_=n.normalized===!0;let g,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let y=t.cache.get(v);y||(g=new c(o,p*f,n.count*f/h),y=new Pv(g,f/h),t.cache.add(v,y)),m=new jl(y,l,d%f/h,_)}else o===null?g=new c(n.count*l):g=new c(o,d,n.count*l),m=new qt(g,l,_);if(n.sparse!==void 0){const p=tl.SCALAR,v=Us[n.sparse.indices.componentType],y=n.sparse.indices.byteOffset||0,x=n.sparse.values.byteOffset||0,S=new v(a[1],y,n.sparse.count*p),w=new c(a[2],x,n.sparse.count*l);o!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized));for(let M=0,R=S.length;M<R;M++){const b=S[M];if(m.setX(b,w[M*l]),l>=2&&m.setY(b,w[M*l+1]),l>=3&&m.setZ(b,w[M*l+2]),l>=4&&m.setW(b,w[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const n=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Qu[d.magFilter]||Mt,h.minFilter=Qu[d.minFilter]||wn,h.wrapS=ed[d.wrapS]||Bs,h.wrapT=ed[d.wrapT]||Bs,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Dt(g);m.needsUpdate=!0,d(m)}),t.load(bl.resolveURL(u,s.path),_,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||QS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new zd,Ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Bd,Ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return nc}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const u=n[Xe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Lt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,at)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Di);const h=s.alphaMode||il.OPAQUE;if(h===il.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===il.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==qn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==qn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==qn){const u=s.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],Lt)}return s.emissiveTexture!==void 0&&a!==qn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,at)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),gn(u,s),t.associations.set(u,{materials:e}),s.extensions&&zn(n,u,s),u})}createUniqueName(e){const t=je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return td(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=JS(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=td(new Ri,c,t),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?jS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,_=h.length;f<_;f++){const g=h[f],m=a[f];let p;const v=c[f];if(m.mode===pi.TRIANGLES||m.mode===pi.TRIANGLE_STRIP||m.mode===pi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Iv(g,v):new Xt(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===pi.TRIANGLE_STRIP?p.geometry=Zu(p.geometry,_d):m.mode===pi.TRIANGLE_FAN&&(p.geometry=Zu(p.geometry,ul));else if(m.mode===pi.LINES)p=new Fv(g,v);else if(m.mode===pi.LINE_STRIP)p=new Zl(g,v);else if(m.mode===pi.LINE_LOOP)p=new kv(g,v);else if(m.mode===pi.POINTS)p=new Bv(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ZS(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),gn(p,s),m.extensions&&zn(n,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,_=u.length;f<_;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&zn(n,u[0],s),u[0];const d=new ri;s.extensions&&zn(n,d,s),t.associations.set(d,{meshes:e});for(let f=0,_=u.length;f<_;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gt(Wn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Yl(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),gn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Be;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Kl(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const f=n.channels[u],_=n.samplers[f.sampler],g=f.target,m=g.node,p=n.parameters!==void 0?n.parameters[_.input]:_.input,v=n.parameters!==void 0?n.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(_),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],_=u[2],g=u[3],m=u[4],p=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],S=f[v],w=_[v],M=g[v],R=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const b=i._createAnimationTracks(x,S,w,M,R);if(b)for(let E=0;E<b.length;E++)p.push(b[E])}return new Sx(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,eM)});for(let f=0,_=u.length;f<_;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Fd:c.length>1?h=new ri:c.length===1?h=c[0]:h=new ht,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),gn(h,s),s.extensions&&zn(i,h,s),s.matrix!==void 0){const u=new Be;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new ri;i.name&&(s.name=n.createUniqueName(i.name)),gn(s,i),i.extensions&&zn(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof Ui||d instanceof Dt)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){const a=[],o=e.name?e.name:e.uuid,l=[];fn[s.path]===fn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(fn[s.path]){case fn.weights:c=Ws;break;case fn.rotation:c=ns;break;case fn.position:case fn.scale:c=Xs;break;default:switch(i.itemSize){case 1:c=Ws;break;case 2:case 3:default:c=Xs;break}break}const h=n.interpolation!==void 0?$S[n.interpolation]:Hs,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+fn[s.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=kl(t.constructor),n=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof ns?YS:ep;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iM(r,e,t){const i=e.attributes,n=new on;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const h=kl(Us[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,l=new P;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=kl(Us[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;const a=new zi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function td(r,e,t){const i=e.attributes,n=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in i){const o=Fl[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(a)}return $e.workingColorSpace!==Lt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),gn(r,e),iM(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?KS(r,e.targets,t):r})}class nM extends Gi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new Hr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=s.parse(JSON.parse(o));t&&t(l)},i,n)}parse(e){return new sM(e)}}class sM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],n=rM(e,t,this.data);for(let s=0,a=n.length;s<a;s++)i.push(...n[s].toShapes());return i}}function rM(r,e,t){const i=Array.from(r),n=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*n,a=[];let o=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)o=0,l-=s;else{const u=aM(h,n,o,l,t);o+=u.offsetX,a.push(u.path)}}return a}function aM(r,e,t,i,n){const s=n.glyphs[r]||n.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+n.familyName+".");return}const a=new Yx;let o,l,c,h,u,d,f,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":o=g[m++]*e+t,l=g[m++]*e+i,a.moveTo(o,l);break;case"l":o=g[m++]*e+t,l=g[m++]*e+i,a.lineTo(o,l);break;case"q":c=g[m++]*e+t,h=g[m++]*e+i,u=g[m++]*e+t,d=g[m++]*e+i,a.quadraticCurveTo(u,d,c,h);break;case"b":c=g[m++]*e+t,h=g[m++]*e+i,u=g[m++]*e+t,d=g[m++]*e+i,f=g[m++]*e+t,_=g[m++]*e+i,a.bezierCurveTo(u,d,f,_,c,h);break}}return{offsetX:s.ha*e,path:a}}class oM extends Rx{constructor(e){super(e),this.type=tn}parse(e){const a=function(R,b){switch(R){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(b||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(b||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(b||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(b||""))}},h=`
`,u=function(R,b,E){b=b||1024;let k=R.pos,X=-1,L=0,U="",B=String.fromCharCode.apply(null,new Uint16Array(R.subarray(k,k+128)));for(;0>(X=B.indexOf(h))&&L<b&&k<R.byteLength;)U+=B,L+=B.length,k+=128,B+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(k,k+128)));return-1<X?(E!==!1&&(R.pos+=L+X+1),U+B.slice(0,X)):!1},d=function(R){const b=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,k=/^\s*FORMAT=(\S+)\s*$/,X=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let U,B;for((R.pos>=R.byteLength||!(U=u(R)))&&a(1,"no header found"),(B=U.match(b))||a(3,"bad initial token"),L.valid|=1,L.programtype=B[1],L.string+=U+`
`;U=u(R),U!==!1;){if(L.string+=U+`
`,U.charAt(0)==="#"){L.comments+=U+`
`;continue}if((B=U.match(E))&&(L.gamma=parseFloat(B[1])),(B=U.match(O))&&(L.exposure=parseFloat(B[1])),(B=U.match(k))&&(L.valid|=2,L.format=B[1]),(B=U.match(X))&&(L.valid|=4,L.height=parseInt(B[1],10),L.width=parseInt(B[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||a(3,"missing format specifier"),L.valid&4||a(3,"missing image size specifier"),L},f=function(R,b,E){const O=b;if(O<8||O>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);O!==(R[2]<<8|R[3])&&a(3,"wrong scanline width");const k=new Uint8Array(4*b*E);k.length||a(4,"unable to allocate buffer space");let X=0,L=0;const U=4*O,B=new Uint8Array(4),G=new Uint8Array(U);let J=E;for(;J>0&&L<R.byteLength;){L+4>R.byteLength&&a(1),B[0]=R[L++],B[1]=R[L++],B[2]=R[L++],B[3]=R[L++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=O)&&a(3,"bad rgbe scanline format");let K=0,j;for(;K<U&&L<R.byteLength;){j=R[L++];const z=j>128;if(z&&(j-=128),(j===0||K+j>U)&&a(3,"bad scanline data"),z){const re=R[L++];for(let oe=0;oe<j;oe++)G[K++]=re}else G.set(R.subarray(L,L+j),K),K+=j,L+=j}const N=O;for(let z=0;z<N;z++){let re=0;k[X]=G[z+re],re+=O,k[X+1]=G[z+re],re+=O,k[X+2]=G[z+re],re+=O,k[X+3]=G[z+re],X+=4}J--}return k},_=function(R,b,E,O){const k=R[b+3],X=Math.pow(2,k-128)/255;E[O+0]=R[b+0]*X,E[O+1]=R[b+1]*X,E[O+2]=R[b+2]*X,E[O+3]=1},g=function(R,b,E,O){const k=R[b+3],X=Math.pow(2,k-128)/255;E[O+0]=na.toHalfFloat(Math.min(R[b+0]*X,65504)),E[O+1]=na.toHalfFloat(Math.min(R[b+1]*X,65504)),E[O+2]=na.toHalfFloat(Math.min(R[b+2]*X,65504)),E[O+3]=na.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),v=p.width,y=p.height,x=f(m.subarray(m.pos),v,y);let S,w,M;switch(this.type){case _i:M=x.length/4;const R=new Float32Array(M*4);for(let E=0;E<M;E++)_(x,E*4,R,E*4);S=R,w=_i;break;case tn:M=x.length/4;const b=new Uint16Array(M*4);for(let E=0;E<M;E++)g(x,E*4,b,E*4);S=b,w=tn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:y,data:S,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,i,n){function s(a,o){switch(a.type){case _i:case tn:a.colorSpace=Lt,a.minFilter=Mt,a.magFilter=Mt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,i,n)}}class lM extends Vr{constructor(e){super(),this.progressRatio=0,this.loadingManager=new Kd(t=>{},(t,i,n)=>{const s=i/n;this.progressRatio=s},t=>{}),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new TS(this.loadingManager),this.loaders.textureLoader=new Jd(this.loadingManager),this.loaders.cubeTextureLoader=new Ax(this.loadingManager),this.loaders.audioLoader=new Fx(this.loadingManager),this.loaders.fontLoader=new nM(this.loadingManager),this.loaders.rgbeLoader=new oM(this.loadingManager)}startLoading(){this.sources.forEach(e=>{e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"?this.loaders.cubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="audio"?this.loaders.audioLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="font"?this.loaders.fontLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="rgbe"&&this.loaders.rgbeLoader.load(e.path,t=>{this.sourceLoaded(e,t)})})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Fi{constructor(e,t,i,n,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),Fi.nextNameID=Fi.nextNameID||0,this.$name.id=`lil-gui-name-${++Fi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class cM extends Fi{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Bl(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const hM={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Bl,toHexString:Bl},Fr={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},uM={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const i=Fr.fromHexString(r);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([r,e,t],i=1){i=255/i;const n=r*i<<16^e*i<<8^t*i<<0;return Fr.toHexString(n)}},dM={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const i=Fr.fromHexString(r);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r,g:e,b:t},i=1){i=255/i;const n=r*i<<16^e*i<<8^t*i<<0;return Fr.toHexString(n)}},fM=[hM,Fr,uM,dM];function pM(r){return fM.find(e=>e.match(r))}class mM extends Fi{constructor(e,t,i,n){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=pM(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Bl(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class sl extends Fi{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class gM extends Fi{constructor(e,t,i,n,s,a){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+v),this.$input.value=this.getValue())},n=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))};let a=!1,o,l,c,h,u;const d=5,f=v=>{o=v.clientX,l=c=v.clientY,a=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=v=>{if(a){const y=v.clientX-o,x=v.clientY-l;Math.abs(x)>d?(v.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&g()}if(!a){const y=v.clientY-c;u-=y*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,v,y,x,S)=>(p-v)/(y-v)*(S-x)+x,t=p=>{const v=this.$slider.getBoundingClientRect();let y=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(y)},i=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",s)},n=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),a=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,l=p.touches[0].clientY,a=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(a){const v=p.touches[0].clientX-o,y=p.touches[0].clientY-l;Math.abs(v)>Math.abs(y)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),_=400;let g;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const y=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class _M extends Fi{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class yM extends Fi{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const vM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function xM(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let id=!1;class Ac{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!id&&o&&(xM(vM),id=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=a}add(e,t,i,n,s){if(Object(i)===i)return new _M(this,e,t,i);const a=e[t];switch(typeof a){case"number":return new gM(this,e,t,i,n,s);case"boolean":return new cM(this,e,t);case"string":return new yM(this,e,t);case"function":return new sl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,i=1){return new mM(this,e,t,i)}addFolder(e){const t=new Ac({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof sl||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof sl)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class bM{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new Ac)}}const SM=[{name:"bars",type:"gltfModel",path:"/models/bars.glb"},{name:"footer",type:"gltfModel",path:"/models/footer.glb"},{name:"logo",type:"gltfModel",path:"/models/logo.glb"},{name:"brit_logo",type:"gltfModel",path:"/models/brit_logo.glb"},{name:"tube",type:"gltfModel",path:"/models/tube.glb"},{name:"balls",type:"texture",path:"/images/balls.png"}];class MM{constructor(){this.experience=new ut,this.isPhone=this.experience.isPhone,this.angles=[document.querySelector(".loader-tl"),document.querySelector(".loader-tr"),document.querySelector(".loader-bl"),document.querySelector(".loader-br")],this.crosses=[this.angles[0].querySelector(".loaderCross"),this.angles[1].querySelector(".loaderCross"),this.angles[2].querySelector(".loaderCross"),this.angles[3].querySelector(".loaderCross")],this.loader33=[this.angles[0].querySelector(".loader33"),this.angles[1].querySelector(".loader33"),this.angles[2].querySelector(".loader33"),this.angles[3].querySelector(".loader33")],this.loader66=[this.angles[0].querySelector(".loader66"),this.angles[1].querySelector(".loader66"),this.angles[2].querySelector(".loader66"),this.angles[3].querySelector(".loader66")],this.loader99=[this.angles[0].querySelector(".loader99"),this.angles[1].querySelector(".loader99"),this.angles[2].querySelector(".loader99"),this.angles[3].querySelector(".loader99")],this.loaders=[this.loader33,this.loader66,this.loader99],this.steps={0:"33",1:"66",2:"99"},this.loaders.forEach(e=>{e.forEach(t=>{ot.spanify(t),t.style.transform="translate(0, 0)",t.querySelectorAll("span span").forEach(i=>{i.style.transform="translate(100%, 0)"})})}),this.setNumbersAnimation(),this.crosses.forEach(e=>{e.style.transform="translate(100%, 0)"})}rotate(){this.angles.forEach(e=>{e.style.transition="none",e.style.transform="translate(0,0) rotate(0deg)"}),this.angles.offsetWidth,this.angles.forEach(e=>{e.style.transition="transform 1s var(--ease) 0.5s"}),this.angles[0].style.transform=this.isPhone?"translate(0, 50vw) rotate(-360deg)":"translate(0, 50vh) rotate(-360deg) ",this.angles[1].style.transform=this.isPhone?"translate(0, 50vw) rotate(360deg)":"translate(0, 50vh) rotate(360deg) ",this.angles[2].style.transform=this.isPhone?"translate(0, -50vw) rotate(360deg)":"translate(0, -50vh) rotate(-360deg) ",this.angles[3].style.transform=this.isPhone?"translate(0, -50vw) rotate(-360deg)":"translate(0, -50vh) rotate(360deg) "}appear(e,t=0){e.forEach((i,n)=>{const s=n%2===0;i.querySelectorAll("span span").forEach((o,l)=>{o.style.transition="none",o.style.transform=`translate(${s?-100:100}%, 0)`,o.offsetWidth,o.style.transition=`transform 0.8s var(--ease) ${t}s`,o.style.transform=`translate(${s?-0:0}, 0)`})})}disappear(e,t=0){e.forEach((i,n)=>{const s=n%2===0;i.querySelectorAll("span span").forEach((o,l)=>{o.style.transition="none",o.style.transform="translate(0%, 0)",o.offsetWidth,o.style.transition=`transform 0.8s var(--ease) ${t}s`,o.style.transform=`translate(${s?100:-100}%, 0)`})})}crossesAppear(){this.angles.forEach(e=>{e.style.transition="none",e.style.transform="translate(0,0) rotate(0deg)"}),this.angles.offsetWidth,this.crosses.forEach((e,t)=>{const i=t%2===0;e.style.transition="none",e.style.transform=`translate(${i?-100:100}%, 0)`,e.offsetWidth,e.style.transition="transform 0.8s var(--ease) 0.5s",e.style.transform="translate(0, 0)"})}setNumbersAnimation(){this.appear(this.loader33,.3),setTimeout(()=>{this.disappear(this.loader33),this.appear(this.loader66,.3)},1100),setTimeout(()=>{this.disappear(this.loader66),this.appear(this.loader99,.3)},2200)}}class TM extends Vr{constructor(){super(),this.experience=new ut,this.instance=document.querySelector(".loader"),this.top=this.instance.querySelector(".loader-top"),this.bottom=this.instance.querySelector(".loader-bottom"),this.isPhone=this.experience.isPhone,this.domReady=!1,this.texturesReady=!1,this.dataReady=!1,this.minDuration=3100,this.startTime=Date.now(),this.topLogo=this.instance.querySelector(".loader-topLogo"),this.bottomLogo=this.instance.querySelector(".loader-bottomLogo"),this.topLogoText=this.topLogo.querySelector(".loader-text"),this.bottomLogoText=this.bottomLogo.querySelector(".loader-text"),this.angles=new MM,this.setLoading(),this.waitForReady()}disable(){this.trigger("loaded"),this.instance.style.display="none"}setLoading(){this.instance.style.transition="none",this.top.style.transition="none",this.bottom.style.transition="none",this.instance.offsetWidth,this.top.style.height=this.isPhone?"50vw":"50%",this.bottom.style.height=this.isPhone?"50vw":"50%",this.topLogoText.style.transform="translateY(0%)",this.bottomLogoText.style.transform="translateY(0%)"}onDataLoaded(){this.dataReady=!0,this.checkReady()}onTexturesLoaded(){this.texturesReady=!0,this.checkReady()}waitForReady(){document.readyState==="complete"?(this.domReady=!0,this.checkReady()):window.addEventListener("load",()=>{this.domReady=!0,this.checkReady()})}checkReady(){if(!this.experience.world&&this.domReady&&this.texturesReady&&this.dataReady){const e=Date.now()-this.startTime,t=this.minDuration-e;t>0?setTimeout(()=>{this.trigger("loaded"),this.angles.disappear(this.angles.loader99),this.angles.crossesAppear(),setTimeout(()=>{this.closeLoader(),this.angles.rotate()},1e3)},t):(this.trigger("loaded"),this.angles.disappear(this.angles.loader99),this.angles.crossesAppear(),setTimeout(()=>{this.closeLoader(),this.angles.rotate()},1e3))}}closeLoader(){this.experience.lenis.scrollTo(0,{immediate:!0}),this.top.style.transition="transform 1s var(--ease) 0.5s",this.top.style.transform="translateY(-100%)",this.bottom.style.transition="transform 1s var(--ease) 0.5s",this.bottom.style.transform="translateY(100%)",this.instance.style.pointerEvents="none",this.instance.style.transition="none",this.instance.style.backdropFilter="brightness(0)",this.instance.offsetWidth,this.instance.style.transition="backdrop-filter 1s var(--ease) 0.7s",this.instance.style.backdropFilter="brightness(1)",this.topLogo.style.transition="transform 1s var(--ease) 0.5s",this.bottomLogo.style.transition="transform 1s var(--ease) 0.5s",this.topLogo.style.transform="translate(-50%, 15vh)",this.bottomLogo.style.transform="translate(-50%, -15vh)",document.querySelector(".main").style.opacity="1",document.querySelector(".footer").style.opacity="1"}transition(){this.domReady=!1,this.dataReady=!1,this.top.style.height="0%",this.bottom.style.height="0%",this.top.offsetWidth,this.top.style.transition="height 1s var(--ease)",this.bottom.style.transition="height 1s var(--ease)",this.top.style.transform="translateY(0%)",this.bottom.style.transform="translateY(0%)",this.top.style.height="50%",this.bottom.style.height="50%",this.topLogoText.style.transition="none",this.bottomLogoText.style.transition="none",this.topLogoText.style.transform="translateY(110%)",this.bottomLogoText.style.transform="translateY(-110%)",this.topLogo.style.transition="none",this.bottomLogo.style.transition="none",this.topLogo.style.transform="translate(-50%, 0)",this.bottomLogo.style.transform="translate(-50%, 0)",this.instance.style.pointerEvents="all",this.instance.style.transition="none",this.instance.style.backdropFilter="brightness(1)",this.instance.offsetWidth,this.instance.style.transition="backdrop-filter 1s var(--ease)",this.instance.style.backdropFilter="brightness(0)",this.topLogoText.style.transition="transform 1s var(--ease) 0.5s",this.bottomLogoText.style.transition="transform 1s var(--ease) 0.5s",this.topLogoText.style.transform="translateY(0%)",this.bottomLogoText.style.transform="translateY(0%)",this.angles.crossesAppear(),setTimeout(()=>{this.closeLoader(),this.angles.rotate()},1500)}}var EM=`varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vPos;

void main()\r
{\r
    
    vec4 modelPosition = modelMatrix *  vec4(position, 1.0);\r
    gl_Position = projectionMatrix * viewMatrix * modelPosition;\r
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);\r
    vNormal = modelNormal.xyz;\r
    vPos = modelPosition.xyz;\r
    vUv = uv;\r
}`,wM=`varying vec2 vUv; 
varying vec3 vNormal;
varying vec3 vPos;

uniform float u_alpha;
uniform sampler2D u_texture;
uniform bool u_useTexture;

vec3 ambientLight(vec3 lightColor, float lightIntensity){\r
    return lightColor * lightIntensity;\r
}
vec3 directionalLight(vec3 lightColor, float lightIntensity, vec3 normal,  vec3 lightPosition, vec3 viewDirection, float specularPower){

    vec3 lightDirection = normalize(lightPosition);\r
    normal = normalize(normal);\r
    float shading = dot(normal, lightDirection );\r
    shading = clamp(shading, 0.0, 1.0);\r
    vec3 lightReflection = reflect(-lightDirection, normal);\r
    float specular = dot(lightReflection, viewDirection);\r
    specular = clamp(specular, 0.0, 1.0);\r
    specular = pow(specular, specularPower);

    return  (lightColor * lightIntensity ) *(specular +shading)  ;

}
vec3 pointLight(vec3 lightColor, float lightIntensity, vec3 normal,  vec3 lightPosition, vec3 viewDirection, float specularPower, vec3 position, float lightDecay){

    vec3 lightDelta = lightPosition - position;\r
    float lightDistance = length(lightDelta);\r
    vec3 lightDirection = normalize(lightDelta);\r
    normal = normalize(normal);\r
  \r
    float shading = dot(normal, lightDirection );\r
    shading = clamp(shading, 0.0, 1.0);\r
    vec3 lightReflection = reflect(-lightDirection, normal);\r
    float specular = dot(lightReflection, viewDirection);\r
    specular = clamp(specular, 0.0, 1.0);\r
    specular = pow(specular, specularPower);

    float decay = 1.0 - lightDistance*lightDecay;\r
    decay = clamp(decay, 0.0, 1.0);

    return  (lightColor * lightIntensity * decay ) *(specular +shading )  ;\r
    

}

void main()
{
    vec3 baseCol = vec3(0.682, 0.718, 0.518); 
    vec3 darkCol = vec3(0.255, 0.263, 0.106); 
    if(u_useTexture){
        baseCol = mix(baseCol, darkCol, 1.-texture2D(u_texture, vec2(vUv.x, vUv.y)).g);
    }

        vec3 viewDir = normalize(cameraPosition - vPos);
        
    vec3 light = vec3(0.0);
     light += ambientLight(vec3(1.0), 0.1); 
   light +=  pointLight(
        vec3(1., 1., 1.),       
        1.0,                       
        vNormal,                   
        vec3(0.0, -0.5, 0.5),        
        viewDir,                   
        2.0,                     
        vPos,                      
        0.25                       
    );  
        baseCol *= light;

    gl_FragColor = vec4(baseCol, u_alpha);
}`;const AM=[{id:"aLDZ1hAAACQA6lVj",uid:"fisher",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T22:43:01+0000",last_publication_date:"2025-08-28T22:43:01+0000",slugs:["fisher"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"quizes",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"memorization flashcards",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/fisher/1.avif",id:"aLDa2WGNHVfTObMu",edit:{x:173,y:0,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/fisher/2.avif",id:"aLDa12GNHVfTObMt",edit:{x:0,y:266,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/fisher/3.avif",id:"aLDa1mGNHVfTObMs",edit:{x:0,y:12,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2023",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"ad3f85ae",kind:"file",id:"aLDa2mGNHVfTObMv",url:"/images/articles/fisher/1.avif",name:"fisher-video.mp4",size:"850028"},article_media_size:"left"},{link_to_media:{link_type:"Media",key:"ad3f85ae",kind:"file",id:"aLDa2mGNHVfTObMv",url:"/images/articles/fisher/2.avif",name:"autre",size:"850028"},article_media_size:"full"},{link_to_media:{link_type:"Media",key:"ad3f85ae",kind:"file",id:"aLDa2mGNHVfTObMv",url:"/images/articles/fisher/3.avif",name:"autre",size:"850028"},article_media_size:"full"}]}},{id:"aLDXbBAAACMA6lG2",uid:"hakkasan",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T22:25:54+0000",last_publication_date:"2025-08-28T22:28:49+0000",slugs:["hakkasan"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"history",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/hak/1.avif",id:"aLDWoWGNHVfTObMJ",edit:{x:69,y:0,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/hak/2.avif",id:"aLDWomGNHVfTObMK",edit:{x:90,y:0,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/hak/3.avif",id:"aLDWo2GNHVfTObML",edit:{x:0,y:19,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2022",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"e9c5d47b",kind:"file",id:"aLDWoGGNHVfTObMH",url:"/images/articles/hak/1.avif",name:"hakkasan.mp4",size:"772890"},article_media_size:"full"},{link_to_media:{link_type:"Media",key:"8b264f54",kind:"file",id:"aLDWoGGNHVfTObMI",url:"/images/articles/hak/2.avif",name:"hakkasan2.mp4",size:"616667"},article_media_size:"left"},{link_to_media:{link_type:"Media",key:"75ef10f9",kind:"image",id:"aLDWoWGNHVfTObMJ",url:"/images/articles/hak/3.avif",name:"hakkasan-th2.png",size:"301303",width:"1315",height:"728"},article_media_size:"full"}]}},{id:"aLDe1xAAACQA6lzX",uid:"ilan-bluestone",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T22:57:31+0000",last_publication_date:"2025-08-28T22:57:31+0000",slugs:["ilan-bluestone"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"ai chatbot",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"definitely not AI slop",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/blue/1.webp",id:"aLDeFGGNHVfTObNL",edit:{x:0,y:79,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/blue/2.webp",id:"aLDeFmGNHVfTObNN",edit:{x:0,y:240,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/blue/3.webp",id:"aLDeFWGNHVfTObNM",edit:{x:0,y:296,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2024",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"701abe11",kind:"image",id:"aLDeFGGNHVfTObNK",url:"/images/articles/blue/1.webp",name:"jpg",size:"1249980"},article_media_size:"left"},{link_to_media:{link_type:"Media",key:"f84e1756",kind:"image",id:"aLDeEmGNHVfTObNI",url:"/images/articles/blue/2.webp",name:"jpg",size:"811635"},article_media_size:"left"},{link_to_media:{link_type:"Media",key:"b955259c",kind:"image",id:"aLDeFGGNHVfTObNL",url:"/images/articles/blue/3.webp",name:"bluestone-th1.jpg",size:"103552",width:"1200",height:"900"},article_media_size:"full"}]}},{id:"aLDgBRAAACQA6l35",uid:"nelly",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T23:04:42+0000",last_publication_date:"2025-08-28T23:04:42+0000",slugs:["nelly"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"W.I.P",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"more subjects to come",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/nelly/1.avif",id:"aLDgI2GNHVfTObNt",edit:{x:0,y:66,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/nelly/2.avif",id:"aLDgJGGNHVfTObNu",edit:{x:0,y:259,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/nelly/3.avif",id:"aLDgImGNHVfTObNs",edit:{x:0,y:66,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"More subjects coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2025",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"7adb35fb",kind:"image",id:"aLDgI2GNHVfTObNt",url:"/images/articles/nelly/3.avif",name:"nelly-th2.jpg",size:"131611",width:"1000",height:"750"},article_media_size:"full"},{link_to_media:{link_type:"Media",key:"722f17aa",kind:"image",id:"aLDgImGNHVfTObNs",url:"/images/articles/nelly/2.avif",name:"nelly-th1.jpg",size:"101357",width:"1000",height:"750"},article_media_size:"full"}]}},{id:"aLDZ1hAAACQA6lVj",uid:"fisher_bis",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T22:43:01+0000",last_publication_date:"2025-08-28T22:43:01+0000",slugs:["fisher"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"chemistry",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/fisher/1.avif",id:"aLDa2WGNHVfTObMu",edit:{x:173,y:0,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/fisher/2.avif",id:"aLDa12GNHVfTObMt",edit:{x:0,y:266,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/fisher/3.avif",id:"aLDa1mGNHVfTObMs",edit:{x:0,y:12,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2023",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"ad3f85ae",kind:"file",id:"aLDa2mGNHVfTObMv",url:"/images/articles/fisher/1.avif",name:"fisher-video.mp4",size:"850028"},article_media_size:"left"}]}},{id:"aLDXbBAAACMA6lG2",uid:"hakkasan_bis",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T22:25:54+0000",last_publication_date:"2025-08-28T22:28:49+0000",slugs:["hakkasan"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"english",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/hak/1.avif",id:"aLDWoWGNHVfTObMJ",edit:{x:69,y:0,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/hak/2.avif",id:"aLDWomGNHVfTObMK",edit:{x:90,y:0,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/hak/3.avif",id:"aLDWo2GNHVfTObML",edit:{x:0,y:19,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2022",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"e9c5d47b",kind:"file",id:"aLDWoGGNHVfTObMH",url:"/images/articles/hak/1.avif",name:"hakkasan.mp4",size:"772890"},article_media_size:"full"}]}},{id:"aLDe1xAAACQA6lzX",uid:"ilan-bluestone_bis",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T22:57:31+0000",last_publication_date:"2025-08-28T22:57:31+0000",slugs:["ilan-bluestone"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"physics",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/blue/1.webp",id:"aLDeFGGNHVfTObNL",edit:{x:0,y:79,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/blue/2.webp",id:"aLDeFmGNHVfTObNN",edit:{x:0,y:240,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/blue/3.webp",id:"aLDeFWGNHVfTObNM",edit:{x:0,y:296,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2024",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"701abe11",kind:"image",id:"aLDeFGGNHVfTObNK",url:"/images/articles/blue/1.webp",name:"jpg",size:"1249980"},article_media_size:"left"}]}},{id:"aLDgBRAAACQA6l35",uid:"nelly_bis",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T23:04:42+0000",last_publication_date:"2025-08-28T23:04:42+0000",slugs:["nelly"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"biology",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/nelly/1.avif",id:"aLDgI2GNHVfTObNt",edit:{x:0,y:66,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/nelly/2.avif",id:"aLDgJGGNHVfTObNu",edit:{x:0,y:259,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/nelly/3.avif",id:"aLDgImGNHVfTObNs",edit:{x:0,y:66,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2025",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"7adb35fb",kind:"image",id:"aLDgI2GNHVfTObNt",url:"/images/articles/nelly/3.avif",name:"nelly-th2.jpg",size:"131611",width:"1000",height:"750"},article_media_size:"full"}]}},{id:"aLDZ1hAAACQA6lVj",uid:"fisher_ter",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T22:43:01+0000",last_publication_date:"2025-08-28T22:43:01+0000",slugs:["fisher"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"mandarin",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/fisher/1.avif",id:"aLDa2WGNHVfTObMu",edit:{x:173,y:0,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/fisher/2.avif",id:"aLDa12GNHVfTObMt",edit:{x:0,y:266,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/fisher/3.avif",id:"aLDa1mGNHVfTObMs",edit:{x:0,y:12,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2023",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"ad3f85ae",kind:"file",id:"aLDa2mGNHVfTObMv",url:"/images/articles/fisher/1.avif",name:"fisher-video.mp4",size:"850028"},article_media_size:"left"}]}},{id:"aLDXbBAAACMA6lG2",uid:"hakkasan_ter",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T22:25:54+0000",last_publication_date:"2025-08-28T22:28:49+0000",slugs:["hakkasan"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"french",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/hak/1.avif",id:"aLDWoWGNHVfTObMJ",edit:{x:69,y:0,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/hak/2.avif",id:"aLDWomGNHVfTObMK",edit:{x:90,y:0,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/hak/3.avif",id:"aLDWo2GNHVfTObML",edit:{x:0,y:19,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2022",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"e9c5d47b",kind:"file",id:"aLDWoGGNHVfTObMH",url:"/images/articles/hak/1.avif",name:"hakkasan.mp4",size:"772890"},article_media_size:"full"}]}},{id:"aLDe1xAAACQA6lzX",uid:"ilan-bluestone_ter",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T22:57:31+0000",last_publication_date:"2025-08-28T22:57:31+0000",slugs:["ilan-bluestone"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"tok",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/blue/1.webp",id:"aLDeFGGNHVfTObNL",edit:{x:0,y:79,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/blue/2.webp",id:"aLDeFmGNHVfTObNN",edit:{x:0,y:240,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/blue/3.webp",id:"aLDeFWGNHVfTObNM",edit:{x:0,y:296,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2024",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"701abe11",kind:"image",id:"aLDeFGGNHVfTObNK",url:"/images/articles/blue/1.webp",name:"jpg",size:"1249980"},article_media_size:"left"}]}},{id:"aLDgBRAAACQA6l35",uid:"nelly_ter",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T23:04:42+0000",last_publication_date:"2025-08-28T23:04:42+0000",slugs:["nelly"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"art",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/nelly/1.avif",id:"aLDgI2GNHVfTObNt",edit:{x:0,y:66,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/nelly/2.avif",id:"aLDgJGGNHVfTObNu",edit:{x:0,y:259,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/nelly/3.avif",id:"aLDgImGNHVfTObNs",edit:{x:0,y:66,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2025",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"7adb35fb",kind:"image",id:"aLDgI2GNHVfTObNt",url:"/images/articles/nelly/3.avif",name:"nelly-th2.jpg",size:"131611",width:"1000",height:"750"},article_media_size:"full"}]}},{id:"aJ7_TxAAACkAHSIU",uid:"home",url:null,type:"home",tags:[],first_publication_date:"2025-08-15T09:35:13+0000",last_publication_date:"2025-08-28T23:05:23+0000",slugs:["home"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{home:[{type:"heading1",text:"HOME.",spans:[],direction:"ltr"}],home_hero_video:{link_type:"Media",key:"045ede6c",kind:"file",id:"aLAsNmGNHVfTOZgH",url:"/images/home/video.mp4",name:"video-horizontal.mp4",size:"3036847"},home_aboutsection_text:[{type:"paragraph",text:"blah blah blah ib shit idk",spans:[],direction:"ltr"}],cards:[{card_image:{dimensions:{width:491,height:600},alt:null,copyright:null,url:"/images/home/cards/1.webp",id:"aLDWoWGNHVfTObMJ",edit:{x:360,y:0,zoom:1,background:"transparent"}},card_article_link:{id:"aLDXbBAAACMA6lG2",type:"article",tags:[],lang:"en-us",slug:"hakkasan",first_publication_date:"2025-08-28T22:25:54+0000",last_publication_date:"2025-08-28T22:28:49+0000",uid:"hakkasan",link_type:"Document",key:"e4bcef79",isBroken:!1},card_title:[{type:"heading1",text:"history",spans:[],direction:"ltr"}],card_infos:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],card_button:"see more"},{card_image:{dimensions:{width:491,height:600},alt:null,copyright:null,url:"/images/home/cards/2.webp",id:"aLDUVWGNHVfTObL0",edit:{x:309,y:0,zoom:1,background:"transparent"}},card_article_link:{id:"aLDUFxAAACIA6kzX",type:"article",tags:[],lang:"en-us",slug:"alan-walker",first_publication_date:"2025-08-28T22:22:44+0000",last_publication_date:"2025-08-28T22:28:32+0000",uid:"alan-walker",link_type:"Document",key:"74378eab",isBroken:!1},card_title:[{type:"heading1",text:"Math",spans:[],direction:"ltr"}],card_infos:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],card_button:"TBD"},{card_image:{dimensions:{width:491,height:600},alt:null,copyright:null,url:"/images/home/cards/3.webp",id:"aLDa2WGNHVfTObMu",edit:{x:1036,y:0,zoom:1,background:"transparent"}},card_article_link:{id:"aLDZ1hAAACQA6lVj",type:"article",tags:[],lang:"en-us",slug:"fisher",first_publication_date:"2025-08-28T22:43:01+0000",last_publication_date:"2025-08-28T22:43:01+0000",uid:"fisher",link_type:"Document",key:"ec0d4902",isBroken:!1},card_title:[{type:"heading1",text:"quizes",spans:[],direction:"ltr"}],card_infos:[{type:"heading6",text:"memorization flashcards",spans:[],direction:"ltr"}],card_button:"see more"},{card_image:{dimensions:{width:491,height:600},alt:null,copyright:null,url:"/images/home/cards/4.webp",id:"aLDeFGGNHVfTObNL",edit:{x:232,y:0,zoom:1,background:"transparent"}},card_article_link:{id:"aLDe1xAAACQA6lzX",type:"article",tags:[],lang:"en-us",slug:"ilan-bluestone",first_publication_date:"2025-08-28T22:57:31+0000",last_publication_date:"2025-08-28T22:57:31+0000",uid:"ilan-bluestone",link_type:"Document",key:"11c7ea4b",isBroken:!1},card_title:[{type:"heading1",text:"ai chatbot",spans:[],direction:"ltr"}],card_infos:[{type:"heading6",text:"definitely not AI slop",spans:[],direction:"ltr"}],card_button:"TBD"},{card_image:{dimensions:{width:491,height:600},alt:null,copyright:null,url:"/images/home/cards/5.webp",id:"aLDgI2GNHVfTObNt",edit:{x:193,y:0,zoom:1,background:"transparent"}},card_article_link:{id:"aLDgBRAAACQA6l35",type:"article",tags:[],lang:"en-us",slug:"nelly",first_publication_date:"2025-08-28T23:04:42+0000",last_publication_date:"2025-08-28T23:04:42+0000",uid:"nelly",link_type:"Document",key:"d075f136",isBroken:!1},card_title:[{type:"heading1",text:"W.I.P",spans:[],direction:"ltr"}],card_infos:[{type:"heading6",text:"more subjects to come",spans:[],direction:"ltr"}],card_button:"TBD"}],main_partner_logo1:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/1.png",id:"aLA022GNHVfTOZjg",edit:{x:0,y:0,zoom:1,background:"transparent"}},main_partner_logo2:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/2.png",id:"aLDK_mGNHVfTObJR",edit:{x:0,y:0,zoom:1,background:"transparent"}},main_partner_logo3:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/3.png",id:"aLDK_WGNHVfTObJQ",edit:{x:0,y:0,zoom:1,background:"transparent"}},main_partner_logo4:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/4.png",id:"aLDK_GGNHVfTObJP",edit:{x:0,y:0,zoom:1,background:"transparent"}},main_partner_logo5:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/5.png",id:"aLDK-2GNHVfTObJO",edit:{x:0,y:0,zoom:1,background:"transparent"}},main_partner_logo6:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/6.png",id:"partner6",edit:{x:0,y:0,zoom:1,background:"transparent"}},main_partner_logo7:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/7.png",id:"partner7",edit:{x:0,y:0,zoom:1,background:"transparent"}},main_partner_logo8:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/8.png",id:"partner8",edit:{x:0,y:0,zoom:1,background:"transparent"}},main_partner_logo9:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/9.png",id:"partner9",edit:{x:0,y:0,zoom:1,background:"transparent"}}}},{id:"aLDUFxAAACIA6kzX",uid:"alan-walker",url:null,type:"article",tags:[],first_publication_date:"2025-08-28T22:22:44+0000",last_publication_date:"2025-08-28T22:28:32+0000",slugs:["alan-walker"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{article_title:[{type:"heading1",text:"Math",spans:[],direction:"ltr"}],article_label:[{type:"heading6",text:"content + practice",spans:[],direction:"ltr"}],article_main_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/alan/1.avif",id:"aLDUVWGNHVfTObL0",edit:{x:0,y:28,zoom:1,background:"transparent"}},article_second_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/alan/2.avif",id:"aLDUVWGNHVfTObL1",edit:{x:0,y:28,zoom:1,background:"transparent"}},article_third_thumbnail:{dimensions:{width:550,height:340},alt:null,copyright:null,url:"/images/articles/alan/3.avif",id:"aLDUVmGNHVfTObL2",edit:{x:0,y:29,zoom:1,background:"transparent"}},article_description:[{type:"paragraph",text:"Content coming soon.",spans:[],direction:"ltr"}],article_label_list:[{label_item:[{type:"heading6",text:"year",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"2021",spans:[],direction:"ltr"}]},{label_item:[{type:"heading6",text:"type",spans:[],direction:"ltr"}],label_value:[{type:"heading6",text:"practice",spans:[],direction:"ltr"}]}],article_gallery:[{link_to_media:{link_type:"Media",key:"26bee23b",kind:"image",id:"aLDUVWGNHVfTObL0",url:"/images/articles/alan/1.avif",name:"alan-walker.png",size:"432082",width:"1345",height:"888"},article_media_size:"full"},{link_to_media:{link_type:"Media",key:"c091c12e",kind:"image",id:"aLDUVWGNHVfTObL1",url:"/images/articles/alan/2.avif",name:"alan-walker2.png",size:"667285",width:"1345",height:"888"},article_media_size:"full"},{link_to_media:{link_type:"Media",key:"5077b47a",kind:"image",id:"aLDUVmGNHVfTObL2",url:"/images/articles/alan/3.avif",name:"alan-walker-3.png",size:"503657",width:"1345",height:"889"},article_media_size:"full"}]}},{id:"aJ7_bhAAACkAHSJb",uid:"projects",url:null,type:"projects",tags:[],first_publication_date:"2025-08-15T09:35:45+0000",last_publication_date:"2025-08-15T10:42:50+0000",slugs:["projects"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{projects:[{type:"heading1",text:"PROJECTS.",spans:[],direction:"ltr"}]}},{id:"aJ7_YhAAACkAHSI_",uid:"about",url:null,type:"about",tags:[],first_publication_date:"2025-08-15T09:35:32+0000",last_publication_date:"2025-08-28T22:05:22+0000",slugs:["about"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{about:[{type:"heading1",text:"ABOUT.",spans:[],direction:"ltr"}],about_text:[{type:"heading6",text:"We built this website with the hope that it would help future IB student at Britannia Secondary to succeed in the IB program. Since some of your teachers might be completely useless (ahem govo), you can fill their blank with the help of our resources.",spans:[],direction:"ltr"}],about_partners:[{partner_logo:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/1.png",id:"aLA022GNHVfTOZjg",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{partner_logo:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/2.png",id:"aLDK_mGNHVfTObJR",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{partner_logo:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/3.png",id:"aLDK_WGNHVfTObJQ",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{partner_logo:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/4.png",id:"aLDK_GGNHVfTObJP",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{partner_logo:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/5.png",id:"aLDK-2GNHVfTObJO",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{partner_logo:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/6.png",id:"partner6",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{partner_logo:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/7.png",id:"partner7",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{partner_logo:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/8.png",id:"partner8",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{partner_logo:{dimensions:{width:400,height:400},alt:null,copyright:null,url:"/images/home/partners/9.png",id:"partner9",edit:{x:0,y:0,zoom:1,background:"transparent"}}}],live_tools_text:[{type:"heading6",text:"Tony Liang",spans:[],direction:"ltr"}],live_tools:[{live_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/live/1.jpg",id:"aLDM42GNHVfTObJ5",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{live_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/live/2.jpg",id:"aLDRwWGNHVfTObLV",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{live_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/live/3.jpg",id:"aLDRx2GNHVfTObLb",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{live_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/live/4.jpg",id:"aLDRxGGNHVfTObLY",edit:{x:0,y:0,zoom:1,background:"transparent"}}}],real_time_tools_text:[{type:"heading6",text:"Edwin Zhou",spans:[],direction:"ltr"}],real_time_tools_images:[{real_time_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/real_time/1.jpg",id:"aLDRw2GNHVfTObLX",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{real_time_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/real_time/2.jpg",id:"aLDRyWGNHVfTObLd",edit:{x:0,y:0,zoom:1,background:"transparent"}}}],stage_tools_text:[{type:"heading6",text:"Cary Cao",spans:[],direction:"ltr"}],stage_tools_images:[{stage_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/stage/1.jpg",id:"aLDRwGGNHVfTObLU",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{stage_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/stage/2.jpg",id:"aLDRv2GNHVfTObLT",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{stage_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/stage/3.jpg",id:"aLDRwmGNHVfTObLW",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{stage_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/stage/4.jpg",id:"aLDRymGNHVfTObLe",edit:{x:0,y:0,zoom:1,background:"transparent"}}}],content_tools_text:[{type:"heading6",text:"Desmond Donnelly",spans:[],direction:"ltr"}],content_tools_images:[{content_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/content/1.jpg",id:"aLDRvmGNHVfTObLS",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{content_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/content/2.jpg",id:"aLDRvWGNHVfTObLR",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{content_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/content/3.jpg",id:"aLDRvGGNHVfTObLQ",edit:{x:0,y:0,zoom:1,background:"transparent"}}}],ai_tools_text:[{type:"heading6",text:"Alan Pham",spans:[],direction:"ltr"}],ai_tools_images:[{ai_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/ai/1.jpg",id:"aLDRyGGNHVfTObLc",edit:{x:0,y:0,zoom:1,background:"transparent"}}},{ai_tools_image:{dimensions:{width:800,height:400},alt:null,copyright:null,url:"/images/about/ai/2.jpg",id:"aLDRxmGNHVfTObLa",edit:{x:0,y:0,zoom:1,background:"transparent"}}}]}}],RM={results:AM};class CM extends Vr{constructor(){super();me(this,"route",t=>{t=t||window.event,this.prevRoute=window.location.pathname,t.preventDefault(),window.history.pushState({},"",t.currentTarget.href),this.handleLocation()});me(this,"handleLocation",async()=>{if(this.isRouting)return;this.isRouting=!0,this.path=window.location.pathname;let t=this.routes[this.path]||this.routes[404],i=null;const n=this.isArticleRoute(this.path);if(n)try{i=this.data.results.find(s=>s.uid===n),t="/pages/article.html"}catch{console.warn(`Article "${n}" introuvable.`),t=this.routes[404]}else if(this.routes[this.path]){const a={"/":"home","/about":"about","/projects":"projects"}[this.path];try{i=this.data.results.find(o=>o.type===a)||null}catch(o){console.error("Erreur data :",o),t=this.routes[404]}}try{this.html=await fetch(t).then(s=>{if(!s.ok)throw new Error("Page non trouvée");return s.text()})}catch(s){console.error("Erreur fetch HTML :",s);try{this.html=await fetch(this.routes[404]).then(a=>a.text())}catch(a){console.error("Impossible de fetch la 404",a),this.html="<h1>404</h1>"}}this.main_data=i,this.experience.loader.onDataLoaded(),this.trigger("routing"),this.isRouting=!1});this.experience=new ut,this.camera=this.experience.camera,this.canvas=this.experience.canvas,this.path=null,this.prevRoute=window.location.pathname,this.isRouting=!1,this.data=RM,this.routes={404:"/pages/404.html","/":"/pages/home.html","/about":"/pages/about.html","/projects":"/pages/projects.html"},this.articleUIDs=[],window.addEventListener("popstate",this.handleLocation),this.init()}async init(){try{const t=this.data.results.filter(i=>i.type==="article");this.articleUIDs=t.map(i=>i.uid)}catch(t){console.error("Erreur récupération des UID d'articles :",t)}this.handleLocation()}isArticleRoute(t){const i=t.match(/^\/projects\/(.+)$/);return i&&this.articleUIDs.includes(i[1])?i[1]:null}}var LM="1.3.8";function tp(r,e,t){return Math.max(r,Math.min(e,t))}function PM(r,e,t){return(1-t)*r+t*e}function DM(r,e,t,i){return PM(r,e,1-Math.exp(-t*i))}function IM(r,e){return(r%e+e)%e}var NM=class{constructor(){me(this,"isRunning",!1);me(this,"value",0);me(this,"from",0);me(this,"to",0);me(this,"currentTime",0);me(this,"lerp");me(this,"duration");me(this,"easing");me(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const i=tp(0,this.currentTime/this.duration,1);e=i>=1;const n=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=DM(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:i,easing:n,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function OM(r,e){let t;return function(...i){let n=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(n,i)},e)}}var UM=class{constructor(r,e,{autoResize:t=!0,debounce:i=250}={}){me(this,"width",0);me(this,"height",0);me(this,"scrollHeight",0);me(this,"scrollWidth",0);me(this,"debouncedResize");me(this,"wrapperResizeObserver");me(this,"contentResizeObserver");me(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});me(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});me(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=OM(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ip=class{constructor(){me(this,"events",{})}emit(r,...e){var i;let t=this.events[r]||[];for(let n=0,s=t.length;n<s;n++)(i=t[n])==null||i.call(t,...e)}on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var i;this.events[r]=(i=this.events[r])==null?void 0:i.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}},nd=100/6,pn={passive:!1},FM=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){me(this,"touchStart",{x:0,y:0});me(this,"lastDelta",{x:0,y:0});me(this,"window",{width:0,height:0});me(this,"emitter",new ip);me(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});me(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:r})});me(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});me(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:i}=r;const n=i===1?nd:i===2?this.window.width:1,s=i===1?nd:i===2?this.window.height:1;e*=n,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});me(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,pn),this.element.addEventListener("touchstart",this.onTouchStart,pn),this.element.addEventListener("touchmove",this.onTouchMove,pn),this.element.addEventListener("touchend",this.onTouchEnd,pn)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,pn),this.element.removeEventListener("touchstart",this.onTouchStart,pn),this.element.removeEventListener("touchmove",this.onTouchMove,pn),this.element.removeEventListener("touchend",this.onTouchEnd,pn)}},sd=r=>Math.min(1,1.001-Math.pow(2,-10*r)),kM=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d="vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:v=!0,autoRaf:y=!1,anchors:x=!1,autoToggle:S=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:M=!1}={}){me(this,"_isScrolling",!1);me(this,"_isStopped",!1);me(this,"_isLocked",!1);me(this,"_preventNextNativeScrollEvent",!1);me(this,"_resetVelocityTimeout",null);me(this,"__rafID",null);me(this,"isTouching");me(this,"time",0);me(this,"userData",{});me(this,"lastVelocity",0);me(this,"velocity",0);me(this,"direction",0);me(this,"options");me(this,"targetScroll");me(this,"animatedScroll");me(this,"animate",new NM);me(this,"emitter",new ip);me(this,"dimensions");me(this,"virtualScroll");me(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});me(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});me(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.internalStop():this.internalStart()}});me(this,"onClick",r=>{const t=r.composedPath().find(i=>{var n,s,a;return i instanceof HTMLAnchorElement&&(((n=i.getAttribute("href"))==null?void 0:n.startsWith("#"))||((s=i.getAttribute("href"))==null?void 0:s.startsWith("/#"))||((a=i.getAttribute("href"))==null?void 0:a.startsWith("./#")))});if(t){const i=t.getAttribute("href");if(i){const n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${i.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(i)&&(s=0),this.scrollTo(s,n)}}});me(this,"onPointerDown",r=>{r.button===1&&this.reset()});me(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:i}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const n=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const h=this.options.prevent;if(c.find(m=>{var p,v,y;return m instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(m))||((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent"))||n&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||s&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=n&&this.options.syncTouch,g=n&&i.type==="touchend";g&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});me(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});me(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=LM,(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=sd:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:f,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:v,autoRaf:y,anchors:x,autoToggle:S,allowNestedScroll:w,__experimental__naiveDimensions:M},this.dimensions=new UM(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new FM(t,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:i=!1,duration:n=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:h=!0,userData:u}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(d=r),d){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(h){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=tp(0,r,this.limit);if(r===this.targetScroll){o==null||o(this),l==null||l(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=r),typeof n=="number"&&typeof s!="function"?s=sd:typeof s=="function"&&typeof n!="number"&&(n=1),this.animate.fromTo(this.animatedScroll,r,{duration:n,easing:s,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",o==null||o(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),h&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const i=Date.now(),n=r._lenis??(r._lenis={});let s,a,o,l,c,h,u,d;const f=this.options.gestureOrientation;if(i-(n.time??0)>2e3){n.time=Date.now();const S=window.getComputedStyle(r);n.computedStyle=S;const w=S.overflowX,M=S.overflowY;if(s=["auto","overlay","scroll"].includes(w),a=["auto","overlay","scroll"].includes(M),n.hasOverflowX=s,n.hasOverflowY=a,!s&&!a||f==="vertical"&&!a||f==="horizontal"&&!s)return!1;c=r.scrollWidth,h=r.scrollHeight,u=r.clientWidth,d=r.clientHeight,o=c>u,l=h>d,n.isScrollableX=o,n.isScrollableY=l,n.scrollWidth=c,n.scrollHeight=h,n.clientWidth=u,n.clientHeight=d}else o=n.isScrollableX,l=n.isScrollableY,s=n.hasOverflowX,a=n.hasOverflowY,c=n.scrollWidth,h=n.scrollHeight,u=n.clientWidth,d=n.clientHeight;if(!s&&!a||!o&&!l||f==="vertical"&&(!a||!l)||f==="horizontal"&&(!s||!o))return!1;let _;if(f==="horizontal")_="x";else if(f==="vertical")_="y";else{const S=e!==0,w=t!==0;S&&s&&o&&(_="x"),w&&a&&l&&(_="y")}if(!_)return!1;let g,m,p,v,y;if(_==="x")g=r.scrollLeft,m=c-u,p=e,v=s,y=o;else if(_==="y")g=r.scrollTop,m=h-d,p=t,v=a,y=l;else return!1;return(p>0?g<m:g>0)&&v&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?IM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};let rl=null;class ut{constructor(e,t){if(rl)return rl;rl=this,window.experience=this,this.canvas=e,this.canvas.style.opacity=1,this.isPhone=t,"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.lenis=new kM({autoRaf:!0,wheelMultiplier:1.5}),document.querySelector(".noise-overlay").style.opacity=.3,this.loader=new TM,this.debug=new bM,this.sizes=new $x,this.time=new jx,this.scene=new Lv,this.router=new CM,this.ressources=new lM(SM),this.camera=new Jx,this.renderer=new Qx,this.pageOpen=!1,this.mouse=new he(0,0),this.ressources.on("ready",()=>{this.loader.onTexturesLoaded(),this.redMaterial=new An({transparent:!0,opacity:1,vertexShader:EM,fragmentShader:wM,uniforms:{u_alpha:new br(1),u_useTexture:new br(!1),u_texture:new br(null)}})}),this.loader.on("loaded",()=>{this.world||(this.world=new MS)}),this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()}),window.addEventListener("mousemove",i=>{this.mouse.x=i.clientX,this.mouse.y=i.clientY}),this.lenis.on("scroll",i=>{this.world&&this.world.onScroll(i)})}resize(){var e;this.camera.resize(),this.renderer.resize(),(e=this.world)==null||e.resize()}update(){var e;this.camera.update(),(e=this.world)==null||e.update(),this.renderer.update()}destroy(){this.sizes.off("resize"),this.time.off("tick"),this.router.off("routing"),this.scene.traverse(e=>{if(e.isMesh){e.geometry.dispose();for(const t in e.material){const i=e.material[t];i&&typeof i.dispose=="function"&&i.dispose()}}}),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy()}}function BM(){return window.matchMedia("(max-width: 480px)").matches}const zM=document.querySelector("canvas.webgl");new ut(zM,BM());
//# sourceMappingURL=index-7a89e2c1.js.map
