// ============================================================================
//  FIREBASE-KONFIGURASJON
// ----------------------------------------------------------------------------
//  Fyll inn verdiene du får når du oppretter et Firebase-prosjekt.
//  Se README.md for steg-for-steg-guide (tar ca. 5 minutter).
// ============================================================================

export const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "DIN_PROSJEKT_ID.firebaseapp.com",
  projectId: "DIN_PROSJEKT_ID",
  storageBucket: "DIN_PROSJEKT_ID.firebasestorage.app",
  messagingSenderId: "DIN_SENDER_ID",
  appId: "DIN_APP_ID",
};

// ----------------------------------------------------------------------------
//  LÆRER-TILGANG (Google-innlogging)
//  Google-kontoene som skal ha lærertilgang. Bare disse e-postadressene får
//  låse opp admin-funksjoner (veto, gjenopprett, slett, endre grenser).
//
//  Den SAMME listen må også settes i firestore.rules (funksjonen isTeacher),
//  for det er der den ekte sikkerheten ligger. Klientlisten styrer bare hva
//  som vises i grensesnittet.
// ----------------------------------------------------------------------------

export const TEACHER_EMAILS = [
  "eirik.sorbo@gmail.com",
];
