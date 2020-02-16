# Be the first to 100 gold!
# If you are defeated, you will respawn at 67% gold.

while True:
    #  Find coins and/or attack the enemy.
    # Use flags and your special moves to win!
    while True:
        enemy = hero.findNearestEnemy()
        item = hero.findNearestItem()
        
        if item:
            hero.moveXY(item.pos.x, item.pos.y)
        else:
            hero.moveXY(39, 33)
        