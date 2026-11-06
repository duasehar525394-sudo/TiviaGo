/* ==========================================
   TRIVIAGO LEARNING HUB
   Independent add-on: keeps script.js intact
========================================== */

(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const STORAGE_KEY = "triviagoLearningProgressV1";

  const today = () => new Date().toLocaleDateString("en-CA");

  const riddles = [
    {
      question: "What has keys but cannot open a single lock?",
      hint: "You might use it to make music.",
      answer: "A piano."
    },
    {
      question: "What gets wetter the more it dries?",
      hint: "You might use it after a shower.",
      answer: "A towel."
    },
    {
      question: "What has a face and two hands but no arms or legs?",
      hint: "It helps you know the time.",
      answer: "A clock."
    },
    {
      question: "What has cities but no houses, forests but no trees, and rivers but no water?",
      hint: "You might unfold it before a journey.",
      answer: "A map."
    },
    {
      question: "What can travel around the world while staying in one corner?",
      hint: "Think about something on an envelope.",
      answer: "A postage stamp."
    },
    {
      question: "What has one eye but cannot see?",
      hint: "It can help you sew.",
      answer: "A needle."
    },
    {
      question: "What has many teeth but cannot bite?",
      hint: "You might use it on your hair.",
      answer: "A comb."
    },
    {
      question: "What belongs to you but is used more by other people?",
      hint: "People use it when talking to you.",
      answer: "Your name."
    },
    {
      question: "What has a neck but no head?",
      hint: "It might contain water.",
      answer: "A bottle."
    },
    {
      question: "What goes up but never comes down?",
      hint: "It increases every birthday.",
      answer: "Your age."
    },
    {
      question: "What can fill a room without taking up space?",
      hint: "Try switching on a lamp.",
      answer: "Light."
    },
    {
      question: "The more you take, the more you leave behind. What are they?",
      hint: "Think about walking.",
      answer: "Footsteps."
    },
    {
      question: "What has branches but no fruit, trunk, or leaves?",
      hint: "You might visit it to save money.",
      answer: "A bank."
    },
    {
      question: "What can you catch but not throw?",
      hint: "It is something people sometimes get when ill.",
      answer: "A cold."
    },
    {
      question: "What has words but never speaks?",
      hint: "You can read it.",
      answer: "A book."
    }
  ];

  const mathPuzzles = [
    {
      question: "Continue the pattern: 2, 6, 12, 20, 30, __",
      hint: "Look at the differences between the numbers.",
      answer: "42",
      explanation: "The differences are 4, 6, 8, 10, then 12. So 30 + 12 = 42."
    },
    {
      question: "I am an odd number. Remove one letter and I become even. What number am I?",
      hint: "Spell the number in English.",
      answer: "seven",
      explanation: "Remove the letter 's' from SEVEN and you get EVEN."
    },
    {
      question: "A dozen eggs cost 120 rupees. How much do 3 eggs cost at the same rate?",
      hint: "First find the price of one egg.",
      answer: "30",
      explanation: "120 ÷ 12 = 10 rupees per egg. Three eggs cost 30 rupees."
    },
    {
      question: "What is 15% of 200?",
      hint: "Find 10% and 5%, then add them.",
      answer: "30",
      explanation: "10% of 200 is 20 and 5% is 10. Total = 30."
    },
    {
      question: "A number doubled and increased by 8 equals 26. What is the number?",
      hint: "Undo the addition before dividing.",
      answer: "9",
      explanation: "(26 - 8) ÷ 2 = 9."
    },
    {
      question: "What is the next number: 1, 1, 2, 3, 5, 8, __?",
      hint: "Add the two previous numbers.",
      answer: "13",
      explanation: "This is the Fibonacci pattern: 5 + 8 = 13."
    },
    {
      question: "A rectangle is 8 cm long and 5 cm wide. What is its area?",
      hint: "Area = length × width.",
      answer: "40",
      explanation: "8 × 5 = 40 square centimetres."
    },
    {
      question: "If 5 machines make 5 items in 5 minutes, how long do 100 identical machines take to make 100 items?",
      hint: "Each machine makes one item in five minutes.",
      answer: "5",
      explanation: "Each machine makes one item in 5 minutes, so 100 machines make 100 items in 5 minutes."
    },
    {
      question: "What is the smallest prime number greater than 20?",
      hint: "A prime number has exactly two positive factors.",
      answer: "23",
      explanation: "23 is divisible only by 1 and 23."
    },
    {
      question: "A triangle has angles of 50° and 60°. What is the third angle?",
      hint: "The angles inside a triangle total 180°.",
      answer: "70",
      explanation: "180 - 50 - 60 = 70 degrees."
    }
  ];

  const wordPuzzles = [
    { word: "PLANET", scrambled: "TALPEN", hint: "A world orbiting a star." },
    { word: "PUZZLE", scrambled: "ZLEZUP", hint: "A challenge you solve." },
    { word: "BRIGHT", scrambled: "GHTRIB", hint: "Full of light or intelligence." },
    { word: "CURIOUS", scrambled: "SOURUIC", hint: "Eager to discover something." },
    { word: "JOURNEY", scrambled: "YJONREU", hint: "A trip from one place to another." },
    { word: "LIBRARY", scrambled: "RYLIBRA", hint: "A place full of books." },
    { word: "SCIENCE", scrambled: "CENICES", hint: "The study of the natural world." },
    { word: "THOUGHT", scrambled: "GHTTHOU", hint: "An idea in your mind." },
    { word: "RAINBOW", scrambled: "WOBRAIN", hint: "A colourful arc in the sky." },
    { word: "COURAGE", scrambled: "GACEROU", hint: "The ability to face difficulty." },
    { word: "MYSTERY", scrambled: "YRETSYM", hint: "Something not yet explained." },
    { word: "CREATIVE", scrambled: "TIVEACRE", hint: "Using imagination to make something." }
  ];

  const vocabulary = [
    {
      word: "Resilient",
      definition: "Able to recover and keep going after difficulty.",
      example: "She remained resilient when learning a difficult topic."
    },
    {
      word: "Meticulous",
      definition: "Very careful and attentive to detail.",
      example: "He was meticulous when checking his calculations."
    },
    {
      word: "Eloquent",
      definition: "Able to express ideas clearly and effectively.",
      example: "Her eloquent explanation made the topic easier to understand."
    },
    {
      word: "Curiosity",
      definition: "A strong desire to learn or know something.",
      example: "Curiosity encouraged the student to ask questions."
    },
    {
      word: "Concise",
      definition: "Brief but clear and complete.",
      example: "Write a concise summary of the lesson."
    },
    {
      word: "Innovative",
      definition: "Introducing new ideas or creative methods.",
      example: "The team developed an innovative way to solve the problem."
    },
    {
      word: "Ambiguous",
      definition: "Having more than one possible meaning.",
      example: "The ambiguous sentence confused the reader."
    },
    {
      word: "Perseverance",
      definition: "Continuing to work toward a goal despite difficulty.",
      example: "Perseverance helped her finish the challenging project."
    },
    {
      word: "Empathy",
      definition: "Understanding or sharing another person's feelings.",
      example: "Empathy helps people listen to each other."
    },
    {
      word: "Abundant",
      definition: "Available in large quantities.",
      example: "The region has abundant natural resources."
    },
    {
      word: "Inevitable",
      definition: "Certain to happen; unavoidable.",
      example: "Change is an inevitable part of life."
    },
    {
      word: "Analytical",
      definition: "Using careful reasoning to examine something.",
      example: "An analytical thinker looks for evidence before deciding."
    }
  ];

  const quotes = [
    {
      text: "The secret of getting ahead is getting started.",
      author: "Mark Twain"
    },
    {
      text: "It always seems impossible until it's done.",
      author: "Nelson Mandela"
    },
    {
      text: "Learning never exhausts the mind.",
      author: "Leonardo da Vinci"
    },
    {
      text: "Well done is better than well said.",
      author: "Benjamin Franklin"
    },
    {
      text: "Great things are done by a series of small things brought together.",
      author: "Vincent van Gogh"
    },
    {
      text: "The beautiful thing about learning is that nobody can take it away from you.",
      author: "B. B. King"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    }
  ];

  // Original short poems written for TriviaGo.
  const poems = [
    {
      title: "One More Question",
      lines: "One more question, one more try,\nOne more reason to reach the sky.\nA little progress, day by day,\nCan lead you farther than you say."
    },
    {
      title: "The Curious Mind",
      lines: "A curious mind begins to see\nA thousand doors where walls might be.\nAsk, explore, and seek what's true,\nThere's always something new for you."
    },
    {
      title: "Small Steps",
      lines: "A little step, a page, a line,\nA growing skill takes patient time.\nKeep your questions, let them grow,\nThere's more to learn than you yet know."
    },
    {
      title: "Ideas in Motion",
      lines: "A thought can spark a brighter view,\nA puzzle waits for you to do.\nThink it through and try once more,\nA new idea may open a door."
    }
  ];

  const grammarTips = [
    {
      title: "Your vs. You're",
      tip: "'Your' shows possession. 'You're' means 'you are'.",
      example: "Your answer is correct. You're improving every day."
    },
    {
      title: "Their vs. There vs. They're",
      tip: "'Their' shows possession, 'there' refers to a place, and 'they're' means 'they are'.",
      example: "They're leaving their books over there."
    },
    {
      title: "Its vs. It's",
      tip: "'Its' shows possession. 'It's' means 'it is' or 'it has'.",
      example: "It's a clever robot with its own code."
    },
    {
      title: "Affect vs. Effect",
      tip: "'Affect' is usually a verb; 'effect' is usually a noun.",
      example: "Sleep can affect concentration. The effect can be noticeable."
    },
    {
      title: "Subject-verb agreement",
      tip: "A singular subject usually takes a singular verb in the present tense.",
      example: "She learns quickly. They learn together."
    },
    {
      title: "There is vs. There are",
      tip: "Use 'there is' for a singular noun and 'there are' for plural nouns.",
      example: "There is one puzzle. There are five questions."
    }
  ];

  const courses = [
    {
      id: "vocabulary",
      icon: "🔤",
      title: "Vocabulary Builder",
      level: "Beginner → Advanced",
      description: "Learn word meanings, synonyms, and better ways to express ideas.",
      lessons: [
        {
          title: "Build a stronger vocabulary",
          body: "A strong vocabulary helps you understand what you read and express what you mean.",
          points: [
            "Learn a word with its definition and an example sentence.",
            "Use synonyms to express similar ideas in different ways.",
            "Keep a personal list of new words and revisit it regularly."
          ],
          question: "Which word means 'brief but clear'?",
          options: ["Ambiguous", "Concise", "Abundant", "Curious"],
          answer: 1,
          explanation: "Concise means brief but clear and complete."
        },
        {
          title: "Synonyms and context",
          body: "Synonyms have similar meanings, but the best choice depends on context.",
          points: [
            "Happy → joyful",
            "Careful → cautious",
            "Quick → rapid"
          ],
          question: "Which is closest in meaning to 'rapid'?",
          options: ["Slow", "Fast", "Quiet", "Careful"],
          answer: 1,
          explanation: "Rapid means fast or happening quickly."
        }
      ]
    },
    {
      id: "math",
      icon: "➗",
      title: "Math & Number Sense",
      level: "Beginner → Advanced",
      description: "Practise percentages, number patterns, logic, and mental maths.",
      lessons: [
        {
          title: "Spot the pattern",
          body: "Number sequences often follow a rule. Compare neighbouring terms to find it.",
          points: [
            "Check whether the same number is added each time.",
            "Look for multiplication or division.",
            "Check whether the differences themselves form a pattern."
          ],
          question: "What comes next: 3, 6, 9, 12, __?",
          options: ["13", "14", "15", "18"],
          answer: 2,
          explanation: "Add 3 each time, so the next number is 15."
        },
        {
          title: "Percentages made easier",
          body: "A percentage means a number out of 100.",
          points: [
            "10% = one tenth.",
            "25% = one quarter.",
            "50% = one half."
          ],
          question: "What is 25% of 80?",
          options: ["10", "20", "25", "40"],
          answer: 1,
          explanation: "25% is one quarter, and 80 ÷ 4 = 20."
        }
      ]
    },
    {
      id: "science",
      icon: "🔬",
      title: "Science Explorer",
      level: "Beginner → Advanced",
      description: "Explore scientific thinking, energy, matter, and living systems.",
      lessons: [
        {
          title: "Think like a scientist",
          body: "Science uses observations, questions, evidence, and testing to understand the world.",
          points: [
            "Observe a phenomenon carefully.",
            "Ask a question and form a testable hypothesis.",
            "Collect evidence and use it to evaluate your explanation."
          ],
          question: "What should support a scientific conclusion?",
          options: ["A guess alone", "Evidence", "Popularity", "A rumour"],
          answer: 1,
          explanation: "Scientific conclusions should be supported by evidence."
        },
        {
          title: "Matter and its states",
          body: "Matter has mass and occupies space. Common states include solids, liquids, and gases.",
          points: [
            "Solids keep their own shape.",
            "Liquids take the shape of their container.",
            "Gases spread to fill their available space."
          ],
          question: "Which state usually fills its entire container?",
          options: ["Solid", "Liquid", "Gas", "Ice"],
          answer: 2,
          explanation: "A gas spreads to fill the available space in its container."
        }
      ]
    },
    {
      id: "english",
      icon: "✍️",
      title: "English & Grammar",
      level: "Beginner → Advanced",
      description: "Improve sentence structure, grammar, reading, and writing.",
      lessons: [
        {
          title: "Make sentences clearer",
          body: "Clear writing communicates one main idea at a time and uses punctuation thoughtfully.",
          points: [
            "Use a capital letter at the start of a sentence.",
            "Use punctuation to separate complete thoughts.",
            "Remove unnecessary words when editing."
          ],
          question: "Which sentence is correct?",
          options: [
            "She are learning.",
            "She is learning.",
            "She learning is.",
            "She were learning."
          ],
          answer: 1,
          explanation: "'She is learning' correctly matches the singular subject with 'is'."
        },
        {
          title: "Choose precise words",
          body: "Precise words make writing more vivid and easier to understand.",
          points: [
            "Replace vague words with specific ones.",
            "Avoid repeating the same word unnecessarily.",
            "Read your sentences aloud to check their flow."
          ],
          question: "Which word means 'able to express ideas clearly'?",
          options: ["Eloquent", "Inevitable", "Fragile", "Ambiguous"],
          answer: 0,
          explanation: "Eloquent means able to express ideas clearly and effectively."
        }
      ]
    },
    {
      id: "coding",
      icon: "💻",
      title: "Coding Fundamentals",
      level: "Beginner → Advanced",
      description: "Understand variables, conditions, loops, and problem-solving.",
      lessons: [
        {
          title: "What is a variable?",
          body: "A variable is a named place in a program where a value can be stored.",
          points: [
            "Variables can hold numbers, text, and other values.",
            "Good variable names describe what the value represents.",
            "A variable's value can sometimes be updated."
          ],
          question: "In JavaScript, which keyword can declare a reassignable variable?",
          options: ["const", "let", "heading", "style"],
          answer: 1,
          explanation: "'let' declares a block-scoped variable that can be reassigned."
        },
        {
          title: "Conditions and decisions",
          body: "A condition lets a program choose what to do based on whether something is true or false.",
          points: [
            "Use if to test a condition.",
            "Use else to handle the alternative.",
            "Compare values carefully."
          ],
          question: "Which JavaScript keyword tests a condition?",
          options: ["if", "repeat", "paint", "title"],
          answer: 0,
          explanation: "'if' runs a block when its condition is true."
        }
      ]
    },
    {
      id: "logic",
      icon: "🧩",
      title: "Logic & Critical Thinking",
      level: "Beginner → Advanced",
      description: "Recognise assumptions, evaluate evidence, and solve problems step by step.",
      lessons: [
        {
          title: "Separate facts from assumptions",
          body: "Critical thinking means examining reasons and evidence before accepting a claim.",
          points: [
            "Ask what evidence supports a statement.",
            "Check whether a conclusion follows from the evidence.",
            "Consider alternative explanations."
          ],
          question: "Which is the strongest support for a factual claim?",
          options: [
            "Many people repeat it",
            "A relevant, reliable piece of evidence",
            "It sounds exciting",
            "A person insists it is true"
          ],
          answer: 1,
          explanation: "Relevant, reliable evidence is stronger than repetition or confidence."
        },
        {
          title: "Solve problems systematically",
          body: "Breaking a difficult problem into smaller parts makes it easier to reason through.",
          points: [
            "Identify what is known.",
            "Identify what you need to find.",
            "Try a method, check the result, and revise if needed."
          ],
          question: "What is a useful first step when a problem seems difficult?",
          options: [
            "Ignore the details",
            "Break it into smaller parts",
            "Guess immediately",
            "Skip checking the answer"
          ],
          answer: 1,
          explanation: "Smaller steps help you understand and solve a complex problem."
        }
      ]
    },
    {
      id: "web-design",
      icon: "🌐",
      title: "HTML & Web Design",
      level: "Beginner → Advanced",
      description: "Build accessible pages, style layouts, and learn responsive web design.",
      lessons: [
        {
          title: "Structure a web page",
          body: "HTML describes the content and structure of a web page using elements.",
          points: ["Put page metadata in the head.", "Keep visible content in the body.", "Use headings in a logical order."],
          question: "Which element contains the visible content of a page?",
          options: ["<head>", "<body>", "<meta>", "<title>"],
          answer: 1,
          explanation: "The body element contains the content displayed in the browser."
        },
        {
          title: "Add accessible images",
          body: "Useful text alternatives make image content available to people who cannot see it.",
          points: ["Describe meaningful images in alt text.", "Use empty alt text for decorative images.", "Write link names that explain their destination."],
          question: "Which attribute provides an image's text alternative?",
          options: ["href", "alt", "class", "target"],
          answer: 1,
          explanation: "The alt attribute provides a text alternative for an image."
        },
        {
          title: "Responsive layouts",
          body: "Responsive design helps content fit different screen sizes and devices.",
          points: ["Use flexible grid or flex layouts.", "Use media queries when a layout needs to change.", "Test pages at narrow and wide viewport sizes."],
          question: "Which CSS feature applies styles based on viewport conditions?",
          options: ["A media query", "An HTML comment", "A database query", "A keyframe"],
          answer: 0,
          explanation: "Media queries apply CSS rules when conditions such as viewport width match."
        },
        {
          title: "CSS layout and the box model",
          body: "The box model explains how content, padding, borders, and margins affect an element's size.",
          points: ["Padding sits between content and border.", "Margin creates space outside the border.", "Grid and flexbox provide modern layout tools."],
          question: "Which CSS property adds space outside an element's border?",
          options: ["padding", "margin", "gap", "outline"],
          answer: 1,
          explanation: "Margin creates space outside an element's border."
        }
      ]
    }
  ];

  const progressionLessons = {
    vocabulary: [
      {
        title: "Use context clues",
        body: "Nearby words and sentences can help you infer an unfamiliar word's meaning.",
        points: ["Look for examples and contrasts.", "Check the word's tone.", "Confirm your guess with a trusted dictionary."],
        question: "In 'The path was arduous, so we rested often,' what does arduous most likely mean?",
        options: ["Easy", "Difficult", "Short", "Quiet"],
        answer: 1,
        explanation: "Resting often suggests the path was difficult."
      },
      {
        title: "Choose precise language",
        body: "Advanced writing uses specific words that match the intended meaning and tone.",
        points: ["Prefer precise verbs over vague phrases.", "Check a word's connotations.", "Revise repeated or unnecessary words."],
        question: "Which verb most precisely completes 'The scientist ___ the results'?",
        options: ["Did", "Looked at", "Analyzed", "Got"],
        answer: 2,
        explanation: "Analyzed precisely describes examining results in detail."
      }
    ],
    math: [
      {
        title: "Ratios and proportions",
        body: "A ratio compares quantities, and equivalent ratios preserve the same relationship.",
        points: ["Write ratios in a consistent order.", "Scale both parts by the same factor.", "Use proportions to solve for an unknown."],
        question: "If 2 notebooks cost $6, how much do 5 notebooks cost at the same rate?",
        options: ["$12", "$15", "$18", "$30"],
        answer: 1,
        explanation: "Each notebook costs $3, so five cost $15."
      },
      {
        title: "Linear relationships",
        body: "A linear equation represents a relationship with a constant rate of change.",
        points: ["The slope measures change in y per unit change in x.", "The y-intercept is the value when x is zero.", "Substitute values to check a solution."],
        question: "For y = 3x + 2, what is y when x = 4?",
        options: ["10", "12", "14", "18"],
        answer: 2,
        explanation: "Substituting x = 4 gives y = 3(4) + 2 = 14."
      }
    ],
    science: [
      {
        title: "Ecosystems and energy",
        body: "Energy moves through ecosystems as organisms eat or are eaten.",
        points: ["Producers capture energy, often from sunlight.", "Consumers obtain energy by eating other organisms.", "Decomposers recycle nutrients."],
        question: "Which organisms usually form the base of a food chain?",
        options: ["Producers", "Top predators", "Decomposers only", "Parasites"],
        answer: 0,
        explanation: "Producers capture energy and support the rest of the food chain."
      },
      {
        title: "Evaluate an experiment",
        body: "A fair experiment changes one factor at a time and measures outcomes consistently.",
        points: ["Identify the independent variable.", "Keep other conditions controlled.", "Repeat measurements to improve confidence."],
        question: "What should a controlled experiment change deliberately?",
        options: ["Every variable", "One independent variable", "The conclusion", "The recorded data"],
        answer: 1,
        explanation: "Changing one independent variable helps test its effect."
      }
    ],
    english: [
      {
        title: "Build a clear paragraph",
        body: "A well-structured paragraph develops one main idea with relevant support.",
        points: ["Open with a clear topic sentence.", "Support the point with evidence or examples.", "Use transitions to connect ideas."],
        question: "What is the main purpose of a topic sentence?",
        options: ["Introduce the paragraph's main idea", "List every source", "End the whole essay", "Replace all supporting details"],
        answer: 0,
        explanation: "A topic sentence introduces the paragraph's main idea."
      },
      {
        title: "Punctuation and meaning",
        body: "Punctuation guides readers through sentence structure and can change meaning.",
        points: ["Use commas to separate introductory phrases.", "Use apostrophes for possession or contractions.", "Use a colon to introduce a list after a complete clause."],
        question: "Which sentence uses a colon correctly?",
        options: ["Bring: a notebook.", "I need three things: paper, a pen, and a ruler.", "The: answer is correct.", "We: walked to school."],
        answer: 1,
        explanation: "A colon can introduce a list after a complete clause."
      }
    ],
    coding: [
      {
        title: "Repeat work with loops",
        body: "Loops run a block of code repeatedly while a condition or collection requires it.",
        points: ["Use for loops to process collections.", "Make sure loop conditions eventually stop.", "Choose a loop that matches the task."],
        question: "Which loop is commonly used to visit every item in an array?",
        options: ["for...of", "if...else", "try...catch", "switch"],
        answer: 0,
        explanation: "A for...of loop iterates over values in an iterable such as an array."
      },
      {
        title: "Work with web APIs",
        body: "An API lets programs exchange data through a defined interface.",
        points: ["Check response status before using data.", "Handle asynchronous work with promises or async/await.", "Validate data before trusting its shape."],
        question: "Which JavaScript keyword lets a function use await?",
        options: ["async", "defer", "yield", "static"],
        answer: 0,
        explanation: "An async function can use await to pause for a promise."
      }
    ],
    logic: [
      {
        title: "Check an argument",
        body: "An argument connects evidence to a conclusion through one or more reasons.",
        points: ["Identify the claim and supporting reasons.", "Check whether evidence is relevant.", "Look for unsupported assumptions."],
        question: "What should you check when evaluating a factual claim?",
        options: ["Whether reliable evidence supports it", "Whether it is popular", "Whether it sounds dramatic", "Whether it is repeated often"],
        answer: 0,
        explanation: "Reliable, relevant evidence is a sound starting point."
      },
      {
        title: "Compare possible solutions",
        body: "Good problem solving compares options against clear goals and constraints.",
        points: ["Define what success means.", "List constraints and trade-offs.", "Compare evidence before choosing."],
        question: "Why define constraints before choosing a solution?",
        options: ["To rule out options that cannot work", "To avoid collecting information", "To guarantee there is only one option", "To make the problem harder"],
        answer: 0,
        explanation: "Constraints help identify which solutions are practical."
      }
    ],
    "web-design": [
      {
        title: "Semantic page structure",
        body: "Semantic HTML describes content roles so browsers and assistive technologies can understand a page.",
        points: ["Use header, nav, main, and footer for page regions.", "Choose elements for meaning, not appearance.", "Keep headings in a logical order."],
        question: "Which element identifies the primary content of a page?",
        options: ["<main>", "<aside>", "<small>", "<label>"],
        answer: 0,
        explanation: "The main element identifies the primary content."
      },
      {
        title: "Create a responsive grid",
        body: "CSS Grid can create flexible columns that adapt as available space changes.",
        points: ["Use minmax() to set flexible column sizes.", "Use auto-fit or auto-fill for responsive columns.", "Keep content readable on narrow screens."],
        question: "Which CSS function sets a minimum and maximum track size?",
        options: ["clamp()", "minmax()", "calcsize()", "fitcontent()"],
        answer: 1,
        explanation: "minmax() defines a track's minimum and maximum sizes."
      }
    ]
  };

  courses.forEach((course) => {
    course.lessons.push(...progressionLessons[course.id]);
  });

  function freshProgress() {
    return {
      xp: 0,
      badges: [],
      completed: [],
      learnedWords: [],
      answeredRiddles: [],
      solvedMath: [],
      solvedWords: [],
      courseAnswers: []
    };
  }

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved || typeof saved !== "object") return freshProgress();
      const currentProgress = { ...saved };
      delete currentProgress.streak;
      delete currentProgress.lastActive;
      currentProgress.badges = Array.isArray(currentProgress.badges)
        ? currentProgress.badges.filter((badge) =>
          badge !== "Three-Day Streak" && badge !== "Weekly Learner"
        )
        : [];
      return { ...freshProgress(), ...currentProgress };
    } catch {
      return freshProgress();
    }
  }

  let progress = loadProgress();
  let riddleIndex = 0;
  let mathIndex = 0;
  let wordIndex = 0;
  let grammarIndex = 0;
  let selectedCourse = null;
  let selectedLesson = 0;
  let currentCourseQuestionAnswered = false;
  let currentRiddleRevealed = false;

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.warn("Learning progress could not be saved.", error);
    }
    renderStats();
  }

  function awardXP(amount) {
    progress.xp += amount;

    if (progress.xp >= 50 && !progress.badges.includes("Getting Started")) {
      progress.badges.push("Getting Started");
    }

    if (progress.xp >= 150 && !progress.badges.includes("Brain Builder")) {
      progress.badges.push("Brain Builder");
    }

    saveProgress();
  }

  function renderStats() {
    if ($("learning-xp")) $("learning-xp").textContent = progress.xp + " XP";
    if ($("learning-lessons")) $("learning-lessons").textContent = progress.completed.length;
    if ($("learning-lessons")) $("learning-lessons").textContent = progress.completed.length;
    if ($("learning-badges")) {
      $("learning-badges").textContent = progress.badges.length;
    }
  }

  function dailyIndex(length) {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const now = new Date();
    const day = Math.floor((now - start) / 86400000);
    return day % length;
  }

  function setDailyContent() {
    const word = vocabulary[dailyIndex(vocabulary.length)];
    const quote = quotes[dailyIndex(quotes.length)];
    const poem = poems[dailyIndex(poems.length)];
    const grammar = grammarTips[dailyIndex(grammarTips.length)];

    $("daily-word").textContent = word.word;
    $("daily-definition").textContent = word.definition;
    $("daily-example").textContent = "Example: " + word.example;

    $("daily-quote").textContent = "“" + quote.text + "”";
    $("quote-author").textContent = "— " + quote.author;

    $("poem-title").textContent = poem.title;
    $("daily-poem").textContent = poem.lines;

    showGrammar(grammar);

    const learned = progress.learnedWords.includes(today());

    $("learn-word").disabled = learned;
    $("learn-word").textContent = learned ? "Word learned today ✓" : "I learned this word";
  }

  function showGrammar(item) {
    $("grammar-title").textContent = item.title;
    $("grammar-tip").textContent = item.tip;
    $("grammar-example").textContent = "Example: " + item.example;
  }

  function renderRiddle() {
    const item = riddles[riddleIndex % riddles.length];
    currentRiddleRevealed = false;

    $("riddle-card").innerHTML = `
      <p class="challenge-number">Riddle ${riddleIndex + 1}</p>
      <h4 class="challenge-question">${item.question}</h4>
      <p class="challenge-hint">💡 Hint: ${item.hint}</p>
      <div id="riddle-answer-box"></div>
    `;

    $("riddle-answer").disabled = false;
    $("riddle-answer").textContent = "Reveal answer";
  }

  function revealRiddle() {
    if (currentRiddleRevealed) return;
    currentRiddleRevealed = true;

    const item = riddles[riddleIndex % riddles.length];
    const box = $("riddle-answer-box");

    box.innerHTML = `
      <div class="challenge-answer">
        <strong>Answer:</strong> ${item.answer}
        <br>
        <button id="riddle-earned" class="learning-primary" style="margin-top:12px">
          I solved it! +10 XP
        </button>
      </div>
    `;

    $("riddle-answer").disabled = true;

    $("riddle-earned").addEventListener("click", () => {
      const key = String(riddleIndex % riddles.length);

      if (progress.answeredRiddles.includes(key)) {
        box.insertAdjacentHTML(
          "beforeend",
          '<p class="challenge-hint">You already earned XP for this riddle.</p>'
        );
        return;
      }

      progress.answeredRiddles.push(key);
      awardXP(10);

      $("riddle-earned").disabled = true;
      $("riddle-earned").textContent = "XP earned ✓";
    });
  }

  function renderMath() {
    const item = mathPuzzles[mathIndex % mathPuzzles.length];

    $("math-card").innerHTML = `
      <p class="challenge-number">Math puzzle ${mathIndex + 1}</p>
      <h4 class="challenge-question">${item.question}</h4>
      <p class="challenge-hint">💡 Hint: ${item.hint}</p>
    `;

    $("math-answer-input").value = "";
    $("math-answer-input").disabled = false;
    $("math-feedback").textContent = "";
    $("math-form").querySelector("button").disabled = false;
  }

  function checkMath(event) {
    event.preventDefault();

    const item = mathPuzzles[mathIndex % mathPuzzles.length];
    const answer = $("math-answer-input").value.trim().toLowerCase();
    const expected = item.answer.toLowerCase();
    const key = String(mathIndex % mathPuzzles.length);

    if (answer === expected) {
      if (!progress.solvedMath.includes(key)) {
        progress.solvedMath.push(key);
        awardXP(15);
        $("math-feedback").textContent =
          "Correct! +15 XP. " + item.explanation;
      } else {
        $("math-feedback").textContent =
          "Correct! You already earned XP for this puzzle. " + item.explanation;
      }

      $("math-answer-input").disabled = true;
      $("math-form").querySelector("button").disabled = true;
    } else {
      $("math-feedback").textContent =
        "Not quite. Try again, or use the hint to rethink it!";
    }
  }

  function renderWord() {
    const item = wordPuzzles[wordIndex % wordPuzzles.length];

    $("word-card").innerHTML = `
      <p class="challenge-number">Word puzzle ${wordIndex + 1}</p>
      <h4 class="challenge-question" style="letter-spacing:5px">
        ${item.scrambled}
      </h4>
      <p class="challenge-hint">💡 Hint: ${item.hint}</p>
    `;

    $("word-answer-input").value = "";
    $("word-answer-input").disabled = false;
    $("word-feedback").textContent = "";
    $("word-form").querySelector("button").disabled = false;
  }

  function checkWord(event) {
    event.preventDefault();

    const item = wordPuzzles[wordIndex % wordPuzzles.length];
    const answer = $("word-answer-input").value
      .trim()
      .replace(/\s+/g, "")
      .toUpperCase();

    const key = String(wordIndex % wordPuzzles.length);

    if (answer === item.word) {
      if (!progress.solvedWords.includes(key)) {
        progress.solvedWords.push(key);
        awardXP(10);
        $("word-feedback").textContent = "Brilliant! +10 XP. The word is " + item.word + ".";
      } else {
        $("word-feedback").textContent = "Correct! You've already earned XP for this word.";
      }

      $("word-answer-input").disabled = true;
      $("word-form").querySelector("button").disabled = true;
    } else {
      $("word-feedback").textContent =
        "Not quite! Check the letters and try again.";
    }
  }

  function renderCourses() {
    const container = $("course-list");
    container.innerHTML = "";

    courses.forEach((course) => {
      const completedLessons = course.lessons.filter((_, index) =>
        progress.completed.includes(course.id + ":" + index)
      ).length;

      const percent = Math.round(
        (completedLessons / course.lessons.length) * 100
      );

      const card = document.createElement("article");
      card.className = "course-card";

      const icon = document.createElement("div");
      icon.className = "course-icon";
      icon.textContent = course.icon;

      const title = document.createElement("h4");
      title.textContent = course.title;

      const description = document.createElement("p");
      description.textContent = course.description;

      const level = document.createElement("small");
      level.textContent = course.level + " • " +
        course.lessons.length + " lessons";

      const progressBar = document.createElement("div");
      progressBar.className = "course-progress";

      const progressFill = document.createElement("span");
      progressFill.style.width = percent + "%";
      progressBar.appendChild(progressFill);

      const progressText = document.createElement("small");
      progressText.textContent = percent + "% completed";

      const button = document.createElement("button");
      button.className = "learning-primary";
      button.textContent = percent === 100 ? "Review course" : "Continue course";
      button.addEventListener("click", () => openCourse(course.id));

      card.append(
        icon, title, description, level,
        progressBar, progressText, button
      );

      container.appendChild(card);
    });
  }

  function openCourse(courseId) {
    selectedCourse = courses.find((course) => course.id === courseId);
    if (!selectedCourse) return;

    $("course-lesson").hidden = false;
    selectedLesson = selectedCourse.lessons.findIndex((_, index) =>
      !progress.completed.includes(selectedCourse.id + ":" + index)
    );

    if (selectedLesson === -1) selectedLesson = 0;

    renderLesson();

    $("course-lesson").scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }

  function renderLesson() {
    const lesson = selectedCourse.lessons[selectedLesson];
    const lessonKey = selectedCourse.id + ":" + selectedLesson;
    const completed = progress.completed.includes(lessonKey);

    currentCourseQuestionAnswered = false;

    const container = $("course-lesson");
    container.innerHTML = "";

    const level = document.createElement("p");
    level.className = "lesson-level";
    level.textContent = selectedLesson < 2
      ? "BEGINNER"
      : selectedLesson === 2 ? "INTERMEDIATE" : "ADVANCED";

    const heading = document.createElement("h3");
    heading.textContent = selectedCourse.icon + " " + lesson.title;

    const body = document.createElement("p");
    body.textContent = lesson.body;

    const points = document.createElement("ul");
    lesson.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      points.appendChild(li);
    });

    const question = document.createElement("h4");
    question.style.marginTop = "22px";
    question.textContent = lesson.question;

    const options = document.createElement("div");
    options.className = "course-options";
    options.style.display = "grid";
    options.style.gap = "9px";

    const feedback = document.createElement("p");
    feedback.className = "learning-feedback";
    feedback.setAttribute("aria-live", "polite");

    lesson.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "learning-secondary";
      button.style.textAlign = "left";
      button.textContent = option;

      button.addEventListener("click", () => {
        if (currentCourseQuestionAnswered) return;

        currentCourseQuestionAnswered = true;

        if (index === lesson.answer) {
          feedback.textContent = "Correct! " + lesson.explanation;

          if (!completed) {
            progress.completed.push(lessonKey);
            awardXP(25);
            feedback.textContent += " +25 XP earned!";
          } else {
            feedback.textContent += " Lesson already completed.";
          }

          renderCourses();
          button.style.borderColor = "#43d7ae";
        } else {
          feedback.textContent =
            "Not quite. Revisit the lesson and try again.";
          currentCourseQuestionAnswered = false;
        }

        Array.from(options.children).forEach((child) => {
          child.disabled = currentCourseQuestionAnswered;
        });

        if (currentCourseQuestionAnswered) {
          nextButton.disabled = false;
        }
      });

      options.appendChild(button);
    });

    const nextButton = document.createElement("button");
    nextButton.className = "learning-primary";
    nextButton.style.marginTop = "18px";
    nextButton.textContent =
      selectedLesson === selectedCourse.lessons.length - 1
        ? "Finish course"
        : "Next lesson →";
    nextButton.disabled = !completed;

    nextButton.addEventListener("click", () => {
      if (!completed && !progress.completed.includes(lessonKey)) {
        return;
      }

      if (selectedLesson < selectedCourse.lessons.length - 1) {
        selectedLesson++;
        renderLesson();
      } else {
        container.innerHTML = `
          <h3>🎉 Course complete!</h3>
          <p>You've finished ${selectedCourse.title}.</p>
          <p>Come back to review the lessons whenever you want.</p>
          <button id="course-back" class="learning-primary">
            Back to all courses
          </button>
        `;

        $("course-back").addEventListener("click", () => {
          container.hidden = true;
          renderCourses();
        });

        renderCourses();
      }
    });

    container.append(level, heading, body, points, question, options, feedback, nextButton);
  }

  function switchTab(tabName) {
    document.querySelectorAll(".learning-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.tab === tabName);
    });

    document.querySelectorAll(".learning-page").forEach((page) => {
      page.classList.toggle("active", page.id === "learning-" + tabName);
    });
  }

  function openHub() {
    $("learning-hub").hidden = false;
    document.body.style.overflow = "hidden";
    renderStats();
  }

  function closeHub() {
    $("learning-hub").hidden = true;
    document.body.style.overflow = "";
  }

  function bindEvents() {
    $("open-learning-hub").addEventListener("click", openHub);
    $("close-learning-hub").addEventListener("click", closeHub);

    $("learning-hub").addEventListener("click", (event) => {
      if (event.target === $("learning-hub")) closeHub();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !$("learning-hub").hidden) {
        closeHub();
      }
    });

    document.querySelectorAll(".learning-tab").forEach((tab) => {
      tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    });

    $("riddle-answer").addEventListener("click", revealRiddle);

    $("next-riddle").addEventListener("click", () => {
      riddleIndex = (riddleIndex + 1) % riddles.length;
      renderRiddle();
    });

    $("math-form").addEventListener("submit", checkMath);

    $("next-math").addEventListener("click", () => {
      mathIndex = (mathIndex + 1) % mathPuzzles.length;
      renderMath();
    });

    $("word-form").addEventListener("submit", checkWord);

    $("next-word").addEventListener("click", () => {
      wordIndex = (wordIndex + 1) % wordPuzzles.length;
      renderWord();
    });

    $("learn-word").addEventListener("click", () => {
      if (progress.learnedWords.includes(today())) return;

      progress.learnedWords.push(today());
      awardXP(5);
      $("learn-word").disabled = true;
      $("learn-word").textContent = "Word learned today ✓";
    });

    $("next-grammar").addEventListener("click", () => {
      grammarIndex = (grammarIndex + 1) % grammarTips.length;
      showGrammar(grammarTips[grammarIndex]);
    });
  }

  function init() {
    renderStats();
    setDailyContent();
    renderRiddle();
    renderMath();
    renderWord();
    renderCourses();
    bindEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();