/**
 * Central image mapping for the association website.
 * Every discipline has exactly ONE canonical photograph, used everywhere it appears.
 */
import tandingImg from "@/assets/tanding.jpg";
import tunggalImg from "@/assets/tunggal.jpg";
import gandaImg from "@/assets/ganda.jpg";
import reguImg from "@/assets/regu.jpg";
import soloImg from "@/assets/solo-creative.jpg";
import felicitationImg from "@/assets/association-felicitation.jpg";
import officialsChampionshipImg from "@/assets/officials-championship.jpg";
import officialsBeachImg from "@/assets/officials-beach-games.jpg";
import trainingImg from "@/assets/training.jpg";
import eventImg from "@/assets/event.jpg";

/** Canonical discipline photographs — never reuse one discipline's image for another. */
export const DISCIPLINE_IMAGES = {
  tanding: tandingImg,
  tunggal: tunggalImg,
  ganda: gandaImg,
  regu: reguImg,
  solo: soloImg,
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
  association: felicitationImg,
  /** Officials and coaches at a national championship */
  officialsChampionship: officialsChampionshipImg,
  /** Officials at Beach Games Pencak Silat */
  officialsBeach: officialsBeachImg,
} as const;
