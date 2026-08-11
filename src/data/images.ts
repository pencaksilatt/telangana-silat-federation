/**
 * Central image mapping for the association website.
 * Every discipline has exactly ONE canonical photograph, used everywhere it appears.
 */
import tandingAsset from "@/assets/tanding-photo.jpeg.asset.json";
import tunggalAsset from "@/assets/tunggal-photo.jpeg.asset.json";
import gandaAsset from "@/assets/ganda-photo.jpeg.asset.json";
import reguAsset from "@/assets/regu-photo.jpeg.asset.json";
import soloAsset from "@/assets/solo-creative-photo.jpeg.asset.json";
import felicitationAsset from "@/assets/association-felicitation.png.asset.json";
import officialsChampionshipAsset from "@/assets/officials-championship.png.asset.json";
import officialsBeachAsset from "@/assets/officials-beach-games.png.asset.json";
import trainingImg from "@/assets/training.jpg";
import eventImg from "@/assets/event.jpg";

/** Canonical discipline photographs — never reuse one discipline's image for another. */
export const DISCIPLINE_IMAGES = {
  tanding: tandingAsset.url,
  tunggal: tunggalAsset.url,
  ganda: gandaAsset.url,
  regu: reguAsset.url,
  solo: soloAsset.url,
} as const;

export const DISCIPLINE_ALT: Record<keyof typeof DISCIPLINE_IMAGES, string> = {
  tanding: "Tanding — two Pesilat in full-contact combat during a Pencak Silat bout",
  tunggal: "Tunggal — a single Pesilat performing the compulsory artistic form",
  ganda: "Ganda — two Pesilat performing a choreographed weapons attack-and-defence routine",
  regu: "Regu — three Pesilat performing the compulsory form in synchronisation",
  solo: "Solo Creative — a single Pesilat in a creative weapon performance",
};

export const IMAGES = {
  ...DISCIPLINE_IMAGES,
  training: trainingImg,
  event: eventImg,
  /** Association felicitation / office imagery */
  association: felicitationAsset.url,
  /** Officials and coaches at a national championship */
  officialsChampionship: officialsChampionshipAsset.url,
  /** Officials at Beach Games Pencak Silat */
  officialsBeach: officialsBeachAsset.url,
} as const;
