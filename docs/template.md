---
title: 📄 Template
sidebarDepth: 2
---

# Template

## Fédération

```yaml
# Liste de l'ensemble des pôles
federations:
  - path: lorem/ipsum
    title: lorem
    description:
    color: ipsumColor
```

## Pôle

```md
---
<!-- Présentation d'un pôle -->
title: pôle sport
---

# lorem
```

## Équipe

```md
---
<!-- Présentation d'une équipe -->

title: lorem
color: loremColor
team:
  bureau:
    - responsability: lorem       
      name: lorem
      description:
    - responsability: ipsum 
      name: ipsum
      description:
      avatar: federation/culturel/tresorier.png
---

# L'équipe

<team :team="team" :color="color"></team>
```

## Association

```yaml
# Liste de l'ensemble des associations d'un pôle
associations:
  - title: lorem
    path: /lorem/ipsum
    description:
    color: loremColor
```

```md
---
<!-- Présentation d'une association -->
title: lorem
color: loremColor
team:
  bureau:
    - responsability: lorem       
      name: lorem
      description:
    - responsability: ipsum 
      name: ipsum
      description:
      avatar: federation/culturel/tresorier.png
---

# lorem
```

## Service / Outil

```md
---
title: lorem
description:
color: loremColor
---

# Lorem
```

## Tab

```
---
title: lorem
order: 0
---

# lorem
```
