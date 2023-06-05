---
layout: autor
description: Pasionat de tehnologie, gadgeturi și inovație, explorează cele mai recente tendințe și descoperiri. În articolele sale regăsim o combinație între pasiunea pentru gadgeturi și înțelegerea modului în care inovațiile tehnologice ne influențează viața de zi cu zi.
title: Alex P. - Autor și dezvoltator
cod: "1"
author: "Alex P."
image: "/assets/images/alexp.webp"
mesaj: "Salut, eu sunt Alex, pasionat de tehnologie, gadgeturi și inovație."
emoji: "🍳 🏆 🏠 💱" 

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
