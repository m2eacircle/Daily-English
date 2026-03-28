/* ============================================================
   Daily English — Friends Show Data
   Structure: seasons → episodes → expressions
   ============================================================ */

const FRIENDS_DATA = {
  id: 'friends',
  title: 'Friends',
  description: 'The iconic American sitcom about six friends living in New York City. Perfect for learning everyday English expressions, slang, and conversational phrases.',
  seasons: 10,
  episodesPerSeason: 24,

  /* Season metadata — add image filenames as you upload them */
  seasonMeta: {
    1:  { title: 'Season 1', year: '1994–1995', image: '', color: '#2a3f7a,#1a2a55' },
    2:  { title: 'Season 2', year: '1995–1996', image: '', color: '#3a2a6a,#281a50' },
    3:  { title: 'Season 3', year: '1996–1997', image: '', color: '#1a4a3a,#123528' },
    4:  { title: 'Season 4', year: '1997–1998', image: '', color: '#4a2a1a,#381e10' },
    5:  { title: 'Season 5', year: '1998–1999', image: '', color: '#1a3a4a,#102838' },
    6:  { title: 'Season 6', year: '1999–2000', image: '', color: '#3a1a4a,#281038' },
    7:  { title: 'Season 7', year: '2000–2001', image: '', color: '#4a3a1a,#382810' },
    8:  { title: 'Season 8', year: '2001–2002', image: '', color: '#1a4a2a,#103820' },
    9:  { title: 'Season 9', year: '2002–2003', image: '', color: '#4a1a2a,#381020' },
    10: { title: 'Season 10', year: '2003–2004', image: '', color: '#2a4a1a,#1a3810' },
  },

  /* Episode data — keyed by "S{n}E{n}" */
  episodes: {

    /* ── Season 1 ──────────────────────────────────────────── */
    S1E1: {
      title: 'The One Where Monica Gets a Roommate',
      description: 'Rachel joins the group after leaving her fiancé at the altar.',
      image: '',
      icon: '☕',
      expressions: [
        {
          id: 'S1E1X1',
          phrase: 'Leave someone at the altar',
          partOfSpeech: 'idiom',
          meaning: 'To abandon your partner on your wedding day, refusing to go through with the marriage at the very last moment.',
          example: '"She left him at the altar and fled to New York to start a new life."',
          context: 'Rachel runs away from her wedding and shows up at Monica\'s door.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E1X1',
        },
        {
          id: 'S1E1X2',
          phrase: 'Get a grip',
          partOfSpeech: 'idiom',
          meaning: 'To take control of your emotions or reactions; to calm down and think rationally.',
          example: '"Get a grip! Everything is going to work out fine." — Said to someone who is panicking.',
          context: 'Used when someone is overreacting to a situation.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E1X2',
        },
        {
          id: 'S1E1X3',
          phrase: 'Be on the same page',
          partOfSpeech: 'idiom',
          meaning: 'To have the same understanding or agreement about something with others.',
          example: '"Before we start the project, let\'s make sure we\'re all on the same page."',
          context: 'Used when confirming everyone understands the situation equally.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E1X3',
        },
      ],
    },

    S1E2: {
      title: 'The One with the Sonogram at the End',
      description: "Ross learns Carol is pregnant. Monica's parents come to visit.",
      image: '',
      icon: '👶',
      expressions: [
        {
          id: 'S1E2X1',
          phrase: 'Break the news',
          partOfSpeech: 'idiom',
          meaning: 'To be the first to tell someone important or difficult information.',
          example: '"Someone has to break the news to him that he didn\'t get the promotion."',
          context: 'Ross has to tell his parents about the unexpected pregnancy.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E2X1',
        },
        {
          id: 'S1E2X2',
          phrase: 'A little much',
          partOfSpeech: 'expression',
          meaning: 'Too extreme, excessive, or more than is appropriate or necessary.',
          example: '"Wearing a tuxedo to a casual picnic is a little much, don\'t you think?"',
          context: 'Describing when someone overreacts or overdoes something.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E2X2',
        },
        {
          id: 'S1E2X3',
          phrase: 'Come around',
          partOfSpeech: 'phrasal verb',
          meaning: 'To gradually change your opinion about something; to finally agree or accept.',
          example: '"She didn\'t like the idea at first, but she eventually came around."',
          context: 'Used when someone changes their mind after resistance.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E2X3',
        },
      ],
    },

    S1E3: {
      title: 'The One with the Thumb',
      description: "Monica's new boyfriend is adored by everyone — except Monica herself.",
      image: '',
      icon: '👍',
      expressions: [
        {
          id: 'S1E3X1',
          phrase: 'Drive someone up the wall',
          partOfSpeech: 'idiom',
          meaning: 'To greatly annoy or frustrate someone to the point of exasperation.',
          example: '"The constant clicking noise is driving me up the wall!"',
          context: 'Monica is annoyed by her perfect boyfriend despite everyone else loving him.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E3X1',
        },
        {
          id: 'S1E3X2',
          phrase: 'Give it a shot',
          partOfSpeech: 'idiom',
          meaning: "To try something new or attempt something you're not certain about.",
          example: '"I\'ve never played golf before, but I\'ll give it a shot."',
          context: 'Encouraging someone to attempt something despite uncertainty.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E3X2',
        },
      ],
    },

    S1E4: {
      title: 'The One with George Stephanopoulos',
      description: 'The guys get front-row hockey tickets. The girls have a slumber party.',
      image: '',
      icon: '🏒',
      expressions: [
        {
          id: 'S1E4X1',
          phrase: 'Snap out of it',
          partOfSpeech: 'expression',
          meaning: 'To force yourself to stop thinking or behaving in a certain (usually negative) way.',
          example: '"You\'ve been moping for days — snap out of it and let\'s go have fun!"',
          context: 'Telling someone to stop dwelling on their problems.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E4X1',
        },
        {
          id: 'S1E4X2',
          phrase: 'Pep talk',
          partOfSpeech: 'noun',
          meaning: 'A motivational speech meant to encourage or increase someone\'s confidence.',
          example: '"The coach gave the team a great pep talk before the big game."',
          context: 'Motivating someone who is feeling down or insecure.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E4X2',
        },
      ],
    },

    S1E5: {
      title: 'The One with the East German Laundry Detergent',
      description: 'Ross and Rachel go to the laundromat together. Joey sets up a fake double date.',
      image: '',
      icon: '🧺',
      expressions: [
        {
          id: 'S1E5X1',
          phrase: 'Make a move on someone',
          partOfSpeech: 'idiom',
          meaning: 'To make a romantic advance toward someone; to flirt or attempt to start a romantic relationship.',
          example: '"I think he\'s about to make a move on her — watch!"',
          context: 'Ross trying to show his feelings for Rachel.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E5X1',
        },
        {
          id: 'S1E5X2',
          phrase: 'Hold your own',
          partOfSpeech: 'idiom',
          meaning: 'To perform well or maintain your position in a difficult or competitive situation.',
          example: '"She\'s new to chess but she can definitely hold her own against experienced players."',
          context: 'Managing a challenging situation independently.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E5X2',
        },
      ],
    },

    S1E6: {
      title: "The One with the Butt",
      description: "Joey lands his first big acting role — as Al Pacino's butt double.",
      image: '',
      icon: '🎬',
      expressions: [
        {
          id: 'S1E6X1',
          phrase: 'Big break',
          partOfSpeech: 'noun phrase',
          meaning: 'An important opportunity that leads to success, especially in a career.',
          example: '"This audition could be her big break in Hollywood."',
          context: "Joey is excited about his first major acting opportunity.",
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E6X1',
        },
        {
          id: 'S1E6X2',
          phrase: 'Get carried away',
          partOfSpeech: 'phrasal verb',
          meaning: 'To become so involved or enthusiastic about something that you lose control or go too far.',
          example: '"I got a little carried away decorating and now there are lights everywhere."',
          context: 'When someone does much more than they originally planned.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E6X2',
        },
      ],
    },

    S1E7: {
      title: 'The One with the Blackout',
      description: 'A city-wide blackout traps Chandler in an ATM vestibule with a model.',
      image: '',
      icon: '🕯️',
      expressions: [
        {
          id: 'S1E7X1',
          phrase: 'Hit it off',
          partOfSpeech: 'phrasal verb',
          meaning: 'To immediately like each other and get along very well from the first meeting.',
          example: '"They met at the conference and really hit it off right away."',
          context: 'Chandler stuck with a beautiful stranger during the blackout.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E7X1',
        },
        {
          id: 'S1E7X2',
          phrase: "Cat got your tongue?",
          partOfSpeech: 'idiom',
          meaning: "Asked when someone is unusually quiet or fails to speak when they should.",
          example: '"You haven\'t said a word since she walked in. Cat got your tongue?"',
          context: 'Teasing someone who is awkwardly silent.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E7X2',
        },
      ],
    },

    S1E8: {
      title: 'The One Where Nana Dies Twice',
      description: "Ross and Monica's grandmother dies — twice. Chandler is mistaken for gay.",
      image: '',
      icon: '🌸',
      expressions: [
        {
          id: 'S1E8X1',
          phrase: 'Out of it',
          partOfSpeech: 'expression',
          meaning: 'Feeling confused, not fully conscious, or unable to think clearly.',
          example: '"I only slept four hours — I\'ve been completely out of it all day."',
          context: 'Describing someone who is drowsy or disoriented.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E8X1',
        },
        {
          id: 'S1E8X2',
          phrase: 'Give off a vibe',
          partOfSpeech: 'expression',
          meaning: 'To project a certain feeling, impression, or energy to others.',
          example: '"That new café really gives off a cozy, relaxed vibe."',
          context: 'The impression or feeling someone projects to others.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E8X2',
        },
      ],
    },

    S1E9: {
      title: 'The One Where Underdog Gets Away',
      description: 'Everyone misses Thanksgiving dinner when they get locked out of the apartment.',
      image: '',
      icon: '🦃',
      expressions: [
        {
          id: 'S1E9X1',
          phrase: 'Miss the boat',
          partOfSpeech: 'idiom',
          meaning: 'To miss an opportunity; to fail to take advantage of something at the right moment.',
          example: '"If you don\'t apply today, you\'ll miss the boat on that early-bird discount."',
          context: 'Missing an important opportunity due to bad timing.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E9X1',
        },
        {
          id: 'S1E9X2',
          phrase: 'Bite off more than you can chew',
          partOfSpeech: 'idiom',
          meaning: 'To take on more responsibility or a bigger task than you are able to handle.',
          example: '"Planning five events in one weekend? You\'ve bitten off more than you can chew."',
          context: "Taking on too many commitments at once.",
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E9X2',
        },
      ],
    },

    S1E10: {
      title: 'The One with the Monkey',
      description: 'Ross gets a pet monkey named Marcel. Everyone brings a date to a New Year\'s party.',
      image: '',
      icon: '🐒',
      expressions: [
        {
          id: 'S1E10X1',
          phrase: 'Spice things up',
          partOfSpeech: 'phrasal verb',
          meaning: 'To make something more interesting, exciting, or lively.',
          example: '"Let\'s spice things up a bit by trying a new recipe tonight."',
          context: 'Making a situation or relationship more exciting.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E10X1',
        },
        {
          id: 'S1E10X2',
          phrase: 'No strings attached',
          partOfSpeech: 'idiom',
          meaning: 'Without conditions, obligations, or complications; completely free.',
          example: '"It\'s a free trial — no strings attached."',
          context: 'A situation with no obligations or conditions.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E10X2',
        },
      ],
    },

    S1E11: {
      title: 'The One with Mrs. Bing',
      description: "Chandler's romance-novel-writing mother visits. Ross and Joey argue over a comatose woman.",
      image: '',
      icon: '📚',
      expressions: [
        {
          id: 'S1E11X1',
          phrase: 'Have a way with words',
          partOfSpeech: 'expression',
          meaning: 'To be naturally skilled at expressing things eloquently or persuasively.',
          example: '"She really has a way with words — her speech moved everyone to tears."',
          context: "Chandler's mother is a famous romance novelist.",
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E11X1',
        },
        {
          id: 'S1E11X2',
          phrase: 'Cross the line',
          partOfSpeech: 'idiom',
          meaning: 'To go beyond what is acceptable or appropriate behavior.',
          example: '"Joking about that was funny at first, but now you\'ve crossed the line."',
          context: 'When someone does something socially unacceptable.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E11X2',
        },
      ],
    },

    S1E12: {
      title: 'The One with the Dozen Lasagnas',
      description: "Monica makes too many lasagnas. Ross doesn't want to know his baby's sex.",
      image: '',
      icon: '🍝',
      expressions: [
        {
          id: 'S1E12X1',
          phrase: 'On the fence',
          partOfSpeech: 'idiom',
          meaning: 'Undecided; not having made up your mind between two options.',
          example: '"I\'m still on the fence about whether to take the new job offer."',
          context: "Ross is undecided about learning the gender of his unborn child.",
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E12X1',
        },
        {
          id: 'S1E12X2',
          phrase: 'A lot on one\'s plate',
          partOfSpeech: 'idiom',
          meaning: 'To have many responsibilities, problems, or tasks to deal with at once.',
          example: '"I can\'t take on a new project right now — I already have a lot on my plate."',
          context: 'Being overwhelmed with responsibilities.',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E12X2',
        },
      ],
    },

    S1E13: { title: 'The One with the Boobies', description: 'Accidental nakedness causes chaos. Joey\'s father has a mistress.', image: '', icon: '😳',
      expressions: [
        { id: 'S1E13X1', phrase: 'Walk in on someone', partOfSpeech: 'phrasal verb', meaning: 'To accidentally enter a room and witness something private or embarrassing.', example: '"I walked in on my roommate in the middle of a video call — so awkward."', context: 'Accidentally seeing something you were not meant to see.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E13X1' },
        { id: 'S1E13X2', phrase: 'Turn a blind eye', partOfSpeech: 'idiom', meaning: 'To deliberately ignore something you know is wrong or happening.', example: '"Management turned a blind eye to the safety violations for years."', context: 'Choosing to ignore a problem you are aware of.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E13X2' },
      ]
    },
    S1E14: { title: 'The One with the Candy Hearts', description: "Chandler ends up on a date with Janice. Ross runs into Carol on Valentine's Day.", image: '', icon: '💕',
      expressions: [
        { id: 'S1E14X1', phrase: 'Fall back into old habits', partOfSpeech: 'expression', meaning: 'To return to previous patterns of behavior, usually ones you were trying to avoid.', example: '"After the stress of the holidays, I fell back into my old habit of eating late at night."', context: "Chandler keeps returning to Janice despite wanting to move on.", youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E14X1' },
        { id: 'S1E14X2', phrase: 'Out of the blue', partOfSpeech: 'idiom', meaning: 'Unexpectedly, with no warning; completely by surprise.', example: '"Out of the blue, she called me after five years of silence."', context: 'Something happening completely unexpectedly.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E14X2' },
      ]
    },
    S1E15: { title: 'The One with the Stoned Guy', description: "Monica cooks for a potential restaurant job. Chandler gets a promotion he doesn't want.", image: '', icon: '🍴',
      expressions: [
        { id: 'S1E15X1', phrase: 'In over your head', partOfSpeech: 'idiom', meaning: 'To be involved in a situation that is too difficult or complex for you to handle.', example: '"Taking three online courses at once left me completely in over my head."', context: "Chandler is stuck in a job he doesn't want.", youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E15X1' },
        { id: 'S1E15X2', phrase: 'Seize the opportunity', partOfSpeech: 'expression', meaning: 'To take full advantage of a chance when it appears.', example: '"When they offered her the role, she seized the opportunity immediately."', context: 'Taking action when a good chance presents itself.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E15X2' },
      ]
    },
    S1E16: { title: 'The One with Two Parts (Part 1)', description: "Phoebe meets her twin sister Ursula. Joey falls for Ursula.", image: '', icon: '👯',
      expressions: [
        { id: 'S1E16X1', phrase: 'A splitting image', partOfSpeech: 'idiom', meaning: 'Someone who looks exactly like another person.', example: '"She\'s a splitting image of her mother — they could be twins."', context: 'Phoebe and Ursula being identical twins.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E16X1' },
        { id: 'S1E16X2', phrase: 'Torn between two things', partOfSpeech: 'expression', meaning: 'Unable to choose between two equally appealing or conflicting options.', example: '"I was torn between taking the job in Paris or staying close to family."', context: 'Being unable to decide between two important choices.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E16X2' },
      ]
    },
    S1E17: { title: 'The One with Two Parts (Part 2)', description: 'Rachel gets injured. Ross and Susan argue in an elevator.', image: '', icon: '🏥',
      expressions: [
        { id: 'S1E17X1', phrase: 'In a bind', partOfSpeech: 'idiom', meaning: 'In a difficult or awkward situation with no easy solution.', example: '"Without a car and no bus routes, I was really in a bind."', context: 'Being in a difficult situation with limited options.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E17X1' },
        { id: 'S1E17X2', phrase: 'Cut someone some slack', partOfSpeech: 'idiom', meaning: 'To be less critical or demanding of someone; to give them more freedom or understanding.', example: '"Cut him some slack — it\'s only his first week on the job."', context: 'Being more lenient with someone going through a tough time.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E17X2' },
      ]
    },
    S1E18: { title: 'The One with All the Poker', description: 'The group plays poker. Rachel competes fiercely against Ross.', image: '', icon: '🃏',
      expressions: [
        { id: 'S1E18X1', phrase: 'Have a poker face', partOfSpeech: 'idiom', meaning: 'To show no emotion or expression, making it impossible to know what you are thinking or feeling.', example: '"He negotiated with a perfect poker face and got a great deal."', context: 'Hiding emotions during a competitive situation.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E18X1' },
        { id: 'S1E18X2', phrase: 'Up the ante', partOfSpeech: 'idiom', meaning: 'To raise the stakes; to increase the level of a challenge, risk, or reward.', example: '"The competitor upped the ante by offering free shipping on all orders."', context: 'Making something more competitive or challenging.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E18X2' },
      ]
    },
    S1E19: { title: "The One Where the Monkey Gets Away", description: "Marcel escapes and Animal Control comes. Rachel loses Ross's monkey.", image: '', icon: '🙈',
      expressions: [
        { id: 'S1E19X1', phrase: 'Let something slip', partOfSpeech: 'phrasal verb', meaning: 'To accidentally reveal something you were supposed to keep secret.', example: '"I let it slip that the party was a surprise — she knows now."', context: 'Accidentally revealing a secret.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E19X1' },
        { id: 'S1E19X2', phrase: 'Off the hook', partOfSpeech: 'idiom', meaning: 'No longer in trouble or responsible for a difficult situation; free from blame.', example: '"He admitted it was his fault, so you\'re completely off the hook."', context: 'Being freed from responsibility or blame.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E19X2' },
      ]
    },
    S1E20: { title: 'The One with the Evil Orthodontist', description: "Rachel reconnects with her ex Barry. Monica begins dating a man who won't stay over.", image: '', icon: '😬',
      expressions: [
        { id: 'S1E20X1', phrase: 'On and off', partOfSpeech: 'expression', meaning: 'Alternately starting and stopping; intermittently; not consistently.', example: '"They\'ve been on and off for three years — nobody knows if they\'re together."', context: 'An intermittent relationship pattern.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E20X1' },
        { id: 'S1E20X2', phrase: 'Keep someone at arm\'s length', partOfSpeech: 'idiom', meaning: 'To maintain emotional distance from someone; to avoid getting too close.', example: '"He keeps everyone at arm\'s length since his divorce."', context: 'Avoiding emotional closeness with others.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E20X2' },
      ]
    },
    S1E21: { title: 'The One with the Fake Monica', description: 'Monica\'s identity is stolen. Joey chooses a new stage name.', image: '', icon: '🎭',
      expressions: [
        { id: 'S1E21X1', phrase: 'Take on a new identity', partOfSpeech: 'expression', meaning: 'To adopt a completely new persona, name, or way of presenting oneself.', example: '"After moving abroad, she essentially took on a new identity."', context: "Joey choosing a memorable stage name.", youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E21X1' },
        { id: 'S1E21X2', phrase: 'Live life to the fullest', partOfSpeech: 'expression', meaning: 'To enjoy every aspect of life and take every opportunity; to live without regrets.', example: '"After her recovery, she decided to live life to the fullest."', context: 'Embracing every experience and opportunity.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E21X2' },
      ]
    },
    S1E22: { title: 'The One with the Ick Factor', description: "Monica dates a younger man. Chandler's assistant has a crush on him.", image: '', icon: '🤢',
      expressions: [
        { id: 'S1E22X1', phrase: 'Ick factor', partOfSpeech: 'noun phrase', meaning: 'A feeling of disgust or discomfort about something.', example: '"The ick factor of eating insects is purely psychological for most people."', context: 'Monica dating someone significantly younger.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E22X1' },
        { id: 'S1E22X2', phrase: 'Awkward situation', partOfSpeech: 'noun phrase', meaning: 'A social circumstance that causes discomfort or embarrassment for those involved.', example: '"Running into your ex at a party is always an awkward situation."', context: 'Navigating a socially uncomfortable scenario.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E22X2' },
      ]
    },
    S1E23: { title: 'The One with the Birth', description: "Carol goes into labor. Everyone rushes to the hospital for the birth of Ben.", image: '', icon: '👦',
      expressions: [
        { id: 'S1E23X1', phrase: 'In labor', partOfSpeech: 'expression', meaning: 'The process of giving birth; experiencing the contractions and work of childbirth.', example: '"She was in labor for 14 hours before the baby arrived."', context: "Carol giving birth to Ross's son Ben.", youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E23X1' },
        { id: 'S1E23X2', phrase: 'It takes a village', partOfSpeech: 'proverb', meaning: 'A task — especially raising a child — requires the help and effort of an entire community.', example: '"It takes a village to raise a child — we all need support."', context: 'The whole group coming together to support during the birth.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E23X2' },
      ]
    },
    S1E24: { title: 'The One Where Rachel Finds Out', description: 'Rachel learns that Ross has feelings for her — just as he leaves for China.', image: '', icon: '💌',
      expressions: [
        { id: 'S1E24X1', phrase: 'Have feelings for someone', partOfSpeech: 'expression', meaning: 'To be romantically attracted to or in love with someone.', example: '"I\'ve had feelings for her since the day we met, but I was too scared to say anything."', context: "Rachel discovering Ross's true feelings for her.", youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E24X1' },
        { id: 'S1E24X2', phrase: 'Better late than never', partOfSpeech: 'proverb', meaning: 'It is better to do something after a delay than to not do it at all.', example: '"He finally apologized after two years — well, better late than never."', context: 'Acting on feelings or decisions after a long time.', youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E24X2' },
      ]
    },
  },
};

/* ── Helper: get episode object ────────────────────────────── */
function getEpisode(season, episode) {
  const key = `S${season}E${episode}`;
  return FRIENDS_DATA.episodes[key] || null;
}

/* ── Helper: generate placeholder episodes for seasons 2–10 ─ */
function getEpisodeData(season, episode) {
  const key = `S${season}E${episode}`;
  if (FRIENDS_DATA.episodes[key]) return FRIENDS_DATA.episodes[key];
  return {
    title: `Season ${season}, Episode ${episode}`,
    description: 'Episode content coming soon — check back later!',
    image: '',
    icon: '🎬',
    expressions: [],
  };
}
