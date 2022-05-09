import{S as rs,i as cs,s as Ds,e as T,t as r,k as z,w as i,c as A,a as L,h as c,d as p,m as G,x as y,b as B,g as t,M as F,y as f,j as is,q as $,o as C,B as m,_ as ys,E as fs}from"../../../chunks/index-fdc571c5.js";import{f as $s}from"../../../chunks/scroll-fc938a7a.js";import{C as ps}from"../../../chunks/CodeFence-bf275b3f.js";import{C as os}from"../../../chunks/CodeInline-03f5d050.js";import{L as K}from"../../../chunks/Link-d2aa795f.js";import"../../../chunks/singletons-01f6dffe.js";import"../../../chunks/contexts-ecb88871.js";function Cs(o){let n,a;return n=new os({props:{code:"scale"}}),{c(){i(n.$$.fragment)},l(l){y(n.$$.fragment,l)},m(l,h){f(n,l,h),a=!0},p:fs,i(l){a||($(n.$$.fragment,l),a=!0)},o(l){C(n.$$.fragment,l),a=!1},d(l){m(n,l)}}}function ms(o){let n;return{c(){n=r("#")},l(a){n=c(a,"#")},m(a,l){t(a,n,l)},d(a){a&&p(n)}}}function us(o){let n;return{c(){n=r("#")},l(a){n=c(a,"#")},m(a,l){t(a,n,l)},d(a){a&&p(n)}}}function ds(o){let n;return{c(){n=r("#")},l(a){n=c(a,"#")},m(a,l){t(a,n,l)},d(a){a&&p(n)}}}function Es(o){let n;return{c(){n=r("#")},l(a){n=c(a,"#")},m(a,l){t(a,n,l)},d(a){a&&p(n)}}}function _s(o){let n,a=o[0].title+"",l,h,D,X,w,Y,v,Z,N,u,b,ss,Q,q,d,S,ns,R,I,E,k,as,V,H,_,x,es,W,M,ls,J;return w=new os({props:{code:"Scale"}}),v=new K({props:{href:"/references/animations/transitions-scale",$$slots:{default:[Cs]},$$scope:{ctx:o}}}),b=new K({props:{class:"header-anchor",href:"#imports","aria-hidden":"true",$$slots:{default:[ms]},$$scope:{ctx:o}}}),q=new ps({props:{lang:"svelte",ext:"svelte",linesCount:6,code:`<pre><code><span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span><span style="color: #9CDCFE">Scale</span><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/animations&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> {</span><span style="color: #4FC1FF">In</span><span style="color: #D4D4D4">, </span><span style="color: #4FC1FF">Out</span><span style="color: #D4D4D4">} = </span><span style="color: #9CDCFE">Scale</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span></code></pre>`}}),S=new K({props:{class:"header-anchor",href:"#definitions","aria-hidden":"true",$$slots:{default:[us]},$$scope:{ctx:o}}}),I=new ps({props:{lang:"svelte",ext:"svelte",linesCount:16,code:`<pre><code><span class="line"><span style="color: #808080">&lt;</span><span style="color: #4EC9B0">Scale</span><span style="color: #D4D4D4">.*</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">element</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #9CDCFE">HTMLDivElement</span><span style="color: #D4D4D4"> | </span><span style="color: #9CDCFE">HTMLSpanElement</span><span style="color: #D4D4D4"> | </span><span style="color: #569CD6">null}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">class</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #9CDCFE">string</span><span style="color: #569CD6">}</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">is</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #CE9178">&quot;div&quot;</span><span style="color: #D4D4D4"> | </span><span style="color: #CE9178">&quot;span&quot;</span><span style="color: #569CD6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">delay</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #9CDCFE">number</span><span style="color: #569CD6">}</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">duration</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #9CDCFE">number</span><span style="color: #569CD6">}</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">easing</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">completion</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">number</span><span style="color: #569CD6">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">end_x</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #9CDCFE">number</span><span style="color: #D4D4D4"> | </span><span style="color: #9CDCFE">string</span><span style="color: #569CD6">}</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">start_x</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #9CDCFE">number</span><span style="color: #D4D4D4"> | </span><span style="color: #9CDCFE">string</span><span style="color: #569CD6">}</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">end_y</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #9CDCFE">number</span><span style="color: #D4D4D4"> | </span><span style="color: #9CDCFE">string</span><span style="color: #569CD6">}</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">start_y</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #9CDCFE">number</span><span style="color: #D4D4D4"> | </span><span style="color: #9CDCFE">string</span><span style="color: #569CD6">}</span></span>
<span class="line"><span style="color: #808080">/&gt;</span></span>
<span class="line"></span></code></pre>`}}),k=new K({props:{class:"header-anchor",href:"#usage","aria-hidden":"true",$$slots:{default:[ds]},$$scope:{ctx:o}}}),H=new ps({props:{lang:"svelte",ext:"svelte",linesCount:16,code:`<pre><code><span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span><span style="color: #9CDCFE">Scale</span><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/animations&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #6A9955">&lt;!-- Entrance Animation --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #808080">&lt;</span><span style="color: #4EC9B0">Scale</span><span style="color: #D4D4D4">.</span><span style="color: #4EC9B0">In</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">    ...</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #4EC9B0">Scale</span><span style="color: #D4D4D4">.</span><span style="color: #4EC9B0">In</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #6A9955">&lt;!-- Exit Animation --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #808080">&lt;</span><span style="color: #4EC9B0">Scale</span><span style="color: #D4D4D4">.</span><span style="color: #4EC9B0">Out</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">    ...</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #4EC9B0">Scale</span><span style="color: #D4D4D4">.</span><span style="color: #4EC9B0">Out</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span></code></pre>`}}),x=new K({props:{class:"header-anchor",href:"#sample-scale-in","aria-hidden":"true",$$slots:{default:[Es]},$$scope:{ctx:o}}}),{c(){n=T("h1"),l=r(a),h=z(),D=T("p"),X=r("The "),i(w.$$.fragment),Y=r(" namespace provides predefined Svelte Components for running the "),i(v.$$.fragment),Z=r(" Svelte Transition on a container element, that's linked to the playback system."),N=z(),u=T("h2"),i(b.$$.fragment),ss=r(" Imports"),Q=z(),i(q.$$.fragment),d=T("h2"),i(S.$$.fragment),ns=r(" Definitions"),R=z(),i(I.$$.fragment),E=T("h2"),i(k.$$.fragment),as=r(" Usage"),V=z(),i(H.$$.fragment),_=T("h2"),i(x.$$.fragment),es=r(" Sample: Scale-In"),W=z(),M=T("p"),ls=r("..."),this.h()},l(s){n=A(s,"H1",{});var e=L(n);l=c(e,a),e.forEach(p),h=G(s),D=A(s,"P",{});var g=L(D);X=c(g,"The "),y(w.$$.fragment,g),Y=c(g," namespace provides predefined Svelte Components for running the "),y(v.$$.fragment,g),Z=c(g," Svelte Transition on a container element, that's linked to the playback system."),g.forEach(p),N=G(s),u=A(s,"H2",{id:!0,tabindex:!0});var O=L(u);y(b.$$.fragment,O),ss=c(O," Imports"),O.forEach(p),Q=G(s),y(q.$$.fragment,s),d=A(s,"H2",{id:!0,tabindex:!0});var U=L(d);y(S.$$.fragment,U),ns=c(U," Definitions"),U.forEach(p),R=G(s),y(I.$$.fragment,s),E=A(s,"H2",{id:!0,tabindex:!0});var P=L(E);y(k.$$.fragment,P),as=c(P," Usage"),P.forEach(p),V=G(s),y(H.$$.fragment,s),_=A(s,"H2",{id:!0,tabindex:!0});var j=L(_);y(x.$$.fragment,j),es=c(j," Sample: Scale-In"),j.forEach(p),W=G(s),M=A(s,"P",{});var ts=L(M);ls=c(ts,"..."),ts.forEach(p),this.h()},h(){B(u,"id","imports"),B(u,"tabindex","-1"),B(d,"id","definitions"),B(d,"tabindex","-1"),B(E,"id","usage"),B(E,"tabindex","-1"),B(_,"id","sample-scale-in"),B(_,"tabindex","-1")},m(s,e){t(s,n,e),F(n,l),t(s,h,e),t(s,D,e),F(D,X),f(w,D,null),F(D,Y),f(v,D,null),F(D,Z),t(s,N,e),t(s,u,e),f(b,u,null),F(u,ss),t(s,Q,e),f(q,s,e),t(s,d,e),f(S,d,null),F(d,ns),t(s,R,e),f(I,s,e),t(s,E,e),f(k,E,null),F(E,as),t(s,V,e),f(H,s,e),t(s,_,e),f(x,_,null),F(_,es),t(s,W,e),t(s,M,e),F(M,ls),J=!0},p(s,[e]){(!J||e&1)&&a!==(a=s[0].title+"")&&is(l,a);const g={};e&2&&(g.$$scope={dirty:e,ctx:s}),v.$set(g);const O={};e&2&&(O.$$scope={dirty:e,ctx:s}),b.$set(O);const U={};e&2&&(U.$$scope={dirty:e,ctx:s}),S.$set(U);const P={};e&2&&(P.$$scope={dirty:e,ctx:s}),k.$set(P);const j={};e&2&&(j.$$scope={dirty:e,ctx:s}),x.$set(j)},i(s){J||($(w.$$.fragment,s),$(v.$$.fragment,s),$(b.$$.fragment,s),$(q.$$.fragment,s),$(S.$$.fragment,s),$(I.$$.fragment,s),$(k.$$.fragment,s),$(H.$$.fragment,s),$(x.$$.fragment,s),J=!0)},o(s){C(w.$$.fragment,s),C(v.$$.fragment,s),C(b.$$.fragment,s),C(q.$$.fragment,s),C(S.$$.fragment,s),C(I.$$.fragment,s),C(k.$$.fragment,s),C(H.$$.fragment,s),C(x.$$.fragment,s),J=!1},d(s){s&&p(n),s&&p(h),s&&p(D),m(w),m(v),s&&p(N),s&&p(u),m(b),s&&p(Q),m(q,s),s&&p(d),m(S),s&&p(R),m(I,s),s&&p(E),m(k),s&&p(V),m(H,s),s&&p(_),m(x),s&&p(W),s&&p(M)}}}function gs(o,n,a){let l;return ys(o,$s,h=>a(0,l=h)),[l]}class Bs extends rs{constructor(n){super(),cs(this,n,gs,_s,Ds,{})}}export{Bs as default};
