<template>
    <div id="Main">
        <h1 style="color:rgb(250,198,127)">欢迎使用动物识别</h1>
        <el-image class="image" :src="imgUrl" fit="cover">
            <template #error>
                <div style="background-color:rgba(0,0,0,0);">
                </div>
             </template>
        </el-image>
        <input 
            type="file" 
            accept="image/*" 
            capture="camera" 
            v-show="false" 
            ref="imageinput"
            @change="imageInputHandle"
        >
        <el-button type="primary" @click="buttonTouch">{{ buttonInfoBox }}</el-button>
        <transition name="down-fade"><div v-if="hasResult" class="resultBox"><span v-html="dataInfo"></span></div></transition>
    </div>
</template>

<script>
import { compress } from '../tools/imgTools.js'
import { ElMessage } from 'element-plus'
import axios from 'axios'
import qs from 'qs'
import backGroundVue from '../components/backGround.vue'

const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

export default {
    name:"smartImage",
    components:{
        backGroundVue
    },
    data(){
        return {
            config:{
                allowMaxSize:4
            },
            dataInfo:"",
            imgUrl:"",
            hasResult:false,
            imgInfoBox:"等待您拍摄图片",
            buttonInfoBox:"识别图像",
            buttonClickLock:false,
            imageHandling:false,
            clearOneShot:true
        }
    },
    methods:{
        async buttonTouch(){
            if(this.buttonClickLock||this.imageHandling)return

            ElMessage.info("由于系统限制 您需要点击两次按钮 QAQ")

            if(this.clearOneShot){
                this.buttonInfoBox = "再点一次以继续"
                this.clearOneShot = false
                return
            }
            this.buttonClickLock = true
            this.$refs.imageinput.click()
            this.buttonInfoBox = "正在调用系统摄像头..."
            await delay(1000)
            if(!this.imageHandling)this.buttonInfoBox = "拍摄并识别图像"
            this.buttonClickLock = false
        },
        imageInputHandle(){
            if(this.imageHandling)return
            this.imageHandling = true
            this.buttonInfoBox = "获取图片数据中..."

            this.imageInput().then(()=>{
                this.imageHandling = false
                this.buttonInfoBox = "拍摄并识别图像"
            }).catch((e)=>{
                ElMessage.error(e)
                console.log(e)
                this.imageHandling = false
                this.buttonInfoBox = "拍摄并识别图像"
            })
           
        },
        async imageInput(){
            //console.log(this.$refs.imageinput.files)

            if(!this.$refs.imageinput.files[0]){
                throw '无法读取您拍摄的图片 QAQ'
            }

            const imageObj = this.$refs.imageinput.files[0]
            var needCompress = false
            var imgSize = Math.round( imageObj.size/1024/1024) ;
            if(imgSize>=4){
                ElMessage.info('您拍摄的图片太大 无法直接识别 程序正在压缩')
                needCompress = true
            }

            
            var imgUrl = await new Promise((resolve,reject)=>{
                var reader = new FileReader()
                reader.onload = ()=>{resolve(reader.result)}
                reader.onerror = ()=>{reject("读取您拍摄的图片数据出错 QAQ")}
                reader.readAsDataURL(imageObj)
            })
            //console.log(imgUrl)
            if(!imgUrl){
                throw '无法读取您拍摄的图片数据 QAQ'
                
            }

            if(needCompress){
                this.buttonInfoBox = "压缩图片中..."
                imgUrl = await compress(imgUrl,imgSize,this.config.allowMaxSize)
                //console.log(imgUrl)
            }

            this.imgUrl = imgUrl

            this.buttonInfoBox = "上传图片中"

            var resp = null
            try{
                resp = await axios({
                    method: 'POST',
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                    data: qs.stringify({image:imgUrl}),   // 用 qs 将js对象转换为字符串 'name=edward&age=25'
                    url: 'https://aip.baidubce.com/rest/2.0/image-classify/v1/animal?access_token=your_token'
                    })
            }catch(e){
                throw `上传图片发生错误 : ${e}`
            }

            resp = resp.data
            console.log(resp)

            this.buttonInfoBox = "解析图片中..."

            if(!resp["result"]){
                throw `解析图片发生错误`
            }

            this.dataInfo = ""

            resp["result"].forEach(element => {
                this.dataInfo += `${element["name"]} : ${element["score"]*100}%`
                this.dataInfo += `<br>`
            })

            this.hasResult = true
            return
        }
    }
}
</script>

<style scoped>
#Main{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;

    margin: 60px 20px;
}

.image{
    width: 80%;
    height: 200px;
    object-fit: cover;
    background: #5E5E5E;
    margin-bottom: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
        
.resultBox{
    margin-top : 20px;
    padding: 20px 0px;
    width: 80%;
    background: #5E5E5E;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}


.down-fade-enter-active {
  transition: all 0.3s ease-out;
}

.down-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.down-fade-enter-from,
.down-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>