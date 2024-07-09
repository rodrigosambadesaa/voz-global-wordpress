import{proxyCustomElement,HTMLElement,h,Fragment}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{o as onFirstVisible}from"./lazy.js";import{p as productNameWithPrice,i as intervalString}from"./price.js";import{f as formatTaxDisplay}from"./tax.js";import{d as defineCustomElement$s}from"./sc-alert2.js";import{d as defineCustomElement$r}from"./sc-block-ui2.js";import{d as defineCustomElement$q}from"./sc-button2.js";import{d as defineCustomElement$p}from"./sc-card2.js";import{d as defineCustomElement$o}from"./sc-cc-logo2.js";import{d as defineCustomElement$n}from"./sc-coupon-form2.js";import{d as defineCustomElement$m}from"./sc-dashboard-module2.js";import{d as defineCustomElement$l}from"./sc-divider2.js";import{d as defineCustomElement$k}from"./sc-flex2.js";import{d as defineCustomElement$j}from"./sc-form2.js";import{d as defineCustomElement$i}from"./sc-form-control2.js";import{d as defineCustomElement$h}from"./sc-format-date2.js";import{d as defineCustomElement$g}from"./sc-format-number2.js";import{d as defineCustomElement$f}from"./sc-icon2.js";import{d as defineCustomElement$e}from"./sc-input2.js";import{d as defineCustomElement$d}from"./sc-line-item2.js";import{d as defineCustomElement$c}from"./sc-manual-payment-method2.js";import{d as defineCustomElement$b}from"./sc-payment-method2.js";import{d as defineCustomElement$a}from"./sc-product-line-item2.js";import{d as defineCustomElement$9}from"./sc-prose2.js";import{d as defineCustomElement$8}from"./sc-quantity-select2.js";import{d as defineCustomElement$7}from"./sc-skeleton2.js";import{d as defineCustomElement$6}from"./sc-spinner2.js";import{d as defineCustomElement$5}from"./sc-tag2.js";import{d as defineCustomElement$4}from"./sc-text2.js";import{d as defineCustomElement$3}from"./sc-tooltip2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";import{a as addQueryArgs}from"./add-query-args.js";const scUpcomingInvoiceCss=":host{display:block;position:relative}.upcoming-invoice{display:grid;gap:var(--sc-spacing-large)}.upcoming-invoice>*{display:grid;gap:var(--sc-spacing-medium)}.new-plan{display:grid;gap:0.25em;color:var(--sc-input-label-color)}.new-plan__heading{font-weight:var(--sc-font-weight-bold)}",ScUpcomingInvoice$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.heading=void 0,this.successUrl=void 0,this.subscriptionId=void 0,this.priceId=void 0,this.variantId=void 0,this.quantity=void 0,this.discount=void 0,this.payment_method=void 0,this.quantityUpdatesEnabled=!0,this.adHocAmount=void 0,this.loading=void 0,this.busy=void 0,this.error=void 0,this.price=void 0,this.invoice=void 0,this.couponError=void 0}componentWillLoad(){onFirstVisible(this.el,(()=>{this.fetchItems()}))}isFutureInvoice(){return this.invoice.start_at>=(new Date).getTime()/1e3}async fetchItems(){var e,t;try{this.loading=!0,await Promise.all([this.getInvoice(),this.getPrice()])}catch(s){console.error(s),this.error=(null===(t=null===(e=null==s?void 0:s.additional_errors)||void 0===e?void 0:e[0])||void 0===t?void 0:t.message)||(null==s?void 0:s.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.loading=!1}}async getPrice(){this.priceId&&(this.price=await apiFetch({path:addQueryArgs(`surecart/v1/prices/${this.priceId}`,{expand:["product"]})}))}async getInvoice(){if(this.subscriptionId)return this.invoice=await apiFetch({method:"PATCH",path:addQueryArgs(`surecart/v1/subscriptions/${this.subscriptionId}/upcoming_period/`,{expand:["period.checkout","checkout.line_items","line_item.price","price.product","checkout.payment_method","checkout.manual_payment_method","checkout.discount","discount.promotion","discount.coupon","payment_method.card","payment_method.payment_instrument","payment_method.paypal_account","payment_method.bank_account"]}),data:{price:this.priceId,variant:this.variantId,quantity:this.quantity,...this.adHocAmount?{ad_hoc_amount:this.adHocAmount}:{},...this.discount?{discount:this.discount}:{}}}),this.invoice}async applyCoupon(e){try{this.couponError="",this.busy=!0,this.discount={promotion_code:e.detail},await this.getInvoice()}catch(e){this.couponError=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.busy=!1}}async updateQuantity(e){try{this.error="",this.busy=!0,this.quantity=e.detail,await this.getInvoice()}catch(e){this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.busy=!1}}async onSubmit(){try{this.error="",this.busy=!0,await apiFetch({path:`surecart/v1/subscriptions/${this.subscriptionId}`,method:"PATCH",data:{price:this.priceId,quantity:this.quantity,variant:this.variantId,...this.adHocAmount?{ad_hoc_amount:this.adHocAmount}:{},...this.discount?{discount:this.discount}:{}}}),this.successUrl?window.location.assign(this.successUrl):this.busy=!1}catch(e){this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart"),this.busy=!1}}renderName(e){return"string"!=typeof(null==e?void 0:e.product)?productNameWithPrice(e):wp.i18n.__("Plan","surecart")}renderRenewalText(){var e;return this.isFutureInvoice()?h("div",null,wp.i18n.__("You'll be switched to this plan","surecart")," ",h("strong",null,wp.i18n.__("at the end of your billing cycle on","surecart")," ",h("sc-format-date",{type:"timestamp",date:null===(e=this.invoice)||void 0===e?void 0:e.start_at,month:"short",day:"numeric",year:"numeric"}))):h("div",null,wp.i18n.__("You'll be switched to this plan","surecart")," ",h("strong",null,wp.i18n.__("immediately","surecart")))}renderEmpty(){return h("slot",{name:"empty"},wp.i18n.__("Something went wrong.","surecart"))}renderLoading(){return h("div",null,h("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"40%"}}))}renderContent(){var e;if(this.loading)return this.renderLoading();if(!(null===(e=this.invoice)||void 0===e?void 0:e.checkout))return this.renderEmpty();const t=this.invoice.checkout;return h("div",{class:"new-plan"},h("div",{class:"new-plan__heading"},this.renderName(this.price)),h("div",null,h("sc-format-number",{type:"currency",currency:null==t?void 0:t.currency,value:null==t?void 0:t.total_amount})," ",intervalString(this.price)),h("div",{style:{fontSize:"var(--sc-font-size-small)"}},this.renderRenewalText()))}renderSummary(){var e,t;if(this.loading)return this.renderLoading();if(!this.invoice)return this.renderEmpty();const s=null===(e=this.invoice)||void 0===e?void 0:e.checkout,n=(null==s?void 0:s.manual_payment)?null==s?void 0:s.manual_payment_method:null;return h(Fragment,null,null===(t=null==s?void 0:s.line_items)||void 0===t?void 0:t.data.map((e=>{var t,s,n,i,o,r;return h("sc-product-line-item",{imageUrl:null===(s=null===(t=e.price)||void 0===t?void 0:t.product)||void 0===s?void 0:s.image_url,name:null===(i=null===(n=e.price)||void 0===n?void 0:n.product)||void 0===i?void 0:i.name,priceName:null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.name,variantLabel:((null==e?void 0:e.variant_options)||[]).filter(Boolean).join(" / ")||null,editable:this.quantityUpdatesEnabled,removable:!1,quantity:null==e?void 0:e.quantity,amount:null==e?void 0:e.total_amount,currency:null===(r=null==e?void 0:e.price)||void 0===r?void 0:r.currency,interval:intervalString(null==e?void 0:e.price),onScUpdateQuantity:e=>this.updateQuantity(e)})})),h("sc-line-item",null,h("span",{slot:"description"},wp.i18n.__("Subtotal","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==s?void 0:s.currency,value:null==s?void 0:s.subtotal_amount})),!!s.proration_amount&&h("sc-line-item",null,h("span",{slot:"description"},wp.i18n.__("Proration Credit","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==s?void 0:s.currency,value:-(null==s?void 0:s.proration_amount)})),!!s.applied_balance_amount&&h("sc-line-item",null,h("span",{slot:"description"},wp.i18n.__("Applied Balance","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==s?void 0:s.currency,value:-(null==s?void 0:s.applied_balance_amount)})),!!s.trial_amount&&h("sc-line-item",null,h("span",{slot:"description"},wp.i18n.__("Trial","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==s?void 0:s.currency,value:null==s?void 0:s.trial_amount})),h("sc-coupon-form",{discount:null==s?void 0:s.discount,label:wp.i18n.__("Add Coupon Code","surecart"),onScApplyCoupon:e=>this.applyCoupon(e),error:this.couponError,collapsed:!0,buttonText:wp.i18n.__("Add Coupon Code","surecart")}),!!s.tax_amount&&h("sc-line-item",null,h("span",{slot:"description"},formatTaxDisplay(null==s?void 0:s.tax_label)),h("sc-format-number",{slot:"price",type:"currency",currency:null==s?void 0:s.currency,value:null==s?void 0:s.tax_amount})),h("sc-divider",{style:{"--spacing":"0"}}),h("sc-line-item",null,h("span",{slot:"description"},wp.i18n.__("Payment","surecart")),h("a",{href:addQueryArgs(window.location.href,{action:"payment"}),slot:"price-description"},h("sc-flex",{"justify-content":"flex-start","align-items":"center",style:{"--spacing":"0.5em"}},!!n&&h("sc-manual-payment-method",{paymentMethod:n}),!n&&h("sc-payment-method",{paymentMethod:null==s?void 0:s.payment_method}),h("sc-icon",{name:"edit-3"})))),h("sc-line-item",{style:{"--price-size":"var(--sc-font-size-x-large)"}},h("span",{slot:"title"},wp.i18n.__("Total Due","surecart")),h("sc-format-number",{slot:"price",type:"currency",currency:null==s?void 0:s.currency,value:null==s?void 0:s.amount_due}),h("span",{slot:"currency"},s.currency)))}render(){return h("div",{class:"upcoming-invoice"},this.error&&h("sc-alert",{open:!!this.error,type:"danger"},h("span",{slot:"title"},wp.i18n.__("Error","surecart")),this.error),h(Fragment,null,h("sc-dashboard-module",{heading:wp.i18n.__("New Plan","surecart"),class:"plan-preview",error:this.error},h("sc-card",null,this.renderContent())),h("sc-dashboard-module",{heading:wp.i18n.__("Summary","surecart"),class:"plan-summary"},h("sc-form",{onScFormSubmit:()=>this.onSubmit()},h("sc-card",null,this.renderSummary()),h("sc-button",{type:"primary",full:!0,submit:!0,loading:this.loading||this.busy,disabled:this.loading||this.busy},wp.i18n.__("Confirm","surecart")))),h("sc-text",{style:{"--text-align":"center","--font-size":"var(--sc-font-size-small)","--line-height":"var(--sc-line-height-normal)"}},h("slot",{name:"terms"}))),this.busy&&h("sc-block-ui",null))}get el(){return this}static get style(){return scUpcomingInvoiceCss}},[1,"sc-upcoming-invoice",{heading:[1],successUrl:[1,"success-url"],subscriptionId:[1,"subscription-id"],priceId:[1,"price-id"],variantId:[1,"variant-id"],quantity:[2],discount:[1040],payment_method:[1040],quantityUpdatesEnabled:[4,"quantity-updates-enabled"],adHocAmount:[2,"ad-hoc-amount"],loading:[32],busy:[32],error:[32],price:[32],invoice:[32],couponError:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-upcoming-invoice","sc-alert","sc-block-ui","sc-button","sc-card","sc-cc-logo","sc-coupon-form","sc-dashboard-module","sc-divider","sc-flex","sc-form","sc-form-control","sc-format-date","sc-format-number","sc-icon","sc-input","sc-line-item","sc-manual-payment-method","sc-payment-method","sc-product-line-item","sc-prose","sc-quantity-select","sc-skeleton","sc-spinner","sc-tag","sc-text","sc-tooltip","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-upcoming-invoice":customElements.get(e)||customElements.define(e,ScUpcomingInvoice$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$s();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$r();break;case"sc-button":customElements.get(e)||defineCustomElement$q();break;case"sc-card":customElements.get(e)||defineCustomElement$p();break;case"sc-cc-logo":customElements.get(e)||defineCustomElement$o();break;case"sc-coupon-form":customElements.get(e)||defineCustomElement$n();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$m();break;case"sc-divider":customElements.get(e)||defineCustomElement$l();break;case"sc-flex":customElements.get(e)||defineCustomElement$k();break;case"sc-form":customElements.get(e)||defineCustomElement$j();break;case"sc-form-control":customElements.get(e)||defineCustomElement$i();break;case"sc-format-date":customElements.get(e)||defineCustomElement$h();break;case"sc-format-number":customElements.get(e)||defineCustomElement$g();break;case"sc-icon":customElements.get(e)||defineCustomElement$f();break;case"sc-input":customElements.get(e)||defineCustomElement$e();break;case"sc-line-item":customElements.get(e)||defineCustomElement$d();break;case"sc-manual-payment-method":customElements.get(e)||defineCustomElement$c();break;case"sc-payment-method":customElements.get(e)||defineCustomElement$b();break;case"sc-product-line-item":customElements.get(e)||defineCustomElement$a();break;case"sc-prose":customElements.get(e)||defineCustomElement$9();break;case"sc-quantity-select":customElements.get(e)||defineCustomElement$8();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$7();break;case"sc-spinner":customElements.get(e)||defineCustomElement$6();break;case"sc-tag":customElements.get(e)||defineCustomElement$5();break;case"sc-text":customElements.get(e)||defineCustomElement$4();break;case"sc-tooltip":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScUpcomingInvoice=ScUpcomingInvoice$1,defineCustomElement=defineCustomElement$1;export{ScUpcomingInvoice,defineCustomElement};