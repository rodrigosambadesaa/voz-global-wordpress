import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$1}from"./sc-spinner2.js";const scBlockUiCss=':host{display:block;position:var(--sc-block-ui-position, absolute);top:-5px;left:-5px;right:-5px;bottom:-5px;overflow:hidden;display:flex;align-items:center;justify-content:center}:host>*{z-index:1}:host:after{content:"";position:var(--sc-block-ui-position, absolute);top:0;left:0;right:0;bottom:0;cursor:wait;background:var(--sc-block-ui-background-color, var(--sc-color-white));opacity:var(--sc-block-ui-opacity, 0.15)}:host.transparent:after{background:transparent}.overlay__content{font-size:var(--sc-font-size-large);font-weight:var(--sc-font-weight-semibold);display:grid;gap:0.5em;text-align:center}',ScBlockUi=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.zIndex=1,this.transparent=void 0,this.spinner=void 0}render(){return h("div",{part:"base",class:{overlay:!0,transparent:this.transparent},style:{"z-index":this.zIndex.toString()}},h("div",{class:"overlay__content",part:"content"},h("slot",{name:"spinner"},!this.transparent&&this.spinner&&h("sc-spinner",null)),h("slot",null)))}static get style(){return scBlockUiCss}},[1,"sc-block-ui",{zIndex:[2,"z-index"],transparent:[4],spinner:[4]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-block-ui","sc-spinner"].forEach((t=>{switch(t){case"sc-block-ui":customElements.get(t)||customElements.define(t,ScBlockUi);break;case"sc-spinner":customElements.get(t)||defineCustomElement$1()}}))}export{ScBlockUi as S,defineCustomElement as d};