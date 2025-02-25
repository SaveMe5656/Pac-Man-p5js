# p5.js Pac-Man
An attempt at a Pac-Man clone coded with HTML/JavaScript with the help of the [p5.js](https://p5js.org/) library.

# Changelog
## 2025-01-23
### Changes
- Added [YAML changelog](res/logOld.yaml) (now deprecated)
- Overhauled remap system
  - Added mapping presets
  - Under-the-hood changes
- Resized canvas to match original arcade game (may be changed/reverted in the future)
### Plans
- Add maze
  - Add maze sprites
  - Implement player collision
### Notes
I don't know if this is actually pre-alpha 4<br>
it would've helped if I had initially included version numbers when I started this project so I wouldn't have to make a rough estimate on which pre-alpha stage I'm on

## 2025-02-24
### Changes
- Added [`res/` resource folder](res)
- Added [CSV's relating to ghost behavior](res/ghostBehavior) to [`res/`](res)
- Revamped changelog
  - Used dates for each header opposed to versions
  - Switched file type from YAML to MD
  - Rewrote changelog
- Overhauled "option" menu
  - Changed remapping menu to general options
  - Replaced `<button>` tags with `<a>` links as a style choice
- Moved `preload()` function in [`sketch.js`](sketch.js) to be with `setup()` and `draw()`
- Created a [basic library](cookie.js) to save/load cookies
- Added a style selector
- Implemented cookies to save styles
### Plans
- Implement ghost behavior
  - Targeting system
  - Movement
- Add maze
  - Add sprites
  - Implement Collision:
    - Player
    - Ghost
- Implement keymap saving
### Notes
Update 1:
- I probably should've used dates for releases since that makes more sense than making an arbitrary version system.<br>
  oh well; at least it's been done now

Update 2:
- so far I haven't done much other than revamp/update the log, as well as add some references to help myself in the future<br>
  I'm probably still going to do some actual programming, but for now this is what I've got<br>
  also, I do still have to finish [`ghosttargets.csv`](pacmanclone/res/ghosttargets.csv) **:p**<br>

Update 3:
- I just tweaked some things stylisticly, as well as tried to get a game style switcher implemented (I failed **:/**)
  will probably try making style switcher at a later point in time

Update 4:
- by some miracle I somehow found a way to implement the style selector I wanted<br>
  also managed to make the settings save with a little bit of cookie manipulation<br>
  overall I'm rather pleased with the work I was able to do **:D**<br>
  <sup>anyways it's a bit past midnight; I should get some sleep</sup>

## 2025-02-25
### Changes
- Added saving of keymap to cookies
- Detatched remap toast from button object
- Added return function to `saveCookie` in [`cookie.js`](cookie.js) for debugging
### Plans
See [2025-02-24](#plans-1)
### Notes
- it's almost 2 AM; what am I still doing awake **o.0**
