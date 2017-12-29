Pour démarrer le projet:
- Ouvrir Atom
- Ouvrir le terminal
- Ouvrir github-desktop
- Fetch les modifications depuis github-desktop
- $ `cd && cd Documents/Blog/ && npm run serve`
- Ouvrir `localhost:1313` dans chrome

Pour mettre à jour une modification:
- Ajouter un message de commit depuis github-desktop
- Cliquer sur `commit`
- Pusher les fichier modifiés
- `ctrl + c` dans le terminal pour éteindre le server
- $ `npm run deploy`

## Ajouter une image
Pour rajouter une image sur github, il faut d'abord se rendre sur l'autre repo.
Ensuite, l'url ressemblera à: `https://cdn.rawgit.com/crokmou/images/1.0.7/i/nom_de_l_image.jpg` pour uliser la bonne version, il faut remplacer `1.0.7` par `GIT_TAG` et la commande de build s'occupera de remplacer par le bon tag (ex: `https://cdn.rawgit.com/crokmou/images/GIT_TAG/i/nom_de_l_image.jpg`.
### Dans le contenu d'un article
 `{{< img src="URL_IMAGE" alt="EXPLICATION DE L'IMAGE" >}}`
### Dans le front matter d'un article (pour les recettes par exemple)
`![EXPLICATION DE L'IMAGE](URL_IMAGE)`

## Ajouter une gallerie dans le contenu de l'article

```
{{< gallery >}}
  {{< img src="https://cdn.rawgit.com/crokmou/images/1.0.7/i/voyage-nord-massif-vosges-france-chateau-sch%C5%93neck-crokmou-blog-cuisine-voyage-belgique-2.jpg" >}}
  {{< img src="https://cdn.rawgit.com/crokmou/images/1.0.7/i/voyage-nord-massif-vosges-france-chateau-sch%C5%93neck-crokmou-blog-cuisine-voyage-belgique-1.jpg" >}}
{{< /gallery >}}
```

## Mettre à jour l'index de recherche

Dans le terminal `cd && cd Documents/Blog/ && npm run index`