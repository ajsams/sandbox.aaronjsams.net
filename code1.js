gdjs.GameCode = {};
gdjs.GameCode.GDCactusObstacleObjects2_1final = [];

gdjs.GameCode.GDDinoObjects2_1final = [];

gdjs.GameCode.GDIslandObstacleObjects2_1final = [];

gdjs.GameCode.GDCactusObstacleObjects1= [];
gdjs.GameCode.GDCactusObstacleObjects2= [];
gdjs.GameCode.GDCactusObstacleObjects3= [];
gdjs.GameCode.GDCactusObstacleObjects4= [];
gdjs.GameCode.GDCactusObstacleObjects5= [];
gdjs.GameCode.GDCactusObstacleObjects6= [];
gdjs.GameCode.GDIslandObstacleObjects1= [];
gdjs.GameCode.GDIslandObstacleObjects2= [];
gdjs.GameCode.GDIslandObstacleObjects3= [];
gdjs.GameCode.GDIslandObstacleObjects4= [];
gdjs.GameCode.GDIslandObstacleObjects5= [];
gdjs.GameCode.GDIslandObstacleObjects6= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDScoreTextObjects5= [];
gdjs.GameCode.GDScoreTextObjects6= [];
gdjs.GameCode.GDTutorialSpriteObjects1= [];
gdjs.GameCode.GDTutorialSpriteObjects2= [];
gdjs.GameCode.GDTutorialSpriteObjects3= [];
gdjs.GameCode.GDTutorialSpriteObjects4= [];
gdjs.GameCode.GDTutorialSpriteObjects5= [];
gdjs.GameCode.GDTutorialSpriteObjects6= [];
gdjs.GameCode.GDBonusObjectObjects1= [];
gdjs.GameCode.GDBonusObjectObjects2= [];
gdjs.GameCode.GDBonusObjectObjects3= [];
gdjs.GameCode.GDBonusObjectObjects4= [];
gdjs.GameCode.GDBonusObjectObjects5= [];
gdjs.GameCode.GDBonusObjectObjects6= [];
gdjs.GameCode.GDBonusParticleObjects1= [];
gdjs.GameCode.GDBonusParticleObjects2= [];
gdjs.GameCode.GDBonusParticleObjects3= [];
gdjs.GameCode.GDBonusParticleObjects4= [];
gdjs.GameCode.GDBonusParticleObjects5= [];
gdjs.GameCode.GDBonusParticleObjects6= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects1= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects2= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects3= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects4= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects5= [];
gdjs.GameCode.GDTutorialTouchscreenJumpObjects6= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects1= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects2= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects3= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects4= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects5= [];
gdjs.GameCode.GDTutorialTouchscreenDuckObjects6= [];
gdjs.GameCode.GDJumpButtonObjects1= [];
gdjs.GameCode.GDJumpButtonObjects2= [];
gdjs.GameCode.GDJumpButtonObjects3= [];
gdjs.GameCode.GDJumpButtonObjects4= [];
gdjs.GameCode.GDJumpButtonObjects5= [];
gdjs.GameCode.GDJumpButtonObjects6= [];
gdjs.GameCode.GDDuckButtonObjects1= [];
gdjs.GameCode.GDDuckButtonObjects2= [];
gdjs.GameCode.GDDuckButtonObjects3= [];
gdjs.GameCode.GDDuckButtonObjects4= [];
gdjs.GameCode.GDDuckButtonObjects5= [];
gdjs.GameCode.GDDuckButtonObjects6= [];
gdjs.GameCode.GDLimitObjects1= [];
gdjs.GameCode.GDLimitObjects2= [];
gdjs.GameCode.GDLimitObjects3= [];
gdjs.GameCode.GDLimitObjects4= [];
gdjs.GameCode.GDLimitObjects5= [];
gdjs.GameCode.GDLimitObjects6= [];
gdjs.GameCode.GDDinoObjects1= [];
gdjs.GameCode.GDDinoObjects2= [];
gdjs.GameCode.GDDinoObjects3= [];
gdjs.GameCode.GDDinoObjects4= [];
gdjs.GameCode.GDDinoObjects5= [];
gdjs.GameCode.GDDinoObjects6= [];
gdjs.GameCode.GDPlatformObjects1= [];
gdjs.GameCode.GDPlatformObjects2= [];
gdjs.GameCode.GDPlatformObjects3= [];
gdjs.GameCode.GDPlatformObjects4= [];
gdjs.GameCode.GDPlatformObjects5= [];
gdjs.GameCode.GDPlatformObjects6= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDBackgroundObjects4= [];
gdjs.GameCode.GDBackgroundObjects5= [];
gdjs.GameCode.GDBackgroundObjects6= [];
gdjs.GameCode.GDDustParticlesObjects1= [];
gdjs.GameCode.GDDustParticlesObjects2= [];
gdjs.GameCode.GDDustParticlesObjects3= [];
gdjs.GameCode.GDDustParticlesObjects4= [];
gdjs.GameCode.GDDustParticlesObjects5= [];
gdjs.GameCode.GDDustParticlesObjects6= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("TutorialSprite"), gdjs.GameCode.GDTutorialSpriteObjects2);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Touch to start running.");
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialSpriteObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Limit"), gdjs.GameCode.GDLimitObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialTouchscreenDuck"), gdjs.GameCode.GDTutorialTouchscreenDuckObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialTouchscreenJump"), gdjs.GameCode.GDTutorialTouchscreenJumpObjects1);
{for(var i = 0, len = gdjs.GameCode.GDLimitObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLimitObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDTutorialTouchscreenJumpObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTouchscreenJumpObjects1[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDTutorialTouchscreenDuckObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTouchscreenDuckObjects1[i].hide();
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDustParticlesObjects2Objects = Hashtable.newFrom({"DustParticles": gdjs.GameCode.GDDustParticlesObjects2});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects3);
gdjs.copyArray(runtimeScene.getObjects("Limit"), gdjs.GameCode.GDLimitObjects3);
gdjs.copyArray(runtimeScene.getObjects("TutorialSprite"), gdjs.GameCode.GDTutorialSpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("TutorialTouchscreenDuck"), gdjs.GameCode.GDTutorialTouchscreenDuckObjects3);
gdjs.copyArray(runtimeScene.getObjects("TutorialTouchscreenJump"), gdjs.GameCode.GDTutorialTouchscreenJumpObjects3);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTouchscreenJumpObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTouchscreenJumpObjects3[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDTutorialTouchscreenDuckObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTouchscreenDuckObjects3[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDLimitObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDLimitObjects3[i].hide();
}
for(var i = 0, len = gdjs.GameCode.GDTutorialSpriteObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialSpriteObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDDinoObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.GameCode.GDDinoObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects3[i].activateBehavior("PlatformerObject", true);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "DesertMusic.mp3", true, 50, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11074844);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects2);
gdjs.GameCode.GDDustParticlesObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDustParticlesObjects2Objects, (( gdjs.GameCode.GDDinoObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects2[0].getPointX("DustProjection")), (( gdjs.GameCode.GDDinoObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects2[0].getPointY("DustProjection")), "");
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects2[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects2[i].setZOrder(0);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Playing");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Preparing";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDDinoObjects4, gdjs.GameCode.GDDinoObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDDinoObjects5[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDinoObjects5[k] = gdjs.GameCode.GDDinoObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDinoObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDDinoObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects5[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10950780);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDinoObjects4 */
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects4);
{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects4[i].setPosition((( gdjs.GameCode.GDDinoObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects4[0].getPointX("DustProjection")),(( gdjs.GameCode.GDDinoObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects4[0].getPointY("DustProjection")));
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects4[i].startEmission();
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDDinoObjects5[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDinoObjects5[k] = gdjs.GameCode.GDDinoObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10952556);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDinoObjects5 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDDinoObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects5[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDDinoObjects4[i].getBehavior("Animation").getAnimationName() == "Duck" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDinoObjects4[k] = gdjs.GameCode.GDDinoObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10953204);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Skid.mp3", false, 30, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDJumpButtonObjects4Objects = Hashtable.newFrom({"JumpButton": gdjs.GameCode.GDJumpButtonObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDuckButtonObjects3Objects = Hashtable.newFrom({"DuckButton": gdjs.GameCode.GDDuckButtonObjects3});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.GameCode.GDJumpButtonObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDJumpButtonObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects4);
{for(var i = 0, len = gdjs.GameCode.GDDinoObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects4[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DuckButton"), gdjs.GameCode.GDDuckButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDuckButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects3);
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects3);
{for(var i = 0, len = gdjs.GameCode.GDDinoObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects3[i].getBehavior("Animation").setAnimationName("Duck");
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects3[i].setX((( gdjs.GameCode.GDDinoObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects3[0].getAABBRight()));
}
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects4);
{for(var i = 0, len = gdjs.GameCode.GDDinoObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects4[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDDinoObjects4[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDinoObjects4[k] = gdjs.GameCode.GDDinoObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10955764);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDinoObjects4 */
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects4);
{for(var i = 0, len = gdjs.GameCode.GDDinoObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects4[i].getBehavior("Animation").setAnimationName("Duck");
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects4[i].setX((( gdjs.GameCode.GDDinoObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects4[0].getAABBRight()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10956772);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDDinoObjects4[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDinoObjects4[k] = gdjs.GameCode.GDDinoObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoObjects4.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDDinoObjects4[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDinoObjects4[k] = gdjs.GameCode.GDDinoObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10950940);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects4);
{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects4[i].stopEmission();
}
}}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoObjects4Objects = Hashtable.newFrom({"Dino": gdjs.GameCode.GDDinoObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBonusObjectObjects4Objects = Hashtable.newFrom({"BonusObject": gdjs.GameCode.GDBonusObjectObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBonusParticleObjects4Objects = Hashtable.newFrom({"BonusParticle": gdjs.GameCode.GDBonusParticleObjects4});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).add(Math.round(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 100));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BonusObject"), gdjs.GameCode.GDBonusObjectObjects4);
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoObjects4Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBonusObjectObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBonusObjectObjects4 */
/* Reuse gdjs.GameCode.GDDinoObjects4 */
gdjs.GameCode.GDBonusParticleObjects4.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).add(500);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBonusParticleObjects4Objects, (( gdjs.GameCode.GDDinoObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects4[0].getCenterXInScene()), (( gdjs.GameCode.GDDinoObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects4[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameCode.GDBonusParticleObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBonusParticleObjects4[i].setAngle(-(90));
}
}{for(var i = 0, len = gdjs.GameCode.GDBonusObjectObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBonusObjectObjects4[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Bonus.mp3", false, 100, 0.5);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BonusParticle"), gdjs.GameCode.GDBonusParticleObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects3);
{for(var i = 0, len = gdjs.GameCode.GDBonusParticleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBonusParticleObjects3[i].setCenterPositionInScene((( gdjs.GameCode.GDDinoObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects3[0].getCenterXInScene()),(( gdjs.GameCode.GDDinoObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDDinoObjects3[0].getCenterYInScene()));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactusObstacleObjects4Objects = Hashtable.newFrom({"CactusObstacle": gdjs.GameCode.GDCactusObstacleObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDIslandObstacleObjects4Objects = Hashtable.newFrom({"IslandObstacle": gdjs.GameCode.GDIslandObstacleObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBonusObjectObjects5Objects = Hashtable.newFrom({"BonusObject": gdjs.GameCode.GDBonusObjectObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBonusObjectObjects4Objects = Hashtable.newFrom({"BonusObject": gdjs.GameCode.GDBonusObjectObjects4});
gdjs.GameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDIslandObstacleObjects4, gdjs.GameCode.GDIslandObstacleObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDIslandObstacleObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDIslandObstacleObjects5[i].getVariableNumber(gdjs.GameCode.GDIslandObstacleObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDIslandObstacleObjects5[k] = gdjs.GameCode.GDIslandObstacleObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDIslandObstacleObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDIslandObstacleObjects5 */
gdjs.GameCode.GDBonusObjectObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBonusObjectObjects5Objects, (( gdjs.GameCode.GDIslandObstacleObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDIslandObstacleObjects5[0].getPointX("RewardUp")), (( gdjs.GameCode.GDIslandObstacleObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDIslandObstacleObjects5[0].getPointY("RewardUp")), "");
}{for(var i = 0, len = gdjs.GameCode.GDBonusObjectObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDBonusObjectObjects5[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), 1);
}
}}

}


{

/* Reuse gdjs.GameCode.GDIslandObstacleObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDIslandObstacleObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDIslandObstacleObjects4[i].getVariableNumber(gdjs.GameCode.GDIslandObstacleObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDIslandObstacleObjects4[k] = gdjs.GameCode.GDIslandObstacleObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDIslandObstacleObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDIslandObstacleObjects4 */
gdjs.GameCode.GDBonusObjectObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBonusObjectObjects4Objects, (( gdjs.GameCode.GDIslandObstacleObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDIslandObstacleObjects4[0].getPointX("RewardDown")), (( gdjs.GameCode.GDIslandObstacleObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDIslandObstacleObjects4[0].getPointY("RewardDown")), "");
}{for(var i = 0, len = gdjs.GameCode.GDBonusObjectObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBonusObjectObjects4[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), 1);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactusObstacleObjects5Objects = Hashtable.newFrom({"CactusObstacle": gdjs.GameCode.GDCactusObstacleObjects5});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects5);
gdjs.GameCode.GDCactusObstacleObjects5.length = 0;

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5));
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactusObstacleObjects5Objects, 100 + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6)) * 70, (( gdjs.GameCode.GDPlatformObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects5[0].getAABBTop()), "");
}{for(var i = 0, len = gdjs.GameCode.GDCactusObstacleObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCactusObstacleObjects5[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), 1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(6).add(1);
}
{ //Subevents: 
gdjs.GameCode.eventsList11(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects4);
gdjs.GameCode.GDCactusObstacleObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactusObstacleObjects4Objects, gdjs.randomInRange(75, 125) + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), (( gdjs.GameCode.GDPlatformObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects4[0].getAABBTop()), "");
}{for(var i = 0, len = gdjs.GameCode.GDCactusObstacleObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCactusObstacleObjects4[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), 1);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects4);
gdjs.GameCode.GDIslandObstacleObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDIslandObstacleObjects4Objects, gdjs.randomInRange(75, 125) + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), (( gdjs.GameCode.GDPlatformObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects4[0].getAABBTop()) - 64, "");
}{for(var i = 0, len = gdjs.GameCode.GDIslandObstacleObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDIslandObstacleObjects4[i].returnVariable(gdjs.GameCode.GDIslandObstacleObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(0, 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDIslandObstacleObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDIslandObstacleObjects4[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), 1);
}
}
{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.randomInRange(1, 1 + Math.round(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 3000, 0, 4))));
}
{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) < 2000;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 8);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) > 0.7;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 30);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "obstacle_spawn") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 2));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}
{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoObjects3Objects = Hashtable.newFrom({"Dino": gdjs.GameCode.GDDinoObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactusObstacleObjects3Objects = Hashtable.newFrom({"CactusObstacle": gdjs.GameCode.GDCactusObstacleObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoObjects3Objects = Hashtable.newFrom({"Dino": gdjs.GameCode.GDDinoObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDIslandObstacleObjects3Objects = Hashtable.newFrom({"IslandObstacle": gdjs.GameCode.GDIslandObstacleObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactusObstacleObjects3ObjectsGDgdjs_9546GameCode_9546GDIslandObstacleObjects3ObjectsGDgdjs_9546GameCode_9546GDBonusObjectObjects3Objects = Hashtable.newFrom({"CactusObstacle": gdjs.GameCode.GDCactusObstacleObjects3, "IslandObstacle": gdjs.GameCode.GDIslandObstacleObjects3, "BonusObject": gdjs.GameCode.GDBonusObjectObjects3});
gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BonusObject"), gdjs.GameCode.GDBonusObjectObjects3);
gdjs.copyArray(gdjs.GameCode.GDCactusObstacleObjects2, gdjs.GameCode.GDCactusObstacleObjects3);

gdjs.copyArray(gdjs.GameCode.GDIslandObstacleObjects2, gdjs.GameCode.GDIslandObstacleObjects3);

{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactusObstacleObjects3ObjectsGDgdjs_9546GameCode_9546GDIslandObstacleObjects3ObjectsGDgdjs_9546GameCode_9546GDBonusObjectObjects3Objects);
}{for(var i = 0, len = gdjs.GameCode.GDCactusObstacleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCactusObstacleObjects3[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDIslandObstacleObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDIslandObstacleObjects3[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDBonusObjectObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBonusObjectObjects3[i].clearForces();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 30, 0.5);
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects2[i].stopEmission();
}
}}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{



}


{

gdjs.GameCode.GDCactusObstacleObjects2.length = 0;

gdjs.GameCode.GDDinoObjects2.length = 0;

gdjs.GameCode.GDIslandObstacleObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDCactusObstacleObjects2_1final.length = 0;
gdjs.GameCode.GDDinoObjects2_1final.length = 0;
gdjs.GameCode.GDIslandObstacleObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CactusObstacle"), gdjs.GameCode.GDCactusObstacleObjects3);
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactusObstacleObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDCactusObstacleObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDCactusObstacleObjects2_1final.indexOf(gdjs.GameCode.GDCactusObstacleObjects3[j]) === -1 )
            gdjs.GameCode.GDCactusObstacleObjects2_1final.push(gdjs.GameCode.GDCactusObstacleObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDDinoObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDDinoObjects2_1final.indexOf(gdjs.GameCode.GDDinoObjects3[j]) === -1 )
            gdjs.GameCode.GDDinoObjects2_1final.push(gdjs.GameCode.GDDinoObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects3);
gdjs.copyArray(runtimeScene.getObjects("IslandObstacle"), gdjs.GameCode.GDIslandObstacleObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDinoObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDIslandObstacleObjects3Objects, false, runtimeScene, true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDDinoObjects3[i].getAABBBottom() > (( gdjs.GameCode.GDIslandObstacleObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDIslandObstacleObjects3[0].getAABBCenterY()) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDDinoObjects3[k] = gdjs.GameCode.GDDinoObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDDinoObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDDinoObjects2_1final.indexOf(gdjs.GameCode.GDDinoObjects3[j]) === -1 )
            gdjs.GameCode.GDDinoObjects2_1final.push(gdjs.GameCode.GDDinoObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDIslandObstacleObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDIslandObstacleObjects2_1final.indexOf(gdjs.GameCode.GDIslandObstacleObjects3[j]) === -1 )
            gdjs.GameCode.GDIslandObstacleObjects2_1final.push(gdjs.GameCode.GDIslandObstacleObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDCactusObstacleObjects2_1final, gdjs.GameCode.GDCactusObstacleObjects2);
gdjs.copyArray(gdjs.GameCode.GDDinoObjects2_1final, gdjs.GameCode.GDDinoObjects2);
gdjs.copyArray(gdjs.GameCode.GDIslandObstacleObjects2_1final, gdjs.GameCode.GDIslandObstacleObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDinoObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDinoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects2[i].getBehavior("PlatformerObject").abortJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDDinoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects2[i].getBehavior("Animation").setAnimationName("Dead");
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Dead");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "obstacle_spawn");
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.GameCode.GDBackgroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects3[i].setXOffset(gdjs.GameCode.GDPlatformObjects3[i].getXOffset() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.GameCode.GDBackgroundObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBackgroundObjects3[i].setXOffset(gdjs.GameCode.GDBackgroundObjects3[i].getXOffset() + ((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) / 500) * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DustParticles"), gdjs.GameCode.GDDustParticlesObjects3);
{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects3[i].setEmitterForceMin(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) / 2);
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects3[i].setEmitterForceMax(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) / 2 + 45);
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects3[i].setFlow((100 / 1000) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.GameCode.GDDustParticlesObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDustParticlesObjects3[i].setAngle((90 / 1000) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}}

}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


{


gdjs.GameCode.eventsList16(runtimeScene);
}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Playing";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].getBehavior("Text").setText("Score   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDDinoObjects1[i].getBehavior("Animation").getAnimationName() == "Dead" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDinoObjects1[k] = gdjs.GameCode.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDDinoObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDinoObjects1[k] = gdjs.GameCode.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDDinoObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", true);
}}

}


};gdjs.GameCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Dead";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList21 = function(runtimeScene) {

{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


{


gdjs.GameCode.eventsList20(runtimeScene);
}


};gdjs.GameCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameCode.GDDinoObjects1);
{for(var i = 0, len = gdjs.GameCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDinoObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList21(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDCactusObstacleObjects1.length = 0;
gdjs.GameCode.GDCactusObstacleObjects2.length = 0;
gdjs.GameCode.GDCactusObstacleObjects3.length = 0;
gdjs.GameCode.GDCactusObstacleObjects4.length = 0;
gdjs.GameCode.GDCactusObstacleObjects5.length = 0;
gdjs.GameCode.GDCactusObstacleObjects6.length = 0;
gdjs.GameCode.GDIslandObstacleObjects1.length = 0;
gdjs.GameCode.GDIslandObstacleObjects2.length = 0;
gdjs.GameCode.GDIslandObstacleObjects3.length = 0;
gdjs.GameCode.GDIslandObstacleObjects4.length = 0;
gdjs.GameCode.GDIslandObstacleObjects5.length = 0;
gdjs.GameCode.GDIslandObstacleObjects6.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects5.length = 0;
gdjs.GameCode.GDScoreTextObjects6.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects1.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects2.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects3.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects4.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects5.length = 0;
gdjs.GameCode.GDTutorialSpriteObjects6.length = 0;
gdjs.GameCode.GDBonusObjectObjects1.length = 0;
gdjs.GameCode.GDBonusObjectObjects2.length = 0;
gdjs.GameCode.GDBonusObjectObjects3.length = 0;
gdjs.GameCode.GDBonusObjectObjects4.length = 0;
gdjs.GameCode.GDBonusObjectObjects5.length = 0;
gdjs.GameCode.GDBonusObjectObjects6.length = 0;
gdjs.GameCode.GDBonusParticleObjects1.length = 0;
gdjs.GameCode.GDBonusParticleObjects2.length = 0;
gdjs.GameCode.GDBonusParticleObjects3.length = 0;
gdjs.GameCode.GDBonusParticleObjects4.length = 0;
gdjs.GameCode.GDBonusParticleObjects5.length = 0;
gdjs.GameCode.GDBonusParticleObjects6.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects1.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects2.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects3.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects4.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects5.length = 0;
gdjs.GameCode.GDTutorialTouchscreenJumpObjects6.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects1.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects2.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects3.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects4.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects5.length = 0;
gdjs.GameCode.GDTutorialTouchscreenDuckObjects6.length = 0;
gdjs.GameCode.GDJumpButtonObjects1.length = 0;
gdjs.GameCode.GDJumpButtonObjects2.length = 0;
gdjs.GameCode.GDJumpButtonObjects3.length = 0;
gdjs.GameCode.GDJumpButtonObjects4.length = 0;
gdjs.GameCode.GDJumpButtonObjects5.length = 0;
gdjs.GameCode.GDJumpButtonObjects6.length = 0;
gdjs.GameCode.GDDuckButtonObjects1.length = 0;
gdjs.GameCode.GDDuckButtonObjects2.length = 0;
gdjs.GameCode.GDDuckButtonObjects3.length = 0;
gdjs.GameCode.GDDuckButtonObjects4.length = 0;
gdjs.GameCode.GDDuckButtonObjects5.length = 0;
gdjs.GameCode.GDDuckButtonObjects6.length = 0;
gdjs.GameCode.GDLimitObjects1.length = 0;
gdjs.GameCode.GDLimitObjects2.length = 0;
gdjs.GameCode.GDLimitObjects3.length = 0;
gdjs.GameCode.GDLimitObjects4.length = 0;
gdjs.GameCode.GDLimitObjects5.length = 0;
gdjs.GameCode.GDLimitObjects6.length = 0;
gdjs.GameCode.GDDinoObjects1.length = 0;
gdjs.GameCode.GDDinoObjects2.length = 0;
gdjs.GameCode.GDDinoObjects3.length = 0;
gdjs.GameCode.GDDinoObjects4.length = 0;
gdjs.GameCode.GDDinoObjects5.length = 0;
gdjs.GameCode.GDDinoObjects6.length = 0;
gdjs.GameCode.GDPlatformObjects1.length = 0;
gdjs.GameCode.GDPlatformObjects2.length = 0;
gdjs.GameCode.GDPlatformObjects3.length = 0;
gdjs.GameCode.GDPlatformObjects4.length = 0;
gdjs.GameCode.GDPlatformObjects5.length = 0;
gdjs.GameCode.GDPlatformObjects6.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects5.length = 0;
gdjs.GameCode.GDBackgroundObjects6.length = 0;
gdjs.GameCode.GDDustParticlesObjects1.length = 0;
gdjs.GameCode.GDDustParticlesObjects2.length = 0;
gdjs.GameCode.GDDustParticlesObjects3.length = 0;
gdjs.GameCode.GDDustParticlesObjects4.length = 0;
gdjs.GameCode.GDDustParticlesObjects5.length = 0;
gdjs.GameCode.GDDustParticlesObjects6.length = 0;

gdjs.GameCode.eventsList22(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
