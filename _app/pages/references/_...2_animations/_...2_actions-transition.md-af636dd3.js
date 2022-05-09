import{S as as,i as es,s as ls,e as M,t as r,k as z,w as E,c as q,a as I,h as D,d as l,m as G,x as g,b as U,g as t,M as h,y as b,j as ps,q as B,o as v,B as F,_ as ts}from"../../../chunks/index-fdc571c5.js";import{f as os}from"../../../chunks/scroll-fc938a7a.js";import{C as ns}from"../../../chunks/CodeFence-bf275b3f.js";import{C as rs}from"../../../chunks/CodeInline-03f5d050.js";import{L as J}from"../../../chunks/Link-d2aa795f.js";import"../../../chunks/singletons-01f6dffe.js";import"../../../chunks/contexts-ecb88871.js";function Ds(o){let a;return{c(){a=r("Svelte Action")},l(n){a=D(n,"Svelte Action")},m(n,p){t(n,a,p)},d(n){n&&l(a)}}}function cs(o){let a;return{c(){a=r("Svelte Transition")},l(n){a=D(n,"Svelte Transition")},m(n,p){t(n,a,p)},d(n){n&&l(a)}}}function is(o){let a;return{c(){a=r("#")},l(n){a=D(n,"#")},m(n,p){t(n,a,p)},d(n){n&&l(a)}}}function ys(o){let a;return{c(){a=r("#")},l(n){a=D(n,"#")},m(n,p){t(n,a,p)},d(n){n&&l(a)}}}function ms(o){let a;return{c(){a=r("#")},l(n){a=D(n,"#")},m(n,p){t(n,a,p)},d(n){n&&l(a)}}}function fs(o){let a,n=o[0].title+"",p,x,c,k,R,$,V,C,W,K,y,u,X,N,A,m,_,Y,O,w,f,d,Z,Q,H,ss,P;return k=new rs({props:{code:"transition"}}),$=new J({props:{href:"https://svelte.dev/docs#template-syntax-element-directives-use-action",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Ds]},$$scope:{ctx:o}}}),C=new J({props:{href:"https://svelte.dev/docs#template-syntax-element-directives-transition-fn",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[cs]},$$scope:{ctx:o}}}),u=new J({props:{class:"header-anchor",href:"#imports","aria-hidden":"true",$$slots:{default:[is]},$$scope:{ctx:o}}}),A=new ns({props:{lang:"typescript",ext:"ts",linesCount:2,code:`<pre><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span><span style="color: #9CDCFE">transition</span><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/animations&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span></code></pre>`}}),_=new J({props:{class:"header-anchor",href:"#definitions","aria-hidden":"true",$$slots:{default:[ys]},$$scope:{ctx:o}}}),w=new ns({props:{lang:"typescript",ext:"ts",linesCount:30,code:`<pre><code><span class="line"><span style="color: #C586C0">export</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">transition</span><span style="color: #D4D4D4">: (</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">element</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">HTMLElement</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">options</span><span style="color: #D4D4D4">: {</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">delay</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">duration</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #DCDCAA">easing</span><span style="color: #D4D4D4">?: (</span><span style="color: #9CDCFE">completion</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">inverse</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">boolean</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #DCDCAA">transition</span><span style="color: #D4D4D4">: (</span></span>
<span class="line"><span style="color: #D4D4D4">            </span><span style="color: #9CDCFE">element</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">HTMLElement</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">            </span><span style="color: #9CDCFE">options</span><span style="color: #D4D4D4">: {</span></span>
<span class="line"><span style="color: #D4D4D4">                </span><span style="color: #9CDCFE">delay</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">                </span><span style="color: #9CDCFE">duration</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">                </span><span style="color: #DCDCAA">easing</span><span style="color: #D4D4D4">?: (</span></span>
<span class="line"><span style="color: #D4D4D4">                    </span><span style="color: #9CDCFE">completion</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">                ) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">                </span><span style="color: #9CDCFE">end</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">                </span><span style="color: #9CDCFE">start</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">            }</span></span>
<span class="line"><span style="color: #D4D4D4">        ) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">            </span><span style="color: #9CDCFE">delay</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">            </span><span style="color: #9CDCFE">duration</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">            </span><span style="color: #DCDCAA">easing</span><span style="color: #D4D4D4">: (</span><span style="color: #9CDCFE">completion</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">            </span><span style="color: #DCDCAA">css</span><span style="color: #D4D4D4">: (</span><span style="color: #9CDCFE">completion</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">string</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">        };</span></span>
<span class="line"><span style="color: #D4D4D4">    }</span></span>
<span class="line"><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {};</span></span>
<span class="line"></span></code></pre>`}}),d=new J({props:{class:"header-anchor",href:"#usage","aria-hidden":"true",$$slots:{default:[ms]},$$scope:{ctx:o}}}),{c(){a=M("h1"),p=r(n),x=z(),c=M("p"),E(k.$$.fragment),R=r(" is a "),E($.$$.fragment),V=r(" which runs any "),E(C.$$.fragment),W=r(" on an HTML element. Linking the transition up to the playback system."),K=z(),y=M("h2"),E(u.$$.fragment),X=r(" Imports"),N=z(),E(A.$$.fragment),m=M("h2"),E(_.$$.fragment),Y=r(" Definitions"),O=z(),E(w.$$.fragment),f=M("h2"),E(d.$$.fragment),Z=r(" Usage"),Q=z(),H=M("p"),ss=r("..."),this.h()},l(s){a=q(s,"H1",{});var e=I(a);p=D(e,n),e.forEach(l),x=G(s),c=q(s,"P",{});var i=I(c);g(k.$$.fragment,i),R=D(i," is a "),g($.$$.fragment,i),V=D(i," which runs any "),g(C.$$.fragment,i),W=D(i," on an HTML element. Linking the transition up to the playback system."),i.forEach(l),K=G(s),y=q(s,"H2",{id:!0,tabindex:!0});var L=I(y);g(u.$$.fragment,L),X=D(L," Imports"),L.forEach(l),N=G(s),g(A.$$.fragment,s),m=q(s,"H2",{id:!0,tabindex:!0});var S=I(m);g(_.$$.fragment,S),Y=D(S," Definitions"),S.forEach(l),O=G(s),g(w.$$.fragment,s),f=q(s,"H2",{id:!0,tabindex:!0});var T=I(f);g(d.$$.fragment,T),Z=D(T," Usage"),T.forEach(l),Q=G(s),H=q(s,"P",{});var j=I(H);ss=D(j,"..."),j.forEach(l),this.h()},h(){U(y,"id","imports"),U(y,"tabindex","-1"),U(m,"id","definitions"),U(m,"tabindex","-1"),U(f,"id","usage"),U(f,"tabindex","-1")},m(s,e){t(s,a,e),h(a,p),t(s,x,e),t(s,c,e),b(k,c,null),h(c,R),b($,c,null),h(c,V),b(C,c,null),h(c,W),t(s,K,e),t(s,y,e),b(u,y,null),h(y,X),t(s,N,e),b(A,s,e),t(s,m,e),b(_,m,null),h(m,Y),t(s,O,e),b(w,s,e),t(s,f,e),b(d,f,null),h(f,Z),t(s,Q,e),t(s,H,e),h(H,ss),P=!0},p(s,[e]){(!P||e&1)&&n!==(n=s[0].title+"")&&ps(p,n);const i={};e&2&&(i.$$scope={dirty:e,ctx:s}),$.$set(i);const L={};e&2&&(L.$$scope={dirty:e,ctx:s}),C.$set(L);const S={};e&2&&(S.$$scope={dirty:e,ctx:s}),u.$set(S);const T={};e&2&&(T.$$scope={dirty:e,ctx:s}),_.$set(T);const j={};e&2&&(j.$$scope={dirty:e,ctx:s}),d.$set(j)},i(s){P||(B(k.$$.fragment,s),B($.$$.fragment,s),B(C.$$.fragment,s),B(u.$$.fragment,s),B(A.$$.fragment,s),B(_.$$.fragment,s),B(w.$$.fragment,s),B(d.$$.fragment,s),P=!0)},o(s){v(k.$$.fragment,s),v($.$$.fragment,s),v(C.$$.fragment,s),v(u.$$.fragment,s),v(A.$$.fragment,s),v(_.$$.fragment,s),v(w.$$.fragment,s),v(d.$$.fragment,s),P=!1},d(s){s&&l(a),s&&l(x),s&&l(c),F(k),F($),F(C),s&&l(K),s&&l(y),F(u),s&&l(N),F(A,s),s&&l(m),F(_),s&&l(O),F(w,s),s&&l(f),F(d),s&&l(Q),s&&l(H)}}}function $s(o,a,n){let p;return ts(o,os,x=>n(0,p=x)),[p]}class bs extends as{constructor(a){super(),es(this,a,$s,fs,ls,{})}}export{bs as default};