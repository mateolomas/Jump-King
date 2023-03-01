let levels = []

function setupLevels() {
    let myCoin = new Coin(300, 300, "reward");
    myCoin.show();
    let tempLevel = new Level();
    //tempLevel.lines.push(new Line(20, 0, 20, 460));
    tempLevel.lines.push(new Line(0, 900, 1200, 900));
    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(1200,0,1200, 900));
    tempLevel.lines.push(new Line(0, 700, 200, 700));
    tempLevel.lines.push(new Line(200,700,200,900));

    tempLevel.lines.push(new Line(650,900,650,765));
    tempLevel.lines.push(new Line(650,765,1200,765));

    tempLevel.lines.push(new Line(230,570,335,570));
    tempLevel.lines.push(new Line(335,570,335,510));
    tempLevel.lines.push(new Line(230,570,230,510));
    tempLevel.lines.push(new Line(230,510,335,510));

    tempLevel.lines.push(new Line(0,420,90,420));
    tempLevel.lines.push(new Line(0,420,0,370));
    tempLevel.lines.push(new Line(90,420,90,370));
    tempLevel.lines.push(new Line(0,370,90,370));

    tempLevel.lines.push(new Line(160,253,240,253));
    tempLevel.lines.push(new Line(160,253,160,200));
    tempLevel.lines.push(new Line(240,253,240,200));
    tempLevel.lines.push(new Line(160,200,240,200));
    
    tempLevel.lines.push(new Line(375,85,825,85));
    tempLevel.lines.push(new Line(375,85,375,30));
    tempLevel.lines.push(new Line(825,85,825,30));
    tempLevel.lines.push(new Line(375,30,825,30));
    
    tempLevel.lines.push(new Line(1050,660,1150,660));
    tempLevel.lines.push(new Line(1050,660,1050,615));
    tempLevel.lines.push(new Line(1150,660,1150,615));
    tempLevel.lines.push(new Line(1050,615,1150,615));
    
    tempLevel.lines.push(new Line(880,500,985,500));
    tempLevel.lines.push(new Line(880,500,880,455));
    tempLevel.lines.push(new Line(985,500,985,455));
    tempLevel.lines.push(new Line(880,455,985,455));
    
    tempLevel.lines.push(new Line(1050,327,1150,327));
    tempLevel.lines.push(new Line(1050,327,1050,283));
    tempLevel.lines.push(new Line(1150,327,1150,283));
    tempLevel.lines.push(new Line(1050,283,1150,283));
    
    tempLevel.lines.push(new Line(375,80,835,80));
    tempLevel.lines.push(new Line(375,80,375,30));
    tempLevel.lines.push(new Line(835,80,835,30));
    tempLevel.lines.push(new Line(375,30,835,30));

    tempLevel.lines.push(new Line(160,253,240,253));

  
    tempLevel.lines.push(new Line(487,85,487,30));
    tempLevel.lines.push(new Line(599,85,599,30));
    tempLevel.lines.push(new Line(711,85,711,30));
    






    //nivel 2    
    levels.push(tempLevel);

    tempLevel = new Level();

    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(1200,0,1200, 900));

    tempLevel.lines.push(new Line(0,900,120,900));
    tempLevel.lines.push(new Line(0,900,0,800));
    tempLevel.lines.push(new Line(120,900,120,800));
    tempLevel.lines.push(new Line(0,800,120,800));
    tempLevel.lines.push(new Line(30,900,30,800));
    tempLevel.lines.push(new Line(60,900,60,800));
    tempLevel.lines.push(new Line(90,900,90,800));
    
    tempLevel.lines.push(new Line(50,350,170,350));
    tempLevel.lines.push(new Line(50,350,50,280));
    tempLevel.lines.push(new Line(170,350,170,280));
    tempLevel.lines.push(new Line(50,280,170,280));
    tempLevel.lines.push(new Line(80,350,80,280));
    tempLevel.lines.push(new Line(110,350,110,280));
    tempLevel.lines.push(new Line(140,350,140,280));
    
    tempLevel.lines.push(new Line(450,670,615,670));
    tempLevel.lines.push(new Line(450,670,450,570));
    tempLevel.lines.push(new Line(615,670,615,570));
    tempLevel.lines.push(new Line(450,570,615,570));
    tempLevel.lines.push(new Line(491,670,491,570));
    tempLevel.lines.push(new Line(532,670,532,570));
    tempLevel.lines.push(new Line(573,670,573,570));
    
    tempLevel.lines.push(new Line(510,190,780,190));
    tempLevel.lines.push(new Line(510,190,510,85));
    tempLevel.lines.push(new Line(780,190,780,85));
    tempLevel.lines.push(new Line(510,85,780,85));
    tempLevel.lines.push(new Line(577,190,577,85));
    tempLevel.lines.push(new Line(644,190,644,85));
    tempLevel.lines.push(new Line(711,190,711,85));
    
    tempLevel.lines.push(new Line(1030,900,1200,900));
    tempLevel.lines.push(new Line(1030,850,1200,850));
    tempLevel.lines.push(new Line(1030,800,1200,800));
    tempLevel.lines.push(new Line(1030,750,1200,750));
    tempLevel.lines.push(new Line(1030,700,1200,700));
    tempLevel.lines.push(new Line(1030,650,1200,650));
    tempLevel.lines.push(new Line(1030,600,1200,600));
    tempLevel.lines.push(new Line(1030,550,1200,550));
    tempLevel.lines.push(new Line(1030,500,1200,500));

    tempLevel.lines.push(new Line(1030,900,1030,410));
    tempLevel.lines.push(new Line(1200,900,1200,410));
    tempLevel.lines.push(new Line(1030,410,1200,410));
    tempLevel.lines.push(new Line(1072,900,1072,410));
//tempLevel.lines.push(new Line(1114,900,1114,410));
//tempLevel.lines.push(new Line(1156,900,1156,410));


    //nivel 3
    levels.push(tempLevel);
    tempLevel = new Level();

    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(1200,0,1200, 900));

    tempLevel.lines.push(new Line(15,880,200,880));
    tempLevel.lines.push(new Line(15,880,15,840));
    tempLevel.lines.push(new Line(200,880,200,840));
    tempLevel.lines.push(new Line(15,840,200,840));
    tempLevel.lines.push(new Line(61,880,61,840));
    tempLevel.lines.push(new Line(107,880,107,840));
    tempLevel.lines.push(new Line(153,880,153,840));
    
    tempLevel.lines.push(new Line(265,645,380,645));
    tempLevel.lines.push(new Line(265,645,265,270));
    tempLevel.lines.push(new Line(380,645,380,270));
    tempLevel.lines.push(new Line(265,270,380,270));
    tempLevel.lines.push(new Line(293,645,293,270));
    tempLevel.lines.push(new Line(321,645,321,270));
    tempLevel.lines.push(new Line(349,645,349,270));
    
    tempLevel.lines.push(new Line(205,550,270,550));
    tempLevel.lines.push(new Line(205,550,205,490));
    tempLevel.lines.push(new Line(270,550,270,490));
    tempLevel.lines.push(new Line(205,490,270,490));
    tempLevel.lines.push(new Line(221,550,221,490));
    tempLevel.lines.push(new Line(237,550,237,490));
    tempLevel.lines.push(new Line(253,550,253,490));
    
    tempLevel.lines.push(new Line(265,275,310,275));
    tempLevel.lines.push(new Line(265,275,265,0));
    tempLevel.lines.push(new Line(310,275,310,0));
    tempLevel.lines.push(new Line(265,0,310,0));
    tempLevel.lines.push(new Line(276,275,276,0));
    tempLevel.lines.push(new Line(287,275,287,0));
    tempLevel.lines.push(new Line(298,275,298,0));
    
    tempLevel.lines.push(new Line(0,195,85,195));
    tempLevel.lines.push(new Line(0,195,0,135));
    tempLevel.lines.push(new Line(85,195,85,135));
    tempLevel.lines.push(new Line(0,135,85,135));
    tempLevel.lines.push(new Line(21,195,21,135));
    tempLevel.lines.push(new Line(42,195,42,135));
    tempLevel.lines.push(new Line(63,195,63,135));

    tempLevel.lines.push(new Line(520,555,605,555));
    tempLevel.lines.push(new Line(520,555,520,380));
    tempLevel.lines.push(new Line(605,555,605,380));
    tempLevel.lines.push(new Line(520,380,605,380));
    tempLevel.lines.push(new Line(541,555,541,380));
    tempLevel.lines.push(new Line(562,555,562,380));
    tempLevel.lines.push(new Line(583,555,583,380));

    tempLevel.lines.push(new Line(780,555,870,555));
    tempLevel.lines.push(new Line(780,555,780,380));
    tempLevel.lines.push(new Line(870,555,870,380));
    tempLevel.lines.push(new Line(780,380,870,380));
    tempLevel.lines.push(new Line(802,555,802,380));
    tempLevel.lines.push(new Line(824,555,824,380));
    tempLevel.lines.push(new Line(846,555,846,380));

    tempLevel.lines.push(new Line(1100,750,1200,750));
tempLevel.lines.push(new Line(1100,750,1100,575));
tempLevel.lines.push(new Line(1200,750,1200,575));
tempLevel.lines.push(new Line(1100,575,1200,575));
tempLevel.lines.push(new Line(1125,750,1125,575));
tempLevel.lines.push(new Line(1150,750,1150,575));
tempLevel.lines.push(new Line(1175,750,1175,575));

    tempLevel.lines.push(new Line(780,900,1200,900));
    tempLevel.lines.push(new Line(780,900,780,840));
    tempLevel.lines.push(new Line(1200,900,1200,840));
    tempLevel.lines.push(new Line(780,840,1200,840));
    tempLevel.lines.push(new Line(885,900,885,840));
    tempLevel.lines.push(new Line(990,900,990,840));
    tempLevel.lines.push(new Line(1095,900,1095,840));


    
    levels.push(tempLevel);

        //Nivel 4
    
        tempLevel = new Level();
        tempLevel.lines.push(new Line(0, 900, 0, 0));
        tempLevel.lines.push(new Line(1200,0,1200,900));
    
        tempLevel.lines.push(new Line(0,865,95,865));
        tempLevel.lines.push(new Line(0,865,0,640));
        tempLevel.lines.push(new Line(95,865,95,640));
        tempLevel.lines.push(new Line(0,640,95,640));
        tempLevel.lines.push(new Line(23,865,23,640));
        tempLevel.lines.push(new Line(46,865,46,640));
        tempLevel.lines.push(new Line(69,865,69,640));
        
        tempLevel.lines.push(new Line(270,530,415,530));
        tempLevel.lines.push(new Line(270,530,270,440));
        tempLevel.lines.push(new Line(415,530,415,440));
        tempLevel.lines.push(new Line(270,440,415,440));
        tempLevel.lines.push(new Line(306,530,306,440));
        tempLevel.lines.push(new Line(342,530,342,440));
        tempLevel.lines.push(new Line(378,530,378,440));
        
        tempLevel.lines.push(new Line(600,250,750,250));
        tempLevel.lines.push(new Line(600,250,600,170));
        tempLevel.lines.push(new Line(750,250,750,170));
        tempLevel.lines.push(new Line(600,170,750,170));
        tempLevel.lines.push(new Line(637,250,637,170));
        tempLevel.lines.push(new Line(674,250,674,170));
        tempLevel.lines.push(new Line(711,250,711,170));
        
     
        
        tempLevel.lines.push(new Line(705,880,830,880));
        tempLevel.lines.push(new Line(705,880,705,810));
        tempLevel.lines.push(new Line(830,880,830,810));
        tempLevel.lines.push(new Line(705,810,830,810));
        tempLevel.lines.push(new Line(736,880,736,810));
        tempLevel.lines.push(new Line(767,880,767,810));
        tempLevel.lines.push(new Line(798,880,798,810));
        
        tempLevel.lines.push(new Line(1030,890,1200,890));
        tempLevel.lines.push(new Line(1030,890,1030,770));
        tempLevel.lines.push(new Line(1200,890,1200,770));
        tempLevel.lines.push(new Line(1030,770,1200,770));
        tempLevel.lines.push(new Line(1072,890,1072,770));
        tempLevel.lines.push(new Line(1114,890,1114,770));
        tempLevel.lines.push(new Line(1156,890,1156,770));
        
        tempLevel.lines.push(new Line(1100,470,1200,470));
        tempLevel.lines.push(new Line(1100,470,1100,325));
        tempLevel.lines.push(new Line(1200,470,1200,325));
        tempLevel.lines.push(new Line(1100,325,1200,325));
        tempLevel.lines.push(new Line(1125,470,1125,325));
        tempLevel.lines.push(new Line(1150,470,1150,325));
        tempLevel.lines.push(new Line(1175,470,1175,325));
        
    
        levels.push(tempLevel);




    //Nivel 5

    tempLevel = new Level();
    tempLevel.lines.push(new Line(0,900,40,900));
tempLevel.lines.push(new Line(0,900,0,0));
tempLevel.lines.push(new Line(40,900,40,0));
tempLevel.lines.push(new Line(0,0,40,0));
tempLevel.lines.push(new Line(10,900,10,0));
tempLevel.lines.push(new Line(20,900,20,0));
tempLevel.lines.push(new Line(30,900,30,0));

tempLevel.lines.push(new Line(40,300,270,300));
tempLevel.lines.push(new Line(40,300,40,230));
tempLevel.lines.push(new Line(270,300,270,230));
tempLevel.lines.push(new Line(40,230,270,230));
tempLevel.lines.push(new Line(97,300,97,230));
tempLevel.lines.push(new Line(154,300,154,230));
tempLevel.lines.push(new Line(211,300,211,230));

tempLevel.lines.push(new Line(430,660,600,660));
tempLevel.lines.push(new Line(430,660,430,610));
tempLevel.lines.push(new Line(600,660,600,610));
tempLevel.lines.push(new Line(430,610,600,610));
tempLevel.lines.push(new Line(472,660,472,610));
tempLevel.lines.push(new Line(514,660,514,610));
tempLevel.lines.push(new Line(556,660,556,610));

