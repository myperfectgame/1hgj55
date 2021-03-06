var PlatformerGame = PlatformerGame || {};

//loading the game assets
PlatformerGame.Preload = function(){};

PlatformerGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    this.game.load.spritesheet('logo-tiles', 'assets/images/logo-tiles.png', 17, 16);
    this.game.load.image('plane', 'assets/images/plane.png');
    this.game.load.spritesheet('gun', 'assets/images/gun.png', 11, 16);
    this.game.load.spritesheet('engines', 'assets/images/engines.png', 11, 16);
    this.game.load.image('bullet', 'assets/images/bullet.png');
    this.game.load.spritesheet('things', 'assets/images/things.png', 16, 16);

    this.game.load.audio('music', 'assets/audio/music.ogg');

  },
  create: function() {
    this.state.start('Logo');
  }
};
