import{_ as e,c as s,o as n,a}from"./app.4d2f09ba.js";const h=JSON.parse('{"title":"Internal Modules","description":"","frontmatter":{},"headers":[{"level":2,"title":"Creating a new internal module","slug":"creating-a-new-internal-module","link":"#creating-a-new-internal-module","children":[{"level":3,"title":"Step 1: The project & Module Class","slug":"step-1-the-project-module-class","link":"#step-1-the-project-module-class","children":[]},{"level":3,"title":"Step 2: Module Meta Information","slug":"step-2-module-meta-information","link":"#step-2-module-meta-information","children":[]},{"level":3,"title":"Step 3: Generating the meta info for the assembly","slug":"step-3-generating-the-meta-info-for-the-assembly","link":"#step-3-generating-the-meta-info-for-the-assembly","children":[]}]},{"level":2,"title":"Adding internal modules to the application","slug":"adding-internal-modules-to-the-application","link":"#adding-internal-modules-to-the-application","children":[]},{"level":2,"title":"Begin developing","slug":"begin-developing","link":"#begin-developing","children":[]}],"relativePath":"development/core/internal-modules.md"}'),l={name:"development/core/internal-modules.md"},o=a(`<h1 id="internal-modules" tabindex="-1">Internal Modules <a class="header-anchor" href="#internal-modules" aria-hidden="true">#</a></h1><p>The development of internal modules are mostly the same with a few differences. To learn more about developing plugins, head over to the <a href="/development/modules/">Module Documentation</a>.</p><h2 id="creating-a-new-internal-module" tabindex="-1">Creating a new internal module <a class="header-anchor" href="#creating-a-new-internal-module" aria-hidden="true">#</a></h2><p>All internal modules should be created in <code>src/Modules</code> in their own projects.</p><h3 id="step-1-the-project-module-class" tabindex="-1">Step 1: The project &amp; Module Class <a class="header-anchor" href="#step-1-the-project-module-class" aria-hidden="true">#</a></h3><p>Begin by creating a new project on the <code>EvoSC</code> solution. Select <strong>Class Library</strong> and set the project name to the name of your new module.</p><p>Next, make sure the <strong>Project Directory</strong> is under <code>src/Modules</code> and create the project. Before you can begin creating the module class, you need to make sure that the <strong>Root namespace</strong> is set to <code>EvoSC.Modules.Official.&lt;Project Name&gt;</code>, and the target framework should be <code>net6.0</code>.</p><p>You can now create the main module class. By convention, postfix your module&#39;s name with <code>Module</code>. So, call the module class <code>&lt;Module Name&gt;Module</code>. For example, if your module is called <code>Player</code>, the module class should be called <code>PlayerModule</code>. This helps with readability when adding the module to the application later.</p><p>Create the module class the same as explained in the <a href="/development/modules/">Module Documentation</a>. But make sure you include <code>IsInternal = True</code> in the module attribute, for example:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Module</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IsInternal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PlayerModule</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EvoScModule</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The project directory structure should now look like this:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ Modules/</span></span>
<span class="line"><span style="color:#A6ACCD;">   └─ Player/</span></span>
<span class="line"><span style="color:#A6ACCD;">      ├─ Player.csproj</span></span>
<span class="line"><span style="color:#A6ACCD;">      └─ PlayerModule.cs &lt;-- The module class</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="step-2-module-meta-information" tabindex="-1">Step 2: Module Meta Information <a class="header-anchor" href="#step-2-module-meta-information" aria-hidden="true">#</a></h3><p>Modules require some information about them such as version and descriptions. A module&#39;s meta info also defines any dependencies the module requires.</p><p>The meta info is defined within a TOML file called <code>info.toml</code> and is placed in the project&#39;s root. Here is an example of this file:</p><div class="language-toml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">info</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;"># A unique name for this module, this is used as a identifier</span></span>
<span class="line"><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PlayerModule</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;"># The title of the module</span></span>
<span class="line"><span style="color:#A6ACCD;">title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Player Module</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;"># A short description of what the module is and does</span></span>
<span class="line"><span style="color:#A6ACCD;">summary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A module for handling and managing players.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;"># The current version of this module, using SEMVER</span></span>
<span class="line"><span style="color:#A6ACCD;">version </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;"># The name of the author that created this module</span></span>
<span class="line"><span style="color:#A6ACCD;">author </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Evo</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>To keep consistency across modules, the version must follow the <a href="https://semver.org/" target="_blank" rel="noreferrer">Semantic Versioning</a> format.</p><p>You can also specify any dependencies that is needed for this module by adding entries under the dependencies section. This section is optional and you don&#39;t need to include it at all:</p><div class="language-toml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">dependencies</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;"># Unique Name = &quot;Version&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">MyDependency1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">MyDependency2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2.2.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;"># ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Each entry under <code>[dependencies]</code> must be a key with the unique name of the module set to the version that is required.</p><p>The project directory structure should now look like this:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki has-diff"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ Modules/</span></span>
<span class="line"><span style="color:#A6ACCD;">   └─ Player/</span></span>
<span class="line"><span style="color:#A6ACCD;">      ├─ Player.csproj</span></span>
<span class="line"><span style="color:#A6ACCD;">      ├─ PlayerModule.cs</span></span>
<span class="line diff add"><span style="color:#A6ACCD;">      └─ info.toml </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="step-3-generating-the-meta-info-for-the-assembly" tabindex="-1">Step 3: Generating the meta info for the assembly <a class="header-anchor" href="#step-3-generating-the-meta-info-for-the-assembly" aria-hidden="true">#</a></h3><p>For internal modules, just adding this <code>info.toml</code> file is not enough. You don&#39;t need to copy this file to the output directory. But since the application does not have access to the <code>info.toml</code> file for internal modules, we need to define this information in another way.</p><p>The <code>info.toml</code> is created in order to keep a consistent development flow between internal and external modules. But internal modules requires this information to be defined on the assembly itself. Now, you can go ahead and do this all manually, but this seems like duplicate work.</p><p>Instead, we created a source generator that internal modules can use, which generates this information automatically at compilation.</p><p>Open the project file (the <code>.csproj</code> file) and paste the following code under the <code>&lt;Project&gt;</code> tag:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ItemGroup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ProjectReference</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">..\\..\\EvoSC.Modules.SourceGeneration\\EvoSC.Modules.SourceGeneration.csproj</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">OutputItemType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Analyzer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ReferenceOutputAssembly</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ItemGroup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>And thats it! You now have a complete project set up to develop an internal module.</p><h2 id="adding-internal-modules-to-the-application" tabindex="-1">Adding internal modules to the application <a class="header-anchor" href="#adding-internal-modules-to-the-application" aria-hidden="true">#</a></h2><p>Adding internal modules require you to reference the module and add it to the internal module list in the <code>EvoSC</code> project.</p><p>Open the <code>InternalModules.cs</code> file and add the type of your module class to the <code>Modules</code> list. So for example, if your plugin was called <code>PlayerModule</code>, the <code>Modules</code> list should look like this:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Type</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Modules</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">typeof</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">PlayerModule</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ... other modules</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="begin-developing" tabindex="-1">Begin developing <a class="header-anchor" href="#begin-developing" aria-hidden="true">#</a></h2><p>If you have done all the steps explained on this page correctly, you should now be able to begin developing your internal module!</p><p>Again, for more information on developing modules, head over to the <a href="/development/modules/">Module Documentation</a>.</p>`,36),p=[o];function t(r,c,i,d,u,m){return n(),s("div",null,p)}const D=e(l,[["render",t]]);export{h as __pageData,D as default};
