}return t.prototype.getEcgData=function(t){return void 0==t||1==t?this.datas:2==t?this.datas1:3==t?this.datas2:4==t?this.datas3:this.datas},t}();__reflect(EcgData.prototype,"EcgData");var Item=function(){function t(t,a,i){this.ecg=t,this.bmpSnap=a,this.rectClip=i}return t.prototype.getEcg=function(){return this.ecg},t.prototype.getBmpSnap=function(){return this.bmpSnap},t.prototype.getRectClip=function(){return this.rectClip},t}();__reflect(Item.prototype,"Item");var Main2=function(t){function a(){var a=t.call(this)||this;return a.once(egret.Event.ADDED_TO_STAGE,a.onAddToStage,a),a}return __extends(a,t),a.prototype.onAddToStage=function(t){var a=new egret.ImageLoader;a.once(egret.Event.COMPLETE,this.imgLoadHandler,this),a.load("resource/cartoon-egret_02_small.png")},a.prototype.imgLoadHandler=function(t){var i=this;this._bmd=t.currentTarget.data,this._rectScope=new egret.Rectangle(0,0,this.stage.stageWidth,this.stage.stageHeight),this._vcCont=new Array;for(var e=0;e<a.NUM;++e){var r=new MotionSprite;r.anchorOffsetX=L.W_SHAPE/2,r.anchorOffsetY=L.H_SHAPE/2,r.x=this._rectScope.x+this._rectScope.width*Math.random(),r.y=this._rectScope.y+this._rectScope.height*Math.random(),r.factor=.8+.4*Math.random(),this._vcCont.push(r),this.addChild(r)}BatchContentFiller.reset(this._vcCont),BatchContentFiller.fill(this._vcCont),BatchContentFiller.autoAncher(this._vcCont),this._txInfo=new egret.TextField,this.addChild(this._txInfo),this._txInfo.size=28,this._txInfo.x=250,this._txInfo.y=10,this._txInfo.width=this.stage.stageWidth-260,this._txInfo.textAlign=egret.HorizontalAlign.LEFT,this._txInfo.textColor=0,this._txInfo.type=egret.TextFieldType.DYNAMIC,this._txInfo.lineSpacing=6,this._txInfo.multiline=!0,this._txInfo.touchEnabled=!0,this._txInfo.cacheAsBitmap=!0,this._bgInfo=new egret.Shape,this.addChildAt(this._bgInfo,this.numChildren-1),this._bgInfo.x=this._txInfo.x,this._bgInfo.y=this._txInfo.y,this._bgInfo.cacheAsBitmap=!0,this._nScaleBase=0,this._bCache=!1,this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,function(t){i.planRdmMotion()},this),this._txInfo.addEventListener(egret.TouchEvent.TOUCH_TAP,function(t){t.stopImmediatePropagation(),i._bCache=!i._bCache;for(var a=i._vcCont.length-1;a>=0;a--)i._vcCont[a].cacheAsBitmap=i._bCache;i.updateInfo()},this),this.planRdmMotion(),this.stage.addEventListener(egret.Event.ENTER_FRAME,function(t){switch(i._iMotionMode){case MotionMode.ROT:for(var e=a.SCALE_BASE+Math.abs(Math.sin(i._nScaleBase+=.05))*a.SCALE_RANGE,r=i._vcCont.length-1;r>=0;r--)i._vcCont[r].rotation+=3*(r%2?1:-1)*i._vcCont[r].factor,i._vcCont[r].scaleX=i._vcCont[r].scaleY=e;break;case MotionMode.MOV:for(var o,r=i._vcCont.length-1;r>=0;r--)o=i._vcCont[r].x+3*(r%2?1:-1)*i._vcCont[r].factor,o<i._rectScope.left?o=i._rectScope.right:o>i._rectScope.right&&(o=i._rectScope.left),i._vcCont[r].x=o}},this)},a.prototype.planRdmMotion=function(){switch(void 0==arguments.callee.runyet?(arguments.callee.runyet=1,this._iMotionMode=Math.random()>.5?MotionMode.ROT:MotionMode.MOV):this._iMotionMode=(this._iMotionMode+1)%MotionMode.TOTAL,this.updateInfo(),this._iMotionMode){case MotionMode.ROT:for(var t=this._vcCont.length-1;t>=0;t--)this._vcCont[t].scaleX=this._vcCont[t].scaleY=a.SCALE_BASE;break;case MotionMode.MOV:for(var t=this._vcCont.length-1;t>=0;t--)this._vcCont[t].scaleX=this._vcCont[t].scaleY=a.SCALE_BASE+Math.random()*a.SCALE_RANGE}},a.prototype.updateInfo=function(){this._txInfo.text="轻触文字切换是否用位图缓存\n当前位图缓存："+(this._bCache?"启用\n还卡？换手机吧！":"关闭\n不卡只能说明机器太牛！")+"\n轻触舞台切换旋转缩放/平移\n当前运动："+["旋转缩放","平移"][this._iMotionMode],this._bgInfo.graphics.clear(),this._bgInfo.graphics.beginFill(16777215,.5),this._bgInfo.graphics.drawRect(0,0,this._txInfo.width,this._txInfo.height),this._bgInfo.graphics.endFill()},a.UNITS_PER_CONT=16,a.NUM=64,a.SCALE_BASE=.7,a.SCALE_RANGE=.6,a}(egret.DisplayObjectContainer);__reflect(Main2.prototype,"Main2");var MotionSprite=function(t){function a(){return null!==t&&t.apply(this,arguments)||this}return __extends(a,t),a}(egret.Sprite);__reflect(MotionSprite.prototype,"MotionSprite");var L=function(){function t(){}return t.W_SHAPE=160,t.H_SHAPE=210,t}();__reflect(L.prototype,"L");var MotionMode=function(){function t(){}return t.ROT=0,t.MOV=1,t.TOTAL=2,t}();__reflect(MotionMode.prototype,"MotionMode");var BatchContentFiller=function(){function t(){}return t.fill=function(t){for(var a=0;a<Main2.UNITS_PER_CONT;a++)this.prodRdmGraph(t,L.W_SHAPE,L.H_SHAPE)},t.prodRdmGraph=function(t,a,i){var e=Math.floor(2*Math.random()),r=(Math.floor(255*Math.random())<<16)+(Math.floor(255*Math.random())<<8)+Math.floor(255*Math.random()),o=(Math.floor(255*Math.random())<<16)+(Math.floor(255*Math.random())<<8)+Math.floor(255*Math.random()),n=20+10*Math.random(),s=30+20*Math.random(),h=20+10*Math.random(),g=L.W_SHAPE*Math.random(),c=L.H_SHAPE*Math.random();console.log("prodRdmGraph:",n,s,h,g,c,r,o,e);for(var _=t.length-1;_>=0;_--)switch(e){case 0:t[_].graphics.beginFill(r),t[_].graphics.drawRect(g-s/2,c-h/2,s,h),t[_].graphics.endFill(),console.log("prodRdmGraph: 画矩形",_);break;case 1:t[_].graphics.beginFill(r),t[_].graphics.drawCircle(g,c,n),t[_].graphics.endFill()}},t.autoAncher=function(t){for(var a=t.length-1;a>=0;a--)t[a].anchorOffsetX=t[a].width/2,t[a].anchorOffsetY=t[a].height/2,console.log("vcCont[i] 新锚点：",t[a].anchorOffsetX,t[a].anchorOffsetY)},t.reset=function(t){for(var a=t.length-1;a>=0;a--)t[a].graphics.clear(),t[a].removeChildren()},t}();__reflect(BatchContentFiller.prototype,"BatchContentFiller");var Main3=function(t){function a(){var a=t.call(this)||this;return a.ALLDg=new Array,a.addEventListener(egret.Event.ADDED_TO_STAGE,a.onAddToStage,a),a}return __extends(a,t),a.prototype.initDraw=function(t,a,i,e,r){var o=new egret.Shape;o.cacheAsBitmap=!0,this.addChild(o);var n=new Dg(o,(new EcgData).getEcgData(1),a,i,e,r);this.ALLDg.push(n)},a.prototype.draw=function(t,a){this.initDraw((new EcgData).getEcgData(1),1,4,t,a),this.initDraw((new EcgData).getEcgData(1),2,10,t,a),this.initDraw((new EcgData).getEcgData(1),3,20,t,a),this.initDraw((new EcgData).getEcgData(1),4,2,t,a)},a.prototype.onAddToStage=function(t){for(var a=this,i=0;10>i;i++)for(var e=0;4>e;e++)this.draw(i,e);this.stage.addEventListener(egret.Event.ENTER_FRAME,function(t){for(var i=(a.ALLDg[0]._shape,0);i<a.ALLDg.length;i++)a.ALLDg[i].ecgDraw()},this)},a}(egret.DisplayObjectContainer);__reflect(Main3.prototype,"Main3");var Main=function(t){function a(){var a=t.call(this)||this;return a.achievementScoller=new eui.Scroller,a.Allshap=new Array,a.addEventListener(egret.Event.ADDED_TO_STAGE,a.onAddToStage,a),a}return __extends(a,t),a.prototype.onAddToStage=function(t){for(var a=0;10>a;a++)for(var i=0;4>i;i++)this.draw(a,i);setInterval(this.mergeShape,100,this)},a.prototype.mergeShape=function(t){for(var a=0;a<t.Allshap.length;a++){var i=t.Allshap[a];t.addChild(i)}},a.prototype.draw=function(t,a){this.initDraw((new EcgData).getEcgData(1),1,4,t,a),this.initDraw((new EcgData).getEcgData(1),2,10,t,a),this.initDraw((new EcgData).getEcgData(1),3,20,t,a),this.initDraw((new EcgData).getEcgData(1),4,2,t,a)},a.prototype.initDraw=function(t,a,i,e,r){var o=new egret.Shape;if(o.cacheAsBitmap=!0,1==a)this.addChild(o);else{var n=this.Allshap.length;this.Allshap[n]=o}new DrawEcg(o,t,a,i,e,r).ecgDraw()},a}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var MainBak=function(t){function a(){var a=t.call(this)||this;return a.achievementScoller=new eui.Scroller,a.Allshap=new Array,a.addEventListener(egret.Event.ADDED_TO_STAGE,a.onAddToStage,a),a}return __extends(a,t),a.prototype.onAddToStage=function(t){for(var a=0;10>a;a++)for(var i=0;4>i;i++)this.draw(a,i);setInterval(this.mergeShape,100,this)},a.prototype.mergeShape=function(t){for(var a=0;a<t.Allshap.length;a++){console.log(a);var i=t.Allshap[a];t.addChild(i)}},a.prototype.draw=function(t,a){this.initDraw((new EcgData).getEcgData(1),1,4,t,a),this.initDraw((new EcgData).getEcgData(1),2,10,t,a),this.initDraw((new EcgData).getEcgData(1),3,20,t,a),this.initDraw((new EcgData).getEcgData(1),4,2,t,a)},a.prototype.initDraw=function(t,a,i,e,r){var o=new egret.Shape;if(1==a)this.addChild(o);else{var n=this.Allshap.length;this.Allshap[n]=o}new DrawEcg(o,t,a,i,e,r).ecgDraw()},a}(egret.DisplayObjectContainer);__reflect(MainBak.prototype,"MainBak");