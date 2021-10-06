import { Role } from ".prisma/client";

// Customer Data (10)
export const customers = [
  {
    fullname: "Devonna Gohn",
    email: "dgohn0@gravatar.com",
    password: "oQqupSqQ7J6Z",
    shippingAddress: "56 Mcguire Court",
    phone: "868-457-3515",
  },
  {
    fullname: "Sarena Sapir",
    email: "ssapir1@quantcast.com",
    password: "K7lI5tml",
    shippingAddress: "425 Aberg Alley",
    phone: "732-407-2992",
  },
  {
    fullname: "Constantine Duncanson",
    email: "cduncanson2@merriam-webster.com",
    password: "815f16",
    shippingAddress: "217 Melvin Hill",
    phone: "998-181-2642",
  },
  {
    fullname: "Mr.Demo",
    email: "demo@gmail.com",
    password: "$2b$10$1RVAMssajUDlT1ejrw13COnkppuj4BaidguYcIo3knI41cXi/lAcm",
    shippingAddress: "4 Anthes Circle",
    phone: null,
  },
  {
    fullname: "Ruthi Shotter",
    email: "rshotter4@parallels.com",
    password: "3H5X3q",
    shippingAddress: "2640 Heath Center",
    phone: null,
  },
  {
    fullname: "Issie Patzelt",
    email: "ipatzelt5@answers.com",
    password: "l2AATT",
    shippingAddress: "2413 Glacier Hill Hill",
    phone: "123-658-2298",
  },
  {
    fullname: "Genevieve Aldam",
    email: "galdam6@amazonaws.com",
    password: "XLZu9vV",
    shippingAddress: "948 Almo Street",
    phone: "875-764-0070",
  },
  {
    fullname: "Lefty MacMichael",
    email: "lmacmichael7@newyorker.com",
    password: "ppzFSk0Df7Jt",
    shippingAddress: "3 Sachs Parkway",
    phone: "518-668-3711",
  },
  {
    fullname: "Imogene Ratray",
    email: "iratray8@washington.edu",
    password: "OwPJrMzC",
    shippingAddress: "6 Prairieview Avenue",
    phone: "730-197-7925",
  },
  {
    fullname: "Avrom Pyser",
    email: "apyser9@shareasale.com",
    password: "emmCrqghfW",
    shippingAddress: "697 Onsgard Terrace",
    phone: "303-887-9494",
  },
  // {
  //   fullname: "Colline Brekonridge",
  //   email: "cbrekonridgea@pen.io",
  //   password: "7gzYd6iaB6b",
  //   shippingAddress: "423 Mallard Hill",
  //   phone: "363-681-7069",
  // },
  // {
  //   fullname: "Gabriela Najafian",
  //   email: "gnajafianb@arizona.edu",
  //   password: "SGxkFu",
  //   shippingAddress: "8 Evergreen Pass",
  //   phone: "622-216-2898",
  // },
  // {
  //   fullname: "Kristos Bercevelo",
  //   email: "kberceveloc@ifeng.com",
  //   password: "moCOfmrI2TOi",
  //   shippingAddress: "71 Ronald Regan Drive",
  //   phone: "483-457-5724",
  // },
  // {
  //   fullname: "Gram Brambley",
  //   email: "gbrambleyd@yandex.ru",
  //   password: "VTHBnu7HM",
  //   shippingAddress: "7 Sunfield Drive",
  //   phone: "190-817-0898",
  // },
  // {
  //   fullname: "Oralee Maraga",
  //   email: "omaragae@ezinearticles.com",
  //   password: "P1qAZJlX",
  //   shippingAddress: "616 Comanche Way",
  //   phone: "348-610-1624",
  // },
  // {
  //   fullname: "Byrann Landers",
  //   email: "blandersf@nbcnews.com",
  //   password: "gqnFhD",
  //   shippingAddress: "36949 Northview Road",
  //   phone: "707-373-2159",
  // },
  // {
  //   fullname: "Ardenia Bogace",
  //   email: "abogaceg@freewebs.com",
  //   password: "6uSQVQU6",
  //   shippingAddress: "2282 Summer Ridge Alley",
  //   phone: "832-403-2512",
  // },
  // {
  //   fullname: "Sandi Nawton",
  //   email: "snawtonh@example.com",
  //   password: "OFMLsPr3",
  //   shippingAddress: "94 Hermina Terrace",
  //   phone: "414-323-4583",
  // },
  // {
  //   fullname: "Ernesto Lahiff",
  //   email: "elahiffi@archive.org",
  //   password: "y7BokP5uCb5",
  //   shippingAddress: "843 Manitowish Plaza",
  //   phone: "435-872-7447",
  // },
  // {
  //   fullname: "Gay Crutchfield",
  //   email: "gcrutchfieldj@mail.ru",
  //   password: "9SuZ8V",
  //   shippingAddress: "80993 Claremont Avenue",
  //   phone: "780-413-8249",
  // },
  // {
  //   fullname: "Elwira Benner",
  //   email: "ebennerk@eepurl.com",
  //   password: "p4bW1n",
  //   shippingAddress: "97601 Delladonna Parkway",
  //   phone: "973-108-0973",
  // },
  // {
  //   fullname: "Brandy Kellough",
  //   email: "bkelloughl@wordpress.com",
  //   password: "Jm50IO68j",
  //   shippingAddress: "87258 Grim Drive",
  //   phone: null,
  // },
  // {
  //   fullname: "Andie Upston",
  //   email: "aupstonm@vimeo.com",
  //   password: "XSNgBxDqYmtD",
  //   shippingAddress: "73892 Mccormick Plaza",
  //   phone: "177-984-7434",
  // },
  // {
  //   fullname: "Theadora Wyvill",
  //   email: "twyvilln@apple.com",
  //   password: "kZFVV2c1",
  //   shippingAddress: "6 Oriole Hill",
  //   phone: "521-123-0174",
  // },
  // {
  //   fullname: "Malynda Terrington",
  //   email: "mterringtono@angelfire.com",
  //   password: "Nq48Kce",
  //   shippingAddress: "7234 Bunting Drive",
  //   phone: "381-383-3553",
  // },
  // {
  //   fullname: "Nealon Rivlin",
  //   email: "nrivlinp@i2i.jp",
  //   password: "zl6G4kNZ",
  //   shippingAddress: "390 Granby Plaza",
  //   phone: "901-872-9353",
  // },
  // {
  //   fullname: "Corabel Tappin",
  //   email: "ctappinq@skyrock.com",
  //   password: "M1NotWEHA",
  //   shippingAddress: "75572 Scofield Park",
  //   phone: "295-672-5813",
  // },
  // {
  //   fullname: "Kelwin Gillinghams",
  //   email: "kgillinghamsr@canalblog.com",
  //   password: "9VDRzgi",
  //   shippingAddress: "64 Magdeline Terrace",
  //   phone: null,
  // },
  // {
  //   fullname: "Gabi Pace",
  //   email: "gpaces@home.pl",
  //   password: "JJhCje",
  //   shippingAddress: "9 Kipling Circle",
  //   phone: "172-601-5146",
  // },
  // {
  //   fullname: "Dominga Dufton",
  //   email: "dduftont@cocolog-nifty.com",
  //   password: "AsNO8m",
  //   shippingAddress: "0204 Carioca Plaza",
  //   phone: "395-265-7821",
  // },
  // {
  //   fullname: "Sandro Strathdee",
  //   email: "sstrathdeeu@acquirethisname.com",
  //   password: "L6Z9tkf",
  //   shippingAddress: "59 Mendota Avenue",
  //   phone: "284-478-8436",
  // },
  // {
  //   fullname: "Feodor Dabs",
  //   email: "fdabsv@zimbio.com",
  //   password: "nLFo0ULNSA",
  //   shippingAddress: "6 Boyd Circle",
  //   phone: "743-903-2217",
  // },
  // {
  //   fullname: "Albertina Keuntje",
  //   email: "akeuntjew@jigsy.com",
  //   password: "48ohzw8mQ",
  //   shippingAddress: "37015 Hoard Park",
  //   phone: "309-990-2908",
  // },
  // {
  //   fullname: "Mabelle Edghinn",
  //   email: "medghinnx@wix.com",
  //   password: "lwpdEqgX",
  //   shippingAddress: "254 Redwing Plaza",
  //   phone: null,
  // },
  // {
  //   fullname: "Dyanne Werner",
  //   email: "dwernery@shinystat.com",
  //   password: "zIi7qDIye",
  //   shippingAddress: "588 Mosinee Trail",
  //   phone: "229-584-6698",
  // },
  // {
  //   fullname: "Bethina Pigeon",
  //   email: "bpigeonz@wiley.com",
  //   password: "F0CO3E",
  //   shippingAddress: "73188 Ridgeview Street",
  //   phone: "101-513-7364",
  // },
  // {
  //   fullname: "Frankie Kurth",
  //   email: "fkurth10@creativecommons.org",
  //   password: "6TNZxxhXkAZU",
  //   shippingAddress: "4048 Twin Pines Park",
  //   phone: "588-979-5598",
  // },
  // {
  //   fullname: "Mady Duberry",
  //   email: "mduberry11@tumblr.com",
  //   password: "K3nEdJv0794",
  //   shippingAddress: "292 Elgar Road",
  //   phone: null,
  // },
  // {
  //   fullname: "King Anthoney",
  //   email: "kanthoney12@devhub.com",
  //   password: "vc2N8ZM4",
  //   shippingAddress: "4494 Myrtle Street",
  //   phone: null,
  // },
  // {
  //   fullname: "Brenn Winspire",
  //   email: "bwinspire13@toplist.cz",
  //   password: "WbjlDJhy7T",
  //   shippingAddress: "27 Norway Maple Road",
  //   phone: "193-515-0659",
  // },
  // {
  //   fullname: "Valerie Tretwell",
  //   email: "vtretwell14@purevolume.com",
  //   password: "6Pdwbk0xHS",
  //   shippingAddress: "0617 Dapin Street",
  //   phone: "869-175-7482",
  // },
  // {
  //   fullname: "Bernadina Nand",
  //   email: "bnand15@google.pl",
  //   password: "9AQ2uqO",
  //   shippingAddress: "954 Fremont Terrace",
  //   phone: "888-400-8510",
  // },
  // {
  //   fullname: "Mirabella Bakewell",
  //   email: "mbakewell16@simplemachines.org",
  //   password: "0Uc71Gwisb",
  //   shippingAddress: "4477 Straubel Way",
  //   phone: "502-904-5256",
  // },
  // {
  //   fullname: "Baldwin Longbottom",
  //   email: "blongbottom17@java.com",
  //   password: "joDOvK8Upgwv",
  //   shippingAddress: "43 Milwaukee Pass",
  //   phone: null,
  // },
  // {
  //   fullname: "Jerry Payne",
  //   email: "jpayne18@google.com.br",
  //   password: "oTIDxs0VG",
  //   shippingAddress: "67627 Truax Point",
  //   phone: "480-815-8259",
  // },
  // {
  //   fullname: "Lorilyn Coutthart",
  //   email: "lcoutthart19@google.de",
  //   password: "ixAIMdFYz",
  //   shippingAddress: "4 Aberg Court",
  //   phone: "439-532-5524",
  // },
  // {
  //   fullname: "Farica Chatwood",
  //   email: "fchatwood1a@indiatimes.com",
  //   password: "ywyzRBL",
  //   shippingAddress: "7 Schiller Circle",
  //   phone: "204-456-1357",
  // },
  // {
  //   fullname: "Marti Rodgers",
  //   email: "mrodgers1b@ucsd.edu",
  //   password: "KJthUi",
  //   shippingAddress: "2 Utah Trail",
  //   phone: "247-580-8714",
  // },
  // {
  //   fullname: "Ariel Moryson",
  //   email: "amoryson1c@vk.com",
  //   password: "T4qrpd2",
  //   shippingAddress: "2600 Garrison Avenue",
  //   phone: "385-843-9092",
  // },
  // {
  //   fullname: "Fidole Cordey",
  //   email: "fcordey1d@meetup.com",
  //   password: "bp4bLthvZl2G",
  //   shippingAddress: "08 Nelson Park",
  //   phone: "215-900-6544",
  // },
  // {
  //   fullname: "Nye Twitching",
  //   email: "ntwitching1e@canalblog.com",
  //   password: "LkrUs64RAla1",
  //   shippingAddress: "05844 Spenser Place",
  //   phone: "725-242-7882",
  // },
  // {
  //   fullname: "Gifford Blesdill",
  //   email: "gblesdill1f@angelfire.com",
  //   password: "U5yPynAxYZdj",
  //   shippingAddress: "6297 Corry Parkway",
  //   phone: "260-377-0196",
  // },
  // {
  //   fullname: "Aviva Conradsen",
  //   email: "aconradsen1g@imgur.com",
  //   password: "jTdtI1wcj",
  //   shippingAddress: "7794 Jay Plaza",
  //   phone: "958-598-9675",
  // },
  // {
  //   fullname: "Roxanne Tremayle",
  //   email: "rtremayle1h@blogger.com",
  //   password: "irJXr0nM",
  //   shippingAddress: "7448 Schlimgen Park",
  //   phone: null,
  // },
  // {
  //   fullname: "Debra Beeble",
  //   email: "dbeeble1i@sogou.com",
  //   password: "Iric7s3FGHlb",
  //   shippingAddress: "44 Messerschmidt Center",
  //   phone: "122-928-9106",
  // },
  // {
  //   fullname: "Morgana Bulfoy",
  //   email: "mbulfoy1j@icio.us",
  //   password: "pYBtmjAUz",
  //   shippingAddress: "84 Hazelcrest Plaza",
  //   phone: null,
  // },
  // {
  //   fullname: "Haydon Brundall",
  //   email: "hbrundall1k@slideshare.net",
  //   password: "UHS7LUR",
  //   shippingAddress: "48930 Fairfield Way",
  //   phone: "464-470-1491",
  // },
  // {
  //   fullname: "Bancroft Trenfield",
  //   email: "btrenfield1l@usatoday.com",
  //   password: "UCiwngytJ9h",
  //   shippingAddress: "5 Lakewood Gardens Alley",
  //   phone: null,
  // },
  // {
  //   fullname: "Baxy Pinchback",
  //   email: "bpinchback1m@shareasale.com",
  //   password: "PDxNvfSueICN",
  //   shippingAddress: "30 Sommers Drive",
  //   phone: "615-334-9383",
  // },
  // {
  //   fullname: "Katie Beams",
  //   email: "kbeams1n@flickr.com",
  //   password: "PBsL5UW",
  //   shippingAddress: "023 American Road",
  //   phone: "650-707-3614",
  // },
  // {
  //   fullname: "Othello McLugaish",
  //   email: "omclugaish1o@jimdo.com",
  //   password: "UhlinSc5lL",
  //   shippingAddress: "6505 Bellgrove Street",
  //   phone: "514-608-3822",
  // },
  // {
  //   fullname: "Wilbert Presnall",
  //   email: "wpresnall1p@princeton.edu",
  //   password: "2jcOu4b",
  //   shippingAddress: "638 Shoshone Junction",
  //   phone: "806-978-0679",
  // },
  // {
  //   fullname: "Dehlia Pulver",
  //   email: "dpulver1q@sina.com.cn",
  //   password: "OWdHPnJlPQ",
  //   shippingAddress: "75722 Caliangt Trail",
  //   phone: "632-843-4692",
  // },
  // {
  //   fullname: "Marlon Brazenor",
  //   email: "mbrazenor1r@plala.or.jp",
  //   password: "5lYWVQ",
  //   shippingAddress: "2076 Anniversary Way",
  //   phone: null,
  // },
  // {
  //   fullname: "Shanon Farmery",
  //   email: "sfarmery1s@census.gov",
  //   password: "NhOKnxA",
  //   shippingAddress: "5318 Westend Hill",
  //   phone: "921-457-5351",
  // },
  // {
  //   fullname: "Lizette Gilvear",
  //   email: "lgilvear1t@cbc.ca",
  //   password: "faDbAMn2y",
  //   shippingAddress: "29 Arizona Avenue",
  //   phone: null,
  // },
  // {
  //   fullname: "Westley Babonau",
  //   email: "wbabonau1u@tamu.edu",
  //   password: "tVALUnN2wY",
  //   shippingAddress: "4311 La Follette Place",
  //   phone: "486-343-2959",
  // },
  // {
  //   fullname: "Honor Stainbridge",
  //   email: "hstainbridge1v@reverbnation.com",
  //   password: "yhJv7hN",
  //   shippingAddress: "0517 Manitowish Road",
  //   phone: "371-216-6833",
  // },
  // {
  //   fullname: "Kristin Dunkerton",
  //   email: "kdunkerton1w@ezinearticles.com",
  //   password: "Ui0G3rM",
  //   shippingAddress: "530 Stang Junction",
  //   phone: "465-965-4012",
  // },
  // {
  //   fullname: "Bonnie Grelka",
  //   email: "bgrelka1x@jalbum.net",
  //   password: "QA4OWDKh",
  //   shippingAddress: "7656 Reindahl Hill",
  //   phone: "463-646-5901",
  // },
  // {
  //   fullname: "Hurley Slocomb",
  //   email: "hslocomb1y@weebly.com",
  //   password: "YFkb5IsW4MX",
  //   shippingAddress: "9155 Pond Circle",
  //   phone: "440-915-4747",
  // },
  // {
  //   fullname: "Dahlia Fall",
  //   email: "dfall1z@ox.ac.uk",
  //   password: "0kenNEU",
  //   shippingAddress: "61317 Tennyson Point",
  //   phone: "254-578-9016",
  // },
  // {
  //   fullname: "Heywood Crocker",
  //   email: "hcrocker20@mysql.com",
  //   password: "0TKgqzgAbi",
  //   shippingAddress: "0585 Old Gate Court",
  //   phone: null,
  // },
  // {
  //   fullname: "Connor Ridsdale",
  //   email: "cridsdale21@hibu.com",
  //   password: "CZz4TLHOojnm",
  //   shippingAddress: "64 Pankratz Pass",
  //   phone: "874-328-3081",
  // },
  // {
  //   fullname: "Ynes Parradice",
  //   email: "yparradice22@loc.gov",
  //   password: "psbDgKKgJLKw",
  //   shippingAddress: "12370 Killdeer Drive",
  //   phone: null,
  // },
  // {
  //   fullname: "Kaila Kirvell",
  //   email: "kkirvell23@ovh.net",
  //   password: "Py6qJGlSZX",
  //   shippingAddress: "206 Hanson Plaza",
  //   phone: null,
  // },
  // {
  //   fullname: "Zorana Friese",
  //   email: "zfriese24@walmart.com",
  //   password: "cZCppJyInB",
  //   shippingAddress: "18 Stang Avenue",
  //   phone: "648-344-1378",
  // },
  // {
  //   fullname: "Judon Charpling",
  //   email: "jcharpling25@netscape.com",
  //   password: "o5IgW9uI",
  //   shippingAddress: "22653 Pleasure Point",
  //   phone: "229-458-9886",
  // },
  // {
  //   fullname: "Niki Ewers",
  //   email: "newers26@mozilla.com",
  //   password: "tbdcrg5",
  //   shippingAddress: "581 La Follette Plaza",
  //   phone: "330-369-6546",
  // },
  // {
  //   fullname: "Hobie Surtees",
  //   email: "hsurtees27@yale.edu",
  //   password: "jkYhwc4fCm",
  //   shippingAddress: "21 Spohn Circle",
  //   phone: "117-882-1906",
  // },
  // {
  //   fullname: "Gray Weiser",
  //   email: "gweiser28@stanford.edu",
  //   password: "aos8tsw",
  //   shippingAddress: "10 Lyons Point",
  //   phone: "993-162-2172",
  // },
  // {
  //   fullname: "Jojo Graber",
  //   email: "jgraber29@surveymonkey.com",
  //   password: "CQVCnNnq",
  //   shippingAddress: "44343 Maryland Terrace",
  //   phone: null,
  // },
  // {
  //   fullname: "Mervin Kalker",
  //   email: "mkalker2a@usatoday.com",
  //   password: "qe0w14",
  //   shippingAddress: "00 Arizona Place",
  //   phone: null,
  // },
  // {
  //   fullname: "Gilburt Verriour",
  //   email: "gverriour2b@webmd.com",
  //   password: "1UgW0ic",
  //   shippingAddress: "8 Burrows Lane",
  //   phone: "623-487-6196",
  // },
  // {
  //   fullname: "Selinda Hendrich",
  //   email: "shendrich2c@prlog.org",
  //   password: "JlUe7PmqK8",
  //   shippingAddress: "83158 Mandrake Trail",
  //   phone: "653-192-6462",
  // },
  // {
  //   fullname: "Leonore Scothorn",
  //   email: "lscothorn2d@myspace.com",
  //   password: "sOQpKnYpW6o",
  //   shippingAddress: "93690 Muir Drive",
  //   phone: null,
  // },
  // {
  //   fullname: "Isidro Etoile",
  //   email: "ietoile2e@statcounter.com",
  //   password: "YQOAilhmH1I",
  //   shippingAddress: "42164 Bartelt Alley",
  //   phone: "215-742-8720",
  // },
  // {
  //   fullname: "Cacilia Hancock",
  //   email: "chancock2f@vimeo.com",
  //   password: "33wBIdymZR",
  //   shippingAddress: "0 Cardinal Place",
  //   phone: "624-695-9116",
  // },
  // {
  //   fullname: "Hans Ballintyne",
  //   email: "hballintyne2g@addthis.com",
  //   password: "1FTLddlh",
  //   shippingAddress: "1 Sutteridge Lane",
  //   phone: "609-994-0833",
  // },
  // {
  //   fullname: "Crista Murray",
  //   email: "cmurray2h@epa.gov",
  //   password: "ox8sbZtjDE",
  //   shippingAddress: "7 Spenser Street",
  //   phone: "165-597-6521",
  // },
  // {
  //   fullname: "Joan Codling",
  //   email: "jcodling2i@miitbeian.gov.cn",
  //   password: "E6fPAaaBrFF5",
  //   shippingAddress: "8 Jana Court",
  //   phone: "705-544-5281",
  // },
  // {
  //   fullname: "Hadrian Frankish",
  //   email: "hfrankish2j@naver.com",
  //   password: "ujNTeMEPt",
  //   shippingAddress: "39154 Ohio Alley",
  //   phone: "716-783-8373",
  // },
  // {
  //   fullname: "Luciano Crocombe",
  //   email: "lcrocombe2k@simplemachines.org",
  //   password: "sWBerYyS",
  //   shippingAddress: "47438 Eagan Crossing",
  //   phone: "715-583-3039",
  // },
  // {
  //   fullname: "Westley Jerzyk",
  //   email: "wjerzyk2l@google.ca",
  //   password: "46uTsSqvRg",
  //   shippingAddress: "2 Oxford Court",
  //   phone: "790-505-6013",
  // },
  // {
  //   fullname: "Dorisa Chanter",
  //   email: "dchanter2m@symantec.com",
  //   password: "t0ixwXVkT",
  //   shippingAddress: "99 Graedel Crossing",
  //   phone: "727-665-0711",
  // },
  // {
  //   fullname: "Ruperta Scrooby",
  //   email: "rscrooby2n@multiply.com",
  //   password: "Bepg8wMsd",
  //   shippingAddress: "9 Helena Parkway",
  //   phone: "647-671-4262",
  // },
  // {
  //   fullname: "Des Tewkesberry",
  //   email: "dtewkesberry2o@comcast.net",
  //   password: "RCRI7u5Y",
  //   shippingAddress: "51 Declaration Alley",
  //   phone: "704-799-4221",
  // },
  // {
  //   fullname: "Gannon McPheat",
  //   email: "gmcpheat2p@scribd.com",
  //   password: "7bGzHUK",
  //   shippingAddress: "6 Express Place",
  //   phone: "780-848-0691",
  // },
  // {
  //   fullname: "Emera Bumphrey",
  //   email: "ebumphrey2q@china.com.cn",
  //   password: "j6ubcQgU",
  //   shippingAddress: "1261 Ridge Oak Road",
  //   phone: "188-448-5511",
  // },
  // {
  //   fullname: "Graehme Chastand",
  //   email: "gchastand2r@redcross.org",
  //   password: "Y1I6cM",
  //   shippingAddress: "88 Nova Drive",
  //   phone: "777-676-6234",
  // },
];

