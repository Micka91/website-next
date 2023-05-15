import { PATHS } from "../enums/paths";
import { navigation } from "../translations/fr/navigation";

export const ROUTES = [
  {
    path: navigation.solution,
    key: PATHS.SOLUTION,
    childrens: [
      { path: navigation.team, key: PATHS.TEAM },
      { path: navigation.offers, key: PATHS.OFFERS },
      { path: navigation.press, key: PATHS.PRESS },
      { path: navigation.contact, key: PATHS.CONTACT },
    ],
  },
  {
    path: navigation.pca,
    key: PATHS.PCA,
  },
  { path: navigation.team, key: PATHS.TEAM },
  { path: navigation.offers, key: PATHS.OFFERS },
  { path: navigation.press, key: PATHS.PRESS },
  { path: navigation.contact, key: PATHS.CONTACT },
  // { path: navigation.joinUs, key: PATHS.JOIN_US },
  // Rempalacer par Actualités ou Notre actualité
];
