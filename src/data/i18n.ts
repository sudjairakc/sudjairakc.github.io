/* i18n content resolver. Localized copy lives in ./content/{en,th}.ts.
   Structural, locale-independent data stays in site.ts / projects.ts. */

import {en} from "./content/en";
import {th} from "./content/th";
import type {Content} from "./content/types";

export type Lang = "en" | "th";
export const defaultLang: Lang = "en";

export const languages: {code: Lang; label: string}[] = [
  {code: "en", label: "EN"},
  {code: "th", label: "ไทย"}
];

const content: Record<Lang, Content> = {en, th};

/** Resolve localized content for a locale (falls back to default). */
export function getContent(locale: string | undefined): Content {
  return content[(locale as Lang) in content ? (locale as Lang) : defaultLang];
}
