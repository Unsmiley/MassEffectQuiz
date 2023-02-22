	/* LIST OF VARIABLES */

	var questionState = 0; //Keeps track of users place in quiz
	var quizActive = true; //True until last question is answered

	var userStats = [
	  0, //human
	  0, //turian
	  0, //asari
	  0, //salarian
	  0, //krogan 
	  0, //quarian
	  0, //volus
	  0, //batarian
	  0, //rachni
	  0, //geth
	];

	var tempStats = userStats; //Holds stat increases relating to user selection

	/* QUIZ BUILDING VARIABLES */

	//The following array contains all question text elements

	var questionText = [
	  "What statement would hurt you the most?", //q1
	  "What is your most admirable quality?", //q2
	  "What would a potential partner likely value most about you at first glance?", //q3
	  "What will be your most important legacy?", //q4
	  "How would you define your romantic leaning?", //q5
	  "What will be the last words you are likely to hear or say?", //q6
	  "You find yourself the only pilot of a doomed space station. The station's failing mass effect core has been damaged in a recent raid, and if left unattended the structure will soon collide with a nearby moon, killing thousands of colonists. <br><br> There are no functioning escape pods, and impact will occur in a matter of minutes. What will you do?", //q7
	  "Some time after rising through the ranks of your homeworld's most elite military unit, you find yourself nominated to join the Office of Special Tactics and Reconnaissance. Several weeks into your tenure as Spectre, you discover that a high-ranking official in your race's military hierarchy is engaging in highly illegal activities. <br><br> It isn't possible that your superiors on the homeworld didn't know about this exchange, yet they've done little or nothing to stop this official. How do you proceed?", //q8
	  "What is your greatest fear?", //q9
	  "It's been a rough day at work, and you just ordered takeout. What's on the menu?", //q10
	  "The couple next door won't stop being obnoxiously loud during their nighttime activities. What do you put on to get them to quiet down?", //q11 
	  "What's one thing you've got to accomplish on your bucket list?", //q12
	  "A three-way gang war is taking place not too far from where you live. As a philanthropist with a vested interest in keeping casualities and damage at a minimum, an anonymous donation could tip the scales of the conflict. Who do you back?", //q13
	  "When it comes to having a fatal flaw, yours is:", //q14
	  "When dealing with enemies, it's better to:", //q15
	  "You would rather be:", //q16
	  "For your height, you are considered:", //q17
	  "The Citadel Council has made some extreme choices in the past, including near-genocide. Do you think these actions were justified?", //q18
	  "As far as careers go, your ideal would be:", //q19
	  "Intellectual intelligence is more important than emotional intelligence.", //q20
	  "The best defensive environment is:", //q21
	  "The rules...", //q22
	  "The Reaper War is over, and the galaxy is rebuilding at a steady pace. You and your crew realize that this is the ideal time to help reshape galactic politics for the better. What campaign do you embark on?", //q23
	  "Your gun is jammed, and you're forced to hold a vital position against an onslaught of enemies. Luckily, you came prepared! Which melee weapon did you select for just such an occasion?", //q24
	  "The Reaper threat is gone, but countless citizens of the galaxy are hurt and resentful. After all, there's plenty of blame to go around for how costly the war was, particularly because of:", //q25
	  "It's game night! Your crew gathers around for a fun night of competition and intrigue. As the host, what game do you decide on?", //q26
	  "As member of your colony's city council, you have the deciding vote on a new establishment. The colony would be best served by:", //q27
	  "It is better to be...", //q28
	  "What is your ideal definition of a hero?", //q29
	  "The holidays are nearing, and your phone starts ringing. One of your aunts is trying to reach you about your family's plans.", //q30
	  "If there's anything to appreciate about family gatherings, it's...", //q31
	  "You come across someone who assaulted you in your youth. The scars they left you still ache some nights...how do you get revenge?", //q32
	  "Your boss just screwed you out of your yearly bonus, and now you can't take that vacation to Illium. How do you retaliate?", //q33
	  "Your first impression gives an honest impression of what to expect from your personality.", //q34
	  "You are nearing the end of your life when a powerful asari matriarch who has heard of your deeds comes with a gift to ease your last moments. By melding her mind with yours, your consciousness can experience anything you want. What do you choose?", //q35
	  "When encountering potentially dangerous strangers, it's better to be...", //q36
	  "You're beginning a campaign of 'Galaxy of Fantasy' with some friends. Which class do you choose?", //q37
	  "Even in battle, it is important to conduct yourself honorably.", //q38
	  "Shore leave is almost up. How do you spend your last hour on the Citadel?", //q39
	  "When it comes to personal qualities, you would rather have...", //q40
	  "Where you come from, money is...", //q41
	  "Which kind of freedom is most important to you?", //q42
	  "Which option did you choose to end the Reaper threat?", //q43
	  "Where are you in life?", //q44
	  "For your age, you have:", //q45


	];


	//The following array contains all answer text elements for each question

	var answerText = [
	  //question 1 answers                         
	  [
	    "That I am a dishonorable person.",
	    "That I do not deserve to exist.",
	    "That I am an idiot.",
	    "That my body is more important than my mind or soul.",
	    "That I am not afraid to hurt other people to get what I want.",
	  ],

	  //question 2 answers
	  [
	    "I'm very resourceful when it comes to problem solving.",
	    "I never back down from a challenge.",
	    "There's very little I can't persuade other people to do.",
	    "I may not be very talented, but I'm a hard worker.",
	    "I'm the ultimate team player."
	  ],

	  //question 3 answers
	  [
	    "My looks. I'm not ashamed to say that I'm physically above average.",
	    "My brains. Being an expert on something you care about is sexy!",
	    "My resources. Money can't buy you love, but it can definitely buy you options.",
	    "My devotion. Whether behind closed doors or in the trenches, I always give 100% of myself to others.",
	    "My mystique. The lack of the obvious is what draws others to want to know me."
	  ],

	  //question 4 answers
	  [
	    "My reputation. Above all else, I want people to remember me as I deserve.",
	    "My family. As long as the people I love don't forget me, I'll never really die.",
	    "My work. I don't want to leave the world the same as I found it.",
	    "My love. Everything else pales in comparison to the life I lived with my closest friend.",
	    "My growth. I'm far from perfect, but I've come a long way from where I was."
	  ],

	  //question 5 answers
	  [
	    "Passive. I prefer or am used to being the recipient of affection.",
	    "Aggressive. I prefer or am used to initiating romance towards my prospects.",
	    "Inapplicable. I actively avoid romance."
	  ],

	  //question 6 answers                
	  [
	    "You sold your soul for a path of blood.",
	    "This soup tastes funny...",
	    "We cannot get out. They are coming.",
	    "There's got to be SOME way to fuck it...",
	    "It is a far, far better rest that I go to than I have ever known."
	  ],

	  //question 7 answers
	  [
	    "It all boils down to basic math. By detonating the core prior to impact, I will save thousands of lives. The only people who will die are those who would have been killed in the crash anyway.",
	    "I refuse to take any of the courses given to me and leave it to someone else. It isn't up to me to decide who lives or dies.",
	    "I let a coin flip decide my fate. I'm dead either way, and I have no reason to care for the lives of others whom I've never met.",
	    "By working quickly, I can slow our descent while someone else contacts the colony to start evacuations! It's a risk, but I'd rather chance an all or nothing bet to save everyone than save no one.",
	    "Wait, isn't there a private luxury shuttle anchored next to the captain's cabin? If I'm quick, I can make it out of here and no one will be the wiser...",
	  ],

	  //question 8 answers
	  [
	    "I appeal to my homeworld's leadership about the issue. I don't have all the facts and I owe my people's government the benefit of the doubt before taking this to the Council.",
	    "I take the issue before the Council. No matter what my shared history is with my people's military, my duty dictates that I answer to the highest authority.",
	    "I side with my people. My appointment as Spectre doesn't undo the years of mistreatment my race endured at the hands of the Council.",
	    "I hold the intel as an ace up my sleeve. This information could jeopardize my people's place in galactic politics, which is exactly the kind of leverage I can use to gain even more influence.",
	    "I turn a blind eye. If the Council hasn't noticed after all this time, it obviously isn't hurting them.",
	  ],

	  //question 9 answers
	  [
	    "Being alone for the rest of my life.",
	    "The world finding out my secrets.",
	    "Dying a painful, shameful death.",
	    "Everything that I've accomplished coming undone.",
	    "Losing the people I love."
	  ],

	  //question 10 answers
	  [
	    "Ramen! I hear it's a delicacy on Earth...",
	    "Varren steak. I like my meat with extra murder baked into it.",
	    "Asari calamari gumbo. Seems a little cannibalistic, but it goes great over rice.",
	    "Haggis. Even if most of it tastes like ass, I know a place that makes it taste like mighty fine ass."
	  ],

	  //question 11 answers
	  [
	    "Barely Legal Elcor Heifer Bares All! 18 Hour Edition.",
	    "Two Girls, One Emergency Induction Port.",
	    "Skyllian Backroom Blitz: First Contact with these Rough Batarian Daddies!",
	    "DVDIS 06: This Voluptuous Volus Gets Stuck Halfway Through an Elevator—With Vorcha Construction Workers on Either Side!!",
	    "Tuchanka Twink 4: Shy Beefy Krogan Gets Bullied by Harem of Savage Salarians!",
	  ],

	  //question 12 answers
	  [
	    "I know they keep telling me it's a bad idea...but I've just GOT to lick a drell before I go. I don't care how bad the trip is.",
	    "By God, I'm either going to see what's under those asari tentacle-scalp things, or I'll die trying.",
	    "I don't know if I'd be the first to sleep with every sentient alien species, but I'm going to give it the old college try anyway.",
	    "Enough with all this war! I'm going on a tour of every homeworld I can find. Art, food, movies, music, culture—I want to see and know it all!"
	  ],

	  //question 13 answers
	  [
	    "The Eclipse. My money will assist their best operatives in assassinating the leaders of the other two groups, while their biotic troops and mechs will wreak havoc on their uncoordinated subordinates.",
	    "The Blood Pack. By pumping their soldiers full of steroids and experimental regenerative drugs, they'll be able to sweep over their enemies with sheer numbers and raw muscle.",
	    "The Blue Suns. They've a reputation for smuggling high-end weapons throughout the galaxy—my influence will help move things along for them, and end this conflict with unequaled firepower."
	  ],

	  //question 14 answers
	  [
	    "Holding on to grudges.",
	    "Believing I can do things better than anyone else, without anyone else.",
	    "I don't know—or care—when to stop.",
	    "I'll step over people if it means getting ahead.",
	    "I can be passive to the point of harm—for myself as well as others."

	  ],

	  //question 15 answers
	  [
	    "Remove any possibility of retaliation in the future.",
	    "Hold them to solemn oaths for the sake of peace.",
	    "Grind them into subservience; make victory work for you."
	  ],

	  //question 16 answers
	  [
	    "Feared.",
	    "Respected."
	  ],

	  //question 17 answers
	  [
	    "Thin.",
	    "Pretty average.",
	    "Solidly built.",
	    "Thick."
	  ],

	  //question 18 answers
	  [
	    "Genocide is never acceptable, much less forgiveable.",
	    "Their choices were harsh, but they were for the best at the time.",
	    "They didn't go far enough; some threats can't be allowed to exist."
	  ],

	  //question 19 answers
	  [
	    "To travel the galaxy, see amazing sights, and face dangerous foes as a mercenary.",
	    "To enlist in my homeworld's military and defend my people.",
	    "To be a diplomat, and meet with representatives from every race and enjoy their culture.",
	    "I'd like to do something creative, maybe with music, literature, or art, and see what the other races have to offer as well.",
	    "To be a scientist. Technology has advanced so much in the past few decades alone: I'd give anything to see how far we can keep going.",
	  ],

	  //question 20 answers
	  [
	    "I agree completely.",
	    "It tends to be more useful in my day to day, but emotional intelligence has its place.",
	    "I value both equally.",
	    "In my life, emotional intelligence is more useful, more often.",
	    "I disagree completely."
	  ],


	  //question 21 answers
	  [
	    "One that is completely hostile to enemies, even at the expense of natural beauty.",
	    "One with planned infrastructure to support its defenders in any convential attack.",
	    "One completely impervious to any manner of harm, and barren of exploitable resources."
	  ],


	  //question 22 answers
	  [
	    "Aren't stand-ins for morality or common sense.",
	    "Are there to protect us.",
	    "Are subjective based on culture and values.",
	    "Should be followed when possible, and revised when necessary."
	  ],


	  //question 23 answers
	  [
	    "With the Batarian Hegemony all but extinct, a major power player for the slave trade is out of commission. I'm going to spearhead the effort to eliminate slavery from the Milky Way Galaxy.",
	    "The Reapers scoured countless worlds, leaving vast areas devoid of influence and management. With this power vacuum, the real estate market will be lucrative...with my help in balancing the scales.",
	    "The war was devasting for the mercenary scene, but it did wonders for unifying the races. Now is the time to forge a new organization from the remnants. With veteran members from each of the surviving races, we will be a political and military force to be reckoned with.",
	    "Relative harmony among the races has been established due to a common enemy in the Reapers, but we can't afford to make the same mistakes. There's a lot of diplomatic work to be done before peace is a mainstay."
	  ],


	  //question 24 answers
	  [
	    "A massive hammer. With my might, both crowds of fodder as well as mighty foes will fall to me.",
	    "A sword with a peerless edge. By staying flexible and quick on my feet, I can kill with impunity while staying safe.",
	    "A mighty halberd. By positioning myself correctly, I can funnel my enemies into a manageable line. The work may be rote and monotonous, but by digging in I will be safe."
	  ],


	  //question 25 answers
	  [
	    "The asari! Their lie of omission about housing a Prothean beacon on Thessia cost us billions of lives that could have been saved by the Crucible.",
	    "The salarians! They were so afraid of repeating their mistakes with the Rachni and the Genophage that they nearly failed to address the larger threat.",
	    "The humans! Cerberus grew from a splinter organization to a major military force under the Alliance's noses,  nearly took over the Citadel after becoming indoctrinated, and almost got the entire galaxy harvested!",
	    "The Council! It isn't enough that Shepard warned them about the Reapers years in advance, but they didn't do anything to prepare, even after Sovereign nearly killed them!"
	  ],


	  //question 26 answers
	  [
	    "A murder mystery! Time to flex my powers of deduction...",
	    "A real-estate board game! I can make out like a bandit AND ruin friendships!",
	    "A card game with real stakes! I plan to walk away from tonight a little richer.",
	    "I'll opt for a good ol' arm wrestling competition. Time to remind these milkdrinkers who's on top!",
	    "Grab the booze, the ping pong balls and the plastic cups! I'll drink every one of these lightweights under the table."
	  ],

	  //question 27 answers
	  [
	    "A world-class performing arts center, with the best musicians and teachers this side of the Traverse. Build culture, and wealth will follow.",
	    "A revolutionary finance center, one that allows for a better labor force and will bring enormous commerce. Expanding our earnings, and our colony itself will expand."
	  ],

	  //question 28 answers
	  [
	    "A savant in the things that interest you, even if you seem different to others.",
	    "A prodigy in the things that interest you, even if you are a little awkward sometimes.",
	    "Roughly equal all around, as long as you get along with others."
	  ],

	  //question 29 answers
	  [
	    "Someone who fixes the dirtier parts of society, and doesn't care how others view them.",
	    "Someone who serves as a symbol for others, and has an intangible value that makes everyone else better for knowing them.",
	    "Someone who overcomes terrible trials through great effort, and always finds a way to win against impossible odds."
	  ],

	  //question 30 answers
	  [
	    "Ugh, I hate talking over the phone. Just text me the information!",
	    "I'll write the instructions down. Any chance to speak with family shouldn't be taken for granted."
	  ],

	  //question 31 answers
	  [
	    "Being able to see who's still around. Having kids in our culture is a rare occurrence.",
	    "Being able to see the new faces. Time is fleeting in our culture; it's good to know my family will continue.",
	    "Irrelevant; I have no family, or at least no one I'm all too anxious to see."
	  ],

	  //question 32 answers
	  [
	    "Hack into every account of theirs you can find, and ruin them in as many ways as possible.",
	    "Wait until they're alone, and return your pain ten-fold.",
	    "I've made a lot of friends since then. I'll call in a few favors and get medieval on them.",
	    "The past is the past. I don't need to get even."
	  ],

	  //question 33 answers
	  [
	    "It's so simple, just hear me out: I eat my boss.",
	    "I bang both of their parents to help them make a less disappointing offspring.",
	    "I'll stash some illegal drugs in their desk and anonymously call in the authorities.",
	    "I'll keep my head down and search for another job. No need to burn bridges."
	  ],

	  //question 34 answers
	  [
	    "More or less; my disposition reflects my inner self pretty reliably.",
	    "Not so fast; ever hear the saying, 'still waters run deep'?"
	  ],

	  //question 35 answers
	  [
	    "To relive the happiest moments of my life, and dwell on them until my time comes.",
	    "To live another life entirely, experiencing decades of happiness away from the pain that was my existence.",
	    "To help my aging mind see my old friends and loved ones, and share a final moments as I drift off.",
	    "Nothing but her companionship. I'm satisfied with the life I lived. I'm ready."
	  ],

	  //question 36 answers
	  [
	    "Overestimated.",
	    "Underestimated."
	  ],

	  //question 37 answers
	  [
	    "The fighter.",
	    "The mystic.",
	    "The rogue.",
	    "The artificer.",
	    "The barbarian.",
	  ],

	  //question 38 answers
	  [
	    "Yes. I don't need to sink to my opponent's level to win.",
	    "No. When it comes to survival, honor isn't a factor for me."
	  ],

	  //question 39 answers
	  [
	    "I think I'll head over to that new jazz lounge that opened in the wards.",
	    "I'll take a stroll through the used car department and see if there's anything worth saving up for.",
	    "If I hurry, I can get the new Galaxy of Fantasy expansion before the shop on Zakera Ward closes..."
	  ],

	  //question 40 answers
	  [
	    "Insight into the thoughts and feelings of others.",
	    "The strength of heart to do what others won't.",
	    "An insatiable curiosity for learning the inner workings of the world."
	  ],


	  //question 41 answers
	  [
	    "A vehicle to a better life and social standing.",
	    "A tool for enabling people to achieve material satisfaction."
	  ],

	  //question 42 answers
	  [
	    "Freedom from discrimination.",
	    "Freedom to think and live how you wish.",
	    "Freedom from financial or emotional hardship."
	  ],

	  //question 43 answers
	  [
	    "Synthesis.",
	    "Destroy.",
	    "Control.",
	    "Refusal.",
	    "For me, the trilogy ended with the Citadel party, or with mods."
	  ],
	]

	//The following array contains all personality stat increments for each answer of every question

	var answerValues = [

	  //question 1 answer values
	  [
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	  ],

	  //question 2 answer values
	  [
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0]
	  ],

	  //question 3 answer values
	  [
	    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	  ],

	  //question 4 answer values
	  [
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
	    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
	  ],

	  //question 5 answer values
	  [
	    [0, 0, 2, 0, 0, 2, 0, 0, 0, 0],
	    [2, 2, 0, 0, 2, 0, 0, 2, 0, 0],
	    [0, 0, 0, 2, 0, 0, 2, 0, 2, 2]
	  ],

	  //question 6 answer values
	  [
	    [0, 0, 0, 0, 2, 0, 0, 2, 0, 0],
	    [0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0],
	    [2, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2]
	  ],

	  //question 7 answer values
	  [
	    [0, 0, 0, 2, 0, 0, 0, 0, 0, 2],
	    [2, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0],
	    [0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 2, 2, 0, 0]
	  ],

	  //question 8 answer values
	  [
	    [0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
	    [2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
	    [0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
	    [0, 0, 0, 0, 2, 2, 0, 0, 0, 0]
	  ],

	  //question 9 answer values
	  [
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
	    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0]
	  ],

	  //question 10 answer values
	  [
	    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0]
	  ],

	  //question 11 answer values
	  [
	    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
	    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
	    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0]
	  ],

	  //question 12 answer values
	  [
	    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
	  ],

	  //question 13 answer values
	  [
	    [1, 0, 2, 2, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
	    [1, 2, 0, 0, 0, 0, 0, 2, 0, 0]
	  ],

	  //question 14 answer values
	  [
	    [0, 2, 0, 0, 2, 0, 0, 0, 0, 0],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
	    [0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
	    [0, 2, 0, 0, 0, 2, 0, 0, 0, 0]
	  ],

	  //question 15 answer values
	  [
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0]
	  ],

	  //question 16 answer values
	  [
	    [0, 0, 0, 0, 2, 0, 0, 2, 0, 0],
	    [2, 2, 0, 0, 0, 0, 0, 0, 0, 0]
	  ],

	  //question 17 answer values
	  [
	    [0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
	    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	    [0, 0, 0, 0, 4, 0, 0, 0, 0, 0]
	  ],

	  //question 18 answer values
	  [
	    [0, 0, 0, 0, 0, 0, 0, 0, 8, 8],
	    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
	    [1, 1, 0, 0, 2, 2, 0, 0, 0, 0]
	  ],

	  //question 19 answer values
	  [
	    [0, 0, 0, 0, 2, 0, 0, 2, 0, 0],
	    [2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
	    [0, 0, 0, 0, 0, 2, 0, 0, 2, 0],
	    [0, 0, 0, 4, 0, 0, 0, 0, 0, 4]
	  ],

	  //question 20 answer values
	  [
	    [0, 0, 0, 0, 0, 0, 8, 0, 0, 8],
	    [0, 4, 0, 4, 0, 0, 0, 0, 0, 0],
	    [2, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 4, 0, 4, 0, 0],
	    [0, 0, 0, 0, 8, 0, 0, 0, 8, 0]
	  ],

	  //question 21 answer values
	  [
	    [0, 0, 0, 0, 0, 0, 6, 0, 6, 0],
	    [4, 4, 0, 0, 0, 0, 0, 4, 0, 0],
	    [0, 0, 0, 0, 0, 6, 0, 0, 0, 6]
	  ],

	  //question 22 answer values
	  [
	    [0, 0, 0, 0, 0, 0, 8, 0, 0, 8],
	    [0, 4, 0, 4, 0, 0, 0, 0, 0, 0],
	    [2, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 4, 0, 4, 0, 0]
	  ],

	  //question 23 answer values
	  [
	    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2]
	  ],

	  //question 24 answer values
	  [
	    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
	    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
	  ],

	  //question 25 answer values
	  [
	    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
	    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0],
	    [2, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 2, 0, 2, 0, 0]
	  ],

	  //question 26 answer values
	  [
	    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
	    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
	  ],

	  //question 27 answer values
	  [
	    [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	    [0, 0, 0, 0, 0, 0, 3, 0, 0, 0]
	  ],

	  //question 28 answer values
	  [
	    [0, 0, 0, 3, 0, 0, 0, 0, 0, 3],
	    [0, 0, 0, 0, 0, 3, 0, 0, 3, 0],
	    [3, 0, 3, 0, 0, 0, 0, 0, 0, 0]
	  ],

	  //question 29 answer values
	  [
	    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
	    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 3, 0, 0, 0, 0]
	  ],

	  //question 30 answer values
	  [
	    [0, 0, 0, 2, 0, 0, 0, 0, 0, 2],
	    [0, 0, 0, 0, 0, 2, 0, 0, 2, 0]
	  ],

	  //question 31 answer values
	  [
	    [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
	    [0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4]
	  ],

	  //question 32 answer values
	  [
	    [0, 0, 0, 2, 0, 2, 0, 0, 0, 2],
	    [0, 2, 0, 0, 2, 0, 0, 2, 0, 0],
	    [2, 0, 0, 0, 0, 0, 2, 0, 2, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	  ],

	  //question 33 answer values
	  [
	    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
	    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	  ],

	  //question 34 answer values
	  [
	    [0, 2, 0, 2, 2, 0, 0, 0, 0, 2],
	    [3, 0, 0, 0, 0, 3, 0, 0, 3, 0],
	    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0]
	  ],

	  //question 35 answer values
	  [
	    [0, 0, 3, 0, 0, 0, 3, 3, 0, 0],
	    [0, 3, 0, 0, 3, 0, 0, 0, 3, 0],
	    [3, 0, 0, 0, 0, 3, 0, 0, 0, 0],
	    [0, 0, 0, 3, 0, 0, 0, 0, 0, 3]
	  ],

	  //question 36 answer values
	  [
	    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
	  ],

	  //question 37 answer values
	  [
	    [3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 3, 0, 0, 3],
	    [0, 0, 0, 0, 3, 0, 0, 3, 0, 0]
	  ],

	  //question 38 answer values
	  [
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0]
	  ],


	  //question 39 answer values
	  [
	    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
	  ],


	  //question 40 answer values
	  [
	    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0]
	  ],


	  //question 41 answer values
	  [
	    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
	    [0, 0, 0, 0, 0, 0, 3, 0, 0, 0]
	  ],

	  //question 42 answer values
	  [
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
	  ],

	  //question 43 answer values
	  [
	    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	  ],

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

	  var answerSelection = ""; //text variable containting HTML code for the radio buttons' content

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

	  tempStats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}

	/*This function adds the values of the tempStats to the userStats based on user selection */

	function updatePersonality() {

	  for (i = 0; i < userStats.length; i++) {
	    userStats[i] += tempStats[i];
	  }
	}

	/* This function determines the highest personality value */

	function setCustomPage() {

	  var highestStatPosition = 0; //highest stat defaults as 'cute'

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

	    case 0: //human code
	      results.style.display = "inline-block";
	      results.classList.add("human");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundSize = "100% auto";
	      printResult.innerText = "Humans are the newest addition to the Milky Way Galaxy's many races. Ambitious, sometimes to the point of worry on the part of the other races, humanity consists of talented and diverse individuals. Some are militaristic and dutiful like the turians, lithe and charismatic like the asari, while others still are quick-witted and energetic like the salarians. Many would view this potential diversity as promising...and others still would call it unpredictable. <br><br>While humanity enjoys a tentative peace with its newfound neighbors, the fallout from the conflict known as the First Contact War still lingers in the minds of those involved some decades later. As a result of the Human Systems Alliance's success in the aforementioned conflict, the military superpower was elected to represent and govern humanity as a whole in Council Space. Though they were integral to the galaxy's survival in the wake of the war against Sovereign and its geth, there are still those who hold reservations against humanity and their longstanding ambition for power...";
	      break;

	    case 1: //turian
	      results.style.display = "inline-block";
	      results.classList.add("turian");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundSize = "100% auto";
	      printResult.innerText = "";
	      break;

	    case 2: //asari
	      results.style.display = "inline-block";
	      results.classList.add("asari");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundColor = "#008080";
	      body.backgroundSize = "100% auto";
	      printResult.innerText = "Asari&lt;/b> are among the most ancient and regal of the sentient races, and easily the most beautiful. The first of the Council races to become spacefarers and discover the Mass Relays. Upon locating the Citadel in 580 B.C., the asari would settle on the space colony with the assistance of the Keepers, eventually forming the Citadel Council when encountering the Salarians some decades later in 500 BC. Though lauded for their beautiful culture and exemplary diplomatic skills, the quick advancement of Asari technology is no accident: a Prothean beacon, which was concealed for centuries in the asari homeworld's Temple of Athame, was integral to the research and development of the asari's technology—a treasure that predates the Citadel Council law that it would eventually—secretly—violate. Thessia itself is home to vast reserves of the invaluable element zero, resulting in the asari evolving to be some of the most potent biotics throughout the galaxy.<br><br>The asari are unique among the Milky Way races for a number of reasons. First, and most notably, the asari are monogendered: though female-presenting to other races, the asari lack the sexual binary that is intrinsic to most races, and as a result, gendered language has little meaning to them. Secondly, the asari are able to reproduce with any race via parthenogenesis, which, in this case means that an asari is able to 'map' a partner's genetic makeup, which in turn is used to randomize the asari's own DNA to be passed on to their offspring. Though traits from the 'father' are often noticeable in terms of personality, the offspring will always be 100% asari. Lastly, the asari, aside from the krogan, are the longest-lived race both by lifespan as well as their race's endurance as a whole; the asari were the initial choice of the long-dead Protheans to lead the galaxy, while the race was still in its infancy. It helps that a single asari lifetime lasts an entire millennium as well.";
	      break;

	    case 3: //salarian
	      results.style.display = "inline-block";
	      results.classList.add("salarian");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundSize = "100% auto";
	      printResult.innerText = ".";
	      break;

	    case 4: //krogan
	      results.style.display = "inline-block";
	      results.classList.add("krogan");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundRepeat = "repeat";
	      printResult.innerText = "";
	      break;

	    case 5: //quarian
	      results.style.display = "inline-block";
	      results.classList.add("adept");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundRepeat = "repeat";
	      printResult.innerText = "Quarians are the once-proud inhabitants of Rannoch, a planet similar to Earth in size, sleeping just within the Perseus Veil. A desert planet, the importance of plant life on Rannoch is so great that it lives in its very name, as 'Rannoch' translates to 'walled garden'. It is this lack of diverse life that led to the Quarians, the former native colonists of Rannoch, to develop weaker immune systems over time, causing their bodies to try to adapt to foreign objects rather than develop resistances, as seen in other species. As a result, the Quarians were forced to encapsulate themselves in environmental suits once they were forced to leave Rannoch in a mass exodus, following the fateful conflict known throughout the galaxy as the Morning War. Around approximately 1850 CE, the Quarian race had already made contact with the Citadel and its council; as a result, they were aware of the severe laws in place prohibiting the development of artificial intelligence. Despite this, they developed the Geth, a machine race with limited processing power, in order to assist with warfare and everyday tasks. However, as the complexity of these tasks increased, so did the development of the Geth's neural network, which in time led to the Geth developing sentience nearly unchecked. <br><br>To the dismay of many Quarians, martial law was declared by the government, and all Geth were ordered to be terminated; Quarian sympathizers were either captured or killed. With the Geth reacting desperately out of self-preservation, a brutal and costly war erupted all over Rannoch, with billions of Quarians dying as a result. The survivors, stripped of their embassy from the Citadel Counil for breaking its most severe laws, would escape into space, beginning the nomadic lifestyle for what would become the Migrant Fleet. The phrase 'Keelah se'lai', which means 'By the home world I hope to see one day,' is indicative of the Quarian race's greatest wish to reclaim Rannoch.";
	      break;


	    case 6: //volus
	      results.style.display = "inline-block";
	      results.classList.add("volus");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundColor = "#008080";
	      body.backgroundSize = "100% auto";
	      printResult.innerText = "Volus are natives to Irune, a high-pressure planet whose organisms all developed in an ammonia-based environment. The third race to make contact with the Citadel, the volus must wear costly pressurized suits when venturing outside of their homeworld, a fact that has had a noticeable affect on the volus' ability to colonize other worlds. However, this issue pales in comparison to the achievements of the volus: warfare is a relic of a bygone era, with conflict usually being resolved with social reprimand or economic sanctions. In fact, the majority of volus culture is based around their astounding economy, with their cities favoring trade routes rather than defensible positions. Despite being the third race to make contact with the Council, as well as being responsible for the development of the greater Milky Way's economy through the Unified Banking Act that introduced the credit as galactic currency, the volus still only possess an embassy on the Citadel, which many are loathe to accept given their history and importance. This is due in part to the volus' inability to contribute fleets to the Citadel's defense forces on a large scale, which was key for the inclusion of both the turians and humans who would inevitably save the Citadel time and again, leading to their own Council positions. The turians in particular, who upon first contact were vital in ending the Krogan Rebellions, share a special relationship with the volus, as soon after the Rebellions the two races would broker an agreement in which the volus would become a client race. In this instance, the volus government pays taxes to the Turian Hierarchy, and provides support troops in times of need, in exchange for protection.";
	      break;

	    case 7: //batarian
	      results.style.display = "inline-block";
	      results.classList.add("batarian");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundSize = "100% auto";
	      printResult.innerText = "Batarians are often characterized as thugs, slavers and terrorists. While this is true for the typical batarian encountered in the Attican Traverse or, more commonly, the Terminus System, it isn't representative of most; those dwellers seen outside of Khar'Shan, the Batarian homeworld, or other colonies are criminals by nature, as the Batarian Hegemony forbids its citizens from interstellar travel outside of Batarian space. Little else is known about the Batarians, no doubt a result of the near-limitless propaganda put forth by their government, which boasts to its citizens and all who would listen that its economy rivals that of the Asari.<br><br>The Batarian Hegemony was already on the decline before the arrival of the Reapers; slavery, which the Hegemony claim as a vital aspect of their culture, has faced several sanctions by the Council, crippling their economy. Tensions were further exacerbated when humanity arrived on the scene, colonizing heavily in the south-southeastern portion of the galaxy—much of which intruded on Batarian space. This would lead to several conflicts between the races, culminating in the Skyllian Blitz of 2176 CE, which saw Batarian-led pirates and warlords attack the human colony of Elysium. The Blitz was doomed to fail, however, as well as the following conflict on Torfan, and the Batarians have remained resentful of humanity ever since.<br><br> What would have led to an inevitable all-out war between humanity and the Batarians over the destruction of the Alpha Relay, an effort to delay Reaper forces from an early siege that led to the loss of a nearby Batarian colony of 300,000 citizens, was cut brutally short by the first wave of Reaper invaders. Now the Batarian government is in shambles, and the race itself is nearly extinct.";
	      break;

	    case 8: //rachni
	      results.style.display = "inline-block";
	      results.classList.add("rachni");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundRepeat = "repeat";
	      printResult.innerText = ".";
	      break;

	    case 9: //geth
	      results.style.display = "inline-block";
	      results.classList.add("geth");
	      body.background = "none";
	      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
	      body.backgroundRepeat = "repeat";
	      printResult.innerText = ".";
	      break;
	    default:
	      document.getElementById("error").style.display = "inline-block";

	  }
	}
