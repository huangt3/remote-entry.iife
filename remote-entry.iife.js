var CbgRemoteApp=function(l,e){"use strict";const d=(t,n)=>{const o=t.__vccOpts||t;for(const[r,a]of n)o[r]=a;return o},g={class:"cbg-remote-panel"},u={class:"panel-content"},b={class:"actions"},f={class:"counter"},E=d({__name:"App",setup(t){const n=e.ref(0),o=r=>{console.log(`[CBG Remote] 点击了 ${r}`),alert(`你点击了 ${r}`)};return(r,a)=>(e.openBlock(),e.createElementBlock("div",g,[a[5]||(a[5]=e.createElementVNode("div",{class:"panel-header"},[e.createElementVNode("h2",null,"藏宝阁工具")],-1)),e.createElementVNode("div",u,[a[3]||(a[3]=e.createElementVNode("div",{class:"info-card"},[e.createElementVNode("h3",null,"欢迎使用"),e.createElementVNode("p",null,"这是一个远程加载的 Vue3 应用"),e.createElementVNode("p",{class:"version"},"版本: 1.0.0")],-1)),a[4]||(a[4]=e.createElementVNode("div",{class:"features"},[e.createElementVNode("h4",null,"功能列表"),e.createElementVNode("ul",null,[e.createElementVNode("li",null,"功能一：示例功能"),e.createElementVNode("li",null,"功能二：示例功能"),e.createElementVNode("li",null,"功能三：示例功能")])],-1)),e.createElementVNode("div",b,[e.createElementVNode("button",{onClick:a[0]||(a[0]=p=>o("btn1")),class:"btn btn-primary"}," 按钮 1 "),e.createElementVNode("button",{onClick:a[1]||(a[1]=p=>o("btn2")),class:"btn btn-secondary"}," 按钮 2 ")]),e.createElementVNode("div",f,[e.createElementVNode("span",null,"计数器: "+e.toDisplayString(n.value),1),e.createElementVNode("button",{onClick:a[2]||(a[2]=p=>n.value++),class:"btn btn-small"},"+1")])])]))}},[["__scopeId","data-v-8164fcef"]]),i={areaMargin:"0",areaTopMargin:"9px 0 0",areaBtmMargin:"0",rightFloatPanelLeft:"964.5px"},s="cbg-remote-style",c=t=>`
    area, .area { margin: ${t.areaMargin} !important; }
    .areaTop { margin: ${t.areaTopMargin} !important; }
    .areaBtm { margin: ${t.areaBtmMargin} !important; }
    .right_float_pannel { left: ${t.rightFloatPanelLeft} !important; }
`,m=()=>{let t=document.getElementById(s);return t||(t=document.createElement("style"),t.id=s,document.head.appendChild(t),t)},y=()=>{const t=m();t.textContent=c(i)},x=t=>{const n={...i,...t},o=m();o.textContent=c(n),console.log("[cbg-remote] 样式已更新:",n)},N="cbg-remote-float-btn",h="cbg-remote-panel",V="cbg-remote-close-btn",_=()=>{const t=document.createElement("div");return t.id=h,t.style.cssText=`
        position: fixed !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        z-index: 999999 !important;
        display: none !important;
    `,document.body.appendChild(t),t},T=t=>{const n=document.createElement("div");n.id=N,n.innerHTML=`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#4CAF50"/>
            <path d="M12 6V18M6 12H18" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
    `,n.style.cssText=`
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        width: 48px !important;
        height: 48px !important;
        z-index: 999999 !important;
        cursor: pointer !important;
        border-radius: 50% !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
        transition: transform 0.2s !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    `,n.addEventListener("mouseenter",()=>{n.style.transform="scale(1.1)"}),n.addEventListener("mouseleave",()=>{n.style.transform="scale(1)"});const o=document.createElement("div");return o.className=V,o.innerHTML="×",o.style.cssText=`
        position: absolute !important;
        top: 10px !important;
        right: 15px !important;
        font-size: 24px !important;
        color: #666 !important;
        cursor: pointer !important;
        line-height: 1 !important;
    `,o.addEventListener("click",r=>{r.stopPropagation(),t.style.display="none",n.style.display="flex"}),t.appendChild(o),n};function C(){console.log("[cbg-remote] 开始初始化..."),y(),console.log("[cbg-remote] 样式已注入");const t=_(),n=T(t),o=e.createApp(E);return o.mount(t),n.addEventListener("click",()=>{n.style.display="none",t.style.display="block"}),console.log("[cbg-remote] 初始化完成"),()=>{o.unmount(),t.remove(),n.remove()}}return l.main=C,l.updateStyles=x,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),l}({},Vue);
