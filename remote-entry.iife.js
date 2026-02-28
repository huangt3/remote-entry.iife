var CbgRemoteApp=function(i,r){"use strict";const u=(e,o)=>{const t=e.__vccOpts||e;for(const[a,n]of o)t[a]=n;return t},s={},d={class:"xypaopao-root"};function m(e,o){return r.openBlock(),r.createElementBlock("div",d,[...o[0]||(o[0]=[r.createElementVNode("div",{class:"xypaopao-content"},[r.createElementVNode("h3",null,"西游泡泡"),r.createElementVNode("p",null,"这里是西游泡泡的内容")],-1)])])}const g=u(s,[["render",m],["__scopeId","data-v-e5ef8567"]]),l={areaMargin:"0",areaTopMargin:"9px 0 0",areaBtmMargin:"0",rightFloatPanelLeft:"964.5px"},x="xiyou-paopao-style",c=e=>`
    area, .area { margin: ${e.areaMargin} !important; }
    .areaTop { margin: ${e.areaTopMargin} !important; }
    .areaBtm { margin: ${e.areaBtmMargin} !important; }
    .right_float_pannel { left: ${e.rightFloatPanelLeft} !important; }
`,_=()=>`
    /* 西游泡泡菜单项样式 - 与充值中心一致 */
    ul.right_float_menu li#xiyou_paopao_menu {
        margin-bottom: 16px;
    }
    
    ul.right_float_menu li#xiyou_paopao_menu a.xiyou-paopao-link {
        position: relative;
        display: block;
        margin-bottom: 2px;
        padding: 44px 0 12px;
        border: 1px solid #2e7490;
        border-radius: 3px;
        text-align: center;
        background-color: #236782;
        background-image: url(), url(), url();
        background-size: 28px, 100%, 100%;
        background-position: center 14px, top, bottom;
        background-repeat: no-repeat, no-repeat, no-repeat;
        line-height: 17px;
        zoom: 1;
        color: #aedaeb;
        text-decoration: none;
        cursor: pointer;
    }
    
    ul.right_float_menu li#xiyou_paopao_menu a.xiyou-paopao-link:link,
    ul.right_float_menu li#xiyou_paopao_menu a.xiyou-paopao-link:visited {
        color: #aedaeb;
        text-decoration: none;
    }
    
    ul.right_float_menu li#xiyou_paopao_menu a.xiyou-paopao-link:hover {
        color: #ffffff;
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
`,p=e=>{let o=document.getElementById(e);return o||(o=document.createElement("style"),o.id=e,document.head.appendChild(o),o)},y=()=>{const e=p("cbg-remote-style");e.textContent=c(l)},f=()=>{const e=p(x);e.textContent=_()},b=e=>{const o={...l,...e},t=p("cbg-remote-style");t.textContent=c(o),console.log("[cbg-remote] 样式已更新:",o)};function h(e){const o=document.querySelector("ul.right_float_menu");if(!o)return console.log("[cbg-remote] 未找到 ul.right_float_menu 菜单"),null;const t=document.getElementById("ecard_center"),a=document.createElement("li");a.id="xiyou_paopao_menu";const n=document.createElement("a");return n.href="javascript:;",n.className="xiyou-paopao-link",n.textContent="西游泡泡",a.appendChild(n),t&&t.parentNode===o?o.insertBefore(a,t):o.insertBefore(a,o.firstChild),n.addEventListener("click",E=>{E.preventDefault(),e.classList.toggle("xsyp_show")}),a}function k(){const e=document.createElement("div");e.id="xiyou_paopao_panel";const o=document.createElement("div");o.id="xiyou_paopao_app_root",e.appendChild(o),document.body.appendChild(e);const t=document.querySelector("ul.right_float_menu");if(t){const n=t.getBoundingClientRect();e.style.top=n.top+"px",e.style.left=n.right+16+"px"}return r.createApp(g).mount(o),e}function C(){console.log("[cbg-remote] 开始初始化..."),y(),console.log("[cbg-remote] 基础样式已注入"),f(),console.log("[cbg-remote] 西游泡泡样式已注入");const e=k();return console.log("[cbg-remote] 面板已创建"),h(e),console.log("[cbg-remote] 西游泡泡菜单已创建"),console.log("[cbg-remote] 初始化完成"),()=>{e.remove()}}return i.main=C,i.updateStyles=b,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),i}({},Vue);
