var words=["snowman", "fraction", "vacation", "graceful", "celebrate", "imagine", "surprise", "language", "puzzle", "paragraph", "popcorn", "shoulder", "sandwich", "trouble", "Miracle", "various", "exactly", "weight", "expect", "yesterday", "Adventure", "Balloon", "Castle", "Dangerous", "Energy", "Future", "Gigantic", "Hospital", "Murmur", "Jewelry", "Practice", "creation", "Question", "whispered", "Recycle", "understand", "Unexpected", "ambulance", "tomorrow", "education", "achievement", "direction", "temporary", "beautiful", "mountain", "international", "Horizon", "erode", "Discovery", "Knowledge", "Jungle", "Launch", "Summit", "Metaphor", "Legacy", "Festival", "Majestic", "Ocean", "Rainbow", "Treasure", "elaborate", "wrestle", "authority", "miserable", "administration", "irregular", "immediate", "drought", "excessive", "traditional", "phenomenon", "astonishment", "inspiration", "decipher", "intelligence", "neighbor", "emphasize", "cultivate", "embarrassed", "Overstatement", "concept", "Victory", "Glacier", "Bravery", "Miracle", "Voyage", "Whisper", "Champion", "Journey", "challenge", "Boundary", "orphan", "Election", "contagious", "Conflict", "hygiene", "Permission", "ointment", "Artifact", "applause", "Warning", "Bookworm", "Compass", "malleable", "Decision", "absurd", "Symptom", "vaccine", "Obstacle", "genetics", "Explorer", "Mystery", "Fortune", "Starlight", "Expedition", "variation", "Brilliant", "Wildlife", "Galaxy", "Discovery", "encyclopedia", "antiquity", "exaggeration", "facilitate", "courageous", "Internship", "curriculum", "soliloquy", "anxiety", "cohesion", "versatile", "centralization", "accelerate", "catastrophe", "pedestrian", "Resilience", "calamity", "fascinating", "fluorescent", "luxurious", "Articulate", "boundary", "structure", "Ambiguity", "Protagonist", "Deteriorate", "Champion", "Innovative", "chronicle", "Renaissance", "anniversary", "Auditory", "enthusiasm", "questionnaire", "tranquility", "Dialect", "hypothesis", "plagiarism", "statistics", "aesthetic", "fluctuation", "narcissistic", "assailant", "celestial", "prominent", "Detour", "pilgrims", "revenge", "countenance", "prosperity", "Theory", "Meteorology", "Kinetic", "Determination", "Symmetry", "Obsolete", "Vulnerable", "Meticulous", "Procrastinate", "Euphoria", "Impulsive", "reminiscent", "Indigenous", "investigate", "judicious", "whimsical", "languish", "horizontal", "contemporary", "allegations", "manifestation", "dilettante", "omnipresent", "astringent", "pandemonium", "redundancy", "pseudonym", "benevolent", "Cybersecurity", "anachronistic", "Eloquent", "Enigmatic", "Redundant", "Sagacious", "Ineffable", "Alignment", "plausibility", "Perfunctory", "Magnanimous", "Authenticity", "aberration", "maxim", "abnegation", "paradigm", "bombastic", "pernicious", "censorious", "predilection", "commensurate", "quandary", "ebullient", "reprobate", "grandiloquent", "supercilious", "hapless", "stolid", "insidious", "supposition", "maelstrom", "validate", "Anachronism", "Capricious", "Epiphany", "Ubiquitous", "Ebullient", "Obfuscate", "Circumlocution", "Pugnacious", "Indolent", "Intransigent", "Fluctuation", "facilitate", "zenith", "dearth", "unconventional", "conflagration", "surmise", "braggart", "supercilious", "emollient", "noisome", "inveterate", "licentious", "noxious", "insurgent", "substantial", "hegemony", "trenchant", "fallacious", "vicissitude", "Perfidious", "Ephemeral", "Profligate", "Quixotic", "Obstreperous", "Malfeasance", "Pejorative", "Inexorable", "Recalcitrant", "Mendacious"]
var randomword=words[Math.floor(Math.random()*words.length)];
var word=randomword;

function speak() {

  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(word);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}
var spelledword="";

function checking(){

  var m=document.getElementById('spelledword');

if(m.value==word){
prompt('that is right')

}
else {
 prompt('that is wrong') 
}
}