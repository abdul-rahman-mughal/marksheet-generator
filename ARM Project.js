function Calculation(){
    var mat = parseInt(document.getElementById('maths').value);
    var eng = parseInt(document.getElementById('english').value);
    var com = parseInt(document.getElementById('cs').value);
    var phy = parseInt(document.getElementById('phy').value);
    var urd = parseInt(document.getElementById('urdu').value);

    if(mat>100 || eng>99 || com>99 || phy>99 || urd>99){
        alert("Please Enter Correct Values");
    }
    else{
        var obtain = mat+eng+com+phy+urd;
        console.log(obtain)
        var grade = (obtain/500)*100
        console.log(grade)
        document.getElementById("OMarks").value=obtain;
        document.getElementById("ToMarks").innerHTML=obtain;

        if(grade>=90){
            document.getElementById("TPercent").innerHTML = ((obtain/500)*100).toFixed(2) + "%";
            document.getElementById("TGrade").innerHTML="A++"
            document.getElementById("Tremarks").innerHTML='Qualified'
            document.getElementById("Tremarks").style.color= "green"
        }
        else if(grade>=80){
            document.getElementById("TPercent").innerHTML = ((obtain/500)*100).toFixed(2) + "%";
            document.getElementById("TGrade").innerHTML="A+"
            document.getElementById("Tremarks").innerHTML='Qualified'
            document.getElementById("Tremarks").style.color= "green"
        }
        else if(grade>=70){
            document.getElementById("TPercent").innerHTML = ((obtain/500)*100).toFixed(2) + "%";
            document.getElementById("TGrade").innerHTML="A"
            document.getElementById("Tremarks").innerHTML='Qualified'
            document.getElementById("Tremarks").style.color= "green"
        }
        else if(grade>=60){
            document.getElementById("TPercent").innerHTML = ((obtain/500)*100).toFixed(2) + "%";
            document.getElementById("TGrade").innerHTML= "B"
            document.getElementById("Tremarks").innerHTML='Qualified'
            document.getElementById("Tremarks").style.color= "green"
        }
        else if(grade>=50){
            document.getElementById("TPercent").innerHTML = ((obtain/500)*100).toFixed(2) + "%";
            document.getElementById("TGrade").innerHTML= "C"
            document.getElementById("Tremarks").innerHTML='Qualified'
            document.getElementById("Tremarks").style.color= "green"
        }
        else{
            document.getElementById("TPercent").innerHTML = ((obtain/500)*100).toFixed(2) + "%";
            document.getElementById("TGrade").innerHTML= "D"
            document.getElementById("Tremarks").innerHTML='Dis-Qualified'
            document.getElementById("Tremarks").style.color= "red"
        }
    }

function Required(){
    alert('Enter the field')
}

    

    
}