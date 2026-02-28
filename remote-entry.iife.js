var CbgRemoteApp=function(p,i){"use strict";const d=(e,o)=>{const t=e.__vccOpts||e;for(const[a,n]of o)t[a]=n;return t},m={},x={class:"xypaopao-root"};function g(e,o){return i.openBlock(),i.createElementBlock("div",x,[...o[0]||(o[0]=[i.createElementVNode("div",{class:"xypaopao-content"},[i.createElementVNode("h3",null,"西游泡泡"),i.createElementVNode("p",null,"这里是西游泡泡的内容")],-1)])])}const A=d(m,[["render",g],["__scopeId","data-v-e5ef8567"]]),u={areaMargin:"0",areaTopMargin:"9px 0 0",areaBtmMargin:"0",rightFloatPanelLeft:"964.5px"},y="xiyou-paopao-style",s=e=>`
    area, .area { margin: ${e.areaMargin} !important; }
    .areaTop { margin: ${e.areaTopMargin} !important; }
    .areaBtm { margin: ${e.areaBtmMargin} !important; }
    .right_float_pannel { left: ${e.rightFloatPanelLeft} !important; }
`,f=()=>`
    /* 西游泡泡菜单项样式 */
    ul.right_float_menu li#xiyou_paopao_menu {
        margin-bottom: 16px;
    }
    
    ul.right_float_menu li#xiyou_paopao_menu a.xiyou-paopao-link {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    
    ul.right_float_menu li#xiyou_paopao_menu a.xiyou-paopao-link img.xiyou-paopao-logo {
        width: 20px;
        height: 20px;
        margin-right: 4px;
    }
    
    ul.right_float_menu li#xiyou_paopao_menu a.xiyou-paopao-link span.xiyou-paopao-text {
        font-size: 14px;
        color: #333;
    }
    
    /* 西游泡泡右侧面板样式 */
    #xiyou_paopao_panel {
        position: fixed;
        width: 412px;
        height: 502px;
        background: #FFFFFF;
        box-shadow: 0px 0px 32px 0px rgba(0,29,69,0.1);
        border-radius: 2px 2px 2px 2px;
        z-index: 99999;
        display: none;
    }
    
    #xiyou_paopao_panel.xsyp_show {
        display: block;
    }
    
    /* 面板内 Vue 根节点样式 */
    #xiyou_paopao_app_root,
    .xypaopao-root {
        width: 100%;
        height: 100%;
    }
    
    .xypaopao-content {
        padding: 20px;
    }
    
    .xypaopao-content h3 {
        margin: 0 0 10px;
        font-size: 18px;
        color: #333;
    }
    
    .xypaopao-content p {
        margin: 0;
        color: #666;
        font-size: 14px;
    }
`,r=e=>{let o=document.getElementById(e);return o||(o=document.createElement("style"),o.id=e,document.head.appendChild(o),o)},h=()=>{const e=r("cbg-remote-style");e.textContent=s(u)},C=()=>{const e=r(y);e.textContent=f()},b=e=>{const o={...u,...e},t=r("cbg-remote-style");t.textContent=s(o),console.log("[cbg-remote] 样式已更新:",o)},E="data:image/png;base64,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";function S(e){const o=document.querySelector("ul.right_float_menu");if(!o)return console.log("[cbg-remote] 未找到 ul.right_float_menu 菜单"),null;const t=document.getElementById("ecard_center"),a=document.createElement("li");a.id="xiyou_paopao_menu";const n=document.createElement("a");n.href="javascript:;",n.className="xiyou-paopao-link";const c=document.createElement("img");c.src=E,c.className="xiyou-paopao-logo",c.alt="西游泡泡";const l=document.createElement("span");return l.className="xiyou-paopao-text",l.textContent="西游泡泡",n.appendChild(c),n.appendChild(l),a.appendChild(n),t&&t.parentNode===o?o.insertBefore(a,t):o.insertBefore(a,o.firstChild),n.addEventListener("click",k=>{k.preventDefault(),e.classList.toggle("xsyp_show")}),a}function M(){const e=document.createElement("div");e.id="xiyou_paopao_panel";const o=document.createElement("div");o.id="xiyou_paopao_app_root",e.appendChild(o),document.body.appendChild(e);const t=document.querySelector("ul.right_float_menu");if(t){const n=t.getBoundingClientRect();e.style.top=n.top+"px",e.style.left=n.right+16+"px"}return i.createApp(A).mount(o),e}function j(){console.log("[cbg-remote] 开始初始化..."),h(),console.log("[cbg-remote] 基础样式已注入"),C(),console.log("[cbg-remote] 西游泡泡样式已注入");const e=M();return console.log("[cbg-remote] 面板已创建"),S(e),console.log("[cbg-remote] 西游泡泡菜单已创建"),console.log("[cbg-remote] 初始化完成"),()=>{e.remove()}}return p.main=j,p.updateStyles=b,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),p}({},Vue);
