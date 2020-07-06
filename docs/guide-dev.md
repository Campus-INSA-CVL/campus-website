---
title: 👩‍💻 Guide pour les développeurs
sidebarDepth: 2
---

# Guide du Développeur

## Technologies utilisées

Ce projet, _le site campus de l'INSA Centre-Val de Loire_, est créé en utlisant le framework front-end [Nuxt.js](https://nuxtjs.org/) et son module [@nuxt/content](https://content.nuxtjs.org/). Nuxt.js est un framework gratuit et open source basé sur [Vue.js](https://vuejs.org/) et [Node.js](https://nodejs.org/). Pour le design général, le projet utilise [Vuetify](https://vuetifyjs.com), une bibliothèque UI.

**Vue.js** (aussi appelé plus simplement Vue), est un **framework JavaScript open-source** utilisé pour construire des interfaces utilisateur et des **applications web** monopages.

C'est grâce à l'ensemble de ces technologies que le site campus a pu voir le jour.

Le projet reprend la structure générale de `create-nuxt-app`.

> Afin de comprendre ce qui suit, il est essentiel d'avoir les notions de bases sur Nuxt.js et donc par extension des connaissances sur Vue.js. Aussi, le module @nuxt/content est l'élément clé du projet.

## Layouts

## Pages

On retrouve sur le site campus différentes routes.

|       Path        |      Name      | Function                                                                   |
| :---------------: | :------------: | :------------------------------------------------------------------------- |
|        `/`        |    Acceuil     | page initial du site                                                       |
| `/vie-etudiante`  | Vie Étudiante  | présente l'insa et les campus                                              |
|   `/federation`   |   Fédération   | présente l'ensemble des associations présente dans la fédération du campus |
|    `/services`    |    Services    | présente les différents services offerts par le BDE                        |
|   `/olympiades`   |   Olympiades   | présente les olympiades et permet de communiquer les scores des équipes    |
|     `/outils`     |     Outils     | présente les outils à disposition des étudiants                            |
| `/nous-contacter` | Nous Contacter | page de contacte du campus ou du webmaster                                 |
|    `/a-propos`    |    À Propos    | page sur le site                                                           |

### Acceuil

`Path: /`

`Content: /index/index.yaml`

Charge un fichier YAML afin d'ajouter le texte, changer les images... L'objectif est de garder l'utilisation d'un composant afin de pouvoir créer une page d'acceuil attirante tout en profitant de la facilité de changement du contenu.

### Vie Étudiante

`Path: /vie-etudiante/:tab`

`tab` est un paramètre qui permet de récuper le fichier Markdown qui correspond afin de l'afficher.

`Content: /vie-etudiante/**.md`

L'ensemble des fichiers Markdown sont récupérés et leur front matter permet de créer les onglets. Ainsi, l'ajout d'un fichier Markdown dans ce dossier avec le titre présent dans le front matter permet d'automatiquement générer une nouvelle route, le nom du fichier servant d'url (paramètre tab) !

**Exemple**

```md
---
<!-- content/vie-etudiante/new-tab.md -->
title: bi-campus <!-- titre utilisé dans les onglets -->
order: 1 <!-- place dans les onglets -->
---

# Lorem ipsum dolor

Vivamus sed enim ut magna lacinia lobortis.
```

### Fédération

> Il s'agit de la partie la plus complexe du site.

|                     Path                      |      Content (`/federation`)       |        Params        | Function                                                      |
| :-------------------------------------------: | :--------------------------------: | :------------------: | :------------------------------------------------------------ |
|                 `/federation`                 |           **index.yaml**           |         none         | Présentation de l'ensemble des pôles de la fédération         |
|           `/federation/:federation`           |     **/:federation/index.md**      |     _federation_     | Présentation d'une fédération                                 |
|       `/federation/:federation/equipe/`       |     **/:federation/equipe.md**     |     _federation_     | Présentation de l'équipe d'un pôle                            |
|    `/federation/:federation/associations/`    | **/:federation/associations.yaml** |     _federation_     | Présentation de l'ensemble des associations du pole           |
|     `/federation/:federation/sports/:tab`     |         **/sport/sports/**         | _federation_ , _tab_ | Présentation des différents sports, utilisé par le pôle sport |
| `/federation/:federation/representation/:tab` |     **/elus/representation/**      | _federation_, _tab_  | Présentation des différents conseils, utilisé par les élus    |
|  `/federation/:federation/association/:asso`  |  **/:federation/:asso/index.md**   | _federation_, _asso_ | Présentation d'une association                                |