tempLevel.lines.push(new Line(850,295,1165,295));
tempLevel.lines.push(new Line(850,295,850,240));
tempLevel.lines.push(new Line(1165,295,1165,240));
tempLevel.lines.push(new Line(850,240,1165,240));
tempLevel.lines.push(new Line(928,295,928,240));
tempLevel.lines.push(new Line(1006,295,1006,240));
tempLevel.lines.push(new Line(1084,295,1084,240));

tempLevel.lines.push(new Line(985,897,1160,897));
tempLevel.lines.push(new Line(985,897,985,825));
tempLevel.lines.push(new Line(1160,897,1160,825));
tempLevel.lines.push(new Line(985,825,1160,825));
tempLevel.lines.push(new Line(1028,897,1028,825));
tempLevel.lines.push(new Line(1071,897,1071,825));
tempLevel.lines.push(new Line(1114,897,1114,825));

tempLevel.lines.push(new Line(1160,897,1200,897));
tempLevel.lines.push(new Line(1160,897,1160,0));
tempLevel.lines.push(new Line(1200,897,1200,0));
tempLevel.lines.push(new Line(1160,0,1200,0));
tempLevel.lines.push(new Line(1170,897,1170,0));
tempLevel.lines.push(new Line(1180,897,1180,0));
tempLevel.lines.push(new Line(1190,897,1190,0));


levels.push(tempLevel);

    //Nivel 6
    
    tempLevel = new Level();
    tempLevel.lines.push(new Line(865, 695, 1200, 695));   
    tempLevel.lines.push(new Line(850, 695, 865, 825));
    tempLevel.lines.push(new Line(865, 695, 865, 850));
    tempLevel.lines.push(new Line(865, 695, 1200, 850));
    tempLevel.lines.push(new Line(850, 695, 805, 715));
    
    //tempLevel.lines.push(new Line(835, 696, 835, 790));
    //tempLevel.lines.push(new Line(830, 697, 830, 785));
    //tempLevel.lines.push(new Line(905, 845, 1200, 845));
    tempLevel.lines.push(new Line(0, 635, 145,635));
    tempLevel.lines.push(new Line(0, 620, 175,620));
    tempLevel.lines.push(new Line(0, 590, 195,590));
    tempLevel.lines.push(new Line(195, 575, 0,460));
   // tempLevel.lines.push(new Line(0, 560, 175,560));
   // tempLevel.lines.push(new Line(0, 540, 150,540));
    tempLevel.lines.push(new Line(0, 580, 200,580));
    tempLevel.lines.push(new Line(0, 520, 110,520));
    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(1200,0,1200,900));
   // tempLevel.lines.push(new Line(0, 500, 85,500));
   // tempLevel.lines.push(new Line(0, 485, 55,485));
   // tempLevel.lines.push(new Line(0, 475, 30,475));
    tempLevel.lines.push(new Line(440,235,475,235));
    tempLevel.lines.push(new Line(440,235,400,270));
    tempLevel.lines.push(new Line(400,270,510,270));
    tempLevel.lines.push(new Line(510,270,475,235));
   ////////////medio
    tempLevel.lines.push(new Line(580,350,615,315));
    tempLevel.lines.push(new Line(615,315,655,315));
    tempLevel.lines.push(new Line(685,350,655,315));
    tempLevel.lines.push(new Line(685,350,580,350));
   ////////
    tempLevel.lines.push(new Line(780,270,820,235));
    tempLevel.lines.push(new Line(860,235,890,270));
    tempLevel.lines.push(new Line(890,270,780,270));
    tempLevel.lines.push(new Line(820,235,860,235));
    // tempLevel.lines.push(new Line(120,460,320, 260));
    // tempLevel.lines.push(new Line(680,820,1080,420));
    tempLevel.lines.push(new Line(290,740,470,740));
    tempLevel.lines.push(new Line(470,740,360,795));
    tempLevel.lines.push(new Line(360,795,290,740));

    levels.push(tempLevel);
    
    
    
    
    //Nivel 7
    
    tempLevel = new Level();
    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(1200,0,1200, 900));


    tempLevel.lines.push(new Line(1012,830,1012,855));
    tempLevel.lines.push(new Line(1012,830 , 1200, 830));
    tempLevel.lines.push(new Line(1012,855, 1060,900));
    
    
    tempLevel.lines.push(new Line(485,715, 715,715));
    tempLevel.lines.push(new Line(715,715, 565,780));
    tempLevel.lines.push(new Line(565,780, 485,715));

    tempLevel.lines.push(new Line(25, 455, 215, 455));
    tempLevel.lines.push(new Line(130,585,215,455));
    tempLevel.lines.push(new Line(130,585,25,455));

    /// medio 
    tempLevel.lines.push(new Line(555,235,555,555));
    tempLevel.lines.push(new Line(555,555,655,495));
    tempLevel.lines.push(new Line(665,495,705,235));
    tempLevel.lines.push(new Line(705,235,555,235));
    //
    tempLevel.lines.push(new Line(880,270,1075,270));
    tempLevel.lines.push(new Line(1075,270,1015,375));
    tempLevel.lines.push(new Line(1015,375,880,270));
    levels.push(tempLevel);
    

    //Nivel 8
    tempLevel = new Level();
    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(1200,0,1200,900));
   
    tempLevel.lines.push(new Line(245,755, 280,840));
    tempLevel.lines.push(new Line(280,840, 330,840));
    tempLevel.lines.push(new Line(330,840, 360,755));
    tempLevel.lines.push(new Line(360,755, 245,755));
    
    /////
    
    tempLevel.lines.push(new Line(35,500, 50,550));
    tempLevel.lines.push(new Line(50,550, 110,550));
    tempLevel.lines.push(new Line(110,550, 130,500));
    tempLevel.lines.push(new Line(35,500, 130,500));

    /////

    tempLevel.lines.push(new Line(290,250,385,250));
    tempLevel.lines.push(new Line(385,250,360,325));
    tempLevel.lines.push(new Line(360,325,290,325));
    tempLevel.lines.push(new Line(290,250,360,325));
   
    ///
    tempLevel.lines.push(new Line(500,495,480,545));
    tempLevel.lines.push(new Line(480,545,595,535));
    tempLevel.lines.push(new Line(595,535,575,495));
    tempLevel.lines.push(new Line(500,495,575,495));
    ////roca grande

    tempLevel.lines.push(new Line(675,900,1200,900));
    tempLevel.lines.push(new Line(675,900,730,590));
    tempLevel.lines.push(new Line(730,590,925,590));
    tempLevel.lines.push(new Line(925,590,925,320));
    //tempLevel.lines.push(new Line(820,565,845,590));
    //tempLevel.lines.push(new Line(845,590,910,555));

    //tempLevel.lines.push(new Line(910,555,920,495));
    //tempLevel.lines.push(new Line(920,495,1000,450));
    tempLevel.lines.push(new Line(1000,450,925,405));
    tempLevel.lines.push(new Line(925,405,925,320));
    tempLevel.lines.push(new Line(925,320,1070,300));
    tempLevel.lines.push(new Line(1070,300,1100,300));
    tempLevel.lines.push(new Line(1100,300,1185,300));
    
    //
    tempLevel.lines.push(new Line(600,170,580,225)); 
    tempLevel.lines.push(new Line(580,225,710,225)); 
    tempLevel.lines.push(new Line(710,225,690,155)); 
    tempLevel.lines.push(new Line(690,155,635,155)); 
    tempLevel.lines.push(new Line(635,155,600,170)); 
    
    levels.push(tempLevel);
    

    
    
    //Nivel 9

    //Nivel 9

    tempLevel = new Level();
    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(1200,0,1200, 900));
  
    tempLevel.lines.push(new Line(252,676,392,673));
    tempLevel.lines.push(new Line(392,673,415,785));
    tempLevel.lines.push(new Line(415,785,251,781));
    tempLevel.lines.push(new Line(251,781,253,676));


    tempLevel.lines.push(new Line(51,366,206,366));
    tempLevel.lines.push(new Line(206,366,210,395));
    tempLevel.lines.push(new Line(210,395,225,395));
    tempLevel.lines.push(new Line(225,395,219,452));
    tempLevel.lines.push(new Line(219,452,29,456));
    tempLevel.lines.push(new Line(29,456,27,404));
    tempLevel.lines.push(new Line(27,404,48,395));
    tempLevel.lines.push(new Line(48,395,51,366));


    tempLevel.lines.push(new Line(517,99,680,99));
    tempLevel.lines.push(new Line(680,99,726,137));
    tempLevel.lines.push(new Line(726,137,697,174));
    tempLevel.lines.push(new Line(697,174,563,223));
    tempLevel.lines.push(new Line(563,223,517,99));


    tempLevel.lines.push(new Line(1137,362,1002,362));
    tempLevel.lines.push(new Line(1002,362,988,454));
    tempLevel.lines.push(new Line(988,454,1144,461));
    tempLevel.lines.push(new Line(1144,461,1136,349));
//////
//
    tempLevel.lines.push(new Line(774,688,931,688));
    tempLevel.lines.push(new Line(931,688,924,723));
    tempLevel.lines.push(new Line(924,723,949,723));
    tempLevel.lines.push(new Line(942,778,753,776));
    tempLevel.lines.push(new Line(753,776,775,732));
    tempLevel.lines.push(new Line(775,732,774,688));

    levels.push(tempLevel);


   // NIvel 10
   tempLevel = new Level();
   tempLevel.lines.push(new Line(0, 900, 0, 0));
   tempLevel.lines.push(new Line(1200,0,1200,900));

   tempLevel.lines.push(new Line(1060,900, 1045, 770));
   tempLevel.lines.push(new Line(1045, 770, 1130, 770));
   tempLevel.lines.push(new Line( 1130, 770, 1170, 900));
   tempLevel.lines.push(new Line(1170, 900,1060,900));
   tempLevel.lines.push(new Line(660, 535, 740, 650));
   tempLevel.lines.push(new Line(740, 650, 835, 535));
   tempLevel.lines.push(new Line(835, 535, 660, 535));
   tempLevel.lines.push(new Line(0, 455, 370, 410));
   tempLevel.lines.push(new Line(370, 410, 520, 510));
   tempLevel.lines.push(new Line(520, 510, 525, 360));
   tempLevel.lines.push(new Line( 525, 360, 0, 400));
   tempLevel.lines.push(new Line(1200, 275, 1100, 330));
   tempLevel.lines.push(new Line(1100, 330, 1005, 185));
   tempLevel.lines.push(new Line(1005, 185, 1110, 185));
   tempLevel.lines.push(new Line(1110, 185, 1200, 245));
   
  levels.push(tempLevel);
  tempLevel = new Level();

  ////Nivel 11
  tempLevel.lines.push(new Line(0, 900, 0, 0));
  tempLevel.lines.push(new Line(1200,0,1200,900));

  tempLevel.lines.push(new Line(0, 900, 315, 900));
    tempLevel.lines.push(new Line(315, 900, 300, 825));
    tempLevel.lines.push(new Line(300, 825, 0, 825));
    tempLevel.lines.push(new Line(355, 420, 915, 420));
    tempLevel.lines.push(new Line(915, 420, 915, 530));
    tempLevel.lines.push(new Line(915, 530, 355, 530));
    tempLevel.lines.push(new Line(355, 530, 355, 420));
    tempLevel.lines.push(new Line(985, 85, 1135, 230));
    tempLevel.lines.push(new Line( 1135, 230, 1200, 85));
    tempLevel.lines.push(new Line( 1200, 85, 985, 85));
    tempLevel.lines.push(new Line( 133, 633, 181, 633));
  
    levels.push(tempLevel);
    tempLevel = new Level();

///// NIVEL 12///
 //tempLevel.lines.push(new Line(0, 900, 1200, 900));
 tempLevel.lines.push(new Line(0, 900, 0, 0));
 tempLevel.lines.push(new Line(1200,0,1200, 900));

 tempLevel.lines.push(new Line(291,723,351,723));
 tempLevel.lines.push(new Line(291,723,262,778));
 tempLevel.lines.push(new Line(262,778,290,834));
 tempLevel.lines.push(new Line(290,834,352,834));
 //tempLevel.lines.push(new Line(580,778,355,831));
 tempLevel.lines.push(new Line(355,831,289,835));
 tempLevel.lines.push(new Line(289,835,262,778));
 tempLevel.lines.push(new Line(353,832,378,881));
 tempLevel.lines.push(new Line(352,834,380,778));
 tempLevel.lines.push(new Line(351,723,380,778));

 tempLevel.lines.push(new Line(0,540,70,540));
 tempLevel.lines.push(new Line(70,540,106,603));
 tempLevel.lines.push(new Line(106,603,0,663,));


 tempLevel.lines.push(new Line(273,125,333,125));
 tempLevel.lines.push(new Line(333,125,364,175));
 tempLevel.lines.push(new Line(364,175,332,229));
 tempLevel.lines.push(new Line(332,229,272,229));
 tempLevel.lines.push(new Line(272,229,242,174));
 tempLevel.lines.push(new Line(242,174,273,125));
 tempLevel.lines.push(new Line(330,227,359,275));
////

 tempLevel.lines.push(new Line(121,334,222,334));
 tempLevel.lines.push(new Line(580,334,692,334));
 tempLevel.lines.push(new Line(892,334,979,334));


//// Quimica//////////


 tempLevel.lines.push(new Line(518,401,470,428));
 tempLevel.lines.push(new Line(470,428,468,491));
 tempLevel.lines.push(new Line(468,491,467,492));
 tempLevel.lines.push(new Line(467,492,518,517));
 tempLevel.lines.push(new Line(518,517,571,488));
 tempLevel.lines.push(new Line(571,488,570,426));
 tempLevel.lines.push(new Line(570,426,518,401));
 ////
 tempLevel.lines.push(new Line(570,488,614,519));
 tempLevel.lines.push(new Line(614,519,661,486));
 tempLevel.lines.push(new Line(614,519,614,578));
 ///
 tempLevel.lines.push(new Line(570,488,614,519));
 tempLevel.lines.push(new Line(614,519,661,486));
 tempLevel.lines.push(new Line(614,519,614,578));
 tempLevel.lines.push(new Line(614,578,564,607));
 
 tempLevel.lines.push(new Line(564,607,564,666));
 tempLevel.lines.push(new Line(565,666,615,691));
 tempLevel.lines.push(new Line(615,691,665,664));
 tempLevel.lines.push(new Line(665,664,666,604));
 
 tempLevel.lines.push(new Line(666,604,614,578));
 tempLevel.lines.push(new Line(658,488,660,430));
 tempLevel.lines.push(new Line(660,430,709,402));
 tempLevel.lines.push(new Line(709,402,760,428));
 
 tempLevel.lines.push(new Line(760,428,758,487));
 tempLevel.lines.push(new Line(758,487,712,515));
 tempLevel.lines.push(new Line(712,515,658,488));

 /////
 tempLevel.lines.push(new Line(822,177,822,131));
 tempLevel.lines.push(new Line(822,131,864,107));
 tempLevel.lines.push(new Line(864,107,906,179));
 tempLevel.lines.push(new Line(906,179,866,205));
 tempLevel.lines.push(new Line(866,205,822,177));
