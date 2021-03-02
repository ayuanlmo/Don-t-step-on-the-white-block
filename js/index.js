new Vue({
	el:'#app',
	data(){
		return{
			itemList:[],
			storage:window.localStorage,
			appConfig:{
				playType:0,
			},
			fraction:0,
		}
	},
	methods:{
		getRandomNumber(m){
			return parseInt(m*Math.random());
		},
		init(type=0){
			if(type === 0){
				//
				for(let i = 1; i<=5; i++){
					this.itemList.push(this.getItems(3,true));
				}
			}else{
				//自动
				for(let i = 1; i<=5; i++){
					if(i === 1 || i === 2){
						this.itemList.push(this.getItems(3,true));
					}else{
						this.itemList.push(this.getItems(3,false));
						
					}
				}
			}
		},
		getItems(m,auto){
			let i = this.getRandomNumber(m);
			let obj = {item:[]}
			for(let j = 1; j<=m;j++){
				obj.item.push({
					v:0
				})
			}
			if(auto){
				obj.item[i].v = 1;
			}
			return obj;
		},
		clickItem(i,t){
			if(i !== this.itemList.length-1){
				return
			}else if(t === 1){
				this.fraction++;
				this.itemList.splice(i);
				this.itemList.unshift(this.getItems(3,true));
			}else{
				alert(`您输了，最终得分：${this.fraction}`);
				this.fraction = 0;
				//输了
			}
		},
	},
	
	mounted() {
		this.init();
	},
	watch:{
		// 'appConfig.playType':{
		// 	deep:true,
		// 	handler:(n)=>{
				
		// 	}
		// }
	}
})