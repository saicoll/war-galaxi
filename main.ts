sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
2 2 . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
4 4 4 4 4 2 . . . . . . . . . . 
5 5 5 4 4 4 2 . . . . . . . . . 
4 4 5 5 5 5 5 2 . . . . . . . . 
4 4 4 4 4 4 4 5 f 5 f 2 . . . . 
4 4 4 4 4 4 4 2 f f 5 f 4 f 2 5 
4 4 4 4 4 4 4 e 5 5 f 4 . . . . 
2 2 2 2 2 4 2 2 . . . . . . . . 
e 2 2 2 2 2 e . . . . . . . . . 
e e e e e e . . . . . . . . . . 
e e e e e . . . . . . . . . . . 
e e e . . . . . . . . . . . . . 
e e . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 8 . . . . . . . . . . . . . . . . . . 
. . . . . 8 2 2 . . . . . 9 9 9 . . . . . . . . . 
. . . . . 1 1 1 1 . . . 9 9 9 9 9 . . . . . . . . 
. . . . . 2 2 2 2 2 . 9 9 9 9 9 9 9 . . . . . . . 
. . . 4 4 f 6 6 6 6 6 6 9 9 9 9 9 6 6 . . . . . . 
. 4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . 
4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
. 4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . 
. . . 4 4 f 8 8 8 8 6 6 8 8 8 8 6 6 6 . . . . . . 
. . . . . . 8 8 8 . . . 8 8 8 8 2 . . . . . . . . 
. . . . . 8 8 8 . . . 8 8 8 8 2 . . . . . . . . . 
. . . . . . . . . . . 8 8 8 2 . . . . . . . . . . 
. . . . . . . . . . 8 8 8 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 . . . . . . . 1 . . 
. . . . 9 9 9 . . . . . 3 3 . . 
. . . 9 9 9 9 9 . . . 7 7 7 . . 
. . 6 6 9 9 9 6 6 6 6 6 6 4 5 . 
. 6 6 6 6 6 6 6 6 6 6 6 6 4 4 5 
. . 6 6 4 4 4 4 6 6 6 6 6 4 5 . 
. . . . . 4 4 4 . . . . . . . . 
. . . . . . 4 4 . . . . . . . . 
. . . . . . . 4 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(8, 112))
})
