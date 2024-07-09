import{r as i,c as e,h as t,a as o}from"./p-cc7ce8c7.js";import{p as s}from"./p-f0bb2283.js";import{s as l}from"./p-c3d54c20.js";import{o as r,s as n}from"./p-24f06282.js";import{o as a}from"./p-c27fae79.js";import"./p-304fb8cf.js";import{g as d,s as c}from"./p-1ccea758.js";import{c as p}from"./p-a27e9b70.js";import{c as u}from"./p-8266bbed.js";import{u as m}from"./p-f9c1f513.js";import{b as v}from"./p-b3738db2.js";import{a as h}from"./p-1c2e2695.js";import"./p-112455b1.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-4d73f82a.js";import"./p-830ab1a3.js";import"./p-a3a138d6.js";import"./p-7ef0f71c.js";import"./p-50da3ba3.js";import"./p-c06b2e12.js";import"./p-e64f9fcd.js";const f="sc-stripe-payment-element{display:block}sc-stripe-payment-element [hidden]{display:none}.loader{display:grid;height:128px;gap:2em}.loader__row{display:flex;align-items:flex-start;justify-content:space-between;gap:1em}.loader__details{display:grid;gap:0.5em}";const y=class{constructor(t){i(this,t);this.scPaid=e(this,"scPaid",7);this.scSetState=e(this,"scSetState",7);this.scPaymentInfoAdded=e(this,"scPaymentInfoAdded",7);this.error=undefined;this.confirming=false;this.loaded=false;this.styles=undefined}async componentWillLoad(){this.fetchStyles()}async handleStylesChange(){this.createOrUpdateElements()}async fetchStyles(){this.styles=await this.getComputedStyles()}getComputedStyles(){return new Promise((i=>{let e=setInterval((()=>{const t=window.getComputedStyle(document.body);const o=t.getPropertyValue("--sc-color-primary-500");if(o){clearInterval(e);i(t)}}),100)}))}async componentDidLoad(){const{processor_data:i}=d("stripe")||{};try{c.instances.stripe=await s.loadStripe(i===null||i===void 0?void 0:i.publishable_key,{stripeAccount:i===null||i===void 0?void 0:i.account_id})}catch(i){this.error=(i===null||i===void 0?void 0:i.message)||wp.i18n.__("Stripe could not be loaded","surecart");return}this.createOrUpdateElements();this.handleUpdateElement();this.unlistenToCheckout=r("checkout",(()=>{this.fetchStyles();this.createOrUpdateElements();this.handleUpdateElement()}));this.unlistenToFormState=a("formState",(()=>{var i;if(!((i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.payment_method_required))return;if("paying"===p()){this.maybeConfirmOrder()}}))}disconnectedCallback(){this.unlistenToFormState();this.unlistenToCheckout()}getElementsConfig(){var i,e,t,o;const s=getComputedStyle(this.el);return{mode:((i=n.checkout)===null||i===void 0?void 0:i.reusable_payment_method_required)?"subscription":"payment",amount:(e=n.checkout)===null||e===void 0?void 0:e.amount_due,currency:(t=n.checkout)===null||t===void 0?void 0:t.currency,setupFutureUsage:((o=n.checkout)===null||o===void 0?void 0:o.reusable_payment_method_required)?"off_session":null,appearance:{variables:{colorPrimary:s.getPropertyValue("--sc-color-primary-500")||"black",colorText:s.getPropertyValue("--sc-input-label-color")||"black",borderRadius:s.getPropertyValue("--sc-input-border-radius-medium")||"4px",colorBackground:s.getPropertyValue("--sc-input-background-color")||"white",fontSizeBase:s.getPropertyValue("--sc-input-font-size-medium")||"16px",colorLogo:s.getPropertyValue("--sc-stripe-color-logo")||"light",colorLogoTab:s.getPropertyValue("--sc-stripe-color-logo-tab")||"light",colorLogoTabSelected:s.getPropertyValue("--sc-stripe-color-logo-tab-selected")||"light",colorTextPlaceholder:s.getPropertyValue("--sc-input-placeholder-color")||"black"},rules:{".Input":{border:s.getPropertyValue("--sc-input-border")}}}}}createOrUpdateElements(){var i,e,t;if(!((i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.payment_method_required))return;if(!c.instances.stripe)return;if(!c.instances.stripeElements){c.instances.stripeElements=c.instances.stripe.elements(this.getElementsConfig());const i=v("shipping");c.instances.stripeElements.create("payment",{defaultValues:{billingDetails:{name:(e=n.checkout)===null||e===void 0?void 0:e.name,email:(t=n.checkout)===null||t===void 0?void 0:t.email,...!!i?{address:i}:{}}},fields:{billingDetails:{email:"never"}}}).mount(this.container);this.element=c.instances.stripeElements.getElement("payment");this.element.on("ready",(()=>this.loaded=true));this.element.on("change",(i=>{var e,t,o,s,l,r,a;const d=["cashapp","klarna","clearpay"];n.paymentMethodRequiresShipping=d.includes((e=i===null||i===void 0?void 0:i.value)===null||e===void 0?void 0:e.type);if(i.complete){this.scPaymentInfoAdded.emit({checkout_id:(t=n.checkout)===null||t===void 0?void 0:t.id,currency:(o=n.checkout)===null||o===void 0?void 0:o.currency,processor_type:"stripe",total_amount:(s=n.checkout)===null||s===void 0?void 0:s.total_amount,line_items:(l=n.checkout)===null||l===void 0?void 0:l.line_items,payment_method:{billing_details:{email:(r=n.checkout)===null||r===void 0?void 0:r.email,name:(a=n.checkout)===null||a===void 0?void 0:a.name}}})}}));return}c.instances.stripeElements.update(this.getElementsConfig())}handleUpdateElement(){var i,e;if(!this.element)return;if(((i=n.checkout)===null||i===void 0?void 0:i.status)!=="draft")return;const{name:t,email:o}=n.checkout;const{line_1:s,line_2:l,city:r,state:a,country:d,postal_code:c}=((e=n.checkout)===null||e===void 0?void 0:e.shipping_address)||{};this.element.update({defaultValues:{billingDetails:{name:t,email:o,address:{line1:s,line2:l,city:r,state:a,country:d,postal_code:c}}},fields:{billingDetails:{email:"never"}}})}async submit(){if((l===null||l===void 0?void 0:l.id)!=="stripe")return;const{error:i}=await c.instances.stripeElements.submit();if(i){console.error({error:i});m("REJECT");u(i);this.error=i.message;return}}async maybeConfirmOrder(){var i,e,t,o,s,r,a,d,c,p,u,m,v,h;if((l===null||l===void 0?void 0:l.id)!=="stripe")return;if(((e=(i=n.checkout)===null||i===void 0?void 0:i.payment_intent)===null||e===void 0?void 0:e.processor_type)!=="stripe")return;if(!((r=(s=(o=(t=n.checkout)===null||t===void 0?void 0:t.payment_intent)===null||o===void 0?void 0:o.processor_data)===null||s===void 0?void 0:s.stripe)===null||r===void 0?void 0:r.type))return;if(!((p=(c=(d=(a=n.checkout)===null||a===void 0?void 0:a.payment_intent)===null||d===void 0?void 0:d.processor_data)===null||c===void 0?void 0:c.stripe)===null||p===void 0?void 0:p.client_secret))return;return await this.confirm((h=(v=(m=(u=n.checkout)===null||u===void 0?void 0:u.payment_intent)===null||m===void 0?void 0:m.processor_data)===null||v===void 0?void 0:v.stripe)===null||h===void 0?void 0:h.type)}async confirm(i,e={}){var t,o,s,l;const r={elements:c.instances.stripeElements,clientSecret:(l=(s=(o=(t=n.checkout)===null||t===void 0?void 0:t.payment_intent)===null||o===void 0?void 0:o.processor_data)===null||s===void 0?void 0:s.stripe)===null||l===void 0?void 0:l.client_secret,confirmParams:{return_url:h(window.location.href,{...n.checkout.id?{checkout_id:n.checkout.id}:{}}),payment_method_data:{billing_details:{email:n.checkout.email}}},redirect:"if_required",...e};if(this.confirming)return;if(!c.instances.stripe)return;try{this.scSetState.emit("PAYING");const e=i==="setup"?await c.instances.stripe.confirmSetup(r):await c.instances.stripe.confirmPayment(r);if(e===null||e===void 0?void 0:e.error){this.error=e.error.message;throw e.error}else{this.scSetState.emit("PAID");this.scPaid.emit()}}catch(i){console.error(i);m("REJECT");u(i);if(i.message){this.error=i.message}}finally{this.confirming=false}}render(){return t("div",{class:"sc-stripe-payment-element","data-testid":"stripe-payment-element"},!!this.error&&t("sc-text",{style:{color:"var(--sc-color-danger-500)","--font-size":"var(--sc-font-size-small)",marginBottom:"0.5em"}},this.error),t("div",{class:"loader",hidden:this.loaded},t("div",{class:"loader__row"},t("div",{style:{width:"50%"}},t("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),t("sc-skeleton",null)),t("div",{style:{flex:"1"}},t("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),t("sc-skeleton",null)),t("div",{style:{flex:"1"}},t("sc-skeleton",{style:{width:"50%",marginBottom:"0.5em"}}),t("sc-skeleton",null))),t("div",{class:"loader__details"},t("sc-skeleton",{style:{height:"1rem"}}),t("sc-skeleton",{style:{height:"1rem",width:"30%"}}))),t("div",{hidden:!this.loaded,class:"sc-payment-element-container",ref:i=>this.container=i}))}get el(){return o(this)}static get watchers(){return{styles:["handleStylesChange"]}}};y.style=f;export{y as sc_stripe_payment_element};
//# sourceMappingURL=p-f1f91a02.entry.js.map