---
layout: travel
title: Locuri de Vizitat in Praga - Top 30 Atractii si Obiective Turistice
descriere: "Cele mai frumoase locuri de vizitat in Praga - Ce are de oferit Orasul Celor O Mie de Turnuri: arhitectura istorică, de parcuri pitorești si cultura vibrantă."
description: "Cele mai frumoase locuri de vizitat in Praga - Ce are de oferit Orasul Celor O Mie de Turnuri: arhitectura istorică, de parcuri pitorești si cultura vibrantă."
meta_image: 
image: 
author: Fabrica de amintiri
author-link: fabrica-de-amintiri
tara: REPUBLICA CEHA
oras: PRAGA
lang: ro_RO
keyword: "locuri de vizitat in praga"
date: 18.02.2024
date-modified:
tags:
  - PRAGA
  - OBIECTIVE
  - ATRACTIT
  
anchors: ['Locuri de vizitat in Praga','Atractii turistice Praga', 'Cele mai frumoase obiective turistice in Praga','Ce poti sa vizitezi in Praga?']
id-oras: "274707"
cat: "blog-oras"
folder: recsAliG9AGy7c1Es


---

---
## TOP 30 De Atracții Turistice în Praga

{% assign atractieid = site.new-travel | where: "cat", "atractie" | where: "id-oras", page.id-oras | sort: "position" %}
{% assign i = 0 %}
{% if atractieid %}
  <table>
    <tr>
      <th>ATRACTIE</th>
    </tr>
    {% for trip in atractieid limit: 30 %}
      {% capture i %}{{ i | plus: 1 }}{% endcapture %}
      <tr>
        <td><a href="#{{trip.folder}}">{{i}}. {{ trip.atractie }}</a></td>
      </tr>
    {% endfor %}
  </table>
{% endif %}

{% include a-anchor-backlink.html %}

---
## Galerie foto obiective turistice {{ page.oras }}

{% include galerie-travel.html %}

---
## Locuri de vizitat în Praga - Detalii

{% assign atractieid = site.new-travel | where: "cat", "atractie" | where: "id-oras", page.id-oras | sort: "position" %}
{% assign i = 0 %}
{% if atractieid %}
  {% for trip in atractieid limit: 30 %}
    {% capture i %}{{ i | plus: 1 }}{% endcapture %}
    
<div class="atr-hold">
<h3 id="{{trip.folder}}">{{i}}. {{trip.atractie}}</h3>
<img src="/assets/images/travel/{{trip.folder}}/{{trip.imagine}}" alt="{{trip.atractie}}" class="atr-img">
  <p>{{ trip.text-intro | truncate: 1000 }}<b><a href="{{trip.url}}">citește mai mult</a></b></p>
</div>
<hr class="hr-s1">
  {% endfor %}
{% endif %}

<style>
  .atr-img {
    max-width: 350px;
    float: left;
    margin-right: 15px;
    }
  .atr-hold {
    text-align: justify;
    }
  @media only screen and (max-width: 600px) {
 .atr-img {
    max-width: 100% !important;
    float: none !important;
    margin-right: 0px !important;
    width: 100% !important;
    } 
    .atr-hold {
    font-size: 16px !important;  
    }
}

</style>

