---
title: 👩‍💻 Guide pour les développeurs
sidebarDepth: 2
---

# Guide du Développeur

## Technologies utilisées

Ce projet, _le site campus de l'INSA Centre-Val de Loire_, est créé en utilisant
le framework front-end [Nuxt.js](https://nuxtjs.org/) et son module
[@nuxt/content](https://content.nuxtjs.org/). Nuxt.js est un framework gratuit
et open source basé sur [Vue.js](https://vuejs.org/) et
[Node.js](https://nodejs.org/). Pour le design général, le projet utilise
[Vuetify](https://vuetifyjs.com), une bibliothèque UI.

**Vue.js** (aussi appelé plus simplement Vue), est un **framework JavaScript
open-source** utilisé pour construire des interfaces utilisateur et des
**applications web** monopage.

C'est grâce à l'ensemble de ces technologies que le site campus a pu voir le
jour.

Le projet reprend la structure générale de `create-nuxt-app`.

> Afin de comprendre ce qui suit, il est essentiel d'avoir les notions de bases
> sur Nuxt.js et donc par extension des connaissances sur Vue.js. Aussi, le
> module @nuxt/content est l'élément clé du projet.

## Layouts

### default

En fonction de l'url, ce layout va s'adapter. En effet, pour permettre une
navigation plus aisé, une extension de la navbar fait son apparition lorsque
l'utilisateur accède une card (fédération, outils, services).

Il est possible de modifier l'apparence directement depuis le composant
`Header`. Cependant, dans le layout default, une configuration lui est passé
afin de faciliter sa modification, dans l'objet `config`. Le nom de l'object
dans config doit être le même que le nom passé dans l'url, comme le paramètre
fédération ou outils ou services.

Champs disponibles en fonction du type de l'extension

|    type     | fields                           |
| :---------: | -------------------------------- |
| association | `type, title, color, path, btns` |
|    page     | `type, title, path`              |

Propriété disponible

| Fields  |     Type     | Property                  | Functions                                                          |
| :-----: | :----------: | ------------------------- | ------------------------------------------------------------------ |
| `type`  | `association |                           | page`                                                              | none | Permet de déterminer le type d'extension à afficher |
| `title` |   `string`   | none                      | Permet de définir le titre, à droite, de l'extension               |
| `color` |   `string`   | none                      | Permet de définir la couleur général de l'extension                |
| `path`  |   `object`   | {main, secondary?}        | Permet de définir le chemin de redirection du titre de l'extension |
| `btns`  |   `object`   | {name, path, icon, style} | Permet de créer les boutons                                        |

Propriété disponible pour le champs **btns**

| Fields  |   Type   | Property                                  | Functions                                                                                             |
| :-----: | :------: | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `name`  | `string` | none                                      | Permet de définir le nom du bouton                                                                    |
| `path`  | `string` | none                                      | Permet de définir le chemin de redirection du bouton (suite de celui passé dans `path` précédemment ) |
| `icon`  | `string` | none                                      | Permet de définir l'icon du bouton                                                                    |
| `style` | `object` | { outlined: Boolean, depressed: Boolean } | Permet de définir le style du bouton                                                                  |

Exemple

```js
config: {
  culturel: {
    type: 'association',
    title: 'pôle culturel',
    color: 'culturelColor',
    path: {
      main: 'federation',
      secondary: 'culturel',
    },
    btns: [
      {
        name: "l'équipe",
        path: 'equipe',
        icon: 'mdiAccountGroup',
        style: { outlined: true, depressed: false },
      },
      {
        name: 'les associations',
        path: 'associations',
        icon: 'mdiFileTree',
        style: { outlined: false, depressed: true },
      },
      {
        name: 'le blog',
        path: 'blog',
        icon: 'mdiTextBoxMultiple',
        style: { outlined: false, depressed: true },
      },
    ],
  },
  services: {
    type: 'page',
    title: 'services',
    path: {
      main: 'services',
    },
  },
}
```

::: warning Ajout d'un icon

Lors de l'ajout d'un icon qui n'est pas déjà implémenté, il est important de
l'importer

:::

## Pages

On retrouve sur le site campus différentes routes.

|       Path        |      Name      | Function                                                                   |
| :---------------: | :------------: | :------------------------------------------------------------------------- |
|        `/`        |    Accueil     | page initial du site                                                       |
| `/vie-etudiante`  | Vie Étudiante  | présente l'insa et les campus                                              |
|   `/federation`   |   Fédération   | présente l'ensemble des associations présente dans la fédération du campus |
|    `/services`    |    Services    | présente les différents services offerts par le BDE                        |
|   `/olympiades`   |   Olympiades   | présente les olympiades et permet de communiquer les scores des équipes    |
|     `/outils`     |     Outils     | présente les outils à disposition des étudiants                            |
| `/nous-contacter` | Nous Contacter | page de contacte du campus ou du webmaster                                 |
|    `/a-propos`    |    À Propos    | page sur le site                                                           |

### Accueil

`Path: /`

`Content: /index/index.yaml`

Charge un fichier YAML afin d'ajouter le texte, changer les images... L'objectif
est de garder l'utilisation d'un composant afin de pouvoir créer une page
d'accueil attirante tout en profitant de la facilité de changement du contenu.

### Vie Étudiante

`Path: /vie-etudiante/:tab`

`tab` est un paramètre qui permet de récupérer le fichier Markdown qui
correspond afin de l'afficher.

`Content: /vie-etudiante/**.md`

L'ensemble des fichiers Markdown sont récupérés et leur front matter permet de
créer les onglets. Ainsi, l'ajout d'un fichier Markdown dans ce dossier avec le
titre présent dans le front matter permet d'automatiquement générer une nouvelle
route, le nom du fichier servant d'url (paramètre tab) !

Exemple

```md
---
<!-- content/vie-etudiante/new-tab.md -->
title: bi-campus <!-- titre utilisé dans les onglets -->
order: 1 <!-- place dans les onglets -->
---

# Lorem ipsum dolor

Vivamus sed enim ut magna lacinia lobortis.
```

### Représentation

`Path: /representation/:representation?`

`representation` est un paramètre qui permet de récupérer le fichier Markdown
qui correspond afin de l'afficher.

`Content: /representation/**.md`

L'ensemble des fichiers Markdown sont récupérés et leur front matter permet de
créer les cards. Ainsi, l'ajout d'un fichier Markdown dans ce dossier avec le
titre et la description présente dans le front matter permet d'automatiquement
générer une nouvelle route, le nom du fichier servant d'url (paramètre service)
! Le body est ensuite utilisé sur la page de l'outil.

Exemple

```md
---
title: bnei
order: 1
description:
  Quisque vel finibus sapien, eu egestas tortor. Proin ultrices arcu eu massa
  rutrum, quis feugiat neque convallis.
color: cafetColor
---

# Lorem ipsum dolor

Vivamus sed enim ut magna lacinia lobortis.
```

### Fédération

> Il s'agit de la partie la plus complexe du site.

|                     Path                      |     Content (`/federation`)     |        Params        | Function                                                      |
| :-------------------------------------------: | :-----------------------------: | :------------------: | :------------------------------------------------------------ |
|                 `/federation`                 |            **/\*\***            |         none         | Présentation de l'ensemble des pôles de la fédération         |
|           `/federation/:federation`           |    **/:federation/index.md**    |     _federation_     | Présentation d'une fédération                                 |
|       `/federation/:federation/equipe/`       |   **/:federation/equipe.md**    |     _federation_     | Présentation de l'équipe d'un pôle                            |
|    `/federation/:federation/associations/`    |      **/:federation/\*\***      |     _federation_     | Présentation de l'ensemble des associations du pole           |
|     `/federation/:federation/sports/:tab`     |       **/sport/sports/**        | _federation_ , _tab_ | Présentation des différents sports, utilisé par le pôle sport |
| `/federation/:federation/representation/:tab` |    **/elus/representation/**    | _federation_, _tab_  | Présentation des différents conseils, utilisé par les élus    |
|  `/federation/:federation/association/:asso`  | **/:federation/:asso/index.md** | _federation_, _asso_ | Présentation d'une association                                |

:::tip

Les routes `sports/:tab` et `representation/:tab` sont similaires à
[outils](#outils) ou [services](#services) au niveau fonctionnement. Ainsi, ils
est possibles de s'**adapter** à chaque association

:::

En fonction de l'url et donc des paramètres, les données à aller chercher ne
sont pas les mêmes.

[Voir les exemples](#exemples)

### Services

`Path: /services/:service?`

`service` est un paramètre qui permet de récupérer le fichier Markdown qui
correspond afin de l'afficher.

`Content: /services/**.md`

L'ensemble des fichiers Markdown sont récupérés et leur front matter permet de
créer les cards. Ainsi, l'ajout d'un fichier Markdown dans ce dossier avec le
titre et la description présente dans le front matter permet d'automatiquement
générer une nouvelle route, le nom du fichier servant d'url (paramètre service)
! Le body est ensuite utilisé sur la page de l'outil.

:::tip

Il est aussi possible de définir une couleur pour la card (penser à ajouter la
couleur dans le fichier de configuration de nuxt).

:::

Exemple

```md
---
title: cafet
description:
  Quisque vel finibus sapien, eu egestas tortor. Proin ultrices arcu eu massa
  rutrum, quis feugiat neque convallis.
color: cafetColor
---

# Lorem ipsum dolor

Vivamus sed enim ut magna lacinia lobortis.
```

**Résultat**
<img :src="$withBase('/services/card.jpg')" alt="résultat de l'exemple">

### Olympiades

`Path: /olympiades/`

`Content: /olympiades/index.md`

Une seule page et donc un seul fichier Markdown à charger et à afficher.

Exemple

```md
---
title: olympiades
---

# Lorem ipsum dolor

Vivamus sed enim ut magna lacinia lobortis.
```

### Outils

`Path: /outils/:outil?`

`outil` est un paramètre qui permet de récupérer le fichier Markdown qui
correspond afin de l'afficher.

`Content: /outils/**.md`

L'ensemble des fichiers Markdown sont récupérés et leur front matter permet de
créer les cards. Ainsi, l'ajout d'un fichier Markdown dans ce dossier avec le
titre et la description présente dans le front matter permet d'automatiquement
générer une nouvelle route, le nom du fichier servant d'url (paramètre outil) !
Le body est ensuite utilisé sur la page de l'outil.

:::tip

Il est aussi possible de définir une couleur poour la card (penser à ajouter la
couleur dans le fichier de configuration de nuxt).

:::

Exemple

```md
---
title: alumni
description:
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tincidunt
  lectus, ut accumsan diam.
color: alumniColor
---

# Lorem ipsum dolor

Vivamus sed enim ut magna lacinia lobortis.
```

**Résultat**
<img :src="$withBase('/outils/card.jpg')" alt="résultat de l'exemple">

### Nous Contacter

`Path: /nous-contacter/`

`Content: none`

Il s'agit simplement d'un composant, pas de chargement de Markdown

### À Propos

`Path: /a-propos/`

`Content: none`

Il s'agit simplement d'un composant, pas de chargement de Markdown

## Gestion des images

Il existe 3 types d'images sur le site campus:

- les logos
- les photos de profil
- les autres photos

### Tailes

| Nom              | Size               |
| ---------------- | ------------------ |
| Logo             | 500\*500           |
| Photos de profil | 150\*150           |
| Autres photos    | 1000\*x ou x\*1000 |

### Recadrage et compression

Pour recadrer les images, l'outils
[PowerToys](https://github.com/microsoft/PowerToys) est extrêmement performant !
Il permet sous Windows de resize les images directement depuis l'explorateur de
fichiers, et plusieurs d'un coup si besoin !

::: tip

Pour les photos de profil, il est conseiller de les recarder en carré au
préalable avant de les réduire pour s'assurer que l'on garde bien une photo
cadré !

:::

Une fois les images resize, il faut les passez au compresseur. Le mieux est
d'utiliser [Image Compressor](https://imagecompressor.com/)

### Pourquoi retailler les images et les compresser

C'est assez simple ! Cela permet de charger les images plus rapidement mais
aussi d'économiser de la bande passante ! En effet, cela ne sert à rien d'avoir
uen image immense à charger si elle est affiché en petit sur l'écran de
l'utilisateur !

## Exemples

::: tip

Pour la modification du contenu, des exemples sont disponibles dans le
[guide pour les associations](/guide-associations.html)

:::

::: danger

L'utilisation de composants Vuetify dans les fichiers Markdown est possible mais
il faut penser à l'importer dans le composant qui va l'afficher, car le
treeeshaking ne pourra pas les voir

:::

### Création d'un nouveau pôle

- Ajouter, dans le dossier `content/federation`, un nouveau dossier avec le nom
  du pôle, qui sera utilisé dans l'URL
- Ajouter un fichier `index.md` dans le dossier que vous avez créé

:::tip À Savoir

Le dossier va contenir l'ensemble des fichiers relatifs au pôle et l'ensemble
des dossiers pour les associations

:::

- Créer un dossier `associations` qui va contenir la liste de l'ensemble des
  associations du pôle
- Dans le fichier `/layouts/default.vue`, ajouter le pôle dans la config afin de
  mettre en place la toolbar.

### Création d'une association

- Créer un dossier avec le nom de l'association dans le dossier `association`
- Ajouter un fichier `index.md` dans le dossier de l'association
- Compléter le fichier en utilisant le tuto des associatins

### Création d'un service ou d'un outil

- Ajouter un fichier Markdown dans le dossier souhaité, `/content/outils` ou
  `/content/services`

:::warning

Le nom du fichier sera le nom dans l'url. Il est donc important de bien le
choisir

:::

- Ajouter un front matter dans le fichier

```md
---
title: Nom du service ou de l'outil
description:
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tincidunt
  lectus, ut accumsan diam.
color: serviceOuOutilColor
---

# Lorem ipsum dolor

Vivamus sed enim ut magna lacinia lobortis.
```

### Création d'un nouvelle onglet (Vie Étudiante, Sports, Représentation)

- Ajouter un nouveau fichier Markdown dans le dossier correspondant,
  `/content/vie-etudiante` par exemple

:::warning

Le nom du fichier sera le nom dans l'url. Il est donc important de bien le
choisir

:::

- Ajouter le front matter dans le fichier

```md
---
<!-- content/vie-etudiante/new-tab.md -->
title: bi-campus <!-- titre utilisé dans les onglets -->
order: 1 <!-- place dans les onglets, trié dans l'ordre croissant -->
---
```

### Création d'un blog

::: tip À savoir

Les blogs se font par pôles et non par association, mais une association peut
publier dans le blog de son pôle

:::

- Ajouter un dossier `blog` dans la fédération désirée
- Ajouter le bouton blog dans le config de la fédération dans le layout
- Ajouter le pôle dans la base de génération des flux RSS

Exemple

```js
// nuxt.config.js
feed: {
  data: [
    {
      path: 'nom du pôle (utiliser le nom du dossier)',
      title: 'Le titre du flux',
      description: 'La description du flux',
    },
  ],
  factory: (data) ...
}
```

- Ajouter le path du dossier du blog dans le sitemap

Exemple

```js
// nuxt.config.js
sitemap: {
  routes: async () => {
    const { $content } = require('@nuxt/content')
    const dynRoutes = [
      ...
      '/federation/culturel/blog',
    ]
    let path = []

    for await (const route of dynRoutes) ...
  }
}
```

- Ajouter votre premier article (ne pas laisser le dossier blog vide)

::: warning Nommer ses articles

L'url sera formée par le nom du fichier Markdown présent dans le dossier blog.
Ainsi, il est important de bien le nommer. **Exemple:**
`/2020-07-15-mon-nouvel-article-de-blog`

:::

## Les composants

Afin d'enrichir les pages des associations, il a été crée des composants qui
peuvent être utilisé dans les fichiers markdown. En effet,
[Nuxt Content](https://content.nuxtjs.org/writing#vue-components) permet cela !
Ainsi, il est prévu que les composants développés pour les associations soit
stockés dans `components/campus`.

Pour gérer le contenu des composants, il faut utiliser le front-matter du
fichier de l'association. Ainsi, on utilisera des props dans les composants.

Aussi, il faut veiller à mettre à jour la documentation et le générateur de
templates !
