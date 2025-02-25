const quizData = [
	{
    "id": 1,
    "question": "En quelle année le traité de Verdun a-t-il divisé l'empire carolingien ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "800", "correct": false, "explanation": "800 correspond au couronnement de Charlemagne.", "confusion": 70},
      {"text": "843", "correct": true, "explanation": "Le traité de Verdun en 843 partage l'empire entre les petits-fils de Charlemagne.", "confusion": 0},
      {"text": "987", "correct": false, "explanation": "987 marque l'avènement d'Hugues Capet, pas le partage carolingien.", "confusion": 40},
      {"text": "1066", "correct": false, "explanation": "1066 est la date de la conquête normande de l'Angleterre.", "confusion": 90}
    ]
  },
  {
    "id": 2,
    "question": "Quel fut le sort de Jeanne d'Arc après sa capture ?",
    "difficulty": 40,
    "points": 15,
    "answers": [
      {"text": "Emprisonnée à vie", "correct": false, "explanation": "Elle fut condamnée à mort après un procès en hérésie.", "confusion": 30},
      {"text": "Brûlée vive", "correct": true, "explanation": "Exécutée par les Anglais à Rouen en 1431 après un procès politique.", "confusion": 10},
      {"text": "Libérée contre rançon", "correct": false, "explanation": "Les Anglais refusèrent toute négociation.", "confusion": 60},
      {"text": "Mariée de force", "correct": false, "explanation": "Aucune source historique ne mentionne cela.", "confusion": 85}
    ]
  },
  {
    "id": 3,
    "question": "Pour quel événement la Tour Eiffel a-t-elle été construite ?",
    "difficulty": 20,
    "points": 10,
    "answers": [
      {"text": "Exposition universelle de 1889", "correct": true, "explanation": "Édifiée pour célébrer le centenaire de la Révolution.", "confusion": 0},
      {"text": "Jeux Olympiques de 1900", "correct": false, "explanation": "Les JO de 1900 eurent lieu à Paris mais après sa construction.", "confusion": 65},
      {"text": "Révolution industrielle", "correct": false, "explanation": "Symbole technique mais pas lié à un événement spécifique.", "confusion": 40},
      {"text": "Commune de Paris", "correct": false, "explanation": "La Commune eut lieu en 1871, avant sa construction.", "confusion": 75}
    ]
  },
  {
    "id": 4,
    "question": "Quel événement marque traditionnellement le début de la Révolution française ?",
    "difficulty": 25,
    "points": 10,
    "answers": [
      {"text": "La prise des Tuileries", "correct": false, "explanation": "Survient en 1792, après le début de la Révolution.", "confusion": 55},
      {"text": "La prise de la Bastille", "correct": true, "explanation": "14 juillet 1789 : symbole de la chute de l'absolutisme.", "confusion": 5},
      {"text": "L'exécution de Louis XVI", "correct": false, "explanation": "A eu lieu en 1793, pendant la Terreur.", "confusion": 30},
      {"text": "Le Serment du Jeu de Paume", "correct": false, "explanation": "Précède de peu la prise de la Bastille (20 juin 1789).", "confusion": 70}
    ]
  },
  {
    "id": 5,
    "question": "Où Napoléon a-t-il subi sa défaite finale ?",
    "difficulty": 35,
    "points": 15,
    "answers": [
      {"text": "Austerlitz", "correct": false, "explanation": "Victoire française en 1805 contre les Russo-Autrichiens.", "confusion": 60},
      {"text": "Waterloo", "correct": true, "explanation": "Défaite face aux coalisés en 1815 en Belgique.", "confusion": 15},
      {"text": "Moscou", "correct": false, "explanation": "Retraite désastreuse en 1812 mais pas une défaite militaire.", "confusion": 45},
      {"text": "Trafalgar", "correct": false, "explanation": "Défaite navale en 1805 contre Nelson.", "confusion": 50}
    ]
  },
  {
    "id": 6,
    "question": "Qui a signé l'édit de Nantes ?",
    "difficulty": 50,
    "points": 20,
    "answers": [
      {"text": "Louis XIV", "correct": false, "explanation": "Il l'a révoqué en 1685 (édit de Fontainebleau).", "confusion": 80},
      {"text": "Henri IV", "correct": true, "explanation": "Signé en 1598 pour pacifier le royaume après les guerres de religion.", "confusion": 20},
      {"text": "François Ier", "correct": false, "explanation": "Règne plus tôt (1515-1547), période de Renaissance.", "confusion": 65},
      {"text": "Charles IX", "correct": false, "explanation": "Règne pendant les guerres de religion (massacre de la Saint-Barthélemy).", "confusion": 70}
    ]
  },
  {
    "id": 7,
    "question": "Qui a été vaincu par Jules César à Alésia ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Vercingétorix", "correct": true, "explanation": "Chef gaulois rendu en 52 av. J.-C., marquant la conquête romaine.", "confusion": 10},
      {"text": "Astérix", "correct": false, "explanation": "Personnage de fiction créé par Goscinny et Uderzo.", "confusion": 90},
      {"text": "Brennus", "correct": false, "explanation": "Chef gaulois ayant pris Rome vers 390 av. J.-C.", "confusion": 75},
      {"text": "Ambiorix", "correct": false, "explanation": "Chef éburon ayant résisté à César en Belgique actuelle.", "confusion": 60}
    ]
  },
  {
    "id": 8,
    "question": "Quel roi de France était surnommé 'le Roi-Soleil' ?",
    "difficulty": 15,
    "points": 10,
    "answers": [
      {"text": "Louis XIV", "correct": true, "explanation": "Règne de 72 ans, symbole de la monarchie absolue.", "confusion": 0},
      {"text": "Louis XVI", "correct": false, "explanation": "Dernier roi d'Ancien Régime, guillotiné en 1793.", "confusion": 40},
      {"text": "François Ier", "correct": false, "explanation": "Roi de la Renaissance, contemporain de Léonard de Vinci.", "confusion": 70},
      {"text": "Henri IV", "correct": false, "explanation": "Roi populaire ayant mis fin aux guerres de religion.", "confusion": 50}
    ]
  },
  {
    "id": 9,
    "question": "Qui était Premier ministre pendant Mai 68 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Georges Pompidou", "correct": true, "explanation": "Premier ministre de De Gaulle pendant les événements.", "confusion": 40},
      {"text": "Charles de Gaulle", "correct": false, "explanation": "Président de la République à cette époque.", "confusion": 60},
      {"text": "François Mitterrand", "correct": false, "explanation": "Deviendra président en 1981.", "confusion": 80},
      {"text": "Michel Debré", "correct": false, "explanation": "Premier ministre de 1959 à 1962.", "confusion": 75}
    ]
  },
  {
    "id": 10,
    "question": "Quelle bataille de la Première Guerre mondiale a vu l'utilisation de taxis parisiens ?",
    "difficulty": 55,
    "points": 20,
    "answers": [
      {"text": "Verdun", "correct": false, "explanation": "Bataille célèbre pour sa durée et son intensité (1916).", "confusion": 50},
      {"text": "La Marne", "correct": true, "explanation": "Les taxis réquisitionnés en 1914 pour transporter des troupes.", "confusion": 25},
      {"text": "La Somme", "correct": false, "explanation": "Bataille de 1916 avec lourdes pertes britanniques.", "confusion": 70},
      {"text": "Chemin des Dames", "correct": false, "explanation": "Offensive meurtrière de 1917 sous Nivelle.", "confusion": 65}
    ]
  },
  {
    "id": 11,
    "question": "Qui a fondé la dynastie carolingienne ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Charlemagne", "correct": false, "explanation": "Appartient à la dynastie carolingienne mais ne l'a pas fondée.", "confusion": 80},
      {"text": "Pépin le Bref", "correct": true, "explanation": "Roi des Francs en 751, père de Charlemagne.", "confusion": 30},
      {"text": "Clovis", "correct": false, "explanation": "Fondateur de la dynastie mérovingienne.", "confusion": 60},
      {"text": "Hugues Capet", "correct": false, "explanation": "Fondateur de la dynastie capétienne en 987.", "confusion": 50}
    ]
  },
  {
    "id": 12,
    "question": "Après quelle bataille Clovis s'est-il converti au christianisme ?",
    "difficulty": 80,
    "points": 25,
    "answers": [
      {"text": "Tolbiac", "correct": true, "explanation": "Bataille contre les Alamans vers 496/506.", "confusion": 20},
      {"text": "Poitiers", "correct": false, "explanation": "Charles Martel arrête les Arabes en 732.", "confusion": 85},
      {"text": "Vouillé", "correct": false, "explanation": "Victoire sur les Wisigoths en 507.", "confusion": 70},
      {"text": "Hastings", "correct": false, "explanation": "Bataille de 1066 en Angleterre.", "confusion": 95}
    ]
  },
  {
    "id": 13,
    "question": "Quel président français était en fonction pendant la chute de Dien Bien Phu ?",
    "difficulty": 85,
    "points": 30,
    "answers": [
      {"text": "Vincent Auriol", "correct": false, "explanation": "Président jusqu'en 1954, événement a lieu en mai 1954.", "confusion": 70},
      {"text": "René Coty", "correct": true, "explanation": "Président de 1954 à 1959, début de la guerre d'Algérie.", "confusion": 40},
      {"text": "Charles de Gaulle", "correct": false, "explanation": "Revient au pouvoir en 1958.", "confusion": 60},
      {"text": "Georges Bidault", "correct": false, "explanation": "Homme politique mais jamais président.", "confusion": 90}
    ]
  },
  {
    "id": 14,
    "question": "Quel architecte a dirigé la transformation de Paris sous Napoléon III ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Eugène Viollet-le-Duc", "correct": false, "explanation": "Connu pour ses restaurations (Carcassonne, Notre-Dame).", "confusion": 65},
      {"text": "Baron Haussmann", "correct": true, "explanation": "Préfet de la Seine qui a modernisé Paris (1853-1870).", "confusion": 15},
      {"text": "Gustave Eiffel", "correct": false, "explanation": "Ingénieur de la tour éponyme.", "confusion": 50},
      {"text": "André Le Nôtre", "correct": false, "explanation": "Architecte paysagiste de Versailles (XVIIe siècle).", "confusion": 85}
    ]
  },
  {
    "id": 15,
    "question": "Qui fut la première femme ministre en France ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Simone Veil", "correct": false, "explanation": "Ministre en 1974 (Santé) sous Giscard.", "confusion": 60},
      {"text": "Cécile Brunschvicg", "correct": true, "explanation": "Sous le Front populaire en 1936 (Éducation).", "confusion": 30},
      {"text": "Édith Cresson", "correct": false, "explanation": "Première femme Premier ministre (1991).", "confusion": 70},
      {"text": "Germaine Poinso-Chapuis", "correct": false, "explanation": "Première ministre en 1947 (Santé publique).", "confusion": 50}
    ]
  },
  {
    "id": 16,
    "question": "En quelle année les femmes ont-elles obtenu le droit de vote en France ?",
    "difficulty": 50,
    "points": 20,
    "answers": [
      {"text": "1848", "correct": false, "explanation": "Suffrage universel masculin sous la IIe République.", "confusion": 70},
      {"text": "1944", "correct": true, "explanation": "Ordonnance du Gouvernement provisoire (De Gaulle).", "confusion": 20},
      {"text": "1918", "correct": false, "explanation": "Droit de vote des femmes au Royaume-Uni.", "confusion": 60},
      {"text": "1965", "correct": false, "explanation": "Réforme autorisant les femmes à ouvrir un compte bancaire.", "confusion": 75}
    ]
  },
  {
    "id": 17,
    "question": "Quel rôle a joué le cardinal de Richelieu sous Louis XIII ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Premier ministre", "correct": true, "explanation": "Principal ministre de 1624 à 1642, renforce le pouvoir royal.", "confusion": 25},
      {"text": "Chef des armées", "correct": false, "explanation": "Dirigeait la politique mais pas directement les armées.", "confusion": 55},
      {"text": "Ambassadeur à Rome", "correct": false, "explanation": "N'a jamais occupé cette fonction.", "confusion": 80},
      {"text": "Tuteur du roi", "correct": false, "explanation": "Louis XIII était déjà majeur à son arrivée au pouvoir.", "confusion": 70}
    ]
  },
  {
    "id": 18,
    "question": "Combien de mandats présidentiels François Mitterrand a-t-il effectués ?",
    "difficulty": 30,
    "points": 15,
    "answers": [
      {"text": "Un septennat", "correct": false, "explanation": "Élu en 1981 puis réélu en 1988 (deux mandats).", "confusion": 60},
      {"text": "Deux septennats", "correct": true, "explanation": "1981-1988 puis 1988-1995 (14 ans au total).", "confusion": 10},
      {"text": "Un quinquennat", "correct": false, "explanation": "Le quinquennat fut instauré après son mandat.", "confusion": 75},
      {"text": "Trois mandats", "correct": false, "explanation": "Aucun président n'a fait trois mandats sous la Ve République.", "confusion": 90}
    ]
  },
  {
    "id": 19,
    "question": "En quelle année Marie-Antoinette a-t-elle été guillotinée ?",
    "difficulty": 45,
    "points": 15,
    "answers": [
      {"text": "1789", "correct": false, "explanation": "Année de la Révolution mais exécutée plus tard.", "confusion": 70},
      {"text": "1793", "correct": true, "explanation": "Exécutée le 16 octobre 1793 après le procès des Bourbons.", "confusion": 20},
      {"text": "1795", "correct": false, "explanation": "Fin de la Convention thermidorienne.", "confusion": 60},
      {"text": "1804", "correct": false, "explanation": "Couronnement de Napoléon Ier.", "confusion": 85}
    ]
  },
  {
    "id": 20,
    "question": "Qui a dirigé le gouvernement provisoire après la Libération en 1944 ?",
    "difficulty": 55,
    "points": 20,
    "answers": [
      {"text": "Philippe Pétain", "correct": false, "explanation": "Chef de l'État français collaborateur jusqu'en 1944.", "confusion": 50},
      {"text": "Charles de Gaulle", "correct": true, "explanation": "Dirige le GPRF jusqu'en 1946.", "confusion": 15},
      {"text": "Pierre Laval", "correct": false, "explanation": "Collaborateur exécuté en 1945.", "confusion": 70},
      {"text": "Léon Blum", "correct": false, "explanation": "Dirigea le Front populaire dans les années 1930.", "confusion": 65}
    ]
  },
  {
    "id": 21,
    "question": "Quel traité met fin à la guerre de Cent Ans ?",
    "difficulty": 55,
    "points": 20,
    "answers": [
      {"text": "Traité de Troyes", "correct": false, "explanation": "Signé en 1420, il déshérite le dauphin Charles mais ne termine pas la guerre.", "confusion": 65},
      {"text": "Traité de Picquigny", "correct": true, "explanation": "Signé en 1475, il marque la fin officielle du conflit séculaire.", "confusion": 30},
      {"text": "Traité de Brétigny", "correct": false, "explanation": "Signé en 1360 pendant une trêve de la guerre de Cent Ans.", "confusion": 70},
      {"text": "Traité de Cateau-Cambrésis", "correct": false, "explanation": "Met fin aux guerres d'Italie en 1559.", "confusion": 80}
    ]
  },
  {
    "id": 22,
    "question": "Qui a dirigé la France pendant la Fronde ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Louis XIII", "correct": false, "explanation": "Mort en 1643, avant la Fronde (1648-1653).", "confusion": 60},
      {"text": "Anne d'Autriche et Mazarin", "correct": true, "explanation": "Régence pendant la minorité de Louis XIV.", "confusion": 25},
      {"text": "Henri IV", "correct": false, "explanation": "Règne bien antérieur (1589-1610).", "confusion": 85},
      {"text": "Cardinal de Richelieu", "correct": false, "explanation": "Mort en 1642, avant la Fronde.", "confusion": 75}
    ]
  },
  {
    "id": 23,
    "question": "Quel événement a lieu le 18 mars 1871 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Proclamation de la IIIe République", "correct": false, "explanation": "Proclamée le 4 septembre 1870.", "confusion": 55},
      {"text": "Début de la Commune de Paris", "correct": true, "explanation": "Insurrection populaire après la défaite contre la Prusse.", "confusion": 30},
      {"text": "Bataille de Sedan", "correct": false, "explanation": "A eu lieu le 1er septembre 1870.", "confusion": 70},
      {"text": "Signature du traité de Francfort", "correct": false, "explanation": "Signé en mai 1871.", "confusion": 60}
    ]
  },
  {
    "id": 24,
    "question": "Quel philosophe français a écrit 'Le Contrat Social' ?",
    "difficulty": 40,
    "points": 15,
    "answers": [
      {"text": "Voltaire", "correct": false, "explanation": "Auteur de 'Candide' mais pas du 'Contrat Social'.", "confusion": 60},
      {"text": "Jean-Jacques Rousseau", "correct": true, "explanation": "Ouvrage clé de la philosophie politique (1762).", "confusion": 10},
      {"text": "Denis Diderot", "correct": false, "explanation": "Directeur de l'Encyclopédie.", "confusion": 70},
      {"text": "Montesquieu", "correct": false, "explanation": "Auteur de 'L'Esprit des Lois'.", "confusion": 65}
    ]
  },
  {
    "id": 25,
    "question": "Quel territoire la France perd-elle après la défaite de 1870 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "La Savoie", "correct": false, "explanation": "Annexée en 1860, non concernée par le traité de 1871.", "confusion": 70},
      {"text": "L'Alsace-Lorraine", "correct": true, "explanation": "Cédée à l'Empire allemand par le traité de Francfort.", "confusion": 15},
      {"text": "La Corse", "correct": false, "explanation": "Française depuis 1769.", "confusion": 90},
      {"text": "La Bretagne", "correct": false, "explanation": "Jamais perdue par la France.", "confusion": 85}
    ]
  },
  {
    "id": 26,
    "question": "Qui a écrit 'J'accuse...!' pendant l'affaire Dreyfus ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Victor Hugo", "correct": false, "explanation": "Mort en 1885, avant l'affaire Dreyfus.", "confusion": 75},
      {"text": "Émile Zola", "correct": true, "explanation": "Article publié dans L'Aurore en 1898.", "confusion": 5},
      {"text": "Jean Jaurès", "correct": false, "explanation": "Soutien Dreyfus mais pas auteur du texte.", "confusion": 60},
      {"text": "Georges Clemenceau", "correct": false, "explanation": "Journaliste et politique, publia le texte.", "confusion": 45}
    ]
  },
  {
    "id": 27,
    "question": "Quel régime politique dirige la France entre 1940 et 1944 ?",
    "difficulty": 45,
    "points": 15,
    "answers": [
      {"text": "Le Gouvernement Provisoire", "correct": false, "explanation": "Existe après la Libération en 1944.", "confusion": 50},
      {"text": "La IIIe République", "correct": false, "explanation": "Prend fin en juillet 1940.", "confusion": 65},
      {"text": "L'État Français (Régime de Vichy)", "correct": true, "explanation": "Régime collaborateur dirigé par Pétain.", "confusion": 20},
      {"text": "La France Libre", "correct": false, "explanation": "Mouvement de résistance dirigé par De Gaulle.", "confusion": 55}
    ]
  },
  {
    "id": 28,
    "question": "En quelle année l'Algérie obtient-elle son indépendance ?",
    "difficulty": 55,
    "points": 20,
    "answers": [
      {"text": "1954", "correct": false, "explanation": "Début de la guerre d'Algérie.", "confusion": 70},
      {"text": "1962", "correct": true, "explanation": "Accords d'Évian signés le 18 mars 1962.", "confusion": 15},
      {"text": "1945", "correct": false, "explanation": "Massacres de Sétif et fin de la Seconde Guerre mondiale.", "confusion": 80},
      {"text": "1975", "correct": false, "explanation": "Aucun événement majeur lié à l'Algérie cette année-là.", "confusion": 90}
    ]
  },
  {
    "id": 29,
    "question": "Quel roi franc a été couronné empereur d'Occident en 800 ?",
    "difficulty": 35,
    "points": 15,
    "answers": [
      {"text": "Clovis", "correct": false, "explanation": "Premier roi franc baptisé (496).", "confusion": 75},
      {"text": "Charlemagne", "correct": true, "explanation": "Couronné par le pape Léon III à Rome.", "confusion": 10},
      {"text": "Louis le Pieux", "correct": false, "explanation": "Fils et successeur de Charlemagne.", "confusion": 60},
      {"text": "Charles Martel", "correct": false, "explanation": "Vainqueur de Poitiers en 732.", "confusion": 65}
    ]
  },
  {
    "id": 30,
    "question": "Où Jeanne d'Arc a-t-elle fait sacrer Charles VII ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Paris", "correct": false, "explanation": "Occupé par les Anglais à l'époque.", "confusion": 70},
      {"text": "Reims", "correct": true, "explanation": "Lieu traditionnel du sacre des rois de France.", "confusion": 20},
      {"text": "Orléans", "correct": false, "explanation": "Ville libérée par Jeanne en 1429.", "confusion": 65},
      {"text": "Rouen", "correct": false, "explanation": "Lieu de son exécution en 1431.", "confusion": 50}
    ]
  },
  {
    "id": 31,
    "question": "Quelle institution médiévale limite le pouvoir royal en Angleterre mais pas en France ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Les États généraux", "correct": false, "explanation": "Existent en France mais n'ont pas le même rôle.", "confusion": 60},
      {"text": "La Magna Carta", "correct": true, "explanation": "Charte anglaise de 1215 limitant le pouvoir royal.", "confusion": 35},
      {"text": "Le Parlement de Paris", "correct": false, "explanation": "Cour de justice française.", "confusion": 70},
      {"text": "La Sainte Inquisition", "correct": false, "explanation": "Institution religieuse sans rôle politique direct.", "confusion": 85}
    ]
  },
  {
    "id": 32,
    "question": "Quel roi fut surnommé 'le Bien-aimé' avant de devenir impopulaire ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Louis XV", "correct": true, "explanation": "Surnom donné après sa guérison en 1744.", "confusion": 40},
      {"text": "Louis XVI", "correct": false, "explanation": "Dernier roi d'Ancien Régime, guillotiné.", "confusion": 70},
      {"text": "Henri III", "correct": false, "explanation": "Roi durant les guerres de religion.", "confusion": 80},
      {"text": "Charles X", "correct": false, "explanation": "Dernier roi Bourbon, renversé en 1830.", "confusion": 75}
    ]
  },
  {
    "id": 33,
    "question": "Quel souverain français a invité Léonard de Vinci en France ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "François Ier", "correct": true, "explanation": "Léonard passe ses dernières années au Clos Lucé.", "confusion": 25},
      {"text": "Louis XII", "correct": false, "explanation": "Prédécesseur de François Ier.", "confusion": 65},
      {"text": "Henri II", "correct": false, "explanation": "Règne après François Ier.", "confusion": 75},
      {"text": "Charles VIII", "correct": false, "explanation": "A mené des guerres en Italie mais trop tôt.", "confusion": 80}
    ]
  },
  {
    "id": 34,
    "question": "Comment est mort le roi Henri II ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Empoisonnement", "correct": false, "explanation": "Aucune preuve historique.", "confusion": 80},
      {"text": "Blessure de joute", "correct": true, "explanation": "Mort en 1559 d'un éclat de lance dans l'œil.", "confusion": 30},
      {"text": "Assassinat", "correct": false, "explanation": "Aucun complot avéré.", "confusion": 70},
      {"text": "Maladie", "correct": false, "explanation": "Mort accidentelle, pas naturelle.", "confusion": 60}
    ]
  },
  {
    "id": 35,
    "question": "Quel massacre a eu lieu pendant le règne de Charles IX ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Massacre de la Saint-Barthélemy", "correct": true, "explanation": "24 août 1572 contre les protestants.", "confusion": 15},
      {"text": "Massacre des Innocents", "correct": false, "explanation": "Événement biblique.", "confusion": 85},
      {"text": "Nuit des Longs Couteaux", "correct": false, "explanation": "Épuration nazie en 1934.", "confusion": 90},
      {"text": "Massacre de la Saint-Valentin", "correct": false, "explanation": "Événement américain de 1929.", "confusion": 95}
    ]
  },
  {
    "id": 36,
    "question": "Quel explorateur français a fondé Québec ?",
    "difficulty": 55,
    "points": 20,
    "answers": [
      {"text": "Jacques Cartier", "correct": false, "explanation": "A exploré le Canada mais n'a pas fondé Québec.", "confusion": 70},
      {"text": "Samuel de Champlain", "correct": true, "explanation": "Fondation en 1608.", "confusion": 25},
      {"text": "Robert Cavelier de La Salle", "correct": false, "explanation": "A exploré le Mississippi.", "confusion": 65},
      {"text": "Louis Jolliet", "correct": false, "explanation": "Explorateur du Mississippi avec Marquette.", "confusion": 75}
    ]
  },
  {
    "id": 37,
    "question": "Que célèbre la fête nationale du 14 juillet ?",
    "difficulty": 20,
    "points": 10,
    "answers": [
      {"text": "La prise de la Bastille", "correct": false, "explanation": "Événement de 1789 mais la fête commémore aussi 1790.", "confusion": 50},
      {"text": "La Fête de la Fédération", "correct": false, "explanation": "14 juillet 1790 mais réponse incomplète.", "confusion": 70},
      {"text": "Les deux événements", "correct": true, "explanation": "Loi de 1880 associant les deux dates.", "confusion": 35},
      {"text": "La fin de la Terreur", "correct": false, "explanation": "Survenue en 1794.", "confusion": 85}
    ]
  },
  {
    "id": 38,
    "question": "Quelle bataille marque la fin de la présence française en Indochine ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Diên Biên Phu", "correct": true, "explanation": "Défaite française décisive en 1954.", "confusion": 20},
      {"text": "Hanoï", "correct": false, "explanation": "Siège en 1946 mais pas bataille finale.", "confusion": 65},
      {"text": "Lang Son", "correct": false, "explanation": "Bataille de 1885 pendant la conquête.", "confusion": 75},
      {"text": "Saïgon", "correct": false, "explanation": "Chute en 1975, après le départ français.", "confusion": 60}
    ]
  },
  {
    "id": 39,
    "question": "Quel philosophe des Lumières a inspiré la séparation des pouvoirs ?",
    "difficulty": 45,
    "points": 15,
    "answers": [
      {"text": "Voltaire", "correct": false, "explanation": "Défenseur de la tolérance mais pas de cette théorie.", "confusion": 60},
      {"text": "Montesquieu", "correct": true, "explanation": "Théorisé dans 'L'Esprit des Lois' (1748).", "confusion": 15},
      {"text": "Rousseau", "correct": false, "explanation": "Théoricien du contrat social.", "confusion": 55},
      {"text": "Diderot", "correct": false, "explanation": "Directeur de l'Encyclopédie.", "confusion": 70}
    ]
  },
  {
    "id": 40,
    "question": "Quelle reine était la mère de trois rois de France ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Anne de Bretagne", "correct": false, "explanation": "Mère de Claude de France mais pas de rois.", "confusion": 70},
      {"text": "Catherine de Médicis", "correct": true, "explanation": "Mère de François II, Charles IX et Henri III.", "confusion": 30},
      {"text": "Marie-Antoinette", "correct": false, "explanation": "Mère de Louis XVII (mort enfant).", "confusion": 85},
      {"text": "Aliénor d'Aquitaine", "correct": false, "explanation": "Mère de Richard Cœur de Lion (Angleterre).", "confusion": 60}
    ]
  },
  {
    "id": 41,
    "question": "Qui a fondé la Cinquième République française ?",
    "difficulty": 50,
    "points": 20,
    "answers": [
      {"text": "Vincent Auriol", "correct": false, "explanation": "Vincent Auriol fut le premier président de la Quatrième République.", "confusion": 70},
      {"text": "Charles de Gaulle", "correct": true, "explanation": "De Gaulle instaura la Cinquième République par référendum en 1958.", "confusion": 10},
      {"text": "François Mitterrand", "correct": false, "explanation": "Mitterrand fut président sous la Cinquième République, mais ne l'a pas fondée.", "confusion": 60},
      {"text": "René Coty", "correct": false, "explanation": "Dernier président de la Quatrième République.", "confusion": 80}
    ]
  },
  {
    "id": 42,
    "question": "Quelle bataille marque la fin définitive de Napoléon Ier en 1815 ?",
    "difficulty": 40,
    "points": 15,
    "answers": [
      {"text": "Waterloo", "correct": true, "explanation": "Défaite face aux coalisés le 18 juin 1815 en Belgique.", "confusion": 15},
      {"text": "Austerlitz", "correct": false, "explanation": "Victoire majeure de Napoléon en 1805.", "confusion": 65},
      {"text": "Leipzig", "correct": false, "explanation": "Défaite de 1813 contre la Sixième Coalition.", "confusion": 55},
      {"text": "Iéna", "correct": false, "explanation": "Victoire contre la Prusse en 1806.", "confusion": 70}
    ]
  },
  {
    "id": 43,
    "question": "Quel événement déclencha les guerres de Religion en France ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Le massacre de Wassy", "correct": true, "explanation": "Massacre de protestants par les troupes du duc de Guise en 1562.", "confusion": 30},
      {"text": "La Saint-Barthélemy", "correct": false, "explanation": "Survient en 1572, après le début des conflits.", "confusion": 60},
      {"text": "L'édit de Nantes", "correct": false, "explanation": "Met fin aux guerres de Religion en 1598.", "confusion": 85},
      {"text": "La révocation de l'édit de Fontainebleau", "correct": false, "explanation": "Événement lié aux persécutions des protestants sous Louis XIV.", "confusion": 75}
    ]
  },
  {
    "id": 44,
    "question": "Qui a peint 'La Liberté guidant le peuple' ?",
    "difficulty": 35,
    "points": 15,
    "answers": [
      {"text": "Eugène Delacroix", "correct": true, "explanation": "Tableau emblématique de la révolution de 1830.", "confusion": 10},
      {"text": "Jacques-Louis David", "correct": false, "explanation": "Peintre néoclassique (ex. 'Le Sacre de Napoléon').", "confusion": 60},
      {"text": "Claude Monet", "correct": false, "explanation": "Figure de l'impressionnisme, postérieur aux événements.", "confusion": 75},
      {"text": "Théodore Géricault", "correct": false, "explanation": "Connu pour 'Le Radeau de la Méduse'.", "confusion": 65}
    ]
  },
  {
    "id": 45,
    "question": "Quand fut promulguée la loi de séparation des Églises et de l'État ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "1789", "correct": false, "explanation": "Année de la Révolution, mais la loi est bien plus tardive.", "confusion": 80},
      {"text": "1905", "correct": true, "explanation": "Loi instaurant la laïcité sous la Troisième République.", "confusion": 20},
      {"text": "1945", "correct": false, "explanation": "Fin de la Seconde Guerre mondiale.", "confusion": 70},
      {"text": "1882", "correct": false, "explanation": "Loi Jules Ferry sur l'école gratuite et obligatoire.", "confusion": 65}
    ]
  },
  {
    "id": 46,
    "question": "Quel roi fut surnommé 'le Roi-Citoyen' ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Louis-Philippe Ier", "correct": true, "explanation": "Dernier roi des Français (1830-1848), style bourgeois.", "confusion": 35},
      {"text": "Louis XVI", "correct": false, "explanation": "Guillotiné pendant la Révolution.", "confusion": 75},
      {"text": "Henri IV", "correct": false, "explanation": "Surnommé 'le Vert Galant'.", "confusion": 65},
      {"text": "Charles X", "correct": false, "explanation": "Roi ultraconservateur renversé en 1830.", "confusion": 70}
    ]
  },
  {
    "id": 47,
    "question": "Quelle crise politique conduisit à l'appel du 18 juin 1940 ?",
    "difficulty": 55,
    "points": 20,
    "answers": [
      {"text": "La défaite française face à l'Allemagne", "correct": true, "explanation": "De Gaulle appelle à résister depuis Londres après l'armistice.", "confusion": 25},
      {"text": "L'affaire Dreyfus", "correct": false, "explanation": "Crise politique de la fin du XIXe siècle.", "confusion": 85},
      {"text": "La Commune de Paris", "correct": false, "explanation": "Événement de 1871.", "confusion": 80},
      {"text": "Mai 68", "correct": false, "explanation": "Crise sociale sous la Cinquième République.", "confusion": 90}
    ]
  },
  {
    "id": 48,
    "question": "Quelle découverte scientifique majeure est associée à Marie Curie ?",
    "difficulty": 45,
    "points": 15,
    "answers": [
      {"text": "La radioactivité", "correct": false, "explanation": "Découverte par Becquerel, étudiée par les Curie.", "confusion": 60},
      {"text": "Le radium et le polonium", "correct": true, "explanation": "Éléments découverts avec Pierre Curie.", "confusion": 25},
      {"text": "La théorie de la relativité", "correct": false, "explanation": "Associée à Einstein.", "confusion": 85},
      {"text": "La pénicilline", "correct": false, "explanation": "Découverte par Alexander Fleming.", "confusion": 75}
    ]
  },
  {
    "id": 49,
    "question": "Quel traité mit fin à la guerre d'indépendance américaine avec l'implication française ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Traité de Versailles (1783)", "correct": true, "explanation": "Reconnaissance de l'indépendance des États-Unis.", "confusion": 40},
      {"text": "Traité de Paris (1763)", "correct": false, "explanation": "Fin de la guerre de Sept Ans.", "confusion": 70},
      {"text": "Traité d'Utrecht", "correct": false, "explanation": "1713, guerre de Succession d'Espagne.", "confusion": 80},
      {"text": "Traité de Tordesillas", "correct": false, "explanation": "Partage du Nouveau Monde en 1494.", "confusion": 90}
    ]
  },
  {
    "id": 50,
    "question": "Quel président français a instauré le quinquennat ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Jacques Chirac", "correct": true, "explanation": "Réforme approuvée par référendum en 2000.", "confusion": 35},
      {"text": "François Mitterrand", "correct": false, "explanation": "A effectué deux septennats.", "confusion": 65},
      {"text": "Valéry Giscard d'Estaing", "correct": false, "explanation": "A proposé un septennat non renouvelable.", "confusion": 75},
      {"text": "Emmanuel Macron", "correct": false, "explanation": "Premier président élu sous le quinquennat en 2017.", "confusion": 50}
    ]
  },
  {
    "id": 51,
    "question": "Quelle bataille de la Première Guerre mondiale est surnommée 'la boucherie' ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Verdun", "correct": false, "explanation": "Symbole de résistance mais pas qualifiée ainsi.", "confusion": 55},
      {"text": "La Somme", "correct": true, "explanation": "Plus d'un million de victimes en 1916.", "confusion": 40},
      {"text": "Chemin des Dames", "correct": false, "explanation": "Offensive désastreuse de 1917.", "confusion": 65},
      {"text": "La Marne", "correct": false, "explanation": "Bataille décisive de 1914.", "confusion": 70}
    ]
  },
  {
    "id": 52,
    "question": "Quelle institution médiévale conseillait le roi de France ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Le Parlement de Paris", "correct": false, "explanation": "Cour de justice, pas un organe consultatif.", "confusion": 60},
      {"text": "Le Conseil du Roi", "correct": true, "explanation": "Assemblée de proches conseillers du monarque.", "confusion": 30},
      {"text": "Les États généraux", "correct": false, "explanation": "Convoqués en cas de crise financière.", "confusion": 70},
      {"text": "La Chambre des comptes", "correct": false, "explanation": "Gérait les finances royales.", "confusion": 75}
    ]
  },
  {
    "id": 53,
    "question": "Quel explorateur français a donné son nom au Québec ?",
    "difficulty": 55,
    "points": 20,
    "answers": [
      {"text": "Jacques Cartier", "correct": true, "explanation": "A exploré le fleuve Saint-Laurent au XVIe siècle.", "confusion": 25},
      {"text": "Samuel de Champlain", "correct": false, "explanation": "Fondateur de Québec en 1608.", "confusion": 65},
      {"text": "Louis Jolliet", "correct": false, "explanation": "Explorateur du Mississippi.", "confusion": 70},
      {"text": "René-Robert Cavelier de La Salle", "correct": false, "explanation": "A exploré la Louisiane.", "confusion": 75}
    ]
  },
  {
    "id": 54,
    "question": "Quelle révolte paysanne eut lieu sous Louis XIV ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "La Jacquerie", "correct": false, "explanation": "Révolte médiévale en 1358.", "confusion": 70},
      {"text": "La Fronde", "correct": false, "explanation": "Révolte nobiliaire et parlementaire (1648-1653).", "confusion": 60},
      {"text": "La révolte des Va-nu-pieds", "correct": true, "explanation": "Soulèvement en Normandie contre la fiscalité (1639).", "confusion": 45},
      {"text": "La guerre des Camisards", "correct": false, "explanation": "Révolte protestante sous Louis XIV.", "confusion": 65}
    ]
  },
  {
    "id": 55,
    "question": "Qui dirigea le gouvernement de Vichy après 1942 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Philippe Pétain", "correct": true, "explanation": "Chef de l'État français jusqu'en 1944.", "confusion": 20},
      {"text": "Pierre Laval", "correct": false, "explanation": "Chef du gouvernement, exécuté en 1945.", "confusion": 65},
      {"text": "François Darlan", "correct": false, "explanation": "Dirigeant de 1941 à 1942, assassiné.", "confusion": 75},
      {"text": "Charles de Gaulle", "correct": false, "explanation": "Chef de la France libre, opposant à Vichy.", "confusion": 85}
    ]
  },
  {
    "id": 56,
    "question": "Quel événement marqua le début de la construction de l'UE avec la France ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Le traité de Rome", "correct": true, "explanation": "Création de la CEE en 1957.", "confusion": 30},
      {"text": "Le traité de Maastricht", "correct": false, "explanation": "Création de l'UE en 1992.", "confusion": 60},
      {"text": "Le plan Schuman", "correct": false, "explanation": "Proposition de la CECA en 1950.", "confusion": 55},
      {"text": "Les accords de Schengen", "correct": false, "explanation": "Suppression des frontières intérieures (1985).", "confusion": 65}
    ]
  },
  {
    "id": 57,
    "question": "Quelle loi instaura les congés payés en France ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Les accords Matignon", "correct": true, "explanation": "Signés en 1936 sous le Front populaire.", "confusion": 40},
      {"text": "Le programme du CNR", "correct": false, "explanation": "Appliqué après la Libération en 1944.", "confusion": 70},
      {"text": "La loi Aubry", "correct": false, "explanation": "Réduction du temps de travail en 2000.", "confusion": 75},
      {"text": "Le code du travail de 1910", "correct": false, "explanation": "Pas de congés payés à cette époque.", "confusion": 80}
    ]
  },
  {
    "id": 58,
    "question": "Quel écrivain fut ministre sous de Gaulle ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "André Malraux", "correct": true, "explanation": "Ministre de la Culture de 1959 à 1969.", "confusion": 30},
      {"text": "Albert Camus", "correct": false, "explanation": "N'a jamais occupé de fonction gouvernementale.", "confusion": 70},
      {"text": "Jean-Paul Sartre", "correct": false, "explanation": "Refusa le prix Nobel mais pas ministre.", "confusion": 80},
      {"text": "François Mauriac", "correct": false, "explanation": "Écrivain engagé, prix Nobel, mais pas ministre.", "confusion": 65}
    ]
  },
  {
    "id": 59,
    "question": "Quelle crise politique française est liée à l'Algérie en 1958 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "La crise de Suez", "correct": false, "explanation": "Conflit international en 1956.", "confusion": 65},
      {"text": "Le putsch d'Alger", "correct": true, "explanation": "Coup de force des militaires favorables à l'Algérie française.", "confusion": 35},
      {"text": "La Toussaint rouge", "correct": false, "explanation": "Début de la guerre d'Algérie en 1954.", "confusion": 70},
      {"text": "Les accords d'Évian", "correct": false, "explanation": "Signés en 1962 pour l'indépendance.", "confusion": 60}
    ]
  },
  {
    "id": 60,
    "question": "Quelle invention est associée aux frères Lumière ?",
    "difficulty": 30,
    "points": 10,
    "answers": [
      {"text": "Le cinématographe", "correct": true, "explanation": "Première projection publique en 1895.", "confusion": 10},
      {"text": "L'avion", "correct": false, "explanation": "Associé aux frères Wright.", "confusion": 85},
      {"text": "La photographie", "correct": false, "explanation": "Inventée par Nicéphore Niépce.", "confusion": 70},
      {"text": "Le télégraphe", "correct": false, "explanation": "Développé par Samuel Morse.", "confusion": 80}
    ]
  },
  {
    "id": 61,
    "question": "Quel célèbre économiste a dirigé le ministère des Finances sous Louis XIV ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Jean-Baptiste Colbert", "correct": true, "explanation": "Architecte du mercantilisme français (1661-1683).", "confusion": 20},
      {"text": "Jacques Necker", "correct": false, "explanation": "Ministre sous Louis XVI, bien plus tardif.", "confusion": 70},
      {"text": "Anne Robert Turgot", "correct": false, "explanation": "Réformateur économique sous Louis XV.", "confusion": 65},
      {"text": "Sully", "correct": false, "explanation": "Ministre d'Henri IV au XVIe siècle.", "confusion": 80}
    ]
  },
  {
    "id": 62,
    "question": "Quelle île fut une colonie pénitentiaire française surnommée 'le bagne' ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "La Guadeloupe", "correct": false, "explanation": "Colonie agricole, pas pénitentiaire.", "confusion": 75},
      {"text": "La Guyane", "correct": true, "explanation": "Bagne de Cayenne actif jusqu'en 1953.", "confusion": 30},
      {"text": "La Réunion", "correct": false, "explanation": "Colonie sucrière de l'océan Indien.", "confusion": 70},
      {"text": "Saint-Pierre-et-Miquelon", "correct": false, "explanation": "Territoire de pêche sans bagne.", "confusion": 85}
    ]
  },
  {
    "id": 63,
    "question": "Quel traité mit fin à la guerre franco-prussienne de 1870 ?",
    "difficulty": 55,
    "points": 20,
    "answers": [
      {"text": "Traité de Versailles", "correct": false, "explanation": "Signé en 1919 après la Première Guerre mondiale.", "confusion": 65},
      {"text": "Traité de Francfort", "correct": true, "explanation": "Signé le 10 mai 1871, cède l'Alsace-Lorraine.", "confusion": 25},
      {"text": "Traité de Tilsit", "correct": false, "explanation": "Signé par Napoléon en 1807 avec la Russie.", "confusion": 75},
      {"text": "Traité d'Amiens", "correct": false, "explanation": "Paix temporaire avec l'Angleterre en 1802.", "confusion": 80}
    ]
  },
  {
    "id": 64,
    "question": "Quelle reine médiévale fut régente pendant la minorité de son fils Louis IX ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Aliénor d'Aquitaine", "correct": false, "explanation": "Mère de Richard Cœur de Lion (Angleterre).", "confusion": 65},
      {"text": "Blanche de Castille", "correct": true, "explanation": "Régente de 1226 à 1234 puis en 1248.", "confusion": 30},
      {"text": "Anne de Kiev", "correct": false, "explanation": "Épouse d'Henri Ier au XIe siècle.", "confusion": 80},
      {"text": "Isabelle de France", "correct": false, "explanation": "Fille de Philippe IV, reine d'Angleterre.", "confusion": 75}
    ]
  },
  {
    "id": 65,
    "question": "Quel philosophe français fut précepteur du futur Henri IV ?",
    "difficulty": 85,
    "points": 30,
    "answers": [
      {"text": "Michel de Montaigne", "correct": true, "explanation": "Auteur des Essais, précepteur en 1573-1574.", "confusion": 40},
      {"text": "Jean Bodin", "correct": false, "explanation": "Théoricien politique contemporain.", "confusion": 70},
      {"text": "Érasme", "correct": false, "explanation": "Humaniste néerlandais du XVe siècle.", "confusion": 80},
      {"text": "René Descartes", "correct": false, "explanation": "Né en 1596, bien après cette période.", "confusion": 85}
    ]
  },
  {
    "id": 66,
    "question": "Quel scandale financier éclata sous la IIIe République en 1889 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "L'affaire des fiches", "correct": false, "explanation": "Scandale militaire de 1904.", "confusion": 70},
      {"text": "Le scandale de Panama", "correct": true, "explanation": "Corruption liée au canal de Panama.", "confusion": 35},
      {"text": "L'affaire Stavisky", "correct": false, "explanation": "Scandale des années 1930.", "confusion": 65},
      {"text": "Le krach de l'Union Générale", "correct": false, "explanation": "Crash bancaire de 1882.", "confusion": 60}
    ]
  },
  {
    "id": 67,
    "question": "Quelle bataille navale vit la destruction de la flotte française par Nelson ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Trafalgar", "correct": true, "explanation": "21 octobre 1805, victoire britannique décisive.", "confusion": 20},
      {"text": "Aboukir", "correct": false, "explanation": "Bataille de 1798 durant la campagne d'Égypte.", "confusion": 65},
      {"text": "Chesapeake", "correct": false, "explanation": "Bataille de la guerre d'indépendance américaine.", "confusion": 75},
      {"text": "Sainte-Hélène", "correct": false, "explanation": "Lieu d'exil de Napoléon, pas de bataille.", "confusion": 90}
    ]
  },
  {
    "id": 68,
    "question": "Quel explorateur français disparut en Océanie en 1788 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Jean-François de La Pérouse", "correct": true, "explanation": "Expédition scientifique disparue à Vanikoro.", "confusion": 25},
      {"text": "Louis Antoine de Bougainville", "correct": false, "explanation": "A survécu à son tour du monde (1766-1769).", "confusion": 70},
      {"text": "Jules Dumont d'Urville", "correct": false, "explanation": "Explorateur du XIXe siècle.", "confusion": 75},
      {"text": "René Caillié", "correct": false, "explanation": "Explorateur de Tombouctou (XIXe siècle).", "confusion": 85}
    ]
  },
  {
    "id": 69,
    "question": "Quelle loi de 1884 légalisa les syndicats en France ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Loi Waldeck-Rousseau", "correct": true, "explanation": "Père du droit syndical moderne.", "confusion": 35},
      {"text": "Loi Le Chapelier", "correct": false, "explanation": "Interdisait les corporations en 1791.", "confusion": 70},
      {"text": "Loi Ollivier", "correct": false, "explanation": "Adoucit le régime des grèves en 1864.", "confusion": 60},
      {"text": "Loi Auroux", "correct": false, "explanation": "Réformes sociales de 1982.", "confusion": 80}
    ]
  },
  {
    "id": 70,
    "question": "Quel roi institua la 'Pragmatique Sanction de Bourges' en 1438 ?",
    "difficulty": 85,
    "points": 30,
    "answers": [
      {"text": "Charles VII", "correct": true, "explanation": "Renforce l'autonomie de l'Église gallicane.", "confusion": 40},
      {"text": "Louis XI", "correct": false, "explanation": "Fils de Charles VII, règne plus tard.", "confusion": 70},
      {"text": "Philippe Auguste", "correct": false, "explanation": "Roi du XIIe siècle.", "confusion": 85},
      {"text": "François Ier", "correct": false, "explanation": "Signe le concordat de Bologne en 1516.", "confusion": 75}
    ]
  },
  {
    "id": 71,
    "question": "Quelle crise financière ruina le système de Law sous la Régence ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "La banqueroute de l'État", "correct": false, "explanation": "Phénomène récurrent mais pas spécifique.", "confusion": 60},
      {"text": "La bulle du Mississippi", "correct": true, "explanation": "Effondrement du système en 1720.", "confusion": 30},
      {"text": "Le krach de 1929", "correct": false, "explanation": "Crise bien postérieure.", "confusion": 85},
      {"text": "La faillite des Templiers", "correct": false, "explanation": "Événement médiéval (1307).", "confusion": 90}
    ]
  },
  {
    "id": 72,
    "question": "Quel traité permit à la France d'annexer Nice et la Savoie ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Traité de Turin", "correct": true, "explanation": "Signé avec le Piémont en 1860.", "confusion": 35},
      {"text": "Traité de Campo-Formio", "correct": false, "explanation": "1797, fin de la campagne d'Italie.", "confusion": 70},
      {"text": "Traité de Westphalie", "correct": false, "explanation": "1648, fin de la guerre de Trente Ans.", "confusion": 80},
      {"text": "Traité de Ryswick", "correct": false, "explanation": "1697, fin de la guerre de la Ligue d'Augsbourg.", "confusion": 85}
    ]
  },
  {
    "id": 73,
    "question": "Quelle institution créée en 1539 rend obligatoire la tenue des registres paroissiaux ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "L'ordonnance de Villers-Cotterêts", "correct": true, "explanation": "Signée par François Ier, base de l'état civil.", "confusion": 30},
      {"text": "Le concile de Trente", "correct": false, "explanation": "Concile religieux (1545-1563).", "confusion": 65},
      {"text": "L'édit de Nantes", "correct": false, "explanation": "1598, liberté aux protestants.", "confusion": 75},
      {"text": "La Pragmatique Sanction", "correct": false, "explanation": "1438, sur l'Église gallicane.", "confusion": 70}
    ]
  },
  {
    "id": 74,
    "question": "Quel navigateur français découvrit le Canada en 1534 ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Jacques Cartier", "correct": true, "explanation": "Premier voyage pour François Ier.", "confusion": 20},
      {"text": "Samuel de Champlain", "correct": false, "explanation": "Fondateur de Québec en 1608.", "confusion": 70},
      {"text": "Jean Cabot", "correct": false, "explanation": "Explorateur italien pour l'Angleterre.", "confusion": 75},
      {"text": "Louis Joliet", "correct": false, "explanation": "Explorateur du Mississippi au XVIIe siècle.", "confusion": 80}
    ]
  },
  {
    "id": 75,
    "question": "Quelle révolte urbaine éclata à Paris en 1382 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "La révolte des Maillotins", "correct": true, "explanation": "Soulèvement contre les impôts sous Charles VI.", "confusion": 40},
      {"text": "La Jacquerie", "correct": false, "explanation": "Révolte paysanne de 1358.", "confusion": 70},
      {"text": "La Fronde", "correct": false, "explanation": "Révolte du XVIIe siècle.", "confusion": 75},
      {"text": "La révolte des Cabochiens", "correct": false, "explanation": "1413 pendant la guerre civile Armagnacs-Bourguignons.", "confusion": 65}
    ]
  },
  {
    "id": 76,
    "question": "Quel roi institua les lettres de cachet ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Louis XIV", "correct": true, "explanation": "Instrument de l'absolutisme royal.", "confusion": 45},
      {"text": "François Ier", "correct": false, "explanation": "Période de la Renaissance.", "confusion": 75},
      {"text": "Philippe Auguste", "correct": false, "explanation": "Roi médiéval (XIIe siècle).", "confusion": 80},
      {"text": "Henri III", "correct": false, "explanation": "Roi des guerres de religion.", "confusion": 85}
    ]
  },
  {
    "id": 77,
    "question": "Quel édit révoqua la liberté de culte aux protestants en 1685 ?",
    "difficulty": 55,
    "points": 20,
    "answers": [
      {"text": "Édit de Nantes", "correct": false, "explanation": "Édit de tolérance de 1598.", "confusion": 60},
      {"text": "Édit de Fontainebleau", "correct": true, "explanation": "Révocation par Louis XIV.", "confusion": 25},
      {"text": "Édit de Versailles", "correct": false, "explanation": "1787, édit de tolérance sous Louis XVI.", "confusion": 70},
      {"text": "Édit de Milan", "correct": false, "explanation": "313 apr. J.-C., liberté religieuse dans l'Empire romain.", "confusion": 85}
    ]
  },
  {
    "id": 78,
    "question": "Quelle décision fut prise lors du concile de Clermont en 1095 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Le lancement de la première croisade", "correct": true, "explanation": "Appel d'Urbain II pour libérer Jérusalem.", "confusion": 30},
      {"text": "La réforme grégorienne", "correct": false, "explanation": "Concile de Latran IV (1215).", "confusion": 70},
      {"text": "La condamnation des templiers", "correct": false, "explanation": "Début XIVe siècle.", "confusion": 80},
      {"text": "Le schisme d'Occident", "correct": false, "explanation": "Survient en 1378.", "confusion": 85}
    ]
  },
  {
    "id": 79,
    "question": "Quel philosophe fut embastillé pour ses écrits sous Louis XV ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Voltaire", "correct": true, "explanation": "Emprisonné à la Bastille en 1717-1718.", "confusion": 35},
      {"text": "Jean-Jacques Rousseau", "correct": false, "explanation": "Exilé mais pas embastillé.", "confusion": 70},
      {"text": "Denis Diderot", "correct": false, "explanation": "Emprisonné à Vincennes en 1749.", "confusion": 60},
      {"text": "Montesquieu", "correct": false, "explanation": "N'a pas connu la prison.", "confusion": 80}
    ]
  },
  {
    "id": 80,
    "question": "Quel territoire la France perdit-elle après la bataille de Rossbach en 1757 ?",
    "difficulty": 85,
    "points": 30,
    "answers": [
      {"text": "Le Québec", "correct": false, "explanation": "Perdu en 1763.", "confusion": 70},
      {"text": "La Louisiane", "correct": false, "explanation": "Cédée en 1803.", "confusion": 75},
      {"text": "Des possessions en Inde", "correct": true, "explanation": "Début du déclin français en Inde.", "confusion": 40},
      {"text": "Saint-Domingue", "correct": false, "explanation": "Devenue indépendante en 1804.", "confusion": 80}
    ]
  },
   {
    "id": 81,
    "question": "Quel code juridique fut promulgué sous Napoléon en 1804 ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Code Pénal", "correct": false, "explanation": "Promulgué en 1810, pas en 1804.", "confusion": 60},
      {"text": "Code Civil", "correct": true, "explanation": "Aussi appelé 'Code Napoléon', base du droit civil moderne.", "confusion": 10},
      {"text": "Code du Travail", "correct": false, "explanation": "Créé bien plus tard, sous la IIIe République.", "confusion": 75},
      {"text": "Code de Commerce", "correct": false, "explanation": "Établi en 1807, après le Code Civil.", "confusion": 55}
    ]
  },
  {
    "id": 82,
    "question": "Où la France a-t-elle effectué ses premiers essais nucléaires en 1960 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "En Polynésie française", "correct": false, "explanation": "Les essais y ont eu lieu à partir de 1966.", "confusion": 70},
      {"text": "Dans le Sahara algérien", "correct": true, "explanation": "Premier essai 'Gerboise Bleue' le 13 février 1960.", "confusion": 25},
      {"text": "À Mururoa", "correct": false, "explanation": "Site utilisé plus tard pour les essais atmosphériques.", "confusion": 65},
      {"text": "En Guyane", "correct": false, "explanation": "Aucun essai nucléaire n'y a été réalisé.", "confusion": 85}
    ]
  },
  {
    "id": 83,
    "question": "Quel mouvement de résistance fut actif dans les campagnes françaises pendant la Seconde Guerre mondiale ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Les Maquis", "correct": true, "explanation": "Groupes de résistants cachés dans les zones rurales.", "confusion": 20},
      {"text": "La Milice", "correct": false, "explanation": "Organisation collaborationniste.", "confusion": 75},
      {"text": "Les Francs-Tireurs", "correct": false, "explanation": "Terme générique pour les résistants urbains.", "confusion": 65},
      {"text": "L'ORA", "correct": false, "explanation": "Organisation de résistance de l'armée, pas spécifiquement rurale.", "confusion": 70}
    ]
  },
  {
    "id": 84,
    "question": "Qui a pris la première photographie permanente de l'histoire en France ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Louis Daguerre", "correct": false, "explanation": "Inventeur du daguerréotype en 1839.", "confusion": 70},
      {"text": "Nicéphore Niépce", "correct": true, "explanation": "'Point de vue du Gras' réalisé en 1826.", "confusion": 30},
      {"text": "Gustave Le Gray", "correct": false, "explanation": "Pionnier de la photographie maritime.", "confusion": 65},
      {"text": "Henri Cartier-Bresson", "correct": false, "explanation": "Photographe du XXe siècle.", "confusion": 85}
    ]
  },
  {
    "id": 85,
    "question": "Quelle crise sociale majeure a secoué les banlieues françaises en 2005 ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Les manifestations contre le CPE", "correct": false, "explanation": "Crise étudiante de 2006.", "confusion": 60},
      {"text": "Les émeutes des Minguettes", "correct": false, "explanation": "Émeutes urbaines de 1981 près de Lyon.", "confusion": 70},
      {"text": "Les émeutes de 2005", "correct": true, "explanation": "Déclenchées après la mort de Zyed Benna et Bouna Traoré.", "confusion": 25},
      {"text": "Le mouvement des Gilets jaunes", "correct": false, "explanation": "Mouvement social de 2018-2019.", "confusion": 65}
    ]
  },
  {
    "id": 86,
    "question": "Quelle monnaie fut utilisée dans les colonies françaises d'Afrique jusqu'en 2023 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Le Franc CFA", "correct": true, "explanation": "Remplacé par l'Eco dans certains pays à partir de 2020.", "confusion": 30},
      {"text": "Le Franc Pacifique", "correct": false, "explanation": "Toujours utilisé en Nouvelle-Calédonie et Polynésie.", "confusion": 65},
      {"text": "Le Franc malien", "correct": false, "explanation": "Monnaie historique du Mali indépendant.", "confusion": 80},
      {"text": "Le Franc guinéen", "correct": false, "explanation": "Utilisé en Guinée après l'indépendance.", "confusion": 75}
    ]
  },
  {
    "id": 87,
    "question": "Quelle bataille de la guerre de Cent Ans vit la défaite écrasante des Français face aux Anglais en 1415 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Bataille de Castillon", "correct": false, "explanation": "Victoire française finale en 1453.", "confusion": 65},
      {"text": "Bataille d'Azincourt", "correct": true, "explanation": "Désastre français malgré une supériorité numérique.", "confusion": 25},
      {"text": "Bataille de Poitiers", "correct": false, "explanation": "Défaite française de 1356.", "confusion": 70},
      {"text": "Bataille de Crécy", "correct": false, "explanation": "Défaite de 1346 pendant la même guerre.", "confusion": 60}
    ]
  },
  {
    "id": 88,
    "question": "Quel service français de vidéotex a précédé internet dans les années 1980 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Minitel", "correct": true, "explanation": "Terminaux installés dans les foyers jusqu'en 2012.", "confusion": 20},
      {"text": "Télétel", "correct": false, "explanation": "Nom du réseau, pas du service.", "confusion": 50},
      {"text": "France Telecom", "correct": false, "explanation": "Opérateur historique, pas un service.", "confusion": 75},
      {"text": "Transpac", "correct": false, "explanation": "Réseau de transmission de données.", "confusion": 80}
    ]
  },
  {
    "id": 89,
    "question": "Contre quelle hérésie médiévale fut lancée la croisade des Albigeois ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Le catharisme", "correct": true, "explanation": "Hérésie dualiste dans le Languedoc (XIIIe siècle).", "confusion": 30},
      {"text": "Le valdéisme", "correct": false, "explanation": "Mouvement pauvre de Lyon, persécuté plus tard.", "confusion": 70},
      {"text": "Le jansénisme", "correct": false, "explanation": "Courant théologique du XVIIe siècle.", "confusion": 80},
      {"text": "Le protestantisme", "correct": false, "explanation": "Apparu au XVIe siècle.", "confusion": 85}
    ]
  },
  {
    "id": 90,
    "question": "Quel pays africain fut la cible de l'opération Serval menée par la France en 2013 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Le Mali", "correct": true, "explanation": "Intervention contre les groupes jihadistes au nord.", "confusion": 20},
      {"text": "La Côte d'Ivoire", "correct": false, "explanation": "Opération Licorne en 2002-2015.", "confusion": 65},
      {"text": "La Centrafrique", "correct": false, "explanation": "Opération Sangaris en 2013.", "confusion": 70},
      {"text": "Le Tchad", "correct": false, "explanation": "Base française permanente, pas d'intervention majeure en 2013.", "confusion": 75}
    ]
  },
  {
    "id": 91,
    "question": "Quand le Louvre est-il officiellement devenu un musée public ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "1793", "correct": true, "explanation": "Ouvert sous la Révolution après la confiscation des biens royaux.", "confusion": 25},
      {"text": "1682", "correct": false, "explanation": "Date à laquelle Louis XIV quitte le Louvre pour Versailles.", "confusion": 70},
      {"text": "1815", "correct": false, "explanation": "Restauration après Napoléon, pas d'ouverture.", "confusion": 65},
      {"text": "1989", "correct": false, "explanation": "Inauguration de la pyramide, pas de l'ouverture.", "confusion": 80}
    ]
  },
  {
    "id": 92,
    "question": "Quelle exposition universelle a popularisé l'Art Nouveau à Paris en 1900 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Exposition de 1889", "correct": false, "explanation": "Célèbre pour la Tour Eiffel.", "confusion": 70},
      {"text": "Exposition de 1900", "correct": true, "explanation": "Vitrine du style Art Nouveau avec le métro parisien.", "confusion": 25},
      {"text": "Exposition de 1925", "correct": false, "explanation": "Consacrée aux Arts Décoratifs (Art Déco).", "confusion": 60},
      {"text": "Exposition de 1937", "correct": false, "explanation": "Connue pour le Pavillon espagnol de Guernica.", "confusion": 75}
    ]
  },
  {
    "id": 93,
    "question": "Quel conflit international de 1956 impliqua la France aux côtés d'Israël et du Royaume-Uni ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Guerre du Kippour", "correct": false, "explanation": "Conflit de 1973.", "confusion": 65},
      {"text": "Crise de Suez", "correct": true, "explanation": "Intervention pour reprendre le canal nationalisé par Nasser.", "confusion": 30},
      {"text": "Guerre d'Algérie", "correct": false, "explanation": "Conflit indépendantiste (1954-1962).", "confusion": 75},
      {"text": "Guerre des Six Jours", "correct": false, "explanation": "Conflit israélo-arabe de 1967.", "confusion": 70}
    ]
  },
  {
    "id": 94,
    "question": "Quel médecin français inventa le stéthoscope en 1816 ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "René Laënnec", "correct": true, "explanation": "Inventeur du premier stéthoscope en bois.", "confusion": 25},
      {"text": "Louis Pasteur", "correct": false, "explanation": "Pionnier de la microbiologie (XIXe siècle).", "confusion": 70},
      {"text": "Alexis Carrel", "correct": false, "explanation": "Prix Nobel pour les sutures vasculaires (1912).", "confusion": 75},
      {"text": "Philippe Pinel", "correct": false, "explanation": "Réformateur de la psychiatrie au XVIIIe siècle.", "confusion": 65}
    ]
  },
  {
    "id": 95,
    "question": "Quelle loi française de 1975 dépénalisa partiellement l'avortement ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Neuwirth", "correct": false, "explanation": "Autorisa la contraception en 1967.", "confusion": 65},
      {"text": "Loi Veil", "correct": true, "explanation": "Portée par Simone Veil, votée après de vifs débats.", "confusion": 20},
      {"text": "Loi Roudy", "correct": false, "explanation": "Lutte contre les discriminations sexuelles (1983).", "confusion": 70},
      {"text": "Loi Taubira", "correct": false, "explanation": "Reconnaissance de l'esclavage comme crime contre l'humanité (2001).", "confusion": 80}
    ]
  },
  {
    "id": 96,
    "question": "Quel traité de 1494 partagea les territoires du Nouveau Monde entre Espagne et Portugal ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Traité de Tordesillas", "correct": true, "explanation": "Ligne de démarcation sous l'égide du pape.", "confusion": 35},
      {"text": "Traité de Saragosse", "correct": false, "explanation": "Complément en 1529 pour l'océan Pacifique.", "confusion": 70},
      {"text": "Traité de Cateau-Cambrésis", "correct": false, "explanation": "Fin des guerres d'Italie en 1559.", "confusion": 75},
      {"text": "Traité d'Utrecht", "correct": false, "explanation": "1713, guerre de Succession d'Espagne.", "confusion": 80}
    ]
  },
  {
    "id": 97,
    "question": "Quel explorateur français disparut en tentant de traverser le Sahara en 1828 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "René Caillié", "correct": false, "explanation": "Atteignit Tombouctou en 1828 et survécut.", "confusion": 65},
      {"text": "Alexandre Gordon Laing", "correct": false, "explanation": "Explorateur britannique tué en 1826.", "confusion": 70},
      {"text": "Paul Flatters", "correct": false, "explanation": "Tué lors d'une mission au Sahara en 1881.", "confusion": 75},
      {"text": "Auguste Caillé", "correct": true, "explanation": "Mort de soif lors d'une expédition, orthographe souvent confondue.", "confusion": 40}
    ]
  },
  {
    "id": 98,
    "question": "Quelle invention majeure est attribuée à Blaise Pascal en 1642 ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Le télescope", "correct": false, "explanation": "Inventé par Galilée et d'autres.", "confusion": 75},
      {"text": "La machine à calculer", "correct": true, "explanation": "La 'Pascaline', première calculatrice mécanique.", "confusion": 25},
      {"text": "Le baromètre", "correct": false, "explanation": "Inventé par Torricelli en 1643.", "confusion": 65},
      {"text": "Le microscope", "correct": false, "explanation": "Développé par Janssen au XVIe siècle.", "confusion": 70}
    ]
  },
  {
    "id": 99,
    "question": "Quelle ville française fut la capitale des ducs de Bourgogne au XVe siècle ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Dijon", "correct": true, "explanation": "Centre politique et culturel des ducs Valois.", "confusion": 30},
      {"text": "Lyon", "correct": false, "explanation": "Ville stratégique sous les rois de France.", "confusion": 65},
      {"text": "Metz", "correct": false, "explanation": "Importante ville lorraine.", "confusion": 75},
      {"text": "Amiens", "correct": false, "explanation": "Ville picarde, pas liée aux Bourguignons.", "confusion": 80}
    ]
  },
  {
    "id": 100,
    "question": "Quel architecte conçut la ville de Richelieu (Indre-et-Loire) au XVIIe siècle ?",
    "difficulty": 85,
    "points": 30,
    "answers": [
      {"text": "Jacques Lemercier", "correct": true, "explanation": "Architecte du cardinal, créa la ville idéale.", "confusion": 40},
      {"text": "François Mansart", "correct": false, "explanation": "Célèbre pour ses châteaux et toits 'à la Mansart'.", "confusion": 70},
      {"text": "André Le Nôtre", "correct": false, "explanation": "Jardins de Versailles, pas d'urbanisme.", "confusion": 75},
      {"text": "Claude Perrault", "correct": false, "explanation": "Colonne du Louvre, postérieur à Richelieu.", "confusion": 80}
    ]
  },
  {
    "id": 101,
    "question": "Qui fut le premier astronaute français à voyager dans l'espace ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Thomas Pesquet", "correct": false, "explanation": "Premier Français dans l'ISS en 2016, mais pas le premier dans l'espace.", "confusion": 70},
      {"text": "Jean-Loup Chrétien", "correct": true, "explanation": "Premier Français dans l'espace en 1982 à bord de Soyouz T-6.", "confusion": 25},
      {"text": "Claudie Haigneré", "correct": false, "explanation": "Première Française dans l'espace en 1996.", "confusion": 60},
      {"text": "Patrick Baudry", "correct": false, "explanation": "Deuxième Français dans l'espace en 1985.", "confusion": 75}
    ]
  },
  {
    "id": 102,
    "question": "En quelle année la France a-t-elle légalisé le mariage homosexuel ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "2005", "correct": false, "explanation": "Année des émeutes urbaines, pas de lien.", "confusion": 75},
      {"text": "2013", "correct": true, "explanation": "Loi ouvrant le mariage aux couples de même sexe sous François Hollande.", "confusion": 10},
      {"text": "1999", "correct": false, "explanation": "Création du PACS (pacte civil de solidarité).", "confusion": 65},
      {"text": "2020", "correct": false, "explanation": "Aucune réforme majeure cette année-là.", "confusion": 85}
    ]
  },
  {
    "id": 103,
    "question": "Quel président français lança la force de frappe nucléaire ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Charles de Gaulle", "correct": true, "explanation": "Décision en 1960 pour une dissuasion nucléaire indépendante.", "confusion": 20},
      {"text": "Georges Pompidou", "correct": false, "explanation": "A poursuivi la politique gaulliste.", "confusion": 65},
      {"text": "Valéry Giscard d'Estaing", "correct": false, "explanation": "Modernisation des missiles dans les années 1970.", "confusion": 70},
      {"text": "François Mitterrand", "correct": false, "explanation": "Mainien de la force de dissuasion.", "confusion": 60}
    ]
  },
  {
    "id": 104,
    "question": "Quel est le nom du premier satellite français lancé dans l'espace ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Astérix", "correct": true, "explanation": "Lancé en 1965 par une fusée Diamant.", "confusion": 30},
      {"text": "Spot-1", "correct": false, "explanation": "Satellite d'observation lancé en 1986.", "confusion": 70},
      {"text": "Ariane 1", "correct": false, "explanation": "Première fusée de la série Ariane en 1979.", "confusion": 65},
      {"text": "TDF-1", "correct": false, "explanation": "Satellite de télécommunication de 1988.", "confusion": 75}
    ]
  },
  {
    "id": 105,
    "question": "Qui a fondé le Festival de Cannes en 1946 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "André Malraux", "correct": false, "explanation": "Ministre de la Culture sous De Gaulle.", "confusion": 70},
      {"text": "Philippe Erlanger", "correct": true, "explanation": "Fondateur sous l'égide du ministère de l'Éducation nationale.", "confusion": 40},
      {"text": "François Truffaut", "correct": false, "explanation": "Cinéaste de la Nouvelle Vague.", "confusion": 75},
      {"text": "Jean Zay", "correct": false, "explanation": "Projet interrompu par la Seconde Guerre mondiale.", "confusion": 65}
    ]
  },
  {
    "id": 106,
    "question": "Quelle crise politique conduisit à l'adoption de la Cinquième République en 1958 ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "La crise de Suez", "correct": false, "explanation": "Conflit international en 1956.", "confusion": 65},
      {"text": "Le putsch d'Alger", "correct": true, "explanation": "Crise algérienne et pression des militaires.", "confusion": 25},
      {"text": "Mai 68", "correct": false, "explanation": "Crise sociale postérieure (1968).", "confusion": 75},
      {"text": "L'affaire Dreyfus", "correct": false, "explanation": "Crise de la fin du XIXe siècle.", "confusion": 85}
    ]
  },
  {
    "id": 107,
    "question": "Quelle Française fut une figure majeure du mouvement suffragiste ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Simone Veil", "correct": false, "explanation": "Ministre des années 1970, défenseuse de l'IVG.", "confusion": 60},
      {"text": "Hubertine Auclert", "correct": true, "explanation": "Pionnière du féminisme et du droit de vote des femmes.", "confusion": 35},
      {"text": "Olympe de Gouges", "correct": false, "explanation": "Révolutionnaire, auteure de la Déclaration des droits de la femme (1791).", "confusion": 65},
      {"text": "Louise Weiss", "correct": false, "explanation": "Militante pour le vote des femmes dans les années 1930.", "confusion": 55}
    ]
  },
  {
    "id": 108,
    "question": "Quelle bataille de la Seconde Guerre mondiale vit les Forces françaises libres résister héroïquement en 1942 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Bataille de Bir Hakeim", "correct": true, "explanation": "Victoire défensive contre l'Afrika Korps en Libye.", "confusion": 30},
      {"text": "Bataille de Dunkerque", "correct": false, "explanation": "Évacuation alliée en 1940.", "confusion": 70},
      {"text": "Bataille de Monte Cassino", "correct": false, "explanation": "1944 en Italie avec participation française.", "confusion": 65},
      {"text": "Bataille de Koursk", "correct": false, "explanation": "Confrontation germano-soviétique en 1943.", "confusion": 80}
    ]
  },
  {
    "id": 109,
    "question": "Quelle fut la première colonie française à obtenir son indépendance après 1945 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "L'Algérie", "correct": false, "explanation": "Indépendance en 1962 après une longue guerre.", "confusion": 60},
      {"text": "Le Vietnam", "correct": true, "explanation": "Indépendance en 1954 après la bataille de Diên Biên Phu.", "confusion": 35},
      {"text": "Le Maroc", "correct": false, "explanation": "Indépendance en 1956.", "confusion": 65},
      {"text": "La Tunisie", "correct": false, "explanation": "Indépendance également en 1956.", "confusion": 70}
    ]
  },
  {
    "id": 110,
    "question": "Qui a conçu les entrées emblématiques du métro parisien ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Gustave Eiffel", "correct": false, "explanation": "Ingénieur de la tour éponyme.", "confusion": 70},
      {"text": "Hector Guimard", "correct": true, "explanation": "Style Art Nouveau, réalisées entre 1900 et 1913.", "confusion": 25},
      {"text": "Le Corbusier", "correct": false, "explanation": "Architecte moderniste, postérieur.", "confusion": 75},
      {"text": "Baron Haussmann", "correct": false, "explanation": "Urbaniste du Second Empire.", "confusion": 65}
    ]
  },
  {
    "id": 111,
    "question": "Qu'est-ce que le PACS dans le droit français ?",
    "difficulty": 45,
    "points": 15,
    "answers": [
      {"text": "Un contrat de travail", "correct": false, "explanation": "Aucun lien avec l'emploi.", "confusion": 80},
      {"text": "Un pacte civil de solidarité", "correct": true, "explanation": "Créé en 1999 pour les couples non mariés.", "confusion": 10},
      {"text": "Un programme d'aide sociale", "correct": false, "explanation": "Ne concerne pas les couples.", "confusion": 70},
      {"text": "Un accord syndical", "correct": false, "explanation": "Terme lié au droit du travail.", "confusion": 75}
    ]
  },
  {
    "id": 112,
    "question": "Quel inventeur français a mis au point le système d'écriture pour aveugles ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Louis Braille", "correct": true, "explanation": "Système de points en relief développé en 1829.", "confusion": 20},
      {"text": "Valentin Haüy", "correct": false, "explanation": "Pionnier de l'éducation des aveugles, précurseur.", "confusion": 65},
      {"text": "Charles Barbier", "correct": false, "explanation": "Inventa un système antérieur adapté par Braille.", "confusion": 60},
      {"text": "Louis Pasteur", "correct": false, "explanation": "Scientifique, travaux sur les vaccins.", "confusion": 85}
    ]
  },
  {
    "id": 113,
    "question": "Quel était l'objectif principal de la ligne Maginot ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Protéger la frontière allemande", "correct": true, "explanation": "Construite entre 1928 et 1940 pour éviter une invasion.", "confusion": 25},
      {"text": "Contrôler les colonies", "correct": false, "explanation": "Aucun lien avec l'outre-mer.", "confusion": 75},
      {"text": "Défendre Paris", "correct": false, "explanation": "Positionnée à l'est, pas autour de la capitale.", "confusion": 65},
      {"text": "Surveiller la Méditerranée", "correct": false, "explanation": "Fortifications terrestres, pas maritimes.", "confusion": 80}
    ]
  },
  {
    "id": 114,
    "question": "Quelle région française a été rattachée en dernier au territoire national ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "La Savoie", "correct": false, "explanation": "Rattachée en 1860 avec Nice.", "confusion": 65},
      {"text": "La Corse", "correct": false, "explanation": "Devenue française en 1769.", "confusion": 70},
      {"text": "Comté de Nice", "correct": false, "explanation": "Rattaché en 1860.", "confusion": 60},
      {"text": "Roque-Orion (Jérusalem)", "correct": false, "explanation": "Piège : aucun territoire récent. La réponse correcte est *Mayotte* (rattachée en 2011).", "confusion": 90}
    ]
  },
  {
    "id": 115,
    "question": "Quel est le rôle du Conseil constitutionnel en France ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Contrôler la constitutionnalité des lois", "correct": true, "explanation": "Créé en 1958, vérifie la conformité à la Constitution.", "confusion": 20},
      {"text": "Diriger l'armée", "correct": false, "explanation": "Rôle dévolu au président de la République.", "confusion": 80},
      {"text": "Élaborer le budget", "correct": false, "explanation": "Mission du gouvernement et du Parlement.", "confusion": 75},
      {"text": "Représenter les régions", "correct": false, "explanation": "Rôle du Conseil économique, social et environnemental.", "confusion": 70}
    ]
  },
  {
    "id": 116,
    "question": "Qui fut la première femme Première ministre en France ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Édith Cresson", "correct": true, "explanation": "Nommée par François Mitterrand en 1991.", "confusion": 30},
      {"text": "Simone Veil", "correct": false, "explanation": "Ministre de la Santé, pas Première ministre.", "confusion": 70},
      {"text": "Ségolène Royal", "correct": false, "explanation": "Candidat à la présidentielle de 2007.", "confusion": 65},
      {"text": "Christine Lagarde", "correct": false, "explanation": "Ministre de l'Économie, puis directrice du FMI.", "confusion": 60}
    ]
  },
  {
    "id": 117,
    "question": "Quel artiste français est associé au mouvement pointilliste ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Claude Monet", "correct": false, "explanation": "Figure de l'impressionnisme.", "confusion": 70},
      {"text": "Georges Seurat", "correct": true, "explanation": "Théoricien du divisionnisme (ex. *Un dimanche après-midi à l'Île de la Grande Jatte*).", "confusion": 25},
      {"text": "Paul Cézanne", "correct": false, "explanation": "Père de l'art moderne, postimpressionniste.", "confusion": 65},
      {"text": "Henri Matisse", "correct": false, "explanation": "Chef de file du fauvisme.", "confusion": 75}
    ]
  },
  {
    "id": 118,
    "question": "Quel accord social fut signé lors des événements de Mai 68 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Accords de Grenelle", "correct": true, "explanation": "Négociations entre gouvernement, syndicats et patronat pour des avancées sociales.", "confusion": 30},
      {"text": "Accords Matignon", "correct": false, "explanation": "Signés en 1936 sous le Front populaire.", "confusion": 65},
      {"text": "Accords d'Évian", "correct": false, "explanation": "Mettent fin à la guerre d'Algérie en 1962.", "confusion": 75},
      {"text": "Accords de Bretton Woods", "correct": false, "explanation": "Accords monétaires internationaux de 1944.", "confusion": 80}
    ]
  },
  {
    "id": 119,
    "question": "Quelle île française est réputée pour sa production de vanille ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "La Réunion", "correct": true, "explanation": "Vanille Bourbon produite dans l'océan Indien.", "confusion": 25},
      {"text": "La Martinique", "correct": false, "explanation": "Connue pour le rhum, pas la vanille.", "confusion": 70},
      {"text": "Tahiti", "correct": false, "explanation": "Produit une vanille différente (Vanilla tahitensis).", "confusion": 65},
      {"text": "La Guadeloupe", "correct": false, "explanation": "Production mineure de vanille.", "confusion": 75}
    ]
  },
  {
    "id": 120,
    "question": "Quelle loi française interdit le port de signes religieux ostensibles à l'école ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi de 1905", "correct": false, "explanation": "Loi de séparation des Églises et de l'État.", "confusion": 70},
      {"text": "Loi de 2004", "correct": true, "explanation": "Interdiction des signes religieux dans les écoles publiques.", "confusion": 30},
      {"text": "Loi de 2010", "correct": false, "explanation": "Interdiction du voile intégral dans l'espace public.", "confusion": 65},
      {"text": "Loi Jospin de 1989", "correct": false, "explanation": "Encadrait le port de signes religieux sans interdiction.", "confusion": 55}
    ]
  },
  {
    "id": 121,
    "question": "Quelle exploratrice française a traversé l'Afrique de l'Ouest à cheval au XIXe siècle ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Alexandra David-Néel", "correct": false, "explanation": "Connue pour ses voyages en Asie au XXe siècle.", "confusion": 60},
      {"text": "Jane Dieulafoy", "correct": false, "explanation": "Archéologue au Moyen-Orient.", "confusion": 70},
      {"text": "Anne Raffenel", "correct": true, "explanation": "Première Européenne à décrire les sources du Niger (1850).", "confusion": 30},
      {"text": "Isabelle Eberhardt", "correct": false, "explanation": "Exploratrice en Afrique du Nord, début XXe siècle.", "confusion": 65}
    ]
  },
  {
    "id": 122,
    "question": "Quel traité mit fin à la guerre franco-anglaise de 1627-1629 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Paix d'Alès", "correct": false, "explanation": "Conclut les guerres de Religion en 1629.", "confusion": 65},
      {"text": "Traité de Suze", "correct": true, "explanation": "Met fin au conflit autour de La Rochelle.", "confusion": 40},
      {"text": "Édit de Nantes", "correct": false, "explanation": "1598, antérieur au conflit.", "confusion": 75},
      {"text": "Traité des Pyrénées", "correct": false, "explanation": "1659, postérieur.", "confusion": 70}
    ]
  },
  {
    "id": 123,
    "question": "Quelle invention du français Louis Lumière révolutionna l'industrie textile ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Le métier à tisser mécanique", "correct": false, "explanation": "Inventé par Joseph Marie Jacquard.", "confusion": 60},
      {"text": "La machine à coudre", "correct": false, "explanation": "Perfectionnée par Barthélemy Thimonnier.", "confusion": 70},
      {"text": "Le procédé de photographie couleur", "correct": true, "explanation": "Brevet Autochrome en 1903.", "confusion": 35},
      {"text": "Le moteur à combustion", "correct": false, "explanation": "Développé par Lenoir et Daimler.", "confusion": 85}
    ]
  },
  {
    "id": 124,
    "question": "Quel roi fonda le Collège de France en 1530 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "François Ier", "correct": true, "explanation": "Institution humaniste nommée 'Collège royal'.", "confusion": 25},
      {"text": "Henri IV", "correct": false, "explanation": "Fonda l'université de Douai.", "confusion": 70},
      {"text": "Louis XIII", "correct": false, "explanation": "Règne postérieur (1610-1643).", "confusion": 75},
      {"text": "Charles IX", "correct": false, "explanation": "Règne pendant les guerres de Religion.", "confusion": 65}
    ]
  },
  {
    "id": 125,
    "question": "Quelle crise agricole déclencha la révolte des vignerons du Languedoc en 1907 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "La surproduction de blé", "correct": false, "explanation": "Crise différente (années 1930).", "confusion": 60},
      {"text": "Le phylloxéra", "correct": false, "explanation": "Dévastation antérieure (fin XIXe siècle).", "confusion": 65},
      {"text": "La fraude des vins", "correct": true, "explanation": "Colère contre les vins falsifiés et importations.", "confusion": 30},
      {"text": "La taxation excessive", "correct": false, "explanation": "Facteur secondaire de la révolte.", "confusion": 55}
    ]
  },
  {
    "id": 126,
    "question": "Quel architecte conçut le viaduc de Millau ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Gustave Eiffel", "correct": false, "explanation": "Décédé en 1923.", "confusion": 70},
      {"text": "Norman Foster", "correct": false, "explanation": "Architecte britannique non impliqué.", "confusion": 65},
      {"text": "Michel Virlogeux", "correct": true, "explanation": "Ingénieur associé à Norman Foster pour le projet.", "confusion": 40},
      {"text": "Jean Nouvel", "correct": false, "explanation": "Architecte contemporain non lié au projet.", "confusion": 75}
    ]
  },
  {
    "id": 127,
    "question": "Quelle loi française interdit le travail des enfants de moins de 8 ans en 1841 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Loi Guizot", "correct": false, "explanation": "Sur l'éducation primaire en 1833.", "confusion": 60},
      {"text": "Loi Falloux", "correct": false, "explanation": "Sur l'enseignement en 1850.", "confusion": 65},
      {"text": "Loi Villermé", "correct": true, "explanation": "Inspirée par le médecin Louis-René Villermé.", "confusion": 30},
      {"text": "Loi Waldeck-Rousseau", "correct": false, "explanation": "Sur les syndicats en 1884.", "confusion": 70}
    ]
  },
  {
    "id": 128,
    "question": "Quel explorateur français disparut en cherchant la source du Niger en 1796 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "René Caillié", "correct": false, "explanation": "Explora Tombouctou en 1828.", "confusion": 65},
      {"text": "Mungo Park", "correct": false, "explanation": "Explorateur écossais.", "confusion": 70},
      {"text": "Pierre Savorgnan de Brazza", "correct": false, "explanation": "Explora le Congo au XIXe siècle.", "confusion": 75},
      {"text": "Mungo Park (parrainé par la France)", "correct": true, "explanation": "Mission française, mort dans des circonstances mystérieuses.", "confusion": 40}
    ]
  },
  {
    "id": 129,
    "question": "Quelle bataille navale de 1690 vit la victoire française contre les Anglo-Hollandais ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Bataille de la Hougue", "correct": false, "explanation": "Défaite française en 1692.", "confusion": 60},
      {"text": "Bataille de Beachy Head", "correct": true, "explanation": "Victoire de Tourville sous Louis XIV.", "confusion": 35},
      {"text": "Bataille de Barfleur", "correct": false, "explanation": "Autre engagement de la même guerre.", "confusion": 65},
      {"text": "Bataille de Trafalgar", "correct": false, "explanation": "1805, époque napoléonienne.", "confusion": 80}
    ]
  },
  {
    "id": 130,
    "question": "Quel philosophe français influença la Déclaration des droits de l'homme de 1789 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Jean-Jacques Rousseau", "correct": true, "explanation": "Théorie du contrat social.", "confusion": 25},
      {"text": "Auguste Comte", "correct": false, "explanation": "Philosophe du XIXe siècle.", "confusion": 70},
      {"text": "Michel Foucault", "correct": false, "explanation": "Philosophe du XXe siècle.", "confusion": 75},
      {"text": "Simone de Beauvoir", "correct": false, "explanation": "Féministe du XXe siècle.", "confusion": 85}
    ]
  },
  {
    "id": 131,
    "question": "Quelle île française fut une base de pirates au XVIIe siècle ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "La Martinique", "correct": false, "explanation": "Colonie sucrière.", "confusion": 70},
      {"text": "Saint-Pierre-et-Miquelon", "correct": false, "explanation": "Base de pêche.", "confusion": 75},
      {"text": "La Tortue (Haïti)", "correct": true, "explanation": "Repaire de boucaniers près d'Hispaniola.", "confusion": 30},
      {"text": "Mayotte", "correct": false, "explanation": "Colonie dans l'océan Indien.", "confusion": 80}
    ]
  },
  {
    "id": 132,
    "question": "Quel traité donna la Corse à la France en 1768 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Traité de Versailles", "correct": true, "explanation": "Signé avec Gênes, créancière de la France.", "confusion": 40},
      {"text": "Traité d'Utrecht", "correct": false, "explanation": "1713, conflit espagnol.", "confusion": 75},
      {"text": "Traité de Paris", "correct": false, "explanation": "1763, fin de la guerre de Sept Ans.", "confusion": 65},
      {"text": "Traité de Cateau-Cambrésis", "correct": false, "explanation": "1559, guerres d'Italie.", "confusion": 80}
    ]
  },
  {
    "id": 133,
    "question": "Quelle révolte paysanne éclata en Bretagne en 1675 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "La Jacquerie", "correct": false, "explanation": "Révolte médiévale de 1358.", "confusion": 70},
      {"text": "La révolte des Bonnets rouges", "correct": true, "explanation": "Soulèvement antifiscal sous Louis XIV.", "confusion": 35},
      {"text": "La guerre des Farines", "correct": false, "explanation": "1775, crise frumentaire.", "confusion": 60},
      {"text": "La révolte des Camisards", "correct": false, "explanation": "1702-1704, guerre des Cévennes.", "confusion": 65}
    ]
  },
  {
    "id": 134,
    "question": "Quel explorateur français cartographia la Louisiane au XVIIe siècle ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Samuel de Champlain", "correct": false, "explanation": "Fondateur de Québec.", "confusion": 70},
      {"text": "René-Robert Cavelier de La Salle", "correct": true, "explanation": "Descendit le Mississippi jusqu'au golfe du Mexique.", "confusion": 30},
      {"text": "Jacques Marquette", "correct": false, "explanation": "Explora le Mississippi avec Louis Jolliet.", "confusion": 65},
      {"text": "Jean Nicolet", "correct": false, "explanation": "Explora les Grands Lacs.", "confusion": 75}
    ]
  },
  {
    "id": 135,
    "question": "Quelle loi de 1882 rendit l'école laïque, gratuite et obligatoire ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Guizot", "correct": false, "explanation": "1833, école primaire pour garçons.", "confusion": 70},
      {"text": "Loi Falloux", "correct": false, "explanation": "1850, favorise l'enseignement religieux.", "confusion": 65},
      {"text": "Loi Ferry", "correct": true, "explanation": "Jules Ferry, fondateur de l'école républicaine.", "confusion": 20},
      {"text": "Loi Astier", "correct": false, "explanation": "1919, sur l'enseignement technique.", "confusion": 75}
    ]
  },
  {
    "id": 136,
    "question": "Quel peintre français fonda le mouvement fauviste ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Henri Matisse", "correct": true, "explanation": "Chef de file avec *Luxe, Calme et Volupté*.", "confusion": 25},
      {"text": "Pablo Picasso", "correct": false, "explanation": "Cubisme, mouvement différent.", "confusion": 70},
      {"text": "André Derain", "correct": false, "explanation": "Fauviste mais pas fondateur.", "confusion": 60},
      {"text": "Georges Braque", "correct": false, "explanation": "Cubiste, collaborateur de Picasso.", "confusion": 65}
    ]
  },
  {
    "id": 137,
    "question": "Quelle catastrophe industrielle frappa Toulouse en 2001 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Explosion de l'usine AZF", "correct": true, "explanation": "300 tonnes de nitrate d'ammonium explosent.", "confusion": 20},
      {"text": "Marée noire de l'Erika", "correct": false, "explanation": "1999, naufrage pétrolier.", "confusion": 75},
      {"text": "Catastrophe de Malpasset", "correct": false, "explanation": "Rupture de barrage en 1959.", "confusion": 70},
      {"text": "Incendie de Lubrizol", "correct": false, "explanation": "Usine chimique à Rouen en 2019.", "confusion": 65}
    ]
  },
  {
    "id": 138,
    "question": "Quelle reine de France fut surnommée 'l'Autrichienne' pendant la Révolution ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Marie Leszczyńska", "correct": false, "explanation": "Épouse de Louis XV.", "confusion": 70},
      {"text": "Marie-Antoinette", "correct": true, "explanation": "Originaire de Vienne, détestée par le peuple.", "confusion": 15},
      {"text": "Anne d'Autriche", "correct": false, "explanation": "Mère de Louis XIV.", "confusion": 65},
      {"text": "Marie de Médicis", "correct": false, "explanation": "Épouse d'Henri IV.", "confusion": 75}
    ]
  },
  {
    "id": 139,
    "question": "Quel écrivain français refusa le prix Nobel de littérature en 1964 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Albert Camus", "correct": false, "explanation": "L'a reçu en 1957.", "confusion": 60},
      {"text": "Jean-Paul Sartre", "correct": true, "explanation": "Refus au nom de son indépendance.", "confusion": 30},
      {"text": "André Gide", "correct": false, "explanation": "Prix Nobel 1947.", "confusion": 70},
      {"text": "François Mauriac", "correct": false, "explanation": "Prix Nobel 1952.", "confusion": 65}
    ]
  },
  {
    "id": 140,
    "question": "Quelle ville fut la capitale des Francs saliens au Ve siècle ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Paris", "correct": false, "explanation": "Devenue capitale sous les Capétiens.", "confusion": 70},
      {"text": "Reims", "correct": false, "explanation": "Lieu de sacre, pas de capitale.", "confusion": 65},
      {"text": "Tournai", "correct": true, "explanation": "Résidence de Childéric Ier, père de Clovis.", "confusion": 40},
      {"text": "Metz", "correct": false, "explanation": "Importante ville mérovingienne.", "confusion": 60}
    ]
  },
  {
    "id": 141,
    "question": "Quel traité établit la paix entre la France et l'Espagne en 1659 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Traité des Pyrénées", "correct": true, "explanation": "Fixe la frontière actuelle et marie Louis XIV.", "confusion": 30},
      {"text": "Traité de Westphalie", "correct": false, "explanation": "1648, fin de la guerre de Trente Ans.", "confusion": 65},
      {"text": "Traité d'Utrecht", "correct": false, "explanation": "1713, guerre de Succession d'Espagne.", "confusion": 70},
      {"text": "Traité de Cateau-Cambrésis", "correct": false, "explanation": "1559, fin des guerres d'Italie.", "confusion": 75}
    ]
  },
  {
    "id": 142,
    "question": "Quelle loi de 1972 créa les régions françaises ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Loi Defferre", "correct": true, "explanation": "Décentralisation sous Pompidou.", "confusion": 35},
      {"text": "Loi NOTRe", "correct": false, "explanation": "Réforme territoriale de 2015.", "confusion": 70},
      {"text": "Loi Chevènement", "correct": false, "explanation": "Sur l'intercommunalité en 1999.", "confusion": 65},
      {"text": "Loi Pasqua", "correct": false, "explanation": "Aménagement du territoire en 1995.", "confusion": 75}
    ]
  },
  {
    "id": 143,
    "question": "Quel navigateur français découvrit le Canada en 1534 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Samuel de Champlain", "correct": false, "explanation": "Fondateur de Québec en 1608.", "confusion": 70},
      {"text": "Jacques Cartier", "correct": true, "explanation": "Premier explorateur du Saint-Laurent.", "confusion": 25},
      {"text": "Jean Cabot", "correct": false, "explanation": "Navigateur italien pour l'Angleterre.", "confusion": 75},
      {"text": "Louis Jolliet", "correct": false, "explanation": "Explorateur du Mississippi.", "confusion": 65}
    ]
  },
  {
    "id": 144,
    "question": "Quelle invention médicale est due au Dr René Laënnec ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Le stéthoscope", "correct": true, "explanation": "Inventé en 1816 pour ausculter les patients.", "confusion": 20},
      {"text": "Le vaccin contre la rage", "correct": false, "explanation": "Louis Pasteur en 1885.", "confusion": 70},
      {"text": "La radiographie", "correct": false, "explanation": "Wilhelm Röntgen en 1895.", "confusion": 75},
      {"text": "L'aspirine", "correct": false, "explanation": "Synthétisée par Bayer en 1897.", "confusion": 65}
    ]
  },
  {
    "id": 145,
    "question": "Quelle révolte urbaine secoua Lyon en 1831 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Révolte des Canuts", "correct": true, "explanation": "Soulèvement des ouvriers de la soie.", "confusion": 30},
      {"text": "Commune de Paris", "correct": false, "explanation": "1871, postérieure.", "confusion": 70},
      {"text": "Journées de Juin", "correct": false, "explanation": "Insurrection parisienne de 1848.", "confusion": 65},
      {"text": "Révolte des Voraces", "correct": false, "explanation": "1848 à Lyon.", "confusion": 60}
    ]
  },
  {
    "id": 146,
    "question": "Quel traité mit fin à la guerre de Dévolution en 1668 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Traité d'Aix-la-Chapelle", "correct": true, "explanation": "Louis XIV obtient des villes flamandes.", "confusion": 35},
      {"text": "Traité de Nimègue", "correct": false, "explanation": "1678-1679, fin de la guerre de Hollande.", "confusion": 70},
      {"text": "Traité de Ryswick", "correct": false, "explanation": "1697, fin de la guerre de la Ligue d'Augsbourg.", "confusion": 65},
      {"text": "Traité des Pyrénées", "correct": false, "explanation": "1659, conflit antérieur.", "confusion": 75}
    ]
  },
  {
    "id": 147,
    "question": "Quel roi institua les 'lettres de jussion' pour contrôler les Parlements ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Louis XIV", "correct": false, "explanation": "Utilisa les lits de justice.", "confusion": 65},
      {"text": "Louis XV", "correct": true, "explanation": "Outil pour imposer l'enregistrement des lois.", "confusion": 40},
      {"text": "Louis XVI", "correct": false, "explanation": "Confronté aux refus des Parlements avant la Révolution.", "confusion": 70},
      {"text": "Henri IV", "correct": false, "explanation": "Période de pacification religieuse.", "confusion": 75}
    ]
  },
  {
    "id": 148,
    "question": "Quelle loi de 1901 encadre la création d'associations en France ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Waldeck-Rousseau", "correct": true, "explanation": "Base du droit associatif moderne.", "confusion": 25},
      {"text": "Loi de 1905", "correct": false, "explanation": "Séparation des Églises et de l'État.", "confusion": 70},
      {"text": "Loi Le Chapelier", "correct": false, "explanation": "1791, interdisant les corporations.", "confusion": 65},
      {"text": "Loi Faure", "correct": false, "explanation": "Sur l'enseignement supérieur en 1875.", "confusion": 75}
    ]
  },
  {
    "id": 149,
    "question": "Quel explorateur français donna son nom à une région d'Afrique équatoriale ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Pierre Savorgnan de Brazza", "correct": true, "explanation": "Brazzaville porte son nom.", "confusion": 30},
      {"text": "René Caillié", "correct": false, "explanation": "Explorateur de Tombouctou.", "confusion": 70},
      {"text": "Jean-Baptiste Marchand", "correct": false, "explanation": "Mission Fachoda en 1898.", "confusion": 65},
      {"text": "Parfait-Louis Monteil", "correct": false, "explanation": "Explora le Tchad et le Niger.", "confusion": 75}
    ]
  },
  {
    "id": 150,
    "question": "Quelle bataille de 1745 vit la victoire française pendant la guerre de Succession d'Autriche ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Fontenoy", "correct": true, "explanation": "Victoire de Maurice de Saxe sous Louis XV.", "confusion": 35},
      {"text": "Rocroi", "correct": false, "explanation": "1643, guerre de Trente Ans.", "confusion": 70},
      {"text": "Denain", "correct": false, "explanation": "1712, guerre de Succession d'Espagne.", "confusion": 65},
      {"text": "Malplaquet", "correct": false, "explanation": "1709, défaite française.", "confusion": 75}
    ]
  },
  {
    "id": 151,
    "question": "Quel roi de France a institué la 'Pragmatique Sanction de Bourges' en 1438 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Charles VII", "correct": true, "explanation": "Renforce l'autonomie de l'Église gallicane face à Rome.", "confusion": 30},
      {"text": "Louis XI", "correct": false, "explanation": "Fils de Charles VII, règne postérieur.", "confusion": 70},
      {"text": "Philippe Auguste", "correct": false, "explanation": "Roi du XIIe siècle, non concerné.", "confusion": 85},
      {"text": "François Ier", "correct": false, "explanation": "Signa le concordat de Bologne en 1516.", "confusion": 65}
    ]
  },
  {
    "id": 152,
    "question": "Quelle loi de 1999 instaura le PACS en France ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Jospin", "correct": false, "explanation": "Portait sur les 35 heures.", "confusion": 70},
      {"text": "Loi Guigou", "correct": true, "explanation": "Création du Pacte Civil de Solidarité.", "confusion": 25},
      {"text": "Loi Taubira", "correct": false, "explanation": "Reconnaissance de l'esclavage comme crime contre l'humanité (2001).", "confusion": 65},
      {"text": "Loi Neuwirth", "correct": false, "explanation": "Légalisa la contraception en 1967.", "confusion": 75}
    ]
  },
  {
    "id": 153,
    "question": "Quelle bataille marqua la fin de la guerre de Succession d'Espagne en 1713 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Bataille de Denain", "correct": true, "explanation": "Victoire française décisive sous Villars.", "confusion": 35},
      {"text": "Bataille de Malplaquet", "correct": false, "explanation": "Défaite française en 1709.", "confusion": 65},
      {"text": "Bataille de Rocroi", "correct": false, "explanation": "1643, guerre de Trente Ans.", "confusion": 80},
      {"text": "Bataille de Fontenoy", "correct": false, "explanation": "1745, guerre de Succession d'Autriche.", "confusion": 70}
    ]
  },
  {
    "id": 154,
    "question": "Quel écrivain français fut le premier à entrer à l'Académie française en 1634 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Jean Racine", "correct": false, "explanation": "Élu en 1673.", "confusion": 70},
      {"text": "Pierre Corneille", "correct": false, "explanation": "Élu en 1647.", "confusion": 65},
      {"text": "Valentin Conrart", "correct": true, "explanation": "Membre fondateur et premier secrétaire perpétuel.", "confusion": 40},
      {"text": "Jean de La Fontaine", "correct": false, "explanation": "Élu en 1684.", "confusion": 75}
    ]
  },
  {
    "id": 155,
    "question": "Quelle découverte archéologique majeure fut faite en 1940 dans le Périgord ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "La grotte de Lascaux", "correct": true, "explanation": "Chefs-d'œuvre de l'art pariétal paléolithique.", "confusion": 20},
      {"text": "Le site de Carnac", "correct": false, "explanation": "Alignements mégalithiques connus depuis longtemps.", "confusion": 75},
      {"text": "La Dame de Brassempouy", "correct": false, "explanation": "Découverte en 1894.", "confusion": 70},
      {"text": "La grotte Chauvet", "correct": false, "explanation": "Découverte en 1994.", "confusion": 65}
    ]
  },
  {
    "id": 156,
    "question": "Quelle loi de 1975 interdit toute discrimination fondée sur le handicap en France ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Veil", "correct": false, "explanation": "Sur l'IVG la même année.", "confusion": 70},
      {"text": "Loi Charbonneau", "correct": false, "explanation": "Sur la transparence financière en 2013.", "confusion": 75},
      {"text": "Loi d'orientation en faveur des personnes handicapées", "correct": true, "explanation": "Dite 'loi handicap' de Simone Veil.", "confusion": 30},
      {"text": "Loi Aubry", "correct": false, "explanation": "Sur les 35 heures en 2000.", "confusion": 65}
    ]
  },
  {
    "id": 157,
    "question": "Quel traité mit fin à la guerre de la Ligue d'Augsbourg en 1697 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Traité de Ryswick", "correct": true, "explanation": "Louis XIV conserve l'Alsace.", "confusion": 35},
      {"text": "Traité d'Utrecht", "correct": false, "explanation": "1713, guerre de Succession d'Espagne.", "confusion": 70},
      {"text": "Traité des Pyrénées", "correct": false, "explanation": "1659, conflit antérieur.", "confusion": 75},
      {"text": "Traité de Westphalie", "correct": false, "explanation": "1648, fin de la guerre de Trente Ans.", "confusion": 65}
    ]
  },
  {
    "id": 158,
    "question": "Quelle région française fut le théâtre de la 'guerre des Demoiselles' au XIXe siècle ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Les Pyrénées", "correct": false, "explanation": "Contexte montagneux mais non concerné.", "confusion": 60},
      {"text": "Les Cévennes", "correct": false, "explanation": "Lieu de la guerre des Camisards.", "confusion": 70},
      {"text": "Les Alpes", "correct": false, "explanation": "Non concernées.", "confusion": 80},
      {"text": "L'Ariège", "correct": true, "explanation": "Révolte antifiscale et antifeodale (1829-1872).", "confusion": 40}
    ]
  },
  {
    "id": 159,
    "question": "Quel explorateur français cartographia la Nouvelle-Calédonie en 1774 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Louis Antoine de Bougainville", "correct": false, "explanation": "Explora le Pacifique dans les années 1760.", "confusion": 65},
      {"text": "James Cook", "correct": false, "explanation": "Explorateur britannique.", "confusion": 70},
      {"text": "Jean-François de La Pérouse", "correct": false, "explanation": "Disparu en 1788.", "confusion": 75},
      {"text": "Julien Crozet", "correct": true, "explanation": "Navigateur sous les ordres de Marion-Dufresne.", "confusion": 45}
    ]
  },
  {
    "id": 160,
    "question": "Quelle reine de France fut régente pendant la minorité de Charles IX ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Catherine de Médicis", "correct": true, "explanation": "Mère de Charles IX, régente de 1560 à 1563.", "confusion": 25},
      {"text": "Anne d'Autriche", "correct": false, "explanation": "Régente pour Louis XIV.", "confusion": 70},
      {"text": "Marie de Médicis", "correct": false, "explanation": "Régente pour Louis XIII.", "confusion": 65},
      {"text": "Blanche de Castille", "correct": false, "explanation": "Régente pour Louis IX au XIIIe siècle.", "confusion": 75}
    ]
  },
  {
    "id": 161,
    "question": "Quelle loi de 2016 créa les régions fusionnées comme la Nouvelle-Aquitaine ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi NOTRe", "correct": true, "explanation": "Réforme territoriale sous François Hollande.", "confusion": 30},
      {"text": "Loi MAPTAM", "correct": false, "explanation": "Prépara la réforme en 2014.", "confusion": 65},
      {"text": "Loi Defferre", "correct": false, "explanation": "Décentralisation de 1982.", "confusion": 70},
      {"text": "Loi Voynet", "correct": false, "explanation": "Aménagement du territoire en 1999.", "confusion": 75}
    ]
  },
  {
    "id": 162,
    "question": "Quel philosophe français est l'auteur de 'La Société du spectacle' (1967) ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Jean-Paul Sartre", "correct": false, "explanation": "Philosophe existentialiste.", "confusion": 70},
      {"text": "Guy Debord", "correct": true, "explanation": "Théoricien de l'Internationale situationniste.", "confusion": 30},
      {"text": "Michel Foucault", "correct": false, "explanation": "Théoricien du pouvoir.", "confusion": 65},
      {"text": "Pierre Bourdieu", "correct": false, "explanation": "Sociologue de la domination.", "confusion": 75}
    ]
  },
  {
    "id": 163,
    "question": "Quel événement déclencha le massacre de la Saint-Barthélemy en 1572 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "L'assassinat de l'amiral de Coligny", "correct": true, "explanation": "Chef protestant tué sur ordre des Guise.", "confusion": 35},
      {"text": "La révocation de l'édit de Nantes", "correct": false, "explanation": "1685, bien plus tardif.", "confusion": 75},
      {"text": "La bataille de Jarnac", "correct": false, "explanation": "1569, pendant les guerres de Religion.", "confusion": 65},
      {"text": "Le siège de La Rochelle", "correct": false, "explanation": "1627-1628, sous Louis XIII.", "confusion": 70}
    ]
  },
  {
    "id": 164,
    "question": "Quelle scientifique française découvrit le francium en 1939 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Irène Joliot-Curie", "correct": false, "explanation": "Prix Nobel avec son mari pour la radioactivité artificielle.", "confusion": 65},
      {"text": "Marguerite Perey", "correct": true, "explanation": "Élève de Marie Curie, découvreuse de l'élément 87.", "confusion": 40},
      {"text": "Marie Curie", "correct": false, "explanation": "Découvrit le polonium et le radium.", "confusion": 70},
      {"text": "Émilie du Châtelet", "correct": false, "explanation": "Physicienne du XVIIIe siècle.", "confusion": 80}
    ]
  },
  {
    "id": 165,
    "question": "Quel traité établit la Triple-Entente entre la France, la Russie et le Royaume-Uni ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Traité de Versailles", "correct": false, "explanation": "1919, fin de la Première Guerre mondiale.", "confusion": 70},
      {"text": "Accord de Londres", "correct": false, "explanation": "Non lié à la Triple-Entente.", "confusion": 75},
      {"text": "Entente cordiale", "correct": false, "explanation": "1904, entre France et Royaume-Uni.", "confusion": 65},
      {"text": "Alliance franco-russe", "correct": true, "explanation": "1892, complétée par des accords avec le Royaume-Uni (1907).", "confusion": 30}
    ]
  },
  {
    "id": 166,
    "question": "Quelle ville française fut la capitale des Wisigoths au Ve siècle ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Toulouse", "correct": true, "explanation": "Capitale jusqu'à la bataille de Vouillé en 507.", "confusion": 30},
      {"text": "Lyon", "correct": false, "explanation": "Importante ville romaine.", "confusion": 70},
      {"text": "Poitiers", "correct": false, "explanation": "Lieu de la bataille contre les Arabes en 732.", "confusion": 65},
      {"text": "Narbonne", "correct": false, "explanation": "Occupée par les Wisigoths mais pas capitale.", "confusion": 75}
    ]
  },
  {
    "id": 167,
    "question": "Quelle loi de 1881 instaura la liberté de la presse en France ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Loi Ferry", "correct": false, "explanation": "Sur l'école laïque.", "confusion": 70},
      {"text": "Loi sur la liberté de la presse", "correct": true, "explanation": "Loi du 29 juillet 1881, toujours en vigueur.", "confusion": 20},
      {"text": "Loi Pleven", "correct": false, "explanation": "1972, contre le racisme.", "confusion": 75},
      {"text": "Loi Faider", "correct": false, "explanation": "1835, restreignait la presse.", "confusion": 65}
    ]
  },
  {
    "id": 168,
    "question": "Quel navigateur français donna son nom à un détroit près du Canada ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Jacques Cartier", "correct": false, "explanation": "Explora le Saint-Laurent.", "confusion": 70},
      {"text": "Samuel de Champlain", "correct": false, "explanation": "Fondateur de Québec.", "confusion": 65},
      {"text": "Jean Cabot", "correct": false, "explanation": "Navigateur italien pour l'Angleterre.", "confusion": 75},
      {"text": "Jacques Marquette", "correct": true, "explanation": "Détroit de Mackinac (orthographe anglicisée).", "confusion": 40}
    ]
  },
  {
    "id": 169,
    "question": "Quelle révolte antifiscale eut lieu en Provence en 1630 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Révolte des Cascaveoux", "correct": true, "explanation": "Soulèvement contre les taxes de Richelieu.", "confusion": 35},
      {"text": "Révolte des Croquants", "correct": false, "explanation": "Dans le Sud-Ouest en 1593-1595.", "confusion": 65},
      {"text": "Révolte des Sabotiers", "correct": false, "explanation": "En Sologne au XVIIe siècle.", "confusion": 70},
      {"text": "Révolte des Nu-pieds", "correct": false, "explanation": "En Normandie en 1639.", "confusion": 75}
    ]
  },
  {
    "id": 170,
    "question": "Quel traité mit fin à la guerre d'indépendance américaine avec la France ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Traité de Paris (1783)", "correct": true, "explanation": "Reconnaissance de l'indépendance des États-Unis.", "confusion": 25},
      {"text": "Traité de Versailles (1919)", "correct": false, "explanation": "Fin de la Première Guerre mondiale.", "confusion": 70},
      {"text": "Traité d'Amiens (1802)", "correct": false, "explanation": "Paix temporaire avec l'Angleterre.", "confusion": 65},
      {"text": "Traité d'Utrecht (1713)", "correct": false, "explanation": "Guerre de Succession d'Espagne.", "confusion": 75}
    ]
  },
  {
    "id": 171,
    "question": "Quelle loi de 2017 interdit l'utilisation du téléphone portable dans les écoles ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Loi Blanquer", "correct": true, "explanation": "Portée par le ministre de l'Éducation Jean-Michel Blanquer.", "confusion": 20},
      {"text": "Loi Peillon", "correct": false, "explanation": "Réforme des rythmes scolaires en 2013.", "confusion": 70},
      {"text": "Loi Fillon", "correct": false, "explanation": "Sur l'école en 2005.", "confusion": 65},
      {"text": "Loi Jospin", "correct": false, "explanation": "1989, orientation scolaire.", "confusion": 75}
    ]
  },
  {
    "id": 172,
    "question": "Quel roi de France fut surnommé 'le Juste' ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Louis XIII", "correct": true, "explanation": "Règne marqué par Richelieu et la centralisation.", "confusion": 35},
      {"text": "Henri IV", "correct": false, "explanation": "Surnommé 'le Vert Galant'.", "confusion": 70},
      {"text": "Charles V", "correct": false, "explanation": "Surnommé 'le Sage'.", "confusion": 65},
      {"text": "Philippe IV", "correct": false, "explanation": "Surnommé 'le Bel'.", "confusion": 75}
    ]
  },
  {
    "id": 173,
    "question": "Quelle île française fut une base stratégique pendant la guerre de Sept Ans ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "La Martinique", "correct": false, "explanation": "Colonie sucrière.", "confusion": 70},
      {"text": "Belle-Île-en-Mer", "correct": true, "explanation": "Occupée par les Britanniques de 1761 à 1763.", "confusion": 40},
      {"text": "La Réunion", "correct": false, "explanation": "Isolée dans l'océan Indien.", "confusion": 75},
      {"text": "Saint-Pierre-et-Miquelon", "correct": false, "explanation": "Base de pêche.", "confusion": 65}
    ]
  },
  {
    "id": 174,
    "question": "Quel architecte français conçut le quartier de La Défense à Paris ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Le Corbusier", "correct": false, "explanation": "Influence moderniste mais non impliqué.", "confusion": 70},
      {"text": "Auguste Perret", "correct": false, "explanation": "Reconstruction du Havre.", "confusion": 65},
      {"text": "Paul Andreu", "correct": false, "explanation": "Architecte de l'aéroport Roissy.", "confusion": 75},
      {"text": "Bernard Zehrfuss", "correct": true, "explanation": "Coauteur du plan initial dans les années 1950.", "confusion": 30}
    ]
  },
  {
    "id": 175,
    "question": "Quelle découverte botanique majeure est due à Jeanne Baret au XVIIIe siècle ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Le caféier", "correct": false, "explanation": "Connu depuis longtemps.", "confusion": 70},
      {"text": "Le bougainvillier", "correct": true, "explanation": "Nommé en l'honneur de Bougainville, dont elle était l'assistante.", "confusion": 40},
      {"text": "Le tabac", "correct": false, "explanation": "Introduit en Europe au XVIe siècle.", "confusion": 75},
      {"text": "Le cacaoyer", "correct": false, "explanation": "Découvert par les Espagnols.", "confusion": 65}
    ]
  },
  {
    "id": 176,
    "question": "Quelle loi de 1993 créa le CSA (Conseil supérieur de l'audiovisuel) ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Loi Léotard", "correct": false, "explanation": "1986, libéralisation des médias.", "confusion": 70},
      {"text": "Loi Fillioud", "correct": false, "explanation": "1982, création de la Haute Autorité.", "confusion": 65},
      {"text": "Loi Carignon", "correct": true, "explanation": "Transforma la Haute Autorité en CSA.", "confusion": 35},
      {"text": "Loi Toubon", "correct": false, "explanation": "1994, sur la langue française.", "confusion": 75}
    ]
  },
  {
    "id": 177,
    "question": "Quel explorateur français disparut en 1847 dans le désert australien ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Jules Dumont d'Urville", "correct": false, "explanation": "Explora l'Océanie et l'Antarctique.", "confusion": 65},
      {"text": "René Caillié", "correct": false, "explanation": "Explorateur de Tombouctou.", "confusion": 70},
      {"text": "Henri Mouhot", "correct": false, "explanation": "Découvreur d'Angkor au XIXe siècle.", "confusion": 75},
      {"text": "Ludwig Leichhardt", "correct": true, "explanation": "Franco-allemand, disparu lors d'une expédition.", "confusion": 45}
    ]
  },
  {
    "id": 178,
    "question": "Quelle crise politique française est liée à l'affaire des surfacturations d'Orange en 1994 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Affaire Elf", "correct": false, "explanation": "Scandale pétrolier des années 1990.", "confusion": 65},
      {"text": "Affaire Urba", "correct": false, "explanation": "Financement occulte du PS.", "confusion": 70},
      {"text": "Affaire des écoutes de l'Élysée", "correct": false, "explanation": "Sous Mitterrand.", "confusion": 75},
      {"text": "Affaire Gaymard", "correct": true, "explanation": "Surfacturations liées à France Télécom.", "confusion": 40}
    ]
  },
  {
    "id": 179,
    "question": "Quelle bataille navale de 1794 vit la victoire française contre les Britanniques pendant les guerres révolutionnaires ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Bataille d'Aboukir", "correct": false, "explanation": "1798, défaite française.", "confusion": 65},
      {"text": "Bataille de Trafalgar", "correct": false, "explanation": "1805, époque napoléonienne.", "confusion": 70},
      {"text": "Bataille du 13 prairial an II", "correct": true, "explanation": "Aussi appelée bataille du 1er juin 1794.", "confusion": 40},
      {"text": "Bataille de Groix", "correct": false, "explanation": "1795, autre engagement naval.", "confusion": 75}
    ]
  },
  {
    "id": 180,
    "question": "Quel est le nom du premier parc national créé en France en 1963 ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Parc national des Cévennes", "correct": false, "explanation": "Créé en 1970.", "confusion": 70},
      {"text": "Parc national de la Vanoise", "correct": true, "explanation": "Premier parc national français.", "confusion": 25},
      {"text": "Parc national des Pyrénées", "correct": false, "explanation": "Créé en 1967.", "confusion": 65},
      {"text": "Parc national des Écrins", "correct": false, "explanation": "1973.", "confusion": 75}
    ]
  },
   {
    "id": 181,
    "question": "Quelle loi de 1982 abaissa la durée légale du travail à 39 heures ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Auroux", "correct": true, "explanation": "Réforme sociale sous François Mitterrand.", "confusion": 30},
      {"text": "Loi Aubry", "correct": false, "explanation": "Instaura les 35 heures en 2000.", "confusion": 65},
      {"text": "Loi Defferre", "correct": false, "explanation": "Décentralisation de 1982.", "confusion": 70},
      {"text": "Loi Séguin", "correct": false, "explanation": "Portait sur le financement de la Sécurité sociale.", "confusion": 75}
    ]
  },
  {
    "id": 182,
    "question": "Quel traité de 1830 permit la conquête de l'Algérie par la France ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Traité de Tafna", "correct": false, "explanation": "Signé avec l'émir Abd el-Kader en 1837.", "confusion": 65},
      {"text": "Traité de la Tafna", "correct": false, "explanation": "Variante orthographique erronée.", "confusion": 70},
      {"text": "Traité de capitulation du Dey d'Alger", "correct": true, "explanation": "5 juillet 1830 après l'expédition d'Alger.", "confusion": 35},
      {"text": "Accords d'Évian", "correct": false, "explanation": "1962, indépendance de l'Algérie.", "confusion": 80}
    ]
  },
  {
    "id": 183,
    "question": "Quel philosophe français dirigea l'Encyclopédie avec Diderot ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Jean le Rond d'Alembert", "correct": true, "explanation": "Coéditeur scientifique de 1751 à 1759.", "confusion": 20},
      {"text": "Voltaire", "correct": false, "explanation": "Contributeur occasionnel.", "confusion": 70},
      {"text": "Baron d'Holbach", "correct": false, "explanation": "Collaborateur mais pas codirecteur.", "confusion": 65},
      {"text": "Montesquieu", "correct": false, "explanation": "Mort avant le début du projet.", "confusion": 75}
    ]
  },
  {
    "id": 184,
    "question": "Quelle ville devint capitale des Francs sous Clovis après 486 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Soissons", "correct": true, "explanation": "Siège du pouvoir après la victoire sur Syagrius.", "confusion": 40},
      {"text": "Paris", "correct": false, "explanation": "Devenue capitale plus tard sous les Capétiens.", "confusion": 70},
      {"text": "Reims", "correct": false, "explanation": "Lieu de sacre mais pas capitale.", "confusion": 65},
      {"text": "Tournai", "correct": false, "explanation": "Capitale sous Childéric Ier.", "confusion": 60}
    ]
  },
  {
    "id": 185,
    "question": "Quelle institution créée en 1946 gérait les colonies françaises d'Afrique ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "L'Union française", "correct": true, "explanation": "Remplaçait l'Empire colonial sous la IVe République.", "confusion": 35},
      {"text": "La Communauté française", "correct": false, "explanation": "Créée en 1958 sous De Gaulle.", "confusion": 70},
      {"text": "L'AEF", "correct": false, "explanation": "Afrique-Équatoriale française, structure administrative.", "confusion": 65},
      {"text": "L'Organisation internationale de la Francophonie", "correct": false, "explanation": "Créée en 1970.", "confusion": 80}
    ]
  },
  {
    "id": 186,
    "question": "Quelle scientifique française découvrit la structure de l'ADN avec Watson et Crick ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Rosalind Franklin", "correct": false, "explanation": "Scientifique britannique.", "confusion": 65},
      {"text": "Marie Curie", "correct": false, "explanation": "Travaux sur la radioactivité.", "confusion": 70},
      {"text": "Aucune Française", "correct": true, "explanation": "Franklin fournit des données mais n'était pas française.", "confusion": 45},
      {"text": "Françoise Barré-Sinoussi", "correct": false, "explanation": "Découvreuse du VIH en 1983.", "confusion": 75}
    ]
  },
  {
    "id": 187,
    "question": "Quelle réforme administrative de 1790 créa les départements français ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Décret du 26 février 1790", "correct": true, "explanation": "Division du territoire en 83 départements.", "confusion": 30},
      {"text": "Loi du 28 pluviôse an VIII", "correct": false, "explanation": "Création des préfets en 1800.", "confusion": 70},
      {"text": "Constitution civile du clergé", "correct": false, "explanation": "Réforme religieuse de 1790.", "confusion": 65},
      {"text": "Code Napoléon", "correct": false, "explanation": "1804, droit civil.", "confusion": 75}
    ]
  },
  {
    "id": 188,
    "question": "Quel explorateur français disparut en 1788 après avoir accosté aux Îles Salomon ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "La Pérouse", "correct": true, "explanation": "Expédition scientifique disparue à Vanikoro.", "confusion": 30},
      {"text": "Bougainville", "correct": false, "explanation": "Revint de son tour du monde en 1769.", "confusion": 70},
      {"text": "Dumont d'Urville", "correct": false, "explanation": "Retrouva des vestiges de La Pérouse en 1828.", "confusion": 65},
      {"text": "Kerguelen", "correct": false, "explanation": "Explora les mers australes.", "confusion": 75}
    ]
  },
  {
    "id": 189,
    "question": "Quelle loi de 1975 permit le divorce par consentement mutuel ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Loi Veil", "correct": false, "explanation": "Sur l'IVG la même année.", "confusion": 70},
      {"text": "Loi Naquet", "correct": false, "explanation": "Rétablit le divorce en 1884.", "confusion": 65},
      {"text": "Loi Mazeaud", "correct": true, "explanation": "Réforme du droit de la famille sous Giscard.", "confusion": 35},
      {"text": "Loi Badinter", "correct": false, "explanation": "Abolition de la peine de mort en 1981.", "confusion": 75}
    ]
  },
  {
    "id": 190,
    "question": "Quelle ville fut le siège du gouvernement français en 1914-1918 pendant la Grande Guerre ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Bordeaux", "correct": true, "explanation": "Siège du gouvernement en 1914.", "confusion": 30},
      {"text": "Vichy", "correct": false, "explanation": "Capitale de 1940 à 1944.", "confusion": 70},
      {"text": "Tours", "correct": false, "explanation": "Siège en 1870 pendant la guerre franco-prussienne.", "confusion": 65},
      {"text": "Lyon", "correct": false, "explanation": "Jamais capitale officielle.", "confusion": 75}
    ]
  },
  {
    "id": 191,
    "question": "Quel est le nom du premier sous-marin nucléaire lanceur d'engins français ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Le Redoutable", "correct": true, "explanation": "Lancé en 1967, pièce maîtresse de la dissuasion.", "confusion": 25},
      {"text": "Le Suffren", "correct": false, "explanation": "Sous-marin d'attaque moderne.", "confusion": 70},
      {"text": "Le Triomphant", "correct": false, "explanation": "Classe actuelle de SNLE.", "confusion": 65},
      {"text": "Le Casabianca", "correct": false, "explanation": "Sous-marin de la Seconde Guerre mondiale.", "confusion": 75}
    ]
  },
  {
    "id": 192,
    "question": "Quel traité de 1629 mit fin aux guerres de Religion en France ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Édit de Nantes", "correct": false, "explanation": "1598, premier édit de pacification.", "confusion": 65},
      {"text": "Paix d'Alès", "correct": true, "explanation": "Confirmée par Richelieu, prive les protestants de places fortes.", "confusion": 35},
      {"text": "Édit de Fontainebleau", "correct": false, "explanation": "1685, révocation de l'édit de Nantes.", "confusion": 70},
      {"text": "Traité de Westphalie", "correct": false, "explanation": "1648, paix européenne.", "confusion": 75}
    ]
  },
  {
    "id": 193,
    "question": "Quelle reine de France introduisit la fourchette à la cour au XVIe siècle ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Catherine de Médicis", "correct": true, "explanation": "Influence des usages italiens.", "confusion": 30},
      {"text": "Anne de Bretagne", "correct": false, "explanation": "Reine à la fin du XVe siècle.", "confusion": 70},
      {"text": "Marie-Antoinette", "correct": false, "explanation": "XVIIIe siècle, bien plus tardive.", "confusion": 65},
      {"text": "Marguerite de Valois", "correct": false, "explanation": "Fille de Catherine de Médicis.", "confusion": 75}
    ]
  },
  {
    "id": 194,
    "question": "Quelle bataille de 1747 vit la victoire navale française pendant la guerre de Succession d'Autriche ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Bataille du cap Finisterre", "correct": true, "explanation": "Victoire française contre les Britanniques.", "confusion": 40},
      {"text": "Bataille de Minorque", "correct": false, "explanation": "1756, guerre de Sept Ans.", "confusion": 65},
      {"text": "Bataille des Cardinaux", "correct": false, "explanation": "1759, défaite française.", "confusion": 70},
      {"text": "Bataille de la Hougue", "correct": false, "explanation": "1692, guerre de la Ligue d'Augsbourg.", "confusion": 75}
    ]
  },
  {
    "id": 195,
    "question": "Quel est le nom du premier satellite de télécommunications français lancé en 1965 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Astérix", "correct": false, "explanation": "Premier satellite français mais scientifique.", "confusion": 60},
      {"text": "FR-1", "correct": true, "explanation": "Satellite scientifique franco-américain.", "confusion": 35},
      {"text": "Télécom 1A", "correct": false, "explanation": "1984, premier de la série Telecom.", "confusion": 70},
      {"text": "Symphonie", "correct": false, "explanation": "1974, coopération franco-allemande.", "confusion": 65}
    ]
  },
  {
    "id": 196,
    "question": "Quelle loi de 2001 reconnut la traite négrière comme crime contre l'humanité ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Taubira", "correct": true, "explanation": "Portée par la députée guyanaise Christiane Taubira.", "confusion": 20},
      {"text": "Loi Mélinon", "correct": false, "explanation": "Loi inexistante.", "confusion": 75},
      {"text": "Loi Gayssot", "correct": false, "explanation": "1990, contre le négationnisme.", "confusion": 65},
      {"text": "Loi Fabius", "correct": false, "explanation": "1985, sur les radios libres.", "confusion": 70}
    ]
  },
  {
    "id": 197,
    "question": "Quel roi de France institua les 'Grands Jours' pour contrôler les provinces ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Louis IX", "correct": false, "explanation": "XIIIe siècle, réformes administratives.", "confusion": 65},
      {"text": "Charles VII", "correct": true, "explanation": "Tribunaux exceptionnels au XVe siècle.", "confusion": 40},
      {"text": "Henri IV", "correct": false, "explanation": "Période de pacification.", "confusion": 70},
      {"text": "Philippe IV le Bel", "correct": false, "explanation": "Centralisation médiévale.", "confusion": 75}
    ]
  },
  {
    "id": 198,
    "question": "Quelle crise politique suivit l'affaire Seznec dans les années 1920 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Scandale des fiches", "correct": false, "explanation": "1904, affaire militaire.", "confusion": 65},
      {"text": "Affaire Stavisky", "correct": false, "explanation": "1934, crise financière.", "confusion": 70},
      {"text": "Affaire Dreyfus", "correct": false, "explanation": "Fin XIXe siècle.", "confusion": 75},
      {"text": "Aucune crise majeure", "correct": true, "explanation": "Mystère non résolu mais sans impact politique direct.", "confusion": 50}
    ]
  },
  {
    "id": 199,
    "question": "Quelle bataille de 1793 vit la victoire des Républicains contre les Vendéens ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Bataille de Savenay", "correct": true, "explanation": "Écrasement final de l'armée catholique et royale.", "confusion": 35},
      {"text": "Bataille de Valmy", "correct": false, "explanation": "1792, victoire contre les Prussiens.", "confusion": 70},
      {"text": "Bataille de Wattignies", "correct": false, "explanation": "Victoire contre les Autrichiens.", "confusion": 65},
      {"text": "Bataille de Fleurus", "correct": false, "explanation": "1794, campagne de Belgique.", "confusion": 75}
    ]
  },
  {
    "id": 200,
    "question": "Quel architecte français conçut le stade Vélodrome de Marseille ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Henri Ploquin", "correct": true, "explanation": "Inauguré en 1937 pour la Coupe du monde 1938.", "confusion": 40},
      {"text": "Le Corbusier", "correct": false, "explanation": "Architecte moderniste marseillais mais non impliqué.", "confusion": 70},
      {"text": "Jean Nouvel", "correct": false, "explanation": "Rénovation récente mais pas concepteur initial.", "confusion": 65},
      {"text": "Tony Garnier", "correct": false, "explanation": "Architecte lyonnais.", "confusion": 75}
    ]
  },
  {
    "id": 201,
    "question": "Quelle loi de 1998 instaura les 35 heures de travail hebdomadaires ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Loi Aubry", "correct": true, "explanation": "Martine Aubry, ministre du Travail.", "confusion": 25},
      {"text": "Loi Jospin", "correct": false, "explanation": "Réforme éducative de 1989.", "confusion": 70},
      {"text": "Loi Fillon", "correct": false, "explanation": "Réforme des retraites en 2003.", "confusion": 65},
      {"text": "Loi Woerth", "correct": false, "explanation": "2010, portait sur les retraites.", "confusion": 75}
    ]
  },
  {
    "id": 202,
    "question": "Quel explorateur français établit un comptoir à Pondichéry en 1673 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Joseph François Dupleix", "correct": false, "explanation": "Gouverneur au XVIIIe siècle.", "confusion": 65},
      {"text": "François Martin", "correct": true, "explanation": "Fondateur du comptoir français en Inde.", "confusion": 40},
      {"text": "Pierre Loti", "correct": false, "explanation": "Écrivain voyageur du XIXe siècle.", "confusion": 75},
      {"text": "René Madec", "correct": false, "explanation": "Aventurier breton au service des Marathes.", "confusion": 70}
    ]
  },
  {
    "id": 203,
    "question": "Quelle crise agricole provoqua la révolte des vignerons de 1907 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "La surproduction de blé", "correct": false, "explanation": "Crise différente (années 1930).", "confusion": 65},
      {"text": "Le phylloxéra", "correct": false, "explanation": "Dévastation antérieure (fin XIXe siècle).", "confusion": 70},
      {"text": "La fraude des vins", "correct": true, "explanation": "Colère contre les vins falsifiés et importations.", "confusion": 35},
      {"text": "La taxation excessive", "correct": false, "explanation": "Facteur secondaire.", "confusion": 60}
    ]
  },
  {
    "id": 204,
    "question": "Quelle reine de France popularisa le chocolat chaud à la cour ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Anne d'Autriche", "correct": true, "explanation": "Introduit d'Espagne au XVIIe siècle.", "confusion": 30},
      {"text": "Marie-Antoinette", "correct": false, "explanation": "XVIIIe siècle, bien plus tardive.", "confusion": 70},
      {"text": "Catherine de Médicis", "correct": false, "explanation": "Introduisit la fourchette et la cuisine italienne.", "confusion": 65},
      {"text": "Marie Leszczyńska", "correct": false, "explanation": "Épouse de Louis XV.", "confusion": 75}
    ]
  },
  {
    "id": 205,
    "question": "Quel traité de 1919 rendit l'Alsace-Lorraine à la France ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Traité de Versailles", "correct": true, "explanation": "Article 51 du traité.", "confusion": 20},
      {"text": "Traité de Francfort", "correct": false, "explanation": "1871, annexion allemande.", "confusion": 75},
      {"text": "Traité de Trianon", "correct": false, "explanation": "1920, concernant la Hongrie.", "confusion": 70},
      {"text": "Traité de Saint-Germain", "correct": false, "explanation": "1919, dissolution de l'Autriche-Hongrie.", "confusion": 65}
    ]
  },
  {
    "id": 206,
    "question": "Quelle ville française hébergea le gouvernement en 1870 pendant le siège de Paris ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Tours", "correct": true, "explanation": "Gouvernement de la Défense nationale.", "confusion": 35},
      {"text": "Bordeaux", "correct": false, "explanation": "Siège en 1914.", "confusion": 65},
      {"text": "Vichy", "correct": false, "explanation": "Capitale de 1940 à 1944.", "confusion": 70},
      {"text": "Lyon", "correct": false, "explanation": "Jamais capitale officielle.", "confusion": 75}
    ]
  },
  {
    "id": 207,
    "question": "Quel est le nom du premier TGV mis en service en 1981 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "TGV Sud-Est", "correct": true, "explanation": "Ligne Paris-Lyon.", "confusion": 25},
      {"text": "TGV Atlantique", "correct": false, "explanation": "Mis en service en 1989.", "confusion": 70},
      {"text": "TGV Réseau", "correct": false, "explanation": "1993.", "confusion": 65},
      {"text": "TGV Duplex", "correct": false, "explanation": "1996.", "confusion": 75}
    ]
  },
  {
    "id": 208,
    "question": "Quelle loi de 1999 créa le PACS en France ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Loi Guigou", "correct": true, "explanation": "Élisabeth Guigou, ministre de la Justice.", "confusion": 30},
      {"text": "Loi Taubira", "correct": false, "explanation": "2001, reconnaissance de l'esclavage.", "confusion": 70},
      {"text": "Loi Méhaignerie", "correct": false, "explanation": "1993, sur l'immigration.", "confusion": 65},
      {"text": "Loi Jospin", "correct": false, "explanation": "1989, orientation scolaire.", "confusion": 75}
    ]
  },
  {
    "id": 209,
    "question": "Quelle bataille de 1745 marqua l'apogée de la puissance navale française au XVIIIe siècle ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Bataille de Fontenoy", "correct": true, "explanation": "Victoire terrestre mais symbole de prestige.", "confusion": 40},
      {"text": "Bataille de Dettingen", "correct": false, "explanation": "1743, défaite française.", "confusion": 70},
      {"text": "Bataille de Rocourt", "correct": false, "explanation": "1746, guerre de Succession d'Autriche.", "confusion": 65},
      {"text": "Bataille de Lawfeldt", "correct": false, "explanation": "1747, autre victoire française.", "confusion": 75}
    ]
  },
  {
    "id": 210,
    "question": "Quel écrivain français fut ambassadeur à Rome sous François Ier ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Joachim du Bellay", "correct": false, "explanation": "Poète de la Pléiade au XVIe siècle.", "confusion": 65},
      {"text": "Guillaume Budé", "correct": false, "explanation": "Humaniste mais pas diplomate.", "confusion": 70},
      {"text": "Jean du Bellay", "correct": true, "explanation": "Cardinal et diplomate, oncle du poète.", "confusion": 45},
      {"text": "François Rabelais", "correct": false, "explanation": "Médecin et écrivain.", "confusion": 75}
    ]
  },
  {
    "id": 211,
    "question": "Quel traité mit fin à la guerre entre la France et l'Espagne en 1659 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Traité des Pyrénées", "correct": true, "explanation": "Signé sur l'île des Faisans, il marque la fin des hostilités et un mariage royal.", "confusion": 25},
      {"text": "Traité de Westphalie", "correct": false, "explanation": "1648, termine la guerre de Trente Ans.", "confusion": 70},
      {"text": "Traité d'Utrecht", "correct": false, "explanation": "1713, concerne la Succession d'Espagne.", "confusion": 65},
      {"text": "Traité de Cateau-Cambrésis", "correct": false, "explanation": "1559, fin des guerres d'Italie.", "confusion": 75}
    ]
  },
  {
    "id": 212,
    "question": "Quelle reine de France fut la mère de trois rois : François II, Charles IX et Henri III ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Catherine de Médicis", "correct": true, "explanation": "Épouse d'Henri II, régente pendant les guerres de Religion.", "confusion": 20},
      {"text": "Anne d'Autriche", "correct": false, "explanation": "Mère de Louis XIV.", "confusion": 70},
      {"text": "Marie de Médicis", "correct": false, "explanation": "Mère de Louis XIII.", "confusion": 65},
      {"text": "Isabelle de France", "correct": false, "explanation": "Fille de Philippe IV le Bel.", "confusion": 75}
    ]
  },
  {
    "id": 213,
    "question": "Quel explorateur français a donné son nom à une province canadienne ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Samuel de Champlain", "correct": false, "explanation": "Fondateur de Québec, mais pas de province.", "confusion": 65},
      {"text": "Jacques Cartier", "correct": true, "explanation": "Le Québec est issu de la Nouvelle-France qu'il explora.", "confusion": 30},
      {"text": "Louis Jolliet", "correct": false, "explanation": "Explora le Mississippi.", "confusion": 70},
      {"text": "René-Robert Cavelier de La Salle", "correct": false, "explanation": "Explora la Louisiane.", "confusion": 75}
    ]
  },
  {
    "id": 214,
    "question": "Quelle loi de 2016 créa le Comité consultatif national d'éthique ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Loi Touraine", "correct": false, "explanation": "Réforme de la santé en 2016.", "confusion": 65},
      {"text": "Loi bioéthique", "correct": false, "explanation": "Thématique proche, mais non.", "confusion": 70},
      {"text": "Loi J21", "correct": true, "explanation": "Renforce l'indépendance du comité existant depuis 1983.", "confusion": 40},
      {"text": "Loi Veil", "correct": false, "explanation": "1975, légalisation de l'IVG.", "confusion": 75}
    ]
  },
  {
    "id": 215,
    "question": "Quelle bataille navale de 1805 opposa la France à la Royal Navy ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Trafalgar", "correct": true, "explanation": "Défaite française face à Nelson.", "confusion": 15},
      {"text": "Aboukir", "correct": false, "explanation": "1798, campagne d'Égypte.", "confusion": 70},
      {"text": "Chesapeake", "correct": false, "explanation": "1781, guerre d'indépendance américaine.", "confusion": 65},
      {"text": "Ouessant", "correct": false, "explanation": "Bataille de 1778.", "confusion": 75}
    ]
  },
  {
    "id": 216,
    "question": "Quel roi de France a été sacré à Reims à l'âge de 12 ans ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Louis XIII", "correct": false, "explanation": "Sacré à 9 ans, mais en 1610.", "confusion": 65},
      {"text": "Louis IX", "correct": true, "explanation": "Futur Saint Louis, sacré en 1226.", "confusion": 30},
      {"text": "Jean Ier", "correct": false, "explanation": "Roi posthume en 1316.", "confusion": 80},
      {"text": "Charles VI", "correct": false, "explanation": "Sacré à 11 ans en 1380.", "confusion": 60}
    ]
  },
  {
    "id": 217,
    "question": "Quelle ville française fut la capitale des ducs de Bourgogne au XVe siècle ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Dijon", "correct": true, "explanation": "Centre politique des ducs Valois.", "confusion": 25},
      {"text": "Lyon", "correct": false, "explanation": "Ville royale sous les Capétiens.", "confusion": 70},
      {"text": "Metz", "correct": false, "explanation": "Importante en Lorraine.", "confusion": 65},
      {"text": "Arles", "correct": false, "explanation": "Ancien royaume médiéval.", "confusion": 75}
    ]
  },
  {
    "id": 218,
    "question": "Quel est le nom du premier réacteur nucléaire français lancé en 1948 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "ZOE", "correct": true, "explanation": "Réacteur à eau lourde construit au Fort de Châtillon.", "confusion": 45},
      {"text": "Phénix", "correct": false, "explanation": "Réacteur à neutrons rapides des années 1970.", "confusion": 70},
      {"text": "Superphénix", "correct": false, "explanation": "Années 1980, controverse écologique.", "confusion": 65},
      {"text": "Fessenheim", "correct": false, "explanation": "Centrale mise en service en 1977.", "confusion": 75}
    ]
  },
  {
    "id": 219,
    "question": "Quelle loi de 1880 instaura la fête nationale du 14 juillet ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Ferry", "correct": false, "explanation": "Sur l'école laïque en 1882.", "confusion": 70},
      {"text": "Loi Waldeck-Rousseau", "correct": true, "explanation": "Proposée par Benjamin Raspail.", "confusion": 35},
      {"text": "Loi Falloux", "correct": false, "explanation": "1850, sur l'enseignement religieux.", "confusion": 65},
      {"text": "Loi Goblet", "correct": false, "explanation": "1886, organisation de l'enseignement primaire.", "confusion": 75}
    ]
  },
  {
    "id": 220,
    "question": "Quel philosophe des Lumières a été embastillé pour ses écrits en 1749 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Denis Diderot", "correct": true, "explanation": "Emprisonné à Vincennes pour sa *Lettre sur les aveugles*.", "confusion": 30},
      {"text": "Voltaire", "correct": false, "explanation": "Emprisonné à la Bastille en 1717.", "confusion": 65},
      {"text": "Rousseau", "correct": false, "explanation": "Exilé, mais pas embastillé.", "confusion": 70},
      {"text": "Montesquieu", "correct": false, "explanation": "Jamais emprisonné.", "confusion": 75}
    ]
  },
  {
    "id": 221,
    "question": "Quelle île française fut une colonie pénitentiaire jusqu'en 1946 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "La Guyane", "correct": false, "explanation": "Bagne de Cayenne jusqu'en 1953.", "confusion": 60},
      {"text": "La Nouvelle-Calédonie", "correct": false, "explanation": "Transportation de communards.", "confusion": 70},
      {"text": "Saint-Pierre-et-Miquelon", "correct": false, "explanation": "Base de pêche.", "confusion": 75},
      {"text": "L'Île du Diable", "correct": true, "explanation": "Au large de la Guyane, fermée en 1946.", "confusion": 35}
    ]
  },
  {
    "id": 222,
    "question": "Quel traité de 1802 rétablit temporairement la paix entre la France et le Royaume-Uni ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Paix d'Amiens", "correct": true, "explanation": "Trêve courte dans les guerres napoléoniennes.", "confusion": 30},
      {"text": "Traité de Lunéville", "correct": false, "explanation": "1801, avec l'Autriche.", "confusion": 65},
      {"text": "Traité de Tilsit", "correct": false, "explanation": "1807, avec la Russie.", "confusion": 70},
      {"text": "Traité de Campo-Formio", "correct": false, "explanation": "1797, avec l'Autriche.", "confusion": 75}
    ]
  },
  {
    "id": 223,
    "question": "Quelle femme fut la première à siéger à l'Académie française en 1980 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Marguerite Yourcenar", "correct": true, "explanation": "Élue au fauteuil de Roger Caillois.", "confusion": 25},
      {"text": "Simone de Beauvoir", "correct": false, "explanation": "Jamais membre de l'Académie.", "confusion": 70},
      {"text": "Colette", "correct": false, "explanation": "Morte en 1954, non élue.", "confusion": 65},
      {"text": "Jacqueline de Romilly", "correct": false, "explanation": "Élue en 1988, deuxième femme.", "confusion": 75}
    ]
  },
  {
    "id": 224,
    "question": "Quelle révolte paysanne éclata en 1593 dans le Sud-Ouest de la France ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Révolte des Croquants", "correct": true, "explanation": "Soulèvement antifiscal sous Henri IV.", "confusion": 40},
      {"text": "Jacquerie", "correct": false, "explanation": "Révolte médiévale de 1358.", "confusion": 70},
      {"text": "Guerre des Camisards", "correct": false, "explanation": "Début XVIIIe siècle.", "confusion": 65},
      {"text": "Révolte des Bonnets rouges", "correct": false, "explanation": "XVIIe siècle en Bretagne.", "confusion": 75}
    ]
  },
  {
    "id": 225,
    "question": "Quel navigateur français a découvert les Îles Kerguelen en 1772 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Yves-Joseph de Kerguelen de Trémarec", "correct": true, "explanation": "Surnommées 'îles de la Désolation'.", "confusion": 35},
      {"text": "Marc-Joseph Marion du Fresne", "correct": false, "explanation": "Explora la Nouvelle-Zélande.", "confusion": 70},
      {"text": "Louis Antoine de Bougainville", "correct": false, "explanation": "Tour du monde en 1766-1769.", "confusion": 65},
      {"text": "Jean-François de La Pérouse", "correct": false, "explanation": "Disparu en 1788.", "confusion": 75}
    ]
  },
  {
    "id": 226,
    "question": "Quelle loi de 1971 légalisa l'avortement sous conditions en France ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Loi Neuwirth", "correct": false, "explanation": "1967, contraception.", "confusion": 65},
      {"text": "Loi Veil", "correct": false, "explanation": "1975, légalisation complète.", "confusion": 70},
      {"text": "Loi Pelletier", "correct": true, "explanation": "Autorisait l'IVG en cas de danger pour la mère.", "confusion": 40},
      {"text": "Loi Roudy", "correct": false, "explanation": "1983, égalité professionnelle.", "confusion": 75}
    ]
  },
  {
    "id": 227,
    "question": "Quel roi de France fut surnommé 'le Bien-Aimé' avant de devenir impopulaire ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Louis XV", "correct": true, "explanation": "Surnom après sa guérison de maladie en 1744.", "confusion": 25},
      {"text": "Louis XIV", "correct": false, "explanation": 'Surnommé "Roi-Soleil".', "confusion": 70},
      {"text": "Louis XVI", "correct": false, "explanation": "Dernier roi d'Ancien Régime.", "confusion": 65},
      {"text": "Charles X", "correct": false, "explanation": "Roi ultraconservateur renversé en 1830.", "confusion": 75}
    ]
  },
  {
    "id": 228,
    "question": "Quelle bataille de 1214 renforça le pouvoir royal sous Philippe Auguste ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Bouvines", "correct": true, "explanation": "Victoire contre une coalition européenne.", "confusion": 30},
      {"text": "Azincourt", "correct": false, "explanation": "1415, défaite française.", "confusion": 70},
      {"text": "Crécy", "correct": false, "explanation": "1346, guerre de Cent Ans.", "confusion": 65},
      {"text": "Poitiers", "correct": false, "explanation": "732, Charles Martel contre les Arabes.", "confusion": 75}
    ]
  },
  {
    "id": 229,
    "question": "Quel écrivain français a été ministre de la Culture sous Mitterrand ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "André Malraux", "correct": false, "explanation": "Ministre sous De Gaulle.", "confusion": 70},
      {"text": "Jack Lang", "correct": true, "explanation": "1981-1986 et 1988-1993.", "confusion": 25},
      {"text": "François Mauriac", "correct": false, "explanation": "Écrivain, pas ministre.", "confusion": 65},
      {"text": "Albert Camus", "correct": false, "explanation": "Jamais engagé en politique.", "confusion": 75}
    ]
  },
  {
    "id": 230,
    "question": "Quelle crise politique suivit l'affaire des biens mal acquis en 2009 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Affaire Karachi", "correct": false, "explanation": "Scandale d'armement des années 1990.", "confusion": 65},
      {"text": "Affaire Woerth-Bettencourt", "correct": true, "explanation": "Financement illégal de l'UMP.", "confusion": 40},
      {"text": "Affaire Bygmalion", "correct": false, "explanation": "Fraude électorale de 2014.", "confusion": 70},
      {"text": "Affaire Fillon", "correct": false, "explanation": "2017, emplois fictifs.", "confusion": 75}
    ]
  },
  {
    "id": 231,
    "question": "Quel traité de 1763 mit fin à la guerre de Sept Ans ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Traité de Paris", "correct": true, "explanation": "La France perd le Canada et l'Inde.", "confusion": 30},
      {"text": "Traité d'Utrecht", "correct": false, "explanation": "1713, Succession d'Espagne.", "confusion": 70},
      {"text": "Traité de Versailles", "correct": false, "explanation": "1919, fin de la Première Guerre mondiale.", "confusion": 65},
      {"text": "Traité de Ryswick", "correct": false, "explanation": "1697, guerre de la Ligue d'Augsbourg.", "confusion": 75}
    ]
  },
  {
    "id": 232,
    "question": "Quelle reine de France fut régente pendant la minorité de Louis XV ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Marie de Médicis", "correct": false, "explanation": "Régente de Louis XIII.", "confusion": 65},
      {"text": "Anne d'Autriche", "correct": false, "explanation": "Régente de Louis XIV.", "confusion": 70},
      {"text": "Marie Leszczyńska", "correct": false, "explanation": "Épouse de Louis XV, pas régente.", "confusion": 75},
      {"text": "Duchesse de Bourgogne", "correct": false, "explanation": "Morte avant la régence. La réponse correcte est *Philippe d'Orléans* (régent, mais pas reine).", "confusion": 90}
    ]
  },
  {
    "id": 233,
    "question": "Quelle loi de 2013 légalisa le mariage homosexuel en France ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Loi Taubira", "correct": true, "explanation": "Portée par Christiane Taubira, ministre de la Justice.", "confusion": 20},
      {"text": "Loi Guigou", "correct": false, "explanation": "1999, création du PACS.", "confusion": 70},
      {"text": "Loi Badinter", "correct": false, "explanation": "1981, abolition de la peine de mort.", "confusion": 65},
      {"text": "Loi Jospin", "correct": false, "explanation": "1989, éducation.", "confusion": 75}
    ]
  },
  {
    "id": 234,
    "question": "Quelle bataille de 1745 vit la victoire française en Belgique ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Fontenoy", "correct": true, "explanation": "Victoire de Maurice de Saxe sous Louis XV.", "confusion": 30},
      {"text": "Rocroi", "correct": false, "explanation": "1643, victoire française.", "confusion": 70},
      {"text": "Denain", "correct": false, "explanation": "1712, guerre de Succession d'Espagne.", "confusion": 65},
      {"text": "Malplaquet", "correct": false, "explanation": "1709, défaite française.", "confusion": 75}
    ]
  },
  {
    "id": 235,
    "question": "Quel philosophe français a écrit *Le Mythe de Sisyphe* en 1942 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Albert Camus", "correct": true, "explanation": "Ouvrage clé de l'absurde.", "confusion": 25},
      {"text": "Jean-Paul Sartre", "correct": false, "explanation": "Auteur de *L'Être et le Néant*.", "confusion": 70},
      {"text": "Simone de Beauvoir", "correct": false, "explanation": "Philosophe féministe.", "confusion": 65},
      {"text": "Maurice Merleau-Ponty", "correct": false, "explanation": "Phénoménologue.", "confusion": 75}
    ]
  },
  {
    "id": 236,
    "question": "Quelle ville française fut le siège du gouvernement en 1870-1871 pendant le siège de Paris ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Bordeaux", "correct": true, "explanation": "Gouvernement de la Défense nationale.", "confusion": 30},
      {"text": "Tours", "correct": false, "explanation": "Siège en 1870, puis Bordeaux.", "confusion": 65},
      {"text": "Versailles", "correct": false, "explanation": "Devient capitale après la Commune.", "confusion": 70},
      {"text": "Lyon", "correct": false, "explanation": "Jamais capitale officielle.", "confusion": 75}
    ]
  },
  {
    "id": 237,
    "question": "Quel édit de 1562 limita la liberté de culte des protestants ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Édit de Nantes", "correct": false, "explanation": "1598, édit de tolérance.", "confusion": 70},
      {"text": "Édit de Saint-Germain", "correct": true, "explanation": "Autorisait le culte protestant hors des villes.", "confusion": 40},
      {"text": "Édit de Fontainebleau", "correct": false, "explanation": "1685, révocation de l'édit de Nantes.", "confusion": 65},
      {"text": "Édit de Versailles", "correct": false, "explanation": "1787, édit de tolérance.", "confusion": 75}
    ]
  },
  {
    "id": 238,
    "question": "Quelle scientifique française a découvert la structure en double hélice de l'ADN ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Rosalind Franklin", "correct": false, "explanation": "Contribua via ses clichés, mais était britannique.", "confusion": 65},
      {"text": "Marie Curie", "correct": false, "explanation": "Travaux sur la radioactivité.", "confusion": 70},
      {"text": "Aucune Française", "correct": true, "explanation": "Découverte attribuée à Watson, Crick et Franklin.", "confusion": 50},
      {"text": "Françoise Barré-Sinoussi", "correct": false, "explanation": "Découvreuse du VIH.", "confusion": 75}
    ]
  },
  {
    "id": 239,
    "question": "Quelle loi de 1990 criminalisa la négation des crimes contre l'humanité ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Loi Gayssot", "correct": true, "explanation": "Portée par Jean-Claude Gayssot.", "confusion": 30},
      {"text": "Loi Pleven", "correct": false, "explanation": "1972, contre le racisme.", "confusion": 70},
      {"text": "Loi Taubira", "correct": false, "explanation": "2001, reconnaissance de l'esclavage.", "confusion": 65},
      {"text": "Loi Badinter", "correct": false, "explanation": "1981, abolition de la peine de mort.", "confusion": 75}
    ]
  },
  {
    "id": 240,
    "question": "Quel roi de France a été capturé à Pavie en 1525 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "François Ier", "correct": true, "explanation": "Fait prisonnier par Charles Quint.", "confusion": 20},
      {"text": "Henri II", "correct": false, "explanation": "Mort lors d'un tournoi en 1559.", "confusion": 70},
      {"text": "Louis XII", "correct": false, "explanation": "Prédécesseur de François Ier.", "confusion": 65},
      {"text": "Charles VIII", "correct": false, "explanation": "Mort en 1498.", "confusion": 75}
    ]
  },
  {
    "id": 241,
    "question": "Quel traité mit fin à la guerre de Cent Ans en 1453 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Traité de Troyes", "correct": false, "explanation": "Signé en 1420, il déshéritait le dauphin Charles.", "confusion": 65},
      {"text": "Traité de Picquigny", "correct": true, "explanation": "Signé en 1475, il marqua la fin officielle du conflit.", "confusion": 30},
      {"text": "Traité de Brétigny", "correct": false, "explanation": "Signé en 1360 pendant une trêve.", "confusion": 70},
      {"text": "Traité de Calais", "correct": false, "explanation": "Aucun traité majeur ne porte ce nom en 1453.", "confusion": 75}
    ]
  },
  {
    "id": 242,
    "question": "Qui a dirigé la France pendant les Cent-Jours en 1815 ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Louis XVIII", "correct": false, "explanation": "Fuite pendant le retour de Napoléon.", "confusion": 60},
      {"text": "Napoléon Ier", "correct": true, "explanation": "Retour au pouvoir avant Waterloo.", "confusion": 10},
      {"text": "Napoléon III", "correct": false, "explanation": "Ne régna qu'à partir de 1852.", "confusion": 75},
      {"text": "Louis-Philippe", "correct": false, "explanation": "Roi des Français à partir de 1830.", "confusion": 70}
    ]
  },
  {
    "id": 243,
    "question": "Quelle bataille marqua la fin de la domination française en Inde au XVIIIe siècle ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Bataille de Plassey", "correct": false, "explanation": "1757, victoire britannique au Bengale.", "confusion": 65},
      {"text": "Bataille de Wandiwash", "correct": true, "explanation": "1760, défaite française décisive.", "confusion": 40},
      {"text": "Bataille de Buxar", "correct": false, "explanation": "1764, conflit postérieur.", "confusion": 70},
      {"text": "Bataille de Seringapatam", "correct": false, "explanation": "1799, contre le sultan de Mysore.", "confusion": 75}
    ]
  },
  {
    "id": 244,
    "question": "Quelle loi de 1884 légalisa les syndicats en France ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Loi Waldeck-Rousseau", "correct": true, "explanation": "Autorisa les organisations syndicales.", "confusion": 30},
      {"text": "Loi Le Chapelier", "correct": false, "explanation": "1791, interdisait les corporations.", "confusion": 70},
      {"text": "Loi Ollivier", "correct": false, "explanation": "1864, adoucit le droit de grève.", "confusion": 65},
      {"text": "Loi Auroux", "correct": false, "explanation": "1982, droits des travailleurs.", "confusion": 75}
    ]
  },
  {
    "id": 245,
    "question": "Quel roi de France a été sacré à Reims à l'âge de 4 ans ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Louis XIII", "correct": false, "explanation": "Sacré à 9 ans en 1610.", "confusion": 65},
      {"text": "Jean Ier", "correct": true, "explanation": "Roi posthume en 1316, mort après 5 jours.", "confusion": 45},
      {"text": "Henri III", "correct": false, "explanation": "Sacré à 22 ans en 1574.", "confusion": 70},
      {"text": "Charles VI", "correct": false, "explanation": "Sacré à 11 ans en 1380.", "confusion": 75}
    ]
  },
  {
    "id": 246,
    "question": "Quelle invention majeure est associée à Louis Pasteur ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Le vaccin contre la rage", "correct": true, "explanation": "Développé en 1885.", "confusion": 15},
      {"text": "La pasteurisation", "correct": false, "explanation": "Procédé de conservation, pas une invention directe.", "confusion": 60},
      {"text": "Le microscope", "correct": false, "explanation": "Existait déjà au XVIIe siècle.", "confusion": 75},
      {"text": "L'aspirine", "correct": false, "explanation": "Synthétisée par Bayer en 1897.", "confusion": 70}
    ]
  },
  {
    "id": 247,
    "question": "Quelle crise politique éclata en France après la mort de François Ier en 1547 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "La Fronde", "correct": false, "explanation": "Survint un siècle plus tard (1648-1653).", "confusion": 65},
      {"text": "Les guerres de Religion", "correct": false, "explanation": "Débutèrent en 1562.", "confusion": 70},
      {"text": "La conspiration d'Amboise", "correct": true, "explanation": "1560, tentative d'enlèvement de François II.", "confusion": 40},
      {"text": "Le soulèvement des va-nu-pieds", "correct": false, "explanation": "Révolte fiscale en 1639.", "confusion": 75}
    ]
  },
  {
    "id": 248,
    "question": "Quel traité de 1748 mit fin à la guerre de Succession d'Autriche ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Traité d'Aix-la-Chapelle", "correct": true, "explanation": "Restaure les frontières d'avant-guerre.", "confusion": 35},
      {"text": "Traité de Paris", "correct": false, "explanation": "1763, fin de la guerre de Sept Ans.", "confusion": 70},
      {"text": "Traité d'Utrecht", "correct": false, "explanation": "1713, guerre de Succession d'Espagne.", "confusion": 65},
      {"text": "Traité de Rastatt", "correct": false, "explanation": "1714, complète le traité d'Utrecht.", "confusion": 75}
    ]
  },
  {
    "id": 249,
    "question": "Quelle reine de France fut régente pendant la minorité de Louis XIII ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Marie de Médicis", "correct": true, "explanation": "Mère de Louis XIII, régente de 1610 à 1617.", "confusion": 30},
      {"text": "Anne d'Autriche", "correct": false, "explanation": "Régente pour Louis XIV.", "confusion": 70},
      {"text": "Catherine de Médicis", "correct": false, "explanation": "Régente pour Charles IX.", "confusion": 65},
      {"text": "Marie-Antoinette", "correct": false, "explanation": "Reine sous Louis XVI.", "confusion": 75}
    ]
  },
  {
    "id": 250,
    "question": "Quel écrivain français a remporté le premier prix Nobel de littérature en 1901 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Victor Hugo", "correct": false, "explanation": "Mort en 1885.", "confusion": 70},
      {"text": "Émile Zola", "correct": false, "explanation": "Mort en 1902.", "confusion": 65},
      {"text": "Sully Prudhomme", "correct": true, "explanation": "Premier lauréat du prix.", "confusion": 40},
      {"text": "Marcel Proust", "correct": false, "explanation": "Actif au début du XXe siècle.", "confusion": 75}
    ]
  },
  {
    "id": 251,
    "question": "Quelle bataille de 1429 permit à Jeanne d'Arc de libérer Orléans ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Bataille de Patay", "correct": false, "explanation": "Victoire française postérieure.", "confusion": 60},
      {"text": "Siège d'Orléans", "correct": true, "explanation": "Levée du siège par Jeanne d'Arc.", "confusion": 25},
      {"text": "Bataille de Jargeau", "correct": false, "explanation": "Autre victoire de la campagne de la Loire.", "confusion": 70},
      {"text": "Bataille de Formigny", "correct": false, "explanation": "1450, fin de la guerre de Cent Ans.", "confusion": 75}
    ]
  },
  {
    "id": 252,
    "question": "Quelle loi de 1905 instaura la séparation des Églises et de l'État en France ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Loi Combes", "correct": false, "explanation": "Anticléricale mais antérieure à 1905.", "confusion": 65},
      {"text": "Loi Briand", "correct": true, "explanation": "Portée par Aristide Briand.", "confusion": 20},
      {"text": "Loi Ferry", "correct": false, "explanation": "1880s, école laïque.", "confusion": 70},
      {"text": "Loi Falloux", "correct": false, "explanation": "1850, éducation religieuse.", "confusion": 75}
    ]
  },
  {
    "id": 253,
    "question": "Quel explorateur français a donné son nom à un détroit près du Québec ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Jacques Cartier", "correct": false, "explanation": "Explora le Saint-Laurent.", "confusion": 65},
      {"text": "Samuel de Champlain", "correct": false, "explanation": "Fondateur de Québec.", "confusion": 70},
      {"text": "Jean Cabot", "correct": false, "explanation": "Navigateur italien pour l'Angleterre.", "confusion": 75},
      {"text": "Jacques Marquette", "correct": true, "explanation": "Détroit de Mackinac (nom anglicisé).", "confusion": 40}
    ]
  },
  {
    "id": 254,
    "question": "Quelle révolte urbaine secoua Rouen en 1639 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Révolte des Nu-pieds", "correct": true, "explanation": "Soulèvement antifiscal en Normandie.", "confusion": 35},
      {"text": "Révolte des Croquants", "correct": false, "explanation": "Dans le Sud-Ouest en 1593-1595.", "confusion": 70},
      {"text": "Guerre des Farines", "correct": false, "explanation": "1775, crise frumentaire.", "confusion": 65},
      {"text": "Révolte des Bonnets rouges", "correct": false, "explanation": "1675, en Bretagne.", "confusion": 75}
    ]
  },
  {
    "id": 255,
    "question": "Quelle scientifique française découvrit le radium en 1898 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Irène Joliot-Curie", "correct": false, "explanation": "Découvrit la radioactivité artificielle.", "confusion": 65},
      {"text": "Marie Curie", "correct": true, "explanation": "Avec son mari Pierre Curie.", "confusion": 20},
      {"text": "Lise Meitner", "correct": false, "explanation": "Physicienne autrichienne.", "confusion": 75},
      {"text": "Rosalind Franklin", "correct": false, "explanation": "Travaux sur l'ADN.", "confusion": 70}
    ]
  },
  {
    "id": 256,
    "question": "Quel traité de 1920 officialisa le mandat français sur la Syrie et le Liban ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Accords Sykes-Picot", "correct": false, "explanation": "1916, partage du Moyen-Orient.", "confusion": 65},
      {"text": "Traité de Sèvres", "correct": true, "explanation": "Définit les mandats après la Première Guerre mondiale.", "confusion": 40},
      {"text": "Traité de Lausanne", "correct": false, "explanation": "1923, remplace Sèvres pour la Turquie.", "confusion": 70},
      {"text": "Accords de San Remo", "correct": false, "explanation": "1920, répartition des mandats.", "confusion": 75}
    ]
  },
  {
    "id": 257,
    "question": "Quelle bataille de 1746 vit la victoire française en Inde pendant la guerre de Succession d'Autriche ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Bataille de Madras", "correct": true, "explanation": "Prise de la ville par La Bourdonnais.", "confusion": 45},
      {"text": "Bataille de Plassey", "correct": false, "explanation": "1757, victoire britannique au Bengale.", "confusion": 70},
      {"text": "Bataille de Wandiwash", "correct": false, "explanation": "1760, défaite française.", "confusion": 65},
      {"text": "Bataille de Buxar", "correct": false, "explanation": "1764, conflit postérieur.", "confusion": 75}
    ]
  },
  {
    "id": 258,
    "question": "Quel roi de France institua le premier impôt permanent sur le sel ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Philippe IV le Bel", "correct": false, "explanation": "Centralisateur mais pas lié à la gabelle.", "confusion": 65},
      {"text": "Louis IX", "correct": false, "explanation": "Réformateur mais antérieur à la gabelle.", "confusion": 70},
      {"text": "Charles V", "correct": true, "explanation": "Instaura la gabelle comme impôt permanent au XIVe siècle.", "confusion": 35},
      {"text": "François Ier", "correct": false, "explanation": "Règne au XVIe siècle.", "confusion": 75}
    ]
  },
  {
    "id": 259,
    "question": "Quelle loi de 1998 instaura les 35 heures de travail hebdomadaires ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Aubry", "correct": true, "explanation": "Portée par Martine Aubry.", "confusion": 25},
      {"text": "Loi Jospin", "correct": false, "explanation": "Réforme éducative de 1989.", "confusion": 70},
      {"text": "Loi Fillon", "correct": false, "explanation": "2003, réforme des retraites.", "confusion": 65},
      {"text": "Loi Woerth", "correct": false, "explanation": "2010, retraites.", "confusion": 75}
    ]
  },
  {
    "id": 260,
    "question": "Quelle reine de France introduisit l'étiquette espagnole à la cour ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Anne d'Autriche", "correct": true, "explanation": "Influence de son éducation à la cour d'Espagne.", "confusion": 30},
      {"text": "Catherine de Médicis", "correct": false, "explanation": "Introduisit des usages italiens.", "confusion": 70},
      {"text": "Marie Leszczyńska", "correct": false, "explanation": "Épouse de Louis XV.", "confusion": 65},
      {"text": "Marie-Antoinette", "correct": false, "explanation": "Influence autrichienne.", "confusion": 75}
    ]
  },
  {
    "id": 261,
    "question": "Quel traité de 1919 redessina les frontières de l'Europe après la Première Guerre mondiale ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Traité de Versailles", "correct": true, "explanation": "Imposa des réparations à l'Allemagne.", "confusion": 20},
      {"text": "Traité de Trianon", "correct": false, "explanation": "1920, concernait la Hongrie.", "confusion": 70},
      {"text": "Traité de Saint-Germain", "correct": false, "explanation": "1919, dissolution de l'Autriche-Hongrie.", "confusion": 65},
      {"text": "Traité de Neuilly", "correct": false, "explanation": "1919, concernait la Bulgarie.", "confusion": 75}
    ]
  },
  {
    "id": 262,
    "question": "Quelle bataille de 1793 vit la victoire des Républicains contre les Vendéens ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Bataille de Savenay", "correct": true, "explanation": "Écrasement final de l'armée catholique et royale.", "confusion": 35},
      {"text": "Bataille de Cholet", "correct": false, "explanation": "1793, défaite vendéenne.", "confusion": 65},
      {"text": "Bataille de Nantes", "correct": false, "explanation": "1793, échec des Vendéens.", "confusion": 70},
      {"text": "Bataille de Fleurus", "correct": false, "explanation": "1794, victoire en Belgique.", "confusion": 75}
    ]
  },
  {
    "id": 263,
    "question": "Quelle loi de 1972 renforça la lutte contre le racisme en France ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Pleven", "correct": true, "explanation": "Criminalisa les discours racistes.", "confusion": 30},
      {"text": "Loi Gayssot", "correct": false, "explanation": "1990, contre le négationnisme.", "confusion": 70},
      {"text": "Loi Taubira", "correct": false, "explanation": "2001, reconnaissance de l'esclavage.", "confusion": 65},
      {"text": "Loi Avia", "correct": false, "explanation": "2020, contre la haine en ligne.", "confusion": 75}
    ]
  },
  {
    "id": 264,
    "question": "Quel explorateur français cartographia la Nouvelle-Calédonie en 1774 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Louis Antoine de Bougainville", "correct": false, "explanation": "Explora le Pacifique dans les années 1760.", "confusion": 65},
      {"text": "James Cook", "correct": false, "explanation": "Explorateur britannique.", "confusion": 70},
      {"text": "Julien Crozet", "correct": true, "explanation": "Navigateur sous Marion-Dufresne.", "confusion": 40},
      {"text": "Jean-François de La Pérouse", "correct": false, "explanation": "Disparu en 1788.", "confusion": 75}
    ]
  },
  {
    "id": 265,
    "question": "Quelle crise politique suivit l'affaire Dreyfus en 1894 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Scandale de Panama", "correct": false, "explanation": "Années 1880, corruption liée au canal.", "confusion": 70},
      {"text": "Affaire Boulanger", "correct": false, "explanation": "Crise politique des années 1880.", "confusion": 65},
      {"text": "Affaire des fiches", "correct": false, "explanation": "1904, surveillance des officiers.", "confusion": 75},
      {"text": "Aucune des réponses", "correct": true, "explanation": "L'affaire Dreyfus elle-même fut la crise majeure.", "confusion": 50}
    ]
  },
  {
    "id": 266,
    "question": "Quelle bataille de 1709 fut une défaite majeure de Louis XIV ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Bataille de Malplaquet", "correct": true, "explanation": "Victoire coûteuse des Alliés.", "confusion": 35},
      {"text": "Bataille de Blenheim", "correct": false, "explanation": "1704, défaite française.", "confusion": 70},
      {"text": "Bataille de Ramillies", "correct": false, "explanation": "1706, perte des Pays-Bas espagnols.", "confusion": 65},
      {"text": "Bataille d'Audenarde", "correct": false, "explanation": "1708, défaite française.", "confusion": 75}
    ]
  },
  {
    "id": 267,
    "question": "Quelle loi de 1882 rendit l'école primaire obligatoire en France ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Loi Ferry", "correct": true, "explanation": "Jules Ferry, ministre de l'Instruction publique.", "confusion": 20},
      {"text": "Loi Goblet", "correct": false, "explanation": "1886, organisation de l'enseignement.", "confusion": 70},
      {"text": "Loi Falloux", "correct": false, "explanation": "1850, favorisait l'enseignement religieux.", "confusion": 65},
      {"text": "Loi Guizot", "correct": false, "explanation": "1833, école primaire pour garçons.", "confusion": 75}
    ]
  },
  {
    "id": 268,
    "question": "Quel roi de France a été capturé à Pavie en 1525 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "François Ier", "correct": true, "explanation": "Fait prisonnier par Charles Quint.", "confusion": 20},
      {"text": "Henri II", "correct": false, "explanation": "Mort lors d'un tournoi en 1559.", "confusion": 70},
      {"text": "Louis XII", "correct": false, "explanation": "Prédécesseur de François Ier.", "confusion": 65},
      {"text": "Charles VIII", "correct": false, "explanation": "Mort en 1498.", "confusion": 75}
    ]
  },
  {
    "id": 269,
    "question": "Quelle invention est associée aux frères Lumière en 1895 ?",
    "difficulty": 50,
    "points": 15,
    "answers": [
      {"text": "Le cinématographe", "correct": true, "explanation": "Première projection publique.", "confusion": 10},
      {"text": "La photographie", "correct": false, "explanation": "Inventée par Nicéphore Niépce.", "confusion": 75},
      {"text": "Le phonographe", "correct": false, "explanation": "Thomas Edison en 1877.", "confusion": 70},
      {"text": "La lampe à incandescence", "correct": false, "explanation": "Joseph Swan et Edison.", "confusion": 65}
    ]
  },
  {
    "id": 270,
    "question": "Quelle région française fut le théâtre de la révolte des Camisards ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Les Cévennes", "correct": true, "explanation": "Révolte protestante (1702-1704).", "confusion": 30},
      {"text": "La Vendée", "correct": false, "explanation": "Guerre de Vendée (1793-1796).", "confusion": 70},
      {"text": "La Bretagne", "correct": false, "explanation": "Révolte des Bonnets rouges (1675).", "confusion": 65},
      {"text": "Le Languedoc", "correct": false, "explanation": "Région voisine des Cévennes.", "confusion": 75}
    ]
  },
  {
    "id": 271,
    "question": "Quel traité mit fin à la guerre de Dévolution en 1668 ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Traité d'Aix-la-Chapelle", "correct": true, "explanation": "Louis XIV conserve des villes flamandes mais rend la Franche-Comté.", "confusion": 30},
      {"text": "Traité des Pyrénées", "correct": false, "explanation": "1659, fin de la guerre franco-espagnole.", "confusion": 70},
      {"text": "Traité de Nimègue", "correct": false, "explanation": "1678, fin de la guerre de Hollande.", "confusion": 65},
      {"text": "Traité de Ryswick", "correct": false, "explanation": "1697, guerre de la Ligue d'Augsbourg.", "confusion": 75}
    ]
  },
  {
    "id": 272,
    "question": "Quelle loi de 1946 créa la Sécurité sociale en France ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Ordonnances de 1945", "correct": true, "explanation": "Portées par Ambroise Croizat sous le gouvernement provisoire.", "confusion": 35},
      {"text": "Loi Boulin", "correct": false, "explanation": "1972, sur la formation professionnelle.", "confusion": 70},
      {"text": "Loi Neuwirth", "correct": false, "explanation": "1967, contraception.", "confusion": 65},
      {"text": "Loi Faure", "correct": false, "explanation": "1968, réforme universitaire.", "confusion": 75}
    ]
  },
  {
    "id": 273,
    "question": "Quel roi de France fut surnommé 'le Prudent' ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Henri III", "correct": true, "explanation": "Dernier roi Valois, connu pour sa rigueur administrative.", "confusion": 40},
      {"text": "Charles V", "correct": false, "explanation": "Surnommé 'le Sage'.", "confusion": 65},
      {"text": "Louis XI", "correct": false, "explanation": "Surnommé 'l'Araignée Universelle'.", "confusion": 70},
      {"text": "François Ier", "correct": false, "explanation": "Surnommé 'le Père des Lettres'.", "confusion": 75}
    ]
  },
  {
    "id": 274,
    "question": "Quelle bataille navale de 1690 vit la victoire française contre les Anglo-Hollandais ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Bataille de Béveziers", "correct": true, "explanation": "Victoire de Tourville pendant la guerre de la Ligue d'Augsbourg.", "confusion": 35},
      {"text": "Bataille de La Hougue", "correct": false, "explanation": "Défaite française en 1692.", "confusion": 65},
      {"text": "Bataille de Barfleur", "correct": false, "explanation": "1692, même campagne que La Hougue.", "confusion": 70},
      {"text": "Bataille de Lagos", "correct": false, "explanation": "1693, victoire française postérieure.", "confusion": 75}
    ]
  },
  {
    "id": 275,
    "question": "Quelle exploratrice française traversa l'Afrique équatoriale dans les années 1920 ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Alexandra David-Néel", "correct": false, "explanation": "Explora l'Asie.", "confusion": 65},
      {"text": "Odette du Puigaudeau", "correct": true, "explanation": "Pionnière de l'ethnographie en Mauritanie.", "confusion": 45},
      {"text": "Isabelle Eberhardt", "correct": false, "explanation": "Voyageuse en Afrique du Nord.", "confusion": 70},
      {"text": "Ella Maillart", "correct": false, "explanation": "Exploratrice suisse en Asie.", "confusion": 75}
    ]
  },
  {
    "id": 276,
    "question": "Quelle institution créa le franc germinal en 1803 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "La Banque de France", "correct": true, "explanation": "Sous Napoléon Bonaparte, stabilisation monétaire.", "confusion": 30},
      {"text": "Le Conseil des Anciens", "correct": false, "explanation": "Assemblée sous le Directoire.", "confusion": 70},
      {"text": "La Caisse d'escompte", "correct": false, "explanation": "Institution financière prérévolutionnaire.", "confusion": 65},
      {"text": "Le Trésor public", "correct": false, "explanation": "Créé plus tardivement.", "confusion": 75}
    ]
  },
  {
    "id": 277,
    "question": "Quel traité de 1912 établit le protectorat français au Maroc ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Traité de Fès", "correct": true, "explanation": "Signé avec le sultan Moulay Abd al-Hafid.", "confusion": 35},
      {"text": "Traité du Bardo", "correct": false, "explanation": "1881, protectorat en Tunisie.", "confusion": 70},
      {"text": "Accords d'Évian", "correct": false, "explanation": "1962, indépendance algérienne.", "confusion": 65},
      {"text": "Convention de La Marsa", "correct": false, "explanation": "1883, renforce le protectorat tunisien.", "confusion": 75}
    ]
  },
  {
    "id": 278,
    "question": "Quelle loi de 1976 instaura les réserves naturelles en France ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi relative à la protection de la nature", "correct": true, "explanation": "Portée par Roland Nungesser.", "confusion": 30},
      {"text": "Loi Littoral", "correct": false, "explanation": "1986, protection des côtes.", "confusion": 70},
      {"text": "Loi Barnier", "correct": false, "explanation": "1995, risques naturels.", "confusion": 65},
      {"text": "Loi Grenelle II", "correct": false, "explanation": "2010, développement durable.", "confusion": 75}
    ]
  },
  {
    "id": 279,
    "question": "Quel roi de France institua les 'lettres de cachet' ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Louis XIV", "correct": true, "explanation": "Outil de l'absolutisme royal pour emprisonner sans procès.", "confusion": 40},
      {"text": "François Ier", "correct": false, "explanation": "Période de la Renaissance.", "confusion": 70},
      {"text": "Henri IV", "correct": false, "explanation": "Pacification du royaume.", "confusion": 65},
      {"text": "Charles IX", "correct": false, "explanation": "Règne pendant les guerres de Religion.", "confusion": 75}
    ]
  },
  {
    "id": 280,
    "question": "Quelle crise politique suivit l'exécution du duc d'Enghien en 1804 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "La conspiration de Cadoudal", "correct": true, "explanation": "Exécution liée à un complot royaliste.", "confusion": 35},
      {"text": "L'affaire des poisons", "correct": false, "explanation": "Sous Louis XIV.", "confusion": 70},
      {"text": "Le complot des libelles", "correct": false, "explanation": "Fiction historique.", "confusion": 65},
      {"text": "La révolte des Canuts", "correct": false, "explanation": "1831, soulèvement ouvrier.", "confusion": 75}
    ]
  },
  {
    "id": 281,
    "question": "Quelle bataille de 1744 vit la victoire française en Italie pendant la guerre de Succession d'Autriche ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Bataille de Madonna dell'Olmo", "correct": true, "explanation": "Victoire contre les Sardes et les Autrichiens.", "confusion": 40},
      {"text": "Bataille de Fontenoy", "correct": false, "explanation": "1745, en Belgique.", "confusion": 65},
      {"text": "Bataille de Dettingen", "correct": false, "explanation": "1743, défaite française.", "confusion": 70},
      {"text": "Bataille de Rocourt", "correct": false, "explanation": "1746, victoire française.", "confusion": 75}
    ]
  },
  {
    "id": 282,
    "question": "Quelle loi de 1982 décentralisa le pouvoir en France ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Defferre", "correct": true, "explanation": "Gaston Defferre, ministre de l'Intérieur.", "confusion": 25},
      {"text": "Loi Chevènement", "correct": false, "explanation": "1999, intercommunalité.", "confusion": 70},
      {"text": "Loi Pasqua", "correct": false, "explanation": "1995, aménagement du territoire.", "confusion": 65},
      {"text": "Loi Joxe", "correct": false, "explanation": "1992, organisation territoriale.", "confusion": 75}
    ]
  },
  {
    "id": 283,
    "question": "Quel explorateur français disparut en 1785 en tentant de traverser l'Australie ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Jean-François de La Pérouse", "correct": false, "explanation": "Disparu dans le Pacifique en 1788.", "confusion": 65},
      {"text": "Nicolas Baudin", "correct": false, "explanation": "Cartographia l'Australie en 1801-1803.", "confusion": 70},
      {"text": "Louis Antoine de Bougainville", "correct": false, "explanation": "Premier Français à faire le tour du monde.", "confusion": 75},
      {"text": "Bruno de Hecquet", "correct": true, "explanation": "Expédition mal documentée dans le désert australien.", "confusion": 50}
    ]
  },
  {
    "id": 284,
    "question": "Quelle reine de France fut mécène de l'Encyclopédie de Diderot ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Marie Leszczyńska", "correct": true, "explanation": "Épouse de Louis XV, soutien discret des Lumières.", "confusion": 40},
      {"text": "Marie-Antoinette", "correct": false, "explanation": "Arrivée en France en 1770, trop tardive.", "confusion": 70},
      {"text": "Catherine de Médicis", "correct": false, "explanation": "Mécène de la Renaissance.", "confusion": 65},
      {"text": "Anne d'Autriche", "correct": false, "explanation": "Régente au XVIIe siècle.", "confusion": 75}
    ]
  },
  {
    "id": 285,
    "question": "Quelle bataille de 1741 opposa la France à l'Autriche en Bohême ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Bataille de Chotusitz", "correct": true, "explanation": "Victoire autrichienne pendant la guerre de Succession d'Autriche.", "confusion": 45},
      {"text": "Bataille de Mollwitz", "correct": false, "explanation": "1741, victoire prussienne.", "confusion": 70},
      {"text": "Bataille de Dettingen", "correct": false, "explanation": "1743, défaite française.", "confusion": 65},
      {"text": "Bataille de Fontenoy", "correct": false, "explanation": "1745, victoire française.", "confusion": 75}
    ]
  },
  {
    "id": 286,
    "question": "Quelle loi de 1941 instaura le STO (Service du Travail Obligatoire) ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Loi Charte du Travail", "correct": false, "explanation": "1941, organisation corporatiste.", "confusion": 70},
      {"text": "Loi sur la Relève", "correct": true, "explanation": "Échange de prisonniers contre des travailleurs.", "confusion": 35},
      {"text": "Loi du 4 octobre 1941", "correct": false, "explanation": "Régime de Vichy antisémite.", "confusion": 65},
      {"text": "Loi du 16 février 1943", "correct": false, "explanation": "Généralisation du STO.", "confusion": 75}
    ]
  },
  {
    "id": 287,
    "question": "Quel traité de 1529 partagea les terres italiennes entre François Ier et Charles Quint ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Paix des Dames", "correct": true, "explanation": "Signée à Cambrai, met fin à la 2e guerre d'Italie.", "confusion": 40},
      {"text": "Traité de Madrid", "correct": false, "explanation": "1526, François Ier prisonnier.", "confusion": 70},
      {"text": "Traité de Cateau-Cambrésis", "correct": false, "explanation": "1559, fin des guerres d'Italie.", "confusion": 65},
      {"text": "Traité de Crépy", "correct": false, "explanation": "1544, paix temporaire.", "confusion": 75}
    ]
  },
  {
    "id": 288,
    "question": "Quelle révolte paysanne éclata en Sologne en 1658 ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Révolte des Sabotiers", "correct": true, "explanation": "Contre les taxes sur le bois.", "confusion": 45},
      {"text": "Jacquerie", "correct": false, "explanation": "Révolte médiévale de 1358.", "confusion": 70},
      {"text": "Guerre des Gaules", "correct": false, "explanation": "Antiquité, conquête romaine.", "confusion": 65},
      {"text": "Révolte des Croquants", "correct": false, "explanation": "1593-1595 dans le Sud-Ouest.", "confusion": 75}
    ]
  },
  {
    "id": 289,
    "question": "Quel architecte français conçut le Panthéon à Paris ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Jacques-Germain Soufflot", "correct": true, "explanation": "Église Sainte-Geneviève devenue Panthéon.", "confusion": 25},
      {"text": "Ange-Jacques Gabriel", "correct": false, "explanation": "Architecte de la Place de la Concorde.", "confusion": 70},
      {"text": "Claude Nicolas Ledoux", "correct": false, "explanation": "Architecte utopiste du XVIIIe siècle.", "confusion": 65},
      {"text": "Jean Chalgrin", "correct": false, "explanation": "Concepteur de l'Arc de Triomphe.", "confusion": 75}
    ]
  },
  {
    "id": 290,
    "question": "Quelle institution médiévale était chargée de collecter les impôts royaux ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Les États généraux", "correct": false, "explanation": "Convoqués en cas de crise, pas de collecte d'impôts.", "confusion": 60},
      {"text": "La Chambre des comptes", "correct": true, "explanation": "Créée par Philippe IV le Bel pour gérer les finances royales.", "confusion": 25},
      {"text": "Le Parlement de Paris", "correct": false, "explanation": "Cour de justice, pas financière.", "confusion": 70},
      {"text": "La Sainte Inquisition", "correct": false, "explanation": "Tribunal religieux, sans rôle fiscal.", "confusion": 85}
    ]
  },
  {
    "id": 291,
    "question": "Quel traité de 1529 partagea les territoires italiens entre la France et l'Espagne ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Traité de Cateau-Cambrésis", "correct": false, "explanation": "Signé en 1559, postérieur.", "confusion": 70},
      {"text": "Paix des Dames", "correct": true, "explanation": "Aussi appelé traité de Cambrai, négocié par Louise de Savoie et Marguerite d'Autriche.", "confusion": 40},
      {"text": "Traité de Tordesillas", "correct": false, "explanation": "1494, partage du Nouveau Monde.", "confusion": 80},
      {"text": "Traité de Bruges", "correct": false, "explanation": "Aucun traité majeur sous ce nom en 1529.", "confusion": 75}
    ]
  },
  {
    "id": 292,
    "question": "Quelle loi de 1974 abaissa la majorité civile de 21 à 18 ans ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Loi Pleven", "correct": false, "explanation": "Contre le racisme en 1972.", "confusion": 70},
      {"text": "Loi Veil", "correct": false, "explanation": "Sur l'IVG en 1975.", "confusion": 65},
      {"text": "Loi Haby", "correct": false, "explanation": "Réforme éducative en 1975.", "confusion": 75},
      {"text": "Loi du 5 juillet 1974", "correct": true, "explanation": "Portée par Valéry Giscard d'Estaing.", "confusion": 30}
    ]
  },
  {
    "id": 293,
    "question": "Quel roi de France a institué le premier impôt direct permanent, la taille ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Louis XI", "correct": false, "explanation": "Consolida la fiscalité mais ne créa pas la taille.", "confusion": 65},
      {"text": "Charles VII", "correct": true, "explanation": "Instaurée en 1439 pour financer l'armée permanente.", "confusion": 35},
      {"text": "François Ier", "correct": false, "explanation": "Règne au XVIe siècle, postérieur.", "confusion": 70},
      {"text": "Henri IV", "correct": false, "explanation": "Réforma la fiscalité mais ne créa pas la taille.", "confusion": 75}
    ]
  },
  {
    "id": 294,
    "question": "Quelle bataille navale de 1690 vit la victoire française contre les Anglo-Hollandais ?",
    "difficulty": 75,
    "points": 25,
    "answers": [
      {"text": "Bataille de la Hougue", "correct": false, "explanation": "Défaite française en 1692.", "confusion": 60},
      {"text": "Bataille de Beachy Head", "correct": true, "explanation": "Victoire de Tourville sous Louis XIV.", "confusion": 40},
      {"text": "Bataille de Barfleur", "correct": false, "explanation": "1692, défaite française.", "confusion": 70},
      {"text": "Bataille de Lagos", "correct": false, "explanation": "1693, victoire française mineure.", "confusion": 75}
    ]
  },
  {
    "id": 295,
    "question": "Quel philosophe français fut le précepteur de Louis XV ?",
    "difficulty": 80,
    "points": 30,
    "answers": [
      {"text": "Voltaire", "correct": false, "explanation": "Proche de Frédéric II de Prusse, pas de Louis XV.", "confusion": 70},
      {"text": "Jean-Jacques Rousseau", "correct": false, "explanation": "Jamais précepteur royal.", "confusion": 75},
      {"text": "André-Hercule de Fleury", "correct": false, "explanation": "Tuteur politique, pas précepteur.", "confusion": 65},
      {"text": "François Fénelon", "correct": true, "explanation": "Précepteur du duc de Bourgogne, grand-père de Louis XV.", "confusion": 45}
    ]
  },
  {
    "id": 296,
    "question": "Quelle loi de 1833 rendit l'école primaire obligatoire pour les garçons ?",
    "difficulty": 65,
    "points": 20,
    "answers": [
      {"text": "Loi Guizot", "correct": true, "explanation": "François Guizot, ministre de Louis-Philippe.", "confusion": 30},
      {"text": "Loi Ferry", "correct": false, "explanation": "1882, école laïque et obligatoire.", "confusion": 70},
      {"text": "Loi Falloux", "correct": false, "explanation": "1850, éducation religieuse.", "confusion": 65},
      {"text": "Loi Carnot", "correct": false, "explanation": "1848, éducation publique.", "confusion": 75}
    ]
  },
  {
    "id": 297,
    "question": "Quelle révolte antifiscale éclata en Normandie en 1639 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "Révolte des Croquants", "correct": false, "explanation": "Sud-Ouest en 1593-1595.", "confusion": 65},
      {"text": "Révolte des Va-nu-pieds", "correct": true, "explanation": "Contestation de la gabelle et d'autres taxes.", "confusion": 35},
      {"text": "Guerre des Farines", "correct": false, "explanation": "1775, crise frumentaire.", "confusion": 70},
      {"text": "Révolte des Bonnets rouges", "correct": false, "explanation": "Bretagne en 1675.", "confusion": 75}
    ]
  },
  {
    "id": 298,
    "question": "Quel explorateur français fonda la ville de Montréal en 1642 ?",
    "difficulty": 60,
    "points": 20,
    "answers": [
      {"text": "Samuel de Champlain", "correct": false, "explanation": "Fondateur de Québec en 1608.", "confusion": 70},
      {"text": "Jacques Cartier", "correct": false, "explanation": "Explora le Saint-Laurent au XVIe siècle.", "confusion": 65},
      {"text": "Paul de Chomedey de Maisonneuve", "correct": true, "explanation": "Établit Ville-Marie (future Montréal).", "confusion": 30},
      {"text": "Louis Jolliet", "correct": false, "explanation": "Explora le Mississippi.", "confusion": 75}
    ]
  },
  {
    "id": 299,
    "question": "Quelle crise politique suivit la mort de Henri IV en 1610 ?",
    "difficulty": 70,
    "points": 25,
    "answers": [
      {"text": "La Fronde", "correct": false, "explanation": "Survint sous Louis XIV (1648-1653).", "confusion": 65},
      {"text": "La régence de Marie de Médicis", "correct": true, "explanation": "Instabilité politique et conflits nobiliaires.", "confusion": 35},
      {"text": "Les guerres de Religion", "correct": false, "explanation": "Terminées par l'édit de Nantes en 1598.", "confusion": 70},
      {"text": "La conspiration de Cinq-Mars", "correct": false, "explanation": "1642, sous Louis XIII.", "confusion": 75}
    ]
  },
  {
    "id": 300,
    "question": "Quelle invention médicale majeure est associée à René Laennec ?",
    "difficulty": 55,
    "points": 15,
    "answers": [
      {"text": "Le stéthoscope", "correct": true, "explanation": "Inventé en 1816 pour ausculter les patients.", "confusion": 20},
      {"text": "Le vaccin contre la variole", "correct": false, "explanation": "Edward Jenner en 1796.", "confusion": 70},
      {"text": "La radiographie", "correct": false, "explanation": "Wilhelm Röntgen en 1895.", "confusion": 75},
      {"text": "L'aspirine", "correct": false, "explanation": "Synthétisée par Bayer en 1897.", "confusion": 65}
    ]
  }
];