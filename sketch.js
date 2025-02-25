let spritesheet;
class spritemap {
  constructor(img, w, h) {
    this.img = loadImage(img);
    this.w = w;

    if (h) this.h = h;
    else this.h = w;
  }
}

let style = "j2me";

function preload() {
  spritesheet = [
    new spritemap("sprites/" + style + "/pac-man.png", 16),
    new spritemap("sprites/" + style + "/ghosts.png", 16),
  ];
}

function sprite(sheet, x, y) {
  return spritesheet[sheet].img.get(
    x * spritesheet[sheet].w,
    y * spritesheet[sheet].h,
    spritesheet[sheet].w,
    spritesheet[sheet].h
  );
}

//--//--//--//--//

class Char {
  constructor(x, y, frameSeed) {
    this.x = x;
    this.y = y;
    this.w = spritesheet[Number(frameSeed[0])].w;
    this.h = spritesheet[Number(frameSeed[0])].h;

    this.dir = {
      x: 0,
      y: 0,
    };
    this.changeDir = function (dir) {
      if (dir >= 0 && dir <= 3 && dir == round(dir)) {
        if (dir / 2 == round(dir / 2)) {
          this.dir = { y: dir - 1, x: 0 };
        } else {
          this.dir = { x: dir - 2, y: 0 };
        }
      } else {
        this.dir = { x: 0, y: 0 };
      }
    };

    this.frames = Number(frameSeed[1]);
    this.frameInc = 0;
    this.frame = 0;

    this.update = function () {
      this.x += this.dir.x;
      this.y += this.dir.y;

      let seedCalc =
        2 *
        ((this.frame + 1) * abs(this.dir.x + this.dir.y) +
          this.frames *
            ((this.dir.x + 2) * Math.abs(this.dir.x) +
              (this.dir.y + 1) * Math.abs(this.dir.y)));
      this.sprite = sprite(
        Number(frameSeed[0]),
        frameSeed[3 + seedCalc],
        frameSeed[4 + seedCalc]
      );

      this.frameInc += 1 / Number(frameSeed[2]);
      if (this.frameInc >= this.frames) this.frameInc = 0;
      this.frame = round(this.frameInc - 0.5);
    };
    this.update();
  }
}

/*
  Character Constructor Seed Guide:
  "020001011202130314041"
   ↑↑↑↑ ↑ ↑ ↑ ↑ ...
   |||| Sprites for movement animation
   |||Idle sprite
   ||Animation speed (speed = 1/X seconds)
   |Amount of animation frames
   Spritesheet number
   
   - Sprite cells are ordered "yx"
   - Animations are ordered based on orientation: UP, LEFT, DOWN, RIGHT
*/

let pac;
let ghost;

//--//--//--//--//

function setup() {
  noLoop();
  createCanvas(224, 288);

  pac = new Char(
    width / 2 - spritesheet[0].w / 2,
    height / 2 - spritesheet[0].h / 2,
    "0440000708070005060500030403000102010"
  );

  ghost = [
    new Char(
      width * (3 / 8) - spritesheet[0].w / 2,
      height * (3 / 8) - spritesheet[0].h / 2,
      "124406070405020300010"
    ),
    new Char(
      width * (5 / 8) - spritesheet[0].w / 2,
      height * (3 / 8) - spritesheet[0].h / 2,
      "124216171415121310111"
    ),
    new Char(
      width * (5 / 8) - spritesheet[0].w / 2,
      height * (5 / 8) - spritesheet[0].h / 2,
      "124626272425222320212"
    ),
    new Char(
      width * (3 / 8) - spritesheet[0].w / 2,
      height * (5 / 8) - spritesheet[0].h / 2,
      "124636373435323330313"
    ),
  ];
  pac.changeDir(-1);
}

function draw() {
  background(0);

  image(pac.sprite, pac.x, pac.y);
  pac.update();

  for (let i = 0; i < 4; i++) {
    image(ghost[i].sprite, ghost[i].x, ghost[i].y);
    ghost[i].update();
    if (round(random(1, 50)) == round(random(1, 50)))
      ghost[i].changeDir(random([-1, 0, 1, 2, 3]));
    if (ghost[i].x > width + ghost[i].w) ghost[i].x = -ghost[i].w;
    if (ghost[i].x < -ghost[i].w) ghost[i].x = width + ghost[i].w;
    if (ghost[i].y > height + ghost[i].h) ghost[i].y = -ghost[i].h;
    if (ghost[i].y < -ghost[i].h) ghost[i].y = height + ghost[i].h;
  }

  remap("function:draw");
}

function keyPressed() {
  remap("function:keyPressed");

  switch (keyCode) {
    case button.up:
      pac.changeDir(0);
      break;
    case button.left:
      pac.changeDir(1);
      break;
    case button.down:
      pac.changeDir(2);
      break;
    case button.right:
      pac.changeDir(3);
      break;
    /* TEMPORARY */
    case button.coin:
      pac.changeDir(-1);
      break;
    case button.start:
      loop();
      break;
  }
}
