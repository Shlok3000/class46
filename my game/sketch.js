var ground;
var knight, princess, enimies, dagger;
var knightimage, knightimageattack, princessimage;
var ground, backgroundImage;
var invisibleGround;
var stoneimage;
var treeimage;
var obstacle, obstaclegroup;
var vampireimage, ghostimage, enemygroup;

function preload() {
    knightimage = loadImage("Shlok_s Sprites/Knight.png");
    backgroundImage = loadImage("Shlok_s Sprites/Background.png");
    princessimage = loadImage("Shlok_s Sprites/Princess.png");
    knightimageattack = loadImage("Shlok_s Sprites/Knightattack.png");
    stoneimage = loadImage("Shlok_s Sprites/rock.png");
    treeimage = loadImage("Shlok_s Sprites/tree.png");
    vampireimage = loadImage("Shlok_s Sprites/Vampire.png");
    ghostimage = loadImage("Shlok_s Sprites/Ghost.png");
}

function setup() {
    createCanvas(1200, 800);
    ground = createSprite(600, 100, 1200, 20);
    ground.addImage("ground", backgroundImage);
    ground.x = ground.width / 2;
    ground.velocityX = -(4);
    ground.scale = 5.5;

    knight = createSprite(610, 600, 100, 100);
    knight.addImage(knightimage);

    princess = createSprite(550, 700, 100, 100);
    princess.addImage(princessimage);
    princess.scale = 1.5;

    obstaclegroup = new Group();
    enemygroup = new Group();

    invisibleGround = createSprite(600,750,1200,30);
    invisibleGround.visible = false;
}

function draw() {
    background(0);

    princess.y = knight.y;
   
    if (ground.x < 0) {
        ground.x = 600;
    }

    if(keyDown("space") && knight.y >= 650){
        knight.velocityY = -15;
    }

    if(keyDown("k")){
        knight.addImage(knightimageattack);
        createDagger();
    }

    if(keyWentUp("k")){
        knight.addImage(knightimage);
    }

    knight.velocityY = knight.velocityY + 0.8

    knight.collide(invisibleGround);

    spawnObstacles();
    spawnenimies();

    drawSprites();
}

function spawnObstacles(){
    if(frameCount % 100 === 0){
        obstacle = createSprite(1200, 700, 50, 50);
        var rand = Math.round(random(1,2));
        obstacle.velocityX = -10;
        obstacle.scale = 0.3;
        obstacle.lifetime = 120;

        if(rand === 1){
            obstacle.addImage(stoneimage);
        }
        if(rand === 2){
            obstacle.addImage(treeimage);
        }
        obstaclegroup.add(obstacle);
    }
   
}

function spawnenimies(){
    if(frameCount % 150 === 0){
        enimies = createSprite(1500, 700, 50, 50);
        var rand = Math.round(random(1,2));
        enimies.velocityX = -7;

        if(rand === 1){
            enimies.addImage(vampireimage);
        }
        if(rand === 2){
            enimies.addImage(ghostimage);
        }
        enemygroup.add(enimies);
    }
}

function createDagger(){
    dagger = createSprite(knight.x, knight.y, 50, 10);
    dagger.lifetime = 120;
    dagger.velocityX = 6;
}