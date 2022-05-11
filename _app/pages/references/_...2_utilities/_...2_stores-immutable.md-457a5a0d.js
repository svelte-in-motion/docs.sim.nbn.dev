import{S as ls,i as os,s as rs,e as L,t as f,k as z,w as m,c as J,a as M,h as $,d as o,m as H,x as u,b as G,g as i,M as E,y,j as ps,q as C,o as _,B as d,_ as cs,E as is}from"../../../chunks/index-fdc571c5.js";import{f as Ds}from"../../../chunks/scroll-fc938a7a.js";import{C as ns}from"../../../chunks/CodeFence-bf275b3f.js";import{C as X}from"../../../chunks/CodeInline-03f5d050.js";import{L as N}from"../../../chunks/Link-d2aa795f.js";import{A as fs}from"../../../chunks/Admonition-ec3c5d9c.js";import"../../../chunks/singletons-01f6dffe.js";import"../../../chunks/contexts-ecb88871.js";function $s(p){let e;return{c(){e=f("limitations")},l(n){e=$(n,"limitations")},m(n,t){i(n,e,t)},d(n){n&&o(e)}}}function ms(p){let e,n,t,g,D,A,r,h,S;return t=new N({props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#things_that_dont_work_with_structured_clone",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[$s]},$$scope:{ctx:p}}}),D=new X({props:{code:"structuredClone"}}),r=new X({props:{code:"JSON.stringify"}}),{c(){e=L("p"),n=f("There are "),m(t.$$.fragment),g=f(" to what "),m(D.$$.fragment),A=f(" can clone for immutability. Generally, if the value is seralizable via "),m(r.$$.fragment),h=f(" it should work for this Store too.")},l(l){e=J(l,"P",{});var c=M(e);n=$(c,"There are "),u(t.$$.fragment,c),g=$(c," to what "),u(D.$$.fragment,c),A=$(c," can clone for immutability. Generally, if the value is seralizable via "),u(r.$$.fragment,c),h=$(c," it should work for this Store too."),c.forEach(o)},m(l,c){i(l,e,c),E(e,n),y(t,e,null),E(e,g),y(D,e,null),E(e,A),y(r,e,null),E(e,h),S=!0},p(l,c){const b={};c&2&&(b.$$scope={dirty:c,ctx:l}),t.$set(b)},i(l){S||(C(t.$$.fragment,l),C(D.$$.fragment,l),C(r.$$.fragment,l),S=!0)},o(l){_(t.$$.fragment,l),_(D.$$.fragment,l),_(r.$$.fragment,l),S=!1},d(l){l&&o(e),d(t),d(D),d(r)}}}function us(p){let e;return{c(){e=f("Svelte Store")},l(n){e=$(n,"Svelte Store")},m(n,t){i(n,e,t)},d(n){n&&o(e)}}}function ys(p){let e,n;return e=new X({props:{code:"structuredClone"}}),{c(){m(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,g){y(e,t,g),n=!0},p:is,i(t){n||(C(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function Cs(p){let e;return{c(){e=f("#")},l(n){e=$(n,"#")},m(n,t){i(n,e,t)},d(n){n&&o(e)}}}function _s(p){let e;return{c(){e=f("#")},l(n){e=$(n,"#")},m(n,t){i(n,e,t)},d(n){n&&o(e)}}}function ds(p){let e;return{c(){e=f("#")},l(n){e=$(n,"#")},m(n,t){i(n,e,t)},d(n){n&&o(e)}}}function gs(p){let e,n=p[0].title+"",t,g,D,A,r,h,S,l,c,b,Y,K,v,q,Z,Q,j,w,x,ss,R,I,k,B,es,V,W,O;return D=new fs({props:{type:"info",$$slots:{default:[ms]},$$scope:{ctx:p}}}),h=new X({props:{code:"immutable"}}),l=new N({props:{href:"https://svelte.dev/docs#run-time-svelte-store-writable",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[us]},$$scope:{ctx:p}}}),b=new N({props:{href:"https://developer.mozilla.org/en-US/docs/Web/API/structuredClone",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[ys]},$$scope:{ctx:p}}}),q=new N({props:{class:"header-anchor",href:"#imports","aria-hidden":"true",$$slots:{default:[Cs]},$$scope:{ctx:p}}}),j=new ns({props:{lang:"typescript",ext:"ts",linesCount:2,code:`<pre><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span><span style="color: #9CDCFE">immutable</span><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/utilities&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span></code></pre>`}}),x=new N({props:{class:"header-anchor",href:"#definitions","aria-hidden":"true",$$slots:{default:[_s]},$$scope:{ctx:p}}}),I=new ns({props:{lang:"typescript",ext:"ts",linesCount:4,code:`<pre><code><span class="line"><span style="color: #C586C0">export</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">immutable</span><span style="color: #D4D4D4">: &lt;</span><span style="color: #4EC9B0">T</span><span style="color: #D4D4D4">&gt;(</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">store</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">Writable</span><span style="color: #D4D4D4">&lt;</span><span style="color: #4EC9B0">T</span><span style="color: #D4D4D4">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Writable</span><span style="color: #D4D4D4">&lt;</span><span style="color: #4EC9B0">T</span><span style="color: #D4D4D4">&gt;;</span></span>
<span class="line"></span></code></pre>`}}),B=new N({props:{class:"header-anchor",href:"#usage","aria-hidden":"true",$$slots:{default:[ds]},$$scope:{ctx:p}}}),W=new ns({props:{lang:"typescript",ext:"ts",linesCount:15,code:`<pre><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span><span style="color: #9CDCFE">get</span><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;svelte/store&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span><span style="color: #9CDCFE">immutable</span><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/utilities&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">immutable_store</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">immutable</span><span style="color: #D4D4D4">();</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">my_object</span><span style="color: #D4D4D4"> = {</span><span style="color: #9CDCFE">hello:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;world&quot;</span><span style="color: #D4D4D4">};</span></span>
<span class="line"><span style="color: #9CDCFE">immutable_store</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">set</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">my_object</span><span style="color: #D4D4D4">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">store_cache</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">get</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">immutable_store</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #9CDCFE">console</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">log</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">my_object</span><span style="color: #D4D4D4"> === </span><span style="color: #9CDCFE">store_cache</span><span style="color: #D4D4D4">); </span><span style="color: #6A9955">// \`false\`</span></span>
<span class="line"></span>
<span class="line"><span style="color: #9CDCFE">my_object</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">hello</span><span style="color: #D4D4D4"> = </span><span style="color: #CE9178">&quot;goodbye&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #9CDCFE">console</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">log</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">my_object</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">hello</span><span style="color: #D4D4D4"> === </span><span style="color: #9CDCFE">store_cache</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">hello</span><span style="color: #D4D4D4">); </span><span style="color: #6A9955">// \`false\`</span></span>
<span class="line"></span></code></pre>`}}),{c(){e=L("h1"),t=f(n),g=z(),m(D.$$.fragment),A=z(),r=L("p"),m(h.$$.fragment),S=f(" is a "),m(l.$$.fragment),c=f(" that performs "),m(b.$$.fragment),Y=f(" for every read and update operation. So any changes to local variable will not affect the Store's internal cache."),K=z(),v=L("h2"),m(q.$$.fragment),Z=f(" Imports"),Q=z(),m(j.$$.fragment),w=L("h2"),m(x.$$.fragment),ss=f(" Definitions"),R=z(),m(I.$$.fragment),k=L("h2"),m(B.$$.fragment),es=f(" Usage"),V=z(),m(W.$$.fragment),this.h()},l(s){e=J(s,"H1",{});var a=M(e);t=$(a,n),a.forEach(o),g=H(s),u(D.$$.fragment,s),A=H(s),r=J(s,"P",{});var F=M(r);u(h.$$.fragment,F),S=$(F," is a "),u(l.$$.fragment,F),c=$(F," that performs "),u(b.$$.fragment,F),Y=$(F," for every read and update operation. So any changes to local variable will not affect the Store's internal cache."),F.forEach(o),K=H(s),v=J(s,"H2",{id:!0,tabindex:!0});var P=M(v);u(q.$$.fragment,P),Z=$(P," Imports"),P.forEach(o),Q=H(s),u(j.$$.fragment,s),w=J(s,"H2",{id:!0,tabindex:!0});var T=M(w);u(x.$$.fragment,T),ss=$(T," Definitions"),T.forEach(o),R=H(s),u(I.$$.fragment,s),k=J(s,"H2",{id:!0,tabindex:!0});var U=M(k);u(B.$$.fragment,U),es=$(U," Usage"),U.forEach(o),V=H(s),u(W.$$.fragment,s),this.h()},h(){G(v,"id","imports"),G(v,"tabindex","-1"),G(w,"id","definitions"),G(w,"tabindex","-1"),G(k,"id","usage"),G(k,"tabindex","-1")},m(s,a){i(s,e,a),E(e,t),i(s,g,a),y(D,s,a),i(s,A,a),i(s,r,a),y(h,r,null),E(r,S),y(l,r,null),E(r,c),y(b,r,null),E(r,Y),i(s,K,a),i(s,v,a),y(q,v,null),E(v,Z),i(s,Q,a),y(j,s,a),i(s,w,a),y(x,w,null),E(w,ss),i(s,R,a),y(I,s,a),i(s,k,a),y(B,k,null),E(k,es),i(s,V,a),y(W,s,a),O=!0},p(s,[a]){(!O||a&1)&&n!==(n=s[0].title+"")&&ps(t,n);const F={};a&2&&(F.$$scope={dirty:a,ctx:s}),D.$set(F);const P={};a&2&&(P.$$scope={dirty:a,ctx:s}),l.$set(P);const T={};a&2&&(T.$$scope={dirty:a,ctx:s}),b.$set(T);const U={};a&2&&(U.$$scope={dirty:a,ctx:s}),q.$set(U);const ts={};a&2&&(ts.$$scope={dirty:a,ctx:s}),x.$set(ts);const as={};a&2&&(as.$$scope={dirty:a,ctx:s}),B.$set(as)},i(s){O||(C(D.$$.fragment,s),C(h.$$.fragment,s),C(l.$$.fragment,s),C(b.$$.fragment,s),C(q.$$.fragment,s),C(j.$$.fragment,s),C(x.$$.fragment,s),C(I.$$.fragment,s),C(B.$$.fragment,s),C(W.$$.fragment,s),O=!0)},o(s){_(D.$$.fragment,s),_(h.$$.fragment,s),_(l.$$.fragment,s),_(b.$$.fragment,s),_(q.$$.fragment,s),_(j.$$.fragment,s),_(x.$$.fragment,s),_(I.$$.fragment,s),_(B.$$.fragment,s),_(W.$$.fragment,s),O=!1},d(s){s&&o(e),s&&o(g),d(D,s),s&&o(A),s&&o(r),d(h),d(l),d(b),s&&o(K),s&&o(v),d(q),s&&o(Q),d(j,s),s&&o(w),d(x),s&&o(R),d(I,s),s&&o(k),d(B),s&&o(V),d(W,s)}}}function hs(p,e,n){let t;return cs(p,Ds,g=>n(0,t=g)),[t]}class qs extends ls{constructor(e){super(),os(this,e,hs,gs,rs,{})}}export{qs as default};
