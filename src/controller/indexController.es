import indexModel from '../models/indexmodel'
const indexController={

	index(){
		return async(ctx,next)=>{
           ctx.body=await ctx.render('index.html',{
           	title:"大拇指点赞"//注意async的书写
           })

	    }
	},
	update(){
		return async(ctx,next)=>{
			const indexM=new indexModel();
           ctx.body=await indexM.updateNum();

	    }
	},
	star(){
		return async(ctx,next)=>{
			//  这里直接返回star的内容就可以了，用字符串的形式拿过来就可以了
			if(ctx.request.header['x-pjax']){
				//有的话直接返回组件
                //这里直接返回 star 的内容就可以了，用字符串的形式拿过来就可以了
				 ctx.body = "<x-star></x-star>";
			}else{
				//没有的话直接渲染一个页面
				ctx.body = await ctx.render('star.html', function() {
                    title: '星星点赞'
                })
			}
		}
	},
	praise(){
		return async(ctx,next)=>{
			//判断请求是的 header中是否有 x-pjax
            if (ctx.request.header['x-pjax']) {
                //有的话直接返回组件
                //这里直接返回 praise 的内容就可以了，用字符串的形式拿过来就可以了
                ctx.body = "<x-praise></x-praise>";
            } else {
                //没有的话直接渲染一个页面
                ctx.body = await ctx.render('index.html', function() {
                    title: '大拇指点赞'
                })
            }
		}
	},
	advertisement(){
		return async (ctx,next)=>{
			ctx.body = "<div style='height:150px;background-color:orange;'>。。。。。。大幅广告。。。。</div>";
		}
	}
}
export default indexController