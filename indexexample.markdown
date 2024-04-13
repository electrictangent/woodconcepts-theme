---
layout: home
title: index
contacttitle: Contact us
contactdescription: Want a quote? Contact us via the form below and we will email you as soon as possible.
submitaction: /hello.php

hero:
  description: >-
    # Custom furniture tailored to yourself

    Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. 

    # Try some

    Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy.
  imageurl: /assets/img/hero.jpg
  button: Contact us
  buttonurl: /#contact-form

galleryitems:
  - title: Kitchen benchtop
    description: Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. 
    imageurl: /assets/img/kitchenbenchtop.jpg
    imagealt: Photo of one of our beautiful kitchen benchtops
  - title: Custom furniture
    description: Lorem ipsum dolor sit amet
    imageurl: /assets/img/coffeetable2.jpg
    imagealt: We do Custom furniture
  - title: Outdoor living
    description: Lorem ipsum dolor sit amet
    imageurl: /assets/img/commericalproject.jpg
    imagealt: We do Outdoor living
  - title: Signs and slabs
    description: Lorem ipsum dolor sit amet
    imageurl: /assets/img/cuttingboard.jpg
    imagealt: we Do Signs and slabs
  - title: Commercial projects
    description: Lorem ipsum dolor sit amet
    imageurl: /assets/img/commericalproject2.jpg
    imagealt: We do Commercial projects

test: >-
  This is a test

  # Interested?

  Give us a email or phone call.

---
{% include uielements/hero.html header="true" imageurl=page.hero.imageurl description=page.hero.description button=page.hero.button buttonurl=page.hero.buttonurl %}

{% include uielements/gallery.html galleryitems=page.galleryitems %}

{% include uielements/home-textbox.html text=page.test %}

