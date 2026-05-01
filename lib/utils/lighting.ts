type Vector=[number,number,number]
type LightSetting = {
    position?:Vector;
    scale?:Vector;
    intensity?:number,
    color?:string,
}

export type ThreePointLightConfig={ 
        key_light:LightSetting;
        fill:LightSetting;
        back:LightSetting;
    };
export interface LightingConfig {

        id:number;
   
    three_point:ThreePointLightConfig;
}


export const presetlight:Record<string,LightingConfig>= {
    home_preset : {
        id:1,
        three_point:{
            key_light:{position:[-182,5,182],intensity:0.3,color:"#ffffdf"},
            fill:{position:[-185,120,-125],intensity:0.2,color:"#c2f3ff"},
            back:{position:[120,5,-128],intensity:0.2,color:"#f0fffe"}
        }

    }
}