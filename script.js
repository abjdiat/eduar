var words=["snowman", "fraction", "vacation", "graceful", "celebrate", "imagine", "surprise", "language", "puzzle", "paragraph", "popcorn", "shoulder", "sandwich", "trouble", "miracle", "various", "exactly", "weight", "expect", "yesterday", "adventure", "balloon", "castle", "dangerous", "energy", "future", "gigantic", "hospital", "murmur", "jewelry", "practice", "creation", "question", "whispered", "recycle", "understand", "unexpected", "ambulance", "tomorrow", "education", "achievement", "direction", "temporary", "beautiful", "mountain", "international", "horizon", "erode", "discovery", "knowledge", "jungle", "launch", "summit", "metaphor", "legacy", "festival", "majestic", "ocean", "rainbow", "treasure", "elaborate", "wrestle", "authority", "miserable", "administration", "irregular", "immediate", "drought", "excessive", "traditional", "phenomenon", "astonishment", "inspiration", "decipher", "intelligence", "neighbor", "emphasize", "cultivate", "embarrassed", "overstatement", "concept", "victory", "glacier", "bravery", "miracle", "voyage", "whisper", "champion", "journey", "challenge", "boundary", "orphan", "election", "contagious", "conflict", "hygiene", "permission", "ointment", "artifact", "applause", "warning", "bookworm", "compass", "malleable", "decision", "absurd", "symptom", "vaccine", "obstacle", "genetics", "explorer", "mystery", "fortune", "starlight", "expedition", "variation", "brilliant", "wildlife", "galaxy", "discovery", "encyclopedia", "antiquity", "exaggeration", "facilitate", "courageous", "internship", "curriculum", "soliloquy", "anxiety", "cohesion", "versatile", "centralization", "accelerate", "catastrophe", "pedestrian", "resilience", "calamity", "fascinating", "fluorescent", "luxurious", "articulate", "boundary", "structure", "ambiguity", "protagonist", "deteriorate", "champion", "innovative", "chronicle", "renaissance", "anniversary", "auditory", "enthusiasm", "questionnaire", "tranquility", "dialect", "hypothesis", "plagiarism", "statistics", "aesthetic", "fluctuation", "narcissistic", "assailant", "celestial", "prominent", "detour", "pilgrims", "revenge", "countenance", "prosperity", "theory", "meteorology", "kinetic", "determination", "symmetry", "obsolete", "vulnerable", "meticulous", "procrastinate", "euphoria", "impulsive", "reminiscent", "Indigenous", "investigate", "judicious", "whimsical", "languish", "horizontal", "contemporary", "allegations", "manifestation", "dilettante", "omnipresent", "astringent", "pandemonium", "redundancy", "pseudonym", "benevolent", "cybersecurity", "anachronistic", "eloquent", "enigmatic", "redundant", "sagacious", "ineffable", "alignment", "plausibility", "perfunctory", "magnanimous", "authenticity", "aberration", "maxim", "abnegation", "paradigm", "bombastic", "pernicious", "censorious", "predilection", "commensurate", "quandary", "ebullient", "reprobate", "grandiloquent", "supercilious", "hapless", "stolid", "insidious", "supposition", "maelstrom", "validate", "anachronism", "capricious", "epiphany", "ubiquitous", "ebullient", "obfuscate", "circumlocution", "pugnacious", "indolent", "intransigent", "fluctuation", "facilitate", "zenith", "dearth", "unconventional", "conflagration", "surmise", "braggart", "supercilious", "emollient", "noisome", "inveterate", "licentious", "noxious", "insurgent", "substantial", "hegemony", "trenchant", "fallacious", "vicissitude", "perfidious", "ephemeral", "profligate", "quixotic", "obstreperous", "malfeasance", "pejorative", "inexorable", "recalcitrant", "mendacious"]
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
