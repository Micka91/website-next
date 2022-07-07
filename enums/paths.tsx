export enum PATHS {
  INDEX = "/",
  SOLUTION = "/solution",
  TEAM = "/notreequipe",
  OFFERS = "/nosoffres",
  PRESS = "/presse",
  CONTACT = "/contact",
  JOIN_US = "/nousrejoindre",
  PRIVACY_POLICY = "/politiquedeconfidentialite",
  COOKIES = "/politiquedecookie",
  CGU = "/cgu",
  CGV = "/cgv",
  SECURITY = "/securite",
  LEGAL_MENTIONS = "/mentionslegales",
  SUPPORT = "/support",
}

export const ROUTES = [
  { path: "Solution", key: PATHS.SOLUTION },
  { path: "Notre équipe", key: PATHS.TEAM },
  { path: "Offres", key: PATHS.OFFERS },
  { path: "Presse", key: PATHS.PRESS },
  { path: "Contact", key: PATHS.CONTACT },
  { path: "Nous rejoindre", key: PATHS.JOIN_US },
];
