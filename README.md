# Genshin-Team-Build-Calculator
Genshin Impact calculation widget allowing users to select characters, and calculate a score ranging from 1-5 stars based on the potential success of the team composition within the game (graded using base statistics of characters without external buffs from items e.g artifacts).
## Interface
* Overall layout: used flexbox and grid
* JQuery and javascript used for handling dropdown user interactions
## Implementation of calculation
* Points tallied for certain factors, weighted, and categorized on a scale of 1-5
* Factors considered:
  * Position
    * Used tier ratings (JP) from: https://game8.co/games/Genshin-Impact/archives/297465#hl_3 
  * Elemental reactions
    * Ranked based off of: https://www.sportskeeda.com/esports/5-best-elemental-reactions-genshin-impact-2021
  * Elemental resonance
    * Taken into account if minimum 2 same elements, or if 4 different elements within the 4 selected characters
## Future thoughts
* Could improve upon by including data analysis on specific attributes of characters through simulation against enemies
* Can factor in elemental damage attacks intrinsic to specific characters
## Sources for media:
  * 5-star rating image supplied by the authors of this project (used ibisPaint X)
  * Gacha splash
    * Traveler Anemo/Geo base image supplied from Genshin Wiki 
      * Link: (https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki)
    * Other characters supplied from Genshin Honey 
      * Link: (https://genshin.honeyhunterworld.com/?lang=EN)
  * Background supplied by the authors of this project (taken from the Genshin Impact game)
  * Gif supplied by the authors of this project (taken from the Genshin Impact game)
