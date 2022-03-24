var membre001={
    id:"001",
    name:"CARL",
    grade:2,
}
var membre002={
    id:"002",
    name:"ahmed",
    grade:2,
    }
var team1={
    membre : [membre001,membre002],

}
console.log(team1);


//2eme maniere

class membre{
        id;
        name;
        grade;
        constructor(id,name,grade){
            this.id=id;
            this.grade=grade;
            this.name=name;
        }
}
var membre003= new membre(003,"sophie",3);
var membre004= new membre(004,"ritej",5);
class team{
    membre;
    constructor(membre)
{
    this.membre=membre;
}}
var newteam=new team([membre003,membre004])
console.log(newteam);