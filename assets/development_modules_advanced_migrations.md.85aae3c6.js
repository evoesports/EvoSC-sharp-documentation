import{_ as s,o as a,c as n,S as e}from"./chunks/framework.f15d8f8c.js";const m=JSON.parse('{"title":"Migrations","description":"","frontmatter":{},"headers":[],"relativePath":"development/modules/advanced/migrations.md","filePath":"development/modules/advanced/migrations.md"}'),l={name:"development/modules/advanced/migrations.md"},o=e(`<h1 id="migrations" tabindex="-1">Migrations <a class="header-anchor" href="#migrations" aria-label="Permalink to &quot;Migrations&quot;">​</a></h1><p>Modules can add their own database migrations. To do so, we use the <a href="https://fluentmigrator.github.io/" target="_blank" rel="noreferrer">FluentMigrator</a> library.</p><p>There is nothing special or any extra thing to pay attention to other than the naming convention which we will go over. Create the migration class with the attribute which inherits the <code>Migration</code> class.</p><p>For example:</p><div class="language-csharp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Migration</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1672217440</span><span style="color:#89DDFF;">)]</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AddMyTable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Migration</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">override</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Up</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Create</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Table</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MyTable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">override</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Down</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Delete</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Table</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MyTable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>The important part here is the naming convention. For the <code>Migration</code> attribute, we want to use the UNIX Timestamp in seconds as the version. The name of the file should be YYYYMMDDHHmm_MigrationName, where YY is the 4-digit year, MM is the 2-digit month, D is the 2-digit day of the month, HH is the 2-digit hour and mm is the 2-digit minute.</p><p>The time and date for the version and file name must be set to creation time of the migration.</p>`,7),p=[o];function t(r,i,c,D,y,F){return a(),n("div",null,p)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};
