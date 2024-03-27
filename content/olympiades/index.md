---
title: olympiades
folderName: olympiades
description:
  Olympiennes, olympiens ! La guerre fait rage au sein de l’Olympe, cinq grandes
  familles se font face dans un combat acharné pour obtenir la bénédiction des
  dieux. Et c’est vous qui avez été sélectionnés en tant que guerriers pour
  mener à bien ce combat
color: primary
imagesName:
  - 'cerbere.jpg'
  - 'kraken.jpg'
  - 'minotaure.jpg'
  - 'phoenix.jpg'
  - 'sphinx.jpg'
responsables:
  Cerbères:
    - name: Chloé Fuchs
      avatar:
  Sphinx:
    - name: Lucas Levayer
      avatar: additional_pic/lucas_levayer.jpg
  Minotaures:
    - name: Fanny Osman
      avatar: federation/BDE/Animation/Fanny Osman.jpg
  Phoenix:
    - name: Raja Khessib
      avatar:
  Kraken:
    - name: Gaïa Pelat
      avatar: additional_pic/gaia_pelat.jpg
winners: []
---

<div class="font-olympiades">

# Les Olympiades

</div>

## Présentation

<div class="font-olympiades">

Olympiennes, olympiens ! La guerre fait rage au sein de l’Olympe, cinq grandes
familles se font face dans un combat acharné pour obtenir la bénédiction des
dieux. Et c’est vous qui avez été sélectionnés en tant que guerriers pour mener
à bien ce combat. Il faudra vous montrer valeureux, fort et sur-motivés pour
prouver votre place dans votre famille et attirer la curiosité des dieux ! Nous
attendons beaucoup de vous en cette année 2020-2021 et on espère que vous serez
au rendez-vous !

</div>

<campus-center>
  <campus-carousel :names="imagesName" :folder-name="folderName"></campus-carousel>
</campus-center>


</div>

## Les respos

<div class="font-olympiades">

Chaque famille dispose de responsables. Ils sont chargés de veiller à votre
engagement au sein de la famille mais surtout ils sont la pour répondre à toutes
vos questions sur les défis ou sur leur validation.

</div>

<campus-team :team="responsables" :color="color"></campus-team>


</div>

<campus-team :team="winners" :color="color"></campus-team>

## Best of

<div class="font-olympiades">

Chaque fin de mois un best of est réalisé mettant en valeurs les meilleurs défis
réalisés pendant le mois.

</div>

