export const compress = async (res,fileSize,allowMaxSize) => { //res代表上传的图片，fileSize大小图片的大小
    return await new Promise((resolve,reject)=>{
        var img = new Image()
        img.onload = ()=>{
            var cvs = document.createElement( 'canvas')
            var ctx = cvs.getContext('2d')
            cvs.width = img.width
            cvs.height = img.height

            ctx.clearRect(0, 0, cvs.width, cvs.height)
            ctx.drawImage(img, 0, 0, img.width, img.height)

            var compressRate = getCompressRate(allowMaxSize,fileSize)
            var dataUrl = cvs.toDataURL( 'image/jpeg', compressRate)
            resolve(dataUrl)
        }
        img.onerror = (e)=>{reject(e)}
        img.src = res;
    })

   
}

const getCompressRate = (allowMaxSize,fileSize) => { //计算压缩比率，size单位为MB
      var compressRate = 1;

      if(fileSize/allowMaxSize > 4){
           compressRate = 0.5;
      } else if(fileSize/allowMaxSize >3){
           compressRate = 0.6;
      } else if(fileSize/allowMaxSize >2){
           compressRate = 0.7;
      } else if(fileSize > allowMaxSize){
           compressRate = 0.8;
      } else{
           compressRate = 0.9;
      }

      return compressRate;
}
