import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath="C:\\Users\\HP\\OneDrive\\Documents\\Desktop\\VS CODE FILES\\BACKEND\\NodeJs\\exVid93";
let files=await fs.readdir(basePath);
for (const item of files) {
    console.log(item);
    let ext=item.split(".")[item.split(".").length-1];
    console.log(ext);
    if(ext !== "js" && ext !== "json" && item.split(".").length > 1){
        if(fsn.existsSync(path.join(basePath+ext))){
            fs.rename(path.join(basePath,item),path.join(basePath,ext,item));
        } else{
            fs.mkdir(ext);
            fs.rename(path.join(basePath,item),path.join(basePath,ext,item));
        }
    }
}