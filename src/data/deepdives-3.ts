import type { BookDeepDive } from './types';

/** Deep-dive guides — batch 3. Merged with the others in `books.ts`. */
export const deepDives3: Record<string, BookDeepDive> = {
  'pride-and-prejudice': {
    whatMakesItFamous:
      '*Pride and Prejudice* is the most beloved romance in the English language and the template for the entire genre — the "enemies to lovers" arc, the proud brooding hero (Mr. Darcy), and the witty, independent heroine (Elizabeth Bennet) all trace back here. Its opening line ("It is a truth universally acknowledged…") is one of the most famous in literature, and the book has inspired endless adaptations, from the BBC’s lake scene to *Bridget Jones’s Diary*.\n\nPublished in 1813, it endures because beneath the romance is razor-sharp social comedy: Austen dissects class, money, and the marriage market with irony that still feels fresh. It is both a swoon-worthy love story and a clear-eyed critique of the society that nearly keeps the lovers apart.',
    plotSummary: [
      { heading: 'Volume 1 — First impressions', body: 'The wealthy Mr. Bingley rents a nearby estate and is drawn to gentle Jane Bennet, while his proud friend Mr. Darcy snubs her sharp-witted sister Elizabeth at a ball. Elizabeth forms a prejudice against Darcy, fueled by the charming liar Wickham. Mr. Collins, the pompous heir to the Bennet estate, proposes to Elizabeth and is refused.' },
      { heading: 'Volume 2 — The disastrous proposal', body: 'Turning point: Darcy, against his pride, proposes to Elizabeth — but so insultingly (dwelling on her inferior family) that she furiously refuses. He then writes a letter revealing the truth about Wickham and his role in separating Bingley and Jane. Elizabeth begins to realize how badly she has misjudged him.' },
      { heading: 'Volume 3 — Reversal and resolution', body: 'Visiting Darcy’s estate Pemberley, Elizabeth sees his true, generous character. Crisis: her youngest sister Lydia elopes with Wickham, threatening the family’s reputation. Darcy quietly resolves the scandal. Recognizing how each has overcome pride and prejudice, Elizabeth and Darcy — and Jane and Bingley — marry as equals in respect and love.' },
    ],
    characters: [
      { name: 'Elizabeth Bennet', role: 'The witty, independent protagonist (second Bennet daughter)', motivation: 'To marry for genuine love and respect, not security — and to preserve her self-respect.', arc: 'Overcomes her "prejudice" and wounded vanity, learning to revise her first impressions and recognize Darcy’s worth.' },
      { name: 'Mr. Darcy', role: 'A wealthy, reserved gentleman', motivation: 'Initially pride in his rank; later, love for Elizabeth and a desire to become worthy of her.', arc: 'Sheds his arrogance, humbling himself and acting with quiet generosity — the "pride" of the title corrected.' },
      { name: 'Jane Bennet', role: 'Elizabeth’s gentle elder sister', motivation: 'To think well of everyone and to love Bingley.', arc: 'Her steadiness is rewarded; she represents sincere goodness against the novel’s irony.' },
      { name: 'Mr. Wickham', role: 'A charming militia officer', motivation: 'Money and self-advancement through deceit and seduction.', arc: 'The charming villain whose lies drive Elizabeth’s prejudice; exposed and contained by Darcy.' },
    ],
    themeAnalysis: [
      { heading: 'Pride, prejudice, and self-knowledge', body: 'The title names the twin flaws the protagonists must overcome — Darcy’s pride and Elizabeth’s prejudice. Their arc is mutual self-correction: maturity, Austen suggests, is the capacity to revise first impressions in light of evidence.' },
      { heading: 'Marriage, money, and women’s options', body: 'With the Bennet estate "entailed" away from the daughters, marriage is their only security. Austen surveys a spectrum of motives — Charlotte marries for stability, Lydia for passion, Elizabeth and Jane hold out for love-plus-respect — critiquing a society that treats marriage as a transaction.' },
      { heading: 'Class and social mobility', body: 'The novel maps the fine gradations of English class — and quietly champions character over rank. Elizabeth refuses to be intimidated by status, and Darcy’s willingness to marry beneath his class is a small act of social defiance.' },
    ],
    motifs: [
      { name: 'Letters', meaning: 'Darcy’s letter is the hinge of the plot; letters throughout reveal true character and correct misunderstanding.' },
      { name: 'Pemberley (Darcy’s estate)', meaning: 'Seeing his beautiful, well-run home shifts Elizabeth’s view — the estate embodies Darcy’s real character.' },
      { name: 'Dancing and balls', meaning: 'Social rituals where courtship, class, and personality are negotiated and exposed.' },
      { name: 'Eyes and "fine eyes"', meaning: 'Darcy’s fixation on Elizabeth’s eyes marks attraction overriding his class prejudice.' },
    ],
    style: [
      { heading: 'Irony and the famous opening', body: 'Austen’s wit is structural. The ironic first line instantly signals a narrator who mocks the very society she describes, establishing the comedy of manners that frames the romance.' },
      { heading: 'Free indirect discourse', body: 'Austen pioneered "free indirect discourse," blending the narrator’s voice with Elizabeth’s thoughts so we share — and eventually outgrow — her biased judgments alongside her. This intimacy is what makes her misreadings (and corrections) so satisfying.' },
    ],
    studyQuestions: [
      { prompt: 'Who is more at fault at the start — the proud Darcy or the prejudiced Elizabeth? How does each change?', type: 'discussion' },
      { prompt: 'Is Charlotte Lucas’s pragmatic marriage to Mr. Collins a betrayal of love, or a sensible response to women’s limited options?', type: 'discussion' },
      { prompt: 'How does Austen use irony to critique her society even within a happy romance?', type: 'discussion' },
      { prompt: 'Analyze Darcy’s letter as the turning point of the novel.', type: 'essay' },
      { prompt: 'Discuss marriage as both a romantic ideal and an economic necessity in the novel.', type: 'essay' },
      { prompt: 'Examine Austen’s use of free indirect discourse and how it shapes our view of Elizabeth.', type: 'essay' },
    ],
    aboutAuthor:
      'Jane Austen (1775–1817) wrote her novels from within the very gentry world she satirized, as an unmarried woman with limited income who understood firsthand how marriage determined a woman’s fate. She originally drafted *Pride and Prejudice* in the 1790s under the title *First Impressions* before revising and publishing it anonymously in 1813 ("by a Lady").\n\nAusten published only four novels in her lifetime and earned modest recognition, dying at 41. Her reputation grew enormously after her death, and she is now regarded as one of the greatest English novelists — celebrated for her irony, her psychological precision, and her quietly radical insistence that women deserved marriages of mutual respect.',
  },

  'the-catcher-in-the-rye': {
    whatMakesItFamous:
      '*The Catcher in the Rye* is the defining novel of teenage alienation — its narrator, Holden Caulfield, became the archetype of adolescent rebellion and the voice of disaffected youth for generations. The word "phony," the red hunting hat, and the image of the "catcher in the rye" are cultural touchstones, and the book’s intimate, slangy first-person voice changed American fiction.\n\nPublished in 1951, it has sold tens of millions of copies and remains both a perennial favorite and one of the most frequently banned books in America. Its reclusive author, J.D. Salinger, and the novel’s notorious association with several high-profile crimes have only deepened its mystique.',
    plotSummary: [
      { heading: 'Expulsion from Pencey', body: 'Sixteen-year-old Holden narrates, from a rest facility, the events of a few December days. Having flunked out of Pencey Prep — his latest school — he gets in a fight with his roommate and decides to leave campus early, days before going home, unable to face his parents.' },
      { heading: 'Three days adrift in New York', body: 'Holden checks into a hotel and wanders the city, disgusted by the "phoniness" of nearly everyone he meets. A series of failed encounters — a botched episode with a prostitute, a date with Sally, drinks with an old classmate — deepen his isolation and emotional unraveling. He keeps circling memories of his dead younger brother, Allie.' },
      { heading: 'Phoebe and the carousel', body: 'Turning point: Holden secretly visits his beloved younger sister Phoebe, who sees through him and asks what he actually likes. He shares his fantasy of being the "catcher in the rye," saving children from falling off a cliff. Climax/resolution: watching Phoebe ride a carousel in the rain, he feels an unexpected, overwhelming happiness — a fragile hint of hope before he ends up in care.' },
    ],
    characters: [
      { name: 'Holden Caulfield', role: 'The teenage narrator', motivation: 'To protect innocence and avoid the "phony" adult world; underneath, to cope with grief and fear of growing up.', arc: 'His defensive cynicism slowly cracks to reveal deep pain; the ending hints at the possibility of healing.' },
      { name: 'Phoebe Caulfield', role: 'Holden’s sharp, loving 10-year-old sister', motivation: 'To understand and help her brother.', arc: 'The one genuine connection that pulls Holden back from the edge; she embodies the innocence he wants to protect.' },
      { name: 'Allie Caulfield', role: 'Holden’s younger brother, dead of leukemia', motivation: '—', arc: 'Present only in memory; his death is the unspoken wound driving Holden’s grief and obsession with lost innocence.' },
      { name: 'Mr. Antolini', role: 'A former teacher Holden admires', motivation: 'To warn and guide Holden.', arc: 'Offers real insight about Holden’s self-destructive path, but an ambiguous gesture sends Holden fleeing — deepening his distrust.' },
    ],
    themeAnalysis: [
      { heading: 'Alienation and "phoniness"', body: 'Holden’s catch-all word "phony" names the hypocrisy and performance he sees everywhere. His contempt is a defense mechanism — rejecting the world first to avoid being hurt by it — but Salinger shows his alienation is also self-imposed, a barrier against grief and growing up.' },
      { heading: 'The preservation of innocence', body: 'The title fantasy — catching children before they fall off a cliff — is the key to Holden’s psyche. He wants to freeze childhood and protect innocence (his own, Phoebe’s, Allie’s) from corruption, and must painfully learn he cannot stop the "fall" into adulthood.' },
      { heading: 'Grief and mental health', body: 'Beneath the rebellion is a teenager in crisis — grieving Allie, isolated, narrating from what appears to be a treatment facility. The novel is, read closely, a portrait of depression and an unspoken cry for help.' },
    ],
    motifs: [
      { name: 'The red hunting hat', meaning: 'Holden’s shield of individuality, worn when he feels most vulnerable and alone.' },
      { name: 'The ducks in Central Park', meaning: 'Holden’s repeated question — where do they go in winter? — voices his anxiety about change, disappearance, and survival.' },
      { name: 'The Museum of Natural History', meaning: 'Holden loves it because nothing changes there — a wish to freeze time against the chaos of growing up.' },
      { name: 'The carousel', meaning: 'Phoebe reaching for the gold ring while Holden watches — accepting that you must let children take risks and grow.' },
    ],
    style: [
      { heading: 'The colloquial first-person voice', body: 'Salinger’s revolutionary achievement is Holden’s voice — digressive, slangy, contradictory, instantly intimate ("and all," "if you want to know the truth"). It made the novel feel startlingly authentic and shaped decades of first-person fiction.' },
      { heading: 'Unreliable narration', body: 'We see everything through Holden’s biased, depressed lens. The gap between what he says and what he feels — between his contempt and his obvious need for connection — is where the novel’s real meaning lives.' },
    ],
    studyQuestions: [
      { prompt: 'Is Holden a sympathetic character or an unbearable one? Does Salinger want us to side with him?', type: 'discussion' },
      { prompt: 'What does Holden really mean by "phony," and is his judgment fair?', type: 'discussion' },
      { prompt: 'How does the death of Allie shape Holden’s behavior throughout the novel?', type: 'discussion' },
      { prompt: 'Analyze the "catcher in the rye" fantasy as the key to Holden’s character.', type: 'essay' },
      { prompt: 'Discuss the novel as a portrait of grief and mental illness rather than simple teenage rebellion.', type: 'essay' },
      { prompt: 'Examine how Salinger uses Holden’s unreliable narration to create meaning.', type: 'essay' },
    ],
    aboutAuthor:
      'J.D. Salinger (1919–2010) drew on his own privileged New York upbringing and his traumatic experience as a WWII combat soldier — he landed on D-Day and helped liberate a concentration camp — which many read into Holden’s post-traumatic alienation. He published *The Catcher in the Rye* in 1951 to instant success.\n\nSalinger then became one of literature’s most famous recluses, withdrawing to rural New Hampshire, refusing interviews, and eventually ceasing to publish altogether while reportedly continuing to write. His fierce protection of the novel (he never allowed a film adaptation) and its association with notorious crimes turned both author and book into enduring cultural mysteries.',
  },

  'brave-new-world': {
    whatMakesItFamous:
      '*Brave New World* is one of the two great 20th-century dystopias (alongside *1984*), and the one many argue best predicted our present. Its vision of control through pleasure — engineered babies, the happiness drug "soma," endless entertainment, and the abolition of suffering — gave us a vocabulary for a softer kind of tyranny. The phrase "brave new world" (borrowed from Shakespeare) is now shorthand for unsettling technological futures.\n\nPublished in 1932, decades before genetic engineering or antidepressants, Huxley’s prophecy of a society that enslaves itself through comfort and consumption has only grown more relevant, making it a fixture of both classrooms and tech-ethics debates.',
    plotSummary: [
      { heading: 'The World State', body: 'In a future London, humans are mass-produced in hatcheries, genetically engineered into castes (Alpha to Epsilon), and conditioned from birth to love their roles. Stability is maintained through promiscuity, consumption, and soma. We meet the discontented Alpha Bernard Marx and the conventional Lenina.' },
      { heading: 'The Savage Reservation', body: 'Turning point: Bernard and Lenina visit a "Savage Reservation," where people still live, age, and suffer naturally. There they find John ("the Savage"), born naturally to a World State woman and raised on Shakespeare. Bernard brings John and his mother back to London as a sensation.' },
      { heading: 'John’s rebellion and tragedy', body: 'John is horrified by the shallow, dehumanized society. Climax: his great debate with World Controller Mustapha Mond lays bare the trade the society has made — stability and comfort for freedom, art, and truth. Demanding "the right to be unhappy," John withdraws to live alone, but hounded by crowds, he ultimately takes his own life.' },
    ],
    characters: [
      { name: 'John "the Savage"', role: 'An outsider raised outside the World State, on Shakespeare', motivation: 'To live a fully human life — with love, art, religion, suffering, and meaning.', arc: 'From wide-eyed visitor to horrified critic; unable to live in either world, he is destroyed by it.' },
      { name: 'Bernard Marx', role: 'A discontented Alpha psychologist', motivation: 'Acceptance and status — he resents the system mostly because he doesn’t fit it.', arc: 'A would-be rebel revealed as shallow and self-serving; he enjoys fame, then is exiled.' },
      { name: 'Mustapha Mond', role: 'World Controller for Western Europe', motivation: 'To preserve social stability above all else.', arc: 'The articulate voice of the system; he knowingly chose stability over truth and defends the trade.' },
      { name: 'Lenina Crowne', role: 'A conventional young woman Bernard and John desire', motivation: 'Pleasure and belonging, exactly as conditioned.', arc: 'Largely static; her inability to understand real love or depth highlights what the society has erased.' },
    ],
    themeAnalysis: [
      { heading: 'Happiness versus freedom', body: 'Huxley’s central question: is a life of engineered comfort worth living if it costs all freedom and depth? The World State has abolished pain — but also love, art, and meaning. John demands "the right to be unhappy," insisting suffering is inseparable from a fully human life.' },
      { heading: 'Technology, conditioning, and individuality', body: 'From sleep-teaching to caste conditioning, citizens are manufactured to love their servitude. "Everyone belongs to everyone else"; solitude and original thought are pathologized. Huxley dramatizes how mass conditioning produces contentment at the cost of selfhood.' },
      { heading: 'Pleasure as control', body: 'Unlike Orwell’s tyranny of fear, Huxley imagines tyranny by pleasure — soma, sex, and consumption pacify dissent. The warning is that people can be enslaved not by force but by their own comforts and distractions.' },
    ],
    motifs: [
      { name: 'Soma', meaning: 'The happiness drug that erases all discomfort — control through chemical contentment ("all the advantages of Christianity and alcohol; none of their defects").' },
      { name: 'The hatchery / bottling', meaning: 'Mass-produced, engineered humans — individuality abolished before birth.' },
      { name: 'Shakespeare', meaning: 'John’s source of language and values; great art represents the depth and beauty the World State has eliminated.' },
      { name: 'Ford / "Our Ford"', meaning: 'Henry Ford worshipped as a deity — the assembly line and consumerism as the society’s religion.' },
    ],
    style: [
      { heading: 'Satire and the novel of ideas', body: 'Huxley writes a "novel of ideas," using satire and caricature more than deep character to dramatize a philosophical argument. The famous debate between John and Mond is essentially a Socratic dialogue about the cost of utopia.' },
      { heading: 'Irony and intertextuality', body: 'The title’s irony (Miranda’s wonder in *The Tempest* applied to a soulless world) and the pervasive Shakespeare quotations set the rich human past against the hollow engineered present.' },
    ],
    studyQuestions: [
      { prompt: 'Is the World State a utopia or a dystopia? What exactly has been gained and lost?', type: 'discussion' },
      { prompt: 'Whose vision better describes 2026 — Huxley’s control by pleasure or Orwell’s control by fear?', type: 'discussion' },
      { prompt: 'Is John right to demand "the right to be unhappy"? Is suffering necessary for a meaningful life?', type: 'discussion' },
      { prompt: 'Analyze soma as a symbol of social control.', type: 'essay' },
      { prompt: 'Compare and contrast Brave New World with 1984 as models of dystopia.', type: 'essay' },
      { prompt: 'Discuss the role of Shakespeare and "the Savage" in critiquing the World State.', type: 'essay' },
    ],
    aboutAuthor:
      'Aldous Huxley (1894–1963) came from a famous British intellectual family (his grandfather was the biologist T.H. Huxley, "Darwin’s bulldog"). Highly educated and fascinated by science, he wrote *Brave New World* in 1932 partly as a satire of the utopian optimism of writers like H.G. Wells and of the new mass-production, consumer society epitomized by Henry Ford.\n\nHuxley later moved to California and became deeply interested in mysticism and psychedelics (*The Doors of Perception*). In a 1958 reassessment, *Brave New World Revisited*, he argued the real world was sliding toward his vision faster than he had feared. He died in 1963 — on the same day as C.S. Lewis and the JFK assassination.',
  },

  'fahrenheit-451': {
    whatMakesItFamous:
      '*Fahrenheit 451* is the iconic novel about censorship and book burning — its very title (the temperature at which paper burns) is famous, and its image of "firemen" who start fires to destroy books is unforgettable. It is the go-to literary reference in every debate about banning books and the dumbing-down of culture.\n\nPublished in 1953 at the height of McCarthyism and the dawn of television, Bradbury’s warning about a society that abandons reading for shallow, wall-sized screens has proven strikingly prophetic. It remains one of the most taught — and, ironically, most challenged — works of science fiction.',
    plotSummary: [
      { heading: 'A fireman who burns books', body: 'Guy Montag is a "fireman" in a future America where firemen burn books, which are illegal. He takes pride in his work until he meets Clarisse, a curious teenage neighbor who notices the world and asks unsettling questions, and witnesses a woman choose to burn alive with her books.' },
      { heading: 'Awakening and crisis', body: 'Turning point: these encounters crack Montag’s complacency. He begins secretly hoarding books and seeks out Faber, a former professor. His wife Mildred, hypnotized by her TV "family" and nearly dead from an overdose, embodies the numb society. Fire captain Beatty explains how society chose distraction over depth.' },
      { heading: 'Escape and rebirth', body: 'Exposed, Montag burns Beatty and flees the city as it is destroyed by war. Climax/resolution: he joins a group of intellectual exiles, the "book people," who have each memorized a book to preserve human knowledge. As the city falls, they prepare to rebuild a civilization that remembers.' },
    ],
    characters: [
      { name: 'Guy Montag', role: 'A fireman who burns books', motivation: 'Initially pride in his job; then a growing hunger for meaning, truth, and connection.', arc: 'Transforms from unthinking enforcer to fugitive defender of knowledge.' },
      { name: 'Clarisse McClellan', role: 'A curious teenage neighbor', motivation: 'To notice, wonder, and question the world.', arc: 'A catalyst who reawakens Montag’s buried capacity to think before she disappears.' },
      { name: 'Captain Beatty', role: 'Montag’s fire chief', motivation: 'To enforce conformity; ironically well-read, he uses books to argue against them.', arc: 'The articulate antagonist who explains the system; possibly suicidal, he lets Montag kill him.' },
      { name: 'Mildred Montag', role: 'Montag’s wife', motivation: 'Distraction and comfort through her TV "family" and earbuds.', arc: 'Static — the embodiment of the anesthetized society Montag comes to reject.' },
    ],
    themeAnalysis: [
      { heading: 'Censorship from the bottom up', body: 'Bradbury’s sharpest point, via Beatty: censorship began not with government but with the people, who demanded nothing offensive and preferred distraction to thought. The warning is that a culture can lose its books through indifference, not just force.' },
      { heading: 'Technology, distraction, and numbness', body: 'Mildred’s wall-screens and earbuds depict a population anesthetized by entertainment, so terrified of silence it cannot face its own emptiness. Clarisse, who simply notices and wonders, is the human contrast.' },
      { heading: 'Knowledge, memory, and rebirth', body: 'Books represent the accumulated wisdom and complexity the society has discarded. The "book people" who memorize texts — and the recurring phoenix image — frame Bradbury’s cautious hope that civilization can destroy itself and yet be reborn through those who remember.' },
    ],
    motifs: [
      { name: 'Fire', meaning: 'Begins as pure destruction ("It was a pleasure to burn") and transforms by the end into warmth and renewal at the exiles’ campfire.' },
      { name: 'The phoenix', meaning: 'The bird that burns and rises from its ashes — humanity’s capacity to destroy itself and rebuild.' },
      { name: 'The Mechanical Hound', meaning: 'A robotic predator — technology turned into an unfeeling instrument of state control and conformity.' },
      { name: 'The wall-screen "parlor"', meaning: 'Immersive TV that replaces thought, family, and reality with empty noise.' },
    ],
    style: [
      { heading: 'Lyrical, sensory prose', body: 'Bradbury, a poet of science fiction, writes in vivid, metaphor-rich prose — fire, machinery, and nature rendered with sensory intensity that gives the short novel emotional heat.' },
      { heading: 'Symbolism and allusion', body: 'The book is dense with symbol (fire, the phoenix, the salamander) and literary allusion; characters quote the great books the society has banned, embodying the lost culture Montag fights to recover.' },
    ],
    studyQuestions: [
      { prompt: 'Bradbury says the people, not the government, started the censorship. Does that make the warning more disturbing?', type: 'discussion' },
      { prompt: 'How does the novel’s vision of screen-addicted, distracted citizens compare to life in 2026?', type: 'discussion' },
      { prompt: 'Is Beatty a hypocrite, a tragic figure, or the novel’s most honest character?', type: 'discussion' },
      { prompt: 'Analyze fire as a symbol that changes meaning across the novel.', type: 'essay' },
      { prompt: 'Discuss the role of technology (the parlor walls, the Hound) in enforcing conformity.', type: 'essay' },
      { prompt: 'Examine the "book people" and the phoenix as symbols of cultural memory and rebirth.', type: 'essay' },
    ],
    aboutAuthor:
      'Ray Bradbury (1920–2012) was a largely self-educated writer who said he "graduated from libraries," spending his youth devouring books during the Depression — which gave *Fahrenheit 451* (1953) its deep personal stake in reading. He reportedly wrote the first draft on a coin-operated typewriter in a UCLA library basement.\n\nWriting amid McCarthy-era censorship and the explosive rise of television, Bradbury insisted the book was as much about how mass media erodes attention and thought as about state censorship. One of the most influential science-fiction and fantasy writers of the 20th century, he championed libraries and reading for the rest of his life.',
  },

  'frankenstein': {
    whatMakesItFamous:
      '*Frankenstein* is often called the first true science-fiction novel, and its creature is one of the most recognizable figures in all of culture. Written by a teenager, Mary Shelley, it gave us the enduring myth of the scientist who creates life and the phrase "playing God." (A famous point of confusion endures: "Frankenstein" is the creator, not the monster.)\n\nPublished in 1818, the novel’s questions about scientific responsibility, creation, and what we owe the beings (and technologies) we make have only grown more urgent in the age of AI and bioengineering, making it the defining cautionary tale of modern science.',
    plotSummary: [
      { heading: 'The frame and the creation', body: 'The story is framed by Arctic explorer Robert Walton’s letters. He rescues a dying Victor Frankenstein, who recounts his tale: a brilliant young scientist, Victor discovers the secret of generating life and, working in obsessive isolation, assembles and animates a creature from dead matter — then, horrified, abandons it.' },
      { heading: 'The creature’s education and rage', body: 'Turning point: the rejected creature, intelligent and initially gentle, learns language and longs for companionship but is met everywhere with terror. Embittered, he murders Victor’s young brother William. He confronts Victor and demands a female companion, telling his side of the story.' },
      { heading: 'Mutual destruction', body: 'Victor begins, then destroys, the half-finished mate. In revenge, the creature kills Victor’s friend Clerval and, on Victor’s wedding night, his bride Elizabeth. Climax: consumed by mutual hatred, creator and creation pursue each other to the Arctic, where Victor dies. The grieving creature, his vengeance hollow, vanishes into the ice to end his own life.' },
    ],
    characters: [
      { name: 'Victor Frankenstein', role: 'The ambitious young scientist', motivation: 'Glory and the godlike power to create life — without thought for the consequences.', arc: 'From idealistic genius to guilt-ridden, broken man destroyed by his own creation and irresponsibility.' },
      { name: 'The Creature', role: 'The being Victor creates and abandons', motivation: 'Companionship, acceptance, and an explanation for why he was made and forsaken.', arc: 'Begins gentle and becomes monstrous only through rejection and cruelty — the novel’s most sympathetic and articulate voice.' },
      { name: 'Robert Walton', role: 'Arctic explorer; the frame narrator', motivation: 'Glory and discovery, mirroring Victor’s ambition.', arc: 'Hearing Victor’s tale, he turns his ship back — learning the lesson Victor did not.' },
      { name: 'Elizabeth Lavenza', role: 'Victor’s adopted sister and bride', motivation: 'Love and devotion to Victor.', arc: 'An innocent victim; her murder is the creature’s ultimate revenge.' },
    ],
    themeAnalysis: [
      { heading: 'The dangers of unchecked ambition', body: 'Subtitled "The Modern Prometheus," the novel warns against the hubris of seeking godlike power without wisdom or responsibility. Victor’s obsessive pursuit of knowledge, with no thought for consequences, brings ruin on everyone he loves.' },
      { heading: 'Who is the real monster?', body: 'The creature begins gentle and becomes violent only through abandonment and cruelty. Given the most eloquent voice in the book, he shifts the blame from creation to creator: Victor’s failure of responsibility, not the creature’s nature, produces the tragedy.' },
      { heading: 'Isolation and the need for connection', body: 'Both Victor and the creature are destroyed by isolation. The creature’s crimes are the screams of a being denied love and belonging; Shelley presents connection and acceptance as fundamental human needs.' },
    ],
    motifs: [
      { name: 'Fire / light (Prometheus)', meaning: 'Forbidden knowledge that both illuminates and destroys — Victor steals the "fire" of creation and is punished like Prometheus.' },
      { name: 'The Arctic / ice', meaning: 'The cold, desolate frame setting mirrors the isolation and emotional barrenness of both Victor and his creature.' },
      { name: 'Light and darkness', meaning: 'The thrill of discovery (light) repeatedly gives way to horror and despair (darkness).' },
      { name: 'Paradise Lost', meaning: 'The creature compares himself to both Adam and Satan — a creation cast out by an indifferent maker.' },
    ],
    style: [
      { heading: 'Frame narrative and nested voices', body: 'Shelley nests stories — Walton’s letters contain Victor’s tale, which contains the creature’s — so we hear the "monster" speak for himself. This structure builds sympathy and complicates any simple judgment.' },
      { heading: 'Gothic and Romantic elements', body: 'The novel blends Gothic horror (graveyards, the grotesque, dread) with Romantic awe at sublime nature (the Alps, the Arctic), using wild landscapes to mirror inner turmoil.' },
    ],
    studyQuestions: [
      { prompt: 'Who is the true "monster" of the novel — Victor or his creation?', type: 'discussion' },
      { prompt: 'What does Frankenstein suggest creators owe to what they create? How does this apply to modern AI?', type: 'discussion' },
      { prompt: 'Is the creature born evil or made evil? What evidence does Shelley give?', type: 'discussion' },
      { prompt: 'Analyze the novel’s frame narrative and how the nested perspectives shape our sympathies.', type: 'essay' },
      { prompt: 'Discuss "The Modern Prometheus" subtitle and the theme of dangerous ambition.', type: 'essay' },
      { prompt: 'Examine the role of isolation and rejection in creating the creature’s violence.', type: 'essay' },
    ],
    aboutAuthor:
      'Mary Shelley (1797–1851) wrote *Frankenstein* when she was just 18, and published it anonymously in 1818 at 20. The idea famously came from a ghost-story contest in the rainy summer of 1816 at Lake Geneva, where she was staying with the poet Percy Bysshe Shelley (whom she later married) and Lord Byron. A waking nightmare gave her the image of a scientist horrified by the thing he had brought to life.\n\nMary was the daughter of two radical thinkers — feminist Mary Wollstonecraft (who died days after her birth) and philosopher William Godwin — and her life was marked by loss, including the deaths of several of her own children. These themes of creation, parental abandonment, and grief run deep through the novel, which she wrote amid the era’s exciting and frightening scientific experiments with electricity and "galvanism."',
  },
};
