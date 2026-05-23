This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed, content has been formatted for parsing in markdown style, content has been compressed (code blocks are separated by ⋮---- delimiter).

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Content has been formatted for parsing in markdown style
- Content has been compressed - code blocks are separated by ⋮---- delimiter
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
site/
  images/
    dayna.jpg
    logo-black.png
    logo-white.png
  services/
    home-organization.html
    house-calls.html
    legacy.html
    resale.html
  _shared.html
  about.html
  contact.html
  index.html
  pricing.html
  README.md
  robots.txt
  services.html
  sitemap.xml
  style.css
```

# Files

## File: site/services/home-organization.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5"/>
  <title>Home Organization & Modern Move — The Well Lived Citizen Co</title>
  <meta name="description" content="Home organization, move-in setup, and closet systems in Los Angeles. $150/hr, 3-hour minimum. The Well Lived Citizen Co by Dayna Brown."/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://thewelllivedcitizenco.com/services/home-organization"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../style.css"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN9C986JLW"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HN9C986JLW');</script>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo"><img src="../images/logo-black.png" alt="The Well Lived Citizen Co"/></a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">Services<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="../services.html" class="dropdown-header">All Services & Pricing</a>
          <a href="home-organization.html" style="color:var(--rust);">Home Organization & Modern Move</a>
          <a href="legacy.html">Legacy Planning & Inventory Catalog</a>
          <a href="house-calls.html">House Calls</a>
          <a href="resale.html">Curated Resale & Consignment</a>
          <a href="../pricing.html" class="dropdown-footer">View Pricing →</a>
        </div></div>
      </div>
      <a href="../about.html">About</a>
      <a href="../contact.html" class="nav-cta">Get in Touch</a>
    </div>
    <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="../services.html">Services & Pricing</a>
  <a href="home-organization.html">Home Organization & Modern Move</a>
  <a href="legacy.html">Legacy Planning & Inventory Catalog</a>
  <a href="house-calls.html">House Calls</a>
  <a href="resale.html">Curated Resale & Consignment</a>
  <a href="../about.html">About</a>
  <a href="../contact.html">Get in Touch</a>
</div>
<div class="page">
  <section style="padding:80px 0 56px; border-bottom:1px solid var(--linen);">
    <div class="container" style="max-width:760px;">
      <div class="label">01 — Home Organization & Modern Move</div>
      <h1 style="font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--char); line-height:1.15; letter-spacing:-0.02em; margin-bottom:16px;">The relief of the room.</h1>
      <p style="font-size:17px; color:var(--stone); line-height:1.75; max-width:600px;">Your home, made to work for how you actually live. For the room that keeps collecting piles, the move that technically happened but never settled, the closet that no longer fits your life, or the spaces where everyday friction quietly steals time.</p>
    </div>
  </section>
  <section style="padding:64px 0;">
    <div class="container" style="max-width:760px;">
      <div style="font-size:15px; line-height:1.9; color:var(--ink);">
        <p style="margin-bottom:20px;">The issue here is the space itself. The room, layout, volume, or systems are no longer supporting the way you naturally move through your day. I come in, find the friction, and make the space work around your real habits.</p>
      </div>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:40px 0 16px;">How we can work together</h2>
      <p style="font-size:14px; color:var(--stone); margin-bottom:12px;">Projects can be:</p>
      <ul style="list-style:none; margin-bottom:24px;">
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Side-by-side guided sessions</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Hybrid decision blocks</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Full key handoff</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Solo resets while you're away</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Packing and move prep with or without you</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0;">Closet and system continuity after landing</li>
      </ul>
      <p style="font-size:14px; color:var(--stone); font-style:italic; margin-bottom:40px;">The right style is the one that creates the easiest lasting outcome.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 16px;">What's included</h2>
      <ul style="list-style:none; margin-bottom:24px;">
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Intake call, prior coordination, and any pre-planning on my end</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Layout logic</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Sourcing recommendations</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Setup and install</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Label systems</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Pre-order coordination</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Workflow tools and install basics</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Measuring tools, reusable sort bins</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0;">Cord wraps, Velcro, adapters, and utility hardware</li>
      </ul>
      <p style="font-size:13px; color:var(--stone); margin-bottom:40px;">For deeper spaces like closets, offices, storage rooms, and linen systems, product support is quoted after walkthrough based on hidden volume and actual dimensions.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 20px;">Pricing</h2>
      <table class="pricing-table">
        <tr><td>Hourly</td><td>$150/hr · 3 hr minimum</td></tr>
        <tr><td>10-hour Flex Block</td><td>$1,250</td></tr>
        <tr><td>25-hour Flex Block</td><td>$3,150</td></tr>
        <tr><td>Studio / 1BR Move Reset</td><td>$1,200/day flat rate — up to 8 hours straight</td></tr>
        <tr><td>Larger homes & multi-room projects</td><td>Quoted after call</td></tr>
      </table>
      <p style="font-size:12px; color:var(--sand); margin-top:8px; margin-bottom:40px;">Flex blocks never expire. $1,200 flat rate is reserved for studio and 1-bedroom moves only. Larger homes scope as projects.</p>
      <div style="background:var(--warm); border:1px solid var(--linen); padding:32px; margin-bottom:40px;">
        <div style="font-size:12px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--rust); margin-bottom:12px;">A Note on Labels</div>
        <p style="font-size:14px; color:var(--ink); line-height:1.8;">Labels are always included — handwritten on-site by default, and printed sets provided for larger project scopes. For efficiency, printed labels are usually handled as office work rather than billed hourly. I notate during the session, build the label set in my own app on my own time, print them, and bring them back to apply. This saves real money on hourly time that would otherwise be spent typing and cutting labels mid-session.</p>
      </div>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a href="../contact.html" class="btn btn-dark">Book your session</a>
        <a href="../services.html" style="font-size:12px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--stone); display:flex; align-items:center; text-decoration:none;">← All Services</a>
      </div>
    </div>
  </section>
</div>
<footer>
  <div class="footer-inner">
    <div><img src="../images/logo-black.png" alt="The Well Lived Citizen Co" style="height:48px; width:auto; margin-bottom:12px;"><div class="footer-brand">The Well Lived Citizen Co</div><div class="footer-loc">Los Angeles, CA</div><div class="footer-legal">The Well Lived Citizen Co., a DBA of Well Dressed Citizen LLC</div></div>
    <div class="footer-links"><a href="../services.html">Services</a><a href="../pricing.html">Pricing</a><a href="../about.html">About</a><a href="../contact.html">Get in Touch</a></div>
    <div class="footer-copy">© 2026 The Well Lived Citizen Co · Los Angeles, CA</div>
  </div>
</footer>
<a href="tel:3234331350" class="float-call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>Call or Text</a>
<script>function toggleMenu(){const m=document.getElementById('mobileMenu');m.classList.toggle('open');}document.addEventListener('click',function(e){const menu=document.getElementById('mobileMenu');const btn=document.querySelector('.nav-hamburger');if(menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){menu.classList.remove('open');}});</script>
</body>
</html>
````

## File: site/services/house-calls.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5"/>
  <title>House Calls — The Well Lived Citizen Co</title>
  <meta name="description" content="House Calls — practical home support for the things life leaves unfinished. Los Angeles. $175/hr, 2-hour minimum. The Well Lived Citizen Co by Dayna Brown."/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://thewelllivedcitizenco.com/services/house-calls"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../style.css"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN9C986JLW"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HN9C986JLW');</script>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo"><img src="../images/logo-black.png" alt="The Well Lived Citizen Co"/></a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">Services<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="../services.html" class="dropdown-header">All Services & Pricing</a>
          <a href="home-organization.html">Home Organization & Modern Move</a>
          <a href="legacy.html">Legacy Planning & Inventory Catalog</a>
          <a href="house-calls.html" style="color:var(--rust);">House Calls</a>
          <a href="resale.html">Curated Resale & Consignment</a>
          <a href="../pricing.html" class="dropdown-footer">View Pricing →</a>
        </div></div>
      </div>
      <a href="../about.html">About</a>
      <a href="../contact.html" class="nav-cta">Get in Touch</a>
    </div>
    <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="../services.html">Services & Pricing</a>
  <a href="home-organization.html">Home Organization & Modern Move</a>
  <a href="legacy.html">Legacy Planning & Inventory Catalog</a>
  <a href="house-calls.html">House Calls</a>
  <a href="resale.html">Curated Resale & Consignment</a>
  <a href="../about.html">About</a>
  <a href="../contact.html">Get in Touch</a>
</div>
<div class="page">
  <section style="padding:80px 0 56px; border-bottom:1px solid var(--linen);">
    <div class="container" style="max-width:760px;">
      <div class="label">03 — House Calls</div>
      <h1 style="font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--char); line-height:1.15; letter-spacing:-0.02em; margin-bottom:16px;">For the things life leaves unfinished.</h1>
      <p style="font-size:17px; color:var(--stone); line-height:1.75; max-width:600px;">For when the issue isn't the room — it's the person you used to have to call.</p>
    </div>
  </section>
  <section style="padding:64px 0;">
    <div class="container" style="max-width:760px;">
      <div style="font-size:15px; line-height:1.9; color:var(--ink); margin-bottom:40px;">
        <p style="margin-bottom:16px; font-style:italic; font-size:16px;">Possibly my favorite service, and the spirit of this company.</p>
        <p style="margin-bottom:16px;">The world changed, the process got heavier, and no one can be expected to keep up with every new layer alone. House Calls fills the missing person role in real life: the partner who handled it, the nearby parent, the neighbor, the adult child in another city, the friend who always knew how to make the day still work.</p>
        <p style="margin-bottom:16px;">As we get more efficient, this gap gets harder to navigate. Solving it is something I may be able to do for everyone eventually — but right now, the need is there for each person I can reach.</p>
        <p>Once I know how your home works, it becomes easy for me to help keep it working — home check-ins, tech setup, hands-on home improvements, donation drop-offs, and the practical loose ends that make everyday life easier when someone trusted is paying attention.</p>
      </div>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 16px;">Who House Calls is for</h2>
      <p style="font-size:14px; color:var(--stone); line-height:1.75; margin-bottom:16px;">For the people who suddenly find themselves handling the parts of home life someone else used to quietly carry.</p>
      <p style="font-size:14px; color:var(--ink); line-height:1.8; margin-bottom:16px;">The bill that used to auto-resolve because your partner handled it. The appliance install that feels different when you're home alone. The digital login that somehow became intimidating overnight. The package, pickup, repair, donation, or appointment that shouldn't be a big deal but suddenly feels heavier than it should.</p>
      <p style="font-size:14px; color:var(--char); font-weight:600; margin-bottom:16px;">House Calls exists for the private, practical things people don't always want to say out loud.</p>
      <p style="font-size:14px; color:var(--ink); line-height:1.8; margin-bottom:24px;">The goal is not to make life look perfect. The goal is to make everyday life feel safe, manageable, and less isolating when the normal support system changed.</p>
      <ul style="list-style:none; margin-bottom:40px;">
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Newly divorced</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Recently widowed</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">First time living alone</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Partner travels constantly</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Adult children supporting from another city</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Practical aftermath no one stays to help with</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0;">Moments where the original plan stopped working and you still need the day to happen</li>
      </ul>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 16px;">Ways to use House Calls</h2>
      <ul style="list-style:none; margin-bottom:40px;">
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">One-time practical resets</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Weekly support</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Monthly continuity</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Seasonal resets</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Remote family check-ins</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Post-project upkeep</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Vendor days</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Donation and return routing</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Home re-entry after travel</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0;">Guest and event resets</li>
      </ul>
      <div style="background:var(--warm); border:1px solid var(--linen); padding:32px; margin:40px 0;">
        <div style="font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--rust); margin-bottom:16px;">Real-Life Example</div>
        <p style="font-size:14px; color:var(--ink); line-height:1.8; margin-bottom:16px;">The 8-month pregnant woman with a beautiful baby shower, hundreds of gifts, duplicate baby gear, no time, and no energy to turn a mountain of love into something functional.</p>
        <p style="font-size:14px; color:var(--stone); line-height:1.8;">The point is simple: everyone helps celebrate the moment — I help make it livable afterward. That's House Calls.</p>
      </div>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:40px 0 16px;">Vendor & project oversight</h2>
      <p style="font-size:14px; color:var(--stone); margin-bottom:16px;">When needed, House Calls also covers:</p>
      <ul style="list-style:none; margin-bottom:40px;">
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Movers, haulers, cleaners, installers, contractors</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Storage teams and donation pickups</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Resale buyer coordination</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0;">Building and concierge protocol, service appointment access</li>
      </ul>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 16px;">Service area</h2>
      <p style="font-size:14px; color:var(--ink); line-height:1.8; margin-bottom:40px;">LA base but not radius-limited. Travel by project logic, with route-based efficiency and stops built into the flow. Quick asks can often be absorbed into an existing route. Urgent timing and transition-sensitive requests are prioritized whenever possible.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 20px;">Pricing</h2>
      <table class="pricing-table">
        <tr><td>Hourly</td><td>$175/hr · 2 hr minimum</td></tr>
        <tr><td>4-Hour Practical Reset</td><td>Available</td></tr>
        <tr><td>Continuity Retainer</td><td>$500/mo</td></tr>
      </table>
      <p style="font-size:12px; color:var(--sand); margin-top:8px; margin-bottom:40px;">No membership. No subscription. Ease comes from relationship, not a forced plan.</p>
      <p style="font-size:14px; color:var(--stone); font-style:italic; margin-bottom:32px;">Sometimes there isn't a perfect way around the problem. There's just the person who knows how to make the day work anyway. That's where House Calls is most useful.</p>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a href="../contact.html" class="btn btn-dark">Book me</a>
        <a href="../services.html" style="font-size:12px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--stone); display:flex; align-items:center; text-decoration:none;">← All Services</a>
      </div>
    </div>
  </section>
</div>
<footer>
  <div class="footer-inner">
    <div><img src="../images/logo-black.png" alt="The Well Lived Citizen Co" style="height:48px; width:auto; margin-bottom:12px;"><div class="footer-brand">The Well Lived Citizen Co</div><div class="footer-loc">Los Angeles, CA</div><div class="footer-legal">The Well Lived Citizen Co., a DBA of Well Dressed Citizen LLC</div></div>
    <div class="footer-links"><a href="../services.html">Services</a><a href="../pricing.html">Pricing</a><a href="../about.html">About</a><a href="../contact.html">Get in Touch</a></div>
    <div class="footer-copy">© 2026 The Well Lived Citizen Co · Los Angeles, CA</div>
  </div>
</footer>
<a href="tel:3234331350" class="float-call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>Call or Text</a>
<script>function toggleMenu(){const m=document.getElementById('mobileMenu');m.classList.toggle('open');}document.addEventListener('click',function(e){const menu=document.getElementById('mobileMenu');const btn=document.querySelector('.nav-hamburger');if(menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){menu.classList.remove('open');}});</script>
</body>
</html>
````

## File: site/services/legacy.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5"/>
  <title>Legacy Planning & Inventory Catalog — The Well Lived Citizen Co</title>
  <meta name="description" content="Legacy planning and home inventory catalog in Los Angeles. Not estate planning — the actual pieces of a life. The Well Lived Citizen Co by Dayna Brown."/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://thewelllivedcitizenco.com/services/legacy"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../style.css"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN9C986JLW"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HN9C986JLW');</script>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo"><img src="../images/logo-black.png" alt="The Well Lived Citizen Co"/></a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">Services<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="../services.html" class="dropdown-header">All Services & Pricing</a>
          <a href="home-organization.html">Home Organization & Modern Move</a>
          <a href="legacy.html" style="color:var(--rust);">Legacy Planning & Inventory Catalog</a>
          <a href="house-calls.html">House Calls</a>
          <a href="resale.html">Curated Resale & Consignment</a>
          <a href="../pricing.html" class="dropdown-footer">View Pricing →</a>
        </div></div>
      </div>
      <a href="../about.html">About</a>
      <a href="../contact.html" class="nav-cta">Get in Touch</a>
    </div>
    <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="../services.html">Services & Pricing</a>
  <a href="home-organization.html">Home Organization & Modern Move</a>
  <a href="legacy.html">Legacy Planning & Inventory Catalog</a>
  <a href="house-calls.html">House Calls</a>
  <a href="resale.html">Curated Resale & Consignment</a>
  <a href="../about.html">About</a>
  <a href="../contact.html">Get in Touch</a>
</div>
<div class="page">
  <section style="padding:80px 0 56px; border-bottom:1px solid var(--linen);">
    <div class="container" style="max-width:760px;">
      <div class="label">02 — Legacy Planning & Inventory Catalog</div>
      <h1 style="font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--char); line-height:1.15; letter-spacing:-0.02em; margin-bottom:16px;">Clarity without fear.</h1>
      <p style="font-size:17px; color:var(--stone); line-height:1.75; max-width:600px;">The operational side of a home, made visible again.</p>
    </div>
  </section>
  <section style="padding:64px 0;">
    <div class="container" style="max-width:760px;">
      <div style="font-size:15px; line-height:1.9; color:var(--ink); margin-bottom:32px;">
        <p style="margin-bottom:16px;">This is for the part of life most people don't realize has been quietly building for years — the things inside a home that became part of how life worked, long before anyone stopped to look at them.</p>
        <p style="margin-bottom:8px; font-weight:600;">It is not estate planning.</p>
        <p style="margin-bottom:8px; font-weight:600;">It is not asset planning.</p>
        <p style="margin-bottom:8px; font-weight:600;">It is planning the actual pieces of a life.</p>
        <p>Not the will, not the paperwork, not the part a lawyer handles. The part that lives inside the walls.</p>
      </div>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:40px 0 16px;">Who this is for</h2>
      <p style="font-size:14px; color:var(--stone); margin-bottom:16px; line-height:1.75;">The operational side of a home shows up for almost everyone, eventually. Sometimes it's a life change. Sometimes it's a move. Sometimes it's a quiet morning where the drawers, closets, and storage spaces stop matching the person living there.</p>
      <ul style="list-style:none; margin-bottom:24px;">
        <li style="font-size:14px; color:var(--ink); padding:10px 0; border-bottom:1px solid var(--linen);">The divorced mom who moved into a condo and suddenly had to see, for the first time, how much had actually been accumulated over a marriage — and had to agree to how it all gets split</li>
        <li style="font-size:14px; color:var(--ink); padding:10px 0; border-bottom:1px solid var(--linen);">The person who lived in the same apartment for ten years and had no idea how much had quietly gathered in the back of every closet</li>
        <li style="font-size:14px; color:var(--ink); padding:10px 0; border-bottom:1px solid var(--linen);">The career change that revealed a hundred film industry cords, gear, and references in the garage — from a life that isn't the current one anymore</li>
        <li style="font-size:14px; color:var(--ink); padding:10px 0; border-bottom:1px solid var(--linen);">The household where someone is ready to take control of their own story before it falls into someone else's hands</li>
        <li style="font-size:14px; color:var(--ink); padding:10px 0; border-bottom:1px solid var(--linen);">The family carrying years of meaningful, valuable, or hard-to-sort volume that deserves clarity without pressure</li>
        <li style="font-size:14px; color:var(--ink); padding:10px 0;">The person who wants to decide what stays, what moves on, and what gets remembered — while they are the one making the decisions</li>
      </ul>
      <div style="background:var(--warm); border-left:3px solid var(--rust); padding:24px 28px; margin:40px 0;">
        <p style="font-size:14px; color:var(--ink); line-height:1.9; margin-bottom:16px;">It's a holiday dinner, looking at china that hasn't been used in years. You wonder if it ever will, knowing three plates are missing, broken in memorable moments over lifetimes. What happens to a set of china passed down two generations, incomplete but once made a new couple feel whole? It can't be worthless, but can't be sold incomplete. Your kids live in small apartments and said, "That's sweet, but we can't take it." So, what happens to something you thought would be with your family forever?</p>
        <p style="font-size:14px; color:var(--ink); line-height:1.9;">I help. I look at everything in your home — practical, sentimental, and holding memories — and I listen to them, for as long or as little as you want to tell their stories. We'll find a way to ensure the things you felt were special — incomplete and all — make it to hands that collect, treasure, and find value in them, sharing in the story a little longer.</p>
      </div>
      <p style="font-size:16px; font-weight:700; color:var(--char); margin:32px 0; font-style:italic;">This service is the person who can see what is actually there.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:40px 0 16px;">What this work actually is</h2>
      <p style="font-size:14px; color:var(--stone); margin-bottom:16px;">The operational side of a home is the layer that quietly adds up over time:</p>
      <ul style="list-style:none; margin-bottom:24px;">
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">The drawers</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">The backup bedding</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">The linen closets stacked with care</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">The vintage pieces with story</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">The everyday things with future value</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">The candles tucked away because the house was always tidy enough</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">The designer pieces in sizes the family doesn't share</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0;">The objects that deserve clarity before family stress builds</li>
      </ul>
      <p style="font-size:14px; color:var(--ink); line-height:1.8; margin-bottom:40px;">Sometimes the people who love you don't share your eye, your size, or the history behind what you chose. That is not a failure of family. It is just the reality of inherited space — people can only hold what they recognize.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 16px;">Possible outputs include</h2>
      <div class="outputs-grid">
        <span class="outputs-header">Possible outputs include</span>
        <span>Digital inventory</span><span>Photo documentation</span>
        <span>Room-by-room item notes</span><span>Family distribution references</span>
        <span>Sentiment and story preservation</span><span>Resale-ready routing notes</span>
        <span>Donation pathways</span><span>Second-home and storage references</span>
        <span>Transition roadmap</span><span>Printable copies</span>
        <span>Bound family binders</span><span>Duplicate family copies</span>
        <span style="border-right:none;">Digital or web-based workflows</span><span></span>
      </div>
      <p style="font-size:14px; color:var(--ink); line-height:1.8; margin:32px 0;">When a piece has a story worth keeping with it, that history is documented too. That is the quiet bridge between Legacy Planning and Curated Resale. Items identified for sale during catalog work can route directly into Curated Resale & Consignment without restarting the process — and when story matters, the story travels with them.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:40px 0 16px;">How project timelines work</h2>
      <p style="font-size:14px; color:var(--ink); line-height:1.8; margin-bottom:40px;">Larger projects are completed across focused work sessions over a shared timeline, rather than continuous daily presence. A two-week catalog may look like three focused 11–4 sessions, with off-site documentation, resale routing, and continuity work completed between visits.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 20px;">Pricing</h2>
      <table class="pricing-table">
        <tr><td>Hourly</td><td>$175/hr · 2 hr minimum</td></tr>
        <tr><td>10-hour Flex Block</td><td>$1,500 ($150/hr)</td></tr>
        <tr><td>25-hour Flex Block</td><td>$3,650</td></tr>
        <tr><td>Legacy Project</td><td>From $3,500 / 20–30 hrs</td></tr>
        <tr><td>Whole home</td><td>Quoted after walkthrough</td></tr>
        <tr><td>Ongoing Continuity</td><td>$500/mo</td></tr>
      </table>
      <p style="font-size:12px; color:var(--sand); margin-top:8px; margin-bottom:40px;">Larger estates quoted after walkthrough only — no fixed tier. Flex blocks never expire.</p>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a href="../contact.html" class="btn btn-dark">Book your time</a>
        <a href="../services.html" style="font-size:12px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--stone); display:flex; align-items:center; text-decoration:none;">← All Services</a>
      </div>
    </div>
  </section>
</div>
<footer>
  <div class="footer-inner">
    <div><img src="../images/logo-black.png" alt="The Well Lived Citizen Co" style="height:48px; width:auto; margin-bottom:12px;"><div class="footer-brand">The Well Lived Citizen Co</div><div class="footer-loc">Los Angeles, CA</div><div class="footer-legal">The Well Lived Citizen Co., a DBA of Well Dressed Citizen LLC</div></div>
    <div class="footer-links"><a href="../services.html">Services</a><a href="../pricing.html">Pricing</a><a href="../about.html">About</a><a href="../contact.html">Get in Touch</a></div>
    <div class="footer-copy">© 2026 The Well Lived Citizen Co · Los Angeles, CA</div>
  </div>
</footer>
<a href="tel:3234331350" class="float-call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>Call or Text</a>
<script>function toggleMenu(){const m=document.getElementById('mobileMenu');m.classList.toggle('open');}document.addEventListener('click',function(e){const menu=document.getElementById('mobileMenu');const btn=document.querySelector('.nav-hamburger');if(menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){menu.classList.remove('open');}});</script>
</body>
</html>
````

## File: site/services/resale.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5"/>
  <title>Curated Resale & Consignment — The Well Lived Citizen Co</title>
  <meta name="description" content="Curated resale and consignment in Los Angeles — clothing, designer, furniture, and more. Commission-based, no upfront cost. The Well Lived Citizen Co by Dayna Brown."/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://thewelllivedcitizenco.com/services/resale"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../style.css"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN9C986JLW"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HN9C986JLW');</script>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo"><img src="../images/logo-black.png" alt="The Well Lived Citizen Co"/></a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">Services<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="../services.html" class="dropdown-header">All Services & Pricing</a>
          <a href="home-organization.html">Home Organization & Modern Move</a>
          <a href="legacy.html">Legacy Planning & Inventory Catalog</a>
          <a href="house-calls.html">House Calls</a>
          <a href="resale.html" style="color:var(--rust);">Curated Resale & Consignment</a>
          <a href="../pricing.html" class="dropdown-footer">View Pricing →</a>
        </div></div>
      </div>
      <a href="../about.html">About</a>
      <a href="../contact.html" class="nav-cta">Get in Touch</a>
    </div>
    <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="../services.html">Services & Pricing</a>
  <a href="home-organization.html">Home Organization & Modern Move</a>
  <a href="legacy.html">Legacy Planning & Inventory Catalog</a>
  <a href="house-calls.html">House Calls</a>
  <a href="resale.html">Curated Resale & Consignment</a>
  <a href="../about.html">About</a>
  <a href="../contact.html">Get in Touch</a>
</div>
<div class="page">
  <section style="padding:80px 0 56px; border-bottom:1px solid var(--linen);">
    <div class="container" style="max-width:760px;">
      <div class="label">04 — Curated Resale & Consignment</div>
      <h1 style="font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--char); line-height:1.15; letter-spacing:-0.02em; margin-bottom:16px;">Is it cool? Is it sellable? Will they even take it?</h1>
      <p style="font-size:17px; color:var(--stone); line-height:1.75; max-width:600px;">Trust-forward thoughtful curation. For the things that still have value, story, or second-market potential — without asking you to become a part-time reseller.</p>
    </div>
  </section>
  <section style="padding:64px 0;">
    <div class="container" style="max-width:760px;">
      <div style="font-size:15px; line-height:1.9; color:var(--ink); margin-bottom:40px;">
        <p style="margin-bottom:16px;">This service is best for items that have been well cared for, still hold real market interest, or deserve thoughtful placement through story-led resale.</p>
        <p>It is not a donation pickup substitute, bulk textile recycling service, or a shortcut for things that are no longer in resellable condition.</p>
      </div>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 16px;">The work is not just listing. It includes:</h2>
      <ul style="list-style:none; margin-bottom:40px;">
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Pickup, intake, evaluation</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Photography</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Platform matching</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Buyer communication</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Routing and return logic</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Donation reroute when appropriate</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0;">Monthly reporting and payout rhythm</li>
      </ul>
      <p style="font-size:15px; font-weight:600; color:var(--char); margin-bottom:40px; font-style:italic;">The goal is to move the item into the right next life, not just the fastest sale.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 16px;">Easy handoff and pickup</h2>
      <p style="font-size:14px; color:var(--stone); margin-bottom:16px;">The handoff is intentionally easy. Depending on what makes the most sense for your week, items can move through:</p>
      <ul style="list-style:none; margin-bottom:16px;">
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">City pickup</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Route-based stop-ins</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Uber Business courier</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Building desk drop</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">UPS Access Point</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0;">Direct bag shipment or handoff during another project block</li>
      </ul>
      <p style="font-size:14px; color:var(--stone); margin-bottom:40px;">The philosophy is simple: why spend time coordinating a bag when it can simply be in my hands by noon.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 16px;">Item standards</h2>
      <p style="font-size:14px; color:var(--ink); line-height:1.8; margin-bottom:16px;">This is a resale and curation service. It is not waste removal, donation hauling, contaminated textile removal, a recycling substitute, or a "please get rid of this for me" service.</p>
      <p style="font-size:14px; color:var(--ink); line-height:1.8; margin-bottom:40px;">The assumption is: these are things you took care of and know deserve another life. That is the spirit of this service.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 16px;">Where items sell</h2>
      <p style="font-size:14px; color:var(--stone); margin-bottom:16px;">Items are routed by category and market fit for maximum return:</p>
      <ul style="list-style:none; margin-bottom:16px;">
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Poshmark (Poshmark Ambassador)</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">eBay</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Etsy</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Facebook Marketplace</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Chairish</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0; border-bottom:1px solid var(--linen);">Vinted, Vestiaire, Grailed</li>
        <li style="font-size:14px; color:var(--ink); padding:8px 0;">Vetted local high-end resale and private collector network</li>
      </ul>
      <p style="font-size:13px; color:var(--stone); margin-bottom:40px;">The route depends on item type, buyer demand, story value, platform behavior, seasonality, and speed versus premium price goals.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 16px;">Realistic resale timeline</h2>
      <p style="font-size:14px; color:var(--ink); line-height:1.8; margin-bottom:40px;">This is a long game, not a fast-cash service. Most strong items sell within the first 90 days. Nearly everything with real demand finds its buyer within 6 to 9 months. The right expectation is: resale rewards patience, not urgency. If immediate cash is the priority, resale may not be the best route.</p>
      <h2 style="font-size:18px; font-weight:700; color:var(--char); margin:0 0 20px;">Commission structure</h2>
      <table class="pricing-table">
        <tr><td>Clothing & Accessories</td><td>55% Dayna / 45% client</td></tr>
        <tr><td>Designer</td><td>50 / 50</td></tr>
        <tr><td>Furniture & Significant Home Pieces</td><td>50 / 50</td></tr>
        <tr><td>Full Closet Liquidation</td><td>55 / 45</td></tr>
      </table>
      <p style="font-size:13px; color:var(--stone); margin-top:16px; line-height:1.6;">Monthly report by the 1st · Payout by the 5th · Clean split of net proceeds after platform fees</p>
      <p style="font-size:12px; color:var(--sand); margin-top:8px; margin-bottom:40px;">Agreement required. No upfront cost. Commission calculated on net proceeds after platform fees.</p>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a href="../contact.html" class="btn btn-dark">Schedule it</a>
        <a href="../services.html" style="font-size:12px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--stone); display:flex; align-items:center; text-decoration:none;">← All Services</a>
      </div>
    </div>
  </section>
</div>
<footer>
  <div class="footer-inner">
    <div><img src="../images/logo-black.png" alt="The Well Lived Citizen Co" style="height:48px; width:auto; margin-bottom:12px;"><div class="footer-brand">The Well Lived Citizen Co</div><div class="footer-loc">Los Angeles, CA</div><div class="footer-legal">The Well Lived Citizen Co., a DBA of Well Dressed Citizen LLC</div></div>
    <div class="footer-links"><a href="../services.html">Services</a><a href="../pricing.html">Pricing</a><a href="../about.html">About</a><a href="../contact.html">Get in Touch</a></div>
    <div class="footer-copy">© 2026 The Well Lived Citizen Co · Los Angeles, CA</div>
  </div>
</footer>
<a href="tel:3234331350" class="float-call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>Call or Text</a>
<script>function toggleMenu(){const m=document.getElementById('mobileMenu');m.classList.toggle('open');}document.addEventListener('click',function(e){const menu=document.getElementById('mobileMenu');const btn=document.querySelector('.nav-hamburger');if(menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){menu.classList.remove('open');}});</script>
</body>
</html>
````

## File: site/_shared.html
````html
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="images/logo-black.png" alt="The Well Lived Citizen Co" />
    </a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">
          Services
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="dropdown-menu">
          <a href="services.html" class="dropdown-header">All Services & Pricing</a>
          <a href="services/home-organization.html">Home Organization & Modern Move</a>
          <a href="services/legacy.html">Legacy Planning & Inventory Catalog</a>
          <a href="services/house-calls.html">House Calls</a>
          <a href="services/resale.html">Curated Resale & Consignment</a>
          <a href="pricing.html" class="dropdown-footer">View Pricing →</a>
        </div>
      </div>
      <a href="about.html">About</a>
      <a href="contact.html" class="nav-cta">Get in Touch</a>
    </div>
    <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="services.html">Services & Pricing</a>
  <a href="services/home-organization.html">Home Organization & Modern Move</a>
  <a href="services/legacy.html">Legacy Planning & Inventory Catalog</a>
  <a href="services/house-calls.html">House Calls</a>
  <a href="services/resale.html">Curated Resale & Consignment</a>
  <a href="about.html">About</a>
  <a href="contact.html">Get in Touch</a>
</div>
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-brand">The Well Lived Citizen Co</div>
      <div class="footer-loc">Los Angeles, CA</div>
      <div class="footer-legal">The Well Lived Citizen Co., a DBA of Well Dressed Citizen LLC</div>
    </div>
    <div class="footer-links">
      <a href="services.html">Services</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="footer-copy">© 2026 The Well Lived Citizen Co · Los Angeles, CA</div>
  </div>
</footer>
<a href="tel:3234331350" class="float-call">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
  Call or Text
</a>
<script>
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('open');
}
// Close on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.nav-hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});
// FAQ accordion
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      const item = this.closest('.faq-item');
      item.classList.toggle('open');
    });
  });
});
</script>
````

## File: site/about.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5"/>
  <title>About Dayna Brown — The Well Lived Citizen Co</title>
  <meta name="description" content="Dayna Brown — executive-level operational thinking, emotional discernment, and a deep reverence for story, memory, and belonging. Los Angeles."/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://thewelllivedcitizenco.com/about"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../style.css"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN9C986JLW"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HN9C986JLW');</script>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo"><img src="../images/logo-black.png" alt="The Well Lived Citizen Co"/></a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">Services<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="../services.html" class="dropdown-header">All Services & Pricing</a>
          <a href="home-organization.html">Home Organization & Modern Move</a>
          <a href="legacy.html">Legacy Planning & Inventory Catalog</a>
          <a href="house-calls.html">House Calls</a>
          <a href="resale.html">Curated Resale & Consignment</a>
          <a href="../pricing.html" class="dropdown-footer">View Pricing →</a>
        </div></div>
      </div>
      <a href="../about.html" class="active">About</a>
      <a href="../contact.html" class="nav-cta">Get in Touch</a>
    </div>
    <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="../services.html">Services & Pricing</a>
  <a href="home-organization.html">Home Organization & Modern Move</a>
  <a href="legacy.html">Legacy Planning & Inventory Catalog</a>
  <a href="house-calls.html">House Calls</a>
  <a href="resale.html">Curated Resale & Consignment</a>
  <a href="../about.html">About</a>
  <a href="../contact.html">Get in Touch</a>
</div>
<div class="page">
  <section style="padding: 80px 0 56px; border-bottom: 1px solid var(--linen);">
    <div class="container" style="max-width: 760px;">
      <div class="label">Meet Dayna</div>
      <h1 style="font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--char); line-height:1.15; letter-spacing:-0.02em; margin-bottom:0;">
        competence does not eliminate the need to be cared for.
      </h1>
    </div>
  </section>
  <section style="padding: 64px 0;">
    <div class="container" style="max-width: 760px;">
      <div style="display:grid; grid-template-columns: 1fr 280px; gap:64px; align-items:start;">
        <div>
          <div style="font-size:15px; line-height:1.9; color:var(--ink);">
            <p style="margin-bottom:20px;">I have always been drawn to the life that lives inside people's most treasured possessions — the objects around which identity is formed, whether subtly or boldly.</p>
            <p style="margin-bottom:20px;">A jacket is never just clothing when it carries the memory of the woman who wore it and the nights she spent wrapped in it beside the love of her life.</p>
            <p style="margin-bottom:20px;">A record is never just vinyl when it still holds the rebellion, risk, and moment that brought it into the world — an era in which music helped bring authority to its knees.</p>
            <p style="margin-bottom:20px;">A closed closet door is never simply storage when it still tells the story of a marriage, a career, a season of confidence, or the person someone once was.</p>
            <p style="margin-bottom:20px;">That instinct has followed me my entire life.</p>
            <p style="margin-bottom:20px;">Creating the time, space, and experience for people to discover the belongings that will become part of their own story has always felt deeply important to me.</p>
            <p style="margin-bottom:32px; font-size:17px; font-weight:600; color:var(--char); font-style:italic;">That is the heart of this work.</p>
            <p style="margin-bottom:20px;">I do not believe people simply need help getting rid of things. I believe they need help understanding what those things mean, what they are worth, what they still have left to do, and where the next chapter of those belongings belongs.</p>
            <p style="margin-bottom:20px;">Sometimes that means preserving. Sometimes it means cataloging, resale, or making sure a family story does not disappear into a donation pile.</p>
            <p style="margin-bottom:20px;">The work is never really about the object. It is about protecting the life it represents.</p>
            <hr class="divider" style="margin: 40px 0;"/>
            <p style="margin-bottom:20px;">I came to understand the full weight of that truth in an entirely different way over the last year. After an unforeseen flood, I found myself moving through 13 temporary homes and Airbnbs, carrying only fragments of the life I thought I would always recognize.</p>
            <p style="margin-bottom:20px;">Years of belongings, valuables, and deeply personal objects were damaged or lost — many of them irreplaceable.</p>
            <p style="margin-bottom:20px;">What surprised me most was not only the grief of the loss itself, but the disorientation of living without the things that quietly reflect you back to yourself each day.</p>
            <p style="margin-bottom:20px;">When it was my life, my loss, my dog beside me in a storage unit, and no clear sense yet of what the next version of home would be, I came face to face with something essential.</p>
            <p style="margin-bottom:20px;">During that season, I was introduced to someone who, on paper, might have simply been called a home organizer. But what she offered was something far deeper. She stepped into the moments I could not hold alone. The decisions I was too depleted to make. The logistics I normally would have solved in seconds.</p>
            <p style="margin-bottom:20px; font-size:17px; font-weight:600; color:var(--char);">She was not organizing. She was relief.</p>
            <p style="margin-bottom:20px;">That experience changed the way I understand this work. Because when it is your own life in pieces, even the most capable person can lose access to their usual clarity. And in those moments, what matters most is not simply having someone who knows where things go. It is having someone who can step into the emotional and operational weight of transition and quietly help carry it with you.</p>
            <hr class="divider" style="margin: 40px 0;"/>
            <p style="margin-bottom:20px;">For more than 15 years, I have built my career creating environments that help people function beautifully in real life. I have led large-scale operations, teams, and transformation initiatives for national brands, designing systems that solve invisible friction before it becomes visible failure.</p>
            <p style="margin-bottom:20px;">That same philosophy now lives inside The Well Lived Citizen Co.</p>
            <p style="margin-bottom:20px;">I bring together executive-level operational thinking, emotional discernment, resale and recoverable-value expertise, and a deep reverence for story, memory, and belonging.</p>
            <p style="margin-bottom:20px;">I do not see homes as projects. I see them as living systems shaped by identity, family, safety, and transition.</p>
            <p style="margin-bottom:20px;">My role is to step into complexity with calm, create clarity around belongings, preserve what matters, recover hidden value, and build elegant systems that help people move forward without losing the story of how they got here.</p>
            <p style="margin-bottom:32px; font-size:16px; font-weight:600; color:var(--char);">At the core, I believe the most meaningful work is helping people feel truly taken care of. That is what this business was built to do.</p>
            <a href="../contact.html" class="btn btn-dark">Get in Touch</a>
          </div>
        </div>
        <div style="position:sticky; top:88px;">
          <div style="background:var(--linen); aspect-ratio:3/4; width:100%; display:flex; align-items:center; justify-content:center;">
            <img src="../images/dayna.jpg" alt="Dayna Brown" style="width:100%; height:100%; object-fit:cover;" onerror="this.parentElement.style.background='var(--linen)'"/>
          </div>
          <div style="margin-top:16px;">
            <div style="font-size:13px; font-weight:600; color:var(--char);">Dayna Brown</div>
            <div style="font-size:12px; color:var(--stone); margin-top:2px;">Founder, The Well Lived Citizen Co.</div>
            <div style="font-size:12px; color:var(--stone);">Los Angeles, CA</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<footer>
  <div class="footer-inner">
    <div><img src="../images/logo-black.png" alt="The Well Lived Citizen Co" style="height:48px; width:auto; margin-bottom:12px;"><div class="footer-brand">The Well Lived Citizen Co</div><div class="footer-loc">Los Angeles, CA</div><div class="footer-legal">The Well Lived Citizen Co., a DBA of Well Dressed Citizen LLC</div></div>
    <div class="footer-links"><a href="../services.html">Services</a><a href="../pricing.html">Pricing</a><a href="../about.html">About</a><a href="../contact.html">Get in Touch</a></div>
    <div class="footer-copy">© 2026 The Well Lived Citizen Co · Los Angeles, CA</div>
  </div>
</footer>
<a href="tel:3234331350" class="float-call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>Call or Text</a>
<script>function toggleMenu(){const m=document.getElementById('mobileMenu');m.classList.toggle('open');}document.addEventListener('click',function(e){const menu=document.getElementById('mobileMenu');const btn=document.querySelector('.nav-hamburger');if(menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){menu.classList.remove('open');}});</script>
</body>
</html>
````

## File: site/contact.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5"/>
  <title>Get in Touch — The Well Lived Citizen Co</title>
  <meta name="description" content="Tell Dayna what you need. The first conversation is always free. Los Angeles concierge home and life services."/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://thewelllivedcitizenco.com/contact"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN9C986JLW"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HN9C986JLW');</script>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo"><img src="images/logo-black.png" alt="The Well Lived Citizen Co"/></a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">Services<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="services.html" class="dropdown-header">All Services & Pricing</a>
          <a href="services/home-organization.html">Home Organization & Modern Move</a>
          <a href="services/legacy.html">Legacy Planning & Inventory Catalog</a>
          <a href="services/house-calls.html">House Calls</a>
          <a href="services/resale.html">Curated Resale & Consignment</a>
          <a href="pricing.html" class="dropdown-footer">View Pricing →</a>
        </div></div>
      </div>
      <a href="about.html">About</a>
      <a href="contact.html" class="nav-cta active">Get in Touch</a>
    </div>
    <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="services.html">Services & Pricing</a>
  <a href="services/home-organization.html">Home Organization & Modern Move</a>
  <a href="services/legacy.html">Legacy Planning & Inventory Catalog</a>
  <a href="services/house-calls.html">House Calls</a>
  <a href="services/resale.html">Curated Resale & Consignment</a>
  <a href="about.html">About</a>
  <a href="contact.html">Get in Touch</a>
</div>
<div class="page">
  <section style="padding:80px 0 56px; border-bottom:1px solid var(--linen);">
    <div class="container" style="max-width:760px;">
      <div class="label">The Well Lived Citizen Co.</div>
      <h1 style="font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--char); line-height:1.15; letter-spacing:-0.02em; margin-bottom:16px;">Get in Touch</h1>
      <p style="font-size:16px; color:var(--stone); line-height:1.75; max-width:520px;">Tell me what you need. You do not need to have it figured out. Start with what is true right now and I will take it from there.</p>
      <p style="font-size:13px; color:var(--clay); margin-top:8px; font-style:italic;">The first conversation is always just that — a conversation.</p>
    </div>
  </section>
  <section style="padding:64px 0;">
    <div class="container" style="max-width:760px;">
      <div style="display:grid; grid-template-columns:1fr 280px; gap:64px; align-items:start;">
        <div>
          <div style="margin-bottom:40px;">
            <div class="form-label">What brings you here?</div>
            <div class="form-radio-group">
              <label class="form-radio"><input type="radio" name="need" value="call"/> <span><strong>Schedule a call</strong> — I want to talk through what I need first.</span></label>
              <label class="form-radio"><input type="radio" name="need" value="book"/> <span><strong>Book a session</strong> — I know what I need and I'm ready to lock it in.</span></label>
              <label class="form-radio"><input type="radio" name="need" value="pickup"/> <span><strong>Schedule a pickup or drop-off</strong> — Clothing, items, resale — I just need to hand something off.</span></label>
              <label class="form-radio"><input type="radio" name="need" value="notsure"/> <span><strong>Not sure yet</strong> — Send me a message and Dayna will figure it out.</span></label>
            </div>
          </div>
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm">
            <input type="hidden" name="_subject" value="New Inquiry — The Well Lived Citizen Co"/>
            <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off"/>
            <div class="form-field">
              <label class="form-label" for="fullName">Your name</label>
              <input class="form-input" type="text" id="fullName" name="fullName" required placeholder="First and last name"/>
            </div>
            <div class="form-field">
              <label class="form-label" for="email">Email</label>
              <input class="form-input" type="email" id="email" name="email" required placeholder="your@email.com"/>
            </div>
            <div class="form-field">
              <label class="form-label" for="phone">Phone</label>
              <input class="form-input" type="tel" id="phone" name="phone" placeholder="(000) 000-0000"/>
            </div>
            <div class="form-field">
              <label class="form-label" for="service">Which service?</label>
              <select class="form-select" id="service" name="service">
                <option value="">— Select —</option>
                <option value="home-org">Home Organization & Modern Move</option>
                <option value="legacy">Legacy Planning & Inventory Catalog</option>
                <option value="house-calls">House Calls</option>
                <option value="resale">Curated Resale & Consignment</option>
                <option value="notsure">Not sure yet</option>
              </select>
            </div>
            <div class="form-field">
              <label class="form-label" for="realLife">What's the real-life version?</label>
              <textarea class="form-textarea" id="realLife" name="realLife" placeholder="Two sentences is enough. What changed, what's actually happening?"></textarea>
            </div>
            <div class="form-field">
              <label class="form-label" for="bestTime">Best time to reach you</label>
              <input class="form-input" type="text" id="bestTime" name="bestTime" placeholder="e.g. weekday mornings, anytime by text"/>
            </div>
            <button type="submit" class="form-submit" id="submitBtn">Send</button>
            <div id="successMsg" style="display:none; margin-top:16px; padding:20px; background:var(--warm); border:1px solid var(--linen);">
              <p style="font-size:14px; color:var(--char); font-weight:600;">Got it.</p>
              <p style="font-size:13px; color:var(--stone); margin-top:4px;">I'll be in touch within 24 hours. Text (323) 433-1350 if you need something sooner.</p>
            </div>
            <div id="errorMsg" style="display:none; margin-top:16px; padding:20px; background:var(--warm); border:1px solid var(--linen);">
              <p style="font-size:13px; color:var(--char);">Something went wrong. Text directly at (323) 433-1350 or email <a href="mailto:dayna@thewelllivedcitizenco.com" style="color:var(--rust);">dayna@thewelllivedcitizenco.com</a>.</p>
            </div>
          </form>
        </div>
        <div style="position:sticky; top:88px;">
          <div style="padding:32px; background:var(--warm); border:1px solid var(--linen); margin-bottom:16px;">
            <div style="font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--rust); margin-bottom:16px;">Direct Contact</div>
            <div style="margin-bottom:12px;">
              <a href="tel:3234331350" style="font-size:15px; font-weight:700; color:var(--char); display:block;">(323) 433-1350</a>
              <div style="font-size:11px; color:var(--stone); margin-top:2px;">Text or call</div>
            </div>
            <div>
              <a href="mailto:dayna@thewelllivedcitizenco.com" style="font-size:13px; color:var(--rust);">dayna@thewelllivedcitizenco.com</a>
            </div>
          </div>
          <div style="padding:24px; background:var(--warm); border:1px solid var(--linen);">
            <div style="font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--rust); margin-bottom:12px;">Service Area</div>
            <p style="font-size:13px; color:var(--stone); line-height:1.7;">Los Angeles and surrounding areas. Travel by project logic — not radius-limited.</p>
            <div style="margin-top:16px; font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:var(--rust); margin-bottom:8px;">Response Time</div>
            <p style="font-size:13px; color:var(--stone);">Within 24 hours. Text for urgent requests.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<footer>
  <div class="footer-inner">
    <div><img src="images/logo-black.png" alt="The Well Lived Citizen Co" style="height:48px; width:auto; margin-bottom:12px;"><div class="footer-brand">The Well Lived Citizen Co</div><div class="footer-loc">Los Angeles, CA</div><div class="footer-legal">The Well Lived Citizen Co., a DBA of Well Dressed Citizen LLC</div></div>
    <div class="footer-links"><a href="services.html">Services</a><a href="pricing.html">Pricing</a><a href="about.html">About</a><a href="contact.html">Get in Touch</a></div>
    <div class="footer-copy">© 2026 The Well Lived Citizen Co · Los Angeles, CA</div>
  </div>
</footer>
<a href="tel:3234331350" class="float-call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>Call or Text</a>
<script>
function toggleMenu(){const m=document.getElementById('mobileMenu');m.classList.toggle('open');}
document.addEventListener('click',function(e){const menu=document.getElementById('mobileMenu');const btn=document.querySelector('.nav-hamburger');if(menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){menu.classList.remove('open');}});
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  try {
    const res = await fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      document.getElementById('successMsg').style.display = 'block';
      this.style.display = 'none';
    } else {
      document.getElementById('errorMsg').style.display = 'block';
      btn.textContent = 'Send'; btn.disabled = false;
    }
  } catch(err) {
    document.getElementById('errorMsg').style.display = 'block';
    btn.textContent = 'Send'; btn.disabled = false;
  }
});
</script>
</body>
</html>
````

## File: site/index.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5"/>
  <title>The Well Lived Citizen Co — Los Angeles</title>
  <meta name="description" content="Concierge home & life services in Los Angeles — home organization, legacy planning, house calls, and curated resale."/>
  <meta name="keywords" content="home organizer Los Angeles, legacy planning LA, curated resale Los Angeles, house calls LA, professional organizer LA"/>
  <meta name="author" content="Dayna Brown"/>
  <meta name="robots" content="index, follow"/>
  <meta name="theme-color" content="#F5F0E8"/>
  <link rel="canonical" href="https://thewelllivedcitizenco.com"/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://thewelllivedcitizenco.com"/>
  <meta property="og:title" content="The Well Lived Citizen Co by Dayna Brown"/>
  <meta property="og:description" content="Concierge home and life services in Los Angeles — home organization, legacy planning, house calls, and curated resale."/>
  <meta property="og:site_name" content="The Well Lived Citizen Co"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="The Well Lived Citizen Co by Dayna Brown"/>
  <meta name="twitter:description" content="Home organization, legacy planning, house calls, and curated resale — Los Angeles."/>
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    "name":"The Well Lived Citizen Co",
    "url":"https://thewelllivedcitizenco.com",
    "description":"Dayna Brown provides concierge home and life services in Los Angeles — home organization, legacy planning, house calls, and curated resale.",
    "telephone":"+13234331350",
    "email":"dayna@thewelllivedcitizenco.com",
    "address":{"@type":"PostalAddress","addressLocality":"Los Angeles","addressRegion":"CA","addressCountry":"US"},
    "founder":{"@type":"Person","name":"Dayna Brown"}
  }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN9C986JLW"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HN9C986JLW');</script>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="images/logo-black.png" alt="The Well Lived Citizen Co"/>
    </a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">Services
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="services.html" class="dropdown-header">All Services & Pricing</a>
          <a href="services/home-organization.html">Home Organization & Modern Move</a>
          <a href="services/legacy.html">Legacy Planning & Inventory Catalog</a>
          <a href="services/house-calls.html">House Calls</a>
          <a href="services/resale.html">Curated Resale & Consignment</a>
          <a href="pricing.html" class="dropdown-footer">View Pricing →</a>
        </div></div>
      </div>
      <a href="about.html">About</a>
      <a href="contact.html" class="nav-cta">Get in Touch</a>
    </div>
    <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="services.html">Services & Pricing</a>
  <a href="services/home-organization.html">Home Organization & Modern Move</a>
  <a href="services/legacy.html">Legacy Planning & Inventory Catalog</a>
  <a href="services/house-calls.html">House Calls</a>
  <a href="services/resale.html">Curated Resale & Consignment</a>
  <a href="about.html">About</a>
  <a href="contact.html">Get in Touch</a>
</div>
<div class="page">
  <section style="padding: 96px 0 72px; background: var(--cream);">
    <div class="container" style="max-width: 760px;">
      <div class="label fade-up fade-up-1">Los Angeles</div>
      <h1 class="fade-up fade-up-2" style="font-size: clamp(32px,5vw,56px); font-weight:700; color:var(--char); line-height:1.1; letter-spacing:-0.02em; margin-bottom:24px;">
        When <em style="font-style:italic; color:var(--rust);">"there has to be an easier way"</em> becomes a business.
      </h1>
      <p class="fade-up fade-up-3" style="font-size:18px; color:var(--stone); line-height:1.75; margin-bottom:16px;">
        Welcome to the concierge for the things you don't want to handle.
      </p>
      <p style="font-size:15px; color:var(--clay); line-height:1.8; max-width:580px; margin-bottom:40px;">
        My daily flow already runs through shipping, logistics, tech fixes, resale, and real-world problem solving at scale.
        I move fast where things are solvable, and when life gets stuck, I know how to move it through.
        <strong>I'm built for your chaos.</strong>
      </p>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a href="services.html" class="btn btn-dark">See the work</a>
        <a href="contact.html" class="btn btn-outline">Get in Touch</a>
      </div>
    </div>
  </section>
  <hr class="divider"/>
  <section style="padding: 72px 0;">
    <div class="container">
      <div class="conversion-grid">
        <div class="conversion-block">
          <div class="conversion-label">Ready to move on it?</div>
          <div class="conversion-body">Book the 4-Hour Practical Reset for the room, task list, move landing, or household overflow that needs to stop catching immediately.</div>
          <a href="contact.html" class="btn">Book 4-Hour Reset</a>
        </div>
        <div class="conversion-block">
          <div class="conversion-label">Resale bag pickup.</div>
          <div class="conversion-body">Moving, closet cleanout, post-breakup, wardrobe reset — fill 2 to 4 totes and get them to me same day.<br><br>Same-day pickup or courier handoff available.</div>
          <a href="contact.html" class="btn">Schedule Pickup</a>
        </div>
      </div>
      <div class="conversion-fullwidth">
        <div class="conversion-label">Need to leave before everything is packed?</div>
        <div class="conversion-body">You go to the new city, the family home, the furnished rental, or the next place first. I stay behind to pack and close out the space, move what should store, route what should sell, ship what you still need in labeled boxes. Start with a scoped project fee built from hourly work blocks. The move continues in flexible chunks without you carrying the urgency from the other end.</div>
        <a href="contact.html" class="btn btn-dark">Book the closeout</a>
      </div>
    </div>
  </section>
  <hr class="divider"/>
  <section style="padding: 72px 0;">
    <div class="container">
      <div class="service-card">
        <div class="service-num">01 — Home Organization & Modern Move</div>
        <div class="service-title">Your home, made to work for how you actually live.</div>
        <div class="service-body">
          <p>We cover the rooms and spaces. For the room that keeps collecting piles. The storage unit that keeps increasing rent and you only go every six months to ensure you weren't broken into or to take out that one outfit, or bike. The move where the boxes made it through the door, but nothing feels settled. The move where you had to leave before everything was fully packed, and someone still needs to close out what's left behind.</p>
          <p>The professional landing in Los Angeles the same day as their boxes and the first day on the job — knowing you'll come home to a boxed mattress, no phone charger, and a suit that needs steaming. No energy, takeout food, or forks. It's the 'oh my gosh, someone save me' situation. But you're happy — life is starting a new chapter — you just have to move through the hurdles of that part.</p>
          <p>The closet that no longer fits your life, body, season, or the way you actually get dressed (morning or afternoon — no judgment). I come in, find the friction, and make the space work around how you naturally move through your day. The goal is a home that lands well and WORKS and keeps working after I leave.</p>
        </div>
        <div class="service-pricing">$150/hr · 3 hr minimum</div>
        <div class="service-flex-note">Flex pricing and project quotes covered on our Pricing page.</div>
        <a href="services/home-organization.html" class="btn btn-outline">Book your session</a>
      </div>
      <div class="service-card">
        <div class="service-num">02 — Legacy Planning & Inventory Catalog</div>
        <div class="service-title">Clarity without fear.</div>
        <div class="service-body">
          <p>The lived-in layer of your home — the walls you spend your life within — needs clarity before it becomes a burden to you, your future self, your family, or the people you rely on. Most people are prepared for the things we're pressured to check off the list — good job, us. You may already have the estate planner, the will, and the paperwork.</p>
          <p>My work is the home itself — identifying what's still in use, what still has value (often hidden in cabinets), and what needs a clear plan while you can still decide what matters. When story matters, I document that too — so meaning isn't lost when objects change hands.</p>
          <p>I am not a legal estate planner or estate sale service. I focus on the meaning behind the life in your objects and how to preserve that, giving everything more value to you now, your family later, and the people who want your things. You have meaningful things attached to you — let's share them.</p>
        </div>
        <div class="service-pricing">$175/hr · 2 hr minimum</div>
        <div class="service-flex-note">Flex pricing and project quotes covered on our Pricing page.</div>
        <a href="services/legacy.html" class="btn btn-outline">Book your time</a>
      </div>
      <div class="service-card">
        <div class="service-num">03 — House Calls</div>
        <div class="service-title">For the things life leaves unfinished.</div>
        <div class="service-body">
          <p>Possibly my favorite service, and the spirit of this company.</p>
          <p>That's the thing friends used to do. The thing neighbors don't always have time for anymore. The thing adult children need when they're in another city.</p>
          <p>Once I know how your home works, it becomes easy for me to help keep it working — home check-ins, tech setup, hands-on home improvements, donation drop-offs, and the practical loose ends that make everyday life easier when someone trusted is paying attention.</p>
        </div>
        <div class="service-pricing">$175/hr · 2 hr minimum</div>
        <div class="service-flex-note">Flex pricing and project quotes covered on our Pricing page.</div>
        <a href="services/house-calls.html" class="btn btn-outline">Book me</a>
      </div>
      <div class="service-card" style="border-bottom:none;">
        <div class="service-num">04 — Curated Resale & Consignment</div>
        <div class="service-title">Is it cool? Is it sellable? Will they even take it?</div>
        <div class="service-body">
          <p>This is for clothing, designer bags, jewelry, and the pieces you know might still have value but do not want to spend hours platform-matching, measuring, negotiating, and managing yourself. With an established luxury and resale background, I go through it piece by piece, decide what is worth the effort, and match each item to the platform where it makes the most sense. Clean, non-sellable items can be responsibly donated as part of the process.</p>
          <p>You fill the waterproof bag, sign the agreement, and I handle the rest — pickup, styling, measurements, listing, buyer questions, returns, monthly check-ins, and payout on the agreed split.</p>
        </div>
        <div class="service-pricing">Commission-based · agreement required</div>
        <div class="service-flex-note">Commission structure and full terms covered on our Pricing page.</div>
        <a href="services/resale.html" class="btn btn-outline">Schedule it</a>
      </div>
    </div>
  </section>
  <hr class="divider"/>
  <section style="padding: 72px 0;">
    <div class="container" style="max-width:760px;">
      <div class="testimonial-block">
        <div class="testimonial-quote">
          "I wake up and my clicker for all my lamps is on my bedside table. I get up and move it to the dresser by the door so every time I come back in I can turn any lamp from the doorway. My clothes are arranged by item and color, my purses on two long shelves and two short ones — I can see what I have and choose accordingly. My shoes are on four shelves where I can easily see them. The heat is set perfectly. The TV is set up with only one clicker to get to all the channels I want. Thank you for making life easier for me."
        </div>
        <div class="testimonial-attr">— Gayle, Seattle Client</div>
      </div>
    </div>
  </section>
  <hr class="divider"/>
  <section style="padding: 72px 0; background: var(--char);">
    <div class="container" style="max-width:760px; text-align:center;">
      <div style="font-size:11px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:var(--sand); margin-bottom:16px;">Not sure where to start?</div>
      <h2 style="font-size:clamp(24px,3.5vw,36px); font-weight:700; color:var(--cream); line-height:1.2; margin-bottom:16px;">Start anywhere.</h2>
      <p style="font-size:15px; color:var(--sand); line-height:1.75; margin-bottom:36px;">No pressure. The whole point is to make your life easier to navigate from here.</p>
      <a href="contact.html" class="btn btn-rust">Get in Touch</a>
    </div>
  </section>
</div>
<footer>
  <div class="footer-inner">
    <div>
      <img src="images/logo-black.png" alt="The Well Lived Citizen Co" style="height:48px; width:auto; margin-bottom:12px;">
      <div class="footer-brand">The Well Lived Citizen Co</div>
      <div class="footer-loc">Los Angeles, CA</div>
      <div class="footer-legal">The Well Lived Citizen Co., a DBA of Well Dressed Citizen LLC</div>
    </div>
    <div class="footer-links">
      <a href="services.html">Services</a>
      <a href="pricing.html">Pricing</a>
      <a href="about.html">About</a>
      <a href="contact.html">Get in Touch</a>
    </div>
    <div class="footer-copy">© 2026 The Well Lived Citizen Co · Los Angeles, CA</div>
  </div>
</footer>
<a href="tel:3234331350" class="float-call">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  Call or Text
</a>
<script>
function toggleMenu(){const m=document.getElementById('mobileMenu');m.classList.toggle('open');}
document.addEventListener('click',function(e){const menu=document.getElementById('mobileMenu');const btn=document.querySelector('.nav-hamburger');if(menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){menu.classList.remove('open');}});
</script>
</body>
</html>
````

## File: site/pricing.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5"/>
  <title>Pricing — The Well Lived Citizen Co</title>
  <meta name="description" content="Transparent pricing for home organization, legacy planning, house calls, and curated resale — The Well Lived Citizen Co, Los Angeles."/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://thewelllivedcitizenco.com/pricing"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN9C986JLW"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HN9C986JLW');</script>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo"><img src="images/logo-black.png" alt="The Well Lived Citizen Co"/></a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">Services<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="services.html" class="dropdown-header">All Services & Pricing</a>
          <a href="services/home-organization.html">Home Organization & Modern Move</a>
          <a href="services/legacy.html">Legacy Planning & Inventory Catalog</a>
          <a href="services/house-calls.html">House Calls</a>
          <a href="services/resale.html">Curated Resale & Consignment</a>
          <a href="pricing.html" class="dropdown-footer">View Pricing →</a>
        </div></div>
      </div>
      <a href="about.html">About</a>
      <a href="contact.html" class="nav-cta">Get in Touch</a>
    </div>
    <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="services.html">Services & Pricing</a>
  <a href="services/home-organization.html">Home Organization & Modern Move</a>
  <a href="services/legacy.html">Legacy Planning & Inventory Catalog</a>
  <a href="services/house-calls.html">House Calls</a>
  <a href="services/resale.html">Curated Resale & Consignment</a>
  <a href="about.html">About</a>
  <a href="contact.html">Get in Touch</a>
</div>
<div class="page">
  <section style="padding:80px 0 48px; border-bottom:1px solid var(--linen);">
    <div class="container" style="max-width:760px;">
      <div class="label">How I charge</div>
      <h1 style="font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--char); line-height:1.15; letter-spacing:-0.02em;">Pricing</h1>
    </div>
  </section>
  <section style="padding:64px 0;">
    <div class="container" style="max-width:760px;">
      <div style="margin-bottom:56px;">
        <div class="label">01 — Home Organization & Modern Move</div>
        <table class="pricing-table">
          <tr><td>Hourly</td><td>$150/hr · 3 hr minimum</td></tr>
          <tr><td>10-hour Flex Block</td><td>$1,250 ($125/hr)</td></tr>
          <tr><td>25-hour Flex Block</td><td>$3,150</td></tr>
          <tr><td>Studio / 1BR Move Reset</td><td>$1,200/day — flat rate, up to 8 hours straight</td></tr>
          <tr><td>Larger homes & multi-room projects</td><td>Quoted after call</td></tr>
        </table>
        <p style="font-size:12px; color:var(--sand); margin-top:8px;">Flex blocks never expire.</p>
      </div>
      <hr class="divider" style="margin-bottom:56px;"/>
      <div style="margin-bottom:56px;">
        <div class="label">02 — Legacy Planning & Inventory Catalog</div>
        <table class="pricing-table">
          <tr><td>Hourly</td><td>$175/hr · 2 hr minimum</td></tr>
          <tr><td>10-hour Flex Block</td><td>$1,500 ($150/hr)</td></tr>
          <tr><td>25-hour Flex Block</td><td>$3,650</td></tr>
          <tr><td>Legacy Project</td><td>From $3,500 / 20–30 hrs</td></tr>
          <tr><td>Whole home</td><td>Quoted after walkthrough</td></tr>
          <tr><td>Ongoing Continuity</td><td>$500/mo</td></tr>
        </table>
        <p style="font-size:12px; color:var(--sand); margin-top:8px;">Larger estates and whole-home projects are quoted after walkthrough only. No fixed tier. Flex blocks never expire.</p>
      </div>
      <hr class="divider" style="margin-bottom:56px;"/>
      <div style="margin-bottom:56px;">
        <div class="label">03 — House Calls</div>
        <table class="pricing-table">
          <tr><td>Hourly</td><td>$175/hr · 2 hr minimum</td></tr>
          <tr><td>4-Hour Practical Reset</td><td>Available</td></tr>
          <tr><td>Continuity Retainer</td><td>$500/mo</td></tr>
        </table>
        <p style="font-size:12px; color:var(--sand); margin-top:8px;">No membership. No subscription. Ease comes from relationship, not a forced plan.</p>
      </div>
      <hr class="divider" style="margin-bottom:56px;"/>
      <div style="margin-bottom:56px;">
        <div class="label">04 — Curated Resale & Consignment</div>
        <table class="pricing-table">
          <tr><td>Clothing & Accessories</td><td>55% Dayna / 45% client</td></tr>
          <tr><td>Designer</td><td>50 / 50</td></tr>
          <tr><td>Furniture & Significant Home Pieces</td><td>50 / 50</td></tr>
          <tr><td>Full Closet Liquidation</td><td>55 / 45</td></tr>
        </table>
        <p style="font-size:13px; color:var(--stone); margin-top:16px; line-height:1.6;">Monthly report by the 1st · Payout by the 5th · Clean split of net proceeds after platform fees</p>
        <p style="font-size:12px; color:var(--sand); margin-top:8px;">Agreement required. Commission is calculated on net proceeds after platform fees.</p>
      </div>
      <hr class="divider" style="margin-bottom:48px;"/>
      <div style="text-align:center; padding:40px; background:var(--warm); border:1px solid var(--linen);">
        <p style="font-size:16px; color:var(--char); font-weight:600; margin-bottom:8px;">Call or text (323) 433-1350.</p>
        <p style="font-size:14px; color:var(--stone); margin-bottom:28px;">The first conversation is always free.</p>
        <a href="contact.html" class="btn btn-dark">Get in Touch</a>
      </div>
    </div>
  </section>
</div>
<footer>
  <div class="footer-inner">
    <div><img src="images/logo-black.png" alt="The Well Lived Citizen Co" style="height:48px; width:auto; margin-bottom:12px;"><div class="footer-brand">The Well Lived Citizen Co</div><div class="footer-loc">Los Angeles, CA</div><div class="footer-legal">The Well Lived Citizen Co., a DBA of Well Dressed Citizen LLC</div></div>
    <div class="footer-links"><a href="services.html">Services</a><a href="pricing.html">Pricing</a><a href="about.html">About</a><a href="contact.html">Get in Touch</a></div>
    <div class="footer-copy">© 2026 The Well Lived Citizen Co · Los Angeles, CA</div>
  </div>
</footer>
<a href="tel:3234331350" class="float-call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>Call or Text</a>
<script>function toggleMenu(){const m=document.getElementById('mobileMenu');m.classList.toggle('open');}document.addEventListener('click',function(e){const menu=document.getElementById('mobileMenu');const btn=document.querySelector('.nav-hamburger');if(menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){menu.classList.remove('open');}});</script>
</body>
</html>
````

## File: site/README.md
````markdown
# The Well Lived Citizen Co — Site Deploy Instructions

## Files in this folder

```
index.html          → Homepage (/)
about.html          → About (/about)
services.html       → Services overview (/services)
pricing.html        → Pricing (/pricing)
contact.html        → Contact (/contact)
services/
  home-organization.html  → /services/home-organization
  legacy.html             → /services/legacy
  house-calls.html        → /services/house-calls
  resale.html             → /services/resale
