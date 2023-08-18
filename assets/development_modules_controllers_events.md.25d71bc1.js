import{_ as s,o as n,c as a,S as e}from"./chunks/framework.f15d8f8c.js";const A=JSON.parse('{"title":"Events","description":"","frontmatter":{},"headers":[],"relativePath":"development/modules/controllers/events.md","filePath":"development/modules/controllers/events.md"}'),l={name:"development/modules/controllers/events.md"},o=e(`<h1 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h1><p>EvoSC# provides an event system that can be used to raise events which can be subscribed to anywhere in the code.</p><h2 id="event-subscriptions" tabindex="-1">Event Subscriptions <a class="header-anchor" href="#event-subscriptions" aria-label="Permalink to &quot;Event Subscriptions&quot;">​</a></h2><p>There are currently two ways to subscribe to events in EvoSC#. Either through the <code>IEventManager</code> service or using the subscription pattern in Controllers.</p><h3 id="subscribing-with-the-ieventmanager-service" tabindex="-1">Subscribing with the <code>IEventManager</code> service <a class="header-anchor" href="#subscribing-with-the-ieventmanager-service" aria-label="Permalink to &quot;Subscribing with the \`IEventManager\` service&quot;">​</a></h3><p>Injecting the <code>IEventManager</code> service exposes the <code>Subscribe</code> method. It has several overloads depending on the situation you may use it in. But the most used overload is the builder method, which we will present here.</p><p>Let&#39;s take an example. Let&#39;s say you want to react to players connecting to the server:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">_eventManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Subscribe</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">s</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> s</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithEvent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">GbxRemoteEvent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PlayerConnect</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// name of the event to subscribe to</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithInstance</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// the instance of the class which the handler is part of</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithInstanceClass</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MyHandlerClass</span><span style="color:#89DDFF;">&gt;()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// the instance of the class which the handler is part of</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithHandlerMethod</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PlayerConnectGbxEventArgs</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">OnPlayerConnectAsync</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// the handler method itself</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WithPriority</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">EventPriority</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">High</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// priority of which to call this subscription handler</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>In this case we are subscribing to the PlayerConnect event, so we can implement the handler method like this:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OnPlayerConnectAsync</span><span style="color:#89DDFF;">(object</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PlayerConnectGbxEventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">e</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">player</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> _playerManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetOnlinePlayerAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">PlayerUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ConvertLoginToAccountId</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Login</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> _remote</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InfoMessageAsync</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">$&quot;</span><span style="color:#C3E88D;">Player </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NickName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> joined the server!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>When developing modules, you will most likely not need to use this way of subscribing to events, because it is actually much easier to do within a module using controllers.</p><h3 id="subscribing-with-controllers" tabindex="-1">Subscribing with Controllers <a class="header-anchor" href="#subscribing-with-controllers" aria-label="Permalink to &quot;Subscribing with Controllers&quot;">​</a></h3><p>Let&#39;s subscribe to the same event above with the same parameters, but using the Controller way.</p><p>We can start by creating a controller with the <code>EventControllerContext</code> context:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Controller</span><span style="color:#89DDFF;">]</span></span>
<span class="line has-focus"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExampleEventController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EvoScController</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">EventControllerContext</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Now let&#39;s subscribe to the PlayerConnect event with a handler method:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Controller</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ExampleEventController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EvoScController</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">EventControllerContext</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Subscribe</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">GbxRemoteEvent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PlayerConnect</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> EventPriority</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">High</span><span style="color:#89DDFF;">)]</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Task</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PlayerConnectAsync</span><span style="color:#89DDFF;">(object</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PlayerConnectGbxEventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">e</span><span style="color:#89DDFF;">)</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">player</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> _playerManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetOnlinePlayerAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">PlayerUtils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ConvertLoginToAccountId</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Login</span><span style="color:#89DDFF;">));</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> _remote</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">InfoMessageAsync</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">$&quot;</span><span style="color:#C3E88D;">Player </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NickName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> joined the server!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>And that&#39;s it! No need to inject the event manager service and much easier than using the <code>Subscribe</code> method directly.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We recommend using Controllers to subscribe to events as much as possible, as it is not only easier, but also more organized, readable and maintainable.</p></div><h3 id="event-priority" tabindex="-1">Event Priority <a class="header-anchor" href="#event-priority" aria-label="Permalink to &quot;Event Priority&quot;">​</a></h3><p>From the examples, you have gotten a taste of how priorities work. There are three levels of priority, low, medium and high. If priority is not set, the default priority is medium.</p><p>Subscriptions with higher priority will be called first.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>By design, you cannot define your own priority values as this typically causes a mess when modules are fighting for priority.</p><p>Be wary and rational when using priorities. Most of the time default is good enough.</p></div><h3 id="async-subscriptions" tabindex="-1">Async Subscriptions <a class="header-anchor" href="#async-subscriptions" aria-label="Permalink to &quot;Async Subscriptions&quot;">​</a></h3><p>By default, subscriptions are called in-order of their registration and priority. However, sometimes your event may take alot of computation time, which may block other events from firing.</p><p>You can then define your subscription as async. This prevents other events having to wait for your event to finish processing.</p><h2 id="raising-events" tabindex="-1">Raising Events <a class="header-anchor" href="#raising-events" aria-label="Permalink to &quot;Raising Events&quot;">​</a></h2><p>To create and fire a new event, which is called &quot;raising an event&quot; in EvoSC#, we can use the <code>RaiseAsync</code> method from the <code>IEventManager</code> service.</p><p>It takes the name and arguments of the event to raise. You can also specify the sender if that is required.</p><p>For example:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> eventManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RaiseAsync</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">GbxRemoteEvent</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PlayerConnect</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PlayerConnectGbxEventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#89DDFF;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,31),p=[o];function t(r,c,i,y,F,C){return n(),a("div",null,p)}const h=s(l,[["render",t]]);export{A as __pageData,h as default};
