/*
 * Copyright 2021 GFXFundamentals.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of GFXFundamentals. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function(t,n){"function"==typeof define&&define.amd?define([],function(){return n.call(t)}):t.webglUtils=n.call(t)}(this,function(){"use strict";const t=this;var n;function e(n){t.console&&(t.console.error?t.console.error(n):t.console.log&&t.console.log(n))}function r(t,n,r,o){const i=o||e,u=t.createShader(r);if(t.shaderSource(u,n),t.compileShader(u),!t.getShaderParameter(u,t.COMPILE_STATUS)){return i("*** Error compiling shader '"+u+"':"+t.getShaderInfoLog(u)+"\n"+n.split("\n").map((t,n)=>`${n+1}: ${t}`).join("\n")),t.deleteShader(u),null}return u}function o(t,n,r,o,i){const u=i||e,f=t.createProgram();if(n.forEach(function(n){t.attachShader(f,n)}),r&&r.forEach(function(n,e){t.bindAttribLocation(f,o?o[e]:e,n)}),t.linkProgram(f),!t.getProgramParameter(f,t.LINK_STATUS)){return u("Error in program linking:"+t.getProgramInfoLog(f)),t.deleteProgram(f),null}return f}function i(t,n,e,o){let i,u="";const f=document.getElementById(n);if(!f)throw"*** Error: unknown script element"+n;if(u=f.text,!e)if("x-shader/x-vertex"===f.type)i=t.VERTEX_SHADER;else if("x-shader/x-fragment"===f.type)i=t.FRAGMENT_SHADER;else if(i!==t.VERTEX_SHADER&&i!==t.FRAGMENT_SHADER)throw"*** Error: unknown shader type";return r(t,u,e||i,o)}(n=n||t)===n.top&&(console.log("%c%s","color:blue;font-weight:bold;","for more about webgl-utils.js see:"),console.log("%c%s","color:blue;font-weight:bold;","https://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html"));const u=["VERTEX_SHADER","FRAGMENT_SHADER"];function f(t,n){return n===t.SAMPLER_2D?t.TEXTURE_2D:n===t.SAMPLER_CUBE?t.TEXTURE_CUBE_MAP:void 0}function c(t,n){let e=0;function r(n,r){const o=t.getUniformLocation(n,r.name),i=r.type,u=r.size>1&&"[0]"===r.name.substr(-3);if(i===t.FLOAT&&u)return function(n){t.uniform1fv(o,n)};if(i===t.FLOAT)return function(n){t.uniform1f(o,n)};if(i===t.FLOAT_VEC2)return function(n){t.uniform2fv(o,n)};if(i===t.FLOAT_VEC3)return function(n){t.uniform3fv(o,n)};if(i===t.FLOAT_VEC4)return function(n){t.uniform4fv(o,n)};if(i===t.INT&&u)return function(n){t.uniform1iv(o,n)};if(i===t.INT)return function(n){t.uniform1i(o,n)};if(i===t.INT_VEC2)return function(n){t.uniform2iv(o,n)};if(i===t.INT_VEC3)return function(n){t.uniform3iv(o,n)};if(i===t.INT_VEC4)return function(n){t.uniform4iv(o,n)};if(i===t.BOOL)return function(n){t.uniform1iv(o,n)};if(i===t.BOOL_VEC2)return function(n){t.uniform2iv(o,n)};if(i===t.BOOL_VEC3)return function(n){t.uniform3iv(o,n)};if(i===t.BOOL_VEC4)return function(n){t.uniform4iv(o,n)};if(i===t.FLOAT_MAT2)return function(n){t.uniformMatrix2fv(o,!1,n)};if(i===t.FLOAT_MAT3)return function(n){t.uniformMatrix3fv(o,!1,n)};if(i===t.FLOAT_MAT4)return function(n){t.uniformMatrix4fv(o,!1,n)};if((i===t.SAMPLER_2D||i===t.SAMPLER_CUBE)&&u){const n=[];for(let t=0;t<info.size;++t)n.push(e++);return c=f(t,i),n=n,function(e){t.uniform1iv(o,n),e.forEach(function(e,r){t.activeTexture(t.TEXTURE0+n[r]),t.bindTexture(c,e)})}}var c,s;if(i===t.SAMPLER_2D||i===t.SAMPLER_CUBE)return function(n,e){return function(r){t.uniform1i(o,e),t.activeTexture(t.TEXTURE0+e),t.bindTexture(n,r)}}(f(t,i),e++);throw"unknown type: 0x"+i.toString(16)}const o={},i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let e=0;e<i;++e){const i=t.getActiveUniform(n,e);if(!i)break;let u=i.name;"[0]"===u.substr(-3)&&(u=u.substr(0,u.length-3));const f=r(n,i);o[u]=f}return o}function s(t,...n){t=t.uniformSetters||t;for(const e of n)Object.keys(e).forEach(function(n){const r=t[n];r&&r(e[n])})}function a(t,n){const e={};function r(n){return function(e){if(e.value)switch(t.disableVertexAttribArray(n),e.value.length){case 4:t.vertexAttrib4fv(n,e.value);break;case 3:t.vertexAttrib3fv(n,e.value);break;case 2:t.vertexAttrib2fv(n,e.value);break;case 1:t.vertexAttrib1fv(n,e.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else t.bindBuffer(t.ARRAY_BUFFER,e.buffer),t.enableVertexAttribArray(n),t.vertexAttribPointer(n,e.numComponents||e.size,e.type||t.FLOAT,e.normalize||!1,e.stride||0,e.offset||0)}}const o=t.getProgramParameter(n,t.ACTIVE_ATTRIBUTES);for(let i=0;i<o;++i){const o=t.getActiveAttrib(n,i);if(!o)break;const u=t.getAttribLocation(n,o.name);e[o.name]=r(u)}return e}function l(t,n){t=t.attribSetters||t,Object.keys(n).forEach(function(e){const r=t[e];r&&r(n[e])})}function m(t,n,e,r){const o=t.createVertexArray();return t.bindVertexArray(o),l(n,e),r&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r),t.bindVertexArray(null),o}function E(t,n,e){l(n,e.attribs),e.indices&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.indices)}const A=["","MOZ_","OP_","WEBKIT_"];function d(t,n,e){return function(t,n){let e=0;return t.push=function(){for(let n=0;n<arguments.length;++n){const r=arguments[n];if(r instanceof Array||r.buffer&&r.buffer instanceof ArrayBuffer)for(let n=0;n<r.length;++n)t[e++]=r[n];else t[e++]=r}},t.reset=function(t){e=t||0},t.numComponents=n,Object.defineProperty(t,"numElements",{get:function(){return this.length/this.numComponents|0}}),t}(new(e||Float32Array)(t*n),t)}function g(t,n,e,r){e=e||t.ARRAY_BUFFER;const o=t.createBuffer();return t.bindBuffer(e,o),t.bufferData(e,n,r||t.STATIC_DRAW),o}function b(t){return"indices"!==t}function h(t){return t.buffer&&t.buffer instanceof ArrayBuffer}function T(t,n){let e;if(n%(e=t.indexOf("coord")>=0?2:t.indexOf("color")>=0?4:3)>0)throw"can not guess numComponents. You should specify it.";return e}function p(t,n){if(h(t))return t;if(t.data&&h(t.data))return t.data;Array.isArray(t)&&(t={data:t}),t.numComponents||(t.numComponents=T(n,t.length));let e=t.type;e||"indices"===n&&(e=Uint16Array);const r=d(t.numComponents,t.data.length/t.numComponents|0,e);return r.push(t.data),r}function y(t,n,e){const r=e||function(t){const n={};return Object.keys(t).filter(b).forEach(function(t){n["a_"+t]=t}),n}(n),o={};return Object.keys(r).forEach(function(e){const i=r[e],u=n[i];if(u.value)o[e]={value:u.value};else{const n=p(u,i);o[e]={buffer:g(t,n),numComponents:u.numComponents||n.numComponents||T(i),type:function(t,n){if(n instanceof Int8Array)return t.BYTE;if(n instanceof Uint8Array)return t.UNSIGNED_BYTE;if(n instanceof Int16Array)return t.SHORT;if(n instanceof Uint16Array)return t.UNSIGNED_SHORT;if(n instanceof Int32Array)return t.INT;if(n instanceof Uint32Array)return t.UNSIGNED_INT;if(n instanceof Float32Array)return t.FLOAT;throw"unsupported typed array type"}(t,n),normalize:(f=n,f instanceof Int8Array||f instanceof Uint8Array)}}var f}),o}function v(t){return t.length?t:t.data}const S=/coord|texture/i,_=/color|colour/i;function T(t,n){let e;if(n%(e=S.test(t)?2:_.test(t)?4:3)>0)throw new Error(`Can not guess numComponents for attribute '${t}'. Tried ${e} but ${n} values is not evenly divisible by ${e}. You should specify it.`);return e}const R=["position","positions","a_position"];function C(t){let n;for(const e of R)if(e in t){n=e;break}const e=t[n=n||Object.keys(t)[0]],r=v(e).length,o=function(t,n){return t.numComponents||t.size||T(n,v(t).length)}(e,n),i=r/o;if(r%o>0)throw new Error(`numComponents ${o} not correct for length ${r}`);return i}function F(t,n,e,r,o){const i=n.indices;e=void 0===e?t.TRIANGLES:e;const u=void 0===r?n.numElements:r;o=void 0===o?0:o,i?t.drawElements(e,u,t.UNSIGNED_SHORT,o):t.drawArrays(e,o,u)}var O;return!!!document.documentMode&&!!window.StyleMedia&&(HTMLCanvasElement.prototype.getContext=(O=HTMLCanvasElement.prototype.getContext,function(){let t=arguments;return"webgl"===t[0]&&((t=[].slice.call(arguments))[0]="experimental-webgl"),O.apply(this,t)})),{createAugmentedTypedArray:d,createAttribsFromArrays:y,createBuffersFromArrays:function(t,n){const e={};return Object.keys(n).forEach(function(r){const o="indices"===r?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER,i=p(n[r],name);e[r]=g(t,i,o)}),n.indices?e.numElements=n.indices.length:n.position&&(e.numElements=n.position.length/3),e},createBufferInfoFromArrays:function(t,n,e){const r={attribs:y(t,n,e)};let o=n.indices;return o?(o=p(o,"indices"),r.indices=g(t,o,t.ELEMENT_ARRAY_BUFFER),r.numElements=o.length):r.numElements=C(n),r},createAttributeSetters:a,createProgram:o,createProgramFromScripts:function(t,n,e,r,f){const c=[];for(let e=0;e<n.length;++e)c.push(i(t,n[e],t[u[e]],f));return o(t,c,e,r,f)},createProgramFromSources:function(t,n,e,i,f){const c=[];for(let e=0;e<n.length;++e)c.push(r(t,n[e],t[u[e]],f));return o(t,c,e,i,f)},createProgramInfo:function(t,n,e,r,o){n=n.map(function(t){const n=document.getElementById(t);return n?n.text:t});const i=webglUtils.createProgramFromSources(t,n,e,r,o);return i?{program:i,uniformSetters:c(t,i),attribSetters:a(t,i)}:null},createUniformSetters:c,createVAOAndSetAttributes:m,createVAOFromBufferInfo:function(t,n,e){return m(t,n.attribSetters||n,e.attribs,e.indices)},drawBufferInfo:F,drawObjectList:function(t,n){let e=null,r=null;n.forEach(function(n){const o=n.programInfo,i=n.bufferInfo;let u=!1;o!==e&&(e=o,t.useProgram(o.program),u=!0),(u||i!==r)&&(r=i,E(t,o.attribSetters,i)),s(o.uniformSetters,n.uniforms),F(t,i)})},glEnumToString:function(t,n){const e=[];for(const r in t)t[r]===n&&e.push(r);return e.length?e.join(" | "):`0x${n.toString(16)}`},getExtensionWithKnownPrefixes:function(t,n){for(let e=0;e<A.length;++e){const r=A[e]+n,o=t.getExtension(r);if(o)return o}},resizeCanvasToDisplaySize:function(t,n){n=n||1;const e=t.clientWidth*n|0,r=t.clientHeight*n|0;return(t.width!==e||t.height!==r)&&(t.width=e,t.height=r,!0)},setAttributes:l,setBuffersAndAttributes:E,setUniforms:s}});