///////////////
 tempLevel.lines.push(new Line(908,711,880,759));
 tempLevel.lines.push(new Line(880,759,911,813));
 tempLevel.lines.push(new Line(911,813,973,813));
 tempLevel.lines.push(new Line(973,813,1001,761));
 tempLevel.lines.push(new Line(1001,761,975,711));
 tempLevel.lines.push(new Line(975,711,908,711));
 tempLevel.lines.push(new Line(910,811,884,860));


 ////
 tempLevel.lines.push(new Line(1185,274,1114,274));
 tempLevel.lines.push(new Line(1114,274,1079,337));
 tempLevel.lines.push(new Line(1079,337,1116,399));
 tempLevel.lines.push(new Line(1116,399,1079,458));
 tempLevel.lines.push(new Line(1079,458,1113,524));
 tempLevel.lines.push(new Line(1113,524,1188,524));
  

  levels.push(tempLevel);
  tempLevel = new Level();

  // nivel 13    tempLevel.lines.push(new Line(1200,0,1200, 900));
  //tempLevel.lines.push(new Line(20, 0, 20, 460));
  //tempLevel.lines.push(new Line(0, 900, 1200, 900));
  tempLevel.lines.push(new Line(0, 900, 0, 0));
  tempLevel.lines.push(new Line(1200,0,1200, 900));
  

  tempLevel.lines.push(new Line(738,873,915,873));
  tempLevel.lines.push(new Line(915,873,1023,762));
  tempLevel.lines.push(new Line(509,703,649,703));
  tempLevel.lines.push(new Line(578,703,577,550));
  tempLevel.lines.push(new Line(492,550,663,550));
  //////
  tempLevel.lines.push(new Line(36,497,90,179));
  tempLevel.lines.push(new Line(90,179,146,179));
  tempLevel.lines.push(new Line(146,185,146,155));
  tempLevel.lines.push(new Line(146,155,202,155)); 
  tempLevel.lines.push(new Line(202,155,202,230));
  tempLevel.lines.push(new Line(202,230,275,230));
  tempLevel.lines.push(new Line(275,230,329,504));
  tempLevel.lines.push(new Line(329,504,36,497)); 
  /////////
  tempLevel.lines.push(new Line(955,301,1027,301));
  tempLevel.lines.push(new Line(1027,301,1090,594));
  tempLevel.lines.push(new Line(1090,594,897,594));
  tempLevel.lines.push(new Line(897,594,955,301)); 


  levels.push(tempLevel);
  tempLevel = new Level();
  ///// NIVEL 14tempLevel.lines.push(new Line(518,401,470,428));
    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(1200,0,1200, 900));
  
    tempLevel.lines.push(new Line(438,825,558,825));
    tempLevel.lines.push(new Line(689,643,770,643));
    tempLevel.lines.push(new Line(770,643,766,747));
    tempLevel.lines.push(new Line(766,747,685,747));
    tempLevel.lines.push(new Line(685,747,689,643));


    
    tempLevel.lines.push(new Line(334,276,457,276));
    tempLevel.lines.push(new Line(457,276,457,412));
    tempLevel.lines.push(new Line(457,412,330,412));
    tempLevel.lines.push(new Line(330,412,334,276));
    tempLevel.lines.push(new Line(290,53,330,53));
    tempLevel.lines.push(new Line(330,53,370,216));
    tempLevel.lines.push(new Line(370,216,258,216));
    tempLevel.lines.push(new Line(258,216,290,53));


    tempLevel.lines.push(new Line(108,185,164,185));
    tempLevel.lines.push(new Line(164,185,154,315));
    tempLevel.lines.push(new Line(154,315,109,315));
    tempLevel.lines.push(new Line(109,315,108,185));
    tempLevel.lines.push(new Line(163,315,108,185));
    tempLevel.lines.push(new Line(217,52,216,362));
    tempLevel.lines.push(new Line(64,365,330,365));
    tempLevel.lines.push(new Line(224,87,312,87));
//////
//
    tempLevel.lines.push(new Line(834,292,872,292));
    tempLevel.lines.push(new Line(872,292,869,357));
    tempLevel.lines.push(new Line(869,357,908,441));
    tempLevel.lines.push(new Line(908,441,803,441));
    tempLevel.lines.push(new Line(803,441,837,359));
    tempLevel.lines.push(new Line(837,359,834,292));

    ///
    

//
//
  ////// Quimica//////////
//
//
    tempLevel.lines.push(new Line(980,327,1014,326));
    tempLevel.lines.push(new Line(1014,326,1011,372));
    tempLevel.lines.push(new Line(1011,372,1049,441));
    tempLevel.lines.push(new Line(1049,441,946,441));
    tempLevel.lines.push(new Line(946,441,981,374));
    tempLevel.lines.push(new Line(981,374,980,327));
////////////////////////////////

    tempLevel.lines.push(new Line(1103,350,1122,350));
    ////
    tempLevel.lines.push(new Line(1122,350,1121,443));
    tempLevel.lines.push(new Line(1121,443,1104,442));
    tempLevel.lines.push(new Line(1104,442,1103,350));
    /////
    tempLevel.lines.push(new Line(992,646,1054,646));
    tempLevel.lines.push(new Line(1054,646,1054,747));
    tempLevel.lines.push(new Line(1054,747,1136,834));
    tempLevel.lines.push(new Line(1136,834,909,834));
    tempLevel.lines.push(new Line(909,834,990,748));
    tempLevel.lines.push(new Line(990,748,992,646));
  levels.push(tempLevel);
  tempLevel = new Level();
