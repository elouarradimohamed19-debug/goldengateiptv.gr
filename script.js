// ================= SETTINGS (from goldengateiptv.gr) =================
const CONFIG = {
  site: "goldengateiptv.gr",
  whatsapp: "212707711512",
  email: "greeksiptv@gmail.com",
  // price per plan for 1 / 2 / 3 devices (EUR)
  plans: [
    { key: "1d",  en: "1 Day",    el: "1 Ημέρα",  prices: [3, 6, 9] },
    { key: "1m",  en: "1 Month",  el: "1 Μήνας",  prices: [15, 24, 35] },
    { key: "3m",  en: "3 Months", el: "3 Μήνες",  prices: [32, 47, 80] },
    { key: "6m",  en: "6 Months", el: "6 Μήνες",  prices: [42, 67, 99], featured: true },
    { key: "1y",  en: "1 Year",   el: "1 Έτος",   prices: [62, 94, 150] },
    { key: "2y",  en: "2 Years",  el: "2 Χρόνια", prices: [110, 199, 297] },
  ],
  // Replace with your real, verifiable numbers
  stats: [
    { n: "1–3",  icon: "fa-solid fa-tv",           el: "Συσκευές ανά λογαριασμό", en: "Devices per account" },
    { n: "24/7", icon: "fa-brands fa-whatsapp",    el: "Υποστήριξη μέσω WhatsApp", en: "WhatsApp support" },
    { n: "4K",   icon: "fa-solid fa-star",         el: "Ποιότητα έως 4K / UHD",  en: "Up to 4K / UHD quality" },
    { n: "7",    icon: "fa-solid fa-shield-halved", el: "Ημέρες εγγύηση επιστροφής", en: "Days money-back guarantee" },
  ],
  categories: [
    { icon: "fa-newspaper", el: "Ειδήσεις", en: "News" },
    { icon: "fa-futbol", el: "Αθλητικά", en: "Sports" },
    { icon: "fa-film", el: "Ταινίες", en: "Movies" },
    { icon: "fa-child-reaching", el: "Παιδικά", en: "Kids" },
    { icon: "fa-earth-europe", el: "Ντοκιμαντέρ", en: "Documentary" },
    { icon: "fa-music", el: "Μουσική", en: "Music" },
  ],
  // Posters: original AI-generated artwork, no trademarks. Add "color" instead of "img" for a plain gradient card.
  movies: [
    { el: "Δράση",              en: "Action",      tag: ["ΝΕΟ", "NEW"],         img: "img/posters/movie-action.webp" },
    { el: "Δράμα",              en: "Drama",       tag: ["ΣΕΙΡΑ", "SERIES"],    img: "img/posters/movie-drama.webp" },
    { el: "Κωμωδία",            en: "Comedy",      tag: ["ΤΑΙΝΙΑ", "MOVIE"],    img: "img/posters/movie-comedy.webp" },
    { el: "Κινούμενα σχέδια",   en: "Animation",   tag: ["ΠΑΙΔΙΚΑ", "KIDS"],    img: "img/posters/movie-animation.svg" },
    { el: "Επιστ. φαντασίας",   en: "Sci-Fi",      tag: ["4K", "4K"],           img: "img/posters/movie-scifi.webp" },
    { el: "Μυστήριο",           en: "Mystery",     tag: ["ΣΕΙΡΑ", "SERIES"],    img: "img/posters/movie-mystery.webp" },
    { el: "Θρίλερ",             en: "Thriller",    tag: ["ΝΕΟ", "NEW"],         img: "img/posters/movie-thriller.webp" },
    { el: "Ντοκιμαντέρ",        en: "Documentary", tag: ["HD", "HD"],           img: "img/posters/movie-documentary.webp" },
  ],
  sports: [
    { el: "Ποδόσφαιρο",         en: "Football",    tag: ["ΖΩΝΤΑΝΑ", "LIVE"],    img: "img/posters/sport-football.webp" },
    { el: "Μπάσκετ",            en: "Basketball",  tag: ["ΖΩΝΤΑΝΑ", "LIVE"],    img: "img/posters/sport-basketball.webp" },
    { el: "Μηχανοκίνητα",       en: "Motorsport",  tag: ["ΖΩΝΤΑΝΑ", "LIVE"],    img: "img/posters/sport-motorsport.webp" },
    { el: "Τένις",              en: "Tennis",      tag: ["ΖΩΝΤΑΝΑ", "LIVE"],    img: "img/posters/sport-tennis.webp" },
    { el: "Μαχητικά αθλήματα",  en: "Combat sports", tag: ["ΖΩΝΤΑΝΑ", "LIVE"],  img: "img/posters/sport-fight.webp" },
    { el: "Βόλεϊ",              en: "Volleyball",  tag: ["ΖΩΝΤΑΝΑ", "LIVE"],    img: "img/posters/sport-volleyball.webp" },
  ],
};

