
/**
 * 버튼 효과 업그레이드!
 * @param  보통 상태에서 텍스쳐
 * @param  눌림 상태에서 텍스쳐
 * @return 업그레이드!;
 */
window.e = function(ob,def,dow,click) {
	// 중심을 가운데로!
	ob.anchor.x = 0.5
	ob.anchor.y = 0.5

	// 일반 상
	ob.isDown = false
	ob.isOver = true

	// Touch and Click 활성화
	ob.interactive = true


	ob.touchstart = ob.mousedown = function (e) {
		ob.isDown = true
		ob.setTexture(dow)
		setTimeout(click,200)
	}

	ob.touchend = ob.touchendoutside = ob.mouseup = ob.mouseover = function (e) {
		ob.isDown = true
		if (ob.isDown) {
			ob.setTexture(def)
			ob.isDown = false
		} else {
			ob.setTexture = dow
		}
	}
	return ob
}