//// niVEL 15
    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(1200,0,1200, 900));

    tempLevel.lines.push(new Line(890,826, 936,826));
    tempLevel.lines.push(new Line(936,826, 936, 859));
    tempLevel.lines.push(new Line( 936, 859, 890, 853));
    tempLevel.lines.push(new Line(890, 853,890,826));



    tempLevel.lines.push(new Line(605, 650, 650, 650));
    tempLevel.lines.push(new Line(650, 650, 640, 690));
    tempLevel.lines.push(new Line(640, 690, 606, 683));
    tempLevel.lines.push(new Line(606, 683, 605, 650));


    tempLevel.lines.push(new Line(395, 586, 335, 577));
    tempLevel.lines.push(new Line(335, 577, 325, 494));
    tempLevel.lines.push(new Line(325, 494, 202, 494));
    tempLevel.lines.push(new Line(202, 494, 171, 644));
    tempLevel.lines.push(new Line(171, 644,415,650));
    tempLevel.lines.push(new Line(415,650, 395, 586));


    tempLevel.lines.push(new Line(114, 436, 147, 436));
    tempLevel.lines.push(new Line(147,436,147, 463 ));
    tempLevel.lines.push(new Line(147, 463,112, 457 ));
    tempLevel.lines.push(new Line(112, 457,114, 436 ));


    tempLevel.lines.push(new Line(577, 426, 637, 336));
    tempLevel.lines.push(new Line(637, 336,775, 290 ));
    tempLevel.lines.push(new Line(775, 290,1201, 265 ));
    tempLevel.lines.push(new Line(171, 130,289, 130 ));

    levels.push(tempLevel);
    // Nivel 16
    tempLevel = new Level();
    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(1200,0,1200, 900));
    tempLevel.lines.push(new Line(0, 900, 1200, 900));
    tempLevel.lines.push(new Line(0, 0, 1200, 0));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(80, 900, 160, 820));
    tempLevel.lines.push(new Line(160, 820, 160, 780));
    tempLevel.lines.push(new Line(160, 780, 20, 780));
    tempLevel.lines.push(new Line(20, 780, 20, 440));
    tempLevel.lines.push(new Line(20, 440, 200, 440));
    tempLevel.lines.push(new Line(200, 440, 200, 260));
    tempLevel.lines.push(new Line(200, 260, 140, 200));
    tempLevel.lines.push(new Line(140, 200, 20, 200));
    tempLevel.lines.push(new Line(20, 200, 20, 80));
    tempLevel.lines.push(new Line(20, 80, 140, 80));
    tempLevel.lines.push(new Line(140, 80, 60, 0));
    tempLevel.lines.push(new Line(1180, 900, 1180, 0));
    tempLevel.lines.push(new Line(1000, 0, 1000, 40));
    tempLevel.lines.push(new Line(1000, 40, 1080, 40));
    tempLevel.lines.push(new Line(1080, 40, 1080, 0));
    tempLevel.lines.push(new Line(700, 820, 700, 680));
    tempLevel.lines.push(new Line(700, 680, 560, 680));
    tempLevel.lines.push(new Line(560, 680, 560, 720));
    tempLevel.lines.push(new Line(560, 720, 640, 720));
    tempLevel.lines.push(new Line(640, 720, 640, 820));
    tempLevel.lines.push(new Line(640, 820, 700, 820));
    tempLevel.lines.push(new Line(820, 680, 820, 820));
    tempLevel.lines.push(new Line(820, 820, 880, 820));
    tempLevel.lines.push(new Line(880, 820, 880, 680));
    tempLevel.lines.push(new Line(880, 680, 820, 680));
    tempLevel.lines.push(new Line(1000, 720, 1000, 820));
    tempLevel.lines.push(new Line(1000, 820, 1060, 820));
    tempLevel.lines.push(new Line(1060, 820, 1060, 720));
    tempLevel.lines.push(new Line(1060, 720, 1000, 720));
    tempLevel.lines.push(new Line(980, 440, 980, 520));
    tempLevel.lines.push(new Line(980, 520, 1060, 520));
    tempLevel.lines.push(new Line(1060, 520, 1060, 440));
    tempLevel.lines.push(new Line(1060, 440, 980, 440));
    tempLevel.lines.push(new Line(640, 420, 640, 580));
    tempLevel.lines.push(new Line(640, 580, 700, 580));
    tempLevel.lines.push(new Line(700, 580, 700, 280));
    tempLevel.lines.push(new Line(700, 280, 780, 280));
    tempLevel.lines.push(new Line(780, 280, 780, 240));
    tempLevel.lines.push(new Line(780, 240, 580, 240));
    tempLevel.lines.push(new Line(580, 240, 580, 280));
    tempLevel.lines.push(new Line(580, 280, 640, 280));
    tempLevel.lines.push(new Line(640, 280, 640, 380));
    tempLevel.lines.push(new Line(640, 380, 460, 380));
    tempLevel.lines.push(new Line(460, 380, 460, 420));
    tempLevel.lines.push(new Line(460, 420, 640, 420));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(1000, 900, 1000, 780));
    tempLevel.lines.push(new Line(1000, 780, 1080, 780));
    tempLevel.lines.push(new Line(1080, 780, 1080, 900));
    tempLevel.lines.push(new Line(1180, 900, 1180, 460));
    tempLevel.lines.push(new Line(1180, 460, 1100, 460));
    tempLevel.lines.push(new Line(1100, 460, 1100, 420));
    tempLevel.lines.push(new Line(1100, 420, 1180, 420));
    tempLevel.lines.push(new Line(1180, 420, 1180, 0));
    tempLevel.lines.push(new Line(60, 900, 20, 860));
    tempLevel.lines.push(new Line(20, 860, 20, 680));
    tempLevel.lines.push(new Line(20, 680, 280, 680));
    tempLevel.lines.push(new Line(280, 680, 280, 640));
    tempLevel.lines.push(new Line(280, 640, 20, 640));
    tempLevel.lines.push(new Line(20, 640, 20, 0));
    tempLevel.lines.push(new Line(240, 0, 240, 120));
    tempLevel.lines.push(new Line(240, 120, 180, 120));
    tempLevel.lines.push(new Line(180, 120, 180, 160));
    tempLevel.lines.push(new Line(180, 160, 120, 160));
    tempLevel.lines.push(new Line(120, 160, 120, 200));
    tempLevel.lines.push(new Line(120, 200, 240, 200));
    tempLevel.lines.push(new Line(240, 200, 240, 420));
    tempLevel.lines.push(new Line(240, 420, 180, 420));
    tempLevel.lines.push(new Line(180, 420, 180, 460));
    tempLevel.lines.push(new Line(180, 460, 120, 460));
    tempLevel.lines.push(new Line(120, 460, 120, 500));
    tempLevel.lines.push(new Line(120, 500, 280, 500));
    tempLevel.lines.push(new Line(280, 500, 280, 0));
    tempLevel.lines.push(new Line(620, 280, 620, 500));
    tempLevel.lines.push(new Line(620, 500, 580, 500));
    tempLevel.lines.push(new Line(580, 500, 580, 320));
    tempLevel.lines.push(new Line(580, 320, 620, 280));
    tempLevel.lines.push(new Line(700, 280, 700, 640));
    tempLevel.lines.push(new Line(700, 640, 580, 640));
    tempLevel.lines.push(new Line(580, 640, 580, 680));
    tempLevel.lines.push(new Line(580, 680, 800, 680));
    tempLevel.lines.push(new Line(800, 680, 800, 560));
    tempLevel.lines.push(new Line(800, 560, 740, 560));
    tempLevel.lines.push(new Line(740, 560, 740, 320));
    tempLevel.lines.push(new Line(740, 320, 700, 280));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 900, 20, 500));
    tempLevel.lines.push(new Line(20, 500, 0, 500));
    tempLevel.lines.push(new Line(0, 500, 0, 380));
    tempLevel.lines.push(new Line(0, 380, 140, 380));
    tempLevel.lines.push(new Line(140, 380, 140, 340));
    tempLevel.lines.push(new Line(140, 340, 80, 340));
    tempLevel.lines.push(new Line(80, 340, 80, 300));
    tempLevel.lines.push(new Line(80, 300, 20, 300));
    tempLevel.lines.push(new Line(20, 300, 20, 20));
    tempLevel.lines.push(new Line(20, 20, 360, 20));
    tempLevel.lines.push(new Line(360, 20, 360, 240));
    tempLevel.lines.push(new Line(360, 240, 400, 240));
    tempLevel.lines.push(new Line(400, 240, 400, 0));
    tempLevel.lines.push(new Line(400, 340, 280, 340));
    tempLevel.lines.push(new Line(280, 340, 280, 600));
    tempLevel.lines.push(new Line(280, 600, 180, 600));
    tempLevel.lines.push(new Line(180, 600, 180, 740));
    tempLevel.lines.push(new Line(180, 740, 120, 740));
    tempLevel.lines.push(new Line(120, 740, 120, 780));
    tempLevel.lines.push(new Line(120, 780, 240, 780));
    tempLevel.lines.push(new Line(240, 780, 240, 900));
    tempLevel.lines.push(new Line(280, 900, 280, 800));
    tempLevel.lines.push(new Line(280, 800, 360, 800));
    tempLevel.lines.push(new Line(360, 800, 360, 760));
    tempLevel.lines.push(new Line(360, 760, 280, 760));
    tempLevel.lines.push(new Line(280, 760, 280, 640));
    tempLevel.lines.push(new Line(280, 640, 360, 640));
    tempLevel.lines.push(new Line(360, 640, 400, 600));
    tempLevel.lines.push(new Line(400, 600, 400, 340));
    tempLevel.lines.push(new Line(920, 0, 820, 100));
    tempLevel.lines.push(new Line(820, 100, 820, 120));
    tempLevel.lines.push(new Line(820, 120, 860, 120));
    tempLevel.lines.push(new Line(860, 120, 960, 20));
    tempLevel.lines.push(new Line(960, 20, 1040, 20));
    tempLevel.lines.push(new Line(1040, 20, 1040, 0));
    tempLevel.lines.push(new Line(1020, 200, 820, 200));
    tempLevel.lines.push(new Line(820, 200, 680, 340));
    tempLevel.lines.push(new Line(680, 340, 680, 360));
    tempLevel.lines.push(new Line(680, 360, 720, 360));
    tempLevel.lines.push(new Line(720, 360, 720, 460));
    tempLevel.lines.push(new Line(720, 460, 680, 500));
    tempLevel.lines.push(new Line(680, 500, 680, 520));
    tempLevel.lines.push(new Line(680, 520, 720, 520));
    tempLevel.lines.push(new Line(720, 520, 720, 620));
    tempLevel.lines.push(new Line(720, 620, 760, 620));
    tempLevel.lines.push(new Line(760, 620, 760, 560));
    tempLevel.lines.push(new Line(760, 560, 900, 560));
    tempLevel.lines.push(new Line(900, 560, 900, 520));
    tempLevel.lines.push(new Line(900, 520, 760, 520));
    tempLevel.lines.push(new Line(760, 520, 760, 320));
    tempLevel.lines.push(new Line(760, 320, 840, 240));
    tempLevel.lines.push(new Line(840, 240, 1020, 240));
    tempLevel.lines.push(new Line(1020, 240, 1020, 200));
    tempLevel.lines.push(new Line(1180, 900, 1180, 860));
    tempLevel.lines.push(new Line(1180, 860, 1120, 860));
    tempLevel.lines.push(new Line(1120, 860, 1120, 820));
    tempLevel.lines.push(new Line(1120, 820, 1180, 820));
    tempLevel.lines.push(new Line(1180, 820, 1180, 0));
    tempLevel.lines.push(new Line(1120, 360, 1120, 440));
    tempLevel.lines.push(new Line(1120, 440, 1040, 440));
    tempLevel.lines.push(new Line(1040, 440, 1040, 360));
    tempLevel.lines.push(new Line(1040, 360, 1120, 360));
    tempLevel.lines.push(new Line(940, 620, 1020, 620));
    tempLevel.lines.push(new Line(1020, 620, 1020, 660));
    tempLevel.lines.push(new Line(1020, 660, 1060, 660));
    tempLevel.lines.push(new Line(1060, 660, 1060, 700));
    tempLevel.lines.push(new Line(1060, 700, 980, 700));
    tempLevel.lines.push(new Line(980, 700, 980, 660));
    tempLevel.lines.push(new Line(980, 660, 940, 660));
    tempLevel.lines.push(new Line(940, 660, 940, 620));
    tempLevel.lines.push(new Line(620, 700, 620, 740));
    tempLevel.lines.push(new Line(620, 740, 720, 740));
    tempLevel.lines.push(new Line(720, 740, 720, 860));
    tempLevel.lines.push(new Line(720, 860, 1000, 860));
    tempLevel.lines.push(new Line(1000, 860, 1000, 820));
    tempLevel.lines.push(new Line(1000, 820, 940, 820));
    tempLevel.lines.push(new Line(940, 820, 940, 780));
    tempLevel.lines.push(new Line(940, 780, 880, 780));
    tempLevel.lines.push(new Line(880, 780, 880, 740));
    tempLevel.lines.push(new Line(880, 740, 820, 740));
    tempLevel.lines.push(new Line(820, 740, 820, 700));
    tempLevel.lines.push(new Line(820, 700, 620, 700));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(920, 900, 940, 880));
    tempLevel.lines.push(new Line(940, 880, 1000, 880));
    tempLevel.lines.push(new Line(1000, 880, 1000, 820));
    tempLevel.lines.push(new Line(1000, 820, 940, 820));
    tempLevel.lines.push(new Line(940, 820, 980, 780));
    tempLevel.lines.push(new Line(980, 780, 1040, 780));
    tempLevel.lines.push(new Line(1040, 780, 1040, 900));
    tempLevel.lines.push(new Line(1180, 900, 1180, 480));
    tempLevel.lines.push(new Line(1180, 480, 1080, 480));
    tempLevel.lines.push(new Line(1080, 480, 1080, 420));
    tempLevel.lines.push(new Line(1080, 420, 1180, 420));
    tempLevel.lines.push(new Line(1180, 420, 1180, 0));
    tempLevel.lines.push(new Line(940, 0, 940, 40));
    tempLevel.lines.push(new Line(940, 40, 820, 40));
    tempLevel.lines.push(new Line(820, 40, 820, 0));
    tempLevel.lines.push(new Line(660, 0, 660, 40));
    tempLevel.lines.push(new Line(660, 40, 540, 40));
    tempLevel.lines.push(new Line(540, 40, 540, 0));
    tempLevel.lines.push(new Line(380, 0, 380, 40));
    tempLevel.lines.push(new Line(380, 40, 260, 40));
    tempLevel.lines.push(new Line(260, 40, 260, 0));
    tempLevel.lines.push(new Line(100, 0, 100, 40));
    tempLevel.lines.push(new Line(100, 40, 20, 40));
    tempLevel.lines.push(new Line(20, 40, 20, 640));
    tempLevel.lines.push(new Line(20, 640, 220, 640));
    tempLevel.lines.push(new Line(220, 640, 300, 720));
    tempLevel.lines.push(new Line(300, 720, 280, 720));
    tempLevel.lines.push(new Line(280, 720, 280, 780));
    tempLevel.lines.push(new Line(280, 780, 400, 900));
    tempLevel.lines.push(new Line(600, 560, 600, 620));
    tempLevel.lines.push(new Line(600, 620, 780, 620));
    tempLevel.lines.push(new Line(780, 620, 780, 560));
    tempLevel.lines.push(new Line(780, 560, 600, 560));
    tempLevel.lines.push(new Line(140, 400, 140, 460));
    tempLevel.lines.push(new Line(140, 460, 300, 460));
    tempLevel.lines.push(new Line(300, 460, 240, 400));
    tempLevel.lines.push(new Line(240, 400, 140, 400));
    tempLevel.lines.push(new Line(320, 140, 320, 200));
    tempLevel.lines.push(new Line(320, 200, 440, 200));
    tempLevel.lines.push(new Line(440, 200, 440, 140));
    tempLevel.lines.push(new Line(440, 140, 320, 140));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(100, 900, 100, 520));
    tempLevel.lines.push(new Line(100, 520, 220, 520));
    tempLevel.lines.push(new Line(220, 520, 220, 460));
    tempLevel.lines.push(new Line(220, 460, 20, 460));
    tempLevel.lines.push(new Line(20, 460, 20, 0));
    tempLevel.lines.push(new Line(120, 260, 120, 340));
    tempLevel.lines.push(new Line(120, 340, 280, 340));
    tempLevel.lines.push(new Line(280, 340, 200, 260));
    tempLevel.lines.push(new Line(200, 260, 120, 260));
    tempLevel.lines.push(new Line(260, 900, 260, 720));
    tempLevel.lines.push(new Line(260, 720, 300, 680));
    tempLevel.lines.push(new Line(300, 680, 380, 680));
    tempLevel.lines.push(new Line(380, 680, 380, 900));
    tempLevel.lines.push(new Line(540, 900, 540, 680));
    tempLevel.lines.push(new Line(540, 680, 660, 680));
    tempLevel.lines.push(new Line(660, 680, 660, 900));
    tempLevel.lines.push(new Line(820, 900, 820, 680));
    tempLevel.lines.push(new Line(820, 680, 840, 680));
    tempLevel.lines.push(new Line(840, 680, 940, 780));
    tempLevel.lines.push(new Line(940, 780, 940, 900));
    tempLevel.lines.push(new Line(1180, 900, 1180, 780));
    tempLevel.lines.push(new Line(1180, 780, 1100, 780));
    tempLevel.lines.push(new Line(1100, 780, 1100, 680));
    tempLevel.lines.push(new Line(1100, 680, 1180, 680));
    tempLevel.lines.push(new Line(1180, 680, 1180, 520));
    tempLevel.lines.push(new Line(1180, 520, 980, 520));
    tempLevel.lines.push(new Line(980, 520, 980, 460));
    tempLevel.lines.push(new Line(980, 460, 1180, 460));
    tempLevel.lines.push(new Line(1180, 460, 1180, 0));
    tempLevel.lines.push(new Line(1020, 220, 1060, 220));
    tempLevel.lines.push(new Line(1060, 220, 1060, 340));
    tempLevel.lines.push(new Line(1060, 340, 900, 340));
    tempLevel.lines.push(new Line(900, 340, 1020, 220));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 900, 20, 740));
    tempLevel.lines.push(new Line(20, 740, 40, 720));
    tempLevel.lines.push(new Line(40, 720, 40, 320));
    tempLevel.lines.push(new Line(40, 320, 260, 100));
    tempLevel.lines.push(new Line(260, 100, 420, 100));
    tempLevel.lines.push(new Line(420, 100, 420, 0));
    tempLevel.lines.push(new Line(720, 0, 720, 40));
    tempLevel.lines.push(new Line(720, 40, 820, 40));
    tempLevel.lines.push(new Line(820, 40, 820, 0));
    tempLevel.lines.push(new Line(1140, 0, 1140, 260));
    tempLevel.lines.push(new Line(1140, 260, 1080, 260));
    tempLevel.lines.push(new Line(1080, 260, 1080, 420));
    tempLevel.lines.push(new Line(1080, 420, 1160, 420));
    tempLevel.lines.push(new Line(1160, 420, 1160, 800));
    tempLevel.lines.push(new Line(1160, 800, 1180, 820));
    tempLevel.lines.push(new Line(1180, 820, 1180, 900));
    tempLevel.lines.push(new Line(700, 840, 540, 840));
    tempLevel.lines.push(new Line(540, 840, 540, 720));
    tempLevel.lines.push(new Line(540, 720, 600, 720));
    tempLevel.lines.push(new Line(600, 720, 600, 780));
    tempLevel.lines.push(new Line(600, 780, 700, 780));
    tempLevel.lines.push(new Line(700, 780, 700, 840));
    tempLevel.lines.push(new Line(320, 720, 200, 720));
    tempLevel.lines.push(new Line(200, 720, 200, 580));
    tempLevel.lines.push(new Line(200, 580, 360, 580));
    tempLevel.lines.push(new Line(360, 580, 360, 620));
    tempLevel.lines.push(new Line(360, 620, 320, 620));
    tempLevel.lines.push(new Line(320, 620, 320, 720));
    tempLevel.lines.push(new Line(720, 460, 720, 500));
    tempLevel.lines.push(new Line(720, 500, 760, 500));
    tempLevel.lines.push(new Line(760, 500, 760, 540));
    tempLevel.lines.push(new Line(760, 540, 820, 540));
    tempLevel.lines.push(new Line(820, 540, 820, 460));
    tempLevel.lines.push(new Line(820, 460, 720, 460));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(420, 900, 420, 840));
    tempLevel.lines.push(new Line(420, 840, 340, 840));
    tempLevel.lines.push(new Line(340, 840, 340, 720));
    tempLevel.lines.push(new Line(340, 720, 420, 720));
    tempLevel.lines.push(new Line(420, 720, 420, 700));
    tempLevel.lines.push(new Line(420, 700, 460, 700));
    tempLevel.lines.push(new Line(460, 700, 340, 580));
    tempLevel.lines.push(new Line(340, 580, 340, 480));
    tempLevel.lines.push(new Line(340, 480, 320, 480));
    tempLevel.lines.push(new Line(320, 480, 320, 580));
    tempLevel.lines.push(new Line(320, 580, 260, 640));
    tempLevel.lines.push(new Line(260, 640, 180, 640));
    tempLevel.lines.push(new Line(180, 640, 120, 580));
    tempLevel.lines.push(new Line(120, 580, 20, 580));
    tempLevel.lines.push(new Line(20, 580, 20, 280));
    tempLevel.lines.push(new Line(20, 280, 160, 280));
    tempLevel.lines.push(new Line(160, 280, 160, 0));
    tempLevel.lines.push(new Line(1140, 900, 1140, 700));
    tempLevel.lines.push(new Line(1140, 700, 680, 700));
    tempLevel.lines.push(new Line(680, 700, 680, 600));
    tempLevel.lines.push(new Line(680, 600, 860, 600));
    tempLevel.lines.push(new Line(860, 600, 860, 660));
    tempLevel.lines.push(new Line(860, 660, 1060, 660));
    tempLevel.lines.push(new Line(1060, 660, 1060, 560));
    tempLevel.lines.push(new Line(1060, 560, 1120, 560));
    tempLevel.lines.push(new Line(1120, 560, 1120, 0));
    tempLevel.lines.push(new Line(720, 900, 720, 840));
    tempLevel.lines.push(new Line(720, 840, 640, 840));
    tempLevel.lines.push(new Line(640, 840, 640, 800));
    tempLevel.lines.push(new Line(640, 800, 820, 800));
    tempLevel.lines.push(new Line(820, 800, 820, 900));
    tempLevel.lines.push(new Line(640, 480, 760, 360));
    tempLevel.lines.push(new Line(760, 360, 760, 260));
    tempLevel.lines.push(new Line(760, 260, 780, 260));
    tempLevel.lines.push(new Line(780, 260, 780, 360));
    tempLevel.lines.push(new Line(780, 360, 900, 480));
    tempLevel.lines.push(new Line(900, 480, 640, 480));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(160, 900, 160, 560));
    tempLevel.lines.push(new Line(160, 560, 80, 560));
    tempLevel.lines.push(new Line(80, 540, 80, 260));
    tempLevel.lines.push(new Line(80, 260, 20, 260));
    tempLevel.lines.push(new Line(20, 240, 20, 0));
    tempLevel.lines.push(new Line(1120, 900, 1120, 160));
    tempLevel.lines.push(new Line(1120, 160, 1180, 160));
    tempLevel.lines.push(new Line(1180, 160, 1180, 0));
    tempLevel.lines.push(new Line(320, 800, 320, 820));
    tempLevel.lines.push(new Line(320, 820, 420, 820));
    tempLevel.lines.push(new Line(420, 820, 420, 800));
    tempLevel.lines.push(new Line(420, 800, 320, 800));
    tempLevel.lines.push(new Line(360, 500, 360, 520));
    tempLevel.lines.push(new Line(360, 520, 460, 520));
    tempLevel.lines.push(new Line(460, 520, 460, 500));
    tempLevel.lines.push(new Line(460, 500, 360, 500));
    tempLevel.lines.push(new Line(800, 420, 800, 440));
    tempLevel.lines.push(new Line(800, 440, 900, 440));
    tempLevel.lines.push(new Line(900, 440, 900, 420));
    tempLevel.lines.push(new Line(900, 420, 800, 420));
    tempLevel.lines.push(new Line(80, 560, 80, 540));
    tempLevel.lines.push(new Line(20, 260, 20, 240));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 900, 20, 0));
    tempLevel.lines.push(new Line(1180, 900, 1180, 0));
    tempLevel.lines.push(new Line(1060, 0, 1060, 40));
    tempLevel.lines.push(new Line(1060, 40, 880, 40));
    tempLevel.lines.push(new Line(880, 40, 880, 0));
    tempLevel.lines.push(new Line(720, 200, 720, 220));
    tempLevel.lines.push(new Line(720, 220, 620, 220));
    tempLevel.lines.push(new Line(620, 220, 620, 200));
    tempLevel.lines.push(new Line(620, 200, 720, 200));
    tempLevel.lines.push(new Line(880, 360, 880, 380));
    tempLevel.lines.push(new Line(880, 380, 980, 380));
    tempLevel.lines.push(new Line(980, 380, 980, 360));
    tempLevel.lines.push(new Line(980, 360, 880, 360));
    tempLevel.lines.push(new Line(700, 520, 700, 540));
    tempLevel.lines.push(new Line(700, 540, 600, 540));
    tempLevel.lines.push(new Line(600, 540, 600, 520));
    tempLevel.lines.push(new Line(600, 520, 700, 520));
    tempLevel.lines.push(new Line(600, 780, 600, 800));
    tempLevel.lines.push(new Line(600, 800, 700, 800));
    tempLevel.lines.push(new Line(700, 800, 700, 780));
    tempLevel.lines.push(new Line(700, 780, 600, 780));
    tempLevel.lines.push(new Line(240, 520, 240, 540));
    tempLevel.lines.push(new Line(240, 540, 340, 540));
    tempLevel.lines.push(new Line(340, 540, 340, 520));
    tempLevel.lines.push(new Line(340, 520, 240, 520));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(1180, 900, 1180, 0));
    tempLevel.lines.push(new Line(860, 0, 860, 40));
    tempLevel.lines.push(new Line(860, 40, 600, 40));
    tempLevel.lines.push(new Line(600, 40, 600, 0));
    tempLevel.lines.push(new Line(20, 0, 20, 900));
    tempLevel.lines.push(new Line(180, 760, 180, 780));
    tempLevel.lines.push(new Line(180, 780, 280, 780));
    tempLevel.lines.push(new Line(280, 780, 280, 760));
    tempLevel.lines.push(new Line(280, 760, 180, 760));
    tempLevel.lines.push(new Line(880, 900, 880, 860));
    tempLevel.lines.push(new Line(880, 860, 1060, 860));
    tempLevel.lines.push(new Line(1060, 860, 1060, 900));
    tempLevel.lines.push(new Line(1100, 740, 980, 620));
    tempLevel.lines.push(new Line(980, 620, 980, 580));
    tempLevel.lines.push(new Line(980, 580, 960, 580));
    tempLevel.lines.push(new Line(960, 580, 960, 620));
    tempLevel.lines.push(new Line(960, 620, 840, 740));
    tempLevel.lines.push(new Line(840, 740, 1100, 740));
    tempLevel.lines.push(new Line(520, 560, 520, 620));
    tempLevel.lines.push(new Line(520, 620, 700, 620));
    tempLevel.lines.push(new Line(700, 620, 700, 560));
    tempLevel.lines.push(new Line(700, 560, 520, 560));
    tempLevel.lines.push(new Line(480, 440, 600, 320));
    tempLevel.lines.push(new Line(600, 320, 600, 220));
    tempLevel.lines.push(new Line(600, 220, 620, 220));
    tempLevel.lines.push(new Line(620, 220, 620, 320));
    tempLevel.lines.push(new Line(620, 320, 740, 440));
    tempLevel.lines.push(new Line(740, 440, 480, 440));
    tempLevel.lines.push(new Line(260, 540, 160, 540));
    tempLevel.lines.push(new Line(160, 540, 160, 480));
    tempLevel.lines.push(new Line(160, 480, 260, 480));
    tempLevel.lines.push(new Line(260, 480, 260, 540));
    tempLevel.lines.push(new Line(120, 360, 240, 240));
    tempLevel.lines.push(new Line(240, 240, 240, 140));
    tempLevel.lines.push(new Line(240, 140, 260, 140));
    tempLevel.lines.push(new Line(260, 140, 260, 240));
    tempLevel.lines.push(new Line(260, 240, 380, 360));
    tempLevel.lines.push(new Line(380, 360, 120, 360));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 900, 20, 780));
    tempLevel.lines.push(new Line(20, 780, 140, 660));
    tempLevel.lines.push(new Line(140, 660, 140, 540));
    tempLevel.lines.push(new Line(140, 540, 80, 540));
    tempLevel.lines.push(new Line(80, 540, 80, 300));
    tempLevel.lines.push(new Line(80, 300, 20, 300));
    tempLevel.lines.push(new Line(20, 300, 20, 0));
    tempLevel.lines.push(new Line(380, 0, 380, 360));
    tempLevel.lines.push(new Line(380, 360, 620, 360));
    tempLevel.lines.push(new Line(620, 360, 620, 240));
    tempLevel.lines.push(new Line(620, 240, 480, 240));
    tempLevel.lines.push(new Line(480, 240, 480, 0));
    tempLevel.lines.push(new Line(580, 0, 580, 40));
    tempLevel.lines.push(new Line(580, 40, 960, 40));
    tempLevel.lines.push(new Line(960, 40, 960, 0));
    tempLevel.lines.push(new Line(380, 480, 380, 600));
    tempLevel.lines.push(new Line(380, 600, 720, 600));
    tempLevel.lines.push(new Line(720, 600, 720, 480));
    tempLevel.lines.push(new Line(720, 480, 380, 480));
    tempLevel.lines.push(new Line(520, 780, 520, 820));
    tempLevel.lines.push(new Line(520, 820, 600, 900));
    tempLevel.lines.push(new Line(860, 900, 860, 740));
    tempLevel.lines.push(new Line(860, 740, 720, 740));
    tempLevel.lines.push(new Line(720, 740, 720, 780));
    tempLevel.lines.push(new Line(720, 780, 520, 780));
    tempLevel.lines.push(new Line(1180, 900, 1180, 600));
    tempLevel.lines.push(new Line(1180, 600, 1120, 540));
    tempLevel.lines.push(new Line(1120, 540, 1120, 480));
    tempLevel.lines.push(new Line(1120, 480, 1200, 480));
    tempLevel.lines.push(new Line(1200, 480, 1200, 380));
    tempLevel.lines.push(new Line(1200, 380, 1100, 380));
    tempLevel.lines.push(new Line(1100, 380, 1100, 240));
    tempLevel.lines.push(new Line(1100, 240, 1180, 240));
    tempLevel.lines.push(new Line(1180, 240, 1180, 0));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(380, 900, 380, 760));
    tempLevel.lines.push(new Line(380, 760, 480, 760));
    tempLevel.lines.push(new Line(480, 760, 480, 900));
    tempLevel.lines.push(new Line(580, 900, 580, 780));
    tempLevel.lines.push(new Line(580, 780, 960, 780));
    tempLevel.lines.push(new Line(960, 780, 960, 900));
    tempLevel.lines.push(new Line(1180, 900, 1180, 180));
    tempLevel.lines.push(new Line(1180, 180, 1120, 180));
    tempLevel.lines.push(new Line(1120, 180, 1120, 0));
    tempLevel.lines.push(new Line(980, 0, 980, 180));
    tempLevel.lines.push(new Line(980, 180, 660, 180));
    tempLevel.lines.push(new Line(660, 180, 660, 0));
    tempLevel.lines.push(new Line(540, 240, 280, 240));
    tempLevel.lines.push(new Line(280, 240, 280, 100));
    tempLevel.lines.push(new Line(280, 100, 540, 100));
    tempLevel.lines.push(new Line(540, 100, 540, 240));
    tempLevel.lines.push(new Line(20, 900, 20, 0));
    tempLevel.lines.push(new Line(140, 600, 280, 600));
    tempLevel.lines.push(new Line(280, 600, 280, 380));
    tempLevel.lines.push(new Line(280, 380, 140, 380));
    tempLevel.lines.push(new Line(140, 380, 140, 600));
    tempLevel.lines.push(new Line(420, 600, 580, 600));
    tempLevel.lines.push(new Line(580, 600, 580, 420));
    tempLevel.lines.push(new Line(580, 420, 420, 420));
    tempLevel.lines.push(new Line(420, 420, 420, 600));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 900, 20, 0));
    tempLevel.lines.push(new Line(180, 540, 380, 540));
    tempLevel.lines.push(new Line(380, 540, 380, 300));
    tempLevel.lines.push(new Line(380, 300, 280, 300));
    tempLevel.lines.push(new Line(280, 300, 280, 220));
    tempLevel.lines.push(new Line(280, 220, 180, 220));
    tempLevel.lines.push(new Line(180, 220, 180, 540));
    tempLevel.lines.push(new Line(540, 400, 540, 540));
    tempLevel.lines.push(new Line(540, 540, 900, 540));
    tempLevel.lines.push(new Line(900, 540, 900, 440));
    tempLevel.lines.push(new Line(900, 440, 700, 440));
    tempLevel.lines.push(new Line(700, 440, 700, 400));
    tempLevel.lines.push(new Line(700, 400, 540, 400));
    tempLevel.lines.push(new Line(660, 900, 660, 700));
    tempLevel.lines.push(new Line(660, 700, 980, 700));
    tempLevel.lines.push(new Line(980, 700, 980, 900));
    tempLevel.lines.push(new Line(1120, 900, 1120, 780));
    tempLevel.lines.push(new Line(1120, 780, 1180, 780));
    tempLevel.lines.push(new Line(1180, 780, 1180, 0));
    tempLevel.lines.push(new Line(420, 100, 420, 0));
    tempLevel.lines.push(new Line(420, 100, 620, 100));
    tempLevel.lines.push(new Line(620, 100, 620, 220));
    tempLevel.lines.push(new Line(620, 220, 900, 220));
    tempLevel.lines.push(new Line(900, 220, 900, 0));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 900, 20, 780));
    tempLevel.lines.push(new Line(20, 780, 80, 720));
    tempLevel.lines.push(new Line(80, 720, 80, 520));
    tempLevel.lines.push(new Line(80, 520, 20, 520));
    tempLevel.lines.push(new Line(20, 520, 20, 0));
    tempLevel.lines.push(new Line(380, 620, 440, 620));
    tempLevel.lines.push(new Line(440, 620, 440, 440));
    tempLevel.lines.push(new Line(440, 440, 380, 440));
    tempLevel.lines.push(new Line(380, 440, 380, 620));
    tempLevel.lines.push(new Line(420, 880, 420, 820));
    tempLevel.lines.push(new Line(420, 820, 640, 820));
    tempLevel.lines.push(new Line(640, 820, 640, 780));
    tempLevel.lines.push(new Line(640, 780, 920, 780));
    tempLevel.lines.push(new Line(920, 780, 920, 900));
    tempLevel.lines.push(new Line(1180, 900, 1180, 440));
    tempLevel.lines.push(new Line(1180, 440, 1120, 380));
    tempLevel.lines.push(new Line(1120, 380, 1120, 280));
    tempLevel.lines.push(new Line(1120, 280, 1180, 280));
    tempLevel.lines.push(new Line(1180, 280, 1180, 0));
    tempLevel.lines.push(new Line(500, 0, 500, 120));
    tempLevel.lines.push(new Line(500, 120, 180, 120));
    tempLevel.lines.push(new Line(180, 120, 180, 0));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(1180, 900, 1180, 100));
    tempLevel.lines.push(new Line(1180, 100, 1100, 100));
    tempLevel.lines.push(new Line(1100, 100, 1100, 40));
    tempLevel.lines.push(new Line(1100, 40, 1020, 40));
    tempLevel.lines.push(new Line(1020, 40, 1020, 0));
    tempLevel.lines.push(new Line(180, 900, 180, 800));
    tempLevel.lines.push(new Line(180, 800, 340, 800));
    tempLevel.lines.push(new Line(340, 800, 340, 840));
    tempLevel.lines.push(new Line(340, 840, 500, 840));
    tempLevel.lines.push(new Line(500, 840, 500, 920));
    tempLevel.lines.push(new Line(20, 900, 20, 0));
    tempLevel.lines.push(new Line(800, 700, 680, 700));
    tempLevel.lines.push(new Line(680, 700, 680, 560));
    tempLevel.lines.push(new Line(680, 560, 800, 560));
    tempLevel.lines.push(new Line(800, 560, 800, 700));
    tempLevel.lines.push(new Line(960, 740, 1080, 740));
    tempLevel.lines.push(new Line(1080, 740, 1080, 560));
    tempLevel.lines.push(new Line(1080, 560, 960, 560));
    tempLevel.lines.push(new Line(960, 560, 960, 740));
    tempLevel.lines.push(new Line(720, 340, 820, 340));
    tempLevel.lines.push(new Line(820, 340, 820, 200));
    tempLevel.lines.push(new Line(820, 200, 720, 200));
    tempLevel.lines.push(new Line(720, 200, 720, 340));
    tempLevel.lines.push(new Line(920, 380, 1020, 380));
    tempLevel.lines.push(new Line(1020, 380, 1020, 320));
    tempLevel.lines.push(new Line(1020, 320, 1080, 320));
    tempLevel.lines.push(new Line(1080, 320, 1080, 240));
    tempLevel.lines.push(new Line(1080, 240, 920, 240));
    tempLevel.lines.push(new Line(920, 240, 920, 380));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 900, 20, 720));
    tempLevel.lines.push(new Line(20, 720, 100, 640));
    tempLevel.lines.push(new Line(100, 640, 100, 500));
    tempLevel.lines.push(new Line(100, 500, 20, 500));
    tempLevel.lines.push(new Line(20, 500, 20, 120));
    tempLevel.lines.push(new Line(20, 120, 120, 20));
    tempLevel.lines.push(new Line(120, 20, 120, 0));
    tempLevel.lines.push(new Line(300, 540, 440, 540));
    tempLevel.lines.push(new Line(440, 540, 440, 480));
    tempLevel.lines.push(new Line(440, 480, 300, 480));
    tempLevel.lines.push(new Line(300, 480, 300, 540));
    tempLevel.lines.push(new Line(680, 640, 820, 640));
    tempLevel.lines.push(new Line(820, 640, 820, 580));
    tempLevel.lines.push(new Line(820, 580, 680, 580));
    tempLevel.lines.push(new Line(680, 580, 680, 640));
    tempLevel.lines.push(new Line(1020, 900, 1020, 820));
    tempLevel.lines.push(new Line(1020, 820, 1180, 820));
    tempLevel.lines.push(new Line(1180, 820, 1180, 580));
    tempLevel.lines.push(new Line(1180, 580, 1100, 500));
    tempLevel.lines.push(new Line(1100, 500, 1100, 400));
    tempLevel.lines.push(new Line(1100, 400, 1180, 400));
    tempLevel.lines.push(new Line(1180, 400, 1180, 0));
    tempLevel.lines.push(new Line(800, 360, 660, 360));
    tempLevel.lines.push(new Line(660, 360, 660, 300));
    tempLevel.lines.push(new Line(660, 300, 800, 300));
    tempLevel.lines.push(new Line(800, 300, 800, 360));
    tempLevel.lines.push(new Line(480, 240, 340, 240));
    tempLevel.lines.push(new Line(340, 240, 340, 180));
    tempLevel.lines.push(new Line(340, 180, 480, 180));
    tempLevel.lines.push(new Line(480, 180, 480, 240));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(120, 900, 120, 820));
    tempLevel.lines.push(new Line(120, 820, 20, 820));
    tempLevel.lines.push(new Line(20, 820, 20, 280));
    tempLevel.lines.push(new Line(20, 280, 500, 280));
    tempLevel.lines.push(new Line(500, 280, 500, 240));
    tempLevel.lines.push(new Line(500, 240, 40, 240));
    tempLevel.lines.push(new Line(40, 240, 40, 120));
    tempLevel.lines.push(new Line(40, 120, 100, 120));
    tempLevel.lines.push(new Line(100, 120, 100, 0));
    tempLevel.lines.push(new Line(180, 0, 180, 120));
    tempLevel.lines.push(new Line(180, 120, 240, 120));
    tempLevel.lines.push(new Line(240, 120, 240, 40));
    tempLevel.lines.push(new Line(240, 40, 960, 40));
    tempLevel.lines.push(new Line(960, 40, 960, 120));
    tempLevel.lines.push(new Line(960, 120, 1020, 120));
    tempLevel.lines.push(new Line(1020, 120, 1020, 0));
    tempLevel.lines.push(new Line(1100, 0, 1100, 120));
    tempLevel.lines.push(new Line(1100, 120, 1160, 120));
    tempLevel.lines.push(new Line(1160, 120, 1160, 240));
    tempLevel.lines.push(new Line(1160, 240, 700, 240));
    tempLevel.lines.push(new Line(700, 240, 700, 280));
    tempLevel.lines.push(new Line(700, 280, 1180, 280));
    tempLevel.lines.push(new Line(1180, 280, 1180, 900));
    tempLevel.lines.push(new Line(740, 780, 740, 820));
    tempLevel.lines.push(new Line(740, 820, 920, 820));
    tempLevel.lines.push(new Line(920, 820, 920, 780));
    tempLevel.lines.push(new Line(920, 780, 740, 780));
    tempLevel.lines.push(new Line(500, 600, 500, 640));
    tempLevel.lines.push(new Line(500, 640, 360, 640));
    tempLevel.lines.push(new Line(360, 640, 360, 600));
    tempLevel.lines.push(new Line(360, 600, 500, 600));
    tempLevel.lines.push(new Line(660, 460, 660, 500));
    tempLevel.lines.push(new Line(660, 500, 760, 500));
    tempLevel.lines.push(new Line(760, 500, 760, 460));
    tempLevel.lines.push(new Line(760, 460, 660, 460));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(100, 900, 100, 860));
    tempLevel.lines.push(new Line(100, 860, 40, 860));
    tempLevel.lines.push(new Line(40, 860, 40, 0));
    tempLevel.lines.push(new Line(180, 900, 180, 860));
    tempLevel.lines.push(new Line(180, 860, 400, 860));
    tempLevel.lines.push(new Line(400, 860, 400, 840));
    tempLevel.lines.push(new Line(400, 840, 480, 840));
    tempLevel.lines.push(new Line(480, 840, 480, 820));
    tempLevel.lines.push(new Line(480, 820, 560, 820));
    tempLevel.lines.push(new Line(560, 820, 560, 800));
    tempLevel.lines.push(new Line(560, 800, 640, 800));
    tempLevel.lines.push(new Line(640, 800, 640, 780));
    tempLevel.lines.push(new Line(640, 780, 720, 780));
    tempLevel.lines.push(new Line(720, 780, 720, 760));
    tempLevel.lines.push(new Line(720, 760, 800, 760));
    tempLevel.lines.push(new Line(800, 760, 800, 680));
    tempLevel.lines.push(new Line(800, 680, 860, 680));
    tempLevel.lines.push(new Line(860, 680, 860, 760));
    tempLevel.lines.push(new Line(860, 760, 900, 760));
    tempLevel.lines.push(new Line(900, 760, 900, 860));
    tempLevel.lines.push(new Line(900, 860, 1020, 860));
    tempLevel.lines.push(new Line(1020, 860, 1020, 900));
    tempLevel.lines.push(new Line(1100, 900, 1100, 860));
    tempLevel.lines.push(new Line(1100, 860, 1160, 860));
    tempLevel.lines.push(new Line(1160, 860, 1160, 0));
    tempLevel.lines.push(new Line(300, 420, 280, 420));
    tempLevel.lines.push(new Line(280, 420, 280, 340));
    tempLevel.lines.push(new Line(280, 340, 300, 340));
    tempLevel.lines.push(new Line(300, 340, 300, 420));
    tempLevel.lines.push(new Line(380, 540, 380, 700));
    tempLevel.lines.push(new Line(380, 700, 400, 700));
    tempLevel.lines.push(new Line(400, 700, 400, 540));
    tempLevel.lines.push(new Line(400, 540, 380, 540));
    tempLevel.lines.push(new Line(580, 540, 580, 620));
    tempLevel.lines.push(new Line(580, 620, 600, 620));
    tempLevel.lines.push(new Line(600, 620, 600, 540));
    tempLevel.lines.push(new Line(600, 540, 580, 540));
    tempLevel.lines.push(new Line(720, 380, 720, 460));
    tempLevel.lines.push(new Line(720, 460, 740, 460));
    tempLevel.lines.push(new Line(740, 460, 740, 380));
    tempLevel.lines.push(new Line(740, 380, 720, 380));
    tempLevel.lines.push(new Line(460, 300, 460, 380));
    tempLevel.lines.push(new Line(460, 380, 480, 380));
    tempLevel.lines.push(new Line(480, 380, 480, 300));
    tempLevel.lines.push(new Line(480, 300, 460, 300));
    tempLevel.lines.push(new Line(320, 0, 320, 80));
    tempLevel.lines.push(new Line(320, 80, 340, 80));
    tempLevel.lines.push(new Line(340, 80, 340, 0));
    tempLevel.lines.push(new Line(780, 140, 780, 220));
    tempLevel.lines.push(new Line(780, 220, 800, 220));
    tempLevel.lines.push(new Line(800, 220, 800, 140));
    tempLevel.lines.push(new Line(800, 140, 780, 140));
    tempLevel.lines.push(new Line(1020, 200, 1020, 280));
    tempLevel.lines.push(new Line(1020, 280, 1040, 280));
    tempLevel.lines.push(new Line(1040, 280, 1040, 200));
    tempLevel.lines.push(new Line(1040, 200, 1020, 200));
    tempLevel.lines.push(new Line(880, 0, 880, 80));
    tempLevel.lines.push(new Line(880, 80, 900, 80));
    tempLevel.lines.push(new Line(900, 80, 900, 0));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(40, 900, 40, 0));
    tempLevel.lines.push(new Line(240, 0, 240, 40));
    tempLevel.lines.push(new Line(240, 40, 400, 40));
    tempLevel.lines.push(new Line(400, 40, 400, 0));
    tempLevel.lines.push(new Line(800, 0, 800, 40));
    tempLevel.lines.push(new Line(800, 40, 960, 40));
    tempLevel.lines.push(new Line(960, 40, 960, 0));
    tempLevel.lines.push(new Line(1160, 0, 1160, 900));
    tempLevel.lines.push(new Line(900, 900, 900, 820));
    tempLevel.lines.push(new Line(900, 820, 880, 820));
    tempLevel.lines.push(new Line(880, 820, 880, 900));
    tempLevel.lines.push(new Line(340, 900, 340, 820));
    tempLevel.lines.push(new Line(340, 820, 320, 820));
    tempLevel.lines.push(new Line(320, 820, 320, 900));
    tempLevel.lines.push(new Line(380, 720, 380, 740));
    tempLevel.lines.push(new Line(380, 740, 560, 740));
    tempLevel.lines.push(new Line(560, 740, 560, 720));
    tempLevel.lines.push(new Line(560, 720, 480, 720));
    tempLevel.lines.push(new Line(480, 720, 480, 640));
    tempLevel.lines.push(new Line(480, 640, 460, 640));
    tempLevel.lines.push(new Line(460, 640, 460, 720));
    tempLevel.lines.push(new Line(460, 720, 380, 720));
    tempLevel.lines.push(new Line(200, 520, 200, 540));
    tempLevel.lines.push(new Line(200, 540, 380, 540));
    tempLevel.lines.push(new Line(380, 540, 380, 520));
    tempLevel.lines.push(new Line(380, 520, 300, 520));
    tempLevel.lines.push(new Line(300, 520, 300, 440));
    tempLevel.lines.push(new Line(300, 440, 280, 440));
    tempLevel.lines.push(new Line(280, 440, 280, 520));
    tempLevel.lines.push(new Line(280, 520, 200, 520));
    tempLevel.lines.push(new Line(840, 500, 840, 520));
    tempLevel.lines.push(new Line(840, 520, 1020, 520));
    tempLevel.lines.push(new Line(1020, 520, 1020, 500));
    tempLevel.lines.push(new Line(1020, 500, 940, 500));
    tempLevel.lines.push(new Line(940, 500, 940, 420));
    tempLevel.lines.push(new Line(940, 420, 920, 420));
    tempLevel.lines.push(new Line(920, 420, 920, 500));
    tempLevel.lines.push(new Line(920, 500, 840, 500));
    tempLevel.lines.push(new Line(760, 360, 760, 380));
    tempLevel.lines.push(new Line(760, 380, 580, 380));
    tempLevel.lines.push(new Line(580, 380, 580, 360));
    tempLevel.lines.push(new Line(580, 360, 660, 360));
    tempLevel.lines.push(new Line(660, 360, 660, 280));
    tempLevel.lines.push(new Line(660, 280, 680, 280));
    tempLevel.lines.push(new Line(680, 280, 680, 360));
    tempLevel.lines.push(new Line(680, 360, 760, 360));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(40, 900, 40, 680));
    tempLevel.lines.push(new Line(40, 680, 60, 680));
    tempLevel.lines.push(new Line(60, 680, 60, 660));
    tempLevel.lines.push(new Line(60, 660, 20, 620));
    tempLevel.lines.push(new Line(20, 620, 20, 0));
    tempLevel.lines.push(new Line(280, 0, 280, 380));
    tempLevel.lines.push(new Line(280, 380, 240, 420));
    tempLevel.lines.push(new Line(240, 420, 240, 500));
    tempLevel.lines.push(new Line(240, 500, 320, 500));
    tempLevel.lines.push(new Line(320, 500, 320, 0));
    tempLevel.lines.push(new Line(240, 900, 240, 620));
    tempLevel.lines.push(new Line(240, 620, 340, 620));
    tempLevel.lines.push(new Line(340, 620, 340, 640));
    tempLevel.lines.push(new Line(340, 640, 320, 640));
    tempLevel.lines.push(new Line(320, 640, 320, 860));
    tempLevel.lines.push(new Line(320, 860, 400, 860));
    tempLevel.lines.push(new Line(400, 860, 400, 900));
    tempLevel.lines.push(new Line(800, 900, 800, 860));
    tempLevel.lines.push(new Line(800, 860, 880, 860));
    tempLevel.lines.push(new Line(880, 860, 880, 640));
    tempLevel.lines.push(new Line(880, 640, 860, 640));
    tempLevel.lines.push(new Line(860, 640, 860, 620));
    tempLevel.lines.push(new Line(860, 620, 960, 620));
    tempLevel.lines.push(new Line(960, 620, 960, 900));
    tempLevel.lines.push(new Line(1160, 900, 1160, 680));
    tempLevel.lines.push(new Line(1160, 680, 1140, 680));
    tempLevel.lines.push(new Line(1140, 680, 1140, 660));
    tempLevel.lines.push(new Line(1140, 660, 1180, 620));
    tempLevel.lines.push(new Line(1180, 620, 1180, 0));
    tempLevel.lines.push(new Line(920, 0, 920, 400));
    tempLevel.lines.push(new Line(920, 400, 960, 440));
    tempLevel.lines.push(new Line(960, 440, 960, 500));
    tempLevel.lines.push(new Line(960, 500, 880, 500));
    tempLevel.lines.push(new Line(880, 500, 880, 40));
    tempLevel.lines.push(new Line(880, 40, 760, 40));
    tempLevel.lines.push(new Line(760, 40, 760, 0));
    tempLevel.lines.push(new Line(640, 420, 640, 440));
    tempLevel.lines.push(new Line(640, 440, 820, 440));
    tempLevel.lines.push(new Line(820, 440, 820, 420));
    tempLevel.lines.push(new Line(820, 420, 740, 420));
    tempLevel.lines.push(new Line(740, 420, 740, 340));
    tempLevel.lines.push(new Line(740, 340, 720, 340));
    tempLevel.lines.push(new Line(720, 340, 720, 420));
    tempLevel.lines.push(new Line(720, 420, 640, 420));
    tempLevel.lines.push(new Line(380, 260, 380, 280));
    tempLevel.lines.push(new Line(380, 280, 560, 280));
    tempLevel.lines.push(new Line(560, 280, 560, 260));
    tempLevel.lines.push(new Line(560, 260, 480, 260));
    tempLevel.lines.push(new Line(480, 260, 480, 180));
    tempLevel.lines.push(new Line(480, 180, 460, 180));
    tempLevel.lines.push(new Line(460, 180, 460, 260));
    tempLevel.lines.push(new Line(460, 260, 380, 260));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 0, 20, 900));
    tempLevel.lines.push(new Line(280, 900, 280, 720));
    tempLevel.lines.push(new Line(280, 720, 460, 540));
    tempLevel.lines.push(new Line(460, 540, 560, 540));
    tempLevel.lines.push(new Line(320, 900, 320, 740));
    tempLevel.lines.push(new Line(320, 740, 460, 600));
    tempLevel.lines.push(new Line(460, 600, 740, 600));
    tempLevel.lines.push(new Line(740, 600, 880, 740));
    tempLevel.lines.push(new Line(880, 740, 880, 760));
    tempLevel.lines.push(new Line(880, 760, 920, 760));
    tempLevel.lines.push(new Line(920, 760, 920, 720));
    tempLevel.lines.push(new Line(920, 720, 740, 540));
    tempLevel.lines.push(new Line(740, 540, 640, 540));
    tempLevel.lines.push(new Line(760, 900, 760, 880));
    tempLevel.lines.push(new Line(760, 880, 720, 880));
    tempLevel.lines.push(new Line(720, 880, 720, 860));
    tempLevel.lines.push(new Line(720, 860, 960, 860));
    tempLevel.lines.push(new Line(960, 860, 960, 880));
    tempLevel.lines.push(new Line(960, 880, 920, 880));
    tempLevel.lines.push(new Line(920, 880, 920, 900));
    tempLevel.lines.push(new Line(1180, 900, 1180, 700));
    tempLevel.lines.push(new Line(1180, 700, 1120, 700));
    tempLevel.lines.push(new Line(1120, 700, 1120, 620));
    tempLevel.lines.push(new Line(1120, 620, 1180, 620));
    tempLevel.lines.push(new Line(1180, 620, 1180, 440));
    tempLevel.lines.push(new Line(1180, 460, 1120, 460));
    tempLevel.lines.push(new Line(1120, 460, 1120, 380));
    tempLevel.lines.push(new Line(1120, 380, 1180, 380));
    tempLevel.lines.push(new Line(1180, 380, 1180, 40));
    tempLevel.lines.push(new Line(1180, 40, 1040, 40));
    tempLevel.lines.push(new Line(1040, 40, 1040, 0));
    tempLevel.lines.push(new Line(640, 540, 640, 360));
    tempLevel.lines.push(new Line(640, 360, 720, 360));
    tempLevel.lines.push(new Line(720, 360, 720, 280));
    tempLevel.lines.push(new Line(720, 280, 640, 280));
    tempLevel.lines.push(new Line(640, 280, 640, 0));
    tempLevel.lines.push(new Line(560, 540, 560, 360));
    tempLevel.lines.push(new Line(560, 360, 480, 360));
    tempLevel.lines.push(new Line(480, 360, 480, 280));
    tempLevel.lines.push(new Line(480, 280, 560, 280));
    tempLevel.lines.push(new Line(560, 280, 560, 200));
    tempLevel.lines.push(new Line(560, 200, 580, 200));
    tempLevel.lines.push(new Line(580, 200, 580, 20));
    tempLevel.lines.push(new Line(580, 20, 560, 0));
    tempLevel.lines.push(new Line(560, 0, 520, 40));
    tempLevel.lines.push(new Line(520, 40, 480, 0));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(1040, 900, 1040, 820));
    tempLevel.lines.push(new Line(1040, 820, 1180, 820));
    tempLevel.lines.push(new Line(1180, 820, 1180, 380));
    tempLevel.lines.push(new Line(1180, 380, 1120, 380));
    tempLevel.lines.push(new Line(1120, 380, 1060, 440));
    tempLevel.lines.push(new Line(1060, 440, 1000, 380));
    tempLevel.lines.push(new Line(1000, 380, 1100, 280));
    tempLevel.lines.push(new Line(1100, 280, 1100, 0));
    tempLevel.lines.push(new Line(640, 900, 640, 820));
    tempLevel.lines.push(new Line(640, 820, 700, 760));
    tempLevel.lines.push(new Line(700, 760, 780, 760));
    tempLevel.lines.push(new Line(780, 760, 780, 660));
    tempLevel.lines.push(new Line(780, 660, 660, 660));
    tempLevel.lines.push(new Line(660, 660, 660, 680));
    tempLevel.lines.push(new Line(660, 680, 460, 880));
    tempLevel.lines.push(new Line(460, 880, 480, 900));
    tempLevel.lines.push(new Line(20, 900, 20, 660));
    tempLevel.lines.push(new Line(20, 660, 160, 660));
    tempLevel.lines.push(new Line(160, 660, 240, 740));
    tempLevel.lines.push(new Line(240, 740, 320, 740));
    tempLevel.lines.push(new Line(320, 740, 320, 780));
    tempLevel.lines.push(new Line(320, 780, 400, 780));
    tempLevel.lines.push(new Line(400, 780, 400, 740));
    tempLevel.lines.push(new Line(400, 740, 420, 740));
    tempLevel.lines.push(new Line(420, 740, 420, 680));
    tempLevel.lines.push(new Line(420, 680, 300, 680));
    tempLevel.lines.push(new Line(300, 680, 120, 500));
    tempLevel.lines.push(new Line(120, 500, 20, 500));
    tempLevel.lines.push(new Line(20, 500, 20, 0));
    tempLevel.lines.push(new Line(120, 0, 120, 40));
    tempLevel.lines.push(new Line(120, 40, 200, 40));
    tempLevel.lines.push(new Line(200, 40, 200, 0));
    tempLevel.lines.push(new Line(360, 240, 360, 300));
    tempLevel.lines.push(new Line(360, 300, 380, 300));
    tempLevel.lines.push(new Line(380, 300, 380, 400));
    tempLevel.lines.push(new Line(380, 400, 460, 400));
    tempLevel.lines.push(new Line(460, 400, 460, 300));
    tempLevel.lines.push(new Line(460, 300, 480, 300));
    tempLevel.lines.push(new Line(480, 300, 480, 240));
    tempLevel.lines.push(new Line(480, 240, 360, 240));
    tempLevel.lines.push(new Line(680, 420, 760, 420));
    tempLevel.lines.push(new Line(760, 420, 760, 320));
    tempLevel.lines.push(new Line(760, 320, 780, 320));
    tempLevel.lines.push(new Line(780, 320, 780, 260));
    tempLevel.lines.push(new Line(780, 260, 660, 260));
    tempLevel.lines.push(new Line(660, 260, 660, 320));
    tempLevel.lines.push(new Line(660, 320, 680, 320));
    tempLevel.lines.push(new Line(680, 320, 680, 420));
    tempLevel.lines.push(new Line(380, 0, 380, 40));
    tempLevel.lines.push(new Line(380, 40, 460, 40));
    tempLevel.lines.push(new Line(460, 40, 460, 0));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 900, 20, 580));
    tempLevel.lines.push(new Line(20, 580, 40, 580));
    tempLevel.lines.push(new Line(40, 580, 80, 620));
    tempLevel.lines.push(new Line(80, 620, 140, 560));
    tempLevel.lines.push(new Line(140, 560, 20, 440));
    tempLevel.lines.push(new Line(20, 440, 20, 0));
    tempLevel.lines.push(new Line(120, 900, 120, 780));
    tempLevel.lines.push(new Line(120, 780, 100, 780));
    tempLevel.lines.push(new Line(100, 780, 100, 720));
    tempLevel.lines.push(new Line(100, 720, 220, 720));
    tempLevel.lines.push(new Line(220, 720, 220, 780));
    tempLevel.lines.push(new Line(220, 780, 200, 780));
    tempLevel.lines.push(new Line(200, 780, 200, 900));
    tempLevel.lines.push(new Line(380, 900, 380, 780));
    tempLevel.lines.push(new Line(380, 780, 360, 780));
    tempLevel.lines.push(new Line(360, 780, 360, 720));
    tempLevel.lines.push(new Line(360, 720, 480, 720));
    tempLevel.lines.push(new Line(480, 720, 720, 480));
    tempLevel.lines.push(new Line(720, 480, 780, 540));
    tempLevel.lines.push(new Line(780, 540, 680, 640));
    tempLevel.lines.push(new Line(680, 640, 680, 660));
    tempLevel.lines.push(new Line(680, 660, 780, 660));
    tempLevel.lines.push(new Line(780, 660, 780, 720));
    tempLevel.lines.push(new Line(780, 720, 660, 720));
    tempLevel.lines.push(new Line(660, 720, 660, 680));
    tempLevel.lines.push(new Line(660, 680, 640, 680));
    tempLevel.lines.push(new Line(640, 680, 540, 780));
    tempLevel.lines.push(new Line(540, 780, 460, 780));
    tempLevel.lines.push(new Line(460, 780, 460, 900));
    tempLevel.lines.push(new Line(1100, 900, 1100, 860));
    tempLevel.lines.push(new Line(1100, 860, 1080, 860));
    tempLevel.lines.push(new Line(1080, 860, 1080, 800));
    tempLevel.lines.push(new Line(1080, 800, 1180, 800));
    tempLevel.lines.push(new Line(1180, 800, 1180, 580));
    tempLevel.lines.push(new Line(1180, 580, 1140, 580));
    tempLevel.lines.push(new Line(1140, 580, 1140, 560));
    tempLevel.lines.push(new Line(1140, 560, 1180, 520));
    tempLevel.lines.push(new Line(1180, 520, 1180, 80));
    tempLevel.lines.push(new Line(1180, 80, 1140, 80));
    tempLevel.lines.push(new Line(1140, 80, 1140, 0));
    tempLevel.lines.push(new Line(1100, 220, 1100, 280));
    tempLevel.lines.push(new Line(1100, 280, 980, 280));
    tempLevel.lines.push(new Line(980, 280, 980, 220));
    tempLevel.lines.push(new Line(980, 220, 1100, 220));
    tempLevel.lines.push(new Line(820, 160, 820, 220));
    tempLevel.lines.push(new Line(820, 220, 700, 220));
    tempLevel.lines.push(new Line(700, 220, 700, 160));
    tempLevel.lines.push(new Line(700, 160, 820, 160));
    tempLevel.lines.push(new Line(560, 360, 560, 420));
    tempLevel.lines.push(new Line(560, 420, 440, 420));
    tempLevel.lines.push(new Line(440, 420, 440, 360));
    tempLevel.lines.push(new Line(440, 360, 560, 360));
    tempLevel.lines.push(new Line(220, 0, 220, 40));
    tempLevel.lines.push(new Line(220, 40, 540, 40));
    tempLevel.lines.push(new Line(540, 40, 540, 0));
    tempLevel.lines.push(new Line(640, 0, 640, 40));
    tempLevel.lines.push(new Line(640, 40, 980, 40));
    tempLevel.lines.push(new Line(980, 40, 980, 0));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(20, 0, 20, 920));
    tempLevel.lines.push(new Line(220, 900, 220, 460));
    tempLevel.lines.push(new Line(220, 460, 280, 460));
    tempLevel.lines.push(new Line(280, 460, 420, 600));
    tempLevel.lines.push(new Line(420, 600, 460, 600));
    tempLevel.lines.push(new Line(460, 600, 540, 680));
    tempLevel.lines.push(new Line(540, 680, 540, 900));
    tempLevel.lines.push(new Line(640, 900, 640, 740));
    tempLevel.lines.push(new Line(640, 740, 660, 720));
    tempLevel.lines.push(new Line(660, 720, 720, 720));
    tempLevel.lines.push(new Line(720, 720, 820, 820));
    tempLevel.lines.push(new Line(820, 820, 940, 820));
    tempLevel.lines.push(new Line(940, 820, 980, 860));
    tempLevel.lines.push(new Line(980, 860, 980, 900));
    tempLevel.lines.push(new Line(1140, 900, 1140, 560));
    tempLevel.lines.push(new Line(1140, 560, 1180, 560));
    tempLevel.lines.push(new Line(1180, 560, 1180, 20));
    tempLevel.lines.push(new Line(1180, 40, 1120, 40));
    tempLevel.lines.push(new Line(1120, 40, 1120, 0));
    tempLevel.lines.push(new Line(920, 240, 920, 300));
    tempLevel.lines.push(new Line(920, 300, 620, 300));
    tempLevel.lines.push(new Line(620, 300, 620, 240));
    tempLevel.lines.push(new Line(620, 240, 720, 240));
    tempLevel.lines.push(new Line(720, 240, 820, 140));
    tempLevel.lines.push(new Line(820, 140, 920, 240));
    tempLevel.lines.push(new Line(280, 0, 280, 40));
    tempLevel.lines.push(new Line(280, 40, 360, 40));
    tempLevel.lines.push(new Line(360, 40, 360, 0));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(1120, 900, 1120, 860));
    tempLevel.lines.push(new Line(1120, 860, 1180, 860));
    tempLevel.lines.push(new Line(1180, 860, 1180, 620));
    tempLevel.lines.push(new Line(1180, 620, 1120, 620));
    tempLevel.lines.push(new Line(1120, 620, 1120, 580));
    tempLevel.lines.push(new Line(1120, 580, 1200, 500));
    tempLevel.lines.push(new Line(1200, 500, 1200, 0));
    tempLevel.lines.push(new Line(360, 900, 360, 740));
    tempLevel.lines.push(new Line(360, 740, 280, 740));
    tempLevel.lines.push(new Line(280, 740, 280, 920));
    tempLevel.lines.push(new Line(20, 900, 20, 620));
    tempLevel.lines.push(new Line(20, 620, 80, 620));
    tempLevel.lines.push(new Line(80, 620, 80, 580));
    tempLevel.lines.push(new Line(80, 580, 0, 500));
    tempLevel.lines.push(new Line(0, 500, 0, 0));
    tempLevel.lines.push(new Line(460, 620, 460, 720));
    tempLevel.lines.push(new Line(460, 720, 480, 720));
    tempLevel.lines.push(new Line(480, 720, 480, 620));
    tempLevel.lines.push(new Line(480, 620, 460, 620));
    tempLevel.lines.push(new Line(760, 680, 760, 720));
    tempLevel.lines.push(new Line(760, 720, 840, 720));
    tempLevel.lines.push(new Line(840, 720, 840, 680));
    tempLevel.lines.push(new Line(840, 680, 760, 680));
    tempLevel.lines.push(new Line(1000, 0, 1000, 40));
    tempLevel.lines.push(new Line(1000, 40, 920, 40));
    tempLevel.lines.push(new Line(920, 40, 920, 400));
    tempLevel.lines.push(new Line(920, 400, 800, 400));
    tempLevel.lines.push(new Line(800, 400, 800, 360));
    tempLevel.lines.push(new Line(800, 360, 840, 360));
    tempLevel.lines.push(new Line(840, 360, 840, 40));
    tempLevel.lines.push(new Line(840, 40, 820, 40));
    tempLevel.lines.push(new Line(820, 40, 820, 0));
    tempLevel.lines.push(new Line(360, 0, 360, 80));
    tempLevel.lines.push(new Line(360, 80, 280, 80));
    tempLevel.lines.push(new Line(280, 80, 280, 0));
    tempLevel.lines.push(new Line(280, 240, 280, 360));
    tempLevel.lines.push(new Line(280, 360, 320, 360));
    tempLevel.lines.push(new Line(320, 360, 320, 280));
    tempLevel.lines.push(new Line(320, 280, 400, 280));
    tempLevel.lines.push(new Line(400, 280, 400, 240));
    tempLevel.lines.push(new Line(400, 240, 280, 240));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(280, 900, 280, 360));
    tempLevel.lines.push(new Line(280, 360, 260, 360));
    tempLevel.lines.push(new Line(260, 360, 260, 320));
    tempLevel.lines.push(new Line(260, 320, 360, 320));
    tempLevel.lines.push(new Line(360, 320, 360, 900));
    tempLevel.lines.push(new Line(820, 900, 820, 860));
    tempLevel.lines.push(new Line(820, 860, 1000, 860));
    tempLevel.lines.push(new Line(1000, 860, 1000, 900));
    tempLevel.lines.push(new Line(540, 620, 540, 660));
    tempLevel.lines.push(new Line(540, 660, 620, 660));
    tempLevel.lines.push(new Line(620, 660, 620, 620));
    tempLevel.lines.push(new Line(620, 620, 540, 620));
    tempLevel.lines.push(new Line(820, 420, 820, 460));
    tempLevel.lines.push(new Line(820, 460, 840, 460));
    tempLevel.lines.push(new Line(840, 460, 840, 520));
    tempLevel.lines.push(new Line(840, 520, 920, 520));
    tempLevel.lines.push(new Line(920, 520, 920, 0));
    tempLevel.lines.push(new Line(820, 420, 880, 420));
    tempLevel.lines.push(new Line(880, 420, 880, 240));
    tempLevel.lines.push(new Line(880, 240, 840, 240));
    tempLevel.lines.push(new Line(840, 240, 840, 0));
    tempLevel.lines.push(new Line(620, 300, 620, 340));
    tempLevel.lines.push(new Line(620, 340, 700, 340));
    tempLevel.lines.push(new Line(700, 340, 700, 300));
    tempLevel.lines.push(new Line(700, 300, 620, 300));
    tempLevel.lines.push(new Line(340, 0, 340, 140));
    tempLevel.lines.push(new Line(340, 140, 280, 140));
    tempLevel.lines.push(new Line(280, 140, 280, 40));
    tempLevel.lines.push(new Line(280, 40, 220, 40));
    tempLevel.lines.push(new Line(220, 40, 220, 0));
    tempLevel.lines.push(new Line(0, 0, 0, 900));
    tempLevel.lines.push(new Line(1200, 900, 1200, 0));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(0, 0, 0, 900));
    tempLevel.lines.push(new Line(220, 900, 220, 860));
    tempLevel.lines.push(new Line(220, 860, 340, 860));
    tempLevel.lines.push(new Line(340, 860, 340, 900));
    tempLevel.lines.push(new Line(840, 900, 840, 600));
    tempLevel.lines.push(new Line(840, 600, 920, 600));
    tempLevel.lines.push(new Line(920, 600, 920, 900));
    tempLevel.lines.push(new Line(1200, 900, 1200, 0));
    tempLevel.lines.push(new Line(840, 0, 840, 40));
    tempLevel.lines.push(new Line(840, 40, 920, 40));
    tempLevel.lines.push(new Line(920, 40, 920, 0));
    tempLevel.lines.push(new Line(840, 240, 840, 420));
    tempLevel.lines.push(new Line(840, 420, 920, 420));
    tempLevel.lines.push(new Line(920, 420, 920, 240));
    tempLevel.lines.push(new Line(920, 240, 840, 240));
    tempLevel.lines.push(new Line(580, 740, 580, 780));
    tempLevel.lines.push(new Line(580, 780, 660, 780));
    tempLevel.lines.push(new Line(660, 780, 660, 740));
    tempLevel.lines.push(new Line(660, 740, 580, 740));
    tempLevel.lines.push(new Line(400, 400, 400, 440));
    tempLevel.lines.push(new Line(400, 440, 480, 440));
    tempLevel.lines.push(new Line(480, 440, 480, 400));
    tempLevel.lines.push(new Line(480, 400, 400, 400));
    tempLevel.lines.push(new Line(280, 0, 280, 100));
    tempLevel.lines.push(new Line(280, 100, 360, 100));
    tempLevel.lines.push(new Line(360, 100, 360, 40));
    tempLevel.lines.push(new Line(360, 40, 420, 40));
    tempLevel.lines.push(new Line(420, 40, 420, 0));
    tempLevel.lines.push(new Line(580, 440, 580, 540));
    tempLevel.lines.push(new Line(580, 540, 600, 540));
    tempLevel.lines.push(new Line(600, 540, 600, 440));
    tempLevel.lines.push(new Line(600, 440, 580, 440));
    levels.push(tempLevel);
    tempLevel = new Level();
    tempLevel.lines.push(new Line(420, 900, 420, 860));
    tempLevel.lines.push(new Line(420, 860, 280, 860));
    tempLevel.lines.push(new Line(280, 860, 280, 900));
    tempLevel.lines.push(new Line(160, 820, 160, 860));
    tempLevel.lines.push(new Line(160, 860, 120, 860));
    tempLevel.lines.push(new Line(120, 860, 120, 820));
    tempLevel.lines.push(new Line(120, 820, 160, 820));
    tempLevel.lines.push(new Line(120, 460, 120, 500));
    tempLevel.lines.push(new Line(120, 500, 160, 500));
    tempLevel.lines.push(new Line(160, 500, 160, 460));
    tempLevel.lines.push(new Line(160, 460, 120, 460));
    tempLevel.lines.push(new Line(920, 900, 920, 380));
    tempLevel.lines.push(new Line(920, 380, 1080, 380));
    tempLevel.lines.push(new Line(1080, 380, 1080, 320));
    tempLevel.lines.push(new Line(1080, 320, 1060, 320));
    tempLevel.lines.push(new Line(1060, 320, 1060, 360));
    tempLevel.lines.push(new Line(1060, 360, 280, 360));
    tempLevel.lines.push(new Line(280, 360, 280, 660));
    tempLevel.lines.push(new Line(280, 660, 840, 660));
    tempLevel.lines.push(new Line(840, 660, 840, 900));
    tempLevel.lines.push(new Line(1200, 900, 1200, 0));
    tempLevel.lines.push(new Line(0, 900, 0, 0));
    tempLevel.lines.push(new Line(0, 0, 1200, 0));
    levels.push(tempLevel);
    for (let i = 0; i < levels.length; i++) {
        levels[i].levelImage = levelImages[i];
        if ((i >= 25 && i <= 31)) {
            levels[i].isBlizzardLevel = true;
        }
        if ((i >= 36 && i <= 38)) {
            levels[i].isIceLevel = true;
        }
    }

    levels[0].coins.push(new Coin(100,100));
    levels[0].coins.push(new Coin( 198,449));
    levels[0].coins.push(new Coin( 1012,456));
    // levels[0].coins.push(new Coin( 598,96));
    // levels[0].coins.push(new Coin( 318,514));

    // levels[0].coins.push(new Coin( 882,462));
    // levels[0].coins.push(new Coin( 881,820));
    // levels[0].coins.push(new Coin( 312,817));
    // levels[0].coins.push(new Coin(x,y));


    // levels[0].coins.push(new Coin( 1061,653));
    levels[4].coins.push(new Coin(143, 160));
    levels[5].coins.push(new Coin(801, 140));
    levels[6].coins.push(new Coin(419, 541));
    levels[8].coins.push(new Coin(780, 459));
    levels[16].coins.push(new Coin(650, 570));
    levels[16].coins.push(new Coin(195, 339));
    levels[17].coins.push(new Coin(722, 648));
    levels[17].coins.push(new Coin(1184, 781));
    levels[17].coins.push(new Coin(1077, 297));
    levels[24].coins.push(new Coin(971, 514));
    levels[37].coins.push(new Coin(158, 666));
    levels[36].coins.push(new Coin(721, 187));
    levels[37].coins.push(new Coin(1042, 151));
    levels[42].coins.push(new Coin(986, 306));

    // levels[0].coins.push(new Coin( 595,30 , "progress" ));


    levels[1].coins.push(new Coin( 143,148 , "progress" ));
    levels[1].coins.push(new Coin( 155,142 , "progress" ));
    levels[1].coins.push(new Coin( 65,148 , "progress" ));

    levels[2].coins.push(new Coin( 125,187 , "progress" ));
    levels[2].coins.push(new Coin( 51,183 , "progress" ));
    levels[3].coins.push(new Coin( 843,125 , "progress" ));
    levels[3].coins.push(new Coin( 411,170 , "progress" ));
    levels[4].coins.push(new Coin( 137,173 , "progress" ));
    levels[5].coins.push(new Coin( 1122,65 , "progress" ));
    levels[5].coins.push(new Coin( 1121,151 , "progress" ));
    levels[5].coins.push(new Coin( 1101,92 , "progress" ));
    levels[6].coins.push(new Coin( 349,74 , "progress" ));
    levels[7].coins.push(new Coin( 154,293 , "progress" ));
    levels[8].coins.push(new Coin( 602,182 , "progress" ));
    levels[12].coins.push(new Coin( 1135,37 , "progress" ));
    levels[13].coins.push(new Coin( 665,193 , "progress" ));
    levels[13].coins.push(new Coin( 587,194 , "progress" ));
    levels[17].coins.push(new Coin( 975,147 , "progress" ));
    levels[22].coins.push(new Coin( 1139,111 , "progress" ));
    levels[36].coins.push(new Coin( 686,205 , "progress" ));
    levels[37].coins.push(new Coin( 1005,181 , "progress" ));
    levels[39].coins.push(new Coin( 365,187 , "progress" ));

    levels[1].hasProgressionCoins = true;
    levels[2].hasProgressionCoins = true;
    levels[3].hasProgressionCoins = true;
    levels[4].hasProgressionCoins = true;
    levels[5].hasProgressionCoins = true;
    levels[6].hasProgressionCoins = true;
    levels[7].hasProgressionCoins = true;
    levels[8].hasProgressionCoins = true;
    levels[12].hasProgressionCoins = true;
    levels[13].hasProgressionCoins = true;
    levels[17].hasProgressionCoins = true;
    levels[22].hasProgressionCoins = true;
    levels[36].hasProgressionCoins = true;
    levels[37].hasProgressionCoins = true;
    levels[39].hasProgressionCoins = true;

}