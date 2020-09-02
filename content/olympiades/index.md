---
title: olympiades
folderName: olympiades
color: primary
imagesName:
  - 'cerbere.jpg'
  - 'kraken.jpg'
  - 'minotaure.jpg'
  - 'phoenix.jpg'
  - 'sphinx.jpg'
winners:
  mars:
    - responsability: minotaure
      name: Armand Loiselle
      description:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
  février:
    - responsability: kraken
      name: Platt Babin
      description:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
  janvier:
    - responsability: cerbère
      name: Amarante Martel
      description:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      avatar: user-random-female.png
---

<div class="font-olympiades tracking-widest">

# Les Olympiades

</div>

> Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Principes

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue purus
eget nibh consequat mollis. Mauris ut pharetra ligula, eget molestie urna. Nam
dui mi, fringilla et rutrum in, aliquam sed augue. Vestibulum ac sapien eu lorem
semper tincidunt. Cras sit amet pretium lectus. Maecenas gravida vel velit quis
lobortis. Vestibulum at risus at ligula ullamcorper mattis a ac nisl. Nullam
quis porta leo, eget consequat lacus. Curabitur euismod gravida sapien eget
vestibulum. Duis ut vulputate metus, non malesuada magna. Duis vehicula velit ut
nibh finibus aliquam. Maecenas eget iaculis nibh, nec consequat diam. Praesent
consequat, nulla vel malesuada sagittis, orci nunc efficitur mauris, at cursus
ante erat vitae nulla. Donec scelerisque, ipsum sed dapibus tempus, tellus nisi
posuere justo, ac volutpat nisl velit sit amet sem.

<campus-center>
  <campus-carousel :names="imagesName" :folder-name="folderName"></campus-carousel>
</campus-center>

## Les défis du mois

<campus-center>
  <campus-responsive-image
    folder-name="olympiades"
    name="defis-mois-1.jpg"
    max-width="800"></campus-responsive-image>
</campus-center>

<campus-center>
  <campus-responsive-image
    folder-name="olympiades"
    name="defis-mois-2.jpg"
    max-width="800"></campus-responsive-image>
</campus-center>

## Les champions

<campus-team :team="winners" :color="color"></campus-team>

## Résultats

| familles  | rang | point |
| :-------: | :--: | :---: |
|  cerber   |  1   | 3000  |
|  sphinx   |  2   | 3000  |
|  kraken   |  3   | 3000  |
| minotaure |  4   | 3000  |
|  phoenix  |  5   | 3000  |
