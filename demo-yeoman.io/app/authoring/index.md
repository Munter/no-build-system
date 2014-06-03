---
layout: documentation
title: Writing Your Own Generator
type: list
---

<div id="posts">
  {% for post in site.pages %}
    {% if post.category == 'authoring' %}
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      {% if post.excerpt %}
        <p>{{ post.excerpt }}</p>
      {% else %}
        <p>{{ post.content | strip_html | truncate: 140 }}</p>
      {% endif %}
      <hr>
    {% endif %}
  {% endfor %}
</div>
