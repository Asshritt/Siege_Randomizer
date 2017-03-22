
var defense = [
    ['Recruit', 'recruit.png', 'SAS, FBI SWAT, GIGN, Spetsnaz, GSG 9', ''],
    ['Mira', 'mira.png', 'GEO', 'BLACK MIRROR: Deploys a one-way bulletproof mirror on breakable and reinforced walls. Also can be ejected to create a murder hole.'],
    ['Echo', 'echo.png', 'SAT', 'YOKAI: Hovering drone that releases disorienting sonic bursts. Yokai also transmits a video feed to the Operator.'],
    ['Caveira', 'caveira.png', 'BOPE', 'SILENT STEP: Caveira\'s predatory stealth, the "Silent Step" allows her to lurk on her prey, almost inaudible, until it\'s too late.'],
    ['Valkyrie', 'valkyrie.png', 'Navy SEALs', 'BLACK EYE: Can set up "Black Eye" cameras, feed accessible by whole team via observation tools.'],
    ['Frost', 'frost.png', 'JTF2', 'WELCOME MAT: Uses a mechanical trap to incapacitate enemies.'],
    ['Kapkan', 'kapkan.png', 'Spetsnaz', 'ENTRY DENIAL DEVICE: Sets booby traps on windows and door frames.'],
    ['Tatchanka', 'tatchanka.png', 'Spetsnaz', 'MOUNTED LMG: Deploys a Mounted LMG with a ballistic shield protecting the head from frontal shots.'],
    ['Jäger', 'jager.png', 'GSG 9', 'ACTIVE DEFENSE: Uses an Active Defense system to intercept grenades before they detonates.'],
    ['Bandit', 'bandit.png', 'GSG 9', 'SHOCK WIRE: Sets high-tension Shock Wire on metallic gatgets, dealing damage to enemies.'],
    ['Doc', 'doc.png', 'GIGN', 'STIM PISTOL: Fires a hypodermic shot to revive himself or teamates from a distance. Can also heal up 120 hp as a temporary boost.'],
    ['Rook', 'rook.png', 'GIGN', 'ARMOR PACK: Drops a supply bag full of armor plates for his team to use.'],
    ['Castle', 'castle.png', 'FBI SWAT', 'ARMOR PANEL: Sets bulletproof barricades, more resistant than standard ones.'],
    ['Pulse', 'pulse.png', 'FBI SWAT', 'CARDIAC SENSOR: Detecs heartbeats at a short range through obstacles.'],
    ['Mute', 'mute.png', 'SAS', 'SIGNAL DISRUPTER: Jams communications for remotely detonated gadgets or drones in iyts range.'],
    ['Smoke', 'smoke.png', 'SAS', 'REMOTE GAS GRENADE: Sets remote detonated toxic gas charges.']];
var attack = [
    ['Recruit', 'recruit.png', 'SAS, FBI SWAT, GIGN, Spetsnaz, GSG 9', ''],
    ['Jackal', 'jackal.png', 'GEO', 'EYENOX MODEL III: Tracking eyewear that locates targets by revealing and identifying recent locations.'],
    ['Hibana', 'hibana.png', 'SAT', 'X-KAIROS: A 40mm grenade launcher firing explosive pellets that can be detonated from a distance.'],
    ['Capitão', 'capitao.png', 'BOPE', 'TACTICAL CROSSBOW: Tactical crossbow firing asphyxiating bolts and micro smoke grenades.'],
    ['Blackbeard', 'blackbeard.png', 'Navy SEALs', 'RIFLE-SHIELD: Has a backup mounted shield to swap if the first one is damaged.'],
    ['Buck', 'buck.png', 'JTF2', 'SKELETON KEY: Toggles under-barrel shotgun attachment on his main weapon.'],
    ['Glaz', 'glaz.png', 'Spetsnaz', ''],
    ['Fuze', 'fuze.png', 'Spetsnaz', 'CLUSTER CHARGE: Uses Cluster Charges that pierce and stick to walls, releasing sub-grenades on the opposite side.'],
    ['Blitz', 'blitz.png', 'GSG 9', 'FLASH SHIELD: Triggers the flash attached to his ballistic shield to temporarily blind enemies.'],
    ['IQ', 'iq.png', 'GSG 9', 'ELECTRONIC DETECTOR: Uses the Electronics Detector to locate any electronics in range through obstacles such as walls.'],
    ['Montagne', 'montagne.png', 'GIGN', 'EXTENDABLE SHIELD: Can expend his Expendable Shield to offer full protection while standing.'],
    ['Twitch', 'twitch.png', 'GIGN', 'SHOCK DRONE: Uses two Shock Drones to disable traps or injure enemies. Deploys the first Shock Drone during the preparation phase.'],
    ['Thermite', 'thermite.png', 'FBI SWAT', 'EXOTHERMIC CHARGE: Sets an exothermic charge that destroys reinforced walls.'],
    ['Ash', 'ash.png', 'FBI SWAT', 'BREACHING ROUND: Fires an explosive Breach Round that burrows into a surface and automatically detonates.'],
    ['Sledge', 'sledge.png', 'SAS', 'BREACHING HAMMER: Uses a Breaching Hammer to breach through destructible surfaces.'],
    ['Thatcher', 'thatcher.png', 'SAS', 'EMP GRENADE: Uses EMP Grenades to disable any electronics in range.']];

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
