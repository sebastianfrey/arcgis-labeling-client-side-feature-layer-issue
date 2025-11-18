const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RealisticTree.glsl-Jq3TBRMx.js","./index-C_bK48d2.js","./index-DxLSJ8yk.css","./HUDMaterial.glsl-p70B5G9C.js","./meshVertexSpaceUtils-CDdm4woH.js","./MeshLocalVertexSpace-D2aWm81U.js","./projectVectorToVector-IRvjF_FZ.js","./projectPointToVector-oWOZnQKe.js","./hydratedFeatures-dJZG-d3P.js","./vec3f32-WCVSSNPR.js","./OutputColorHighlightOLID.glsl-sxs6Kjna.js","./Indices-BnCWM-r-.js","./BufferView-CruTDoyp.js","./triangle-Bs-n1Sd1.js","./ray-DFDOQn-4.js","./vectorStacks-CpRnv_41.js","./quatf64-aQ5IuZRd.js","./sphere-Dx28BAGo.js","./plane-CYaN818s.js","./VertexAttributeLocations-BSIMTgtd.js","./VertexElementDescriptor-2_ON7b9t.js","./renderState-CtcAbezy.js","./glsl-B5bJgrnA.js","./frustum-BtvbAxAw.js","./orientedBoundingBox-QSEKbinM.js","./quat-BPAPKRxq.js","./spatialReferenceEllipsoidUtils-DtI6yob-.js","./computeTranslationToOriginAndRotation-BdfVN0tn.js","./InterleavedLayout-DFvKIHDS.js","./types-BKo2foNY.js","./ShaderBuilder-DMt-f1fI.js","./memoryEstimations-w0EAmzVg.js"])))=>i.map(i=>d[i]);
import{jn as Ie,b3 as x,bF as k,i$ as at,aJ as l,aK as H,aL as U,db as At,gc as Pt,jd as Dt,gp as I,j3 as Gt,qp as jt,kE as Bt,uX as ot,b9 as rt,uY as Ht,uZ as Wt,aN as it,kU as Le,k$ as ee,ja as We,j1 as kt,nf as Ut,u_ as Y,_ as fe,i0 as nt,kF as se,dR as ie,fj as Yt,ap as qt,cT as Zt,k9 as Xt,fk as Jt,eF as Kt,br as C,gl as Qt,d6 as ea,bH as ta,bE as aa,fN as Te,fO as oa,gn as ke,bB as ra,j4 as ia,b5 as na}from"./index-C_bK48d2.js";import{a5 as L,i as ge,c as xe,a6 as N,a as st,a7 as be,a8 as lt,a9 as ct,aa as sa,ab as W,ac as la,ad as ca,ae as da,f as ua,af as K,r as O,a1 as oe,D as P,E as D,ag as G,G as Q,b as y,P as j,ah as ha,H as ma,ai as pa,aj as dt,q as le,ak as ut,o as ht,al as mt,g as va,j as Ve,p as we,am as fa,an as ga,s as xa,A as Ue,ao as ba,ap as S,aq as Re,ar as wa,as as ya,d as te,at as Ma,M as re,au as Ta,L as Sa,av as pt,aw as ce,F as vt,K as ft,J as gt,ax as xt,I as bt,N as _a,O as Ca,Q as za,R as $a,U as Fa,V as Oa,W as Na,X as Ia,S as La,w as m,Y as Va,z as Ra,ay as Se,az as _e,aA as Ea,B as Aa,aB as Pa,a2 as Da,aC as Ga}from"./OutputColorHighlightOLID.glsl-sxs6Kjna.js";import{t as Oe,Q as Ee}from"./InterleavedLayout-DFvKIHDS.js";import{t as r,n as p}from"./glsl-B5bJgrnA.js";import{c as _,I as wt,z as de,S as Ye}from"./BufferView-CruTDoyp.js";import{r as ja}from"./VertexBuffer-CJAj1yU0.js";import{g as Ba}from"./plane-CYaN818s.js";import{s as ye}from"./ShaderBuilder-DMt-f1fI.js";import{T as Ae,d as Pe,_ as Ha}from"./renderState-CtcAbezy.js";import{t as Wa}from"./VertexAttributeLocations-BSIMTgtd.js";function Me(t,e){switch(t.fragment.code.add(r`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),e.normalType){case 1:t.attributes.add("normalCompressed","vec2"),t.vertex.code.add(r`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:t.attributes.add("normal","vec3"),t.vertex.code.add(r`vec3 normalModel() {
return normal;
}`);break;default:Ie(e.normalType);case 2:case 3:}}function ka({code:t,uniforms:e},a){e.add(new L("dpDummy",()=>1)),t.add(r`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}let Ua=class extends ge{constructor(e,a,o){super(e,"mat3",2,(i,s,n)=>i.setUniformMatrix3fv(e,a(s,n),o))}},Ya=class extends xe{constructor(){super(...arguments),this.transformWorldFromViewTH=x(),this.transformWorldFromViewTL=x(),this.transformViewFromCameraRelativeRS=k()}},qa=class extends xe{constructor(){super(...arguments),this.transformWorldFromModelRS=k(),this.transformWorldFromModelTH=x(),this.transformWorldFromModelTL=x()}};function yt(t,e){switch(e.normalType){case 0:case 1:t.include(Me,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new Ua("transformNormalGlobalFromModel",a=>a.transformNormalGlobalFromModel),new N("transformNormalViewFromGlobal",a=>a.transformNormalViewFromGlobal)).code.add(r`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:t.vertex.code.add(r`void forwardNormal() {}`);break;default:Ie(e.normalType);case 3:}}let Za=class extends Ya{constructor(){super(...arguments),this.transformNormalViewFromGlobal=k()}},Xa=class extends qa{constructor(){super(...arguments),this.transformNormalGlobalFromModel=k(),this.toMapSpace=at()}},Ja=class{constructor(e,a,o){this.elementSize=a.stride,this._buffer=new ja(e,Oe(a,1)),this.resize(o)}destroy(){this._buffer.dispose()}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,a,o,i=0){const s=new Uint8Array(this.array,e*this.elementSize,(a-e)*this.elementSize);new Uint8Array(o.array,i*this.elementSize).set(s)}transferAll(){this._buffer.setData(this._array)}transferRange(e,a){const o=e*this.elementSize,i=a*this.elementSize;this._buffer.setSubData(new Uint8Array(this._array),o,o,i)}resize(e){const a=e*this.elementSize,o=new ArrayBuffer(a);this._array&&(e>=this._capacity?new Uint8Array(o).set(new Uint8Array(this._array)):new Uint8Array(o).set(new Uint8Array(this._array).subarray(0,e*this.elementSize))),this._array=o,this._buffer.setSize(a),this._capacity=e}};class qe{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField("instanceFeatureAttribute",wt),this.color=e.getField("instanceColor",de),this.olidColor=e.getField("instanceOlidColor",de),this.state=e.getField("state",Ye),this.lodLevel=e.getField("lodLevel",Ye)}}let Z=class extends At{constructor(e,a){super(e),this.events=new Pt,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=eo(a),this._capacity=ue,this._buffer=this._layout.createBuffer(this._capacity),this._view=new qe(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const a=this._view.state;_(e>=0&&e<this._capacity&&!!(1&a.get(e)),"invalid instance handle"),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const a=this._view.state;_(e>=0&&e<this._capacity&&!!(1&a.get(e)),"invalid instance handle"),a.set(e,0),this._size--}setLocalTransform(e,a,o=!0){this._view.localTransform.setMat(e,a),o&&this.updateModelTransform(e)}getLocalTransform(e,a){this._view.localTransform.getMat(e,a)}setGlobalTransform(e,a,o=!0){this._view.globalTransform.setMat(e,a),o&&this.updateModelTransform(e)}getGlobalTransform(e,a){this._view.globalTransform.getMat(e,a)}updateModelTransform(e){const a=this._view,o=b,i=T;a.localTransform.getMat(e,Ze),a.globalTransform.getMat(e,Ce);const s=Dt(Ce,Ce,Ze);I(o,s[12],s[13],s[14]),a.modelOrigin.setVec(e,o),Gt(i,s),a.model.setMat(e,i);const n=Ba(b,s);n.sort(),a.modelScaleFactors.set(e,0,n[1]),a.modelScaleFactors.set(e,1,n[2]),jt(i,i),Bt(i,i),a.modelNormal.setMat(e,i),this._setStateFlags(e,64),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,a){const o=this._view;o.model.getMat(e,T),o.modelOrigin.getVec(e,b),a[0]=T[0],a[1]=T[1],a[2]=T[2],a[3]=0,a[4]=T[3],a[5]=T[4],a[6]=T[5],a[7]=0,a[8]=T[6],a[9]=T[7],a[10]=T[8],a[11]=0,a[12]=b[0],a[13]=b[1],a[14]=b[2],a[15]=1}applyShaderTransformation(e,a){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,a)}getCombinedModelTransform(e,a){return this.getModelTransform(e,a),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,a),a}getCombinedLocalTransform(e,a){this._view.localTransform.getMat(e,a),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,a)}getCombinedMaxScaleFactor(e){let a=this._view.modelScaleFactors.get(e,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(b,this,e),a*=Math.max(b[0],b[1],b[2])),a}getCombinedMedianScaleFactor(e){let a=this._view.modelScaleFactors.get(e,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(b,this,e),a*=Ka(b[0],b[1],b[2])),a}getModel(e,a){this._view.model.getMat(e,a)}setFeatureAttribute(e,a){var o;(o=this._view.featureAttribute)==null||o.setVec(e,a)}getFeatureAttribute(e,a){var o;(o=this._view.featureAttribute)==null||o.getVec(e,a)}setColor(e,a){var o;(o=this._view.color)==null||o.setVec(e,a)}setObjectAndLayerIdColor(e,a){var o;(o=this._view.olidColor)==null||o.setVec(e,a)}setVisible(e,a){a!==this.getVisible(e)&&(this._setStateFlag(e,4,a),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,a){const{_highlightOptionsMap:o}=this,i=o.get(e);a?a!==i&&(o.set(e,a),this._setStateFlag(e,8,!0),this.events.emit("instance-highlight-changed")):i&&(o.delete(e),this._setStateFlag(e,8,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){const a=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),a}getHighlightName(e){const a=this.highlightOptionsMap.get(e)??null;return a?this._highlightOptionsMapPrev.set(e,a):this._highlightOptionsMapPrev.delete(e),a}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let a=0;for(let o=0;o<this._capacity;++o)this.getState(o)&e&&++a;return a}_setStateFlags(e,a){const o=this._view.state;a=o.get(e)|a,o.set(e,a)}_clearStateFlags(e,a){const o=this._view.state;a=o.get(e)&~a,o.set(e,a)}_setStateFlag(e,a,o){o?this._setStateFlags(e,a):this._clearStateFlags(e,a)}_getStateFlag(e,a){return!!(this._view.state.get(e)&a)}_grow(){this._capacity=Math.max(ue,Math.floor(this._capacity*ot)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new qe(this._buffer)}_findSlot(){const e=this._view.state;let a=this._next;for(;1&e.get(a);)a=a+1===this._capacity?0:a+1;return this._next=a+1===this._capacity?0:a+1,a}};function Ka(t,e,a){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),a))}l([H({constructOnly:!0})],Z.prototype,"shaderTransformation",void 0),l([H()],Z.prototype,"_size",void 0),l([H({readOnly:!0})],Z.prototype,"size",null),Z=l([U("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],Z);const Qa=Ee().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");function eo(t){return Mt(Qa.clone(),t).u8("state").u8("lodLevel")}function Mt(t,e){return e.instancedFeatureAttribute&&t.vec4f("instanceFeatureAttribute"),e.instancedColor&&t.vec4u8("instanceColor"),st()&&t.vec4u8("instanceOlidColor"),t}const b=x(),T=k(),Ze=rt(),Ce=rt(),ue=64;let to=class{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField("instanceFeatureAttribute",wt),this.color=e.getField("instanceColor",de),this.olidColor=e.getField("instanceOlidColor",de)}},br=class{constructor(e,a){this._rctx=e,this._layout=a,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const e=this._headIndex,a=this._tailIndex;return e>=a?e-a:e+this._capacity-a}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){var e;return((e=this._buffer)==null?void 0:e.usedMemory)??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){_(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){_(this._updating,"not updating"),this.size<Ht*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){_(this._updating,"not updating"),this.isFull&&this._grow();const e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),_(this._headIndex!==this._tailIndex,"invalid pointers"),e}freeTail(){_(this._updating,"not updating"),_(this.size>0,"invalid size");const e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){const e=Math.max(ue,Math.floor(this._capacity*ot));this._resize(e)}_shrink(){const e=Math.max(ue,Math.floor(this._capacity*Wt));this._resize(e)}_resize(e){if(_(this._updating,"not updating"),e===this._capacity)return;const a=new Ja(this._rctx,this._layout,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const o=this.size,i=this._compactInstances(a);_(i===o,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=i,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=a,this._view=new to(this._layout.createView(this._buffer.array))}_compactInstances(e){const a=this._headIndex,o=this._tailIndex;return o<a?(this._buffer.copyRange(o,a,e),a-o):o>a?(this._buffer.copyRange(o,this._capacity,e),a>0&&this._buffer.copyRange(0,a,e,this._capacity-o),a+(this._capacity-o)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,a){e<a?this._buffer.transferRange(e,a):e>a&&(a>0&&this._buffer.transferRange(0,a),this._buffer.transferRange(e,this._capacity))}};const ao=Ee().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");function oo(t){return Mt(ao.clone(),t)}function yr({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:a,roughnessFactor:o,emissiveTexture:i,emissiveFactor:s,occlusionTexture:n}){return t==null&&e==null&&i==null&&(s==null||it(s,Le))&&n==null&&(o==null||o===1)&&(a==null||a===1)}const ro=ee(1,1,.5),Mr=ee(0,.6,.2),Tr=ee(0,1,.2);function Tt(t){t.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function io(t){t.varyings.add("linearDepth","float",{invariant:!0})}function no(t,e){io(t),t.vertex.code.add(r`
    void forwardLinearDepth(float _linearDepth) { ${p(e,"linearDepth = _linearDepth;")} }
  `)}function St(t,e){e.instancedColor?(t.attributes.add("instanceColor","vec4"),t.vertex.include(be),t.vertex.include(lt),t.vertex.include(ct),t.vertex.code.add(r`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):t.vertex.code.add(r`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}const Xe=k();function _t(t,e){const{hasModelTransformation:a,instancedDoublePrecision:o,instanced:i,output:s,hasVertexTangents:n}=e;a&&(t.vertex.uniforms.add(new sa("model",c=>c.modelTransformation??We)),t.vertex.uniforms.add(new N("normalLocalOriginFromModel",c=>(kt(Xe,c.modelTransformation??We),Xe)))),i&&o&&(t.attributes.add("instanceModelOriginHi","vec3"),t.attributes.add("instanceModelOriginLo","vec3"),t.attributes.add("instanceModel","mat3"),t.attributes.add("instanceModelNormal","mat3"));const d=t.vertex;o&&(d.include(ka,e),d.uniforms.add(new W("viewOriginHi",c=>la(I(ne,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),ne)),new W("viewOriginLo",c=>ca(I(ne,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),ne)))),d.code.add(r`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?r`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),d.code.add(r`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),s===2&&(da(d),d.code.add(r`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),n&&d.code.add(r`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ne=x();function Ct(t,e){t.varyings.add("colorMixMode","int"),t.varyings.add("opacityMixMode","int"),t.vertex.uniforms.add(new ua("symbolColorMixMode",a=>K[a.colorMixMode])),e.hasSymbolColors?(t.vertex.include(be),t.vertex.include(lt),t.vertex.include(ct),t.attributes.add("symbolColor","vec4"),t.vertex.code.add(r`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):t.vertex.code.add(r`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),t.vertex.code.add(r`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${r.int(K.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${r.int(K.ignore)} : symbolColorMixMode;
    }
  `)}function so(t,e){switch(e.output){case 3:case 4:case 5:case 6:t.fragment.code.add(r`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 7:t.fragment.code.add(r`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function B(t,e){lo(t,e,new O("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function lo(t,e,a){const o=t.fragment,i=e.alphaDiscardMode,s=i===0;i!==2&&i!==3||o.uniforms.add(a),o.code.add(r`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${i===1?"color.a = 1.0;":`if (color.a < ${s?r.float(oe):"textureAlphaCutoff"}) {
              discard;
             } ${p(i===2,"else { color.a = 1.0; }")}`}
    }
  `)}function zt(t,e){const{vertex:a,fragment:o,varyings:i}=t,{hasColorTexture:s,alphaDiscardMode:n}=e,d=s&&n!==1,{output:c,normalType:u,hasColorTextureTransform:g}=e;switch(c){case 1:P(a,e),t.include(D),o.include(j,e),t.include(G,e),d&&o.uniforms.add(new y("tex",f=>f.texture)),a.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(B,e),o.main.add(r`
        discardBySlice(vpos);
        ${p(d,r`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 3:case 4:case 5:case 6:case 9:P(a,e),t.include(D),t.include(G,e),t.include(Q,e),t.include(so,e),o.include(j,e),t.include(ma,e),pa(t),i.add("depth","float",{invariant:!0}),d&&o.uniforms.add(new y("tex",f=>f.texture)),a.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),t.include(B,e),o.main.add(r`
        discardBySlice(vpos);
        ${p(d,r`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${c===9?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}`);break;case 2:{P(a,e),t.include(D),t.include(Me,e),t.include(yt,e),t.include(G,e),t.include(Q,e),d&&o.uniforms.add(new y("tex",M=>M.texture)),u===2&&i.add("vPositionView","vec3",{invariant:!0});const f=u===0||u===1;a.main.add(r`
        vpos = getVertexInLocalOriginSpace();
        ${f?r`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:r`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),o.include(j,e),t.include(B,e),o.main.add(r`
        discardBySlice(vpos);
        ${p(d,r`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${u===2?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 8:P(a,e),t.include(D),t.include(G,e),t.include(Q,e),d&&o.uniforms.add(new y("tex",f=>f.texture)),a.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),o.include(j,e),t.include(B,e),t.include(ha,e),o.main.add(r`
        discardBySlice(vpos);
        ${p(d,r`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function co(t,e){const a=t.fragment,{hasVertexTangents:o,doubleSidedMode:i,hasNormalTexture:s,textureCoordinateType:n,bindType:d,hasNormalTextureTransform:c}=e;o?(t.attributes.add("tangent","vec4"),t.varyings.add("vTangent","vec4"),i===2?a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),s&&n!==0&&(t.include(dt,e),a.uniforms.add(d===1?new y("normalTexture",u=>u.textureNormal):new le("normalTexture",u=>u.textureNormal)),c&&(a.uniforms.add(new ut("scale",u=>u.scale??Ut)),a.uniforms.add(new N("normalTextureTransformMatrix",u=>u.normalTextureTransformMatrix??Y))),a.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),c&&a.code.add(r`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(r`return tangentSpace * rawNormal;
}`))}const uo=3e5,Je=5e5,ze=4;function ho(){const t=new ye,e=t.fragment;t.include(ht);const a=(ze+1)/2,o=1/(2*a*a);return e.include(mt),e.uniforms.add(new y("depthMap",i=>i.depthTexture),new le("tex",i=>i.colorTexture),new va("blurSize",i=>i.blurSize),new O("projScale",(i,s)=>{const n=s.camera.distance;return n>5e4?Math.max(0,i.projScale-(n-5e4)):i.projScale})),e.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.main.add(r`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${r.int(ze)}; r <= ${r.int(ze)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),t}const mo=Object.freeze(Object.defineProperty({__proto__:null,build:ho},Symbol.toStringTag,{value:"Module"}));let he=class extends Ve{constructor(){super(...arguments),this.shader=new we(mo,()=>fe(()=>import("./RealisticTree.glsl-Jq3TBRMx.js").then(e=>e.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),import.meta.url))}initializePipeline(){return Ae({colorWrite:Pe})}};he=l([U("esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique")],he);const po="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let vo=class extends xe{constructor(){super(...arguments),this.projScale=1}},fo=class extends vo{constructor(){super(...arguments),this.intensity=1}},go=class extends xe{},xo=class extends go{constructor(){super(...arguments),this.blurSize=nt()}};const Ke=16;function bo(){const t=new ye,e=t.fragment;return t.include(ht),t.include(fa),e.include(mt),e.uniforms.add(new L("radius",a=>De(a.camera))).code.add(r`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(r`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.outputs.add("fragOcclusion","float"),e.uniforms.add(new y("normalMap",a=>a.normalTexture),new y("depthMap",a=>a.depthTexture),new O("projScale",a=>a.projScale),new y("rnm",a=>a.noiseTexture),new ut("rnmScale",(a,o)=>se(Qe,o.camera.fullWidth/a.noiseTexture.descriptor.width,o.camera.fullHeight/a.noiseTexture.descriptor.height)),new O("intensity",a=>a.intensity),new ga("screenSize",a=>se(Qe,a.camera.fullWidth,a.camera.fullHeight))).main.add(r`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${r.int(Ke)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${r.int(Ke)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),t}function De(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const Qe=nt(),wo=Object.freeze(Object.defineProperty({__proto__:null,build:bo,getRadius:De},Symbol.toStringTag,{value:"Module"}));let me=class extends Ve{constructor(){super(...arguments),this.shader=new we(wo,()=>fe(()=>import("./RealisticTree.glsl-Jq3TBRMx.js").then(e=>e.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),import.meta.url))}initializePipeline(){return Ae({colorWrite:Pe})}};me=l([U("esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique")],me);const J=2;let X=class extends xa{constructor(t){super(t),this.consumes={required:["normals"]},this.produces=Ue.SSAO,this.isEnabled=()=>!1,this._enableTime=ie(0),this._passParameters=new fo,this._drawParameters=new xo}initialize(){const t=Uint8Array.from(atob(po),a=>a.charCodeAt(0)),e=new Jt(32);e.wrapMode=33071,e.pixelFormat=6407,e.wrapMode=10497,e.hasMipmap=!0,this._passParameters.noiseTexture=new Yt(this.renderingContext,e,t),this.techniques.precompile(me),this.techniques.precompile(he),this.addHandles(qt(()=>this.isEnabled(),()=>this._enableTime=ie(0)))}destroy(){this._passParameters.noiseTexture=Zt(this._passParameters.noiseTexture)}render(t){const e=t.find(({name:w})=>w==="normals"),a=e==null?void 0:e.getTexture(),o=e==null?void 0:e.getTexture(Xt);if(!a||!o)return;const i=this.techniques.get(me),s=this.techniques.get(he);if(!i.compiled||!s.compiled)return this._enableTime=ie(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=ie(performance.now()));const n=this.renderingContext,d=this.view.qualitySettings.fadeDuration,c=this.bindParameters,u=c.camera,g=u.relativeElevation,f=Kt((Je-g)/(Je-uo),0,1),M=d>0?Math.min(d,performance.now()-this._enableTime)/d:1,$=M*f;this._passParameters.normalTexture=a,this._passParameters.depthTexture=o,this._passParameters.projScale=1/u.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*yo/De(u)**6*$;const v=u.fullViewport[2],F=u.fullViewport[3],V=this.fboCache.acquire(v,F,"ssao input",2);n.bindFramebuffer(V.fbo),n.setViewport(0,0,v,F),n.bindTechnique(i,c,this._passParameters,this._drawParameters),n.screen.draw();const R=Math.round(v/J),E=Math.round(F/J),q=this.fboCache.acquire(R,E,"ssao blur",0);n.bindFramebuffer(q.fbo),this._drawParameters.colorTexture=V.getTexture(),se(this._drawParameters.blurSize,0,J/F),n.bindTechnique(s,c,this._passParameters,this._drawParameters),n.setViewport(0,0,R,E),n.screen.draw(),V.release();const A=this.fboCache.acquire(R,E,Ue.SSAO,0);return n.bindFramebuffer(A.fbo),n.setViewport(0,0,v,F),n.setClearColor(1,1,1,0),n.clear(16384),this._drawParameters.colorTexture=q.getTexture(),se(this._drawParameters.blurSize,J/v,0),n.bindTechnique(s,c,this._passParameters,this._drawParameters),n.setViewport(0,0,R,E),n.screen.draw(),n.setViewport4fv(u.fullViewport),q.release(),M<1&&this.requestRender(2),A}};l([H()],X.prototype,"consumes",void 0),l([H()],X.prototype,"produces",void 0),l([H({constructOnly:!0})],X.prototype,"isEnabled",void 0),X=l([U("esri.views.3d.webgl-engine.effects.ssao.SSAO")],X);const yo=.5;function Ge(t,e){e.receiveAmbientOcclusion?(t.uniforms.add(new ba("ssaoTex",a=>{var o;return(o=a.ssao)==null?void 0:o.getTexture()})),t.constants.add("blurSizePixelsInverse","float",1/J),t.code.add(r`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):t.code.add(r`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Mo(t,e){const a=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;a===0?(t.uniforms.add(new W("lightingAmbientSH0",({lighting:o})=>I(et,o.sh.r[0],o.sh.g[0],o.sh.b[0]))),t.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(t.uniforms.add(new S("lightingAmbientSH_R",({lighting:o})=>C(z,o.sh.r[0],o.sh.r[1],o.sh.r[2],o.sh.r[3])),new S("lightingAmbientSH_G",({lighting:o})=>C(z,o.sh.g[0],o.sh.g[1],o.sh.g[2],o.sh.g[3])),new S("lightingAmbientSH_B",({lighting:o})=>C(z,o.sh.b[0],o.sh.b[1],o.sh.b[2],o.sh.b[3]))),t.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===2&&(t.uniforms.add(new W("lightingAmbientSH0",({lighting:o})=>I(et,o.sh.r[0],o.sh.g[0],o.sh.b[0])),new S("lightingAmbientSH_R1",({lighting:o})=>C(z,o.sh.r[1],o.sh.r[2],o.sh.r[3],o.sh.r[4])),new S("lightingAmbientSH_G1",({lighting:o})=>C(z,o.sh.g[1],o.sh.g[2],o.sh.g[3],o.sh.g[4])),new S("lightingAmbientSH_B1",({lighting:o})=>C(z,o.sh.b[1],o.sh.b[2],o.sh.b[3],o.sh.b[4])),new S("lightingAmbientSH_R2",({lighting:o})=>C(z,o.sh.r[5],o.sh.r[6],o.sh.r[7],o.sh.r[8])),new S("lightingAmbientSH_G2",({lighting:o})=>C(z,o.sh.g[5],o.sh.g[6],o.sh.g[7],o.sh.g[8])),new S("lightingAmbientSH_B2",({lighting:o})=>C(z,o.sh.b[5],o.sh.b[6],o.sh.b[7],o.sh.b[8]))),t.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==1&&e.pbrMode!==2||t.code.add(r`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const et=x(),z=at();function pe(t){t.uniforms.add(new W("mainLightDirection",e=>e.lighting.mainLight.direction))}function ae(t){t.uniforms.add(new W("mainLightIntensity",e=>e.lighting.mainLight.intensity))}function To(t){pe(t),ae(t),t.code.add(r`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function So(t){t.code.add(r`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.code.add(r`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.code.add(r`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function je(t,e){t.include(Re),e.pbrMode!==1&&e.pbrMode!==2&&e.pbrMode!==5&&e.pbrMode!==6||(t.code.add(r`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),t.code.add(r`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==1&&e.pbrMode!==2||(t.include(So),t.code.add(r`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),t.code.add(r`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function Or(t,e){t.include(Re),t.code.add(r`
    struct PBRShadingWater {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),t.code.add(r`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),t.code.add(r`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),t.code.add(r`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),t.code.add(r`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function _o(t){t.code.add(r`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),t.code.add(r`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Co(t){t.code.add(r`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function Be(t){t.constants.add("ambientBoostFactor","float",wa)}function He(t){t.uniforms.add(new L("lightingGlobalFactor",e=>e.lighting.globalFactor))}function $t(t,e){const{pbrMode:a,spherical:o,hasColorTexture:i}=e;t.include(Ge,e),a!==0&&t.include(je,e),t.include(Mo,e),t.include(Re),t.include(Co,e);const s=!(a===2&&!i);switch(s&&t.include(_o),t.code.add(r`
    const float GAMMA_SRGB = ${r.float(Qt)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p(a!==0,"const float GROUND_REFLECTANCE = 0.2;")}
  `),Be(t),He(t),pe(t),t.code.add(r`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${o?r`normalize(vPosWorld)`:r`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),ae(t),t.code.add(r`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),a){case 0:case 4:case 3:t.include(To),t.code.add(r`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case 1:case 2:t.code.add(r`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),t.code.add(r`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?t.uniforms.add(new ya("hasFillLights",n=>n.enableFillLights)):t.constants.add("hasFillLights","bool",!1),t.code.add(r`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),t.uniforms.add(new L("lightingSpecularStrength",n=>n.lighting.mainLight.specularStrength),new L("lightingEnvironmentStrength",n=>n.lighting.mainLight.environmentStrength)).code.add(r`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),t.code.add(r`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;
        ${s?r`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:r`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case 5:case 6:pe(t),ae(t),t.code.add(r`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`)}}function zo(t,e){const a=t.fragment;switch(a.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case 0:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Ie(e.doubleSidedMode);case 3:}}function Ft(t,e){const a=e.pbrMode,o=t.fragment;if(a!==2&&a!==0&&a!==1)return void o.code.add(r`void applyPBRFactors() {}`);if(a===0)return void o.code.add(r`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(a===2)return void o.code.add(r`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:i,hasMetallicRoughnessTextureTransform:s,hasOcclusionTexture:n,hasOcclusionTextureTransform:d,bindType:c}=e;(i||n)&&t.include(dt,e),o.code.add(r`vec3 mrr;
float occlusion;`),i&&o.uniforms.add(c===1?new y("texMetallicRoughness",u=>u.textureMetallicRoughness):new le("texMetallicRoughness",u=>u.textureMetallicRoughness)),n&&o.uniforms.add(c===1?new y("texOcclusion",u=>u.textureOcclusion):new le("texOcclusion",u=>u.textureOcclusion)),o.uniforms.add(c===1?new te("mrrFactors",u=>u.mrrFactors):new Ma("mrrFactors",u=>u.mrrFactors)),o.code.add(r`
    ${p(i,r`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${p(n,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${n?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${p(i,`applyMetallicRoughness(${s?"metallicRoughnessUV":"vuv0"});`)}
      ${p(n,`applyOcclusion(${d?"occlusionUV":"vuv0"});`)}
    }
  `)}function $o(t,e){const a=re(e.output)&&e.receiveShadows;a&&no(t,!0),t.vertex.code.add(r`
    void forwardLinearDepthToReadShadowMap() { ${p(a,"forwardLinearDepth(gl_Position.w);")} }
  `)}let Fo=class extends ge{constructor(e,a,o,i){super(e,"mat4",2,(s,n,d,c)=>s.setUniformMatrices4fv(e,a(n,d,c),i),o)}},Oo=class extends ge{constructor(e,a,o,i){super(e,"mat4",1,(s,n,d)=>s.setUniformMatrices4fv(e,a(n,d),i),o)}};function No(t){t.fragment.uniforms.add(new Oo("shadowMapMatrix",(e,a)=>a.shadowMap.getShadowMapMatrices(e.origin),4)),Ot(t)}function Io(t){t.fragment.uniforms.add(new Fo("shadowMapMatrix",(e,a)=>a.shadowMap.getShadowMapMatrices(e.origin),4)),Ot(t)}function Ot(t){const{fragment:e}=t;e.uniforms.add(new S("cascadeDistances",a=>a.shadowMap.cascadeDistances),new Ta("numCascades",a=>a.shadowMap.numCascades)),e.code.add(r`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}function Lo(t){t.fragment.code.add(r`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}let Vo=class extends ge{constructor(e,a){super(e,"sampler2DShadow",0,(o,i)=>o.bindTexture(e,a(i)))}};function Nt(t,e){e.receiveShadows&&t.include(No),Lt(t,e)}function It(t,e){e.receiveShadows&&t.include(Io),Lt(t,e)}function Lt(t,e){t.fragment.uniforms.add(new L("lightingGlobalFactor",i=>i.lighting.globalFactor));const{receiveShadows:a,spherical:o}=e;t.include($o,e),a&&Ro(t),t.fragment.code.add(r`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${a?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":p(o,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
    }
  `)}function Ro(t){t.include(Lo),t.fragment.uniforms.add(new Vo("shadowMap",({shadowMap:e})=>e.depthTexture)).code.add(r`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function Eo(t,e){e.hasColorTextureTransform?(t.varyings.add("colorUV","vec2"),t.vertex.uniforms.add(new N("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??Y)).code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardColorUV(){}`)}function Ao(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("normalUV","vec2"),t.vertex.uniforms.add(new N("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??Y)).code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardNormalUV(){}`)}function Po(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("emissiveUV","vec2"),t.vertex.uniforms.add(new N("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??Y)).code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardEmissiveUV(){}`)}function Do(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("occlusionUV","vec2"),t.vertex.uniforms.add(new N("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??Y)).code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardOcclusionUV(){}`)}function Go(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.uniforms.add(new N("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??Y)).code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function Vt(t){t.include(Sa),t.code.add(r`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.int(1)}) {
        return allMixed;
      }
      if (mode == ${r.int(2)}) {
        return internalMixed;
      }
      if (mode == ${r.int(3)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${r.int(2)}) {
        return internalMixed;
      }
      if (mode == ${r.int(3)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Rt(t,e){e.snowCover&&(t.uniforms.add(new L("snowCover",a=>a.snowCover)).code.add(r`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),t.code.add(r`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function jo(t){const e=new ye,{attributes:a,vertex:o,fragment:i,varyings:s}=e,{output:n,normalType:d,offsetBackfaces:c,spherical:u,snowCover:g,pbrMode:f,textureAlphaPremultiplied:M,instancedDoublePrecision:$,hasVertexColors:v,hasVertexTangents:F,hasColorTexture:V,hasNormalTexture:R,hasNormalTextureTransform:E,hasColorTextureTransform:q}=t;if(P(o,t),a.add("position","vec3"),s.add("vpos","vec3",{invariant:!0}),e.include(Q,t),e.include(_t,t),e.include(pt,t),e.include(Eo,t),!re(n))return e.include(zt,t),e;e.include(Ao,t),e.include(Po,t),e.include(Do,t),e.include(Go,t),ce(o,t),e.include(Me,t),e.include(D);const A=d===0||d===1;return A&&c&&e.include(Tt),e.include(co,t),e.include(yt,t),e.include(St,t),s.add("vPositionLocal","vec3"),e.include(G,t),e.include(Ct,t),e.include(vt,t),o.uniforms.add(new ft("externalColor",w=>w.externalColor,{supportsNaN:!0})),s.add("vcolorExt","vec4"),e.include(gt,t),o.include(be),o.include(xt),e.include($?Nt:It,t),o.main.add(r`
    forwardNormalizedVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${p(A,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${p(F,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${p(A&&c,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${r.int(K.ignore)} && vcolorExt.a < ${r.float(oe)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),i.include($t,t),i.include(Ge,t),e.include(B,t),i.include(j,t),e.include(bt,t),ce(i,t),i.uniforms.add(o.uniforms.get("localOrigin"),new te("ambient",w=>w.ambient),new te("diffuse",w=>w.diffuse),new O("opacity",w=>w.opacity),new O("layerOpacity",w=>w.layerOpacity)),V&&i.uniforms.add(new y("tex",w=>w.texture)),e.include(Ft,t),i.include(je,t),i.include(Vt),e.include(zo,t),i.include(Rt,t),Be(i),He(i),ae(i),i.main.add(r`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${V?r`
            vec4 texColor = texture(tex, ${q?"colorUV":"vuv0"});
            ${p(M,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${d===2?r`vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${p(v,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${p(v,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${R?`mat3 tangentSpace = computeTangentSpace(${F?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${E?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${u?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${p(g,r`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${f===1||f===2?r`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${p(g,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(finalColor, vpos, albedo ${p(g,", snow")});
  `),e}const Bo=Object.freeze(Object.defineProperty({__proto__:null,build:jo},Symbol.toStringTag,{value:"Module"}));class Ho extends Za{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=ro,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrengthFromSymbol=0,this.emissiveStrengthKHR=1,this.emissiveSource=1,this.emissiveBaseColor=Le,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=ee(.2,.2,.2),this.diffuse=ee(.8,.8,.8),this.externalColor=ea(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=x(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=oe,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Vr extends Xa{constructor(){super(...arguments),this.origin=x(),this.slicePlaneLocalOrigin=this.origin}}let ve=class extends Ve{constructor(t,e){const a=[Oe(Et(e))];e.instanced&&e.instancedDoublePrecision&&a.push(Oe(oo(e))),super(t,e,Wa(a)),this.shader=new we(Bo,()=>fe(()=>import("./RealisticTree.glsl-Jq3TBRMx.js").then(o=>o.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),import.meta.url))}_makePipeline(t,e){const{oitPass:a,output:o,hasEmission:i,transparent:s,cullFace:n,customDepthTest:d,hasOccludees:c}=t;return Ae({blending:re(o)&&s?_a(a):null,culling:ko(t)?Ha(n):null,depthTest:Ca(a,Wo(d)),depthWrite:za(t),drawBuffers:$a(o,La(a,i)),colorWrite:Pe,stencilWrite:c?Fa:null,stencilTest:c?e?Oa:Na:null,polygonOffset:Ia(t)})}initializePipeline(t){return this._occludeePipelineState=this._makePipeline(t,!0),this._makePipeline(t,!1)}getPipeline(t,e){return e?this._occludeePipelineState:super.getPipeline(t)}};function Wo(t){switch(t){case 1:return 515;case 0:case 3:return 513;case 2:return 516}}function ko(t){return t.cullFace!==0||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}function Et(t){const e=Ee().vec3f("position");return t.normalType===1?e.vec2i16("normalCompressed",{glNormalized:!0}):e.vec3f("normal"),t.hasVertexTangents&&e.vec4f("tangent"),t.hasTextures&&e.vec2f16("uv0"),t.hasVertexColors&&e.vec4u8("color"),t.hasSymbolColors&&e.vec4u8("symbolColor"),!t.instanced&&st()&&e.vec4u8("olidColor"),e}ve=l([U("esri.views.3d.webgl-engine.shaders.DefaultMaterialTechnique")],ve);class h extends Va{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}l([m({count:4})],h.prototype,"alphaDiscardMode",void 0),l([m({count:3})],h.prototype,"doubleSidedMode",void 0),l([m({count:7})],h.prototype,"pbrMode",void 0),l([m({count:3})],h.prototype,"cullFace",void 0),l([m({count:3})],h.prototype,"normalType",void 0),l([m({count:3})],h.prototype,"customDepthTest",void 0),l([m({count:8})],h.prototype,"emissionSource",void 0),l([m()],h.prototype,"hasVertexColors",void 0),l([m()],h.prototype,"hasSymbolColors",void 0),l([m()],h.prototype,"hasVerticalOffset",void 0),l([m()],h.prototype,"hasColorTexture",void 0),l([m()],h.prototype,"hasMetallicRoughnessTexture",void 0),l([m()],h.prototype,"hasOcclusionTexture",void 0),l([m()],h.prototype,"hasNormalTexture",void 0),l([m()],h.prototype,"hasScreenSizePerspective",void 0),l([m()],h.prototype,"hasVertexTangents",void 0),l([m()],h.prototype,"hasOccludees",void 0),l([m()],h.prototype,"instanced",void 0),l([m()],h.prototype,"instancedDoublePrecision",void 0),l([m()],h.prototype,"hasModelTransformation",void 0),l([m()],h.prototype,"offsetBackfaces",void 0),l([m()],h.prototype,"hasVVSize",void 0),l([m()],h.prototype,"hasVVColor",void 0),l([m()],h.prototype,"receiveShadows",void 0),l([m()],h.prototype,"receiveAmbientOcclusion",void 0),l([m()],h.prototype,"textureAlphaPremultiplied",void 0),l([m()],h.prototype,"instancedFeatureAttribute",void 0),l([m()],h.prototype,"instancedColor",void 0),l([m()],h.prototype,"writeDepth",void 0),l([m()],h.prototype,"transparent",void 0),l([m()],h.prototype,"enableOffset",void 0),l([m()],h.prototype,"terrainDepthTest",void 0),l([m()],h.prototype,"cullAboveTerrain",void 0),l([m()],h.prototype,"snowCover",void 0),l([m()],h.prototype,"hasColorTextureTransform",void 0),l([m()],h.prototype,"hasEmissionTextureTransform",void 0),l([m()],h.prototype,"hasNormalTextureTransform",void 0),l([m()],h.prototype,"hasOcclusionTextureTransform",void 0),l([m()],h.prototype,"hasMetallicRoughnessTextureTransform",void 0);function Uo(t){const e=new ye,{attributes:a,vertex:o,fragment:i,varyings:s}=e,{output:n,offsetBackfaces:d,pbrMode:c,snowCover:u,spherical:g}=t,f=c===1||c===2;if(P(o,t),a.add("position","vec3"),s.add("vpos","vec3",{invariant:!0}),e.include(Q,t),e.include(_t,t),e.include(pt,t),e.include(gt,t),!re(n))return e.include(zt,t),e;ce(e.vertex,t),e.include(Me,t),e.include(D),d&&e.include(Tt),s.add("vNormalWorld","vec3"),s.add("localvpos","vec3",{invariant:!0}),e.include(G,t),e.include(Ct,t),e.include(St,t),e.include(vt,t),o.include(be),o.include(xt),o.uniforms.add(new ft("externalColor",v=>v.externalColor,{supportsNaN:!0})),s.add("vcolorExt","vec4"),e.include(t.instancedDoublePrecision?Nt:It,t),o.main.add(r`
    forwardNormalizedVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${r.int(K.ignore)} && vcolorExt.a < ${r.float(oe)};
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${p(d,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
  `);const{hasColorTexture:M,hasColorTextureTransform:$}=t;return i.include($t,t),i.include(Ge,t),e.include(B,t),i.include(j,t),e.include(bt,t),ce(i,t),pe(i),Be(i),He(i),i.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new te("ambient",v=>v.ambient),new te("diffuse",v=>v.diffuse),new O("opacity",v=>v.opacity),new O("layerOpacity",v=>v.layerOpacity)),M&&i.uniforms.add(new y("tex",v=>v.texture)),e.include(Ft,t),i.include(je,t),i.include(Vt),i.include(Rt,t),ae(i),i.main.add(r`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${M?`texture(tex, ${$?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${p(M,`${p(t.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${t.hasVertexColors?r`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:r`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${g?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};

      ${p(u,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${r`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${f?r`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${p(u,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(finalColor, vpos, albedo ${p(u,", 1.0")});`),e}const Yo=Object.freeze(Object.defineProperty({__proto__:null,build:Uo},Symbol.toStringTag,{value:"Module"}));let Ne=class extends ve{constructor(){super(...arguments),this.shader=new we(Yo,()=>fe(()=>import("./RealisticTree.glsl-Jq3TBRMx.js").then(t=>t.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),import.meta.url))}};Ne=l([U("esri.views.3d.webgl-engine.shaders.RealisticTreeTechnique")],Ne);class Rr extends Ra{constructor(e,a){super(e,Zo),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,o=>(Se(o)||_e(o))&&!this.transparent],[4,o=>(Se(o)||_e(o))&&this.transparent&&this.parameters.writeDepth],[9,o=>(Se(o)||_e(o))&&this.transparent&&!this.parameters.writeDepth]]),this._layout=Et(this.parameters),this._configuration=new h(a.spherical)}isVisibleForOutput(e){return e!==3&&e!==5&&e!==4||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:a,opacity:o,externalColor:i}=this.parameters;return e*(a==="replace"?1:o)*(a==="ignore"||isNaN(i[3])?1:i[3])>=oe}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!it(this.parameters.emissiveBaseColor,Le)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===0&&this._hasEmissiveBase||this.parameters.emissiveSource===1)}getConfiguration(e,a){const{parameters:o,_configuration:i}=this,{treeRendering:s,doubleSided:n,doubleSidedType:d}=o;return super.getConfiguration(e,a,this._configuration),i.hasNormalTexture=o.hasNormalTexture,i.hasColorTexture=o.hasColorTexture,i.hasMetallicRoughnessTexture=o.hasMetallicRoughnessTexture,i.hasOcclusionTexture=o.hasOcclusionTexture,i.hasVertexTangents=!s&&o.hasVertexTangents,i.instanced=o.instanced,i.instancedDoublePrecision=o.instancedDoublePrecision,i.hasVVColor=!!o.vvColor,i.hasVVSize=!!o.vvSize,i.hasVerticalOffset=o.verticalOffset!=null,i.hasScreenSizePerspective=o.screenSizePerspective!=null,i.hasSlicePlane=o.hasSlicePlane,i.alphaDiscardMode=o.textureAlphaMode,i.normalType=s?0:o.normalType,i.transparent=this.transparent,i.writeDepth=o.writeDepth,i.customDepthTest=o.customDepthTest??0,i.hasOccludees=a.hasOccludees,i.cullFace=o.hasSlicePlane?0:o.cullFace,i.cullAboveTerrain=a.cullAboveTerrain,i.hasModelTransformation=!s&&o.modelTransformation!=null,i.hasVertexColors=o.hasVertexColors,i.hasSymbolColors=o.hasSymbolColors,i.doubleSidedMode=s?2:n&&d==="normal"?1:n&&d==="winding-order"?2:0,i.instancedFeatureAttribute=o.instancedFeatureAttribute,i.instancedColor=o.instancedColor,re(e)?(i.terrainDepthTest=a.terrainDepthTest,i.receiveShadows=o.receiveShadows,i.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&a.ssao!=null):(i.terrainDepthTest=!1,i.receiveShadows=i.receiveAmbientOcclusion=!1),i.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,i.pbrMode=o.usePBR?o.isSchematic?2:1:0,i.emissionSource=o.emissionSource,i.offsetBackfaces=!(!this.transparent||!o.offsetTransparentBackfaces),i.oitPass=a.oitPass,i.enableOffset=a.enableOffset,i.snowCover=a.snowCover>0,i.hasColorTextureTransform=!!o.colorTextureTransformMatrix,i.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,i.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,i.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,i.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,i}intersect(e,a,o,i,s,n){if(this.parameters.verticalOffset!=null){const d=o.camera;I(Fe,a[12],a[13],a[14]);let c=null;switch(o.viewingMode){case 1:c=aa(tt,Fe);break;case 2:c=ta(tt,Qo)}let u=0;const g=Te(er,Fe,d.eye),f=oa(g),M=ke(g,g,1/f);let $=null;this.parameters.screenSizePerspective&&($=ra(c,M)),u+=Ea(d,f,this.parameters.verticalOffset,$??0,this.parameters.screenSizePerspective,null),ke(c,c,u),ia($e,c,o.transform.inverseRotation),i=Te(Jo,i,$e),s=Te(Ko,s,$e)}Aa(e,o,i,s,Pa(o.verticalOffset),n)}createGLMaterial(e){return new qo(e)}createBufferWriter(){return new Da(this._layout)}get transparent(){return Xo(this.parameters)}}class qo extends Ga{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const a=this._material.parameters;this.updateTexture(a.textureId);const o=e.camera.viewInverseTransposeMatrix;return I(a.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(a.treeRendering?Ne:ve,e)}}class Zo extends Ho{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissiveStrength(){return this.emissiveStrengthFromSymbol*this.emissiveStrengthKHR}get emissionSource(){return this.treeRendering?0:this.emissiveTextureId!=null&&this.emissiveSource===0?3:this.usePBR?this.emissiveSource===0?2:1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}}function Xo(t){const{drivenOpacity:e,opacity:a,externalColor:o,layerOpacity:i,texture:s,textureId:n,textureAlphaMode:d,colorMixMode:c}=t,u=o[3];return e||a<1&&c!=="replace"||u<1&&c!=="ignore"||i<1||(s!=null||n!=null)&&d!==1&&d!==2&&c!=="replace"}const Jo=x(),Ko=x(),Qo=na(0,0,1),tt=x(),$e=x(),Fe=x(),er=x();export{Je as A,Mo as B,Zo as D,Vr as F,jo as J,Uo as _,Z as a,br as b,so as c,Ft as d,$t as e,It as f,Ge as g,zo as h,ho as i,Xo as j,He as k,Rt as l,bo as m,yr as n,Mr as o,Be as p,ae as q,pe as r,Tr as s,ro as t,oo as u,De as v,Or as w,Co as x,Rr as y,uo as z};
