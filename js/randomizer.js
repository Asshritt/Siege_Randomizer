
var defense = [
    ['Recruit', 'recruit.png', 'SAS, FBI SWAT, GIGN, Spetsnaz, GSG 9', ''],
    ['Mira', 'mira.png', 'GEO', ''],
    ['Echo', 'echo.png', 'SAT', 'Véritable prodige de la robotique, Masaru Enatsu a grandi à Suginami. Bien décidé à contourner les limitations des armes à longue portée, Echo a mis au point Yokai ; ce drone volant émet des décharges soniques étourdissant toutes les cibles d\'un périmètre donné.'],
    ['Caveira', 'caveira.png', 'BOPE', 'Réputée pour ses interrogatoires musclés, Taina "Caveira" Pereira est un Agent tout aussi redoutable une fois sur le terrain. La furtivité prédatrice de Caveira, le "Pas de velours", lui permet de traquer ses proies presque sans un bruit.'],
    ['Valkyrie', 'valkyrie.png', 'Navy SEALs', 'Valkyrie est une des premières femmes ayant intégrées l\'entrainement des SEALs. Avec son "Black Eye", une caméra à déploiement rapide, elle permet d\'accéder à un flux vidéo en direct et de gagner ainsi un avantage tactique décisif.'],
    ['Frost', 'frost.png', 'JTF2', 'Frost est une combattante stratégique et observatrice, pour qui la patience est l\'alliée principale. Elle utilise ses pièges Sterling Mk2 LHT pour capturer et blesser ses énemies.'],
    ['Kapkan', 'kapkan.png', 'Spetsnaz', 'Basuda est né de parents ouvriers et a grandi à Kovrov. Désireux d\'échapper à une vie de travail à l\'usine, il s\'est engagé auprès du ministère des affaires intérieures et a été envoyé dans un petit port de la mer de Barents. Pendant ce séjour dans le cercle arctique, il est devenu un chasseur et trappeur passionné.'],
    ['Tatchanka', 'tatchanka.png', 'Spetsnaz', 'Iconoclaste dans l\'âme, Alexsandr Senaviev a grandi dans une famille pro-armée rouge avant que la politique de la "glasnost" ne soit mise en place. Il a toujours montré un intérêt certain pour l\'artillerie et l\'armement soviétique, à tel point que lors de ses opérations, il se sert d\'une mitrailleuse vintage qu\'il a lui-même restaurée et qu\'il entretient avec amour.'],
    ['Jäger', 'jager.png', 'GSG 9', 'Vétéran de la division anti-piraterie du GSG 9 en plein cœur de l\'océan indien, Marius Streicher a servi aussi bien en tant que conducteur d\'hélicoptère qu\'expert en technologies. Il peut sécuriser des zones visées par des explosifs aériens grâce à son système de défense "Magpie" capable de neutraliser n\'importe quel projectile en approche.'],
    ['Bandit', 'bandit.png', 'GSG 9', 'Ancien agent secret au coeur du gang des des Hells Angels d\'Hanovre, Brunsmeier est connu pour prendre des objets obsolètes et les changer en armes. Il a fabriqué un appareil qui électrifie le fil barbelé et les barricades et qui peut blesser ou détruire tout ce qui entre en contact avec.'],
    ['Doc', 'doc.png', 'GIGN', 'Gustave Kateb présente un profil très rare : authentique altruiste, il cherche à rendre le monde meilleur pour ses contemporains. Volontaire de Médecins sans frontières et médecin dans la Brigade des Forces spéciales de l\'Armée de Terre, c\'est un médecin de l\'avant efficace équipé d\'un pistolet stim capable de ranimer des équipiers à distance.'],
    ['Rook', 'rook.png', 'GIGN', 'Julien Nizan s\'occupe du célèbre exercice de confiance destiné aux recrues du GIGN : recevoir une balle tirée par un camarade, seulement protégé par une plaque de petite taille. Rook emporte en opération des plaques de même type, qu\'il distribue à ses équipiers afin d\'accroître leur protection.'],
    ['Castle', 'castle.png', 'FBI SWAT', 'L\'Agent Castle apporte une expertise sur le plan défensif et sur les possibilités de renforcements pour l\'escouade Rainbow. Ses barricades renforcées seront un précieux atout pour son équipe.'],
    ['Pulse', 'pulse.png', 'FBI SWAT', 'Ancien membre du programme biométrique mené par le FBI, la faculté de Pulse pour lire les gens fait de lui un redoutable négociateur. Il était le premier à utiliser un prototype de capteur cardiaque.'],
    ['Mute', 'mute.png', 'SAS', 'L\'Agent Mute est un spécialiste des signaux et vous permettra de couper les communications de vos opposants dans une zone précise, empêchant ainsi l\'usage des drônes ainsi que la détonation à distance des charges murales.'],
    ['Smoke', 'smoke.png', 'SAS', 'L\'Agent Smoke n\'a aucune crainte lorsqu\'il s\'agit de commencer l\'assaut. Il peut être un grand atout dans vos manoeuvres défensives avec sa charge de gaz chimique, infligeant des dégâts à tout ennemi présent dans la zone de fumée.']];
