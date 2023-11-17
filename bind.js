var Skills = {
    primarySkill : "Core JavaScript",
    secondSkill : " React and Redux",
    getSkillSet : function (){
        console.log(this.primarySkill, this.secondSkill)
        // var that = this;
        // setTimeout(function name(){ // this executes in its timeout context
        //     // console.log(this.primarySkill,this.secondSkill)
        //     console.log(that.primarySkill,that.secondSkill)
        // },2000)

        setTimeout(function name(){ // this executes in its timeout context
            console.log(this.primarySkill,this.secondSkill)
            
        }.bind(this),2000)
    }
}
Skills.getSkillSet()

