import{S as ws,i as vs,s as Bs,e as K,t as f,k as h,w as l,c as N,a as Q,h as y,d as t,m as w,x as o,b as X,g as $,M as u,y as r,j as xs,q as c,o as D,B as i,_ as bs}from"../../../chunks/index-fdc571c5.js";import{f as ks}from"../../../chunks/scroll-fc938a7a.js";import{C as ss}from"../../../chunks/CodeFence-bf275b3f.js";import{C as E}from"../../../chunks/CodeInline-03f5d050.js";import{L as hs}from"../../../chunks/Link-d2aa795f.js";import"../../../chunks/singletons-01f6dffe.js";import"../../../chunks/contexts-ecb88871.js";function Fs(d){let a;return{c(){a=f("#")},l(e){a=y(e,"#")},m(e,C){$(e,a,C)},d(e){e&&t(a)}}}function qs(d){let a;return{c(){a=f("#")},l(e){a=y(e,"#")},m(e,C){$(e,a,C)},d(e){e&&t(a)}}}function Is(d){let a;return{c(){a=f("#")},l(e){a=y(e,"#")},m(e,C){$(e,a,C)},d(e){e&&t(a)}}}function Hs(d){let a,e=d[0].title+"",C,R,V,cs,ns,A,v,Ds,es,k,g,B,is,F,as,q,p,$s,I,ms,H,fs,P,ys,L,us,O,Cs,S,ds,T,gs,ts,j,_,x,_s,M,ps,U,b,Es,z,As,ls,G,Y;return v=new hs({props:{class:"header-anchor",href:"#imports","aria-hidden":"true",$$slots:{default:[Fs]},$$scope:{ctx:d}}}),k=new ss({props:{lang:"typescript",ext:"ts",linesCount:5,code:`<pre><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">clamp</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">truncate</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/utilities&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span></code></pre>`}}),B=new hs({props:{class:"header-anchor",href:"#clamp","aria-hidden":"true",$$slots:{default:[qs]},$$scope:{ctx:d}}}),F=new E({props:{code:"clamp"}}),q=new ss({props:{lang:"typescript",ext:"ts",linesCount:6,code:`<pre><code><span class="line"><span style="color: #C586C0">export</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">clamp</span><span style="color: #D4D4D4">: (</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">min</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">max</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span></code></pre>`}}),I=new E({props:{code:"value"}}),H=new E({props:{code:"min"}}),P=new E({props:{code:"min"}}),L=new E({props:{code:"value"}}),O=new E({props:{code:"max"}}),S=new E({props:{code:"max"}}),T=new E({props:{code:"value"}}),j=new ss({props:{lang:"typescript",ext:"ts",linesCount:8,code:`<pre><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span><span style="color: #9CDCFE">clamp</span><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/utilities&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #DCDCAA">clamp</span><span style="color: #D4D4D4">(</span><span style="color: #B5CEA8">3</span><span style="color: #D4D4D4">, </span><span style="color: #B5CEA8">1</span><span style="color: #D4D4D4">, </span><span style="color: #B5CEA8">5</span><span style="color: #D4D4D4">); </span><span style="color: #6A9955">// \`3\`</span></span>
<span class="line"></span>
<span class="line"><span style="color: #DCDCAA">clamp</span><span style="color: #D4D4D4">(-</span><span style="color: #B5CEA8">3</span><span style="color: #D4D4D4">, </span><span style="color: #B5CEA8">1</span><span style="color: #D4D4D4">, </span><span style="color: #B5CEA8">5</span><span style="color: #D4D4D4">); </span><span style="color: #6A9955">// \`1\`</span></span>
<span class="line"></span>
<span class="line"><span style="color: #DCDCAA">clamp</span><span style="color: #D4D4D4">(</span><span style="color: #B5CEA8">6</span><span style="color: #D4D4D4">, </span><span style="color: #B5CEA8">1</span><span style="color: #D4D4D4">, </span><span style="color: #B5CEA8">5</span><span style="color: #D4D4D4">); </span><span style="color: #6A9955">// \`5\`</span></span>
<span class="line"></span></code></pre>`}}),x=new hs({props:{class:"header-anchor",href:"#truncate","aria-hidden":"true",$$slots:{default:[Is]},$$scope:{ctx:d}}}),M=new E({props:{code:"truncate"}}),U=new ss({props:{lang:"typescript",ext:"ts",linesCount:5,code:`<pre><code><span class="line"><span style="color: #C586C0">export</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">truncate</span><span style="color: #D4D4D4">: (</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">precision</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span></code></pre>`}}),z=new E({props:{code:"value"}}),G=new ss({props:{lang:"typescript",ext:"ts",linesCount:4,code:`<pre><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span><span style="color: #9CDCFE">truncate</span><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/utilities&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #DCDCAA">truncate</span><span style="color: #D4D4D4">(</span><span style="color: #B5CEA8">3.91238</span><span style="color: #D4D4D4">, </span><span style="color: #B5CEA8">3</span><span style="color: #D4D4D4">); </span><span style="color: #6A9955">// \`3.912\`</span></span>
<span class="line"></span></code></pre>`}}),{c(){a=K("h1"),C=f(e),R=h(),V=K("p"),cs=f("Helper utilities for mathematical related tasks are provided."),ns=h(),A=K("h2"),l(v.$$.fragment),Ds=f(" Imports"),es=h(),l(k.$$.fragment),g=K("h2"),l(B.$$.fragment),is=h(),l(F.$$.fragment),as=h(),l(q.$$.fragment),p=K("p"),$s=f("If "),l(I.$$.fragment),ms=f(" is less than "),l(H.$$.fragment),fs=f(", then "),l(P.$$.fragment),ys=f(" is returned. If "),l(L.$$.fragment),us=f(" is greater than "),l(O.$$.fragment),Cs=f(", then "),l(S.$$.fragment),ds=f(" is returned. Otherwise, "),l(T.$$.fragment),gs=f(" is returned."),ts=h(),l(j.$$.fragment),_=K("h2"),l(x.$$.fragment),_s=h(),l(M.$$.fragment),ps=h(),l(U.$$.fragment),b=K("p"),Es=f("Truncates "),l(z.$$.fragment),As=f("'s decimal precision without rounding."),ls=h(),l(G.$$.fragment),this.h()},l(s){a=N(s,"H1",{});var n=Q(a);C=y(n,e),n.forEach(t),R=w(s),V=N(s,"P",{});var Z=Q(V);cs=y(Z,"Helper utilities for mathematical related tasks are provided."),Z.forEach(t),ns=w(s),A=N(s,"H2",{id:!0,tabindex:!0});var W=Q(A);o(v.$$.fragment,W),Ds=y(W," Imports"),W.forEach(t),es=w(s),o(k.$$.fragment,s),g=N(s,"H2",{id:!0,tabindex:!0});var J=Q(g);o(B.$$.fragment,J),is=w(J),o(F.$$.fragment,J),J.forEach(t),as=w(s),o(q.$$.fragment,s),p=N(s,"P",{});var m=Q(p);$s=y(m,"If "),o(I.$$.fragment,m),ms=y(m," is less than "),o(H.$$.fragment,m),fs=y(m,", then "),o(P.$$.fragment,m),ys=y(m," is returned. If "),o(L.$$.fragment,m),us=y(m," is greater than "),o(O.$$.fragment,m),Cs=y(m,", then "),o(S.$$.fragment,m),ds=y(m," is returned. Otherwise, "),o(T.$$.fragment,m),gs=y(m," is returned."),m.forEach(t),ts=w(s),o(j.$$.fragment,s),_=N(s,"H2",{id:!0,tabindex:!0});var os=Q(_);o(x.$$.fragment,os),_s=w(os),o(M.$$.fragment,os),os.forEach(t),ps=w(s),o(U.$$.fragment,s),b=N(s,"P",{});var rs=Q(b);Es=y(rs,"Truncates "),o(z.$$.fragment,rs),As=y(rs,"'s decimal precision without rounding."),rs.forEach(t),ls=w(s),o(G.$$.fragment,s),this.h()},h(){X(A,"id","imports"),X(A,"tabindex","-1"),X(g,"id","clamp"),X(g,"tabindex","-1"),X(_,"id","truncate"),X(_,"tabindex","-1")},m(s,n){$(s,a,n),u(a,C),$(s,R,n),$(s,V,n),u(V,cs),$(s,ns,n),$(s,A,n),r(v,A,null),u(A,Ds),$(s,es,n),r(k,s,n),$(s,g,n),r(B,g,null),u(g,is),r(F,g,null),$(s,as,n),r(q,s,n),$(s,p,n),u(p,$s),r(I,p,null),u(p,ms),r(H,p,null),u(p,fs),r(P,p,null),u(p,ys),r(L,p,null),u(p,us),r(O,p,null),u(p,Cs),r(S,p,null),u(p,ds),r(T,p,null),u(p,gs),$(s,ts,n),r(j,s,n),$(s,_,n),r(x,_,null),u(_,_s),r(M,_,null),$(s,ps,n),r(U,s,n),$(s,b,n),u(b,Es),r(z,b,null),u(b,As),$(s,ls,n),r(G,s,n),Y=!0},p(s,[n]){(!Y||n&1)&&e!==(e=s[0].title+"")&&xs(C,e);const Z={};n&2&&(Z.$$scope={dirty:n,ctx:s}),v.$set(Z);const W={};n&2&&(W.$$scope={dirty:n,ctx:s}),B.$set(W);const J={};n&2&&(J.$$scope={dirty:n,ctx:s}),x.$set(J)},i(s){Y||(c(v.$$.fragment,s),c(k.$$.fragment,s),c(B.$$.fragment,s),c(F.$$.fragment,s),c(q.$$.fragment,s),c(I.$$.fragment,s),c(H.$$.fragment,s),c(P.$$.fragment,s),c(L.$$.fragment,s),c(O.$$.fragment,s),c(S.$$.fragment,s),c(T.$$.fragment,s),c(j.$$.fragment,s),c(x.$$.fragment,s),c(M.$$.fragment,s),c(U.$$.fragment,s),c(z.$$.fragment,s),c(G.$$.fragment,s),Y=!0)},o(s){D(v.$$.fragment,s),D(k.$$.fragment,s),D(B.$$.fragment,s),D(F.$$.fragment,s),D(q.$$.fragment,s),D(I.$$.fragment,s),D(H.$$.fragment,s),D(P.$$.fragment,s),D(L.$$.fragment,s),D(O.$$.fragment,s),D(S.$$.fragment,s),D(T.$$.fragment,s),D(j.$$.fragment,s),D(x.$$.fragment,s),D(M.$$.fragment,s),D(U.$$.fragment,s),D(z.$$.fragment,s),D(G.$$.fragment,s),Y=!1},d(s){s&&t(a),s&&t(R),s&&t(V),s&&t(ns),s&&t(A),i(v),s&&t(es),i(k,s),s&&t(g),i(B),i(F),s&&t(as),i(q,s),s&&t(p),i(I),i(H),i(P),i(L),i(O),i(S),i(T),s&&t(ts),i(j,s),s&&t(_),i(x),i(M),s&&t(ps),i(U,s),s&&t(b),i(z),s&&t(ls),i(G,s)}}}function Ps(d,a,e){let C;return bs(d,ks,R=>e(0,C=R)),[C]}class zs extends ws{constructor(a){super(),vs(this,a,Ps,Hs,Bs,{})}}export{zs as default};