var attack = [
    ['Recruit', 'recruit.png', 'SAS, FBI SWAT, GIGN, Spetsnaz, GSG 9', ''],
    ['Jackal', 'jackal.png', 'GEO', ''],
    ['Hibana', 'hibana.png', 'SAT', 'Ayant passé sa prime jeunesse à Nagoya, au Japon, Imagawa est une véritable experte dans l\'art de s\'infiltrer dans les zones à haut risque. Cette spécialiste en arts martiaux s\'est inscrite à l\'académie de police à l\'âge de dix-huit ans. Son "X-KAIROS" projette des plombs explosifs qu\'il est ensuite possible de déclencher simultanément à distance.'],
    ['Capitão', 'capitao.png', 'BOPE', 'Vicente "Capitão" Souza est né à Nova Iguacu, près de Rio de Janeiro, où il a également grandi. À sa sortie du lycée, il a été recruté par le Cooredenadoria de Recursos Especiais (le CORE). Armé de l\'arbalète tactique TAC Mk0, Capitão dispose de deux types de projectiles : des carreaux à gaz asphyxiant et des grenades fumigènes miniatures.'],
    ['Blackbeard', 'blackbeard.png', 'Navy SEALs', 'Blackbeard voit les Navy SEAL, comme le mix parfait entre force physique et morale. Avec son bouclier d\'arme blindé transparent TARS Mk 0, Blackbeard augmente sa protection en mobilité sans diminuer son champ de vision.'],
    ['Buck', 'buck.png', 'JTF2', 'Sébastien Côté est quelqu\'un de très pragmatique qui apprécie les appareils mécaniques simples. Il utilise le Passe-partout, un fusil de calibre 12 monté sous son arme, lui permettant de passer rapidement de l\'infiltration au combat.'],
    ['Glaz', 'glaz.png', 'Spetsnaz', 'Timur Glazkov est un tireur d\'élite expert qui a participé au conflit d\'Ossétie du Sud et travaillé comme garde du corps pendant des années. En tant que sniper de Rainbow, il est le membre de l\'escouade le plus doué avec les armes de longue distance.'],
    ['Fuze', 'fuze.png', 'Spetsnaz', 'Né dans une famille militaire de Samarkand, en Ouzbékistan, Shuhrat Kessikbayev a émigré en Russie peu avant la chute de l\'Union soviétique. Kessikbayev a le bricolage et la conception dans le sang, et est plus à l\'aise avec les machines qu\'avec les gens.'],
    ['Blitz', 'blitz.png', 'GSG 9', 'Connu pour sa propension à faire de l\'humour dans les situations les plus stressantes afin "d\'apaiser l\'ambiance", Elias Kötz est équipé d\'un appareil assez peu orthodoxe : un bouclier anti-émeute équipé de grenades flash capables d\'immobiliser les ennemis tout en offrant une excellente protection.'],
    ['IQ', 'iq.png', 'GSG 9', 'Élève brillante, Monika Weiss apprend très vite, en plus d\'être naturellement douée dans tout ce qu\'elle entreprend. Après avoir réussi ses études en génie électrique dans l\'une des universités les plus prestigieuses des États-Unis, elle a travaillé pour le GSG 9 allemand et plus spécialement dans les phases de tests techniques et unités aéroportées. Elle utilise un appareil qui détecte les pièges et autres gadgets électroniques à distance.'],
    ['Montagne', 'montagne.png', 'GIGN', 'Vétéran de la Gendarmerie nationale, Gilles Touré est le plus ancien agent en service du GIGN. Extrêmement protecteur vis-à-vis de ses équipiers, ce gentil géant n\'hésitera pas à se jeter au-devant d\'une balle pour protéger un autre agent.'],
    ['Twitch', 'twitch.png', 'GIGN', 'Experte en technologies, Emmanuelle Pichon a tendance à utiliser les gadgets pour aider son unité. Elle emporte en opération un petit drone capable d\'infliger des chocs électriques aux ennemis et aux pièges.'],
    ['Thermite', 'thermite.png', 'FBI SWAT', 'L\'Agent Thermite est un expert en démolition. Il fait partie des meilleurs hommes du SWAT, l\'unité d\'élite du FBI. Son principal atout est une charge explosive permettant de détruire les murs ou tout autre obstacle sur son chemin.'],
    ['Ash', 'ash.png', 'FBI SWAT', 'En rejoignant le FBI, l\'Agent Ash a apporté sa connaissance en démolition grâce à sa charge explosive permettant de réduire en cendres une porte ou un mur, le tout, à distance.'],
    ['Sledge', 'sledge.png', 'SAS', 'L\'Agent Sledge est en première ligne lors de l\'assaut, prêt à ouvrir une brèche pour ses coéquipiers avec son emblématique massue.'],
    ['Thatcher', 'thatcher.png', 'SAS', 'L\'Agent Thatcher sait qu\'il est dangereux de tout miser sur l\'électronique et la technologie. Avec sa grenade EMP, il est capable de court-circuiter tout appareil électronique dans son rayon d\'explosion, permettant ainsi de rééquilibrer la donne.']];

