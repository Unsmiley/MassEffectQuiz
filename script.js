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
    "This is for my father!",
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
    "The war was devasting for the mercenary scene, but it did wonders for unifying the races. With the hierarchy of the Blue Suns, Eclipse, and Blood Pack in shambles, now is the time to forge a new organization from the remnants. With veteran members from each of the surviving races, we will be a political and military force to be reckoned with.",
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
    "None - for me, the trilogy ended with the Citadel party."
  ],
]

//The following array contains all personality stat increments for each answer of every question
/*
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
*/

var answerValues = [ 

  //question 1 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 2 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 3 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 4 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 5 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 6 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 7 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 8 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 9 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 10 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 11 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 12 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 13 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 14 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 15 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  //question 16 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  //question 17 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  //question 18 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  //question 19 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  //question 20 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  //question 21 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  //question 22 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  //question 23 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  //question 24 answer values
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

    case 0: //infiltrator code
      results.style.display = "inline-block";
      results.classList.add("infiltrator");
      body.background = "none";
      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
      body.backgroundSize = "cover";
      printResult.innerText = "An Infiltrator! \n \n Infiltrators are the most talented assassins in the galaxy, blending their tech powers with high burst damage to dismantle even the most powerful opponents as quickly as possible. In most cases, infiltrators weaponize a potent tactical cloak, sacrificing shield regeneration for the ability to move unseen in and out of danger. This cloak, partnered with the element of surprise, give infiltrators the greatest damage output of the classes while affording them temporary safety as well. \n \n While most infiltrators are glass cannons, they will compensate by combining high movement speed and awareness of their surroundings to avoid being caught out by their foes. The best infiltrators focus their attention on only the most dangerous enemy units, leaving the rabble at the mercy of their companions.";
      break;

    case 1: //sentinel
      results.style.display = "inline-block";
      results.classList.add("sentinel");
      body.background = "none";
      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
      body.backgroundSize = "cover";
      printResult.innerText = "A Sentinel! \n \n Sentinels are built to be survivors in every sense of the word. The most support-oriented of the classes, sentinels blend biotics and tech powers to strip enemies of any defense, while supporting their own teammates with advanced medical capabilities. \n \n While rivaling the adept for the lowest damage output of the classes, the sentinel compensates by having the invaluable tech armor, which gives them an immediate shield boost that not only gives them the strongest defense of any class, but can deal a fatal pulse of energy when it is depleted, giving its user one last defense against any enemy unfortunate enough to be caught in its radius. \n \n The best sentinels remain with their team, taking what damage their partners can't while distributing both defensive and offensive support with their wide array of abilities.";
      break;

    case 2: //vanguard
      results.style.display = "inline-block";
      results.classList.add("vanguard");
      body.background = "none";
      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
      body.backgroundSize = "cover";
      printResult.innerText = "A Vanguard! \n \n Vanguards are the deadliest close quarters combatants on the battlefield. Making up for what they lack in firepower in sheer mobility, vanguards are able to close vast distances with their trademark Biotic Charge ability, stunning enemies and keeping their shields high for dealing with the groups of enemies they tend to surround themselves in. \n \n Vanguards serve two main purposes—to eliminate key targets in a small amount of time, normally by the 1-2 combo of charging their target, followed by a well-aimed shotgun round—and to focus enemy attention on themselves. By blitzing entire waves of enemies, or more dangerous foes such as brutes or ATLAS mechs, a good vanguard is able to dance with death, aggravating enemies to the point of tunnel-visioning, so that their teammates can deal damage with little interference.";
      break;

    case 3: //soldier
      results.style.display = "inline-block";
      results.classList.add("soldier");
      body.background = "none";
      body.backgroundImage = "url('https://stsci-opo.org/STScI-01GA6KKWG229B16K4Q38CH3BXS.png')";
      body.backgroundSize = "cover";
      printResult.innerText = "A Soldier! \n \n Soldiers are among the most robust warriors in the galaxy. Strong, fast, and experts in waging war, soldiers seek to overwhelm their enemies with firepower and sheer force. Though they lack the resources of tech specialists or biotics, soldiers will compensate by preparing to confront any nature of enemy before stepping foot on the battlefield. \n \n Trained in every manner of handheld weaponry, a good soldier puts an enemy at a disadvantage by stripping away their defenses and incapacitating them, whether by means of explosives, special ammo, or disruptive concussive shots to throw them off-balance. \n \n  The best soldiers are versatile and aggressive, able to demolish hordes of enemies while also taking advantage of their many ammo types and explosives to abuse tech bursts and elemental explosions.";
      break;

    case 4: //engineer
      results.style.display = "inline-block";
      results.classList.add("engineer");
      body.background = "none";
      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
      body.backgroundSize = "cover";
      printResult.innerText = "An Engineer! \n \n Engineers are the undisputed masters of area denial, exceeding all other classes when it comes to holding a defensive position against an onslaught of enemies. While typically favoring either shotguns or machine pistols, engineers use tech powers to overwhelm their opponents both physically and mentally; this can come in the form of harassment with the ever-present combat drone, hacking enemies mechs to cause disruption, or incapacitating unshielded opponents with chemical fire and ice. \n \n The best engineers shape the ebb and flow of the battlefield itself, defending key positions while also using their abilities to safely force their way into heavily defended chokepoints for their teammates.";
      break;

    case 5: //adept
      results.style.display = "inline-block";
      results.classList.add("adept");
      body.background = "none";
      body.backgroundImage = "url('https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png')";
      body.backgroundSize = "cover";
      printResult.innerText = "An Adept! \n \n Adepts make up in crowd control what they lack in sheer firepower. Masters of biotic warfare, adepts channel dark energy in all its deadly forms, staggering even the most heavily defended foes and ripping apart the unprepared. An unchecked adept can singlehandedly turn the tide of any given battle, using their biotic powers to bombard their enemies with warp fields, throw and pull objects and enemies hard enough to shatter bones, or immobilize entire groups with singularities. \n \n The best adepts stay with their teams, often serving as the rear guard, and focus attention on immobilizing unshielded enemies to take them out of the fight, or securing the backlines against flanking enemies such as husks, FENRIS mechs, or varren.";
      break;

    default:
      document.getElementById("error").style.display = "inline-block";

  }
}
