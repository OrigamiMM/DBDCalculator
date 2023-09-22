const express = require("express");
const app = express();

app.get("/apiDBDInfo", (req, res) => {
  res.json({
    perks: [
      {
        name: "Ace in the Hole",
        description:
          'Lady Luck always seems to be throwing something good your way.<br/>\n<p>When retrieving an Item from a Chest, there is a chance an Add-on will be attached to it.\n</p>\n<ul><li><b><span class="luaClr clr clr2" style="color: #e8c252;">100\u00a0%</span></b> chance for an Add-on of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">Very Rare</span></b> Rarity or lower.</li>\n<li><b><span class="luaClr clr clr2" style="color: #e8c252;">10</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">25</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">50</span></b> <b>%</b> chance for a second Add-on of <b><span class="luaClr clr clr2" style="color: #e8c252;">Uncommon</span></b> Rarity or lower.</li></ul>\n<p><i>Ace in the Hole</i> allows you to keep any Add-ons your Item has equipped upon escaping.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Everything that glitters isn\'t gold. But gold isn\'t worth a damn in this place, so this should come in handy." \u2014 Ace Visconti</span></i></p>',
        imgUrl: "AceintheHole.png",
        sourceSurvivor: "Ace Visconti",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9f/S07_charSelect_portrait.png/revision/latest?cb=20230705190028",
        modifiers: null,
      },
      {
        name: "Adrenaline",
        description:
          'You are fuelled by unexpecting energy when on the verge of escape.\n<ul><li>Once the Exit Gates are powered, <b><span class="luaClr clr clr2" style="color: #e8c252;">instantly heal one</span></b> Health State and sprint at <b><span class="luaClr clr clr6" style="color: #ff8800;">150\u00a0%</span></b> of your normal Running Movement speed for <b><span class="luaClr clr clr8" style="color: #d41c1c;">5 seconds</span></b>.</li>\n<li><i>Adrenaline</i> is on hold if you are disabled at the moment it triggers and will instead activate upon being freed.</li>\n<li>If playing against The Nightmare, <i>Adrenaline</i> will wake you from the Dream World upon activation.</li></ul>\n<p><i>Adrenaline</i> ignores an existing <i><b>Exhaustion</b></i> timer, but causes the <i><b>Exhausted</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.</p>',
        imgUrl: "Adrenaline.png",
        sourceSurvivor: "Meg Thomas",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/77/S02_charSelect_portrait.png/revision/latest?cb=20230705190636",
        modifiers: null,
      },
      {
        name: "Aftercare",
        description:
          'Unlocks potential in your Aura-reading ability.\n<p>The Auras of the last <b><span class="luaClr clr clr2" style="color: #e8c252;">1</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">2</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">3</span></b> <b>Survivor(s)</b> are revealed to you permanently once any of the following conditions are met:\n</p><ul><li>You have unhooked them.</li>\n<li>They have unhooked you.</li>\n<li>You have completed a <i>Healing action</i> on them.</li>\n<li>They have completed a <i>Healing action</i> on you.</li></ul>\n\nThose Survivors also have your Aura revealed to them.\n<p><i>Aftercare</i> resets its effect once you are hooked.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"A Mercy that Rips the Storm.<br/>Oil work to honour my best buddies who happen to be the best musicians I know. Their first album is still my favourite. It got me through a dark time in my life." \u2014 Jeff, oil on canvas, 16x16</span></i></p>',
        imgUrl: "Aftercare.png",
        sourceSurvivor: 'Jeffrey "Jeff" Johansen',
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b9/S15_charSelect_portrait.png/revision/latest?cb=20230725192434",
        modifiers: null,
      },
      {
        name: "Alert",
        description:
          'Your acute senses are on high alert.<br/>\n<p>Whenever the Killer destroys a Pallet or a Breakable Wall, or damages a Generator, their Aura is revealed to you for <b><span class="luaClr clr clr2" style="color: #e8c252;">3</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">4</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">5</span></b> <b>seconds</b>.<br/>\n</p>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"I have true sight," \u2014 Feng Min</span></i>',
        imgUrl: "Alert.png",
        sourceSurvivor: "Feng Min",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ac/S09_charSelect_portrait.png/revision/latest?cb=20230725191813",
        modifiers: null,
      },
      {
        name: "Any Means Necessary",
        description:
          'You stand up for yourself, using whatever\'s on hand to gain an advantage.\n<p>Press and hold the <i>Active Ability button</i> for <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">5</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">4</span></b> <b>seconds</b> while standing beside a dropped Pallet to reset it to its upright position.\n</p><ul><li>Grants the ability to see the Auras of all dropped but not yet destroyed Pallets in the environment.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"I\'ll hit you with everything I\'ve got. Then I\'ll do it again." \u2014 Yui Kimura</span></i>',
        imgUrl: "AnyMeansNecessary.png",
        sourceSurvivor: "Yui Kimura",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/35/S20_charSelect_portrait.png/revision/latest?cb=20230705193537",
        modifiers: null,
      },
      {
        name: "Appraisal",
        description:
          'You have a careful eye that notices what many overlook.<br/>\n<p>Start the Trial with <b><span class="luaClr clr clr2" style="color: #e8c252;">3 Tokens</span></b>:\n</p>\n<ul><li>When a Chest has already been opened, consume <b><span class="luaClr clr clr6" style="color: #ff8800;">1 Token</span></b> to rummage through it for an Item.</li>\n<li>Rummage through Chests <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">60</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">80</span></b> <b>%</b> faster.</li></ul>\n<p><i>Rummaging is only available once per Chest.</i></p>',
        imgUrl: "Appraisal.png",
        sourceSurvivor: "\u00c9lodie Rakoto",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/45/S24_charSelect_portrait.png/revision/latest?cb=20230705193628",
        modifiers: null,
      },
      {
        name: "Autodidact",
        description:
          'You start the Trial with a Progression penalty of <b><span class="luaClr clr clr2" style="color: #e8c252;">-25\u00a0%</span></b> for succeeding a Good Skill Check while healing another Survivor.\n<ul><li>Succeeding a Good Skill Check while healing another Survivor grants <b><span class="luaClr clr clr6" style="color: #ff8800;">1 Token</span></b>, up to a maximum of <b><span class="luaClr clr clr2" style="color: #e8c252;">3</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">4</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">5</span></b> <b>Tokens</b>.</li>\n<li>Each Token grants a stack-able Progression bonus of <b><span class="luaClr clr clr8" style="color: #d41c1c;">+15\u00a0%</span></b> for succeeding a Good Skill Check while healing another Survivor.</li>\n<li><b>Suppresses</b> Great Skill Checks while healing another Survivor.</li></ul>\n<p><i>Autodidact</i> remains inactive while healing another Survivor using a Med-Kit.\n</p>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"There\'s no limit to what you can achieve, as long as you back with hard work." \u2014 Adam Francis</span></i></p>',
        imgUrl: "Autodidact.png",
        sourceSurvivor: "Adam Francis",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e1/S14_charSelect_portrait.png/revision/latest?cb=20230725192408",
        modifiers: null,
      },
      {
        name: "Background Player",
        description:
          'You are not usually the centre of attention and in some cases, this can be a good thing.\n<p>When another Survivor is picked up, <i>Background Player</i> activates for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">10 seconds</span></b>:\n</p><ul><li>When you start running, break into a sprint at <b><span class="luaClr clr clr6" style="color: #ff8800;">150\u00a0%</span></b> of your normal Running Movement speed for <b><span class="luaClr clr clr8" style="color: #d41c1c;">4 seconds</span></b>.</li></ul>\n<p><i>Background Player</i> causes the <i><b>Exhausted</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.\n</p><p><i>Background Player</i> cannot be used when <i><b>Exhausted</b></i>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"You forget about me?" \u2014 Renato Lyra</span></i></p>',
        imgUrl: "BackgroundPlayer.png",
        sourceSurvivor: "Renato Lyra",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/59/S36_charSelect_portrait.png/revision/latest?cb=20230705193833",
        modifiers: null,
      },
      {
        name: "Balanced Landing",
        description:
          'Your agility and cat-like relexes are incomparable.\n<p>When falling from great heights, you benefit from the following effects:\n</p><ul><li><b>Reduces</b> the Stagger duration by <b><span class="luaClr clr clr2" style="color: #e8c252;">75\u00a0%</span></b>.</li>\n<li><b>Suppresses</b> <i>Grunts of Exertion</i> from falling.</li>\n<li>Upon landing, break into a sprint at <b><span class="luaClr clr clr6" style="color: #ff8800;">150\u00a0%</span></b> of your normal Running Movement speed for <b><span class="luaClr clr clr8" style="color: #d41c1c;">3 seconds</span></b>.</li></ul>\n<p><i>Balanced Landing</i> causes the <i><b>Exhausted</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.<br/>\n<i>Balanced Landing</i> cannot be used when <i><b>Exhausted</b></i>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I have jumped from higher places." \u2014 Nea Karlsson</span></i></p>',
        imgUrl: "BalancedLanding.png",
        sourceSurvivor: "Nea Karlsson",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/14/S05_charSelect_portrait.png/revision/latest?cb=20230705185446",
        modifiers: null,
      },
      {
        name: "Better than New",
        description:
          'You are an expert in combat medicine.<br/>\n<p>Patients leave your care reinvigorated.\n</p>\n<p>Upon completing a Healing action on another Survivor, they benefit from the following effect until the next time they take damage:\n</p><ul><li><b>Increases</b> their Action speeds in Healing, Unlocking, Cleansing, and Blessing by <b><span class="luaClr clr clr2" style="color: #e8c252;">12</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">14</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">16</span></b> <b>%</b>.</li></ul>',
        imgUrl: "BetterthanNew.png",
        sourceSurvivor: "Rebecca Chambers",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/93/S33_charSelect_portrait.png/revision/latest?cb=20230705184830",
        modifiers: null,
      },
      {
        name: "Bite the Bullet",
        description:
          'Pain hurts you as much as anyone, but you would prefer others do not know that.<br/>\n<p>When healing yourself or another Survivor, <i>Grunts of Pain</i> and all noises related to the <i>Healing action</i> are suppressed:\n</p>\n<ul><li>Failed Healing Skill Checks do not trigger a <i>Loud Noise Notification</i> and only apply a Regression penalty of <b><span class="luaClr clr clr2" style="color: #e8c252;">3</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">2</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">1</span></b> <b>%</b>.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"I can do this." \u2014 Leon Scott Kennedy</span></i>',
        imgUrl: "BitetheBullet.png",
        sourceSurvivor: "Leon Scott Kennedy",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5d/S27_charSelect_portrait.png/revision/latest?cb=20230705184450",
        modifiers: null,
      },
      {
        name: "Blast Mine",
        description:
          'When direct combat is not an option, you still find ways to strike back.\n<p>After repairing Generators for a total of <b><span class="luaClr clr clr2" style="color: #e8c252;">50\u00a0%</span></b>, <i>Blast Mine</i> activates:\n</p><ul><li>Press the <i>Active Ability button</i> while near a partially progressed Generator to install a Trap, which stays active for <b><span class="luaClr clr clr2" style="color: #e8c252;">100</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">110</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">120</span></b> <b>seconds</b>.</li>\n<li>When the Killer damages the <i>Trapped Generator</i>, its Trap explodes half-way through, stunning them and blinding anyone nearby.</li></ul>\n<i>Blast Mine</i> deactivates after triggering successfully or once the timer runs out.\n<p>The Auras of <i>Trapped Generators</i> are revealed to all Survivors in <b><span class="luaClr clr clr2" style="color: #e8c252;">yellow</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"You want S.T.A.R.S.? I\'ll give you S.T.A.R.S.!" \u2014 Jill Valentine</span></i></p>',
        imgUrl: "BlastMine.png",
        sourceSurvivor: "Jill Valentine",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/99/S26_charSelect_portrait.png/revision/latest?cb=20230705184445",
        modifiers: null,
      },
      {
        name: "Blood Pact",
        description:
          'It is as if a latent part of yourself has awakened.<br/>\n<p>You feel like you can reach out beyond yourself for assistance.\n</p>\n<p>When either you or the <i><b>Obsession</b></i> become injured by any means, <i>Blood Pact</i> activates:\n</p><ul><li>Your Auras are constantly revealed to one another.\n<ul><li>Completing a <i>Healing Action</i> on the <i><b>Obsession</b></i> or having them complete one on yourself, grants both of you a <b><span class="luaClr clr clr2" style="color: #e8c252;">5</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">6</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">7</span></b> <b>%</b> <i><b>Haste</b></i> <b>Status Effect</b>.</li>\n<li>This effect lasts for as long as you both remain within <b><span class="luaClr clr clr2" style="color: #e8c252;">16 metres</span></b> of one another.</li></ul></li>\n<li><i>Blood Pact</i> deactivates after leaving this radius.</li></ul>\n<p><i>Blood Pact</i> is temporarily disabled if you yourself are the <i><b>Obsession</b></i>.\n</p><p>Reduces the Odds of becoming the initial <i><b>Obsession</b></i> of the Killer by <b>-100\u00a0%</b>.<br/>\n<i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i></p>',
        imgUrl: "BloodPact.png",
        sourceSurvivor: "Cheryl Mason",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/38/S22_charSelect_portrait.png/revision/latest?cb=20230705193841",
        modifiers: null,
      },
      {
        name: "Blood Rush",
        description:
          'Your mind and body are honed for great feats, allowing you to push through with extra effort when necessary.\n<p>Once you are one Hook away from instant death, <i>Blood Rush</i> activates:\n</p><ul><li>Press the <i>Active Ability button</i> to lose a Health State and instantly recover from the <i><b>Exhausted</b></i> <b>Status Effect</b>.</li>\n<li>Causes the <i><b>Broken</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">28</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">24</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">20</span></b> <b>seconds</b>, while you are automatically healing back to Healthy.</li>\n<li>Cancels the healing effect upon taking damage.</li></ul>\n<p><i>Blood Rush</i> is disabled for the remainder of the Trial after use.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Just gotta... push through!" \u2014 Renato Lyra</span></i></p>',
        imgUrl: "BloodRush.png",
        sourceSurvivor: "Renato Lyra",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/59/S36_charSelect_portrait.png/revision/latest?cb=20230705193833",
        modifiers: null,
      },
      {
        name: "Boil Over",
        description:
          'You are a battler and do everything to escape a foe\'s grasp.\n<p>While being carried by the Killer, the following effects apply:\n</p><ul><li><b>Increases</b> the intensity of the <i>Struggle Effects</i> on the Killer from your <i>Wiggling</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">70</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">80</span></b> <b>%</b>.</li>\n<li><b>Obscures</b> the Auras of all Hooks from the Killer\'s Aura-reading abilities within <b><span class="luaClr clr clr2" style="color: #e8c252;">16 metres</span></b>.</li>\n<li><b>Fills</b> your <i>Wiggle Meter</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">33\u00a0%</span></b> of your current Wiggle progression upon landing, when the Killer drops from great heights.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Buck and Wild,<br/>Swing to be free,<br/>Your hands just can\'t keep ahold of me." \u2014 Kate Denson\'s "Boil Over"</span></i></p>',
        imgUrl: "BoilOver.png",
        sourceSurvivor: "Kate Denson",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/19/S13_charSelect_portrait.png/revision/latest?cb=20230705192155",
        modifiers: null,
      },
      {
        name: "Bond",
        description:
          'Unlocks potential in your Aura-reading ability:\n<ul><li>The Auras of all other Survivors within <b><span class="luaClr clr clr2" style="color: #e8c252;">20</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">28</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">36</span></b> <b>metres</b> of your location are revealed to you.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"We have to work as a team, I need you to survive so that I can survive!" \u2014 Dwight Fairfield</span></i></p>',
        imgUrl: "Bond.png",
        sourceSurvivor: "Dwight Fairfield",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8c/S01_charSelect_portrait.png/revision/latest?cb=20230705190630",
        modifiers: null,
      },
      {
        name: "Boon: Circle of Healing",
        description:
          'A Boon that offers comfort amidst the terror.\n<p>Press and hold the <i>Active Ability button</i> on a Dull or Hex Totem to bless it and create a <i><b>Boon Totem</b></i>.<br/>\nSoft chimes ring out in a radius of <b><span class="luaClr clr clr2" style="color: #e8c252;">24 metres</span></b>.\n</p><p>All Survivors benefit from the following effects when inside the <i>Boon Totem\'s</i> radius:\n</p><p class="mw-empty-elt">\n</p><ul><li><b>Increases</b> Altruistic Healing speeds by <b><span class="luaClr clr clr2" style="color: #e8c252;">50</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">75</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">100</span></b> <b>%</b> when not using a Med-Kit.</li>\n<li>If a Survivor is injured, their Aura will be revealed to all other Survivors.</li></ul>\n\nSurvivors can only be affected by one instance of <i>Boon: Circle of Healing</i> at a time.\n<p><i>Only one Totem can be blessed by your <b>Boon Perks</b> at a time and all of their effects are active on the same <b>Boon Totem</b></i>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Try this, it is better than anything you\'ll find in a pharmacy." \u2014 Mikaela Reid</span></i></p>',
        imgUrl: "BoonCircleofHealing.png",
        sourceSurvivor: "Mikaela Reid",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/42/S28_charSelect_portrait.png/revision/latest?cb=20230705191728",
        modifiers: null,
      },
      {
        name: "Boon: Dark Theory",
        description:
          'Your obsessive study of the paranormal has given you unprecedented knowledge of other Realms and planes of existence.<br/>\n<p>Press and hold the <i>Active Ability button</i> on a Dull or Hex Totem to bless it and create a <i><b>Boon Totem</b></i>.<br/>\nSoft chimes ring out in a radius of <b><span class="luaClr clr clr2" style="color: #e8c252;">24 metres</span></b>.\n</p>\n<p>All Survivors benefit from the following effects when inside the <i>Boon Totem\'s</i> radius:\n</p><ul><li><b><span class="luaClr clr clr2" style="color: #e8c252;">2\u00a0%</span></b> <i><b>Haste</b></i> <b>Status Effect</b>.</li>\n<li>This effect lingers for <b><span class="luaClr clr clr2" style="color: #e8c252;">2</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">3</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">4</span></b> <b>seconds</b> after leaving the <i>Boon Totem\'s</i> range.</li></ul>\n<i>Only one Totem can be blessed by your <b>Boon Perks</b> at a time and all of their effects are active on the same <b>Boon Totem</b></i>.',
        imgUrl: "BoonDarkTheory.png",
        sourceSurvivor: "Yoichi Asakawa",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/07/S30_charSelect_portrait.png/revision/latest?cb=20230725192537",
        modifiers: null,
      },
      {
        name: "Boon: Exponential",
        description:
          'When it seems like your number is up, you consider ways to recalculate the odds.<br/>\n<p>Press and hold the <i>Active Ability button</i> on a Dull or Hex Totem to bless it and create a <i><b>Boon Totem</b></i>.<br/>\nSoft chimes ring out in a radius of <b><span class="luaClr clr clr2" style="color: #e8c252;">24 metres</span></b>.\n</p>\n<p>All Survivors benefit from the following effects when inside the <i>Boon Totem\'s</i> radius:\n</p><ul><li><b><span class="luaClr clr clr2" style="color: #e8c252;">90</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">95</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">100</span></b> <b>%</b> bonus to the Recovery speed.</li>\n<li>Unlocks the <i>Self-Recovery</i> ability, allowing you to fully recover from the Dying State.</li></ul>\n<i>Only one Totem can be blessed by your <b>Boon Perks</b> at a time and all of their effects are active on the same <b>Boon Totem</b></i>.\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"It is not our time to die... probably." \u2014 Jonah Vasquez</span></i></p>',
        imgUrl: "BoonExponential.png",
        sourceSurvivor: "Jonah Vasquez",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c6/S29_charSelect_portrait.png/revision/latest?cb=20230725192519",
        modifiers: null,
      },
      {
        name: "Boon: Shadow Step",
        description:
          'A Boon that conceals the truth.<br/>\n<p>Press and hold the <i>Active Ability button</i> on a Dull or Hex Totem to bless it and create a <i><b>Boon Totem</b></i>.<br/>\nSoft chimes ring out in a radius of <b><span class="luaClr clr clr2" style="color: #e8c252;">24 metres</span></b>.\n</p>\n<p>All Survivors benefit from the following effects when inside the <i>Boon Totem\'s</i> radius:\n</p><ul><li>Scratch Marks are suppressed.</li>\n<li>Auras are hidden from The Killer.\n<ul><li>Both effects linger for <b><span class="luaClr clr clr2" style="color: #e8c252;">2</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">3</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">4</span></b> <b>seconds</b> after leaving the <i>Boon Totem\'s</i> range.</li></ul></li></ul>\n<i>Only one Totem can be blessed by your <b>Boon Perks</b> at a time and all of their effects are active on the same <b>Boon Totem</b></i>.\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Stick to the shadows and cover your tracks." \u2014 Mikaela Reid</span></i></p>',
        imgUrl: "BoonShadowStep.png",
        sourceSurvivor: "Mikaela Reid",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/42/S28_charSelect_portrait.png/revision/latest?cb=20230705191728",
        modifiers: null,
      },
      {
        name: "Borrowed Time",
        description:
          'You are fuelled with an unexpected energy when saving an ally from a Hook.\n<p>Survivors you unhook benefit from the following effects:\n</p><ul><li><b>Extends</b> the duration of their <i><b>Endurance</b></i> <b>Status Effect</b> by <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">8</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b>.</li>\n<li><b>Extends</b> the duration of their <i><b>Haste</b></i> <b>Status Effect</b> by <b><span class="luaClr clr clr2" style="color: #e8c252;">10 seconds</span></b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Probably stings like hell, but it ain\'t gonna kill ya. Up and at \'em soldier. Time to move!" \u2014 Bill Overbeck</span></i></p>',
        imgUrl: "BorrowedTime.png",
        sourceSurvivor: 'William "Bill" Overbeck',
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/66/S08_charSelect_portrait.png/revision/latest?cb=20230705190755",
        modifiers: null,
      },
      {
        name: "Botany Knowledge",
        description:
          'You transform plants found around The Campfire into tinctures that slow down bleeding.\n<ul><li><b>Increases</b> your Healing speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">30</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">40</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">50</span></b> <b>%</b>.</li>\n<li><b>Reduces</b> the Healing efficiency of Med-Kits by <b><span class="luaClr clr clr2" style="color: #e8c252;">-20\u00a0%</span></b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Basic Botany Knowledge could save your life someday" \u2014 Claudette Morel</span></i></p>',
        imgUrl: "BotanyKnowledge.png",
        sourceSurvivor: "Claudette Morel",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/65/S03_charSelect_portrait.png/revision/latest?cb=20230725191927",
        modifiers: null,
      },
      {
        name: "Breakdown",
        description:
          'Each time you are unhooked or unhook yourself, the Hook breaks and the Killer\'s Aura is revealed to you for <b><span class="luaClr clr clr2" style="color: #e8c252;">4</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">5</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">6</span></b> <b>seconds</b>.\n<ul><li>A Hook broken by <i>Breakdown</i> takes <b><span class="luaClr clr clr2" style="color: #e8c252;">180 seconds</span></b> to respawn.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Charge from the Belly of the Beast.<br/>Here\'s a sketch/painting on a piece of wood I saw by the side of this road. I felt like it got a story to tell. And it didn\'t waste its second chance." \u2014 Jeff, ink and oil wash on slice of wood, 12x16</span></i></p>',
        imgUrl: "Breakdown.png",
        sourceSurvivor: 'Jeffrey "Jeff" Johansen',
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b9/S15_charSelect_portrait.png/revision/latest?cb=20230725192434",
        modifiers: null,
      },
      {
        name: "Breakout",
        description:
          'You kick into high gear when someone is in trouble, inspiring them to overcome any obstacle.<br/>\n<p>When within <b><span class="luaClr clr clr2" style="color: #e8c252;">5 metres</span></b> of a carried Survivor, the following benefits apply:\n</p>\n<ul><li>Grants a <b><span class="luaClr clr clr2" style="color: #e8c252;">5</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">6</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">7</span></b> <b>%</b> <i><b>Haste</b></i> <b>Status Effect</b>.</li>\n<li><b>Increases</b> the Wiggle speed of the carried Survivor by <b><span class="luaClr clr clr6" style="color: #ff8800;">+25\u00a0%</span></b>.</li></ul>\n<p>Survivors can only be affected by one instance of <i>Breakout</i> at a time.\n</p>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Come, we are going to rip our way out of this." \u2014 Yui Kimura</span></i></p>',
        imgUrl: "Breakout.png",
        sourceSurvivor: "Yui Kimura",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/35/S20_charSelect_portrait.png/revision/latest?cb=20230705193537",
        modifiers: null,
      },
      {
        name: "Buckle Up",
        description:
          'Unlocks potential in your Aura-reading ability.\n<p>When healing a Survivor in the Dying State, <i>Buckle Up</i> activates:\n</p><ul><li>The Aura of the Killer is revealed to the both of you.</li></ul>\n<p class="mw-empty-elt">\n</p><ul><li>Completing a <i>Healing Action</i> on the dying Survivor grants both of you the <i><b>Endurance</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">8</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b>.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"Ghost beaters never leave a man behind." \u2014 Ash Williams</span></i>',
        imgUrl: "BuckleUp.png",
        sourceSurvivor: "Ashley J. Williams",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/78/S17_charSelect_portrait.png/revision/latest?cb=20230725192546",
        modifiers: null,
      },
      {
        name: "Built to Last",
        description:
          'You know how to get the most out of your tools.<br/>\n<p>Hiding inside a Locker for <b><span class="luaClr clr clr2" style="color: #e8c252;">14</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">13</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">12</span></b> <b>seconds</b> while carrying a depleted Item will replenish its Charges to <b><span class="luaClr clr clr2" style="color: #e8c252;">99\u00a0%</span></b>.<br/>\nEach use of <i>Built to Last</i> reduces this percentage by <b><span class="luaClr clr clr6" style="color: #ff8800;">-33\u00a0%</span></b>.<br/>\n</p>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"Architecture is the soul of civilisation." \u2014 Felix Richter</span></i>',
        imgUrl: "BuilttoLast.png",
        sourceSurvivor: "Felix Richter",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2e/S23_charSelect_portrait.png/revision/latest?cb=20230705194042",
        modifiers: null,
      },
      {
        name: "Calm Spirit",
        description:
          'Animals seem to trust you as they often stay calm in your presence.\n<ul><li><b>Prevents</b> Crows from being alerted by your proximity and flying off, unless they are being stepped on.</li>\n<li><b>Suppresses</b> the urge to scream from any cause at all times.</li>\n<li><b>Suppresses</b> all noises related to unlocking Chests, and cleansing or blessing Totems.\n<ul><li><b>Reduces</b> their Interaction speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">35</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>%</b>.</li></ul></li></ul>\n',
        imgUrl: "CalmSpirit.png",
        sourceSurvivor: "Jake Park",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cb/S04_charSelect_portrait.png/revision/latest?cb=20230725191755",
        modifiers: null,
      },
      {
        name: "Chemical Trap",
        description:
          'In the Fog, an officer must adapt to the materials at hand.\n<p>After repairing Generators for a total of <b><span class="luaClr clr clr2" style="color: #e8c252;">70</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">60</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">50</span></b> <b>%</b>, <i>Chemical Trap</i> activates:\n</p><ul><li>Press the <i>Active Ability button</i> while near a dropped Pallet to install a Trap, which stays active for <b><span class="luaClr clr clr2" style="color: #e8c252;">100</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">110</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">120</span></b> <b>seconds</b>.</li>\n<li>When the Killer breaks the <i>Trapped Pallet</i>, its Trap explodes, spraying the Killer with a chemical compound that slows them by <b><span class="luaClr clr clr2" style="color: #e8c252;">-50\u00a0%</span></b> for <b><span class="luaClr clr clr6" style="color: #ff8800;">4 seconds</span></b>.</li></ul>\n<i>Chemical Trap</i> deactivates after triggering successfully or once the timer runs out.\n<p>The Auras of <i>Trapped Pallets</i> are revealed to all Survivors in <b><span class="luaClr clr clr2" style="color: #e8c252;">yellow</span></b>.</p>',
        imgUrl: "ChemicalTrap.png",
        sourceSurvivor: "Ellen Ripley",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/36/S39_charSelect_portrait.png/revision/latest?cb=20230808155833",
        modifiers: null,
      },
      {
        name: "Clairvoyance",
        description:
          'There is an intrinsic energy in you that sees beyond your vision.\n<p>Whenever you cleanse or bless a Totem, <i>Clairvoyance</i> activates:\n</p><ul><li>When empty-handed, press and hold the <i>Ability button</i> to unlock your full Aura-reading potential, allowing you to see the Auras of the Exit Gate Switches, Generators, Hooks, Chests, and the Hatch within <b><span class="luaClr clr clr2" style="color: #e8c252;">64 metres</span></b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">8</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">9</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b>.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"Does anyone else see that? Just me?" \u2014 Mikaela Reid</span></i>',
        imgUrl: "Clairvoyance.png",
        sourceSurvivor: "Mikaela Reid",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/42/S28_charSelect_portrait.png/revision/latest?cb=20230705191728",
        modifiers: null,
      },
      {
        name: "Corrective Action",
        description:
          'You quickly analyse problems and correct others\' work when they make a mistake.\n<p>You start the Trial with <b><span class="luaClr clr clr2" style="color: #e8c252;">1</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">2</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">3</span></b> <b>Token(s)</b> and gain a Token each time you succeed at a Great Skill Check, up to a maximum of <b><span class="luaClr clr clr2" style="color: #e8c252;">5 Tokens</span></b>.\n</p><ul><li>Each time another Survivor cooperating with you fails a Skill Check, <i>Corrective Action</i> consumes <b><span class="luaClr clr clr6" style="color: #ff8800;">1 Token</span></b>, transforming their Failed Skill Check into Good Skill Check instead.</li></ul>\n<i>Corrective Action</i> only applies to normal Skill Checks.\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Cannot hurt to have another set of eyes on the problem." \u2014 Jonah Vasquez</span></i></p>',
        imgUrl: "CorrectiveAction.png",
        sourceSurvivor: "Jonah Vasquez",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c6/S29_charSelect_portrait.png/revision/latest?cb=20230725192519",
        modifiers: null,
      },
      {
        name: "Counterforce",
        description:
          'You know how to withstand an enemy stronger than you, and it starts with hunting down and knocking out their support.<br/>\n<p>You cleanse Totems <b><span class="luaClr clr clr2" style="color: #e8c252;">20\u00a0%</span></b> faster.\n</p>\n<ul><li>Gain another, stack-able <b><span class="luaClr clr clr6" style="color: #ff8800;">20\u00a0%</span></b> Cleansing Speed bonus per cleansed Totem.</li>\n<li>After cleansing a Totem, the Aura of the Totem farthest from you is revealed to you for <b><span class="luaClr clr clr2" style="color: #e8c252;">2</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">3</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">4</span></b> <b>seconds</b>.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"I don\'t mind a little detective work." \u2014 Jill Valentine</span></i>',
        imgUrl: "Counterforce.png",
        sourceSurvivor: "Jill Valentine",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/99/S26_charSelect_portrait.png/revision/latest?cb=20230705184445",
        modifiers: null,
      },
      {
        name: "Cut Loose",
        description:
          'You get in enough trouble, you know how to get out of it.\n<p>After performing a <i>Rush Vault action</i> in a Chase, <i>Cut Loose</i> activates for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">4</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">5</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">6</span></b> <b>seconds</b>:\n</p><ul><li><b>Suppresses</b> both the <i>Loud Noise Notification</i> and the sound effects triggered by rushing to vault.</li>\n<li>Successfully performing another <i>Rush Vault action</i> while <i>Cut Loose</i> is active resets the timer.</li></ul>\n<p><i>Cut Loose</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">45 seconds</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I know how we can get out of here! Quick, this way!" \u2014 Thalita Lyra</span></i></p>',
        imgUrl: "CutLoose.png",
        sourceSurvivor: "Thalita Lyra",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/20/S35_charSelect_portrait.png/revision/latest?cb=20230705194105",
        modifiers: null,
      },
      {
        name: "Dance With Me",
        description:
          'When performing a <i>Rush Vault action</i> or when rushing out of a Locker, you will not leave any Scratch Marks for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">3 seconds</span></b>.\n<p><i>Dance With Me</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Another show\'s off and runnin\',<br/>Dance with me, cuz there\'s a storm a commin\'<br/>Follow my boots, try to keep up,<br/>Dance with me, until sun up." \u2014 Kate Denson\'s "Dance with Me"</span></i></p>',
        imgUrl: "DanceWithMe.png",
        sourceSurvivor: "Kate Denson",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/19/S13_charSelect_portrait.png/revision/latest?cb=20230705192155",
        modifiers: null,
      },
      {
        name: "Dark Sense",
        description:
          'Unlocks potential in your Aura-reading ability:\n<p>Each time a Generatoris completed, <i>Dark Sense</i> activates:\n</p><ul><li>The Aura of the Killer is revealed to you for <b><span class="luaClr clr clr2" style="color: #e8c252;">5</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">7</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b>, as soon as they come within <b><span class="luaClr clr clr2" style="color: #e8c252;">24 metres</span></b> of your location, after which <i>Dark Sense</i> deactivates.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"Take it from an old-timer: Slow down, don\'t rush and try not to worry so much! The best way to beat him is to know how he thinks." \u2014 Murf, The Lost Tapes</span></i>',
        imgUrl: "DarkSense.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Dead Hard",
        description:
          'You can take a beating.\n<p><i>Dead Hard</i> activates after being unhooked or unhooking yourself.\n</p><p>When you are injured, tap into your adrenaline bank to avoid damage.\n</p><ul><li>Press the <i>Active Ability button</i> while running to trigger the <i><b>Endurance</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">0.5 seconds</span></b>.</li>\n<li><i>Dead Hard</i> then deactivates.</li></ul>\n<p><i>Dead Hard</i> causes the <i><b>Exhausted</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.\n</p><p><i>Dead Hard</i> cannot be used when <i><b>Exhausted</b></i>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"We were walkin\' through t\'ginnel one night when a beer bottle flew past me, then another, and another.<br/>I thought to myself "Gonna \'ave some fun \'ere lads, let\'s get stuck in!".<br/>It were a right dust up, I swear down!" \u2014 David King</span></i></p>',
        imgUrl: "DeadHard.png",
        sourceSurvivor: "David King",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/57/S10_charSelect_portrait.png/revision/latest?cb=20230725192207",
        modifiers: null,
      },
      {
        name: "Deception",
        description:
          'Your adventurous lifestyle requires moments of crafty misdirection.\n<p>Interacting with a Locker while holding the <i>Sprint button</i> has the following effects:\n</p><ul><li>You do not enter the Locker.</li>\n<li>The Locker\'s doors swing open and close swiftly, feining a Survivor entering it.</li>\n<li>Triggers a <i>Loud Noise Notification</i> at the Locker\'s location, feining a Survivor rushing to enter it.</li>\n<li><b>Suppresses</b> the creation of Scratch Marks and Pools of Blood for <b><span class="luaClr clr clr2" style="color: #e8c252;">3 seconds</span></b>.</li></ul>\n<i>Deception</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.',
        imgUrl: "Deception.png",
        sourceSurvivor: "\u00c9lodie Rakoto",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/45/S24_charSelect_portrait.png/revision/latest?cb=20230705193628",
        modifiers: null,
      },
      {
        name: "Decisive Strike",
        description:
          'Using whatever is at hand, you stab your aggressor in an ultimate attempt to escape.\n<p>After being unhooked or unhooking yourself, <i>Decisive Strike</i> activates for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">60</span></b> <b>seconds</b>:\n</p><ul><li>When being grabbed or picked up by the Killer, succeed a Skill Check to automatically escape their grasp, stunning them for <b><span class="luaClr clr clr2" style="color: #e8c252;">3 seconds</span></b>.</li>\n<li>Successfuly stunning the Killer will disable <i>Decisive Strike</i> for the remainder of the Trial and result in you becoming the <i><b>Obsession</b></i>.</li></ul>\n<p>While <i>Decisive Strike</i> is active, performing <i>Conspicuous Actions</i> will deactivate it for the remainder of the Trial.\n</p><p><i>Decisive Strike</i> deactivates once the Exit Gates are powered.\n</p><p>Increases the Odds of becoming the initial <i><b>Obsession</b></i> of the Killer by <b>+100\u00a0%</b>.<br/>\n<i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i>\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"There is nothing to be scared of." \u2014 Laurie Strode</span></i></p>',
        imgUrl: "DecisiveStrike.png",
        sourceSurvivor: "Laurie Strode",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cc/S06_charSelect_portrait.png/revision/latest?cb=20230705185657",
        modifiers: null,
      },
      {
        name: "Deliverance",
        description:
          'After performing a Safe Hook Rescue on another Survivor, <i>Deliverance</i> activates:\n<ul><li>Causes your next Self-Unhook attempt to always succeed.</li>\n<li>Causes the <i><b>Broken</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">100</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">80</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">60</span></b> <b>seconds</b> after unhooking yourself.</li></ul>\n<p><i>Deliverance</i> is not available during the second Hook Stage or if you are hooked as the last living Survivor in the Trial, regardless of your Hook Stage then.\n</p>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I was raised by a strict man who taught me how to make the best of a bad situation." \u2014 Adam Francis</span></i></p>',
        imgUrl: "Deliverance.png",
        sourceSurvivor: "Adam Francis",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e1/S14_charSelect_portrait.png/revision/latest?cb=20230725192408",
        modifiers: null,
      },
      {
        name: "Desperate Measures",
        description:
          'You refuse to fail, even during your darkest hour.\n<ul><li><b>Increases</b> your Action speeds in Healing and Unhooking by <b><span class="luaClr clr clr2" style="color: #e8c252;">10</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">12</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">14</span></b> <b>%</b> for each injured, hooked, or dying Survivor, up to a maximum of <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">48</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">56</span></b> <b>%</b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"When they come with a wrecking ball, build stronger walls." \u2014 Felix Richter</span></i></p>',
        imgUrl: "DesperateMeasures.png",
        sourceSurvivor: "Felix Richter",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2e/S23_charSelect_portrait.png/revision/latest?cb=20230705194042",
        modifiers: null,
      },
      {
        name: "Detective's Hunch",
        description:
          'Unlocks potential in your Aura-reading ability.<br/>\n<p>Each time a Generator is completed, the Auras of any Generators, Chests, and Totemswithin <b><span class="luaClr clr clr2" style="color: #e8c252;">32</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">48</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">64</span></b> <b>metres</b> are revealed to you for <b><span class="luaClr clr clr6" style="color: #ff8800;">10 seconds</span></b>.\n</p>\n<ul><li>If you are holding a Map, any objects revealed by <i>Detective\'s Hunch</i> will automatically be tracked by it.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Are you able to tell us where you were last night?" \u2014 Detective David Tapp</span></i></p>',
        imgUrl: "Detective'sHunch.png",
        sourceSurvivor: "Detective David Tapp",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/15/S12_charSelect_portrait.png/revision/latest?cb=20230705191928",
        modifiers: null,
      },
      {
        name: "Distortion",
        description:
          'Start the Trial with <b><span class="luaClr clr clr2" style="color: #e8c252;">3 Tokens</span></b>.\n<p>Whenever the Killer attempts to read your Aura, <i>Distortion</i> activates, consuming <b><span class="luaClr clr clr6" style="color: #ff8800;">1 Token</span></b>, and the following effects apply:\n</p><ul><li><b>Blocks</b> your Aura from being read for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">8</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b>.</li>\n<li><b>Suppresses</b> the creation of Scratch Marks for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">8</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b>.</li></ul>\n\nFor every <b><span class="luaClr clr clr8" style="color: #d41c1c;">30 seconds</span></b> you are within the Killer\'s Terror Radius, <i>Distortion</i> recharges <b><span class="luaClr clr clr4" style="color: #ac3ee3;">1 Token</span></b>.\n<p><i>Distortion</i> cannot accumulate more Tokens than its initial count.\n</p><p><i>Distortion</i> does not activate when you are in the Dying State.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Death Fooled by the Cloak of Falcon Feathers.<br/>Sketch inspired by a few sleepless nights during winter. Exploration of Norse mythology: bravery can conceal your flaws, even when you are at your most vulnerable." \u2014 Jeff, pencil on tone paper, 12x12</span></i></p>',
        imgUrl: "Distortion.png",
        sourceSurvivor: 'Jeffrey "Jeff" Johansen',
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b9/S15_charSelect_portrait.png/revision/latest?cb=20230725192434",
        modifiers: null,
      },
      {
        name: "Diversion",
        description:
          'After being within the Killer\'s Terror Radius for <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">35</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>seconds</b> without being chased, <i>Diversion</i> activates:\n<ul><li>Press the <i>Active Ability button</i> while crouched and motionless to throw a pebble, creating a distraction for the Killer at a distance of <b><span class="luaClr clr clr2" style="color: #e8c252;">20 metres</span></b> from your location.</li></ul>\n<p>The distraction consists of the following:\n</p><ul><li>Triggers a <i>Loud Noise Notification</i>.</li>\n<li>Creates fake Scratch Marks.</li></ul>\n<p><i>Diversion</i> deactivates after use and resets its timer.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"There\'s what is easy and then there\'s what is right. If you confuse the two, there\'s no telling what you become." \u2014 Adam Francis</span></i></p>',
        imgUrl: "Diversion.png",
        sourceSurvivor: "Adam Francis",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e1/S14_charSelect_portrait.png/revision/latest?cb=20230725192408",
        modifiers: null,
      },
      {
        name: "Dramaturgy",
        description:
          'When people bring you on to their project, they do so because of the unexpected magic you bring to your performance.\n<p>Whenever you are Healthy, <i>Dramaturgy</i> activates:\n</p><ul><li>While running, press the <i>Active Ability button</i> to run with knees high for <b><span class="luaClr clr clr2" style="color: #e8c252;">0.5 seconds</span></b> to gain a <b><span class="luaClr clr clr6" style="color: #ff8800;">+25\u00a0%</span></b> <i><b>Haste</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr8" style="color: #d41c1c;">2 seconds</span></b>, followed by one of the following effects:\n<ul><li>Suffer from the <i><b>Exposed</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr4" style="color: #ac3ee3;">12 seconds</span></b>.</li>\n<li>Extend the duration of the <i><b>Haste</b></i> <b>Status Effect</b> for another <b><span class="luaClr clr clr3" style="color: #199b1e;">2 seconds</span></b>.</li>\n<li>Scream, but without notifying the Killer.</li>\n<li>Receive a random Item of <b><span class="luaClr clr clr3" style="color: #199b1e;">Rare</span></b> Rarity, with a random selection of Add-ons attached to it, automatically dropping any previously held Item.</li></ul></li>\n<li><i>The same effect cannot happen twice in a row.</i></li></ul>\n<p><i>Dramaturgy</i> causes the <i><b>Exhausted</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.\n</p><p><i>Dramaturgy</i> cannot be used when <i><b>Exhausted</b></i>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Take the part. It\'s a good movie, he says. What\'s the worst that can happen?" \u2014 Nicolas Cage</span></i></p>',
        imgUrl: "Dramaturgy.png",
        sourceSurvivor: "Nicolas Cage",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/16/S38_charSelect_portrait.png/revision/latest?cb=20230705182818",
        modifiers: null,
      },
      {
        name: "Deja Vu",
        description:
          'Unlocks potential in your Aura-reading ability:\n<p>Paranoia paired with your horror of failure helps prepare you from repeating the same mistakes.\n</p><ul><li>The Auras of the <b><span class="luaClr clr clr2" style="color: #e8c252;">3</span></b> Generators, who are currently in closest proximity to one another, are revealed to you at all times.</li>\n<li><b>Increases</b> your Repair speed on those Generators by <b><span class="luaClr clr clr2" style="color: #e8c252;">4</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">5</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">6</span></b> <b>%</b>.</li></ul>\n<ul><li>If you are holding a Map, all Generators revealed by <i>D\u00e9j\u00e0 Vu</i> are automatically added to it.</li></ul>',
        imgUrl: "DejaVu.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Empathic Connection",
        description:
          'Your presence psychically projects itself to those in danger.\n<ul><li>Whenever another Survivor is injured, they can see your Aura when within <b><span class="luaClr clr clr2" style="color: #e8c252;">32</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">64</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">96</span></b> <b>metres</b> of your location.</li>\n<li>You heal other Survivors <b><span class="luaClr clr clr2" style="color: #e8c252;">10\u00a0%</span></b> faster.</li></ul>\n',
        imgUrl: "EmpathicConnection.png",
        sourceSurvivor: "Yoichi Asakawa",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/07/S30_charSelect_portrait.png/revision/latest?cb=20230725192537",
        modifiers: null,
      },
      {
        name: "Empathy",
        description:
          'Unlocks potential in your Aura-reading ability:\n<ul><li>The Auras of Survivors in the Injured State or in the Dying State within <b><span class="luaClr clr clr2" style="color: #e8c252;">64</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">96</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">128</span></b> <b>metres</b> of your location are revealed to you.</li></ul>\n<p><i>Empathy</i> does not reveal the Aura of a Survivor being carried by the Killer.</p>',
        imgUrl: "Empathy.png",
        sourceSurvivor: "Claudette Morel",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/65/S03_charSelect_portrait.png/revision/latest?cb=20230725191927",
        modifiers: null,
      },
      {
        name: "Fast Track",
        description:
          'Sometimes the sacrifice of others is necessary to get ahead.<br/>\n<p>Whenever another Survivor is hooked, <i>Fast Track</i> gains <b><span class="luaClr clr clr2" style="color: #e8c252;">1</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">2</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">3</span></b> <b>Tokens</b>, up to a maximum of <b><span class="luaClr clr clr2" style="color: #e8c252;">9</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">18</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">27</span></b> <b>Tokens</b>.\n</p>\n<ul><li>You consume all accumulated Tokens after a Great Skill Check on a Generator.</li>\n<li>Each Token grants a stack-able <b><span class="luaClr clr clr2" style="color: #e8c252;">1\u00a0%</span></b> Progression bonus in addition to the default Progression bonus for succeeding a Great Skill Check.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"The weak are sacrificed first. It\'s nature, it\'s business... it\'s the truth most refuse to face." \u2014 Yun-Jin Lee</span></i></p>',
        imgUrl: "FastTrack.png",
        sourceSurvivor: "Yun-Jin Lee",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/79/S25_charSelect_portrait.png/revision/latest?cb=20230705194144",
        modifiers: null,
      },
      {
        name: "Flashbang",
        description:
          'You have adapted to a world in chaos and making what you can from the debris.\n<p>After repairing Generators for a total of <b><span class="luaClr clr clr2" style="color: #e8c252;">70</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">60</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">50</span></b> <b>%</b>, <i>Flashbang</i> activates:\n</p><ul><li>Enter any Locker and press the <i>Ability button</i> to craft a Flash Grenade.</li></ul>\n\nThe <i>Flashbang</i> is left behind when escaping the Trial.\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Get outta my face!" \u2014 Leon Scott Kennedy</span></i></p>',
        imgUrl: "Flashbang.png",
        sourceSurvivor: "Leon Scott Kennedy",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5d/S27_charSelect_portrait.png/revision/latest?cb=20230705184450",
        modifiers: null,
      },
      {
        name: "Flip-Flop",
        description:
          'You have an uncanny ability to escape the inevitable.<br/>\n<p>While in the Dying State,  <b><span class="luaClr clr clr2" style="color: #e8c252;">50\u00a0%</span></b> of your Recovery progression is converted into Wiggling progression, up to a maximum of <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">45</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">50</span></b> <b>%</b>, once you are picked up by the Killer.<br/>\n</p>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"Catch ya on the flip-flop." \u2014 Ash Williams</span></i>',
        imgUrl: "Flip-Flop.png",
        sourceSurvivor: "Ashley J. Williams",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/78/S17_charSelect_portrait.png/revision/latest?cb=20230725192546",
        modifiers: null,
      },
      {
        name: "Fogwise",
        description:
          'In your countless years in The Fog, you have seen it all, and when you are focused, you can remember most of it too.\n<ul><li>Succeeding a Great Skill Check while repairing a Generator reveals the Killer\'s Aura to you for <b><span class="luaClr clr clr2" style="color: #e8c252;">4</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">5</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">6</span></b> <b>seconds</b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I have seen great cruelty... and I have also seen another way." \u2014 Vittorio Toscano</span></i></p>',
        imgUrl: "Fogwise.png",
        sourceSurvivor: "Vittorio Toscano",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/64/S34_charSelect_portrait.png/revision/latest?cb=20230705194225",
        modifiers: null,
      },
      {
        name: "For the People",
        description:
          'You risk life and injury for others.\n<p>While healthy and healing another Survivor without using a Med-Kit, press the <i>Active Ability button</i> to activate <i>For the People</i>:\n</p><ul><li>Trades <b><span class="luaClr clr clr2" style="color: #e8c252;">1</span></b> Health State with that Survivor:\n<ul><li><b>Instantly</b> heals them to the Injured State, if they were dying or suffering from the <i><b>Deep Wound</b></i> <b>Status Effect</b>.</li>\n<li><b>Instantly</b> heals them to full health, if they were injured.</li></ul></li>\n<li>You yourself become injured and suffer from the <i><b>Broken</b></i> <b>Status Effect</b> for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">80</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">70</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">60</span></b> <b>seconds</b>.</li>\n<li>You become the Killer\'s <i><b>Obsession</b></i>, if not already.</li></ul>\n<p>Reduces the Odds of becoming the initial <i><b>Obsession</b></i> of the Killer by <b>-100\u00a0%</b>.<br/>\n<i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i>\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"We can write our own story and decide how it really ends." \u2014 Zarina Kassir</span></i></p>',
        imgUrl: "ForthePeople.png",
        sourceSurvivor: "Zarina Kassir",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3d/S21_charSelect_portrait.png/revision/latest?cb=20230726125017",
        modifiers: null,
      },
      {
        name: "Friendly Competition",
        description:
          'You revel in the community spirit of a competition, and inspire others to follow suit.\n<p>Whenever you complete a Generator with at least one other Survivor, <i>Friendly Competition</i> activates:\n</p><ul><li><b>Increases</b> your Repair speed, and that of the other Survivor(s) who completed the repairs with you, by <b><span class="luaClr clr clr2" style="color: #e8c252;">+5\u00a0%</span></b> for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">45</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">60</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">75</span></b> <b>seconds</b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"C\'mon, let\'s do this!" \u2014 Thalita Lyra</span></i></p>',
        imgUrl: "FriendlyCompetition.png",
        sourceSurvivor: "Thalita Lyra",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/20/S35_charSelect_portrait.png/revision/latest?cb=20230705194105",
        modifiers: null,
      },
      {
        name: "Guardian",
        description:
          'You risk it all to help those in need.<br/>\n<p>When you unhook a Survivor, the rescued Survivor benefits from the following effects for <b><span class="luaClr clr clr2" style="color: #e8c252;">4</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">6</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">8</span></b> <b>seconds</b>: \n</p>\n<ul><li>Scratch Marks and Pools of Blood are suppressed.</li>\n<li>Additional <b><span class="luaClr clr clr2" style="color: #e8c252;">7\u00a0%</span></b> <i><b>Haste</b></i> <b>Status Effect</b>, boosting their Movement speed.</li></ul>\n<i>Guardian</i> reveals the Killer\'s Aura to you for <b><span class="luaClr clr clr6" style="color: #ff8800;">8 seconds</span></b>.',
        imgUrl: "Guardian.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Head On",
        description:
          'When your mind is set, there better be no one standing in your way.\n<p>While standing in a <b>Locker</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">3 seconds</span></b>, <i>Head On</i> activates:\n</p><ul><li>When rushing out of a Locker, stun the Killer for <b><span class="luaClr clr clr6" style="color: #ff8800;">3 seconds</span></b> if they are within range.</li></ul>\n<p><i>Head On</i> causes the <i><b>Exhausted</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.\n</p><p><i>Head On</i> cannot be used when <i><b>Exhausted</b></i> or when you have accrued Idle Crows.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"People are remembered for the challenges they overcome. You can run away and forget what you\'re capable of or you can face your fears and remind the world of who you are." \u2014 Jane Romero</span></i></p>',
        imgUrl: "HeadOn.png",
        sourceSurvivor: "Jane Romero",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d7/S16_charSelect_portrait.png/revision/latest?cb=20230725192359",
        modifiers: null,
      },
      {
        name: "Hope",
        description:
          'The growing odds of a successful escape fill you with hope and give you wings\n<p>Once the Exit Gates are powered, <i>Hope</i> activates:\n</p><ul><li>Grants a permanent <b><span class="luaClr clr clr2" style="color: #e8c252;">5</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">6</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">7</span></b> <b>%</b> <i><b>Haste</b></i> <b>Status Effect</b>.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"Buckle up, fuckos! Let\'s roll." \u2014 Nikki, The Lost Tapes</span></i>',
        imgUrl: "Hope.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Hyperfocus",
        description:
          'You throw yourself entirely into your tasks and find ways to be more efficient than anyone else.\n<p>After hitting a Great Skill Check while repairing or healing, <i>Hyperfocus</i> gains <b><span class="luaClr clr clr2" style="color: #e8c252;">1 Token</span></b>, up to a maximum of <b><span class="luaClr clr clr6" style="color: #ff8800;">6 Tokens</span></b><br/>\nFor each Token, the following stack-able effects are applied:\n</p><ul><li><b>Increases</b> the Skill Check Trigger odds by <b><span class="luaClr clr clr8" style="color: #d41c1c;">+4\u00a0%</span></b> per Token.</li>\n<li><b>Increases</b> the Skill Check Rotation speed by <b><span class="luaClr clr clr4" style="color: #ac3ee3;">+4\u00a0%</span></b> per Token.</li>\n<li><b>Increases</b> the Skill Check Bonus progression by <b><span class="luaClr clr clr2" style="color: #e8c252;">10</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">20</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>%</b> of its base value per Token.</li></ul>\n<i>Hyperfocus</i> loses all Tokens when succeeding a Good Skill Check, failing a Skill Check, or if the action is interrupted by any means.',
        imgUrl: "Hyperfocus.png",
        sourceSurvivor: "Rebecca Chambers",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/93/S33_charSelect_portrait.png/revision/latest?cb=20230705184830",
        modifiers: null,
      },
      {
        name: "Inner Focus",
        description:
          'You have honed your ability to see through the haze of the Ravage.\n<ul><li>You can see the Scratch Marks of other Survivors.</li>\n<li>Whenever another Survivor loses a Health State within <b><span class="luaClr clr clr6" style="color: #ff8800;">32 metres</span></b> of you, the Killer\'s Aura is revealed to you for <b><span class="luaClr clr clr2" style="color: #e8c252;">3</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">4</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">5</span></b> <b>seconds</b>.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"The death, the trauma, the fear... it all leads here. The Overlap." \u2014 Haddie Kaur, Ravages of the Abyss Episode 11</span></i>',
        imgUrl: "InnerFocus.png",
        sourceSurvivor: "Haddie Kaur",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/97/S31_charSelect_portrait.png/revision/latest?cb=20230705194521",
        modifiers: null,
      },
      {
        name: "Inner Healing",
        description:
          'You look inwards and trust your instincts when you feel lost and alone.<br/>\n<p>Each time you cleanse a Totem, <i>Inner Healing</i> activates:\n</p>\n<ul><li>You are automatically healed <b><span class="luaClr clr clr2" style="color: #e8c252;">1 Health State</span></b> when hiding inside a Locker for <b><span class="luaClr clr clr2" style="color: #e8c252;">10</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">9</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">8</span></b> <b>seconds</b> while injured or suffering from the <i><b>Deep Wound</b></i> <b>Status Effect</b>.</li></ul>\n<i>Inner Healing</i> does not activate if you currently suffer from the <i><b>Broken</b></i> <b>Status Effect</b>.',
        imgUrl: "InnerHealing.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Iron Will",
        description:
          'You are able to concentrate and enter a meditative-like state to numb some pain.\n<ul><li><b>Reduces</b> the volume of <i>Grunts of Pain</i> while in the Injured State by <b><span class="luaClr clr clr2" style="color: #e8c252;">25</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">75</span></b> <b>%</b>.</li></ul>\n<p><i>Iron Will</i> cannot be used when suffering from <i><b>Exhaustion</b></i>, but does not cause the <i><b>Exhausted</b></i> <b>Status Effect</b>.</p>',
        imgUrl: "IronWill.png",
        sourceSurvivor: "Jake Park",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cb/S04_charSelect_portrait.png/revision/latest?cb=20230725191755",
        modifiers: null,
      },
      {
        name: "Kindred",
        description:
          'Unlocks potential in your Aura-reading ability:\n<p>While you are hooked:\n</p><ul><li>The Auras of all Survivors are revealed to one another.</li>\n<li>Whenever the Killer is within <b><span class="luaClr clr clr2" style="color: #e8c252;">8</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">12</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">16</span></b> <b>metres</b> of your Hook, their Aura is revealed to all Survivors.</li></ul>\n<p>While any other Survivor is hooked:\n</p><ul><li>The Auras of all other Survivors are revealed to you.</li>\n<li>Whenever the Killer is within <b><span class="luaClr clr clr2" style="color: #e8c252;">8</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">12</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">16</span></b> <b>metres</b> of the hooked Survivor, their Aura is revealed to you.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Be kind to one another, We\'re all in this together" \u2014 Sujan, The Lost Tapes</span></i></p>',
        imgUrl: "Kindred.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Kinship",
        description:
          'The importance of friendship has given you strength.<br/>\n<p>While you are on the Hook in the <i>Struggle Phase</i>, <i>Kinship</i> activates:\n</p>\n<ul><li>If another Survivor is within <b><span class="luaClr clr clr2" style="color: #e8c252;">16 metres</span></b> of your Hook while <i>Kinship</i> is active, the <i>Struggle Phase</i> timer is paused for <b><span class="luaClr clr clr2" style="color: #e8c252;">26</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">30</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">34</span></b> <b>seconds</b>.</li></ul>\n',
        imgUrl: "Kinship.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Leader",
        description:
          'You are able to organise a team to cooperate more efficiently.\n<ul><li><b>Increases</b> the Action speeds of other Survivors in Healing, Sabotaging, Unhooking, Cleansing, Opening, and Unlocking by <b><span class="luaClr clr clr2" style="color: #e8c252;">15</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">20</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">25</span></b> <b>%</b> while they are within <b><span class="luaClr clr clr2" style="color: #e8c252;">8 metres</span></b> of your location.</li>\n<li>This effect lingers for <b><span class="luaClr clr clr6" style="color: #ff8800;">15 seconds</span></b> when leaving <i>Leader\'s</i> range.</li></ul>\n<p>Survivors can only be affected by one instance of <i>Leader</i> at a time.</p>',
        imgUrl: "Leader.png",
        sourceSurvivor: "Dwight Fairfield",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8c/S01_charSelect_portrait.png/revision/latest?cb=20230705190630",
        modifiers: null,
      },
      {
        name: "Left Behind",
        description:
          'You will get the job done... no matter the cost.<br/>\n<p>When you are the last Survivor remaining in the Trial, the Aura of the Hatch is revealed to you when you are within <b><span class="luaClr clr clr2" style="color: #e8c252;">24</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">28</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">32</span></b> <b>metres</b>.\n</p>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I\'m not horse-shittin\' around. I\'m doing this alone!" \u2014 Bill Overbeck</span></i></p>',
        imgUrl: "LeftBehind.png",
        sourceSurvivor: 'William "Bill" Overbeck',
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/66/S08_charSelect_portrait.png/revision/latest?cb=20230705190755",
        modifiers: null,
      },
      {
        name: "Light-Footed",
        description:
          'Crossing paths with deadly Killers has taught you the value of discretion.\n<p>Whenever you are healthy, <i>Light-Footed</i> activates:\n</p><ul><li><b>Suppresses</b> the sound of your footsteps while running.</li></ul>\n<i>Light-Footed</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">28</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">24</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">20</span></b> <b>seconds</b> after performing a <i>Rush Vault action</i>.\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Come on, cat." \u2014 Ellen Ripley</span></i></p>',
        imgUrl: "Light-Footed.png",
        sourceSurvivor: "Ellen Ripley",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/36/S39_charSelect_portrait.png/revision/latest?cb=20230808155833",
        modifiers: null,
      },
      {
        name: "Lightweight",
        description:
          'Your running is light and soft, making your tracks harder to follow.\n<ul><li><b>Reduces</b> the duration of your Scratch Marks by <b><span class="luaClr clr clr2" style="color: #e8c252;">3</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">4</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">5</span></b> <b>seconds</b>.</li>\n<li>Your Scratch Marks are spaced inconsistently.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Take it slow, he knows where you have been... just like I have always said:<br/>\'live slow and die old\'." \u2014 Dylan, The Lost Tapes</span></i></p>',
        imgUrl: "Lightweight.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Lithe",
        description:
          'After performing a <i>Rush Vault action</i>, break into a sprint of <b><span class="luaClr clr clr2" style="color: #e8c252;">150\u00a0%</span></b> of your normal Running Movement speed for a maximum of <b><span class="luaClr clr clr6" style="color: #ff8800;">3 seconds</span></b>.<br/>\n<p><i>Lithe</i> causes the <i><b>Exhausted</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.<br/>\n<i>Lithe</i> cannot be used when <i><b>Exhausted</b></i>.<br/>\n</p>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"U mad?" \u2014 Feng Min</span></i>',
        imgUrl: "Lithe.png",
        sourceSurvivor: "Feng Min",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ac/S09_charSelect_portrait.png/revision/latest?cb=20230725191813",
        modifiers: null,
      },
      {
        name: "Low Profile",
        description:
          'You work best alone.<br/>\n<p>When it is just you and your pursuer, you know how to disappear.\n</p>\n<p>Whenever you are the only Survivor in the Trial, who is not either in the Dying State, hooked, or already dead, <i>Low Profile</i> activates:\n</p><ul><li><b>Suppresses</b> your Pools of Blood, Scratch Marks, and <i>Grunts of Pain</i> for <b><span class="luaClr clr clr2" style="color: #e8c252;">70</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">80</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">90</span></b> <b>seconds</b>.</li></ul>',
        imgUrl: "LowProfile.png",
        sourceSurvivor: "Ada Wong",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/S32_charSelect_portrait.png/revision/latest?cb=20230725192508",
        modifiers: null,
      },
      {
        name: "Lucky Break",
        description:
          'You have had your share of scrapes and bruises, but luck is always on your side.\n<p>Whenever you are in the Injured State, <i>Lucky Break</i> activates:\n</p><ul><li><b>Suppresses</b> your Pools of Blood and Scratch Marks for a maximum of <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">60</span></b> <b>seconds</b>, after which <i>Lucky Break</i> deactivates.</li></ul>\n<p>Each <b><span class="luaClr clr clr2" style="color: #e8c252;">1 second</span></b> spent healing another Survivor recharges <i>Lucky Break</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">1 second</span></b> up to its maximum Effect duration.\n</p><p><i>Lucky Break</i> also deactivates whenever you are Healthy or in the Dying State.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"That\'s not enough to beat me.<br/>Not even close." \u2014 Yui Kimura</span></i></p>',
        imgUrl: "LuckyBreak.png",
        sourceSurvivor: "Yui Kimura",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/35/S20_charSelect_portrait.png/revision/latest?cb=20230705193537",
        modifiers: null,
      },
      {
        name: "Lucky Star",
        description:
          'You know how to stay calm in the face of incomprehensible danger.\n<p>While hiding inside a Locker, <i>Lucky Star</i> activates:\n</p><ul><li><b>Suppresses</b> your <i>Grunts of Pain</i> and the creation of Pools of Blood for <b><span class="luaClr clr clr2" style="color: #e8c252;">10 seconds</span></b></li></ul>\n\nUpon exiting the Locker, you benefit from the following effects for <b><span class="luaClr clr clr6" style="color: #ff8800;">10 seconds</span></b>:\n<ul><li>The Auras of the other Survivors are revealed to you.</li>\n<li>The Aura of the closest Generator is revealed to you in <b><span class="luaClr clr clr2" style="color: #e8c252;">yellow</span></b>.</li></ul>\n<i>Lucky Star</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">35</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>seconds</b>.\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"You are my... lucky star..." \u2014 Ellen Ripley</span></i></p>',
        imgUrl: "LuckyStar.png",
        sourceSurvivor: "Ellen Ripley",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/36/S39_charSelect_portrait.png/revision/latest?cb=20230808155833",
        modifiers: null,
      },
      {
        name: "Made for This",
        description:
          'You were born to survive, and raised to adapt.\n<p>Whenever you are in the Injured State, <i>Made for This</i> activates and you benefit from the following effects:\n</p><ul><li>Gain a <b><span class="luaClr clr clr2" style="color: #e8c252;">1</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">2</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">3</span></b> <b>%</b> <i><b>Haste</b></i> <b>Status Effect</b> while running.</li>\n<li>Gain the <i><b>Endurance</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">8</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b> after completing a Healing action on another Survivor.</li></ul>\n<p><i>Made for This</i> cannot be used when suffering from <i><b>Exhaustion</b></i>, but does not cause the <i><b>Exhausted</b></i> <b>Status Effect</b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I didn\'t come here to be robot food!" \u2014 Gabriel Soma</span></i></p>',
        imgUrl: "MadeforThis.png",
        sourceSurvivor: "Gabriel Soma",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b3/S37_charSelect_portrait.png/revision/latest?cb=20230705194559",
        modifiers: null,
      },
      {
        name: "Mettle of Man",
        description:
          'Evil has a way of always finding you.\n<p>After triggering your <b><span class="luaClr clr clr2" style="color: #e8c252;">third</span></b> <i>Protection Hit</i>, <i>Mettle of Man</i> activates:\n</p><ul><li>While injured, <i>Mettle of Man</i> shields you from going down the next time you take damage.</li>\n<li>Healing back to full health will reveal your Aura to the Killer whenever you are farther than <b><span class="luaClr clr clr2" style="color: #e8c252;">12</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">14</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">16</span></b> <b>metres</b> from them.</li></ul>\n<p><i>Mettle of Man</i> deactivates the next time you are put into the Dying State.\n</p><p>Increases the Odds of becoming the initial <i><b>Obsession</b></i> of the Killer by <b>+100\u00a0%</b>.\n</p><p><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i>\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Evil has a bullseye on my back the size of Tiger Stadium." \u2014 Ash Williams</span></i></p>',
        imgUrl: "MettleofMan.png",
        sourceSurvivor: "Ashley J. Williams",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/78/S17_charSelect_portrait.png/revision/latest?cb=20230725192546",
        modifiers: null,
      },
      {
        name: "No Mither",
        description:
          'Go on out, kid, it is just a scratch.<br/>\n<p>Your thick blood coagulates practically instantly.<br/>\nYou suffer from the <i><b>Broken</b></i> <b>Status Effect</b> for the entire Trial, but benefit from the following effects:\n</p>\n<ul><li>Pools of Blood are suppressed.</li>\n<li>When injured or dying, <i>Grunts of Pain</i> are reduced by <b><span class="luaClr clr clr2" style="color: #e8c252;">25</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">75</span></b> <b>%</b>.</li>\n<li>Your Recovery speed is increased by <b><span class="luaClr clr clr2" style="color: #e8c252;">15</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">20</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">25</span></b> <b>%</b>.</li>\n<li>You can recover fully from the Dying State.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I lost it. Just lamped him one. They went and banned me didn\'t they. Went t\'pub afterwards, had a few pints and moved on to the next chapter. I couldn\'t be mithered with it all anyway, you know what I mean? Can\'t be arsed." \u2014 David King</span></i></p>',
        imgUrl: "NoMither.png",
        sourceSurvivor: "David King",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/57/S10_charSelect_portrait.png/revision/latest?cb=20230725192207",
        modifiers: null,
      },
      {
        name: "No One Left Behind",
        description:
          'It is inconceivable to leave someone behind.\n<p>Once the Exit Gates are powered, <i>No One Left Behind</i> activates:\n</p><ul><li><b>Increases</b> your Unhooking and Healing speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">30</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">40</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">50</span></b> <b>%</b>.</li>\n<li>Grants <b><span class="luaClr clr clr2" style="color: #e8c252;">50</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">75</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">100</span></b> <b>%</b> bonus Bloodpoints for actions in the Altruism Category.</li>\n<li>Grants the unhooked Survivor a <b><span class="luaClr clr clr2" style="color: #e8c252;">7\u00a0%</span></b> <i><b>Haste</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr6" style="color: #ff8800;">10 seconds</span></b>.</li>\n<li>The Auras of all other Survivors are revealed to you.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Yeah, no shit.<br/>But I believe we can outsmart and overthrow him if we work together.<br/>Don\'t be predictable and selfish!" \u2014 Clyde, The Lost Tapes</span></i></p>',
        imgUrl: "NoOneLeftBehind.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Object of Obsession",
        description:
          'A supernatural bond links you to the Killer.\n<p>Whenever the Killer reads your Aura<i>Object of Obsession</i> activates for the same duration as their Aura-reading action:\n</p><ul><li><b>Reveals</b> the Killer\'s Aura to you.</li>\n<li><b>Increases</b> your Action speeds in Repairing, Healing, and Cleansing by <b><span class="luaClr clr clr2" style="color: #e8c252;">2</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">4</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">6</span></b> <b>%</b>.</li></ul>\n\nWhenever you are the <i><b>Obsession</b></i>, your Aura is automatically revealed to the Killer for <b><span class="luaClr clr clr2" style="color: #e8c252;">3 seconds</span></b> every <b><span class="luaClr clr clr6" style="color: #ff8800;">30 seconds</span></b>.\n<p>Increases the Odds of becoming the initial <i><b>Obsession</b></i> of the Killer by <b>+100\u00a0%</b>.<br/>\n<i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i>\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"He was watching me!" \u2014 Laurie Strode</span></i></p>',
        imgUrl: "ObjectofObsession.png",
        sourceSurvivor: "Laurie Strode",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cc/S06_charSelect_portrait.png/revision/latest?cb=20230705185657",
        modifiers: null,
      },
      {
        name: "Off the Record",
        description:
          'You have learnt that a quiet approach is sometimes best.\n<p>After being unhooked or unhooking yourself, <i>Off the Record</i> activates for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">70</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">80</span></b> <b>seconds</b>:\n</p><ul><li><b>Prevents</b> your Aura from being revealed to the Killer, if they attempt to read it.</li>\n<li><b>Suppresses </b><i>Grunts of Pain</i> when injured.</li>\n<li>Grants the <i><b>Endurance</b></i> <b>Status Effect</b>.\n<ul><li>This effect is cancelled prematurely if you perform a <i>Conspicuous Action</i>.</li></ul></li></ul>\n<p><i>Off the Record</i> deactivates once the Exit Gates are powered.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Trust me, I investigate thoroughly and discreetly." \u2014 Zarina Kassir</span></i></p>',
        imgUrl: "OfftheRecord.png",
        sourceSurvivor: "Zarina Kassir",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3d/S21_charSelect_portrait.png/revision/latest?cb=20230726125017",
        modifiers: null,
      },
      {
        name: "Open-Handed",
        description:
          'Strengthens the potential in your and your team\'s Aura-reading abilities.\n<ul><li><b>Increases</b> the radius of all Aura-reading abilities emanating from yourself or other Survivors by <b><span class="luaClr clr clr2" style="color: #e8c252;">8</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">12</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">16</span></b> <b>metres</b>.</li></ul>\n<p>Survivors can only be affected by one instance of <i>Open-Handed</i> at a time.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Paying attention is what kept me alive through the years. That, and my good looks of course." \u2014 Ace Visconti</span></i></p>',
        imgUrl: "Open-Handed.png",
        sourceSurvivor: "Ace Visconti",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9f/S07_charSelect_portrait.png/revision/latest?cb=20230705190028",
        modifiers: null,
      },
      {
        name: "Overcome",
        description:
          'You have calculated how much energy you can risk to expend.\n<ul><li>Whenever you become injured, you retain the Movement Speed burst for <b><span class="luaClr clr clr2" style="color: #e8c252;">2 additional seconds</span></b>.</li></ul>\n<p><i>Overcome</i> causes the <i><b>Exhausted</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.<br/>\n<i>Overcome</i> cannot be used when <i><b>Exhausted</b></i>.\n</p>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"After careful analysis, we are getting the hell out of here!" \u2014 Jonah Vasquez</span></i></p>',
        imgUrl: "Overcome.png",
        sourceSurvivor: "Jonah Vasquez",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c6/S29_charSelect_portrait.png/revision/latest?cb=20230725192519",
        modifiers: null,
      },
      {
        name: "Overzealous",
        description:
          'Fighting back against the Ravage motivates and inspires you.\n<p>After cleansing or blessing a Totem, <i>Overzealous</i> activates:\n</p><ul><li><b>Increases</b> your Repair speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">8</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">9</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>%</b> if it was a <b>Dull Totem</b>.</li>\n<li><b>Increases</b> your Repair speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">16</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">18</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">20</span></b> <b>%</b> if it was a <b>Hex Totem</b>.</li></ul>\n<i>Overzealous</i> deactivates when losing a Health State by any means.\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"The Ravage senses us. We need to work fast." \u2014 Haddie Kaur, Ravages of the Abyss Episode 9</span></i></p>',
        imgUrl: "Overzealous.png",
        sourceSurvivor: "Haddie Kaur",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/97/S31_charSelect_portrait.png/revision/latest?cb=20230705194521",
        modifiers: null,
      },
      {
        name: "Parental Guidance",
        description:
          'You have inherited the ability to hear the dead \u2014 and now the dead warn you of danger.\n<ul><li>After stunning the Killer by any means, <i>Parental Guidance</i> suppresses your Scratch Marks, Pools of Blood, and <i>Grunts of Pain</i> for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">5</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">6</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">7</span></b> <b>seconds</b>.</li></ul>\n',
        imgUrl: "ParentalGuidance.png",
        sourceSurvivor: "Yoichi Asakawa",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/07/S30_charSelect_portrait.png/revision/latest?cb=20230725192537",
        modifiers: null,
      },
      {
        name: "Pharmacy",
        description:
          'You have a knack for finding medicine.\n<p>Whenever you are in the Injured State, <i>Pharmacy</i> activates:\n</p><ul><li><b>Increases</b> the Unlocking speed of Chests by <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">60</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">80</span></b> <b>%</b>.</li>\n<li><b>Reduces</b> the Hearing range of noises related to Unlocking by <b><span class="luaClr clr clr2" style="color: #e8c252;">-8 metres</span></b>.</li>\n<li><b>Guarantees</b> an Emergency Med-Kit when unlocking a Chest.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Adrenaline, it is going to keep us awake. I stole it from one of the Nurse\'s carts." \u2014 Quentin Smith</span></i></p>',
        imgUrl: "Pharmacy.png",
        sourceSurvivor: "Quentin Smith",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b2/S11_charSelect_portrait.png/revision/latest?cb=20230725192602",
        modifiers: null,
      },
      {
        name: "Plot Twist",
        description:
          'Big moments are vital, but you know that sometimes an understated read can be just as powerful.\n<p>Whenever you are in the Injured State, <i>Plot Twist</i> activates:\n</p><ul><li>While crouching and motionless, press the <i>Active Ability button</i> to silently enter the Dying State with the following benefits:\n<ul><li><b>Suppresses</b> <i>Grunts of Pain</i>.</li>\n<li><b>Suppresses</b> Pools of Blood.</li>\n<li><b>Grants</b> the ability to fully recover from the Dying State.</li></ul></li>\n<li>After full recovery using <i>Plot Twist</i>, you are healed instantly and gain a <b><span class="luaClr clr clr2" style="color: #e8c252;">+50\u00a0%</span></b> <i><b>Haste</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">2</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">3</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">4</span></b> <b>seconds</b>.</li></ul>\n<p><i>Plot Twist</i> deactivates after recovering yourself by any means.\n</p><p><i>Plot Twist</i> reactivates once more when the Exit Gates become powered.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I think you\'ll find this shooting location... captivating." \u2014 Pauline Stamper</span></i></p>',
        imgUrl: "PlotTwist.png",
        sourceSurvivor: "Nicolas Cage",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/16/S38_charSelect_portrait.png/revision/latest?cb=20230705182818",
        modifiers: null,
      },
      {
        name: "Plunderer's Instinct",
        description:
          'Unlocks potential in your Aura-reading ability:\n<ul><li>The Auras of closed Chests and dropped Items in the environment within <b><span class="luaClr clr clr2" style="color: #e8c252;">16</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">24</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">32</span></b> <b>metres</b> of your location are revealed to you.</li>\n<li>Grants a <b><span class="luaClr clr clr2" style="color: #e8c252;">considerably</span></b> better chance at finding an Item of a higher Rarity from Chests.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"The pioneers used to loot these babies for hours." \u2014 Aizeyu, The Lost Tapes</span></i></p>',
        imgUrl: "Plunderer'sInstinct.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Poised",
        description:
          'Achieving goals boosts your confidence.<br/>\n<p>After a Generator is completed, you will not leave any Scratch Marks for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">8</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b>.<br/>\n</p>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"Ok, stay calm. Don\'t overthink it and just keep moving forward: you got this." \u2014 Jane Romero</span></i>',
        imgUrl: "Poised.png",
        sourceSurvivor: "Jane Romero",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d7/S16_charSelect_portrait.png/revision/latest?cb=20230725192359",
        modifiers: null,
      },
      {
        name: "Potential Energy",
        description:
          'Your arcane abilities have adapted to The Entity\'s Realm after centuries of wandering, granting you unprecedented control over its many devices.\n<p>After repairing Generators for a total of <b><span class="luaClr clr clr2" style="color: #e8c252;">12</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">10</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">8</span></b> <b>uninterrupted seconds</b>, press the <i>Active Ability button</i> to activate <i>Potential Energy</i>:\n</p><ul><li>Continuing to repair the Generator will charge <i>Potential Energy</i> instead of progressing the Generator.</li>\n<li><b>Converts</b> <b><span class="luaClr clr clr6" style="color: #ff8800;">1.5\u00a0%</span></b> of Repair progression into <b><span class="luaClr clr clr8" style="color: #d41c1c;">1 Token</span></b>, up to a maximum of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">20 Tokens</span></b>.</li>\n<li>Missing Skill Checks results in losing some Tokens.</li></ul>\n<p>While <i>Potential Energy</i> has at least <b><span class="luaClr clr clr3" style="color: #199b1e;">1 Token</span></b>, press the <i>Active Ability button</i> while repairing a Generator to instantly progress it by <b><span class="luaClr clr clr10" style="color: #0e98ff;">1\u00a0% per Token</span></b>, consuming all remaining Tokens and deactivating <i>Potential Energy</i>.\n</p><p><i>Potential Energy</i> loses all Tokens and deactivates upon losing a Health State.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"When you look a layer deeper, you realise... everything is connected." \u2014 Vittorio Toscano</span></i></p>',
        imgUrl: "PotentialEnergy.png",
        sourceSurvivor: "Vittorio Toscano",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/64/S34_charSelect_portrait.png/revision/latest?cb=20230705194225",
        modifiers: null,
      },
      {
        name: "Power Struggle",
        description:
          'You have never given up and you are not about to start now.\n<p class="mw-empty-elt">\n</p><ul><li>Reveals the Auras of available Pallets whenever you are in the Dying State.</li></ul>\n<p>While being carried by The Killer, reaching <b><span class="luaClr clr clr2" style="color: #e8c252;">25</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">20</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">15</span></b> <b>%</b> Wiggling progression activates <i>Power Struggle</i>:\n</p><ul><li>You can drop a nearby, standing Pallet to stun the Killer and escape their grasp.</li></ul>\n<p><i>Power Struggle</i> deactivates after triggering successfully.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I relied on others to protect me once and I lost everything. Never again." \u2014 \u00c9lodie Rakoto</span></i></p>',
        imgUrl: "PowerStruggle.png",
        sourceSurvivor: "\u00c9lodie Rakoto",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/45/S24_charSelect_portrait.png/revision/latest?cb=20230705193628",
        modifiers: null,
      },
      {
        name: "Premonition",
        description:
          'You have the undeniable capability to sense danger.\n<ul><li>Receive an auditory warning upon looking in the Killer\'s direction within a <b><span class="luaClr clr clr2" style="color: #e8c252;">45 \u00b0</span></b> cone within <b><span class="luaClr clr clr6" style="color: #ff8800;">36 metres</span></b>.</li></ul>\n<p><i>Premonition</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">45</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>seconds</b> each time it activates.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I have a bad feeling about this!"</span></i></p>',
        imgUrl: "Premonition.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Prove Thyself",
        description:
          '<b>Increases</b> your Repair speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">8</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>%</b> for each Survivor within <b><span class="luaClr clr clr2" style="color: #e8c252;">4 metres</span></b> of your location other than yourself, up to a maximum of <b><span class="luaClr clr clr2" style="color: #e8c252;">18</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">24</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>%</b>.\n<ul><li>This effect is also extended to all other Survivors within that range.</li></ul>\n<p>Survivors can only be affected by one instance of <i>Prove Thyself</i> at a time.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Show me what you can do!" \u2014 Dwight Fairfield</span></i></p>',
        imgUrl: "ProveThyself.png",
        sourceSurvivor: "Dwight Fairfield",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8c/S01_charSelect_portrait.png/revision/latest?cb=20230705190630",
        modifiers: null,
      },
      {
        name: "Quick & Quiet",
        description:
          'You do not make as much noise as others when quickly vaulting over obstacles or hiding in Lockers.\n<ul><li><b>Suppresses</b> both the <i>Loud Noise Notification</i> and the sound effects triggered by rushing to vault Windows, Pallets, or rushing to enter or exit Lockers.</li></ul>\n<p><i>Quick &amp; Quiet</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">30</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">25</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">20</span></b> <b>seconds</b>.</p>',
        imgUrl: "Quick&Quiet.png",
        sourceSurvivor: "Meg Thomas",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/77/S02_charSelect_portrait.png/revision/latest?cb=20230705190636",
        modifiers: null,
      },
      {
        name: "Quick Gambit",
        description:
          'When you have the Killer\'s attention, you know how to keep it; others can be confident they will not be interrupted any time soon.\n<ul><li><b>Increases</b> the Repair speed of any other Survivor by <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">7</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">8</span></b> <b>%</b>, while you are being chased within <b><span class="luaClr clr clr2" style="color: #e8c252;">24 metres</span></b> of the Generator they are currently repairing.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"We need not resort to violence. And I shall prove it." \u2014 Vittorio Toscano</span></i></p>',
        imgUrl: "QuickGambit.png",
        sourceSurvivor: "Vittorio Toscano",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/64/S34_charSelect_portrait.png/revision/latest?cb=20230705194225",
        modifiers: null,
      },
      {
        name: "Reactive Healing",
        description:
          'The more the situation becomes compromised, the more determined you become to complete the operation.\n<p>When another Survivor loses a Health State within <b><span class="luaClr clr clr2" style="color: #e8c252;">32 metres</span></b> of your location while you are in the Injured State, you benefit from the following effect:\n</p><ul><li>Grants <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">45</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">50</span></b> <b>%</b> of your missing Healing Progression to your Health Bar.</li></ul>',
        imgUrl: "ReactiveHealing.png",
        sourceSurvivor: "Ada Wong",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/S32_charSelect_portrait.png/revision/latest?cb=20230725192508",
        modifiers: null,
      },
      {
        name: "Reassurance",
        description:
          'Your presence helps allies focus, assuaging the panic associated with extreme conditions.\n<ul><li>When within <b><span class="luaClr clr clr2" style="color: #e8c252;">6 metres</span></b> of a hooked Survivor, press the <i>Active Ability button</i> to halt their <i>Sacrifice Process</i> for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">20</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">25</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>seconds</b>.\n<ul><li>If the hooked Survivor has already entered the <i>Struggle Phase</i>, its Skill Checks are paused for that duration.</li></ul></li></ul>\n<i>Reassurance</i> can only be used once per Survivor per Hook Instance.',
        imgUrl: "Reassurance.png",
        sourceSurvivor: "Rebecca Chambers",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/93/S33_charSelect_portrait.png/revision/latest?cb=20230705184830",
        modifiers: null,
      },
      {
        name: "Red Herring",
        description:
          'You have noticed that people pay attention to whatever makes the loudest noise.<br/>\n<p>After repairing a Generator for at least <b><span class="luaClr clr clr2" style="color: #e8c252;">3 seconds</span></b>, its Aura is highlighted to you in <b><span class="luaClr clr clr2" style="color: #e8c252;">yellow</span></b>.\n</p>\n<ul><li>The Generator stays highlighted until it is either fully repaired, you start repairing another Generator, or enter a Locker.</li>\n<li>Entering a Locker will trigger a <i>Loud Noise Notification</i> for the Killer at the highlighted Generator\'s location.</li></ul>\n<p><i>Red Herring</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.<br/>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"The news edit out what is burdensome and complex. which is the truth." \u2014 Zarina Kassir</span></i></p>',
        imgUrl: "RedHerring.png",
        sourceSurvivor: "Zarina Kassir",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3d/S21_charSelect_portrait.png/revision/latest?cb=20230726125017",
        modifiers: null,
      },
      {
        name: "Renewal",
        description:
          'When you heal another Survivor for the equivalent of <b><span class="luaClr clr clr2" style="color: #e8c252;">1</span></b> Health State, <i>Renewal</i> activates:\n<ul><li>The next time you are unhooked or unhook yourself, you suffer from the <i><b>Broken</b></i> <b>Status Effect</b> until <i>Renewal</i> deactivates.</li>\n<li>You are automatically healed <b><span class="luaClr clr clr6" style="color: #ff8800;">1 Health State</span></b> after <b><span class="luaClr clr clr2" style="color: #e8c252;">28</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">24</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">20</span></b> <b>seconds</b>.</li></ul>\n<p>While <i>Renewal</i> is active, the following conditions will deactivate it:\n</p>\n<ul><li>Successfully being healed by <i>Renewal</i>.</li>\n<li>Being put into the Dying State before the timer elapses.</li></ul>\n<i>Renewal</i> does not activate if you already suffer from the <i><b>Broken</b></i> <b>Status Effect</b>.',
        imgUrl: "Renewal.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Repressed Alliance",
        description:
          'You are accustomed to being hunted by malicious forces, and you have begun using it to your advantage.\n<p>After repairing Generators for a total of <b><span class="luaClr clr clr2" style="color: #e8c252;">55</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">45</span></b> <b>seconds</b>, <i>Repressed Alliance</i> activates:\n</p><ul><li>Press the <i>Active Ability button</i> to call upon The Entity to block the Generator you are currently repairing for <b><span class="luaClr clr clr2" style="color: #e8c252;">30 seconds</span></b>, after which <i>Repressed Alliance</i> deactivates.</li>\n<li>The Aura of the blocked Generator is revealed to all Survivors in <b><span class="luaClr clr clr16" style="color: #ffffff;">white</span></b>.</li></ul>\n<p><i>Repressed Alliance</i> can only be triggered when no other Survivors are repairing your Generator.</p>',
        imgUrl: "RepressedAlliance.png",
        sourceSurvivor: "Cheryl Mason",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/38/S22_charSelect_portrait.png/revision/latest?cb=20230705193841",
        modifiers: null,
      },
      {
        name: "Residual Manifest",
        description:
          'A lifetime of chasing the darkness has taught you that the best disinfectant is light.\n<ul><li>After a successful <i>Killer Blind</i>, the Killer suffers from the <i><b>Blindness</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">20</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">25</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>seconds</b>.</li>\n<li><i>Residual Manifest</i> grants the ability to rummage through an opened Chest once per Trial and will guarantee a basic Flashlight.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"I\'ll never see what Haddie sees. But so long as I\'m with her, I know I\'m safe." \u2014 Jordan Rois, Ravages of the Abyss Episode 5</span></i>',
        imgUrl: "ResidualManifest.png",
        sourceSurvivor: "Haddie Kaur",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/97/S31_charSelect_portrait.png/revision/latest?cb=20230705194521",
        modifiers: null,
      },
      {
        name: "Resilience",
        description:
          'You are motivated in dire situations.\n<ul><li><b>Increases</b> your Action speeds in Repairing, Healing, Sabotaging, Unhooking, Vaulting, Cleansing, Blessing, Opening, and Unlocking by <b><span class="luaClr clr clr2" style="color: #e8c252;">3</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">6</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">9</span></b> <b>%</b> when in the Injured State.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Focus, even in these desperate times."</span></i></p>',
        imgUrl: "Resilience.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Resurgence",
        description:
          'You have come back from near impossible odds... and you will do it again.<br/>\n<p>After being unhooked or unhooking yourself, instantly gain <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">45</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">50</span></b> <b>%</b> to your Healing progress.<br/>\n</p>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"It\'s my turn, bitch!" \u2014 Jill Valentine</span></i>',
        imgUrl: "Resurgence.png",
        sourceSurvivor: "Jill Valentine",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/99/S26_charSelect_portrait.png/revision/latest?cb=20230705184445",
        modifiers: null,
      },
      {
        name: "Rookie Spirit",
        description:
          'You keep a careful eye on objectives when they are slipping away.\n<p>While repairing Generators, succeed <b><span class="luaClr clr clr2" style="color: #e8c252;">5</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">4</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">3</span></b>  Good or Great Skill Checks to activate <i>Rookie Spirit</i> for the remainder of the Trial:\n</p><ul><li>Once active, the Auras of any regressing Generators are revealed to you.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"I\'ll stop this, lieutenant. I promise." \u2014 Leon Scott Kennedy</span></i>',
        imgUrl: "RookieSpirit.png",
        sourceSurvivor: "Leon Scott Kennedy",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5d/S27_charSelect_portrait.png/revision/latest?cb=20230705184450",
        modifiers: null,
      },
      {
        name: "Saboteur",
        description:
          'Unlocks potential in your Aura-reading ability:\n<p>For the duration of the Killer carrying another Survivor, you see the Aura of every Hook within <b><span class="luaClr clr clr2" style="color: #e8c252;">56 metres</span></b> of the carried Survivor\'s pick-up location:\n</p><ul><li>The Auras of regular Hooks are revealed to you in <b><span class="luaClr clr clr16" style="color: #ffffff;">white</span></b>.</li>\n<li>The Auras of <b>Scourge Hooks</b> are revealed to you in <b><span class="luaClr clr clr2" style="color: #e8c252;">yellow</span></b>.</li></ul>\n<p>Unlocks the ability to sabotage Hooks without needing a Toolbox:\n</p><ul><li>Sabotaging a Hook without a Toolbox takes <b><span class="luaClr clr clr6" style="color: #ff8800;">2.3 seconds</span></b>.</li>\n<li>That Sabotage action has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">70</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">65</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">60</span></b> <b>seconds</b>.</li></ul>\n',
        imgUrl: "Saboteur.png",
        sourceSurvivor: "Jake Park",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cb/S04_charSelect_portrait.png/revision/latest?cb=20230725191755",
        modifiers: null,
      },
      {
        name: "Scavenger",
        description:
          'Where others see junk, you see valuable improvised tools.\n<p>While holding a depleted <i>Toolbox</i>, <i>Scavenger</i> activates:\n</p><ul><li>Succeeding at <i>Great Repairing Skill Checks</i> grants <b><span class="luaClr clr clr2" style="color: #e8c252;">1 Token</span></b>, up to a maximum of <b><span class="luaClr clr clr6" style="color: #ff8800;">5 Tokens</span></b>.</li>\n<li>Reaching the maximum number of Tokens automatically consumes them and fully recharges the <i>Toolbox</i>.</li>\n<li>Recharging a <i>Toolbox</i> will reduce your Repair speed by <b><span class="luaClr clr clr8" style="color: #d41c1c;">-50\u00a0%</span></b> for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">35</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>seconds</b>.</li></ul>\n<p><i>Scavenger</i> grants the ability to rummage through an opened Chest once per Trial and will guarantee a basic Toolbox.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"It\'s amazing what people will throw away around here." \u2014 Gabriel Soma</span></i></p>',
        imgUrl: "Scavenger.png",
        sourceSurvivor: "Gabriel Soma",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b3/S37_charSelect_portrait.png/revision/latest?cb=20230705194559",
        modifiers: null,
      },
      {
        name: "Scene Partner",
        description:
          'You lock in with your co-star, engaging with and reacting to each other on a higher level.\n<p>Whenever you are inside the Terror Radius, <i>Scene Partner</i> activates:\n</p><ul><li>Looking at the Killer causes you to scream, which reveals their Aura for <b><span class="luaClr clr clr2" style="color: #e8c252;">3</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">4</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">5</span></b> <b>seconds</b>.</li>\n<li>There is a chance of <b><span class="luaClr clr clr2" style="color: #e8c252;">50\u00a0%</span></b> that you will scream again, extending the Aura-reveal duration by another <b><span class="luaClr clr clr6" style="color: #ff8800;">2 seconds</span></b>.</li></ul>\n<p><i>Scene Partner</i> has a cool-down of <b><span class="luaClr clr clr8" style="color: #d41c1c;">60 seconds</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"This is not in the script!" \u2014 Nicolas Cage</span></i></p>',
        imgUrl: "ScenePartner.png",
        sourceSurvivor: "Nicolas Cage",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/16/S38_charSelect_portrait.png/revision/latest?cb=20230705182818",
        modifiers: null,
      },
      {
        name: "Self-Aware",
        description:
          'You know your weaknesses and refuse to hide from them.\n<ul><li><b>Increases</b> your Walking speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">10</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">15</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">20</span></b> <b>%</b>.</li>\n<li>Unlocks the ability to see your own Scratch Marks.</li></ul>\n',
        imgUrl: "Self-Aware.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Self-Care",
        description:
          '\n<ul><li>Unlocks the <i>Self-Care</i> ability, allowing you to self-heal without needing a Med-Kit at <b><span class="luaClr clr clr2" style="color: #e8c252;">25</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">30</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">35</span></b> <b>%</b> of the normal Healing speed.</li></ul>\n',
        imgUrl: "Self-Care.png",
        sourceSurvivor: "Claudette Morel",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/65/S03_charSelect_portrait.png/revision/latest?cb=20230725191927",
        modifiers: null,
      },
      {
        name: "Self-Preservation",
        description:
          'Life is unforgiving.<br/>\n<p>The more confirmation you get of that, the more prepared you become.<br/>\nWhenever another Survivor is hit with a <i>Basic Attack</i> or <i>Special Attack</i> within <b><span class="luaClr clr clr2" style="color: #e8c252;">16 metres</span></b> of you, <i>Self-Preservation</i> activates:\n</p>\n<ul><li>Scratch Marks, <i>Grunts of Pain</i> when injured, and Bleeding are suppressed for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">8</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Something I learnt in the industry: when the axe is swinging, keep your head down." \u2014 Yun-Jin Lee</span></i></p>',
        imgUrl: "Self-Preservation.png",
        sourceSurvivor: "Yun-Jin Lee",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/79/S25_charSelect_portrait.png/revision/latest?cb=20230705194144",
        modifiers: null,
      },
      {
        name: "Situational Awareness",
        description:
          'You are aware of your surroundings and share the information with others.\n<ul><li>While repairing a Generator, its Aura is revealed in <b><span class="luaClr clr clr2" style="color: #e8c252;">yellow</span></b> to all other Survivors located within <b><span class="luaClr clr clr2" style="color: #e8c252;">32 metres</span></b>.</li>\n<li>If the Killer downs a Survivor while you are repairing a Generator, you see the Auras of all other Survivors for <b><span class="luaClr clr clr2" style="color: #e8c252;">8</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">9</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b>.</li></ul>\n',
        imgUrl: "SituationalAwareness.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Slippery Meat",
        description:
          'You have developed an efficient way to get off Hooks.\n<ul><li>Grants <b><span class="luaClr clr clr2" style="color: #e8c252;">3</span></b> additional Self-Unhook attempts.</li>\n<li><b>Increases</b> the Self-Unhook chance by <b><span class="luaClr clr clr2" style="color: #e8c252;">2</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">3</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">4</span></b> <b>%</b>.</li></ul>\n',
        imgUrl: "SlipperyMeat.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Small Game",
        description:
          'You have the undeniable capability to sense danger.\n<ul><li>Receive an auditory warning upon looking in the direction of Totems in a <b><span class="luaClr clr clr2" style="color: #e8c252;">45 \u00b0</span></b> cone within <b><span class="luaClr clr clr2" style="color: #e8c252;">8</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">10</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">12</span></b> <b>metres</b>.</li></ul>\n<p><i>Small Game</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">14</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">12</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b> each time it activates.\n</p><p>For each Dull or Hex Totem cleansed by any Player, <i>Small Game</i> gains <b><span class="luaClr clr clr6" style="color: #ff8800;">1 Token</span></b>:\n</p><ul><li>Each Token decreases the Detection cone\'s angle by <b><span class="luaClr clr clr8" style="color: #d41c1c;">5 \u00b0</span></b>, down to a minimum of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">20 \u00b0</span></b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Nope." \u2014 Andy, The Lost Tapes</span></i></p>',
        imgUrl: "SmallGame.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Smash Hit",
        description:
          'When your rival makes a mistake, you seize the opportunity.\n<p>After stunning the Killer with a Pallet, break into a sprint at <b><span class="luaClr clr clr2" style="color: #e8c252;">150\u00a0%</span></b> of your normal Running Movement speed for <b><span class="luaClr clr clr6" style="color: #ff8800;">4 seconds</span></b>.\n</p><p><i>Smash Hit</i> causes the <i><b>Exhausted</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">30</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">25</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">20</span></b> <b>seconds</b>.\n</p><p><i>Smash Hit</i> cannot be used when <i><b>Exhausted</b></i>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I have dealt with psychopaths in suits. You\'re just uglier and worse dressed." \u2014 Yun-Jin Lee</span></i></p>',
        imgUrl: "SmashHit.png",
        sourceSurvivor: "Yun-Jin Lee",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/79/S25_charSelect_portrait.png/revision/latest?cb=20230705194144",
        modifiers: null,
      },
      {
        name: "Sole Survivor",
        description:
          'As more of your friends fall to the Killer, you become shrouded in isolation and the Killer\'s Aura-reading abilities towards you are disrupted.\n<p>Each time a Survivor other than yourself is killed or sacrificed, <i>Sole Survivor</i> gains <b><span class="luaClr clr clr2" style="color: #e8c252;">1 Token</span></b>, up to a maximum of <b><span class="luaClr clr clr6" style="color: #ff8800;">3 Tokens</span></b>:\n</p><ul><li>Grants a stack-able radius of <b><span class="luaClr clr clr2" style="color: #e8c252;">20</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">22</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">24</span></b> <b>metres</b> per Token around you, up to a maximum of <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">66</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">72</span></b> <b>metres</b>, within which you are immune to the Killer\'s Aura-reading abilities.</li></ul>\n\nWhen you are the Last Survivor Standing, you benefit from the following effects:\n<ul><li><b>Increases</b> your Repair speed by <b><span class="luaClr clr clr8" style="color: #d41c1c;">+75\u00a0%</span></b>.</li>\n<li><b>Increases</b> your Gate and Hatch Opening speeds by <b><span class="luaClr clr clr4" style="color: #ac3ee3;">+50\u00a0%</span></b>.</li></ul>\n\nIncreases the Odds of becoming the initial <i><b>Obsession</b></i> of the Killer by <b>+100\u00a0%</b>.\n<p><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i>\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"It was the boogeyman." \u2014 Laurie Strode</span></i></p>',
        imgUrl: "SoleSurvivor.png",
        sourceSurvivor: "Laurie Strode",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cc/S06_charSelect_portrait.png/revision/latest?cb=20230705185657",
        modifiers: null,
      },
      {
        name: "Solidarity",
        description:
          'Sharing painful experiences has the power to heal.\n<p>While injured and healing another Survivor without using a Med-Kit, you benefit from the following effect:\n</p><ul><li>Passively heal yourself at a rate of <b><span class="luaClr clr clr2" style="color: #e8c252;">40</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">45</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">50</span></b> <b>%</b> of your Altruistic Healing speed.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Showing up when things get rough, listening to people\'s problems, and supporting those in need; that\'s how you become stronger, that\'s how you grow." \u2014 Jane Romero</span></i></p>',
        imgUrl: "Solidarity.png",
        sourceSurvivor: "Jane Romero",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d7/S16_charSelect_portrait.png/revision/latest?cb=20230725192359",
        modifiers: null,
      },
      {
        name: "Soul Guard",
        description:
          'You have been through immense hardship and you\'re stronger for it.<br/>\n<p>After being healed from or having recovered from the Dying State, <i>Soul Guard</i> grants you the <i><b>Endurance</b></i> <b>Status Effect</b> for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">4</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">6</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">8</span></b> <b>seconds</b>.\n</p>\n<ul><li>Any damage taken that would put you into the Dying State will instead trigger the <i><b>Deep Wound</b></i> <b>Status Effect</b>, after which you have <b><span class="luaClr clr clr2" style="color: #e8c252;">20 seconds</span></b> to Mend yourself.</li>\n<li>Taking any damage while under the effect of <i><b>Deep Wound</b></i> or if its timer runs out will put you into the Dying State.</li></ul>\n<p><i>Soul Guard</i> allows you to completely recover from the Dying State when you are affected by the <i><b>Cursed</b></i> <b>Status Effect</b>.<br/>\n<i>Soul Guard</i> has a cool-down of <b><span class="luaClr clr clr6" style="color: #ff8800;">30 seconds</span></b>.</p>',
        imgUrl: "SoulGuard.png",
        sourceSurvivor: "Cheryl Mason",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/38/S22_charSelect_portrait.png/revision/latest?cb=20230705193841",
        modifiers: null,
      },
      {
        name: "Spine Chill",
        description:
          'An unnatural tingle warns you of impending doom.\n<p>Whenever the Killer is within <b><span class="luaClr clr clr2" style="color: #e8c252;">36 metres</span></b> of your location and looking at you with a clear line of sight, <i>Spine Chill</i> activates:\n</p><ul><li><b>Increases</b> your Action speeds in Repairing, Healing, Sabotaging, Unhooking, Cleansing, Blessing, Opening, and Unlocking by <b><span class="luaClr clr clr2" style="color: #e8c252;">2</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">4</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">6</span></b> <b>%</b>.\n<ul><li>This effect lingers for <b><span class="luaClr clr clr6" style="color: #ff8800;">0.5 seconds</span></b> after the Killer loses line of sight or exits the range.</li></ul></li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"There is a voice that doesn\'t use words. Listen.." \u2014 Sassy, The Lost Tapes</span></i>',
        imgUrl: "SpineChill.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Sprint Burst",
        description:
          '\n<ul><li>When starting to run, break into a sprint at <b><span class="luaClr clr clr2" style="color: #e8c252;">150\u00a0%</span></b> of your normal Running Movement speed for <b><span class="luaClr clr clr6" style="color: #ff8800;">3 seconds</span></b>.</li></ul>\n<p><i>Sprint Burst</i> causes the <i><b>Exhausted</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">60</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">50</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">40</span></b> <b>seconds</b>.<br/>\n<i>Sprint Burst</i> cannot be used when <i><b>Exhausted</b></i>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"See you if you can catch up..." \u2014 Meg Thomas</span></i></p>',
        imgUrl: "SprintBurst.png",
        sourceSurvivor: "Meg Thomas",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/77/S02_charSelect_portrait.png/revision/latest?cb=20230705190636",
        modifiers: null,
      },
      {
        name: "Stake Out",
        description:
          'Getting close to the Killer fills you with determination.<br/>\n<p>Every <b><span class="luaClr clr clr2" style="color: #e8c252;">15 seconds</span></b> you are within the Killer\'s Terror Radius, while not being chased, <i>Stake Out</i> gains <b><span class="luaClr clr clr6" style="color: #ff8800;">1 Token</span></b>, up to a maximum of <b><span class="luaClr clr clr2" style="color: #e8c252;">2</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">3</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">4</span></b> <b>Tokens</b>.\n</p>\n<ul><li>When <i>Stake Out</i> has at least <b><span class="luaClr clr clr8" style="color: #d41c1c;">1 Token</span></b>, Good Skill Checks consume <b><span class="luaClr clr clr4" style="color: #ac3ee3;">1 Token</span></b> and are considered Great Skill Checks, granting an additional Progression bonus of <b><span class="luaClr clr clr3" style="color: #199b1e;">+1\u00a0%</span></b>.</li>\n<li>Great Skill Checks do not consume any Tokens.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I had you, I had you on your knees. You\'re runnin\' scared because we had you. We\'re gonna close this case!" \u2014 Detective David Tapp</span></i></p>',
        imgUrl: "StakeOut.png",
        sourceSurvivor: "Detective David Tapp",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/15/S12_charSelect_portrait.png/revision/latest?cb=20230705191928",
        modifiers: null,
      },
      {
        name: "Streetwise",
        description:
          'Long nights out taught you to do a lot with what you have got.\n<ul><li><b>Increases</b> the Efficiency of your Items by <b><span class="luaClr clr clr2" style="color: #e8c252;">15</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">20</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">25</span></b> <b>%</b>.</li></ul>\n<p><i>Streetwise</i> extends its effect to all other Survivors within <b><span class="luaClr clr clr2" style="color: #e8c252;">8 metres</span></b> of your location and lingers for <b><span class="luaClr clr clr6" style="color: #ff8800;">15 seconds</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"You are doing it wrong! Let me show you how it is done." \u2014 Nea Karlsson</span></i></p>',
        imgUrl: "Streetwise.png",
        sourceSurvivor: "Nea Karlsson",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/14/S05_charSelect_portrait.png/revision/latest?cb=20230705185446",
        modifiers: null,
      },
      {
        name: "Teamwork: Collective Stealth",
        description:
          'When someone helps you out, you respond in kind.\n<p>Whenever another Survivor finishes healing you, <i>Teamwork: Collective Stealth</i> activates, and both you and the Survivor who healed you benefit from the following effect:\n</p><ul><li><b>Suppresses</b> your Scratch Marks for as long as you stay within <b><span class="luaClr clr clr2" style="color: #e8c252;">12 metres</span></b> of one another or one of you loses a Health State.</li></ul>\n<p><i>Teamwork: Collective Stealth</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">180</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">160</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">140</span></b> <b>seconds</b>.\n</p><p>Survivors can only be affected by one instance of <i>Teamwork: Collective Stealth</i> at a time.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I\'m good, I\'m good... but keep it down." \u2014 Renato Lyra</span></i></p>',
        imgUrl: "TeamworkCollectiveStealth.png",
        sourceSurvivor: "Renato Lyra",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/59/S36_charSelect_portrait.png/revision/latest?cb=20230705193833",
        modifiers: null,
      },
      {
        name: "Teamwork: Power of Two",
        description:
          'It is hard to keep up with you, but it does not stop people from trying.\n<p>Whenever you finish healing another Survivor, <i>Teamwork: Power of Two</i> activates, and both you and the healed Survivor benefit from the following effect:\n</p><ul><li>Grants a <b><span class="luaClr clr clr2" style="color: #e8c252;">5\u00a0%</span></b> <i><b>Haste</b></i> <b>Status Effect</b> for as long as you stay within <b><span class="luaClr clr clr6" style="color: #ff8800;">12 metres</span></b> of one another or one of you loses a Health State.</li></ul>\n<p><i>Teamwork: Power of Two</i> has a cool-down of <b><span class="luaClr clr clr2" style="color: #e8c252;">180</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">160</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">140</span></b> <b>seconds</b>.\n</p><p>Survivors can only be affected by one instance of <i>Teamwork: Power of Two</i> at a time.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"You good? Then keep up!" \u2014 Thalita Lyra</span></i></p>',
        imgUrl: "TeamworkPowerofTwo.png",
        sourceSurvivor: "Thalita Lyra",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/20/S35_charSelect_portrait.png/revision/latest?cb=20230705194105",
        modifiers: null,
      },
      {
        name: "Technician",
        description:
          'You are apt at handling machinery with the greatest care and precision.\n<p>When repairing a Generator, the following effects apply:\n</p><ul><li><b>Reduces</b> the audible range of your Repair noises by <b><span class="luaClr clr clr2" style="color: #e8c252;">-8 metres</span></b>.</li>\n<li><b>Suppresses</b> the explosion and accompanying <i>Loud Noise Notification</i> when failing a Skill Check.</li>\n<li>Failing a Skill Check <b>instantly regresses</b> the Generator by <b><span class="luaClr clr clr2" style="color: #e8c252;">5</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">4</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">3</span></b> <b>%</b> of its maximum possible Progression in addition to the default Progression penalty.</li></ul>\n<i><span class="luaClr clr clr9" style="color: #e7cda2;">"I am gonna stealth this one." \u2014 Feng Min</span></i>',
        imgUrl: "Technician.png",
        sourceSurvivor: "Feng Min",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ac/S09_charSelect_portrait.png/revision/latest?cb=20230725191813",
        modifiers: null,
      },
      {
        name: "Tenacity",
        description:
          'There is nothing stopping you.\n<p>Your ferocious tenacity in dire situations allow you to benefit from the following effects:\n</p><ul><li><b>Increases</b> your Crawling speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">30</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">40</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">50</span></b> <b>%</b>.</li>\n<li>Grants the ability to crawl and recover at the same time.</li>\n<li><b>Reduces</b> the volume of <i>Grunts of Pain</i> while in the Dying State by <b><span class="luaClr clr clr2" style="color: #e8c252;">-75\u00a0%</span></b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"What the hell is this? I\'m taking this bastard down!" \u2014 Detective David Tapp</span></i></p>',
        imgUrl: "Tenacity.png",
        sourceSurvivor: "Detective David Tapp",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/15/S12_charSelect_portrait.png/revision/latest?cb=20230705191928",
        modifiers: null,
      },
      {
        name: "This Is Not Happening",
        description:
          'You perform at your best when you are under extreme stress.\n<ul><li><b>Increases</b> the Success zone of Great Skill Checks while Repairing and Healing by <b><span class="luaClr clr clr2" style="color: #e8c252;">10</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">20</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>%</b> when in the Injured State.</li></ul>',
        imgUrl: "ThisIsNotHappening.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "Troubleshooter",
        description:
          'No amount of distraction will shake you from your primary task.\n<p>When you are chased by the Killer, <i>Troubleshooter</i> activates:\n</p><ul><li>The Aura of the Generator with the most progress is revealed to you.</li>\n<li>The Aura of the Killer is revealed to you for <b><span class="luaClr clr clr2" style="color: #e8c252;">4</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">5</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">6</span></b> <b>seconds</b> after dropping a Pallet.</li></ul>\n<p>These effects linger for <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">8</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b> after ending the Chase, after which <i>Troubleshooter</i> deactivates.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Nothing gets done around here if I don\'t do it." \u2014 Gabriel Soma</span></i></p>',
        imgUrl: "Troubleshooter.png",
        sourceSurvivor: "Gabriel Soma",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b3/S37_charSelect_portrait.png/revision/latest?cb=20230705194559",
        modifiers: null,
      },
      {
        name: "Unbreakable",
        description:
          'Past battles have taught you a thing or two about survival.<br/>\n<p>Once per Trial, you can completely recover from the Dying State.\n</p>\n<ul><li>Your Recovery speed is increased by <b><span class="luaClr clr clr2" style="color: #e8c252;">25</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">30</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">35</span></b> <b>%</b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Goddammit, I am seriously FUBAR!" \u2014 Bill Overbeck</span></i></p>',
        imgUrl: "Unbreakable.png",
        sourceSurvivor: 'William "Bill" Overbeck',
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/66/S08_charSelect_portrait.png/revision/latest?cb=20230705190755",
        modifiers: null,
      },
      {
        name: "Up the Ante",
        description:
          'All will be well in the end; you just know it.<br/>\n<p>Your confidence strengthens the feeling of hope for those around you.<br/>\nFor Each Survivor still in the Trial, <i>Up the Ante</i> gains <b><span class="luaClr clr clr2" style="color: #e8c252;">1 Token</span></b>.\n</p>\n<ul><li>Each Token applies a stack-able <b><span class="luaClr clr clr2" style="color: #e8c252;">1</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">2</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">3</span></b> <b>%</b> bonus to the Luck of all Survivors, up to a maximum of <b><span class="luaClr clr clr2" style="color: #e8c252;">3</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">6</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">9</span></b> <b>%</b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"What can I say? I\'m just a very lucky guy... I\'m sure some of it will rub off on you." \u2014 Ace Visconti</span></i></p>',
        imgUrl: "UptheAnte.png",
        sourceSurvivor: "Ace Visconti",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9f/S07_charSelect_portrait.png/revision/latest?cb=20230705190028",
        modifiers: null,
      },
      {
        name: "Urban Evasion",
        description:
          'Years of evading the cops taught you a thing or two about stealth.\n<ul><li><b>Increases</b> your Crouching Movement speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">90</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">95</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">100</span></b> <b>%</b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"The paint is still fresh but I am long gone." \u2014 Nea Karlsson</span></i></p>',
        imgUrl: "UrbanEvasion.png",
        sourceSurvivor: "Nea Karlsson",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/14/S05_charSelect_portrait.png/revision/latest?cb=20230705185446",
        modifiers: null,
      },
      {
        name: "Vigil",
        description:
          'You look over your friends even in dire situations.\n<p class="mw-empty-elt">\n</p><ul><li><b>Increases</b> your Recovery rate from the <i><b>Blindness</b></i>, <i><b>Broken</b></i>, <i><b>Exhaustion</b></i>, <i><b>Exposed</b></i>, <i><b>Haemorrhage</b></i>, <i><b>Hindered</b></i>,  and <i><b>Oblivious</b></i> <b>Status Effects</b> by <b><span class="luaClr clr clr2" style="color: #e8c252;">20</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">25</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">30</span></b> <b>%</b>.</li>\n<li>This effect also applies to all other Survivors within <b><span class="luaClr clr clr2" style="color: #e8c252;">8 metres</span></b> of your location and lingers for <b><span class="luaClr clr clr6" style="color: #ff8800;">15 seconds</span></b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I am gonna be here when you wake up. You are gonna make it." \u2014 Quentin Smith</span></i></p>',
        imgUrl: "Vigil.png",
        sourceSurvivor: "Quentin Smith",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b2/S11_charSelect_portrait.png/revision/latest?cb=20230725192602",
        modifiers: null,
      },
      {
        name: "Visionary",
        description:
          'You are remarkably focused on your means of escape.\n<ul><li>The Auras of Generators are revealed to you within <b><span class="luaClr clr clr2" style="color: #e8c252;">32 metres</span></b>.</li>\n<li>Each time a Generator is completed, <i>Visionary</i> is deactivated for <b><span class="luaClr clr clr2" style="color: #e8c252;">20</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">18</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">16</span></b> <b>seconds</b>.</li></ul>',
        imgUrl: "Visionary.png",
        sourceSurvivor: "Felix Richter",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2e/S23_charSelect_portrait.png/revision/latest?cb=20230705194042",
        modifiers: null,
      },
      {
        name: "Wake Up!",
        description:
          'Unlocks potential in your Aura-reading ability.\n<p>Once all Generators are completed, <i>Wake Up!</i> activates:\n</p><ul><li>The Auras of the Exit Gate Switches are revealed to you within <b><span class="luaClr clr clr2" style="color: #e8c252;">128 metres</span></b>.</li>\n<li>Your Aura is revealed to all other Survivors within <b><span class="luaClr clr clr6" style="color: #ff8800;">128 metres</span></b> of your location while opening an Exit Gate.</li>\n<li><b>Increases</b> your Gate Opening speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">15</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">20</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">25</span></b> <b>%</b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Ok, look. If we survive the next 24 hours, then I\'ll take you out on a real date." \u2014 Quentin Smith</span></i></p>',
        imgUrl: "WakeUp!.png",
        sourceSurvivor: "Quentin Smith",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b2/S11_charSelect_portrait.png/revision/latest?cb=20230725192602",
        modifiers: null,
      },
      {
        name: "We'll Make It",
        description:
          'Helping others heightens your morale.\n<ul><li><b>Increases</b> your Altruistic Healing speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">100\u00a0%</span></b> for the next <b><span class="luaClr clr clr2" style="color: #e8c252;">30</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">60</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">90</span></b> <b>seconds</b> whenever you rescue another Survivor from a Hook</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I am confident we can all escape in one piece if we help each other."</span></i></p>',
        imgUrl: "We'llMakeIt.png",
        sourceSurvivor: "Any",
        sourceUrl: null,
        modifiers: null,
      },
      {
        name: "We're Gonna Live Forever",
        description:
          'Your few friends deserve the best protection.\n<ul><li><b>Increases</b> your Healing speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">100\u00a0%</span></b> when healing a dying Survivor.</li></ul>\n<p>When performing any of the following actions, <i>We\'re Gonna Live Forever</i> gains <b><span class="luaClr clr clr6" style="color: #ff8800;">1 Token</span></b>:\n</p><ul><li>Performing a Safe Hook Rescue</li>\n<li>Taking a <i>Protection Hit</i> for an injured Survivor.</li>\n<li>Stunning or Blinding the Killer to rescue a carried Survivor</li></ul>\n<p>Consume <b><span class="luaClr clr clr8" style="color: #d41c1c;">1 Token</span></b> to grant the <i><b>Endurance</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">6</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">8</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">10</span></b> <b>seconds</b> to any Survivor healed from the Dying State\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Come on then, let\'s ave\' it! I don\'t give a shit pal." \u2014 David King</span></i></p>',
        imgUrl: "We'reGonnaLiveForever.png",
        sourceSurvivor: "David King",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/57/S10_charSelect_portrait.png/revision/latest?cb=20230725192207",
        modifiers: null,
      },
      {
        name: "Windows of Opportunity",
        description:
          'Unlocks potential in your Aura-reading ability.\n<p>The Auras of Breakable Walls, Pallets, and Windows are revealed to you within <b><span class="luaClr clr clr2" style="color: #e8c252;">24</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">28</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">32</span></b> <b>metres</b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Rise and shine, work hard, carve out your name,<br/>Take aim, pull the trigger, hit the bulls eye for fame,<br/>Know the value of faith, an\' family, and don\'t you complain,<br/>Open wide, your windows of opportunity" \u2014 Kate Denson\'s "Windows of Opportunity"</span></i></p>',
        imgUrl: "WindowsofOpportunity.png",
        sourceSurvivor: "Kate Denson",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/19/S13_charSelect_portrait.png/revision/latest?cb=20230705192155",
        modifiers: null,
      },
      {
        name: "Wiretap",
        description:
          'You know that the best way to stay one step ahead is to keep tabs on the competition.\n<p>After repairing Generators for a total of <b><span class="luaClr clr clr2" style="color: #e8c252;">50\u00a0%</span></b>, <i>Wiretap</i> activates:\n</p><ul><li>Press the <i>Active Ability button</i> while near a partially progressed Generator to install a Trap, which stays active for <b><span class="luaClr clr clr2" style="color: #e8c252;">100</span></b>/<b><span class="luaClr clr clr3" style="color: #199b1e;">110</span></b>/<b><span class="luaClr clr clr4" style="color: #ac3ee3;">120</span></b> <b>seconds</b>.</li>\n<li>Whenever the Killer comes within <b><span class="luaClr clr clr6" style="color: #ff8800;">14 metres</span></b> of the <i>Trapped Generator</i> their Aura is revealed to all Survivors.</li></ul>\n<i>Wiretap</i> deactivates after the Generator is damaged or once the timer runs out.\n<p>The Auras of <i>Trapped Generators</i> are revealed to all Survivors in <b><span class="luaClr clr clr2" style="color: #e8c252;">yellow</span></b>.</p>',
        imgUrl: "Wiretap.png",
        sourceSurvivor: "Ada Wong",
        sourceUrl:
          "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/S32_charSelect_portrait.png/revision/latest?cb=20230725192508",
        modifiers: null,
      },
    ],
    items: {
      flashlights: [
        {
          name: "Flashlight",
          description:
            'A standard Flashlight.<br/>Can be used to light your way in the darkness.\n<ul><li><b><span class="luaClr clr clr2" style="color: #e8c252;">8 Charges</span></b>, allowing for a Battery Life of <b><span class="luaClr clr clr6" style="color: #ff8800;">8 seconds</span></b>.</li>\n<li>Can be used to temporarily blind the Killer.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Most of the battery life was wastefully used by the previous owner."</span></i>\n</p>\n',
          imgUrl: "Flashlight.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Sport Flashlight",
          description:
            'A very portable Flashlight with a good grip.<br/>Its efficient technology produces a powerful light while consuming less power.\n<ul><li><b><span class="luaClr clr clr2" style="color: #e8c252;">8 Charges</span></b>, allowing for a Battery Life of <b><span class="luaClr clr clr6" style="color: #ff8800;">8 seconds</span></b>.</li>\n<li>Can be used to temporarily blind the Killer.</li>\n<li><b>Increased</b> Aim accuracy of <b><span class="luaClr clr clr8" style="color: #d41c1c;">+20\u00a0%</span></b>.</li>\n<li><b>Decreased</b> Battery Depletion rate of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">-11\u00a0%</span></b>.</li></ul>\n<p><br/>\n</p>\n',
          imgUrl: "SportFlashlight.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Utility Flashlight",
          description:
            'A sturdy but heavy Flashlight that packs a lot of power.\n<ul><li><b><span class="luaClr clr clr2" style="color: #e8c252;">12 Charges</span></b>, allowing for a Battery Life of <b><span class="luaClr clr clr6" style="color: #ff8800;">12 seconds</span></b>.</li>\n<li>Can be used to temporarily blind the Killer.</li>\n<li><b>Increased</b> Beam brightness of <b><span class="luaClr clr clr8" style="color: #d41c1c;">+30\u00a0%</span></b>.</li>\n<li><b>Increased</b> Blindness duration of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">+15\u00a0%</span></b>.</li>\n<li><b>Reduced</b> Aim accuracy of <b><span class="luaClr clr clr3" style="color: #199b1e;">-20\u00a0%</span></b>.</li></ul>\n<p><br/>\n</p>\n',
          imgUrl: "UtilityFlashlight.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Will O' Wisp",
          description:
            '<b><span class="luaClr clr clr5" style="color: #ff0955;">NO LONGER AVAILABLE IN THE BLOODWEB.</span></b>\n<p>A Flashlight equipped with a special lens cover that adds an orange tint and a little Ghost to the beam.\n</p>\n<ul><li><b><span class="luaClr clr clr2" style="color: #e8c252;">8 Charges</span></b>, allowing for a Battery Life of <b><span class="luaClr clr clr6" style="color: #ff8800;">8 seconds</span></b>.</li>\n<li>Can be used to temporarily blind the Killer.</li>\n<li><b>More</b>friendly Ghosts in your life.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Happy Trick or Treating!"</span></i>\n</p>\n',
          imgUrl: "WillO'Wisp.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Anniversary Flashlight",
          description:
            '<b><span class="luaClr clr clr5" style="color: #ff0955;">NO LONGER AVAILABLE IN THE BLOODWEB.</span></b>\n<p>A festive Flashlight.\n</p>\n<ul><li><b><span class="luaClr clr clr2" style="color: #e8c252;">8 Charges</span></b>, allowing for a Battery Life of <b><span class="luaClr clr clr6" style="color: #ff8800;">8 seconds</span></b>.</li>\n<li>Can be used to temporarily blind the Killer.\n<ul><li>Explodes with confetti upon blinding the Killer.<br/>Surprise!</li></ul></li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">""Happy Anniversary! Here is to many more!" \u2014 The Dead by Daylight Team"</span></i>\n</p>\n',
          imgUrl: "AnniversaryFlashlight.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Masquerade Flashlight",
          description:
            'Not even a mask can protect you from this Flashlight\'s bright beam.\n<ul><li><b><span class="luaClr clr clr2" style="color: #e8c252;">8 Charges</span></b>, allowing for a Battery Life of <b><span class="luaClr clr clr6" style="color: #ff8800;">8 seconds</span></b>.</li>\n<li>Can be used to temporarily blind the Killer.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">""Happy Anniversary! The future looks bright!" \u2014 The Dead by Daylight Team"</span></i>\n</p>\n',
          imgUrl: "MasqueradeFlashlight.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
      ],
      keys: [
        {
          name: "Broken Key",
          description:
            'The bow and shank of a key, vibrating with remnant power.<br/>The <i>Broken Key\'s</i> power cannot be triggered by itself.\n<p>Various objects can be attached to its jump ring, which channels the <i>Broken Key\'s</i> power into various effects.\n</p><p>Press the <i>Use Item button</i> to perform the <i>Mind Channel</i> Action for up to <b><span class="luaClr clr clr2" style="color: #e8c252;">10 seconds</span></b>.\n</p>\n<ul><li>Activates the <i>Broken Key\'s</i> Aura-reading abilities, depending on its equipped Add-ons.</li></ul>\n<p><br/>\n</p>\n',
          imgUrl: "BrokenKey.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Dull Key",
          description:
            'A bent and dull Key that once held great power.<br/>The <i>Dull Key\'s</i> power cannot be triggered by itself.\n<p>Various objects can be attached to its jump ring, which channels the <i>Dull Key\'s</i> power into various effects.\n</p><p>Press the <i>Use Item button</i> to perform the <i>Mind Channel</i> Action for up to <b><span class="luaClr clr clr2" style="color: #e8c252;">5 seconds</span></b>.\n</p>\n<ul><li>Activates the <i>Dull Key\'s</i> Aura-reading abilities, depending on its equipped Add-ons.</li></ul>\n<p>The  <i>Dull Key</i> can be consumed to open the Hatch, if it has not been depleted of its Charges.\n</p>\n',
          imgUrl: "DullKey.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Skeleton Key",
          description:
            'A tarnished and crooked Key, vibrating with ominous power.<br/>The <i>Skeleton Key\'s</i> power cannot be triggered by itself.\n<p>Various objects can be attached to its jump ring, which channels the <i>Skeleton Key\'s</i> power into various effects.\n</p><p>Press the <i>Use Item button</i> to perform the <i>Mind Channel</i> Action for up to <b><span class="luaClr clr clr2" style="color: #e8c252;">30 seconds</span></b>.\n</p>\n<ul><li>Activates the <i>Skeleton Key\'s</i>  Aura-reading abilities, depending on its equipped Add-ons.</li></ul>\n<p>The  <i>Skeleton Key</i> can be consumed to open the Hatch, if it has not been depleted of its Charges.\n</p>\n',
          imgUrl: "SkeletonKey.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
      ],
      maps: [
        {
          name: "Map",
          description:
            'An old piece of parchment made out of a skin-like material that is rolled and sealed with an uncoloured leather string.\n<p>Holding and channelling the <i>Map</i> unlocks great potential in your Aura-reading abilities, revealing the Aura of all tracked objects at the cost of slowly burning it.\n</p>\n<ul><li>Start the Trial with <b><span class="luaClr clr clr2" style="color: #e8c252;">1 Generator</span></b> tracked.</li></ul>\n<p>The <i>Map</i> tracks any of the following objects:\n</p>\n<ul><li>Generators within <b><span class="luaClr clr clr6" style="color: #ff8800;">8 metres</span></b>.</li>\n<li>Generators, Chest, and Totem revealed by Detective\'s Hunch.</li></ul>\n<p>The <i>Map</i> lasts for <b><span class="luaClr clr clr8" style="color: #d41c1c;">20 seconds</span></b>.\n</p>\n',
          imgUrl: "Map.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Rainbow Map",
          description:
            'An piece of parchment made out of oddly fresh skin with blood on its edge that has yet to dry, and that is rolled and sealed with multiple coloured ropes and cords.\n<p>Holding and channelling the <i>Rainbow Map</i> unlocks great potential in your Aura-reading abilities, revealing the Aura of all tracked objects at the cost of slowly burning it.\n</p>\n<ul><li>Start the Trial with <b><span class="luaClr clr clr2" style="color: #e8c252;">3 random objects</span></b> tracked.</li></ul>\n<p>The <i>Rainbow Map</i> tracks any of the following objects:\n</p>\n<ul><li>Exit Gate Switches, Generators, and the Hatch when you come within <b><span class="luaClr clr clr6" style="color: #ff8800;">8 metres</span></b>.</li>\n<li>Various Killer Belongings when you come within <b><span class="luaClr clr clr8" style="color: #d41c1c;">8 metres</span></b>.</li>\n<li>Generators, Chests, and Totems revealed by Detective\'s Hunch.</li></ul>\n<p>The <i>Rainbow Map</i> lasts for <b><span class="luaClr clr clr4" style="color: #ac3ee3;">20 seconds</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"It disheartens me. All this unspeakable knowledge and gruelling effort and yet nothing tangible, nothing usable to get out of this nightmare." \u2014 Vigo\'s Journal</span></i>\n</p>\n',
          imgUrl: "RainbowMap.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
      ],
      "med-kits": [
        {
          name: "Camping Aid Kit",
          description:
            'A rudimentary First Aid Kit which can save lives in emergencies, even if it\'s lacking some of its supplies.<br/>Can be used to heal other Survivors:\n<ul><li><b>Increased</b> Altruistic Healing speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+35\u00a0%</span></b>.</li></ul>\n<p>Unlocks the Self-Heal action:\n</p>\n<ul><li><b>Reduced</b> Personal Healing speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">-33\u00a0%</span></b>.</li>\n<li><b>Reduced</b> Item efficiency of <b><span class="luaClr clr clr8" style="color: #d41c1c;">-33\u00a0%</span></b>.</li></ul>\n<p>The <i>Camping Aid Kit</i> has a Capacity of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">24 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Barely has enough material for a decent patch-up."</span></i>\n</p>\n',
          imgUrl: "CampingAidKit.png",
          stats: {
            speed: 0.35,
            charges: 24,
          },
        },
        {
          name: "First Aid Kit",
          description:
            'A standard First Aid Kit with all the necessary equipment for treating common to more serious injuries.<br/>Can be used to heal other Survivors:\n<ul><li><b>Increased</b> Altruistic Healing speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+40\u00a0%</span></b>.</li></ul>\n<p>Unlocks the Self-Heal action:\n</p>\n<ul><li><b>Reduced</b> Personal Healing speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">-33\u00a0%</span></b>.</li>\n<li><b>Reduced</b> Item efficiency of <b><span class="luaClr clr clr8" style="color: #d41c1c;">-33\u00a0%</span></b>.</li></ul>\n<p>The <i>First Aid Kit</i> has a Capacity of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">24 Charges</span></b>.\n</p>\n',
          imgUrl: "FirstAidKit.png",
          stats: {
            speed: 0.4,
            charges: 24,
          },
        },
        {
          name: "Emergency Med-Kit",
          description:
            'A sturdy and well organised Med-Kit equipped with top condition emergency supplies.<br/>Can be used to heal other Survivors:\n<ul><li><b>Increased</b> Altruistic Healing speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+45\u00a0%</span></b>.</li></ul>\n<p>Unlocks the Self-Heal action:\n</p>\n<ul><li><b>Reduced</b> Personal Healing speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">-33\u00a0%</span></b>.</li>\n<li><b>Reduced</b> Item efficiency of <b><span class="luaClr clr clr8" style="color: #d41c1c;">-33\u00a0%</span></b>.</li></ul>\n<p>The <i>Emergency Med-Kit</i> has a Capacity of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">24 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"There is a cure for almost everything...but not for this."</span></i>\n</p>\n',
          imgUrl: "EmergencyMed-Kit.png",
          stats: {
            speed: 0.45,
            charges: 24,
          },
        },
        {
          name: "Ranger Med-Kit",
          description:
            'A large metal box containing medical supplies aimed at emergency rescues in hard to reach, often isolated locations.<br/>Can be used to heal other Survivors:\n<ul><li><b>Increased</b> Altruistic Healing speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+50\u00a0%</span></b>.</li></ul>\n<p>Unlocks the Self-Heal action:\n</p>\n<ul><li><b>Reduced</b> Personal Healing speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">-33\u00a0%</span></b>.</li>\n<li><b>Reduced</b> Item efficiency of <b><span class="luaClr clr clr8" style="color: #d41c1c;">-33\u00a0%</span></b>.</li></ul>\n<p>The <i>Ranger Med-Kit</i> has a Capacity of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">24 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"A small engraved label can be found glued to the back panel: VK.ID-3994723."</span></i>\n</p>\n',
          imgUrl: "RangerMed-Kit.png",
          stats: {
            speed: 0.5,
            charges: 24,
          },
        },
        {
          name: "All Hallows' Eve Lunchbox",
          description:
            '<b><span class="luaClr clr clr5" style="color: #ff0955;">NO LONGER AVAILABLE IN THE BLOODWEB.</span></b>\n<p>A plastic lunchbox with phosphorescent Halloween Stickers that has been packed with First-Aid equipment.\n</p>\n<ul><li>Makes you <b>considerably more</b> visible.</li></ul>\n<p>Can be used to heal other Survivors:\n</p>\n<ul><li><b>Increased</b> Altruistic Healing speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+40\u00a0%</span></b>.</li></ul>\n<p>Unlocks the Self-Heal action:\n</p>\n<ul><li><b>Reduced</b> Personal Healing speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">-33\u00a0%</span></b>.</li>\n<li><b>Reduced</b> Item efficiency of <b><span class="luaClr clr clr8" style="color: #d41c1c;">-33\u00a0%</span></b>.</li></ul>\n<p>The <i>All Hallows\' Eve Lunchbox</i> has a Capacity of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">24 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Safety first! Make sure you can be seen when trick or treating."</span></i>\n</p>\n',
          imgUrl: "AllHallows'EveLunchbox.png",
          stats: {
            speed: 0.4,
            charges: 24,
          },
        },
        {
          name: "Anniversary Med-Kit",
          description:
            '<b><span class="luaClr clr clr5" style="color: #ff0955;">NO LONGER AVAILABLE IN THE BLOODWEB.</span></b>\n<p>A festive Med-Kit that explodes with confetti upon fully healing a Survivor. Surprise!\n</p>\n<ul><li><b>Increased</b> confetti of <b><span class="luaClr clr clr2" style="color: #e8c252;">+100\u00a0%</span></b>.</li></ul>\n<p>Can be used to heal other Survivors:\n</p>\n<ul><li><b>Increased</b> Altruistic Healing speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">+40\u00a0%</span></b>.</li></ul>\n<p>Unlocks the Self-Heal action:\n</p>\n<ul><li><b>Reduced</b> Personal Healing speed of <b><span class="luaClr clr clr8" style="color: #d41c1c;">-33\u00a0%</span></b>.</li>\n<li><b>Reduced</b> Item efficiency of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">-33\u00a0%</span></b>.</li></ul>\n<p>The <i>Anniversary Med-Kit</i> has a Capacity of <b><span class="luaClr clr clr3" style="color: #199b1e;">24 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Happy Anniversary! Here\'s to many more!" \u2014 The Dead by Daylight Team</span></i>\n</p>\n',
          imgUrl: "AnniversaryMed-Kit.png",
          stats: {
            speed: 0.4,
            charges: 24,
          },
        },
        {
          name: "Masquerade Med-Kit",
          description:
            'A festive Med-Kit with a shocking surprise, giving a whole new meaning to the term "Health Scare".\n<ul><li><b>Increased</b> confetti of <b><span class="luaClr clr clr2" style="color: #e8c252;">+100\u00a0%</span></b>.</li></ul>\n<p>Can be used to heal other Survivors:\n</p>\n<ul><li><b>Increased</b> Altruistic Healing speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">+40\u00a0%</span></b>.</li></ul>\n<p>Unlocks the Self-Heal action:\n</p>\n<ul><li><b>Reduced</b> Personal Healing speed of <b><span class="luaClr clr clr8" style="color: #d41c1c;">-33\u00a0%</span></b>.</li>\n<li><b>Reduced</b> Item efficiency of <b><span class="luaClr clr clr4" style="color: #ac3ee3;">-33\u00a0%</span></b>.</li></ul>\n<p>The <i>Masquerade Med-Kit</i> has a Capacity of <b><span class="luaClr clr clr3" style="color: #199b1e;">24 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Happy Anniversary! To your health!" \u2014 The Dead by Daylight Team</span></i>\n</p>\n',
          imgUrl: "MasqueradeMed-Kit.png",
          stats: {
            speed: 0.4,
            charges: 24,
          },
        },
      ],
      toolboxes: [
        {
          name: "Worn-Out Tools",
          description:
            'A metal box containing out of condition tools that could break at any moment.<br/>Even without training, can be used to repair or break various mechanical components.\n<ul><li><b>Increased</b> Generator Repair speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+50\u00a0%</span></b>.</li>\n<li><b>Reduced</b> Good Skill Check Success zone of <b><span class="luaClr clr clr6" style="color: #ff8800;">-10\u00a0%</span></b>.</li>\n<li>Unlocks the Sabotage action.</li></ul>\n<p>The <i>Worn-Out Toolbox</i> has a Capacity of <b><span class="luaClr clr clr8" style="color: #d41c1c;">16 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"You call these tools? ... Really?"</span></i>\n</p>\n',
          imgUrl: "Worn-OutTools.png",
          stats: {
            speed: 0.5,
            charges: 16,
          },
        },
        {
          name: "Toolbox",
          description:
            'A metal box containing a set of basic tools.<br/>Even without training, can be used to repair or break various mechanical components.\n<ul><li><b>Increased</b> Generator Repair speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+50\u00a0%</span></b>.</li>\n<li>Unlocks the Sabotage action.</li>\n<li><b>Increased</b> Hook Sabotage speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">+10\u00a0%</span></b>.</li></ul>\n<p>The <i>Toolbox</i> has a Capacity of <b><span class="luaClr clr clr8" style="color: #d41c1c;">20 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"It is unclear as to where these tools come from. Were they brought in by one of us or did they belong to one of the monsters?"</span></i>\n</p>\n',
          imgUrl: "Toolbox.png",
          stats: {
            speed: 0.5,
            charges: 20,
          },
        },
        {
          name: "Mechanic's Toolbox",
          description:
            'A metal box with specialised mechanics tools.<br/>Even without training, can be used to repair or break various mechanical components.\n<ul><li><b>Increased</b> Generator Repair speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+75\u00a0%</span></b>.</li>\n<li>Unlocks the Sabotage action.</li>\n<li><b>Decreased</b> Hook Sabotage speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">-10\u00a0%</span></b>.</li></ul>\n<p>The <i>Mechanic\'s Toolbox</i> has a Capacity of <b><span class="luaClr clr clr8" style="color: #d41c1c;">16 Charges</span></b>.\n</p>\n',
          imgUrl: "Mechanic'sToolbox.png",
          stats: {
            speed: 0.75,
            charges: 16,
          },
        },
        {
          name: "Commodious Toolbox",
          description:
            'A large metal box containing basic tool and extra mechanical parts.<br/>Even without training, can be used to repair or break various mechanical components.\n<ul><li><b>Increased</b> Generator Repair speed by <b><span class="luaClr clr clr2" style="color: #e8c252;">+50\u00a0%</span></b>.</li>\n<li>Unlocks the Sabotage action.</li></ul>\n<p>The <i>Commodious Toolbox</i> has a Capacity of <b><span class="luaClr clr clr6" style="color: #ff8800;">32 Charges</span></b>.\n</p>\n',
          imgUrl: "CommodiousToolbox.png",
          stats: {
            speed: 0.5,
            charges: 32,
          },
        },
        {
          name: "Engineer's Toolbox",
          description:
            'A metal box with highly specialised tools meant for engineering.<br/>Most of the tools can be used by neophytes to make quick repairs or break various mechanical components.\n<ul><li><b>Increased</b> Generator Repair speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+100\u00a0%</span></b>.</li>\n<li>Unlocks the Sabotage action.</li>\n<li><b>Decreased</b> Hook Sabotage speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">-25\u00a0%</span></b>.</li></ul>\n<p>The <i>Engineer\'s Toolbox</i> has a Capacity of <b><span class="luaClr clr clr8" style="color: #d41c1c;">16 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"I\'ve created tools beyond compare and stood paralysed as they were stolen from me. These are but a poor replica, spat out by The Fog." \u2014 Vigo\'s Journal</span></i>\n</p>\n',
          imgUrl: "Engineer'sToolbox.png",
          stats: {
            speed: 1.0,
            charges: 16,
          },
        },
        {
          name: "Alex's Toolbox",
          description:
            'A metal box containing mainly saws and vice grips of varying sizes but also other tools.<br/>Even though the content of this Toolbox is clearly aimed at destructive deeds, it can be used to repair various mechanical components as well.\n<ul><li><b>Increased</b> Generator Repair speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+10\u00a0%</span></b>.</li>\n<li>Unlocks the Sabotage action.</li>\n<li><b>Increased</b> Hook Sabotage speed of <b><span class="luaClr clr clr6" style="color: #ff8800;">+50\u00a0%</span></b>.</li></ul>\n<p><i>Alex\'s Toolbox</i> has a Capacity of <b><span class="luaClr clr clr8" style="color: #d41c1c;">24 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Most of the tools are identified as \'owned by Alex\'."</span></i>\n</p>\n',
          imgUrl: "Alex'sToolbox.png",
          stats: {
            speed: 0.1,
            charges: 24,
          },
        },
        {
          name: "Anniversary Toolbox",
          description:
            '<b><span class="luaClr clr clr5" style="color: #ff0955;">NO LONGER AVAILABLE IN THE BLOODWEB.</span></b>\n<p>A Toolbox that is slightly explosive.\n</p>\n<ul><li><b>Increased</b> Generator Repair speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+50\u00a0%</span></b>.</li>\n<li>Detonates a firework once depleted.<br/>Yay!</li>\n<li>Unlocks the Sabotage action.</li></ul>\n<p>The <i>Anniversary Toolbox</i> has a Capacity of <b><span class="luaClr clr clr6" style="color: #ff8800;">32 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Nothing says happy anniversary like detonating a firework and praying the Killer does not notice.<br/>Good luck and thank you for celebrating with us!" \u2014 The Dead by Daylight Team</span></i>\n</p>\n',
          imgUrl: "AnniversaryToolbox.png",
          stats: {
            speed: 0.5,
            charges: 32,
          },
        },
        {
          name: "Festive Toolbox",
          description:
            '<b><span class="luaClr clr clr5" style="color: #ff0955;">NO LONGER AVAILABLE IN THE BLOODWEB.</span></b>\n<p>A Toolbox packed to the brim with fireworks, it is prepared to celebrate all your life\'s successes... and failures.\n</p>\n<ul><li><b>Increased</b> Generator Repair speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+50\u00a0%</span></b>.</li>\n<li>Succeeding a Great Skill Check detonates a small cluster of firecrackers.</li>\n<li>Missing a Skill Check detonates fireworks.</li>\n<li>Unlocks the Sabotage action.</li></ul>\n<p>The <i>Festive Toolbox</i> has a Capacity of <b><span class="luaClr clr clr6" style="color: #ff8800;">32 Charges</span></b>.\n</p>\n',
          imgUrl: "FestiveToolbox.png",
          stats: {
            speed: 0.5,
            charges: 32,
          },
        },
        {
          name: "Masquerade Toolbox",
          description:
            'A Toolbox with all of the standard gadgets: wrenches, screwdrivers, fireworks, a hammer...\n<ul><li><b>Increased</b> Generator Repair speed of <b><span class="luaClr clr clr2" style="color: #e8c252;">+50\u00a0%</span></b>.</li>\n<li>Detonates a firework once depleted.<br/>Yay!</li>\n<li>Unlocks the Sabotage action.</li></ul>\n<p>The <i>Masquerade Toolbox</i> has a Capacity of <b><span class="luaClr clr clr6" style="color: #ff8800;">32 Charges</span></b>.\n</p><p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Happy Anniversary! We\'re fixin\' to have a big party!" \u2014 The Dead by Daylight Team</span></i>\n</p>\n',
          imgUrl: "MasqueradeToolbox.png",
          stats: {
            speed: 0.5,
            charges: 32,
          },
        },
      ],
    },
    addons: {
      flashlight: [
        {
          name: "Broken Bulb",
          description:
            '<b><span class="luaClr clr clr8" style="color: #d41c1c;">NO LONGER AVAILABLE IN THE BLOODWEB</span></b>\n<p>A damaged bulb that causes a spooky flickering effect.\n</p>\n<ul><li>Causes the <i>Flashlight</i> to flicker.</li>\n<li><b>Increases</b> the Beam brightness of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+15\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Blindness duration of the <i>Flashlight</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">+30\u00a0%</span></b>.</li>\n<li><b>Increases</b> the spookiness.</li></ul>\n<p><i><b>Haunted by Daylight</b> Event Item.</i>\n</p>\n',
          imgUrl: "BrokenBulb.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Wide Lens",
          description:
            'A thin wide lens in perfect condition.<br/>Designed to spread the Flashlight beam at the cost of reducing its range of effectiveness.\n<ul><li><b>Increases</b> the Beam width of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+25\u00a0%</span></b>.</li>\n<li><b>Shortens</b> the Beam reach of the <i>Flashlight</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">-25\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "WideLens.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Power Bulb",
          description:
            'A tiny Flashlight bulb that packs more wattage for a brighter, more powerful light beam.\n<ul><li><b>Increases</b> the Beam brightness of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+20\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Blindness duration of the <i>Flashlight</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">+10\u00a0%</span></b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Even the most powerful light cannot pierce through The Black Fog\'s darkness."</span></i>\n</p>\n',
          imgUrl: "PowerBulb.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Leather Grip",
          description:
            'A leather strip wrapped around the Flashlight for more grip.\n<ul><li><b>Increases</b> the Aim accuracy of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+20\u00a0%</span></b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Too many have fallen due to sweaty hands."</span></i>\n</p>\n',
          imgUrl: "LeatherGrip.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Battery",
          description:
            'A standard battery of unknown brand.\n<ul><li><b>Extends</b> the Battery life of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+2 seconds</span></b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Another nearly empty battery."</span></i>\n</p>\n',
          imgUrl: "Battery.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "TIR Optic",
          description:
            'A lens and reflector combo which can magnify a Flashlight\'s beam.\n<ul><li><b>Increases</b> the Beam brightness of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+30\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Blindness duration of the <i>Flashlight</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">+15\u00a0%</span></b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Let the light burn them out of their dark shroud."</span></i>\n</p>\n',
          imgUrl: "TIROptic.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Rubber Grip",
          description:
            'A rubber grip specifically fitting Flashlights for more grip.\n<ul><li><b>Increases</b> the Aim accuracy of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+40\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "RubberGrip.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Low Amp Filament",
          description:
            'A filament bulb designed to extend a Flashlight battery\'s life.\n<ul><li><b>Decreases</b> the Battery Depletion rate of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">-20\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "LowAmpFilament.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Heavy Duty Battery",
          description:
            'A battery marked as <i>"industrial strength"</i>.\n<ul><li><b>Extends</b> the Battery life of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+4 seconds</span></b>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"A battery advertised as lasting 8 hours lasts only a couple of seconds in The Black Fog."</span></i>\n</p>\n',
          imgUrl: "HeavyDutyBattery.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Focus Lens",
          description:
            'A thick glass lens that focuses the Flashlight beam to increase its intensity.\n<ul><li><b>Extends</b> the Beam reach of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+25\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Beam brightness of the <i>Flashlight</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">+20\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Blindness duration of the <i>Flashlight</i> by <b><span class="luaClr clr clr8" style="color: #d41c1c;">+10\u00a0%</span></b>.</li>\n<li><b>Decreases</b> the Beam width of the <i>Flashlight</i> by <b><span class="luaClr clr clr4" style="color: #ac3ee3;">-15\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "FocusLens.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Long Life Battery",
          description:
            'A recent model of battery that lasts longer.\n<ul><li><b>Extends</b> the Battery life of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+6 seconds</span></b>.</li></ul>\n',
          imgUrl: "LongLifeBattery.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Intense Halogen",
          description:
            'A chemical bulb that generates an intensely clear light.\n<ul><li><b>Increases</b> the Beam brightness of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+40\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Blindness duration of the <i>Flashlight</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">+20\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "IntenseHalogen.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "High-End Sapphire Lens",
          description:
            'A wide lens made of un-scratch-able sapphire that optimises the power and range of the light beam.\n<ul><li><b>Extends</b> the Beam reach of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+25\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Beam brightness of the <i>Flashlight</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">+30\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Blindness duration of the <i>Flashlight</i> by <b><span class="luaClr clr clr8" style="color: #d41c1c;">+15\u00a0%</span></b>.</li>\n<li><b>Decreases</b> the Beam width of the <i>Flashlight</i> by <b><span class="luaClr clr clr4" style="color: #ac3ee3;">+25\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "High-EndSapphireLens.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Odd Bulb",
          description:
            'A heavy and completely opaque bulb of unknown origin which emits a faint light even when turned off.\n<ul><li><b>Increases</b> the Beam brightness of the <i>Flashlight</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+50\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Blindness duration of the <i>Flashlight</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">+25\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Battery Depletion rate of the <i>Flashlight</i> by <b><span class="luaClr clr clr8" style="color: #d41c1c;">+14\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "OddBulb.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
      ],
      key: [
        {
          name: "Prayer Rope",
          description:
            'Tightly knitted rope used in praying rituals.\n<ul><li><b>Adds <span class="luaClr clr clr2" style="color: #e8c252;">10 seconds</span></b> of use to the <i>Key</i>.</li></ul>\n<p><i><span class="luaClr clr clr9" style="color: #e7cda2;">"Pray all you want, your words are getting lost somewhere up there, in The Fog."</span></i>\n</p>\n',
          imgUrl: "PrayerRope.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Scratched Pearl",
          description:
            'A porous and scratched white pearl.<br/>A minuscule jump ring allows the pearl to be attached to the Key.\n<ul><li><b>Increases</b> the <i>Key\'s</i> Aura-reading range by <b><span class="luaClr clr clr2" style="color: #e8c252;">+12 metres</span></b>.</li></ul>\n',
          imgUrl: "ScratchedPearl.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Prayer Beads",
          description:
            'A chain of matte beads of various sizes used in praying ritual.\n<ul><li><b>Adds <span class="luaClr clr clr2" style="color: #e8c252;">15 seconds</span></b> of use to the <i>Key</i>.</li></ul>\n',
          imgUrl: "PrayerBeads.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Eroded Token",
          description:
            'A heavily worn out token made of brass.<br/>If an inscription or drawing was once engraved in it, it has today completely disappeared.<br/>Can be attached to the Key using its jump ring to channel the Key\'s Aura-reading ability.\n<ul><li>Unlocks the ability to reveal the Auras of other Survivors within <b><span class="luaClr clr clr2" style="color: #e8c252;">24 metres</span></b>.</li></ul>\n<p>Does not stack with <i>Gold Token</i>.\n</p>\n',
          imgUrl: "ErodedToken.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Gold Token",
          description:
            'A gold token with a dull appearance.<br/>Both faces are smooth and void of any inscriptions.<br/>Can be attached to the Key using its jump ring to channel the Key\'s Aura-reading ability.\n<ul><li>Unlocks the ability to reveal the Auras of other Survivors within <b><span class="luaClr clr clr2" style="color: #e8c252;">48 metres</span></b>.</li></ul>\n<p>Does not stack with <i>Eroded Token</i>.\n</p>\n',
          imgUrl: "GoldToken.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Weaved Ring",
          description:
            "A mundane key ring in appearance with an unusual bluish dark sheen.<br/>The ring binds the Key to the user, preventing its loss even in the darkest of times.\n<ul><li>In case of death, lose this Add-on instead of the <i>Key</i> itself.</li></ul>\n",
          imgUrl: "WeavedRing.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Milky Glass",
          description:
            "This opaque piece of glass emits a dull vibrating noise.<br/>When the Key is used to unlock the Hatch, the glass token protects the Key from breaking, channelling The Black Fog's energy into the glass instead.\n<ul><li>Opening the Hatch with a <i>Key</i> loses this Add-on instead of the <i>Key</i> itself.</li></ul>\n",
          imgUrl: "MilkyGlass.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Blood Amber",
          description:
            'A blood-red amber striped with black veins.<br/>The amber is warm to the touch.<br/>Can be attached to the Key using its jump ring to channel the Key\'s Aura-reading ability.\n<ul><li>Unlocks the ability to reveal the Aura of the Killer within <b><span class="luaClr clr clr2" style="color: #e8c252;">32 metres</span></b>.</li>\n<li><b>Increases</b> the <i>Key\'s</i> Depletion rate by <b><span class="luaClr clr clr6" style="color: #ff8800;">+100\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "BloodAmber.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Unique Wedding Ring",
          description:
            'An engraved wedding ring that emerged from The Fog and resonates with an indescribable and incomprehensible energy.\n<ul><li>Reveals the Aura of the <i><b>Obsession</b></i> at all times, without the need to channel the <i>Key\'s</i> energy.</li></ul>\n<p>Lowers the odds of becoming the Killer\'s initial <i><b>Obsession</b></i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">-100\u00a0%</span></b>.\n</p>\n',
          imgUrl: "UniqueWeddingRing.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
      ],
      map: [
        {
          name: "Map Addendum",
          description:
            'A fragmented piece of a thick fibrous material.<br/>A partial and faded map is drawn on it which by itself is useless.\n<ul><li><b>Adds <span class="luaClr clr clr2" style="color: #e8c252;">5 seconds</span></b> of use to the <i>Map</i>.</li></ul>\n',
          imgUrl: "MapAddendum.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Yellow Wire",
          description:
            "A small electrical wire.<br/>Both ends are heavily damaged like it has been forcefully torn out of its intended location.<br/>Can be tied around the Map to enhance its Aura-reading ability.\n<ul><li>Unlocks the ability to track the Exit Gate Switches.</li></ul>\n",
          imgUrl: "YellowWire.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Unusual Stamp",
          description:
            'A wooden stamp with a cross-hatched rubber pad used to mark documents.<br/>It is unclear as to how or by whom this stamp was originally used.\n<ul><li><b>Increases</b> the <i>Map\'s</i> Tracking range by <b><span class="luaClr clr clr2" style="color: #e8c252;">+8 metres</span></b>.</li></ul>\n',
          imgUrl: "UnusualStamp.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Retardant Jelly",
          description:
            'A slimy, translucent substance with a ghastly lavender shade.<br/>This jelly from unknown origin is highly resistant to heat.\n<ul><li><b>Decreases</b> the <i>Map\'s</i> Depletion rate by <b><span class="luaClr clr clr2" style="color: #e8c252;">-20\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "RetardantJelly.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Red Twine",
          description:
            "A bristly and rough piece of twine of a deep red colour.<br/>Can be tied around the Map to enhance its Aura-reading ability.\n<ul><li>Unlocks the ability to track <b>Killer Belongings</b>.</li></ul>\n",
          imgUrl: "RedTwine.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Glass Bead",
          description:
            "A strange bead circled with gold that can be used to magnify the map and mark a specific position.<br/>The bead emits an energy which can be felt and seen by Survivors.\n<p>Press the <i>Secondary Action button</i> while using the <i>Map</i> to use the <i>Glass Bead</i>:\n</p>\n<ul><li>Place a <b>Pillar of Light</b> at your current location that can be seen by all Survivors.</li></ul>\n",
          imgUrl: "GlassBead.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Odd Stamp",
          description:
            'A stamp carved out of sturdy blonde wood.<br/>The text found at the base is incomprehensible: <i>"kw\'zvre\'od"</i>.\n<ul><li><b>Increases</b> the <i>Map\'s</i> Tracking range by <b><span class="luaClr clr clr2" style="color: #e8c252;">+12 metres</span></b>.</li></ul>\n',
          imgUrl: "OddStamp.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Black Silk Cord",
          description:
            "A smooth black cord with a soft appearance.<br/>Can be tied around the Map to enhance its Aura-reading ability.\n<ul><li>Unlocks the ability to track the Hatch.</li></ul>\n",
          imgUrl: "BlackSilkCord.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Crystal Bead",
          description:
            "An intricate set of lenses wrapped up in an astonishingly complex apparatus.<br/>The gears controlling the lenses' focus move by themselves as to focus on something invisible to humans.\n<ul><li>Reveals the Auras generated by the <i>Map</i> to all Survivors.</li></ul>\n",
          imgUrl: "CrystalBead.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
      ],
      "med-kit": [
        {
          name: "Refined Serum",
          description:
            '<b><span class="luaClr clr clr8" style="color: #d41c1c;">NO LONGER AVAILABLE IN THE BLOODWEB</span></b>\n<p>A refined version of the Putrid Serum that is mostly safe for human consumption.<br/>Mostly.\n</p><p>Press the <i>Secondary Action button</i> while healing yourself or another Survivor with a <i>Med-Kit</i> to use the <i>Refined Serum</i>:\n</p>\n<ul><li><b>Increases</b> the Movement speed of the affected Survivor by <b><span class="luaClr clr clr2" style="color: #e8c252;">+5\u00a0%</span></b> for the next <b><span class="luaClr clr clr6" style="color: #ff8800;">16 seconds</span></b>.</li>\n<li>Creates a Blight trail behind the affected Survivor.</li></ul>\n<p><i>Refined Serum</i> consumes the <i>Med-Kit</i> on use.\n</p><p><i><b>Haunted by Daylight</b> Event Item.</i>\n</p>\n',
          imgUrl: "RefinedSerum.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Rubber Gloves",
          description:
            'Disposable medical gloves to avoid cross-contamination.\n<ul><li><b>Increases</b> the Great Success zone of <i>Healing Skill Checks</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+10\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "RubberGloves.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Butterfly Tape",
          description:
            'Medical quality tape used to close small wounds.\n<ul><li><b>Increases</b> the Healing speed of <i>Med-Kits</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+5\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "ButterflyTape.png",
          stats: {
            speed: 0.05,
            charges: null,
          },
        },
        {
          name: "Bandages",
          description:
            'A pack of bandages usually found in First Aid Kits.\n<ul><li><b>Increases</b> the Charges of <i>Med-Kits</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+8 Charges</span></b>.</li></ul>\n',
          imgUrl: "Bandages.png",
          stats: {
            speed: null,
            charges: 8,
          },
        },
        {
          name: "Sponge",
          description:
            'A mundane sponge used to soak up extra blood, providing easier access to wounds.\n<ul><li><b>Increases</b> the Great Success zone of <i>Healing Skill Checks</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+20\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "Sponge.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Self Adherent Wrap",
          description:
            'A pack of bandages that stick to themselves without the need of clips for a faster patch-up that requires less readjustments.\n<ul><li><b>Increases</b> the Healing speed of <i>Med-Kits</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+5\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Charges of <i>Med-Kits</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">+8 Charges</span></b>.</li></ul>\n',
          imgUrl: "SelfAdherentWrap.png",
          stats: {
            speed: 0.05,
            charges: 8,
          },
        },
        {
          name: "Needle & Thread",
          description:
            'Not exactly a medical device.<br/>However, it can be used to quickly and painfully close up a wound.\n<ul><li><b>Increases</b> the Odds of triggering <i>Healing Skill Checks</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+10\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Progression bonus for succeeding at <i>Great Healing Skill Checks</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">+5\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "Needle&Thread.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Medical Scissors",
          description:
            'Scissors designed to easily cut through textiles.\n<ul><li><b>Increases</b> the Healing speed of <i>Med-Kits</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+10\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "MedicalScissors.png",
          stats: {
            speed: 0.1,
            charges: null,
          },
        },
        {
          name: "Surgical Suture",
          description:
            'A medical device used to close and hold body tissue.<br/>Even though it is very effective, the surgical suture is challenging to use.\n<ul><li><b>Increases</b> the Odds of triggering <i>Healing Skill Checks</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+15\u00a0%</span></b>.</li>\n<li><b>Increases</b> the Progression bonus for succeeding at <i>Great Healing Skill Checks</i> by <b><span class="luaClr clr clr6" style="color: #ff8800;">+10\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "SurgicalSuture.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Gauze Roll",
          description:
            'A sterile gauze used for a variety of wounds.<br/>Part of a total wound care system.\n<ul><li><b>Increases</b> the Charges of <i>Med-Kits</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+10 Charges</span></b>.</li></ul>\n',
          imgUrl: "GauzeRoll.png",
          stats: {
            speed: null,
            charges: 10,
          },
        },
        {
          name: "Styptic Agent",
          description:
            'A white powder with coagulant properties.<br/>Apply the agent to a wound to stop it from haemorrhaging.\n<p>Press the <i>Secondary Action button</i> while healing yourself or another Survivor with a <i>Med-Kit</i> to use the <i>Styptic Agent</i>:\n</p>\n<ul><li>Grants the <i><b>Endurance</b></i> <b>Status Effect</b> for <b><span class="luaClr clr clr2" style="color: #e8c252;">5 seconds</span></b>.</li></ul>\n<p><i>Styptic Agent</i> consumes the <i>Med-Kit</i> on use.\n</p>\n',
          imgUrl: "StypticAgent.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Abdominal Dressing",
          description:
            'A highly absorbent pad that prevents bodily fluid leakage when applied to large abdominal wounds.\n<ul><li><b>Increases</b> the Healing speed of <i>Med-Kits</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+15\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "AbdominalDressing.png",
          stats: {
            speed: 0.15,
            charges: null,
          },
        },
        {
          name: "Gel Dressings",
          description:
            'A pack of gel forming pads used to patch up heavily exuding wounds.\n<ul><li><b>Increases</b> the Charges of <i>Med-Kits</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+16 Charges</span></b>.</li></ul>\n',
          imgUrl: "GelDressings.png",
          stats: {
            speed: null,
            charges: 16,
          },
        },
        {
          name: "Anti-Haemorrhagic Syringe",
          description:
            'An anti-haemorrhagic substance that stops the bleeding in a matter of seconds.\n<p>Press the <i>Secondary Action button</i> while healing yourself or another Survivor with a <i>Med-Kit</i> to use the <i>Anti-Haemorrhagic Syringe</i>:\n</p>\n<ul><li>Automatically heals the affected Survivor <b><span class="luaClr clr clr2" style="color: #e8c252;">1</span> Health State</b> over the next <b><span class="luaClr clr clr6" style="color: #ff8800;">16 seconds</span></b>.\n<ul><li>Healing Speed modifiers affect the Healing time.</li>\n<li>Taking damage or being picked up by the Killer cancels the Healing effect.</li></ul></li></ul>\n<p><i>Anti-Haemorrhagic Syringe</i> consumes the <i>Med-Kit</i> on use.\n</p>\n',
          imgUrl: "Anti-HaemorrhagicSyringe.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
      ],
      toolbox: [
        {
          name: "Scraps",
          description:
            'Springs, screws and gears.<br/>Mostly unusable junk.\n<ul><li><b>Increases</b> the Capacity of the <i>Toolbox</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+8 charges</span></b>.</li></ul>\n',
          imgUrl: "Scraps.png",
          stats: {
            speed: null,
            charges: 8,
          },
        },
        {
          name: "Instructions",
          description:
            "Someone quickly painted what seems to be repair instructions on this piece of bark.\n<ul><li><b>Suppresses</b> all normal Skill Checks that are usually triggered while repairing a Generator.</li></ul>\n",
          imgUrl: "Instructions.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Clean Rag",
          description:
            'A mundane rag.<br/>Suspiciously clean.\n<ul><li><b>Increases</b> the Repair speed of the <i>Toolbox</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+20\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "CleanRag.png",
          stats: {
            speed: 0.2,
            charges: null,
          },
        },
        {
          name: "Wire Spool",
          description:
            'A portable but heavy spool of copper wire.\n<ul><li><b>Increases</b> the Capacity of the <i>Toolbox</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+12 charges</span></b>.</li></ul>\n',
          imgUrl: "WireSpool.png",
          stats: {
            speed: null,
            charges: 12,
          },
        },
        {
          name: "Spring Clamp",
          description:
            'Useful tool to clamp hoses or hold wires in place and prevent damage or injury.\n<ul><li><b>Reduces</b> the range at which your Generator-Repair noises can be heard by <b><span class="luaClr clr clr2" style="color: #e8c252;">-8 metres</span></b>.</li></ul>\n',
          imgUrl: "SpringClamp.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Socket Swivels",
          description:
            'Swivels provide bend and flexibility for bolts that are out of reach, deep within mechanical devices.\n<ul><li><b>Increases</b> the Repair speed of the <i>Toolbox</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+30\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "SocketSwivels.png",
          stats: {
            speed: 0.3,
            charges: null,
          },
        },
        {
          name: "Protective Gloves",
          description:
            "Thick gloves, which reduce manual dexterity but protect hands from injury.\n<ul><li><b>Suppresses</b> the <i>Loud Noise Notification</i> to the Killer that is usually triggered after sabotaging a Hook .</li></ul>\n",
          imgUrl: "ProtectiveGloves.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Cutting Wire",
          description:
            'A rudimentary cutting tool made from a jagged metal wire and two wooden handles.\n<ul><li><b>Increases</b> the Sabotage speed of the <i>Toolbox</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+15\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "CuttingWire.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Hacksaw",
          description:
            'A small hand saw mounted with a metal cutting blade.\n<ul><li><b>Increases</b> the Sabotage speed of the <i>Toolbox</i> by <b><span class="luaClr clr clr2" style="color: #e8c252;">+20\u00a0%</span></b>.</li></ul>\n',
          imgUrl: "Hacksaw.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Grip Wrench",
          description:
            'An adjustable wrench with a tough grip.<br/>Essential in any Toolbox.\n<ul><li><b>Increases</b> the Auto-Repair timer for sabotaged Hooks by <b><span class="luaClr clr clr2" style="color: #e8c252;">+15 seconds</span></b>.</li></ul>\n',
          imgUrl: "GripWrench.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
        {
          name: "Brand New Part",
          description:
            'This intricate mechanical part feels oddly out of place.<br/>It is clean and shiny as if straight out of the factory.\n<p>Replaces the <i>Toolbox Repair</i> prompt with an <i>Install Brand New Part</i> prompt instead:\n</p>\n<ul><li>Installing the <i>Brand New Part</i> triggers <b><span class="luaClr clr clr2" style="color: #e8c252;">1</span> difficult Skill Check</b>.</li>\n<li><b>Reduces</b> that Generator\'s Repair requirement permanently by <b><span class="luaClr clr clr6" style="color: #ff8800;">-10 Charges</span></b> after succeeding the Skill Check.</li></ul>\n<p><i>Brand New Part</i> is consumed on use.\n</p>\n',
          imgUrl: "BrandNewPart.png",
          stats: {
            speed: null,
            charges: null,
          },
        },
      ],
    },
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