style.css           → Shared stylesheet (all pages link to this)
sitemap.xml         → Submit to Google Search Console after deploy
robots.txt          → Allow crawling
images/             → PUT LOGO AND DAYNA PHOTO HERE
  logo-black.png    ← Required: logo on cream background
  logo-white.png    ← Required: logo on dark background  
  dayna.jpg         ← Required: Dayna's photo for About page
```

## Before deploying

1. Add logo files to /images/ folder (provided by Dayna)
2. Add Dayna's photo to /images/dayna.jpg (provided by Dayna)
3. Update contact form action URL in contact.html:
   - Find: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace with actual Formspree endpoint

## Deploy to Netlify (easiest)

1. Drag this entire folder to netlify.com/drop
2. Site is live instantly
3. Connect custom domain: thewelllivedcitizenco.com
4. Done

## After deploy

1. Submit sitemap.xml in Google Search Console
2. Verify Search Console ownership
3. Confirm GA4 tag G-HN9C986JLW is receiving data

## DO NOT

- Do not add any pages not in this list
- Do not rename any service pages
- Do not change any copy
- Do not add images that Dayna did not provide
- Do not modify the sitemap to include pages not listed above
````

## File: site/robots.txt
````
User-agent: *
Allow: /
Sitemap: https://thewelllivedcitizenco.com/sitemap.xml
````

## File: site/services.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5"/>
  <title>Services & Pricing — The Well Lived Citizen Co</title>
  <meta name="description" content="Home organization, legacy planning, house calls, and curated resale — Los Angeles concierge home and life services by Dayna Brown."/>
  <meta name="robots" content="index, follow"/>
  <link rel="canonical" href="https://thewelllivedcitizenco.com/services"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN9C986JLW"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HN9C986JLW');</script>
</head>
<body>
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo"><img src="images/logo-black.png" alt="The Well Lived Citizen Co"/></a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">Services<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="dropdown-menu"><div class="dropdown-menu-inner">
          <a href="services.html" class="dropdown-header">All Services & Pricing</a>
          <a href="services/home-organization.html">Home Organization & Modern Move</a>
          <a href="services/legacy.html">Legacy Planning & Inventory Catalog</a>
          <a href="services/house-calls.html">House Calls</a>
          <a href="services/resale.html">Curated Resale & Consignment</a>
          <a href="pricing.html" class="dropdown-footer">View Pricing →</a>
        </div></div>
      </div>
      <a href="about.html">About</a>
      <a href="contact.html" class="nav-cta">Get in Touch</a>
    </div>
    <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="services.html">Services & Pricing</a>
  <a href="services/home-organization.html">Home Organization & Modern Move</a>
  <a href="services/legacy.html">Legacy Planning & Inventory Catalog</a>
  <a href="services/house-calls.html">House Calls</a>
  <a href="services/resale.html">Curated Resale & Consignment</a>
  <a href="about.html">About</a>
  <a href="contact.html">Get in Touch</a>
</div>
<div class="page">
  <section style="padding:80px 0 48px; border-bottom:1px solid var(--linen);">
    <div class="container" style="max-width:760px;">
      <div class="label">The Well Lived Citizen Co.</div>
      <h1 style="font-size:clamp(28px,4vw,48px); font-weight:700; color:var(--char); line-height:1.15; letter-spacing:-0.02em;">Services & Pricing</h1>
    </div>
  </section>
  <section style="padding:64px 0;">
    <div class="container" style="max-width:760px;">
      <div class="service-card">
        <div class="service-num">01</div>
        <div class="service-title">Home Organization & Modern Move</div>
        <div class="service-tagline">The relief of the room.</div>
        <div class="service-body"><p>Your home, made to work for how you actually live. For the room that keeps collecting piles, the move that technically happened but never settled, the closet that no longer fits your life, or the spaces where everyday friction quietly steals time.</p></div>
        <div class="service-pricing">$150/hr · 3 hr minimum</div>
        <div class="service-flex-note">Flex pricing and project quotes covered on our <a href="pricing.html" style="color:var(--rust);">Pricing page</a>.</div>
        <a href="services/home-organization.html" class="btn btn-outline">Book your session</a>
      </div>
      <div class="service-card">
        <div class="service-num">02</div>
        <div class="service-title">Legacy Planning & Inventory Catalog</div>
        <div class="service-tagline">Clarity without fear.</div>
        <div class="service-body"><p>The operational side of a home, made visible again. This is for the part of life most people don't realize has been quietly building for years — the things inside a home that became part of how life worked, long before anyone stopped to look at them. Not the will. Not the paperwork. Not the part a lawyer handles. The part that lives inside the walls.</p></div>
        <div class="service-pricing">$175/hr · 2 hr minimum</div>
        <div class="service-flex-note">Flex pricing and project quotes covered on our <a href="pricing.html" style="color:var(--rust);">Pricing page</a>.</div>
        <a href="services/legacy.html" class="btn btn-outline">Book your time</a>
      </div>
      <div class="service-card">
        <div class="service-num">03</div>
        <div class="service-title">House Calls</div>
        <div class="service-tagline">For the things life leaves unfinished.</div>
        <div class="service-body"><p>For when the issue isn't the room — it's the person you used to have to call. Possibly my favorite service, and the spirit of this company. Route-based quick asks often absorbed into existing travel days.</p></div>
        <div class="service-pricing">$175/hr · 2 hr minimum</div>
        <div class="service-flex-note">Flex pricing and project quotes covered on our <a href="pricing.html" style="color:var(--rust);">Pricing page</a>.</div>
        <a href="services/house-calls.html" class="btn btn-outline">Book me</a>
      </div>
      <div class="service-card" style="border-bottom:none;">
        <div class="service-num">04</div>
        <div class="service-title">Curated Resale & Consignment</div>
        <div class="service-tagline">Trust-forward thoughtful curation.</div>
        <div class="service-body"><p>For the things that still have value, story, or second-market potential — without asking you to become a part-time reseller. No item count minimum. Fill what you have and send it when it's ready.</p></div>
        <div class="service-pricing">Commission-based · agreement required</div>
        <div class="service-flex-note">Commission structure and full terms covered on our <a href="pricing.html" style="color:var(--rust);">Pricing page</a>.</div>
        <a href="services/resale.html" class="btn btn-outline">Schedule it</a>
      </div>
    </div>
  </section>
  <section style="padding:48px 0 72px; border-top:1px solid var(--linen);">
    <div class="container" style="max-width:760px; text-align:center;">
      <p style="font-size:16px; color:var(--stone); margin-bottom:24px;">Not sure where to start? Start with what is most real right now.</p>
      <p style="font-size:14px; color:var(--clay); line-height:1.75; margin-bottom:32px; max-width:520px; margin-left:auto; margin-right:auto;">Most clients naturally move between these four services over time, and the work is designed to follow real life instead of forcing you into a rigid category.</p>
      <a href="contact.html" class="btn btn-dark">Get in Touch</a>
    </div>
  </section>
</div>
<footer>
  <div class="footer-inner">
    <div><img src="images/logo-black.png" alt="The Well Lived Citizen Co" style="height:48px; width:auto; margin-bottom:12px;"><div class="footer-brand">The Well Lived Citizen Co</div><div class="footer-loc">Los Angeles, CA</div><div class="footer-legal">The Well Lived Citizen Co., a DBA of Well Dressed Citizen LLC</div></div>
    <div class="footer-links"><a href="services.html">Services</a><a href="pricing.html">Pricing</a><a href="about.html">About</a><a href="contact.html">Get in Touch</a></div>
    <div class="footer-copy">© 2026 The Well Lived Citizen Co · Los Angeles, CA</div>
  </div>
</footer>
<a href="tel:3234331350" class="float-call"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>Call or Text</a>
<script>function toggleMenu(){const m=document.getElementById('mobileMenu');m.classList.toggle('open');}document.addEventListener('click',function(e){const menu=document.getElementById('mobileMenu');const btn=document.querySelector('.nav-hamburger');if(menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){menu.classList.remove('open');}});</script>
</body>
</html>
````

## File: site/sitemap.xml
````xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://thewelllivedcitizenco.com/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://thewelllivedcitizenco.com/services</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://thewelllivedcitizenco.com/services/home-organization</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://thewelllivedcitizenco.com/services/legacy</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://thewelllivedcitizenco.com/services/house-calls</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://thewelllivedcitizenco.com/services/resale</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://thewelllivedcitizenco.com/about</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://thewelllivedcitizenco.com/pricing</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://thewelllivedcitizenco.com/contact</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>
````

## File: site/style.css
````css
:root {
⋮----
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
⋮----
html { scroll-behavior: smooth; }
⋮----
body {
⋮----
::selection { background: rgba(154,91,60,0.18); }
⋮----
a { color: inherit; text-decoration: none; }
button { font-family: var(--ff); cursor: pointer; }
img { display: block; max-width: 100%; }
⋮----
.container { width: 100%; max-width: var(--max); margin: 0 auto; padding: 0 40px; }
@media (max-width: 640px) { .container { padding: 0 20px; } }
⋮----
nav {
.nav-inner {
.nav-logo img { height: 72px; width: auto; }
.nav-links { display: flex; gap: 28px; align-items: center; }
.nav-links a {
.nav-links a:hover, .nav-links a.active { color: var(--rust); }
.nav-links .nav-cta {
.nav-links .nav-cta:hover { background: var(--char); color: var(--cream); }
⋮----
.nav-dropdown { position: relative; }
.nav-dropdown-trigger {
.nav-dropdown-trigger:hover { color: var(--rust); }
.nav-dropdown-trigger svg { transition: transform 0.2s; }
.nav-dropdown:hover .nav-dropdown-trigger { color: var(--rust); }
.nav-dropdown:hover .nav-dropdown-trigger svg { transform: rotate(180deg); }
.dropdown-menu {
.dropdown-menu-inner {
.nav-dropdown:hover .dropdown-menu { display: block; }
.dropdown-menu-inner a {
.dropdown-menu-inner a:hover { background: var(--warm); color: var(--rust); }
.dropdown-menu-inner a.dropdown-header {
.dropdown-menu-inner a.dropdown-footer {
⋮----
.nav-hamburger {
.nav-hamburger span {
.mobile-menu {
.mobile-menu.open { display: block; }
.mobile-menu a {
.mobile-menu a:last-child { border-bottom: none; }
.mobile-menu a:hover { color: var(--rust); }
⋮----
.nav-links { display: none; }
.nav-hamburger { display: flex; }
.container { padding: 0 20px; }
⋮----
footer {
.footer-inner {
.footer-brand { font-size: 14px; font-weight: 700; color: var(--char); }
.footer-loc { font-size: 11px; color: var(--sand); margin-top: 2px; }
.footer-legal { font-size: 11px; color: var(--sand); font-style: italic; margin-top: 4px; }
.footer-links { display: flex; gap: 24px; }
.footer-links a {
.footer-links a:hover { color: var(--rust); }
.footer-copy { font-size: 11px; color: var(--sand); }
⋮----
.float-call {
.float-call:hover { background: var(--char); }
@media (max-width: 768px) { .float-call { display: flex; } }
⋮----
.btn {
.btn-dark { background: var(--char); color: var(--cream); }
.btn-dark:hover { background: var(--ink); color: var(--cream); }
.btn-outline { background: transparent; color: var(--char); border: 1px solid var(--char); }
.btn-outline:hover { background: var(--char); color: var(--cream); }
.btn-rust { background: var(--rust); color: var(--cream); }
.btn-rust:hover { background: var(--char); color: var(--cream); }
⋮----
.page { padding-top: var(--nav-h); }
⋮----
.label {
⋮----
.divider { border: none; border-top: 1px solid var(--linen); margin: 0; }
⋮----
.pricing-table { width: 100%; border-collapse: collapse; margin: 24px 0; }
.pricing-table td {
.pricing-table td:first-child { color: var(--stone); padding-right: 24px; width: 50%; }
.pricing-table td:last-child { font-weight: 600; color: var(--char); }
⋮----
.testimonial-block {
.testimonial-quote {
.testimonial-attr {
⋮----
.service-card {
.service-num {
.service-title {
.service-tagline {
.service-body { font-size: 14px; line-height: 1.9; color: var(--ink); }
.service-body p { margin-bottom: 12px; }
.service-pricing {
.service-flex-note {
⋮----
.conversion-grid {
@media (max-width: 900px) { .conversion-grid { grid-template-columns: 1fr; } }
.conversion-block {
.conversion-block:nth-child(1) {
.conversion-block:nth-child(1) .conversion-label,
.conversion-block:nth-child(1) .btn { background: var(--rust); color: var(--cream); border: none; }
.conversion-block:nth-child(1) .btn:hover { background: var(--cream); color: var(--char); }
.conversion-block:nth-child(2) {
.conversion-block:nth-child(2) .conversion-label,
.conversion-block:nth-child(2) .btn { background: var(--char); color: var(--cream); border: none; }
.conversion-block:nth-child(2) .btn:hover { background: var(--cream); color: var(--char); }
.conversion-fullwidth {
.conversion-label {
.conversion-body {
⋮----
.outputs-grid {
.outputs-grid span {
.outputs-grid span:nth-child(even) { border-right: none; }
.outputs-header {
⋮----
.faq-item { border-bottom: 1px solid var(--linen); }
.faq-trigger {
.faq-q {
.faq-icon {
.faq-item.open .faq-icon { transform: rotate(45deg); }
.faq-answer {
.faq-item.open .faq-answer { display: block; }
⋮----
.fade-up { animation: fadeUp 0.7s ease forwards; opacity: 0; }
.fade-up-1 { animation-delay: 0.1s; }
.fade-up-2 { animation-delay: 0.25s; }
.fade-up-3 { animation-delay: 0.4s; }
⋮----
.form-field { margin-bottom: 24px; }
.form-label {
.form-input, .form-textarea, .form-select {
.form-input:focus, .form-textarea:focus, .form-select:focus {
.form-textarea { min-height: 120px; resize: vertical; }
.form-radio-group { display: flex; flex-direction: column; gap: 10px; }
.form-radio {
.form-radio input { accent-color: var(--rust); }
.form-submit {
.form-submit:hover { background: var(--rust); }
````
