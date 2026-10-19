// ============================================================================
//  FIREBASE-KONFIGURASJON
// ----------------------------------------------------------------------------
//  Fyll inn verdiene du får når du oppretter et Firebase-prosjekt.
//  Se README.md for steg-for-steg-guide (tar ca. 5 minutter).
// ============================================================================

export const firebaseConfig = {
  apiKey: "AIzaSyADJnm1KCchp4-tWBV1KeX3Kfd0IjScXzI",
  authDomain: "pedagogikkhistorie.firebaseapp.com",
  projectId: "pedagogikkhistorie",
  storageBucket: "pedagogikkhistorie.firebasestorage.app",
  messagingSenderId: "940313073759",
  appId: "1:940313073759:web:04240f0bd1f7b6a5a623ea",
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
