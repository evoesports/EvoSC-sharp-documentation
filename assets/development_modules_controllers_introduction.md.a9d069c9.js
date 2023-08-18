import{_ as t,o as e,c as o,S as n}from"./chunks/framework.f15d8f8c.js";const y=JSON.parse('{"title":"Introduction to Controllers","description":"","frontmatter":{},"headers":[],"relativePath":"development/modules/controllers/introduction.md","filePath":"development/modules/controllers/introduction.md"}'),a={name:"development/modules/controllers/introduction.md"},s=n(`<h1 id="introduction-to-controllers" tabindex="-1">Introduction to Controllers <a class="header-anchor" href="#introduction-to-controllers" aria-label="Permalink to &quot;Introduction to Controllers&quot;">​</a></h1><p>A controller is a class in which you can subscribe to various events and actions occuring in the controller and from the game server. The controllers respond to things that occur and <em>controls</em> what will happen.</p><p>For example, if a player triggered a chat command, this is sent to a handler method inside a controller. Maybe you want to do something when a player connects to the server? You can then subscribe to this event on an event handler in the controller.</p><p>The EvoSC module framework provides convenient ways to subscribe to these various events with controllers. We will look into this in the next pages of this documentation.</p><p>But for now, let&#39;s first look at how to create a controller!</p><h2 id="creating-a-controller" tabindex="-1">Creating A Controller <a class="header-anchor" href="#creating-a-controller" aria-label="Permalink to &quot;Creating A Controller&quot;">​</a></h2><p>Controllers are simply a class that inherits <code>EvoScController</code>. You can tell the application to register the controller for you by annotating the class with the <code>[Controller]</code> attribute.</p><p>For example, let&#39;s say you have your module project set up. You have created the module class and is ready to implement some features for your module. We&#39;ll start by defining the controller class:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Controller</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EvoScController</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IControllerContext</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>This is the most basic controller definition and it does nothing as you didn&#39;t specify any action to respond to. So this brings us to the next point.</p><h2 id="controller-actions" tabindex="-1">Controller Actions <a class="header-anchor" href="#controller-actions" aria-label="Permalink to &quot;Controller Actions&quot;">​</a></h2><p>An <em>action</em> refers to any type of event in the application. Whether it is from the event system, a chat command or a manialink action, it can all be handled through a controller.</p><p>Whenever an action occurs that a controller is subscribed to, the controller is instantiated for that particular action. Each action has a <em>context</em> attached to it.</p><p>The context contains information related to the action that occured. So for example, if a player triggered a chat command, the context holds information like what player triggered it, information about the command itself etc.</p><p>The context is highly dependent on the type of action that occured. This is important because you typically want to define your controller for one type of action only.</p><p>You will most likely never need to subscribe to multiple types of actions within the same controller. Currently, there are two types of actions:</p><table><thead><tr><th>Action</th><th>Description</th><th>Context</th></tr></thead><tbody><tr><td>Event</td><td>Raised by the event system and can be any generic event.</td><td><code>IControllerContext</code></td></tr><tr><td>Chat Command</td><td>The command system triggers these actions and occurs when a player calls a valid command.</td><td><code>CommandInteractionContext</code></td></tr></tbody></table><h2 id="controller-action-context" tabindex="-1">Controller Action Context <a class="header-anchor" href="#controller-action-context" aria-label="Permalink to &quot;Controller Action Context&quot;">​</a></h2><p>When you inherit the <code>EvoScController</code> base type, you must specify the type of context for your actions.</p><p>For example:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// IControllerContext context type, can be used for all actions</span></span>
<span class="line"><span style="color:#A6ACCD;">EvoScController</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">IControllerContext</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// CommandInteractionContext context type, can be used for chat commands</span></span>
<span class="line"><span style="color:#A6ACCD;">EvoScController</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">CommandInteractionContext</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>All contextes will inherit the base type <code>IControllerContext</code> and you can use this type for any action type.</p><p>But the problem with <code>IControllerContext</code> is that it contains a very limited amount of information about the action that occured. Because events do not really have any context assigned to them, they are simply events with some arguments, you can use <code>IControllerContext</code> when subscribing to pure events.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The most important thing to be aware of when specifying the context type is, if you have an action that is not supported by the context, the application will throw an error as it fails to cast the context to your specified context type.</p><p><em><strong>Make sure you use the correct context type for the actions in your controller!</strong></em></p></div><h2 id="subscribing-to-actions" tabindex="-1">Subscribing to Actions <a class="header-anchor" href="#subscribing-to-actions" aria-label="Permalink to &quot;Subscribing to Actions&quot;">​</a></h2><p>How this is done depends on the type of action and each requires their own page to explain it. We recommend you begin looking into how to subscribe to <a href="/development/modules/controllers/events.html">events</a>.</p>`,27),r=[s];function l(i,c,p,d,h,u){return e(),o("div",null,r)}const b=t(a,[["render",l]]);export{y as __pageData,b as default};
