import{S as cn,i as $n,s as fn,e as b,t as f,k as d,w as p,c as T,a as v,h as y,d as t,m as E,x as o,b as F,g as i,M as u,y as r,j as yn,q as D,o as c,B as $,_ as mn,E as Dn}from"../../../chunks/index-fdc571c5.js";import{f as un}from"../../../chunks/scroll-fc938a7a.js";import{C as vs}from"../../../chunks/CodeFence-bf275b3f.js";import{C}from"../../../chunks/CodeInline-03f5d050.js";import{L as x}from"../../../chunks/Link-d2aa795f.js";import"../../../chunks/singletons-01f6dffe.js";import"../../../chunks/contexts-ecb88871.js";function Cn(m){let n;return{c(){n=f("Svelte Store")},l(e){n=y(e,"Svelte Store")},m(e,l){i(e,n,l)},d(e){e&&t(n)}}}function gn(m){let n,e;return n=new C({props:{code:"interpolate"}}),{c(){p(n.$$.fragment)},l(l){o(n.$$.fragment,l)},m(l,w){r(n,l,w),e=!0},p:Dn,i(l){e||(D(n.$$.fragment,l),e=!0)},o(l){c(n.$$.fragment,l),e=!1},d(l){$(n,l)}}}function dn(m){let n,e;return n=new C({props:{code:"frame"}}),{c(){p(n.$$.fragment)},l(l){o(n.$$.fragment,l)},m(l,w){r(n,l,w),e=!0},p:Dn,i(l){e||(D(n.$$.fragment,l),e=!0)},o(l){c(n.$$.fragment,l),e=!1},d(l){$(n,l)}}}function En(m){let n,e;return n=new C({props:{code:"framerate"}}),{c(){p(n.$$.fragment)},l(l){o(n.$$.fragment,l)},m(l,w){r(n,l,w),e=!0},p:Dn,i(l){e||(D(n.$$.fragment,l),e=!0)},o(l){c(n.$$.fragment,l),e=!1},d(l){$(n,l)}}}function _n(m){let n;return{c(){n=f("#")},l(e){n=y(e,"#")},m(e,l){i(e,n,l)},d(e){e&&t(n)}}}function Fn(m){let n;return{c(){n=f("#")},l(e){n=y(e,"#")},m(e,l){i(e,n,l)},d(e){e&&t(n)}}}function hn(m){let n;return{c(){n=f("#")},l(e){n=y(e,"#")},m(e,l){i(e,n,l)},d(e){e&&t(n)}}}function bn(m){let n;return{c(){n=f("#")},l(e){n=y(e,"#")},m(e,l){i(e,n,l)},d(e){e&&t(n)}}}function Tn(m){let n;return{c(){n=f("Svelte Context")},l(e){n=y(e,"Svelte Context")},m(e,l){i(e,n,l)},d(e){e&&t(n)}}}function vn(m){let n;return{c(){n=f("#")},l(e){n=y(e,"#")},m(e,l){i(e,n,l)},d(e){e&&t(n)}}}function wn(m){let n;return{c(){n=f("#")},l(e){n=y(e,"#")},m(e,l){i(e,n,l)},d(e){e&&t(n)}}}function An(m){let n;return{c(){n=f("#")},l(e){n=y(e,"#")},m(e,l){i(e,n,l)},d(e){e&&t(n)}}}function xn(m){let n,e=m[0].title+"",l,w,g,Z,Ls,R,Rs,U,Us,j,js,M,Ms,xs,H,V,Vs,Ss,ss,I,z,zs,qs,ns,P,G,Gs,ks,es,k,J,Js,as,Bs,S,ls,Ks,ts,Qs,K,Ws,Ns,ps,B,Q,Ys,os,Os,q,rs,Zs,Ds,sn,cs,nn,Xs,$s,N,W,en,is,Hs,h,fs,an,ys,ln,ms,tn,us,pn,Is,Cs,L,Y,on,Ps,_s,rn,ws;return Z=new C({props:{code:"state"}}),R=new x({props:{href:"https://svelte.dev/docs#run-time-svelte-store-writable",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Cn]},$$scope:{ctx:m}}}),U=new x({props:{href:"/references/core/stores-interpolate",$$slots:{default:[gn]},$$scope:{ctx:m}}}),j=new x({props:{href:"/references/core/stores-frame",$$slots:{default:[dn]},$$scope:{ctx:m}}}),M=new x({props:{href:"/references/core/stores-framerate",$$slots:{default:[En]},$$scope:{ctx:m}}}),V=new x({props:{class:"header-anchor",href:"#imports","aria-hidden":"true",$$slots:{default:[_n]},$$scope:{ctx:m}}}),ss=new vs({props:{lang:"typescript",ext:"ts",linesCount:5,code:`<pre><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">CONTEXT_STATE</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">state</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/core&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span></code></pre>`}}),z=new x({props:{class:"header-anchor",href:"#definitions","aria-hidden":"true",$$slots:{default:[Fn]},$$scope:{ctx:m}}}),ns=new vs({props:{lang:"typescript",ext:"ts",linesCount:34,code:`<pre><code><span class="line"><span style="color: #C586C0">export</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">state</span><span style="color: #D4D4D4">: (</span><span style="color: #9CDCFE">options</span><span style="color: #D4D4D4">: {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">delay</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">duration</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #DCDCAA">easing</span><span style="color: #D4D4D4">?: (</span><span style="color: #9CDCFE">completion</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">frame</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">IFrameStore</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">framerate</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">IFrameRateStore</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">end</span><span style="color: #D4D4D4">?:</span></span>
<span class="line"><span style="color: #D4D4D4">        | </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">        | {</span></span>
<span class="line"><span style="color: #D4D4D4">              </span><span style="color: #9CDCFE">extrapolate</span><span style="color: #D4D4D4">?:</span></span>
<span class="line"><span style="color: #D4D4D4">                  | </span><span style="color: #CE9178">&quot;clamp&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">                  | </span><span style="color: #CE9178">&quot;extend&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">                  | </span><span style="color: #CE9178">&quot;wrap&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">              </span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">          };</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">start</span><span style="color: #D4D4D4">?:</span></span>
<span class="line"><span style="color: #D4D4D4">        | </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">        | {</span></span>
<span class="line"><span style="color: #D4D4D4">              </span><span style="color: #9CDCFE">extrapolate</span><span style="color: #D4D4D4">?:</span></span>
<span class="line"><span style="color: #D4D4D4">                  | </span><span style="color: #CE9178">&quot;clamp&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">                  | </span><span style="color: #CE9178">&quot;extend&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">                  | </span><span style="color: #CE9178">&quot;wrap&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">              </span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">          };</span></span>
<span class="line"><span style="color: #D4D4D4">}) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Readable</span><span style="color: #D4D4D4">&lt;</span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">&gt;;</span></span>
<span class="line"></span></code></pre>`}}),G=new x({props:{class:"header-anchor",href:"#usage","aria-hidden":"true",$$slots:{default:[hn]},$$scope:{ctx:m}}}),es=new vs({props:{lang:"typescript",ext:"ts",linesCount:14,code:`<pre><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">frame</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">framerate</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">state</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/core&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">frame_store</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">frame</span><span style="color: #D4D4D4">(</span><span style="color: #B5CEA8">0</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">framerate_store</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">framerate</span><span style="color: #D4D4D4">(</span><span style="color: #B5CEA8">60</span><span style="color: #D4D4D4">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">state_store</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">state</span><span style="color: #D4D4D4">({</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">frame:</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">frame_store</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">framerate:</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">framerate_store</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">});</span></span>
<span class="line"></span></code></pre>`}}),J=new x({props:{class:"header-anchor",href:"#context-state","aria-hidden":"true",$$slots:{default:[bn]},$$scope:{ctx:m}}}),as=new C({props:{code:"CONTEXT_STATE"}}),ls=new C({props:{code:"CONTEXT_STATE"}}),ts=new C({props:{code:"state"}}),K=new x({props:{href:"https://svelte.dev/docs#run-time-svelte-setcontext",target:"_blank",rel:"noopener noreferrer",$$slots:{default:[Tn]},$$scope:{ctx:m}}}),ps=new vs({props:{lang:"typescript",ext:"ts",linesCount:34,code:`<pre><code><span class="line"><span style="color: #C586C0">export</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">CONTEXT_STATE</span><span style="color: #D4D4D4">: {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #DCDCAA">has</span><span style="color: #D4D4D4">: () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">boolean</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #DCDCAA">get</span><span style="color: #D4D4D4">: (</span><span style="color: #9CDCFE">options</span><span style="color: #D4D4D4">: {</span></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">delay</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">duration</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #DCDCAA">easing</span><span style="color: #D4D4D4">?: (</span><span style="color: #9CDCFE">completion</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">end</span><span style="color: #D4D4D4">?:</span></span>
<span class="line"><span style="color: #D4D4D4">            | </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">            | {</span></span>
<span class="line"><span style="color: #D4D4D4">                  </span><span style="color: #9CDCFE">extrapolate</span><span style="color: #D4D4D4">?:</span></span>
<span class="line"><span style="color: #D4D4D4">                      | </span><span style="color: #CE9178">&quot;clamp&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">                      | </span><span style="color: #CE9178">&quot;extend&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">                      | </span><span style="color: #CE9178">&quot;wrap&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">                  </span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">              };</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">        </span><span style="color: #9CDCFE">start</span><span style="color: #D4D4D4">?:</span></span>
<span class="line"><span style="color: #D4D4D4">            | </span><span style="color: #4EC9B0">number</span></span>
<span class="line"><span style="color: #D4D4D4">            | {</span></span>
<span class="line"><span style="color: #D4D4D4">                  </span><span style="color: #9CDCFE">extrapolate</span><span style="color: #D4D4D4">?:</span></span>
<span class="line"><span style="color: #D4D4D4">                      | </span><span style="color: #CE9178">&quot;clamp&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">                      | </span><span style="color: #CE9178">&quot;extend&quot;</span></span>
<span class="line"><span style="color: #D4D4D4">                      | </span><span style="color: #CE9178">&quot;wrap&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">                  </span><span style="color: #9CDCFE">value</span><span style="color: #D4D4D4">?: </span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">              };</span></span>
<span class="line"><span style="color: #D4D4D4">    }) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #4EC9B0">Readable</span><span style="color: #D4D4D4">&lt;</span><span style="color: #4EC9B0">number</span><span style="color: #D4D4D4">&gt;;</span></span>
<span class="line"><span style="color: #D4D4D4">};</span></span>
<span class="line"></span></code></pre>`}}),Q=new x({props:{class:"header-anchor",href:"#context-state-has","aria-hidden":"true",$$slots:{default:[vn]},$$scope:{ctx:m}}}),os=new C({props:{code:"CONTEXT_STATE.has"}}),rs=new C({props:{code:"CONTEXT_STATE.has"}}),Ds=new C({props:{code:"frame"}}),cs=new C({props:{code:"framerate"}}),$s=new vs({props:{lang:"svelte",ext:"svelte",linesCount:6,code:`<pre><code><span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span><span style="color: #9CDCFE">CONTEXT_STATE</span><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/core&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">IS_AVAILABLE</span><span style="color: #D4D4D4"> = </span><span style="color: #4FC1FF">CONTEXT_STATE</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">has</span><span style="color: #D4D4D4">();</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span></code></pre>`}}),W=new x({props:{class:"header-anchor",href:"#context-state-get","aria-hidden":"true",$$slots:{default:[wn]},$$scope:{ctx:m}}}),is=new C({props:{code:"CONTEXT_STATE.get"}}),fs=new C({props:{code:"CONTEXT_STATE.get"}}),ys=new C({props:{code:"state"}}),ms=new C({props:{code:"frame"}}),us=new C({props:{code:"framerate"}}),Cs=new vs({props:{lang:"svelte",ext:"svelte",linesCount:6,code:`<pre><code><span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> {</span><span style="color: #9CDCFE">CONTEXT_STATE</span><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&quot;@svelte-in-motion/core&quot;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">state_store</span><span style="color: #D4D4D4"> = </span><span style="color: #4FC1FF">CONTEXT_STATE</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">get</span><span style="color: #D4D4D4">();</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span></code></pre>`}}),Y=new x({props:{class:"header-anchor",href:"#sample-heartbeat-animation","aria-hidden":"true",$$slots:{default:[An]},$$scope:{ctx:m}}}),{c(){n=b("h1"),l=f(e),w=d(),g=b("p"),p(Z.$$.fragment),Ls=f(" is a "),p(R.$$.fragment),Rs=f(" that internally creates an "),p(U.$$.fragment),Us=f(" Store that derives its current value from a "),p(j.$$.fragment),js=f(" and a "),p(M.$$.fragment),Ms=f(" Store."),xs=d(),H=b("h2"),p(V.$$.fragment),Vs=f(" Imports"),Ss=d(),p(ss.$$.fragment),I=b("h2"),p(z.$$.fragment),zs=f(" Definitions"),qs=d(),p(ns.$$.fragment),P=b("h2"),p(G.$$.fragment),Gs=f(" Usage"),ks=d(),p(es.$$.fragment),k=b("h2"),p(J.$$.fragment),Js=d(),p(as.$$.fragment),Bs=d(),S=b("p"),p(ls.$$.fragment),Ks=f(" handles making a new "),p(ts.$$.fragment),Qs=f(" store based on the current "),p(K.$$.fragment),Ws=f(" if available."),Ns=d(),p(ps.$$.fragment),B=b("h3"),p(Q.$$.fragment),Ys=d(),p(os.$$.fragment),Os=d(),q=b("p"),p(rs.$$.fragment),Zs=f(" returns if there are available "),p(Ds.$$.fragment),sn=f(" and "),p(cs.$$.fragment),nn=f(" Stores in the current Context."),Xs=d(),p($s.$$.fragment),N=b("h3"),p(W.$$.fragment),en=d(),p(is.$$.fragment),Hs=d(),h=b("p"),p(fs.$$.fragment),an=f(" makes a new "),p(ys.$$.fragment),ln=f(" Store if it can retrieve the "),p(ms.$$.fragment),tn=f(" and "),p(us.$$.fragment),pn=f(" Stores in the current Context."),Is=d(),p(Cs.$$.fragment),L=b("h2"),p(Y.$$.fragment),on=f(" Sample - Heartbeat Animation"),Ps=d(),_s=b("p"),rn=f("..."),this.h()},l(s){n=T(s,"H1",{});var a=v(n);l=y(a,e),a.forEach(t),w=E(s),g=T(s,"P",{});var _=v(g);o(Z.$$.fragment,_),Ls=y(_," is a "),o(R.$$.fragment,_),Rs=y(_," that internally creates an "),o(U.$$.fragment,_),Us=y(_," Store that derives its current value from a "),o(j.$$.fragment,_),js=y(_," and a "),o(M.$$.fragment,_),Ms=y(_," Store."),_.forEach(t),xs=E(s),H=T(s,"H2",{id:!0,tabindex:!0});var Fs=v(H);o(V.$$.fragment,Fs),Vs=y(Fs," Imports"),Fs.forEach(t),Ss=E(s),o(ss.$$.fragment,s),I=T(s,"H2",{id:!0,tabindex:!0});var hs=v(I);o(z.$$.fragment,hs),zs=y(hs," Definitions"),hs.forEach(t),qs=E(s),o(ns.$$.fragment,s),P=T(s,"H2",{id:!0,tabindex:!0});var bs=v(P);o(G.$$.fragment,bs),Gs=y(bs," Usage"),bs.forEach(t),ks=E(s),o(es.$$.fragment,s),k=T(s,"H2",{id:!0,tabindex:!0});var gs=v(k);o(J.$$.fragment,gs),Js=E(gs),o(as.$$.fragment,gs),gs.forEach(t),Bs=E(s),S=T(s,"P",{});var O=v(S);o(ls.$$.fragment,O),Ks=y(O," handles making a new "),o(ts.$$.fragment,O),Qs=y(O," store based on the current "),o(K.$$.fragment,O),Ws=y(O," if available."),O.forEach(t),Ns=E(s),o(ps.$$.fragment,s),B=T(s,"H3",{id:!0,tabindex:!0});var ds=v(B);o(Q.$$.fragment,ds),Ys=E(ds),o(os.$$.fragment,ds),ds.forEach(t),Os=E(s),q=T(s,"P",{});var X=v(q);o(rs.$$.fragment,X),Zs=y(X," returns if there are available "),o(Ds.$$.fragment,X),sn=y(X," and "),o(cs.$$.fragment,X),nn=y(X," Stores in the current Context."),X.forEach(t),Xs=E(s),o($s.$$.fragment,s),N=T(s,"H3",{id:!0,tabindex:!0});var Es=v(N);o(W.$$.fragment,Es),en=E(Es),o(is.$$.fragment,Es),Es.forEach(t),Hs=E(s),h=T(s,"P",{});var A=v(h);o(fs.$$.fragment,A),an=y(A," makes a new "),o(ys.$$.fragment,A),ln=y(A," Store if it can retrieve the "),o(ms.$$.fragment,A),tn=y(A," and "),o(us.$$.fragment,A),pn=y(A," Stores in the current Context."),A.forEach(t),Is=E(s),o(Cs.$$.fragment,s),L=T(s,"H2",{id:!0,tabindex:!0});var Ts=v(L);o(Y.$$.fragment,Ts),on=y(Ts," Sample - Heartbeat Animation"),Ts.forEach(t),Ps=E(s),_s=T(s,"P",{});var As=v(_s);rn=y(As,"..."),As.forEach(t),this.h()},h(){F(H,"id","imports"),F(H,"tabindex","-1"),F(I,"id","definitions"),F(I,"tabindex","-1"),F(P,"id","usage"),F(P,"tabindex","-1"),F(k,"id","context-state"),F(k,"tabindex","-1"),F(B,"id","context-state-has"),F(B,"tabindex","-1"),F(N,"id","context-state-get"),F(N,"tabindex","-1"),F(L,"id","sample-heartbeat-animation"),F(L,"tabindex","-1")},m(s,a){i(s,n,a),u(n,l),i(s,w,a),i(s,g,a),r(Z,g,null),u(g,Ls),r(R,g,null),u(g,Rs),r(U,g,null),u(g,Us),r(j,g,null),u(g,js),r(M,g,null),u(g,Ms),i(s,xs,a),i(s,H,a),r(V,H,null),u(H,Vs),i(s,Ss,a),r(ss,s,a),i(s,I,a),r(z,I,null),u(I,zs),i(s,qs,a),r(ns,s,a),i(s,P,a),r(G,P,null),u(P,Gs),i(s,ks,a),r(es,s,a),i(s,k,a),r(J,k,null),u(k,Js),r(as,k,null),i(s,Bs,a),i(s,S,a),r(ls,S,null),u(S,Ks),r(ts,S,null),u(S,Qs),r(K,S,null),u(S,Ws),i(s,Ns,a),r(ps,s,a),i(s,B,a),r(Q,B,null),u(B,Ys),r(os,B,null),i(s,Os,a),i(s,q,a),r(rs,q,null),u(q,Zs),r(Ds,q,null),u(q,sn),r(cs,q,null),u(q,nn),i(s,Xs,a),r($s,s,a),i(s,N,a),r(W,N,null),u(N,en),r(is,N,null),i(s,Hs,a),i(s,h,a),r(fs,h,null),u(h,an),r(ys,h,null),u(h,ln),r(ms,h,null),u(h,tn),r(us,h,null),u(h,pn),i(s,Is,a),r(Cs,s,a),i(s,L,a),r(Y,L,null),u(L,on),i(s,Ps,a),i(s,_s,a),u(_s,rn),ws=!0},p(s,[a]){(!ws||a&1)&&e!==(e=s[0].title+"")&&yn(l,e);const _={};a&2&&(_.$$scope={dirty:a,ctx:s}),R.$set(_);const Fs={};a&2&&(Fs.$$scope={dirty:a,ctx:s}),U.$set(Fs);const hs={};a&2&&(hs.$$scope={dirty:a,ctx:s}),j.$set(hs);const bs={};a&2&&(bs.$$scope={dirty:a,ctx:s}),M.$set(bs);const gs={};a&2&&(gs.$$scope={dirty:a,ctx:s}),V.$set(gs);const O={};a&2&&(O.$$scope={dirty:a,ctx:s}),z.$set(O);const ds={};a&2&&(ds.$$scope={dirty:a,ctx:s}),G.$set(ds);const X={};a&2&&(X.$$scope={dirty:a,ctx:s}),J.$set(X);const Es={};a&2&&(Es.$$scope={dirty:a,ctx:s}),K.$set(Es);const A={};a&2&&(A.$$scope={dirty:a,ctx:s}),Q.$set(A);const Ts={};a&2&&(Ts.$$scope={dirty:a,ctx:s}),W.$set(Ts);const As={};a&2&&(As.$$scope={dirty:a,ctx:s}),Y.$set(As)},i(s){ws||(D(Z.$$.fragment,s),D(R.$$.fragment,s),D(U.$$.fragment,s),D(j.$$.fragment,s),D(M.$$.fragment,s),D(V.$$.fragment,s),D(ss.$$.fragment,s),D(z.$$.fragment,s),D(ns.$$.fragment,s),D(G.$$.fragment,s),D(es.$$.fragment,s),D(J.$$.fragment,s),D(as.$$.fragment,s),D(ls.$$.fragment,s),D(ts.$$.fragment,s),D(K.$$.fragment,s),D(ps.$$.fragment,s),D(Q.$$.fragment,s),D(os.$$.fragment,s),D(rs.$$.fragment,s),D(Ds.$$.fragment,s),D(cs.$$.fragment,s),D($s.$$.fragment,s),D(W.$$.fragment,s),D(is.$$.fragment,s),D(fs.$$.fragment,s),D(ys.$$.fragment,s),D(ms.$$.fragment,s),D(us.$$.fragment,s),D(Cs.$$.fragment,s),D(Y.$$.fragment,s),ws=!0)},o(s){c(Z.$$.fragment,s),c(R.$$.fragment,s),c(U.$$.fragment,s),c(j.$$.fragment,s),c(M.$$.fragment,s),c(V.$$.fragment,s),c(ss.$$.fragment,s),c(z.$$.fragment,s),c(ns.$$.fragment,s),c(G.$$.fragment,s),c(es.$$.fragment,s),c(J.$$.fragment,s),c(as.$$.fragment,s),c(ls.$$.fragment,s),c(ts.$$.fragment,s),c(K.$$.fragment,s),c(ps.$$.fragment,s),c(Q.$$.fragment,s),c(os.$$.fragment,s),c(rs.$$.fragment,s),c(Ds.$$.fragment,s),c(cs.$$.fragment,s),c($s.$$.fragment,s),c(W.$$.fragment,s),c(is.$$.fragment,s),c(fs.$$.fragment,s),c(ys.$$.fragment,s),c(ms.$$.fragment,s),c(us.$$.fragment,s),c(Cs.$$.fragment,s),c(Y.$$.fragment,s),ws=!1},d(s){s&&t(n),s&&t(w),s&&t(g),$(Z),$(R),$(U),$(j),$(M),s&&t(xs),s&&t(H),$(V),s&&t(Ss),$(ss,s),s&&t(I),$(z),s&&t(qs),$(ns,s),s&&t(P),$(G),s&&t(ks),$(es,s),s&&t(k),$(J),$(as),s&&t(Bs),s&&t(S),$(ls),$(ts),$(K),s&&t(Ns),$(ps,s),s&&t(B),$(Q),$(os),s&&t(Os),s&&t(q),$(rs),$(Ds),$(cs),s&&t(Xs),$($s,s),s&&t(N),$(W),$(is),s&&t(Hs),s&&t(h),$(fs),$(ys),$(ms),$(us),s&&t(Is),$(Cs,s),s&&t(L),$(Y),s&&t(Ps),s&&t(_s)}}}function Sn(m,n,e){let l;return mn(m,un,w=>e(0,l=w)),[l]}class In extends cn{constructor(n){super(),$n(this,n,Sn,xn,fn,{})}}export{In as default};