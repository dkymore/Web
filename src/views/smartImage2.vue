<template>
    <div id="Main">
        <div class="imgContain">
            <el-image :src="imgUrl" fit="cover" style="width:100%;height:100%">
                <template #error>
                    <div style="background-color:rgba(0,0,0,0);">
                        <p style="display: flex;justify-content: center;align-items: center;color: white;">
                            {{ imgInfoBox }}
                        </p>
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
        </div>
        <div class="buttonContain" @touchstart="buttonTouch">
            <svg v-show="buttonClickLock||imageHandling" style="width:20px;height:20px;"
                viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8="">
                <path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>
            </svg>
            <p @touchstart="buttonTouch" >{{ buttonInfoBox }}</p>
        </div>
        <transition name="down-fade">
        <div class="resultContain" v-if="hasResult">
            <h3>通用识别</h3>
            <span v-html="dataInfo.Labels"></span>
            <h3>相机识别</h3>
            <span v-html="dataInfo.AlbumLabels"></span>
            <h3>相册识别</h3>
            <span v-html="dataInfo.CameraLabels"></span>
        </div>
        </transition>
    </div>
</template>

<script>
import { compress } from '../tools/imgTools.js'
import { ElMessage } from 'element-plus'
import axios from 'axios'


const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

export default {
    name:"smartImage",
    data(){
        return {
            config:{
                allowMaxSize:4
            },
            dataInfo:{
                Labels:"",
                AlbumLabels:"",
                CameraLabels:""
            },
            imgUrl:"",
            hasResult:false,
            imgInfoBox:"等待您拍摄图片",
            buttonInfoBox:"拍摄并识别图像",
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
                resp = await axios.post("https://smi.iloli.ink/image",{data:{b64img:imgUrl}})
            }catch(e){
                throw `上传图片发生错误 : ${e}`
            }

            resp = resp.data
            console.log(resp)

            this.buttonInfoBox = "解析图片中..."

            if(resp["success"]!=true){
                throw `解析图片发生错误 : ${resp["reason"]}`
            }

            const data = resp["data"]

            this.dataInfo.Labels = ""
            this.dataInfo.CameraLabels = ""
            this.dataInfo.AlbumLabels = ""
            data["Labels"].forEach(element => {
                
                this.dataInfo.Labels+= `${element["FirstCategory"]}/${element["SecondCategory"]}/${element["Name"]} : ${element["Confidence"]}%`
                this.dataInfo.Labels+= `<br>`
            })
            data["CameraLabels"].forEach(element => {
                this.dataInfo.CameraLabels+= `${element["FirstCategory"]}/${element["SecondCategory"]}/${element["Name"]} : ${element["Confidence"]}%`
                this.dataInfo.CameraLabels+= `<br>`
            })
            data["AlbumLabels"].forEach(element => {
                this.dataInfo.AlbumLabels+= `${element["SecondCategory"]} : ${element["Confidence"]}%`
                this.dataInfo.AlbumLabels+= `<br>`
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

    padding: 60px 20px;

    background: #333333;

    
}

.imgContain {
    margin: 20px 10px 10px 10px;
    width: 100%;
    height: 215px;
    

    background-color:#292929;
    border: solid 1px rgba(189,164,91,0.6);
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 1px 3px;

}

.buttonContain {
    margin-top: 20px;
    width: 100%;
    height: 60px;

    background-color:#292929;
    border: solid 1px rgba(189,164,91,0.6);
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 1px 3px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.buttonContain p{
    color:white;
    font-size: 25px;
}

.resultContain {
    margin: 20px 0px;
    width: 100%;
    height: auto;
    padding-bottom: 20px;

    color:white;
    background-color:#292929;
    border: solid 1px rgba(189,164,91,0.6);
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 1px 3px;
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