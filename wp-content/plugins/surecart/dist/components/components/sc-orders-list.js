import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{o as onFirstVisible}from"./lazy.js";import{d as defineCustomElement$m}from"./sc-alert2.js";import{d as defineCustomElement$l}from"./sc-block-ui2.js";import{d as defineCustomElement$k}from"./sc-button2.js";import{d as defineCustomElement$j}from"./sc-card2.js";import{d as defineCustomElement$i}from"./sc-dashboard-module2.js";import{d as defineCustomElement$h}from"./sc-divider2.js";import{d as defineCustomElement$g}from"./sc-empty2.js";import{d as defineCustomElement$f}from"./sc-flex2.js";import{d as defineCustomElement$e}from"./sc-format-date2.js";import{d as defineCustomElement$d}from"./sc-format-number2.js";import{d as defineCustomElement$c}from"./sc-icon2.js";import{d as defineCustomElement$b}from"./sc-order-shipment-badge2.js";import{d as defineCustomElement$a}from"./sc-order-status-badge2.js";import{d as defineCustomElement$9}from"./sc-pagination2.js";import{d as defineCustomElement$8}from"./sc-skeleton2.js";import{d as defineCustomElement$7}from"./sc-spinner2.js";import{d as defineCustomElement$6}from"./sc-stacked-list2.js";import{d as defineCustomElement$5}from"./sc-stacked-list-row2.js";import{d as defineCustomElement$4}from"./sc-tag2.js";import{d as defineCustomElement$3}from"./sc-text2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";import{a as addQueryArgs}from"./add-query-args.js";const scOrdersListCss=":host{display:block}.orders-list{display:grid;gap:0.75em}.orders-list__status{display:flex;align-items:center;gap:var(--sc-spacing-x-small)}.orders-list__heading{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between}.orders-list__title{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense)}.orders-list a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.order__row{color:var(--sc-color-gray-800);text-decoration:none;display:grid;align-items:center;justify-content:space-between;gap:0;grid-template-columns:1fr 1fr 1fr auto;margin:0;padding:var(--sc-spacing-small) var(--sc-spacing-large)}.order__row:not(:last-child){border-bottom:1px solid var(--sc-color-gray-200)}.order__row:hover{background:var(--sc-color-gray-50)}.order__date{font-weight:var(--sc-font-weight-semibold)}",ScOrdersList$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.query={page:1,per_page:10},this.allLink=void 0,this.heading=void 0,this.isCustomer=void 0,this.orders=[],this.loading=void 0,this.busy=void 0,this.error=void 0,this.pagination={total:0,total_pages:0}}componentWillLoad(){onFirstVisible(this.el,(()=>{this.initialFetch()}))}async initialFetch(){try{this.loading=!0,await this.getOrders()}catch(e){console.error(this.error),this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.loading=!1}}async fetchOrders(){try{this.busy=!0,await this.getOrders()}catch(e){console.error(this.error),this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.busy=!1}}async getOrders(){if(!this.isCustomer)return;const e=await await apiFetch({path:addQueryArgs("surecart/v1/orders/",{expand:["checkout","checkout.line_items","checkout.charge"],...this.query}),parse:!1});return this.pagination={total:parseInt(e.headers.get("X-WP-Total")),total_pages:parseInt(e.headers.get("X-WP-TotalPages"))},this.orders=await e.json(),this.orders}nextPage(){this.query.page=this.query.page+1,this.fetchOrders()}prevPage(){this.query.page=this.query.page-1,this.fetchOrders()}renderStatusBadge(e){const{status:t,checkout:s}=e,{charge:r}=s;if(r&&"object"==typeof r){if(null==r?void 0:r.fully_refunded)return h("sc-tag",{type:"danger"},wp.i18n.__("Refunded","surecart"));if(null==r?void 0:r.refunded_amount)return h("sc-tag",{type:"info"},wp.i18n.__("Partially Refunded","surecart"))}return h("sc-order-status-badge",{status:t})}renderLoading(){return h("sc-card",{noPadding:!0},h("sc-stacked-list",null,h("sc-stacked-list-row",{style:{"--columns":"4"},"mobile-size":500},[...Array(4)].map((()=>h("sc-skeleton",{style:{width:"100px",display:"inline-block"}}))))))}renderEmpty(){return h("div",null,h("sc-divider",{style:{"--spacing":"0"}}),h("slot",{name:"empty"},h("sc-empty",{icon:"shopping-bag"},wp.i18n.__("You don't have any orders.","surecart"))))}renderList(){return this.orders.map((e=>{var t,s;const{checkout:r,created_at:i,id:n}=e;if(!r)return null;const{line_items:o,amount_due:a,currency:d,charge:l}=r;return h("sc-stacked-list-row",{href:addQueryArgs(window.location.href,{action:"show",model:"order",id:n}),style:{"--columns":"4"},"mobile-size":500},h("div",null,"string"!=typeof l&&h("sc-format-date",{class:"order__date",date:1e3*((null==l?void 0:l.created_at)||i),month:"short",day:"numeric",year:"numeric"})),h("div",null,h("sc-text",{truncate:!0,style:{"--color":"var(--sc-color-gray-500)"}},wp.i18n.sprintf(wp.i18n._n("%s item","%s items",(null===(t=null==o?void 0:o.pagination)||void 0===t?void 0:t.count)||0,"surecart"),(null===(s=null==o?void 0:o.pagination)||void 0===s?void 0:s.count)||0))),h("div",{class:"orders-list__status"},this.renderStatusBadge(e),h("sc-order-shipment-badge",{status:null==e?void 0:e.shipment_status})),h("div",null,h("sc-format-number",{type:"currency",currency:d,value:a})))}))}renderContent(){var e;return this.loading?this.renderLoading():0===(null===(e=this.orders)||void 0===e?void 0:e.length)?this.renderEmpty():h("sc-card",{"no-padding":!0},h("sc-stacked-list",null,this.renderList()))}render(){var e,t;return h("sc-dashboard-module",{class:"orders-list",error:this.error},h("span",{slot:"heading"},h("slot",{name:"heading"},this.heading||wp.i18n.__("Order History","surecart"))),!!this.allLink&&!!(null===(e=this.orders)||void 0===e?void 0:e.length)&&h("sc-button",{type:"link",href:this.allLink,slot:"end","aria-label":wp.i18n.sprintf(wp.i18n.__("View all %s","surecart"),this.heading||wp.i18n.__("Order History","surecart"))},wp.i18n.__("View all","surecart"),h("sc-icon",{"aria-hidden":"true",name:"chevron-right",slot:"suffix"})),this.renderContent(),!this.allLink&&h("sc-pagination",{page:this.query.page,perPage:this.query.per_page,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:null===(t=null==this?void 0:this.orders)||void 0===t?void 0:t.length,onScNextPage:()=>this.nextPage(),onScPrevPage:()=>this.prevPage()}),this.busy&&h("sc-block-ui",null))}get el(){return this}static get style(){return scOrdersListCss}},[1,"sc-orders-list",{query:[1040],allLink:[1,"all-link"],heading:[1],isCustomer:[4,"is-customer"],orders:[32],loading:[32],busy:[32],error:[32],pagination:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-orders-list","sc-alert","sc-block-ui","sc-button","sc-card","sc-dashboard-module","sc-divider","sc-empty","sc-flex","sc-format-date","sc-format-number","sc-icon","sc-order-shipment-badge","sc-order-status-badge","sc-pagination","sc-skeleton","sc-spinner","sc-stacked-list","sc-stacked-list-row","sc-tag","sc-text","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-orders-list":customElements.get(e)||customElements.define(e,ScOrdersList$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$m();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$l();break;case"sc-button":customElements.get(e)||defineCustomElement$k();break;case"sc-card":customElements.get(e)||defineCustomElement$j();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$i();break;case"sc-divider":customElements.get(e)||defineCustomElement$h();break;case"sc-empty":customElements.get(e)||defineCustomElement$g();break;case"sc-flex":customElements.get(e)||defineCustomElement$f();break;case"sc-format-date":customElements.get(e)||defineCustomElement$e();break;case"sc-format-number":customElements.get(e)||defineCustomElement$d();break;case"sc-icon":customElements.get(e)||defineCustomElement$c();break;case"sc-order-shipment-badge":customElements.get(e)||defineCustomElement$b();break;case"sc-order-status-badge":customElements.get(e)||defineCustomElement$a();break;case"sc-pagination":customElements.get(e)||defineCustomElement$9();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$8();break;case"sc-spinner":customElements.get(e)||defineCustomElement$7();break;case"sc-stacked-list":customElements.get(e)||defineCustomElement$6();break;case"sc-stacked-list-row":customElements.get(e)||defineCustomElement$5();break;case"sc-tag":customElements.get(e)||defineCustomElement$4();break;case"sc-text":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScOrdersList=ScOrdersList$1,defineCustomElement=defineCustomElement$1;export{ScOrdersList,defineCustomElement};