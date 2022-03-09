import {
    atom,
  } from 'recoil';
  
export const firstname = atom({
    key: 'firstname', 
    default: "", 
});
export const lastname = atom({
  key: 'lastname', 
  default: "", 
});
export const email = atom({
  key: 'email', 
  default: "", 
});
export const phonenumber = atom({
  key: 'phonenumber', 
  default: 0, 
});

export const workingfrompreference = atom({
  key:'workingfrompreference',
  default:"",
})

export const contactwithcovid19 = atom({
  key:'contactwithcovid19',
  default:true,
})

export const hadcovid = atom({
  key:'hadcovid',
  default:"00/00/00",
})

export const isvaccinated = atom({
  key:'isvacciated',
  default:true,
})

export const vaccinatedat = atom({
  key:'vaccinatedat',
  default:"00/00/00",
})

export const willorganizedevtalk = atom({
  key:"will_organize_devtalk",
  default: true,
})

export const devtalktopic = atom({
  key:"devtalk_topic",
  default: "I would...",
})

export const somethingspecial = atom({
  key:"something_special",
  default:"I...",
})
export const technicalskills = atom({
  key:"technicalskills",
  default:[]
})

export const skills = atom({
  key:"skills",
  default:[]
})

export const duration = atom({
  key:"skills",
  default:[]
})