export const admins: {
  username: string;
  email: string;
  password: string;
  role: Role;
}[] = [
  {
    username: "superadmin",
    email: "superadmin@gmail.com",
    password: "$2b$10$89O/57zd05yMYmkT4JJqhekHY7W0rtTVYpsrgohbZYcdOIouMFB2O",
    role: "SUPERADMIN",
  },
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "$2b$10$4sLZXBrPa4Hm4Mde3OJ0GesAgyhhmglcpOfNCQ8K6/5GIJbAfbWMO",
    role: "ADMIN",
  },
  {
    username: "mod",
    email: "mod@gmail.com",
    password: "$2b$10$pDf2Qjhh2WilM8pN7r44zuodGA3zoFN/Zu8CCAI0pwQXkUR.okT/a",
    role: "MODERATOR",
  },
];

// Category Data (3)
export const categories = [
  {
    name: "men",
    description: "sapien non mi integer ac neque duis bibendum morbi non",
    thumbnailImage: "http://dummyimage.com/720x400.png/cc0000/ffffff",
  },
  {
    name: "women",
    description:
      "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis",
    thumbnailImage: "http://dummyimage.com/720x400.png/dddddd/000000",
  },
  {
    name: "bags",
    description:
      "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh",
    thumbnailImage: "http://dummyimage.com/720x400.png/dddddd/000000",
  },
  // {
  //   name: "Toughjoyfax",
  //   description:
  //     "odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis",
  //   thumbnailImage: "http://dummyimage.com/720x400.png/cc0000/ffffff",
  // },
  // {
  //   name: "Konklab",
  //   description:
  //     "in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit",
  //   thumbnailImage: "http://dummyimage.com/720x400.png/dddddd/000000",
  // },
];

