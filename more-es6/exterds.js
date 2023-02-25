class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends TeamMember{
    designation = "web course Instruction";
    team = "web team";
    constructor(name, location){
        super(name, location);
    }
    startSupportSession(time){
        console.log(`start the support session at $(time)`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember{
    designation = "web course Instruction"
    team = "web team"
    tech;

    constructor(name, location ,tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
}

class JobPlacement extends TeamMember{
    designation = "Job Placement commandos"
    team = "Job Placement"
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`)
    }
}

const alia = new Developer("alia bhatt" , "dhaka", "react");
console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement("bipash" , "kolkata" , "india");
console.log(bipasha);