// ================= TEXT =================
const T = {
  el: {
    "nav.home":"Αρχική","nav.pricing":"Τιμές","nav.channels":"Περιεχόμενο","nav.blog":"Blog","nav.reseller":"Πρόγραμμα Μεταπωλητών","nav.guide":"Οδηγός εγκατάστασης","nav.faq":"FAQ","nav.contact":"Επικοινωνία","nav.trial":"Ζητήστε δοκιμή",
    "hero.t1":"Greek IPTV:","hero.t2":"συνδρομή για ελληνική τηλεόραση",
    "hero.p":"Το <strong>Greeks IPTV</strong> σας φέρνει ζωντανά κανάλια, αθλητικά, ταινίες και σειρές με υπότιτλους στην τηλεόραση, το κινητό και τον υπολογιστή σας, σε ποιότητα έως 4K. Σταθεροί διακομιστές Anti-Freeze, ενεργοποίηση σε 5 λεπτά έως 6 ώρες και δοκιμή πριν την αγορά.",
    "hero.price":"Από <b>15€</b>/μήνα · 1–3 συσκευές · χωρίς αυτόματη ανανέωση",
    "hero.cta":"Ζητήστε δοκιμή",
    "pricing.title":"Τιμές συνδρομής: διαλέξτε το <span class=\"green\">πακέτο σας</span>",
    "pricing.sub":"Συνδρομή Greek IPTV από 15€ τον μήνα, ή πάσο 1 ημέρας με 3€. Χωρίς αυτόματη ανανέωση.",
    "dev.1":"1 Συσκευή","dev.2":"2 Συσκευές","dev.3":"3 Συσκευές",
    "plan.f":["Παρακολουθήστε σε οποιαδήποτε συσκευή","Τεχνολογία Anti-Freeze","Ποιότητα SD / HD / FHD / 4K","Δωρεάν & αυτόματες ενημερώσεις","Διαθέσιμο EPG (οδηγός προγράμματος)","Επιστροφή χρημάτων εντός 7 ημερών","Δωρεάν υποστήριξη 24/7 μέσω WhatsApp"],
    "plan.buy":"Παραγγελία μέσω WhatsApp","plan.mail":"ή παραγγελία μέσω email",
    "mail.alt":"Έχετε ερωτήσεις;","mail.link":"Μιλήστε μαζί μας στο WhatsApp","mail.body":"Γεια σας! Θα ήθελα μια δοκιμή του Greeks IPTV.\nΣυσκευή: ",
    "foot.about2":"Σχετικά με εμάς","foot.services":"Υπηρεσίες","foot.company":"Εταιρεία","foot.legal":"Νομικά","foot.rights":"Με επιφύλαξη παντός δικαιώματος.","plan.ready":"Έτοιμο σε 5 λεπτά έως 6 ώρες",
    "pricing.note":"<strong>Σημείωμα:</strong> Για πρόσβαση σε περισσότερες από 3 συσκευές, επικοινωνήστε με την ομάδα υποστήριξής μας. Προσφέρουμε ευέλικτα πακέτα πολλαπλών συσκευών, προσαρμοσμένα στις ανάγκες σας.",
    "pricing.noteBtn":"Επικοινωνήστε με την Υποστήριξη",
    "movies.title":"Ταινίες & <span class=\"green\">Σειρές TV</span>",
    "faq.title":"Συχνές ερωτήσεις για το <span class=\"green\">Greek IPTV</span>",
    "what.title":"Τι είναι το <span class=\"green\">Greek IPTV</span>;",
    "what.p1":"Το <strong>Greek IPTV</strong>, γνωστό και ως ελληνική IPTV ή IPTV Greece, είναι μια συνδρομητική υπηρεσία τηλεόρασης μέσω internet. Αντί για δορυφόρο ή καλώδιο, η εικόνα έρχεται μέσω της σύνδεσής σας στο internet, σε Smart TV, Fire TV Stick, Android, iPhone, MAG box ή υπολογιστή.",
    "what.p2":"Στο Greeks IPTV (goldengateiptv.gr) η συνδρομή Greek IPTV κοστίζει από 15€ τον μήνα για 1 συσκευή, με πακέτα 1 ημέρας έως 2 ετών και έως 3 συσκευές ταυτόχρονα. Πληρώνετε μία φορά, χωρίς αυτόματη ανανέωση, και λαμβάνετε τα στοιχεία σύνδεσης στο email σας σε 5 λεπτά έως 6 ώρες.",
    "what.facts":"Βασικά στοιχεία",
    "what.f":["<b>Τιμή:</b> από 3€ (1 ημέρα) και 15€/μήνα","<b>Συσκευές:</b> 1, 2 ή 3 ταυτόχρονα","<b>Ποιότητα:</b> SD, HD, FHD και 4K","<b>Ενεργοποίηση:</b> 5 λεπτά έως 6 ώρες","<b>Πληρωμή:</b> PayPal και κάρτα μέσω PayPal","<b>Εγγύηση:</b> επιστροφή χρημάτων εντός 7 ημερών","<b>Υποστήριξη:</b> 24/7 μέσω WhatsApp και email"],
    "what.updated":"Τελευταία ενημέρωση: 15 Οκτωβρίου 2026",
    "table.title":"Τιμοκατάλογος Greek IPTV 2026",
    "table.plan":"Πακέτο",
    "table.note":"Όλες οι τιμές σε ευρώ. Εφάπαξ πληρωμή, χωρίς αυτόματη ανανέωση.",
    "sports.title":"Όλες οι Αθλητικές <span class=\"green\">Εκδηλώσεις</span>",
    "how.title":"Πώς λειτουργεί η συνδρομή;",
    "how.1t":"1. Καταχωρήστε την παραγγελία σας","how.1d":"Επιλέξτε την περίοδο συνδρομής που προτιμάτε: 1 ημέρα, 1, 3, 6, 12 ή 24 μήνες και τον αριθμό συσκευών.",
    "how.2t":"2. Λάβετε τον λογαριασμό σας","how.2d":"Μετά την επαλήθευση της πληρωμής θα λάβετε τα στοιχεία σύνδεσης στο email σας, σε 5 λεπτά έως 6 ώρες. Ελέγξτε και τον φάκελο ανεπιθύμητης αλληλογραφίας.",
    "how.3t":"3. Απολαύστε την υπηρεσία σας!","how.3d":"Ακολουθήστε τον δωρεάν οδηγό εγκατάστασης και απολαύστε κανάλια, ταινίες και σειρές τώρα!",
    "world.title":"Ελληνικά κανάλια <span class=\"green\">σε όλο τον κόσμο</span>",
    "feat.title":"Γιατί να επιλέξετε το Greeks IPTV",
    "feat.1t":"Λειτουργεί σε όλες τις συσκευές","feat.1d":"Οι αγαπημένες σας εκπομπές και κανάλια σε οποιαδήποτε συσκευή, από οποιαδήποτε τοποθεσία.",
    "feat.2t":"Δωρεάν Εγκατάσταση","feat.2d":"Παρέχουμε έναν πλήρη δωρεάν οδηγό εγκατάστασης από την αρχή μέχρι το τέλος.",
    "feat.3t":"Γρήγορη Ενεργοποίηση","feat.3d":"Μετά την επαλήθευση της πληρωμής λαμβάνετε τα στοιχεία σύνδεσης στο email σας, σε 5 λεπτά έως 6 ώρες.",
    "feat.4t":"Γρήγορος και Σταθερός Διακομιστής","feat.4d":"Διακομιστές με τεχνολογία CDN, ώστε να μη χρειάζεται να ανησυχείτε για τη σταθερότητα.",
    "feat.5t":"Υψηλή Ποιότητα","feat.5d":"Κανάλια σε HD και 4K με σταθερή ροή από διακομιστές CDN. Νέο περιεχόμενο προστίθεται τακτικά.",
    "feat.6t":"Φιλική Υποστήριξη 24/7","feat.6d":"Επικοινωνήστε μαζί μας οποτεδήποτε μέσω WhatsApp ή email και θα σας απαντήσουμε το συντομότερο δυνατό.",
    "dev.title":"Ελληνική IPTV σε όλες τις <span class=\"green\">Συσκευές</span>",
    "rev.title":"Ακούστε από τους <span class=\"green\">ευχαριστημένους πελάτες</span> μας",
    "rev.placeholder":"Προσθέστε εδώ πραγματικό στιγμιότυπο κριτικής",
    "contact.title":"Έχετε ερωτήσεις; <span class=\"green\">Επικοινωνήστε μαζί μας</span>",
    "contact.p":"Αν έχετε απορίες σχετικά με τις υπηρεσίες μας, μην διστάσετε να επικοινωνήσετε μαζί μας μέσω WhatsApp ή email. Είμαστε εδώ για να σας δώσουμε άμεσες απαντήσεις.",
    "cat.sports":"Αθλητικά","cat.live":"Ζωντανή TV","cat.docs":"Ντοκιμαντέρ","cat.movies":"Ταινίες","pay.title":"Ασφαλείς πληρωμές",
    "foot.plans":"Σχέδια Τιμών","foot.prices":"Τιμοκατάλογοι","foot.refund":"Πολιτική Επιστροφών","foot.terms":"Όροι Χρήσης","foot.privacy":"Πολιτική Απορρήτου",
    "foot.about":"Η υπηρεσία μας προσφέρει υψηλής ποιότητας streaming με φιλική υποστήριξη πριν και μετά την αγορά.",
    "wa.hi":"Γεια σας! Θα ήθελα περισσότερες πληροφορίες για το Greeks IPTV (goldengateiptv.gr).","wa.trial":"Γεια σας! Θα ήθελα μια δοκιμή του Greeks IPTV (goldengateiptv.gr).","wa.order":"Γεια σας! Θα ήθελα να παραγγείλω Greeks IPTV (goldengateiptv.gr):",
    "slide.prev":"Προηγούμενο","slide.next":"Επόμενο","lang.label":"Αλλαγή γλώσσας","menu.label":"Μενού",
    faq: [
      ["Τι είναι το Greek IPTV;","Το Greek IPTV είναι συνδρομητική τηλεόραση μέσω internet. Βλέπετε ζωντανά κανάλια, αθλητικά, ταινίες και σειρές σε Smart TV, κινητό, tablet ή υπολογιστή, χωρίς δορυφόρο ή καλώδιο."],
      ["Πόσο κοστίζει το Greek IPTV;","Η συνδρομή Greek IPTV κοστίζει 3€ για 1 ημέρα, 15€ για 1 μήνα, 32€ για 3 μήνες, 42€ για 6 μήνες, 62€ για 1 έτος και 110€ για 2 χρόνια, για 1 συσκευή. Για 2 ή 3 συσκευές δείτε τον <a href=\"#pricing\">τιμοκατάλογο</a>."],
      ["Σε ποιες συσκευές λειτουργεί το Greek IPTV;","Σε Samsung και LG Smart TV, Android TV, Amazon Fire TV Stick, κινητά και tablet Android, iPhone, iPad, Apple TV, MAG box, Enigma2 δέκτες, Windows και Mac. Δείτε τον <a href=\"setup-guide.html\">Οδηγό εγκατάστασης</a>."],
      ["Μπορώ να δοκιμάσω το Greek IPTV πριν αγοράσω;","Ναι. Στείλτε μας μήνυμα στο WhatsApp και θα σας δώσουμε δοκιμαστική πρόσβαση, ώστε να ελέγξετε την ποιότητα στη συσκευή σας πριν αγοράσετε. Για περισσότερο χρόνο υπάρχει και το πάσο 1 ημέρας με 3€."],
      ["Πώς θα λάβω τα στοιχεία σύνδεσης;","Μετά την επαλήθευση της πληρωμής θα λάβετε στο email σας username, password και URL, σε 5 λεπτά έως 6 ώρες. Ελέγξτε και τον φάκελο ανεπιθύμητων."],
      ["Πόσες ταυτόχρονες συνδέσεις;","Ανάλογα με το πακέτο: 1, 2 ή 3 συσκευές ταυτόχρονα. Για περισσότερες συσκευές επικοινωνήστε μαζί μας."],
      ["Τι ταχύτητα internet χρειάζομαι;","Για σταθερή εικόνα HD χρειάζεστε τουλάχιστον 15 Mbps. Για 4K προτείνουμε 25 Mbps και σύνδεση με καλώδιο Ethernet."],
      ["Μπορώ να λάβω επιστροφή χρημάτων;","Ναι, εντός 7 ημερών αν η υπηρεσία δεν λειτουργεί λόγω τεχνικού προβλήματος που δεν επιλύουμε εντός 48 ωρών, αν δεν λάβετε τα στοιχεία σύνδεσης εντός 24 ωρών, ή σε περίπτωση διπλής πληρωμής. Δείτε την <a href=\"refund-policy.html\">Πολιτική Επιστροφών</a>."],
      ["Μπορώ να ανανεώσω τη συνδρομή μου;","Ναι. Η συνδρομή δεν ανανεώνεται αυτόματα. Στείλτε μας μήνυμα στο WhatsApp πριν τη λήξη και θα την ανανεώσουμε."],
      ["Μέθοδοι πληρωμής","Δεχόμαστε PayPal, καθώς και Visa/MasterCard μέσω PayPal Gateway. Δεν χρειάζεται λογαριασμός PayPal."],
      ["Μπορώ να γίνω μεταπωλητής;","Ναι! Δείτε το <a href=\"reseller.html\">Πρόγραμμα Μεταπωλητών</a> ή επικοινωνήστε μαζί μας μέσω WhatsApp."],
    ],
  },
  en: {
    "nav.home":"Home","nav.pricing":"Pricing","nav.channels":"Content","nav.blog":"Blog","nav.reseller":"Reseller Program","nav.guide":"Setup Guide","nav.faq":"FAQ","nav.contact":"Contact Us","nav.trial":"Request a trial",
    "hero.t1":"Greek IPTV:","hero.t2":"a subscription for Greek TV",
    "hero.p":"<strong>Greeks IPTV</strong> brings live channels, sports, movies and series with subtitles to your TV, phone and computer in up to 4K. Stable Anti-Freeze servers, activation within 5 minutes to 6 hours and a trial before you buy.",
    "hero.price":"From <b>€15</b>/month · 1–3 devices · no automatic renewal",
    "hero.cta":"Request a trial",
    "pricing.title":"Greek IPTV prices: choose <span class=\"green\">your plan</span>",
    "pricing.sub":"Greek IPTV subscriptions from €15 per month, or a 1-day pass for €3. No automatic renewal.",
    "dev.1":"1 Device","dev.2":"2 Devices","dev.3":"3 Devices",
    "plan.f":["Watch on any device","Anti-Freeze technology","SD / HD / FHD / 4K quality","Free & automatic updates","EPG (TV guide) available","7-day money-back guarantee","Free 24/7 WhatsApp support"],
    "plan.buy":"Order on WhatsApp","plan.mail":"or order by email",
    "mail.alt":"Have questions?","mail.link":"Chat with us on WhatsApp","mail.body":"Hi! I'd like a Greeks IPTV trial.\nDevice: ",
    "foot.about2":"About us","foot.services":"Services","foot.company":"Company","foot.legal":"Legal","foot.rights":"All rights reserved.","plan.ready":"Ready in 5 minutes to 6 hours",
    "pricing.note":"<strong>Note:</strong> For more than 3 devices, contact our support team. We offer flexible multi-device packages tailored to your needs.",
    "pricing.noteBtn":"Contact Support Now",
    "movies.title":"Movies & <span class=\"green\">TV Series</span>",
    "faq.title":"Greek IPTV <span class=\"green\">FAQ</span>",
    "what.title":"What is <span class=\"green\">Greek IPTV</span>?",
    "what.p1":"<strong>Greek IPTV</strong> is a subscription TV service delivered over the internet (IPTV). Instead of satellite or cable, the picture comes through your internet connection to a Smart TV, Fire TV Stick, Android, iPhone, MAG box or computer.",
    "what.p2":"At Greeks IPTV (goldengateiptv.gr) a Greek IPTV subscription costs from €15 per month for 1 device, with plans from 1 day to 2 years and up to 3 devices at once. You pay once, with no automatic renewal, and receive your login details by email within 5 minutes to 6 hours.",
    "what.facts":"Key facts",
    "what.f":["<b>Price:</b> from €3 (1 day) and €15/month","<b>Devices:</b> 1, 2 or 3 at once","<b>Quality:</b> SD, HD, FHD and 4K","<b>Activation:</b> 5 minutes to 6 hours","<b>Payment:</b> PayPal and cards via PayPal","<b>Guarantee:</b> money back within 7 days","<b>Support:</b> 24/7 via WhatsApp and email"],
    "what.updated":"Last updated: 15 October 2026",
    "table.title":"Greek IPTV price list 2026",
    "table.plan":"Plan",
    "table.note":"All prices in euros. One-time payment, no automatic renewal.",
    "sports.title":"All Sports <span class=\"green\">Events</span>",
    "how.title":"How does the subscription work?",
    "how.1t":"1. Place your order","how.1d":"Choose your subscription period: 1 day, 1, 3, 6, 12 or 24 months, and the number of devices.",
    "how.2t":"2. Get your account","how.2d":"After payment is verified you'll receive your login details by email within 5 minutes to 6 hours. Check your spam folder too.",
    "how.3t":"3. Enjoy your service!","how.3d":"Follow our free setup guide and enjoy channels, movies and series now!",
    "world.title":"Channels from every <span class=\"green\">corner of the world</span>",
    "feat.title":"Why choose Greeks IPTV",
    "feat.1t":"Works on all devices","feat.1d":"Your favourite shows and channels on any device, from anywhere.",
    "feat.2t":"Free Installation","feat.2d":"We provide a complete free setup guide from start to finish.",
    "feat.3t":"Fast Activation","feat.3d":"After payment is verified you receive your login details by email within 5 minutes to 6 hours.",
    "feat.4t":"Fast & Stable Servers","feat.4d":"CDN-powered servers, so you never have to worry about stability.",
    "feat.5t":"High Quality","feat.5d":"Channels in HD and 4K with a stable stream from CDN servers. New content is added regularly.",
    "feat.6t":"Friendly 24/7 Support","feat.6d":"Reach us anytime via WhatsApp or email and we'll reply as fast as possible.",
    "dev.title":"Greek IPTV on all your <span class=\"green\">Devices</span>",
    "rev.title":"Hear from our <span class=\"green\">happy customers</span>",
    "rev.placeholder":"Add a real review screenshot here",
    "contact.title":"Have questions? <span class=\"green\">Contact us</span>",
    "contact.p":"If you have any questions about our services, don't hesitate to reach us via WhatsApp or email. We're here to give you fast answers.",
    "cat.sports":"Sports","cat.live":"Live TV","cat.docs":"Documentaries","cat.movies":"Movies","pay.title":"Secure payments",
    "foot.plans":"Pricing Plans","foot.prices":"Price List","foot.refund":"Refund Policy","foot.terms":"Terms of Use","foot.privacy":"Privacy Policy",
    "foot.about":"We offer high-quality streaming with friendly support before and after purchase.",
    "wa.hi":"Hi! I'd like more information about Greeks IPTV (goldengateiptv.gr).","wa.trial":"Hi! I'd like a Greeks IPTV trial (goldengateiptv.gr).","wa.order":"Hi! I'd like to order Greeks IPTV (goldengateiptv.gr):",
    "slide.prev":"Previous","slide.next":"Next","lang.label":"Change language","menu.label":"Menu",
    faq: [
      ["What is Greek IPTV?","Greek IPTV is subscription TV delivered over the internet. You watch live channels, sports, movies and series on a Smart TV, phone, tablet or computer, without satellite or cable."],
      ["How much does Greek IPTV cost?","A Greek IPTV subscription costs €3 for 1 day, €15 for 1 month, €32 for 3 months, €42 for 6 months, €62 for 1 year and €110 for 2 years, for 1 device. For 2 or 3 devices see the <a href=\"#pricing\">price list</a>."],
      ["Which devices does Greek IPTV work on?","Samsung and LG Smart TV, Android TV, Amazon Fire TV Stick, Android phones and tablets, iPhone, iPad, Apple TV, MAG box, Enigma2 receivers, Windows and Mac. See the <a href=\"setup-guide.html\">Setup Guide</a>."],
      ["Can I try Greek IPTV before buying?","Yes. Message us on WhatsApp and we'll give you trial access so you can check the quality on your device before buying. For more time there is also the 1-day pass for €3."],
      ["How will I receive my login details?","After your payment is verified you'll receive a username, password and URL by email within 5 minutes to 6 hours. Check your spam folder too."],
      ["How many simultaneous connections?","Depending on your plan: 1, 2 or 3 devices at once. Contact us for more devices."],
      ["What internet speed do I need?","For a stable HD picture you need at least 15 Mbps. For 4K we recommend 25 Mbps and a wired Ethernet connection."],
      ["Can I get a refund?","Yes, within 7 days if the service doesn't work because of a technical problem we can't fix within 48 hours, if your login details don't arrive within 24 hours, or if you paid twice. See our <a href=\"refund-policy.html\">Refund Policy</a>."],
      ["Can I renew my subscription?","Yes. Subscriptions don't renew automatically. Message us on WhatsApp before it expires and we'll renew it."],
      ["Payment methods","We accept PayPal, plus Visa/MasterCard through the PayPal gateway. No PayPal account is needed."],
      ["Can I become a reseller?","Yes! See our <a href=\"reseller.html\">Reseller Program</a> or contact us on WhatsApp."],
    ],
  },
};

