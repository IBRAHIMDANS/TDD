### Problème

Nous sommes un site e-commerce.
Au moment de payer, le client final doit enregistrer son numéro de telephone.
Afin de ne pas provoquer une mauvaise experience utilisateur, 
nous laissons le client mettre son numero dans n'importe quel format valide.

Exemple:

- 06.01.02.03.04
- 06-01-02-03-04
- +33601020304
- 0033601020304
- 0601020304

Dans tous les cas, ce que nous voulons stocker de notre côté doit être sous la forme

0601020304

### Implementation

Ecrivons une classe `phoneNumberSanitizer` qui expose une methode `sanitize` prenant en parametre une chaine
de caracteres et qui retourne la version "propre" du numéro de telephone.

Les cas d'erreurs (Numéro invalide, vide, etc.) devront retourner `null`
