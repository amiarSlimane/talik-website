"use strict";(self.webpackChunktalik=self.webpackChunktalik||[]).push([[117],{8117:(e,t,n)=>{n.d(t,{c:()=>b});var i=n(8241),o=n(8262),r=n(1260);let s=()=>{};function a(e){e.willRemove(),e.willDestroy()}s=function(e){let{positional:t,named:n}=e;const i=t;for(let e=0;e<i.length;e++)i[e];Object.values(n)};class l{constructor(e){var t,n,i;t=this,n="capabilities",i=(0,o.capabilities)("3.22"),n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,this.owner=e}createModifier(e,t){const n=new e(this.owner,t);return(0,r.registerDestructor)(n,a),{instance:n,implementsModify:d(n),element:null}}installModifier(e,t,n){const i=function(e,t){const n=e;return n.element=t,n}(e,t),{instance:o}=i;!function(e,t){e[c]=t}(o,t),i.implementsModify?o.modify(t,n.positional,n.named):(s(n),o.didReceiveArguments(),o.didInstall())}updateModifier(e,t){const{instance:n}=e;!function(e,t){e[u]=t}(e.instance,t),e.implementsModify?n.modify(e.element,t.positional,t.named):(s(t),n.didUpdateArguments(),n.didReceiveArguments())}destroyModifier(e){(0,r.destroy)(e.instance)}}n(6975);const d=e=>e.modify!==f.prototype.modify,c=Symbol("Element"),u=Symbol("Args");class f{constructor(e,t){(0,i.setOwner)(this,e),this[u]=t}modify(e,t,n){}didReceiveArguments(){}didUpdateArguments(){}didInstall(){}willRemove(){}willDestroy(){}get isDestroying(){return(0,r.isDestroying)(this)}get isDestroyed(){return(0,r.isDestroyed)(this)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(f.prototype,"args",{enumerable:!0,get(){return this[u]}}),Object.defineProperty(f.prototype,"element",{enumerable:!0,get(){var e;return null!==(e=this[c])&&void 0!==e?e:null}}),(0,o.setModifierManager)((e=>new l(e)),f);class p{constructor(e){var t;m(this,"capabilities",(0,o.capabilities)("3.22")),m(this,"options",void 0),this.options={eager:null===(t=null==e?void 0:e.eager)||void 0===t||t}}createModifier(e){return{element:null,instance:e}}installModifier(e,t,n){const i=function(e,t){const n=e;return n.element=t,n}(e,t),{positional:o,named:r}=n,a=e.instance(t,o,r);"function"==typeof a&&(i.teardown=a),this.options.eager&&s(n)}updateModifier(e,t){e.teardown&&e.teardown();const n=e.instance(e.element,t.positional,t.named);"function"==typeof n&&(e.teardown=n),this.options.eager&&s(t)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}}const y=new p({eager:!0}),g=new p({eager:!1});function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{eager:!0};return(0,o.setModifierManager)((()=>t.eager?y:g),e)}}}]);