---
title: 📝 Guide pour les associations
sidebarDepth: 3
---

# Guide pour les associations

L'objectif de ce guide est de vous montrer et expliquer vous pouvez **ajouter**
ou **modifier** du **contenu**, _comme le bureau de votre association par
exemple._

## Ce qu'il faut savoir avant de commencer

Tout d'abord, l'ensemble du code source du website est disponible
[ici](https://github.com/Campus-INSA-CVL/campus-website/tree/master/content). Ainsi, pour les plus
connaisseurs de GitHub, vous pouvez simplement soumettre une Pull Request afin
de modifier les sources du website. Pour les autres, nous allons voir ensemble
comment soumettre vos modifications.

::: warning N'oubliez pas

Pensez à prévenir le respo info ou le respo asso des changements que vous allez
réaliser afin de s'assurer que les changements sont bien voulus et qu'ils
puissent être acceptés.

:::

## Fonctionnement

Afin de simplifier le process de création et de maintien du site, les pages
créées ont pour objectif de **récupérer le contenu de fichiers textes** afin de
les afficher sur l'écran de l'utilisateur. Ainsi, vous n'aurez qu'à **modifier**
de **petits fichiers textes**. Rien de plus simple ! Cela permet aussi de
s'affranchir des notions de droits utilisateurs et donc de faciliter les
passations. Aussi, le président, le secrétaire et plus généralement n'importe
qui, sous réserve d'acception des modifications par le respo info ou respo asso,
sera en mesure de mettre à jour le contenu du site !

::: tip En savoir plus

Vous pouvez aller lire le [Guide pour les développeur](/guide-dev.html)

:::

## Localisation du contenu

Afin de voir le fichier brut, il vous suffit de vous rendre dans le dossier
`content` trouvable sur
[GitHub](https://github.com/Campus-INSA-CVL/campus-website/). Ensuite,
l'arborescence est assez facile à comprendre puisqu'il s'agit de la même que
celle que l'on peut suivre sur le website campus. Les fichiers qui nous
intéressent le plus sont les fichiers dont l'extension est `md`.

### Arborescence

```
content
|---federation
    |----fichiers et dossiers pour l'ensemble des fédérations
    index
    |----fichier pour l'accueil
    olympiade
    |----fichiers pour les olympiades
    outils
    |----fichiers pour présenter les outils
    services
    |----fichiers pour présenter les services
    vie-étudiante
    |----fichiers de présentation de l'INSA et des campus
```

## Modification du contenu

:::tip Création de nouvelles routes

Pour la création d'une nouvelle association, outil ou service (et onglet) ou une
modification technique, nous vous invitons à prendre contact avec le BDE

:::

:::tip Expert

Pour les créateurs experts, vous pouvez explorer
[cette partie](https://content.nuxtjs.org/writing/) du module utilisé afin de
comprendre les possibilités offertes par le Markdown. Il notamment possible
d'utiliser le front matter afin de stocker des données utilisables par les
composants. Il est aussi possible d'utiliser des composants custom ou ceux de
[Vuetify](https://vuetifyjs.com).

:::

Il existe un point commun entre toutes ces modifications, elles reposent sur la
modification d'un fichier Markdown. Il s'agit de fichier texte qui vont
permettre de mettre en place de la sémantique sur votre texte, c'est à dire ce
qui est le titre, les paragraphes, un tableau et pleins de choses encore. Vous
n'avez pas à vous occuper du design.

Pour en **savoir plus** sur le Markdown:
[Getting Started](https://www.markdownguide.org/getting-started/)

Pour **apprendre la syntaxe** (très simple) du Markdown:
[Basic Syntax](https://www.markdownguide.org/basic-syntax/)

Pour **écrire du markdown**: [Dillinger](https://dillinger.io/)

### Comment modifier le contenu ?

- Demander au respo info de réaliser les modifications souhaitées

**ou**

- utiliser [codesandbox](/codesandbox.html) pour effectuer vos modifications
- donner vos modifications aux respos

**ou**

- Aller sur [GitHub](https://github.com/Campus-INSA-CVL/campus-website/)
- Parcourir l'arborescence pour trouver le fichier à modifier
- Cliquer sur le crayon, en haut à droite du document
- Modifier
- Envoyer les changements en créant une nouvelle branche afin de générer une
  nouvelle pull request et en expliquant la motivation des changements dans la
  description

**ou**

- Effectuer un fork du repo sur votre machine de travail
- Effectuer les modifications en créant une nouvelle branche
- Effectuer une pull request

### Modification de la présentation d'un pôle

- Dans le dossier fédération, se rendre dans le dossier du pôle
- Apporter les modifications au fichier `index.md`

**Exemple**

```md
---
title:
  pôle culturel <!-- Sera utilisé pour le nom de la card sur la page fédération
  -->
---

# hello
```

### Modification de l'équipe d'un pôle/association

- Dans le dossier fédération, se rendre dans le dossier du pôle
- Apporter les modifications au fichier `équipe.md`

ou

- Se rendre dans le dossier de votre association
- Apporter les modifications au fichier `index.md`

::: tip Gestion des photos de profil Il est possible de mettre une image
personnalisée pour chaque personne de l'équipe.

- Placer votre image dans le dossier assets puis dans le dossier du nom de votre
  fédération (puis de votre association si besoin)
- Ajouter un champs avatar en indiquant le chemin vers votre image

**Exemple**

Si votre image `president.jpg` se situe dans le dossier `bde` du dossier
`federation` du dossier `assets` alors il faut ajouter:
`avatar: federation/bde/president.jpg`

:::

**Exemple**

```md
---
title: équipe du pôle culturel <!-- utilsé pour changer le nom de l'onglet -->
color: culturelColor
team: <!-- données utilisées pour la création visuel de la team -->
  bureau:
    - responsability: président
      name: Jules Perrault
      description: responsable de l'association
    - responsability: trésorier
      name: Courtland Vaillancour
      description: Phasellus et laoreet augue. Aliquam tristique nisi sed velit faucibus auctor. Nulla turpis diam, volutpat nec nisl vitae.
      avatar: federation/culturel/tresorier.png
  communication:
    - responsability: responsable communication
      name: Charlotte Beaudoin
      description: gère son équipe de communication afin d'augmenter la visibilité de l'association
---

# L'équipe

<team :team="team" :color="color"></team>
```

### Modification d'une association

- Dans le dossier fédération, se rendre dans le dossier du pôle qui fédère son
  association
- Chercher ensuite son association dans l'ensemble des dossiers (si elle n'est
  pas visible, demandez au respo info de la faire)
- Modifier le fichier `index.md`

**Exemple**

```md
---
title: INSAction <!-- utilsé pour changer le nom de l'onglet -->
color: culturelColor
team: <!-- données utilisées pour la création visuel de la team -->
  bureau:
    - responsability: président
      name: Michel Harquin
      description: responsable de l'association
    - responsability: trésorier
      name: Courtland Vaillancour
      description: Phasellus et laoreet augue. Aliquam tristique nisi sed velit faucibus auctor. Nulla turpis diam, volutpat nec nisl vitae.
      avatar: federation/culturel/tresorier.png
  communication:
    - responsability: responsable communication
      name: Charlotte Beaudoin
      description: gère son équipe de communication afin d'augmenter la visibilité de l'association
social:
  facebook: 'https://facebook.com'
  instagram: 'https://instagram.com'
  twitter: 'https://twitter.com'
  twitch: 'https://twitch.com'
  snapchat: 'https://snapchat.com'
  discord: 'https://discord.com'
---

# Bienvenue dans INSAction !

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

# Les réseaux

<social :social="social" :color="color"></social>

# L'équipe

<team :team="team" :color="color"></team>
```

::: tip Gestion des photos de profil Il est possible de mettre une image
personnalisée pour chaque personne de l'équipe.

- Placer votre image dans le dossier assets puis dans le dossier du nom de votre
  fédération (puis de votre association si besoin)
- Ajouter un champs avatar en indiquant le chemin vers votre image

**Exemple**

Si votre image `president.jpg` se situe dans le dossier `bde` du dossier
`federation` du dossier `assets` alors il faut ajouter:
`avatar: federation/bde/president.jpg`

:::

### Modification d'un outil ou d'un service

- Trouver le fichier dans le dossier correspondant
- Procéder aux modifications

**Exemple**

```md
---
title: alumni <!-- utilsé pour changer le nom de la card -->
description:
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <!-- utilsé pour
  changer la description présente sur la card -->
color:
  alumniColor <!-- utilsé pour changer la couleur présente de la card (en
  informer le respo info afin qu'il procède aux changements) -->
---

# lorem upsum

Quisque luctus odio et est maximus posuere id nec quam.
```

### Modification d'un onglet, Vie Étudiante / Sports / Représentation

- Trouver le fichier dans le dossier correspondant
- Procéder aux modifications

**Exemple**

```md
---
title: blois <!-- utilsé pour changer le nom de l'onglet -->
order: 2 <!-- utilsé pour ranger les onglets -->
---

# Lorem ipsum dolor sit

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

### Ajout de documents téléchargeables

- Se rendre dans le dossier de votre fédération ou de votre association dans le
  dossier `static`.
- Ajouter votre fichier
- Se rendre dans le fichier md dans lequel vous souhaitez ajouter le fichier
  téléchargeable
- Ajouter dans le front matter un tableau d'object contenant le _name_ à
  afficher et le _link_ du fichier
- Ajouter dans le _body_ le composant `DownloadLinks`

**Exemple**

```md
---
title: documents-utiles
description:
  Tu trouveras ici tout un tas de documents utiles pour ta vie associative ou au
  sein de la fédération !
color: documentsColor
filesFederation:
  - name: démission du conseil d'administration
    link: /outils/demission-ca.pdf
  - name: démission association
    link: /outils/demission-association.pdf
  - name: défraiement kilomètre
    link: /outils/defraiement-kilometrique.pdf
  - name: lettre de procuration
    link: /outils/lettre-procuration.pdf
  - name: liste émargement
    link: /outils/liste-emargement.pdf
---

# Outils Fédération

Voici les documents qui peuvent servir à tout membre de la fédération :

_cliquer pour télécharger_

<DownloadLinks :files="filesFederation"></DownloadLinks>
```

## Les blogs

Le blog vous permet de communiquer au travers de fichiers textes riches,
permanents et facilement retrouvables. Il y en a un par fédération. Pour
commencer à alimenter votre blog, rien de plus simple !

### Création d'un article

- Aller dans votre fédération puis dans le dossier blog (si celui-ci n'est pas
  présent, demander au respo info de créer un blog pour votre fédération)
- Ajouter un fichier Markdown avec `title, description, color, author` dans
  l'en-tête du fichier (voir exemple)
- Remplir votre fichier avec les informations que vous souhaitez !

::: warning Nommer ses articles

L'url sera formée par le nom du fichier Markdown présent dans le dossier blog.
Ainsi, il est important de bien le nommer. **Exemple:**
`/2020-07-15-mon-nouvel-article-de-blog`

:::

```md
---
title: Le super blog
description: Mauris congue orci eget ornare scelerisque.
color: culturelColor
author:
  name: 'Insarpère'
---

# Le super blog

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

## Les composants

> Pour enrichir votre présentation

Coming soon !
