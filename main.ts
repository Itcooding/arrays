player.onChat("5", function () {
    agent.teleportToPlayer()
    for (let index = 0; index < 2; index++) {
        for (let list of materiales) {
            agent.setItem(list, 1, 1)
            agent.place(RIGHT)
            agent.move(FORWARD, 1)
            agent.move(UP, 1)
            player.say(blocks.nameOfBlock(list))
        }
    }
})
player.onChat("1", function () {
    for (let list of materiales) {
        player.say(materiales)
    }
})
player.onChat("10", function () {
    for (let index = 0; index < 4; index++) {
        blocks.place(BLUE_WOOL, pos(2, 2, 0))
        loops.pause(1000)
        blocks.place(AIR, pos(2, 2, 0))
    }
})
player.onChat("2", function () {
    for (let list of materiales) {
        player.say(blocks.nameOfBlock(list))
    }
})
player.onChat("3", function () {
    agent.teleportToPlayer()
    for (let list of materiales) {
        agent.setItem(list, 1, 1)
        agent.place(RIGHT)
        agent.move(FORWARD, 2)
        player.say(blocks.nameOfBlock(list))
    }
})
player.onChat("4", function () {
    agent.teleportToPlayer()
    for (let list of materiales) {
        agent.setItem(materiales._pickRandom(), 1, 1)
        agent.place(RIGHT)
        agent.move(FORWARD, 2)
        player.say(blocks.nameOfBlock(list))
    }
})
player.onChat("9", function () {
    for (let index = 0; index < 4; index++) {
        for (let list of materiales) {
            blocks.place(list, pos(0, 0, 0))
            loops.pause(1000)
        }
    }
})
player.onChat("7", function () {
    agent.teleportToPlayer()
    for (let index = 0; index < 4; index++) {
        for (let list of materiales) {
            agent.setItem(list, 1, 1)
            agent.place(RIGHT)
            agent.move(FORWARD, 1)
            agent.move(UP, 1)
            player.say(blocks.nameOfBlock(list))
        }
        materiales.reverse()
    }
})
player.onChat("6", function () {
    agent.teleportToPlayer()
    for (let index = 0; index < 4; index++) {
        for (let list of materiales) {
            agent.setItem(list, 1, 1)
            agent.place(RIGHT)
            agent.move(FORWARD, 1)
            agent.move(UP, 1)
            player.say(blocks.nameOfBlock(list))
        }
        materiales.reverse()
    }
})
let materiales: number[] = []
materiales = [
WET_SPONGE,
DIAMOND_BLOCK,
PUMPKIN,
CHISELED_STONE_BRICK_MONSTER_EGG,
RED_MUSHROOM_BLOCK,
PILLAR_QUARTZ_BLOCK
]
