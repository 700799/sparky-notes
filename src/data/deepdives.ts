import type { BookDeepDive } from './types';

/**
 * In-depth, 8-section guides keyed by book slug. Kept separate from the book
 * records so the large literary content can be expanded book-by-book without
 * touching the core data files. Merged onto books in `books.ts`.
 */
export const deepDives: Record<string, BookDeepDive> = {
  '1984': {
    whatMakesItFamous:
      '*1984* is the most influential dystopia ever written — the book that gave the modern world its vocabulary for tyranny. Terms it coined or popularized are now everyday English: "Big Brother," "Orwellian," "thoughtcrime," "doublethink," "newspeak," "memory hole," and "Room 101." When people want to describe surveillance overreach or political lying, they reach for Orwell.\n\nPublished in 1949 at the dawn of the Cold War, the novel crystallized the West’s fear of totalitarianism just as the Soviet bloc was hardening. It has never gone out of print, spikes onto bestseller lists during every surveillance or "fake news" scandal, and is one of the most assigned novels in the English-speaking world. Its power is that it is less a prediction than a warning about a permanent human temptation: the will to total power.',
    plotSummary: [
      {
        heading: 'Part One — The world of Oceania',
        body:
          'Winston Smith, 39, works at the Ministry of Truth altering historical records. We learn the rules of his world: perpetual war, the Party, the omnipresent telescreens, and the three slogans. Winston commits his first crime — buying a diary and writing "DOWN WITH BIG BROTHER" — knowing it means eventual death by the Thought Police.\n\nKey turning point: he notices a dark-haired girl (Julia) and an Inner Party member (O’Brien), and convinces himself O’Brien is secretly a rebel. He also visits the prole districts and Mr. Charrington’s antique shop, buying a glass paperweight — a fragment of a freer past.',
      },
      {
        heading: 'Part Two — Rebellion and love',
        body:
          'Julia slips Winston a note reading "I love you." They begin a clandestine affair, meeting in the countryside and then renting the room above Charrington’s shop — a private space that feels like freedom. Their love is itself a political act against a Party that wants to abolish loyalty to anything but Big Brother.\n\nMajor turning point: O’Brien invites them in and "recruits" them into the Brotherhood, giving Winston Goldstein’s forbidden book, which explains how and why the Party rules. The lovers feel triumphant — right before the trap springs: a voice behind the picture, soldiers in the room, Charrington revealed as Thought Police.',
      },
      {
        heading: 'Part Three — The Ministry of Love',
        body:
          'Winston is imprisoned and tortured by O’Brien, whose goal is not confession but conversion — to make Winston genuinely love Big Brother. O’Brien forces him to abandon reason itself (to see five fingers where there are four).\n\nClimax: in Room 101, faced with his ultimate fear (rats), Winston screams "Do it to Julia!" — betraying the one thing he swore he never would. Released, hollowed out, he meets Julia again; both admit the betrayal and feel nothing. The novel ends with Winston, drunk and broken, finally loving Big Brother.',
      },
    ],
    characters: [
      {
        name: 'Winston Smith',
        role: 'Protagonist; a Records Department worker',
        motivation: 'A hunger for truth, memory, and authentic human feeling in a world built on lies.',
        arc: 'Moves from secret rebellion and hope through love and false triumph to total psychological defeat — the destruction of his inner self.',
      },
      {
        name: 'Julia',
        role: 'Winston’s lover, a younger Party member',
        motivation: 'Personal, bodily freedom and pleasure rather than ideology — she rebels "from the waist down."',
        arc: 'Embodies private resistance; like Winston, she is broken and betrays him, showing the Party defeats even the apolitical rebel.',
      },
      {
        name: "O'Brien",
        role: 'Inner Party member; Winston’s torturer',
        motivation: 'Power for its own sake — and a chilling, sincere belief in the Party’s worldview.',
        arc: 'The false friend turned inquisitor; static but revelatory, he voices the novel’s darkest thesis about power.',
      },
      {
        name: 'Big Brother',
        role: 'The Party’s symbolic, possibly fictional leader',
        motivation: 'To be the eternal, infallible face of absolute authority.',
        arc: 'Never appears in person — pure image, demonstrating how power can be a manufactured icon.',
      },
    ],
    themeAnalysis: [
      {
        heading: 'Totalitarianism and the nature of power',
        body:
          'The Party seeks power that is total — over action, then thought, then reality itself. Orwell’s insight, voiced by O’Brien, is that this power is sought for its own sake, not as a means to a utopian end. The boot stamping on a human face "forever" is the goal, not a stage on the way to something better.',
      },
      {
        heading: 'Control of truth, memory, and language',
        body:
          'Whoever controls the past controls the future. By rewriting records and engineering Newspeak, the Party makes objective truth and even dissenting thought impossible. Doublethink — believing two contradictions at once — is the mental discipline that lets citizens accept this. Orwell, the journalist, saw the corruption of language as the first step toward the corruption of freedom.',
      },
      {
        heading: 'Surveillance and the private self',
        body:
          'Constant observation by telescreens collapses the boundary between public and private, so that people police their own faces and thoughts. The novel argues that selfhood itself requires a private space — and that erasing privacy is how a regime erases the individual.',
      },
    ],
    motifs: [
      { name: 'The telescreen', meaning: 'Two-way surveillance that both watches and propagandizes — the technology of total control and self-censorship.' },
      { name: 'The glass paperweight', meaning: 'A beautiful fragment of the past and of Winston’s inner life; its shattering at his arrest marks the destruction of his private world.' },
      { name: 'Room 101', meaning: 'The chamber containing "the worst thing in the world," personalized to break each prisoner — the ultimate weaponization of fear.' },
      { name: 'The St. Clement’s rhyme', meaning: 'A nostalgic nursery rhyme about lost London churches; its completion by Charrington signals the trap and the irretrievable past.' },
    ],
    style: [
      {
        heading: 'Tone, setting, and realism',
        body:
          'Orwell writes in a deliberately plain, cold, journalistic style — fitting his belief that good prose should be "like a windowpane." The setting (a grimy, rationed, bombed-out London as "Airstrip One") is grounded in the austerity of postwar Britain, making the dystopia feel uncomfortably plausible rather than fantastical.',
      },
      {
        heading: 'Structure and the appendix device',
        body:
          'The third-person narration stays tight to Winston’s perspective, trapping us in his fear and hope. Two embedded texts — Goldstein’s book and the appendix "The Principles of Newspeak" — interrupt the story to deliver political analysis. Crucially, the appendix is written in the past tense and standard English, subtly implying that the regime eventually fell: Orwell’s one buried note of hope.',
      },
    ],
    studyQuestions: [
      { prompt: 'Is Winston a hero, or is the novel arguing that individual heroism is futile against a system like the Party?', type: 'discussion' },
      { prompt: 'How does the Party use language (Newspeak, doublethink) as a tool of control? Can controlling words really control thought?', type: 'discussion' },
      { prompt: 'Why does the Party demand love, not just obedience? What does Room 101 reveal about its goals?', type: 'discussion' },
      { prompt: 'Analyze how Orwell uses the appendix on Newspeak. How does it change your reading of the ending?', type: 'essay' },
      { prompt: 'Compare the roles of love and memory as forms of rebellion in 1984. Why must the Party destroy both?', type: 'essay' },
      { prompt: 'Argue whether 1984 is best read as a warning about a specific regime (e.g. Stalinism) or about a universal human impulse toward power.', type: 'essay' },
    ],
    aboutAuthor:
      'George Orwell was the pen name of Eric Arthur Blair (1903–1950), an English writer and committed democratic socialist who was also one of the 20th century’s fiercest critics of totalitarianism — of both the right and the left. He served as a colonial policeman in Burma, lived deliberately among the poor (*Down and Out in Paris and London*), and fought against fascism in the Spanish Civil War, where he was shot through the throat and saw firsthand how propaganda rewrote events he had personally witnessed — an experience that haunts *1984*.\n\nHe wrote the novel while gravely ill with tuberculosis on the remote Scottish island of Jura, racing against his own failing health; he finished it in 1948 and simply reversed the last two digits for the title. He died just months after publication, at 46. Orwell’s purpose was explicitly political: "to make political writing into an art" and to warn the democratic West that the machinery of total control could take root anywhere, not only in distant dictatorships.',
  },

  'crime-and-punishment': {
    whatMakesItFamous:
      '*Crime and Punishment* is one of the founding works of the psychological novel — arguably the first great thriller told almost entirely from inside the criminal’s mind. Dostoevsky takes a simple premise (a man commits murder) and turns it into a 500-page descent into guilt, paranoia, and the search for redemption, inventing techniques of interior monologue that would shape all of modern fiction.\n\nIt is also a landmark of philosophical literature. Raskolnikov’s "extraordinary man" theory directly anticipates and critiques later ideas about supermen who stand above morality, and the novel is read as a profound argument against the notion that a noble end can justify a monstrous means. Its fusion of crime drama, philosophy, and spiritual struggle has made it a permanent fixture of world literature.',
    plotSummary: [
      {
        heading: 'Parts One–Two — The crime and the fever',
        body:
          'Rodion Raskolnikov, a destitute ex-student in St. Petersburg, broods over a theory that "extraordinary" men may transgress the law for a higher purpose. He murders Alyona, a pawnbroker, with an axe — and is forced to kill her gentle sister Lizaveta, who walks in.\n\nTurning point: rather than the clarity he expected, he is plunged into delirium and dread. He hides the loot without using it, and a feverish illness sets in — the first sign his conscience is destroying him.',
      },
      {
        heading: 'Parts Three–Four — The net tightens',
        body:
          'Raskolnikov meets the investigator Porfiry Petrovich, who suspects him and plays a patient psychological cat-and-mouse game without hard evidence. Meanwhile he is drawn to Sonya Marmeladov, forced into prostitution to feed her family, whose suffering and faith unsettle his cold logic.\n\nKey turning point: Sonya reads him the raising of Lazarus — planting the possibility of his own resurrection — and Porfiry tells him plainly he knows, urging him to confess.',
      },
      {
        heading: 'Parts Five–Six & Epilogue — Confession and rebirth',
        body:
          'After the villainous Svidrigailov’s suicide and mounting pressure, Raskolnikov confesses the murder to Sonya, who tells him to bow down at the crossroads and accept his suffering. He turns himself in and is sentenced to eight years in a Siberian prison camp.\n\nResolution: in the epilogue, with Sonya following him into exile, Raskolnikov finally breaks down and weeps — beginning, only now, the slow spiritual rebirth the whole novel has been driving toward.',
      },
    ],
    characters: [
      {
        name: 'Rodion Raskolnikov',
        role: 'Protagonist; impoverished former student',
        motivation: 'To prove he is an "extraordinary man" above ordinary morality — and to escape crushing poverty.',
        arc: 'From cold, isolating pride through guilt-driven torment to confession, suffering, and the first stirrings of redemption.',
      },
      {
        name: 'Sonya Marmeladov',
        role: 'A young woman forced into prostitution; the moral center',
        motivation: 'Self-sacrificing love and Christian faith; to save her family and, ultimately, Raskolnikov’s soul.',
        arc: 'Steadfast throughout, she becomes the agent of Raskolnikov’s redemption, following him to Siberia.',
      },
      {
        name: 'Porfiry Petrovich',
        role: 'The investigating magistrate',
        motivation: 'To bring Raskolnikov to confession — as much for his soul as for justice.',
        arc: 'A psychologically astute foil who never needs evidence; he lets conscience do his work.',
      },
      {
        name: 'Svidrigailov',
        role: 'A depraved, wealthy sensualist',
        motivation: 'Pursuit of pleasure and escape from his own emptiness.',
        arc: 'A dark mirror of Raskolnikov "without conscience"; his despairing suicide shows the alternative to redemption.',
      },
    ],
    themeAnalysis: [
      {
        heading: 'The "extraordinary man" and its refutation',
        body:
          'Raskolnikov’s theory holds that a Napoleon may "step over" moral law for a great end. Dostoevsky refutes it not with argument but with consequence: the murder shatters Raskolnikov’s psyche, proving no one can place themselves outside the moral order without self-destruction. The novel is a sustained answer to the idea that ends justify means.',
      },
      {
        heading: 'Guilt as the true punishment',
        body:
          'The "punishment" is psychological long before it is legal. Raskolnikov’s fevers, paranoia, and compulsions are the real sentence; the courtroom is almost an afterthought. Dostoevsky renders conscience as an inescapable force built into human nature.',
      },
      {
        heading: 'Suffering, faith, and redemption',
        body:
          'Through Sonya, the novel argues that suffering accepted in love is the path back to humanity. Salvation comes not through reason but through confession, humility, and connection — the Christian vision at the heart of Dostoevsky’s work.',
      },
    ],
    motifs: [
      { name: 'The axe', meaning: 'The instrument of the crime and a symbol of the brutal, irreversible reality that overturns Raskolnikov’s clean theory.' },
      { name: 'St. Petersburg', meaning: 'The hot, crowded, suffocating city externalizes Raskolnikov’s fevered, claustrophobic mind and the squalor that breeds desperation.' },
      { name: 'The raising of Lazarus', meaning: 'The Bible story Sonya reads aloud — the central symbol of the spiritual resurrection available to Raskolnikov.' },
      { name: 'Crossroads / bowing to the earth', meaning: 'Public confession and humility before others — the ritual of reconnecting with the human community he tried to rise above.' },
    ],
    style: [
      {
        heading: 'Psychological realism and point of view',
        body:
          'Dostoevsky pioneers a claustrophobic third-person narration glued to Raskolnikov’s consciousness, plunging us into his rationalizations, terror, and delirium. The result is an unbearable intimacy with a murderer — we are trapped inside the crime and the guilt.',
      },
      {
        heading: 'Polyphony, doubles, and the city',
        body:
          'The critic Bakhtin called Dostoevsky’s novels "polyphonic" — full of distinct, clashing voices and ideologies given their full force (Porfiry, Sonya, Svidrigailov, Luzhin). Dostoevsky also builds meaning through "doubles," characters who embody paths Raskolnikov might take, and through a feverish, urgent prose style that mirrors his unraveling mind.',
      },
    ],
    studyQuestions: [
      { prompt: 'Does Raskolnikov ever truly believe his "extraordinary man" theory, or is it a rationalization for desperation and pride?', type: 'discussion' },
      { prompt: 'Why is the actual trial given so little space? What does this say about Dostoevsky’s idea of punishment?', type: 'discussion' },
      { prompt: 'Is Sonya a realistic character or a symbol? What role does faith play in the novel’s vision of redemption?', type: 'discussion' },
      { prompt: 'Analyze Svidrigailov and Luzhin as "doubles" of Raskolnikov. What alternative fates do they represent?', type: 'essay' },
      { prompt: 'Examine how setting (St. Petersburg, the cramped rooms) functions as an extension of Raskolnikov’s psychology.', type: 'essay' },
      { prompt: 'Argue whether Dostoevsky successfully refutes the idea that the ends can justify the means.', type: 'essay' },
    ],
    aboutAuthor:
      'Fyodor Dostoevsky (1821–1881) wrote from hard experience. As a young man he was arrested for belonging to a circle of liberal intellectuals and, in 1849, was subjected to a mock execution — stood before a firing squad and reprieved only at the last second, an ordeal that marked him for life and deepened his obsession with mortality, guilt, and faith. He then spent four years in a Siberian prison camp, where he lived among real murderers and underwent a profound religious conversion.\n\nThat Siberian experience directly informs both Raskolnikov’s psychology and his redemptive ending. Dostoevsky also struggled with epilepsy and a crippling gambling addiction, and he wrote *Crime and Punishment* (1866) at speed under brutal financial pressure, partly to pay off debts. He intended the book as a moral and spiritual argument against the radical, rationalist, and nihilist ideas spreading among Russian youth of his day.',
  },

  'the-great-gatsby': {
    whatMakesItFamous:
      '*The Great Gatsby* is widely considered the great American novel — the definitive portrait of the Jazz Age and the most enduring literary meditation on the American Dream. Its final line ("So we beat on, boats against the current…") and its central image (Gatsby reaching toward the green light) are among the most quoted in all of literature.\n\nRemarkably, it was a commercial disappointment in Fitzgerald’s lifetime; he died in 1940 believing himself a failure. The novel’s reputation exploded after WWII, when it was distributed to American soldiers, and it has since sold tens of millions of copies, become a fixture of high-school curricula, and inspired countless films and adaptations. Its fame rests on the way Fitzgerald turns a short, jazzy story of glamour and adultery into a profound elegy for hope, money, and the impossibility of repeating the past.',
    plotSummary: [
      {
        heading: 'Chapters 1–3 — Arrival and the parties',
        body:
          'Narrator Nick Carraway moves to West Egg, Long Island, next door to the mysterious Jay Gatsby. He visits his cousin Daisy Buchanan and her wealthy, brutish husband Tom in old-money East Egg, and meets golfer Jordan Baker. Nick attends one of Gatsby’s legendary, lavish parties and finally meets the elusive host.\n\nWe learn Tom is having an affair with Myrtle Wilson, the wife of a garage owner in the bleak "Valley of Ashes."',
      },
      {
        heading: 'Chapters 4–6 — Gatsby’s dream revealed',
        body:
          'Gatsby reveals (and partly fabricates) his past, then uses Nick to arrange a reunion with Daisy — the woman he loved five years earlier and the entire reason for his fortune and parties.\n\nTurning point: Gatsby and Daisy rekindle their affair. We learn his true origin — poor James Gatz, reinvented through bootlegging — and Gatsby insists, against Nick’s warning, that he can "repeat the past."',
      },
      {
        heading: 'Chapters 7–9 — Collapse and death',
        body:
          'In a sweltering Manhattan hotel suite, Tom exposes Gatsby’s criminal money and Daisy’s inability to say she never loved Tom. Driving home, Daisy (in Gatsby’s car) strikes and kills Myrtle; Gatsby takes the blame.\n\nClimax and resolution: misled by Tom, Myrtle’s husband George shoots Gatsby in his pool, then himself. Almost no one attends Gatsby’s funeral. Disgusted by the "careless" rich, Nick returns to the Midwest and delivers the novel’s elegiac reflection on the receding American Dream.',
      },
    ],
    characters: [
      {
        name: 'Jay Gatsby',
        role: 'The self-made millionaire protagonist (born James Gatz)',
        motivation: 'To recapture his lost love, Daisy — and the idealized past she represents — through wealth and reinvention.',
        arc: 'His relentless hope and self-creation are revealed as both magnificent and doomed; he dies clinging to an impossible dream.',
      },
      {
        name: 'Nick Carraway',
        role: 'Narrator; Gatsby’s neighbor and Daisy’s cousin',
        motivation: 'To make sense of the East and his fascination with Gatsby; he claims honesty but is romantically biased.',
        arc: 'Moves from dazzled observer to disillusioned moralist, ultimately rejecting the careless wealth of the East.',
      },
      {
        name: 'Daisy Buchanan',
        role: 'Gatsby’s love; Tom’s wife',
        motivation: 'Comfort, security, and status; she loves Gatsby but cannot give up her safe, monied world.',
        arc: 'Reveals herself as shallow and "careless," retreating into wealth and letting Gatsby take the fall.',
      },
      {
        name: 'Tom Buchanan',
        role: 'Daisy’s arrogant old-money husband',
        motivation: 'To preserve his power, status, and dominance.',
        arc: 'Static — the embodiment of entrenched, careless privilege that destroys and walks away unscathed.',
      },
    ],
    themeAnalysis: [
      {
        heading: 'The corruption of the American Dream',
        body:
          'Gatsby embodies the dream’s promise of self-reinvention and its corruption — his fortune is criminal and its purpose is the shallow goal of winning Daisy. Fitzgerald suggests the dream has curdled in the 1920s into a pursuit of money and surface glamour, forever receding like the green light.',
      },
      {
        heading: 'Class and the old-money/new-money divide',
        body:
          'Despite his wealth, Gatsby can never truly enter Daisy and Tom’s world; class in America is about belonging, not just money. Tom and Daisy’s retreat into "their money and their vast carelessness" indicts an elite that breaks things and lets others clean up.',
      },
      {
        heading: 'The past, memory, and illusion',
        body:
          '"Can’t repeat the past? Why of course you can!" Gatsby’s tragedy is his belief that he can erase five years and restore an idealized moment. The novel is about the gap between the dream and reality — the love of an illusion more than a person.',
      },
    ],
    motifs: [
      { name: 'The green light', meaning: 'At the end of Daisy’s dock, it represents Gatsby’s hope, longing, and the ever-receding "orgastic future" of the American Dream.' },
      { name: 'The eyes of Doctor T. J. Eckleburg', meaning: 'A faded billboard of giant eyes brooding over the Valley of Ashes — an absent, blind God watching a morally bankrupt society.' },
      { name: 'The Valley of Ashes', meaning: 'The grey industrial wasteland between wealth and the city — the human and moral cost of the pursuit of riches.' },
      { name: 'East Egg vs. West Egg', meaning: 'Inherited "old money" vs. flashy "new money" — the geography of America’s class divide.' },
    ],
    style: [
      {
        heading: 'Lyrical prose and symbolic economy',
        body:
          'Fitzgerald’s prose is famously poetic and compressed — the novel is short, but nearly every image (color, weather, geography) carries symbolic weight. Colors recur with meaning: green (hope), gold/yellow (money and decay), white (Daisy’s false purity), grey (the ashes). The result is closer to a long prose poem than a conventional plot.',
      },
      {
        heading: 'The unreliable, romantic narrator',
        body:
          'Nick filters everything through nostalgia and his mixed attraction-repulsion to wealth. He claims to be "one of the few honest people" he knows, yet his admiration for Gatsby shapes the whole telling, elevating a sordid story into elegy. This first-person frame is what makes Gatsby tragic rather than merely foolish.',
      },
    ],
    studyQuestions: [
      { prompt: 'Is Gatsby "great"? In what sense does the title praise him, and in what sense is it ironic?', type: 'discussion' },
      { prompt: 'How reliable is Nick as a narrator? Where does his bias shape our view of the other characters?', type: 'discussion' },
      { prompt: 'What does the novel ultimately say about the American Dream — is it dead, a lie, or simply out of reach?', type: 'discussion' },
      { prompt: 'Analyze Fitzgerald’s use of color symbolism throughout the novel.', type: 'essay' },
      { prompt: 'Compare the moral characters of Gatsby and Tom. Why does Nick judge the "careless" Buchanans so harshly?', type: 'essay' },
      { prompt: 'Discuss the role of geography (East Egg, West Egg, the Valley of Ashes) in conveying the novel’s themes of class.', type: 'essay' },
    ],
    aboutAuthor:
      'F. Scott Fitzgerald (1896–1940) was the chronicler and the embodiment of the "Jazz Age" — a term he himself coined. He and his glamorous, troubled wife Zelda lived the very world of wealth, parties, and excess that the novel both celebrates and condemns, and much of Gatsby’s longing draws on Fitzgerald’s own early rejection by a wealthy young woman before he later won back his first love, Zelda, after achieving success.\n\nFitzgerald considered *The Great Gatsby* (1925) his masterpiece, but it sold poorly and the critics were lukewarm; he spent his later years struggling financially, writing in Hollywood, and battling alcoholism, dying of a heart attack at 44 convinced he was a failure. The novel’s posthumous rise to the summit of American literature is one of literary history’s great reversals — a poignant real-life echo of its own themes of dreams, reinvention, and the cruelty of time.',
  },

  'to-kill-a-mockingbird': {
    whatMakesItFamous:
      '*To Kill a Mockingbird* won the 1961 Pulitzer Prize and became one of the best-selling and most beloved American novels of all time — a fixture of school reading lists for generations. Its hero, Atticus Finch, became a cultural icon of moral courage and integrity (the 1962 film cemented him in Gregory Peck’s performance), and the book’s plea for empathy and racial justice made it central to America’s conversation about race.\n\nIt is equally famous as a perennial flashpoint: it is simultaneously one of the most taught and one of the most challenged/banned books in the U.S., debated for its racial slurs, its depiction of race through a white child’s eyes, and its "white savior" framing. That dual status — cherished classic and contested text — keeps it at the center of contemporary debates about literature, history, and education.',
    plotSummary: [
      {
        heading: 'Part One — Maycomb and the Radley mystery',
        body:
          'In Depression-era Maycomb, Alabama, narrator Scout Finch, her brother Jem, and friend Dill are obsessed with their reclusive neighbor "Boo" Radley, daring each other to approach his house. Their father, the lawyer Atticus, teaches them about empathy and conscience.\n\nKey development: Atticus is appointed to defend Tom Robinson, a Black man falsely accused of raping a white woman, and the children begin to face the town’s hostility.',
      },
      {
        heading: 'Part Two — The trial of Tom Robinson',
        body:
          'The novel’s centerpiece is the trial. Atticus proves Tom could not have committed the crime and exposes that Mayella Ewell and her father Bob are lying. Before the trial, Scout’s innocent words disperse a lynch mob at the jail.\n\nTurning point: despite clear evidence, the all-white jury convicts Tom. The children’s faith in their community’s fairness collapses. Tom is later shot dead trying to escape prison.',
      },
      {
        heading: 'Climax — Bob Ewell’s revenge',
        body:
          'Humiliated at trial, Bob Ewell seeks revenge and attacks Scout and Jem one night as they walk home. The long-feared Boo Radley emerges to save them, killing Ewell.\n\nResolution: the sheriff quietly decides to call Ewell’s death an accident to spare the shy Boo public attention — "it’d be a sin," like killing a mockingbird. Standing on the Radley porch, Scout finally sees the world from Boo’s perspective, fulfilling Atticus’s central lesson.',
      },
    ],
    characters: [
      {
        name: 'Scout (Jean Louise) Finch',
        role: 'Narrator; a tomboyish young girl (age 6–9)',
        motivation: 'Childlike curiosity and a fierce sense of fairness; to understand the adult world around her.',
        arc: 'Grows from innocence to a painful understanding of injustice, and finally learns to "stand in another’s shoes."',
      },
      {
        name: 'Atticus Finch',
        role: 'Scout’s father; a principled lawyer',
        motivation: 'To do what is right and to model moral courage and empathy for his children, whatever the cost.',
        arc: 'The novel’s moral constant — he does not change so much as reveal, through the trial, what integrity looks like.',
      },
      {
        name: 'Jem Finch',
        role: 'Scout’s older brother',
        motivation: 'To grow up well and to believe in the justice system and his father.',
        arc: 'His coming-of-age is shattered by the guilty verdict, forcing a harder, more disillusioned maturity.',
      },
      {
        name: 'Boo (Arthur) Radley',
        role: 'The reclusive, feared neighbor',
        motivation: 'A quiet, protective care for the children, expressed from the shadows.',
        arc: 'Transforms from a figure of childish terror into the novel’s hidden "mockingbird" and savior.',
      },
    ],
    themeAnalysis: [
      {
        heading: 'Racial injustice',
        body:
          'Tom Robinson’s trial — overwhelming evidence of innocence overridden by a biased jury — lays bare the institutional racism of the Jim Crow South. The novel insists that the legal system can follow its forms while still delivering a predetermined, unjust result.',
      },
      {
        heading: 'Empathy and "walking in another’s skin"',
        body:
          'Atticus’s repeated lesson — that you cannot understand a person until you see things from their point of view — is the book’s ethical core. Scout enacts it in the final scene. Empathy is presented as the antidote to prejudice, which is fundamentally a failure to see others as fully human.',
      },
      {
        heading: 'Innocence and moral growth',
        body:
          'As a bildungsroman, the novel charts the children’s loss of innocence. The mockingbird symbolizes harmless innocents (Tom, Boo) destroyed or endangered by cruelty. Atticus guides the children toward courage rather than cynicism: doing right even when "licked before you begin."',
      },
    ],
    motifs: [
      { name: 'The mockingbird', meaning: 'A creature that only sings for others’ pleasure — the central symbol of innocent people (Tom Robinson, Boo Radley) harmed by society.' },
      { name: 'The Radley house', meaning: 'Childhood fear of the unknown; its mystery dissolves as the children mature and come to understand Boo.' },
      { name: 'Gifts in the tree knot', meaning: 'Boo’s small secret presents to the children — quiet evidence of his humanity and care before he is ever seen.' },
      { name: 'The mad dog', meaning: 'Atticus shooting the rabid dog symbolizes him confronting the "madness" of racism that has infected the town.' },
    ],
    style: [
      {
        heading: 'The retrospective child narrator',
        body:
          'Lee tells the story through adult Scout looking back on her childhood, a "double vision" that blends a child’s innocent observation with an adult’s understanding. This lets Lee expose the town’s hypocrisy through Scout’s naïve eyes while layering in mature moral reflection.',
      },
      {
        heading: 'Setting, tone, and Southern Gothic touches',
        body:
          'The vividly drawn small-town Southern setting and warm, often humorous tone make the eventual injustice land harder. Lee blends gentle nostalgia with darker Southern Gothic elements (the Radley house, the lynch mob, Bob Ewell) to dramatize the coexistence of community warmth and deep-seated cruelty.',
      },
    ],
    studyQuestions: [
      { prompt: 'Whose story is this really — Scout’s coming-of-age, or Tom Robinson’s? What is gained and lost by filtering it through a white child’s perspective?', type: 'discussion' },
      { prompt: 'Is Atticus Finch an unambiguous hero? How does the modern "white savior" critique complicate the novel?', type: 'discussion' },
      { prompt: 'Why does Lee connect the seemingly separate Boo Radley and Tom Robinson plots? How are both "mockingbirds"?', type: 'discussion' },
      { prompt: 'Analyze the significance of Scout’s narration. How does the retrospective, dual point of view shape the novel’s themes?', type: 'essay' },
      { prompt: 'Discuss whether the novel should be taught today, weighing its message against the criticisms leveled at it.', type: 'essay' },
      { prompt: 'Examine how Harper Lee uses symbolism (the mockingbird, the mad dog) to develop the theme of innocence and injustice.', type: 'essay' },
    ],
    aboutAuthor:
      'Harper Lee (1926–2016) drew heavily on her own childhood in Monroeville, Alabama: like Scout, she was a tomboy with a lawyer father, and the character of Dill is based on her real-life best friend, the writer Truman Capote. The Tom Robinson trial echoes racially charged cases (like the Scottsboro Boys) that shaped the South of her youth.\n\nFor most of her life, *To Kill a Mockingbird* (1960) was her only published novel, and she became famously private. In 2015, shortly before her death, a controversial second book, *Go Set a Watchman* — actually an earlier draft featuring an older, more prejudiced Atticus — was published amid debate over Lee’s consent, complicating the saintly image of her hero. Lee said she simply hoped to be "the Jane Austen of south Alabama."',
  },
};
