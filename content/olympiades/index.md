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
winners: []
---

<div class="font-olympiades">

# Les Olympiades

</div>

<campus-center>
  <campus-carousel :names="imagesName" :folder-name="folderName"></campus-carousel>
</campus-center>

## Les défis du mois

<div class="list-lightning font-olympiades">

Les défis arrivent très vites !

</div>

## Les champions

<campus-team :team="winners" :color="color"></campus-team>

## Résultats

| familles  | rang | point |
| :-------: | :--: | :---: |
| cerbères  |  1   |   0   |
|  sphinx   |  1   |   0   |
|  kraken   |  1   |   0   |
| minotaure |  1   |   0   |
|  phoenix  |  1   |   0   |
