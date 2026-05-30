import type { BookDeepDive } from './types';

/**
 * In-depth, 8-section guides keyed by book slug. Kept separate from the book
 * records so the large literary content can be expanded book-by-book without
 * touching the core data files. Merged onto books in `books.ts`.
 */
export const deepDives: Record<string, BookDeepDive> = {
  '1984': {
    whatMakesItFamous:
      '*1984* is the most influential dystopia ever written, the book that gave the modern world much of its vocabulary for tyranny. Terms it either coined or popularized have become part of everyday English, including "Big Brother," "Orwellian," "thoughtcrime," "doublethink," "newspeak," "memory hole," and "Room 101," so that whenever people want to describe surveillance overreach or political lying, they instinctively reach for Orwell.\n\nPublished in 1949 at the dawn of the Cold War, the novel crystallized the West’s fear of totalitarianism just as the Soviet bloc was hardening into place. It has never gone out of print, it climbs back onto the bestseller lists during every surveillance or "fake news" scandal, and it remains one of the most widely assigned novels in the English-speaking world. Its lasting power comes from the fact that it is less a specific prediction than a warning about a permanent human temptation, namely the will to total power.',
    plotSummary: [
      {
        heading: 'Part One — The world of Oceania',
        body:
          'Winston Smith, thirty-nine years old, works in the Ministry of Truth, where his job is to alter historical records so that the past always agrees with the Party’s current claims. Through his daily life Orwell establishes the rules of this world, including the perpetual war, the omnipresent telescreens, and the three Party slogans. Winston commits his first crime when he buys a diary and writes "DOWN WITH BIG BROTHER," fully aware that this act will eventually bring death at the hands of the Thought Police.\n\nDuring these opening chapters he becomes preoccupied with a dark-haired girl named Julia and with an Inner Party member named O’Brien, whom he convinces himself must secretly be a rebel. He also wanders through the prole districts and visits Mr. Charrington’s antique shop, where he buys a glass paperweight that comes to stand for a freer, vanished past.',
      },
      {
        heading: 'Part Two — Rebellion and love',
        body:
          'Julia secretly passes Winston a note that reads "I love you," and the two of them begin a clandestine affair, meeting first in the countryside and later in the rented room above Charrington’s shop, a private space in which they can briefly imagine themselves free. Their love is itself a political act, because the Party seeks to abolish all loyalty that is not directed toward Big Brother.\n\nThe turning point arrives when O’Brien invites them to his apartment and appears to recruit them into the shadowy resistance known as the Brotherhood, giving Winston a forbidden book that explains how and why the Party rules. The lovers feel triumphant, and it is precisely at this moment of false security that the trap is sprung: a voice speaks from behind a hidden picture, soldiers fill the room, and the kindly Charrington is revealed to be an agent of the Thought Police.',
      },
      {
        heading: 'Part Three — The Ministry of Love',
        body:
          'Winston is imprisoned and systematically tortured by O’Brien, whose true aim is not merely to extract a confession but to remake Winston’s mind so that he genuinely loves Big Brother. O’Brien forces him to abandon reason itself, insisting that he see five fingers where only four are being held up.\n\nThe climax comes in Room 101, where Winston is confronted with his deepest fear, a cage of rats, and finally breaks, screaming "Do it to Julia!" and so betraying the one person he had sworn never to betray. Released at last, hollowed out and emptied of resistance, he meets Julia again, and the two of them admit their mutual betrayal while feeling nothing for each other. The novel ends with Winston, drunk and broken in the Chestnut Tree Café, at last loving Big Brother.',
      },
    ],
    characters: [
      {
        name: 'Winston Smith',
        role: 'The protagonist, who works in the Records Department of the Ministry of Truth',
        motivation:
          'Winston is driven by a deep hunger for truth, for memory, and for authentic human feeling in a world that is built entirely upon lies.',
        arc:
          'He moves from secret rebellion and fragile hope, through the false triumph of his love affair and apparent recruitment into the Brotherhood, to a total psychological defeat in which his inner self is utterly destroyed.',
      },
      {
        name: 'Julia',
        role: 'Winston’s lover and a younger member of the Party',
        motivation:
          'Julia is motivated by a desire for personal, bodily freedom and pleasure rather than by any political ideology, so that she rebels, as she puts it, "from the waist down."',
        arc:
          'She embodies a purely private form of resistance, and like Winston she is eventually broken and made to betray him, which demonstrates that the Party can defeat even the apolitical rebel.',
      },
      {
        name: "O'Brien",
        role: 'An Inner Party member who becomes Winston’s torturer',
        motivation:
          'O’Brien pursues power for its own sake and holds a chilling, entirely sincere belief in the Party’s worldview.',
        arc:
          'He is the false friend who turns into an inquisitor, and although he does not change across the novel, he serves to reveal its darkest thesis about the nature of power.',
      },
      {
        name: 'Big Brother',
        role: 'The Party’s symbolic and possibly fictional leader',
        motivation:
          'Big Brother exists in order to be the eternal, infallible face of absolute authority.',
        arc:
          'He never appears in person and remains pure image throughout, which demonstrates how political power can be sustained through a manufactured icon rather than a real individual.',
      },
    ],
    themeAnalysis: [
      {
        heading: 'Totalitarianism and the nature of power',
        body:
          'The Party seeks a power that is total, extending first over action, then over thought, and finally over reality itself. Orwell’s central insight, voiced by O’Brien, is that this power is pursued for its own sake rather than as a means to any utopian end.\n\nThe image of a boot stamping on a human face "forever" is presented not as a temporary stage on the way to something better but as the goal in itself, which strips away the usual ideological excuses that tyrannies offer for their cruelty.',
      },
      {
        heading: 'The control of truth, memory, and language',
        body:
          'The Party operates on the principle that whoever controls the past controls the future, and by continually rewriting records and engineering the language of Newspeak it makes both objective truth and dissenting thought impossible.\n\nDoublethink, the mental discipline of holding two contradictory ideas at once and accepting both, is what allows citizens to live within this system, and Orwell, who was himself a working journalist, treated the corruption of language as the first and most dangerous step toward the corruption of freedom.',
      },
      {
        heading: 'Surveillance and the private self',
        body:
          'The constant observation enforced by the telescreens collapses the boundary between public and private life, so that people come to police their own faces and even their own thoughts.\n\nThe novel argues that selfhood itself depends upon the existence of a private space, and that by erasing all privacy the regime is able to erase the individual.',
      },
    ],
    motifs: [
      {
        name: 'The telescreen',
        meaning:
          'The two-way telescreen both watches the citizens and broadcasts propaganda at them, making it the central technology of total control and of the self-censorship that control produces.',
      },
      {
        name: 'The glass paperweight',
        meaning:
          'The paperweight is a beautiful fragment of the past and of Winston’s inner life, and its shattering at the moment of his arrest marks the destruction of his private world.',
      },
      {
        name: 'Room 101',
        meaning:
          'Room 101 contains "the worst thing in the world," individually tailored to each prisoner, and so represents the ultimate weaponization of personal fear.',
      },
      {
        name: 'The St. Clement’s rhyme',
        meaning:
          'The nostalgic nursery rhyme about London’s lost churches stands for the irretrievable past, and its completion by Charrington is the signal that the trap has been sprung.',
      },
    ],
    style: [
      {
        heading: 'Tone, setting, and realism',
        body:
          'Orwell writes in a deliberately plain, cold, and almost journalistic style, in keeping with his belief that good prose should be as transparent as a windowpane.\n\nThe setting, a grimy, rationed, and bombed-out London renamed "Airstrip One," is grounded in the austerity of postwar Britain, which makes the dystopia feel uncomfortably plausible rather than fantastical.',
      },
      {
        heading: 'Structure and the appendix device',
        body:
          'The third-person narration stays tightly bound to Winston’s perspective, which traps the reader inside his fear and his hope, while two embedded texts, Goldstein’s book and the closing appendix on "The Principles of Newspeak," interrupt the story to deliver political analysis.\n\nCrucially, the appendix is written in the past tense and in standard English, which subtly implies that the regime eventually fell, and this is the one buried note of hope that Orwell allows into an otherwise bleak novel.',
      },
    ],
    studyQuestions: [
      { prompt: 'Is Winston a hero, or is the novel arguing that individual heroism is ultimately futile against a system like the Party?', type: 'discussion' },
      { prompt: 'How does the Party use language, through Newspeak and doublethink, as a tool of control, and do you believe that controlling words can really control thought?', type: 'discussion' },
      { prompt: 'Why does the Party demand love rather than mere obedience, and what does Room 101 reveal about its ultimate goals?', type: 'discussion' },
      { prompt: 'Analyze the way Orwell uses the appendix on Newspeak, and explain how it changes your reading of the ending.', type: 'essay' },
      { prompt: 'Compare the roles that love and memory play as forms of rebellion in the novel, and explain why the Party must destroy both.', type: 'essay' },
      { prompt: 'Argue whether 1984 is best read as a warning about one specific regime, such as Stalinism, or about a universal human impulse toward power.', type: 'essay' },
    ],
    aboutAuthor:
      'George Orwell was the pen name of Eric Arthur Blair (1903–1950), an English writer and committed democratic socialist who was also one of the twentieth century’s fiercest critics of totalitarianism, whether of the right or of the left. He served as a colonial policeman in Burma, deliberately lived among the poor in order to write *Down and Out in Paris and London*, and fought against fascism in the Spanish Civil War, where he was shot through the throat and watched propaganda rewrite events he had personally witnessed, an experience that haunts *1984*.\n\nHe wrote the novel while gravely ill with tuberculosis on the remote Scottish island of Jura, racing against his own failing health, and he finished it in 1948, arriving at the title simply by reversing the last two digits of that year. He died only months after its publication, at the age of forty-six. Orwell’s purpose was explicitly political, since he wanted both "to make political writing into an art" and to warn the democratic West that the machinery of total control could take root anywhere, and not only in distant dictatorships.',
  },

  'crime-and-punishment': {
    whatMakesItFamous:
      '*Crime and Punishment* is one of the founding works of the psychological novel, and it is arguably the first great thriller to be told almost entirely from inside the mind of the criminal. Dostoevsky takes a deceptively simple premise, that of a man who commits a murder, and turns it into a five-hundred-page descent into guilt, paranoia, and the search for redemption, inventing along the way techniques of interior monologue that would go on to shape all of modern fiction.\n\nThe novel is also a landmark of philosophical literature, because Raskolnikov’s "extraordinary man" theory directly anticipates and then critiques later ideas about supermen who stand above ordinary morality, and the book is widely read as a profound argument against the notion that a noble end can justify a monstrous means. This fusion of crime drama, philosophy, and spiritual struggle has made it a permanent fixture of world literature.',
    plotSummary: [
      {
        heading: 'Parts One and Two — The crime and the fever',
        body:
          'Rodion Raskolnikov, a destitute former student living in St. Petersburg, broods over a theory that holds that "extraordinary" men have the right to transgress the law in pursuit of a higher purpose. Acting partly to test this theory and partly out of desperation, he murders an old pawnbroker named Alyona with an axe, and he is then forced to kill her gentle sister Lizaveta as well when she stumbles upon the scene.\n\nRather than the clarity and confirmation he had expected, Raskolnikov is immediately plunged into delirium and dread. He hides the stolen goods without ever making use of them, and a feverish illness takes hold of him, which is the first clear sign that his own conscience is beginning to destroy him.',
      },
      {
        heading: 'Parts Three and Four — The net tightens',
        body:
          'Raskolnikov is drawn into a long psychological duel with the shrewd investigator Porfiry Petrovich, who suspects him from the start and plays a patient game of cat and mouse without ever possessing hard evidence. At the same time he is drawn toward Sonya Marmeladov, a young woman who has been forced into prostitution in order to feed her family, and whose suffering and faith steadily unsettle his cold rationalism.\n\nThe decisive moment comes when Sonya reads aloud to him the Gospel account of the raising of Lazarus, planting the possibility of his own spiritual resurrection, while Porfiry tells him plainly that he knows the truth and urges him to confess of his own accord.',
      },
      {
        heading: 'Parts Five and Six and the Epilogue — Confession and rebirth',
        body:
          'After the suicide of the depraved Svidrigailov and under mounting psychological pressure, Raskolnikov finally confesses the murder to Sonya, who tells him to go to the crossroads, bow down before the people, and accept his suffering. He turns himself in to the authorities and is sentenced to eight years of hard labor in a Siberian prison camp.\n\nIn the epilogue, with Sonya having followed him into exile, Raskolnikov at last breaks down and weeps, beginning only now the long and difficult process of spiritual rebirth toward which the entire novel has been driving.',
      },
    ],
    characters: [
      {
        name: 'Rodion Raskolnikov',
        role: 'The protagonist, an impoverished former student',
        motivation:
          'He is driven by a desire to prove that he is an "extraordinary man" who stands above ordinary morality, and at the same time by the sheer pressure of escaping his crushing poverty.',
        arc:
          'He moves from cold, isolating pride, through the torment of his own guilt, to confession, suffering, and finally the first genuine stirrings of redemption.',
      },
      {
        name: 'Sonya Marmeladov',
        role: 'A young woman forced into prostitution who becomes the novel’s moral center',
        motivation:
          'She is motivated by self-sacrificing love and by a deep Christian faith, both as she tries to save her family and as she works to save Raskolnikov’s soul.',
        arc:
          'She remains steadfast throughout the novel, and she ultimately becomes the agent of Raskolnikov’s redemption, choosing to follow him into Siberian exile.',
      },
      {
        name: 'Porfiry Petrovich',
        role: 'The investigating magistrate',
        motivation:
          'His aim is to bring Raskolnikov to a genuine confession, which he pursues as much for the sake of the young man’s soul as for the sake of justice.',
        arc:
          'He serves as a psychologically astute foil who never needs hard evidence, since he understands that Raskolnikov’s own conscience will do his work for him.',
      },
      {
        name: 'Svidrigailov',
        role: 'A depraved and wealthy sensualist',
        motivation:
          'He is driven by the pursuit of pleasure and by a desperate desire to escape his own inner emptiness.',
        arc:
          'He functions as a dark mirror of Raskolnikov, a version of the man entirely without conscience, and his despairing suicide reveals the alternative that awaits a soul that refuses redemption.',
      },
    ],
    themeAnalysis: [
      {
        heading: 'The "extraordinary man" theory and its refutation',
        body:
          'Raskolnikov’s theory holds that a great figure, a Napoleon, may "step over" moral law in service of some larger destiny, while ordinary people are bound to obey it.\n\nDostoevsky refutes this theory not through argument but through consequence, since the murder shatters Raskolnikov’s psyche and proves that no human being can place himself outside the moral order without destroying himself, so that the entire novel becomes a sustained answer to the idea that the ends can justify the means.',
      },
      {
        heading: 'Guilt as the true punishment',
        body:
          'The "punishment" named in the title is psychological long before it ever becomes legal, and Raskolnikov’s fevers, his paranoia, and his compulsive returns to the scene of the crime constitute the real sentence he serves.\n\nThis is why the actual trial and prison term occupy so little of the book, since Dostoevsky renders conscience itself as an inescapable force built into human nature.',
      },
      {
        heading: 'Suffering, faith, and redemption',
        body:
          'Through the figure of Sonya, the novel argues that suffering accepted in a spirit of love can redeem even the gravest sin.\n\nSalvation, in Dostoevsky’s vision, comes not through reason but through confession, humility, and reconnection with other people, which is the Christian conviction that lies at the very heart of his work.',
      },
    ],
    motifs: [
      {
        name: 'The axe',
        meaning:
          'The instrument of the murder is also a symbol of the brutal, irreversible physical reality that overturns Raskolnikov’s clean and abstract theory.',
      },
      {
        name: 'St. Petersburg',
        meaning:
          'The hot, crowded, and suffocating city externalizes Raskolnikov’s feverish and claustrophobic mind, as well as the squalor and desperation that breed extremity.',
      },
      {
        name: 'The raising of Lazarus',
        meaning:
          'The Bible story that Sonya reads aloud is the central symbol of the spiritual resurrection that remains available to Raskolnikov if he will accept it.',
      },
      {
        name: 'The crossroads and bowing to the earth',
        meaning:
          'Public confession and the act of bowing down before others represent the ritual by which Raskolnikov can reconnect with the human community he had tried to rise above.',
      },
    ],
    style: [
      {
        heading: 'Psychological realism and point of view',
        body:
          'Dostoevsky pioneers a claustrophobic third-person narration that stays glued to Raskolnikov’s consciousness, plunging the reader into his rationalizations, his terror, and his delirium.\n\nThe result is an almost unbearable intimacy with a murderer, so that the reader is effectively trapped inside both the crime and the guilt that follows it.',
      },
      {
        heading: 'Polyphony, doubles, and the city',
        body:
          'The critic Mikhail Bakhtin described Dostoevsky’s novels as "polyphonic," meaning that they are full of distinct and clashing voices and ideologies, each given its full persuasive force, as can be seen in the contrasting positions of Porfiry, Sonya, Svidrigailov, and Luzhin.\n\nDostoevsky also builds meaning through "doubles," characters who embody the various paths Raskolnikov might take, and through a feverish, urgent prose style that mirrors the workings of his unraveling mind.',
      },
    ],
    studyQuestions: [
      { prompt: 'Does Raskolnikov ever truly believe his "extraordinary man" theory, or is it ultimately a rationalization for his desperation and his pride?', type: 'discussion' },
      { prompt: 'Why is the actual trial given so little space in the novel, and what does this choice suggest about Dostoevsky’s idea of punishment?', type: 'discussion' },
      { prompt: 'Is Sonya a realistic character or primarily a symbol, and what role does faith play in the novel’s vision of redemption?', type: 'discussion' },
      { prompt: 'Analyze Svidrigailov and Luzhin as "doubles" of Raskolnikov, and explain what alternative fates each of them represents.', type: 'essay' },
      { prompt: 'Examine the way the setting of St. Petersburg and its cramped rooms functions as an extension of Raskolnikov’s psychology.', type: 'essay' },
      { prompt: 'Argue whether or not Dostoevsky successfully refutes the idea that the ends can justify the means.', type: 'essay' },
    ],
    aboutAuthor:
      'Fyodor Dostoevsky (1821–1881) wrote from a position of hard personal experience. As a young man he was arrested for belonging to a circle of liberal intellectuals, and in 1849 he was subjected to a mock execution, made to stand before a firing squad and reprieved only at the last possible second, an ordeal that marked him for the rest of his life and deepened his obsession with mortality, guilt, and faith. He then spent four years in a Siberian prison camp, where he lived among genuine murderers and underwent a profound religious conversion.\n\nThat Siberian experience directly informs both Raskolnikov’s psychology and the redemptive ending of the novel. Dostoevsky also struggled throughout his life with epilepsy and with a crippling gambling addiction, and he wrote *Crime and Punishment*, published in 1866, at great speed and under brutal financial pressure, in part to pay off his debts. He intended the book as a moral and spiritual argument against the radical, rationalist, and nihilist ideas that were spreading among the Russian youth of his day.',
  },

  'the-great-gatsby': {
    whatMakesItFamous:
      '*The Great Gatsby* is widely regarded as the great American novel, the definitive portrait of the Jazz Age and the most enduring literary meditation on the American Dream. Its final line, in which "we beat on, boats against the current, borne back ceaselessly into the past," and its central image of Gatsby reaching out toward the green light are among the most frequently quoted passages in all of literature.\n\nRemarkably, the novel was a commercial disappointment during Fitzgerald’s lifetime, and he died in 1940 believing himself a failure. Its reputation exploded after the Second World War, when it was distributed in large numbers to American soldiers, and it has since sold tens of millions of copies, become a fixture of high-school curricula, and inspired countless films and adaptations. Its fame rests on the way Fitzgerald transforms a short, jazzy story of glamour and adultery into a profound elegy for hope, money, and the impossibility of repeating the past.',
    plotSummary: [
      {
        heading: 'Chapters One to Three — Arrival and the parties',
        body:
          'The narrator, Nick Carraway, moves to West Egg on Long Island, where he finds himself living next door to the mysterious Jay Gatsby. He visits his cousin Daisy Buchanan and her wealthy, brutish husband Tom in the old-money enclave of East Egg, and he meets the golfer Jordan Baker.\n\nNick eventually attends one of Gatsby’s legendary and lavish parties, where he finally meets his elusive host. In the course of these early chapters he also learns that Tom is conducting an affair with Myrtle Wilson, the wife of a garage owner who lives in the bleak industrial wasteland that Fitzgerald calls the Valley of Ashes.',
      },
      {
        heading: 'Chapters Four to Six — Gatsby’s dream revealed',
        body:
          'Gatsby gradually reveals, and partly fabricates, the story of his past, and then uses Nick to arrange a reunion with Daisy, the woman he had loved five years earlier and the entire reason behind his fortune and his parties.\n\nThe reunion succeeds, and Gatsby and Daisy rekindle their affair. The reader learns Gatsby’s true origins as the poor James Gatz, who reinvented himself through bootlegging and other crime, and Gatsby insists, against Nick’s warning, that he can indeed repeat the past and recover the relationship exactly as it once was.',
      },
      {
        heading: 'Chapters Seven to Nine — Collapse and death',
        body:
          'In a sweltering suite at a Manhattan hotel, Tom exposes the criminal sources of Gatsby’s wealth and forces Daisy to admit that she cannot say she never loved her husband. Driving home in Gatsby’s car, Daisy strikes and kills Myrtle, and Gatsby chooses to take the blame in order to protect her.\n\nThe novel reaches its climax when Myrtle’s grieving husband George, misled by Tom into believing Gatsby was both the driver and Myrtle’s lover, shoots Gatsby dead in his swimming pool and then kills himself. Almost no one attends Gatsby’s funeral, and Nick, sickened by the carelessness of the rich, returns to the Midwest, where he delivers the novel’s elegiac reflection on the receding American Dream.',
      },
    ],
    characters: [
      {
        name: 'Jay Gatsby',
        role: 'The self-made millionaire protagonist, born James Gatz',
        motivation:
          'Gatsby is driven by a single overwhelming desire, which is to recapture his lost love, Daisy, and the idealized past she represents, through the wealth and the new identity he has created.',
        arc:
          'His relentless hope and his capacity for self-creation are revealed as both magnificent and doomed, and he dies still clinging to a dream that was never truly within his reach.',
      },
      {
        name: 'Nick Carraway',
        role: 'The narrator, who is Gatsby’s neighbor and Daisy’s cousin',
        motivation:
          'Nick wants to make sense of the East and of his own fascination with Gatsby, and although he claims to be honest, his account is colored by his romantic bias.',
        arc:
          'He moves from being a dazzled observer to becoming a disillusioned moralist who ultimately rejects the careless wealth of the East and returns home.',
      },
      {
        name: 'Daisy Buchanan',
        role: 'Gatsby’s lost love and Tom’s wife',
        motivation:
          'Daisy is motivated above all by a desire for comfort, security, and status, and although she genuinely loves Gatsby, she cannot bring herself to abandon her safe and monied world.',
        arc:
          'She gradually reveals herself to be shallow and "careless," retreating back into her wealth and allowing Gatsby to take the fall for Myrtle’s death.',
      },
      {
        name: 'Tom Buchanan',
        role: 'Daisy’s arrogant, old-money husband',
        motivation:
          'Tom is driven by a constant need to preserve his power, his status, and his sense of dominance over everyone around him.',
        arc:
          'He remains essentially static across the novel, embodying the entrenched and careless privilege that destroys others and then walks away entirely unscathed.',
      },
    ],
    themeAnalysis: [
      {
        heading: 'The corruption of the American Dream',
        body:
          'Gatsby embodies both the promise of the American Dream, the idea that anyone can reinvent himself and rise, and its corruption, since his fortune is built on crime and its ultimate purpose is the shallow goal of winning back a woman who represents status.\n\nFitzgerald suggests that the dream has curdled, in the 1920s, into a pursuit of money and surface glamour, and that its true object is forever receding before us, just like the green light at the end of Daisy’s dock.',
      },
      {
        heading: 'Class and the divide between old and new money',
        body:
          'Despite all his wealth, Gatsby can never truly enter the world of Daisy and Tom, because class in America is finally a matter of belonging rather than simply of money.\n\nThe retreat of Tom and Daisy back into "their money and their vast carelessness" amounts to an indictment of an entrenched elite that breaks things and people and then leaves others to clean up the wreckage.',
      },
      {
        heading: 'The past, memory, and illusion',
        body:
          'When Gatsby insists, "Can’t repeat the past? Why of course you can!", he expresses the central delusion that drives his tragedy, namely the belief that he can erase five years and restore an idealized moment.\n\nThe novel is fundamentally about the gap between the dream and reality, and about the way Gatsby loves an illusion even more than he loves the actual woman who inspired it.',
      },
    ],
    motifs: [
      {
        name: 'The green light',
        meaning:
          'The green light at the end of Daisy’s dock represents Gatsby’s hope and longing, as well as the ever-receding "orgastic future" of the American Dream itself.',
      },
      {
        name: 'The eyes of Doctor T. J. Eckleburg',
        meaning:
          'The faded billboard of giant eyes that broods over the Valley of Ashes suggests an absent, blind God looking down upon a morally bankrupt society.',
      },
      {
        name: 'The Valley of Ashes',
        meaning:
          'The grey industrial wasteland that lies between the wealthy suburbs and the city represents the human and moral cost of the relentless pursuit of riches.',
      },
      {
        name: 'East Egg and West Egg',
        meaning:
          'The two communities embody the difference between inherited "old money" and flashy "new money," mapping the geography of America’s class divide.',
      },
    ],
    style: [
      {
        heading: 'Lyrical prose and symbolic economy',
        body:
          'Fitzgerald’s prose is famously poetic and compressed, so that although the novel is short, nearly every image of color, weather, or geography carries a heavy symbolic weight.\n\nColors recur throughout with consistent meaning, including green for hope, gold and yellow for money and decay, white for Daisy’s false purity, and grey for the ashes, with the result that the book reads more like an extended prose poem than a conventional plot-driven novel.',
      },
      {
        heading: 'The unreliable, romantic narrator',
        body:
          'Nick filters everything through his nostalgia and through his mixed attraction to and repulsion from wealth, and although he claims to be "one of the few honest people" he has ever known, his admiration for Gatsby shapes the entire telling.\n\nIt is precisely this first-person frame, with its elegiac tone, that elevates a sordid story of crime and adultery into something genuinely tragic, so that Gatsby becomes a figure of grandeur rather than merely a fool.',
      },
    ],
    studyQuestions: [
      { prompt: 'Is Gatsby truly "great," and in what sense does the title praise him while in another sense it mocks him?', type: 'discussion' },
      { prompt: 'How reliable is Nick as a narrator, and where does his bias most clearly shape our view of the other characters?', type: 'discussion' },
      { prompt: 'What does the novel ultimately say about the American Dream, and is that dream presented as dead, as a lie, or simply as out of reach?', type: 'discussion' },
      { prompt: 'Analyze Fitzgerald’s use of color symbolism throughout the novel.', type: 'essay' },
      { prompt: 'Compare the moral characters of Gatsby and Tom, and explain why Nick judges the "careless" Buchanans so harshly.', type: 'essay' },
      { prompt: 'Discuss the role of geography, including East Egg, West Egg, and the Valley of Ashes, in conveying the novel’s themes of class.', type: 'essay' },
    ],
    aboutAuthor:
      'F. Scott Fitzgerald (1896–1940) was both the chronicler and the embodiment of what he himself named the "Jazz Age." Together with his glamorous and troubled wife Zelda, he lived in the very world of wealth, parties, and excess that the novel simultaneously celebrates and condemns, and much of Gatsby’s longing draws on Fitzgerald’s own early rejection by a wealthy young woman who married someone richer, before he later won back his first love, Zelda, after he had achieved success.\n\nFitzgerald considered *The Great Gatsby*, published in 1925, to be his masterpiece, but it sold poorly and the critics were lukewarm, and he spent his later years struggling financially, writing for Hollywood, and battling alcoholism, before dying of a heart attack at the age of forty-four, convinced that he had failed. The novel’s posthumous rise to the very summit of American literature is one of literary history’s great reversals, and a poignant real-life echo of its own themes of dreams, reinvention, and the cruelty of time.',
  },

  'to-kill-a-mockingbird': {
    whatMakesItFamous:
      '*To Kill a Mockingbird* won the Pulitzer Prize in 1961 and became one of the best-selling and most beloved American novels of all time, a fixture of school reading lists for generation after generation. Its hero, Atticus Finch, became a cultural icon of moral courage and integrity, an image only strengthened by Gregory Peck’s performance in the 1962 film, and the book’s plea for empathy and racial justice placed it at the center of America’s long conversation about race.\n\nIt is equally famous as a perennial flashpoint, since it is simultaneously one of the most taught and one of the most frequently challenged or banned books in the United States, debated for its racial slurs, for its depiction of race through the eyes of a white child, and for what critics have called its "white savior" framing. That dual status, as both a cherished classic and a contested text, keeps it permanently at the center of contemporary debates about literature, history, and education.',
    plotSummary: [
      {
        heading: 'Part One — Maycomb and the Radley mystery',
        body:
          'In the Depression-era town of Maycomb, Alabama, the narrator, Scout Finch, together with her brother Jem and their friend Dill, becomes obsessed with their reclusive neighbor "Boo" Radley, daring one another to approach his house. Their father, the lawyer Atticus, patiently teaches them about empathy and conscience.\n\nThe central conflict begins to take shape when Atticus is appointed to defend Tom Robinson, a Black man who has been falsely accused of raping a white woman, and the children begin to face the hostility of the town as a result.',
      },
      {
        heading: 'Part Two — The trial of Tom Robinson',
        body:
          'The centerpiece of the novel is the trial itself, in which Atticus proves that Tom could not physically have committed the crime and exposes the fact that Mayella Ewell and her father Bob are lying. On the night before the trial, Scout’s innocent chatter disperses a lynch mob that has gathered at the jail.\n\nDespite the clear evidence of Tom’s innocence, the all-white jury convicts him, and the children’s faith in the basic fairness of their community collapses. Tom is later shot and killed while trying to escape from prison.',
      },
      {
        heading: 'The climax — Bob Ewell’s revenge',
        body:
          'Humiliated by his exposure at the trial, Bob Ewell seeks revenge and attacks Scout and Jem one night as they walk home in the dark. The long-feared Boo Radley emerges from his house to save them, and in the struggle Ewell is killed.\n\nThe sheriff quietly decides to report Ewell’s death as an accident in order to spare the painfully shy Boo from public attention, reasoning that to expose him would be a sin, like killing a mockingbird. Standing afterward on the Radley porch, Scout finally sees the neighborhood and the events of the past few years as Boo would have seen them, and so fulfills the central lesson her father has been teaching her.',
      },
    ],
    characters: [
      {
        name: 'Scout (Jean Louise) Finch',
        role: 'The narrator, a tomboyish young girl between the ages of six and nine',
        motivation:
          'Scout is driven by childlike curiosity and by a fierce, instinctive sense of fairness, and she wants above all to understand the adult world unfolding around her.',
        arc:
          'She grows from innocence toward a painful understanding of injustice, and she finally learns to "stand in another person’s shoes," as her father has urged.',
      },
      {
        name: 'Atticus Finch',
        role: 'Scout’s father, a principled small-town lawyer',
        motivation:
          'Atticus is motivated by a determination to do what is right and to model moral courage and empathy for his children, whatever the personal cost may be.',
        arc:
          'He functions as the novel’s moral constant, so that he does not so much change as reveal, through the ordeal of the trial, exactly what genuine integrity looks like.',
      },
      {
        name: 'Jem Finch',
        role: 'Scout’s older brother',
        motivation:
          'Jem wants to grow up well and to keep his faith in both the justice system and his father.',
        arc:
          'His coming-of-age is shattered by the guilty verdict, which forces upon him a harder and more disillusioned maturity.',
      },
      {
        name: 'Boo (Arthur) Radley',
        role: 'The reclusive and feared neighbor',
        motivation:
          'Boo is motivated by a quiet, protective care for the children, which he expresses only from the shadows.',
        arc:
          'He is transformed over the course of the novel from a figure of childish terror into its hidden "mockingbird" and, ultimately, the children’s savior.',
      },
    ],
    themeAnalysis: [
      {
        heading: 'Racial injustice',
        body:
          'Tom Robinson’s trial, in which overwhelming evidence of his innocence is overridden by a biased jury, lays bare the institutional racism of the Jim Crow South.\n\nThe novel insists that a legal system can follow all of its proper forms and procedures while still delivering a predetermined and deeply unjust result.',
      },
      {
        heading: 'Empathy and walking in another person’s skin',
        body:
          'Atticus’s repeated lesson, that one cannot truly understand another person until one considers things from that person’s point of view, forms the ethical core of the book, and Scout finally enacts it in the closing scene on the Radley porch.\n\nEmpathy is presented throughout as the antidote to prejudice, which is itself understood as a fundamental failure to see others as fully human.',
      },
      {
        heading: 'Innocence and moral growth',
        body:
          'As a coming-of-age story, the novel charts the children’s gradual loss of innocence, with the mockingbird serving as a symbol of the harmless innocents, such as Tom and Boo, who are destroyed or endangered by cruelty.\n\nAtticus guides his children toward courage rather than cynicism, teaching them to do what is right even when, as he puts it, they are "licked before they begin."',
      },
    ],
    motifs: [
      {
        name: 'The mockingbird',
        meaning:
          'The mockingbird, a creature that does nothing but sing for the pleasure of others, is the novel’s central symbol of the innocent people, such as Tom Robinson and Boo Radley, who are harmed by society.',
      },
      {
        name: 'The Radley house',
        meaning:
          'The Radley house represents childhood fear of the unknown, and its mystery gradually dissolves as the children mature and come to understand Boo as a person.',
      },
      {
        name: 'The gifts in the tree knot',
        meaning:
          'The small presents that Boo secretly leaves for the children in the knot of a tree provide quiet evidence of his humanity and his care long before he is ever seen.',
      },
      {
        name: 'The mad dog',
        meaning:
          'The scene in which Atticus shoots the rabid dog symbolizes his confronting of the "madness" of racism that has infected the entire town.',
      },
    ],
    style: [
      {
        heading: 'The retrospective child narrator',
        body:
          'Lee tells the story through the voice of an adult Scout looking back on her childhood, a "double vision" that blends a child’s innocent observation with an adult’s mature understanding.\n\nThis technique allows Lee to expose the hypocrisy of the town through Scout’s naïve eyes while at the same time layering in deeper moral reflection.',
      },
      {
        heading: 'Setting, tone, and Southern Gothic touches',
        body:
          'The vividly drawn small-town Southern setting and the generally warm, often humorous tone make the eventual injustice land all the harder when it comes.\n\nLee blends gentle nostalgia with darker Southern Gothic elements, including the Radley house, the lynch mob, and the menacing figure of Bob Ewell, in order to dramatize the way community warmth and deep-seated cruelty can coexist in the same place.',
      },
    ],
    studyQuestions: [
      { prompt: 'Whose story is this really, Scout’s coming-of-age or Tom Robinson’s, and what is gained and lost by filtering it through the perspective of a white child?', type: 'discussion' },
      { prompt: 'Is Atticus Finch an unambiguous hero, and how does the modern "white savior" critique complicate the way we read him?', type: 'discussion' },
      { prompt: 'Why does Lee connect the seemingly separate Boo Radley and Tom Robinson plots, and in what sense are both characters "mockingbirds"?', type: 'discussion' },
      { prompt: 'Analyze the significance of Scout’s narration and explain how the retrospective, dual point of view shapes the novel’s themes.', type: 'essay' },
      { prompt: 'Discuss whether the novel should still be taught today, weighing its central message against the criticisms that have been leveled at it.', type: 'essay' },
      { prompt: 'Examine how Harper Lee uses symbolism, including the mockingbird and the mad dog, to develop the theme of innocence and injustice.', type: 'essay' },
    ],
    aboutAuthor:
      'Harper Lee (1926–2016) drew heavily on her own childhood in Monroeville, Alabama, since, like Scout, she was a tomboy with a lawyer father, and the character of Dill is based on her real-life best friend, the writer Truman Capote. The trial of Tom Robinson echoes the racially charged cases, such as that of the Scottsboro Boys, that shaped the South of her youth.\n\nFor most of her life *To Kill a Mockingbird*, published in 1960, was her only published novel, and she became famously private after its overwhelming success. In 2015, shortly before her death, a controversial second book titled *Go Set a Watchman*, which was in fact an earlier draft featuring an older and more prejudiced Atticus, was published amid debate over whether Lee had genuinely consented, a development that complicated the saintly image of her hero. Lee herself said that she had simply hoped to become "the Jane Austen of south Alabama," chronicling the small-town world she knew with honesty about both its tenderness and its injustice.',
  },
};
