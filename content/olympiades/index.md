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
    - name: Marine JOSSET
      avatar: olympiades/responsables/marine.jpg
    - name: Hugo ALBERTINI
      avatar: olympiades/responsables/hugo.jpg
    - name: Valentine AGUILLE
      avatar: olympiades/responsables/valentine.jpg
  Sphinx:
    - name: Audrey GARCIA
    - name: Grégoire FORGES
      avatar: olympiades/responsables/gregoire.jpg
  Minotaures:
    - name: Louis BOUTONNET
      avatar: olympiades/responsables/louis.jpg
    - name: Lucie LABASTIE
      avatar: olympiades/responsables/lucie.jpg
    - name: Aude JACQUARD
      avatar: olympiades/responsables/aude.jpg
  Phoenix:
    - name: Nicolas LAVAL
      avatar: olympiades/responsables/nicolas-laval.jpg
    - name: Hugo LACREU
      avatar: olympiades/responsables/hugo-lacreu.jpg
  Kraken:
    - name: Antonin LE GUEN
      avatar: olympiades/responsables/antonin-le-guen.jpg
    - name: Maxence GRESSENT
      avatar: olympiades/responsables/maxence.jpg
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

## Les défis du mois d'avril

<div class="list-lightning font-olympiades">

Pour vous confronter entre familles, la fine fleur de l’Olympe met au point des
défis que vous devez réaliser tous les mois. Chaque mois, une liste de 15 à 20
défis est publiée sur la page Facebook de votre famille. Chaque défi vaut un
certain nombre de points selon sa difficulté, la famille qui obtiendra le plus
de points à la fin de l’année remportera alors les Olympiades. Les défis sont de
tout type : culinaires, sportifs, artistiques … et sont ainsi adressés à tout le
monde. Pour valider votre défi, vous devez le poster sur le groupe Facebook de
votre famille sous une forme adapté selon le défi (vidéo, photo, texte …).
N’oubliez pas que les défis sont avant tout l’occasion de passer un bon moment,
de faire des rencontres, de s’essayer à de nouvelles disciplines et de
décompresser des cours.

## Défis Pâques

- Venir en cours déguisé en lapin (150 points)
- Trouver l'oeuf de Pâques caché dans l'INSA (200 points)

## Défis Divers

- Faire un bain de minuit dans une fontaine (100 points)
- Remplir une salle d'origamis (200 points)
- Faire le plus grand couscous de famille pour iftar (5 points par personne présente)
- Manger une cuillère de la Vegemite de Zélie (150 points)

## Défis Cohésion

- Organiser une soirée bi-campus pile entre les deux campus (400 points)
- Venir au cours de tango de Paderi (5 points par personne de sa famille)

## Défis Poisson d'Avril

- Coller un poisson d'avril dans le dos de Mabilat/Maki (150 points)
- Pêcher un thon dans la Loire (200 points)

## Défis Sportif

- Faire des pompes en CM (2 points par pompe)

## Défi RU

- Battre Paul Laurent (30 points)
- Manger assis sur la table et le plateau sur la chaise (50 points)

</div>

## Les respos

<div class="font-olympiades">

Chaque famille dispose de responsables. Ils sont chargés de veiller à votre
engagement au sein de la famille mais surtout ils sont la pour répondre à toutes
vos questions sur les défis ou sur leur validation.

</div>

<campus-team :team="responsables" :color="color"></campus-team>

## Olympiens du mois et mentions honorables

<div class="font-olympiades">

Tout les mois, l’Olympe élit parmi vous l’olympiens le plus valeureux, que ce
soit par le nombre de défis réalisés, la difficulté de ces derniers ou la
qualité de la réalisation. Il se peut aussi que d’autres olympiens nous
impressionnent sur un défi en particulier, nous leur adressons alors une mention
honorable

</div>

<campus-team :team="winners" :color="color"></campus-team>

## Best of

<div class="font-olympiades">

Chaque fin de mois un best of est réalisé mettant en valeurs les meilleurs défis
réalisés pendant le mois.

</div>

## Résultats

| Familles  | Rang | Points |
| :-------: | :--: | :----: |
| Cerbères  |  1   |  2825  |
|  Sphinx   |  2   |  2575  |
|  Phoenix  |  3   |  2375  |
|  Kraken   |  4   |  2275  |
| Minotaure |  5   |  2250  |
