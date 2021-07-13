const products = [
    {
      name: "Dark Souls",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81MJwos2HyL._AC_SL1500_.jpg",
      description:
        "Dark Souls is a third-person action role-playing game. A core mechanic of the game is exploration. Players are encouraged by the game to proceed with caution, learn from past mistakes, or find alternative areas to explore. Dark Souls takes place in a large and continuous open world environment, connected through a central hub area. The player character can travel between areas and explore various paths at will, although prerequisites have to be met to unlock certain areas.",
      price: 29.43,
      countInStock: 35,
    },
    {
      name: "Dark Souls II",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/91f3S5K%2BQnL._AC_SL1500_.jpg",
      description:
        "Dark Souls II is an action role-playing game developed by FromSoftware and published by Bandai Namco Games. The third game in the Souls series, it was released for Microsoft Windows, PlayStation 3 and Xbox 360.",
      price: 37.02,
      countInStock: 40,
    },
    {
      name: "Dark Souls III",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81R0rrAbzEL._AC_SL1500_.jpg",
      description:
        "Dark Souls III is an action role-playing game played in a third-person perspective. Players have access to a variety of weapons, armor, magic, and consumables that they can use to fight their enemies. Bonfires serve as checkpoints. The Estus Flask is the consumable used for healing in Dark Souls III. Ashen Estus Flasks restore focus points (FP), which can be used for magic or weapon arts. Hidetaka Miyazaki, the creator of the series, returned to direct the game after handing development duties of Dark Souls II to others in FromSoftware.",
      price: 42.56,
      countInStock: 40,
    },
    {
      name: "Sekiro: Shadows Die Twice",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81KRXeee8%2BL._AC_SL1500_.jpg",
      description:
        "Sekiro: Shadows Die Twice is an action-adventure game played from a third-person view. Compared to FromSoftware's own Souls series, the game features fewer role-playing elements, lacking character creation and the ability to level up a variety of stats, as well as having no multiplayer elements.[3][4][5][6] It does, however, include gear upgrading, a skill tree, and limited ability customization. Rather than attacking to whittle an enemy's health points, combat in Sekiro revolves around using a katana to attack their posture and balance instead, which eventually leads to an opening that allows for a single killing blow.",
      price: 69.99,
      countInStock: 40,
    },
    {
      name: "Grand Theft Auto V",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61%2Bs8HfeFoL._AC_.jpg",
      description:
        "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.",
      price: 28.99,
      countInStock: 40,
    },
    {
      name: "God of War",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81qJ1ui8bzL._AC_SL1500_.jpg",
      description:
        "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE). Released worldwide on April 20, 2018, for the PlayStation 4 (PS4), it is the eighth installment in the God of War series, the eighth chronologically, and the sequel to 2010's God of War III. Unlike previous games, which were loosely based on Greek mythology, this installment is loosely inspired by Norse mythology, with the majority of it set in ancient Scandinavia in the realm of Midgard. For the first time in the series, there are two protagonists: Kratos, the former Greek God of War who remains the only playable character, and his young son Atreus. Following the death of Kratos' second wife and Atreus' mother, they journey to fulfill her request that her ashes be spread at the highest peak of the nine realms. Kratos keeps his troubled past a secret from Atreus, who is unaware of his divine nature. Along their journey, they encounter monsters and gods of the Norse world.",
      price: 22.99,
      countInStock: 40,
    },
    {
      name: "Yakuza 0",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71k3zATRDUL._AC_SL1247_.jpg",
      description:
        "Yakuza 0 is an action-adventure game set in an open world environment and played from a third-person perspective. The game takes place from December 1988 to January 1989, in Kamurocho and Sotenbori, fictionalized recreations of Tokyo's Kabukichō and Osaka's Dōtonbori areas respectively. The player controls series protagonist Kazuma Kiryu and recurring character Goro Majima, alternating between the two at predetermined points during the story.",
      price: 29.99,
      countInStock: 20,
    },
    {
      name: "Assassins Creed Odyssey",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/81h1UObUkKL._AC_SL1194_.jpg",
      description:
        "Assassin's Creed Odyssey is an action role-playing video game developed by Ubisoft Quebec and published by Ubisoft. It is the eleventh major installment in the Assassin's Creed series and the successor to 2017's Assassin's Creed Origins. It was released worldwide for Microsoft Windows, PlayStation 4, Xbox One, and Nintendo Switch on October 5, 2018, with a Stadia version launching alongside the service in 2019. Like its predecessor, the game features a large open world, and adopts elements from the role-playing genre, putting more emphasis on combat and exploration than stealth.",
      price: 19.99,
      countInStock: 40,
    },
  ];
  
  module.exports = products;