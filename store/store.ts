import { create } from "zustand";

export type LanguagesSupported =  
    | "en"
    | "de"
    | "fr"
    | "es"
    | "hi"
    | "ja"
    | "la"
    | "ru"
    | "zh"
    | "ar";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
    en: "English",
    de: "German",
    fr: "French",
    es: "Spanish",
    hi: "Hindi",
    ja: "Japanese",
    la: "Latin",
    ru: "Russian",
    zh: "Mandarin",
    ar: "Arabic",
}