import type { BookDeepDive } from './types';

/** Deep-dive guides — batch 2. Merged with the others in `books.ts`. */
export const deepDives2: Record<string, BookDeepDive> = {
  'romeo-and-juliet': {
    whatMakesItFamous:
      'Shakespeare’s *Romeo and Juliet* is the most famous love story in the English language — the template for "star-crossed lovers" and the source of the balcony scene, perhaps the single most iconic romantic image in Western culture. Phrases like "wherefore art thou Romeo" and "a plague o’ both your houses" are part of everyday speech, and the play is endlessly adapted (*West Side Story*, countless films) across every culture.\n\nWritten around 1595, it remains one of the most performed and most taught plays in the world — usually a student’s first Shakespeare. Its enduring power lies in how it captures the intensity, recklessness, and tragedy of young love, and how it indicts the senseless adult hatreds that destroy the young.',
    plotSummary: [
      {
        heading: 'Acts 1–2 — Love at first sight and a secret marriage',
        body:
          'In Verona, the Montagues and Capulets are locked in an ancient feud. Romeo (a Montague), pining for Rosaline, crashes a Capulet feast and instantly falls in love with Juliet (a Capulet). In the famous balcony scene they pledge their love.\n\nTurning point: with the help of Friar Laurence — who hopes the match will end the feud — they secretly marry the very next day.',
      },
      {
        heading: 'Act 3 — Deaths and banishment',
        body:
          'The feud explodes: Juliet’s cousin Tybalt kills Romeo’s friend Mercutio, and Romeo, enraged, kills Tybalt. The Prince banishes Romeo from Verona.\n\nMajor turning point: this is the play’s hinge — a comedy of young love turns irreversibly into tragedy. Juliet’s parents, unaware of her marriage, arrange for her to wed Paris.',
      },
      {
        heading: 'Acts 4–5 — The plan that fails',
        body:
          'To avoid the forced marriage, Juliet takes Friar Laurence’s potion to fake her death, planning to reunite with Romeo. But the message explaining the plan never reaches him.\n\nClimax: believing Juliet truly dead, Romeo drinks poison beside her tomb. Juliet wakes, finds him dead, and stabs herself. Only over their children’s bodies do the two families finally reconcile — "all are punished."',
      },
    ],
    characters: [
      { name: 'Romeo Montague', role: 'The young male lover', motivation: 'A romantic idealist who falls intensely and acts on impulse; he longs for love and, after Juliet, cannot live without her.', arc: 'Shifts from lovesick mooning over Rosaline to genuine, fatal devotion; his haste drives the tragedy.' },
      { name: 'Juliet Capulet', role: 'The young female lover (not yet 14)', motivation: 'To love freely and escape a marriage and feud imposed on her.', arc: 'Matures rapidly from obedient daughter to a brave, decisive young woman willing to defy family and risk death for love.' },
      { name: 'Friar Laurence', role: 'Romeo’s confidant and the secret marriage’s architect', motivation: 'To end the feud through the lovers’ union, and to act as moral guide.', arc: 'His well-meaning schemes spiral out of control, making him a tragic agent of the catastrophe.' },
      { name: 'Mercutio', role: 'Romeo’s witty, hot-blooded friend', motivation: 'Loyalty to Romeo and contempt for the feud’s posturing.', arc: 'His death ("a plague o’ both your houses") turns the play toward tragedy.' },
    ],
    themeAnalysis: [
      { heading: 'Love versus hate', body: 'The play sets the lovers’ pure, sudden love against the inherited, irrational hatred of the feud. Shakespeare suggests love is powerful but fragile when surrounded by violence — the feud is the true antagonist that consumes the innocent.' },
      { heading: 'Fate and "star-crossed" destiny', body: 'The Prologue announces the ending up front: these lovers are doomed by fate. Omens, bad timing, and the undelivered letter suggest forces beyond control — yet human choices (haste, secrecy, the feud) equally drive the disaster, leaving fate vs. free will unresolved.' },
      { heading: 'Youth, haste, and impulsivity', body: 'The whole story unfolds in about four days. The speed mirrors the intensity and recklessness of young passion; "they stumble that run fast." Adults and children alike act rashly, with fatal results.' },
    ],
    motifs: [
      { name: 'Light and dark', meaning: 'Romeo calls Juliet the sun and the light; their love shines against the darkness of the feud, and they meet mostly at night, away from a hostile day-lit world.' },
      { name: 'Poison and medicine', meaning: 'Friar Laurence’s herbs can heal or kill — like love itself; the same potion meant to save Juliet helps doom the lovers.' },
      { name: 'Hands and pilgrimage', meaning: 'Their first meeting is a shared sonnet about hands and "holy palmers" — framing their love as sacred devotion.' },
      { name: 'The tomb', meaning: 'The Capulet crypt fuses love and death — the lovers are united only in the grave.' },
    ],
    style: [
      { heading: 'Poetry, sonnets, and wordplay', body: 'Shakespeare elevates the language to mark love: the lovers’ first exchange forms a perfect sonnet, and the play is dense with puns, oxymorons ("loving hate"), and imagery. The verse itself rises and falls with the emotion.' },
      { heading: 'Comedy turned tragedy', body: 'The first half reads like a romantic comedy (bawdy jokes, a nurse, young love) before Mercutio’s death pivots it into tragedy. Dramatic irony — the audience knows Juliet is not really dead — wrings maximum pathos from the finale.' },
    ],
    studyQuestions: [
      { prompt: 'Is the tragedy caused by fate, or by the characters’ own rash choices? Where does Shakespeare place the blame?', type: 'discussion' },
      { prompt: 'Does Romeo and Juliet’s relationship represent true love or infatuation? Does it matter to the play’s meaning?', type: 'discussion' },
      { prompt: 'How does the feud function as the real antagonist? Who is ultimately responsible for the deaths?', type: 'discussion' },
      { prompt: 'Analyze how Shakespeare uses light/dark imagery to develop the lovers’ relationship.', type: 'essay' },
      { prompt: 'Discuss the role of haste and impulsivity. How does the compressed timeline shape the tragedy?', type: 'essay' },
      { prompt: 'Examine Mercutio’s death as the play’s turning point from comedy to tragedy.', type: 'essay' },
    ],
    aboutAuthor:
      'William Shakespeare (1564–1616), born in Stratford-upon-Avon, is the most influential writer in the English language, author of some 38 plays and 154 sonnets. He wrote *Romeo and Juliet* early in his career, adapting an existing Italian tale (via Arthur Brooke’s poem) but transforming it with unmatched poetry and psychological depth, and compressing its timeline from months to days to heighten the intensity.\n\nShakespeare wrote for the popular Elizabethan stage (later the Globe Theatre), where plays had to please everyone from groundlings to nobles — which is why the play mixes bawdy comedy with soaring tragedy. He coined or popularized hundreds of English words and phrases, and his works have never left the stage in 400 years.',
  },

  'macbeth': {
    whatMakesItFamous:
      '*Macbeth* is Shakespeare’s tightest, darkest tragedy — the definitive study of ambition and how power corrupts. Its imagery and lines ("Out, damned spot!"; "Is this a dagger which I see before me?"; "Double, double toil and trouble") are woven into the culture, and the play is so associated with bad luck that actors superstitiously call it "the Scottish Play" rather than say its name.\n\nWritten around 1606, likely to flatter the new Scottish king James I (who believed in witchcraft and traced his line to Banquo), it remains one of the most taught and performed tragedies, prized for its psychological intensity and its compact, relentless descent from heroism into tyranny.',
    plotSummary: [
      { heading: 'Act 1 — The prophecy and the temptation', body: 'Returning victorious, the Scottish general Macbeth meets three witches who prophesy he will be Thane of Cawdor and then king. When the first comes true, ambition ignites. Egged on by Lady Macbeth, who fears he is "too full of the milk of human kindness," he resolves to murder King Duncan, a guest in his castle.' },
      { heading: 'Acts 2–3 — Murder and paranoia', body: 'Macbeth kills the sleeping Duncan and seizes the throne. Turning point: one murder demands another. He has his friend Banquo killed (fearing the prophecy that Banquo’s heirs will rule), but Banquo’s ghost haunts him at a banquet, and Macbeth slides into paranoid tyranny.' },
      { heading: 'Acts 4–5 — Tyranny and downfall', body: 'The witches give false comfort: he cannot be harmed by any "man of woman born" and is safe till Birnam Wood comes to Dunsinane. Macbeth slaughters Macduff’s family. Lady Macbeth, consumed by guilt, sleepwalks and dies. Climax: the English army advances camouflaged with Birnam branches, and Macduff — "untimely ripped" from his mother’s womb — kills Macbeth. Order is restored under Malcolm.' },
    ],
    characters: [
      { name: 'Macbeth', role: 'Scottish general turned king and tyrant', motivation: '"Vaulting ambition" — a desire for power that overrides his conscience.', arc: 'Falls from honored hero to guilt-ridden murderer to nihilistic tyrant, knowing his evil yet unable to stop.' },
      { name: 'Lady Macbeth', role: 'Macbeth’s wife and goad', motivation: 'Ambition for her husband; to be "unsexed" of pity so she can seize power.', arc: 'Begins as the colder, stronger partner but collapses into guilt-driven madness and suicide — the inverse of Macbeth’s hardening.' },
      { name: 'Banquo', role: 'Macbeth’s fellow general', motivation: 'Honor and caution; he hears the same prophecy but does not act on it.', arc: 'A moral foil to Macbeth; murdered, he returns as a haunting ghost.' },
      { name: 'Macduff', role: 'A Scottish nobleman', motivation: 'Loyalty to Scotland and, after his family’s murder, vengeance.', arc: 'Becomes the agent of justice who fulfills the prophecy and kills Macbeth.' },
    ],
    themeAnalysis: [
      { heading: 'Ambition and its corruption', body: 'Macbeth is the great study of ambition unchecked by conscience. He knows his deeds are evil yet commits them, and each crime requires another to protect it. Shakespeare shows ambition as a force that consumes the self once it overrides morality.' },
      { heading: 'Guilt and conscience', body: 'Blood is the play’s central image of guilt: Macbeth fears no ocean can wash his hands clean; Lady Macbeth ends up scrubbing an imaginary spot. The couple’s reversal — his hardening, her collapse — dramatizes guilt as an inescapable psychological force.' },
      { heading: 'Fate, free will, and equivocation', body: 'Do the witches foretell Macbeth’s future or merely plant a seed he chooses to act on? Their "equivocations" — truths that mislead — come true only because Macbeth makes them true, keeping fate and free will in tension.' },
    ],
    motifs: [
      { name: 'Blood', meaning: 'The visible, indelible stain of guilt that haunts both Macbeths.' },
      { name: 'The dagger and sleep', meaning: 'The hallucinated dagger marks Macbeth’s tipping point; "Macbeth shall sleep no more" links the murder of a sleeping king to the loss of peace and innocence.' },
      { name: 'Darkness and night', meaning: 'The murders happen in darkness; the play’s world is unnaturally black, mirroring moral corruption.' },
      { name: 'The witches / the supernatural', meaning: 'Equivocation and the disordering of nature — "fair is foul, and foul is fair."' },
    ],
    style: [
      { heading: 'Compression and momentum', body: 'Macbeth is Shakespeare’s shortest tragedy, and its speed is deliberate — the relentless pace mirrors Macbeth’s headlong fall. There are no subplots to slow the descent.' },
      { heading: 'Imagery, soliloquy, and the supernatural', body: 'Dense imagery of blood, darkness, clothing ("borrowed robes"), and disordered nature carries the meaning. Macbeth’s soliloquies ("Tomorrow, and tomorrow, and tomorrow") give us intimate access to a conscience destroying itself.' },
    ],
    studyQuestions: [
      { prompt: 'How much of Macbeth’s downfall is fate (the witches) versus his own free choice?', type: 'discussion' },
      { prompt: 'Who is more responsible for Duncan’s murder — Macbeth or Lady Macbeth? How does their relationship shift?', type: 'discussion' },
      { prompt: 'Is Macbeth a villain, a tragic hero, or both? Does he keep our sympathy?', type: 'discussion' },
      { prompt: 'Analyze the imagery of blood throughout the play as a symbol of guilt.', type: 'essay' },
      { prompt: 'Examine the role of the supernatural and "equivocation" in shaping the action.', type: 'essay' },
      { prompt: 'Compare the opposite psychological trajectories of Macbeth and Lady Macbeth.', type: 'essay' },
    ],
    aboutAuthor:
      'William Shakespeare (1564–1616) wrote *Macbeth* around 1606, early in the reign of King James I — previously James VI of Scotland. The play is widely read as tailored to the new king: it is set in Scotland, flatters James’s supposed ancestor Banquo, and dwells on witchcraft, a subject on which James had literally written a book (*Daemonologie*).\n\nShakespeare drew the story from Holinshed’s *Chronicles* but darkened and compressed it. The theatrical superstition that the play is cursed — hence "the Scottish Play" — has followed it for centuries. Its unflinching look at how ambition corrodes the soul has made it perennially relevant to every era of political power.',
  },

  'hamlet': {
    whatMakesItFamous:
      '*Hamlet* is the most analyzed work in all of Western literature and Shakespeare’s longest, most quoted play. "To be, or not to be" is the most famous line in English; "the lady doth protest too much," "to thine own self be true," and "though this be madness, yet there is method in’t" are everyday phrases. The melancholy prince holding a skull (Yorick) is one of the most recognizable images in culture.\n\nWritten around 1600, the play has fascinated audiences and critics — from Freud to existentialists — for centuries because of its psychological depth, its ambiguity, and its hero who thinks rather than acts. It is the ultimate study of grief, doubt, revenge, and the difficulty of decisive moral action.',
    plotSummary: [
      { heading: 'Act 1 — The ghost’s command', body: 'Prince Hamlet of Denmark mourns his father, the dead king, and is disgusted that his mother Gertrude has hastily married his uncle Claudius, the new king. The ghost of Hamlet’s father appears and reveals that Claudius murdered him, demanding revenge.' },
      { heading: 'Acts 2–3 — Madness and the Mousetrap', body: 'Hamlet feigns (and perhaps partly succumbs to) madness while seeking certainty. Turning point: he stages a play re-enacting the murder to "catch the conscience of the king" — Claudius’s guilty reaction confirms it. Hamlet spares the praying Claudius, then accidentally kills Polonius behind a curtain.' },
      { heading: 'Acts 4–5 — Spiraling deaths', body: 'Hamlet is sent toward England (and a planned execution) but escapes. Ophelia, driven mad by her father’s death and Hamlet’s rejection, drowns. Climax: in a rigged fencing match, Gertrude drinks poisoned wine, Laertes and Hamlet are cut by a poisoned blade, and Hamlet finally kills Claudius — dying himself as Fortinbras arrives to claim the ruined kingdom.' },
    ],
    characters: [
      { name: 'Prince Hamlet', role: 'The protagonist; prince of Denmark', motivation: 'To avenge his father and to know the truth — torn between the demand for revenge and his own conscience and doubt.', arc: 'Moves through grief, feigned madness, and paralysis toward a fatal, belated resolve.' },
      { name: 'Claudius', role: 'The usurping king; Hamlet’s uncle', motivation: 'To keep the crown and Gertrude, and to eliminate the threat Hamlet poses.', arc: 'A capable, guilt-aware villain whose schemes unravel into mutual destruction.' },
      { name: 'Gertrude', role: 'Hamlet’s mother, the queen', motivation: 'Comfort, security, and love for her son — caught between husband and child.', arc: 'Ambiguous and possibly oblivious to the murder; she dies drinking the poison meant for Hamlet.' },
      { name: 'Ophelia', role: 'Polonius’s daughter; Hamlet’s love', motivation: 'Obedience to her father and love for Hamlet, pulled apart by both.', arc: 'Driven to genuine madness and death — a victim of the men who control her.' },
    ],
    themeAnalysis: [
      { heading: 'The problem of action and inaction', body: 'Hamlet is the revenger who cannot act. Where a typical revenge play rushes to bloodshed, Shakespeare gives us a hero who interrogates the act endlessly. His delay is the engine of the tragedy and the source of centuries of debate.' },
      { heading: 'Appearance versus reality', body: 'The rotten Danish court runs on deception — Claudius "smiles, and smiles, and is a villain," Hamlet performs madness, Polonius spies. Hamlet’s obsession with what "seems" versus what truly "is" drives his demand for proof.' },
      { heading: 'Mortality and meaning', body: 'From "to be, or not to be" to Yorick’s skull, the play meditates relentlessly on death as the great leveler. Death both terrifies and frees Hamlet, and the fear of "what dreams may come" is part of what stays his hand.' },
    ],
    motifs: [
      { name: 'Yorick’s skull', meaning: 'The graveyard memento mori — all greatness returns to dust.' },
      { name: 'Disease and rot', meaning: '"Something is rotten in the state of Denmark"; corruption is imagined as sickness infecting the whole kingdom.' },
      { name: 'The play-within-a-play', meaning: 'Theater used to expose hidden truth — appearance forced to reveal reality.' },
      { name: 'Poison', meaning: 'From the murder in the ear to the final duel, poison is the secret, corrupting agent that spreads through the court.' },
    ],
    style: [
      { heading: 'Soliloquy and interiority', body: 'Hamlet’s seven soliloquies give unprecedented access to a character’s inner life, making him feel startlingly modern. Shakespeare uses them to dramatize thought itself — doubt, self-reproach, philosophy.' },
      { heading: 'Ambiguity and dramatic irony', body: 'The play deliberately withholds certainty (Is Hamlet truly mad? Is Gertrude complicit?), inviting endless interpretation. Dramatic irony — we know what characters do not — sustains the tension.' },
    ],
    studyQuestions: [
      { prompt: 'Why does Hamlet delay his revenge? Is his hesitation a flaw, a virtue, or a sign of conscience?', type: 'discussion' },
      { prompt: 'Is Hamlet’s madness real, feigned, or both? Where is the line?', type: 'discussion' },
      { prompt: 'How does the play treat women (Gertrude, Ophelia)? Are they victims of the men around them?', type: 'discussion' },
      { prompt: 'Analyze the "to be, or not to be" soliloquy and its place in the play’s meditation on death.', type: 'essay' },
      { prompt: 'Discuss appearance vs. reality as a unifying theme across the court of Denmark.', type: 'essay' },
      { prompt: 'Examine Hamlet as the first "modern" character, using his soliloquies as evidence.', type: 'essay' },
    ],
    aboutAuthor:
      'William Shakespeare (1564–1616) wrote *Hamlet* around 1600, at the height of his powers, adapting an older Norse revenge legend. Many scholars connect the play’s preoccupation with fathers, sons, and grief to the death of Shakespeare’s own son Hamnet in 1596 — the names are nearly identical.\n\nWritten for the Globe Theatre, *Hamlet* is Shakespeare’s longest play and has become the ultimate test for actors. Its central character’s inwardness was revolutionary, and the play has been claimed by every intellectual movement since — Romantic, Freudian, existentialist — as a mirror of its own concerns, which is precisely why it never feels dated.',
  },

  'of-mice-and-men': {
    whatMakesItFamous:
      '*Of Mice and Men* is one of the most widely taught American novellas — short, accessible, and devastating. Its portrait of George and Lennie’s friendship and their doomed dream of a little farm has made it a staple of classrooms, and its gut-punch ending is among the most discussed in American literature. The title (from Robert Burns: "the best-laid schemes o’ mice an’ men gang aft agley") has become shorthand for dreams undone by fate.\n\nWritten in 1937 during the Great Depression, it is also frequently challenged and banned for its language and bleakness — keeping it perennially in the news. Steinbeck deliberately wrote it as a "playable novel," and it has had a major life on stage and screen.',
    plotSummary: [
      { heading: 'Arrival at the ranch', body: 'Two migrant workers — sharp, protective George and the huge, childlike, mentally disabled Lennie — arrive at a California ranch during the Depression. They share a dream: to save enough to buy their own small farm where Lennie can "tend the rabbits." We learn they fled the last town after Lennie innocently frightened a woman.' },
      { heading: 'The dream within reach', body: 'On the ranch they meet the aging Candy, the lonely Crooks, the volatile boss’s son Curley, and Curley’s flirtatious, isolated wife. Turning point: Candy offers his savings to join the dream, and for a moment the farm seems achievable. But Lennie’s uncontrollable strength is a ticking clock — he accidentally kills a puppy.' },
      { heading: 'The tragedy', body: 'Climax: Lennie accidentally kills Curley’s wife when he panics, just as he killed the puppy and the mouse. Curley forms a lynch mob. George finds Lennie hiding by the river and, to spare him a brutal death, gently retells the story of their dream one last time — then shoots his friend himself.' },
    ],
    characters: [
      { name: 'George Milton', role: 'A small, quick-witted migrant worker', motivation: 'To protect Lennie and to achieve their shared dream of independence and dignity.', arc: 'Carries the burden of caretaking; his final act of mercy destroys the very dream and friendship he lived for.' },
      { name: 'Lennie Small', role: 'George’s companion; a huge man with the mind of a child', motivation: 'To pet soft things, tend rabbits, and stay with George.', arc: 'Innocent and unchanging; his uncontrollable strength makes him a tragic danger to himself and others.' },
      { name: 'Curley’s wife', role: 'The boss’s son’s lonely, unnamed wife', motivation: 'Attention, companionship, and escape from a loveless marriage and crushing isolation.', arc: 'Dismissed as a "tart," she is revealed as a lonely dreamer before her accidental death triggers the tragedy.' },
      { name: 'Candy', role: 'An aging, one-handed ranch hand', motivation: 'To secure a future and avoid being discarded like his old dog.', arc: 'Briefly buys into the dream; its collapse confirms his fear of a useless old age.' },
    ],
    themeAnalysis: [
      { heading: 'The American Dream and its impossibility', body: 'The little farm is a radiant vision of independence and belonging — which Steinbeck makes beautiful precisely so its destruction devastates. For the powerless poor in a harsh economy, the title warns, dreams almost always "gang aft agley."' },
      { heading: 'Loneliness and companionship', body: 'Nearly everyone is profoundly alone — Crooks by race, Candy by age, Curley’s wife by gender. Against this, George and Lennie’s friendship is precious and rare: "we got each other." Connection is both the antidote to a brutal world and an unbearable responsibility.' },
      { heading: 'Strength, vulnerability, and mercy', body: 'Lennie’s greatest asset, his strength, is lethal in a mind that cannot govern it. George’s final act poses the novella’s wrenching moral question: is killing Lennie an act of love in a world that offers him no humane option?' },
    ],
    motifs: [
      { name: 'The dream farm / the rabbits', meaning: 'Hope, freedom, and belonging — the vision that sustains the men and whose loss defines the tragedy.' },
      { name: 'Candy’s dog', meaning: 'Shot because it is old and "no good," it foreshadows Lennie’s fate and George’s mercy killing.' },
      { name: 'Soft things (the mouse, the puppy)', meaning: 'Gentle creatures Lennie accidentally destroys — quiet foreshadowing of the human tragedy.' },
      { name: 'Hands', meaning: 'Lennie’s powerful hands and Curley’s gloved hand contrast strength used innocently versus cruelly.' },
    ],
    style: [
      { heading: 'The "play-novel" structure', body: 'Steinbeck wrote it to be read or performed, with scenes set in single locations, heavy dialogue, and descriptive passages that read like stage directions. This gives it a taut, dramatic economy.' },
      { heading: 'Foreshadowing and circular form', body: 'The novella is tightly foreshadowed (the mouse, the dog, the puppy) and frames its tragedy with the same riverbank setting at start and end, lending it the inevitability of fate.' },
    ],
    studyQuestions: [
      { prompt: 'Was George right to kill Lennie? Is it an act of love, mercy, betrayal, or all three?', type: 'discussion' },
      { prompt: 'Why does Steinbeck make the dream of the farm so vivid? What does its impossibility say about America?', type: 'discussion' },
      { prompt: 'How does the novella portray loneliness across its characters (Crooks, Candy, Curley’s wife)?', type: 'discussion' },
      { prompt: 'Analyze Steinbeck’s use of foreshadowing (the mouse, Candy’s dog) leading to the ending.', type: 'essay' },
      { prompt: 'Discuss the treatment of disability and the question of who society protects.', type: 'essay' },
      { prompt: 'Examine the significance of the title and the Robert Burns poem it comes from.', type: 'essay' },
    ],
    aboutAuthor:
      'John Steinbeck (1902–1968) grew up in California’s Salinas Valley, the setting of much of his work, and labored alongside migrant workers on ranches — the direct source for *Of Mice and Men* (1937). He won the Nobel Prize in Literature in 1962 for his socially engaged fiction about the poor and dispossessed.\n\nSteinbeck deliberately experimented with the "play-novel" form here, wanting a book that could be staged almost verbatim. His sympathy for the marginalized and his clear, compassionate prose made him one of America’s most beloved — and most frequently banned — authors, with this novella a perennial fixture of both reading lists and censorship debates.',
  },

  'lord-of-the-flies': {
    whatMakesItFamous:
      '*Lord of the Flies* is the definitive literary parable about the fragility of civilization and the darkness within human nature. The image of schoolboys descending into savagery on a desert island, the conch shell as a symbol of order, and the chilling phrase "the beast" have become cultural shorthand. It is one of the most assigned novels in schools worldwide.\n\nPublished in 1954, William Golding wrote it as a direct, pessimistic rebuttal to optimistic adventure stories (like *The Coral Island*) that imagined British boys staying noble and civilized when stranded. Golding, who had seen combat in WWII, insisted the truth was darker — and the novel helped earn him the Nobel Prize in Literature.',
    plotSummary: [
      { heading: 'Order established', body: 'A plane carrying British schoolboys crashes on a deserted island during a war, with no surviving adults. The boys attempt order: charismatic Ralph is elected leader, the conch shell governs their assemblies, and the smart, asthmatic Piggy supplies reason. They light a signal fire to summon rescue.' },
      { heading: 'Order erodes', body: 'Fear of a mythical "beast" grips the boys. Jack, leader of the hunters, grows obsessed with killing and power. Turning point: Jack splits off to form a savage tribe that paints its faces and feasts, abandoning the fire. The sensitive Simon discovers the "beast" is only a dead parachutist — and the evil is within themselves.' },
      { heading: 'Descent into savagery', body: 'Climax: Simon is murdered by the frenzied tribe during a ritual dance; then Piggy is killed and the conch shattered. Jack’s tribe hunts Ralph across the burning island. Resolution: a naval officer suddenly arrives, ending the nightmare — and the boys dissolve into tears "for the end of innocence, the darkness of man’s heart."' },
    ],
    characters: [
      { name: 'Ralph', role: 'The elected leader', motivation: 'To maintain order, keep the signal fire lit, and get everyone rescued.', arc: 'Represents civilization; he is gradually isolated and hunted as savagery wins, losing his innocence.' },
      { name: 'Jack', role: 'Leader of the hunters, then the savage tribe', motivation: 'Power, dominance, and the thrill of hunting and violence.', arc: 'Embodies the lust for power; descends from choirboy to face-painted tyrant.' },
      { name: 'Piggy', role: 'The intelligent, bespectacled outsider', motivation: 'Reason, science, and the rules of the adult world.', arc: 'Represents intellect and order; mocked and finally murdered — the death of reason on the island.' },
      { name: 'Simon', role: 'The quiet, intuitive boy', motivation: 'Kindness and a deeper, almost spiritual understanding.', arc: 'Alone grasps that the "beast" is human evil; murdered before he can share the truth.' },
    ],
    themeAnalysis: [
      { heading: 'Civilization versus savagery', body: 'The novel is a sustained allegory: as the rules and rituals of society fall away, the boys regress toward violence and tribalism. Golding argues that civilization is a thin, fragile veneer over a darker human nature.' },
      { heading: 'The innate evil within humanity', body: 'The "beast" the boys fear is no external monster but the evil inside themselves, as Simon alone realizes. Golding, marked by WWII, rejects the idea of childhood innocence: savagery is not learned but latent in everyone.' },
      { heading: 'Power, fear, and the loss of identity', body: 'Jack seizes control by exploiting fear of the beast, offering protection for loyalty. The face paint frees the boys from individual conscience, letting the anonymous group commit atrocities none would alone.' },
    ],
    motifs: [
      { name: 'The conch shell', meaning: 'Law, order, and the democratic right to speak; its shattering marks the death of civilization.' },
      { name: 'The signal fire', meaning: 'Hope and the link to rescue and the civilized world; its neglect signals the boys’ surrender to savagery.' },
      { name: 'The "Lord of the Flies"', meaning: 'The pig’s head on a stick (a translation of "Beelzebub") that "speaks" to Simon — the embodiment of evil within.' },
      { name: 'Piggy’s glasses', meaning: 'Science, reason, and clarity; control of the glasses (and fire) tracks the shift of power from intellect to force.' },
    ],
    style: [
      { heading: 'Allegory and symbolism', body: 'Golding builds the whole novel as an allegory, with each major character and object standing for a force in society or the psyche. The meaning is carried as much by symbol as by plot.' },
      { heading: 'Third-person narration and irony', body: 'A detached third-person narrator observes the boys’ decline with grim irony — most powerfully in the ending, where an officer from a war-torn adult world "rescues" children from their own war.' },
    ],
    studyQuestions: [
      { prompt: 'Does the novel prove that humans are innately savage, or that specific conditions (fear, no adults) cause the breakdown?', type: 'discussion' },
      { prompt: 'What does each major character (Ralph, Jack, Piggy, Simon) represent? Is the allegory too neat?', type: 'discussion' },
      { prompt: 'Why does Golding end with the naval officer? What is ironic about the "rescue"?', type: 'discussion' },
      { prompt: 'Analyze the conch and the signal fire as symbols of the rise and fall of civilization.', type: 'essay' },
      { prompt: 'Discuss the meaning of "the beast" and Simon’s role as the boy who understands it.', type: 'essay' },
      { prompt: 'Examine how fear is used as a tool of power on the island.', type: 'essay' },
    ],
    aboutAuthor:
      'William Golding (1911–1993) was a British novelist and schoolteacher whose experience teaching boys — and serving in the Royal Navy during World War II, including the D-Day landings — convinced him of humanity’s capacity for evil. He wrote *Lord of the Flies* (1954) as a deliberate, dark answer to R. M. Ballantyne’s cheery *The Coral Island*, even reusing character names to make the rebuttal pointed.\n\nThe book was rejected by many publishers before becoming a classic. Golding went on to win the Booker Prize and, in 1983, the Nobel Prize in Literature, cited for illuminating "the human condition in the world of today." His central conviction — that the "beast" is inside us — runs through all his work.',
  },
};