// ================= APP =================
let lang = "el", devices = 1;
try { lang = localStorage.getItem("lang") || "el"; } catch (e) {}
const t = (k) => T[lang][k] ?? k;
const wa = (msg) => `https://api.whatsapp.com/send/?phone=${CONFIG.whatsapp}&text=${encodeURIComponent(msg)}`;
const $ = (id) => document.getElementById(id);
const mail = (subject, body) => `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function renderStats() {
  $("stats").innerHTML = CONFIG.stats.map(s => `<div class="stat"><i class="${s.icon}" aria-hidden="true"></i><div><b>${s.n}</b><span>${s[lang]}</span></div></div>`).join("");
}

function renderWhat() {
  $("whatFacts").innerHTML = t("what.f").map(f => `<li><i class="fa-solid fa-circle-check"></i><span>${f}</span></li>`).join("");
}

function renderTable() {
  const head = `<tr><th scope="col">${t("table.plan")}</th>${[1,2,3].map(n => `<th scope="col">${t("dev." + n)}</th>`).join("")}</tr>`;
  const rows = CONFIG.plans.map(p => `<tr><th scope="row">${p[lang]}</th>${p.prices.map(v => `<td>€${v}</td>`).join("")}</tr>`).join("");
  $("priceTable").innerHTML = `<caption>${t("table.title")}</caption><thead>${head}</thead><tbody>${rows}</tbody>`;
}

function renderPlans() {
  const plats = `<i class="fa-brands fa-apple"></i><i class="fa-brands fa-android"></i><i class="fa-brands fa-windows"></i><i class="fa-solid fa-tv"></i>`;
  // Device toggle: plain buttons with aria-pressed, updated in place so focus is kept
  document.querySelectorAll(".dev-toggle button").forEach(b => {
    const on = +b.dataset.dev === devices;
    b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); b.textContent = t("dev." + b.dataset.dev);
  });
  $("plans").innerHTML = CONFIG.plans.map(p => {
    const price = p.prices[devices - 1];
    const msg = `${t("wa.order")} ${p[lang]} / ${t("dev." + devices)} – ${price}€`;
    return `
    <div class="plan ${p.featured ? "featured" : ""}">
      <h3>${p[lang]} · ${t("dev." + devices)}</h3>
      <div class="price">€${price}</div>
      <ul>${t("plan.f").map(f => `<li><i class="fa-solid fa-check"></i>${f}</li>`).join("")}</ul>
      <div><a class="btn btn-round ${p.featured ? "btn-dark" : ""}" href="${wa(msg)}" data-plan="${p.key}-${devices}" target="_blank" rel="noopener"><i class="fa-solid fa-desktop"></i>${t("plan.buy")}</a></div>
      <a class="plan-mail" href="${mail(msg, msg)}">${t("plan.mail")}</a>
      <div class="ready">${t("plan.ready")}</div>
      <div class="plats">${plats}</div>
    </div>`;
  }).join("");
}
document.querySelectorAll(".dev-toggle button").forEach(b => b.addEventListener("click", () => {
  devices = +b.dataset.dev; renderPlans();
}));

function posterHTML(p) {
  const title = p[lang], tag = p.tag[lang === "el" ? 0 : 1];
  return `<div class="poster placeholder photo"><img src="${p.img}" alt="${title}" loading="lazy" decoding="async" width="512" height="768"><small>${tag}</small><b>${title}</b></div>`;
}

function renderSliders() {
  $("movies").innerHTML = CONFIG.movies.map(posterHTML).join("");
  $("sports").innerHTML = CONFIG.sports.map(posterHTML).join("");
  document.querySelectorAll("[data-slide]").forEach(b => b.setAttribute("aria-label", t(+b.dataset.dir < 0 ? "slide.prev" : "slide.next")));
}

function renderFaq() {
  $("faqList").innerHTML = t("faq").map(([q, a]) => `
    <div class="faq-item"><button class="faq-q" type="button" aria-expanded="false">${q}<i class="fa-solid fa-caret-right" aria-hidden="true"></i></button>
    <div class="faq-a"><p>${a}</p></div></div>`).join("");
  $("faqList").querySelectorAll(".faq-q").forEach(b => b.addEventListener("click", () => {
    b.setAttribute("aria-expanded", b.parentElement.classList.toggle("open"));
  }));
}

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-html]").forEach(el => el.innerHTML = t(el.dataset.i18nHtml));
  $("langBtn").textContent = lang === "el" ? "EN" : "ΕΛ";
  $("langBtn").setAttribute("aria-label", t("lang.label")); $("menuBtn").setAttribute("aria-label", t("menu.label"));
  document.querySelectorAll(".js-wa").forEach(a => a.href = wa(t("wa.hi")));
  document.querySelectorAll(".js-trial").forEach(a => { a.href = wa(t("wa.trial")); a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll(".js-trial-mail").forEach(a => a.href = mail(`${CONFIG.site} - Free trial`, t("mail.body")));
  renderStats(); renderWhat(); renderPlans(); renderTable(); renderSliders(); renderFaq();
}

// Slider arrows
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-slide]"); if (!b) return;
  const track = $(b.dataset.slide);
  track.scrollBy({ left: track.clientWidth * 0.8 * +b.dataset.dir, behavior: "smooth" });
});

// Language + mobile menu
$("langBtn").addEventListener("click", () => {
  lang = lang === "el" ? "en" : "el";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  applyLang();
});
$("menuBtn").addEventListener("click", () => $("navLinks").classList.toggle("open"));
$("navLinks").querySelectorAll("a").forEach(a => a.addEventListener("click", () => $("navLinks").classList.remove("open")));

applyLang();