function getRandomOps() {
    // Gestion de l'historique
    if ($('#operator').val() !== '') {
        var cpt = $('#history').children().length;
        $('#history').prepend('<input id="history' + cpt + '" type="text" readonly>');
        $('#history' + cpt).val($('#operator').val());
    }

    if ($('#type').is(':checked')) {
        var rng = Math.floor(Math.random() * attack.length);
        $('#operator').val(attack[rng][0] + ' (' + attack[rng][2] + ')');
    } else {
        var rng = Math.floor(Math.random() * defense.length);
        $('#operator').val(defense[rng][0] + ' (' + defense[rng][2] + ')');
    }

    if ($('#history').children().length > 4) {
        var cpt = 0;
        while (cpt < $('#history').children().length - 5) {
            $('#history' + cpt).hide();
            cpt++;
        }
    }
}

function changeSelect() {
// Couleurs police radio button select
    if ($('#def').hasClass('yellow black-text')) {
        $('#atk').addClass('yellow black-text');
        $('#def').removeClass('yellow black-text');
        $('#def').addClass('grey-text');
    } else if ($('#atk').hasClass('yellow black-text')) {
        $('#def').addClass('yellow black-text');
        $('#atk').removeClass('yellow black-text');
        $('#atk').addClass('grey-text');
    }
}

function chargeTab() {
// Infos opérateurs attaquants
    for (var cpt = 1; cpt < defense.length; cpt++) {
        $('#DefOps').append('<li><div class="collapsible-header valign-wrapper">'
                + '<img src="img/OPs_badges/' + defense[cpt][1] + '" class="valign imgOps"><p class="name">'
                + defense[cpt][0] + '</p><p> (' + defense[cpt][2] + ')</p></div><div class="collapsible-body"><span>'
                + defense[cpt][3] + '</span></li>');
    }
// Infos opérateurs défenseurs
    for (var cpt = 1; cpt < defense.length; cpt++) {
        $('#AttkOps').append('<li><div class="collapsible-header valign-wrapper">'
                + '<img src="img/OPs_badges/' + attack[cpt][1] + '" class="valign imgOps"><p class="name">'
                + attack[cpt][0] + '</p><p> (' + attack[cpt][2] + ')</p></div><div class="collapsible-body"><span>'
                + attack[cpt][3] + '</span></li>');
    }
}
