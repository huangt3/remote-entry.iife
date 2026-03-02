var CbgRemoteApp=function(h,e){"use strict";const y=(o,n)=>{const c=o.__vccOpts||o;for(const[r,p]of n)c[r]=p;return c},w={class:"logo-area"},C=["src"],$={style:{position:"relative"}},v={class:"input-wrapper"},I=["src"],M={class:"input-wrapper"},B=["src"],T={class:"input-wrapper captcha-wrapper"},U=["src"],L={key:0,class:"error-tip"},D={class:"options-row"},P=["disabled"],z=y({__name:"Login",props:{position:{type:Object,default:()=>({x:0,y:0})}},emits:["login-success"],setup(o,{emit:n}){const c=n,r=e.ref(g("Frame 1410116428@2x.png")),p=e.ref(g("Frame 1410116346@2x.png")),u=e.ref(g("Frame 1410116345@2x.png")),f=e.ref(g("Frame 1410116344@2x.png"));function g(m){return chrome.runtime.getURL(`images/${m}`)}const a=e.ref({username:"",password:"",captcha:"",remember:!1}),i=e.ref(!1),l=e.ref(""),s=e.ref(null),b=e.ref(""),me=e.computed(()=>({width:"100%"})),k=()=>{const m=s.value;if(!m)return;const t=m.getContext("2d"),d="0123456789";let N="";t.fillStyle="#fff",t.fillRect(0,0,80,32);for(let _=0;_<4;_++){const S=d[Math.floor(Math.random()*d.length)];N+=S,t.fillStyle=`rgb(${Math.random()*150}, ${Math.random()*150}, ${Math.random()*150})`,t.font="20px Arial";const he=15+_*15,ye=22+Math.random()*6;t.save(),t.translate(he,ye),t.rotate((Math.random()-.5)*.5),t.fillText(S,0,0),t.restore()}for(let _=0;_<3;_++)t.strokeStyle=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,t.beginPath(),t.moveTo(Math.random()*80,Math.random()*32),t.lineTo(Math.random()*80,Math.random()*32),t.stroke();b.value=N.toUpperCase()},ue=()=>{const m=a.value.captcha.toUpperCase();return m?m!==b.value?(l.value="验证码错误",k(),!1):!0:(l.value="请输入验证码",!1)},ge=()=>(l.value="",a.value.username.trim()?a.value.password.trim()?!!ue():(l.value="请输入密码",!1):(l.value="请输入账号",!1)),_e=async()=>{if(ge()){i.value=!0;try{const m=`https://dragon.xypaopao.com/asset/loginwebside?account=${encodeURIComponent(a.value.username)}&password=${encodeURIComponent(a.value.password)}`,d=await(await fetch(m,{method:"GET",headers:{"Content-Type":"application/json"}})).json();console.log("登录响应:",d),d.code===200?(a.value.remember&&localStorage.setItem("remembered_username",a.value.username),d.data&&d.data.token&&localStorage.setItem("dragon_token",d.data.token),c("login-success",d.data)):d.code===-2001&&(l.value=d.msg||"登录失败")}catch(m){console.error("登录失败:",m),l.value="网络错误，请稍后重试"}finally{i.value=!1}}},fe=()=>{const m=localStorage.getItem("remembered_username");m&&(a.value.username=m,a.value.remember=!0)};return e.onMounted(()=>{k(),fe()}),(m,t)=>(e.openBlock(),e.createElementBlock("div",{class:"login-container",style:e.normalizeStyle(me.value)},[e.createElementVNode("div",w,[e.createElementVNode("img",{src:r.value,alt:"西游泡泡",class:"logo-img"},null,8,C)]),e.createElementVNode("form",{class:"login-form",onSubmit:e.withModifiers(_e,["prevent"])},[e.createElementVNode("div",$,[e.createElementVNode("div",v,[e.createElementVNode("img",{src:f.value,alt:"",class:"input-icon"},null,8,I),e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>a.value.username=d),type:"text",placeholder:"请输入账号",class:"login-input"},null,512),[[e.vModelText,a.value.username]])]),e.createElementVNode("div",M,[e.createElementVNode("img",{src:u.value,alt:"",class:"input-icon"},null,8,B),e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":t[1]||(t[1]=d=>a.value.password=d),type:"password",placeholder:"请输入密码",class:"login-input"},null,512),[[e.vModelText,a.value.password]])]),e.createElementVNode("div",T,[e.createElementVNode("img",{src:p.value,alt:"",class:"input-icon"},null,8,U),e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":t[2]||(t[2]=d=>a.value.captcha=d),type:"text",placeholder:"请输入验证码",class:"login-input captcha-input",maxlength:"4"},null,512),[[e.vModelText,a.value.captcha]]),e.createElementVNode("canvas",{ref_key:"captchaCanvas",ref:s,width:"80",height:"32",class:"captcha-canvas",onClick:k},null,512)]),l.value?(e.openBlock(),e.createElementBlock("div",L,e.toDisplayString(l.value),1)):e.createCommentVNode("",!0)]),e.createElementVNode("div",D,[e.createElementVNode("label",{class:"remember-me",onClick:t[4]||(t[4]=d=>a.value.remember=!a.value.remember)},[e.withDirectives(e.createElementVNode("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=d=>a.value.remember=d),class:"checkbox"},null,512),[[e.vModelCheckbox,a.value.remember]]),t[5]||(t[5]=e.createElementVNode("span",{class:"checkmark"},null,-1)),t[6]||(t[6]=e.createElementVNode("span",{class:"label-text"},"记住账号",-1))]),t[7]||(t[7]=e.createElementVNode("span",{class:"forgot-pwd"},"忘记密码?",-1))]),e.createElementVNode("button",{type:"submit",disabled:i.value,class:"login-btn"},e.toDisplayString(i.value?"登录中...":"登录"),9,P)],32)],4))}},[["__scopeId","data-v-b4c0202b"]]),R={class:"main-container"},F={class:"user-info-area"},O={class:"user-avatar"},j=["src"],A={class:"user-text-info"},q={class:"user-welcome"},X={class:"team-name"},G={class:"user-vip-info"},Y={style:{"font-size":"10px"}},J={class:"function-area"},H={class:"function-list"},K={class:"function-name"},Q=["onClick"],W=y({__name:"Main",props:{position:{type:Object,default:()=>({x:0,y:0})},userInfo:{type:Object,required:!0}},emits:["logout"],setup(o,{emit:n}){e.ref(r("logo2.png"));const c=e.ref(r("touxiang.png"));function r(a){return chrome.runtime.getURL(`images/${a}`)}const p={team_name:"江南团队-徐南平",vip_expire_date:"2027/09/21",vip_days:999},u=e.ref([{name:"占位符插件",enabled:!0},{name:"占位符插件",enabled:!0},{name:"占位符插件",enabled:!0},{name:"占位符插件",enabled:!0},{name:"占位符插件",enabled:!0},{name:"占位符插件",enabled:!1},{name:"占位符插件",enabled:!1},{name:"占位符插件",enabled:!1},{name:"占位符插件",enabled:!1},{name:"占位符插件",enabled:!1}]),f=a=>{u.value[a].enabled=!u.value[a].enabled},g=e.computed(()=>({width:"100%",height:"100%",padding:"20px",boxSizing:"border-box",display:"flex",flexDirection:"column"}));return(a,i)=>(e.openBlock(),e.createElementBlock("div",R,[e.createElementVNode("div",{style:e.normalizeStyle(g.value)},[e.createElementVNode("div",F,[e.createElementVNode("div",O,[e.createElementVNode("img",{src:c.value,alt:"",class:"avatar-img"},null,8,j)]),e.createElementVNode("div",A,[e.createElementVNode("div",q,[e.createElementVNode("span",X,e.toDisplayString(p.team_name),1),i[0]||(i[0]=e.createTextVNode(" 欢迎使用～ ",-1))]),e.createElementVNode("div",G,[e.createTextVNode(" 会员服务到期 "+e.toDisplayString(p.vip_expire_date)+" ",1),e.createElementVNode("span",Y,"("+e.toDisplayString(p.vip_days)+"天后)",1)])])]),e.createElementVNode("div",J,[e.createElementVNode("div",H,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.value,(l,s)=>(e.openBlock(),e.createElementBlock("div",{key:s,class:"function-item"},[e.createElementVNode("span",K,e.toDisplayString(l.name),1),e.createElementVNode("div",{class:e.normalizeClass(["switch",{"switch-on":l.enabled,"switch-off":!l.enabled}]),onClick:b=>f(s)},[...i[1]||(i[1]=[e.createElementVNode("div",{class:"switch-slider"},null,-1)])],10,Q)]))),128))])])],4)]))}},[["__scopeId","data-v-e2bbf1ac"]]),Z={class:"xypaopao-root"},ee={class:"login-header"},te={class:"header-lines"},oe={class:"panel-container"},ne=y({__name:"App",setup(o){const n=e.ref("login"),c=e.ref(null),r=e.ref({x:0,y:0}),p=async()=>{const i=localStorage.getItem("dragon_token"),l=localStorage.getItem("dragon_user_info");if(i&&l)try{const s=await u();s&&(n.value="main",c.value=s)}catch{localStorage.removeItem("dragon_token"),localStorage.removeItem("dragon_user_info"),n.value="login"}},u=async()=>{try{const i=localStorage.getItem("dragon_token");if(!i)return null;const s=await(await fetch("https://dragon.xypaopao.com/asset/sideuser",{method:"GET",headers:{token:i,"Content-Type":"application/json"}})).json();return s.code===200?(localStorage.setItem("dragon_user_info",JSON.stringify(s.data)),s.data):null}catch{return null}},f=i=>{u().then(l=>{l&&(c.value=l,n.value="main")})},g=()=>{localStorage.removeItem("dragon_token"),localStorage.removeItem("dragon_user_info"),n.value="login",c.value=null},a=()=>{const i=document.querySelector("#right_float_pannel"),l=document.querySelector(".area");if(i){const s=i.getBoundingClientRect();r.value.y=s.bottom,r.value.x=s.left+40}else if(l){const s=l.getBoundingClientRect();r.value.y=s.bottom+17,r.value.x=s.right+5}else r.value={x:100,y:100}};return e.onMounted(()=>{a(),window.addEventListener("resize",a),p()}),(i,l)=>(e.openBlock(),e.createElementBlock("div",Z,[e.createElementVNode("div",ee,[e.createElementVNode("div",te,[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(7,s=>e.createElementVNode("div",{key:s,class:"header-line"})),64))]),l[0]||(l[0]=e.createElementVNode("span",{style:{"z-index":"10"}},"西游泡泡·插件控制台",-1))]),e.createElementVNode("div",oe,[n.value==="login"?(e.openBlock(),e.createBlock(z,{key:0,position:r.value,onLoginSuccess:f},null,8,["position"])):n.value==="main"?(e.openBlock(),e.createBlock(W,{key:1,position:r.value,userInfo:c.value,onLogout:g},null,8,["position","userInfo"])):e.createCommentVNode("",!0)])]))}},[["__scopeId","data-v-86efb995"]]),E={areaMargin:"0",areaTopMargin:"9px 0 0",areaBtmMargin:"0",rightFloatPanelLeft:"964.5px"},ae="xiyou-paopao-style",V=o=>`
    area, .area { margin: ${o.areaMargin} !important; }
    .areaTop { margin: ${o.areaTopMargin} !important; }
    .areaBtm { margin: ${o.areaBtmMargin} !important; }
    .right_float_pannel { left: ${o.rightFloatPanelLeft} !important; }
`,le=()=>`
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
        width: 416px;
        height: 541px;
        background: #008CD5;
        box-shadow: 0px 0px 32px 0px rgba(0,29,69,0.1);
        border-radius: 3px;
        overflow: hidden;
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
`,x=o=>{let n=document.getElementById(o);return n||(n=document.createElement("style"),n.id=o,document.head.appendChild(n),n)},re=()=>{const o=x("cbg-remote-style");o.textContent=V(E)},se=()=>{const o=x(ae);o.textContent=le()},ce=o=>{const n={...E,...o},c=x("cbg-remote-style");c.textContent=V(n),console.log("[cbg-remote] 样式已更新:",n)};function ie(o){const n=document.querySelector("ul.right_float_menu");if(!n)return console.log("[cbg-remote] 未找到 ul.right_float_menu 菜单"),null;const c=document.getElementById("ecard_center"),r=document.createElement("li");r.id="xiyou_paopao_menu";const p=document.createElement("a");return p.href="javascript:;",p.className="xiyou-paopao-link",p.textContent="西游泡泡",r.appendChild(p),c&&c.parentNode===n?n.insertBefore(r,c):n.insertBefore(r,n.firstChild),p.addEventListener("click",u=>{u.preventDefault(),o.classList.toggle("xsyp_show")}),r}function de(){const o=document.createElement("div");o.id="xiyou_paopao_panel";const n=document.createElement("div");n.id="xiyou_paopao_app_root",o.appendChild(n),document.body.appendChild(o);const c=document.querySelector("ul.right_float_menu");if(c){const p=c.getBoundingClientRect();o.style.top=p.top+"px",o.style.left=p.right+2+"px"}return e.createApp(ne).mount(n),o}function pe(){console.log("[cbg-remote] 开始初始化..."),re(),console.log("[cbg-remote] 基础样式已注入"),se(),console.log("[cbg-remote] 西游泡泡样式已注入");const o=de();return console.log("[cbg-remote] 面板已创建"),ie(o),console.log("[cbg-remote] 西游泡泡菜单已创建"),console.log("[cbg-remote] 初始化完成"),()=>{o.remove()}}return h.main=pe,h.updateStyles=ce,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),h}({},Vue);
