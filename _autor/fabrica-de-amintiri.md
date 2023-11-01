---
layout: autor
description: Noi suntem Fabrica de Aminitiri, ghidul tau de calatorii si aventura.
title: Fabrica de Amintiri
cod: "2"
author: "Fabrica de amintiri"
image: "/assets/images/fabrica.webp"
mesaj: "👫 Salutare! Noi suntem Damian și Simina, un cuplu de îndrăgostiți, îndrăgostit de călătorii. Haide ]mpreună cu noi să descoperi cele mai frumoase destinații ale lumii...cu buget redus 😜"
emoji: "✈ 🌄 ⛵ 🌍" 

---

## Articole<span class="text-megna">.</span>

<div class="row reviews-wrapper">
	<div id="outputReview" class="row">
	{% assign this-author = site.data.search %}
	{% for trip in this-author reversed %}
	{% if trip.author == page.author %}
		{% include author-post.html %}
	{% endif %}
	{% endfor %}
	</div>
</div>
