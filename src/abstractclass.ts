abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number{
        return 9;
    }
}


class Twitter extends TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("Method implement");
    }
    
}

const hitesh = new Twitter('protrait', 'test', 3);
hitesh.getReelTime();