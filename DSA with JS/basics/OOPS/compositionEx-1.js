class Camera{
    takePhoto(){
        console.log("Photo taken with 12MP camera");
    }
}

class Battery{
    showBattery(){
        console.log("Battery at 85%");
    }
}

class SmartPhone{
    constructor(){
        this.camera = new Camera();
        this.battery = new Battery();
    }

    click(){
        this.camera.takePhoto();
    }

    batteryStatus(){
        this.battery.showBattery()
    }
}


const phone = new SmartPhone();
phone.click();         // Photo taken with 12MP camera
phone.batteryStatus(); // Battery at 85%