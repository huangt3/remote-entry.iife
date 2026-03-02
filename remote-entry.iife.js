var CbgRemoteApp=function(S,e){"use strict";const M=["src"],B={style:{position:"relative"}},D=["src"],$=["src"],L=["src"],U=["disabled"],R={__name:"Login",props:{position:{type:Object,default:()=>({x:0,y:0})}},emits:["login-success"],setup(t,{emit:o}){const l=o,r=e.ref(y("Frame 1410116428@2x.png")),s=e.ref(y("Frame 1410116346@2x.png")),f=e.ref(y("Frame 1410116345@2x.png")),b=e.ref(y("Frame 1410116344@2x.png"));function y(d){return typeof chrome<"u"&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL(`images/${d}`):`/images/${d}`}const n=e.ref({username:"",password:"",captcha:"",remember:!1}),m=e.ref(!1),p=e.ref(""),x=e.ref(null),h=e.ref(""),u={display:"flex",flexDirection:"column",fontFamily:"'Microsoft YaHei UI', sans-serif",borderRadius:"2px 2px 2px 2px",width:"100%",height:"100%"},g={width:"100%",display:"flex",justifyContent:"center",padding:"48px 0"},c={width:"194px",height:"42px"},ce={display:"flex",flexDirection:"column",alignItems:"center",padding:"0 26px"},E={width:"364px",height:"48px",background:"#FFFFFF",borderRadius:"6px",display:"flex",alignItems:"center",padding:"0 12px",marginBottom:"12px",boxSizing:"border-box",border:"1px solid #D9D9D9",fontSize:"20px"},w={width:"18px",height:"18px",paddingRight:"8px",marginRight:"8px",borderRight:"1px solid #F0F0F0"},F={flex:"1",border:"none",outline:"none",fontSize:"14px",background:"transparent"},de={marginLeft:"auto",cursor:"pointer",borderRadius:"3px",borderLeft:"1px solid #D9D9D9"},pe={position:"absolute",bottom:"-10px",color:"#f60505",fontSize:"12px",textAlign:"left"},me={fontFamily:"PingFang SC, PingFang SC",width:"364px",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"14px",margin:"14px 0 40px",color:"rgba(0,0,0,0.85)"},ge={display:"flex",alignItems:"center",cursor:"pointer"},ue={display:"none"},fe=()=>({width:"14px",height:"14px",border:"1px solid #D9D9D9",borderRadius:"2px",marginRight:"6px",display:"inline-block",position:"relative",background:n.value.remember?"#E74E4B":"#FFFFFF",borderColor:n.value.remember?"#E74E4B":"#D9D9D9"}),ye={cursor:"pointer",color:"#2977FF"},xe=()=>({width:"364px",height:"48px",background:m.value?"#999":"#E74E4B",border:"none",borderRadius:"8px",fontWeight:"500",fontSize:"20px",color:"#FFFFFF",cursor:m.value?"not-allowed":"pointer",transition:"all 0.3s"}),V=()=>{const d=x.value;if(!d)return;const a=d.getContext("2d"),i="0123456789";let I="";a.fillStyle="#fff",a.fillRect(0,0,80,32);for(let _=0;_<4;_++){const v=i[Math.floor(Math.random()*i.length)];I+=v,a.fillStyle=`rgb(${Math.random()*150}, ${Math.random()*150}, ${Math.random()*150})`,a.font="20px Arial";const ke=15+_*15,Ee=22+Math.random()*6;a.save(),a.translate(ke,Ee),a.rotate((Math.random()-.5)*.5),a.fillText(v,0,0),a.restore()}for(let _=0;_<3;_++)a.strokeStyle=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,a.beginPath(),a.moveTo(Math.random()*80,Math.random()*32),a.lineTo(Math.random()*80,Math.random()*32),a.stroke();h.value=I.toUpperCase()},he=()=>{const d=n.value.captcha.toUpperCase();return d?d!==h.value?(p.value="验证码错误",V(),!1):!0:(p.value="请输入验证码",!1)},_e=()=>(p.value="",n.value.username.trim()?n.value.password.trim()?!!he():(p.value="请输入密码",!1):(p.value="请输入账号",!1)),be=async()=>{if(_e()){m.value=!0;try{const d=`https://dragon.xypaopao.com/asset/loginwebside?account=${encodeURIComponent(n.value.username)}&password=${encodeURIComponent(n.value.password)}`,i=await(await fetch(d,{method:"GET",headers:{"Content-Type":"application/json"}})).json();console.log("登录响应:",i),i.code===200?(n.value.remember&&localStorage.setItem("remembered_username",n.value.username),i.data&&i.data.token&&localStorage.setItem("dragon_token",i.data.token),l("login-success",i.data)):i.code===-2001&&(p.value=i.msg||"登录失败")}catch(d){console.error("登录失败:",d),p.value="网络错误，请稍后重试"}finally{m.value=!1}}},Se=()=>{const d=localStorage.getItem("remembered_username");d&&(n.value.username=d,n.value.remember=!0)};return e.onMounted(()=>{V(),Se()}),(d,a)=>(e.openBlock(),e.createElementBlock("div",{style:u},[e.createElementVNode("div",{style:g},[e.createElementVNode("img",{src:r.value,alt:"西游泡泡",style:c},null,8,M)]),e.createElementVNode("form",{style:ce,onSubmit:e.withModifiers(be,["prevent"])},[e.createElementVNode("div",B,[e.createElementVNode("div",{style:E},[e.createElementVNode("img",{src:b.value,alt:"",style:w},null,8,D),e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>n.value.username=i),type:"text",placeholder:"请输入账号",style:F},null,512),[[e.vModelText,n.value.username]])]),e.createElementVNode("div",{style:E},[e.createElementVNode("img",{src:f.value,alt:"",style:w},null,8,$),e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":a[1]||(a[1]=i=>n.value.password=i),type:"password",placeholder:"请输入密码",style:F},null,512),[[e.vModelText,n.value.password]])]),e.createElementVNode("div",{style:e.normalizeStyle({...E,position:"relative"})},[e.createElementVNode("img",{src:s.value,alt:"",style:w},null,8,L),e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":a[2]||(a[2]=i=>n.value.captcha=i),type:"text",placeholder:"请输入验证码",style:e.normalizeStyle({...F,width:"140px"}),maxlength:"4"},null,4),[[e.vModelText,n.value.captcha]]),e.createElementVNode("canvas",{ref_key:"captchaCanvas",ref:x,width:"80",height:"32",style:de,onClick:V},null,512)],4),p.value?(e.openBlock(),e.createElementBlock("div",{key:0,style:pe},e.toDisplayString(p.value),1)):e.createCommentVNode("",!0)]),e.createElementVNode("div",{style:me},[e.createElementVNode("label",{style:ge,onClick:a[4]||(a[4]=i=>n.value.remember=!n.value.remember)},[e.withDirectives(e.createElementVNode("input",{type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=i=>n.value.remember=i),style:ue},null,512),[[e.vModelCheckbox,n.value.remember]]),e.createElementVNode("span",{style:e.normalizeStyle(fe())},null,4),a[5]||(a[5]=e.createElementVNode("span",{style:{marginLeft:"6px"}},"记住账号",-1))]),e.createElementVNode("span",{style:ye},"忘记密码?")]),e.createElementVNode("button",{type:"submit",disabled:m.value,style:e.normalizeStyle(xe())},e.toDisplayString(m.value?"登录中...":"登录"),13,U)],32)]))}},T=(t,o)=>{const l=t.__vccOpts||t;for(const[r,s]of o)l[r]=s;return l},z={class:"main-container"},P={class:"user-info-area"},j={class:"user-avatar"},O=["src"],A={class:"user-text-info"},q={class:"user-welcome"},X={class:"team-name"},Y={class:"user-vip-info"},G={style:{"font-size":"10px"}},H={class:"function-area"},W={class:"function-list"},J={class:"function-name"},K=["onClick"],Q=T({__name:"Main",props:{position:{type:Object,default:()=>({x:0,y:0})},userInfo:{type:Object,required:!0}},emits:["logout"],setup(t,{emit:o}){e.ref(r("logo2.png"));const l=e.ref(r("touxiang.png"));function r(n){return typeof chrome<"u"&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL(`images/${n}`):`/images/${n}`}const s={team_name:"江南团队-徐南平",vip_expire_date:"2027/09/21",vip_days:999},f=e.ref([{name:"占位符插件",enabled:!0},{name:"占位符插件",enabled:!0},{name:"占位符插件",enabled:!0},{name:"占位符插件",enabled:!0},{name:"占位符插件",enabled:!0},{name:"占位符插件",enabled:!1},{name:"占位符插件",enabled:!1},{name:"占位符插件",enabled:!1},{name:"占位符插件",enabled:!1},{name:"占位符插件",enabled:!1}]),b=n=>{f.value[n].enabled=!f.value[n].enabled},y=e.computed(()=>({width:"100%",height:"100%",padding:"20px",boxSizing:"border-box",display:"flex",flexDirection:"column"}));return(n,m)=>(e.openBlock(),e.createElementBlock("div",z,[e.createElementVNode("div",{style:e.normalizeStyle(y.value)},[e.createElementVNode("div",P,[e.createElementVNode("div",j,[e.createElementVNode("img",{src:l.value,alt:"",class:"avatar-img"},null,8,O)]),e.createElementVNode("div",A,[e.createElementVNode("div",q,[e.createElementVNode("span",X,e.toDisplayString(s.team_name),1),m[0]||(m[0]=e.createTextVNode(" 欢迎使用～ ",-1))]),e.createElementVNode("div",Y,[e.createTextVNode(" 会员服务到期 "+e.toDisplayString(s.vip_expire_date)+" ",1),e.createElementVNode("span",G,"("+e.toDisplayString(s.vip_days)+"天后)",1)])])]),e.createElementVNode("div",H,[e.createElementVNode("div",W,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(f.value,(p,x)=>(e.openBlock(),e.createElementBlock("div",{key:x,class:"function-item"},[e.createElementVNode("span",J,e.toDisplayString(p.name),1),e.createElementVNode("div",{class:e.normalizeClass(["switch",{"switch-on":p.enabled,"switch-off":!p.enabled}]),onClick:h=>b(x)},[...m[1]||(m[1]=[e.createElementVNode("div",{class:"switch-slider"},null,-1)])],10,K)]))),128))])])],4)]))}},[["__scopeId","data-v-38f6c979"]]),Z={style:{width:"100%",height:"100%"}},ee={__name:"App",setup(t){const o=e.ref("login"),l=e.ref(null),r=e.ref({x:0,y:0}),s={height:"39px",background:"#008CD5",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"16px",color:"#FFFFFF",padding:"4px 0",boxSizing:"border-box",position:"relative"},f={position:"absolute",top:"8px",display:"flex",flexDirection:"column",gap:"3px",width:"412px"},b={width:"100%",height:"1px",background:"#3E9ED7"},y={margin:"2px",borderRadius:"3px",background:"#FFFFFF",height:"calc(100% - 43px)"},n=async()=>{const u=localStorage.getItem("dragon_token"),g=localStorage.getItem("dragon_user_info");if(u&&g)try{const c=await m();c&&(o.value="main",l.value=c)}catch{localStorage.removeItem("dragon_token"),localStorage.removeItem("dragon_user_info"),o.value="login"}},m=async()=>{try{const u=localStorage.getItem("dragon_token");if(!u)return null;const c=await(await fetch("https://dragon.xypaopao.com/asset/sideuser",{method:"GET",headers:{token:u,"Content-Type":"application/json"}})).json();return c.code===200?(localStorage.setItem("dragon_user_info",JSON.stringify(c.data)),c.data):null}catch{return null}},p=u=>{m().then(g=>{g&&(l.value=g,o.value="main")})},x=()=>{localStorage.removeItem("dragon_token"),localStorage.removeItem("dragon_user_info"),o.value="login",l.value=null},h=()=>{const u=document.querySelector("#right_float_pannel"),g=document.querySelector(".area");if(u){const c=u.getBoundingClientRect();r.value.y=c.bottom,r.value.x=c.left+40}else if(g){const c=g.getBoundingClientRect();r.value.y=c.bottom+17,r.value.x=c.right+5}else r.value={x:100,y:100}};return e.onMounted(()=>{h(),window.addEventListener("resize",h),n()}),(u,g)=>(e.openBlock(),e.createElementBlock("div",Z,[e.createElementVNode("div",{style:s},[e.createElementVNode("div",{style:f},[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(7,c=>e.createElementVNode("div",{key:c,style:b})),64))]),g[0]||(g[0]=e.createElementVNode("span",{style:{zIndex:10}},"西游泡泡·插件控制台",-1))]),e.createElementVNode("div",{style:y},[o.value==="login"?(e.openBlock(),e.createBlock(R,{key:0,position:r.value,onLoginSuccess:p},null,8,["position"])):o.value==="main"?(e.openBlock(),e.createBlock(Q,{key:1,position:r.value,userInfo:l.value,onLogout:x},null,8,["position","userInfo"])):e.createCommentVNode("",!0)])]))}},C={areaMargin:"0",areaTopMargin:"9px 0 0",areaBtmMargin:"0",rightFloatPanelLeft:"964.5px"},te="xiyou-paopao-style",N=t=>`
    area, .area { margin: ${t.areaMargin} !important; }
    .areaTop { margin: ${t.areaTopMargin} !important; }
    .areaBtm { margin: ${t.areaBtmMargin} !important; }
    .right_float_pannel { left: ${t.rightFloatPanelLeft} !important; }
`,oe=()=>`
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
`,k=t=>{let o=document.getElementById(t);return o||(o=document.createElement("style"),o.id=t,document.head.appendChild(o),o)},ne=()=>{const t=k("cbg-remote-style");t.textContent=N(C)},ae=()=>{const t=k(te);t.textContent=oe()},re=t=>{const o={...C,...t},l=k("cbg-remote-style");l.textContent=N(o),console.log("[cbg-remote] 样式已更新:",o)};function le(t){const o=document.querySelector("ul.right_float_menu");if(!o)return console.log("[cbg-remote] 未找到 ul.right_float_menu 菜单"),null;const l=document.getElementById("ecard_center"),r=document.createElement("li");r.id="xiyou_paopao_menu";const s=document.createElement("a");return s.href="javascript:;",s.className="xiyou-paopao-link",s.textContent="西游泡泡",r.appendChild(s),l&&l.parentNode===o?o.insertBefore(r,l):o.insertBefore(r,o.firstChild),s.addEventListener("click",f=>{f.preventDefault(),t.classList.toggle("xsyp_show")}),r}function ie(){const t=document.createElement("div");t.id="xiyou_paopao_panel";const o=document.createElement("div");o.id="xiyou_paopao_app_root",t.appendChild(o),document.body.appendChild(t);const l=document.querySelector("ul.right_float_menu");if(l){const s=l.getBoundingClientRect();t.style.top=s.top+"px",t.style.left=s.right+2+"px"}return e.createApp(ee).mount(o),t}function se(){console.log("[cbg-remote] 开始初始化..."),ne(),console.log("[cbg-remote] 基础样式已注入"),ae(),console.log("[cbg-remote] 西游泡泡样式已注入");const t=ie();return console.log("[cbg-remote] 面板已创建"),le(t),console.log("[cbg-remote] 西游泡泡菜单已创建"),console.log("[cbg-remote] 初始化完成"),()=>{t.remove()}}return S.main=se,S.updateStyles=re,Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}),S}({},Vue);
