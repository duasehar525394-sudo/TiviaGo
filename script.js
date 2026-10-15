// Questions Bank covering all requested subjects
const quizData = {
  physics: [
    { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: "Newton" },
    { question: "Which force pulls objects toward Earth?", options: ["Magnetism", "Friction", "Gravity", "Electricity"], answer: "Gravity" },
    { question: "What is the approximate speed of light in a vacuum?", options: ["300,000 km/s", "30,000 km/s", "3,000 km/s", "300 km/s"], answer: "300,000 km/s" },
    { question: "What is the SI unit of electric current?", options: ["Volt", "Ohm", "Ampere", "Watt"], answer: "Ampere" },
    { question: "Which simple machine is a seesaw?", options: ["Pulley", "Lever", "Wheel and axle", "Wedge"], answer: "Lever" },
    { question: "What form of energy is stored in a stretched spring?", options: ["Chemical energy", "Elastic potential energy", "Sound energy", "Nuclear energy"], answer: "Elastic potential energy" },
    { question: "Which instrument measures temperature?", options: ["Barometer", "Thermometer", "Ammeter", "Hygrometer"], answer: "Thermometer" },
    { question: "What happens to light when it passes from air into water and bends?", options: ["Reflection", "Refraction", "Diffraction", "Absorption"], answer: "Refraction" },
    { question: "What is the SI unit of power?", options: ["Joule", "Newton", "Watt", "Coulomb"], answer: "Watt" },
    { question: "Which type of lens converges parallel rays of light?", options: ["Concave lens", "Convex lens", "Plane mirror", "Prism"], answer: "Convex lens" },
    { question: "What is the energy of a moving object called?", options: ["Kinetic energy", "Chemical energy", "Potential energy", "Thermal energy"], answer: "Kinetic energy" },
    { question: "Which particles carry a negative electric charge?", options: ["Protons", "Neutrons", "Electrons", "Photons"], answer: "Electrons" },
    { question: "What is the SI unit of frequency?", options: ["Hertz", "Decibel", "Meter", "Tesla"], answer: "Hertz" },
    { question: "Sound travels fastest through which of these?", options: ["A vacuum", "Air", "Water", "Steel"], answer: "Steel" },
    { question: "What is the SI unit of electrical resistance?", options: ["Ampere", "Ohm", "Volt", "Watt"], answer: "Ohm" },
    { question: "Which law states that every action has an equal and opposite reaction?", options: ["Newton's first law", "Newton's second law", "Newton's third law", "Law of gravitation"], answer: "Newton's third law" },
    { question: "What is the approximate acceleration due to gravity at Earth's surface?", options: ["1.8 m/s²", "9.8 m/s²", "18 m/s²", "98 m/s²"], answer: "9.8 m/s²" },
    { question: "Which type of energy transfer can travel through empty space?", options: ["Conduction", "Convection", "Radiation", "Evaporation"], answer: "Radiation" },
    { question: "What is the SI unit of pressure?", options: ["Pascal", "Joule", "Newton", "Watt"], answer: "Pascal" },
    { question: "Which device converts electrical energy into mechanical motion?", options: ["Electric motor", "Generator", "Battery", "Transformer"], answer: "Electric motor" }
  ],
  chemistry: [
    { question: "What is the chemical symbol for oxygen?", options: ["Ox", "O", "Og", "Oy"], answer: "O" },
    { question: "What is the chemical formula for water?", options: ["CO2", "H2O", "O2", "NaCl"], answer: "H2O" },
    { question: "What is the chemical symbol for sodium?", options: ["S", "So", "Na", "N"], answer: "Na" },
    { question: "A substance with a pH below 7 is usually what?", options: ["Acidic", "Neutral", "Alkaline", "Metallic"], answer: "Acidic" },
    { question: "What is the center of an atom called?", options: ["Electron", "Nucleus", "Molecule", "Cell"], answer: "Nucleus" },
    { question: "Which gas do plants absorb from the atmosphere for photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: "Carbon dioxide" },
    { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au" },
    { question: "Which state of matter has a definite volume but no fixed shape?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: "Liquid" },
    { question: "What is table salt mainly made of?", options: ["Sodium chloride", "Potassium iodide", "Calcium carbonate", "Sodium bicarbonate"], answer: "Sodium chloride" },
    { question: "Which gas makes up most of Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], answer: "Nitrogen" },
    { question: "What is the chemical symbol for iron?", options: ["Ir", "In", "Fe", "I"], answer: "Fe" },
    { question: "What is the pH of a neutral solution at room temperature?", options: ["0", "5", "7", "14"], answer: "7" },
    { question: "What do we call a substance made of only one type of atom?", options: ["Mixture", "Element", "Solution", "Compound"], answer: "Element" },
    { question: "Which particle in an atom has no electric charge?", options: ["Proton", "Electron", "Neutron", "Ion"], answer: "Neutron" },
    { question: "What is the chemical symbol for carbon?", options: ["Ca", "C", "Co", "Cr"], answer: "C" },
    { question: "What is the change from a liquid to a gas called?", options: ["Freezing", "Condensation", "Evaporation", "Melting"], answer: "Evaporation" },
    { question: "Which gas is commonly used to fill party balloons because it is lighter than air and non-flammable?", options: ["Oxygen", "Helium", "Chlorine", "Carbon dioxide"], answer: "Helium" },
    { question: "What is the chemical symbol for silver?", options: ["Si", "S", "Ag", "Au"], answer: "Ag" },
    { question: "What type of bond forms when atoms share electrons?", options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], answer: "Covalent bond" },
    { question: "Which gas is released when many acids react with metals?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Helium"], answer: "Hydrogen" }
  ],
  biology: [
    { question: "What is the basic unit of life?", options: ["Atom", "Tissue", "Cell", "Organ"], answer: "Cell" },
    { question: "Which organ pumps blood around the human body?", options: ["Lungs", "Brain", "Heart", "Liver"], answer: "Heart" },
    { question: "Which part of a plant usually absorbs water from the soil?", options: ["Flower", "Leaf", "Stem", "Root"], answer: "Root" },
    { question: "How many bones are in the typical adult human body?", options: ["106", "206", "306", "406"], answer: "206" },
    { question: "Which blood cells help the body fight infection?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"], answer: "White blood cells" },
    { question: "What is the largest organ of the human body?", options: ["Heart", "Liver", "Skin", "Lungs"], answer: "Skin" },
    { question: "What is the process by which plants make food using sunlight?", options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], answer: "Photosynthesis" },
    { question: "Which organ is primarily responsible for breathing?", options: ["Kidneys", "Lungs", "Stomach", "Pancreas"], answer: "Lungs" },
    { question: "What molecule carries genetic information in living things?", options: ["DNA", "Glucose", "Starch", "Hemoglobin"], answer: "DNA" },
    { question: "Which vitamin can the human body produce with help from sunlight?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
    { question: "What is the largest mammal on Earth?", options: ["African elephant", "Blue whale", "Giraffe", "Orca"], answer: "Blue whale" },
    { question: "Which part of a plant makes most of its food?", options: ["Root", "Leaf", "Flower", "Seed"], answer: "Leaf" },
    { question: "What do bees collect from flowers to make honey?", options: ["Nectar", "Sap", "Pollen only", "Dew"], answer: "Nectar" },
    { question: "Which organ helps filter waste from the blood to make urine?", options: ["Heart", "Kidney", "Lung", "Stomach"], answer: "Kidney" },
    { question: "What is the name for an animal that eats only plants?", options: ["Carnivore", "Herbivore", "Omnivore", "Decomposer"], answer: "Herbivore" },
    { question: "Which cell structure contains most of a cell's genetic material?", options: ["Nucleus", "Cell membrane", "Ribosome", "Vacuole"], answer: "Nucleus" },
    { question: "What is the change from a caterpillar to a butterfly called?", options: ["Pollination", "Metamorphosis", "Germination", "Respiration"], answer: "Metamorphosis" },
    { question: "Which body system includes the brain and spinal cord?", options: ["Digestive system", "Nervous system", "Circulatory system", "Skeletal system"], answer: "Nervous system" },
    { question: "What do mammals feed their young?", options: ["Seeds", "Milk", "Nectar", "Insects"], answer: "Milk" },
    { question: "Which organisms break down dead plants and animals in an ecosystem?", options: ["Producers", "Decomposers", "Herbivores", "Pollinators"], answer: "Decomposers" }
  ],
  gk: [
    { question: "Which ocean is the largest on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "How many days are in a leap year?", options: ["365", "366", "364", "367"], answer: "366" },
    { question: "What is the currency of Japan?", options: ["Won", "Yuan", "Yen", "Ringgit"], answer: "Yen" },
    { question: "How many colors are traditionally listed in a rainbow?", options: ["Five", "Six", "Seven", "Eight"], answer: "Seven" },
    { question: "Which animal is the largest mammal on Earth?", options: ["African elephant", "Blue whale", "Giraffe", "Orca"], answer: "Blue whale" },
    { question: "What is the name of the fairy in Peter Pan?", options: ["Cinderella", "Tinker Bell", "Wendy", "Alice"], answer: "Tinker Bell" },
    { question: "How many sides does a hexagon have?", options: ["Five", "Six", "Seven", "Eight"], answer: "Six" },
    { question: "Which instrument has keys, pedals, and strings?", options: ["Flute", "Piano", "Trumpet", "Violin"], answer: "Piano" },
    { question: "What is the largest hot desert in the world?", options: ["Gobi", "Sahara", "Kalahari", "Mojave"], answer: "Sahara" },
    { question: "Which language is primarily spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "Italian"], answer: "Portuguese" },
    { question: "How many minutes are in one hour?", options: ["30", "45", "60", "90"], answer: "60" },
    { question: "Which bird is commonly associated with delivering babies in folklore?", options: ["Swan", "Stork", "Eagle", "Peacock"], answer: "Stork" },
    { question: "What is the main ingredient in traditional hummus?", options: ["Lentils", "Chickpeas", "Peas", "Kidney beans"], answer: "Chickpeas" },
    { question: "Which board game uses the pieces king and queen?", options: ["Checkers", "Chess", "Backgammon", "Dominoes"], answer: "Chess" },
    { question: "What is the freezing point of water in Celsius?", options: ["0°C", "10°C", "32°C", "100°C"], answer: "0°C" },
    { question: "Which metal is liquid at room temperature?", options: ["Iron", "Mercury", "Copper", "Aluminum"], answer: "Mercury" },
    { question: "How many rings are on the Olympic flag?", options: ["Four", "Five", "Six", "Seven"], answer: "Five" },
    { question: "Which shape has three sides?", options: ["Square", "Triangle", "Pentagon", "Circle"], answer: "Triangle" },
    { question: "What is the name of the galaxy that contains our solar system?", options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"], answer: "Milky Way" },
    { question: "Which month has the fewest days in a common year?", options: ["January", "February", "April", "November"], answer: "February" }
  ],
  geography: [
    { question: "What is the capital city of Japan?", options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"], answer: "Tokyo" },
    { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Mississippi", "Yangtze"], answer: "Nile" },
    { question: "What is the capital of France?", options: ["Lyon", "Paris", "Marseille", "Nice"], answer: "Paris" },
    { question: "Which continent is the largest by land area?", options: ["Africa", "Asia", "Europe", "South America"], answer: "Asia" },
    { question: "Which country is home to the city of Cairo?", options: ["Morocco", "Egypt", "Kenya", "Jordan"], answer: "Egypt" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
    { question: "Which mountain range separates Europe and Asia in Russia?", options: ["Alps", "Andes", "Urals", "Himalayas"], answer: "Urals" },
    { question: "What is the smallest continent by land area?", options: ["Europe", "Antarctica", "Australia", "South America"], answer: "Australia" },
    { question: "Which sea lies between Europe and Africa?", options: ["Caribbean Sea", "Mediterranean Sea", "Baltic Sea", "Arabian Sea"], answer: "Mediterranean Sea" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
    { question: "Which country has the most people in the world?", options: ["India", "United States", "Indonesia", "Brazil"], answer: "India" },
    { question: "On which continent is the Amazon rainforest mainly located?", options: ["Africa", "Asia", "South America", "North America"], answer: "South America" },
    { question: "Which country is shaped like a boot on a map?", options: ["Greece", "Italy", "Portugal", "Croatia"], answer: "Italy" },
    { question: "What is the capital of Kenya?", options: ["Lagos", "Nairobi", "Kampala", "Addis Ababa"], answer: "Nairobi" },
    { question: "Which ocean borders the east coast of the United States?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], answer: "Atlantic Ocean" },
    { question: "Mount Everest is part of which mountain range?", options: ["Andes", "Rockies", "Himalayas", "Alps"], answer: "Himalayas" },
    { question: "Which country is famous for its fjords and has Oslo as its capital?", options: ["Sweden", "Norway", "Finland", "Denmark"], answer: "Norway" },
    { question: "What is the capital of Mexico?", options: ["Guadalajara", "Monterrey", "Mexico City", "Cancún"], answer: "Mexico City" },
    { question: "Which U.S. state is made up entirely of islands in the Pacific?", options: ["Alaska", "Florida", "Hawaii", "California"], answer: "Hawaii" },
    { question: "Which river flows through London?", options: ["Seine", "Danube", "Thames", "Rhine"], answer: "Thames" }
  ],
  history: [
    { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
    { question: "In which year did World War II end?", options: ["1943", "1945", "1950", "1939"], answer: "1945" },
    { question: "Which ancient civilization built the pyramids at Giza?", options: ["Romans", "Egyptians", "Greeks", "Persians"], answer: "Egyptians" },
    { question: "Who was the first person to walk on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"], answer: "Neil Armstrong" },
    { question: "In which year did the French Revolution begin?", options: ["1776", "1789", "1812", "1848"], answer: "1789" },
    { question: "Which city was divided by a wall from 1961 to 1989?", options: ["Vienna", "Berlin", "Prague", "Warsaw"], answer: "Berlin" },
    { question: "Who was the first emperor of Rome?", options: ["Julius Caesar", "Augustus", "Nero", "Constantine"], answer: "Augustus" },
    { question: "The Magna Carta was signed in which country?", options: ["France", "England", "Spain", "Germany"], answer: "England" },
    { question: "Which ship famously sank on its maiden voyage in 1912?", options: ["Lusitania", "Titanic", "Mayflower", "Bismarck"], answer: "Titanic" },
    { question: "Who was the ancient Greek god of the sea?", options: ["Apollo", "Ares", "Poseidon", "Hermes"], answer: "Poseidon" },
    { question: "Which civilization developed the city of Machu Picchu?", options: ["Maya", "Aztec", "Inca", "Olmec"], answer: "Inca" },
    { question: "In which year did the first modern Olympic Games take place?", options: ["1888", "1896", "1904", "1920"], answer: "1896" },
    { question: "Who was the first woman to fly solo across the Atlantic Ocean?", options: ["Bessie Coleman", "Amelia Earhart", "Harriet Quimby", "Valentina Tereshkova"], answer: "Amelia Earhart" },
    { question: "Which document declared the American colonies independent from Britain?", options: ["The Bill of Rights", "The Declaration of Independence", "The Constitution", "The Federalist Papers"], answer: "The Declaration of Independence" },
    { question: "Which empire built the Colosseum in Rome?", options: ["Ottoman Empire", "Roman Empire", "Mongol Empire", "Byzantine Empire"], answer: "Roman Empire" },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Ada Lovelace", "Marie Curie", "Jane Addams", "Rosalind Franklin"], answer: "Marie Curie" },
    { question: "Which explorer led the first expedition to circumnavigate the globe?", options: ["Christopher Columbus", "Ferdinand Magellan", "James Cook", "Vasco da Gama"], answer: "Ferdinand Magellan" },
    { question: "In which year did the Berlin Wall fall?", options: ["1979", "1985", "1989", "1991"], answer: "1989" },
    { question: "Which ancient civilization is credited with developing democracy in Athens?", options: ["Greeks", "Phoenicians", "Sumerians", "Egyptians"], answer: "Greeks" },
    { question: "Who was known as the Maid of Orléans?", options: ["Joan of Arc", "Marie Antoinette", "Catherine the Great", "Eleanor of Aquitaine"], answer: "Joan of Arc" }
  ],
  sports: [
    { question: "How many players are on a regulation soccer team on the field?", options: ["9", "10", "11", "12"], answer: "11" },
    { question: "In tennis, what term denotes a score of zero?", options: ["Nil", "Blank", "Love", "Zero"], answer: "Love" },
    { question: "How many rings are on the Olympic flag?", options: ["Four", "Five", "Six", "Seven"], answer: "Five" },
    { question: "In which sport is the term 'home run' used?", options: ["Cricket", "Baseball", "Rugby", "Hockey"], answer: "Baseball" },
    { question: "How many points is a free throw worth in basketball?", options: ["One", "Two", "Three", "Four"], answer: "One" },
    { question: "What surface is the French Open tennis tournament played on?", options: ["Grass", "Clay", "Carpet", "Hard court"], answer: "Clay" },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "United Kingdom", "Japan"], answer: "Brazil" },
    { question: "How many players from one team are on the court in volleyball?", options: ["Five", "Six", "Seven", "Eight"], answer: "Six" },
    { question: "In golf, what is one stroke under par on a hole called?", options: ["Eagle", "Birdie", "Bogey", "Albatross"], answer: "Birdie" },
    { question: "Which sport uses a shuttlecock?", options: ["Squash", "Badminton", "Table tennis", "Lacrosse"], answer: "Badminton" },
    { question: "How long is a standard marathon?", options: ["21.1 km", "30 km", "42.195 km", "50 km"], answer: "42.195 km" },
    { question: "Which country won the first FIFA World Cup in 1930?", options: ["Brazil", "Italy", "Uruguay", "Argentina"], answer: "Uruguay" },
    { question: "In which sport would you perform a slam dunk?", options: ["Basketball", "Volleyball", "Handball", "Netball"], answer: "Basketball" },
    { question: "How many strikes make an out in baseball?", options: ["Two", "Three", "Four", "Five"], answer: "Three" },
    { question: "Which sport is played at Wimbledon?", options: ["Cricket", "Tennis", "Golf", "Croquet"], answer: "Tennis" },
    { question: "In which sport would you use a pommel horse?", options: ["Equestrian", "Gymnastics", "Track and field", "Fencing"], answer: "Gymnastics" },
    { question: "What color jersey is worn by the overall leader of the Tour de France?", options: ["Green", "Yellow", "Red", "White"], answer: "Yellow" },
    { question: "How many players are on the ice for one ice hockey team during normal play?", options: ["Five", "Six", "Seven", "Eight"], answer: "Six" },
    { question: "Which sport includes the events butterfly and backstroke?", options: ["Diving", "Swimming", "Rowing", "Water polo"], answer: "Swimming" },
    { question: "How many holes are played in a standard round of golf?", options: ["9", "12", "18", "24"], answer: "18" }
  ],
  coding: [
    { question: "Which language is primarily used for web styling?", options: ["HTML", "CSS", "Python", "SQL"], answer: "CSS" },
    { question: "What does 'JS' stand for in web development?", options: ["JavaSource", "JavaScript", "JustScript", "JScript"], answer: "JavaScript" },
    { question: "Which HTML tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
    { question: "Which symbol begins a single-line comment in JavaScript?", options: ["<!--", "//", "**", "##"], answer: "//" },
    { question: "Which data type represents true or false?", options: ["String", "Boolean", "Array", "Number"], answer: "Boolean" },
    { question: "Which HTML element is used to display an image?", options: ["<picture-src>", "<img>", "<image>", "<media>"], answer: "<img>" },
    { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Styling System", "Colorful Style Syntax"], answer: "Cascading Style Sheets" },
    { question: "Which JavaScript keyword declares a block-scoped variable that can be reassigned?", options: ["const", "let", "static", "define"], answer: "let" },
    { question: "Which method adds an item to the end of a JavaScript array?", options: ["push()", "pop()", "shift()", "join()"], answer: "push()" },
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Management Language", "Home Tool Markup Language"], answer: "HyperText Markup Language" },
    { question: "Which CSS property changes the text color?", options: ["font-style", "text-color", "color", "background-color"], answer: "color" },
    { question: "Which operator checks strict equality in JavaScript?", options: ["=", "==", "===", "!="], answer: "===" },
    { question: "What does a function return when it has no return statement in JavaScript?", options: ["null", "false", "undefined", "0"], answer: "undefined" },
    { question: "Which HTML element represents the largest heading by default?", options: ["<heading>", "<h6>", "<h1>", "<head>"], answer: "<h1>" },
    { question: "Which CSS layout system is designed for rows and columns?", options: ["Float", "Grid", "Position", "Inline"], answer: "Grid" },
    { question: "Which file extension is commonly used for JavaScript files?", options: [".java", ".js", ".script", ".jsx"], answer: ".js" },
    { question: "Which JavaScript method converts a JSON string into a value?", options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.read()"], answer: "JSON.parse()" },
    { question: "Which HTML attribute provides alternative text for an image?", options: ["title", "alt", "caption", "src"], answer: "alt" },
    { question: "What does the CSS property 'margin' control?", options: ["Space outside an element's border", "Space inside an element's border", "Text size", "Border color"], answer: "Space outside an element's border" },
    { question: "Which Git command creates a copy of a remote repository on your computer?", options: ["git push", "git clone", "git commit", "git merge"], answer: "git clone" }
  ],
  computer: [
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Primary Utility", "Core Program Unit", "Central Power User"], answer: "Central Processing Unit" },
    { question: "Which component is often called the computer's 'brain'?", options: ["Monitor", "CPU", "Keyboard", "Hard drive"], answer: "CPU" },
    { question: "Which device is commonly used to enter text into a computer?", options: ["Monitor", "Keyboard", "Speaker", "Projector"], answer: "Keyboard" },
    { question: "What does RAM primarily provide to a computer?", options: ["Temporary working memory", "Permanent file storage", "Internet access", "Printed output"], answer: "Temporary working memory" },
    { question: "Which of these is an operating system?", options: ["Microsoft Word", "Windows", "Google Chrome", "Adobe Photoshop"], answer: "Windows" },
    { question: "Which device displays visual output from a computer?", options: ["Mouse", "Monitor", "Microphone", "Router"], answer: "Monitor" },
    { question: "What does USB stand for?", options: ["Universal Serial Bus", "Unified System Board", "User Storage Block", "Universal Software Base"], answer: "Universal Serial Bus" },
    { question: "Which device is used to move a pointer and select items on screen?", options: ["Mouse", "Printer", "Scanner", "Speaker"], answer: "Mouse" },
    { question: "Which type of storage keeps its data when the computer is turned off?", options: ["RAM", "Cache", "SSD", "CPU register"], answer: "SSD" },
    { question: "What is the main purpose of a computer network?", options: ["Connect devices to share data and resources", "Cool the processor", "Increase screen brightness", "Replace the operating system"], answer: "Connect devices to share data and resources" },
    { question: "Which of these is a web browser?", options: ["Google Chrome", "Microsoft Excel", "Windows", "Notepad"], answer: "Google Chrome" },
    { question: "What does Wi-Fi allow devices to do?", options: ["Connect to a network wirelessly", "Print without ink", "Store files permanently", "Increase processor speed"], answer: "Connect to a network wirelessly" },
    { question: "Which device produces a paper copy of a document?", options: ["Scanner", "Printer", "Webcam", "Router"], answer: "Printer" },
    { question: "What is phishing?", options: ["A method for cooling a computer", "A scam that tries to steal sensitive information", "A type of computer monitor", "A way to compress files"], answer: "A scam that tries to steal sensitive information" },
    { question: "Which file extension is commonly used for a PDF document?", options: [".docx", ".jpg", ".pdf", ".mp3"], answer: ".pdf" },
    { question: "What does a router do in a home network?", options: ["Directs network traffic between devices and networks", "Displays images", "Stores keyboard input", "Scans paper documents"], answer: "Directs network traffic between devices and networks" },
    { question: "Which of these is an example of cloud storage?", options: ["Google Drive", "A computer keyboard", "A graphics card", "A USB cable"], answer: "Google Drive" },
    { question: "What is malware?", options: ["Software designed to harm or misuse a computer", "A type of computer screen", "A programming language", "A backup battery"], answer: "Software designed to harm or misuse a computer" },
    { question: "Which keyboard shortcut commonly copies selected text on Windows?", options: ["Ctrl+C", "Ctrl+V", "Ctrl+Z", "Ctrl+P"], answer: "Ctrl+C" },
    { question: "What does an antivirus program help protect against?", options: ["Malicious software", "Power outages", "Broken screens", "Slow typing"], answer: "Malicious software" }
  ],
  languages: [
    { question: "Which language is primarily spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "Italian"], answer: "Portuguese" },
    { question: "What is the most widely spoken language in Mexico?", options: ["Portuguese", "Spanish", "French", "Italian"], answer: "Spanish" },
    { question: "Which language is primarily spoken in Japan?", options: ["Korean", "Mandarin", "Japanese", "Thai"], answer: "Japanese" },
    { question: "Which language uses the Cyrillic alphabet as its standard script?", options: ["Russian", "Greek", "Arabic", "Hindi"], answer: "Russian" },
    { question: "What does 'bonjour' mean in French?", options: ["Goodbye", "Please", "Hello", "Thank you"], answer: "Hello" },
    { question: "Which language is primarily spoken in Egypt?", options: ["Arabic", "Turkish", "Persian", "Hebrew"], answer: "Arabic" },
    { question: "Which language is an official language of Austria?", options: ["Dutch", "German", "Danish", "Polish"], answer: "German" },
    { question: "What does the Spanish word 'gracias' mean?", options: ["Hello", "Please", "Sorry", "Thank you"], answer: "Thank you" },
    { question: "Which language is primarily spoken in South Korea?", options: ["Japanese", "Korean", "Mongolian", "Mandarin"], answer: "Korean" },
    { question: "Which language is spoken by most people in Argentina?", options: ["Spanish", "Portuguese", "English", "French"], answer: "Spanish" },
    { question: "What is the official language of Iran?", options: ["Arabic", "Persian", "Urdu", "Kurdish"], answer: "Persian" },
    { question: "Which language is primarily spoken in the Netherlands?", options: ["Dutch", "Danish", "Norwegian", "Swedish"], answer: "Dutch" },
    { question: "What does the French word 'merci' mean?", options: ["Good morning", "Thank you", "Excuse me", "Good night"], answer: "Thank you" },
    { question: "Which language is primarily spoken in Bangladesh?", options: ["Bengali", "Tamil", "Nepali", "Punjabi"], answer: "Bengali" },
    { question: "Which language is one of the official languages of Switzerland?", options: ["Greek", "German", "Russian", "Portuguese"], answer: "German" },
    { question: "What is the main language spoken in mainland China?", options: ["Cantonese", "Mandarin Chinese", "Japanese", "Korean"], answer: "Mandarin Chinese" },
    { question: "Which language is primarily spoken in Greece?", options: ["Greek", "Latin", "Turkish", "Albanian"], answer: "Greek" },
    { question: "What does the Italian word 'ciao' commonly mean?", options: ["Please", "Hello or goodbye", "Thank you", "Good night"], answer: "Hello or goodbye" },
    { question: "Which language is primarily spoken in Thailand?", options: ["Vietnamese", "Thai", "Lao", "Khmer"], answer: "Thai" },
    { question: "Which language is the primary official language of Portugal?", options: ["Spanish", "Portuguese", "French", "Catalan"], answer: "Portuguese" }
  ],
  english: [
    { question: "Which word is a synonym for 'Huge'?", options: ["Tiny", "Gigantic", "Narrow", "Short"], answer: "Gigantic" },
    { question: "What is the past tense of the verb 'run'?", options: ["Runned", "Ran", "Running", "Runs"], answer: "Ran" },
    { question: "Which word is an antonym of 'ancient'?", options: ["Old", "Historic", "Modern", "Aged"], answer: "Modern" },
    { question: "Which punctuation mark ends a direct question?", options: ["Period", "Comma", "Question mark", "Colon"], answer: "Question mark" },
    { question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Childrens"], answer: "Children" },
    { question: "Which word is a noun in the sentence 'The dog barked loudly'?", options: ["The", "Dog", "Barked", "Loudly"], answer: "Dog" },
    { question: "What is the comparative form of 'good'?", options: ["Gooder", "More good", "Best", "Better"], answer: "Better" },
    { question: "Which word is spelled correctly?", options: ["Definately", "Definitely", "Definitly", "Definetely"], answer: "Definitely" },
    { question: "What is the past tense of 'write'?", options: ["Writed", "Written", "Wrote", "Writing"], answer: "Wrote" },
    { question: "Which of these is a pronoun?", options: ["Quickly", "They", "Blue", "Table"], answer: "They" },
    { question: "Which word means 'to look at something closely'?", options: ["Ignore", "Examine", "Forget", "Avoid"], answer: "Examine" },
    { question: "What is the plural of 'mouse'?", options: ["Mouses", "Mice", "Mouse", "Meese"], answer: "Mice" },
    { question: "Which sentence uses 'their' correctly?", options: ["Their going home.", "The students packed their bags.", "Put it over their.", "Their is a book."], answer: "The students packed their bags." },
    { question: "What is the opposite of 'expand'?", options: ["Increase", "Stretch", "Contract", "Enlarge"], answer: "Contract" },
    { question: "Which word is an adjective in 'She wore a bright scarf'?", options: ["She", "Wore", "Bright", "Scarf"], answer: "Bright" },
    { question: "What is the correct contraction of 'they are'?", options: ["Their", "They're", "There", "Theyre"], answer: "They're" },
    { question: "Which word is a synonym for 'begin'?", options: ["Finish", "Start", "Pause", "Stop"], answer: "Start" },
    { question: "What is the superlative form of 'tall'?", options: ["Taller", "Most tall", "Tallest", "More tall"], answer: "Tallest" },
    { question: "Which punctuation mark can show possession, as in 'the cat's bowl'?", options: ["Apostrophe", "Semicolon", "Hyphen", "Exclamation mark"], answer: "Apostrophe" },
    { question: "Which word is an adverb in 'He spoke softly'?", options: ["He", "Spoke", "Softly", "None"], answer: "Softly" }
  ],
  math: [
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "What is 15 multiplied by 4?", options: ["50", "60", "70", "45"], answer: "60" },
    { question: "What is 12 + 19?", options: ["29", "30", "31", "32"], answer: "31" },
    { question: "What is 9 × 7?", options: ["56", "63", "72", "81"], answer: "63" },
    { question: "What is 100 divided by 4?", options: ["20", "25", "30", "40"], answer: "25" },
    { question: "What is the perimeter of a square with sides of 5 cm?", options: ["10 cm", "15 cm", "20 cm", "25 cm"], answer: "20 cm" },
    { question: "What is 3/4 expressed as a percentage?", options: ["25%", "50%", "75%", "80%"], answer: "75%" },
    { question: "What is 2 to the power of 5?", options: ["10", "16", "25", "32"], answer: "32" },
    { question: "What is the area of a rectangle that is 6 cm long and 4 cm wide?", options: ["10 cm²", "20 cm²", "24 cm²", "28 cm²"], answer: "24 cm²" },
    { question: "What is 45 − 17?", options: ["26", "27", "28", "29"], answer: "28" },
    { question: "What is the next prime number after 7?", options: ["8", "9", "10", "11"], answer: "11" },
    { question: "How many degrees are in a right angle?", options: ["45", "90", "180", "360"], answer: "90" },
    { question: "What is 5.5 + 2.3?", options: ["7.3", "7.8", "8.0", "8.3"], answer: "7.8" },
    { question: "If x + 8 = 15, what is x?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "What is the median of 2, 4, and 9?", options: ["2", "4", "5", "9"], answer: "4" },
    { question: "What is 20% of 50?", options: ["5", "10", "15", "20"], answer: "10" },
    { question: "How many sides does a decagon have?", options: ["Eight", "Nine", "Ten", "Twelve"], answer: "Ten" },
    { question: "What is 144 divided by 12?", options: ["10", "11", "12", "14"], answer: "12" },
    { question: "What is the value of 3 × (4 + 2)?", options: ["14", "18", "20", "24"], answer: "18" },
    { question: "What is the circumference of a circle with diameter 10, using π ≈ 3.14?", options: ["15.7", "20", "31.4", "100"], answer: "31.4" }
  ]
};

let currentCategory = [];
let currentQuestionIndex = 0;
let score = 0;
let currentGameLevel = 0;
let gameProgram = [];
let isRunningCode = false;

const gameLevels = [
  { start: [0, 0], goal: [2, 1], walls: [] },
  { start: [0, 0], goal: [3, 2], walls: [[1, 0], [1, 1]] },
  { start: [0, 0], goal: [4, 4], walls: [[1, 1], [2, 1], [3, 1], [3, 3]] }
];
const moveOffsets = {
  up: [-1, 0],
  right: [0, 1],
  down: [1, 0],
  left: [0, -1]
};
const moveLabels = {
  up: "⬆️ Up",
  right: "➡️ Right",
  down: "⬇️ Down",
  left: "⬅️ Left"
};

// Screens
const categoryScreen = document.getElementById('category-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const blockGameScreen = document.getElementById('block-game-screen');

// Elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');

function startQuiz(categoryKey) {
  currentCategory = quizData[categoryKey];
  currentQuestionIndex = 0;
  score = 0;

  switchScreen(quizScreen);
  loadQuestion();
}

function loadQuestion() {
  resetState();
  let currentQuiz = currentCategory[currentQuestionIndex];
  
  // Update progress bar
  const progressPercent = ((currentQuestionIndex) / currentCategory.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  questionText.innerText = currentQuiz.question;

  currentQuiz.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectOption(button, option, currentQuiz.answer));
    optionsContainer.appendChild(button);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  optionsContainer.innerHTML = "";
}

function selectOption(button, selected, correct) {
  if (selected === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  // Highlight correct answer and disable all buttons
  Array.from(optionsContainer.children).forEach(btn => {
    if (btn.innerText === correct) btn.classList.add("correct");
    btn.disabled = true;
  });

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentCategory.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  switchScreen(resultScreen);
  document.getElementById('final-score').innerText = `You scored ${score} / ${currentCategory.length}`;
}

function startBlockGame() {
  currentGameLevel = 0;
  gameProgram = [];
  isRunningCode = false;
  switchScreen(blockGameScreen);
  renderGame();
}

function renderGame(robotPosition) {
  const level = gameLevels[currentGameLevel];
  const robot = robotPosition || level.start;
  const board = document.getElementById('game-board');
  const programBlocks = document.getElementById('program-blocks');
  const message = document.getElementById('game-message');
  const controlsDisabled = isRunningCode || document.getElementById('next-level-btn').style.display !== 'none';

  document.getElementById('game-level').innerText = `Level ${currentGameLevel + 1} of ${gameLevels.length}`;
  board.innerHTML = '';

  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 5; column++) {
      const cell = document.createElement('div');
      const isWall = level.walls.some(([wallRow, wallColumn]) => wallRow === row && wallColumn === column);
      cell.className = isWall ? 'game-cell wall' : 'game-cell';
      if (robot[0] === row && robot[1] === column) {
        cell.innerText = '🤖';
      } else if (level.goal[0] === row && level.goal[1] === column) {
        cell.innerText = '⭐';
      } else if (isWall) {
        cell.innerText = '⬛';
      }
      board.appendChild(cell);
    }
  }

  programBlocks.innerHTML = '';
  if (gameProgram.length === 0) {
    const placeholder = document.createElement('span');
    placeholder.className = 'program-placeholder';
    placeholder.innerText = 'Your blocks will appear here. Click a block to remove it.';
    programBlocks.appendChild(placeholder);
  } else {
    gameProgram.forEach((direction, index) => {
      const block = document.createElement('button');
      block.className = 'program-block';
      block.innerText = `${index + 1}. ${moveLabels[direction]}`;
      block.title = 'Click to remove this block';
      block.disabled = controlsDisabled;
      block.addEventListener('click', () => removeCodeBlock(index));
      programBlocks.appendChild(block);
    });
  }

  document.querySelectorAll('.movement-block').forEach(button => {
    button.disabled = controlsDisabled || gameProgram.length >= 12;
  });
  document.getElementById('run-code-btn').disabled = controlsDisabled || gameProgram.length === 0;
  document.getElementById('clear-code-btn').disabled = controlsDisabled || gameProgram.length === 0;
}

function addCodeBlock(direction) {
  if (isRunningCode || gameProgram.length >= 12 || !moveOffsets[direction]) return;
  gameProgram.push(direction);
  setGameMessage('Block added. Keep building your program, then run it.', '');
  renderGame();
}

function removeCodeBlock(index) {
  if (isRunningCode) return;
  gameProgram.splice(index, 1);
  setGameMessage('Block removed. Update your program and try again.', '');
  renderGame();
}

function clearCode() {
  if (isRunningCode) return;
  gameProgram = [];
  setGameMessage('Program cleared. Add movement blocks to begin.', '');
  renderGame();
}

async function runCode() {
  if (isRunningCode || gameProgram.length === 0) return;

  isRunningCode = true;
  document.getElementById('next-level-btn').style.display = 'none';
  setGameMessage('Running your program...', '');
  let position = [...gameLevels[currentGameLevel].start];
  renderGame(position);

  for (const direction of gameProgram) {
    await new Promise(resolve => window.setTimeout(resolve, 300));
    const [rowOffset, columnOffset] = moveOffsets[direction];
    const nextPosition = [position[0] + rowOffset, position[1] + columnOffset];
    const level = gameLevels[currentGameLevel];
    const hitWall = level.walls.some(([row, column]) => row === nextPosition[0] && column === nextPosition[1]);
    const outsideBoard = nextPosition.some(coordinate => coordinate < 0 || coordinate > 4);

    if (hitWall || outsideBoard) {
      isRunningCode = false;
      renderGame(level.start);
      setGameMessage(hitWall ? 'Oops! The robot hit a block. Edit your program and try again.' : 'The robot went off the board. Edit your program and try again.', 'error');
      return;
    }

    position = nextPosition;
    renderGame(position);
  }

  isRunningCode = false;
  if (position[0] === gameLevels[currentGameLevel].goal[0] &&
      position[1] === gameLevels[currentGameLevel].goal[1]) {
    document.getElementById('next-level-btn').style.display = currentGameLevel === gameLevels.length - 1 ? 'none' : 'block';
    if (currentGameLevel === gameLevels.length - 1) {
      document.getElementById('next-level-btn').innerText = 'Play again';
      document.getElementById('next-level-btn').style.display = 'block';
    } else {
      document.getElementById('next-level-btn').innerText = 'Next level ➔';
    }
    renderGame(position);
    setGameMessage(
      currentGameLevel === gameLevels.length - 1
        ? 'Amazing! You completed all the coding levels!'
        : 'Great job! Your program reached the star.',
      'success'
    );
  } else {
    setGameMessage('Not quite! Your robot did not reach the star. Edit your blocks and try again.', 'error');
    renderGame(position);
  }
}

function nextGameLevel() {
  if (currentGameLevel === gameLevels.length - 1) {
    startBlockGame();
    return;
  }

  currentGameLevel++;
  gameProgram = [];
  setGameMessage('New level! Build a program to reach the star.', '');
  document.getElementById('next-level-btn').style.display = 'none';
  renderGame();
}

function setGameMessage(text, state) {
  const message = document.getElementById('game-message');
  message.innerText = text;
  message.className = `game-message ${state}`;
}

function goHome() {
  const inQuiz = quizScreen.classList.contains('active');
  const inGame = blockGameScreen.classList.contains('active');
  if ((inQuiz || inGame) &&
      !window.confirm(`Are you sure you want to exit this ${inGame ? 'game' : 'quiz'}? Your progress will be lost.`)) {
    return;
  }

  switchScreen(categoryScreen);
}

window.addEventListener('beforeunload', event => {
  if (quizScreen.classList.contains('active') || blockGameScreen.classList.contains('active')) {
    event.preventDefault();
    event.returnValue = '';
  }
});

function switchScreen(activeScreen) {
  [categoryScreen, quizScreen, resultScreen, blockGameScreen].forEach(screen => screen.classList.remove('active'));
  activeScreen.classList.add('active');
}