// Products Data (100)
export const products = [
  {
    name: "Aerified",
    price: "124.66",
    discountPercent: 5,
    description:
      "condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros",
    detail:
      "mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",
    categoryId: 3,
    image1:
      "https://robohash.org/voluptatemsuntnostrum.png?size=300x300&set=set1",
    image2: "https://robohash.org/utrationetempore.png?size=300x300&set=set1",
    stock: 72,
  },
  {
    name: "Kanlam",
    price: "87.21",
    discountPercent: 2,
    description:
      "semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum",
    detail:
      "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet",
    categoryId: 3,
    image1: "https://robohash.org/aliquamuttenetur.png?size=300x300&set=set1",
    image2: "https://robohash.org/nulladoloremquerem.png?size=300x300&set=set1",
    stock: 11,
  },
  {
    name: "Subin",
    price: "102.41",
    discountPercent: 3,
    description:
      "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae",
    detail:
      "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id",
    categoryId: 1,
    image1: "https://robohash.org/idaliquiddolor.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/porromolestiasvoluptate.png?size=300x300&set=set1",
    stock: 30,
  },
  {
    name: "Tres-Zap",
    price: "23.10",
    discountPercent: 3,
    description:
      "etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi",
    detail:
      "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate",
    categoryId: 1,
    image1: "https://robohash.org/solutamolestiashic.png?size=300x300&set=set1",
    image2: "https://robohash.org/nemoeteos.png?size=300x300&set=set1",
    stock: 17,
  },
  {
    name: "Fixflex",
    price: "46.29",
    discountPercent: 2,
    description:
      "rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut",
    detail:
      "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
    categoryId: 1,
    image1: "https://robohash.org/estnemoqui.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/omnisdoloresperferendis.png?size=300x300&set=set1",
    stock: 47,
  },
  {
    name: "Prodder",
    price: "26.97",
    discountPercent: 4,
    description:
      "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis",
    detail:
      "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque",
    categoryId: 2,
    image1: "https://robohash.org/quoautaut.png?size=300x300&set=set1",
    image2: "https://robohash.org/inquovelit.png?size=300x300&set=set1",
    stock: 56,
  },
  {
    name: "Sub-Ex",
    price: "38.54",
    discountPercent: 2,
    description:
      "lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero",
    detail:
      "elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam",
    categoryId: 1,
    image1: "https://robohash.org/eoseamodi.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/fugapraesentiumdolorum.png?size=300x300&set=set1",
    stock: 46,
  },
  {
    name: "Cardify",
    price: "66.18",
    discountPercent: 3,
    description:
      "posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus",
    detail:
      "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",
    categoryId: 2,
    image1: "https://robohash.org/etquiid.png?size=300x300&set=set1",
    image2: "https://robohash.org/sedvoluptashic.png?size=300x300&set=set1",
    stock: 58,
  },
  {
    name: "Latlux",
    price: "142.77",
    discountPercent: 2,
    description:
      "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec",
    detail:
      "posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
    categoryId: 1,
    image1: "https://robohash.org/quisquamnonsit.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/voluptatemveniamquia.png?size=300x300&set=set1",
    stock: 83,
  },
  {
    name: "Quo Lux",
    price: "83.72",
    discountPercent: 1,
    description:
      "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean",
    detail:
      "nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
    categoryId: 3,
    image1:
      "https://robohash.org/consequaturveritatisconsectetur.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/utexercitationemnatus.png?size=300x300&set=set1",
    stock: 58,
  },
  {
    name: "Fintone",
    price: "103.67",
    discountPercent: 3,
    description:
      "est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl",
    detail:
      "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget",
    categoryId: 2,
    image1: "https://robohash.org/enimatquesint.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/beataevoluptatemdoloribus.png?size=300x300&set=set1",
    stock: 71,
  },
  {
    name: "Sub-Ex",
    price: "133.50",
    discountPercent: 3,
    description:
      "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
    detail:
      "at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
    categoryId: 1,
    image1: "https://robohash.org/eosperferendiset.png?size=300x300&set=set1",
    image2: "https://robohash.org/isteeasimilique.png?size=300x300&set=set1",
    stock: 43,
  },
  {
    name: "Duobam",
    price: "29.58",
    discountPercent: 4,
    description:
      "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas",
    detail:
      "platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
    categoryId: 3,
    image1:
      "https://robohash.org/veritatiseiusassumenda.png?size=300x300&set=set1",
    image2: "https://robohash.org/estquodoloremque.png?size=300x300&set=set1",
    stock: 51,
  },
  {
    name: "Job",
    price: "135.08",
    discountPercent: 1,
    description:
      "libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum",
    detail:
      "in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt",
    categoryId: 2,
    image1: "https://robohash.org/impeditsintut.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/occaecatinamaperiam.png?size=300x300&set=set1",
    stock: 88,
  },
  {
    name: "Voyatouch",
    price: "70.14",
    discountPercent: 4,
    description:
      "nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum",
    detail:
      "morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum",
    categoryId: 1,
    image1:
      "https://robohash.org/saepelaboriosamtenetur.png?size=300x300&set=set1",
    image2: "https://robohash.org/quiavoluptateset.png?size=300x300&set=set1",
    stock: 72,
  },
  {
    name: "Lotstring",
    price: "112.63",
    discountPercent: 1,
    description:
      "sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
    detail:
      "pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque",
    categoryId: 1,
    image1: "https://robohash.org/idinquibusdam.png?size=300x300&set=set1",
    image2: "https://robohash.org/quamiustoincidunt.png?size=300x300&set=set1",
    stock: 55,
  },
  {
    name: "Bitchip",
    price: "77.78",
    discountPercent: 5,
    description:
      "donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum",
    detail:
      "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque",
    categoryId: 3,
    image1: "https://robohash.org/remeiusvoluptas.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/voluptatibusidmaiores.png?size=300x300&set=set1",
    stock: 55,
  },
  {
    name: "Kanlam",
    price: "44.20",
    discountPercent: 1,
    description:
      "duis faucibus accumsan odio curabitur convallis duis consequat dui nec",
    detail:
      "nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
    categoryId: 2,
    image1: "https://robohash.org/quidemveniamquia.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/dolorummollitiaporro.png?size=300x300&set=set1",
    stock: 24,
  },
  {
    name: "Temp",
    price: "170.97",
    discountPercent: 1,
    description:
      "massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
    detail:
      "placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis",
    categoryId: 1,
    image1: "https://robohash.org/quiaeumaccusamus.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/quireprehenderitquod.png?size=300x300&set=set1",
    stock: 18,
  },
  {
    name: "Sonsing",
    price: "105.43",
    discountPercent: 3,
    description:
      "sed sagittis nam congue risus semper porta volutpat quam pede lobortis",
    detail:
      "libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus",
    categoryId: 3,
    image1: "https://robohash.org/velitaliquidin.png?size=300x300&set=set1",
    image2: "https://robohash.org/explicaboeumautem.png?size=300x300&set=set1",
    stock: 73,
  },
  {
    name: "Daltfresh",
    price: "37.13",
    discountPercent: 1,
    description:
      "amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi",
    detail:
      "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi",
    categoryId: 2,
    image1: "https://robohash.org/remeaqueasperiores.png?size=300x300&set=set1",
    image2: "https://robohash.org/blanditiiseumquia.png?size=300x300&set=set1",
    stock: 82,
  },
  {
    name: "Flexidy",
    price: "56.53",
    discountPercent: 0,
    description:
      "aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
    detail:
      "justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl",
    categoryId: 2,
    image1: "https://robohash.org/magnamipsamfugiat.png?size=300x300&set=set1",
    image2: "https://robohash.org/doloresrerumodit.png?size=300x300&set=set1",
    stock: 76,
  },
  {
    name: "Prodder",
    price: "174.69",
    discountPercent: 1,
    description:
      "primis in faucibus orci luctus et ultrices posuere cubilia curae mauris",
    detail:
      "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit",
    categoryId: 1,
    image1: "https://robohash.org/consequatureasit.png?size=300x300&set=set1",
    image2: "https://robohash.org/estsitvoluptatibus.png?size=300x300&set=set1",
    stock: 96,
  },
  {
    name: "Keylex",
    price: "163.13",
    discountPercent: 4,
    description:
      "ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros",
    detail:
      "velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis",
    categoryId: 1,
    image1: "https://robohash.org/autemdolornihil.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/reprehenderitevenietet.png?size=300x300&set=set1",
    stock: 19,
  },
  {
    name: "Domainer",
    price: "179.71",
    discountPercent: 0,
    description:
      "dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium",
    detail:
      "massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
    categoryId: 1,
    image1:
      "https://robohash.org/illumlaudantiumiure.png?size=300x300&set=set1",
    image2: "https://robohash.org/sequieosfugit.png?size=300x300&set=set1",
    stock: 95,
  },
  {
    name: "Alpha",
    price: "35.93",
    discountPercent: 4,
    description:
      "venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in",
    detail:
      "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam",
    categoryId: 2,
    image1: "https://robohash.org/rerumdolorvel.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/quaeratvoluptasoccaecati.png?size=300x300&set=set1",
    stock: 45,
  },
  {
    name: "Zaam-Dox",
    price: "156.78",
    discountPercent: 0,
    description:
      "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
    detail:
      "vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
    categoryId: 1,
    image1: "https://robohash.org/nisisedcommodi.png?size=300x300&set=set1",
    image2: "https://robohash.org/suntametsit.png?size=300x300&set=set1",
    stock: 62,
  },
  {
    name: "Latlux",
    price: "108.24",
    discountPercent: 3,
    description:
      "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea",
    detail:
      "leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis",
    categoryId: 3,
    image1: "https://robohash.org/namquiqui.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/commodicorruptinemo.png?size=300x300&set=set1",
    stock: 78,
  },
  {
    name: "Lotstring",
    price: "86.99",
    discountPercent: 5,
    description:
      "mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus",
    detail:
      "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
    categoryId: 3,
    image1:
      "https://robohash.org/necessitatibusetrepudiandae.png?size=300x300&set=set1",
    image2: "https://robohash.org/impeditutet.png?size=300x300&set=set1",
    stock: 91,
  },
  {
    name: "Y-Solowarm",
    price: "105.63",
    discountPercent: 1,
    description:
      "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante",
    detail:
      "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in",
    categoryId: 3,
    image1:
      "https://robohash.org/recusandaeeaqueomnis.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/blanditiisdoloremqueodio.png?size=300x300&set=set1",
    stock: 68,
  },
  {
    name: "Bitchip",
    price: "66.67",
    discountPercent: 4,
    description:
      "duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at",
    detail:
      "pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante",
    categoryId: 3,
    image1: "https://robohash.org/enimmolestiaesed.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/rerumsaepeconsequuntur.png?size=300x300&set=set1",
    stock: 11,
  },
  {
    name: "Job",
    price: "148.35",
    discountPercent: 5,
    description:
      "pede ullamcorper augue a suscipit nulla elit ac nulla sed vel",
    detail:
      "nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
    categoryId: 3,
    image1: "https://robohash.org/hicminimaexplicabo.png?size=300x300&set=set1",
    image2: "https://robohash.org/ametiustonon.png?size=300x300&set=set1",
    stock: 37,
  },
  {
    name: "Alpha",
    price: "165.00",
    discountPercent: 0,
    description:
      "mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales",
    detail:
      "vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed",
    categoryId: 3,
    image1: "https://robohash.org/temporevelitsunt.png?size=300x300&set=set1",
    image2: "https://robohash.org/esseteneturut.png?size=300x300&set=set1",
    stock: 49,
  },
  {
    name: "Konklux",
    price: "48.26",
    discountPercent: 3,
    description:
      "felis donec semper sapien a libero nam dui proin leo odio porttitor",
    detail:
      "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
    categoryId: 3,
    image1: "https://robohash.org/eosquaerepellat.png?size=300x300&set=set1",
    image2: "https://robohash.org/voluptatemquoest.png?size=300x300&set=set1",
    stock: 46,
  },
  {
    name: "Flexidy",
    price: "90.31",
    discountPercent: 1,
    description:
      "vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede",
    detail:
      "in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales",
    categoryId: 2,
    image1: "https://robohash.org/dolorequiducimus.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/utperspiciatisvelit.png?size=300x300&set=set1",
    stock: 53,
  },
  {
    name: "Flexidy",
    price: "42.81",
    discountPercent: 5,
    description:
      "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
    detail:
      "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis",
    categoryId: 2,
    image1:
      "https://robohash.org/omnissuscipitarchitecto.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/suscipitnecessitatibusomnis.png?size=300x300&set=set1",
    stock: 69,
  },
  {
    name: "Greenlam",
    price: "143.37",
    discountPercent: 5,
    description:
      "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    detail:
      "mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
    categoryId: 2,
    image1:
      "https://robohash.org/delenitidoloribusut.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/doloremdoloremquererum.png?size=300x300&set=set1",
    stock: 100,
  },
  {
    name: "Zamit",
    price: "35.92",
    discountPercent: 1,
    description:
      "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras",
    detail:
      "molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
    categoryId: 2,
    image1: "https://robohash.org/inomnisaliquid.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/excepturialiquammagnam.png?size=300x300&set=set1",
    stock: 57,
  },
  {
    name: "Daltfresh",
    price: "49.02",
    discountPercent: 1,
    description:
      "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl",
    detail:
      "libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
    categoryId: 3,
    image1: "https://robohash.org/deseruntiustorerum.png?size=300x300&set=set1",
    image2: "https://robohash.org/autnamdolores.png?size=300x300&set=set1",
    stock: 76,
  },
  {
    name: "Redhold",
    price: "73.36",
    discountPercent: 5,
    description:
      "scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis",
    detail:
      "nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
    categoryId: 3,
    image1: "https://robohash.org/essequovoluptatem.png?size=300x300&set=set1",
    image2: "https://robohash.org/facerequienim.png?size=300x300&set=set1",
    stock: 26,
  },
  {
    name: "Quo Lux",
    price: "103.76",
    discountPercent: 0,
    description:
      "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam",
    detail:
      "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
    categoryId: 3,
    image1: "https://robohash.org/hiceosquaerat.png?size=300x300&set=set1",
    image2: "https://robohash.org/sapienteveltenetur.png?size=300x300&set=set1",
    stock: 64,
  },
  {
    name: "Konklab",
    price: "122.64",
    discountPercent: 3,
    description:
      "ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    detail:
      "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra",
    categoryId: 1,
    image1: "https://robohash.org/culpasuscipitillo.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/sapientererumconsequatur.png?size=300x300&set=set1",
    stock: 66,
  },
  {
    name: "Voltsillam",
    price: "116.27",
    discountPercent: 3,
    description:
      "odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
    detail:
      "eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla",
    categoryId: 1,
    image1: "https://robohash.org/velsitesse.png?size=300x300&set=set1",
    image2: "https://robohash.org/etasuscipit.png?size=300x300&set=set1",
    stock: 89,
  },
  {
    name: "Domainer",
    price: "102.36",
    discountPercent: 5,
    description:
      "dui maecenas tristique est et tempus semper est quam pharetra magna ac",
    detail:
      "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
    categoryId: 1,
    image1: "https://robohash.org/etestnobis.png?size=300x300&set=set1",
    image2: "https://robohash.org/eossapienteeum.png?size=300x300&set=set1",
    stock: 59,
  },
  {
    name: "Tres-Zap",
    price: "23.18",
    discountPercent: 5,
    description:
      "semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique",
    detail:
      "purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis",
    categoryId: 1,
    image1: "https://robohash.org/eaquenisiomnis.png?size=300x300&set=set1",
    image2: "https://robohash.org/fugitdoloredolor.png?size=300x300&set=set1",
    stock: 69,
  },
  {
    name: "Stim",
    price: "46.58",
    discountPercent: 1,
    description:
      "mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula",
    detail:
      "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum",
    categoryId: 1,
    image1: "https://robohash.org/harumnesciuntiusto.png?size=300x300&set=set1",
    image2: "https://robohash.org/totamquivero.png?size=300x300&set=set1",
    stock: 48,
  },
  {
    name: "Redhold",
    price: "98.79",
    discountPercent: 1,
    description:
      "pede posuere nonummy integer non velit donec diam neque vestibulum eget",
    detail:
      "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum",
    categoryId: 1,
    image1:
      "https://robohash.org/maximeeosdistinctio.png?size=300x300&set=set1",
    image2: "https://robohash.org/expeditaquiet.png?size=300x300&set=set1",
    stock: 42,
  },
  {
    name: "Zathin",
    price: "86.13",
    discountPercent: 5,
    description:
      "ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris",
    detail:
      "eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia",
    categoryId: 2,
    image1:
      "https://robohash.org/ducimusexpeditaquisquam.png?size=300x300&set=set1",
    image2: "https://robohash.org/mollitiaindeserunt.png?size=300x300&set=set1",
    stock: 76,
  },
  {
    name: "Prodder",
    price: "70.18",
    discountPercent: 3,
    description:
      "sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in",
    detail:
      "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
    categoryId: 3,
    image1: "https://robohash.org/expeditafugaet.png?size=300x300&set=set1",
    image2: "https://robohash.org/oditabipsa.png?size=300x300&set=set1",
    stock: 89,
  },
  {
    name: "Cardify",
    price: "130.97",
    discountPercent: 2,
    description:
      "donec diam neque vestibulum eget vulputate ut ultrices vel augue",
    detail:
      "morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam",
    categoryId: 2,
    image1: "https://robohash.org/nondeseruntfuga.png?size=300x300&set=set1",
    image2: "https://robohash.org/nullalaborumipsum.png?size=300x300&set=set1",
    stock: 33,
  },
  {
    name: "Bitchip",
    price: "174.40",
    discountPercent: 3,
    description:
      "ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu",
    detail:
      "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id",
    categoryId: 3,
    image1:
      "https://robohash.org/fugitdoloremconsequatur.png?size=300x300&set=set1",
    image2: "https://robohash.org/doloreatemporibus.png?size=300x300&set=set1",
    stock: 67,
  },
  {
    name: "Duobam",
    price: "31.12",
    discountPercent: 0,
    description:
      "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis",
    detail:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
    categoryId: 2,
    image1: "https://robohash.org/magnamquidolores.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/recusandaeevenietomnis.png?size=300x300&set=set1",
    stock: 89,
  },
  {
    name: "Cardguard",
    price: "75.27",
    discountPercent: 5,
    description:
      "integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat",
    detail:
      "eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede",
    categoryId: 1,
    image1: "https://robohash.org/quisapienteodio.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/reprehenderitconsequaturlaborum.png?size=300x300&set=set1",
    stock: 61,
  },
  {
    name: "Sonair",
    price: "113.26",
    discountPercent: 0,
    description:
      "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus",
    detail:
      "eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
    categoryId: 2,
    image1:
      "https://robohash.org/delectusculpadoloremque.png?size=300x300&set=set1",
    image2: "https://robohash.org/quidemetprovident.png?size=300x300&set=set1",
    stock: 88,
  },
  {
    name: "Cardify",
    price: "25.83",
    discountPercent: 5,
    description:
      "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl",
    detail:
      "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis",
    categoryId: 1,
    image1: "https://robohash.org/accusantiumvelest.png?size=300x300&set=set1",
    image2: "https://robohash.org/quamrerumet.png?size=300x300&set=set1",
    stock: 21,
  },
  {
    name: "Daltfresh",
    price: "155.35",
    discountPercent: 2,
    description:
      "arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac",
    detail:
      "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
    categoryId: 1,
    image1: "https://robohash.org/voluptasinad.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/voluptatemcommodisunt.png?size=300x300&set=set1",
    stock: 22,
  },
  {
    name: "Konklux",
    price: "35.66",
    discountPercent: 1,
    description:
      "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh",
    detail:
      "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
    categoryId: 2,
    image1:
      "https://robohash.org/aliquidprovidentqui.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/consecteturfugittemporibus.png?size=300x300&set=set1",
    stock: 41,
  },
  {
    name: "Y-find",
    price: "47.96",
    discountPercent: 2,
    description:
      "rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet",
    detail:
      "sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend",
    categoryId: 1,
    image1:
      "https://robohash.org/cupiditateevenietnulla.png?size=300x300&set=set1",
    image2: "https://robohash.org/eosmolestiaealias.png?size=300x300&set=set1",
    stock: 64,
  },
  {
    name: "Solarbreeze",
    price: "45.58",
    discountPercent: 1,
    description:
      "dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat",
    detail:
      "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices",
    categoryId: 1,
    image1:
      "https://robohash.org/voluptatemsolutafuga.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/magnamlaboriosamsed.png?size=300x300&set=set1",
    stock: 48,
  },
  {
    name: "Zontrax",
    price: "23.81",
    discountPercent: 2,
    description:
      "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus",
    detail:
      "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis",
    categoryId: 3,
    image1:
      "https://robohash.org/quamdoloresvoluptate.png?size=300x300&set=set1",
    image2: "https://robohash.org/nonquiaillum.png?size=300x300&set=set1",
    stock: 64,
  },
  {
    name: "Matsoft",
    price: "139.63",
    discountPercent: 1,
    description:
      "rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi",
    detail:
      "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",
    categoryId: 2,
    image1: "https://robohash.org/veritatiseumdolor.png?size=300x300&set=set1",
    image2: "https://robohash.org/etnesciuntrerum.png?size=300x300&set=set1",
    stock: 12,
  },
  {
    name: "Voltsillam",
    price: "170.90",
    discountPercent: 1,
    description:
      "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis",
    detail:
      "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo",
    categoryId: 3,
    image1:
      "https://robohash.org/temporaexcepturirepellat.png?size=300x300&set=set1",
    image2: "https://robohash.org/quidoloremqueamet.png?size=300x300&set=set1",
    stock: 25,
  },
  {
    name: "Bamity",
    price: "152.80",
    discountPercent: 1,
    description:
      "euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula",
    detail:
      "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue",
    categoryId: 2,
    image1:
      "https://robohash.org/temporaplaceatdignissimos.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/inventoreeaquebeatae.png?size=300x300&set=set1",
    stock: 62,
  },
  {
    name: "Y-Solowarm",
    price: "24.37",
    discountPercent: 1,
    description:
      "libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
    detail:
      "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed",
    categoryId: 3,
    image1: "https://robohash.org/rerumquoaliquam.png?size=300x300&set=set1",
    image2: "https://robohash.org/oditvelitsaepe.png?size=300x300&set=set1",
    stock: 24,
  },
  {
    name: "Zaam-Dox",
    price: "88.06",
    discountPercent: 2,
    description:
      "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices",
    detail:
      "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt",
    categoryId: 3,
    image1: "https://robohash.org/suntquibusdamdicta.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/providentmolestiaeimpedit.png?size=300x300&set=set1",
    stock: 43,
  },
  {
    name: "Zaam-Dox",
    price: "100.63",
    discountPercent: 0,
    description:
      "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a",
    detail:
      "sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo",
    categoryId: 3,
    image1: "https://robohash.org/eumnamnumquam.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/officiaplaceatatque.png?size=300x300&set=set1",
    stock: 53,
  },
  {
    name: "Zontrax",
    price: "138.84",
    discountPercent: 3,
    description:
      "ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
    detail:
      "aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in",
    categoryId: 3,
    image1: "https://robohash.org/dolorexsimilique.png?size=300x300&set=set1",
    image2: "https://robohash.org/officiissitcommodi.png?size=300x300&set=set1",
    stock: 19,
  },
  {
    name: "Rank",
    price: "77.45",
    discountPercent: 0,
    description:
      "orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis",
    detail:
      "magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",
    categoryId: 3,
    image1: "https://robohash.org/etullamea.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/voluptasrationeexplicabo.png?size=300x300&set=set1",
    stock: 62,
  },
  {
    name: "Sonsing",
    price: "151.22",
    discountPercent: 0,
    description:
      "cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
    detail:
      "a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra",
    categoryId: 3,
    image1: "https://robohash.org/animisedquia.png?size=300x300&set=set1",
    image2: "https://robohash.org/nonestnumquam.png?size=300x300&set=set1",
    stock: 49,
  },
  {
    name: "Viva",
    price: "78.15",
    discountPercent: 3,
    description:
      "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut",
    detail:
      "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
    categoryId: 3,
    image1: "https://robohash.org/utquisquamtotam.png?size=300x300&set=set1",
    image2: "https://robohash.org/excepturidolorquo.png?size=300x300&set=set1",
    stock: 29,
  },
  {
    name: "Ronstring",
    price: "64.50",
    discountPercent: 3,
    description:
      "venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue",
    detail:
      "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
    categoryId: 1,
    image1:
      "https://robohash.org/consequaturprovidentlaborum.png?size=300x300&set=set1",
    image2: "https://robohash.org/doloribusfugaomnis.png?size=300x300&set=set1",
    stock: 21,
  },
  {
    name: "Tres-Zap",
    price: "32.77",
    discountPercent: 0,
    description:
      "massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in",
    detail:
      "eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio",
    categoryId: 2,
    image1:
      "https://robohash.org/temporibusharumanimi.png?size=300x300&set=set1",
    image2: "https://robohash.org/magnamnamqui.png?size=300x300&set=set1",
    stock: 28,
  },
  {
    name: "Gembucket",
    price: "93.42",
    discountPercent: 2,
    description:
      "ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo",
    detail:
      "orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam",
    categoryId: 2,
    image1:
      "https://robohash.org/necessitatibusnisiducimus.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/dolorepariaturullam.png?size=300x300&set=set1",
    stock: 38,
  },
  {
    name: "Biodex",
    price: "124.34",
    discountPercent: 2,
    description:
      "pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non",
    detail:
      "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum",
    categoryId: 1,
    image1: "https://robohash.org/corporissuscipitut.png?size=300x300&set=set1",
    image2: "https://robohash.org/omnisautemquas.png?size=300x300&set=set1",
    stock: 77,
  },
  {
    name: "Andalax",
    price: "64.33",
    discountPercent: 4,
    description:
      "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
    detail:
      "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra",
    categoryId: 1,
    image1: "https://robohash.org/ullamquaseos.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/reprehenderitsedenim.png?size=300x300&set=set1",
    stock: 32,
  },
  {
    name: "Ventosanzap",
    price: "52.01",
    discountPercent: 4,
    description:
      "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis",
    detail:
      "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus",
    categoryId: 3,
    image1:
      "https://robohash.org/magniconsequaturquis.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/optioperspiciatisvel.png?size=300x300&set=set1",
    stock: 17,
  },
  {
    name: "Cardguard",
    price: "97.55",
    discountPercent: 5,
    description:
      "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit",
    detail:
      "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna",
    categoryId: 2,
    image1: "https://robohash.org/autemiustoest.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/assumendaplaceatsapiente.png?size=300x300&set=set1",
    stock: 64,
  },
  {
    name: "Solarbreeze",
    price: "88.49",
    discountPercent: 4,
    description:
      "donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna",
    detail:
      "tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum",
    categoryId: 2,
    image1: "https://robohash.org/ipsaatqueomnis.png?size=300x300&set=set1",
    image2: "https://robohash.org/explicaboimpeditet.png?size=300x300&set=set1",
    stock: 25,
  },
  {
    name: "Toughjoyfax",
    price: "61.54",
    discountPercent: 5,
    description:
      "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien",
    detail:
      "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst",
    categoryId: 3,
    image1:
      "https://robohash.org/voluptasrepellatquo.png?size=300x300&set=set1",
    image2: "https://robohash.org/errorofficiamagnam.png?size=300x300&set=set1",
    stock: 68,
  },
  {
    name: "Tempsoft",
    price: "43.28",
    discountPercent: 2,
    description:
      "iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla",
    detail:
      "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
    categoryId: 1,
    image1: "https://robohash.org/repellatestnulla.png?size=300x300&set=set1",
    image2: "https://robohash.org/illumadblanditiis.png?size=300x300&set=set1",
    stock: 50,
  },
  {
    name: "Lotstring",
    price: "42.37",
    discountPercent: 1,
    description:
      "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
    detail:
      "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu",
    categoryId: 3,
    image1: "https://robohash.org/sitrerummagni.png?size=300x300&set=set1",
    image2: "https://robohash.org/illumetin.png?size=300x300&set=set1",
    stock: 14,
  },
  {
    name: "Bytecard",
    price: "92.14",
    discountPercent: 2,
    description:
      "condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam",
    detail:
      "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
    categoryId: 1,
    image1: "https://robohash.org/sedutporro.png?size=300x300&set=set1",
    image2: "https://robohash.org/minusnisiiure.png?size=300x300&set=set1",
    stock: 99,
  },
  {
    name: "Cookley",
    price: "85.67",
    discountPercent: 0,
    description:
      "neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante",
    detail:
      "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
    categoryId: 2,
    image1:
      "https://robohash.org/corporisipsamaccusantium.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/quibusdaminventoreofficiis.png?size=300x300&set=set1",
    stock: 81,
  },
  {
    name: "Solarbreeze",
    price: "155.68",
    discountPercent: 3,
    description:
      "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
    detail:
      "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit",
    categoryId: 2,
    image1: "https://robohash.org/sintvoluptasunde.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/blanditiisperspiciatisfacere.png?size=300x300&set=set1",
    stock: 57,
  },
  {
    name: "Namfix",
    price: "25.28",
    discountPercent: 2,
    description:
      "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel",
    detail:
      "scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis",
    categoryId: 2,
    image1: "https://robohash.org/iustovoluptatemeum.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/etconsequunturaliquid.png?size=300x300&set=set1",
    stock: 89,
  },
  {
    name: "Cookley",
    price: "57.74",
    discountPercent: 3,
    description:
      "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla",
    detail:
      "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",
    categoryId: 1,
    image1:
      "https://robohash.org/blanditiisnecessitatibusodit.png?size=300x300&set=set1",
    image2: "https://robohash.org/suntveritatisomnis.png?size=300x300&set=set1",
    stock: 33,
  },
  {
    name: "Sonsing",
    price: "117.65",
    discountPercent: 2,
    description:
      "maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices",
    detail:
      "ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere",
    categoryId: 1,
    image1: "https://robohash.org/eumtotamvoluptatem.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/eligendiestdelectus.png?size=300x300&set=set1",
    stock: 50,
  },
  {
    name: "Flexidy",
    price: "100.91",
    discountPercent: 3,
    description:
      "risus semper porta volutpat quam pede lobortis ligula sit amet eleifend",
    detail:
      "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
    categoryId: 2,
    image1:
      "https://robohash.org/etducimusaspernatur.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/similiquealiasdeserunt.png?size=300x300&set=set1",
    stock: 41,
  },
  {
    name: "Tres-Zap",
    price: "56.65",
    discountPercent: 4,
    description:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus",
    detail:
      "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et",
    categoryId: 1,
    image1: "https://robohash.org/etautminus.png?size=300x300&set=set1",
    image2: "https://robohash.org/etcommodiautem.png?size=300x300&set=set1",
    stock: 78,
  },
  {
    name: "Home Ing",
    price: "135.63",
    discountPercent: 5,
    description:
      "condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et",
    detail:
      "nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
    categoryId: 3,
    image1: "https://robohash.org/eosvoluptatumqui.png?size=300x300&set=set1",
    image2: "https://robohash.org/debitisexpeditaet.png?size=300x300&set=set1",
    stock: 17,
  },
  {
    name: "Cardguard",
    price: "163.24",
    discountPercent: 1,
    description:
      "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
    detail:
      "odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed",
    categoryId: 1,
    image1: "https://robohash.org/pariaturessequasi.png?size=300x300&set=set1",
    image2: "https://robohash.org/illoidquia.png?size=300x300&set=set1",
    stock: 49,
  },
  {
    name: "Domainer",
    price: "178.12",
    discountPercent: 5,
    description:
      "quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel",
    detail:
      "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices",
    categoryId: 3,
    image1: "https://robohash.org/quoquiexpedita.png?size=300x300&set=set1",
    image2: "https://robohash.org/sintillumlibero.png?size=300x300&set=set1",
    stock: 61,
  },
  {
    name: "Namfix",
    price: "150.91",
    discountPercent: 4,
    description:
      "convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien",
    detail:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus",
    categoryId: 1,
    image1: "https://robohash.org/velquiadolorem.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/temporibusarchitectoet.png?size=300x300&set=set1",
    stock: 23,
  },
  {
    name: "Greenlam",
    price: "61.94",
    discountPercent: 5,
    description:
      "mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum",
    detail:
      "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus",
    categoryId: 2,
    image1:
      "https://robohash.org/excepturitemporequia.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/etdoloremblanditiis.png?size=300x300&set=set1",
    stock: 37,
  },
  {
    name: "Stringtough",
    price: "141.38",
    discountPercent: 4,
    description:
      "metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede",
    detail:
      "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at",
    categoryId: 1,
    image1: "https://robohash.org/quiaodioducimus.png?size=300x300&set=set1",
    image2: "https://robohash.org/cumquedoloreset.png?size=300x300&set=set1",
    stock: 13,
  },
  {
    name: "Voltsillam",
    price: "123.99",
    discountPercent: 1,
    description:
      "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis",
    detail:
      "turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
    categoryId: 3,
    image1:
      "https://robohash.org/doloresconsequatursint.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/inciduntquilaboriosam.png?size=300x300&set=set1",
    stock: 34,
  },
  {
    name: "Solarbreeze",
    price: "124.16",
    discountPercent: 1,
    description:
      "nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque",
    detail:
      "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    categoryId: 3,
    image1: "https://robohash.org/quiquosquia.png?size=300x300&set=set1",
    image2: "https://robohash.org/sitsapienteimpedit.png?size=300x300&set=set1",
    stock: 81,
  },
  {
    name: "Ronstring",
    price: "134.08",
    discountPercent: 5,
    description:
      "eu nibh quisque id justo sit amet sapien dignissim vestibulum",
    detail:
      "in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod",
    categoryId: 2,
    image1: "https://robohash.org/velitveniamrerum.png?size=300x300&set=set1",
    image2:
      "https://robohash.org/asperioresdignissimosmolestiae.png?size=300x300&set=set1",
    stock: 81,
  },
  {
    name: "Overhold",
    price: "123.91",
    discountPercent: 2,
    description:
      "magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
    detail:
      "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis",
    categoryId: 1,
    image1:
      "https://robohash.org/doloresrepudiandaetempora.png?size=300x300&set=set1",
    image2: "https://robohash.org/euminconsequatur.png?size=300x300&set=set1",
    stock: 95,
  },
  {
    name: "Tempsoft",
    price: "33.56",
    discountPercent: 4,
    description:
      "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida",
    detail:
      "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
    categoryId: 1,
    image1:
      "https://robohash.org/delenitidelectusnulla.png?size=300x300&set=set1",
    image2: "https://robohash.org/minimainalias.png?size=300x300&set=set1",
    stock: 54,
  },
];