:::tip
Les routes `sports/:tab` et `representation/:tab` sont similaires à [outils](#outils) ou [services](#services) au niveau fonctionnement. Ainsi, ils est possibles de s'**adapter** à chaque association
:::

En fonction de l'url et donc des paramètres, les données à aller chercher ne sont pas les mêmes.

[Voir les exemples](#exemples)

### Services

`Path: /services/:service?`

`service` est un paramètre qui permet de récuper le fichier Markdown qui correspond afin de l'afficher.

`Content: /services/**.md`

L'ensemble des fichiers Markdown sont récupérés et leur front matter permet de créer les cards. Ainsi, l'ajout d'un fichier Markdown dans ce dossier avec le titre et la description présente dans le front matter permet d'automatiquement générer une nouvelle route, le nom du fichier servant d'url (paramètre serivce) ! Le body est ensuite utilisé sur la page de l'outil.

:::tip
Il est aussi possible de définir une couleur poour la card (penser à ajouter la couleur dans le fichier de configuration de nuxt).
:::

**Exemple**

```md
---
title: cafet
description: Quisque vel finibus sapien, eu egestas tortor. Proin ultrices arcu eu massa rutrum, quis feugiat neque convallis.
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

**Exemple**

```md
---
title: olympiades
---

# Lorem ipsum dolor

Vivamus sed enim ut magna lacinia lobortis.
```

### Outils

`Path: /outils/:outil?`

`outil` est un paramètre qui permet de récuper le fichier Markdown qui correspond afin de l'afficher.

`Content: /outils/**.md`

L'ensemble des fichiers Markdown sont récupérés et leur front matter permet de créer les cards. Ainsi, l'ajout d'un fichier Markdown dans ce dossier avec le titre et la description présente dans le front matter permet d'automatiquement générer une nouvelle route, le nom du fichier servant d'url (paramètre outil) ! Le body est ensuite utilisé sur la page de l'outil.

:::tip
Il est aussi possible de définir une couleur poour la card (penser à ajouter la couleur dans le fichier de configuration de nuxt).
:::

**Exemple**

```md
---
title: alumni
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tincidunt lectus, ut accumsan diam.
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

## Exemples

:::tip
Pour la modification du contenu, des exemples sont disponibles dans le [guide pour les associations](/guide-associations.html)
:::

::: danger
L'utilisation de composants Vuetify dans les fichiers Markdown est possible mais il faut penser à l'importer dans le composant qui va l'afficher, car le treeeshaking ne pourra pas les voirs
:::

### Création d'un nouveau pôle

- Ajouter dans le fichier `/content/federation/index.yaml` le nouveau pôle

```yaml
federation:
  - path: federation/${nouveauPole}
    title: Nom Du Nouveau Pole
    description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    color: poleColor (ajouter aussi la couleur dans `nuxt.config.js`)
```

- Créer un nouveau dossier `/content/federation/${nouveauPole}` et les fichiers `index.md` et `equipe.md` dans ce dernier.

:::tip À Savoir
Le dossier va contenir l'enesemble des fichiers relatifs au pôle et l'ensemble des dossiers pour les associations
:::

- Créer un fichier `associations.yaml` qui va contenir la liste de l'ensemble des associations du pôle

- Dans le fichier `/layouts/default.vue`, ajouter l'association dans la config afin de mettre en place la toolbar.

### Création d'une association

- Ajouter l'association dans le fichier `associations.yaml` du pôle souhaité.

```diff
associations:
    - title: club robotique
      path: /federation/techniques/associations/club-robotique
      description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      color: techniquesColor
+   - title: La nouvelle asso !
+     path: /federation/techniques/associations/nouvelle-asso
+     description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
+     color: assoColor
```

- Créer un dossier, au même endroit que le fichier d'associations, portant le nom qui a été mis dans le champs path du fichier `associations.yaml`, donc `mkdir nouvelle-asso` dans ce cas.

- Ajouter un fichier `index.md` dans le dossier de l'association

### Création d'un service ou d'un outil

- Ajouter un fichier Markdown dans le dossier souhaité, `/content/outils` ou `/content/services`

:::warning
Le nom du fichier sera le nom dans l'url. Il est donc important de bien le choisir
:::

- Ajouter un front matter dans le fichier

```md
---
title: Nom du service ou de l'outil
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec tincidunt lectus, ut accumsan diam.
color: serviceOuOutilColor
---

# Lorem ipsum dolor

Vivamus sed enim ut magna lacinia lobortis.
```

### Création d'un nouvelle onglet (Vie Étudiante, Sports, Représentation)

- Ajouter un nouveau fichier Markdown dans le dossier correspondant, `/content/vie-etudiante` par exemple

:::warning
Le nom du fichier sera le nom dans l'url. Il est donc important de bien le choisir
:::

- Ajouter le front matter dans le fichier

```md
---
<!-- content/vie-etudiante/new-tab.md -->
title: bi-campus <!-- titre utilisé dans les onglets -->
order: 1 <!-- place dans les onglets, trié dans l'ordre croissant -->
---
```
