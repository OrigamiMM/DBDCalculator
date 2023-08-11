# DBDCalculator

### Goals for the first iteration of the calculator: Perk builder and calculate single objective time (Generators)
This file has described large overall milestones with bullet points made to split up into smaller subgoals. Each subgoal would be a separate branch before we merge. Each overall milestone is then merged into production.
This file should always be updated.
1. Generate JSON data files for perks, items and addons
     1. Generate raw JSON files for perks, items, and addons with python
     2. Process both json files to download images and change path to the local download
     3. Add stat objects by processing item and addon descriptions, modify json
     4. Add perk modifiers by processing a seperate modifiers.txt file and modify perk json
2. Make a calculate objectiveTime method that takes in selected perks, items, and addons. (Top to bottom approach to be taken)
     1. Calculate Gen Time
          1. Create a general objectiveTime method that uses a function of $${(objectiveCharges) \over (chargeSpeedPerSecond)}$$
