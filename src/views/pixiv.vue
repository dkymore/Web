<template>
  <div id="Main">
    <div class="header">
        <svg data-v-429c31d4="" width="48" height="48" viewBox="0 0 24 24"><path data-v-429c31d4="" fill="#adadad" clip-rule="evenodd" d="m4 7c0-.55228.44772-1 1-1h14c.5523 0 1 .44772 1 1s-.4477 1-1 1h-14c-.55228 0-1-.44772-1-1zm0 5c0-.5523.44772-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1h-14c-.55228 0-1-.4477-1-1zm1 4c-.55228 0-1 .4477-1 1s.44772 1 1 1h14c.5523 0 1-.4477 1-1s-.4477-1-1-1z" fill-rule="evenodd"></path></svg>
        <h1>Pixiv</h1>
        <div class="headerButton">
            <svg data-v-c1125c94="" width="48" height="48" viewBox="0 0 24 24" fill="none"><path data-v-c1125c94="" fill="#adadad" fill-rule="evenodd" clip-rule="evenodd" d="M15.4615 10.6154C15.4615 9.28124 14.9874 8.14003 14.0391 7.19171C13.0907 6.24338 11.9495 5.76923 10.6154 5.76923C9.28124 5.76923 8.14003 6.24338 7.19171 7.19171C6.24338 8.14003 5.76923 9.28124 5.76923 10.6154C5.76923 11.9495 6.24338 13.0907 7.19171 14.0391C8.14003 14.9874 9.28124 15.4615 10.6154 15.4615C11.9495 15.4615 13.0907 14.9874 14.0391 14.0391C14.9874 13.0907 15.4615 11.9495 15.4615 10.6154ZM21 19.6154C21 19.9904 20.863 20.3149 20.5889 20.5889C20.3149 20.863 19.9904 21 19.6154 21C19.226 21 18.9014 20.863 18.6418 20.5889L14.9315 16.8894C13.6406 17.7837 12.2019 18.2308 10.6154 18.2308C9.58413 18.2308 8.59796 18.0307 7.65685 17.6304C6.71574 17.2302 5.90445 16.6893 5.22296 16.0078C4.54146 15.3263 4.0006 14.515 3.60036 13.5739C3.20012 12.6328 3 11.6466 3 10.6154C3 9.58413 3.20012 8.59796 3.60036 7.65685C4.0006 6.71574 4.54146 5.90445 5.22296 5.22296C5.90445 4.54146 6.71574 4.0006 7.65685 3.60036C8.59796 3.20012 9.58413 3 10.6154 3C11.6466 3 12.6328 3.20012 13.5739 3.60036C14.515 4.0006 15.3263 4.54146 16.0078 5.22296C16.6893 5.90445 17.2302 6.71574 17.6304 7.65685C18.0307 8.59796 18.2308 9.58413 18.2308 10.6154C18.2308 12.2019 17.7837 13.6406 16.8894 14.9315L20.5998 18.6418C20.8666 18.9087 21 19.2332 21 19.6154Z"></path></svg>
        </div>
    </div>
    <div class="navBar">
        <div @click="navBarSelect('Illustration')" ref="Illustration" :class="{normal:true,active:navBar.Illustration}">插画</div>
        <div @click="navBarSelect('Comic')" ref="Comic" :class="{normal:true,active:navBar.Comic}">漫画</div>
        <div @click="navBarSelect('Novel')" ref="Novel" :class="{normal:true,active:navBar.Novel}">小说</div>
    </div>
    <div class="gallery"> 
        <transition-group name="list">
            <img v-for="i in imgs" :key="i" :src="i" :style="{width:(width/2-1)+'px'}">
        </transition-group>
        
    </div>
  </div>
</template>

<script>
const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

export default {
    data(){return {
        navBar:{
            Illustration:true,
            Comic:false,
            Novel:false
        },
        imgs:[],
        storedImghost:'https://api-acgimg.iloli.ink/getPhoneCover',
        width: document.documentElement.clientWidth
    }},
    methods:{
        navBarSelect(name){
            this.navBar.Illustration = false
            this.navBar.Comic = false
            this.navBar.Novel = false
            this.navBar[name] = true
        }
    },
    async mounted(){
        for(var i=0;i<20;i++){
            this.imgs.push(this.storedImghost + '?_t=' + i)
            await delay(400)
        }
        
    },
}
</script>

<style lang="scss" scoped>
#Main{
    margin-top: 40px;

    .header{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;

        .headerButton{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;
        }
    }

    .navBar{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        
        
    }

    .gallery{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;

        img{
            height: 200px;
            object-fit: cover;
        }
    }

}



</style>

<style scoped>
.normal{
    width: 100%;
    height: 40px;
    text-align: center;
    align-items: center;
    line-height: 40px;
    border-top: 3px solid #D9D9D9;
    transition: border 0.2s ease-in-out;
}

.active{
    border-top: 3px solid aqua;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>