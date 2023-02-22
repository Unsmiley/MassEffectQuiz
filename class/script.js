	/* LIST OF VARIABLES */

	var questionState = 0; //Keeps track of users place in quiz
	var quizActive = true; //True until last question is answered

	var userStats = [
	  0, //infiltrator
	  0, //sentinel
	  0, //vanguard 
	  0, //soldier
	  0, //engineer 
	  0 //adept
	];

	var tempStats = userStats; //Holds stat increases relating to user selection

	/* QUIZ BUILDING VARIABLES */

	//The following array contains all question text elements

	var questionText = [
	  "If a fight were to break out, where would you be?", //q1
	  "What was the first weapon you ever selected when exploring the Collector Ship?", //q2
	  "A horde of enemies is coming. Which battlefield do you choose to engage them on?", //q3
	  "In combat, the most important trait is:", //q4
	  "As a child, what did talent did you value most?", //q5
	  "You've got a bit of free time in-between appointments. How do you spend it?", //q6
	  "When it comes to fighting an enemy, you would rather...", //q7
	  "When it comes to handling assignments...", //q8
	  "When it comes to every day routines...", //q9
	  "The most valuable tool when it comes to problem solving has to be...", //q10
	  "Your platoon is under a surprise attack! Luckily you thought to rest in your armor, but you have only a few seconds to find something to defend yourself with before you are overwhelmed by enemies; what do you grab?", //q11 
	  "The best way to start a fight has to be...", //q12
	  "When it comes to reputations, you would rather be...", //q13
	  "You missed your transport! What course of action do you take to avoid being even more late?", //q14
	  "When solving a problem, it is better to be...", //q15
	  "The virtue you value most has to be..." //q16
	];

	//The following array contains all answer text elements for each question

	var answerText = [ //question 1 answers                         
	  [
	    "Hauling ass in the opposite direction!",
	    "Providing support behind some of my beefier friends.",
	    "Charging into the fray, giving others an opportunity to take shelter.",
	    "Wherever the action is, laying down as much hurt as physically possible.",
	    "Trying to deescalate the situation, ideally from the sidelines.",
	    "In the midst of the crowd, sweeping people off their feet and causing mayhem."
	  ],

	  //question 2 answers
	  [
	    "The Revenant. There's nothing like mowing down hordes of enemies with impunity.",
	    "The Claymore. There are shotguns, and then there are machines of war that turn your foes into mist and bone.",
	    "The Widow. One shot, one overkill."
	  ],

	  //question 3 answers
	  [
	    "Open ground, with hastily-made barricades for shelter. We can annihilate them quickly by pointing and shooting down range.",
	    "An ambush! I'll place my soldiers at strategic sections around the battlefield, and massacre them once they step into our killbox.",
	    "We rush them! A few well-placed flash grenades, and my berserkers will tear them apart while they're lost in the confusion.",
	    "Dig in and kill 'em with bug bites. It may take longer, but by fortifying our positions and using specialized tools, we'll succeed without losing a single person.",
	    "Break them psychologically. I'll put the majority of our resources into one unkillable unit, and force the horde into an unwinnable situation."
	  ],

	  //question 4 answers
	  [
	    "To be faster",
	    "To be stronger",
	    "To be more resourceful",
	    "To be adaptive in your thinking"
	  ],

	  //question 5 answers
	  [
	    "My ability to know who was using the stairs by their footsteps.",
	    "My ability to remember obscure facts.",
	    "My ability to focus on anything for as long as I wanted.",
	    "My ability to tell what others wanted or needed without being told."
	  ],

	  //question 6 answers                
	  [
	    "Might as well get a quick workout in...",
	    "Time to download those omni-tool drivers that I've been putting off.",
	    "I'm feeling scattered; I'll meditate and try to center myself before my next encounter.",
	  ],

	  //question 7 answers
	  [
	    "Demolish them with a single efficient strike.",
	    "Wear them down with defense while waiting for an opening.",
	    "Crush them with immediate, overwhelming force."
	  ],

	  //question 8 answers
	  [
	    "It's better to focus entirely on one task until it's done, and finish without being overwhelmed.",
	    "It's better to work a little on everything, and finish without running behind."
	  ],

	  //question 9 answers
	  [
	    "Taking a fresh approach to everything is best. It helps you not take things for granted.",
	    "Automating repetitive tasks is best. Having more time for what matters is invaluable."
	  ],

	  //question 10 answers
	  [
	    "Being able to entertain multiple solutions or perspectives.",
	    "Preparing for as many eventualities as possible.",
	    "Showing intiative by resolving the problem quickly and taking the most direct path."
	  ],

	  //question 11 answers
	  [
	    "My shield boosters. I can outlast my opponents in almost any situation with them.",
	    "My biotic amp. It may give me some fierce migraines, but this handy piece of wetware will let me rip my enemies apart with nothing but my mind.",
	    "My omni-tool kit. Something tells me I'm going to overclocking it for the foreseeable future, and I don't want my best resource to break down on me."
	  ],

	  //question 12 answers
	  [
	    "Up close and personal.",
	    "A vicious sneak attack.",
	    "A brutal sucker punch."
	  ],

	  //question 13 answers
	  [
	    "An enigmatic force wrapped in mystery, wealth and influence.",
	    "A public individual renowned for having unrivaled supernatural power and insight."
	  ],

	  //question 14 answers
	  [
	    "I can make a dead sprint to the next stop if I cut through the neighborhood!",
	    "My destination isn't that far... I should make it if I pace myself for a distant jog."
	  ],

	  //question 15 answers
	  [
	    "Able to find—or create—a solution from the options available to you.",
	    "Prepared for any situation, whether that be from your own resources or the people at your side."
	  ],

	  //question 16 answers
	  [
	    "Courage",
	    "Empathy",
	    "Discipline",
	    "Perserverance",
	    "Wisdom",
	    "Focus"
	  ]
	]

	//The following array contains all personality stat increments for each answer of every question

	var answerValues = [ //question 1 answer values
	  [

	    /*  var userStats = [
    0, //infiltrator
    0, //sentinel
    0, //vanguard 
    0, //soldier
    0, //engineer 
    0  //adept
  ]; */
	    [2, 0, 0, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0],
	    [0, 0, 0, 2, 0, 0],
	    [0, 0, 0, 0, 2, 0],
	    [0, 0, 0, 0, 0, 2]
	  ],

	  //question 2 answer values
	  [
	    [0, 0, 0, 2, 0, 0],
	    [0, 0, 2, 0, 0, 0],
	    [2, 0, 0, 0, 0, 0]
	  ],

	  //question 3 answer values
	  [
	    [0, 0, 0, 2, 0, 0],
	    [2, 0, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0],
	    [0, 0, 0, 0, 2, 0],
	    [0, 2, 0, 0, 0, 0]
	  ],

	  //question 4 answer values
	  [
	    [0, 0, 2, 0, 0, 0],
	    [0, 0, 0, 2, 0, 0],
	    [0, 0, 0, 0, 2, 0],
	    [0, 2, 0, 0, 0, 0]
	  ],

	  //question 5 answer values
	  [
	    [2, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 2, 0],
	    [0, 0, 0, 0, 0, 2],
	    [0, 2, 0, 0, 0, 0]
	  ],

	  //question 6 answer values
	  [
	    [0, 0, 0, 2, 0, 0],
	    [0, 0, 0, 0, 2, 0],
	    [0, 0, 0, 0, 0, 2]
	  ],

	  //question 7 answer values
	  [
	    [2, 0, 0, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0]
	  ],

	  //question 8 answer values
	  [
	    [2, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 2]
	  ],

	  //question 9 answer values
	  [
	    [0, 0, 0, 0, 0, 2],
	    [0, 0, 0, 0, 2, 0]
	  ],

	  //question 10 answer values
	  [
	    [0, 0, 0, 0, 0, 2],
	    [0, 2, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0]
	  ],

	  //question 11 answer values
	  [
	    [0, 2, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 2],
	    [0, 0, 0, 0, 2, 0]
	  ],

	  //question 12 answer values
	  [
	    [0, 0, 0, 2, 0, 0],
	    [2, 0, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0]
	  ],

	  //question 13 answer values
	  [
	    [2, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 2]
	  ],

	  //question 14 answer values
	  [
	    [0, 0, 2, 0, 0, 0],
	    [0, 0, 0, 2, 0, 0]
	  ],

	  //question 15 answer values
	  [
	    [0, 0, 0, 0, 2, 0],
	    [0, 2, 0, 0, 0, 0]
	  ],

	  //question 16 answer values
	  [
	    [0, 0, 2, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0],
	    [0, 0, 0, 2, 0, 0],
	    [0, 0, 0, 0, 2, 0],
	    [0, 0, 0, 0, 0, 2],
	    [2, 0, 0, 0, 0, 0]
	  ]

	]

	/* SHORTCUT VARIABLES */
	//so I don't have to keep typing

	var results = document.getElementById("results");
	var quiz = document.getElementById("quiz");
	var body = document.body.style;
	var printResult = document.getElementById("topScore");
	var buttonElement = document.getElementById("button");

	/* QUIZ FUNCTIONALITY */

	buttonElement.addEventListener("click", changeState); //Add click event listener to main button

	/* This function progresses the user through the quiz */

	function changeState() {

	  updatePersonality(); //Adds the values of the tempStats to the userStats										

	  if (quizActive) {

	    /*True while the user has not reached the end of the quiz */

	    initText(questionState); //sets up next question based on user's progress through quiz
	    questionState++; //advances progress through quiz

	    buttonElement.disabled = true; //disables button until user chooses next answer
	    buttonElement.innerHTML = "Please select an answer";
	    buttonElement.style.opacity = 0.7;

	  } else {

	    /*All questions answered*/

	    setCustomPage(); //runs set up for result page
	  }
	}

	/* This function determines the question and answer content based on user progress through the quiz */

	function initText(question) {

	  var answerSelection = ""; //text varialbe containting HTML code for the radio buttons' content

	  /* Creates radio buttons based on user progress through the quiz - current 'id' generation is not w3c compliant*/

	  for (i = 0; i < answerText[question].length; i++) {

	    answerSelection += "<li><input type='radio' name='question" +
	      (question + 1) + "' onClick='setAnswer(" + i + ")' id='" + answerText[question][i] + "'><label for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";
	  }

	  document.getElementById("questions").innerHTML = questionText[question]; //set question text
	  document.getElementById("answers").innerHTML = answerSelection; //set answer text
	}

	/* This function is called when a user selects an answer, NOT when answer is submitted */

	function setAnswer(input) {

	  clearTempStats(); //clear tempStats in case user reselects their answer

	  tempStats = answerValues[questionState - 1][input]; //selects personality values based on user selection 

	  if (questionState < questionText.length) {

	    /*True while the user has not reached the end of the quiz */

	    buttonElement.innerHTML = "Continue";
	    buttonElement.disabled = false;
	    buttonElement.style.opacity = 1;

	  } else {

	    /*All questions answered - QUESTION TIME IS OVER!*/

	    quizActive = false;
	    buttonElement.innerHTML = "Let's see those results!"
	    buttonElement.disabled = false;
	    buttonElement.style.opacity = 1;
	  }
	}

	/* This function sets tempStats to 0 */

	function clearTempStats() {

	  tempStats = [0, 0, 0, 0, 0, 0];
	}

	/*This function adds the values of the tempStats to the userStats based on user selection */

	function updatePersonality() {

	  for (i = 0; i < userStats.length; i++) {
	    userStats[i] += tempStats[i];
	  }
	}

	/* This function determines the highest personality value */

	function setCustomPage() {

	  var highestStatPosition = 0; 

	  /* This statement loops through all personality stats and updates highestStatPosition based on a highest stat */

	  for (i = 1; i < userStats.length; i++) {

	    if (userStats[i] > userStats[highestStatPosition]) {
	      highestStatPosition = i;
	    }
	  }

	  displayCustomPage(highestStatPosition); //passes the index value of the highest stat discovered

	  /* Hides the quiz content, shows results content */
	  quiz.style.display = "none";
	}

	/* BUILDS WEB PAGE AS PER RESULTS OF THE QUIZ */

	/* The following code manipulates the CSS based on the personality results */

	function displayCustomPage(personality) {
	  switch (personality) {

	    case 0: //infiltrator code
	      results.style.display = "inline-block";
	      results.classList.add("infiltrator");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundColor = "#008080";
	      body.backgroundSize = "100% auto";
	      printResult.innerText = "An Infiltrator! \n \n Infiltrators are the most talented assassins in the galaxy, blending their tech powers with high burst damage to dismantle even the most powerful opponents as quickly as possible. In most cases, infiltrators weaponize a potent tactical cloak, sacrificing shield regeneration for the ability to move unseen in and out of danger. This cloak, partnered with the element of surprise, give infiltrators the greatest damage output of the classes while affording them temporary safety as well. \n \n While most infiltrators are glass cannons, they will compensate by combining high movement speed and awareness of their surroundings to avoid being caught out by their foes. The best infiltrators focus their attention on only the most dangerous enemy units, leaving the rabble at the mercy of their companions.";
	      break;

	    case 1: //sentinel
	      results.style.display = "inline-block";
	      results.classList.add("sentinel");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundColor = "#008080";
	      body.backgroundSize = "100% auto";
	      printResult.innerText = "A Sentinel! \n \n Sentinels are built to be survivors in every sense of the word. The most support-oriented of the classes, sentinels blend biotics and tech powers to strip enemies of any defense, while supporting their own teammates with advanced medical capabilities. \n \n While rivaling the adept for the lowest damage output of the classes, the sentinel compensates by having the invaluable tech armor, which gives them an immediate shield boost that not only gives them the strongest defense of any class, but can deal a fatal pulse of energy when it is depleted, giving its user one last defense against any enemy unfortunate enough to be caught in its radius. \n \n The best sentinels remain with their team, taking what damage their partners can't while distributing both defensive and offensive support with their wide array of abilities.";
	      break;

	    case 2: //vanguard
	      results.style.display = "inline-block";
	      results.classList.add("vanguard");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundColor = "#008080";
	      body.backgroundSize = "100% auto";
	      printResult.innerText = "A Vanguard! \n \n Vanguards are the deadliest close quarters combatants on the battlefield. Making up for what they lack in firepower with sheer mobility, vanguards are able to close vast distances with their trademark Biotic Charge ability, rattling enemies and keeping their shields high for dealing with the groups of foes they tend to surround themselves in.\n \n Vanguards serve two main purposes—to eliminate key targets in a small amount of time, normally by the 1-2 combo of charging their target, followed by a well-aimed shotgun round—and to focus enemy attention on themselves. \n \n By blitzing entire waves of enemies, or more dangerous foes such as brutes or ATLAS mechs, a good vanguard is able to dance with death, aggravating enemies to the point of tunnel-visioning, so that their teammates can deal damage with little interference.";
	      break;

	    case 3: //soldier
	      results.style.display = "inline-block";
	      results.classList.add("soldier");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundColor = "#008080";
	      body.backgroundSize = "100% auto";
	      printResult.innerText = "A Soldier! \n \n Soldiers are among the most robust warriors in the galaxy. Strong, fast, and experts in waging war, soldiers seek to overwhelm their enemies with firepower and sheer force. Though they lack the resources of tech specialists or biotics, soldiers will compensate by preparing to confront any nature of enemy before stepping foot on the battlefield. \n \n Trained in every manner of handheld weaponry, a good soldier puts an enemy at a disadvantage by stripping away their defenses and incapacitating them, whether by means of explosives, special ammo, or disruptive concussive shots to throw them off-balance. \n \n The best soldiers are prepared for any combat scenario, capable of fending off hordes of enemies or focusing down deadly specialized units.";
	      break;

	    case 4: //engineer
	      results.style.display = "inline-block";
	      results.classList.add("engineer");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundColor = "#008080";
	      body.backgroundRepeat = "repeat";
	      printResult.innerText = "An Engineer! \n \n Engineers are the undisputed masters of area denial, exceeding all other classes when it comes to holding a defensive position against an onslaught of enemies. \n \n While typically favoring either shotguns or machine pistols, engineers use tech powers to overwhelm their opponents both physically and mentally; this can come in the form of harassment with the ever-present combat drone, hacking enemies mechs to cause disruption, or incapacitating unshielded opponents with chemical fire and ice. \n \n The best engineers shape the ebb and flow of the battlefield itself, defending key positions while also using their abilities to safely force their way into heavily defended chokepoints for their teammates.";
	      break;

	    case 5: //adept
	      results.style.display = "inline-block";
	      results.classList.add("adept");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundColor = "#008080";
	      body.backgroundRepeat = "repeat";
	      printResult.innerText = "An Adept! \n \n Adepts make up in crowd control what they lack in sheer firepower. Masters of biotic warfare, adepts channel dark energy in all its deadly forms, staggering even the most heavily defended foes and ripping apart the unprepared. \n \n An unchecked adept can singlehandedly turn the tide of any given battle, using their biotic powers to bombard their enemies with warp fields, throw and pull objects and enemies hard enough to shatter bones, or immobilize entire groups with singularities. \n \n The best adepts stay with their teams, often serving as the rear guard, and focus attention on immobilizing unshielded enemies to take them out of the fight, or securing the backlines against flanking enemies such as husks, FENRIS mechs, or varren.";
	      break;

	    default:
	      document.getElementById("error").style.display = "inline-block";

	  }
	}
