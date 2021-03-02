new Vue ( {
    el: '#app' ,
    data () {
        return {
            itemList: [] ,
            storage: window.localStorage ,
            appConfig: {
                playType: 0 ,
            } ,
            fraction: 0 ,
        }
    } ,
    methods: {
        //获取一个随机数
        getRandomNumber ( m ) {
            return parseInt ( m * Math.random () );
        } ,
        //初始化
        init ( type = 0 ) {
            if ( type === 0 ) {
                for ( let i = 1 ; i <= 5 ; i++ ) {
                    this.itemList.push ( this.getItems ( 3 , true ) );
                }
            }
        } ,
        //添加一组 '块'
        getItems ( m , auto ) {
            let i = this.getRandomNumber ( m );
            let obj = { item: [] }
            for ( let j = 1 ; j <= m ; j++ ) {
                obj.item.push ( {
                    v: 0
                } )
            }
            if ( auto ) {
                obj.item[ i ].v = 1;
            }
            return obj;
        } ,
        //点击块
        clickItem ( i , t ) {
            //点击非最后一组
            if ( i !== this.itemList.length - 1 ) {
                return
            } else if ( t === 1 ) {
                //点击黑块
                this.fraction++;
                //销毁最后一组
                this.itemList.splice ( i );
                //push一组新的
                this.itemList.unshift ( this.getItems ( 3 , true ) );
            } else {
                //点击白块
                alert ( `您输了，最终得分：${ this.fraction }` );
                this.fraction = 0;
                //输了
            }
        } ,
    } ,

    mounted () {
        this.init ();
    }
} )
