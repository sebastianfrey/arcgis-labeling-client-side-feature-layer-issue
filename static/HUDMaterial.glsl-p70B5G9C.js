import{w5 as kt,tr as Wt,ow as Yt,w6 as Xt,du as bt,br as Kt,w7 as Jt,p_ as Qt,bt as Zt,b4 as eo,iI as to,vo as oo,vp as io,vq as no,b9 as yt,f9 as so,w8 as ao,w9 as ro,wa as lo,fN as W,bC as oe,bE as L,jL as co,gp as ie,gu as re,b3 as F,b6 as et,b5 as Pt,gn as G,go as q,bB as Ye,bH as N,kF as Xe,q0 as uo,d6 as po,j9 as fo,m0 as ho,i0 as Ke,aJ as R,aL as go,_ as vo,ke as tt,jw as ot,j3 as $t,b8 as St,fO as be,gq as zt,eF as mo,h7 as xo,j4 as wo,jW as bo,bI as yo,i$ as Ve,bF as Ot,l$ as Ct,gm as it}from"./index-C_bK48d2.js";import{u as Po}from"./meshVertexSpaceUtils-CDdm4woH.js";import{t as Je}from"./projectVectorToVector-IRvjF_FZ.js";import{o as $o,x as So}from"./hydratedFeatures-dJZG-d3P.js";import{r as B,n as Y,t as nt}from"./vec3f32-WCVSSNPR.js";import{aD as zo,n as X,m as K,aE as st,aF as At,D as Oo,aw as Co,ap as Qe,r as Be,a5 as Me,aG as Ao,ae as Mo,aH as Mt,aI as Dt,as as Do,J as Vo,ao as Vt,i as jo,aJ as To,G as Fo,H as _o,L as Ro,ak as at,K as Fe,b as rt,aK as Eo,a1 as te,ah as Uo,j as Io,p as Ho,a as Bo,M as jt,N as Go,S as Lo,w as I,Y as qo,z as No,aL as _e,t as ko,aC as Wo,aM as Yo,aN as Xo,aO as Ko,aP as Jo,aQ as Qo,aR as lt,aS as Zo,aT as ct,aU as ut,aV as ei,aW as ti,aA as oi}from"./OutputColorHighlightOLID.glsl-sxs6Kjna.js";import{c as Tt,o as ii}from"./Indices-BnCWM-r-.js";import{j as ni,U as si,K as ai}from"./plane-CYaN818s.js";import{k as ri}from"./ray-DFDOQn-4.js";import{t as M}from"./orientedBoundingBox-QSEKbinM.js";import{c as Ft,z as li}from"./BufferView-CruTDoyp.js";import{Q as _t,t as ci}from"./InterleavedLayout-DFvKIHDS.js";import{T as ui,c as pi,d as fi}from"./renderState-CtcAbezy.js";import{t as di}from"./VertexAttributeLocations-BSIMTgtd.js";import{t as P,n as H}from"./glsl-B5bJgrnA.js";import{s as hi}from"./ShaderBuilder-DMt-f1fI.js";function xn(o,e){if(o.type==="point")return ee(o,e,!1);if($o(o))switch(o.type){case"extent":return ee(o.center,e,!1);case"polygon":return ee(ft(o),e,!1);case"polyline":return ee(pt(o),e,!0);case"mesh":return ee(Po(o.vertexSpace,o.spatialReference)??o.extent.center,e,!1);case"multipoint":return}else switch(o.type){case"extent":return ee(gi(o),e,!0);case"polygon":return ee(ft(o),e,!0);case"polyline":return ee(pt(o),e,!0);case"multipoint":return}}function pt(o){const e=o.paths[0];if(!e||e.length===0)return null;const i=kt(e,Wt(e)/2);return Je(i[0],i[1],i[2],o.spatialReference)}function gi(o){return Je(.5*(o.xmax+o.xmin),.5*(o.ymax+o.ymin),o.zmin!=null&&o.zmax!=null&&isFinite(o.zmin)&&isFinite(o.zmax)?.5*(o.zmax+o.zmin):void 0,o.spatialReference)}function ft(o){const e=o.rings[0];if(!e||e.length===0)return null;const i=Yt(o.rings,!!o.hasZ);return Je(i[0],i[1],i[2],o.spatialReference)}function ee(o,e,i){const t=i?o:So(o);return e&&o?Xt(o,t,e)?t:null:t}function wn(o,e,i,t=0){if(o){e||(e=bt());const n=o;let a=.5*n.width*(i-1),s=.5*n.height*(i-1);return n.width<1e-7*n.height?a+=s/20:n.height<1e-7*n.width&&(s+=a/20),Kt(e,n.xmin-a-t,n.ymin-s-t,n.xmax+a+t,n.ymax+s+t),e}return null}function bn(o,e,i=null){const t=Jt(Qt);return o!=null&&(t[0]=o[0],t[1]=o[1],t[2]=o[2],o.length>3&&(t[3]=o[3])),e!=null&&(t[3]=e),i&&Zt(t,t,i),t}function yn(o=to,e,i,t=1){const n=new Array(3);if(e==null||i==null)n[0]=1,n[1]=1,n[2]=1;else{let a,s=0;for(let r=2;r>=0;r--){const c=o[r],u=c!=null,l=r===0&&!a&&!u,p=i[r];let h;c==="symbol-value"||l?h=p!==0?e[r]/p:1:u&&c!=="proportional"&&isFinite(c)&&(h=p!==0?c/p:1),h!=null&&(n[r]=h,a=h,s=Math.max(s,Math.abs(h)))}for(let r=2;r>=0;r--)n[r]==null?n[r]=a:n[r]===0&&(n[r]=.001*s)}for(let a=2;a>=0;a--)n[a]/=t;return eo(n)}function vi(o){return o.isPrimitive!=null}function Pn(o){return mi(vi(o)?[o.width,o.depth,o.height]:o)?null:"Symbol sizes may not be negative values"}function mi(o){const e=i=>i==null||i>=0;return Array.isArray(o)?o.every(e):e(o)}function $n(o,e,i,t=yt()){return o&&oo(t,t,-o/180*Math.PI),e&&io(t,t,e/180*Math.PI),i&&no(t,t,i/180*Math.PI),t}function Sn(o,e,i){if(i.minDemResolution!=null)return i.minDemResolution;const t=so(e),n=ao(o)*t,a=ro(o)*t,s=lo(o)*(e.isGeographic?1:t);return n===0&&a===0&&s===0?i.minDemResolutionForPoints:.01*Math.max(n,a,s)}function dt(o,e){const i=o[e],t=o[e+1],n=o[e+2];return Math.sqrt(i*i+t*t+n*n)}function xi(o,e){const i=o[e],t=o[e+1],n=o[e+2],a=1/Math.sqrt(i*i+t*t+n*n);o[e]*=a,o[e+1]*=a,o[e+2]*=a}function ht(o,e,i){o[e]*=i,o[e+1]*=i,o[e+2]*=i}function wi(o,e,i,t,n,a=e){(n=n||o)[a]=o[e]+i[t],n[a+1]=o[e+1]+i[t+1],n[a+2]=o[e+2]+i[t+2]}function bi(){return gt??(gt=yi()),gt}function yi(){const i=new M([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new zo([["uv0",i]])}let gt=null;const Re=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Pi=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],$i=[0,0,1,0,1,1,0,1],Si=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Rt=new Array(36);for(let o=0;o<6;o++)for(let e=0;e<6;e++)Rt[6*o+e]=o;const se=new Array(36);for(let o=0;o<6;o++)se[6*o]=0,se[6*o+1]=1,se[6*o+2]=2,se[6*o+3]=2,se[6*o+4]=3,se[6*o+5]=0;function zn(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(24);for(let t=0;t<8;t++)i[3*t]=Re[t][0]*e[0],i[3*t+1]=Re[t][1]*e[1],i[3*t+2]=Re[t][2]*e[2];return new K(o,[["position",new M(i,Si,3,!0)],["normal",new M(Pi,Rt,3)],["uv0",new M($i,se,2)]])}const Ee=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],zi=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Oi=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Ci=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function On(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(18);for(let t=0;t<6;t++)i[3*t]=Ee[t][0]*e[0],i[3*t+1]=Ee[t][1]*e[1],i[3*t+2]=Ee[t][2]*e[2];return new K(o,[["position",new M(i,Oi,3,!0)],["normal",new M(zi,Ci,3)]])}const $e=B(-.5,0,-.5),Se=B(.5,0,-.5),ze=B(0,0,.5),Oe=B(0,.5,0),ce=Y(),ue=Y(),fe=Y(),de=Y(),he=Y();W(ce,$e,Oe),W(ue,$e,Se),oe(fe,ce,ue),L(fe,fe),W(ce,Se,Oe),W(ue,Se,ze),oe(de,ce,ue),L(de,de),W(ce,ze,Oe),W(ue,ze,$e),oe(he,ce,ue),L(he,he);const Ue=[$e,Se,ze,Oe],Ai=[0,-1,0,fe[0],fe[1],fe[2],de[0],de[1],de[2],he[0],he[1],he[2]],Mi=[0,1,2,3,1,0,3,2,1,3,0,2],Di=[0,0,0,1,1,1,2,2,2,3,3,3];function Cn(o,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(12);for(let t=0;t<4;t++)i[3*t]=Ue[t][0]*e[0],i[3*t+1]=Ue[t][1]*e[1],i[3*t+2]=Ue[t][2]*e[2];return new K(o,[["position",new M(i,Mi,3,!0)],["normal",new M(Ai,Di,3)]])}function An(o,e,i,t,n={uv:!0}){const a=-Math.PI,s=2*Math.PI,r=-Math.PI/2,c=Math.PI,u=Math.max(3,Math.floor(i)),l=Math.max(2,Math.floor(t)),p=(u+1)*(l+1),h=X(3*p),b=X(3*p),$=X(2*p),m=[];let d=0;for(let x=0;x<=l;x++){const C=[],f=x/l,O=r+f*c,z=Math.cos(O);for(let y=0;y<=u;y++){const _=y/u,w=a+_*s,j=Math.cos(w)*z,V=Math.sin(O),J=-Math.sin(w)*z;h[3*d]=j*e,h[3*d+1]=V*e,h[3*d+2]=J*e,b[3*d]=j,b[3*d+1]=V,b[3*d+2]=J,$[2*d]=_,$[2*d+1]=f,C.push(d),++d}m.push(C)}const g=new Array;for(let x=0;x<l;x++)for(let C=0;C<u;C++){const f=m[x][C],O=m[x][C+1],z=m[x+1][C+1],y=m[x+1][C];x===0?(g.push(f),g.push(z),g.push(y)):x===l-1?(g.push(f),g.push(O),g.push(z)):(g.push(f),g.push(O),g.push(z),g.push(z),g.push(y),g.push(f))}const v=[["position",new M(h,g,3,!0)],["normal",new M(b,g,3,!0)]];return n.uv&&v.push(["uv0",new M($,g,2,!0)]),n.offset&&(v[0][0]="offset",v.push(["position",new M(Float64Array.from(n.offset),Tt(g.length),3,!0)])),new K(o,v)}function Mn(o,e,i,t){const n=Vi(e,i);return new K(o,n)}function Vi(o,e,i){let t,n;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],n=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)ht(t,c,o/dt(t,c));let a={};function s(c,u){c>u&&([c,u]=[u,c]);const l=c.toString()+"."+u.toString();if(a[l])return a[l];let p=t.length;return t.length+=3,wi(t,3*c,t,3*u,t,p),ht(t,p,o/dt(t,p)),p/=3,a[l]=p,p}for(let c=0;c<e;c++){const u=n.length,l=new Array(4*u);for(let p=0;p<u;p+=3){const h=n[p],b=n[p+1],$=n[p+2],m=s(h,b),d=s(b,$),g=s($,h),v=4*p;l[v]=h,l[v+1]=m,l[v+2]=g,l[v+3]=b,l[v+4]=d,l[v+5]=m,l[v+6]=$,l[v+7]=g,l[v+8]=d,l[v+9]=m,l[v+10]=d,l[v+11]=g}n=l,a={}}const r=st(t);for(let c=0;c<r.length;c+=3)xi(r,c);return[["position",new M(st(t),n,3,!0)],["normal",new M(r,n,3,!0)]]}function Dn(o,{normal:e,position:i,color:t,rotation:n,size:a,centerOffsetAndDistance:s,uvi:r,featureAttribute:c,olidColor:u=null}={}){const l=i?et(i):F(),p=e?et(e):Pt(0,0,1),h=t?[t[0],t[1],t[2],t.length>3?t[3]:255]:[255,255,255,255],b=a!=null&&a.length===2?a:[1,1],$=n!=null?[n]:[0],m=Tt(1),d=[["position",new M(l,m,3,!0)],["normal",new M(p,m,3,!0)],["color",new M(h,m,4,!0)],["size",new M(b,m,2)],["rotation",new M($,m,1,!0)]];if(r&&d.push(["uvi",new M(r,m,r.length)]),s!=null){const g=[s[0],s[1],s[2],s[3]];d.push(["centerOffsetAndDistance",new M(g,m,4)])}if(c){const g=[c[0],c[1],c[2],c[3]];d.push(["featureAttribute",new M(g,m,4)])}return new K(o,d,null,1,u,void 0,bi())}function ji(o,e,i,t,n=!0,a=!0){let s=0;const r=e,c=o;let u=B(0,s,0),l=B(0,s+c,0),p=B(0,-1,0),h=B(0,1,0);t&&(s=c,l=B(0,0,0),u=B(0,s,0),p=B(0,1,0),h=B(0,-1,0));const b=[l,u],$=[p,h],m=i+2,d=Math.sqrt(c*c+r*r);if(t)for(let f=i-1;f>=0;f--){const O=f*(2*Math.PI/i),z=B(Math.cos(O)*r,s,Math.sin(O)*r);b.push(z);const y=B(c*Math.cos(O)/d,-r/d,c*Math.sin(O)/d);$.push(y)}else for(let f=0;f<i;f++){const O=f*(2*Math.PI/i),z=B(Math.cos(O)*r,s,Math.sin(O)*r);b.push(z);const y=B(c*Math.cos(O)/d,r/d,c*Math.sin(O)/d);$.push(y)}const g=new Array,v=new Array;if(n){for(let f=3;f<b.length;f++)g.push(1),g.push(f-1),g.push(f),v.push(0),v.push(0),v.push(0);g.push(b.length-1),g.push(2),g.push(1),v.push(0),v.push(0),v.push(0)}if(a){for(let f=3;f<b.length;f++)g.push(f),g.push(f-1),g.push(0),v.push(f),v.push(f-1),v.push(1);g.push(0),g.push(2),g.push(b.length-1),v.push(1),v.push(2),v.push($.length-1)}const x=X(3*m);for(let f=0;f<m;f++)x[3*f]=b[f][0],x[3*f+1]=b[f][1],x[3*f+2]=b[f][2];const C=X(3*m);for(let f=0;f<m;f++)C[3*f]=$[f][0],C[3*f+1]=$[f][1],C[3*f+2]=$[f][2];return[["position",new M(x,g,3,!0)],["normal",new M(C,v,3,!0)]]}function Vn(o,e,i,t,n,a=!0,s=!0){return new K(o,ji(e,i,t,n,a,s))}function jn(o,e,i,t,n,a,s){const r=n?nt(n):B(1,0,0),c=a?nt(a):B(0,0,0);s??(s=!0);const u=Y();L(u,r);const l=Y();G(l,u,Math.abs(e));const p=Y();G(p,l,-.5),q(p,p,c);const h=B(0,1,0);Math.abs(1-Ye(u,h))<.2&&ie(h,0,0,1);const b=Y();oe(b,u,h),L(b,b),oe(h,b,u);const $=2*t+(s?2:0),m=t+(s?2:0),d=X(3*$),g=X(3*m),v=X(2*$),x=new Array(3*t*(s?4:2)),C=new Array(3*t*(s?4:2));s&&(d[3*($-2)]=p[0],d[3*($-2)+1]=p[1],d[3*($-2)+2]=p[2],v[2*($-2)]=0,v[2*($-2)+1]=0,d[3*($-1)]=d[3*($-2)]+l[0],d[3*($-1)+1]=d[3*($-2)+1]+l[1],d[3*($-1)+2]=d[3*($-2)+2]+l[2],v[2*($-1)]=1,v[2*($-1)+1]=1,g[3*(m-2)]=-u[0],g[3*(m-2)+1]=-u[1],g[3*(m-2)+2]=-u[2],g[3*(m-1)]=u[0],g[3*(m-1)+1]=u[1],g[3*(m-1)+2]=u[2]);const f=(w,j,V)=>{x[w]=j,C[w]=V};let O=0;const z=Y(),y=Y();for(let w=0;w<t;w++){const j=w*(2*Math.PI/t);G(z,h,Math.sin(j)),G(y,b,Math.cos(j)),q(z,z,y),g[3*w]=z[0],g[3*w+1]=z[1],g[3*w+2]=z[2],G(z,z,i),q(z,z,p),d[3*w]=z[0],d[3*w+1]=z[1],d[3*w+2]=z[2],v[2*w]=w/t,v[2*w+1]=0,d[3*(w+t)]=d[3*w]+l[0],d[3*(w+t)+1]=d[3*w+1]+l[1],d[3*(w+t)+2]=d[3*w+2]+l[2],v[2*(w+t)]=w/t,v[2*w+1]=1;const V=(w+1)%t;f(O++,w,w),f(O++,w+t,w),f(O++,V,V),f(O++,V,V),f(O++,w+t,w),f(O++,V+t,V)}if(s){for(let w=0;w<t;w++){const j=(w+1)%t;f(O++,$-2,m-2),f(O++,w,m-2),f(O++,j,m-2)}for(let w=0;w<t;w++){const j=(w+1)%t;f(O++,w+t,m-1),f(O++,$-1,m-1),f(O++,j+t,m-1)}}const _=[["position",new M(d,x,3,!0)],["normal",new M(g,C,3,!0)],["uv0",new M(v,x,2,!0)]];return new K(o,_)}function Tn(o,e,i,t,n,a){t=t||10,n=n==null||n,Ft(e.length>1);const s=[[0,0,0]],r=[],c=[];for(let u=0;u<t;u++){r.push([0,-u-1,-(u+1)%t-1]);const l=u/t*2*Math.PI;c.push([Math.cos(l)*i,Math.sin(l)*i])}return Ti(o,c,e,s,r,n,a)}function Ti(o,e,i,t,n,a,s=B(0,0,0)){const r=e.length,c=X(i.length*r*3+(6*t.length||0)),u=X(i.length*r*3+(t?6:0)),l=new Array,p=new Array;let h=0,b=0;const $=F(),m=F(),d=F(),g=F(),v=F(),x=F(),C=F(),f=F(),O=F(),z=F(),y=F(),_=F(),w=F(),j=ni();ie(O,0,1,0),W(m,i[1],i[0]),L(m,m),a?(q(f,i[0],s),L(d,f)):ie(d,0,0,1),vt(m,d,O,O,v,d,mt),N(g,d),N(_,v);for(let S=0;S<t.length;S++)G(x,v,t[S][0]),G(f,d,t[S][2]),q(x,x,f),q(x,x,i[0]),c[h++]=x[0],c[h++]=x[1],c[h++]=x[2];u[b++]=-m[0],u[b++]=-m[1],u[b++]=-m[2];for(let S=0;S<n.length;S++)l.push(n[S][0]>0?n[S][0]:-n[S][0]-1+t.length),l.push(n[S][1]>0?n[S][1]:-n[S][1]-1+t.length),l.push(n[S][2]>0?n[S][2]:-n[S][2]-1+t.length),p.push(0),p.push(0),p.push(0);let V=t.length;const J=t.length-1;for(let S=0;S<i.length;S++){let me=!1;S>0&&(N($,m),S<i.length-1?(W(m,i[S+1],i[S]),L(m,m)):me=!0,q(z,$,m),L(z,z),q(y,i[S-1],g),si(i[S],z,j),ai(j,ri(y,$),f)?(W(f,f,i[S]),L(d,f),oe(v,z,d),L(v,v)):vt(z,g,_,O,v,d,mt),N(g,d),N(_,v)),a&&(q(f,i[S],s),L(w,f));for(let Z=0;Z<r;Z++)if(G(x,v,e[Z][0]),G(f,d,e[Z][1]),q(x,x,f),L(C,x),u[b++]=C[0],u[b++]=C[1],u[b++]=C[2],q(x,x,i[S]),c[h++]=x[0],c[h++]=x[1],c[h++]=x[2],!me){const je=(Z+1)%r;l.push(V+Z),l.push(V+r+Z),l.push(V+je),l.push(V+je),l.push(V+r+Z),l.push(V+r+je);for(let Te=0;Te<6;Te++){const Nt=l.length-6;p.push(l[Nt+Te]-J)}}V+=r}const le=i[i.length-1];for(let S=0;S<t.length;S++)G(x,v,t[S][0]),G(f,d,t[S][1]),q(x,x,f),q(x,x,le),c[h++]=x[0],c[h++]=x[1],c[h++]=x[2];const Q=b/3;u[b++]=m[0],u[b++]=m[1],u[b++]=m[2];const k=V-r;for(let S=0;S<n.length;S++)l.push(n[S][0]>=0?V+n[S][0]:-n[S][0]-1+k),l.push(n[S][2]>=0?V+n[S][2]:-n[S][2]-1+k),l.push(n[S][1]>=0?V+n[S][1]:-n[S][1]-1+k),p.push(Q),p.push(Q),p.push(Q);const ne=[["position",new M(c,l,3,!0)],["normal",new M(u,p,3,!0)]];return new K(o,ne)}function Fn(o,e,i,t,n){const a=co(3*e.length),s=new Array(2*(e.length-1));let r=0,c=0;for(let l=0;l<e.length;l++){for(let p=0;p<3;p++)a[r++]=e[l][p];l>0&&(s[c++]=l-1,s[c++]=l)}const u=[["position",new M(a,s,3,!0)]];if(i&&i.length===e.length&&i[0].length===3){const l=X(3*i.length);let p=0;for(let h=0;h<e.length;h++)for(let b=0;b<3;b++)l[p++]=i[h][b];u.push(["normal",new M(l,s,3,!0)])}return t&&u.push(["color",new M(t,ii(t.length/4),4)]),new K(o,u,null,2)}function _n(o,e,i,t,n,a=0){const s=new Array(18),r=[[-i,a,n/2],[t,a,n/2],[0,e+a,n/2],[-i,a,-n/2],[t,a,-n/2],[0,e+a,-n/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let u=0;u<6;u++)s[3*u]=r[u][0],s[3*u+1]=r[u][1],s[3*u+2]=r[u][2];return new K(o,[["position",new M(s,c,3,!0)]])}function Rn(o,e){const i=o.getMutableAttribute("position").data;for(let t=0;t<i.length;t+=3){const n=i[t],a=i[t+1],s=i[t+2];ie(pe,n,a,s),re(pe,pe,e),i[t]=pe[0],i[t+1]=pe[1],i[t+2]=pe[2]}}function En(o,e=o){const i=o.attributes,t=i.get("position").data,n=i.get("normal").data;if(n){const a=e.getMutableAttribute("normal").data;for(let s=0;s<n.length;s+=3){const r=n[s+1];a[s+1]=-n[s+2],a[s+2]=r}}if(t){const a=e.getMutableAttribute("position").data;for(let s=0;s<t.length;s+=3){const r=t[s+1];a[s+1]=-t[s+2],a[s+2]=r}}}function Ie(o,e,i,t,n){return!(Math.abs(Ye(e,o))>n)&&(oe(i,o,e),L(i,i),oe(t,i,o),L(t,t),!0)}function vt(o,e,i,t,n,a,s){return Ie(o,e,n,a,s)||Ie(o,i,n,a,s)||Ie(o,t,n,a,s)}const mt=.99619469809,pe=F();function Fi(o){return o instanceof Float32Array&&o.length>=16}function _i(o){return Array.isArray(o)&&o.length>=16}function Ri(o){return Fi(o)||_i(o)}const Et=.5;function Ei(o,e){o.include(At),o.attributes.add("position","vec3"),o.attributes.add("normal","vec3"),o.attributes.add("centerOffsetAndDistance","vec4");const i=o.vertex;Oo(i,e),Co(i,e),i.uniforms.add(new Qe("viewport",t=>t.camera.fullViewport),new Be("polygonOffset",t=>t.shaderPolygonOffset),new Me("aboveGround",t=>t.camera.aboveGround?1:-1)),e.hasVerticalOffset&&Ao(i),i.code.add(P`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.code.add(P`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?P.float(0):P`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = aboveGround;
      }

      // aboveGround is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = aboveGround * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Mo(i),e.draped||(i.uniforms.add(new Me("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),i.code.add(P`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${P.float(Et)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&Mt(i),e.hasScreenSizePerspective&&Dt(i),i.code.add(P`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?P`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":P`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Ze(o){o.uniforms.add(new Do("alignPixelEnabled",e=>e.alignPixelEnabled)),o.code.add(P`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),o.code.add(P`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Ui(o,e){const{vertex:i,fragment:t}=o;o.include(Vo,e),i.include(Ze),i.main.add(P`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),t.main.add(P`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Ii(o){o.vertex.uniforms.add(new Me("renderTransparentlyOccludedHUD",e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new Qe("viewport",e=>e.camera.fullViewport),new Vt("hudVisibilityTexture",e=>{var i;return(i=e.hudVisibility)==null?void 0:i.getTexture()})),o.vertex.include(Ze),o.vertex.code.add(P`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}class Hi extends jo{constructor(e,i,t){super(e,"vec4",2,(n,a,s)=>n.setUniform4fv(e,i(a,s),t))}}function Ut(o){const e=new hi;if(e.include(Ei,o),e.vertex.include(To,o),o.occlusionPass)return e.include(Ui,o),e;const{output:i,oitPass:t,signedDistanceFieldEnabled:n,occlusionTestEnabled:a,horizonCullingEnabled:s,pixelSnappingEnabled:r,hasEmission:c,hasScreenSizePerspective:u,debugDrawLabelBorder:l,hasVVSize:p,hasVVColor:h,hasRotation:b,occludedFragmentFade:$,sampleSignedDistanceFieldTexelCenter:m}=o;e.include(At),e.include(Fo,o),e.include(_o,o),a&&e.include(Ii);const{vertex:d,fragment:g}=e;g.include(Ro),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const v=i===8,x=v&&a;x&&e.varyings.add("voccluded","float"),d.uniforms.add(new Qe("viewport",y=>y.camera.fullViewport),new at("screenOffset",(y,_)=>Xe(Ce,2*y.screenOffset[0]*_.camera.pixelRatio,2*y.screenOffset[1]*_.camera.pixelRatio)),new at("anchorPosition",y=>ve(y)),new Fe("materialColor",y=>y.color),new Be("materialRotation",y=>y.rotation),new rt("tex",y=>y.texture)),Mt(d),n&&(d.uniforms.add(new Fe("outlineColor",y=>y.outlineColor)),g.uniforms.add(new Fe("outlineColor",y=>xt(y)?y.outlineColor:uo),new Be("outlineSize",y=>xt(y)?y.outlineSize:0))),s&&d.uniforms.add(new Hi("pointDistanceSphere",(y,_)=>{const w=_.camera.eye,j=y.origin;return po(j[0]-w[0],j[1]-w[1],j[2]-w[2],fo.radius)})),r&&d.include(Ze),u&&(Eo(d),Dt(d)),l&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("uvi","vec4"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("rotation","float"),(p||h)&&e.attributes.add("featureAttribute","vec4"),d.code.add(s?P`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:P`bool behindHorizon(vec3 posModel) { return false; }`),d.main.add(P`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${H(u,P`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,P`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${H(p,P`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${H(a,P`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${H(l,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${H(x,P`voccluded = visible ? 0.0 : 1.0;`)}
  `);const C=P`
      vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
      vec2 texSize = vec2(textureSize(tex, 0));
      uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${Gi})));
      quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

      ${H(b,P`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,f=r?n?P`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:P`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:P`posProj += quadOffset;`;d.main.add(P`
    ${C}
    ${h?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${H(i===9,P`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${P.float(te)};
    ${H(n,`alphaDiscard = alphaDiscard && outlineColor.a < ${P.float(te)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${f}
      gl_Position = posProj;
    }

    vtc = uv;

    ${H(l,P`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),g.uniforms.add(new rt("tex",y=>y.texture)),$&&!v&&g.uniforms.add(new Vt("depthMap",y=>y.mainDepth),new Me("occludedOpacity",y=>y.hudOccludedFragmentOpacity));const O=l?P`(isBorder > 0.0 ? 0.0 : ${P.float(te)})`:P.float(te),z=P`
    ${H(l,P`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${H(m,P`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${n?P`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${O} ||
          fillPixelColor.a + outlinePixelColor.a < ${P.float(te)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${H(!v,P`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${O}) {
          discard;
        }

        ${H(!v,P`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:P`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${O}) {
            discard;
          }
          ${H(!v,P`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${H($&&!v,P`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${H(!v&&l,P`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(i){case 0:e.outputs.add("fragColor","vec4",0),c&&e.outputs.add("fragEmission","vec4",1),t===1&&e.outputs.add("fragAlpha","float",c?2:1),g.main.add(P`
        ${z}
        ${H(t===2,P`fragColor.rgb /= fragColor.a;`)}
        ${H(c,P`fragEmission = vec4(0.0);`)}
        ${H(t===1,P`fragAlpha = fragColor.a;`)}`);break;case 9:g.main.add(P`
        ${z}
        outputObjectAndLayerIdColor();`);break;case 8:e.include(Uo,o),g.main.add(P`
        ${z}
        outputHighlight(${H(x,P`voccluded == 1.0`,P`false`)});`)}return e}function xt(o){return o.outlineColor[3]>0&&o.outlineSize>0}function ve(o){return o.textureIsSignedDistanceField?Bi(o.anchorPosition,o.distanceFieldBoundingBox,Ce):ho(Ce,o.anchorPosition),Ce}function Bi(o,e,i){Xe(i,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const Ce=Ke(),ye=32e3,Gi=P.float(ye),Li=Object.freeze(Object.defineProperty({__proto__:null,build:Ut,calculateAnchorPosition:ve,fullUV:ye},Symbol.toStringTag,{value:"Module"}));let Ge=class extends Io{constructor(o,e){super(o,e,di([It,Bt()].map(ci))),this.shader=new Ho(Li,()=>vo(()=>Promise.resolve().then(()=>en),void 0,import.meta.url)),this.primitiveType=e.occlusionPass?tt.POINTS:tt.TRIANGLE_STRIP}initializePipeline(o){const{oitPass:e,hasEmission:i,hasPolygonOffset:t,draped:n,output:a,depthTestEnabled:s,occlusionPass:r}=o,c=s&&!n&&e!==1&&!r&&a!==8;return ui({blending:jt(a)?Go(e,!0):null,depthTest:s&&!n?{func:515}:null,depthWrite:c?pi:null,drawBuffers:Lo(e,i),colorWrite:fi,polygonOffset:t?qi:null})}};Ge=R([go("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],Ge);const qi={factor:0,units:-4},It=_t().vec2u8("uv0",{glNormalized:!0}),Ht=_t().vec3f("position").vec3f("normal").vec4i16("uvi").vec4u8("color").vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),Ni=Ht.clone().vec4u8("olidColor");function Bt(){return Bo()?Ni:Ht}class E extends qo{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1}}R([I()],E.prototype,"screenCenterOffsetUnitsEnabled",void 0),R([I()],E.prototype,"occlusionTestEnabled",void 0),R([I()],E.prototype,"signedDistanceFieldEnabled",void 0),R([I()],E.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),R([I()],E.prototype,"hasVVSize",void 0),R([I()],E.prototype,"hasVVColor",void 0),R([I()],E.prototype,"hasVerticalOffset",void 0),R([I()],E.prototype,"hasScreenSizePerspective",void 0),R([I()],E.prototype,"hasRotation",void 0),R([I()],E.prototype,"debugDrawLabelBorder",void 0),R([I()],E.prototype,"hasPolygonOffset",void 0),R([I()],E.prototype,"depthTestEnabled",void 0),R([I()],E.prototype,"pixelSnappingEnabled",void 0),R([I()],E.prototype,"draped",void 0),R([I()],E.prototype,"terrainDepthTest",void 0),R([I()],E.prototype,"cullAboveTerrain",void 0),R([I()],E.prototype,"occlusionPass",void 0),R([I()],E.prototype,"occludedFragmentFade",void 0),R([I()],E.prototype,"horizonCullingEnabled",void 0),R([I()],E.prototype,"isFocused",void 0);class Un extends No{constructor(e,i){super(e,Qi),this.produces=new Map([[14,t=>_e(t)&&!this.parameters.drawAsLabel],[15,t=>_e(t)&&this.parameters.drawAsLabel],[13,()=>this.parameters.occlusionTest],[19,t=>this.parameters.draped&&_e(t)]]),this._visible=!0,this._configuration=new E(i)}getConfiguration(e,i){const t=this.parameters.draped;return super.getConfiguration(e,i,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=t,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=i.slot===13,this._configuration.occludedFragmentFade=!t&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||i.slot===13,jt(e)&&(this._configuration.debugDrawLabelBorder=!!ko.LABELS_SHOW_BORDER),this._configuration.oitPass=i.oitPass,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration}intersect(e,i,t,n,a,s){const{options:{selectionMode:r,hud:c,excludeLabels:u},point:l,camera:p}=t,{parameters:h}=this;if(!r||!c||u&&h.isLabel||!e.visible||!l||!p)return;const b=e.attributes.get("featureAttribute"),$=b==null?null:ot(b.data,Ne),{scaleX:m,scaleY:d}=ke($,h,p.pixelRatio);$t(Ae,i),e.attributes.has("featureAttribute")&&Yi(Ae);const g=e.attributes.get("position"),v=e.attributes.get("size"),x=e.attributes.get("normal"),C=e.attributes.get("rotation"),f=e.attributes.get("centerOffsetAndDistance");Ft(g.size>=3);const O=ve(h),z=this.parameters.centerOffsetUnits==="screen";for(let y=0;y<g.data.length/g.size;y++){const _=y*g.size;ie(A,g.data[_],g.data[_+1],g.data[_+2]),re(A,A,i),re(A,A,p.viewMatrix);const w=y*f.size;if(ie(T,f.data[w],f.data[w+1],f.data[w+2]),!z&&(A[0]+=T[0],A[1]+=T[1],T[2]!==0)){const V=T[2];L(T,A),W(A,A,G(T,T,V))}const j=y*x.size;if(ie(ae,x.data[j],x.data[j+1],x.data[j+2]),Le(ae,Ae,p,we),We(this.parameters,A,we,p,ge),p.applyProjection(A,D),D[0]>-1){z&&(T[0]||T[1])&&(D[0]+=T[0]*p.pixelRatio,T[1]!==0&&(D[1]+=ge.alignmentEvaluator.apply(T[1])*p.pixelRatio),p.unapplyProjection(D,A)),D[0]+=this.parameters.screenOffset[0]*p.pixelRatio,D[1]+=this.parameters.screenOffset[1]*p.pixelRatio,D[0]=Math.floor(D[0]),D[1]=Math.floor(D[1]);const V=y*v.size;U[0]=v.data[V],U[1]=v.data[V+1],ge.evaluator.applyVec2(U,U);const J=qt*p.pixelRatio;let le=0;h.textureIsSignedDistanceField&&(le=Math.min(h.outlineSize,.5*U[0])*p.pixelRatio/2),U[0]*=m,U[1]*=d;const Q=y*C.size,k=h.rotation+C.data[Q];if(qe(l,D[0],D[1],U,J,le,k,h,O)){const ne=t.ray;if(re(De,A,St(Lt,p.viewMatrix)),D[0]=l[0],D[1]=l[1],p.unprojectFromRenderScreen(D,A)){const S=F();N(S,ne.direction);const me=1/be(S);G(S,S,me),s(zt(ne.origin,A)*me,S,-1,De)}}}}}intersectDraped(e,i,t,n,a){const s=e.attributes.get("position"),r=e.attributes.get("size"),c=e.attributes.get("rotation"),u=this.parameters,l=ve(u),p=e.attributes.get("featureAttribute"),h=p==null?null:ot(p.data,Ne),{scaleX:b,scaleY:$}=ke(h,u,e.screenToWorldRatio),m=Ki*e.screenToWorldRatio;for(let d=0;d<s.data.length/s.size;d++){const g=d*s.size,v=s.data[g],x=s.data[g+1],C=d*r.size;U[0]=r.data[C],U[1]=r.data[C+1];let f=0;u.textureIsSignedDistanceField&&(f=Math.min(u.outlineSize,.5*U[0])*e.screenToWorldRatio/2),U[0]*=b,U[1]*=$;const O=d*c.size,z=u.rotation+c.data[O];qe(t,v,x,U,m,f,z,u,l)&&n(a.distance,a.normal,-1)}}createBufferWriter(){return new Zi}applyShaderOffsetsView(e,i,t,n,a,s,r){const c=Le(i,t,a,we);return this._applyVerticalGroundOffsetView(e,c,a,r),We(this.parameters,r,c,a,s),this._applyPolygonOffsetView(r,c,n[3],a,r),this._applyCenterOffsetView(r,n,r),r}applyShaderOffsetsNDC(e,i,t,n,a){return this._applyCenterOffsetNDC(e,i,t,n),a!=null&&N(a,n),this._applyPolygonOffsetNDC(n,i,t,n),n}_applyPolygonOffsetView(e,i,t,n,a){const s=n.aboveGround?1:-1;let r=Math.sign(t);r===0&&(r=s);const c=s*r;if(this.parameters.shaderPolygonOffset<=0)return N(a,e);const u=mo(Math.abs(i.cosAngle),.01,1),l=1-Math.sqrt(1-u*u)/u/n.viewport[2];return G(a,e,c>0?l:1/l),a}_applyVerticalGroundOffsetView(e,i,t,n){const a=be(e),s=t.aboveGround?1:-1,r=t.computeRenderPixelSizeAtDist(a)*Et,c=G(A,i.normal,s*r);return q(n,e,c),n}_applyCenterOffsetView(e,i,t){const n=this.parameters.centerOffsetUnits!=="screen";return t!==e&&N(t,e),n&&(t[0]+=i[0],t[1]+=i[1],i[2]&&(L(ae,t),xo(t,t,G(ae,ae,i[2])))),t}_applyCenterOffsetNDC(e,i,t,n){const a=this.parameters.centerOffsetUnits!=="screen";return n!==e&&N(n,e),a||(n[0]+=i[0]/t.fullWidth*2,n[1]+=i[1]/t.fullHeight*2),n}_applyPolygonOffsetNDC(e,i,t,n){const a=this.parameters.shaderPolygonOffset;if(e!==n&&N(n,e),a){const s=t.aboveGround?1:-1,r=s*Math.sign(i[3]);n[2]-=(r||s)*a}return n}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:i,outlineColor:t}=this.parameters,n=e[3]>=te||i>=te&&t[3]>=te;return this._visible&&n}createGLMaterial(e){return new ki(e)}calculateRelativeScreenBounds(e,i,t=bt()){return Wi(this.parameters,e,i,t),t[2]=t[0]+e[0],t[3]=t[1]+e[1],t}}class ki extends Wo{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Ge,e)}}function Wi(o,e,i,t){t[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*i,t[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*i}function Le(o,e,i,t){return Ri(e)&&(e=$t(Xi,e)),wo(t.normal,o,e),re(t.normal,t.normal,i.viewInverseTransposeMatrix),t.cosAngle=Ye(Gt,Ji),t}function Yi(o){const e=o[0],i=o[1],t=o[2],n=o[3],a=o[4],s=o[5],r=o[6],c=o[7],u=o[8],l=1/Math.sqrt(e*e+i*i+t*t),p=1/Math.sqrt(n*n+a*a+s*s),h=1/Math.sqrt(r*r+c*c+u*u);return o[0]=e*l,o[1]=i*l,o[2]=t*l,o[3]=n*p,o[4]=a*p,o[5]=s*p,o[6]=r*h,o[7]=c*h,o[8]=u*h,o}function qe(o,e,i,t,n,a,s,r,c){let u=e-n-t[0]*c[0],l=u+t[0]+2*n,p=i-n-t[1]*c[1],h=p+t[1]+2*n;const b=r.distanceFieldBoundingBox;return r.textureIsSignedDistanceField&&b!=null&&(u+=t[0]*b[0],p+=t[1]*b[1],l-=t[0]*(1-b[2]),h-=t[1]*(1-b[3]),u-=a,l+=a,p-=a,h+=a),Xe(wt,e,i),bo(xe,o,wt,yo(s)),xe[0]>u&&xe[0]<l&&xe[1]>p&&xe[1]<h}const ge=new Yo,A=F(),ae=F(),D=Ve(),Gt=F(),De=F(),xe=Ke(),wt=Ke(),Ae=Ot(),Xi=Ot(),Lt=yt(),Pe=Ve(),T=F(),He=F(),Ne=Ve(),we={normal:Gt,cosAngle:0},qt=1,Ki=2,U=Ct(0,0),Ji=Pt(0,0,1);class Qi extends Xo{constructor(){super(...arguments),this.renderOccluded=1,this.isDecoration=!1,this.color=it(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=Ct(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=it(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=Ve(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Zi{constructor(){this.layout=It,this.instanceLayout=Bt()}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,i,t,n,a,s){var f,O;const{position:r,normal:c,color:u,size:l,rotation:p,centerOffsetAndDistance:h,featureAttribute:b,uvi:$}=a;Ko(t.get("position"),e,r,s),Jo(t.get("normal"),i,c,s);const m=t.get("position").indices.length;let d=0,g=0,v=ye,x=ye;const C=(f=t.get("uvi"))==null?void 0:f.data;C&&C.length>=4&&(d=C[0],g=C[1],v=C[2],x=C[3]);for(let z=0;z<m;++z){const y=s+z;$.setValues(y,d,g,v,x)}if(Qo(t.get("color"),4,u,s),lt(t.get("size"),l,s),Zo(t.get("rotation"),p,s),t.get("centerOffsetAndDistance")?ct(t.get("centerOffsetAndDistance"),h,s):ut(h,s,m),t.get("featureAttribute")?ct(t.get("featureAttribute"),b,s):ut(b,s,m),n!=null){const z=(O=t.get("position"))==null?void 0:O.indices;if(z){const y=z.length,_=a.getField("olidColor",li);ei(n,_,y,s)}}return{numVerticesPerItem:1,numItems:m}}writeBaseInstance(e,i){const{uv0:t}=i;lt(e.get("uv0"),t,0)}intersect(e,i,t,n,a,s,r){const{options:{selectionMode:c,hud:u,excludeLabels:l},point:p,camera:h}=n;if(!c||!u||l&&i.isLabel||!p)return;const b=this.instanceLayout.createView(e),{position:$,normal:m,rotation:d,size:g,featureAttribute:v,centerOffsetAndDistance:x}=b,C=i.centerOffsetUnits==="screen",f=ve(i);if($==null||m==null||d==null||g==null||x==null||h==null)return;const O=v==null?null:v.getVec(0,Ne),{scaleX:z,scaleY:y}=ke(O,i,h.pixelRatio),_=$.count;for(let w=0;w<_;w++){if($.getVec(w,A),t!=null&&q(A,A,t),re(A,A,h.viewMatrix),x.getVec(w,Pe),ie(T,Pe[0],Pe[1],Pe[2]),!C&&(A[0]+=T[0],A[1]+=T[1],T[2]!==0)){const j=T[2];L(T,A),W(A,A,G(T,T,j))}if(m.getVec(w,ae),Le(ae,Ae,h,we),We(i,A,we,h,ge),h.applyProjection(A,D),D[0]>-1){C&&(T[0]||T[1])&&(D[0]+=T[0]*h.pixelRatio,T[1]!==0&&(D[1]+=ge.alignmentEvaluator.apply(T[1])*h.pixelRatio),h.unapplyProjection(D,A)),D[0]+=i.screenOffset[0]*h.pixelRatio,D[1]+=i.screenOffset[1]*h.pixelRatio,D[0]=Math.floor(D[0]),D[1]=Math.floor(D[1]),g.getVec(w,U),ge.evaluator.applyVec2(U,U);const j=qt*h.pixelRatio;let V=0;i.textureIsSignedDistanceField&&(V=Math.min(i.outlineSize,.5*U[0])*h.pixelRatio/2),U[0]*=z,U[1]*=y;const J=d.get(w),le=i.rotation+J;if(qe(p,D[0],D[1],U,j,V,le,i,f)){const Q=n.ray;if(re(De,A,St(Lt,h.viewMatrix)),D[0]=p[0],D[1]=p[1],h.unprojectFromRenderScreen(D,A)){const k=F();N(k,Q.direction);const ne=1/be(k);G(k,k,ne),r(zt(Q.origin,A)*ne,k,w,De)}}}}}}function ke(o,e,i){return o==null||e.vvSize==null?{scaleX:i,scaleY:i}:(ti(He,e,o),{scaleX:He[0]*i,scaleY:He[1]*i})}function We(o,e,i,t,n){var c;if(!((c=o.verticalOffset)!=null&&c.screenLength)){const u=be(e);return n.update(i.cosAngle,u,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),e}const a=be(e),s=o.screenSizePerspectiveAlignment??o.screenSizePerspective,r=oi(t,a,o.verticalOffset,i.cosAngle,s,o.screenSizePerspectiveMinPixelReferenceSize);return n.update(i.cosAngle,a,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),G(i.normal,i.normal,r),q(e,e,i.normal)}function In(o){return o.type==="point"}const en=Object.freeze(Object.defineProperty({__proto__:null,build:Ut,calculateAnchorPosition:ve,fullUV:ye},Symbol.toStringTag,{value:"Module"}));export{wn as A,bn as B,zn as E,Sn as G,yn as I,Fn as M,On as Q,Pn as Z,jn as a,En as b,Dn as c,Ei as d,$n as e,Vn as f,vt as g,Mn as h,Un as i,An as j,mi as k,Ze as l,_n as m,Ii as n,Tn as o,ji as p,Ti as q,Cn as r,In as t,Vi as u,xn as w,Rn as y};
